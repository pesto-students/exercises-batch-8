/* eslint-disable no-unused-vars */
const getAttributes = () => {
  const aTag = document.querySelector('#w3r');
  const {
    href, hreflang, rel, target, type,
  } = aTag;

  return {
    href,
    hreflang,
    rel,
    target,
    type,
  };
};
