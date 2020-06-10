import {FETCH_POSTS, NEW_POST} from './types';

// each action creator is a function we need to export
export function fetchPosts() {
    // 'thunk' middleware allows us to call 'dispatch' actions directly so we can make asynchronous requests
    return function(dispatch) {
        console.log('fetching');
    // think of 'dispatch' as a resolver and a promise
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
}

export const createPost = (postData) => dispatch => {
    console.log("action called")
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}

