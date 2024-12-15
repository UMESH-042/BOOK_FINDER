import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="flex items-center gap-2 p-4 text-red-700 bg-red-100 rounded-lg">
      <AlertCircle size={20} />
      <p>{message}</p>
    </div>
  );
}