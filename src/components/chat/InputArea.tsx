import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface InputAreaProps {
    onSend: (text: string, image?: string) => void;
    disabled?: boolean;
}

export const InputArea: React.FC<InputAreaProps> = ({ onSend, disabled }) => {
    const [text, setText] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Speech Recognition Setup
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).webkitSpeechRecognition) {
            const SpeechRecognition = (window as any).webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US'; // Default to English, could be dynamic

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setText((prev) => prev + " " + transcript);
                setIsRecording(false);
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error("Speech recognition error", event.error);
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                setIsRecording(false);
            };
        }
    }, []);

    const toggleRecording = () => {
        if (isRecording) {
            recognitionRef.current?.stop();
        } else {
            recognitionRef.current?.start();
            setIsRecording(true);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = () => {
        if (!text.trim() && !imagePreview) return;
        onSend(text, imagePreview || undefined);
        setText("");
        setImagePreview(null);
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            {imagePreview && (
                <div className="relative w-fit mb-2">
                    <img src={imagePreview} alt="Preview" className="h-20 rounded-lg border border-gray-200" />
                    <button
                        onClick={() => setImagePreview(null)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                        <X size={12} />
                    </button>
                </div>
            )}

            <div className="flex items-end gap-2 bg-white p-2 rounded-xl border shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50 transition-all">
                <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Upload Image"
                    disabled={disabled}
                >
                    <ImageIcon size={20} />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                        }
                    }}
                    placeholder="Describe your symptoms or upload a report..."
                    className="flex-1 max-h-32 min-h-[44px] py-2 px-2 bg-transparent border-none focus:ring-0 resize-none text-gray-700 placeholder:text-gray-400"
                    rows={1}
                    disabled={disabled}
                />

                <button
                    onClick={toggleRecording}
                    className={clsx(
                        "p-2 rounded-lg transition-colors",
                        isRecording ? "text-red-500 bg-red-50 animate-pulse" : "text-gray-400 hover:text-blue-500 hover:bg-blue-50"
                    )}
                    title="Voice Input"
                    disabled={disabled}
                >
                    <Mic size={20} />
                </button>

                <button
                    onClick={handleSend}
                    disabled={(!text.trim() && !imagePreview) || disabled}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {disabled ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
            </div>
        </div>
    );
};
