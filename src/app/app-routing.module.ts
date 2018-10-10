import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IamModule } from './iam/iam.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/iam', pathMatch: 'full' },
  {
    path: 'dashboard/iam',
    loadChildren: () => IamModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
