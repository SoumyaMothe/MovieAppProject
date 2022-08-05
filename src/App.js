import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import {data} from './data.js';
import  NavBar from './NavBar';
import MovieCard from './MovieCard';
import {addMovies} from './actions';
class App  extends React.Component
  {
    componentDidMount()
    {
      const {store}=this.props;
      store.subscribe(()=>{
        console.log("UPDATED");
        this.forceUpdate();
      });
      store.dispatch(
       addMovies(data)
      
      )
   }
   // console.log('state',props.store.movies)
 isMovieFavourite=(movie)=>
 {
  const {favourite}=this.props.store.getState();
  var val= favourite.indexOf(movie);
  if(val==-1)
  {
  return false;
  }
  return true;
 }
render()
{


 const  {list,favourites}=this.props.store.getState();
  return (
    
    <div className="App">
    <NavBar/>
    <div className="main">
      <div className="tabs">
        <div className="tab" >Movies</div>
        <div className="tab" >Favourites</div>
      </div>
      <div className="list">
        {list.map((movie,index)=>(<MovieCard movie={movie} 
        key={`movies ${index}`}
        dispatch={this.props.store.dispatch}
        isFavourite={this.isMovieFavourite(movie)}
        /> ))}
       
      </div>
   
    </div>
    </div>
    
  );
  }
}





export default App;
