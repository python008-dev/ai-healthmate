"use client";

import React, { useState } from 'react';
import { Volume2, VolumeX, Pause } from 'lucide-react';

interface TextToSpeechButtonProps {
    text: string;
}

export const TextToSpeechButton: React.FC<TextToSpeechButtonProps> = ({ text }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const cleanText = (markdown: string): string => {
        // Remove markdown formatting for better speech
        return markdown
            .replace(/#{1,6}\s/g, '') // Remove headers
            .replace(/\*\*/g, '') // Remove bold
            .replace(/\*/g, '') // Remove italic
            .replace(/`/g, '') // Remove code markers
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links, keep text
            .replace(/^[-*+]\s/gm, '') // Remove list markers
            .replace(/^\d+\.\s/gm, '') // Remove numbered list markers
            .replace(/\n{3,}/g, '\n\n'); // Reduce multiple line breaks
    };

    const speakText = () => {
        if (!('speechSynthesis' in window)) {
            alert('Sorry, your browser does not support text-to-speech.');
            return;
        }

        const speech = window.speechSynthesis;

        if (isPlaying && !isPaused) {
            // Pause
            speech.pause();
            setIsPaused(true);
        } else if (isPaused) {
            // Resume
            speech.resume();
            setIsPaused(false);
        } else {
            // Start new speech
            const cleanedText = cleanText(text);
            const utterance = new SpeechSynthesisUtterance(cleanedText);

            utterance.rate = 0.9; // Slightly slower for better understanding
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            utterance.lang = 'hi-IN'; // Hindi India - supports both Hindi and English

            utterance.onstart = () => {
                setIsPlaying(true);
                setIsPaused(false);
            };

            utterance.onend = () => {
                setIsPlaying(false);
                setIsPaused(false);
            };

            utterance.onerror = () => {
                setIsPlaying(false);
                setIsPaused(false);
            };

            speech.speak(utterance);
        }
    };

    const stopSpeech = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setIsPaused(false);
        }
    };

    return (
        <div className="flex gap-2 mt-3">
            <button
                onClick={speakText}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                title={isPaused ? "Resume reading" : isPlaying ? "Pause reading" : "Read report aloud"}
            >
                {isPaused ? (
                    <>
                        <Volume2 size={18} />
                        <span>Resume</span>
                    </>
                ) : isPlaying ? (
                    <>
                        <Pause size={18} />
                        <span>Pause</span>
                    </>
                ) : (
                    <>
                        <Volume2 size={18} />
                        <span>🔊 Report Suniye</span>
                    </>
                )}
            </button>

            {isPlaying && (
                <button
                    onClick={stopSpeech}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm font-medium"
                    title="Stop reading"
                >
                    <VolumeX size={18} />
                    <span>Stop</span>
                </button>
            )}
        </div>
    );
};
