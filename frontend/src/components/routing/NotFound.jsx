import React from "react";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import { Box } from "@chakra-ui/core";
import NotFoundStyles from "../../assets/jss/layouts/NotFound";

const useStyles = makeStyles(NotFoundStyles);

const NotFound = () => {
  const classes = useStyles();

  return (
    <Box height="33vh" margin="10rem auto" width={{ sm: "80%", md: "40%" }}>
      <Paper className={classes.paper} elevation={3}>
        <Typography
          style={{ letterSpacing: "0.5rem", color: "red" }}
          align="center"
          variant="h4"
        >
          404 Not Found!
        </Typography>
      </Paper>
    </Box>
  );
};

export default NotFound;
