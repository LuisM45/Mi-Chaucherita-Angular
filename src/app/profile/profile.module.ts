import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      { path:"login", component:LoginComponent}
    ])
  ]
})
export class ProfileModule { }
