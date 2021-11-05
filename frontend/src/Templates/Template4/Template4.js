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

    const user = {
        name:"Anush Deokar",
        Brief:"Front end Developer",
        About:"I'm Anush Deokar. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from 2020. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you",
        Projects:[
            {
              name:"Animal Shelter",
              year:"2019",
              img:"",
              Description:"One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
            },
            {
              name:"Juntanet",
              year:"2020",
              img:"",
              Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
        ],
        Skills:["HTML", "CSS", "Python", "C++"],
        Experience:[
          {
            jobtitle:"Front-end Developer",
            from:"2019",
            to:"2020",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ],
        Contact:{
          email:"abc@gmail.com",
          phoneno:"1234567890",
        },
        profiles:[
          {
          website:"linkedin",
          url:"https://linkedin.com",
        }
      ]
    }
    
    return (
        <ThemeProvider theme={theme}>
            <Section1/>
            <About/>
            <Projects/>
            <Skills/>
        </ThemeProvider>
    )
}