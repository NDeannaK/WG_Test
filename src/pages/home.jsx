import React, { useState } from 'react'
import db from './db';

function home() {

  const user = db

  const [hours, setHours] = useState({});

  setHours()


  return (
    <div>
        <h1>Home</h1>
        <a href='/' >Logout</a>

        <div>

          <form action="">

            <label htmlFor="hours">Enter your hours: </label>
            <input type="number" name='hours' /> 

          </form>

          <button type='submit' >Submit</button>

        </div>

        
    </div>
  )
}

export default home