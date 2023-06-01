import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchulfachComponent } from './schulfach.component';

describe('SchulfachComponent', () => {
  let component: SchulfachComponent;
  let fixture: ComponentFixture<SchulfachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchulfachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchulfachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
