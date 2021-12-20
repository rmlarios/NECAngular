import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiResponse } from 'src/app/models/apiResponse';
import { Observable,interval } from 'rxjs';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit, OnDestroy {
  list: any[] = [];
  count = 0;
  obs:any;
  constructor(

    private rest: RestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) { }
  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

  ngOnInit(): void {
   this.obs = interval(5000).subscribe(x => {
      this.count += 1;
      this.loadCurrencies();
    })
    //this.loadCurrencies();
  }

  loadCurrencies() {
    this.rest.getCurrencys().subscribe((resp: any) => {
      console.log(resp);
     this.list = resp.data;

    });
  }

}
