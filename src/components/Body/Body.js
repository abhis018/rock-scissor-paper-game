import React from 'react';
import './Body.css';
import img from "./bg-triangle.svg"
import img1 from "./icon-paper.svg"
import img3 from "./icon-rock.svg"
import img2 from "./icon-scissors.svg"

const Body = () => {
    return (
        <div className="body">
            <div className="box">
                <h2>ROCK<br/> PAPER<br/> SCISSORS</h2>
                <div className="score">
                    <h4>SCORE</h4>
                    <h5>12</h5>
                </div>
            </div>
            <div className="tri ma6" style={{ backgroundImage: `url(${img}`}}>
                {/* <img src={img}/>  */}
                <div className="circle1">
                    <img className="pic" src={img1}/>
                </div>
                <div className="circle2">
                    <img className="pic" src={img3}/>
                </div>
                <div className="circle3">
                    <img className="pic" src={img2}/>
                </div>
            </div>
            <div className="rules f7 b">RULES</div>
        </div> 
    )
}

export default Body;