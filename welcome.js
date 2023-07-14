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
