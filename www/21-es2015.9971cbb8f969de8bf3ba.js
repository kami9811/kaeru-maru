(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{T9iC:function(t,e,n){"use strict";n.r(e),n.d(e,"SignupPageModule",(function(){return u}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),a=n("mrSG"),b=n("fXoL"),l=n("dVwY");const d=[{path:"",component:(()=>{class t{constructor(t,e,n){this.alertController=t,this.router=e,this.gs=n,this.id="",this.password="",this.postObj={},this.returnObj={},this.signup=()=>{""!=this.id?""!=this.password?(this.postObj.id=this.id,this.postObj.email=this.email,this.postObj.password=this.password,this.gs.http("https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/user/new/signup",this.postObj).subscribe(t=>{this.returnObj=t,200==this.returnObj.status?(this.alertSuccess(),this.router.navigate(["/login"])):this.alertFailer()})):this.alertPassword():this.alertId()}}ngOnInit(){}alertSuccess(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u65b0\u898f\u767b\u9332",message:"\u65b0\u898f\u767b\u9332\u306b\u6210\u529f\u3057\u307e\u3057\u305f.",buttons:["OK"]});yield t.present()}))}alertFailer(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u65b0\u898f\u767b\u9332",message:"\u65b0\u898f\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f.<br>ID\u304c\u91cd\u8907\u3057\u3066\u3044\u307e\u3059.",buttons:["OK"]});yield t.present()}))}alertId(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u65b0\u898f\u767b\u9332",message:"\u65b0\u898f\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f.<br>ID\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093.",buttons:["OK"]});yield t.present()}))}alertPassword(){return Object(a.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"\u65b0\u898f\u767b\u9332",message:"\u65b0\u898f\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f.<br>\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u5165\u529b\u3055\u308c\u3066\u3044\u307e\u305b\u3093.",buttons:["OK"]});yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(b.Hb(s.a),b.Hb(r.g),b.Hb(l.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-signup"]],decls:25,vars:3,consts:[["color","main"],["slot","start"],["id","back","defaultHref","login"],["align","center"],["src","../../assets/icon/icon.png",1,"ion-padding","logo"],[1,"top"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","text","name","email",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["type","submit","expand","block","fill","outline","color","main"]],template:function(t,e){1&t&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-buttons",1),b.Ib(3,"ion-back-button",2),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content"),b.Mb(5,"div",3),b.Mb(6,"h1"),b.gc(7,"\u65b0\u611f\u899a\u5e30\u5b85\u90e8\u30ec\u30fc\u30b9\u30b2\u30fc\u30e0\uff01"),b.Lb(),b.Lb(),b.Ib(8,"ion-img",4),b.Mb(9,"div",5),b.gc(10,"\u65b0\u898f\u767b\u9332"),b.Lb(),b.Mb(11,"div"),b.Mb(12,"form",6),b.Tb("submit",(function(){return e.signup()})),b.Mb(13,"ion-item",7),b.Mb(14,"ion-label",8),b.gc(15,"ID"),b.Lb(),b.Mb(16,"ion-input",9),b.Tb("ngModelChange",(function(t){return e.id=t})),b.Lb(),b.Mb(17,"ion-label",8),b.gc(18,"e-mail"),b.Lb(),b.Mb(19,"ion-input",10),b.Tb("ngModelChange",(function(t){return e.email=t})),b.Lb(),b.Mb(20,"ion-label",8),b.gc(21,"\u30d1\u30b9\u30ef\u30fc\u30c9"),b.Lb(),b.Mb(22,"ion-input",11),b.Tb("ngModelChange",(function(t){return e.password=t})),b.Lb(),b.Lb(),b.Mb(23,"ion-button",12),b.gc(24,"\u65b0\u898f\u767b\u9332\u3059\u308b"),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&t&&(b.xb(16),b.Yb("ngModel",e.id),b.xb(3),b.Yb("ngModel",e.email),b.xb(3),b.Yb("ngModel",e.password))},directives:[s.o,s.C,s.f,s.c,s.d,s.m,s.q,o.i,o.e,o.f,s.s,s.t,s.r,s.J,o.h,o.d,o.g,s.e],styles:[".top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}.logo[_ngcontent-%COMP%]{height:300px}"]}),t})()}];let c=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(d)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.a,s.D,c]]}),t})()}}]);