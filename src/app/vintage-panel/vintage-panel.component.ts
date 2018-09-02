import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vintage-panel',
  templateUrl: './vintage-panel.component.html',
  styleUrls: ['./vintage-panel.component.css']
})
export class VintagePanelComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
