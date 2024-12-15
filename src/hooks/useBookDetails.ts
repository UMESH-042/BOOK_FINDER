import { useState, useEffect } from 'react';
import { getBookDetails, getAuthorDetails } from '../services/api';
import type { BookDetails } from '../types/book';

interface Author {
  name: string;
  key: string;
  birth_date?: string;
  death_date?: string;
  bio?: string;
}

export function useBookDetails(bookKey: string) {
  const [book, setBook] = useState<BookDetails | null>(null);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    async function fetchBookDetails() {
      if (!bookKey) return;

      try {
        setLoading(true);
        setError('');
        
        const bookData = await getBookDetails(bookKey);
        
        if (!mounted) return;
        
        setBook(bookData);

        if (bookData.authors?.length) {
          const authorPromises = bookData.authors.map(async (author: any) => {
            try {
              return await getAuthorDetails(author.author.key);
            } catch (err) {
              console.error('Failed to fetch author details:', err);
              return { name: 'Unknown Author', key: author.author.key };
            }
          });

          const authorData = await Promise.all(authorPromises);
          if (mounted) {
            setAuthors(authorData);
          }
        }
      } catch (err) {
        console.error('Failed to fetch book details:', err);
        if (mounted) {
          setError('Failed to fetch book details. Please try again.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchBookDetails();

    return () => {
      mounted = false;
    };
  }, [bookKey]);

  return { book, authors, loading, error };
}