import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { Team, Part } from '../team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService) {
  }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    this.route.paramMap.subscribe(data => {
      const name = data.get('name');
      this.teamService.getTeam(name).subscribe(team => this.team = team);
    });
  }

  getPartTotal(): number {
    var sum = 0;
    for(let part of this.team.parts){
      sum += part.cost;
    }
    return sum;
  }

}
