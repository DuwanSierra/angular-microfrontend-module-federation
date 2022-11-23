import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mf1entryComponent } from './components/mf1entry/mf1entry.component';

const routes: Routes = [
  {
    path:'',
    component: Mf1entryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mf1RoutingModule { }
