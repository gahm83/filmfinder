import { queryOpts } from "./queryMovies";

export interface MoviesRepository {
  getMovies: (params: queryOpts) => Promise<any>
}
