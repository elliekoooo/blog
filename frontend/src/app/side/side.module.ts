import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LeftComponent, RightComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LeftComponent, RightComponent]
})
export class SideModule { }
