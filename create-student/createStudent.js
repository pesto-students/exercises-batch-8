
function createStudent(likes = {}) {
  let { likesJavaScript, likesES2015 } = likes;
  if (likesJavaScript !== false) {
    likesJavaScript = true;
  }
  if (likesES2015 !== false) {
    likesES2015 = true;
  }

  const likesBoth = likesJavaScript && likesES2015;
  const likesJS = likesJavaScript && !likesES2015;
  const likesES6 = likesES2015 && !likesJavaScript;

  if (likesBoth) {
    return 'The student likes JavaScript and ES2015';
  }
  if (likesJS) {
    return 'The student likes JavaScript!';
  }
  if (likesES6) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
