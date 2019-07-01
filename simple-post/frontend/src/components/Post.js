import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div key={post.id}>
      <h4>{post.id}</h4>
      <div>Title: <Link to={`/post/${post.id}`}>{post.title}</Link></div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
