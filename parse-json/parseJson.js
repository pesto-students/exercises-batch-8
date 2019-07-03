
function parseJson(jsonToParse) {
  try {
    return JSON.parse(jsonToParse);
  } catch (ex) {
    const error = new Error(ex);
    error.code = 500;
    throw error;
  }
}

export {
  parseJson,
};
