import {
    GET_MOVIE_DETAIL,
    GET_UPCOMING_MOVIES,
    GET_SEARCH_RESULT
} from "../Constant/moviesConst";
import {LOADER} from "../Constant/loaderConst";
const initialState = {
    upcoming_movies : [],
    movie_detail : {},
    search_result : [],
    loading: false
}
export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_UPCOMING_MOVIES:
            return {
                ...state,
                upcoming_movies: action.payload,
            }
            
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movie_detail: action.payload
            }
        
        case GET_SEARCH_RESULT:
            return {
                ...state,
                search_result: action.payload
            }
        case LOADER:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
