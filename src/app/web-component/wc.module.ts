import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { WCRoutingModule } from './wc-routing.module';
import { WCComponent } from './wc.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    WCRoutingModule
  ],
  declarations: [
    WCComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WCModule { }
