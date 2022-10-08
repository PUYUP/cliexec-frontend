import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUserFromCookie } from './person/store/actions/user/user.actions';
import { AppState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cliexec';

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getUserFromCookie());
  }
}
