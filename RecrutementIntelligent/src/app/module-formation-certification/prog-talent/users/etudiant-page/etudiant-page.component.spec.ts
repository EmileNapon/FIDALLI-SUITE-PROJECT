import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantPageComponent } from './etudiant-page.component';

describe('EtudiantPageComponent', () => {
  let component: EtudiantPageComponent;
  let fixture: ComponentFixture<EtudiantPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantPageComponent]
    });
    fixture = TestBed.createComponent(EtudiantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
