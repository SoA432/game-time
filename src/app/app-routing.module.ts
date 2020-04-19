// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { HomeComponent } from './ui/pages/home/home.component';
import { GameDetailPageComponent } from './ui/pages/game-detail-page/game-detail-page.component';
import { ShoppingCartComponent } from './ui/pages/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './ui/pages/register/register.component';
import { HomeResolver } from './ui/pages/home/home.resolver';
import { GameDetailPageResolver } from './ui/pages/game-detail-page/game-detail-page.resolver';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    resolve: {games: HomeResolver}
  },
  {
    path: 'detail/:id',
    component: GameDetailPageComponent,
    resolve: {game: GameDetailPageResolver}
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: '**',
    component: HomeComponent,
    resolve: {games: HomeResolver}
  },
];
/**
 * the AppRoutingModule contains the router-logic and describes all
 * routes of the app.
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: false})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
