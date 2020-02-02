// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { GameDetailPageComponent } from './ui/pages/game-detail-page/game-detail-page.component';


const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'detail/:id',
    component: GameDetailPageComponent
  },
  {
    path: '**',
    component: HomeComponent
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
