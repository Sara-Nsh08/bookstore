import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from "./firstComponent";
import SecondComponent from "./secondcomponent";

ReactDOM.render(
  <React.StrictMode>

    <FirstComponent /> {/*this is how we use componemt*/}
    <SecondComponent />

  </React.StrictMode>,

  document.getElementById('root')

);



