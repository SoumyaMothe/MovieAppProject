export const ADD_MOVIES='ADD_MOVIES';
export const REMOVE_MOVIE='REMOVE_MOVIE';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export function addMovies(movies){
    return{
    type:'ADD_MOVIES',
    movies
    }

}
export function RemoveMovies(){
  

}
export function AddFav(movie){
    return{
        type:'ADD_FAVOURITE',
        movie
        }

}
export function removeFav(){
  

}

