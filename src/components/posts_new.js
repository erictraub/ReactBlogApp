import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
	renderField(field) {
		const { meta } = field;
		// const { meta: { touched, error } } = field;  // for further destructuring
		const groupClassName = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;

		return (
			<div className={groupClassName}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
				{meta.touched ? meta.error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		// this === component
		this.props.createPost(values, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const { handleSubmit }  = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link className="btn btn-danger" to="/">Cancel</Link>
			</form>
		);
	}
};

function validate(values) {
	const errors = {};
	// validate the inputs from 'values'
	if (!values.title) errors.title = "Title is required";
	if (values.title && values.title.length < 3) errors.title = "Title must be at leats 3 characters long";
	if (!values.categories) errors.categories = "Categories is required";
	if (!values.content) errors.content = "Content is required";
	// if errors is empty obj, the form is fine to submit
	// if errors has any properties, redux-form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, { createPost })(PostsNew)
);


