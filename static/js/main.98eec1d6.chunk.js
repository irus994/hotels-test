(this["webpackJsonphotel-test"]=this["webpackJsonphotel-test"]||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),c=a(11),n=a.n(c),i=a(18),o=a(3),l=(a(32),a(33),a(12)),u=a(4),j="/",d="/login",h="AUTH",_="NO_AUTH",b="UNKNOWN",m="user/requiredAuthorization",O="user/logout",f="main/redirectToRoute",v="data/loadHotels",x="data/addFavorite",p="data/deleteFavorite",g="date/setLocation",N="date/setCheckin",y=function(e){return{type:v,payload:e}},k=function(e){return{type:x,payload:e}},L=function(e){return{type:p,payload:e}},F=function(e){return{type:g,payload:e}},S=function(e){return{type:N,payload:e}},w=function(e,t){return{type:m,payload:{status:e,userData:t}}},C=function(){return{type:O}},I=function(e){return{type:f,payload:e}},D=a(0);var z=Object(o.b)(null,(function(e){return{onLogOut:function(){e((function(e){return Promise.resolve().then((function(){localStorage.removeItem("token")})).then((function(){e(C())}))}))}}}))((function(e){var t=e.onLogOut;return Object(D.jsx)("button",{onClick:function(){t()},className:"logout-button",children:"\u0412\u044b\u0439\u0442\u0438"})}));function A(){return Object(D.jsxs)("header",{className:"header",children:[Object(D.jsx)("span",{className:"header-logo",children:"Simple Hotel Check"}),Object(D.jsx)(z,{})]})}var T=a(7);function M(e,t){var a=new Date(e);a.setDate(a.getDate()+t);var s=a.getFullYear(),r=a.getMonth()+1>=10?a.getMonth()+1:"0"+(a.getMonth()+1),c=a.getDate()>=10?a.getDate():"0"+a.getDate();return"".concat(s,"-").concat(r,"-").concat(c)}var P=function(e){var t=e.slice(0,4),a=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][e.slice(5,7)-1],s=e.slice(8,10);return console.log(e.slice(6,7)-1),"".concat(s," ").concat(a," ").concat(t)};var R=Object(o.b)(null,(function(e){return{onFilter:function(t){e(function(e){var t=e.location,a=e.checkIn,s=e.checkOut;return function(e){return fetch("https://engine.hotellook.com/api/v2/cache.json?location=".concat(t,"&checkIn=").concat(a,"&checkOut=").concat(s,"&currency=rub")).then((function(e){return e.json()})).then((function(t){return e(y(t))}))}}(t)),e(F(t)),e(S(t))}}}))((function(e){var t=e.onFilter,a=Object(s.useRef)(),r=Object(s.useRef)(),c=Object(s.useRef)(),n=Object(s.useState)((function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()})),i=Object(T.a)(n,1)[0];return Object(s.useEffect)((function(){console.log(),t({location:a.current.value,checkIn:r.current.value,checkOut:M(r.current.value,+c.current.value)})}),[]),Object(D.jsx)("div",{className:"wrapper__form",children:Object(D.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({location:a.current.value,checkIn:r.current.value,checkOut:M(r.current.value,+c.current.value)})},className:"form-reservation",children:[Object(D.jsxs)("ul",{className:"form-reservation__list",children:[Object(D.jsxs)("li",{className:"form-reservation__item",children:[Object(D.jsx)("label",{className:"form-reservation__text",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f"}),Object(D.jsx)("input",{ref:a,className:"form-reservation__input",defaultValue:"\u041c\u043e\u0441\u043a\u0432\u0430"})]}),Object(D.jsxs)("li",{className:"form-reservation__item form-reservation__item--date",children:[Object(D.jsx)("label",{className:"form-reservation__text",children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f"}),Object(D.jsx)("input",{ref:r,type:"date",className:"form-reservation__input",defaultValue:i})]}),Object(D.jsxs)("li",{className:"form-reservation__item",children:[Object(D.jsx)("label",{className:"form-reservation__text",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439"}),Object(D.jsx)("input",{ref:c,className:"form-reservation__input",defaultValue:"1"})]})]}),Object(D.jsx)("button",{className:"button",children:Object(D.jsx)("span",{className:"button__text",children:"\u041d\u0430\u0439\u0442\u0438"})})]})})}));function H(e){var t=e.starCount;return Object(D.jsxs)("ul",{className:"rating-stars",children:[Object(D.jsx)("li",{className:"rating-stars__item rating-stars__item--active"}),Object(D.jsx)("li",{className:t>=2?"rating-stars__item rating-stars__item--active":"rating-stars__item"}),Object(D.jsx)("li",{className:t>=3?"rating-stars__item rating-stars__item--active":"rating-stars__item"}),Object(D.jsx)("li",{className:t>=4?"rating-stars__item rating-stars__item--active":"rating-stars__item"}),Object(D.jsx)("li",{className:5===t?"rating-stars__item rating-stars__item--active":"rating-stars__item"})]})}var J=Object(o.b)((function(e){return{favoriteList:e.hotels.favoriteList,hotels:e.hotels.data}}),(function(e){return{deleteFromFavorite:function(t){e(L(t))},addToFavorite:function(t){e(k(t))}}}))((function(e){var t=e.hotelName,a=e.price,s=e.hotelId,r=e.favoriteList,c=e.addToFavorite,n=e.deleteFromFavorite,i=e.starCount;return console.log(r),Object(D.jsxs)("li",{className:" hotels__item hotels__item--favorite",children:[Object(D.jsxs)("div",{className:"wrapper__item--favorite",children:[Object(D.jsx)("span",{className:"hotel__name",children:t}),Object(D.jsx)("div",{onClick:function(){r.includes(s)?n(s):c(s)},className:"hotel__favorite hotel__favorite--active"})]}),Object(D.jsxs)("p",{className:"hotel__reservation-date",children:["28 June, 2020 ",Object(D.jsx)("span",{className:"hotel__reservation-days",children:" - 1 \u0434\u0435\u043d\u044c"})]}),Object(D.jsxs)("div",{className:"wrapper__item--favorite",children:[Object(D.jsx)("ul",{className:"rating-stars",children:Object(D.jsx)(H,{starCount:i})}),Object(D.jsxs)("p",{className:"hotel__price-text",children:["Price",Object(D.jsxs)("span",{className:"hotel__price hotel__price",children:[Math.round(a)," \u20bd"]})]})]})]})})),V={asc:"desc",desc:"asc"};var q=Object(o.b)((function(e){return{hotels:e.hotels.data,favoriteList:e.hotels.favoriteList}}))((function(e){var t=e.favoriteList,a=e.hotels,r=Object(s.useState)("rating"),c=Object(T.a)(r,2),n=c[0],i=c[1],o=Object(s.useState)("asc"),l=Object(T.a)(o,2),u=l[0],j=l[1],d=function(e){e.preventDefault(),n!==e.target.value?i(e.target.value):j(V[u])},h=Object(s.useMemo)((function(){var e=a.filter((function(e){return t.includes(e.hotelId)}));return"rating"===n?e.sort((function(e,t){return"asc"===u?e.stars-t.stars:t.stars-e.stars})):e.sort((function(e,t){return"asc"===u?e.priceAvg-t.priceAvg:t.priceAvg-e.priceAvg}))}),[n,u,t,a]);return Object(D.jsxs)("div",{className:"favorites",children:[Object(D.jsx)("h2",{className:"favorites__header",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),Object(D.jsxs)("div",{className:"sort",children:[Object(D.jsx)("button",{onClick:d,value:"rating",className:"rating"===n?"sort__button sort__button--rating sort__button--active":"sort__button sort__button--rating",children:Object(D.jsx)("span",{className:"rating"===n?"sort__text sort__text--active":"sort__text",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"})}),Object(D.jsx)("button",{onClick:d,value:"price",className:"price"===n?"sort__button sort__button--rating sort__button--active":"sort__button sort__button--rating",children:Object(D.jsx)("span",{className:"price"===n?"sort__text sort__text--active":"sort__text",children:"\u0426\u0435\u043d\u0430"})})]}),Object(D.jsx)("ul",{className:"hotel__list",children:h.map((function(e){return Object(D.jsx)(J,{hotelName:e.hotelName,price:e.priceAvg,hotelId:e.hotelId,starCount:e.stars},e.id)}))})]})})),U=a.p+"static/media/hotel.881c29cb.png";function B(){return Object(D.jsxs)("ul",{className:"slider",children:[Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})}),Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})}),Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})}),Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})}),Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})}),Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})}),Object(D.jsx)("li",{className:"slider__item",children:Object(D.jsx)("img",{className:"slider__img",src:U})})]})}var E=Object(o.b)((function(e){return{favoriteList:e.hotels.favoriteList,hotels:e.hotels.data}}),(function(e){return{deleteFromFavorite:function(t){e(L(t))},addToFavorite:function(t){e(k(t))}}}))((function(e){var t=e.hotelName,a=e.price,s=e.hotelId,r=e.favoriteList,c=e.addToFavorite,n=e.deleteFromFavorite,i=e.starCount;return Object(D.jsxs)("li",{className:"hotels__item hotels__item--main-list",children:[Object(D.jsxs)("div",{className:"wrapper__hotel-column-left wrapper__hotel-column-left--main-list",children:[Object(D.jsx)("span",{className:"hotel__name",children:t}),Object(D.jsxs)("p",{className:"hotel__reservation-date",children:["28 June, 2020 ",Object(D.jsx)("span",{className:"hotel__reservation-days",children:" - 1 \u0434\u0435\u043d\u044c"})]}),Object(D.jsx)("ul",{className:"rating-stars",children:Object(D.jsx)(H,{starCount:i})})]}),Object(D.jsxs)("div",{className:"wrapper__hotel-column-right",children:[Object(D.jsx)("div",{onClick:function(){r.includes(s)?n(s):c(s)},className:r.includes(s)?"hotel__favorite hotel__favorite--active hotel__favorite--main-list":"hotel__favorite hotel__favorite--main-list"}),Object(D.jsxs)("p",{className:"hotel__price-text hotel__price-text--main-list",children:["Price",Object(D.jsxs)("span",{className:"hotel__price",children:[Math.round(a)," \u20bd"]})]})]})]})}));var Y=Object(o.b)((function(e){return{hotels:e.hotels.data}}))((function(e){var t=e.hotels;return Object(D.jsxs)("div",{className:"wrapper__hotel-list",children:[Object(D.jsx)("ul",{className:"hotel__list hotel__list--main",children:t.map((function(e){return Object(D.jsx)(E,{hotelName:e.hotelName,price:e.priceAvg,hotelId:e.hotelId,starCount:e.stars},e.id)}))}),Object(D.jsx)("div",{className:"scrollbar",children:Object(D.jsx)("div",{className:"scrollbar__handler"})})]})}));var K=Object(o.b)((function(e){return{favoriteList:e.hotels.favoriteList,location:e.hotels.location,checkin:e.hotels.checkin}}))((function(e){var t=e.favoriteList,a=e.location,s=e.checkin;return console.log(s),Object(D.jsxs)("section",{className:"hotels",children:[Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{className:"wrapper__hotel-title",children:[Object(D.jsxs)("ul",{className:"bread-crumbs",children:[Object(D.jsx)("li",{className:"bread-crumbs__item",children:"\u041e\u0442\u0435\u043b\u0438"}),Object(D.jsx)("li",{className:"bread-crumbs__item",children:a})]}),Object(D.jsx)("span",{className:"hotel__title-date",children:P(s)})]}),Object(D.jsx)(B,{}),Object(D.jsxs)("span",{className:"hotel__added-favorites",children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",Object(D.jsx)("span",{className:"hotel__count",children:t.length})," \u043e\u0442\u0435\u043b\u044f"]})]}),Object(D.jsx)(Y,{})]})}));function W(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(A,{}),Object(D.jsxs)("main",{className:"main",children:[Object(D.jsx)("h1",{className:"visually-hidden",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u0442\u0435\u043b\u044c"}),Object(D.jsxs)("div",{className:"wrapper__left-column",children:[Object(D.jsx)(R,{}),Object(D.jsx)(q,{})]}),Object(D.jsx)(K,{})]})]})}var G=Object(o.b)(null,(function(e){return{onLogin:function(t){var a;e(((a=t).login,a.password,function(e){return Promise.resolve({token:"token"}).then((function(e){return localStorage.setItem("token",e.token),e})).then((function(t){return e(w(h,t))})).then((function(){return e(I(j))}))}))}}}))((function(e){var t=e.onLogin,a=Object(s.useRef)(),r=Object(s.useRef)(),c=Object(s.useState)(""),n=Object(T.a)(c,2),i=n[0],o=n[1],l=Object(s.useState)(""),u=Object(T.a)(l,2),j=u[0],d=u[1];return Object(D.jsxs)("div",{className:"login-form__wrapper",children:[Object(D.jsx)("h1",{className:"login__form-header",children:"Simple Hotel Check"}),Object(D.jsxs)("form",{noValidate:!0,className:"login__form",onSubmit:function(e){e.preventDefault();var s=!0;a.current.validity.valid?o(""):(o("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"),s=!1),r.current.validity.valid?d(""):(console.log(r.current.validity),d("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),s=!1),s&&t({login:a.current.value,password:r.current.value})},children:[Object(D.jsxs)("ul",{className:"login__list",children:[Object(D.jsxs)("li",{className:"login__item",children:[Object(D.jsx)("label",{htmlFor:"email",className:i?"login__form-text login__form-text--error":"login__form-text",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(D.jsx)("input",{required:!0,id:"email",type:"email",ref:a,className:i?"form-reservation__input form-reservation__input--error":"form-reservation__input"}),i&&Object(D.jsx)("div",{className:"error-message",children:Object(D.jsxs)("p",{children:[i," "]})})]}),Object(D.jsxs)("li",{className:"login__item",children:[Object(D.jsx)("label",{htmlFor:"password",className:j?"login__form-text login__form-text--error":"login__form-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(D.jsx)("input",{required:!0,id:"password",type:"password",minLength:8,ref:r,className:j?"form-reservation__input form-reservation__input--error":"form-reservation__input"}),j&&Object(D.jsx)("div",{className:"error-message",children:Object(D.jsxs)("p",{children:[j," "]})})]})]}),Object(D.jsx)("button",{className:"button",children:Object(D.jsx)("span",{className:"button__text",children:"\u0412\u043e\u0439\u0442\u0438"})})]})]})}));function Q(){return Object(D.jsxs)("div",{className:"login-page",children:[Object(D.jsx)("div",{className:"blur"}),Object(D.jsx)(G,{})]})}var X=Object(o.b)((function(e){return{authorizationStatus:e.user.authorizationStatus}}))((function(e){var t=e.render,a=e.path,s=e.exact,r=e.authorizationStatus;return Object(D.jsx)(u.b,{path:a,exact:s,render:function(e){return r===h?t(e):Object(D.jsx)(u.a,{to:d})}})}));var Z=Object(o.b)((function(e){return{authorizationStatus:e.user.authorizationStatus}}))((function(e){var t=e.render,a=e.path,s=e.exact,r=e.authorizationStatus;return Object(D.jsx)(u.b,{path:a,exact:s,render:function(e){return r!==h?t(e):Object(D.jsx)(u.a,{to:j})}})}));var $=function(){return Object(D.jsx)(l.a,{children:Object(D.jsxs)(u.d,{children:[Object(D.jsx)(X,{exact:!0,path:j,render:function(){return Object(D.jsx)(W,{})}}),Object(D.jsx)(Z,{exact:!0,path:d,render:function(){return Object(D.jsx)(Q,{})}})]})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),r(e),c(e),n(e)}))},te=a(22),ae=a(2),se={user:{data:null,authorizationStatus:b},hotels:{data:[],isDataLoaded:!1,favoriteList:[],location:"",checkin:""}},re=a(21),ce=Object(i.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ae.a)(Object(ae.a)({},e),{},{hotels:Object(ae.a)(Object(ae.a)({},e.hotels),{},{data:t.payload,isDataLoaded:!0})});case x:return Object(ae.a)(Object(ae.a)({},e),{},{hotels:Object(ae.a)(Object(ae.a)({},e.hotels),{},{favoriteList:[].concat(Object(te.a)(e.hotels.favoriteList),[t.payload])})});case p:return Object(ae.a)(Object(ae.a)({},e),{},{hotels:Object(ae.a)(Object(ae.a)({},e.hotels),{},{favoriteList:e.hotels.favoriteList.filter((function(e){return e!==t.payload}))})});case g:return Object(ae.a)(Object(ae.a)({},e),{},{hotels:Object(ae.a)(Object(ae.a)({},e.hotels),{},{location:t.payload.location})});case N:return Object(ae.a)(Object(ae.a)({},e),{},{hotels:Object(ae.a)(Object(ae.a)({},e.hotels),{},{checkin:t.payload.checkIn})});case m:return Object(ae.a)(Object(ae.a)({},e),{},{user:{authorizationStatus:t.payload.status,data:t.payload.userData}});case O:return Object(ae.a)(Object(ae.a)({},e),{},{user:{authorizationStatus:_,data:null}});default:return e}}),Object(i.a)(re.a));ce.dispatch((function(e){return localStorage.getItem("token")?Promise.resolve({token:localStorage.getItem("token")}).then((function(t){return e(w(h,t))})):Promise.resolve().then((function(){return e(w(_,{}))}))})),n.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(o.a,{store:ce,children:Object(D.jsx)($,{})})}),document.getElementById("root")),ee()}},[[39,1,2]]]);
//# sourceMappingURL=main.98eec1d6.chunk.js.map