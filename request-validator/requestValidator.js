
const REQUEST_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

const uriRegex = /^([a-z]+:\/\/)?([a-z.]+[^ ]+[a-z.]+)+$/;

const validUri = string => uriRegex.test(string);

const validMessage = string => string !== undefined;

function requestValidator(request) {
  if (!REQUEST_METHODS.includes(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
    // throw new Error(`Invalid request header: ${request.method} Invalid Method`);
  }
  if (!validUri(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
    // throw new Error(`Invalid request header: ${request.uri} Invalid URI`);
  }

  if (!validMessage(request.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }
  return request;
}

export {
  requestValidator,
};
