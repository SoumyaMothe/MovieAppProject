import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FAVOURITE,SHOW_FAVOURITE } from "../actions";
const initialMoviesState={list:[],favourite:[],showFavourites:false}
function movies(state=initialMoviesState,action)
{
   switch(action.type)
   {
    case 'ADD_MOVIES':
    return {
        ...state,
        list :action.movies
    }
    case 'ADD_FAVOURITE':
        return{
            ...state,
            favourite:[action.movie,...state.favourite]

        }
    case 'SHOW_FAVOURITE':
            return{
                ...state,
                showFavourites:action.val
    
            }
    case 'REMOVE_FAVOURITE':
            const filteredArray=state.favourite.filter(movie=>movie.Title!==action.movie.Title);   
                 return{
                ...state,
               favourite: filteredArray }
    default:
        return state;
        
   }
}

    export default movies;