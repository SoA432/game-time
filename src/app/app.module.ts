import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SliderComponent } from './ui/components/slider/slider.component';
import { FooterComponent } from './core/footer/footer.component';
import { GameCardComponent } from './ui/components/game-card/game-card.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './ui/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { GameDetailPageComponent } from './ui/pages/game-detail-page/game-detail-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    GameCardComponent,
    HomeComponent,
    FilterComponent,
    GameDetailPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
