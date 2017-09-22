import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		const { postId } = this.props.match.params;
		this.props.fetchPostById(postId);
	}

	render() {
		return (
			<div>
				Post Show Component
			</div>
		);
	}
};

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.postId] };
};

export default connect(mapStateToProps, { fetchPostById })(PostsShow);