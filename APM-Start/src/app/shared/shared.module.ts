import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [              //diese Module und Components werden geteilt
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
