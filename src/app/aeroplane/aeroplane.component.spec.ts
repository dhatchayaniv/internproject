import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeroplaneComponent } from './aeroplane.component';

describe('AeroplaneComponent', () => {
  let component: AeroplaneComponent;
  let fixture: ComponentFixture<AeroplaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AeroplaneComponent]
    });
    fixture = TestBed.createComponent(AeroplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
