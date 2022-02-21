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
import { SliderComplexServicesComponent } from './pages/home/home-complex-services/slider-complex-services/slider-complex-services.component';
import { SliderServicesComponent } from './pages/home/home-services/slider-services/slider-services.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNotificationComponent } from './components/header/header-notification/header-notification.component';

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
    SliderComplexServicesComponent,
    SliderServicesComponent,
    HeaderComponent,
    HeaderNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
