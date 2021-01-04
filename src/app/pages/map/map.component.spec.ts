import { ComponentFixture, TestBed, waitForAsync, async, inject } from '@angular/core/testing';
import { MapComponent } from './map.component';
import { HttpClientModule } from '@angular/common/http';
import { WalksService } from '../../services/walk.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let walkService: WalksService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [WalksService],
      declarations: [MapComponent],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    walkService = TestBed.get(WalksService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a map', () => {
    expect(component.map).toBeTruthy();
  });

  it('should call the walk service for getAll', () => {
    spyOn(walkService, 'getAll').and.returnValue(
      new Observable<any>()
    );
    component.ngOnInit();
    expect(walkService.getAll).toHaveBeenCalled();
  });
});
