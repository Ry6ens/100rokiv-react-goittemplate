"use strict";(self.webpackChunk_100rokiv_react_goittemplate=self.webpackChunk_100rokiv_react_goittemplate||[]).push([[593],{6717:function(e,t,r){r.d(t,{Z:function(){return l}});var n={section:"Section_section__0XkUm",sectionMenu:"Section_sectionMenu__3AYtW",sectionPublicOffer:"Section_sectionPublicOffer__ZWgZv",sectionNotFound:"Section_sectionNotFound__FSzaG"},s=r(184);function l(e){var t=e.sectionClass,r=void 0===t?"section":t,l=e.children;return(0,s.jsx)("section",{className:n[r],children:l})}},2845:function(e,t,r){r.d(t,{Z:function(){return l}});var n={text:"Text_text__Pw1zW",textLight:"Text_textLight__NUjvc",textFounders:"Text_textFounders__UCEPE",textPublicOffer:"Text_textPublicOffer__dhjqU",textPublicOfferAddress:"Text_textPublicOfferAddress__RCCXy"},s=r(184);function l(e){var t=e.textClass,r=void 0===t?"textLight":t,l=e.text;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("p",{className:n[r],children:l})})}},2495:function(e,t,r){r.d(t,{Z:function(){return l}});var n={title:"TitleH1_title__p5soH",titleBottom:"TitleH1_titleBottom__u0O7S",titleEventForm:"TitleH1_titleEventForm__aQnNe"},s=r(184);function l(e){var t=e.titleClass,r=void 0===t?"title":t,l=e.text;return(0,s.jsx)("h1",{className:n[r],children:l})}},593:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var n,s,l,a=r(9434),i=r(6717),c=r(2495),o=r(2845),u=r(1413),f=r(5290),d=r(3542),m=r(3109),x=r(5970),_=r(2426),h=r.n(_),v=r(2791),j=r(2034),p=r(7023),b=r(3816),g=function(e){return e.email.loading},Z=function(e){return e.email.success},y=r(1232),O=["title","titleId"];function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function F(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}function C(e,t){var r=e.title,a=e.titleId,i=F(e,O);return v.createElement("svg",N({width:10,height:10,fill:"#f84147",id:"icon-warning",viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},i),r?v.createElement("title",{id:a},r):null,n||(n=v.createElement("path",{d:"M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z"})),s||(s=v.createElement("path",{d:"M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"})),l||(l=v.createElement("path",{d:"M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z"})))}var P=v.forwardRef(C),S=(r.p,"GiftVouchersForm_form__XWxW9"),w="GiftVouchersForm_select__M94zS",E="GiftVouchersForm_input__DhyOs",G="GiftVouchersForm_btn__r+m+G",M="GiftVouchersForm_errorOverlay__QXWep",V="GiftVouchersForm_errorMessage__92lfV",B="GiftVouchersForm_successBox__v9f4i",T="GiftVouchersForm_successBoxText__iBP4m",k=r(184);function z(){var e=(0,a.I0)(),t=(0,a.v9)(Z),r=(0,f.cI)({defaultValues:{name:"",tel:"",sum:""}}),n=r.control,s=r.register,l=r.handleSubmit,i=r.reset,c=r.formState.errors;(0,v.useEffect)((function(){e((0,y.r)(!1))}),[]);return(0,k.jsx)(k.Fragment,{children:!0===t?(0,k.jsxs)("div",{className:B,children:[(0,k.jsx)("p",{children:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),(0,k.jsx)("p",{className:T,children:"\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0443 \u0437\u0432'\u044f\u0436\u0435\u0442\u044c\u0441\u044f \u0437 \u0432\u0430\u043c\u0438 \u043d\u0430\u0439\u0431\u043b\u0438\u0436\u0447\u0438\u043c \u0447\u0430\u0441\u043e\u043c"})]}):(0,k.jsxs)("form",{className:S,onSubmit:l((function(t,r){r.preventDefault();var n=h()(new Date).format("DD-MM-yyyy, HH:mm");e((0,j.s)((0,u.Z)((0,u.Z)({},t),{},{date:n}))),e((0,p.a)((0,u.Z)((0,u.Z)({},t),{},{date:n}))),e((0,b.I)((0,u.Z)((0,u.Z)({},t),{},{date:n}))),i()})),children:[(0,k.jsx)(f.Qr,{name:"sum",control:n,rules:{required:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"},render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,k.jsx)(d.ZP,{placeholder:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0443\u043c\u0443 ...",className:w,isClearable:!0,onChange:r,value:n,options:[{value:"1000",label:"1000 \u0433\u0440\u043d"},{value:"1500",label:"1500 \u0433\u0440\u043d"},{value:"2000",label:"2000 \u0433\u0440\u043d"},{value:"2500",label:"2500 \u0433\u0440\u043d"},{value:"3000",label:"3000 \u0433\u0440\u043d"}]})}}),(0,k.jsx)(x.B,{errors:c,name:"sum",render:function(e){var t=e.message;return(0,k.jsxs)("div",{className:M,children:[(0,k.jsx)(P,{}),(0,k.jsx)("p",{className:V,children:t})]})}}),(0,k.jsx)("label",{children:(0,k.jsx)("input",(0,u.Z)((0,u.Z)({className:E},s("name",{required:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435",pattern:{value:/[A-Za-z]|[\u0431\u0432\u0433\u0491\u0434\u0436\u0437\u043a\u043b\u043c\u043d\u043f\u0440\u0441\u0442\u0444\u0445\u0446\u0447\u0448\u0449\u0439\u0430\u0435\u0454\u0438\u0456\u0457\u043e\u0443\u044e\u044f\u044c]/,message:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"}})),{},{type:"text",placeholder:"\u0406\u043c\u2018\u044f \u0442\u043e\u0433\u043e, \u0445\u0442\u043e \u0434\u0430\u0440\u0443\u0454"}))}),(0,k.jsx)(x.B,{errors:c,name:"name",render:function(e){var t=e.message;return(0,k.jsxs)("div",{className:M,children:[(0,k.jsx)(P,{}),(0,k.jsx)("p",{className:V,children:t})]})}}),(0,k.jsx)(f.Qr,{control:n,name:"tel",rules:{required:"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435 \u043f\u043e\u043b\u0435"},render:function(e){var t=e.field,r=t.onChange,s=t.value;return(0,k.jsx)(m.ZP,{maxLength:"16",value:s,placeholder:"+380 (99) 999-99-99",name:"query",control:n,onChange:r,defaultCountry:"UA",international:!0})}}),(0,k.jsx)(x.B,{errors:c,name:"tel",render:function(e){var t=e.message;return(0,k.jsxs)("div",{className:M,children:[(0,k.jsx)(P,{}),(0,k.jsx)("p",{className:V,children:t})]})}}),(0,k.jsx)("button",{className:G,type:"submit",children:"\u041f\u043e\u0434\u0430\u0440\u0443\u0432\u0430\u0442\u0438"})]})})}var H=r(2990);var I=function(){var e=(0,a.v9)(g);return(0,k.jsxs)("main",{children:[(0,k.jsxs)(i.Z,{children:[(0,k.jsx)(c.Z,{text:"\u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442"}),(0,k.jsx)(o.Z,{text:"\u041c\u0438 \u0434\u0443\u0436\u0435 \u0445\u043e\u0447\u0435\u043c\u043e, \u0430\u0431\u0438 \u0432\u0438 \u043c\u0430\u043b\u0438 \u043d\u0430\u0433\u043e\u0434\u0443 \u043f\u043e\u0434\u0430\u0440\u0443\u0432\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u0433\u0430\u0441\u0442\u0440\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0438\u0439 \u0434\u043e\u0441\u0432\u0456\u0434 \u0441\u0432\u043e\u0457\u043c \u0431\u043b\u0438\u0437\u044c\u043a\u0438\u043c \u043b\u044e\u0434\u044f\u043c. \u0417 \u0446\u0456\u0454\u044e \u0434\u0443\u043c\u043a\u043e\u044e \u043c\u0438 \u0437\u0440\u043e\u0431\u0438\u043b\u0438 \u043f\u043e\u0434\u0430\u0440\u0443\u043d\u043a\u043e\u0432\u0456 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0438 \u043d\u0430 \u0441\u0443\u043c\u0438 \u0432\u0456\u0434 1000 \u0433\u0440\u043d."}),(0,k.jsx)(o.Z,{text:"\u0429\u0430\u0441\u043b\u0438\u0432\u0447\u0438\u043a \u043c\u043e\u0436\u0435 \u0437\u0430\u0432\u0456\u0442\u0430\u0442\u0438 \u0443 \u043d\u0430\u0448 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c 6 \u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0432\u0456\u0434 \u0434\u0430\u0442\u0438 \u043f\u0440\u0438\u0434\u0431\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443. \u0417\u0430\u0443\u0432\u0430\u0436\u0442\u0435, \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442 \u043d\u0435 \u0434\u0456\u0454 \u043d\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0441\u0442\u0440\u0430\u0432 \u0456 \u043d\u0430\u043f\u043e\u0457\u0432 \u043d\u0430 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0430\u0431\u043e \u043a\u0443\u043f\u0456\u0432\u043b\u044e \u043a\u0432\u0438\u0442\u043a\u0456\u0432 \u043d\u0430 \u043d\u0430\u0448\u0456 \u043f\u043e\u0434\u0456\u0457 \u2013 \u0417\u0432\u0430\u043d\u0443 \u0412\u0435\u0447\u0435\u0440\u044e \u0447\u0438 \u0422\u0435\u0430\u0442\u0440 \u0407\u0436\u0456."}),(0,k.jsx)(o.Z,{text:"\u0420\u0430\u0434\u0438\u043c\u043e \u043d\u0435 \u0434\u0440\u0443\u043a\u0443\u0432\u0430\u0442\u0438 \u0435\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442 \u2013 \u043d\u0430\u043c \u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0439\u043e\u0433\u043e \u043d\u0430 \u0435\u043a\u0440\u0430\u043d\u0456 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u0443."})]}),(0,k.jsx)(i.Z,{children:!0===e?(0,k.jsx)(H.Z,{}):(0,k.jsx)(z,{})})]})}}}]);
//# sourceMappingURL=593.8309572a.chunk.js.map