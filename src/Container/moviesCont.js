import React from "react";
import {connect} from "react-redux";
import {
    get_upcoming_movies,
    get_movie_detail,
    get_search_result
} from "../Action/moviesAction";

import Movies from "../Component/Movies";

class MoviesCont extends React.Component{
    componentDidMount(){
        this.props.get_upcoming_movies();
        this.props.get_movie_detail();
        this.props.get_search_result();
    }

    render(){
        return <Movies {...this.props}/>
    }
}
const mapStateToProps = (store) => ({
    search_result: store.movies.search_result,
    upcoming_movies : store.movies.upcoming_movies
})

const mapDispatchToProps = dispatch => ({
    get_upcoming_movies: () => dispatch(get_upcoming_movies()),
    get_movie_detail: (id) => dispatch(get_movie_detail(id)),
    get_search_result: (query) => dispatch(get_search_result(query))
})
export default connect(mapStateToProps, mapDispatchToProps)(MoviesCont);