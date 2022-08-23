import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcardComponent } from './landingcard.component';

describe('LandingcardComponent', () => {
  let component: LandingcardComponent;
  let fixture: ComponentFixture<LandingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
