"use strict";(self.webpackChunk_100rokiv_react_goittemplate=self.webpackChunk_100rokiv_react_goittemplate||[]).push([[271],{8271:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var n=t(9434),c=t(7689),i=t(2791),u=t(2483),o=t(1842),l=t(1241),s=t(184);function r(){var e=(0,n.I0)(),a=(0,c.s0)(),t=(0,n.v9)((function(e){return e.liqpay.keys}));return(0,i.useEffect)((function(){null!==t&&window.LiqPayCheckoutCallback()}),[t]),window.LiqPayCheckoutCallback=function(){window.LiqPayCheckout.init({data:t.data,signature:t.signature,embedTo:"#liqpay_checkout",language:"uk",mode:"embed"}).on("liqpay.callback",(function(t){console.log(t),"success"===t.status&&(e(u.m.clearBasket()),e(o.h.clearBasket()),e(l.f.clearBasket()),a("/success"))})).on("liqpay.ready",(function(e){})).on("liqpay.close",(function(e){}))},(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{id:"liqpay_checkout"})})}}}]);
//# sourceMappingURL=271.97883849.chunk.js.map