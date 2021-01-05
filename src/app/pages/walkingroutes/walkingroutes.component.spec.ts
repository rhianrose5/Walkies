import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WalkingroutesComponent } from './walkingroutes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppRoutingModule } from '../../app-routing.module';
import { WalksService } from '../../services/walk.service';
import { Observable } from 'rxjs';
import { FacilitiesService } from '../../services/facility.service';
import { PhotosService } from '../../services/photo.service';
import { CommentsService } from '../../services/comment.service';

describe('WalkingroutesComponent', () => {
  let component: WalkingroutesComponent;
  let fixture: ComponentFixture<WalkingroutesComponent>;
  let walkService: WalksService;
  let facilitiesService: FacilitiesService;
  let photosService: PhotosService;
  let commentsService: CommentsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [WalksService, FacilitiesService, PhotosService],
      declarations: [WalkingroutesComponent],
      imports: [
        HttpClientTestingModule,
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

  beforeEach(() => {
    facilitiesService = TestBed.get(FacilitiesService);
  });

  beforeEach(() => {
    photosService = TestBed.get(PhotosService);
  });

  beforeEach(() => {
    commentsService = TestBed.get(CommentsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the walk service for getAllWalkInformation', () => {
    spyOn(walkService, 'getAllWalkInformation').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(walkService.getAllWalkInformation).toHaveBeenCalled();
  });

  it('should call the faclities service for getFacilityInformation', () => {
    spyOn(facilitiesService, 'getAllFacilityInformation').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(facilitiesService.getAllFacilityInformation).toHaveBeenCalled();
  });

  it('should call the photos service for getAllPhotos', () => {
    spyOn(photosService, 'getAllPhotos').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(photosService.getAllPhotos).toHaveBeenCalled();
  });

  it('should call the comments service for getAllComments', () => {
    spyOn(commentsService, 'getAllComments').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(commentsService.getAllComments).toHaveBeenCalled();
  });

  it('should require user to log in', () => {
    const commentDisclaimer = fixture.debugElement.nativeElement.querySelector('#commentDisclaimer');
    expect(commentDisclaimer.innerHTML).toBe('Please create an account or log in to leave a comment.');
  });

  /*it('should add a like to the like count', () => {
    const likeValue = fixture.debugElement.nativeElement.querySelector('#counter').innerHTML;
    const likeButton = fixture.debugElement.nativeElement.querySelector('#likeButton');
    likeButton.click();
    const newLikeValue = fixture.debugElement.nativeElement.querySelector('#counter');
    expect(newLikeValue.innerHTML).toBe(likeValue + 1);
  });*/
});
