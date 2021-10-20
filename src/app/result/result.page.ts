import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  score: Number;
  scoreOpponent: Number;
  status: String = '帰宅中…';

  postObj: any = {};

  interval: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public gs: GlobalService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.score = params['score'];
      }
    );

    this.interval = setInterval(() => {
      this.postObj['id'] = localStorage.id;

      const body = this.postObj;
      console.log(body);

      this.gs.http('https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/battle/show/result', body).subscribe(
        res => {
          console.log(res);
          if(res['goal_opponent'] == 1){
            this.scoreOpponent = res['score_opponent'];
            if(this.score > this.scoreOpponent){
              this.status = '勝利!';
            }
            else if(this.score == this.scoreOpponent){
              this.status = '引き分け';
            }
            else{
              this.status = '負け';
            }
          }
        }
      );

    }, 1500);
  }

  backLobby = () => {
    this.router.navigate(['/tabs/tab1']);
  }

}
