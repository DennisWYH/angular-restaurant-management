import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: PurchaseComponent },
    ])
  ],
  
  declarations: [
    AppComponent,
    PurchaseComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
