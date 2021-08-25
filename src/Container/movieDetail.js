import React from "react";
import {connect} from "react-redux";
import {
    get_movie_detail
} from "../Action/moviesAction";

import MovieDetail from "../Component/Movies/movieDetail";

class MoviesDetail extends React.Component{
    componentDidMount(){
        // this.props.get_movie_detail();
    }

    render(){
        return <MovieDetail {...this.props}/>
    }
}
const mapStateToProps = (store) => ({
    movie_detail : store.movies.movie_detail
})

const mapDispatchToProps = dispatch => ({
    // get_movie_detail: (movie_id) => dispatch(get_movie_detail(movie_id))
})
export default connect(mapStateToProps, mapDispatchToProps)(MoviesDetail);