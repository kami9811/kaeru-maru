(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{tmrb:function(t,o,i){"use strict";i.r(o),i.d(o,"Tab1PageModule",(function(){return m}));var e=i("TEn/"),n=i("ofXK"),s=i("3Pt+"),r=i("qtYk"),a=i("tyNb"),l=i("mrSG"),c=i("P5UM"),h=i("fXoL"),b=i("Bfh1"),u=i("dVwY"),d=i("2w2N");const g=[{path:"",component:(()=>{class t{constructor(t,o,i,e,n,s){this.geolocation=t,this.alertController=o,this.router=i,this.gs=e,this.modalController=n,this.valueSharedService=s,this.postObj={},this.returnObj={},this.receive_id="",this.image_1="",this.image_2="",this.image_3="",this.information_flag=!1,this.onGps=()=>{this.geolocation.getCurrentPosition().then(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude}).catch(t=>{console.log("Error getting location",t)})},this.showHelps=()=>{this.presentModal()},this.matching=t=>{if(t){this.postObj.id=localStorage.id,this.postObj.hash=localStorage.hash;const t=this.postObj;console.log(t),this.gs.http("https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/match/new/room",t).subscribe(t=>{this.returnObj=t,console.log("returnObj",this.returnObj.status),200==this.returnObj.status?(this.alertSuccess(),this.router.navigate(["/room"]),this.valueSharedService.open_id=localStorage.id):this.alertFailer()})}else this.geolocation.getCurrentPosition().then(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.postObj.id=localStorage.id,this.postObj.open_id=this.roomID,this.postObj.latitude=this.latitude,this.postObj.longitude=this.longitude,this.postObj.hash=localStorage.hash;const o=this.postObj;console.log(o),this.gs.http("https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/match/show/room",o).subscribe(t=>{this.returnObj=t,console.log(t),200==this.returnObj.status?(this.alertSuccess(),this.valueSharedService.open_id=this.roomID,this.valueSharedService.join_id=localStorage.id,console.log(this.valueSharedService.join_id),this.router.navigate(["/room"])):this.alertFailer()})})}}ngOnInit(){console.log("Init!"),this.postObj.id=localStorage.id,this.postObj.password=localStorage.password;const t=this.postObj;console.log(t),this.gs.http("https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/user/edit/login",t).subscribe(t=>{this.returnObj=t,200==this.returnObj.status?localStorage.hash=this.returnObj.hash:this.router.navigate(["/login"])},t=>console.error(t)),this.interval=setInterval(()=>{},1500)}alertSuccess(){return Object(l.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u30eb\u30fc\u30e0\u4f5c\u6210",message:"\u30eb\u30fc\u30e0\u4f5c\u6210\u306b\u6210\u529f\u3057\u307e\u3057\u305f.",buttons:["OK"]});yield t.present()}))}alertFailer(){return Object(l.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u30eb\u30fc\u30e0\u4f5c\u6210",message:"\u30eb\u30fc\u30e0\u4f5c\u6210\u306b\u5931\u6557\u3057\u307e\u3057\u305f.<br>ID\u3082\u3057\u304f\u306fhash\u304c\u91cd\u8907\u3057\u3066\u3044\u307e\u3059.",buttons:["OK"]});yield t.present()}))}presentModal(){return Object(l.a)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:c.a});return yield t.present()}))}}return t.\u0275fac=function(o){return new(o||t)(h.Hb(b.a),h.Hb(e.a),h.Hb(a.g),h.Hb(u.a),h.Hb(e.F),h.Hb(d.a))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-tab1"]],decls:17,vars:3,consts:[[3,"translucent"],["color","main"],["id","icon","src","../../assets/icon/icon_rect.png"],[3,"fullscreen"],["id","room-button","Expand","block","fill","solid","color","main",1,"buttons",3,"click"],["name","add-circle-outline"],["lines","full"],["position","floating"],["required","","type","text","name","roomID",3,"ngModel","ngModelChange"],["id","join-button","Expand","block","fill","outline","color","main",1,"buttons",3,"click"],["Expand","block","fill","solid","color","sub",1,"buttons",3,"click"],["name","help-circle-outline"]],template:function(t,o){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-toolbar",1),h.Mb(2,"ion-title"),h.Ib(3,"ion-img",2),h.Lb(),h.Lb(),h.Lb(),h.Mb(4,"ion-content",3),h.Mb(5,"ion-button",4),h.Tb("click",(function(){return o.matching(!0)})),h.Ib(6,"ion-icon",5),h.gc(7,"\u30de\u30c3\u30c1\u30f3\u30b0\u30eb\u30fc\u30e0\u3092\u4f5c\u6210"),h.Lb(),h.Mb(8,"ion-item",6),h.Mb(9,"ion-label",7),h.gc(10,"\u53c2\u52a0\u30eb\u30fc\u30e0ID"),h.Lb(),h.Mb(11,"ion-input",8),h.Tb("ngModelChange",(function(t){return o.roomID=t})),h.Lb(),h.Lb(),h.Mb(12,"ion-button",9),h.Tb("click",(function(){return o.matching(!1)})),h.gc(13,"\u5bfe\u8c61\u306e\u30de\u30c3\u30c1\u30f3\u30b0\u306b\u53c2\u52a0"),h.Lb(),h.Mb(14,"ion-button",10),h.Tb("click",(function(){return o.showHelps()})),h.Ib(15,"ion-icon",11),h.gc(16,"\u30eb\u30fc\u30eb\u8aac\u660e"),h.Lb(),h.Lb()),2&t&&(h.Yb("translucent",!0),h.xb(4),h.Yb("fullscreen",!0),h.xb(7),h.Yb("ngModel",o.roomID))},directives:[e.o,e.C,e.B,e.q,e.m,e.e,e.p,e.s,e.t,e.r,e.J,s.h,s.d,s.g],styles:[".buttons[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%}#room-button[_ngcontent-%COMP%]{margin-top:25%;margin-bottom:25%}#join-button[_ngcontent-%COMP%]{margin-top:10%;margin-bottom:60%}#icon[_ngcontent-%COMP%]{height:100px;width:100px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(o){return new(o||t)},imports:[[a.i.forChild(g)],a.i]}),t})(),m=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(o){return new(o||t)},imports:[[e.D,n.b,s.a,r.a,p]]}),t})()}}]);