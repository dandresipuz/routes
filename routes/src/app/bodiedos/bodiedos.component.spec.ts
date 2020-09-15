import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodiedosComponent } from './bodiedos.component';

describe('BodiedosComponent', () => {
  let component: BodiedosComponent;
  let fixture: ComponentFixture<BodiedosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodiedosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodiedosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
