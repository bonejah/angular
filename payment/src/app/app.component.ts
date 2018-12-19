import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { reject } from 'q';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  paymentForm: FormGroup;
  displayMessage: string;
  isPageReady: boolean = false;
  // namePattern: "^[a-zA-Z]+$";
  namePattern: "/^[a-zA-Z]+$/";

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    return new Promise((resolve, reject) => {
      this.paymentForm = this.formBuilder.group({
          NameCard: [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
          CardNumber: [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
          Month: null,
          Year: null,
          Cvv: null
      });

      console.log('paymentForm', this.paymentForm)
      resolve();
    })
    .catch(() =>{
      reject('Error......!!!!!');
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

}
