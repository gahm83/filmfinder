export const revalidate = 60;
import Link from "next/link";
import Image from "next/image";
import { ApiMoviesRepository } from '@/modules/movies/infra/ApiMoviesRepository';
import { getMovies } from "@/modules/movies/application/getAll/getMovies";
import { Counter } from "@/components/counter/Counter";
import { MovieList } from "@/components/MovieList";
import { SearchForm } from "@/components/SearchForm";

const apiMoviesRepository = ApiMoviesRepository()

export default async function Home() {
  const movies = await getMovies(apiMoviesRepository)({})
  console.log(movies)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/movies">Movies</Link>
      {/* <Counter /> */}
      <SearchForm />
      <MovieList movies={movies}/>
    </main>
  );
}
