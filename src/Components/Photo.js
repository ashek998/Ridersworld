import React, { Component } from 'react';


class Photo extends Component
{
	render() {
		const post = this.props.post
		return <figure className="figure">

			<img className="photo" src={post.imageLink} alt={post.descripton} />
			<figurecaption className="figureCaption">
				<p> {post.descripton}	</p>
			</figurecaption>


			</figure>
			
	}
}

export default Photo;