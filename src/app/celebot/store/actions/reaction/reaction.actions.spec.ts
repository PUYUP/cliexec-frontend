import * as fromReaction from './reaction.actions';

describe('loadReactions', () => {
  it('should return an action', () => {
    expect(fromReaction.loadReactions().type).toBe('[Reaction] Load Reactions');
  });
});
