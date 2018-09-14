import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Score } from '../team';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})

export class LeaderboardComponent implements OnInit {

  scores: Score[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getAllScores();
  }

  getAllScores(): void{
    this.teamService.getTeams().subscribe(teamNames =>{
      let scores = [];
      teamNames.forEach(teamName => {
        this.teamService.getTeam(teamName).subscribe(team => {
          team.scores.forEach(score => scores.push(score));
        });
      });
      this.scores = scores;
    });
  }

}

