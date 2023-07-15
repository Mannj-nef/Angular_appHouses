import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { HousingLocationComponent } from './modules/home/housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HousingDetailComponent } from './modules/details/housing/housing-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    HousingDetailComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HousingLocationComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
