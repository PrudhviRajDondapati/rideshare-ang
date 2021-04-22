import { Component, AfterViewChecked, OnInit } from '@angular/core';
// import{ render } from 'creditcardpayments/creditCardPayments';

declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewChecked {
  
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ATTcHQP0uQkgekja-VQGCmFJRh93sYPraciE9KLgBnVOEsdvUvTqGwahH1WYpjoQmhkpb-MYQK8wUlKf',
      production: '<your-production-key-here>'
    },
    commit: true,
    payment: (data:any, actions:any) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'CAD' } }
          ]
        }
      });
    },
    onAuthorize: (data:any, actions:any) => {
      return actions.payment.execute().then((payment:any) => {
        //Do something when payment is successful.
      })
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#myPaypalButtons');
        this.paypalLoad = false;
      })
    }
  }     
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      // scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=ATTcHQP0uQkgekja-VQGCmFJRh93sYPraciE9KLgBnVOEsdvUvTqGwahH1WYpjoQmhkpb-MYQK8wUlKf';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}

