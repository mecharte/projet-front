import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheRdvComponent } from './recherche-rdv.component';

describe('RechercheRdvComponent', () => {
  let component: RechercheRdvComponent;
  let fixture: ComponentFixture<RechercheRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
