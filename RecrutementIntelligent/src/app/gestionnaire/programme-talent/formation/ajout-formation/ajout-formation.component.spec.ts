import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFormationComponent } from './ajout-formation.component';

describe('AjoutFormationComponent', () => {
  let component: AjoutFormationComponent;
  let fixture: ComponentFixture<AjoutFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutFormationComponent]
    });
    fixture = TestBed.createComponent(AjoutFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
