import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unitinformation',
  templateUrl: './unitinformation.component.html',
  styleUrls: ['./unitinformation.component.css']
})
export class UnitinformationComponent implements OnInit {

  constructor(public route : ActivatedRoute) {
    var snapshot = route.snapshot;
    console.log(snapshot.routeConfig.component.name); //This will give you the name of current active component
  
  }

  ngOnInit() {
    

  }

}
