import {TodoActionTypes} from '../constants/TodoConstants';
import {todo} from './todo';

export const todos = (state=[],action) => {
    switch(action.type){
        case TodoActionTypes.ADD_TODO:
            return [...state,todo(null,action)];
        case TodoActionTypes.TOGGLE_TODO_STATE:
            return state.map(_state=>todo(_state,action));
        default:
            return state;
    }
};