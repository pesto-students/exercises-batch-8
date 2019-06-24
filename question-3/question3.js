/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
var window;

function question3() {
  const aElement = window.document.getElementById('w3r');
  return {
    href: aElement.href,
    hreflang: aElement.hreflang,
    rel: aElement.rel,
    target: aElement.target,
    type: aElement.type,
  };
}

const getAttributes = (event) => {
  event.preventDefault();
  console.log(question3());
};
