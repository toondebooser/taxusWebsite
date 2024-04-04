import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandplaatsVerbeteringComponent } from './standplaats-verbetering.component';

describe('StandplaatsVerbeteringComponent', () => {
  let component: StandplaatsVerbeteringComponent;
  let fixture: ComponentFixture<StandplaatsVerbeteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandplaatsVerbeteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandplaatsVerbeteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
