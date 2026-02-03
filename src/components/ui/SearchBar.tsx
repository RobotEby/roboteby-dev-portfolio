import { useState, KeyboardEvent } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder = 'Buscar por título...', onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex gap-2 mb-6">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 input-terminal rounded text-sm"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-secondary border border-border text-secondary-foreground 
                   hover:border-primary hover:text-primary transition-all duration-150 
                   rounded text-sm glow-border"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
