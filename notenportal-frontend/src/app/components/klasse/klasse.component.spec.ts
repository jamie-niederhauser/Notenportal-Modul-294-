import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlasseComponent } from './klasse.component';

describe('KlasseComponent', () => {
  let component: KlasseComponent;
  let fixture: ComponentFixture<KlasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KlasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
