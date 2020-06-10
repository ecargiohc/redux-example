import {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    // represents the posts coming from 'action'
        // action is where we put fetch request
    items: [],
    // represents the single post that we add
    item: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log('reducer')
            return {
                ...state, 
                items: action.payload
            }
            break;
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
            break;
        default:
            return state;
    }
}