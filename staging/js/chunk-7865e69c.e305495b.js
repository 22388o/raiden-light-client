(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7865e69c"],{5876:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("lazy-route",[n("select-hub")],1)},o=[],i=n("e921"),c=n("b99a"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",staticClass:"select-hub",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.selectHub()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"udc-balance__container",attrs:{justify:"center","align-content":"center","no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("span",{staticClass:"udc-balance__amount",class:{"low-balance":!t.hasEnoughServiceTokens}},[n("amount-display",{attrs:{"exact-amount":"",amount:t.udcCapacity,token:t.udcToken}}),n("v-text-field",{staticClass:"d-none",attrs:{rules:[function(){return t.hasEnoughServiceTokens||""}],required:""},model:{value:t.udcCapacity,callback:function(e){t.udcCapacity=e},expression:"udcCapacity"}})],1),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"udc-balance__deposit",attrs:{text:"",icon:"","x-large":""},on:{click:function(e){t.showUdcDeposit=!0}}},r),[n("v-icon",{attrs:{color:"primary"}},[t._v("play_for_work")])],1)]}}])},[n("span",[t._v(" "+t._s(t.$t(t.mainnet?"select-hub.service-token-tooltip-main":"select-hub.service-token-tooltip",{token:t.serviceToken}))+" ")])]),n("udc-deposit-dialog",{attrs:{visible:t.showUdcDeposit},on:{cancel:function(e){t.showUdcDeposit=!1},done:function(e){return t.mintDone()}}})],1)],1),n("v-row",{staticClass:"udc-balance__container",attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[t.hasEnoughServiceTokens?n("span",{staticClass:"udc-balance__description"},[t._v(" "+t._s(t.$t("select-hub.service-token-description"))+" ")]):n("span",{staticClass:"udc-balance__description low-balance"},[t._v(" "+t._s(t.$t("select-hub.service-token-balance-too-low",{token:t.serviceToken}))+" ")])])],1),n("v-row",{attrs:{align:"center",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"10"}},[n("address-input",{attrs:{value:t.partner,exclude:[t.token.address,t.defaultAccount]},model:{value:t.partner,callback:function(e){t.partner=e},expression:"partner"}})],1)],1),n("divider"),n("token-information",{attrs:{token:t.token}}),n("action-button",{attrs:{enabled:t.valid,text:t.$t("select-hub.select-button")}})],1)},u=[],s=n("4bf2"),l=n.n(s),f=n("b104"),p=n.n(f),d=n("7aa1"),b=n("f30a"),y=n("6fc3"),h=n("fc09"),v=n("03af"),m=n("152b"),k=n("01f0"),w=n("8716"),g=n("750b"),O=n("7688");function _(t){return _="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function C(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function P(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){C(i,r,o,c,a,"next",t)}function a(t){C(i,r,o,c,a,"throw",t)}c(void 0)}))}}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function $(t,e,n){return e&&S(t.prototype,e),n&&S(t,n),t}function A(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function R(t,e){return R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},R(t,e)}function U(t){var e=H();return function(){var n,r=B(t);if(e){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(t,e){return!e||"object"!==_(e)&&"function"!==typeof e?V(t):e}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var I=function(t){A(n,t);var e=U(n);function n(){var t;return D(this,n),t=e.apply(this,arguments),t.partner="",t.valid=!0,t.showUdcDeposit=!1,t.udcCapacity=b["Zero"],t.hasEnoughServiceTokens=!1,t}return $(n,[{key:"mounted",value:function(){var t=P(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateUDCCapacity();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"selectHub",value:function(){this.navigateToOpenChannel(this.token.address,this.partner)}},{key:"updateUDCCapacity",value:function(){var t=P(l.a.mark((function t(){var e;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$raiden.monitoringReward,t.next=3,this.$raiden.getUDCCapacity();case 3:this.udcCapacity=t.sent,this.hasEnoughServiceTokens=!(!e||!this.udcCapacity.gte(e));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=P(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.token,h["a"].checkAddressChecksum(e)){t.next=4;break}return this.navigateToHome(),t.abrupt("return");case 4:return t.next=6,this.$raiden.fetchTokenData([e]);case 6:return"number"!==typeof this.token.decimals&&this.navigateToHome(),t.next=9,this.$raiden.monitorToken(e);case 9:this.isConnectedToHub||"goerli"!==this.network.name||(this.partner=null!==(n="hub.raiden.eth")&&void 0!==n?n:"");case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mintDone",value:function(){var t=P(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showUdcDeposit=!1,t.next=3,this.updateUDCCapacity();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"token",get:function(){var t=this.$route.params.token;return this.getToken(t)||{address:t}}},{key:"isConnectedToHub",get:function(){var t=this.$route.params.token;return!p()(this.channels[t])}},{key:"serviceToken",get:function(){var t;return null!==(t=this.udcToken.symbol)&&void 0!==t?t:this.mainnet?"RDN":"SVT"}}]),n}(Object(c["c"])(m["a"]));I=Object(i["a"])([Object(c["a"])({components:{TokenInformation:w["a"],Divider:k["a"],AddressInput:y["a"],ActionButton:g["a"],UdcDepositDialog:O["a"],AmountDisplay:v["a"]},computed:T(T({},Object(d["f"])(["defaultAccount","channels","network"])),Object(d["d"])({getToken:"token",mainnet:"mainnet",udcToken:"udcToken"}))})],I);var L=I,q=L,z=(n("b813"),n("125f")),F=n("834c"),J=n.n(F),M=n("985e"),N=n("fec4"),Z=n("4cba"),G=n("0d78"),K=n("2f50"),Q=n("8e7d"),W=n("9bce"),X=Object(z["a"])(q,a,u,!1,null,"0926c20e",null),Y=X.exports;J()(X,{VBtn:M["a"],VCol:N["a"],VForm:Z["a"],VIcon:G["a"],VRow:K["a"],VTextField:Q["a"],VTooltip:W["a"]});var tt=n("f931");function et(t){return et="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}function ot(t,e){return ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ot(t,e)}function it(t){var e=ut();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ct(this,n)}}function ct(t,e){return!e||"object"!==et(e)&&"function"!==typeof e?at(t):e}function at(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function st(t){return st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},st(t)}var lt=function(t){rt(n,t);var e=it(n);function n(){return nt(this,n),e.apply(this,arguments)}return n}(c["e"]);lt=Object(i["a"])([Object(c["a"])({components:{LazyRoute:tt["a"],SelectHub:Y}})],lt);var ft=lt,pt=ft,dt=Object(z["a"])(pt,r,o,!1,null,"1710e2a7",null);e["default"]=dt.exports},7688:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("raiden-dialog",{attrs:{visible:t.visible},on:{close:t.cancel}},[t.error?t._e():n("v-card-title",[n("div",[t._v(" "+t._s(t.$t("udc-deposit-dialog.title"))+" ")]),n("div",{staticClass:"udc-deposit-dialog__balance"},[t._v(" "+t._s(t.$t("udc-deposit-dialog.available-utility-token",{utilityTokenSymbol:t.udcToken.symbol,utilityTokenBalance:t.mainAccountUtilityTokenAmount}))+" ")])]),n("v-card-text",[t.loading||t.error?t.error?n("v-row",[n("error-message",{attrs:{error:t.error}})],1):n("v-row",{staticClass:"udc-deposit-dialog--progress"},[n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("spinner")],1),n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},["mint"===t.step?n("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.mint",{currency:t.udcToken.symbol}))+" ")]):"approve"===t.step?n("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.approve",{currency:t.udcToken.symbol}))+" ")]):"deposit"===t.step?n("span",[t._v(" "+t._s(t.$t("udc-deposit-dialog.progress.deposit",{currency:t.udcToken.symbol}))+" ")]):t._e()])],1)],1):n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("amount-input",{attrs:{token:t.udcToken,placeholder:t.$t("transfer.amount-placeholder")},model:{value:t.defaultUtilityTokenAmount,callback:function(e){t.defaultUtilityTokenAmount=e},expression:"defaultUtilityTokenAmount"}})],1),!t.mainnet||t.loading||t.error?t._e():n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[n("a",{staticClass:"udc-deposit-dialog--uniswap-url",attrs:{href:t.uniswapURL,target:"_blank"}},[t._v(" "+t._s(t.$t("udc-deposit-dialog.uniswap-url-title"))+" ")])])],1),t.error?t._e():n("v-card-actions",[n("action-button",{staticClass:"udc-deposit-dialog__action",attrs:{arrow:"","full-width":"",enabled:t.valid&&!t.loading,text:t.$t(t.mainnet?"udc-deposit-dialog.button-main":"udc-deposit-dialog.button")},on:{click:function(e){return t.udcDeposit()}}})],1)],1)},o=[],i=n("4bf2"),c=n.n(i),a=n("e921"),u=n("b99a"),s=n("7aa1"),l=n("dbe0"),f=n("750b"),p=n("a3d5"),d=n("66bc"),b=n("8e27"),y=n("0527");function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){w(i,r,o,c,a,"next",t)}function a(t){w(i,r,o,c,a,"throw",t)}c(void 0)}))}}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),t}function T(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function C(t){var e=S();return function(){var n,r=$(t);if(e){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return P(this,n)}}function P(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?D(t):e}function D(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var A=function(t){T(n,t);var e=C(n);function n(){var t;return O(this,n),t=e.apply(this,arguments),t.uniswapURL="",t.defaultUtilityTokenAmount="",t.mainAccountUtilityTokenAmount="",t.step="",t.loading=!1,t.error=null,t}return j(n,[{key:"cancel",value:function(){this.error=null}},{key:"mounted",value:function(){var t=g(c.a.mark((function t(){var e,n,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$raiden.getMainAccount();case 2:if(t.t1=e=t.sent,t.t0=null!==t.t1,!t.t0){t.next=6;break}t.t0=void 0!==e;case 6:if(!t.t0){t.next=10;break}t.t2=e,t.next=13;break;case 10:return t.next=12,this.$raiden.getAccount();case 12:t.t2=t.sent;case 13:return n=t.t2,this.uniswapURL=this.$t("udc-deposit-dialog.uniswap-url",{rdnToken:this.udcToken.address,mainAccountAddress:n}),t.next=17,this.$raiden.getTokenBalance(this.udcToken.address);case 17:r=t.sent,this.mainAccountUtilityTokenAmount=r,this.mainnet?this.defaultUtilityTokenAmount=r:this.defaultUtilityTokenAmount="10";case 20:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"udcDeposit",value:function(){var t=g(c.a.mark((function t(){var e,n,r=this;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.error=null,this.loading=!0,e=this.udcToken,n=p["a"].parse(this.defaultUtilityTokenAmount,e.decimals),t.prev=4,this.mainnet||!n.gt(e.balance)){t.next=9;break}return this.step="mint",t.next=9,this.$raiden.mint(e.address,n);case 9:return this.step="approve",t.next=12,this.$raiden.depositToUDC(n,(function(){r.step="deposit"}));case 12:this.$emit("done"),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](4),this.error=t.t0;case 18:this.step="",this.loading=!1;case 20:case"end":return t.stop()}}),t,this,[[4,15]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"valid",get:function(){return/^[1-9]\d*$/.test(this.defaultUtilityTokenAmount)}}]),n}(u["e"]);Object(a["a"])([Object(u["d"])({required:!0,type:Boolean})],A.prototype,"visible",void 0),Object(a["a"])([Object(u["b"])()],A.prototype,"cancel",null),A=Object(a["a"])([Object(u["a"])({components:{ActionButton:f["a"],RaidenDialog:d["a"],ErrorMessage:b["a"],Spinner:y["a"],AmountInput:l["a"]},computed:m({},Object(s["d"])(["mainnet","udcToken"]))})],A);var R=A,U=R,E=(n("aa67"),n("125f")),V=n("834c"),H=n.n(V),B=n("3750"),I=n("fec4"),L=n("2f50"),q=Object(E["a"])(U,r,o,!1,null,"2c70caf8",null);e["a"]=q.exports;H()(q,{VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:I["a"],VRow:L["a"]})},aa67:function(t,e,n){"use strict";var r=n("c76d"),o=n.n(r);o.a},b813:function(t,e,n){"use strict";var r=n("fa17"),o=n.n(r);o.a},c76d:function(t,e,n){},fa17:function(t,e,n){}}]);