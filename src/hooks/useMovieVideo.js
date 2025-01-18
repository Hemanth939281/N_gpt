import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant"
import { useDispatch, useSelector} from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
const useMovieVideo = (movieId) => {
    const movieVideo = useSelector((store) => store.movies.movieVideo);
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filteredVideos = json.results.filter(video => video.type === 'Featurette');
        // const trailer = filteredTrailers.length==0 ? filteredTrailers : json.results[0];
        dispatch(addMovieVideo(filteredVideos));
    }

    useEffect(() => {
        if (!movieVideo){
            getMovieVideos(movieId);
        }
    }, []);
}
export default useMovieVideo;