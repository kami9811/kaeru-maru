!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{cRhG:function(t,o,i){"use strict";i.r(o),i.d(o,"ProfilePageModule",(function(){return _}));var s,r,a,b=i("ofXK"),c=i("3Pt+"),l=i("TEn/"),g=i("tyNb"),d=i("mrSG"),u=i("TMng"),h=i("fXoL"),p=i("dVwY"),m=[{path:"",component:(s=function(){function t(n,o,i,s){var r=this;e(this,t),this.router=n,this.gs=o,this.route=i,this.modalController=s,this.gender="",this.school="",this.profile="",this.imgHeight=600,this.image_1="",this.image_1_button="\u767b\u9332\u3059\u308b",this.image_1_flag=!1,this.image_2="",this.image_2_button="\u767b\u9332\u3059\u308b",this.image_2_flag=!1,this.image_3="",this.image_3_button="\u767b\u9332\u3059\u308b",this.image_3_flag=!1,this.image_sns="",this.image_sns_button="\u767b\u9332\u3059\u308b",this.image_sns_flag=!1,this.register_disabled=!0,this.register_outline="outline",this.register_button="\u767b\u9332(\u753b\u50cf\u304c\u672a\u767b\u9332\u3067\u3059...)",this.postObj={},this.returnObj={},this.getSNS=function(){r.postObj.id=localStorage.id,r.postObj.matched_id=r.matched_id,r.postObj.open=r.open,r.postObj.hash=localStorage.hash,r.gs.http("https://kn46itblog.com/biz/oncon10/php_apis/matched/show/sns",r.postObj).subscribe((function(e){console.log(e),200==e.status&&(console.log("Successed!"),r.image_sns=e.image_sns,console.log(e.image_sns),r.presentModal())}),(function(e){console.log("error: "+e)}))}}var o,i,s;return o=t,(i=[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(n){e.matched_id=n.matched_id,e.postObj.id=localStorage.id,e.postObj.matched_id=e.matched_id,e.postObj.hash=localStorage.hash,e.gs.http("https://kn46itblog.com/biz/oncon10/php_apis/matched/show/user",e.postObj).subscribe((function(n){console.log(n),200==n.status&&(console.log("Successed!"),e.age=n.age,0==n.gender?e.gender="\u305d\u306e\u4ed6":1==n.gender?e.gender="\u7537":2==n.gender&&(e.gender="\u5973"),e.school=n.school,e.profile=n.profile,e.image_1=n.image_1,e.image_2=n.image_2,e.image_3=n.image_3,e.open=n.open)}),(function(e){console.log("error: "+e)}))}),(function(e){return console.error(e)}))}},{key:"presentModal",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:u.a,componentProps:{image_sns:this.image_sns}});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}}])&&n(o.prototype,i),s&&n(o,s),t}(),s.\u0275fac=function(e){return new(e||s)(h.Hb(g.g),h.Hb(p.a),h.Hb(g.a),h.Hb(l.I))},s.\u0275cmp=h.Bb({type:s,selectors:[["app-profile"]],decls:29,vars:8,consts:[["color","main"],["slot","start"],["id","back"],["lines","full",1,"ion-padding-bottom"],["position","stacked"],["required","","type","text","name","matched_id","disabled","",3,"ngModel","ngModelChange"],["required","","type","number","name","age","disabled","",3,"ngModel","ngModelChange"],["required","","type","text","name","gender","disabled","",3,"ngModel","ngModelChange"],["required","","type","text","name","school","disabled","",3,"ngModel","ngModelChange"],["required","","name","profile","disabled","",3,"ngModel","ngModelChange"],["expand","block","color","main",3,"click"],[1,"ion-padding"],[3,"src"]],template:function(e,n){1&e&&(h.Mb(0,"ion-header"),h.Mb(1,"ion-toolbar",0),h.Mb(2,"ion-buttons",1),h.Ib(3,"ion-back-button",2),h.Lb(),h.Lb(),h.Lb(),h.Mb(4,"ion-content"),h.Mb(5,"ion-item",3),h.Mb(6,"ion-label",4),h.ic(7,"\u30e6\u30fc\u30b6ID"),h.Lb(),h.Mb(8,"ion-input",5),h.Ub("ngModelChange",(function(e){return n.matched_id=e})),h.Lb(),h.Mb(9,"ion-label",4),h.ic(10,"\u5e74\u9f62"),h.Lb(),h.Mb(11,"ion-input",6),h.Ub("ngModelChange",(function(e){return n.age=e})),h.Lb(),h.Mb(12,"ion-label",4),h.ic(13,"\u6027\u5225"),h.Lb(),h.Mb(14,"ion-input",7),h.Ub("ngModelChange",(function(e){return n.gender=e})),h.Lb(),h.Mb(15,"ion-label",4),h.ic(16,"\u5b66\u6821\u540d"),h.Lb(),h.Mb(17,"ion-input",8),h.Ub("ngModelChange",(function(e){return n.school=e})),h.Lb(),h.Mb(18,"ion-label",4),h.ic(19,"\u81ea\u5df1\u7d39\u4ecb\u6587"),h.Lb(),h.Mb(20,"ion-textarea",9),h.Ub("ngModelChange",(function(e){return n.profile=e})),h.Lb(),h.Lb(),h.Mb(21,"ion-button",10),h.Ub("click",(function(){return n.getSNS()})),h.ic(22,"SNS\u306e\u60c5\u5831\u3092\u53d6\u5f97"),h.Lb(),h.Mb(23,"div",11),h.Ib(24,"ion-img",12),h.Lb(),h.Mb(25,"div",11),h.Ib(26,"ion-img",12),h.Lb(),h.Mb(27,"div",11),h.Ib(28,"ion-img",12),h.Lb(),h.Lb()),2&e&&(h.xb(8),h.Zb("ngModel",n.matched_id),h.xb(3),h.Zb("ngModel",n.age),h.xb(3),h.Zb("ngModel",n.gender),h.xb(3),h.Zb("ngModel",n.school),h.xb(3),h.Zb("ngModel",n.profile),h.xb(4),h.Zb("src",n.image_1),h.xb(2),h.Zb("src",n.image_2),h.xb(2),h.Zb("src",n.image_3))},directives:[l.q,l.F,l.f,l.c,l.d,l.m,l.u,l.v,l.t,l.N,c.h,c.d,c.g,l.J,l.D,l.e,l.s],styles:[""]}),s)}],f=((a=function n(){e(this,n)}).\u0275mod=h.Fb({type:a}),a.\u0275inj=h.Eb({factory:function(e){return new(e||a)},imports:[[g.i.forChild(m)],g.i]}),a),_=((r=function n(){e(this,n)}).\u0275mod=h.Fb({type:r}),r.\u0275inj=h.Eb({factory:function(e){return new(e||r)},imports:[[b.b,c.a,l.G,f]]}),r)}}])}();