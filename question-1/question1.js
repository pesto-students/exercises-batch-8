/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-var
var window;

function question1(cssTextStyle) {
  window.document.getElementById('text').setAttribute('style', cssTextStyle);
}

function jsStyle() {
  const cssTextStyle = 'color:red;';
  question1(cssTextStyle);
}
