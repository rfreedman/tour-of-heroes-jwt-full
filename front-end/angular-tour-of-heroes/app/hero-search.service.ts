import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
  }

  private getHeaders(): Headers {
    return new Headers({
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });
  }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`http://localhost:8080/heroes/search/findByName?name=${term}`, {headers: this.getHeaders()})
      .map((r: Response) => r.json()._embedded.heroes as Hero[]);
  }
}
