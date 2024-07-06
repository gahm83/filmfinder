import { Movies } from "@/modules/movies/domain/Movies";

export const MovieList = ({movies}: { movies: Movies[] }) => {
  
  console.log(movies);

  return (
    <section>
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-10 gap-5">
          {
            movies && movies.map((movie) => (
              <div key={movie.id}>
                <figure>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="w-full" />
                </figure>
              <h2 className="text-xl">{`${movie.title}, ${movie.release_date.split("-")[0]}`}</h2>
              {/* <p>{movie.overview}</p> */}
            </div>))
          }
        </div>
      </div>
    </section>
  );
};