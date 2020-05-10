import { Injectable } from '@angular/core';
import { GameInterface } from '../models/game.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  mockGames: GameInterface[] = [];

  constructor(private http: HttpClient) {
  }

  public getAllGames(): Observable<any> {
    return this.http.get('/proxy/games').pipe(
      catchError(err => of([]))
    );
  }

  public getGameById(id: string): Observable<any> {
    return this.http.get(`/proxy/games/${id}`);
  }
}
