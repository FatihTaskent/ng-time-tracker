import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-side-bar',
  templateUrl: './nav-side-bar.component.html',
})
export class NavSideBarComponent implements OnInit {

  public collapseShow: string = "hidden";

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes; 
  }

}
