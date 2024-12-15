import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Book as BookIcon, Calendar, User, Globe, Hash } from 'lucide-react';
import { useBookDetails } from '../hooks/useBookDetails';
import ErrorMessage from '../components/ErrorMessage';

export default function BookDetails() {
  const { bookKey } = useParams<{ bookKey: string }>();
  const { book, authors, loading, error } = useBookDetails(bookKey || '');

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <div className="bg-gray-200 aspect-[2/3] rounded-xl"></div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Search
        </Link>
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Search
        </Link>
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Book Not Found</h2>
          <p className="text-gray-600">The book you're looking for could not be found.</p>
        </div>
      </div>
    );
  }

  const coverUrl = book.covers?.[0]
    ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
    : 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600&h=800';

  const description = typeof book.description === 'object' 
    ? book.description.value 
    : book.description;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Search
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <img
            src={coverUrl}
            alt={book.title}
            className="w-full rounded-xl shadow-lg"
          />
          
          <div className="mt-6 space-y-4">
            {book.isbn_13 && book.isbn_13[0] && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Hash size={16} />
                <span>ISBN-13: {book.isbn_13[0]}</span>
              </div>
            )}
            {book.number_of_pages && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookIcon size={16} />
                <span>{book.number_of_pages} pages</span>
              </div>
            )}
            {book.publishers?.[0] && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Globe size={16} />
                <span>{book.publishers[0]}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          
          {authors.length > 0 && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <User size={20} />
              <span className="font-medium">
                {authors.map(author => author.name).join(', ')}
              </span>
            </div>
          )}

          {book.first_publish_date && (
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Calendar size={20} />
              <span>First published in {book.first_publish_date}</span>
            </div>
          )}

          {description && (
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-3">About this book</h2>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          )}

          {book.subjects && book.subjects.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Subjects</h2>
              <div className="flex flex-wrap gap-2">
                {book.subjects.slice(0, 10).map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}