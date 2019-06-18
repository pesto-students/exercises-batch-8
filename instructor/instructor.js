function Instructor() {
  this.firstName = '';
  this.sayHi = function () {
    this.firstName = 'Ram';
  };
}

const instructor = new Instructor();

export { instructor };
