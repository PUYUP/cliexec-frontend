import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createPain,
  updatePain,
} from 'src/app/celebot/store/actions/pain/pain.actions';
import { celebotSelectPains } from 'src/app/celebot/store/selectors/pain/pain.selectors';
import { AppState } from 'src/app/store/reducers';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

// import * as SimpleMDE from 'simplemde';

@Component({
  selector: 'app-pain-editor',
  templateUrl: './pain-editor.component.html',
  styleUrls: ['./pain-editor.component.css'],
})
export class PainEditorComponent implements OnInit {
  @Output() painEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  formGroup: any = FormGroup;
  pains$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: any = [];

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.pains$ = this.store.pipe(select(celebotSelectPains));
    this.pains$?.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
      if (state?.status == 'loaded') {
        if (state?.action == 'create') {
          this.formGroup.reset();
        }

        if (state?.action == 'create' || state?.action == 'update')
          this.cancel();
      }
    });
  }

  ngOnInit(): void {
    this.initForm();

    // set value
    if (this.data) {
      this.formGroup.patchValue({
        label: this.data?.default_translate?.label,
        problem: this.data?.default_translate?.problem,
        solution: this.data?.default_translate?.solution,
      });

      this.tags = [...this.data?.default_translate?.tags];
    }
  }

  ngAfterViewInit(): void {
    //console.log(document.getElementById('xxx'));
    //var simplemde = new SimpleMDE({ element: document.getElementById('xxx') });
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      label: [''],
      problem: ['', [Validators.required, Validators.minLength(15)]],
      solution: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tag
    if (value) {
      this.tags.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeTag(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onSubmit(): void {
    let flatTags = [];

    for (let tag of this.tags) {
      flatTags.push(tag.name);
    }

    let data = {
      translate: {
        locale: 'en_US',
        tags: flatTags,
        ...this.formGroup.value,
      },
    };

    if (this.data) {
      this.store.dispatch(updatePain({ data: data, uuid: this.data?.uuid }));
    } else {
      this.store.dispatch(createPain({ data: data }));
    }
  }

  cancel(): void {
    this.painEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
