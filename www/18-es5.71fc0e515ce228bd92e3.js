!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"gs+/":function(o,e,c){"use strict";c.r(e),c.d(e,"ResultPageModule",(function(){return M}));var i,r,s,b=c("ofXK"),a=c("3Pt+"),l=c("TEn/"),u=c("tyNb"),p=c("fXoL"),g=c("dVwY"),h=[{path:"",component:(i=function(){function o(t,e,c){var i=this;n(this,o),this.router=t,this.route=e,this.gs=c,this.status="\u5e30\u5b85\u4e2d\u2026",this.postObj={},this.backLobby=function(){i.router.navigate(["/tabs/tab1"])}}var e,c,i;return e=o,(c=[{key:"ngOnInit",value:function(){var n=this;this.route.params.subscribe((function(t){n.score=t.score})),this.interval=setInterval((function(){n.postObj.id=localStorage.id;var t=n.postObj;console.log(t),n.gs.http("https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/battle/show/result",t).subscribe((function(t){console.log(t),1==t.goal_opponent&&(n.scoreOpponent=t.score_opponent,n.status=n.score>n.scoreOpponent?"\u52dd\u5229!":n.score==n.scoreOpponent?"\u5f15\u304d\u5206\u3051":"\u8ca0\u3051")}))}),1500)}}])&&t(e.prototype,c),i&&t(e,i),o}(),i.\u0275fac=function(n){return new(n||i)(p.Hb(u.g),p.Hb(u.a),p.Hb(g.a))},i.\u0275cmp=p.Bb({type:i,selectors:[["app-result"]],decls:28,vars:4,consts:[[3,"translucent"],["color","main"],["id","icon","src","../../assets/icon/icon_rect.png"],[1,"score"],[1,"txt"],[1,"ion-text-center"],[1,"ion-text-center","lose"],["expand","block","color","main","fill","outline","disabled","",1,"ion-text-center"],["expand","block","color","main",1,"ion-text-center",3,"click"]],template:function(n,t){1&n&&(p.Mb(0,"ion-header",0),p.Mb(1,"ion-toolbar",1),p.Mb(2,"ion-title"),p.Ib(3,"ion-img",2),p.Lb(),p.Lb(),p.Lb(),p.Mb(4,"ion-content"),p.Mb(5,"div",3),p.Mb(6,"ion-text"),p.Mb(7,"h5",4),p.gc(8,"\u3042\u306a\u305f\u306e\u30b9\u30c6\u30fc\u30bf\u30b9"),p.Lb(),p.Lb(),p.Mb(9,"p",5),p.Mb(10,"span"),p.gc(11),p.Lb(),p.gc(12,"\u2003\u70b9"),p.Lb(),p.Lb(),p.Mb(13,"div",3),p.Mb(14,"ion-text"),p.Mb(15,"h5",4),p.gc(16,"\u76f8\u624b\u306e\u30b9\u30c6\u30fc\u30bf\u30b9"),p.Lb(),p.Lb(),p.Mb(17,"p",5),p.Mb(18,"span"),p.gc(19),p.Lb(),p.gc(20,"\u2003\u70b9"),p.Lb(),p.Lb(),p.Mb(21,"ion-text"),p.Mb(22,"h5",6),p.gc(23),p.Lb(),p.Lb(),p.Mb(24,"ion-button",7),p.gc(25,"\u30ec\u30fc\u30b9\u672a\u5b8c\u4e86"),p.Lb(),p.Mb(26,"ion-button",8),p.Tb("click",(function(){return t.backLobby()})),p.gc(27,"\u30ed\u30d3\u30fc\u306b\u623b\u308b"),p.Lb(),p.Lb()),2&n&&(p.Yb("translucent",!0),p.xb(11),p.hc(t.score),p.xb(8),p.hc(t.scoreOpponent),p.xb(4),p.hc(t.status))},directives:[l.o,l.C,l.B,l.q,l.m,l.z,l.e],styles:["#icon[_ngcontent-%COMP%]{height:100px;width:100px}.score[_ngcontent-%COMP%]{margin:5%}.score[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-main);font-weight:700}.score[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]{color:var(--ion-color-gray);font-weight:700}.win[_ngcontent-%COMP%]{color:var(--ion-color-main)}.lose[_ngcontent-%COMP%], .win[_ngcontent-%COMP%]{margin-bottom:50px}.lose[_ngcontent-%COMP%]{color:var(--ion-color-sub)}"]}),i)}],f=((s=function t(){n(this,t)}).\u0275mod=p.Fb({type:s}),s.\u0275inj=p.Eb({factory:function(n){return new(n||s)},imports:[[u.i.forChild(h)],u.i]}),s),M=((r=function t(){n(this,t)}).\u0275mod=p.Fb({type:r}),r.\u0275inj=p.Eb({factory:function(n){return new(n||r)},imports:[[b.b,a.a,l.D,f]]}),r)}}])}();