import { POST_LOADING, GET_POST, GET_POSTS, DELETE_POST, ADD_POST } from '../actions/types'
const initialState = {
    post: {},
    posts: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        default:
            return state;
    }
}