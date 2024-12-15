import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookGrid from '../components/BookGrid';
import ErrorMessage from '../components/ErrorMessage';
import { useBooks } from '../hooks/useBooks';
import { useDebounce } from '../hooks/useDebounce';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('title');
  const { books, loading, error, searchForBooks } = useBooks();
  const debouncedQuery = useDebounce(query);

  React.useEffect(() => {
    if (debouncedQuery) {
      searchForBooks(searchType, debouncedQuery);
    }
  }, [debouncedQuery, searchType]);

  const handleSearch = () => {
    if (query.trim()) {
      searchForBooks(searchType, query);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-6">
        <SearchBar
          query={query}
          setQuery={setQuery}
          searchType={searchType}
          setSearchType={setSearchType}
          onSearch={handleSearch}
        />
        
        <ErrorMessage message={error} />
        
        <BookGrid books={books} loading={loading} />
      </div>
    </main>
  );
}