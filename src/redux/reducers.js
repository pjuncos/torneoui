import { SHOW_ERROR, HIDE_ERROR } from './actions';

const initial_state = { error: false, message: '' };
const global = (state = initial_state, action) => {
    switch(action.type){
        case SHOW_ERROR:
            return {
                ...state,
                message: action.payload,
                error: true
            }
        case HIDE_ERROR:
            return {
                ...state,
                message: '',
                error: false
            }
        default:
            return state
    }
}

export default global;
