"use strict";(self.webpackChunk_100rokiv_react_goittemplate=self.webpackChunk_100rokiv_react_goittemplate||[]).push([[621],{535:function(t,e,i){i.d(e,{Z:function(){return r}});var n=i(6907),s=i(184);function r(t){var e=t.title,i=t.description,r=t.url,c=t.image;return(0,s.jsxs)(n.ql,{children:[(0,s.jsx)("title",{children:e}),(0,s.jsx)("link",{rel:"canonical",href:r}),(0,s.jsx)("meta",{name:"title",content:e}),(0,s.jsx)("meta",{name:"description",content:i}),(0,s.jsx)("meta",{property:"og:title",content:e}),(0,s.jsx)("meta",{property:"og:description",content:i}),(0,s.jsx)("meta",{property:"og:url",content:r}),(0,s.jsx)("meta",{property:"og:image",content:c}),(0,s.jsx)("meta",{name:"twitter:title",content:e}),(0,s.jsx)("meta",{name:"twitter:description",content:i}),(0,s.jsx)("meta",{name:"twitter:url",content:r}),(0,s.jsx)("meta",{name:"twitter:image",content:c})]})}},6717:function(t,e,i){i.d(e,{Z:function(){return r}});var n={section:"Section_section__0XkUm",sectionMenu:"Section_sectionMenu__3AYtW",sectionPublicOffer:"Section_sectionPublicOffer__ZWgZv",sectionNotFound:"Section_sectionNotFound__FSzaG",sectionGallery:"Section_sectionGallery__Ufka2"},s=i(184);function r(t){var e=t.sectionClass,i=void 0===e?"section":e,r=t.children;return(0,s.jsx)("section",{className:n[i],children:r})}},2845:function(t,e,i){i.d(e,{Z:function(){return r}});var n={text:"Text_text__Pw1zW",textLight:"Text_textLight__NUjvc",textFounders:"Text_textFounders__UCEPE",textPublicOffer:"Text_textPublicOffer__dhjqU",textPublicOfferAddress:"Text_textPublicOfferAddress__RCCXy",textProductsList:"Text_textProductsList__L2Tzo",textProductsDetails:"Text_textProductsDetails__kcJQP",textSuccessPage:"Text_textSuccessPage__6Ig9c"},s=i(184);function r(t){var e=t.textClass,i=void 0===e?"textLight":e,r=t.text;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("p",{className:n[i],children:r})})}},2495:function(t,e,i){i.d(e,{Z:function(){return r}});var n={title:"TitleH1_title__p5soH",titleBottom:"TitleH1_titleBottom__u0O7S",titleEventForm:"TitleH1_titleEventForm__aQnNe",titleProductDetails:"TitleH1_titleProductDetails__bAP3V"},s=i(184);function r(t){var e=t.titleClass,i=void 0===e?"title":e,r=t.text;return(0,s.jsx)("h1",{className:n[i],children:r})}},9890:function(t,e,i){i.d(e,{Z:function(){return r}});var n={title:"TitleH2_title__rjZhE",titleTop:"TitleH2_titleTop__UJvru",titlePublicOffer:"TitleH2_titlePublicOffer__LM6KR",titleProductsList:"TitleH2_titleProductsList__QZL0u",titleBasketEmpty:"TitleH2_titleBasketEmpty__f6k2F",titleBasketForm:"TitleH2_titleBasketForm__3eu0S",titleEventForm:"TitleH2_titleEventForm__BCf8+",titleSuccessPage:"TitleH2_titleSuccessPage__pZm8G"},s=i(184);function r(t){var e=t.titleClass,i=void 0===e?"title":e,r=t.text;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h2",{className:n[i],children:r})})}},4621:function(t,e,i){i.r(e),i.d(e,{default:function(){return y}});var n=i(2791),s=i(4805),r=i(9434),c=i(2495),l=i(9890),o=i(6717),a=i(7889),u="SelectOptions_options__ybh3p",_=i(4148),d=i(184),x=[{value:"starters",label:"\u0437\u0430\u043a\u0443\u0441\u043a\u0438"},{value:"salads",label:"\u0441\u0430\u043b\u0430\u0442\u0438"},{value:"first-courses",label:"\u043f\u0435\u0440\u0448\u0456 \u0441\u0442\u0440\u0430\u0432\u0438"},{value:"main-courses",label:"\u043e\u0441\u043d\u043e\u0432\u043d\u0456 \u0441\u0442\u0440\u0430\u0432\u0438"},{value:"sweet",label:"\u0441\u043e\u043b\u043e\u0434\u043a\u0435"}];function f(t){var e=t.onChange,i=(0,r.v9)(_.kc),n=function(t){e(t.value)};return(0,d.jsx)(a.ZP,{defaultValue:{label:x.find((function(t){return t.value===i})).label},options:x,className:u,onChange:function(t){return n(t)},isSearchable:!1})}var m="DesktopOptions_list__P463s",v="DesktopOptions_item__GS-RN",p="DesktopOptions_activeItem__0UmDH";function j(t){var e=t.onClick,i=(0,r.v9)(_.kc);return(0,d.jsxs)("div",{className:m,onClick:function(t){e(t.target.dataset.value)},children:[(0,d.jsx)("div",{className:"starters"===i?p:v,"data-value":"starters",children:"\u0437\u0430\u043a\u0443\u0441\u043a\u0438"}),(0,d.jsx)("div",{className:"salads"===i?p:v,"data-value":"salads",children:"\u0441\u0430\u043b\u0430\u0442\u0438"}),(0,d.jsx)("div",{className:"first-courses"===i?p:v,"data-value":"first-courses",children:"\u043f\u0435\u0440\u0448\u0456 \u0441\u0442\u0440\u0430\u0432\u0438"}),(0,d.jsx)("div",{className:"main-courses"===i?p:v,"data-value":"main-courses",children:"\u043e\u0441\u043d\u043e\u0432\u043d\u0456 \u0441\u0442\u0440\u0430\u0432\u0438"}),(0,d.jsx)("div",{className:"sweet"===i?p:v,"data-value":"sweet",children:"\u0441\u043e\u043b\u043e\u0434\u043a\u0435"})]})}var h=i(1087),g="ProductsList_list__ydMLT",k="ProductsList_img__psmCn",P=i(2845);function T(){var t=(0,r.v9)(_.V8),e=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})};return(0,d.jsx)("ul",{className:g,children:t.map((function(t){var i=t._id,n=t.title,s=t.price,r=t.imgURL;return(0,d.jsx)("li",{children:(0,d.jsxs)(h.rU,{to:"/delivery-food/".concat(i),onClick:e,children:[(0,d.jsx)("div",{className:k,style:{backgroundImage:"url(".concat(r,")")}}),(0,d.jsx)(l.Z,{text:n,titleClass:"titleProductsList"}),(0,d.jsx)(P.Z,{text:s,textClass:"textProductsList"})]})},i)}))})}var C=i(535),b=i(9026);function y(){var t=(0,r.I0)(),e=(0,r.v9)(_.kc),i=(0,s.useMediaQuery)({maxWidth:1023.98}),a=(0,s.useMediaQuery)({minWidth:1024});(0,n.useEffect)((function(){t((0,b.V)(e))}),[t,e]);var u=function(e){t((0,b.V)(e))};return(0,d.jsxs)("main",{children:[(0,d.jsx)(C.Z,{title:"100\u0440\u043e\u043a\u0456\u0432 \u2022 \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0457\u0436\u0456",description:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432\u0430\u0448\u0438\u0445 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0438\u0445 \u0441\u0442\u0440\u0430\u0432",url:"https://100rokiv.netlify.app/delivery-food",image:"https://storokiv-server.herokuapp.com/images/delivery-food.jpg"}),(0,d.jsx)(c.Z,{text:"100 \u0420\u041e\u041a\u0406\u0412 \u0422\u041e\u041c\u0423 \u0412\u041f\u0415\u0420\u0415\u0414"}),(0,d.jsx)(l.Z,{text:"\u0412\u0414\u041e\u041c\u0410"}),(0,d.jsxs)(o.Z,{children:[i&&(0,d.jsx)(f,{onChange:u}),a&&(0,d.jsx)(j,{onClick:u}),(0,d.jsx)(T,{onClick:u})]})]})}},4148:function(t,e,i){i.d(e,{Dg:function(){return n},V8:function(){return s},kc:function(){return r}});var n=function(t){return t.products.items},s=function(t){return t.products.itemsByCategory},r=function(t){return t.products.selectedCategory}}}]);
//# sourceMappingURL=621.5f671034.chunk.js.map