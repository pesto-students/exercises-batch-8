
const Properties = ['method', 'uri', 'version', 'message'];
const Methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
const Versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
const uriRegEx = /^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z.]?[a-z])*){2,255}(\/[\w-.~!$&'()*+,;=:@%]*)*$/i;
const specialCharRegEx = /[<>&'"\\]/;

const errorCodeObject = {
  method: 'Method',
  uri: 'URI',
  version: 'Version',
  message: 'Message',
};

function errorMessage(error) {
  return new Error(`Invalid request header: Invalid ${errorCodeObject[error]}`);
}

function getMissingProperties(request) {
  return Properties
    .filter(props => !Object.hasOwnProperty.call(request, props));
}

function isValidMethod(method) {
  return Methods.includes(method);
}

function isValidURI(uri) {
  return uriRegEx.test(uri);
}

function isValidVersion(version) {
  return Versions.includes(version);
}

function isValidMessage(message) {
  return !specialCharRegEx.test(message);
}

function requestValidator(request) {
  const missingProperties = getMissingProperties(request);

  if (missingProperties.length) {
    throw errorMessage(missingProperties[0]);
  }

  const {
    method,
    uri,
    version,
    message,
  } = request;

  if (!isValidMethod(method)) {
    throw errorMessage('method');
  }

  if (!isValidURI(uri)) {
    throw errorMessage('uri');
  }

  if (!isValidVersion(version)) {
    throw errorMessage('version');
  }

  if (!isValidMessage(message)) {
    throw errorMessage('message');
  }

  return request;
}

export {
  requestValidator,
};
