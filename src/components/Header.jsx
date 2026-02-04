import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';
import SearchResults from '../pages/SearchResults';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
     
        <nav className="header-nav">
          <NavLink className={({ isActive }) => isActive ? "header-link active" : "header-link"} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "header-link active" : "header-link"} to="/watchlist">Watchlist</NavLink>
          <NavLink className={({ isActive }) => isActive ? "header-link active" : "header-link"} to="/favorites">Favorites</NavLink>
          {/* <NavLink className={({ isActive }) => isActive ? "header-link active" : "header-link"} to="/search">Search</NavLink> */}
        </nav>
      </div>
      <div className="header-search">
        <SearchBar  />
      </div>
    </header>
  );
}