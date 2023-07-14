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


