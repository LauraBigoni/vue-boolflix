(function(e){function t(t){for(var n,u,c=t[0],i=t[1],l=t[2],p=0,d=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("main",[r("Products")],1)],1)},a=[],u=r("bc3a"),c=r.n(u),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"button"}},[e._v("Search")])])},l=[],s={name:"Header",data:function(){return{search:""}}},p=s,d=r("2877"),f=Object(d["a"])(p,i,l,!1,null,null,null),h=f.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Cerca qualcosa...")])])},b=[],m={name:"Products"},y=m,g=Object(d["a"])(y,v,b,!1,null,null,null),_=g.exports,O={name:"App",components:{Header:h,Products:_},data:function(){return{products:[],query:"games",api_key:"ece01f3d6f847a6a0a09dbc6ab4a4aac",url:"https://api.themoviedb.org/3"}},methods:{getProducts:function(e){var t=this,r={params:{api_key:this.api_key,query:this.query,language:"it-IT"}};c.a.get("".concat(e,"/search/movie?"),r).then((function(e){t.products=e.data.results,console.log(t.products)}))}},mounted:function(){this.getProducts(this.url)}},P=O,j=Object(d["a"])(P,o,a,!1,null,null,null),w=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.7b3f0e69.js.map