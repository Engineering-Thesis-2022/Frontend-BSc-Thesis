import { NgModule } from '@angular/core';
import { OrderService } from './order.service';
import { GET_ALL_DTO_PORT } from '../../../application/ports/secondary/dto/order/get-all.dto-port';
import { ADD_ORDER_DTO_PORT } from '../../../application/ports/secondary/dto/order/add-order.dto-port';
import { DELETE_ORDER_DTO_PORT } from '../../../application/ports/secondary/dto/order/delete-order.dto-port';
import { DUPLICATE_ORDER_DTO_PORT } from '../../../application/ports/secondary/dto/order/duplicate-order.dto-port';
import { GET_ONE_ORDER_DTO_PORT } from '../../../application/ports/secondary/dto/order/get-one-order.dto-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    OrderService,
    { provide: GET_ALL_DTO_PORT, useExisting: OrderService },
    { provide: ADD_ORDER_DTO_PORT, useExisting: OrderService },
    { provide: DELETE_ORDER_DTO_PORT, useExisting: OrderService },
    { provide: DUPLICATE_ORDER_DTO_PORT, useExisting: OrderService },
    { provide: GET_ONE_ORDER_DTO_PORT, useExisting: OrderService }
  ],
  exports: [],
})
export class OrderServiceModule { }
