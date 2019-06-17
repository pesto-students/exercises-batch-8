
function instructor(...args) {
  return args;
}
const instructorPrototype = {
  fName: 'Rama',
  sayHi: () => {
    this.fName = 'Ram';
    return 'Name Updated';
  },
  get firstName() {
    return this.fName;
  },
};
Object.setPrototypeOf(instructor, instructorPrototype);
export {
  instructor,
};
