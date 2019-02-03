import { NgModule } from '@angular/core';
import { CatsComponent } from './cats.component';
import { CatsDetailsComponent } from './cats-details.component';
import { CatCreateComponent } from './cat-create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CatsComponent,
    CatsDetailsComponent,
    CatCreateComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'cats', component: CatsComponent },
      { path: 'cats/:id', component: CatsDetailsComponent },
      { path: 'createcat', component: CatCreateComponent }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
