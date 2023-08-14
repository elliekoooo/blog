import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, 
    children: [
      {path: ':date/:no', component: ContentComponent},
      {path: '**', redirectTo: '', pathMatch: 'full' }    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
