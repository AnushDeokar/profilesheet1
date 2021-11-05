import React from 'react'
import axios from 'axios';
import credentials from './credentials.json'
import { Template4 } from './Template4/Template4';
import { Template1  } from './Template1/Template1';
import Template5 from './Template5/src/Template5'

class Master extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    componentWillMount() {
        
        axios.post('https://sitesheet.apoorvpal.in/api/sites/pages/all', credentials.User1)
            .then(response => {
                console.log(response, "responses")
                this.setState(response.data);
            }).catch(error => {
                console.log(error)
        })
    }

    render() {
        const  details  = this.state;
        
        return <div>
            {/* <Template4 props={details}/> */}
            <Template5/>
            {/* <Template1/> */}
        </div>;
    }
}
export default Master;

