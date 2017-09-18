import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	componentDidMount() {
		var posts = this.props.fetchPosts();
		console.log('posts', posts);
	}

	render() {
		return (
			<div>
				PostsIndex
			</div>	
		);
	}
};

export default connect(null, { fetchPosts })(PostsIndex);