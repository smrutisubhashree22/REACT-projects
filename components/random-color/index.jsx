/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {useEffect, useState} from "react";


export default function RandomColor(){
// eslint-disable-next-line no-unused-vars
const [typeOfColor, setTypeOfColor] = useState("hex");
// eslint-disable-next-line no-unused-vars
const [color, setColor] = useState("#000000");
function RandomColorUtility(length){
    return Math.floor(Math.random()*length)
}
function handleCreateRandomHexColor(){
//#678765
const hex = [0, 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,"A","B","C","D","E","F"];
let hexColor = "#";

for(let i=0; i<6; i++){
    hexColor += hex[RandomColorUtility(hex.length)];
}
setColor(hexColor);
}
function handleCreateRandomRgbColor(){
    const r = RandomColorUtility(256)
    const g = RandomColorUtility(256)
    const b = RandomColorUtility(256)
    setColor(('rgb${r},${g},${b}'));
}
useEffect(()=>{
    if (typeOfColor === "rgb") handleCreateRandomRgbColor(); 
    else handleCreateRandomHexColor();
}, 
[typeOfColor]);


return (
        <div style={{
          width: "100vw",
          height: "100vh",
          background: color,
         }}
        >
    
        <button onClick={()=> setTypeOfColor('hex')} >Create HEX Color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex'? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection:'column',
            gap: '20px' }}>
                <h3>{typeOfColor === "rgb" ? "RGB Color":"HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
    </div>
    );
}