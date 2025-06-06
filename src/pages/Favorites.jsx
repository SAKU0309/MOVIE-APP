import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/moviecard";

function Favorites() {
    const { favorites } = useMovieContext();

    const hasFavorites = Array.isArray(favorites) && favorites.length > 0;

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            {hasFavorites ? (
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorite Movie Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here!</p>
                </div>
            )}
        </div>
    );
}

export default Favorites;
