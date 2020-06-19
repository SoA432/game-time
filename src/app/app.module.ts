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
import { LoginComponent } from './ui/modals/login/login.component';
import { RegisterComponent } from './ui/pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeResolver } from './ui/pages/home/home.resolver';
import { GameDetailPageResolver } from './ui/pages/game-detail-page/game-detail-page.resolver';
import { OrderCompleteComponent } from './ui/modals/order-complete/order-complete.component';



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
    OrderComponent,
    OrderCompleteComponent,
    LoginComponent,
    RegisterComponent
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
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HomeResolver,
    GameDetailPageResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
