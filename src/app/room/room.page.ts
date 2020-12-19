import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  roomId: number;
  enemy: string = '空席...';

  postObj: any = {};
  returnObj: any = {};

  is_participate: boolean = false;
  participate_msg: string = '参加待ち...';

  constructor(
    private router: Router,
  ) { }

  ngOnInit( ) { }

  moveroom = () => {
    this.postObj['roomid'] = this.roomId;
    this.postObj['enemy'] = this.enemy;

    this.router.navigate(['/battle']);
  }

  cancel = () => {
    this.router.navigate(['/tabs/tab1']);
  }

}
