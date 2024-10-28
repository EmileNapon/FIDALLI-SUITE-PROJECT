import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnairePageComponent } from './gestionnaire-page.component';

describe('GestionnairePageComponent', () => {
  let component: GestionnairePageComponent;
  let fixture: ComponentFixture<GestionnairePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnairePageComponent]
    });
    fixture = TestBed.createComponent(GestionnairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
