(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{X3zk:function(t,o,n){"use strict";n.r(o),n.d(o,"LoginPageModule",(function(){return c}));var i=n("ofXK"),s=n("3Pt+"),e=n("TEn/"),r=n("tyNb"),a=n("fXoL"),b=n("dVwY");const g=[{path:"",component:(()=>{class t{constructor(t,o){this.router=t,this.gs=o,this.id="",this.password="",this.status=0,this.postObj={},this.returnObj={},this.navigate=()=>{this.postObj.id=this.id,this.postObj.password=this.password,this.login()},this.navigateToSignup=()=>{this.router.navigate(["/signup"])},this.login=()=>{this.gs.http("https://kn46itblog.com/hackathon/yamaguchi2020/php_apis/user/edit/login",this.postObj).subscribe(t=>{console.log(t),this.returnObj=t,this.status=this.returnObj.status,200==this.status&&(localStorage.id=this.postObj.id,localStorage.password=this.postObj.password,localStorage.hash=this.returnObj.hash,console.log("Stored item!"),1==this.returnObj.register_flag?this.router.navigate(["/tabs","tab1","login"]):0==this.returnObj.register_flag&&this.router.navigate(["/new-profile"]))},t=>{console.log("error: "+t)})}}ngOnInit(){this.postObj.id=localStorage.id,this.postObj.password=localStorage.password,this.login()}}return t.\u0275fac=function(o){return new(o||t)(a.Hb(r.g),a.Hb(b.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-login"]],decls:21,vars:2,consts:[["color","main"],["align","center"],["src","../../assets/icon/icon.png",1,"ion-padding","logo"],["id","top"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["type","submit","expand","block","color","main",1,""],["id","bottom-button","expand","block","fill","outline","color","main",3,"click"]],template:function(t,o){1&t&&(a.Mb(0,"ion-header"),a.Ib(1,"ion-toolbar",0),a.Lb(),a.Mb(2,"ion-content"),a.Mb(3,"div",1),a.Mb(4,"h1"),a.gc(5,"\u65b0\u611f\u899a\u5e30\u5b85\u90e8\u30ec\u30fc\u30b9\u30b2\u30fc\u30e0\uff01"),a.Lb(),a.Lb(),a.Ib(6,"ion-img",2),a.Mb(7,"div",3),a.gc(8,"\u30ed\u30b0\u30a4\u30f3"),a.Lb(),a.Mb(9,"form",4),a.Tb("submit",(function(){return o.navigate()})),a.Mb(10,"ion-item",5),a.Mb(11,"ion-label",6),a.gc(12,"ID"),a.Lb(),a.Mb(13,"ion-input",7),a.Tb("ngModelChange",(function(t){return o.id=t})),a.Lb(),a.Mb(14,"ion-label",6),a.gc(15,"\u30d1\u30b9\u30ef\u30fc\u30c9"),a.Lb(),a.Mb(16,"ion-input",8),a.Tb("ngModelChange",(function(t){return o.password=t})),a.Lb(),a.Lb(),a.Mb(17,"ion-button",9),a.gc(18,"\u30ed\u30b0\u30a4\u30f3"),a.Lb(),a.Lb(),a.Mb(19,"ion-button",10),a.Tb("click",(function(){return o.navigateToSignup()})),a.gc(20,"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089"),a.Lb(),a.Lb()),2&t&&(a.xb(13),a.Yb("ngModel",o.id),a.xb(3),a.Yb("ngModel",o.password))},directives:[e.o,e.C,e.m,e.q,s.i,s.e,s.f,e.s,e.t,e.r,e.J,s.h,s.d,s.g,e.e],styles:["#top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}#bottom-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%}.logo[_ngcontent-%COMP%]{height:300px}"]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(o){return new(o||t)},imports:[[r.i.forChild(g)],r.i]}),t})(),c=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(o){return new(o||t)},imports:[[i.b,s.a,e.D,l]]}),t})()}}]);