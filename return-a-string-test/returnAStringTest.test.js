const returnAString = () => 'helloworld';

describe('returnAString test', () => {
  test('should return a string', () => {
    expect(returnAString()).toContain('helloworld');
  });
});
