import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterTransactionComponent } from './register-transaction/register-transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { authGuard } from '../guard/auth.guard';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { TransactionTableInnerComponent } from './transaction-table-inner/transaction-table-inner.component';



@NgModule({
  declarations: [
    RegisterTransactionComponent,
    TransactionDetailComponent,
    TransactionTableComponent,
    TransactionEditComponent,
    TransactionTableInnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:"transaction/register/:accountId" , component: RegisterTransactionComponent, canActivate: [authGuard]},
      {path:"transaction/view/:accountId/:id" , component: TransactionDetailComponent, canActivate: [authGuard]},
      {path:"transaction/edit/:accountId/:id" , component: TransactionEditComponent, canActivate: [authGuard]},
      {path:"transaction/table" , component: TransactionTableComponent, canActivate: [authGuard]},
    ])
  ],
  exports:[
    TransactionDetailComponent,
    TransactionTableComponent,
    TransactionTableInnerComponent
  ]
})
export class TransactionsModule { }
