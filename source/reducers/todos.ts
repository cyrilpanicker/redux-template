import {TodoActionTypes} from '../constants/TodoConstants';
import {todo} from './todo';

const {ADD_TODO,TOGGLE_TODO_STATE} = TodoActionTypes;

export const todos = (state=[],action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,todo(null,action)];
        case TOGGLE_TODO_STATE:
            return state.map(_state=>todo(_state,action));
        default:
            return state;
    }
};