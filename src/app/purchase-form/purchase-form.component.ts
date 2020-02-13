import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})

export class PurchaseFormComponent implements OnInit {
  
  purchaseForm = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    price: new FormControl(''),
    person: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.warn('The form data has been submitted.');
  }
}