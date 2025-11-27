"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Message } from '@/types';
import { MessageBubble } from './MessageBubble';
import { InputArea } from './InputArea';
import { analyzeHealthData } from '@/lib/gemini';
import { Activity, Stethoscope } from 'lucide-react';

export const ChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'model',
            content: "Hello! I'm AI HealthMate. I can help you analyze symptoms or medical reports. You can speak to me or upload a photo.",
            timestamp: Date.now()
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (text: string, image?: string) => {
        const newUserMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: text,
            attachment: image,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, newUserMsg]);
        setIsLoading(true);

        try {
            const healthReport = await analyzeHealthData(text, image);

            const newAiMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'model',
                content: healthReport,
                timestamp: Date.now()
            };

            setMessages(prev => [...prev, newAiMsg]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                role: 'model',
                content: "I'm sorry, I encountered an error processing your request. Please try again.",
                timestamp: Date.now()
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <header className="bg-white border-b px-6 py-4 flex items-center gap-3 sticky top-0 z-10">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <Activity className="text-white" size={24} />
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-800">AI HealthMate</h1>
                    <p className="text-xs text-gray-500">Voice & Image Health Assistant</p>
                </div>
                <div className="ml-auto flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <Stethoscope size={16} />
                    <span>AI Doctor Mode</span>
                </div>
            </header>

            <main className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                {isLoading && (
                    <div className="flex gap-4 w-full max-w-3xl mx-auto p-4">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0 animate-pulse">
                            <Activity size={18} className="text-white" />
                        </div>
                        <div className="text-gray-500 text-sm flex items-center">
                            Generating health report...
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </main>

            <footer className="bg-white border-t p-4">
                <InputArea onSend={handleSendMessage} disabled={isLoading} />
                <p className="text-center text-xs text-gray-400 mt-2">
                    AI HealthMate can make mistakes. Consult a real doctor for serious issues.
                </p>
            </footer>
        </div>
    );
};
