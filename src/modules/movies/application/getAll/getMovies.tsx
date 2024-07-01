import { MoviesRepository } from '@/modules/movies/domain/moviesRepository'
import { queryOpts } from '@/modules/movies/domain/queryMovies'

export function getMovies(moviesRespository: MoviesRepository) {
  return async (params: queryOpts): Promise<any> => {
    return await moviesRespository.getMovies(params)
  }
}
