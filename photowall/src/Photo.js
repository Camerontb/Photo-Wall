import React from "react";
import { Component } from "react";

class Photo extends Component{

    render(){
        
        const post= this.props.post
        return (
            <figure className='figure'>
                <img className='photo' src={post.imageLink} alt={post.description}/>
                <figcaption className='caption'> <p>{post.description}</p></figcaption>
            </figure>
        )

        
    }
}

export default Photo