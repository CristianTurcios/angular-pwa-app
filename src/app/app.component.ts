import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from './services/push-notification.service';

const VAPID_PUBLIC = 'BCPGSa56xZcbk2xAoiN2Gaqc8T-t7bjKUj2jrU-cC06mGyV2mm5QWCki8dyDm7jH2uJZ1M1zCyLWadV80C5FlVM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-push-notifications';

  constructor(swPush: SwPush, pushService: PushNotificationService) {
    if (swPush.isEnabled) {
      swPush.requestSubscription({serverPublicKey: VAPID_PUBLIC})
        .then(subscription => {
          // send subscription to the server
          console.log('subscription', subscription);
          pushService.sendSubscriptionToTheServer(subscription).subscribe();
        })
        .catch(console.error);
    }
  }
}
