"use strict";(self.webpackChunk_100rokiv_react_goittemplate=self.webpackChunk_100rokiv_react_goittemplate||[]).push([[934],{4856:function(t,e,i){i.d(e,{Z:function(){return p}});var o=i(885),n=i(2791),r=[{id:"1",text:"photo photo-borshch",imgUrl:i(5613)},{id:"2",text:"photo photo-buriak",imgUrl:i(5959)},{id:"3",text:"photo photo-cukini",imgUrl:i(2671)},{id:"4",text:"photo photo-galushki",imgUrl:i(4729)},{id:"5",text:"photo photo-indichka",imgUrl:i(6619)},{id:"6",text:"photo photo-kachana",imgUrl:i(1965)},{id:"7",text:"photo photo-knish",imgUrl:i(926)},{id:"8",text:"photo photo-kulish",imgUrl:i(2644)},{id:"9",text:"photo photo-kurcha",imgUrl:i(343)},{id:"10",text:"photo photo-sirnuku",imgUrl:i(3539)},{id:"11",text:"photo photo-sudak",imgUrl:i(4342)},{id:"12",text:"photo photo-tomatoMelon",imgUrl:i(233)}],s="Modal_overlay__b+zEz",a="Modal_modal__yEgVW",c=i(4164),l=i(184),d=document.querySelector("#modal-root");function u(t){var e=t.onClose,i=t.children,o=function t(i){var o=i.target,n=i.currentTarget,r=i.code;o!==n&&"Escape"!==r&&"IMG"!==o.nodeName||(e(!1),document.removeEventListener("keydown",t),document.body.classList.remove("no-scroll"))};return document.addEventListener("keydown",o),(0,c.createPortal)((0,l.jsx)("div",{className:s,onClick:o,children:(0,l.jsxs)("div",{className:a,children:[" ",i]})}),d)}var m=i(9890);function p(){var t=(0,n.useState)(!1),e=(0,o.Z)(t,2),i=e[0],s=e[1],a=function(t){document.body.classList.add("no-scroll"),s(t.target.dataset.image)},c=r.map((function(t){var e=t.id,i=t.text,o=t.imgUrl;return(0,l.jsx)("div",{className:i,"data-image":o,onClick:a},e)}));return(0,l.jsxs)("section",{className:"galleryPhotos",children:[(0,l.jsx)(m.Z,{text:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f"}),(0,l.jsx)("div",{className:"galleryList",children:c}),i&&(0,l.jsx)(u,{onClose:function(t){s(t)},children:(0,l.jsx)("img",{src:i,alt:"img",className:"modalImg"})})]})}},670:function(t,e,i){i.d(e,{Z:function(){return r}});var o={img:"Image_img__33EFm",imgFloor:"Image_imgFloor__CBDfs",imgFounders:"Image_imgFounders__gbABk",imgProductsList:"Image_imgProductsList__i79Fa",imgProductsDetails:"Image_imgProductsDetails__zHbpD",imgBasketProducts:"Image_imgBasketProducts__xo7xF"},n=i(184);function r(t){var e=t.src,i=t.alt,r=t.imgClass,s=void 0===r?"img":r;return(0,n.jsx)("img",{src:e,alt:i,className:o[s]})}},8773:function(t,e,i){i.d(e,{Z:function(){return x}});var o="Menu_galleryMenuList__JmpqR",n=i(9540),r=i(4914),s=i(2434),a=i(6697),c=i(5225),l=i(4660),d=i(6717),u=i(670),m=i(9890),p=i(184);function x(){return(0,p.jsxs)(d.Z,{sectionClass:"sectionMenu",children:[(0,p.jsx)(m.Z,{text:"\u041c\u0435\u043d\u044e"}),(0,p.jsxs)("ul",{className:o,children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:r,rel:"noreferrer",target:"_blank",children:(0,p.jsx)(u.Z,{src:n,alt:"\u041c\u0435\u043d\u044e 100 \u0440\u043e\u043a\u0456\u0432"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:a,rel:"noreferrer",target:"_blank",children:(0,p.jsx)(u.Z,{src:s,alt:"\u0412\u0438\u043d\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 100 \u0440\u043e\u043a\u0456\u0432"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:l,rel:"noreferrer",target:"_blank",children:(0,p.jsx)(u.Z,{src:c,alt:"\u0411\u0430\u0440\u043d\u0430 \u043a\u0430\u0440\u0442\u0430 100 \u0440\u043e\u043a\u0456\u0432"})})})]})]})}},6717:function(t,e,i){i.d(e,{Z:function(){return r}});var o={section:"Section_section__0XkUm",sectionMenu:"Section_sectionMenu__3AYtW",sectionPublicOffer:"Section_sectionPublicOffer__ZWgZv",sectionNotFound:"Section_sectionNotFound__FSzaG"},n=i(184);function r(t){var e=t.sectionClass,i=void 0===e?"section":e,r=t.children;return(0,n.jsx)("section",{className:o[i],children:r})}},2845:function(t,e,i){i.d(e,{Z:function(){return r}});var o={text:"Text_text__Pw1zW",textLight:"Text_textLight__NUjvc",textFounders:"Text_textFounders__UCEPE",textPublicOffer:"Text_textPublicOffer__dhjqU",textPublicOfferAddress:"Text_textPublicOfferAddress__RCCXy",textProductsList:"Text_textProductsList__L2Tzo",textProductsDetails:"Text_textProductsDetails__kcJQP"},n=i(184);function r(t){var e=t.textClass,i=void 0===e?"textLight":e,r=t.text;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{className:o[i],children:r})})}},2495:function(t,e,i){i.d(e,{Z:function(){return r}});var o={title:"TitleH1_title__p5soH",titleBottom:"TitleH1_titleBottom__u0O7S",titleEventForm:"TitleH1_titleEventForm__aQnNe",titleProductDetails:"TitleH1_titleProductDetails__bAP3V"},n=i(184);function r(t){var e=t.titleClass,i=void 0===e?"title":e,r=t.text;return(0,n.jsx)("h1",{className:o[i],children:r})}},9890:function(t,e,i){i.d(e,{Z:function(){return r}});var o={title:"TitleH2_title__rjZhE",titleTop:"TitleH2_titleTop__UJvru",titlePublicOffer:"TitleH2_titlePublicOffer__LM6KR",titleProductsList:"TitleH2_titleProductsList__QZL0u",titleBasketEmpty:"TitleH2_titleBasketEmpty__f6k2F",titleBasketForm:"TitleH2_titleBasketForm__3eu0S"},n=i(184);function r(t){var e=t.titleClass,i=void 0===e?"title":e,r=t.text;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("h2",{className:o[i],children:r})})}},5934:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var o=i(7084),n=i(2495),r=i(2845),s=i(6717),a=i(670),c=i(4856),l=i(8773),d=i(4619),u=i(6907),m=i(184);function p(t){var e=t.title,i=t.description,o=t.url,n=t.image;return(0,m.jsxs)(u.ql,{children:[(0,m.jsx)("title",{children:e}),(0,m.jsx)("link",{rel:"canonical",href:o}),(0,m.jsx)("meta",{name:"title",content:e}),(0,m.jsx)("meta",{name:"description",content:i}),(0,m.jsx)("meta",{property:"og:title",content:e}),(0,m.jsx)("meta",{property:"og:description",content:i}),(0,m.jsx)("meta",{property:"og:url",content:o}),(0,m.jsx)("meta",{property:"og:image",content:n}),(0,m.jsx)("meta",{name:"twitter:title",content:e}),(0,m.jsx)("meta",{name:"twitter:description",content:i}),(0,m.jsx)("meta",{name:"twitter:url",content:o}),(0,m.jsx)("meta",{name:"twitter:image",content:n})]})}function x(){return(0,m.jsxs)("main",{children:[(0,m.jsx)(p,{title:"100\u0440\u043e\u043a\u0456\u0432\u2022\u0427\u0435\u0440\u0432\u043e\u043d\u0430 \u0417\u0430\u043b\u0430",description:"\u041c\u0430\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440, \u0434\u0435 \u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0422\u0435\u0430\u0442\u0440 \u0457\u0436\u0456 \u0442\u0430 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0454\u043c\u043e \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0456 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0433\u043d\u0443\u0442\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0456",url:"https://100rokiv.netlify.app/redroom",image:"https://storokiv-server.herokuapp.com/images/redroom.jpeg"}),(0,m.jsx)(a.Z,{src:o,alt:"redroom",imgClass:"imgFloor"}),(0,m.jsxs)(s.Z,{children:[(0,m.jsx)(n.Z,{text:"\u0427\u0435\u0440\u0432\u043e\u043d\u0430 \u0437\u0430\u043b\u0430"}),(0,m.jsx)(r.Z,{text:"\u041c\u0430\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u0456\u0440, \u0434\u0435 \u043c\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c\u043e \u0422\u0435\u0430\u0442\u0440 \u0457\u0436\u0456 \u0442\u0430 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0454\u043c\u043e \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u0456 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457, \u0449\u043e \u043f\u0440\u0430\u0433\u043d\u0443\u0442\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0456."}),(0,m.jsx)(r.Z,{text:"\u0426\u0435 \u0447\u0443\u0434\u043e\u0432\u0435 \u043c\u0456\u0441\u0446\u0435 \u0434\u043b\u044f \u043d\u0435\u0432\u0435\u043b\u0438\u043a\u043e\u0433\u043e, \u0430\u043b\u0435 \u0434\u0443\u0436\u0435 \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u0433\u043e \u0432\u0435\u0441\u0456\u043b\u043b\u044f, \u0434\u043d\u044f \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0441\u0438\u0434\u0435\u043d\u044c\u043e\u043a \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457 \u0432 \u0442\u0435\u043f\u043b\u0456\u0439, \u043a\u0430\u043c\u0435\u0440\u043d\u0456\u0439 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0456."}),(0,m.jsx)(d.Z,{to:"/book",btnClass:"btnLineMargin",text:"\u0417\u0430\u0431\u0440\u043e\u043d\u044e\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u043b\u0438\u043a"})]}),(0,m.jsx)(l.Z,{}),(0,m.jsx)(c.Z,{})]})}},4660:function(t,e,i){t.exports=i.p+"static/media/menu-bar.d3b903d600ef90aa15d3.pdf"},4914:function(t,e,i){t.exports=i.p+"static/media/menu-food.ca28c91c26b7e5c52f32.pdf"},6697:function(t,e,i){t.exports=i.p+"static/media/menu-wine.9473159890214177700b.pdf"},5225:function(t,e,i){t.exports=i.p+"static/media/menu-bar.02dd527f9d80d7dc8483.jpg"},9540:function(t,e,i){t.exports=i.p+"static/media/menu-food.58adf538a197f23d93db.jpg"},2434:function(t,e,i){t.exports=i.p+"static/media/menu-wine.317d868570ae8bbc78de.jpg"},5613:function(t,e,i){t.exports=i.p+"static/media/borshch.42e0abf7293b80c4120e.jpg"},5959:function(t,e,i){t.exports=i.p+"static/media/buriak.3dc5dad6bd6e368652c7.jpg"},2671:function(t,e,i){t.exports=i.p+"static/media/cukini.b87390e2f45de027e87a.jpg"},4729:function(t,e,i){t.exports=i.p+"static/media/galushki.b55148707d155201a327.jpg"},6619:function(t,e,i){t.exports=i.p+"static/media/indichka.5c42d81e1aed479bfbd2.jpg"},1965:function(t,e,i){t.exports=i.p+"static/media/kachana.0d53a5678f62cb58713b.jpg"},926:function(t,e,i){t.exports=i.p+"static/media/knish.47a19a96427b0ceb28df.jpg"},2644:function(t,e,i){t.exports=i.p+"static/media/kulish.0ecbc537522e273a72a8.jpg"},343:function(t,e,i){t.exports=i.p+"static/media/kurcha.fe8d22c5e52952f3a91a.jpg"},3539:function(t,e,i){t.exports=i.p+"static/media/sirnuku.f4d2c91ffe5eca65564a.jpg"},4342:function(t,e,i){t.exports=i.p+"static/media/sudak.b3e350731e5404a591d4.jpg"},233:function(t,e,i){t.exports=i.p+"static/media/tomatoMelon.492aec49a93be990ef1c.jpg"},7084:function(t,e,i){t.exports=i.p+"static/media/redroom.3a5a7a9c3763fb321a2d.jpeg"}}]);
//# sourceMappingURL=934.7290a4bc.chunk.js.map