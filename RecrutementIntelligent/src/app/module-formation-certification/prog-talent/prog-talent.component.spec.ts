import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgTalentComponent } from './prog-talent.component';

describe('ProgTalentComponent', () => {
  let component: ProgTalentComponent;
  let fixture: ComponentFixture<ProgTalentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgTalentComponent]
    });
    fixture = TestBed.createComponent(ProgTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
