import { ActionReducerMap } from '@ngrx/store';

// CELEBOT
import {
  CelebotPainReducer,
  CelebotPainState,
} from '../celebot/store/reducers/pain/pain.reducer';
import {
  CelebotReactionReducer,
  CelebotReactionState,
} from '../celebot/store/reducers/reaction/reaction.reducer';
import {
  CelebotSelectTagReducer,
  CelebotSelectTagState,
} from '../celebot/store/reducers/select-tag/select-tag.reducer';

// PERSON
import {
  PersonPasswordReducer,
  PersonPasswordState,
} from '../person/store/reducers/password/password.reducer';
import {
  PersonSecurecodeReducer,
  PersonSecurecodeState,
} from '../person/store/reducers/securecode/securecode.reducer';
import {
  PersonUserReducer,
  PersonUserState,
} from '../person/store/reducers/user/user.reducer';

// STATE
export interface AppState {
  person_securecode: PersonSecurecodeState;
  person_user: PersonUserState;
  person_password: PersonPasswordState;

  celebot_pain: CelebotPainState;
  celebot_reaction: CelebotReactionState;
  celebot_select_tag: CelebotSelectTagState;
}

// REDUCERS
export const AppReducers: ActionReducerMap<AppState> = {
  person_securecode: PersonSecurecodeReducer,
  person_user: PersonUserReducer,
  person_password: PersonPasswordReducer,

  celebot_pain: CelebotPainReducer,
  celebot_reaction: CelebotReactionReducer,
  celebot_select_tag: CelebotSelectTagReducer,
};
