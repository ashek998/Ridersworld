import React, { Component } from 'react';
import Photo from './Photo';



class Photowall extends Component {
    render() {
        return (
            <div className="photoGrid" > 
                {this.props.posts.map((post) => <Photo post={post} />)}
            </div>
        )
    }
}


export default Photowall;