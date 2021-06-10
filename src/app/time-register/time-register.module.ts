import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeRegisterRoutingModule } from './time-register-routing.module';


@NgModule({
  declarations: [ TimeRegisterRoutingModule.components ],
  imports: [
    CommonModule,
    TimeRegisterRoutingModule
  ]
})
export class TimeRegisterModule { }
