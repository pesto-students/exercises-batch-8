function validateHTTPMethod(method) {
  return ['GET', 'POST', 'DELETE'].includes(method);
}

function validateHTTPURI(uri) {
  if (uri === '*') {
    return true;
  }
  const uriRegex = /^([a-z]+:\/\/)?([a-z.]+[^ ]+[a-z.]+)+$/ig;
  return uriRegex.test(uri);
}

function validateHTTPVersion(version) {
  return ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(version);
}

function requestValidator(request) {
  if (!validateHTTPMethod(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (!validateHTTPURI(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (!validateHTTPVersion(request.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }
  if (request.message == null) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return request;
}

export {
  requestValidator,
};
