import {TodoStore} from '../stores/TodosStore';
import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

const {ADD_TODO,APPLY_FILTER,TOGGLE_TODO_STATE} = TodoActionTypes;
const {ALL,COMPLETED,PENDING} = TodoFilterTypes;
const {dispatch} = TodoStore;

let id = 0;

export const addTodo = (text) => {
    dispatch({
        type:ADD_TODO,
        id:id++,
        text:text
    });
};

export const toggleTodoState = (id) => {
    dispatch({
        type:TOGGLE_TODO_STATE,
        id:id
    });
};

export const applyFilter = (filter) => {
    if(filter !== ALL && filter !== COMPLETED && filter !== PENDING){
        filter = ALL;
    }
    dispatch({
        type:APPLY_FILTER,
        filter:filter
    });
}