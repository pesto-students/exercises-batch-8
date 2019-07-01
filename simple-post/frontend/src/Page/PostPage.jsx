import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const dbReq = indexedDB.open('myDatabase', 1);
let db;
dbReq.onupgradeneeded = event => {
  console.log('inside onupgradeneeded');
  db = event.target.result;
  let posts = db.createObjectStore('posts', { autoIncrement: true });
};
dbReq.onsuccess = event => {
  console.log('inside onsuccess');
  db = event.target.result;
};

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      body: '',
      title: '',
      userId: ''
    };
  }
  componentDidMount() {
    axios(`http://localhost:3001/post/${this.props.match.params.id}`, {
      method: 'get',
      headers: {
        'pesto-password': 'darth vader'
      }
    }).then(resp => {
      this.setState(resp.data.data);
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <h4>By: {this.state.userId}</h4>
      </div>
    );
  }
}
export default withRouter(PostPage);
