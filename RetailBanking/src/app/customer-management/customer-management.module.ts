import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CustomerManagementPageRoutingModule } from './customer-management.router.module';

import { CustomerManagementPage } from './customer-management.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerManagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerManagementPageRoutingModule
  ],
  declarations: [CustomerManagementPage]
})
export class CustomerManagementPageModule {}
