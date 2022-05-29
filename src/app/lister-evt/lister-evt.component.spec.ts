import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerEvtComponent } from './lister-evt.component';

describe('ListerEvtComponent', () => {
  let component: ListerEvtComponent;
  let fixture: ComponentFixture<ListerEvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerEvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerEvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
