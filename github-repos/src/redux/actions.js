

export const fetchRepos = username => (dispatch) => {
  dispatch({ type: 'LOADING' });
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      dispatch({ type: 'SUCCESS' });
      return response.json();
    })
    .then(data => dispatch({ type: 'FETCH_REPOS', payload: data.map(repo => repo.name) }));
};
