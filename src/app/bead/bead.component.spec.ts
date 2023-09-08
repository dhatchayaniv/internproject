import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeadComponent } from './bead.component';

describe('BeadComponent', () => {
  let component: BeadComponent;
  let fixture: ComponentFixture<BeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeadComponent]
    });
    fixture = TestBed.createComponent(BeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
