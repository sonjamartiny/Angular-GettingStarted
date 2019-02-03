import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav.component';
import { CatsComponent } from './products/cats.component';
import { CatsDetailsComponent } from './products/cats-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { CatCreateComponent } from './products/cat-create.component';
import { ContactComponent } from './shared/contact.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
