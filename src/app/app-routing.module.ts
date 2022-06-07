
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [
  { path: '', component: TwitterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
