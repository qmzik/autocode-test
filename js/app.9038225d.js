(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-45c3740a":"247a60f3","chunk-697c49a0":"501f5616","chunk-396b2912":"59f8ca79","chunk-457e64ba":"87fe34d4","chunk-02077b1a":"ea63c500","chunk-86595f2c":"59173c4b","chunk-a69f9d7c":"5dfab66c","chunk-1ac11e90":"cfef6948","chunk-3b1de0f3":"0e66ed66","chunk-8333deee":"545be643","chunk-768f0990":"531b8c59"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-45c3740a":1,"chunk-697c49a0":1,"chunk-396b2912":1,"chunk-457e64ba":1,"chunk-02077b1a":1,"chunk-86595f2c":1,"chunk-a69f9d7c":1,"chunk-1ac11e90":1,"chunk-3b1de0f3":1,"chunk-8333deee":1,"chunk-768f0990":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-45c3740a":"f18eccb1","chunk-697c49a0":"321ced75","chunk-396b2912":"aedccf10","chunk-457e64ba":"5d277a2c","chunk-02077b1a":"83f39a9b","chunk-86595f2c":"a9cd5346","chunk-a69f9d7c":"aab496ee","chunk-1ac11e90":"aedccf10","chunk-3b1de0f3":"801ccc03","chunk-8333deee":"50abb3a2","chunk-768f0990":"d16cf7dc"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/autocode-test/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"3d4e":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("20d6");var r=n("d225"),a=n("b0b4"),o=n("308d"),c=n("6bb5"),u=n("4e2b"),i=n("9ab4"),l=n("6fc5"),s=n("b850"),f=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.reports=[],e}return Object(u["a"])(t,e),Object(a["a"])(t,[{key:"addReport",value:function(e){this.setReport(e),this.saveStore()}},{key:"saveStore",value:function(){try{localStorage.setItem("reports",JSON.stringify(this.reports))}catch(e){}}},{key:"parseStore",value:function(){try{var e=localStorage.getItem("reports");null!==e&&(this.reports=JSON.parse(e))}catch(t){}}},{key:"removeReport",value:function(e){this.deleteFromReports(e),this.saveStore()}},{key:"clearReports",value:function(){this.reports=[],localStorage.removeItem("reports")}},{key:"deleteFromReports",value:function(e){var t=this.reports.findIndex((function(t){return t.id===e}));this.reports.splice(t,1),localStorage.setItem("reports",JSON.stringify(this.reports))}},{key:"setReport",value:function(e){this.reports.push(e),localStorage.setItem("reports",JSON.stringify(this.reports))}}]),t}(l["d"]);Object(i["a"])([l["a"]],f.prototype,"addReport",null),Object(i["a"])([l["a"]],f.prototype,"saveStore",null),Object(i["a"])([l["c"]],f.prototype,"parseStore",null),Object(i["a"])([l["a"]],f.prototype,"removeReport",null),Object(i["a"])([l["c"]],f.prototype,"clearReports",null),Object(i["a"])([l["c"]],f.prototype,"deleteFromReports",null),Object(i["a"])([l["c"]],f.prototype,"setReport",null),f=Object(i["a"])([Object(l["b"])({name:"report",store:s["a"],dynamic:!0})],f);var p=Object(l["e"])(f)},"5c0b":function(e,t,n){"use strict";var r=n("e332"),a=n.n(r);a.a},b850:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62");r["a"].use(a["a"]),t["a"]=new a["a"].Store({})},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{attrs:{id:"app"}})},o=[],c=(n("5c0b"),n("2877")),u={},i=Object(c["a"])(u,a,o,!1,null,null,null),l=i.exports,s=(n("6762"),n("2fdb"),n("8c4f")),f=n("cdd0"),p="META_AUTH";r["a"].use(s["a"]);var h=new s["a"]({mode:"hash",base:"/autocode-test/",routes:[{path:"/",name:"Home",component:function(){return n.e("chunk-697c49a0").then(n.bind(null,"bb51"))},meta:[p]},{path:"/login",name:"Login",component:function(){return n.e("chunk-45c3740a").then(n.bind(null,"a55b"))},meta:[]}]});h.beforeEach((function(e,t,n){var r=e.meta;r.includes(p)?f["a"].isAuthed?n():n({name:"Login"}):n()}));var d=h,b=n("b850");r["a"].config.productionTip=!1,new r["a"]({router:d,store:b["a"],render:function(e){return e(l)}}).$mount("#app")},cdd0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("c5f6");var r=n("d225"),a=n("b0b4"),o=n("308d"),c=n("6bb5"),u=n("4e2b"),i=n("9ab4"),l=n("6fc5"),s=n("b850"),f=n("3d4e"),p=36e5,h=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(o["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.login=localStorage.getItem("login")||"",e.date=Number(localStorage.getItem("loginDate"))||0,e}return Object(u["a"])(t,e),Object(a["a"])(t,[{key:"authenticate",value:function(e){this.setAuthData(e)}},{key:"logout",value:function(){this.clearAuthData(),f["a"].clearReports()}},{key:"clearAuthData",value:function(){localStorage.removeItem("login"),localStorage.removeItem("loginDate")}},{key:"setAuthData",value:function(e){localStorage.setItem("login",e.login),localStorage.setItem("loginDate",String(e.date))}},{key:"isAuthed",get:function(){return Boolean(this.login)||+new Date<this.date+p}}]),t}(l["d"]);Object(i["a"])([l["a"]],h.prototype,"authenticate",null),Object(i["a"])([l["a"]],h.prototype,"logout",null),Object(i["a"])([l["c"]],h.prototype,"clearAuthData",null),Object(i["a"])([l["c"]],h.prototype,"setAuthData",null),h=Object(i["a"])([Object(l["b"])({name:"auth",store:s["a"],dynamic:!0})],h);var d=Object(l["e"])(h)},e332:function(e,t,n){}});
//# sourceMappingURL=app.9038225d.js.map