import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeBeverComponent } from './de-bever.component';

describe('DeBeverComponent', () => {
  let component: DeBeverComponent;
  let fixture: ComponentFixture<DeBeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeBeverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeBeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
