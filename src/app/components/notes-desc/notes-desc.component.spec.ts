import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDescComponent } from './notes-desc.component';

describe('NotesDescComponent', () => {
  let component: NotesDescComponent;
  let fixture: ComponentFixture<NotesDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesDescComponent]
    });
    fixture = TestBed.createComponent(NotesDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
