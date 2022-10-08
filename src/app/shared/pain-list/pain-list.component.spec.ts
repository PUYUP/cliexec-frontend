import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainListComponent } from './pain-list.component';

describe('PainListComponent', () => {
  let component: PainListComponent;
  let fixture: ComponentFixture<PainListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
