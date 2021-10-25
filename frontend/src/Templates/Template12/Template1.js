import React from 'react'
import {Header} from "./Header1/Header1";
import {About1} from "./About1/About1";
import {Introduction1} from "./Introduction1/Introduction1";
import {Services1} from "./Services1/Services1";
import Projects1 from "./Projects1/Projects1";
import Contact1 from "./Contact1/Contact1";
import Footer1 from "./Footer1/Footer1";

import {useEffect } from 'react';



export const Template1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Header />
            <About1 />
            <Introduction1 />
            <Services1 />
            <Projects1 />
            <Contact1 />
            <Footer1 />
            {/* <h1>This is the first sample template.</h1> */}
        </div>
    )
}
