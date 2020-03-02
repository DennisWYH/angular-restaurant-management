import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray} from '@angular/forms';


@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})

export class PurchaseFormComponent implements OnInit {

  purchaseRow = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    price: new FormControl(''),
    person: new FormControl(''),
  });


  // group = new FormGroup({
  //   name: new FormControl(''),
  //   date: new FormControl(''),
  //   price: new FormControl(''),
  //   person: new FormControl(''),
  // });
  
  // private arrayOfGroups: FormArray
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.warn('The form data has been submitted.');
  }
  addRow(){
    // This method also updates the value and validity of the control.
    // @param - name The control name to add to the collection
    // @param - control Provides the control for the given name
    this.purchaseForm.addControl(name,new FormControl(''));
  }
}