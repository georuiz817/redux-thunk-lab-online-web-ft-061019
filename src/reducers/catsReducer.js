// ./src/reducers/catsReducer.js
 
const catsReducer = (state = { cats: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CATS':
        return {
          ...state,
          cats: [...state.cats],
          loading: true
        }
      case 'ADD_CATS':
        return {
          ...state,
          cats: action.cats,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default catsReducer;


  /*

  step 2: 
  
For our catsReducer() function in ./src/reducers/catsReducer.js, 
we'll want to set up a switch that handles two action types, 'LOADING_CATS' 
and 'ADD_CATS'.



We also set up the initial state here. We can see that in the 
'LOADING_CATS' case, state.loading becomes true, while the rest 
of state is just copied to a new object. In the 'LOADING_CATS' 
case, state.loading becomes false, and state.cats is set to the 
action.cats payload (HINT: so we know we're expecting a payload 
object with a cats key).
  */