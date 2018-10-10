import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IamRoutingModule } from './iam-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    IamRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IamModule { }
