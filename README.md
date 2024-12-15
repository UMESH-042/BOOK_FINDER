# 📚 BookFinder

BookFinder is a modern web application that allows users to search and explore millions of books from the Open Library collection. Built with React, TypeScript, and Tailwind CSS, it provides a beautiful and intuitive interface for discovering your next great read.

## ✨ Features

- 🔍 Search books by title, author, or subject
- 📖 View detailed book information including:
  - Cover images
  - Author details
  - Publication information
  - Book descriptions
  - Subject categories
- ⚡️ Real-time search with debouncing
- 📱 Fully responsive design
- 🎨 Beautiful UI with smooth animations
- 🔄 Loading states and error handling
- 🌐 SEO optimized

## 🛠️ Technology Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Open Library API
- **SEO**: React Helmet Async
- **Build Tool**: Vite
- **Package Manager**: npm

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/UMESH-042/BOOK_FINDER.git
   cd BOOK_FINDER
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── services/         # API and other services
├── types/            # TypeScript type definitions
├── App.tsx           # Root component
└── main.tsx         # Application entry point
```

## 🔍 API Integration

BookFinder uses the Open Library API to fetch book data:
- Search API: `https://openlibrary.org/search.json`
- Book Details: `https://openlibrary.org/works/{id}.json`
- Author Details: `https://openlibrary.org/authors/{id}.json`

## 🎨 UI Components

- **SearchBar**: Search input with type selection
- **BookGrid**: Responsive grid layout for book cards
- **BookCard**: Individual book preview card
- **BookDetails**: Detailed book information page
- **ErrorMessage**: Error display component
- **Header**: Application header with branding

## 🪝 Custom Hooks

- **useBooks**: Manages book search state and API calls
- **useBookDetails**: Handles book and author details fetching
- **useDebounce**: Implements search input debouncing

## 🌐 SEO

The application is SEO-optimized using React Helmet Async, including:
- Dynamic page titles and meta descriptions
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URLs
- Proper heading hierarchy

## 📱 Responsive Design

BookFinder is fully responsive and works great on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Open Library](https://openlibrary.org/) for providing the API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images
