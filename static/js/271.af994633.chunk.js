"use strict";(self.webpackChunk_100rokiv_react_goittemplate=self.webpackChunk_100rokiv_react_goittemplate||[]).push([[271],{8271:function(n,a,t){t.r(a),t.d(a,{default:function(){return l}});var e=t(885),c=t(9434),o=t(2791),i=t(6907),s=t(184);function l(){var n=(0,c.I0)(),a=(0,c.v9)((function(n){return n.liqpay.keys})),t=(0,o.useState)(""),l=(0,e.Z)(t,2),u=l[0],r=l[1];return console.log(a.data),console.log(a.signature),(0,o.useEffect)((function(){r('window.LiqPayCheckoutCallback = function() {\n      LiqPayCheckout.init({\n        data: "'.concat(a.data,'",\n        signature: "').concat(a.signature,'",\n        embedTo: "#liqpay_checkout",\n        language: "uk",\n        mode: "embed" // embed || popup,\n          }).on("liqpay.callback", function(data){\n        console.log(data.status);\n        console.log(data);\n        }).on("liqpay.ready", function(data){\n          // ready\n        }).on("liqpay.close", function(data){\n          // close\n      });\n    };'))}),[a,n]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:"liqpay_checkout"}),(0,s.jsxs)(i.ql,{children:[(0,s.jsx)("script",{children:u}),(0,s.jsx)("script",{src:"//static.liqpay.ua/libjs/checkout.js",async:!0})]})]})}}}]);
//# sourceMappingURL=271.af994633.chunk.js.map