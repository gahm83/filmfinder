'use client'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [keyword, setKeyword] = useState('');

  const onSubmit = (data) => {
    setKeyword(data.keyword);
    // onSearch(data.keyword);
    console.log(data.keyword)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="flex items-center justify-center">
        <input
          type="text"
          {...register('keyword', { required: true })}
          placeholder="Enter keyword"
          class="w-full max-w-64 outline-none"
        />
        <button type="submit" class="appearance-none h-12">Search</button>
      </div>
        {errors.keyword && <span>Keyword is required</span>}
    </form>
  );
}
