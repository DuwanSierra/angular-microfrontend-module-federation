import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf1RoutingModule } from './mf1-routing.module';
import { Mf1entryComponent } from './components/mf1entry/mf1entry.component';


@NgModule({
  declarations: [
    Mf1entryComponent
  ],
  imports: [
    CommonModule,
    Mf1RoutingModule
  ]
})
export class Mf1Module { }
