import React from "react";
import './Services.css'
import HeartEmoji from '../../images/heartemoji.png';
import Glasses from '../../images/glasses.png';
import Humble from '../../images/humble.png';
import Card from "../Card/Card";
import Resume from './resume.pdf'



const Services = () => {
    return (
        <div className="services">

            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                <br/>
                Lorem ipsum Lorem ipsum
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
            </div>

            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"} 
                    />
                </div>

                <div style={{top: "12rem", left: "-4rem"}}>
                    <Card
                    emoji={Glasses}
                    heading={"Developer"}
                    detail={"HMTL, CSS, Javascript, ReactJS"} 
                    />
                </div>

                <div style={{top: "19rem", left: "12rem"}}>
                    <Card 
                    emoji={Humble}
                    heading={"UI/UX"}
                    detail={
                        "Lorem ipsum dummy text are usually use in section where Lorem ipsum dummy text are usually use in section where "
                    }
                    />
                </div>
                
                <div className="blur s-blur2" style={{background: "var(--purple)" }}></div>
            </div>
        </div>
    )
}

export default Services