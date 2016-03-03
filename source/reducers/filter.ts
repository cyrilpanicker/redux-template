import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

const {APPLY_FILTER} = TodoActionTypes;
const {ALL,COMPLETED,PENDING} = TodoFilterTypes;

export const filter = (state=ALL,action) => {
    switch(action.type){
        case APPLY_FILTER:
            switch(action.filter){
                case ALL:return ALL;
                case COMPLETED:return COMPLETED;
                case PENDING:return PENDING;
                default:return state;
            }
        default:
            return state;
    }
};