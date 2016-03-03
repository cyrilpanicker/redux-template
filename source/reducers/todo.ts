import {assign} from '../utils';
import {TodoActionTypes} from '../constants/TodoConstants';

const {ADD_TODO,TOGGLE_TODO_STATE} = TodoActionTypes;

export const todo = (state,action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                id:action.id,
                text:action.text,
                complete:false
            };
        case TOGGLE_TODO_STATE:
            if(state.id !== action.id){
                return state;
            } else {
                return assign(
                    {},
                    state,
                    {complete:!state.complete}
                );
            }
        default:
            return state;
    }
};