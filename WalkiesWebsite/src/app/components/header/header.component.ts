import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*expandNavbar() {
    //change icon to be a cross
    if (document.getElementById("navbarIcon").className == "fa fa-bars") {
      document.getElementById("navbarIcon").className = "fa fa-paw";
    } else {
      document.getElementById("navbarIcon").className = "fa fa-bars"
    }


    //expand links
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }*/
}
