import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

export interface Notification {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
  pageTitle: string = "Notifications";
  notifications: Notification[];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.notifications = [
      {
        title: "Winson started following you",
        description: "1h ago",
        image: "assets/img/boy1.jpg"
      },
      {
        title: "Stella liked your recipe",
        description: "1h ago",
        image: "assets/img/girl1.jpg"
      },
      {
        title: "Peishan liked your recipe",
        description: "2h ago",
        image: "assets/img/girl2.jpg"
      },
      {
        title: "Stella started following you",
        description: "2h ago",
        image: "assets/img/girl1.jpg"
      },
      {
        title: "Yang Jie liked your recipe",
        description: "4h ago",
        image: "assets/img/boy2.jpeg"
      }
    ]
  }
}
