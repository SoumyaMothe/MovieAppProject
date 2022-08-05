import React, { Component } from 'react';
import { AddFav } from './actions';

class MovieCards extends React.Component
{
     handleClickFav=()=>
    {
        const {movie}=this.props;
      this.props.dispatch(AddFav(movie))
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
                        isFavourite?
                        <button className="favourite-btn" onClick={this.handleClickFav}>UnFavourite</button>
                        :  <button className="Unfavourite-btn" onClick={this.handleClickFav}>Favourite</button>
    }</div>
                </div>
              
            </div>
        )

    }
}
export default MovieCards;