import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirlineForm from './AirlineForm';
function App() {

  const airlineName = useSelector((store) => store.airlineName);
  const planeNumber = useSelector((store) => store.planeNumber);

  return (
    <div>
      <AirlineForm />
      <ul>{
        airlineName.map((name) => {
          return <li>{(name)}</li>
        })  
      }</ul>
    </div>
  );
}

export default App;
