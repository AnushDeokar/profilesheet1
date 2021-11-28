import React from 'react'
import { Section1 } from './section1/section1'
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue} from "@material-ui/core/colors";
import {Skills} from './Skills/Skills';
import { About } from './About/About';
import { Projects } from './Projects/Projects';
import { Courses} from './Courses/Courses';


const theme = createTheme({
    palette: {
      secondary: blue
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

export const Template4 = (props) => {
    // console.log(props, "t4");
    return (
        <ThemeProvider theme={theme}>
            <Section1 data={props.details}/>
            <About data={props.details.pages}/>
            <Projects data={props}/>
            <Courses data={props.details}/>
            <Skills data={props.details}/>
        </ThemeProvider>
    )
}