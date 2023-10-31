import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrairieComponent } from './librairie.component';

describe('LibrairieComponent', () => {
  let component: LibrairieComponent;
  let fixture: ComponentFixture<LibrairieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrairieComponent]
    });
    fixture = TestBed.createComponent(LibrairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
