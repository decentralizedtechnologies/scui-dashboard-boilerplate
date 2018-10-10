import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuSidebarComponent } from './main-menu-sidebar/main-menu-sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainMenuSidebarComponent
  ],
  exports: [
    MainMenuSidebarComponent
  ]
})
export class SharedModule { }
