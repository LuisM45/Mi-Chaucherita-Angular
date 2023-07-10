import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';



@NgModule({
  declarations: [LoginComponent, ProfileSettingsComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    RouterModule.forChild([
      { path:"login", component:LoginComponent},
      { path:"profile", component:ProfileSettingsComponent}
    ])
  ]
})
export class ProfileModule { }
