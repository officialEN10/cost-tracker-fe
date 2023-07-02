import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAlertComponent } from './add-alert.component';
import { AddAlertRoutingModule } from './add-alert-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [AddAlertComponent],
  imports: [
    CommonModule,
    AddAlertRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    TextFieldModule,
  ],
})
export class AddAlertModule {}
