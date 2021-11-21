import './App.css';
// import {Template1} from "./Templates/Template12/Template1";
// import {Template2} from "./Templates/Template2/Template2";
// import {Login} from "./Components/Login/Login";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
// import {Header} from "./Components/Header/Header";
// import {Form} from "./Components/Form/Form";
// import {Intro} from "./Components/Intro/Intro";
// import TemplateCard from "./Components/TemplateCard/TemplateCard";

// import { Template4 } from './Templates/Template4/Template4';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Master from './Templates/master';
import { CourseComponent } from './Templates/Template4/Courses/CourseComponent';
// import  Courses  from './Templates/Template4/Courses/Courses';



const theme = createTheme({

  typography: {
    fontFamily: "Montserrat",
  },
});


function App() {
  return (
    
        <MuiThemeProvider theme={theme}>
          {/* <Master/> */}
       
          <CourseComponent/>
        </MuiThemeProvider>
  
  );
}

export default App;
