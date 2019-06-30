
const baseUrl = 'http://localhost:3001/posts/';

export function getPageData(pageNo) {
  return fetch(`${baseUrl}${pageNo}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'pesto-password': 'darth vader',
    },
  })
    .then(response => response.json())
    .then((response) => {
      this.setState({
        posts: response.data,
      });
    });
}
