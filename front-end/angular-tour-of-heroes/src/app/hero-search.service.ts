import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Hero } from './hero';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeroSearchService {

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`http://localhost:8080/heroes/search/findByName?name=${term}`, {headers: this.getHeaders()})
      .map((r: any) => r._embedded.heroes as Hero[]);
  }
}
