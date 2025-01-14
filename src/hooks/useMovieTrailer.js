import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filteredTrailers = json.results.filter(video => video.type === 'Trailer');
        const trailer = filteredTrailers.length==0 ? filteredTrailers[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos(movieId);
    }, []);
}
export default useMovieTrailer