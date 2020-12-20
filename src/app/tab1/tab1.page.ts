import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

import { ModalController } from '@ionic/angular';
import { HelpsPage } from '../helps/helps.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  roomID: any;

  latitude: any;
  longitude: any;

  // API用
  postObj: any = {};
  returnObj: any = {};

  receive_id: string = '';
  good: number;

  image_1: any = '';
  image_2: any = '';
  image_3: any = '';

  interval: any;

  information_flag: boolean = false;

  constructor(
    private geolocation: Geolocation,
    private alertController: AlertController,
    private router: Router,
    public gs: GlobalService,
    public modalController: ModalController,
  ) {}

  // 自動ログイン管理, 記事取得
  ngOnInit(){
    console.log("Init!");
    this.postObj["id"] = localStorage.id;
    this.postObj["password"] = localStorage.password;
    const body = this.postObj;
    console.log(body);

    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/user/edit/login', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj["status"] == 200){
          localStorage.hash = this.returnObj["hash"];
          //this.getUser();
        }
        else{
          this.router.navigate(['/login']);
        }
      },
      error => console.error(error)
    );

    this.interval = setInterval(() => {
      // Function
      if(this.information_flag == false){
        //this.getUser();
      }
    }, 1500);
  }

  async alertSuccess() {
    const alert = await this.alertController.create({
      header: 'ルーム作成',
      message: 'ルーム作成に成功しました.',
      buttons: ['OK']
    })

    await alert.present();
  }
  async alertFailer() {
    const alert = await this.alertController.create({
      header: 'ルーム作成',
      message: 'ルーム作成に失敗しました.<br>IDもしくはhashが重複しています.',
      buttons: ['OK']
    })

    await alert.present();
  }

  /*newGood = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["receive_id"] = this.receive_id;
    this.postObj["good"] = this.good;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;
    this.gs.http('https://kn46itblog.com/biz/oncon10/php_apis/match/new/good', body).subscribe(
      res => console.log(res),
      error => console.error(error)
    );
    this.getUser();
  }
  deleteGood = () => {
    if(this.good == 1){
      this.postObj["id"] = localStorage.id;
      this.postObj["send_id"] = this.receive_id;
      this.postObj["hash"] = localStorage.hash;
      const body = this.postObj;
      this.gs.http('https://kn46itblog.com/biz/oncon10/php_apis/match/delete/good', body).subscribe(
        res => console.log(res),
        error => console.error(error)
      );
    }
    this.getUser();
  }*/

  /*getUser = () => {
    this.information_flag = true;
    this.postObj["id"] = localStorage.id;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;
    console.log(body);

    this.gs.http('https://kn46itblog.com/biz/oncon10/php_apis/match/show/next', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        if(res["status"] == 200){
          this.receive_id = res["id"];
          this.image_1 = res["image_1"];
          this.image_2 = res["image_2"];
          this.image_3 = res["image_3"];
          this.good = res["good"];
        }
      },
      error => console.error(error)
    );
  }*/

  onGps = () => {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }


  

  showHelps = () => {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: HelpsPage,
    });
    return await modal.present();
  }

  matching = (owner:boolean) => {
    if(owner){
      this.postObj["id"] = localStorage.id;
      this.postObj["hash"] = localStorage.hash;
      //console.log('id',localStorage.id);
      const body = this.postObj;
      console.log(body);
      this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/match/new/room', body).subscribe(
        res => {
          this.returnObj = res;
          console.log('returnObj',this.returnObj['status']);
          if(this.returnObj['status'] == 200){
            this.alertSuccess();
            this.router.navigate(['/room']);
          }
          else{
            this.alertFailer(); 
          }
        }
      )
    }
    else{
      this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.postObj["id"] = localStorage.id;
        this.postObj["open_id"] = this.roomID;
        this.postObj["latitude"] = this.latitude;
        this.postObj["longitude"] = this.longitude;
        this.postObj["hash"] = localStorage.hash;
        //console.log('id',localStorage.id);
        const body = this.postObj;
        console.log(body);
        this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/match/show/room', body).subscribe(
          res => {
            this.returnObj = res;
            console.log(res);
            // console.log('returnObj',this.returnObj);
            if(this.returnObj['status'] == 200){
              this.alertSuccess();
              this.router.navigate(['/room']);
            }
            else{
              this.alertFailer(); 
            }
          }
        )
      });
    }   
    //this.router.navigate(['/room']);
    //console.log('roomIDinput',this.roomID);
  }
}
