import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {}


  victimCountPage(){
    this.router.navigate(['/victim-count'])

  }

    
  reliefPage(){
    this.router.navigate(['/relief']);

  }

}