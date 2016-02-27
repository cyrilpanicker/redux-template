import {assign} from '../utils';
import {TodoActionTypes} from '../constants/TodoConstants';

let counter = 0; 

const todo = (state,action) => {
    switch(action.type){
        case TodoActionTypes.ADD_TODO:
            return {
                id:counter++,
                text:action.text,
                complete:false
            };
        case TodoActionTypes.TOGGLE_TODO_STATE:
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

export default todo;