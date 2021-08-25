import React, {useState, useEffect} from "react";
import ReactLoading from 'react-loading';
import HomeIcon from '@material-ui/icons/Home';


function MovieDetail(props){
    const {movie_detail} = props;
    const img_url = `https://image.tmdb.org/t/p/w400${movie_detail.poster_path}`;
    const HH = parseInt(movie_detail.runtime / 60);
    const MM = movie_detail.runtime % 60;
    const year = new Date(movie_detail.release_date).getFullYear();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        console.log("time fired!!");
        console.log(isLoading)
        }, 1000);
        return () => clearTimeout(timer)
    }, [])
    // console.log(pComp);
    return(
        <>  
            {isLoading ? 
            <>
                <ReactLoading type="spin" color="#00f" className="center-loading" height={200} width={200} />
            </>
            :
            <>
                <div className="top-bar page">
                    <div className="page-title">
                        <h1>Movie Detail</h1>
                    </div>
                    <div className="side-home-icon">
                    <HomeIcon className="home-icon"/>
                    </div>
                </div>
                <div className="movie-container">
                <div className="movie-poster">
                    <img src={img_url} alt="#" width="375" height="400"/>
                </div>
                <div className="movie-detail">
                    <div className="title">
                        <h1>{movie_detail.title}</h1>
                        <p>({movie_detail.vote_average})</p>
                    </div>
                    <div className="basic-info">
                        <h4>{movie_detail.release_date}</h4>
                        <h4> | {HH} : {MM}</h4>
                        <h4> | {year}</h4>
                    </div>
                    <div className="cast">
                        <h4>Production Companies: {movie_detail.production_companies.map((movie, i) => {
                            return <> {movie.name},</>

                        })}</h4>
                    </div>
                    <div className="description">
                        <p>Description: {movie_detail.overview}</p>
                    </div>
                </div>
            </div>

            </>
            }
        </>
    )
}
export default MovieDetail;