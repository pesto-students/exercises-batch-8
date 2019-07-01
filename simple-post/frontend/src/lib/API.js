const get = async (path) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(`http://localhost:3001${path}`, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      'pesto-password': 'darth vader',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
  });
  return response.json();
};

const post = async () => {

};

export {
  get,
  post,
};
