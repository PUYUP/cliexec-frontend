import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/person/services/user/user.service';
import { PainEditorDialogComponent } from 'src/app/shared/pain-editor-dialog/pain-editor-dialog.component';
import { PainListComponent } from 'src/app/shared/pain-list/pain-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild(PainListComponent) painList: any = PainListComponent;

  painShowing = 'all';
  userData: any;

  constructor(private matDialog: MatDialog, private userService: UserService) {}

  ngOnInit(): void {
    this.userData = this.userService.getCurrentUser();
  }

  startCelebrate(): void {
    const dialogRef = this.matDialog.open(PainEditorDialogComponent, {
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 650,
    });
  }

  painShowingChange(event: any): void {
    let value = event.value;
    this.painShowing = value;

    this.painList.filtering({
      user_hexid: this.painShowing == 'own' ? this.userData?.user?.hexid : '',
    });
  }
}
