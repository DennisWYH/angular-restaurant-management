import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PurchaseComponent },
      { path: 'summary', component: SummaryComponent },
    ])
  ],
  
  declarations: [
    AppComponent,
    PurchaseComponent,
    SummaryComponent,
    PurchaseFormComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
