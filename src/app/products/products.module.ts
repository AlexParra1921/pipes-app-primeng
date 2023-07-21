import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { ProductsRoutingModule } from './products-routing.module';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    UncommonPageComponent,
    NumbersPageComponent,
    BasicsPageComponent,
    OrderComponent,

    // Pipes
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
