import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-victimcount',
  templateUrl: './victimcount.component.html',
  styleUrls: ['./victimcount.component.scss']
})
export class VictimcountComponent implements OnInit {

  url = '';

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

/*  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = <string>event.target.result;
      }
    }
  } */


  showDiv = {
    previous : false,
  }

  reliefPage(){
    this.router.navigate(['/relief']);

  }

}
