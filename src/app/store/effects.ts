import { CelebotPainEffects } from '../celebot/store/effects/pain/pain.effects';
import { CelebotReactionEffects } from '../celebot/store/effects/reaction/reaction.effects';
import { CelebotSelectTagEffects } from '../celebot/store/effects/select-tag/select-tag.effects';
import { PersonPasswordEffects } from '../person/store/effects/password/password.effects';
import { PersonSecurecodeEffects } from '../person/store/effects/securecode/securecode.effects';
import { PersonUserEffects } from '../person/store/effects/user/user.effects';

export const AppEffects = [
  PersonSecurecodeEffects,
  PersonUserEffects,
  PersonPasswordEffects,

  CelebotPainEffects,
  CelebotReactionEffects,
  CelebotSelectTagEffects,
];
