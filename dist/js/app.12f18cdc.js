(function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{on:{"fetch-products":e.showProducts}}),r("main",[r("Products",{attrs:{products:e.products,isLoading:"isLoading"}})],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Cerca un film o una serie tv"},domProps:{value:e.search},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getProducts(e.url)},input:function(t){t.target.composing||(e.search=t.target.value)}}}),r("button",{attrs:{type:"button"},on:{click:function(t){return e.getProducts(e.url)}}},[e._v("Search")])])},u=[],c=(r("ac1f"),r("841c"),r("bc3a")),s=r.n(c),l={name:"Header",props:["products"],data:function(){return{search:"",query:"games",api_key:"ece01f3d6f847a6a0a09dbc6ab4a4aac",url:"https://api.themoviedb.org/3"}},methods:{getProducts:function(e){var t=this,r={params:{api_key:this.api_key,query:this.search,language:"it-IT"}};this.isLoading=!0,s.a.get("".concat(e,"/search/movie?"),r).then((function(e){t.$emit("fetch-products",e.data.results),t.isLoading=!1})),s.a.get("".concat(e,"/search/tv?"),r).then((function(e){t.$emit("fetch-products",e.data.results),t.isLoading=!1}))}}},p=l,d=r("2877"),f=Object(d["a"])(p,i,u,!1,null,null,null),h=f.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ol",e._l(e.products,(function(t){return r("li",{key:t.id},[r("h4",[e._v(" Titolo: "+e._s(t.title)+" "),r("br"),e._v(" Titolo originale: "+e._s(t.original_title)+" ")]),r("p",[e._v(" Lingua: "+e._s(t.original_language)+" "),r("br"),e._v(" Voto: "+e._s(t.vote_average)+" ")])])})),0),r("ol",e._l(e.products,(function(t){return r("li",{key:t.id},[r("h4",[e._v(" Titolo: "+e._s(t.name)+" "),r("br"),e._v(" Titolo originale: "+e._s(t.original_name)+" ")]),r("p",[e._v(" Lingua: "+e._s(t.origin_country)+" "),r("br"),e._v(" Voto: "+e._s(t.vote_average)+" ")])])})),0)])},g=[],_={name:"Products",components:{},props:["products","isLoading"]},m=_,b=Object(d["a"])(m,v,g,!1,null,null,null),y=b.exports,P={name:"App",components:{Header:h,Products:y},data:function(){return{isLoading:!1,products:[]}},methods:{showProducts:function(e){this.products=e,console.log(this.products)}}},O=P,k=Object(d["a"])(O,o,a,!1,null,null,null),w=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(w)}}).$mount("#app")}});
//# sourceMappingURL=app.12f18cdc.js.map