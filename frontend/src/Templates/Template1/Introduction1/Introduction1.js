import React from "react";
import "./Introduction1.css";
import logo from "./img/about-us.png";
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const useStyles = makeStyles({
  imgi:{
     width:"50%",
     height:"auto", 
  },
  pad:{
      padding:"2%",
  }

});

export const Introduction1 = () => {
  const classes = useStyles();
  return (
    <div id="introduction-1">

      <Grid container >
            <Grid className={classes.pad} item xs={12} md={6} lg={6}>
            <ImageList sx={{ width: 800, height: 400 }} cols={2} rowHeight={164}>
              <ImageListItem >
        
              <img src={logo} alt="No Image" />
                </ImageListItem>
              </ImageList>
      </Grid>

      <Grid className={classes.pad} item xs={12} md={6} lg={6}>
        <h1>My Introduction</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquam
          odio maxime. Ea animi facere, vero molestiae perferendis dolores
          architecto facilis qui cupiditate eum nostrum repudiandae quos
          voluptatum natus? Necessitatibus dolore hic quisquam doloribus
          mollitia saepe asperiores quas praesentium, vel animi est optio ad
          ratione quis unde quibusdam iure atque soluta dignissimos porro
          repellendus ut! Distinctio, vitae! Qui dolorem error quasi enim neque
          blanditiis.
        </p>
        </Grid>

      </Grid>
    </div>
  );
};
