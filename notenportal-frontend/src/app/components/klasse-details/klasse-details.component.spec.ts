import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasseDetailsComponent } from './klasse-details.component';

describe('KlasseDetailsComponent', () => {
  let component: KlasseDetailsComponent;
  let fixture: ComponentFixture<KlasseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlasseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlasseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
