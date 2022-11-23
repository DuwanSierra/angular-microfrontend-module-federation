import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mf2RoutingModule } from './mf2-routing.module';
import { Mf2entryComponent } from './component/mf2entry/mf2entry.component';


@NgModule({
  declarations: [
    Mf2entryComponent
  ],
  imports: [
    CommonModule,
    Mf2RoutingModule
  ]
})
export class Mf2Module { }
