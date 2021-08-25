import React from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import moviesCont from "../Container/moviesCont";
import MovieDetail from "../Container/movieDetail";

class Routes extends React.Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={moviesCont}/>
                        <Route exact path="/detail" component={MovieDetail}/>
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}
export default Routes;