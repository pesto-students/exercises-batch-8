
const validMethods = ['POST', 'GET', 'PUT', 'DELETE'];
function requestValidator(requestObject) {
  if (!validMethods.includes(requestObject.method)) {
    throw Error('Invalid request header: Invalid Method');
  }
  if (!/^(https:\/\/)?(www\.)?[a-zA-Z0-9]*\.com$/.test(requestObject.uri)) {
    throw Error('Invalid request header: Invalid URI');
  }
  if (!Object.prototype.hasOwnProperty.call(requestObject, 'message')) {
    throw Error('Invalid request header: Invalid Message');
  }
  return requestObject;
}
export {
  requestValidator,
};
