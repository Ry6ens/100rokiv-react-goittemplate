"use strict";(self.webpackChunk_100rokiv_react_goittemplate=self.webpackChunk_100rokiv_react_goittemplate||[]).push([[386],{2234:function(t,e,n){n.d(e,{Z:function(){return Z}});var i=n(168),r=n(885),o=n(2791),s=n(9434),c=n(7691),a="Gallery_galleryList__4B-PK",l="Gallery_photo__yme-p",u="Modal_overlay__b+zEz",d="Modal_modal__yEgVW",m=n(4164),_=n(184),f=document.querySelector("#modal-root");function x(t){var e=t.onClose,n=t.children,i=function t(n){var i=n.target,r=n.currentTarget,o=n.code;i!==r&&"Escape"!==o&&"IMG"!==i.nodeName||(e(!1),document.removeEventListener("keydown",t),document.body.classList.remove("no-scroll"))};return document.addEventListener("keydown",i),(0,m.createPortal)((0,_.jsx)("div",{className:u,onClick:i,children:(0,_.jsxs)("div",{className:d,children:[" ",n]})}),f)}var g,j=n(9890),p=n(6717),v=n(670),h=n(4148),b=n(9026);function Z(){var t=(0,s.I0)(),e=(0,s.v9)(h.D),n=(0,o.useState)(!1),u=(0,r.Z)(n,2),d=u[0],m=u[1],f=function(t){document.body.classList.add("no-scroll"),m(t.target.dataset.image)};(0,o.useEffect)((function(){t((0,b.X)())}),[]);var Z=e.map((function(t){var e=t._id,n=t.imgGallery,r=c.ZP.div(g||(g=(0,i.Z)(["\n      background-image: url(",");\n    "])),n);return(0,_.jsx)(r,{className:l,"data-image":n,onClick:f},e)}));return(0,_.jsxs)(p.Z,{sectionClass:"sectionGallery",children:[(0,_.jsx)(j.Z,{text:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"}),(0,_.jsx)("div",{className:a,children:Z}),d&&(0,_.jsx)(x,{onClose:function(t){m(t)},children:(0,_.jsx)(v.Z,{src:d,alt:"img",imgClass:"imgGalleryModal"})})]})}},670:function(t,e,n){n.d(e,{Z:function(){return o}});var i={img:"Image_img__33EFm",imgFloor:"Image_imgFloor__CBDfs",imgFounders:"Image_imgFounders__gbABk",imgProductsList:"Image_imgProductsList__i79Fa",imgProductsDetails:"Image_imgProductsDetails__zHbpD",imgBasketProducts:"Image_imgBasketProducts__xo7xF",imgGalleryModal:"Image_imgGalleryModal__sC+yF"},r=n(184);function o(t){var e=t.src,n=t.alt,o=t.imgClass,s=void 0===o?"img":o;return(0,r.jsx)("img",{src:e,alt:n,className:i[s]})}},8773:function(t,e,n){n.d(e,{Z:function(){return f}});var i="Menu_galleryMenuList__JmpqR",r=n(9540),o=n(4914),s=n(2434),c=n(6697),a=n(5225),l=n(4660),u=n(6717),d=n(670),m=n(9890),_=n(184);function f(){return(0,_.jsxs)(u.Z,{sectionClass:"sectionMenu",children:[(0,_.jsx)(m.Z,{text:"\u041c\u0435\u043d\u044e"}),(0,_.jsxs)("ul",{className:i,children:[(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:o,rel:"noreferrer",target:"_blank",children:(0,_.jsx)(d.Z,{src:r,alt:"\u041c\u0435\u043d\u044e 100 \u0440\u043e\u043a\u0456\u0432"})})}),(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:c,rel:"noreferrer",target:"_blank",children:(0,_.jsx)(d.Z,{src:s,alt:"\u0412\u0438\u043d\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 100 \u0440\u043e\u043a\u0456\u0432"})})}),(0,_.jsx)("li",{children:(0,_.jsx)("a",{href:l,rel:"noreferrer",target:"_blank",children:(0,_.jsx)(d.Z,{src:a,alt:"\u0411\u0430\u0440\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 100 \u0440\u043e\u043a\u0456\u0432"})})})]})]})}},535:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(6907),r=n(184);function o(t){var e=t.title,n=t.description,o=t.url,s=t.image;return(0,r.jsxs)(i.ql,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("link",{rel:"canonical",href:o}),(0,r.jsx)("meta",{name:"title",content:e}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:url",content:o}),(0,r.jsx)("meta",{property:"og:image",content:s}),(0,r.jsx)("meta",{name:"twitter:title",content:e}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:url",content:o}),(0,r.jsx)("meta",{name:"twitter:image",content:s})]})}},6717:function(t,e,n){n.d(e,{Z:function(){return o}});var i={section:"Section_section__0XkUm",sectionMenu:"Section_sectionMenu__3AYtW",sectionPublicOffer:"Section_sectionPublicOffer__ZWgZv",sectionNotFound:"Section_sectionNotFound__FSzaG",sectionGallery:"Section_sectionGallery__Ufka2"},r=n(184);function o(t){var e=t.sectionClass,n=void 0===e?"section":e,o=t.children;return(0,r.jsx)("section",{className:i[n],children:o})}},2845:function(t,e,n){n.d(e,{Z:function(){return o}});var i={text:"Text_text__Pw1zW",textLight:"Text_textLight__NUjvc",textFounders:"Text_textFounders__UCEPE",textPublicOffer:"Text_textPublicOffer__dhjqU",textPublicOfferAddress:"Text_textPublicOfferAddress__RCCXy",textProductsList:"Text_textProductsList__L2Tzo",textProductsDetails:"Text_textProductsDetails__kcJQP"},r=n(184);function o(t){var e=t.textClass,n=void 0===e?"textLight":e,o=t.text;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{className:i[n],children:o})})}},2495:function(t,e,n){n.d(e,{Z:function(){return o}});var i={title:"TitleH1_title__p5soH",titleBottom:"TitleH1_titleBottom__u0O7S",titleEventForm:"TitleH1_titleEventForm__aQnNe",titleProductDetails:"TitleH1_titleProductDetails__bAP3V"},r=n(184);function o(t){var e=t.titleClass,n=void 0===e?"title":e,o=t.text;return(0,r.jsx)("h1",{className:i[n],children:o})}},9890:function(t,e,n){n.d(e,{Z:function(){return o}});var i={title:"TitleH2_title__rjZhE",titleTop:"TitleH2_titleTop__UJvru",titlePublicOffer:"TitleH2_titlePublicOffer__LM6KR",titleProductsList:"TitleH2_titleProductsList__QZL0u",titleBasketEmpty:"TitleH2_titleBasketEmpty__f6k2F",titleBasketForm:"TitleH2_titleBasketForm__3eu0S"},r=n(184);function o(t){var e=t.titleClass,n=void 0===e?"title":e,o=t.text;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("h2",{className:i[n],children:o})})}},7386:function(t,e,n){n.r(e),n.d(e,{default:function(){return _}});var i=n(7084),r=n(2495),o=n(2845),s=n(6717),c=n(670),a=n(2234),l=n(8773),u=n(4619),d=n(535),m=n(184);function _(){return(0,m.jsxs)("main",{children:[(0,m.jsx)(d.Z,{title:"100\u0440\u043e\u043a\u0456\u0432 \u2022 \u0427\u0435\u0440\u0432\u043e\u043d\u0430 \u0417\u0430\u043b\u0430",description:"\u041c\u0430\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440, \u0434\u0435 \u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0422\u0435\u0430\u0442\u0440 \u0457\u0436\u0456 \u0442\u0430 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0454\u043c\u043e \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0456 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0433\u043d\u0443\u0442\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0456",url:"https://100rokiv.netlify.app/redroom",image:"https://storokiv-server.herokuapp.com/images/redroom.jpg"}),(0,m.jsx)(c.Z,{src:i,alt:"redroom",imgClass:"imgFloor"}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(r.Z,{text:"\u0427\u0435\u0440\u0432\u043e\u043d\u0430 \u0437\u0430\u043b\u0430"}),(0,m.jsx)(o.Z,{text:"\u041c\u0430\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440, \u0434\u0435 \u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0422\u0435\u0430\u0442\u0440 \u0457\u0436\u0456 \u0442\u0430 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0454\u043c\u043e \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0456 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0433\u043d\u0443\u0442\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0456."}),(0,m.jsx)(o.Z,{text:"\u0426\u0435 \u0447\u0443\u0434\u043e\u0432\u0435 \u043c\u0456\u0441\u0446\u0435 \u0434\u043b\u044f \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e\u0433\u043e, \u0430\u043b\u0435 \u0434\u0443\u0436\u0435 \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u0432\u0435\u0441\u0456\u043b\u043b\u044f, \u0434\u043d\u044f \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0441\u0438\u0434\u0435\u043d\u044c\u043e\u043a \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457 \u0432 \u0442\u0435\u043f\u043b\u0456\u0439, \u043a\u0430\u043c\u0435\u0440\u043d\u0456\u0439 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0456."}),(0,m.jsx)(u.Z,{to:"/book",btnClass:"btnLineMargin",text:"\u0417\u0430\u0431\u0440\u043e\u043d\u044e\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u043b\u0438\u043a"})]}),(0,m.jsx)(l.Z,{}),(0,m.jsx)(a.Z,{})]})}},4148:function(t,e,n){n.d(e,{D:function(){return i},V:function(){return r}});var i=function(t){return t.products.items},r=function(t){return t.products.itemsByCategory}},4660:function(t,e,n){t.exports=n.p+"static/media/menu-bar.d3b903d600ef90aa15d3.pdf"},4914:function(t,e,n){t.exports=n.p+"static/media/menu-food.ca28c91c26b7e5c52f32.pdf"},6697:function(t,e,n){t.exports=n.p+"static/media/menu-wine.9473159890214177700b.pdf"},5225:function(t,e,n){t.exports=n.p+"static/media/menu-bar.02dd527f9d80d7dc8483.jpg"},9540:function(t,e,n){t.exports=n.p+"static/media/menu-food.58adf538a197f23d93db.jpg"},2434:function(t,e,n){t.exports=n.p+"static/media/menu-wine.317d868570ae8bbc78de.jpg"},7084:function(t,e,n){t.exports=n.p+"static/media/redroom.3a5a7a9c3763fb321a2d.jpeg"},168:function(t,e,n){function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=386.2e19070a.chunk.js.map