
function createStudent(obj) {
  if (!obj) return 'The student likes JavaScript and ES2015';
  if (obj.likesJavaScript !== false && obj.likesES2015 !== false) {
    return 'The student likes JavaScript and ES2015';
  }
  if (obj.likesJavaScript !== false) {
    return 'The student likes JavaScript!';
  }
  if (obj.likesES2015 !== false) {
    return 'The student likes ES2015!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
