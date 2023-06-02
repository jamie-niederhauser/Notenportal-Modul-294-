import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchulfachDetailsComponent } from './schulfach-details.component';

describe('SchulfachDetailsComponent', () => {
  let component: SchulfachDetailsComponent;
  let fixture: ComponentFixture<SchulfachDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchulfachDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchulfachDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
