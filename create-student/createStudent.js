
function createStudent({ likesJavaScript = true, likesES2015 = true } = {}) {
  if (likesES2015 && likesJavaScript) {
    return 'The student likes JavaScript and ES2015';
  }
  if (!likesES2015 && likesJavaScript) {
    return 'The student likes JavaScript!';
  }
  if (!likesJavaScript && likesES2015) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
