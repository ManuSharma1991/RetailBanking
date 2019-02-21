import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AccountManagementPageRoutingModule } from './account-management.router.module';

import { AccountManagementPage } from './account-management.page';

const routes: Routes = [
  {
    path: '',
    component: AccountManagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountManagementPageRoutingModule
  ],
  declarations: [AccountManagementPage]
})
export class AccountManagementPageModule {}
