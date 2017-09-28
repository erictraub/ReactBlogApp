import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST_BY_ID, DELETE_POST } from '../actions';

export default function(state = {}, action) {
	switch(action.type) {
	case FETCH_POST_BY_ID:
		// const post = action.payload.data;
		// const newState =  { ...state  };
		// newState[post.id] = post;
		// return newState;
		return { ...state, [action.payload.data.id]: action.payload.data };
	case FETCH_POSTS:
		return _.mapKeys(action.payload.data, 'id');
	case DELETE_POST:
		// const postId = action.payload;
		// if (state[postId]) delete state[postId];
		// return { ...state };
		return _.omit(state, action.payload);
	default: 
		return state;
	}
};