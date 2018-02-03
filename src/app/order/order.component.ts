import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { Order } from '../service/order/order';
import { OrderService } from '../service/order/order.service';
import { OrderListComponent } from './order-list/order-list.component';
import { ISubscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  orders = new Array<Order>();
  order: Order = new Order();
  orderSubscription: ISubscription;
  message: string;
  @ViewChild(OrderListComponent)
  orderListComponet: OrderListComponent;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.loadOrders();

    // this.orderListComponet.orderList = this.orders;
  }

  loadOrders() {
    this.orderSubscription = this.orderService.getOrders().subscribe(
      (data) => this.orders = data,
      (err) => console.log(err));
  }

  addOrder() {
    this.orderService.addOrder(this.order).subscribe((data) => {
      console.log(data);
      this.loadOrders();
    },
      (err) => {
        console.log(err);
      });

    this.order = new Order();
  }

  // ngDoCheck(): void {
  //   console.log(this.message);
  // }

  receiveFromChild(data: string) {
    this.message = data;
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }

  // addOrder() {
  //   let order = { id: 4, customerName: 'Test4', orderDate: new Date('aug-17-2017'), qty: 5 };
  //   this.orders = [order];
  // }
}
