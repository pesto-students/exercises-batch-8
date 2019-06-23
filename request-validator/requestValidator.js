
function requestValidator(request) {
  const {
    method, uri, message,
  } = request;
  if (message === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }
  const uriPattern = /^((http|https):\/\/)?[a-zA-Z]*\.\w+.\w+(\/\w+)*\/?(.\w+)?$/;
  if (!uriPattern.test(uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  const methodPattern = /^(GET|POST|DELETE)$/;
  if (!methodPattern.test(method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  return request;
}

export {
  requestValidator,
};
