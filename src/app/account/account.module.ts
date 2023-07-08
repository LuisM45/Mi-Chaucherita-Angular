import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialsModule } from '../materials/materials.module';
import { AccountCardComponent } from './account-card/account-card.component';
import { NewAccountComponent } from './new-account/new-account.component';



@NgModule({
  declarations: [
  
    DashboardComponent,
       AccountCardComponent,
       NewAccountComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      {path:"dashoard", component:DashboardComponent},
      {path:"account/new", component:NewAccountComponent},
    ])
  ]
})
export class AccountModule { }
