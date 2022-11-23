import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mf2entryComponent } from './component/mf2entry/mf2entry.component';

const routes: Routes = [
  {
    path:'',
    component: Mf2entryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf2RoutingModule { }
