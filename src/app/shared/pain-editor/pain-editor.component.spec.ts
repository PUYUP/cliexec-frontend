import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainEditorComponent } from './pain-editor.component';

describe('PainEditorComponent', () => {
  let component: PainEditorComponent;
  let fixture: ComponentFixture<PainEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
