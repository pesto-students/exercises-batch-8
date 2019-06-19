describe('A simple iterable without items inside, implementing the right protocol', () => {
  function iteratorFunction() {
    return {
      [Symbol.iterator]() {
        return {
          next: () => {
            return { 'done': true, 'value': undefined }
          },
        }
      }
    }
  }

  describe('the `iteratorFunction` needs to comply to the iterator protocol', () => {
    it('must return an object', () => {
      expect(typeof iteratorFunction()).toBe('object');
    });
    it('the object must have a function assigned to a key `next`', () => {
      expect(typeof iteratorFunction()[Symbol.iterator]().next).toBe('function');
    });
    it('calling `next()` must return an object with `{done: true}`', () => {
      expect(iteratorFunction()[Symbol.iterator]().next()).toEqual({
        done: true,
        value: undefined
      });
    });
  });

  let iterable;
  beforeEach(() => {
    iterable = iteratorFunction();
  });

  describe('the iterable', () => {
    it('must be an object', () => {
      expect(typeof iterable).toBe('object');
    });
    it('must have the iterator function assigned to the key `Symbol.iterator`', () => {
      expect(typeof iteratorFunction()[Symbol.iterator]().next).toBe('function');
    });
  });

  describe('using the iterable', () => {
    it('it contains no values', () => {
      let values = '';
      console.log(iterable)
      for (const value of iterable) {
        values += value;
      }
      expect(values).toBe('');
    });

    it('has no `.length` property', () => {
      const hasLengthProperty = Object.prototype.hasOwnProperty(iterable, 'length');
      expect(hasLengthProperty).toBe(false);
    });

    describe('can be converted to an array', () => {
      it('using `Array.from()`', () => {
        const arr = Array.from(iterable);
        expect(Array.isArray(arr)).toBe(true);
      });

      it('where `.length` is still 0', () => {
        const arr = Array.from(iterable);
        const {
          length,
        } = arr;
        expect(length).toBe(0);
      });
    });
  });
});
