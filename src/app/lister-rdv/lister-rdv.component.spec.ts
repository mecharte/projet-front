import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerRdvComponent } from './lister-rdv.component';

describe('ListerRdvComponent', () => {
  let component: ListerRdvComponent;
  let fixture: ComponentFixture<ListerRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
