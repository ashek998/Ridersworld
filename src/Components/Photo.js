import React, { Component } from 'react';


class Photo extends Component
{
	render() {
		const post = this.props.post
		return <figure className="figure">

			<img className="photo" src={post.imageLink} alt={post.descripton} />
			
			</figure>
			
	}
}

export default Photo;