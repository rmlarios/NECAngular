import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';

import {RestInterceptorService} from './services/rest-interceptor.service';
import {RestService} from './services/rest.service';



import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
//import { NgMaterialModule } from './modules/ngmaterial_module'

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
    //NgMaterialModule,
   // AppRoutingModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BitcoinComponent, pathMatch:'full'}
    ])
  ],
  providers: [RestService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RestInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
