import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { PricePipe } from '../custom/price.pipe';
import { SortPipe } from '../custom/sort.pipe';
import { HoverDirective } from '../directives/hover.directive';
import { PasswordValidatorDirective } from '../directives/password-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: [
    PricePipe,
    SortPipe,
    HoverDirective,
    PasswordValidatorDirective
  ],

  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    PricePipe,
    SortPipe,
    HoverDirective,
    PasswordValidatorDirective
  ]
})
export class SharedModule { }
