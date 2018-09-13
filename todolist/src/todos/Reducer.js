import * as ActionTypes from './ActionTypes';

export default (state = [{id:100,text:'test',completed:true}], action) => {
  switch(action.type){
    case ActionTypes.ADD_TODO:{
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    }
    case ActionTypes.REMOVE_TODO:{
      return state.filter(todo => todo.id !== action.id);
    }
    case ActionTypes.TOGGLE_TODO:{
      return state.map(todo => {
        if(todo.id === action.id){
          return {
            ...todo,
            completed: !todo.completed
          };
        }else{
          return todo;
        }
      });
    }
    default:{
      return state;
    }
  }
};