import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostById, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
	componentDidMount() {
		const { postId } = this.props.match.params;
		this.props.fetchPostById(postId);
	}

	onDeleteClick() {
		const { postId } = this.props.match.params;
		this.props.deletePost(postId, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const post = this.props.postTESTINGVariable;

		if (!post) return <div>Loading...</div>;

		return (
			<div>
				<Link to="/">Back To Index</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete Post
				</button>
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

export default connect(mapStateToProps, { fetchPostById, deletePost })(PostsShow);














