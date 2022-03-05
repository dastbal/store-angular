import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,

  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS ,
    useClass : TimeInterceptor,
    multi : true,
  },
    {
    provide: HTTP_INTERCEPTORS ,
    useClass : TokenInterceptor,
    multi : true,
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
