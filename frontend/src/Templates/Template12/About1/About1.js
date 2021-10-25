import React from 'react'
import './About1.css'
import logo from './img/banner-image.png'
export const About1 = () => {
    var styles = {
        float: 'left'
    }
    return (
        <div id="about1">
            <div id="left-about-1">
                <h1>Hii I'm Anush</h1>
                <h2>Senior Full Stack Web Developer!</h2>
                <div style={styles}>
                    <button>Hire Me</button>
                    <button>Resume</button>
                </div>
            </div>
            <div id="right-about-1">
                <img src={logo} alt="No Image" />
            </div>
            {/* <h2>This is about!</h2> */}
        </div>
    )
}
