import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilProgrammeTalentComponent } from './formation.component';

describe('FormationComponent', () => {
  let component: AcceuilProgrammeTalentComponent;
  let fixture: ComponentFixture<AcceuilProgrammeTalentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilProgrammeTalentComponent]
    });
    fixture = TestBed.createComponent(AcceuilProgrammeTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
