import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img4="https://picsum.photos/210/300"


ReactDom.render(<>
    <h1 className='heading'>Welcome to Gallery</h1>
    <div className='imgdiv'>
        <img src={img1} alt='Image1' className='img' /> 
        <img src={img2} alt='Image1' className='img' />
        <img src={img4} alt='Image1' className='img' /> 
       
    </div>

    <div className='img2div'>
        <img src={img1} alt='Image1' className='img' /> 
        <img src={img2} alt='Image1' className='img' />
        <img src={img4} alt='Image1' className='img' /> 
       
    </div>
    </>
    ,document.getElementById('root'))

#########################################################################
CSS Code 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heading{
  color: rgb(25, 120, 245);
  text-decoration: solid;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 20px;
}

.imgdiv{ 
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  height: 300px;

}
.img{
  margin: 5px;
}
.img2div{ /*background-color: rgb(138, 138, 138); */
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  height: 300px;

}


#########################################################################
Inline CSS in React

import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img4="https://picsum.photos/210/300"
const heading ={
    color:"rgb(25, 120, 245)",
    margin :"20px",
    textAlign:"Center",
    textTransform : "capitalize" ,
    fontFamily : "Poppins",
    fontWeight: "bold"
}

ReactDom.render(<>
    <h1 style={heading}>Welcome to Gallery</h1>
    <div className='imgdiv'>
        <img src={img1} alt='Image1' className='img' /> 
        <img src={img2} alt='Image1' className='img' />
        <img src={img4} alt='Image1' className='img' /> 
       
    </div>

    <div className='img2div'>
        <img src={img1} alt='Image1' className='img' /> 
        <img src={img2} alt='Image1' className='img' />
        <img src={img4} alt='Image1' className='img' /> 
       
    </div>
    </>
    ,document.getElementById('root'))
