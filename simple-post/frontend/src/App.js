import React, { Component, Fragment, useEffect, useState } from 'react';
import { BASE_URL, GET_POSTS_URL, HEADERS } from './Constants';

import Post from './components/Post';
import './App.css';

function App({ db }) {
  const [posts, savePosts] = useState({ 1: [] });
  const [currentPage, saveCurrentPage] = useState(1);

  useEffect(() => {
    if (posts[currentPage].length === 0) {
      fetch(`${BASE_URL}${GET_POSTS_URL}${currentPage}`, {
        headers: new Headers(HEADERS),
      })
        .then(response => response.json())
        .then(data => savePosts({ ...posts, [currentPage]: data.data }));
    }
  }, [currentPage]);

  function previousPage() {
    const previousPageNumber = currentPage - 1;
    if (posts[previousPageNumber] === undefined) {
      posts[previousPageNumber] = [];
    }
    saveCurrentPage(previousPageNumber);
  }

  function nextPage() {
    const nextPageNumber = currentPage + 1;
    if (posts[nextPageNumber] === undefined) {
      posts[nextPageNumber] = [];
    }
    saveCurrentPage(nextPageNumber);
  }

  return (
    <div>
      <h2>Posts</h2>
      <hr />
      <br />
      {currentPage <= 1 ? null : <button onClick={previousPage}>Previous</button>}
      <button onClick={nextPage}>Next</button>
      <div>
        {posts[currentPage].map(post => (
          <Fragment key={post.id}>
            <Post post={post} />
            <hr />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
