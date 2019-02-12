import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = 'assets/json/teams.json';

  constructor(
    private http: HttpClient
  ) { }

  getTeams(): Observable<string[]> {
    return this.http.get<string[]>(this.teamsUrl);
  }

  // Add team names to scores as they are fetched
  getTeam(name: string): Observable<Team> {
    return this.http.get<Team>(`assets/teams/${name}/info.json`).pipe(
      map(team => {
        team.scores.forEach(score => score.team = team.name);
        return team;
      })
    );
  }

}
