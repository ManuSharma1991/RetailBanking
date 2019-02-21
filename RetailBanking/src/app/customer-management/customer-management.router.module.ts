import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagementPage } from './customer-management.page';
const routes: Routes = [
  {
    path: '',
    component: CustomerManagementPage,
    children: [
      {
        path: 'add-customer',
        children: [
          { path: '', loadChildren: '../add-customer/add-customer.module#AddCustomerPageModule' }
        ]
      },
      {
        path: 'view-customers',
        children: [
          { path: 'view-customers', loadChildren: '../view-customers/view-customers.module#ViewCustomersPageModule' }
        ]
      },
      {
        path: 'update-customer',
        children: [
          { path: '', loadChildren: '../update-customer/update-customer.module#UpdateCustomerPageModule' }
        ]
      },
      {
        path: 'delete-customer',
        children: [
          { path: '', loadChildren: '../delete-customer/delete-customer.module#DeleteCustomerPageModule' }
        ]
      },
      {
        path: '',
        redirectTo: '/customer-management/view-customers',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customer-management/view-customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerManagementPageRoutingModule { }
