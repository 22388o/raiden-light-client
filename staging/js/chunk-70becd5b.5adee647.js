(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70becd5b"],{"01f0":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divider"},[n("div",{staticClass:"divider__line"})])}],i=n("e921"),c=n("66ba");function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function l(t){var e=y();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var d=function(t){s(n,t);var e=l(n);function n(){return u(this,n),e.apply(this,arguments)}return n}(c["e"]);d=Object(i["a"])([Object(c["a"])({})],d);var h=d,m=h,_=(n("7bb4"),n("3c13")),O=Object(_["a"])(m,r,o,!1,null,"4204a104",null);e["a"]=O.exports},"76a1":function(t,e,n){},"7bb4":function(t,e,n){"use strict";var r=n("76a1"),o=n.n(r);o.a},8716:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"token-information",attrs:{align:"start",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"token-information__label"},[t._v(" "+t._s(t.$t("token-information.title"))+" ")])]),n("v-col",{attrs:{cols:"8"}},[n("div",{staticClass:"token-information__description"},[t._v(" "+t._s(t.$t("token-information.description",{symbol:t.token.symbol,name:t.token.name}))+" ")]),n("div",{staticClass:"token-information__address"},[n("address-display",{attrs:{address:t.token.address}})],1)])],1),n("v-row",{staticClass:"token-information",attrs:{align:"start",justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"token-information__label"},[t._v(" "+t._s(t.$t("token-information.balance"))+" ")])]),n("v-col",{attrs:{cols:"8"}},[n("div",{staticClass:"token-information__description"},[n("span",{staticClass:"token-information__balance"},[t._v(" "+t._s(t._f("displayFormat")(t.token.balance||0,t.token.decimals))+" ")]),t.mainnet?t._e():n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({staticClass:"token-information__mint",attrs:{text:"",icon:"",small:""},on:{click:function(e){t.showMintDialog=!0}}},r),[n("v-icon",{attrs:{color:"primary"}},[t._v("play_for_work")])],1)]}}],null,!1,2403213209)},[n("span",[t._v(" "+t._s(t.$t("mint-dialog.title",{symbol:t.token.symbol||""}))+" ")])])],1)])],1),n("mint-dialog",{attrs:{token:t.token,visible:t.showMintDialog},on:{cancel:function(e){t.showMintDialog=!1},done:function(e){return t.tokenMinted()}}})],1)},o=[],i=n("4bf2"),c=n.n(i),a=n("e921"),u=n("66ba"),s=n("9302"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("raiden-dialog",{attrs:{visible:t.visible},on:{close:t.cancel}},[t.error?t._e():n("v-card-title",[t._v(" "+t._s(t.$t("mint-dialog.title",{symbol:t.token.symbol}))+" ")]),n("v-card-text",[t.loading?n("v-row",[n("spinner")],1):t._e(),t.error?n("v-row",[n("error-message",{attrs:{error:t.error}})],1):t._e(),t.loading||t.error?t._e():n("v-row",[t._v(" "+t._s(t.$t("mint-dialog.description"))+" ")])],1),t.error?t._e():n("v-card-actions",[n("action-button",{attrs:{arrow:"",enabled:!t.loading,text:t.$t("general.buttons.continue")},on:{click:function(e){return t.mint()}}})],1)],1)},l=[],p=n("750b"),b=n("66bc"),y=n("8e27"),v=n("0527"),d=n("a3d5");function h(t){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function _(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){m(i,r,o,c,a,"next",t)}function a(t){m(i,r,o,c,a,"throw",t)}c(void 0)}))}}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function j(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function P(t){var e=x();return function(){var n,r=D(t);if(e){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!==h(e)&&"function"!==typeof e?R(t):e}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var C=function(t){g(n,t);var e=P(n);function n(){var t;return O(this,n),t=e.apply(this,arguments),t.loading=!1,t.error=null,t.amount="1",t}return j(n,[{key:"cancel",value:function(){this.error=null}},{key:"mint",value:function(){var t=_(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.error=null,this.loading=!0,t.prev=2,t.next=5,this.$raiden.mint(this.token.address,d["a"].parse(this.amount,this.token.decimals));case 5:this.$emit("done"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.error=t.t0;case 11:this.loading=!1;case 12:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}()}]),n}(u["e"]);Object(a["a"])([Object(u["d"])({required:!0})],C.prototype,"token",void 0),Object(a["a"])([Object(u["d"])({required:!0,type:Boolean})],C.prototype,"visible",void 0),Object(a["a"])([Object(u["b"])()],C.prototype,"cancel",null),C=Object(a["a"])([Object(u["a"])({components:{ActionButton:p["a"],RaidenDialog:b["a"],ErrorMessage:y["a"],Spinner:v["a"]}})],C);var E=C,$=E,T=n("3c13"),M=n("b0b8"),V=n.n(M),A=n("5af4"),B=n("e3a9"),q=Object(T["a"])($,f,l,!1,null,null,null),J=q.exports;V()(q,{VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VRow:B["a"]});var F=n("2b7f");function I(t){return I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){H(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function K(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function L(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){K(i,r,o,c,a,"next",t)}function a(t){K(i,r,o,c,a,"throw",t)}c(void 0)}))}}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function U(t,e,n){return e&&Q(t.prototype,e),n&&Q(t,n),t}function W(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}function X(t,e){return X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},X(t,e)}function Y(t){var e=et();return function(){var n,r=nt(t);if(e){var o=nt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Z(this,n)}}function Z(t,e){return!e||"object"!==I(e)&&"function"!==typeof e?tt(t):e}function tt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function et(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function nt(t){return nt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},nt(t)}var rt=function(t){W(n,t);var e=Y(n);function n(){var t;return N(this,n),t=e.apply(this,arguments),t.showMintDialog=!1,t}return U(n,[{key:"tokenMinted",value:function(){var t=L(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showMintDialog=!1,t.next=3,this.$raiden.fetchTokenData([this.token.address]);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(u["e"]);Object(a["a"])([Object(u["d"])()],rt.prototype,"token",void 0),rt=Object(a["a"])([Object(u["a"])({components:{AddressDisplay:s["a"],MintDialog:J},computed:G({},Object(F["d"])(["mainnet"]))})],rt);var ot=rt,it=ot,ct=(n("9e00"),n("b2b2")),at=n("8216"),ut=n("8b2c"),st=n("468d"),ft=Object(T["a"])(it,r,o,!1,null,"4667a111",null);e["a"]=ft.exports;V()(ft,{VBtn:ct["a"],VCol:at["a"],VIcon:ut["a"],VRow:B["a"],VTooltip:st["a"]})},"9e00":function(t,e,n){"use strict";var r=n("be0f"),o=n.n(r);o.a},be0f:function(t,e,n){}}]);