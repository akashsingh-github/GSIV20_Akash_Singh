import React from "react";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Link } from "react-router-dom";

function MovieCard(props){
    const {id, title, rating, description, imgSrc, get_movie_detail} = props;
    const img_url = `https://image.tmdb.org/t/p/w400${imgSrc}`;

    const viewDetail = (id) => {
        get_movie_detail(id)
    }
    return(
        <>
            <li className="movie-card" onClick={() => viewDetail(id)}>
                <Link className="detail-link" to="/detail">
                    
                    <div className="movie-thumbnail">
                        <img src={img_url} alt={title}/>
                    </div>
                    <div className="movie-info">
                        <div className="movie-head">
                            <div className="movie-title">
                                <h4>{title}</h4>
                            </div>
                            <div className="movie-rating">
                                ({rating}/10)
                            </div>
                        </div>
                        <div className="movie-description">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}
export default MovieCard;