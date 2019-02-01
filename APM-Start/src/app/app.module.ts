import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav.component';
import { CatsComponent } from './products/cats.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatsComponent,
    StarComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
