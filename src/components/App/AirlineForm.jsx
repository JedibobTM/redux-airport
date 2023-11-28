import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function AirlineForm () {
  const [nameInput, setNameInput] = useState('');
  const [addPlaneNum, setPlaneNum] = useState(0);
  const dispatch = useDispatch();

  const addAirline = (e) => {
    e.preventDefault();

    dispatch({
      type: 'CREATE_AIRLINE',
      payload: nameInput
    });

    dispatch({
        type: 'CREATE_PLANE',
        payload: addPlaneNum
    });
  }

    return (
        <div>
            <h1>Redux Airport</h1>
            <form onSubmit={addAirline}>
                <input
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                type='text'
                placeholder='Airline Name' />
            </form>
            <form onSubmit={addAirline}>
                <input
                value={addPlaneNum}
                onChange={(e) => setPlaneNum(e.target.value)}
                type='number'
                placeholder='Number of Planes'
                />
                <button>Add Airline</button>
            </form>
        </div>
   
    );
}