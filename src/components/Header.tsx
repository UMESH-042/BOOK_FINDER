import React from 'react';
import { Library } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Library size={32} />
          <h1 className="text-3xl font-bold">BookFinder</h1>
        </div>
        <p className="text-center text-blue-100 max-w-2xl mx-auto">
          Discover millions of books from the Open Library collection. Search by title, author, or subject to find your next great read.
        </p>
      </div>
    </header>
  );
}