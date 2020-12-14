import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkingroutesComponent } from './walkingroutes.component';

describe('WalkingroutesComponent', () => {
  let component: WalkingroutesComponent;
  let fixture: ComponentFixture<WalkingroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkingroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
