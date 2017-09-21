import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		this.props.fetchPostById();
	}

	render() {
		return (
			<div>
				Post Show Component
			</div>
		);
	}
};

export default connect(null, { fetchPostById })(PostsShow);