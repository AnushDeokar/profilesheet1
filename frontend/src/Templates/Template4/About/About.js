import React from 'react';
import Avatar from '@mui/material/Avatar';
import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        height:'auto',
        paddingBottom:"70px",
        paddingTop:"70px"
    },
    subDiv:{
        justifyContent: "center",
        textAlign: "center",
        //position: "relative",
        fontFamily: "Montserrat",
        padding:"50px",
        fontSize:"20px",
    },

});
export const About = () =>{
    const classes = useStyles();
    return(
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <Typography variant="h4" marginTop="100px">
                    About Me
                </Typography>

                <div style={{marginTop: "50px"}}>
                <Grid container spacing={2}>

                <Grid item xs={12} md={6} lg={6}>
                <Avatar sx={{ width: 200, height: 200 }} style={{margin: "auto"}} src="/broken-image.jpg" />
                 </Grid>

                 <Grid item xs={12} md={6} lg={6}>
                    <Typography variant="h3" marginLeft="0">
                    Hi :)</Typography><br/>
                    <Typography>
👋 I'm Anush Deokar. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. 
What you are seeing now is portfolio template from 2020. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 
                    </Typography>
                 </Grid>
                </Grid>

                </div>
            </div>
        </div>
    )
}