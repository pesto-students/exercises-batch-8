import { types } from './types';

describe('type', () => {
  it('"Array" if given an array literal', () => {
    expect(types([1, 2, 3])).toBe('Array');
  });

  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   expect(type(args), 'Arguments');
  // });

  it('"Object" if given an object literal', () => {
    expect(types({ batman: 'na na na na na na na' })).toBe('Object');
  });

  it('"RegExp" if given a RegExp literal', () => {
    expect(types(/[A-z]/)).toBe('RegExp');
  });

  it('"Number" if given a numeric value', () => {
    expect(types(4)).toBe('Number');
  });

  it('"Number" if given the NaN value', () => {
    expect(types(NaN)).toBe('Number');
  });

  it('"String" if given a String literal', () => {
    expect(types('Gooooodd Mornning Ramda!!')).toBe('String');
  });

  it('"String" if given a String object', () => {
    expect(types('I am a String object')).toBe('String');
  });

  it('"Null" if given the null value', () => {
    expect(types(null)).toBe('Null');
  });

  it('"Undefined" if given the undefined value', () => {
    expect(types(undefined)).toBe('Undefined');
  });
});
