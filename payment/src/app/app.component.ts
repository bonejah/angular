import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  paymentForm: FormGroup;
  displayMessage: string;
  isPageReady: boolean = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    return new Promise((resolve, reject) => {
      this.paymentForm = this.formBuilder.group({
          NameCard: [null, Validators.compose([Validators.required])],
          CardNumber: [null, Validators.compose([Validators.required])],
          Month: null,
          Year: null,
          Cvv: null
      });
      console.log(this.paymentForm)
      resolve();
    });
  }

  submitForm() {
    console.log('clicou aqui')
    this.displayMessage = "Payment Successful!";
  }
}
