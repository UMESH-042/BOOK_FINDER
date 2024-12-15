import React from 'react';
import { Link } from 'react-router-dom';
import { Book as BookIcon, User, Calendar } from 'lucide-react';
import type { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300&h=400';

  const bookKey = book.key.replace('/works/', '');

  return (
    <Link 
      to={`/book/${bookKey}`}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
    >
      <div className="aspect-[2/3] relative overflow-hidden">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
        <div className="space-y-2 text-sm text-gray-600">
          {book.author_name && (
            <div className="flex items-center gap-2">
              <User size={16} />
              <span className="line-clamp-1">{book.author_name[0]}</span>
            </div>
          )}
          {book.first_publish_year && (
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{book.first_publish_year}</span>
            </div>
          )}
          {book.subject && (
            <div className="flex items-center gap-2">
              <BookIcon size={16} />
              <span className="line-clamp-1">{book.subject[0]}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}