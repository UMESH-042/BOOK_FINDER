const BASE_URL = 'https://openlibrary.org';

export async function searchBooks(searchType: string, query: string) {
  const searchParam = searchType === 'title' ? 'title' : 
                     searchType === 'author' ? 'author' : 'subject';
  
  const response = await fetch(
    `${BASE_URL}/search.json?${searchParam}=${encodeURIComponent(query)}&limit=20`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch books: ${response.statusText}`);
  }
  
  return response.json();
}

export async function getBookDetails(key: string) {
  // Add /works/ prefix if not present
  const workKey = key.startsWith('/works/') ? key : `/works/${key}`;
  
  const response = await fetch(`${BASE_URL}${workKey}.json`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch book details: ${response.statusText}`);
  }
  
  return response.json();
}

export async function getAuthorDetails(key: string) {
  // Add /authors/ prefix if not present
  const authorKey = key.startsWith('/authors/') ? key : `/authors/${key}`;
  
  const response = await fetch(`${BASE_URL}${authorKey}.json`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch author details: ${response.statusText}`);
  }
  
  return response.json();
}