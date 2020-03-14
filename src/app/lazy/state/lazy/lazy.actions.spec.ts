import * as fromLazy from './lazy.actions';

describe('loadLazys', () => {
  it('should return an action', () => {
    expect(fromLazy.loadLazys().type).toBe('[Lazy] Load Lazys');
  });
});
