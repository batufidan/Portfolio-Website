import React from "react";
import './Works.css';
import Upwork from "../../images/Upwork.png";
import Fiverr from "../../images/fiverr.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import Facebook from "../../images/Facebook.png";


const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                <br/>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                <br/>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                <br/>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </span>
                
                <button className="button s-button">Hire Me </button>
                
                <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
            </div>

            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>

                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>
            </div>
        </div>
    )
}


export default Works


