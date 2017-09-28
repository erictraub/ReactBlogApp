import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const DELETE_POST = 'DELETE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=thisisthekeyhomie2323';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
};

export function createPost(values, callBack) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
	.then(response => callBack());

	return {
		type: CREATE_POST,
		payload: request
	};
};

export function fetchPostById(postId) {
	const request = axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`);

	return {
		type: FETCH_POST_BY_ID,
		payload: request
	};
};

export function deletePost(postId, callBack) {
	const request = axios.delete(`${ROOT_URL}/posts/${postId}${API_KEY}`)
	.then(() => callBack());

	return {
		type: DELETE_POST,
		payload: postId
	};
};














