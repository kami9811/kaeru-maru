!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{X3zk:function(o,i,e){"use strict";e.r(i),e.d(i,"LoginPageModule",(function(){return h}));var r,a,s,b=e("ofXK"),u=e("3Pt+"),c=e("TEn/"),l=e("tyNb"),g=e("fXoL"),p=e("dVwY"),d=[{path:"",component:(r=function(){function o(n,i){var e=this;t(this,o),this.router=n,this.gs=i,this.id="",this.password="",this.status=0,this.postObj={},this.returnObj={},this.navigate=function(){e.postObj.id=e.id,e.postObj.password=e.password,e.login()},this.navigateToSignup=function(){e.router.navigate(["/signup"])},this.login=function(){e.gs.http("https://kn46itblog.com/biz/oncon10/php_apis/user/edit/login",e.postObj).subscribe((function(t){console.log(t),e.returnObj=t,e.status=e.returnObj.status,200==e.status&&(localStorage.id=e.postObj.id,localStorage.password=e.postObj.password,localStorage.hash=e.returnObj.hash,console.log("Stored item!"),1==e.returnObj.register_flag?e.router.navigate(["/tabs","tab1","login"]):0==e.returnObj.register_flag&&e.router.navigate(["/new-profile"]))}),(function(t){console.log("error: "+t)}))}}var i,e,r;return i=o,(e=[{key:"ngOnInit",value:function(){this.postObj.id=localStorage.id,this.postObj.password=localStorage.password,this.login()}}])&&n(i.prototype,e),r&&n(i,r),o}(),r.\u0275fac=function(t){return new(t||r)(g.Hb(l.g),g.Hb(p.a))},r.\u0275cmp=g.Bb({type:r,selectors:[["app-login"]],decls:18,vars:2,consts:[["color","main"],["src","../../assets/icon/icon.jpeg",1,"ion-padding","logo"],["id","top"],[1,"ion-padding",3,"submit"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","text","name","id",3,"ngModel","ngModelChange"],["required","","type","password","name","password",3,"ngModel","ngModelChange"],["type","submit","expand","block","color","main",1,""],["id","bottom-button","expand","block","fill","outline","color","main",3,"click"]],template:function(t,n){1&t&&(g.Mb(0,"ion-header"),g.Ib(1,"ion-toolbar",0),g.Lb(),g.Mb(2,"ion-content"),g.Ib(3,"ion-img",1),g.Mb(4,"div",2),g.ic(5,"\u30ed\u30b0\u30a4\u30f3"),g.Lb(),g.Mb(6,"form",3),g.Ub("submit",(function(){return n.navigate()})),g.Mb(7,"ion-item",4),g.Mb(8,"ion-label",5),g.ic(9,"ID"),g.Lb(),g.Mb(10,"ion-input",6),g.Ub("ngModelChange",(function(t){return n.id=t})),g.Lb(),g.Mb(11,"ion-label",5),g.ic(12,"\u30d1\u30b9\u30ef\u30fc\u30c9"),g.Lb(),g.Mb(13,"ion-input",7),g.Ub("ngModelChange",(function(t){return n.password=t})),g.Lb(),g.Lb(),g.Mb(14,"ion-button",8),g.ic(15,"\u30ed\u30b0\u30a4\u30f3"),g.Lb(),g.Lb(),g.Mb(16,"ion-button",9),g.Ub("click",(function(){return n.navigateToSignup()})),g.ic(17,"\u65b0\u898f\u767b\u9332\u306f\u3053\u3061\u3089"),g.Lb(),g.Lb()),2&t&&(g.xb(10),g.Zb("ngModel",n.id),g.xb(3),g.Zb("ngModel",n.password))},directives:[c.q,c.F,c.m,c.s,u.i,u.e,u.f,c.u,c.v,c.t,c.N,u.h,u.d,u.g,c.e],styles:["#top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}#bottom-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;width:90%}.logo[_ngcontent-%COMP%]{height:300px}"]}),r)}],f=((s=function n(){t(this,n)}).\u0275mod=g.Fb({type:s}),s.\u0275inj=g.Eb({factory:function(t){return new(t||s)},imports:[[l.i.forChild(d)],l.i]}),s),h=((a=function n(){t(this,n)}).\u0275mod=g.Fb({type:a}),a.\u0275inj=g.Eb({factory:function(t){return new(t||a)},imports:[[b.b,u.a,c.G,f]]}),a)}}])}();