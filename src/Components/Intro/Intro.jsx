import React from "react";
import './Intro.css';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Instagram from '../../images/instagram.png';
import Vector1 from '../../images/Vector1.png';
import Vector2 from '../../images/Vector2.png';
import boy from '../../images/boy.png';
import thumbup from '../../images/thumbup.png';
import Crown from '../../images/crown.png';
import glassesimoji from '../../images/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";



const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
            <div className="i-name">
                <span>Hey! </span>
                <span>Batuhan Fidan</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{top:'18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
                </div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro