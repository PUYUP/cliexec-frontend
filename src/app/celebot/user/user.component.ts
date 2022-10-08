import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { retrieveUser } from 'src/app/person/store/actions/user/user.actions';
import {
  personRetrieveUser,
  personSelectUser,
} from 'src/app/person/store/selectors/user/user.selectors';
import { PainListComponent } from 'src/app/shared/pain-list/pain-list.component';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @ViewChild(PainListComponent) painList: any = PainListComponent;

  hexid: any;
  user$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.user$ = this.store.pipe(select(personRetrieveUser(this.hexid)));
  }

  ngOnInit(): void {
    this.hexid = this.route.snapshot.paramMap.get('user_hexid');
    this.store.dispatch(retrieveUser({ hexid: this.hexid }));
  }
}
