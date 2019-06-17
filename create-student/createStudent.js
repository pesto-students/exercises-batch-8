
function createStudent(studentLikes) {
  const generalLikes = {
    likesJavaScript: false,
    likesES2015: false,
  };
  const finalLikes = Object.assign(studentLikes, generalLikes);
  if (finalLikes.likesES2015 && finalLikes.likesJavaScript) {
    return 'The student likes JavaScript and ES2015';
  } if (finalLikes.likesES2015 && !finalLikes.likesJavaScript) {
    return 'The student likes ES2015!';
  } if (!finalLikes.likesES2015 && finalLikes.likesJavaScript) {
    return 'The student likes JavaScript!';
  }
  return 'The student does not like much...';
}

export {
  createStudent,
};
