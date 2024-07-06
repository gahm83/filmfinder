"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import { setQuery, setResults } from "@/redux/features/searchSlice";

// import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      router.push(`/movie?search&query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex items-center bg-white p-4 rounded shadow">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-700 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};