import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

const {ADD_TODO,APPLY_FILTER,TOGGLE_TODO_STATE} = TodoActionTypes;
const {ALL,COMPLETED,PENDING} = TodoFilterTypes;

let id = 0;

export const addTodoAction = (text) => {
    return {
        type:ADD_TODO,
        id:id++,
        text:text
    };
};

export const toggleTodoStateAction = (id) => {
    return {
        type:TOGGLE_TODO_STATE,
        id:id
    };
};

export const applyFilterAction = (filter) => {
    if(filter !== ALL && filter !== COMPLETED && filter !== PENDING){
        filter = ALL;
    }
    return {
        type:APPLY_FILTER,
        filter:filter
    };
}