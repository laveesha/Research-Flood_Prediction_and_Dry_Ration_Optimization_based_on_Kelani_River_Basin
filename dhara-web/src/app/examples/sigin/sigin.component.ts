import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }


  landingPage(){
    this.router.navigate(['/landing'])

  }

}
