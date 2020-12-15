import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalksService } from '../../services/walk.service';
import { FacilitiesService } from '../../services/facility.service';
import { IWalks } from '../../models/walk';
import { IFacilities } from '../../models/facility';
import { IPhotos } from '../../models/photo';
import { PhotosService } from '../../services/photo.service';
import { CommentsService } from '../../services/comment.service';
import { IComments } from '../../models/comment';
import { first } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';

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
  comments: IComments[] = [];
  commentForm = new FormGroup({
    comment: new FormControl('')
  });
  get f() { return this.commentForm.value; }

  constructor(private route: ActivatedRoute, private _walksService: WalksService, private _facilitiesService: FacilitiesService, private _photosService: PhotosService, private _commentsService: CommentsService) {
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

    this._commentsService.getAllComments(walkName)
      .subscribe(comments => {
        this.loading = false;
        this.comments = comments;
      });
  }

  onCommentSubmit() {
    var walkName = document.getElementById("routeName").innerHTML;

    const data = {
      walkName: walkName,
      //TODO: Update with user detail
      userId: "Test user",
      comment: this.f.comment
    };

    this._commentsService.leaveComment(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
