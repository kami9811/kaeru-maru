import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-helps',
  templateUrl: './helps.page.html',
  styleUrls: ['./helps.page.scss'],
})
export class HelpsPage implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }
  dismiss = () => {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  
}
