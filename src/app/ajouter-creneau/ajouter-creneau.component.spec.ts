import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCreneauComponent } from './ajouter-creneau.component';

describe('AjouterCreneauComponent', () => {
  let component: AjouterCreneauComponent;
  let fixture: ComponentFixture<AjouterCreneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCreneauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCreneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
