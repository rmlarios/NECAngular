import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { apiResponse } from 'src/app/models/apiResponse';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
list: any[] =[];
  constructor(

    private rest: RestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadCurrencies();
  }

  loadCurrencies() {
    this.rest.getCurrencys().subscribe((resp: any) => {
      console.log(resp);

    });
  }

}
