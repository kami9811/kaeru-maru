import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage implements OnInit {
  // time
  hour: number;
  minute: number;
  second: number;

  // distance
  latitude: Number = 0.0;
  longitude: Number = 0.0;
  distance: number;
  distance_opponent: number;

  // isgoal
  goalcode: number;

  isgoal: boolean = false;
  isgoaltext: string;

  speed_score: number;
  distance_score: number;
  spot_score: number;
  score: number;

  // spot
  spot: Number = 0;
  spot_opponent: Number = 0;

  interval: any;
  information_flag: boolean = false;

  constructor(
    private router: Router,
    public gs: GlobalService,
    private geolocation: Geolocation,
    private camera: Camera,
  ) { }

  postObj: any = {};
  returnObj: any = {};

  ngOnInit() {
    this.postObj["id"] = localStorage.id;
    this.postObj["password"] = localStorage.password;
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/user/edit/login', body).subscribe(
      res => {
        this.returnObj = res;
        if(this.returnObj["status"] == 200){
          localStorage.hash = this.returnObj["hash"];
          this.getInfo();
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
        this.getInfo();
      }
    }, 1500);
  }

  takeCamera = () => {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  getInfo = () => {
    this.information_flag = true;
    this.getTime();
    this.getDistance();
    this.getNumSpot();
  }

  getTime = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/battle/show/time', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        if(res["status"] == 200){
          this.hour = res["hour"];
          this.minute = res["minute"];
          this.second = res["second"];
        }
      },
      error => console.error(error)
    );
  }

  // onGps = () => {
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     this.latitude = resp.coords.latitude;
  //     this.longitude = resp.coords.longitude;
  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  getDistance = () => {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      this.postObj["id"] = localStorage.id;
      this.postObj["latitude"] = this.latitude;
      this.postObj["longitude"] = this.longitude;
      this.postObj["hash"] = localStorage.hash;
      const body = this.postObj;

      this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/battle/show/distance', body).subscribe(
        res => {
          console.log(res);
          this.returnObj = res;
          if(res["status"] == 200){
            this.distance = res["distance"];
            this.distance_opponent = res["distance_opponent"];
          }
        },
        error => console.error(error)
      );
    });
  }

  getIsGoal = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["goal_code"] = this.goalcode;
    this.postObj["hash"] = localStorage.hash;
    const body = this.postObj;

    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/battle/show/goal', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        if(res["status"] == 200){
          // this.getDistance();
          if(res["goal"] == 1) {
            this.isgoal = true;
            // this.speed_score = res["speed_score"];
            // this.distance_score = res["distance_score"];
            // this.spot_score = res["spot_score"];
            // this.score = res["score"];
            this.router.navigate(['/result', res["score"]]);
          }
        }
      },
      error => console.error(error)
    );
  }

  getNumSpot = () => {
    this.postObj["id"] = localStorage.id;
    this.postObj["hash"] = localStorage.hash;
    this.postObj["spot"] = this.spot;
    const body = this.postObj;
    console.log(body);

    this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/battle/show/spot', body).subscribe(
      res => {
        console.log(res);
        this.returnObj = res;
        if(res["status"] == 200){
          this.spot_opponent = res['spot_opponent'];
        }
      },
      error => console.error(error)
    );
  }

}
