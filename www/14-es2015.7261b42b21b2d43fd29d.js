(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{NiNz:function(e,i,t){"use strict";t.r(i),t.d(i,"NewProfilePageModule",(function(){return c}));var n=t("ofXK"),o=t("3Pt+"),s=t("TEn/"),a=t("tyNb"),g=t("fXoL"),l=t("dVwY");const r=[{path:"",component:(()=>{class e{constructor(e,i){this.router=e,this.gs=i,this.school="",this.profile="",this.imgHeight=600,this.image_1="",this.image_1_button="\u767b\u9332\u3059\u308b",this.image_1_flag=!1,this.image_2="",this.image_2_button="\u767b\u9332\u3059\u308b",this.image_2_flag=!1,this.image_3="",this.image_3_button="\u767b\u9332\u3059\u308b",this.image_3_flag=!1,this.image_sns="",this.image_sns_button="\u767b\u9332\u3059\u308b",this.image_sns_flag=!1,this.register_disabled=!0,this.register_outline="outline",this.register_button="\u767b\u9332(\u753b\u50cf\u304c\u672a\u767b\u9332\u3067\u3059...)",this.postObj={},this.returnObj={},this.postProfile=()=>{this.postObj.id=localStorage.id,this.postObj.age=this.age,this.postObj.gender=this.gender,this.postObj.school=this.school,this.postObj.profile=this.profile,this.postObj.image_1=this.image_1,this.postObj.image_2=this.image_2,this.postObj.image_3=this.image_3,this.postObj.image_sns=this.image_sns,this.postObj.hash=localStorage.hash,this.gs.http("https://kn46itblog.com/biz/oncon10/php_apis/user/edit/profile",this.postObj).subscribe(e=>{console.log(e),200==e.status&&(console.log("Successed!"),this.router.navigate(["/tabs","tab1","login"]))},e=>{console.log("error: "+e)})},this.loadPicture=e=>{console.log(e);var i=e.srcElement.files[0],t=new FileReader,n=new Image;t.onloadend=()=>{n.onload=()=>{console.log("Image Processing");const i=n.src.substring(5,n.src.indexOf(";")),t=n.width*(this.imgHeight/n.height),o=document.createElement("canvas");o.width=t,o.height=this.imgHeight,o.getContext("2d").drawImage(n,0,0,t,this.imgHeight),"image_1"==e.target.id?(this.image_1=o.toDataURL(i),console.log(this.image_1)):"image_2"==e.target.id?(this.image_2=o.toDataURL(i),console.log(this.image_2)):"image_3"==e.target.id?(this.image_3=o.toDataURL(i),console.log(this.image_3)):"image_sns"==e.target.id&&(this.image_sns=o.toDataURL(i),console.log(this.image_sns))},n.src=t.result,"image_1"==e.target.id?this.image_1_flag=!0:"image_2"==e.target.id?this.image_2_flag=!0:"image_3"==e.target.id?this.image_3_flag=!0:"image_sns"==e.target.id&&(this.image_sns_flag=!0),this.image_1_flag&&this.image_2_flag&&this.image_3_flag&&this.image_sns_flag&&(this.register_disabled=!1,this.register_button="\u767b\u9332",this.register_outline="solid")},i&&console.log(t.readAsDataURL(i))}}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)(g.Hb(a.g),g.Hb(l.a))},e.\u0275cmp=g.Bb({type:e,selectors:[["app-new-profile"]],decls:43,vars:7,consts:[["color","main"],[1,"ion-padding",3,"submit"],[1,"top"],["lines","full",1,"ion-padding-bottom"],["position","floating"],["required","","type","number","name","age",3,"ngModel","ngModelChange"],["required","","name","gender","placeholder","1\u3064\u9078\u3093\u3067\u304f\u3060\u3055\u3044",3,"ngModel","ngModelChange"],["value","0"],["value","1"],["value","2"],["required","","type","text","name","school",3,"ngModel","ngModelChange"],["required","","name","profile",3,"ngModel","ngModelChange"],[1,"ion-padding"],["type","file","accept","image/*","id","image_1",3,"change"],["type","file","accept","image/*","id","image_2",3,"change"],["type","file","accept","image/*","id","image_3",3,"change"],["type","file","accept","image/*","id","image_sns",3,"change"],["type","submit","expand","block","color","main",3,"fill","disabled"]],template:function(e,i){1&e&&(g.Mb(0,"ion-header"),g.Ib(1,"ion-toolbar",0),g.Lb(),g.Mb(2,"ion-content"),g.Mb(3,"form",1),g.Ub("submit",(function(){return i.postProfile()})),g.Mb(4,"div",2),g.ic(5,"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u767b\u9332\u3057\u3066\u304f\u3060\u3055\u3044"),g.Lb(),g.Mb(6,"ion-item",3),g.Mb(7,"ion-label",4),g.ic(8,"\u5e74\u9f62"),g.Lb(),g.Mb(9,"ion-input",5),g.Ub("ngModelChange",(function(e){return i.age=e})),g.Lb(),g.Mb(10,"ion-label"),g.ic(11,"\u6027\u5225"),g.Lb(),g.Mb(12,"ion-select",6),g.Ub("ngModelChange",(function(e){return i.gender=e})),g.Mb(13,"ion-select-option",7),g.ic(14,"\u305d\u306e\u4ed6"),g.Lb(),g.Mb(15,"ion-select-option",8),g.ic(16,"\u7537"),g.Lb(),g.Mb(17,"ion-select-option",9),g.ic(18,"\u5973"),g.Lb(),g.Lb(),g.Mb(19,"ion-label",4),g.ic(20,"\u5b66\u6821\u540d"),g.Lb(),g.Mb(21,"ion-input",10),g.Ub("ngModelChange",(function(e){return i.school=e})),g.Lb(),g.Mb(22,"ion-label",4),g.ic(23,"\u81ea\u5df1\u7d39\u4ecb\u6587"),g.Lb(),g.Mb(24,"ion-textarea",11),g.Ub("ngModelChange",(function(e){return i.profile=e})),g.Lb(),g.Lb(),g.Mb(25,"div",2),g.ic(26,"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d4\u30fc\u30eb\u753b\u50cf1\u2728"),g.Lb(),g.Mb(27,"div",12),g.Mb(28,"input",13),g.Ub("change",(function(e){return i.loadPicture(e)})),g.Lb(),g.Lb(),g.Mb(29,"div",2),g.ic(30,"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d4\u30fc\u30eb\u753b\u50cf2\u2728"),g.Lb(),g.Mb(31,"div",12),g.Mb(32,"input",14),g.Ub("change",(function(e){return i.loadPicture(e)})),g.Lb(),g.Lb(),g.Mb(33,"div",2),g.ic(34,"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d4\u30fc\u30eb\u753b\u50cf3\u2728"),g.Lb(),g.Mb(35,"div",12),g.Mb(36,"input",15),g.Ub("change",(function(e){return i.loadPicture(e)})),g.Lb(),g.Lb(),g.Mb(37,"div",2),g.ic(38,"\u30a4\u30f3\u30b9\u30bfQR\u30b3\u30fc\u30c9"),g.Lb(),g.Mb(39,"div",12),g.Mb(40,"input",16),g.Ub("change",(function(e){return i.loadPicture(e)})),g.Lb(),g.Lb(),g.Mb(41,"ion-button",17),g.ic(42),g.Lb(),g.Lb(),g.Lb()),2&e&&(g.xb(9),g.Zb("ngModel",i.age),g.xb(3),g.Zb("ngModel",i.gender),g.xb(9),g.Zb("ngModel",i.school),g.xb(3),g.Zb("ngModel",i.profile),g.xb(17),g.Zb("fill",i.register_outline)("disabled",i.register_disabled),g.xb(1),g.jc(i.register_button))},directives:[s.q,s.F,s.m,o.i,o.e,o.f,s.u,s.v,s.t,s.J,o.h,o.d,o.g,s.y,s.M,s.z,s.N,s.D,s.e],styles:[".top[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:large}.file-button-label[_ngcontent-%COMP%]{text-align:center;font-size:1em;color:#000;background-color:#7634f8;border-radius:10px;padding:12px 30px;display:block;margin-left:auto;margin-right:auto;width:100%}.file-button[_ngcontent-%COMP%]{display:none}"]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=g.Fb({type:e}),e.\u0275inj=g.Eb({factory:function(i){return new(i||e)},imports:[[a.i.forChild(r)],a.i]}),e})(),c=(()=>{class e{}return e.\u0275mod=g.Fb({type:e}),e.\u0275inj=g.Eb({factory:function(i){return new(i||e)},imports:[[n.b,o.a,s.G,b]]}),e})()}}]);