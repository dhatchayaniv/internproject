import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BunnyComponent } from './bunny.component';

describe('BunnyComponent', () => {
  let component: BunnyComponent;
  let fixture: ComponentFixture<BunnyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BunnyComponent]
    });
    fixture = TestBed.createComponent(BunnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
