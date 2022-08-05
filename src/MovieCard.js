import React, { Component } from 'react';

class MovieCards extends React.Component
{
    
    render(){
     
        return(
            <div className="movie-card">
                <div className="left">
                  <img alt="movie-poster" src={this.props.movie.Poster}/>  
                </div>
                <div className="right">
                    <div className="title">{this.props.movie.Title}</div>
                    <div className="footer">
                        <div className="rating">{this.props.movie.Rated}</div>
                        <button className="favourite-btn">Favourite</button>
                                           </div>
                </div>
              
            </div>
        )

    }
}
export default MovieCards;