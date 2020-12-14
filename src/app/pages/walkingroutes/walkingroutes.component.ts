import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalksService } from '../../services/walk.service';
import { FacilitiesService } from '../../services/facility.service';
import { IWalks } from '../../models/walk';
import { IFacilities } from '../../models/facility';
import { IPhotos } from '../../models/photo';
import { PhotosService } from '../../services/photo.service';

@Component({
  selector: 'app-walkingroutes',
  templateUrl: './walkingroutes.component.html',
  styleUrls: ['./walkingroutes.component.css']
})
export class WalkingroutesComponent implements OnInit {
  currentURL = '';
  walkName = "";
  loading = true;
  walkDetails: IWalks[] = [];
  facilityDetails: IFacilities[] = [];
  photos: IPhotos[] = [];

  constructor(private route: ActivatedRoute, private _walksService: WalksService, private _facilitiesService: FacilitiesService, private _photosService: PhotosService) {
    this.currentURL = window.location.href;
  }

  ngOnInit() {
    const allParams = this.route.snapshot.params
    const walkName = allParams.walkname

    this._walksService.getAllWalkInformation(walkName)
      .subscribe(walkDetails => {
        this.loading = false;
        this.walkDetails = walkDetails;
      });

    this._facilitiesService.getAllFacilityInformation(walkName)
      .subscribe(facilityDetails => {
        this.loading = false;
        this.facilityDetails = facilityDetails;
      });

    this._photosService.getAllPhotos(walkName)
      .subscribe(photos => {
        this.loading = false;
        this.photos = photos;
      });
  }

}
