import {
    GET_MOVIE_DETAIL,
    GET_UPCOMING_MOVIES,
    GET_SEARCH_RESULT
} from "../Constant/moviesConst";

const initialState = {
    upcoming_movies : [],
    movie_detail : {},
    search_result : []
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
        default:
            return state;
    }
}
