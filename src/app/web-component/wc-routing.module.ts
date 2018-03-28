import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { WCComponent } from './wc.component';

const routes: Routes = [
  Route.withShell([
    { path: 'webcomponent', component: WCComponent, data: { title: extract('Web Component') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WCRoutingModule { }
