import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>
        <h1>Welcome Aboard !!</h1>
        <p> I welcome you to my Node.js repo </p>
    </div>,
    document.getElementById('root')   );

#######################################################

//To remove extra div we use <react.Fragment> or just<>
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <React.Fragment>
        <h1>Welcome Aboard !!</h1>
        <p> I welcome you to my Node.js repo </p>
    </React.Fragment>,
    document.getElementById('root')   );

########################################################

import React from 'react';
import reactDom from 'react-dom';

reactDom.render(
    <>
        <h1>My all time Favourite Series Pick</h1>
        <p>List of 5 Best Series</p>
        <ol>
            <li>Asur</li>
            <li>Kota Factory</li>
            <li>Scorpion</li>
            <li>Mr Robot</li>
            <li>TVF Pitchers</li>
        </ol>
    </>,document.getElementById('root'));

########################################################
//Js in Node.js

import React from 'react';
import ReactDom from 'react-dom';

const name ="User" 
const h="Hello "

ReactDom.render(
    <>
        <h1>{h + name} !!</h1>
        <p>My lucky number is {parseInt(Math.random()*10)}</p>
        <p>We can use only expression in curly brackets<br/>
        we can not use statements like condition in it</p>
        <p>{` ${h} ${name} This is the use of Templet Literals`}</p>
    </>
    ,document.getElementById('root'));

########################################################
// Current Date and time 
import React from 'react';
import ReactDom from 'react-dom';

var date=new Date().toLocaleDateString();
var time=new Date().toLocaleTimeString();


ReactDom.render(<>
    <h1>Hello User !!</h1>
    <p>Your Login Date is {date}</p>
    <p>Your Login Time is {time}</p>
    </>
    ,document.getElementById('root'))

########################################################

//Creating Sample Gallery Using Node.js

import React from 'react';
import ReactDom from 'react-dom';

const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img3="https://picsum.photos/300/300"
const img4="https://picsum.photos/210/300"
const l="https://picsum.photos/"

ReactDom.render(<>
    <h1>Welcome to Gallery</h1>
    
    <img src={img1} alt='Image1' /> {' '}
    <img src={img2} alt='Image1' />{' '}
    <img src={img4} alt='Image1' /> {' '}
    <a href={l} target='_JD'>
    <img src={img3} alt='Image1' />
    </a>
    <p contentEditable>Give your Suggestions</p>
    </>
    ,document.getElementById('root'))
