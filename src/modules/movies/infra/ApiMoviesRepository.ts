import { queryOpts } from "../domain/queryMovies";
import { MoviesRepository } from "../domain/moviesRepository";
import { Movies } from "../domain/Movies";

const API_URL = `${process.env.NEXT_API_URL}/search/movie`;
const API_KEY = process.env.NEXT_API_KEY;

const HEADERS = {
  "Content-Type": "application/json",
};

export function ApiMoviesRepository(): MoviesRepository {
  async function getMovies(params: queryOpts): Promise<Movies[]> {
    const keys = Object.keys(params) as Array<keyof typeof params>;
    let queryString = keys
      .map((key) => (params?.[key] ? key + '=' + params?.[key] : key))
      .join('&');
    queryString = queryString ? `?${queryString}&api_key=${API_KEY}` : `?query=Batman&language=en&api_key=${API_KEY}`;
    console.log({ queryString });
    const response = await fetch(`${API_URL}${queryString}`, {
      method: 'GET',
      headers: HEADERS,
      next: { revalidate: 60 }
    });
    const res = await response.json();
    console.log('..................', res.total_results, `${API_URL}${queryString}`)
    const data = res?.results?.length ? res?.results : []
    return data
  }

  return {
    getMovies,
  };
}
