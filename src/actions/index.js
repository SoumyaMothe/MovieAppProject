export const ADD_MOVIES='ADD_MOVIES';
export const REMOVE_FAVOURITE='REMOVE_FAVOURITE';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const  SHOW_FAVOURITE='SHOW_FAVOURITE';
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
export function RemoveFav(movie){
   return{
        type:'REMOVE_FAVOURITE',
        movie
        }
}
export function setShowFav(val){
  
    return{
        type:'SHOW_FAVOURITE',
        val
        }
}

