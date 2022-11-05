import React from "react";
import { useState } from "react";
import "./bmicalci.css"
const BMICalci = () => {
    const [age,setAge] = useState("");
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");
    const handleClick= (e)=> {
e.preventDefault();
if(age < 2 || age > 120) {
    return "Please provide valid age"
}
if(height <=0) {
    return "Please provide positive numbers"
}
if(weight <=0 || weight === "") {
    return "Please provide positive numbers"
}


    }

    const handleClear = (e)=> {
e.preventDefault();
setAge("");
setHeight("");
setWeight("")
    }

    return (
        <div className="container">
            <div className="age">
                <span className="thick" id="myage"><label >Age</label></span>
                <span><input type="number" name="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/></span>
                <span className="thick">age: 2 - 120</span>
            </div>
            <div className="gender">
                <span className="thick">Gender</span>
                <span className="thick"></span><span>Male</span>
                <span className="thick"></span><span>Female</span>
            </div>
            <div className="height">
                <span className="thick">Height</span>
                <span><input type="number" name="number" placeholder="cm" value={height} onChange={(e)=> {setHeight(e.target.value)}}/></span>
            </div>
            <div className="weight">
                <span className="thick">Weight</span>
                <span><input type="number" placeholder="kg" name="number" value={weight} onChange={(e)=>setWeight(e.target.value)}/></span>
            </div>
            <div className="calculate">
                <span><button onClick={(e)=> handleClick(e)} className="mycalculate">Calculate</button></span>
                <span><button onClick={(e)=> {handleClear(e)}} className="myclear">Clear</button></span>
            </div>
        </div>
    )
}
export default BMICalci;

// 8318671230