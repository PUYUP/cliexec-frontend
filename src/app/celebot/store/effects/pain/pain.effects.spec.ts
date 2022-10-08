import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PainEffects } from './pain.effects';

describe('PainEffects', () => {
  let actions$: Observable<any>;
  let effects: PainEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PainEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PainEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
