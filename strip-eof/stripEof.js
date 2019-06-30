function stripStringE(str) {
  let stripedRes = str;

  if (stripedRes[stripedRes.length - 1] === '\n') {
    stripedRes = stripedRes.slice(0, stripedRes.length - 1);
  }
  if (stripedRes[stripedRes.length - 1] === '\r') {
    stripedRes = stripedRes.slice(0, stripedRes.length - 1);
  }
  return stripedRes;
}

function stripEof(strOrBuf) {
  if (typeof stringOrStream === 'string') {
    return stripStringE(strOrBuf);
  }
  const stripedStr = stripStringE(strOrBuf.toString());
  return Buffer.from(stripedStr);
}

export {
  stripEof,
};
