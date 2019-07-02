
const clubMember = {
  firstname: 'John',
  lastname: 'Doe',
  memberStatus: 'Full',
  city: 'Delhi',
};

const Sara = '{ "height":1.9, "age":36, "eyeColor":"brown"}';
const objectSara = JSON.parse(Sara);


const conference = {
  startDay: 'Monday',
  nextDay: 'Tuesday',
  endDay: 'Wednesday',
};
const { endDay } = conference;


const Mike = {};
Mike.height = 1.9;
Mike.age = 36;
Mike.eyecolor = 'brown';

const mikeStringified = Sara;

export {
  clubMember,
  objectSara,
  endDay,
  mikeStringified,
};
