import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  tits: string[];
  items: Array<{title: string, note: string, icon: string}>;
  hadList: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.tits = ['ԻԿՄ', 'ԻՐԱ', 'ՌՈՄԱՆՈ', 'ՖԻԶԻԿԱ', 'ՍՆՏԵՍ'];
    this.items = [];
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: ' ' + this.tits[i],
        note: ' ' ,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  getList() {
      this.hadList = true;
      return 'mmmmmmmmmmmm list'
    }
  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
