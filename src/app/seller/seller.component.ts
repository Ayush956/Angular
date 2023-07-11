import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent {
  constructor(private seller:SellerService){}

  seller_signup(data:object):void{
    // console.log(data)
    this.seller.signup_seller(data).subscribe((result)=>{
      console.log(result)
    });
  }
}
