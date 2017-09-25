import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		const { postId } = this.props.match.params;
		this.props.fetchPostById(postId);
	}

	render() {
		const post = this.props.postTESTINGVariable;

		if (!post) return <div>Loading...</div>;

		return (
			<div>
				<h3>{ post.title }</h3>
				<h6>Categories: { post.categories }</h6>
				<p>{ post.content }</p>
			</div>
		);
	}
};

function mapStateToProps({ posts }, ownProps) {
	return { postTESTINGVariable: posts[ownProps.match.params.postId] };
};

export default connect(mapStateToProps, { fetchPostById })(PostsShow);