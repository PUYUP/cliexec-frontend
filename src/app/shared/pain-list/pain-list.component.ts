import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import {
  deletePain,
  loadPains,
  resetPain,
} from 'src/app/celebot/store/actions/pain/pain.actions';
import { createReaction } from 'src/app/celebot/store/actions/reaction/reaction.actions';
import { celebotSelectPains } from 'src/app/celebot/store/selectors/pain/pain.selectors';
import { AppState } from 'src/app/store/reducers';
import { PainEditorDialogComponent } from '../pain-editor-dialog/pain-editor-dialog.component';

import Swal from 'sweetalert2';
import {
  addTag,
  removeTag,
  resetTag,
} from 'src/app/celebot/store/actions/select-tag/select-tag.actions';
import { celebotSelectTag } from 'src/app/celebot/store/selectors/select-tag/select-tag.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pain-list',
  templateUrl: './pain-list.component.html',
  styleUrls: ['./pain-list.component.css'],
})
export class PainListComponent implements OnInit {
  @Input('userHexid') userHexid: any;

  selectTags$: Observable<any> | undefined;
  pains$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  filterTags: any;
  param: any;
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.pains$ = this.store.pipe(select(celebotSelectPains));

    this.selectTags$ = this.store.pipe(select(celebotSelectTag));
    this.selectTags$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((state: any) => {
        if (state?.action == 'add' || state?.action == 'remove') {
          let data = state?.data;
          let tags = [];

          for (let t of data) {
            tags.push(t.name);
          }

          this.filterTags = {
            tags: tags.join(','),
          };
        }
      });
  }

  ngOnInit(): void {
    // show by user
    if (this.userHexid) {
      this.param = { user_hexid: this.userHexid };
    } else {
      this.param = {};
    }

    this.loadPains();
  }

  returnZero() {
    return 0;
  }

  edit(item: any): void {
    const dialogRef = this.dialog.open(PainEditorDialogComponent, {
      autoFocus: false,
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 650,
      maxHeight: '90vh',
      data: item,
    });
  }

  delete(item: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This item will deleted forever.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deletePain({ uuid: item.uuid }));
      }
    });
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(
      loadPains({ ...this.param, isLoadMore: true, url: url })
    );
  }

  addReaction(item: any, identifier: any): void {
    let data = {
      identifier: identifier,
      translate: item?.default_translate?.uuid,
      pain: item?.uuid,
    };

    this.store.dispatch(createReaction({ data: data }));
  }

  filtering(params: any): void {
    this.param = { ...params };
    this.loadPains();
  }

  selectTag(tag: any): void {
    this.store.dispatch(addTag({ data: tag }));
    this.loadPains();
  }

  removeSelectedTag(tag: any): void {
    this.store.dispatch(removeTag({ data: tag }));
    this.loadPains();
  }

  loadPains(): void {
    this.store.dispatch(loadPains({ ...this.param, ...this.filterTags }));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
