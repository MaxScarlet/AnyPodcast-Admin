import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogAreaComponent } from './log-area/log-area.component';
import { FilterOptionsComponent } from './filter-options/filter-options.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogAreaComponent,
    FilterOptionsComponent,
    AdminDashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
