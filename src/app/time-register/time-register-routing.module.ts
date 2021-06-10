import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeRigisterComponent } from './time-rigister.component';

const routes: Routes = [ { path: '', component: TimeRigisterComponent } ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRegisterRoutingModule { 
  static components = [ TimeRigisterComponent ]
}
