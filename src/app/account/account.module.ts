import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialsModule } from '../materials/materials.module';
import { AccountCardComponent } from './account-card/account-card.component';



@NgModule({
  declarations: [
  
    DashboardComponent,
       AccountCardComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      {path:"dashboard", component:DashboardComponent}
    ])
  ]
})
export class AccountModule { }
