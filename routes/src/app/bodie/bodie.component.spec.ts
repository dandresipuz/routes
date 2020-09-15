import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodieComponent } from './bodie.component';

describe('BodieComponent', () => {
  let component: BodieComponent;
  let fixture: ComponentFixture<BodieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
