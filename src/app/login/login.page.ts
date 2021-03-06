import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id: string = '';
  password: string = '';

  status: Number = 0;
  // status: Number = 200;  // デバッグ用

  postObj: any = {};
  returnObj: any = {};

  constructor(
    private router: Router,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
    // this.status = 0;
    this.postObj['id'] = localStorage.id;
    this.postObj['password'] = localStorage.password;

    this.login();
  }

  navigate = () => {
    this.postObj['id'] = this.id;
    this.postObj['password'] = this.password;

    this.login();

  }
  navigateToSignup = () => {
    this.router.navigate(['/signup']);
  }

  login = () => {
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/user/edit/login', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        this.status = this.returnObj["status"];
        if(this.status == 200){
          localStorage.id = this.postObj["id"];
          localStorage.password = this.postObj["password"];
          localStorage.hash = this.returnObj["hash"];
          console.log('Stored item!');
          if(this.returnObj["register_flag"] == 1){
            this.router.navigate(['/tabs', 'tab1', 'login']);
          }
          else if(this.returnObj["register_flag"] == 0){
            this.router.navigate(['/new-profile']);
          }
        }
      },
      error => {
        console.log("error: " + error);
      }
    );
  }

}
