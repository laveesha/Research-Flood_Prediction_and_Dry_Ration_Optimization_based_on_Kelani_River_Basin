import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-relief',
  templateUrl: './relief.component.html',
  styleUrls: ['./relief.component.scss']
})
export class ReliefComponent implements OnInit {

  selectedArea: string ='';
  Dryration:any;
  Cookedfood:any;
  Drycount:any;
  cookedcount:any;

  constructor() { }

  ngOnInit() {
  }

  selectChangeHandeler (event: any){
    this.selectedArea = event.target.value;
    event.target.value= "Select a location";
    //event.target.selected;
    
  }


  filterName:string;
  clear(){
  this.filterName = '';
   this.Drycount  = '';
  this.cookedcount = '';

  }

  performSearch(filterName){
    
    this.Drycount = filterName *500;
    this.cookedcount = filterName*300;
   
    this.selectedArea ='';
    this.filterName = '   ';
    
   // this.Drycount  = '';
   /// this.cookedcount = '';


  }

}






  
 
