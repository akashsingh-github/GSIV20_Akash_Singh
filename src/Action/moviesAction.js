import UNIVERSAL from "../Config/config";
import {
    GET_MOVIE_DETAIL,
    GET_UPCOMING_MOVIES,
    GET_SEARCH_RESULT
} from "../Constant/moviesConst";

export const getUpcomingMovies = payload => ({
    type: GET_UPCOMING_MOVIES,
    payload
})

export const get_upcoming_movies = () => dispatch => {
    fetch(UNIVERSAL.BASEURL + 'upcoming?api_key=' + UNIVERSAL.TOKEN_KEY)
        .then(res => res.json())
        .then(res => {
            dispatch(getUpcomingMovies(res.results))
        })
        .catch(err => {
            console.log(err);
        })
}

export const getMovieDetail = payload => ({
    type: GET_MOVIE_DETAIL,
    payload
})

export function get_movie_detail(movie_id){
    return dispatch => {
        fetch(`${UNIVERSAL.BASEURL}/${movie_id}?api_key=${UNIVERSAL.TOKEN_KEY}`)
            .then(res => res.json())
            .then(res => {
                dispatch(getMovieDetail(res))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const getSearchResult = payload => ({
    type: GET_SEARCH_RESULT,
    payload
})
export function get_search_result(query){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${UNIVERSAL.TOKEN_KEY}&query=${query}`)
            .then(res => res.json())
            .then(res => {
                dispatch(getSearchResult(res.results))
            })
            .catch(err => {
                console.log(err);
            })
    }
}