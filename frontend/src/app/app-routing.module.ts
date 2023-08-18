import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, 
    children: [
      {path: ':no', component: ContentComponent},
      {path: '**', redirectTo: 'about', pathMatch: 'full' }    
    ]
  }
];

//FIXME remove useHash
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
