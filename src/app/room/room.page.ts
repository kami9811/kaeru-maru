import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GlobalService } from '../global.service';

import { ValueSharedService } from '../services/value-shared';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  roomId: any;
  enemy: string = '空席...';

  postObj: any = {};
  returnObj: any = {};

  is_participate: boolean = false;
  participate_msg: string = '参加待ち...';

  interval: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    public gs: GlobalService,
    private valueSharedService: ValueSharedService
  ) { }

  ngOnInit( ) {
    this.interval = setInterval(() => {
      this.roomId=this.valueSharedService.open_id;
      if(localStorage.id==this.valueSharedService.open_id) {
        this.enemy=this.valueSharedService.join_id;
        console.log(this.valueSharedService.join_id);
      }
      else if(localStorage.id==this.valueSharedService.join_id) this.enemy=this.valueSharedService.open_id;
      else this.enemy='空席...';
    }, 1500);
   }

  async alertSuccess() {
    const alert = await this.alertController.create({
      header: 'マッチングルーム削除',
      message: 'マッチングルーム削除に成功しました.',
      buttons: ['OK']
    })

    await alert.present();
  }
  async alertFailer() {
    const alert = await this.alertController.create({
      header: 'マッチングルーム削除',
      message: 'マッチングルーム削除に失敗しました.<br>IDもしくはhashが重複しています.',
      buttons: ['OK']
    })

    await alert.present();
  }


  moveroom = () => {
    this.postObj['roomid'] = this.roomId;
    this.postObj['enemy'] = this.enemy;

    this.router.navigate(['/battle']);
  }

  cancel = () => {
    if(localStorage.id==this.valueSharedService.open_id){
      this.postObj["id"] = localStorage.id;
      this.postObj["hash"] = localStorage.hash;
      //console.log('id',localStorage.id);
      const body = this.postObj;
      console.log(body);
      this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/match/delete/room', body).subscribe(
        res => {
          this.returnObj = res;
          console.log('returnObj',this.returnObj['status']);
          if(this.returnObj['status'] == 200){
            this.alertSuccess();
            this.router.navigate(['/tabs/tab1']);
          }
          else{
            this.alertFailer(); 
          }
        }
      )
      //this.router.navigate(['/tabs/tab1']);
    }else{
      this.router.navigate(['/tabs/tab1']);
    }
  }

  startbattle = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["open_id"]=this.valueSharedService.open_id;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;
    console.log(body);
    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/match/edit/start', body).subscribe(
      res => {
        this.returnObj = res;
        console.log('returnObj',this.returnObj['status']);
        if(this.returnObj['status'] == 200){
          //this.alertSuccess();
          this.moveroom();
        }
        else{
          //this.alertFailer(); 
        }
      }
    )
  }

  

}
