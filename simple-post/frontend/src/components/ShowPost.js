/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

class ShowPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            id: this.props.match.params.id,
        };
    }

    componentDidMount() {
        const { id } = this.state;
        fetch(`http://localhost:3001/post/${id}`, {
            method: 'GET',
            headers: {
                'pesto-password': 'darth vader',
            },
        }).then(res => res.json()).then(post => this.setState({ post: post.data }));
    }
    render() {
        const { id, post } = this.state;
        return (
            <Fragment>
                {post ? <Post post={this.state.post} /> : <Post post={{ id }} />}
            </Fragment>
        );
    }
}

ShowPost.propTypes = {
    match: PropTypes.shape().isRequired,
};

export default ShowPost;
