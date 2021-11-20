import React from 'react'
import { Section1 } from './section1/section1'
import {  createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { blue} from "@material-ui/core/colors";
import {Skills} from './Skills/Skills';
import { About } from './About/About';
import { Projects } from './Projects/Projects';


const theme = createTheme({
    palette: {
      // primary: {
      //   // main: "#fefefe",
      // },
      secondary: blue
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

export const Template4 = (props) => {
    console.log(props, "t4");
    return (
        <ThemeProvider theme={theme}>
            <Section1 data={props.details}/>
            <About data={props.details.pages}/>
            <Projects props={props}/>
            <Skills data={props.details}/>
        </ThemeProvider>
    )
}