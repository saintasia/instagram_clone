import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    // index of the post
    const postId = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    // get comments based on id
    const postComments = this.props.comments[postId] || [];
    console.log(post);
    // get the post
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;
