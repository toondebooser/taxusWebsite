import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtaComponent } from './vta.component';

describe('VtaComponent', () => {
  let component: VtaComponent;
  let fixture: ComponentFixture<VtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
