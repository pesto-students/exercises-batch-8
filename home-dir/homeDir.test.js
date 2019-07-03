import { homeDir } from './homeDir';

describe('Home directory', () => {
  test('if Home directory path returned is equal to actual home dir of system', () => {
    expect(homeDir()).toBe('/home/rollaball');
  });
});
