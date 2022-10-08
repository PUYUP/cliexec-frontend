import { Component, OnInit } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { UserService } from 'src/app/person/services/user/user.service';
import { signoutUser } from 'src/app/person/store/actions/user/user.actions';
import { personSelectUser } from 'src/app/person/store/selectors/user/user.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<any> | undefined;
  loading: boolean = false;

  constructor(
    private store: Store<AppState>,
    private actionListener$: ActionsSubject,
    private userService: UserService
  ) {
    this.user$ = this.store.pipe(select(personSelectUser));
  }

  ngOnInit(): void {
    this.actionListener$
      .pipe(
        skip(1) // optional: skips initial logging done by ngrx
      )
      .subscribe((action: any) => {
        let type: string = action.type.toLocaleLowerCase();

        // Exclude selecttag
        if (!type.includes('selecttag')) {
          this.loading = true;

          if (
            (type.includes('success') && action?.data) ||
            (type.includes('failure') && action?.error) ||
            type.includes('reset') ||
            action.type === signoutUser.type
          ) {
            this.loading = false;
          }
        }
      });
  }

  signout(): void {
    this.store.dispatch(signoutUser());
  }
}
