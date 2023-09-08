import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggieComponent } from './veggie.component';

describe('VeggieComponent', () => {
  let component: VeggieComponent;
  let fixture: ComponentFixture<VeggieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeggieComponent]
    });
    fixture = TestBed.createComponent(VeggieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
