import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainEditorDialogComponent } from './pain-editor-dialog.component';

describe('PainEditorDialogComponent', () => {
  let component: PainEditorDialogComponent;
  let fixture: ComponentFixture<PainEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
