const METHODS = ['GET', 'POST', 'DELETE'];
const VERSIONS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
const URI_REGEX = '^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$';
const NON_MESSAGE_REGEX = ['<', '>', '\\'];

function validateMethod(method) {
  if (method === undefined) {
    return false;
  }
  return METHODS.includes(method);
}

function validateVersion(version) {
  if (version === undefined) {
    return false;
  }
  return VERSIONS.includes(version);
}

function validateUri(uri) {
  if (uri === undefined) {
    return false;
  }
  return uri.match(URI_REGEX);
}

function validateMessage(message) {
  if (message === undefined) {
    return false;
  }
  return !message.includes(NON_MESSAGE_REGEX);
}

function requestValidator(request) {
  if (!validateMethod(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  if (!validateUri(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (!validateMessage(request.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }
  if (!validateVersion(request.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }
  return request;
}

export { requestValidator };
