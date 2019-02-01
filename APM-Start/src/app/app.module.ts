import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav.component';
import { CatsComponent } from './products/cats.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component';
import { CatsDetailsComponent } from './products/cats-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatsComponent,
    StarComponent,
    CatsDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
