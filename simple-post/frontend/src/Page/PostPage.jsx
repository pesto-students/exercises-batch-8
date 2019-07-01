import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const dbReq = indexedDB.open('myDatabase', 1);
let db;
dbReq.onupgradeneeded = event => {
  console.log('inside onupgradeneeded');
  db = event.target.result;
  db.createObjectStore('posts', { autoIncrement: false });
};
dbReq.onsuccess = event => {
  console.log('inside onsuccess');
  db = event.target.result;
};

function addPost(db, post) {
  let tx = db.transaction(['posts'], 'readwrite');
  let store = tx.objectStore('posts');
  store.add(post, post.id);
  tx.oncomplete = function() {
    console.log('Post Stored!!');
  };
  tx.onerror = function(event) {
    alert('error storing note ' + event.target.errorCode);
  };
}
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
    let tx = db.transaction(['posts'], 'readonly');
    let store = tx.objectStore('posts');
    let req = store.get(1);
    req.onsuccess = (event)  => {
      let post = event.target.result;
      if (post) {
        console.log(post);
        this.setState({...post});
      } else {
        console.log('asdasd');
        axios(`http://localhost:3001/post/${this.props.match.params.id}`, {
          method: 'get',
          headers: {
            'pesto-password': 'darth vader'
          }
        }).then(resp => {
          this.setState(resp.data.data);
          addPost(db, resp.data.data);
        });
      }
    };
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
