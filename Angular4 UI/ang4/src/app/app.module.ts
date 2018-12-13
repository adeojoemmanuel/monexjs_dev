/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './services/api.service';
import { ToasterService, ToasterModule } from 'angular2-toaster';
//import {ModalComponent} from '../app/pages/ui-features/modals/modal/modal.component'

@NgModule({
  declarations: [AppComponent],
 
    
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    //ToasterModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  
  ],
  bootstrap: [AppComponent],
  providers: [
    ToasterService,
    ApiService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
