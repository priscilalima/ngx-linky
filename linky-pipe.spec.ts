import {LinkyPipe} from './linky-pipe';

describe('LinkyPipe', () => {
  it('should have dummy test', () => {
      const pipe = new LinkyPipe();
      expect(pipe.transform('test')).toBe('test');
  });
});