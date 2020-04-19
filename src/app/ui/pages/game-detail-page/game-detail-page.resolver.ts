import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { GameInterface } from '../../../core/models/game.interface';

@Injectable()
export class GameDetailPageResolver implements Resolve<GameInterface> {

  constructor(private apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const gameId = route.params['id'];
    return this.apiService.getGameById(gameId);
  }
}
