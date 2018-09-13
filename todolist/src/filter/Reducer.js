import * as ActionTypes from './ActionTypes';
import { FilterTypes } from '../constants';

export default (state = FilterTypes.ALL, action) => {
  switch(action.type){
    case ActionTypes.SET_FILTER:{
      return action.filter;
    }
    default:{
      return state;
    }
  }
};