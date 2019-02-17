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

// Angular Components
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppMaterialModules } from './materials.module';
import { IonicStorageModule } from '@ionic/storage';

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent,
                 IncomingComponent,
                 OutgoingComponent,
                 BudgetComponent,
                 AddIncomingComponent,
                 AddOutgoingComponent],
  entryComponents: [AddIncomingComponent,AddOutgoingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), 
            IonicStorageModule.forRoot(),
            AppRoutingModule, 
            MatDialogModule, 
            BrowserAnimationsModule,
            FormsModule,
            MatFormFieldModule,
            MatInputModule,
            NgbModule,
            ReactiveFormsModule,
            AppMaterialModules],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
