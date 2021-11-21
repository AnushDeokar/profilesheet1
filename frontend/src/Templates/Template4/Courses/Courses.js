import React from 'react'
import Container from '@mui/material/Container';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {CourseList} from './CourseList';
import Link from '@mui/material/Link';


const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        backgroundColor: '#e9d5a1',
        height: 'auto',
        padding:"50px",
        paddingTop: "50px"
    },
    subDiv: {
        justifyContent: "center",
        textAlign: "center",
        // position: "relative",
        fontFamily: "Montserrat",
        fontSize: "20px",
    },
    mainpic: {
        margin: "10px",
    },
    year: {
        backgroundColor: "grey",
        width: "40px",
        color: "white",
        textAlign: "center",
        margin: "auto"
    },
    ourcard:{
      
    height: '20vw',
        '&:hover': {
            boxShadow: "0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
         },
    },
    root: {
        display:'flex',
        justifyContent: 'space-between',

      }  

});

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

// console.log(ProjectDetails);

export const Courses = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
//   const handleClose = () => {setOpen(false);}
    return (
        <div className={classes.mainDiv}>
            <Typography variant="h3" align="center">Courses</Typography>

            <Container>
                <Grid container spacing={3} style={{marginTop:"30px"}}>
                {CourseList.map((data) => (
                    <Grid  key={data.id} item sm={12} xs={12} md={4} lg={4}>
                    
                    <Card >
                        <CardActionArea >
                            <CardContent>
                                
                                <Typography variant="h5" component="div" align="center">
                                {data.title}
                                </Typography>
                                <br/>
                                <Typography sx={{ mb: 1.5 }} align="center" >
                                {data.code}
                                </Typography>
                            
                                <br />
                                
                            </CardContent>
                       
                       </CardActionArea>
                        <CardActions className={classes.root}>

                            <Button size="small">
                                <Link href={data.meet} style={{ textDecoration: 'none' }}>
                                    Meet
                                </Link>    
                                </Button>
                                
                            <Button size="small">
                                <Link href={data.classroom} style={{ textDecoration: 'none' }}>
                                    classroom
                                </Link>
                                </Button>
                        </CardActions>
                    </Card>

                            
                    </Grid> 
                ))
                }     
                </Grid>
            </Container>
        </div>


    )

}