import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order, OrderService } from '../../service/index';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  productId: number;
  orderDetails: Order[];
  customerName: string;

  constructor(private route: ActivatedRoute,private orderService:OrderService) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((data) => this.productId = +data.get('id'));
    this.orderService.getOrderById(this.productId).subscribe(
      (data)=>this.orderDetails=data,
      (err)=> console.log(err)
    )

  
  }

}
