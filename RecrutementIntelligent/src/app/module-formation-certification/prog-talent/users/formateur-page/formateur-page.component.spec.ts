import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurPageComponent } from './formateur-page.component';

describe('FormateurPageComponent', () => {
  let component: FormateurPageComponent;
  let fixture: ComponentFixture<FormateurPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormateurPageComponent]
    });
    fixture = TestBed.createComponent(FormateurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
