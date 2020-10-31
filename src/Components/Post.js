import React, { Component } from 'react'
import { connect } from 'react-redux';
import {  postActions } from '../actions/postActions'

class Post extends Component {
    
    handleClick = ()=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    render(){

        console.log(this.props);
        const Post  = this.props.post ? (
            <div className="post">
            <h4>{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className="center">
            <button className="btn grey" onClick={this.handleClick}>
            Delete Post
            </button>
            </div>
            </div>
        ): (
            <div className="center">
            <p>Post loadimg....</p>
            </div>
        )
        return(
            <div className="container">
                {Post}
            </div>
        )
    }
}

const mapStateToProps = (state , ownProps)=>{
    console.log('own props',ownProps);
    console.log(state) 
    let id = ownProps.match.params.post_id;
    return {
        post : state.posts.find(post => post.id == id)
    }
    
}

const mapDispatchToProps = (dispatch)=>{
    
    return{
        deletePost : (id)=>{ dispatch(postActions(id))}
    }
}



export default connect(mapStateToProps , mapDispatchToProps)(Post)