import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

    private rulesUrl = 'assets/json/rules.json';

    constructor(
      private http: HttpClient
    ) { }

    getRules(): Observable<string[]> {
      return this.http.get<string[]>(this.rulesUrl);
    }
}
