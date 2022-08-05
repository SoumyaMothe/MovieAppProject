import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import {data} from './data.js';
import  NavBar from './NavBar';
import MovieCard from './MovieCard';
import {addMovies} from './actions';
import {setShowFav} from './actions';
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
  const index= favourite.indexOf(movie);
  if(index!==-1)
  return true;
  return false;
 }
 onChangeTab=(val)=>{
  this.props.store.dispatch(setShowFav(val))

 }
 
render()
{


 const  {list,favourite,showFavourites}=this.props.store.getState();
const  displayMovies=showFavourites?favourite:list;
  return (
    
    <div className="App">
    <NavBar/>
    <div className="main">
      <div className="tabs">
        <div className="tab" onClick={()=>this.onChangeTab(false)} >Movies</div>
        <div className="tab"  onClick={()=>this.onChangeTab(true)} >Favourites</div>
      </div>
      <div className="list">
        {displayMovies.map((movie,index)=>(<MovieCard movie={movie} 
        key={`movies ${index}`}
        dispatch={this.props.store.dispatch}
        isFavourite={this.isMovieFavourite(movie)}
        /> ))}
       
      </div>
      <div >{displayMovies.length===0?<h>Display is null</h>:null}</div>
    </div>
    </div>
    
  );
  }
}





export default App;
