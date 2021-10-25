import React from 'react'
import Container from '@mui/material/Container';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { ProjectDetails } from './ProjectDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Modal from '@mui/material/Modal';
import { ModalComponent } from './ModalComponent';



const useStyles = makeStyles({
    mainDiv: {
        width: "100vw",
        backgroundColor: '#e9d5a1',
        height: '100vh',
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
    }

});



console.log(ProjectDetails);

export const Projects = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);}
    return (
        <div className={classes.mainDiv}>
            <Typography variant="h3" align="center">Projects</Typography>

            <Container>
                <Grid container spacing={3} style={{marginTop:"30px"}}>
                    {ProjectDetails.map((data) => (
                        
                        
                        <Grid key={data.id} item sm={12} xs={12} md={4} lg={4}>
                            <Card className={classes.ourcard}>
                                <CardActionArea onClick={handleOpen}>
                                    <CardMedia
                                        className={classes.mainpic}
                                        component="img"
                                        height="140"
                                        image={data.img}
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Typography className={classes.year}>
                                            {data.year}
                                        </Typography>
                                        <Typography align="center" style={{marginTop:"7px"}} variant="h5">
                                            {data.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Modal
                              open={open}
                              onClose={handleClose}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <ModalComponent title={data.title} des={data.description}/>  
                              
                            </Modal>
                        </Grid>
                              
                    


                

                    ))
                    }
                </Grid>
            </Container>
        </div>


    )

}