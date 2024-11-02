import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbordProgTalentComponent } from './dasbord-prog-talent.component';

describe('DasbordProgTalentComponent', () => {
  let component: DasbordProgTalentComponent;
  let fixture: ComponentFixture<DasbordProgTalentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasbordProgTalentComponent]
    });
    fixture = TestBed.createComponent(DasbordProgTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
