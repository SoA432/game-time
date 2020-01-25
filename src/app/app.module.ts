import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamePlanetComponent } from './components/game-planet/game-planet.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/item/item.component';
import { SubComponent } from './components/sub/sub.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'blabla',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GamePlanetComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    MenuComponent,
    ItemComponent,
    SubComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
