import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { HomeEventsComponent } from './pages/home/home-events/home-events.component';
import { HomeServicesComponent } from './pages/home/home-services/home-services.component';
import { HomeComplexServicesComponent } from './pages/home/home-complex-services/home-complex-services.component';
import { HomeNewsComponent } from './pages/home/home-news/home-news.component';
import { HomeMobAppComponent } from './pages/home/home-mob-app/home-mob-app.component';
import { HomeSupportComponent } from './pages/home/home-support/home-support.component';
import { SliderEventsComponent } from './pages/home/home-events/slider-events/slider-events.component';
import { SliderCmplxServComponent } from './pages/home/home-complex-services/slider-cmplx-serv/slider-cmplx-serv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    HomeEventsComponent,
    HomeServicesComponent,
    HomeComplexServicesComponent,
    HomeNewsComponent,
    HomeMobAppComponent,
    HomeSupportComponent,
    SliderEventsComponent,
    SliderCmplxServComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
