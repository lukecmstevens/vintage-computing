import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { TeamComponent }      from './team/team.component';
import { RulesComponent }      from './rules/rules.component';
import { LeaderboardComponent }      from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams/:name', component: TeamComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'leaderboard', component: LeaderboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
