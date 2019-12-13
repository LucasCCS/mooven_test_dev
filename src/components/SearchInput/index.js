import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./styles/SearchInput.css";
export default function SearchInput() {
  return (
    <div className="mv-search">
      <div className="mv-search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        className="mv-search-input"
        placeholder="Buscar usuário"
      />
    </div>
  );
};