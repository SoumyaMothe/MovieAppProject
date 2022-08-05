import { ADD_MOVIES,ADD_FAVOURITE } from "../actions";
const initialMoviesState={list:[],favourite:[]}
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
            favourite:action.movie

        }
    default:
        return state;
        
   }
}

    export default movies;