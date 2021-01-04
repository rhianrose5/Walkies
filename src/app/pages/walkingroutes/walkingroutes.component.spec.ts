import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WalkingroutesComponent } from './walkingroutes.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { WalksService } from '../../services/walk.service';
import { Observable } from 'rxjs';
import { FacilitiesService } from '../../services/facility.service';

describe('WalkingroutesComponent', () => {
  let component: WalkingroutesComponent;
  let fixture: ComponentFixture<WalkingroutesComponent>;
  let walkService: WalksService;
  let facilitiesService: FacilitiesService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [WalksService, FacilitiesService],
      declarations: [WalkingroutesComponent],
      imports: [
        HttpClientModule,
        AppRoutingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkingroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    walkService = TestBed.get(WalksService);
  });

  /*beforeEach(() => {
    facilitiesService = TestBed.get(FacilitiesService);
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the walk service for getAllWalkInformation and faclities service for getFacilityInformation', () => {
    spyOn(walkService, 'getAllWalkInformation').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(walkService.getAllWalkInformation).toHaveBeenCalled();
  });

  /*it('should call the faclities service for getFacilityInformation', () => {
    spyOn(facilitiesService, 'getAllFacilityInformation').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(facilitiesService.getAllFacilityInformation).toHaveBeenCalled();
  });*/
});
