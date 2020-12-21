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
import { FormControl, FormGroup } from '@angular/forms';
//import { io } from 'socket.io-client';
import * as io from 'socket.io-client';

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
  //socket = io('http://localhost:9000');
  socket = io('https://walkies-app.herokuapp.com');
  dogBinExists = false;
  carParkExists = false;
  toiletExists = false;
  cafeExists = false;

  get f() { return this.commentForm.value; }

  constructor(private route: ActivatedRoute, private _walksService: WalksService, private _facilitiesService: FacilitiesService, private _photosService: PhotosService, private _commentsService: CommentsService) {
    this.currentURL = window.location.href;

    this.socket.on('connect', function () {
      console.log('Yeah I am connected!!');
    });

    this.socket.on('click_count', function (value) {
      console.log("Count:" + value);
      document.getElementById("counter").innerHTML = value;
    });
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

        if (this.facilityDetails[0].facilities.find(x => x === "Dog Bin")) {
          this.dogBinExists = true;
        }
        if (this.facilityDetails[0].facilities.find(x => x === "Car Park")) {
          this.carParkExists = true;
        }
        if (this.facilityDetails[0].facilities.find(x => x === "Toilets")) {
          this.toiletExists = true;
        }
        if (this.facilityDetails[0].facilities.find(x => x === "Cafe")) {
          this.cafeExists = true;
        }
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

  addLike() {
    this.socket.emit('clicked');
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
          document.getElementById("commentSuccessMessage").style.color = "#ffb700";
          document.getElementById("commentSuccessMessage").innerHTML = "Comment successfully added!";
          window.location.reload();
        },
        error => {
          document.getElementById("commentSuccessMessage").style.color = "red";
          document.getElementById("commentSuccessMessage").innerHTML = "Please enter a valid comment";
        });
  }
}
