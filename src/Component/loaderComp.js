import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';


export default class LoaderComp extends React.Component{
    render(){
        const {loader} = this.props;
        return (
            <Dialog
              open={loader.open}
              
              aria-labelledby="Loading..."
            >
              <DialogTitle id="simple-dialog-title">
                <CircularProgress />
              </DialogTitle>
            </Dialog>
          );
    }
}