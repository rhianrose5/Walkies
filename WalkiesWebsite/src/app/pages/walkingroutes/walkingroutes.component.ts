import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalksService } from '../../services/walk.service';
import { FacilitiesService } from '../../services/facility.service';
import { IWalks } from '../../models/walk';
import { IFacilities } from '../../models/facility';

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

  constructor(private route: ActivatedRoute, private _walksService: WalksService, private _facilitiesService: FacilitiesService) {
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

        console.log(facilityDetails)
      });
  }

}
