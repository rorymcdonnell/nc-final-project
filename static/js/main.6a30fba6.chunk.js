(this["webpackJsonpmy-app-name"]=this["webpackJsonpmy-app-name"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},42:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":140,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":false,"anim":{"enable":false,"speed":1000,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":1,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":3,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},447:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),o=a(54),r=a.n(o),s=(a(109),a(12)),i=(a(110),a(23)),l=a(13),u=a(25),b=a.n(u),j=a(102),d=function(){document.getElementById("navbar").classList.contains("active")?document.getElementById("navbar").classList.remove("active"):document.getElementById("navbar").classList.add("active")},p=a(4),h=function(){var e=localStorage.groupName;return Object(p.jsxs)("div",{className:"navbar",id:"navbar",children:[Object(p.jsx)("span",{className:"toggle-button",onClick:d,children:"\u2630"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/".concat(e),style:{textDecoration:"none"},children:"Your Group"})}),Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)(i.b,{to:"/",style:{textDecoration:"none"},children:"Contact"})})]})]})},m=a(73);a(120),a(122);m.a.initializeApp({apiKey:"AIzaSyArrKuNuCyq3aqlI8K288GPR2ASoeK1yuA",authDomain:"arpositions-44ac8.firebaseapp.com",databaseURL:"https://arpositions-44ac8-default-rtdb.europe-west1.firebasedatabase.app",projectId:"arpositions-44ac8",storageBucket:"arpositions-44ac8.appspot.com",messagingSenderId:"258478185358",appId:"1:258478185358:web:3b5a6772dcc79adca7e2df",measurementId:"G-LDE6W3194D"});var g=m.a,O=function(e){return g.database().ref("".concat(e)).once("value").then((function(e){return null!==e.val()})).catch((function(e){console.log(e)}))},x=function(e,t,a,n){g.database().ref("".concat(e,"/")+t).set({position:{latitude:a,longitude:n}})},f=function(e){return g.database().ref("".concat(e)).once("value").then((function(e){return e.val()}))},v=a(35),y=a(41),w=a.n(y),N=a(42),S=function(e){var t=e.setUsername,a=e.setGroupName,c=Object(n.useState)(""),o=Object(s.a)(c,2),r=o[0],l=o[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),m=d[0],g=d[1],f=Object(n.useState)(""),y=Object(s.a)(f,2),S=y[0],k=y[1],I=Object(n.useState)(!0),A=Object(s.a)(I,2),M=A[0],D=A[1],G=Object(v.a)(),z=localStorage.getItem("groupName"),_=localStorage.getItem("username"),C=function(){var e=Object(j.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0===S.length||0===m.length?l("Please provide valid inputs"):O(S).then((function(e){e&&"join"===n||!e&&"create"===n?(localStorage.setItem("groupName",S),localStorage.setItem("username",m),a(localStorage.getItem("groupName")),t(localStorage.getItem("username")),x(z,_,G.latitude,G.longitude),D(!1)):l("create"===n?"That group exists, please try again":"That group doesn't exist, please try again")}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){switch(e.preventDefault(),e.target.innerHTML){case"Create Group":C("create");break;case"Join a Group":C("join");break;default:return"Incorrect selection"}};return Object(p.jsxs)("div",{className:"landing-page",style:{position:"relative",overflow:"hidden"},children:[Object(p.jsx)("div",{style:{position:"absolute"},children:Object(p.jsx)(w.a,{height:"100vh",width:"100vw",params:N})}),Object(p.jsx)(h,{}),Object(p.jsx)("h1",{children:"Welcome to MAPA"}),Object(p.jsxs)("form",{className:"landing-form",children:[Object(p.jsxs)("label",{children:["Username:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:"form-input",onBlur:function(e){g(e.target.value)}})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Group Name:",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:"form-input",onBlur:function(e){k(e.target.value)}}),Object(p.jsx)("p",{children:r&&r})]}),Object(p.jsx)("br",{}),M?Object(p.jsxs)("div",{className:"button-container",children:[Object(p.jsx)("button",{className:"create-button",onClick:E,children:"Create Group"}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"join-button",onClick:E,children:"Join a Group"})]}):Object(p.jsx)(i.b,{to:"/".concat(z),children:Object(p.jsx)("button",{className:"group-button",id:"group-page-button",children:"Group Page"})})]})]})},k=function(e){var t=e.groupData,a=e.setGroupData,c=e.time,o=Object(l.f)().group_slug,r=Object(n.useState)([]),u=Object(s.a)(r,2),b=u[0],j=u[1],d=Object(n.useState)(!0),m=Object(s.a)(d,2),g=m[0],O=m[1],x=localStorage.getItem("groupName"),y=localStorage.getItem("username");Object(n.useEffect)((function(){f(x).then((function(e){a(e),j(Object.keys(e)),O(!1)}))}),[c,x,a]);var S=Object(v.a)(),k=function(e){var a=S.latitude*Math.PI/180,n=t[e].position.latitude*Math.PI/180,c=(t[e].position.latitude-S.latitude)*Math.PI/180,o=(t[e].position.longitude-S.longitude)*Math.PI/180,r=Math.sin(c/2)*Math.sin(c/2)+Math.cos(a)*Math.cos(n)*Math.sin(o/2)*Math.sin(o/2);return 6371e3*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))};return g?Object(p.jsxs)("div",{className:"group-page",style:{position:"relative",overflow:"hidden"},children:[Object(p.jsx)("div",{style:{position:"absolute"},children:Object(p.jsx)(w.a,{height:"100vh",width:"100vw",params:N})}),Object(p.jsx)(h,{}),Object(p.jsx)("h1",{children:"LOADING..."})]}):Object(p.jsxs)("div",{className:"group-page",style:{position:"relative",overflow:"hidden"},children:[Object(p.jsx)("div",{style:{position:"absolute"},children:Object(p.jsx)(w.a,{height:"100vh",width:"100vw",params:N})}),Object(p.jsx)(h,{}),Object(p.jsx)("h2",{children:o}),Object(p.jsxs)("h4",{children:["Welcome ",y]}),Object(p.jsxs)("div",{className:"button-container",children:[Object(p.jsx)(i.b,{to:"/".concat(o,"/ar"),children:Object(p.jsx)("button",{className:"join-button",children:"View in AR"})}),Object(p.jsx)(i.b,{to:"/".concat(o,"/map"),children:Object(p.jsx)("button",{className:"create-button",children:"View in 2D"})})]}),Object(p.jsxs)("div",{className:"group-container",children:[Object(p.jsxs)("ul",{className:"group-list",children:[Object(p.jsx)("li",{className:"user-heading",children:"Group Members"}),b.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsxs)("p",{children:[e," "]})},e)}))]}),Object(p.jsxs)("ul",{className:"distance-list",children:[Object(p.jsx)("li",{className:"user-heading",children:"Distance"}),b.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)("p",{children:"".concat(Math.round("".concat(k(e))),"m")})},e+e)}))]})]})]})},I=Object(n.createContext)(),A=a(449),M=a(452),D=a(450),G=a(451),z=a(19),_=a.n(z),C=function(e){var t=e.time,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],r=c[1],i=Object(n.useState)(!0),u=Object(s.a)(i,2),b=u[0],j=u[1],d=Object(n.useState)([]),h=Object(s.a)(d,2),m=h[0],g=h[1],O=Object(l.f)().group_slug,x=new _.a.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),v=new _.a.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),y=new _.a.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),w=new _.a.icon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[41,41]}),N=[w,v,x,y,w,v,x,y,w,v,x,y,w,v,x,y,x,y,w,v,x,y];return Object(n.useEffect)((function(){f(O).then((function(e){r(e),g(Object.keys(e))})).then((function(e){j(!1)}))}),[t,O]),Object(p.jsx)("div",{className:"map-container",children:b?"...isLoading":Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{className:"map-exit-btn",children:"Return to Group Page"}),Object(p.jsx)("div",{children:Object(p.jsxs)(A.a,{center:[52.675541,1.23128],zoom:13,scrollWheelZoom:!1,children:[Object(p.jsx)(M.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),m.map((function(e,t){var a=[o[e].position.latitude,o[e].position.longitude];return Object(p.jsx)(D.a,{position:a,icon:N[t],children:Object(p.jsxs)(G.a,{children:[" Name: ",e]})},e)}))]})})]})})},E=function(e){var t=e.groupData,a=localStorage.getItem("groupName");Object(n.useEffect)((function(){o()}));var c=["orange","blue","green","red","orange","blue","green","red","orange","blue","green","red","orange","blue","green","red","green","red","orange","blue","green","red"],o=function(){var e=0,n=Object.keys(t),o="<a href='http://localhost:3000/nc-final-project/".concat(a,'\'><button class="a-enter-vr-button">Exit</button></a><a-scene vr-mode-ui="enabled: false"><a-camera gps-camera rotation-reader></a-camera>');n.forEach((function(a){o+="<a-box color=".concat(c[e],' gps-entity-place="latitude: ').concat(t[a].position.latitude,"; longitude: ").concat(t[a].position.longitude,'"></a-box>'),e++})),o+="</a-scene>";var r=document.getElementById("unbelieveAbleScenes");r.innerHTML=o,document.body.appendChild(r)};return Object(p.jsx)("div",{id:"unbelieveAbleScenes"})},P=function(e){var t=e.username,a=e.groupName,c=e.time,o=e.setTime,r=Object(v.a)();return setInterval(o(r.timestamp),5e3),Object(n.useEffect)((function(){x(a,t,r.latitude,r.longitude)}),[c,a,t,r.latitude,r.longitude]),Object(p.jsx)("div",{})};var U=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),u=r[0],b=r[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),h=d[0],m=d[1],g=Object(n.useState)(null),O=Object(s.a)(g,2),x=O[0],f=O[1];return Object(p.jsx)(i.a,{basename:"/",children:Object(p.jsxs)("div",{children:[""!==a&&""!==u?Object(p.jsx)(P,{username:a,groupName:u,time:h,setTime:m}):null,Object(p.jsx)(I.Provider,{value:{groupName:u,setGroupName:b},children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(S,{setUsername:c,setGroupName:b})}),Object(p.jsx)(l.a,{exact:!0,path:"/:group_slug",children:Object(p.jsx)(k,{groupData:x,setGroupData:f,time:h})}),Object(p.jsx)(l.a,{exact:!0,path:"/:group_slug/map",children:Object(p.jsx)(C,{time:h})}),Object(p.jsx)(l.a,{exact:!0,path:"/:group_slug/ar",children:Object(p.jsx)(E,{groupData:x})})]})})})]})})},L=(a(446),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,453)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))});r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),L()}},[[447,1,2]]]);
//# sourceMappingURL=main.6a30fba6.chunk.js.map