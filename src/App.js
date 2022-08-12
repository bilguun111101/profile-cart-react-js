import './App.css';
import React, { useState } from 'react';
import customData from './data.json'
import Navbar from './components/navbar/navbar';
import Profile from './components/profile';

function App() {
  let [search, setSearch] = useState('')
  console.log(search)
  return (
    <div className='page'>
      <Navbar search={setSearch}/>
      <div className='grid-imformation'>
        <div className='grid-imformation-small'>
          {customData.filter(el => {
            if(search === '') return el
            else if(el.name.toLowerCase().includes(search) || el.name.toLowerCase().includes(search.toLowerCase())) return el
          }).map(a => <Profile data={a}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;