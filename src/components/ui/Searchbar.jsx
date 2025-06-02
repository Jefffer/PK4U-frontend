import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
        </svg>
      </div>
      <input
        type="text"
        className="w-full p-3 pl-10 text-sm text-slate-900 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:ring-sky-500 focus:border-sky-500 dark:placeholder-slate-400"
        placeholder="Busca tu parking aquí..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;