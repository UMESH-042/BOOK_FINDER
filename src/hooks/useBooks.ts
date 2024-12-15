import { useState } from 'react';
import { searchBooks } from '../services/api';
import type { Book } from '../types/book';

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchForBooks = async (searchType: string, query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');

    try {
      const data = await searchBooks(searchType, query);
      setBooks(data.docs);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { books, loading, error, searchForBooks };
}