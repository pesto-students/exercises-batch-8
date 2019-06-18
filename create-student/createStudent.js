
function createStudent(studentData = {}) {
  let { likesJavaScript, likesES2015 } = studentData;
  if (likesJavaScript !== false || likesJavaScript === undefined) {
    likesJavaScript = true;
  }
  if (likesES2015 !== false || likesJavaScript === undefined) {
    likesES2015 = true;
  }
  if (likesJavaScript && likesES2015) {
    return 'The student likes JavaScript and ES2015';
  }
  if (likesJavaScript) {
    return 'The student likes JavaScript!';
  }
  if (likesES2015) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
