import React from 'react'
import './About1.css'
import logo from './img/banner-image.png'
import { Button, Grid } from '@mui/material'
import { makeStyles } from '@material-ui/core';
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


export const About1 = () => {
    var styles = {
        float: 'left'
    }
    const classes = useStyles();
    return (

        <div id="about1">
            <Grid container >
            <Grid className={classes.pad} item xs={12} md={6} lg={6}>
                
                    <h1>Hii I'm Anush</h1>
                    <h2>Senior Full Stack Web Developer!</h2>
                    <div>
                        {/* <button>Hire Me</button> */}
                        <Button variant="outlined">Hire Me</Button>
                        <Button variant="outlined">Resume</Button>
                        {/* <button>Resume</button> */}
                    </div>
                
                
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <ImageList sx={{ width: 800, height: 400 }} cols={3} rowHeight={164}>
            <ImageListItem >
                <img className={classes.imgi}src={logo} alt="No Image" />
            </ImageListItem>
                </ImageList>
            </Grid>
            </Grid>
            {/* <h2>This is about!</h2> */}
        </div>
    )
}
