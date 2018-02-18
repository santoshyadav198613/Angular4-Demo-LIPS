import { Injectable, Inject } from '@angular/core';
import { Order } from './order';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { IValueProvider } from '../valueprovider/IValueProvider';
import { APP_CONFIG } from '../valueprovider/valueprovider'

@Injectable()
export class OrderService {

  constructor( @Inject(APP_CONFIG) private appconfig: IValueProvider, private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.appconfig.apiEndPoint + 'order');

  }

  getOrderById(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.appconfig.apiEndPoint + 'order/' + id);

  }

  getOrderByName(name:string): Observable<Order[]> {
    return this.http.get<Order[]>(this.appconfig.apiEndPoint + 'order/search/' + name);

  }
  addOrder(order: Order) {
    return this.http.post(this.appconfig.apiEndPoint + 'order', order);
  }
}
