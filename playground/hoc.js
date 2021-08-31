//Higher order component(HOC) - A component (HOC) that renders another components 
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = () =>{
    <div>
        <h1>Info</h1>
        <p>This info is :{props.info}</p>
    </div>
}