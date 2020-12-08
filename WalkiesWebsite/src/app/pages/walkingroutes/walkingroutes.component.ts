import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalksService } from '../../services/walk.service';
import { IWalkDetails } from '../../models/walkdetails';

@Component({
  selector: 'app-walkingroutes',
  templateUrl: './walkingroutes.component.html',
  styleUrls: ['./walkingroutes.component.css']
})
export class WalkingroutesComponent implements OnInit {
  currentURL = '';
  walkName = "";
  loading = true;
  walkDetails: IWalkDetails[] = [];

  constructor(private route: ActivatedRoute, private _walksService: WalksService) {
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
  }

}
