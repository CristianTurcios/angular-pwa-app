import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'https://us-central1-liu-profile-api-qa.cloudfunctions.net/sendPushNotifications';

@Injectable()
export class PushNotificationService {
  constructor(private http: HttpClient) { }

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(SERVER_URL, subscription);
  }
}
