
function requestValidator(request) {
  const hasKey = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

  const METHODS = ['GET', 'POST', 'DELETE'];
  if (!hasKey(request, 'method') || !METHODS.includes(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  const VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (!hasKey(request, 'version') || !VERSIONS.includes(request.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!hasKey(request, 'message')) {
    throw new Error('Invalid request header: Invalid Message');
  }

  const URI_REGEX = /^[a-zA-Z0-9.]+$/;
  if (!hasKey(request, 'uri') || !URI_REGEX.test(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  return request;
}

export {
  requestValidator,
};
