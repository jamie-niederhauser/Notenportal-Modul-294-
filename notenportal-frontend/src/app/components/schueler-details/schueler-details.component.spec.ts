import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchuelerDetailsComponent } from './schueler-details.component';

describe('SchuelerDetailsComponent', () => {
  let component: SchuelerDetailsComponent;
  let fixture: ComponentFixture<SchuelerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchuelerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchuelerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
