import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appMenu = [
    {title: 'Incoming', url: 'incoming', icon: 'list'},
    {title: 'Outgoing', url: 'outgoing', icon: 'add'},
    {title: 'Budget', url: 'budget', icon: 'trash'}
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
  ) {
    this.initializeApp();
  }
  navigateTo(page){
    this.navCtrl.navigateRoot(['/',page.url]);
  }

  initializeApp() {
    // this.platform.ready().then(onfulfilled: () => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
