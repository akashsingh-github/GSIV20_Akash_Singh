import React from "react";
import { connect } from "react-redux";
import LoaderComp from "../Component/loaderComp";
import {
    setLoader,
    unsetLoader
} from "../Action/loaderAction";

const mapStateToProps = store => ({
    loader: store.loader
});
const mapDispatchToProps = dispatch => ({
        setLoader: () => {dispatch(setLoader());},
        unsetLoader: () => {dispatch(unsetLoader());}
});
class LoaderCont extends React.Component{
    render(){
        return(
            <LoaderComp {...this.props} />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoaderCont);