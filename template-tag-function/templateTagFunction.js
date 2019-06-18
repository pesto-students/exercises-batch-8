function escape(string) {
  return string
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function html(args) {
  return escape(args[0]);
}

function callTemplateTagFunction() {
  const escapeOnce = html`The expression 5 > 4 is "true" & 3 < 1 is false`;
  return escape(escapeOnce);
}

export { callTemplateTagFunction };
