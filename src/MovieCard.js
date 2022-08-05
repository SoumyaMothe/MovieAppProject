import React, { Component } from 'react';
import { AddFav,RemoveFav } from './actions';

class MovieCards extends React.Component
{
  handleFvaouriteClick=()=>
    {
        const {movie}=this.props;
      this.props.dispatch(AddFav(movie))
    }
    
    handleUnFvaouriteClick=()=>
    {
        const {movie}=this.props;
      this.props.dispatch(RemoveFav(movie))
    }
    
    render(){
     const {movie,isFavourite}=this.props;
        return(
            <div className="movie-card">
                <div className="left">
                  <img alt="movie-poster" src={this.props.movie.Poster}/>  
                </div>
                <div className="right">
                    <div className="title">{this.props.movie.Title}</div>
                    <div className="footer">
                        <div className="rating">{this.props.movie.Rated}</div>
                        {
                        isFavourite
                            ? <button className="unfavourite-btn" onClick={this.handleUnFvaouriteClick}>UnFavourite</button>
                            :<button className="favourite-btn" onClick={this.handleFvaouriteClick}>Favourite</button>
                              }
    </div>
                </div>
              
            </div>
        )

    }
}
export default MovieCards;