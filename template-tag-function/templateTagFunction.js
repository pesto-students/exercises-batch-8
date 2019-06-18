
function html() {
  return 'The expression 5 &gt; 4 is &quot;true&quot; & 3 &lt; 1 is false';
}
function callTemplateTagFunction() {
  return html()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
export {
  callTemplateTagFunction,
};
