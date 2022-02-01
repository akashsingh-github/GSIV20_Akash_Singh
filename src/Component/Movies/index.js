import React, {useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import MovieCard from "./movieCard";
function Movies(props){
    const {
        get_movie_detail,
        movie_detail,
        get_search_result
    } = props;
    
    const upcomingMovies =  props.upcoming_movies;
    const searchedMovies =  props.search_result;
    const [isSearched, setIsSearched] = useState(false);

    const sortedUpcomingMovies = upcomingMovies.sort(function(a,b){
        return new Date(b.release_date) - new Date(a.release_date);
    })
    
    const moviesMap = sortedUpcomingMovies.map((movie, i) => {
        return <MovieCard key={movie.id} movie_detail={movie_detail} get_movie_detail={get_movie_detail} id={movie.id} title={movie.title} rating={movie.vote_average} description={movie.overview} imgSrc={movie.poster_path}/> 
    })
    
    const handleChange = (query) => {
        if(query === ''){
            setIsSearched(false);
        }
        else{
            setIsSearched(true);
        }
        get_search_result(query);
    }

    if(isSearched){
        if(searchedMovies){
            var searchedMoviesMap = searchedMovies.map((movie, i) => {
                return <MovieCard movie_detail={movie_detail} get_movie_detail={get_movie_detail} id={movie.id} title={movie.title} rating={movie.vote_average} description={movie.overview} imgSrc={movie.poster_path}/> 
            })
        }
    }
    return(
        <>
            <div className="top-bar">
                <div className="search-box">
                    <SearchIcon className="search-icon"/>
                    <input type="text" placeholder="Search" onChange={(e) => handleChange(e.target.value)}/>
                </div>
                <div className="side-home-icon">
                <HomeIcon className="home-icon"/>
                </div>
            </div>
            <div className="movie-cards">
                {isSearched ? searchedMoviesMap : moviesMap}
            </div>
        </>
    )
}
export default Movies;