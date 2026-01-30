import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
     
        <nav className="header-nav">
          <Link to="/" className="header-link">Home</Link>
          <Link to="/watchlist" className="header-link">Watchlist</Link>
          <Link to="/favorites" className="header-link">Favorites</Link>
        </nav>
      </div>
      <div className="header-search">
        <SearchBar />
      </div>
    </header>
  );
}