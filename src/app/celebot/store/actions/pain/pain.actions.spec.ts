import * as fromPain from './pain.actions';

describe('loadPains', () => {
  it('should return an action', () => {
    expect(fromPain.loadPains().type).toBe('[Pain] Load Pains');
  });
});
