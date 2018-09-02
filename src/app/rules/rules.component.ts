import { Component, OnInit } from '@angular/core';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  rules: string[];

  constructor(private rulesService: RulesService) { }

  ngOnInit() {
    this.getRules();
  }

  getRules(): void{
    this.rulesService.getRules().subscribe(rules => this.rules = rules);
  }

}
