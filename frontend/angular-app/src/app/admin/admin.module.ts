import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { PlaceEditComponent } from './places/place-edit/place-edit.component';


@NgModule({
  declarations: [

    UserListComponent,
    PlaceListComponent,
    UserEditComponent,
    PlaceEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
