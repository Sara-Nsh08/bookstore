import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

function FirstComponent() {
    return (
        <React.Fragment>
            <div>
                <h2>This is my first component</h2>
                <img src="tig.jpg" alt="the tiger" heigth="250" width="300"></img>
            </div>
        </React.Fragment>
    )
}
export default FirstComponent