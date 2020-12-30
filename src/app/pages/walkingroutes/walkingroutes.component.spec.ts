import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WalkingroutesComponent } from './walkingroutes.component';
import { compileComponentFromMetadata } from '@angular/compiler';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('WalkingroutesComponent', () => {
  let component: WalkingroutesComponent;
  let fixture: ComponentFixture<WalkingroutesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [WalkingroutesComponent],
      imports: [
        HttpClientModule,
        ActivatedRoute
      ]
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
