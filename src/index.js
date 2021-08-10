import React from 'react';
import ReactDOM from 'react-dom';
//import FirstComponent from "./firstComponent";
//import SecondComponent from "./secondcomponent";
//import NestedComponent from "./nestedComponent";
import Bookstore from "./bookstore";
import "./index.css"
ReactDOM.render(
  <React.StrictMode>

    {/*<FirstComponent /> {/*this is how we use componemt*/}
    {/*<SecondComponent />*/}
    {/*<NestedComponent />*/}
    <Bookstore />

  </React.StrictMode>,

  document.getElementById('root')

);



