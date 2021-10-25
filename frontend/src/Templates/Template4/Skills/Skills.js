import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { TechStack } from './TechStack';
import {Fa500Px} from "react-icons/fa";

const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        backgroundColor: '#1f1f1f',
        height: '30vh',
        paddingTop: "50px",
        fontFamily:"Montserrat",
    },
    subDiv: {
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Montserrat",
        fontSize: "30px",
    },heade:{
        fontFamily:"Montserrat",
        color:"white"
    }

});


export const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainDiv}>
            <Typography  className={classes.heade}variant="h4" align="center">Skills</Typography>
            {TechStack.map((t) => {
                <Fa500Px color="white"/>
            })
            }
        </div>
    )

}