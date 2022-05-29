import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerPersComponent } from './lister-pers.component';

describe('ListerPersComponent', () => {
  let component: ListerPersComponent;
  let fixture: ComponentFixture<ListerPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
