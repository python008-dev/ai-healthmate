import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Message } from '@/types';
import { Bot, User } from 'lucide-react';
import clsx from 'clsx';
import { TextToSpeechButton } from './TextToSpeechButton';

interface MessageBubbleProps {
    message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
    const isUser = message.role === 'user';

    return (
        <div className={clsx("flex gap-4 w-full max-w-4xl mx-auto p-4", isUser ? "flex-row-reverse" : "flex-row")}>
            <div className={clsx("w-8 h-8 rounded-full flex items-center justify-center shrink-0", isUser ? "bg-blue-500" : "bg-green-600")}>
                {isUser ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
            </div>

            <div className={clsx("flex flex-col w-full", isUser ? "items-end" : "items-start")}>
                <div className={clsx("px-4 py-3 rounded-2xl text-sm leading-relaxed w-full max-w-3xl",
                    isUser ? "bg-blue-500 text-white rounded-tr-none" : "bg-white text-gray-800 rounded-tl-none shadow-sm border"
                )}>
                    {message.attachment && (
                        <img src={message.attachment} alt="User upload" className="max-w-xs rounded-lg mb-3 border" />
                    )}
                    <div className="prose prose-sm max-w-none prose-headings:mt-3 prose-headings:mb-2 prose-p:my-2 prose-ul:my-2 prose-li:my-1">
                        <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                    {!isUser && message.content && message.content.length > 100 && (
                        <TextToSpeechButton text={message.content} />
                    )}
                </div>
            </div>
        </div>
    );
};
