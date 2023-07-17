import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SideModule } from '../side/side.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [MainComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SideModule
  ]
})
export class MainModule { }
