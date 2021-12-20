import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinComponent } from './components/bitcoin/bitcoin.component';

const routes: Routes = [];
routes.push(
  { path: 'criptocurrency', component: BitcoinComponent })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
