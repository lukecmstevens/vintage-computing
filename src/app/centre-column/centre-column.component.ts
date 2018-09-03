import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'centre-column',
  templateUrl: './centre-column.component.html',
  styleUrls: ['./centre-column.component.css']
})
export class CentreColumnComponent implements OnInit {

  @Input() size: string;
  @Input() image: string;

  innerClass : string;
  outerClass : string;

  constructor() { }

  ngOnInit() {
    if(this.size === "full"){
      this.innerClass = "col-xs-12";
      this.outerClass = "";
    }
    else if(this.size === "large"){
      this.innerClass = "col-xs-8";
      this.outerClass = "col-xs-2";
    }
    else if(this.size === "small"){
      this.innerClass = "col-xs-4";
      this.outerClass = "col-xs-4";
    }
    else{
      this.innerClass = "col-xs-6";
      this.outerClass = "col-xs-3";
    }
  }

}
