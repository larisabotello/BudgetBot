import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { BudgetComponent } from './budget/budget.component';
import { AddIncomingComponent } from './add-incoming/add-incoming.component';
import { AddOutgoingComponent } from './add-outgoing/add-outgoing.component';

import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent,
                 IncomingComponent,
                 OutgoingComponent,
                 BudgetComponent,
                 AddIncomingComponent,
                 AddOutgoingComponent],
  entryComponents: [AddIncomingComponent,AddOutgoingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
            AppRoutingModule, 
            MatDialogModule, 
            BrowserAnimationsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
