import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';



@NgModule({
  declarations: [LeftComponent, RightComponent],
  imports: [
    CommonModule
  ],
  exports: [LeftComponent, RightComponent]
})
export class SideModule { }
