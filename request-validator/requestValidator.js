const URI_PATTERN = /^((http|https):\/\/)?[a-zA-Z]*\.\w+.\w+(\/\w+)*\/?(.\w+)?$/;
const METHOD_PATTERN = /^(GET|POST|DELETE)$/;

function requestValidator({
  method, uri, message,
}) {
  if (message === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }
  if (!URI_PATTERN.test(uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }
  if (!METHOD_PATTERN.test(method)) {
    throw new Error('Invalid request header: Invalid Method');
  }
  const request = { method, uri, message };
  return request;
}
export {
  requestValidator,
}