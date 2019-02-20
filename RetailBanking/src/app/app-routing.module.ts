import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'customer-management', loadChildren: './customer-management/customer-management.module#CustomerManagementPageModule' },
  { path: 'account-management', loadChildren: './account-management/account-management.module#AccountManagementPageModule' },
  { path: 'transaction-management', loadChildren: './transaction-management/transaction-management.module#TransactionManagementPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
