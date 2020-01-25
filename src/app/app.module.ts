import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamePlanetComponent } from './ui/components/game-planet/game-planet.component';
import { HeaderComponent } from './core/header/header.component';
import { SliderComponent } from './ui/components/slider/slider.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './ui/components/menu/menu.component';
import { ItemComponent } from './ui/components/item/item.component';
import { SubComponent } from './ui/components/sub/sub.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './ui/pages/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';

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
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
