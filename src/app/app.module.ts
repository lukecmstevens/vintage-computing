import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { RulesComponent } from './rules/rules.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamComponent } from './team/team.component';
import { VintagePanelComponent } from './vintage-panel/vintage-panel.component';
import { CentreColumnComponent } from './centre-column/centre-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    LeaderboardComponent,
    TeamComponent,
    VintagePanelComponent,
    CentreColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
