import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodtoyComponent } from './woodtoy.component';

describe('WoodtoyComponent', () => {
  let component: WoodtoyComponent;
  let fixture: ComponentFixture<WoodtoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WoodtoyComponent]
    });
    fixture = TestBed.createComponent(WoodtoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
