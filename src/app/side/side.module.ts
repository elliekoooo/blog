import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LeftComponent, RightComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [LeftComponent, RightComponent]
})
export class SideModule { }
