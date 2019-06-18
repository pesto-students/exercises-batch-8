function createStudent(student) {
  const { likesES2015, likesJavaScript } = { likesES2015: true, likesJavaScript: true, ...student };
  if (likesES2015 === true && likesJavaScript === true) {
    return 'The student likes JavaScript and ES2015';
  }
  if (likesES2015 === true && likesJavaScript === false) {
    return 'The student likes ES2015!';
  }
  if (likesJavaScript === true && likesES2015 === false) {
    return 'The student likes JavaScript!';
  }
  return 'The student does not like much...';
}

export { createStudent };
