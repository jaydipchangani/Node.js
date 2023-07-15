// Greeting Page

import React from 'react';
import ReactDOM  from 'react-dom';
import "./index.css";

let time= new Date();
time = time.getHours();
let mes="";

const mesStyle={
}

if(time>=1 && time < 12)
{
    mes="Good Morning";
    mesStyle.color ='green';
}
else if(time>=12 && time < 19)
{
    mes="Good Afternoon";
    mesStyle.color ='Orange';
}
else{
    mes="Good night";
    mesStyle.color ='grey';
}

ReactDOM.render(
<>
<div className='div1'>
    <h1>Hello Sir,<span style={mesStyle}>{mes}</span> </h1>
</div>
</>
    ,document.getElementById('root')
)

####################################################################################3
//CSS

*{
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
}

.div1{
 
  align-items: center;
  background-color: rgb(234, 255, 186);
  margin-top: -30px;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
 }
h1{
  background-color: rgb(166, 147, 255);
  padding: 20px 20px;
  border-radius: 25px;
 }
span{
  background-color: rgb(166, 147, 255);;
}
