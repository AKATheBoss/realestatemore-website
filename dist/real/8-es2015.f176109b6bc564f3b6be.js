(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AsQF:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("k5Gf");function a(l){return new e.a(l)}class i{constructor(l,n){this.translate=l,this.commonService=n,this.translate.use(this.commonService.language),this.commonService._lang.subscribe(l=>{this.translate.use(l)})}}var s=u("pMnS"),o=u("TSSN"),c=u("SVse"),r=u("iInd"),b=u("AytR");class m{constructor(l,n){this.apiService=l,this.commonService=n}ngOnInit(){this.featuredProperties(),this.aboutDetail()}featuredProperties(){this.commonService.showLoader=!0;let l=`${b.a.api_url}mobile/propertyListing`,n={Type:"all"};n.userId=localStorage.getItem("user_id"),n.status="active",n.view="list",n.pageNo="1",this.apiService.postData(l,n).subscribe(l=>{this.commonService.showLoader=!1,(l.status="true")&&(this.featuredLists=l.data)},l=>{this.commonService.showLoader=!1,this.apiService.log(l)})}aboutDetail(){this.commonService.showLoader=!0,this.apiService.getData(`${b.a.api_url}getAboutus`).subscribe(l=>{"true"==l.status&&(this.aboutData=l.data)},l=>{this.commonService.showLoader=!1,this.apiService.log(l)})}}var d=u("H+bZ"),g=u("OlR4"),p=t.rb({encapsulation:0,styles:[[".team-member-thumb[_ngcontent-%COMP%]:hover + .team-member-info[_ngcontent-%COMP%]{display:block}.meet-the-team-area[_ngcontent-%COMP%]{padding:0}.meet-the-team-area[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]{margin-bottom:20px}.carousel-item[_ngcontent-%COMP%]   .single-featured-property[_ngcontent-%COMP%]   .property-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}.carousel-control-next[_ngcontent-%COMP%], .carousel-control-prev[_ngcontent-%COMP%]{bottom:auto;top:120px;opacity:1}.single-team-member[_ngcontent-%COMP%]{overflow:hidden;margin:0 0 50px}.single-team-member[_ngcontent-%COMP%]   .team-member-thumb[_ngcontent-%COMP%]{margin-bottom:0}.single-team-member[_ngcontent-%COMP%]   .team-member-info[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;background:#fff;width:100%;padding:10px 0;border:1px solid #a2a2a2;display:block;bottom:0;margin:0;transform:translate(0,100%);transition:.5s all ease-in-out}.single-team-member[_ngcontent-%COMP%]:hover   .team-member-info[_ngcontent-%COMP%]{transform:translate(0,0)}"]],data:{}});function h(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Nb(1,null,["",""])),t.Hb(131072,o.i,[o.j,t.h])],null,function(l,n){l(n,1,0,t.Ob(n,1,0,t.Fb(n,2).transform("Buy")))})}function f(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Nb(1,null,["",""])),t.Hb(131072,o.i,[o.j,t.h])],null,function(l,n){l(n,1,0,t.Ob(n,1,0,t.Fb(n,2).transform("Rent For Event")))})}function v(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Nb(1,null,["",""])),t.Hb(131072,o.i,[o.j,t.h])],null,function(l,n){l(n,1,0,t.Ob(n,1,0,t.Fb(n,2).transform("Rent")))})}function F(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Nb(1,null,["",""])),t.Hb(131072,o.i,[o.j,t.h])],null,function(l,n){l(n,1,0,t.Ob(n,1,0,t.Fb(n,2).transform("Architecture & Interior")))})}function C(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t.Nb(1,null,["",""])),t.Hb(131072,o.i,[o.j,t.h])],null,function(l,n){l(n,1,0,t.Ob(n,1,0,t.Fb(n,2).transform("After Sales Services")))})}function y(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,39,"div",[],[[8,"className",0]],null,null,null,null)),(l()(),t.tb(1,0,null,null,38,"div",[["class","single-featured-property"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,16,"div",[["class","property-thumb"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(4,0,null,null,10,"div",[["class","tag"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,h)),t.sb(6,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,f)),t.sb(8,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(10,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,F)),t.sb(12,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.ib(16777216,null,null,1,null,C)),t.sb(14,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(15,0,null,null,3,"div",[["class","list-price"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.Nb(17,null,[""," ",""])),t.Hb(131072,o.i,[o.j,t.h]),(l()(),t.tb(19,0,null,null,20,"div",[["class","property-content"]],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Nb(21,null,["",""])),(l()(),t.tb(22,0,null,null,2,"p",[["class","location"]],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/location.png"]],null,null,null,null,null)),(l()(),t.Nb(24,null,[""," "])),(l()(),t.tb(25,0,null,null,14,"div",[["class","property-meta-data d-flex align-items-end justify-content-between"]],null,null,null,null,null)),(l()(),t.tb(26,0,null,null,1,"div",[["class","new-tag"]],null,null,null,null,null)),(l()(),t.tb(27,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/new.png"]],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,3,"div",[["class","bathroom"]],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/bathtub.png"]],null,null,null,null,null)),(l()(),t.tb(30,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(31,null,["",""])),(l()(),t.tb(32,0,null,null,3,"div",[["class","garage"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/garage.png"]],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(35,null,["",""])),(l()(),t.tb(36,0,null,null,3,"div",[["class","space"]],null,null,null,null,null)),(l()(),t.tb(37,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/space.png"]],null,null,null,null,null)),(l()(),t.tb(38,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(39,null,[""," ",""]))],function(l,n){l(n,6,0,"buy"==n.context.$implicit.Type),l(n,8,0,"rentevent"==n.context.$implicit.Type),l(n,10,0,"rent"==n.context.$implicit.Type),l(n,12,0,"archInterior"==n.context.$implicit.Type),l(n,14,0,"afterSales"==n.context.$implicit.Type)},function(l,n){l(n,0,0,t.xb(1,"carousel-item ",0==n.context.index?"active":"","")),l(n,3,0,t.xb(1,"",n.context.$implicit.imagesFile.length>0?n.context.$implicit.imagesFile[0].image:"assets/img/Real-Estate.png","")),l(n,17,0,t.Ob(n,17,0,t.Fb(n,18).transform("SAR")),n.context.$implicit.totalPrice),l(n,21,0,n.context.$implicit.title),l(n,24,0,n.context.$implicit.address),l(n,31,0,n.context.$implicit.bathrooms),l(n,35,0,n.context.$implicit.bedrooms),l(n,39,0,n.context.$implicit.plotSize,n.context.$implicit.plotSizeUnit)})}function S(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,17,"div",[["class","col-12 col-sm-6 col-lg-4"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,16,"div",[["class","single-team-member mb-100 wow fadeInUp"],["data-wow-delay","250ms"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,1,"div",[["class","team-member-thumb"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(4,0,null,null,13,"div",[["class","team-member-info"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,5,"div",[["class","section-heading"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/prize.png"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(8,null,["",""])),(l()(),t.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Nb(10,null,["",""])),(l()(),t.tb(11,0,null,null,6,"div",[["class","address"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/phone-call.png"]],null,null,null,null,null)),(l()(),t.Nb(14,null,[" ",""])),(l()(),t.tb(15,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/envelope.png"]],null,null,null,null,null)),(l()(),t.Nb(17,null,[" ",""]))],null,function(l,n){l(n,3,0,t.xb(1,"",n.context.$implicit.image,"")),l(n,8,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.designation),l(n,14,0,n.context.$implicit.mobileNo),l(n,17,0,n.context.$implicit.email)})}function w(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,12,"section",[["class","breadcumb-area bg-img"],["style","background-image: url(assets/img/bg-img/hero1.jpg);"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,11,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,10,"div",[["class","row h-100 align-items-center"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,9,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,8,"div",[["class","breadcumb-content"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,7,"h3",[["class","breadcumb-title"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.sb(7,671744,null,0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Nb(8,null,[""," "])),t.Hb(131072,o.i,[o.j,t.h]),(l()(),t.tb(10,0,null,null,0,"i",[["class","fa fa-angle-right"]],null,null,null,null,null)),(l()(),t.Nb(11,null,[""," "])),t.Hb(131072,o.i,[o.j,t.h]),(l()(),t.tb(13,0,null,null,26,"section",[["class","about-content-wrapper section-padding-100"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,25,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(15,0,null,null,24,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,9,"div",[["class","col-12 col-lg-8"]],null,null,null,null,null)),(l()(),t.tb(17,0,null,null,4,"div",[["class","section-heading text-left wow fadeInUp"],["data-wow-delay","250ms"]],null,null,null,null,null)),(l()(),t.tb(18,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(19,null,["",""])),(l()(),t.tb(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Suspendisse dictum enim sit amet libero"])),(l()(),t.tb(22,0,null,null,3,"div",[["class","about-content"]],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,0,"img",[["alt",""],["class","wow fadeInUp"],["data-wow-delay","350ms"],["src","assets/img/bg-img/about.jpg"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,1,"p",[["class","wow fadeInUp"],["data-wow-delay","450ms"]],null,null,null,null,null)),(l()(),t.Nb(25,null,["",""])),(l()(),t.tb(26,0,null,null,13,"div",[["class","col-12 col-lg-4"]],null,null,null,null,null)),(l()(),t.tb(27,0,null,null,4,"div",[["class","section-heading text-left wow fadeInUp"],["data-wow-delay","250ms"]],null,null,null,null,null)),(l()(),t.tb(28,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Featured Properties"])),(l()(),t.tb(30,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Suspendisse dictum enim sit amet libero"])),(l()(),t.tb(32,0,null,null,7,"div",[["class","carousel slide"],["data-ride","carousel"],["id","demo"]],null,null,null,null,null)),(l()(),t.tb(33,0,null,null,2,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,y)),t.sb(35,278528,null,0,c.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(36,0,null,null,1,"a",[["class","carousel-control-prev"],["data-slide","prev"],["href","#demo"]],null,null,null,null,null)),(l()(),t.tb(37,0,null,null,0,"span",[["class","carousel-control-prev-icon"]],null,null,null,null,null)),(l()(),t.tb(38,0,null,null,1,"a",[["class","carousel-control-next"],["data-slide","next"],["href","#demo"]],null,null,null,null,null)),(l()(),t.tb(39,0,null,null,0,"span",[["class","carousel-control-next-icon"]],null,null,null,null,null)),(l()(),t.tb(40,0,null,null,11,"section",[["class","meet-the-team-area section-padding-100-0"]],null,null,null,null,null)),(l()(),t.tb(41,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(42,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(43,0,null,null,5,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(44,0,null,null,4,"div",[["class","section-heading"]],null,null,null,null,null)),(l()(),t.tb(45,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Nb(46,null,["",""])),(l()(),t.tb(47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Nb(48,null,["",""])),(l()(),t.tb(49,0,null,null,2,"div",[["class","row justify-content-center"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,S)),t.sb(51,278528,null,0,c.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,7,0,""),l(n,35,0,u.featuredLists),l(n,51,0,null==u.aboutData?null:u.aboutData.team)},function(l,n){var u=n.component;l(n,6,0,t.Fb(n,7).target,t.Fb(n,7).href),l(n,8,0,t.Ob(n,8,0,t.Fb(n,9).transform("Home"))),l(n,11,0,t.Ob(n,11,0,t.Fb(n,12).transform("About Us"))),l(n,19,0,null==u.aboutData?null:u.aboutData.title),l(n,25,0,null==u.aboutData?null:u.aboutData.description),l(n,46,0,null==u.aboutData?null:u.aboutData.teamTitle),l(n,48,0,null==u.aboutData?null:u.aboutData.teamDescription)})}function P(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-about-us",[],null,null,null,w,p)),t.sb(1,114688,null,0,m,[d.a,g.a],null,null)],function(l,n){l(n,1,0)},null)}var x=t.pb("app-about-us",m,P,{},{},[]),N=u("s7LF");class O{constructor(l,n,u){this.fb=l,this.apiService=n,this.commonService=u,this.formSubmited=!1,this.contactForm=this.fb.group({name:["",N.z.required],phone:["",[N.z.pattern(/^\d+$/),N.z.required]],email:["",[N.z.email,N.z.required]],message:["",N.z.required]})}ngOnInit(){}contactFormSubmit(){if(this.formSubmited=!0,this.contactForm.invalid)return!0;this.commonService.showLoader=!0,this.apiService.postData(`${b.a.api_url}contactUs`,this.contactForm.value).subscribe(l=>{this.commonService.showLoader=!1,"true"==l.status&&(this.formSubmited=!1,this.contactForm.reset(),this.commonService.succ(l.message))},l=>{this.commonService.showLoader=!1,this.apiService.log(l)})}}var D=t.rb({encapsulation:0,styles:[[".content-sidebar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:23px;width:26px}.south-contact-area[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{height:auto}"]],data:{}});function I(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","color: #FF0000"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Please provide valid Name"]))],null,null)}function _(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","color: #FF0000"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Please provide valid Phone Number"]))],null,null)}function L(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","color: #FF0000"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Please provide valid Email"]))],null,null)}function k(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"p",[["style","color: #FF0000"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Please provide valid Message"]))],null,null)}function M(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,10,"section",[["class","breadcumb-area bg-img"],["style","background-image: url(assets/img/bg-img/hero1.jpg);"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,9,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,8,"div",[["class","row h-100 align-items-center"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,7,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,6,"div",[["class","breadcumb-content"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,5,"h3",[["class","breadcumb-title"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.sb(7,671744,null,0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Nb(-1,null,[" Home "])),(l()(),t.tb(9,0,null,null,0,"i",[["class","fa fa-angle-right"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Contact "])),(l()(),t.tb(11,0,null,null,83,"section",[["class","south-contact-area section-padding-100"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,82,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(15,0,null,null,2,"div",[["class","contact-heading"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Contact info"])),(l()(),t.tb(18,0,null,null,76,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,30,"div",[["class","col-12 col-lg-4"]],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,29,"div",[["class","content-sidebar"]],null,null,null,null,null)),(l()(),t.tb(21,0,null,null,16,"div",[["class","weekly-office-hours"]],null,null,null,null,null)),(l()(),t.tb(22,0,null,null,15,"ul",[],null,null,null,null,null)),(l()(),t.tb(23,0,null,null,4,"li",[["class","d-flex align-items-center justify-content-between"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Monday - Friday"])),(l()(),t.tb(26,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["09 AM - 19 PM"])),(l()(),t.tb(28,0,null,null,4,"li",[["class","d-flex align-items-center justify-content-between"]],null,null,null,null,null)),(l()(),t.tb(29,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Saturday"])),(l()(),t.tb(31,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["09 AM - 14 PM"])),(l()(),t.tb(33,0,null,null,4,"li",[["class","d-flex align-items-center justify-content-between"]],null,null,null,null,null)),(l()(),t.tb(34,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Sunday"])),(l()(),t.tb(36,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Closed"])),(l()(),t.tb(38,0,null,null,11,"div",[["class","address mt-30"]],null,null,null,null,null)),(l()(),t.tb(39,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),t.tb(40,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/phone-call.png"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" +99-XX-XX-XX-XX-XX"])),(l()(),t.tb(42,0,null,null,2,"h6",[],null,null,null,null,null)),(l()(),t.tb(43,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/envelope.png"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" Info@mail.com"])),(l()(),t.tb(45,0,null,null,4,"h6",[],null,null,null,null,null)),(l()(),t.tb(46,0,null,null,0,"img",[["alt",""],["src","assets/img/icons/location.png"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,[" California no 45-46, b3, 56832,"])),(l()(),t.tb(48,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Los Angeles, CA"])),(l()(),t.tb(50,0,null,null,44,"div",[["class","col-12 col-lg-8"]],null,null,null,null,null)),(l()(),t.tb(51,0,null,null,43,"div",[["class","contact-form"]],null,null,null,null,null)),(l()(),t.tb(52,0,null,null,42,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,a=l.component;return"submit"===n&&(e=!1!==t.Fb(l,54).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Fb(l,54).onReset()&&e),"ngSubmit"===n&&(e=!1!==a.contactFormSubmit()&&e),e},null,null)),t.sb(53,16384,null,0,N.E,[],null,null),t.sb(54,540672,null,0,N.k,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Kb(2048,null,N.c,null,[N.k]),t.sb(56,16384,null,0,N.s,[[4,N.c]],null,null),(l()(),t.tb(57,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(58,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","contact-name"],["placeholder","Your Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,59)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,59).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,59)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,59)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(59,16384,null,0,N.d,[t.D,t.k,[2,N.a]],null,null),t.Kb(1024,null,N.p,function(l){return[l]},[N.d]),t.sb(61,671744,null,0,N.j,[[3,N.c],[8,null],[8,null],[6,N.p],[2,N.C]],{name:[0,"name"]},null),t.Kb(2048,null,N.q,null,[N.j]),t.sb(63,16384,null,0,N.r,[[4,N.q]],null,null),(l()(),t.ib(16777216,null,null,1,null,I)),t.sb(65,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(66,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(67,0,null,null,5,"input",[["class","form-control"],["formControlName","phone"],["id","contact-number"],["placeholder","Your Phone"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,68)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,68).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,68)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,68)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(68,16384,null,0,N.d,[t.D,t.k,[2,N.a]],null,null),t.Kb(1024,null,N.p,function(l){return[l]},[N.d]),t.sb(70,671744,null,0,N.j,[[3,N.c],[8,null],[8,null],[6,N.p],[2,N.C]],{name:[0,"name"]},null),t.Kb(2048,null,N.q,null,[N.j]),t.sb(72,16384,null,0,N.r,[[4,N.q]],null,null),(l()(),t.ib(16777216,null,null,1,null,_)),t.sb(74,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(75,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(76,0,null,null,5,"input",[["class","form-control"],["formControlName","email"],["id","contact-email"],["placeholder","Your Email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,77)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,77).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,77)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,77)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(77,16384,null,0,N.d,[t.D,t.k,[2,N.a]],null,null),t.Kb(1024,null,N.p,function(l){return[l]},[N.d]),t.sb(79,671744,null,0,N.j,[[3,N.c],[8,null],[8,null],[6,N.p],[2,N.C]],{name:[0,"name"]},null),t.Kb(2048,null,N.q,null,[N.j]),t.sb(81,16384,null,0,N.r,[[4,N.q]],null,null),(l()(),t.ib(16777216,null,null,1,null,L)),t.sb(83,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(84,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.tb(85,0,null,null,5,"textarea",[["class","form-control"],["cols","30"],["formControlName","message"],["id","message"],["placeholder","Your Message"],["rows","10"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Fb(l,86)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Fb(l,86).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Fb(l,86)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Fb(l,86)._compositionEnd(u.target.value)&&e),e},null,null)),t.sb(86,16384,null,0,N.d,[t.D,t.k,[2,N.a]],null,null),t.Kb(1024,null,N.p,function(l){return[l]},[N.d]),t.sb(88,671744,null,0,N.j,[[3,N.c],[8,null],[8,null],[6,N.p],[2,N.C]],{name:[0,"name"]},null),t.Kb(2048,null,N.q,null,[N.j]),t.sb(90,16384,null,0,N.r,[[4,N.q]],null,null),(l()(),t.ib(16777216,null,null,1,null,k)),t.sb(92,16384,null,0,c.l,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.tb(93,0,null,null,1,"button",[["class","btn south-btn"],["type","submit"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["Send Message"]))],function(l,n){var u=n.component;l(n,7,0,""),l(n,54,0,u.contactForm),l(n,61,0,"name"),l(n,65,0,u.contactForm.controls.name.invalid&&(u.formSubmited||u.contactForm.controls.name.dirty)),l(n,70,0,"phone"),l(n,74,0,u.contactForm.controls.phone.invalid&&(u.formSubmited||u.contactForm.controls.phone.dirty)),l(n,79,0,"email"),l(n,83,0,u.contactForm.controls.email.invalid&&(u.formSubmited||u.contactForm.controls.email.dirty)),l(n,88,0,"message"),l(n,92,0,u.contactForm.controls.message.invalid&&(u.formSubmited||u.contactForm.controls.message.dirty))},function(l,n){l(n,6,0,t.Fb(n,7).target,t.Fb(n,7).href),l(n,52,0,t.Fb(n,56).ngClassUntouched,t.Fb(n,56).ngClassTouched,t.Fb(n,56).ngClassPristine,t.Fb(n,56).ngClassDirty,t.Fb(n,56).ngClassValid,t.Fb(n,56).ngClassInvalid,t.Fb(n,56).ngClassPending),l(n,58,0,t.Fb(n,63).ngClassUntouched,t.Fb(n,63).ngClassTouched,t.Fb(n,63).ngClassPristine,t.Fb(n,63).ngClassDirty,t.Fb(n,63).ngClassValid,t.Fb(n,63).ngClassInvalid,t.Fb(n,63).ngClassPending),l(n,67,0,t.Fb(n,72).ngClassUntouched,t.Fb(n,72).ngClassTouched,t.Fb(n,72).ngClassPristine,t.Fb(n,72).ngClassDirty,t.Fb(n,72).ngClassValid,t.Fb(n,72).ngClassInvalid,t.Fb(n,72).ngClassPending),l(n,76,0,t.Fb(n,81).ngClassUntouched,t.Fb(n,81).ngClassTouched,t.Fb(n,81).ngClassPristine,t.Fb(n,81).ngClassDirty,t.Fb(n,81).ngClassValid,t.Fb(n,81).ngClassInvalid,t.Fb(n,81).ngClassPending),l(n,85,0,t.Fb(n,90).ngClassUntouched,t.Fb(n,90).ngClassTouched,t.Fb(n,90).ngClassPristine,t.Fb(n,90).ngClassDirty,t.Fb(n,90).ngClassValid,t.Fb(n,90).ngClassInvalid,t.Fb(n,90).ngClassPending)})}function j(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-contact-us",[],null,null,null,M,D)),t.sb(1,114688,null,0,O,[N.g,d.a,g.a],null,null)],function(l,n){l(n,1,0)},null)}var $=t.pb("app-contact-us",O,j,{},{},[]);class q{constructor(l,n){this.apiService=l,this.commonService=n,this.faqLists=[]}ngOnInit(){this.commonService.showLoader=!0,this.apiService.getData(`${b.a.api_url}faqList`).subscribe(l=>{this.commonService.showLoader=!1,"true"==l.status&&(this.faqLists=l.data)},l=>{this.commonService.showLoader=!1,this.apiService.log(l)})}}var K=t.rb({encapsulation:0,styles:[[""]],data:{}});function T(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,11,"div",[["class","panel single-accordion"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,7,"div",[["class","panel-heading"],["role","tab"]],[[8,"id",0]],null,null,null,null)),(l()(),t.tb(2,0,null,null,6,"h6",[],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,5,"a",[["aria-expanded","false"],["class","collapsed"],["data-parent","#accordion"],["data-toggle","collapse"],["role","button"]],[[8,"href",4],[1,"aria-controls",0]],null,null,null,null)),(l()(),t.Nb(4,null,[" "," "])),(l()(),t.tb(5,0,null,null,1,"span",[["class","accor-open"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,0,"i",[["class","fa fa-plus"]],null,null,null,null,null)),(l()(),t.tb(7,0,null,null,1,"span",[["class","accor-close"]],null,null,null,null,null)),(l()(),t.tb(8,0,null,null,0,"i",[["class","fa fa-minus"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,2,"div",[["class","panel-collapse collapse"],["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0]],null,null,null,null)),(l()(),t.tb(10,0,null,null,1,"div",[["class","panel-body"]],null,null,null,null,null)),(l()(),t.Nb(11,null,[" "," "]))],null,function(l,n){l(n,1,0,"heading"+n.context.index),l(n,3,0,"#collapse"+n.context.index,"collapse"+n.context.index),l(n,4,0,n.context.$implicit.question),l(n,9,0,"collapse"+n.context.index,"heading"+n.context.index),l(n,11,0,n.context.$implicit.answer)})}function A(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,10,"section",[["class","breadcumb-area bg-img"],["style","background-image: url(assets/img/bg-img/hero1.jpg);"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,9,"div",[["class","container h-100"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,8,"div",[["class","row h-100 align-items-center"]],null,null,null,null,null)),(l()(),t.tb(3,0,null,null,7,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(4,0,null,null,6,"div",[["class","breadcumb-content"]],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,5,"h3",[["class","breadcumb-title"]],null,null,null,null,null)),(l()(),t.tb(6,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.sb(7,671744,null,0,r.o,[r.l,r.a,c.i],{routerLink:[0,"routerLink"]},null),(l()(),t.Nb(-1,null,[" Home "])),(l()(),t.tb(9,0,null,null,0,"i",[["class","fa fa-angle-right"]],null,null,null,null,null)),(l()(),t.Nb(-1,null,["FAQs' "])),(l()(),t.tb(11,0,null,null,14,"section",[["class","south-contact-area section-padding-100"]],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(13,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(14,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),t.tb(15,0,null,null,2,"div",[["class","contact-heading"]],null,null,null,null,null)),(l()(),t.tb(16,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.Nb(-1,null,["FAQs' "])),(l()(),t.tb(18,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.tb(19,0,null,null,3,"div",[["class","col-12 col-lg-6"]],null,null,null,null,null)),(l()(),t.tb(20,0,null,null,2,"div",[["aria-multiselectable","true"],["class","panel-group"],["id","accordion"],["role","tablist"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,T)),t.sb(22,278528,null,0,c.k,[t.O,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(23,0,null,null,2,"div",[["class","col-12 col-lg-6"]],null,null,null,null,null)),(l()(),t.tb(24,0,null,null,1,"div",[["class","content-sidebar"]],null,null,null,null,null)),(l()(),t.tb(25,0,null,null,0,"img",[["src","assets/img/bg-img/hero1.jpg"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,7,0,""),l(n,22,0,u.faqLists)},function(l,n){l(n,6,0,t.Fb(n,7).target,t.Fb(n,7).href)})}function U(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-faq",[],null,null,null,A,K)),t.sb(1,114688,null,0,q,[d.a,g.a],null,null)],function(l,n){l(n,1,0)},null)}var H=t.pb("app-faq",q,U,{},{},[]);class X{}var z=u("IheW");u.d(n,"StaticModuleNgFactory",function(){return E});var E=t.qb(i,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[s.a,x,$,H]],[3,t.j],t.w]),t.Db(4608,c.n,c.m,[t.t,[2,c.A]]),t.Db(4608,N.B,N.B,[]),t.Db(4608,N.g,N.g,[]),t.Db(1073742336,c.c,c.c,[]),t.Db(1073742336,r.p,r.p,[[2,r.u],[2,r.l]]),t.Db(1073742336,X,X,[]),t.Db(1073742336,N.A,N.A,[]),t.Db(1073742336,N.m,N.m,[]),t.Db(1073742336,N.x,N.x,[]),t.Db(1073742336,o.g,o.g,[]),t.Db(512,o.k,o.k,[]),t.Db(1024,o.f,a,[z.c]),t.Db(512,o.c,o.e,[]),t.Db(512,o.h,o.d,[]),t.Db(512,o.b,o.a,[]),t.Db(256,o.l,void 0,[]),t.Db(256,o.m,void 0,[]),t.Db(512,o.j,o.j,[o.k,o.f,o.c,o.h,o.b,o.l,o.m]),t.Db(1073742336,i,i,[o.j,g.a]),t.Db(1024,r.j,function(){return[[{path:"about-us",component:m},{path:"contact-us",component:O},{path:"faq",component:q}]]},[])])})}}]);