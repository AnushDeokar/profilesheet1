import logo from './logo.svg';
import './App.css';
import {Template1} from "./Templates/Template12/Template1";
import {Template2} from "./Templates/Template2/Template2";
import {Login} from "./Components/Login/Login";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {Header} from "./Components/Header/Header";
import {Form} from "./Components/Form/Form";
import {Intro} from "./Components/Intro/Intro";
import TemplateCard from "./Components/TemplateCard/TemplateCard";

import { Template4 } from './Templates/Template4/Template4';





const theme = createTheme({

  typography: {
    fontFamily: "Montserrat",
  },
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <Header />
      <Intro />
      <TemplateCard />
      <Login /> */}
      {/* <Template4 /> */}
      <Template4/>
      {/* <Template1 /> */}
      {/* <Form/> */}

    </MuiThemeProvider>
  );
}

export default App;
