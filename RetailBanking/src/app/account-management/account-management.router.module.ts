import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagementPage } from './account-management.page';
const routes: Routes = [
  {
    path: '',
    component: AccountManagementPage,
    children: [
      {
        path: 'add-account',
        children: [
          { path: '', loadChildren: '../add-account/add-account.module#AddAccountPageModule' }
        ]
      },
      {
        path: 'view-accounts',
        children: [
          { path: '', loadChildren: '../view-accounts/view-accounts.module#ViewAccountsPageModule' }
        ]
      },
      {
        path: 'delete-account',
        children: [
          { path: '', loadChildren: '../delete-account/delete-account.module#DeleteAccountPageModule' }
        ]
      },
      {
        path: '',
        redirectTo: '/account-management/view-accounts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/account-management/view-accounts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountManagementPageRoutingModule { }
