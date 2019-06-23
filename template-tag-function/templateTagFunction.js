
function templateTagFunction(html) {
  const replaces = {
    '>': '&amp;gt;',
    '&': '&amp;',
    '"': '&amp;quot;',
    '<': '&amp;lt;',
  };
  return html.split('').reduce((acc, char) => acc + (replaces[char] === undefined ? char : replaces[char]), '');
}
function callTemplateTagFunction() {
  // eslint-disable-next-line quotes
  return templateTagFunction(`The expression 5 > 4 is "true" & 3 < 1 is false`);
}
export {
  callTemplateTagFunction,
};
