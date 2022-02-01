import {combineReducers} from "redux";
import movies from "./moviesReducer";
import loader from "./loaderReducer";
export default combineReducers({
    movies,
    loader
});
