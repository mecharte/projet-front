import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersComponent } from './ajouter-pers.component';

describe('AjouterPersComponent', () => {
  let component: AjouterPersComponent;
  let fixture: ComponentFixture<AjouterPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPersComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
