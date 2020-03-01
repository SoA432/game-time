import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SliderComponent } from './ui/components/slider/slider.component';
import { FooterComponent } from './core/footer/footer.component';
import { GameCardComponent } from './ui/components/game-card/game-card.component';
import { HomeComponent } from './ui/pages/home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './ui/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { GameDetailPageComponent } from './ui/pages/game-detail-page/game-detail-page.component';
import { RatingComponent } from './ui/components/rating/rating.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './ui/pages/shopping-cart/shopping-cart.component';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';
import { OrderComponent } from './ui/modals/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    GameCardComponent,
    HomeComponent,
    FilterComponent,
    GameDetailPageComponent,
    RatingComponent,
    ShoppingCartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    RatingModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    NgbRatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
