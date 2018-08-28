import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoazulComponent } from './fondoazul.component';

describe('FondoazulComponent', () => {
  let component: FondoazulComponent;
  let fixture: ComponentFixture<FondoazulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondoazulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondoazulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
