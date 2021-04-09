import React from "react";
import { makeStyles, CircularProgress, Backdrop } from "@material-ui/core";
import LoadingStyles from "../../assets/jss/layouts/Loader";

const useStyles = makeStyles(LoadingStyles);

const Loading = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
export default Loading;
