import {TodoActionTypes,TodoFilterTypes} from '../constants/TodoConstants';

const filter = (state=TodoFilterTypes.ALL,action) => {
    switch(action.type){
        case TodoActionTypes.APPLY_FILTER:
            switch(action.filterType){
                case TodoFilterTypes.ALL:return TodoFilterTypes.ALL;
                case TodoFilterTypes.COMPLETED:return TodoFilterTypes.COMPLETED;
                case TodoFilterTypes.PENDING:return TodoFilterTypes.PENDING;
                default:return state;
            }
        default:
            return state;
    }
};

export default filter;