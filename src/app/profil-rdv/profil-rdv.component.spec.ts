import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilRdvComponent } from './profil-rdv.component';

describe('ProfilRdvComponent', () => {
  let component: ProfilRdvComponent;
  let fixture: ComponentFixture<ProfilRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
