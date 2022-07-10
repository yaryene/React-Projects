import React from 'react'
import katie_zaferes from "../images/katie-zaferes.png";
import star from "../images/star.png";
import "../style.css";

export default function () {
 return (
    <div className="card">
        <img src={katie_zaferes} alt="" className="card--image" />
        <div className="card--stats">
            <img className="card--star" src={star} alt="" />
            <span>5.0</span>
            <span className='gray'>(6) .</span>
            <span className='gray'>USA</span>
        </div>
        <p>Life lesons with Katie Zaferes</p>
        <p><span className='bold'>From $136 </span>/ person</p>
    </div>
  )
}
