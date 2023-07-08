import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,  
    MatInputModule, 
    MatButtonModule, 
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
  ]
})
export class MaterialsModule { }
