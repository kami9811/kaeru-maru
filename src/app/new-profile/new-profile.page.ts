import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.page.html',
  styleUrls: ['./new-profile.page.scss'],
})
export class NewProfilePage implements OnInit {
  regiId: number;
  userName: number;


  register_disabled: boolean = false;
  register_outline: string = 'outline';
  register_button: string = 'プロフィールを登録';

  postObj: any = {};
  returnObj: any = {};

  constructor(
    private router: Router,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
  }

  postProfile = () => {
    this.postObj["id"] = this.regiId;
    this.postObj["username"] = this.userName;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;

    // this.gs.http('https://kn46itblog.com/biz/oncon10/php_apis/user/edit/profile', body).subscribe(
    //   res => {
    //     console.log(res);
    //     // console.log(this.returnObj["status"]);
    //     if(res["status"] == 200){
    //       console.log('Successed!');
    //       this.router.navigate(['/tabs', 'tab1', 'login']);
    //     }
    //   },
    //   error => {
    //     console.log("error: " + error);
    //   }
    // );

    this.router.navigate(['/tabs', 'tab1', 'login']);
  }

}
