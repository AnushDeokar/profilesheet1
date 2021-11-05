import React, { useEffect, useState } from 'react'
import axios from 'axios';
import credentials from './credentials.json'
import { Template4 } from './Template4/Template4';
import { Template1  } from './Template1/Template1';

// console.log(alldata, "HERE");


// export const Master = () => {

//     // const url = 'https://sitesheet.apoorvpal.in/docs/api';


//     // const arti = credentials.User1;
//     // const [details, setDetails] = useState({});

//     // useEffect(() => {

//     // }, [])

//     // console.log(details, "HERE2")


//     var details = {};


// axios.post('https://sitesheet.apoorvpal.in/api/sites/pages/all', credentials.User1)
//     .then(response => {
//         console.log(response, "responses")
//         details = response.data.pages
//         // setDetails(response.data.pages);
//     }).catch(error => {
//         console.log(error)
//     })

//     return (
//         <div>
//             {console.log(details, "details")}
//         </div>
//     )

// }


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
                this.setState(response.data.pages);
                // setDetails(response.data.pages);
            }).catch(error => {
                console.log(error)
        })
    }

    render() {
        const  details  = this.state;

        return <div>
            {/* <Template4 props={details}/> */}
            <Template1/>
        </div>;
    }
}
export default Master;

