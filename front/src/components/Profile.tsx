import React from "react";
import Basic from "./Basic";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Profile = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography
        className={classes.title}
        variant="h4"
        component="h2"
        color="primary"
      >
        基本情報
      </Typography>
      <Basic />
    </Container>
  );
};

export default Profile;
