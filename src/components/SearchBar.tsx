import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
  searchType: string;
  setSearchType: (type: string) => void;
}

export default function SearchBar({ query, setQuery, onSearch, searchType, setSearchType }: SearchBarProps) {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex gap-2 mb-4">
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
        </select>
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder={`Search by ${searchType}...`}
            className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={onSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}