import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  paymentForm: FormGroup;
  displayMessage: string;
  namePattern: "/^[a-zA-Z]+$/";

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    return new Promise((resolve) => {
      this.paymentForm = this.formBuilder.group({
          nameOnCard: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
          cardNumber: [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
          expirationMonth: [null, Validators.compose([Validators.minLength(2), Validators.maxLength(2)])],
          expirationYear: [null, Validators.compose([Validators.minLength(4), Validators.maxLength(4)])],
          cvv: null
      });
      resolve();
    });
  }

  submitForm() {
    if (this.paymentForm.invalid) {
      this.displayMessage = "Payment Failed!";
      return false;
    }
    
    this.displayMessage = "Payment Successful!";
    return this.paymentForm.valid;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }

    return true;
  }

}
