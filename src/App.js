import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import {data} from './data.js';
import  NavBar from './NavBar';
import MovieCard from './MovieCard';
function App ()
  {
   // console.log('state',props.store.movies)
 

  return (
    
    <div className="App">
    <NavBar/>
    <div className="main">
      <div className="tabs">
        <div className="tab" >Movies</div>
        <div className="tab" >Favourites</div>
      </div>
      <div className="list">
        {data.map((movie,index)=>(<MovieCard movie={movie}/> ))}
       
      </div>
   
    </div>
    </div>
    
  );
  }





export default App;
