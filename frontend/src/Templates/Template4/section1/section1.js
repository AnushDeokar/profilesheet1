import React from 'react'
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import { makeStyles, Typography } from '@material-ui/core';
import Typical from "react-typical";

const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        backgroundColor: '#e9d5a1',
        height:'100vh'
    },
    subDiv:{
        justifyContent: "center",
        textAlign: "center",
        // position: "relative",
        fontFamily: "Montserrat",
        fontSize:"20px",
    },

}); 

export const Section1 = () => {
    var titles =['', 1000, 'Frontend Web Developer', 500];
    const classes = useStyles();



    return (
        <div className={classes.mainDiv}>
            <div className={classes.subDiv}>
                <DesktopMacIcon className={classes.wrapIcon} sx={{ fontSize: 250}}  />

                <Typography style={{ fontWeight: 800 }} variant="h3">Anush Deokar</Typography>
                <div className="title-container">
                <Typical className="title-styles" steps={titles} loop={50} />
                </div>
            </div>
        </div>
    )
}