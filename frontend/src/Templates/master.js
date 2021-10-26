import React, {useEffect} from 'react'
import axios from 'axios';
import credentials from './credentials.json'
export const Master = () =>{

        // const url = 'https://sitesheet.apoorvpal.in/docs/api';


        const arti = credentials.User1;


        useEffect(() => {
                axios.post('https://sitesheet.apoorvpal.in/api/sites/pages/all', arti)
                .then(response=>{
                    console.log(response)
                }).catch(error=>{
                    console.log(error)
                })
                
                console.log("anush");
                
           
        }, [])

        return (
            <div>
                hELLO
            </div>
        )

}