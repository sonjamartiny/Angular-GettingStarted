import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav.component';
import { CatsComponent } from './products/cats.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/star.component';
import { CatsDetailsComponent } from './products/cats-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { CatCreateComponent } from './products/cat-create.component';
import { CatCreateGuard } from './products/cat-create.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CatsComponent,
    StarComponent,
    CatsDetailsComponent,
    WelcomeComponent,
    CatCreateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cats', component: CatsComponent },
      { path: 'cats/:id', component: CatsDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'createcat', component: CatCreateComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
