(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(7),i=c.n(r),s=(c(13),c(0));function o(){return Object(s.jsx)("nav",{className:"cyan lighten-4",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"index.html",className:"brand-logo blue-grey-text text-darken-2",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/OvanessTea/React-Shop",target:"_blank",rel:"noreferrer",className:"blue-grey-text text-darken-2",children:"Repo"})})})]})})}function l(){return Object(s.jsx)("footer",{className:"page-footer cyan lighten-5",children:Object(s.jsx)("div",{className:"footer-copuright",children:Object(s.jsxs)("div",{className:"container blue-grey-text lighten-3",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"blue-grey-text text-darken-2 right",href:"https://github.com/OvanessTea/React-Shop",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})}var d="5f3d424051mshaaa7e9e2603cabep1a8cf2jsn9ac9ab59ac9b",j="https://steam2.p.rapidapi.com/search/",u="steam2.p.rapidapi.com",b=c(5),h=c(8),O=c(1);function p(e,t){var c=t.type,a=t.payload;switch(c){case"SET_GOODS":return Object(O.a)(Object(O.a)({},e),{},{goods:a||[],loading:!1});case"TOGGLE_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:a});case"ADD_TO_BASKET":var n=e.order.findIndex((function(e){return e.appId===a.id})),r=null;if(n<0){var i=Object(O.a)(Object(O.a)({},a),{},{quantity:1});r=[].concat(Object(h.a)(e.order),[i])}else r=e.order.map((function(e,t){return t===n?Object(O.a)(Object(O.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(O.a)(Object(O.a)({},e),{},{order:r,alertName:a.title});case"INCREMENT_QUANTITY":return Object(O.a)(Object(O.a)({},e),{},{order:e.order.map((function(e){if(e.appId===a.id){var t=e.quantity+1;return Object(O.a)(Object(O.a)({},e),{},{quantity:t})}return e}))});case"DECREMENT_QUANTITY":return Object(O.a)(Object(O.a)({},e),{},{order:e.order.map((function(e){if(e.appId===a.id){var t=e.quantity-1;return Object(O.a)(Object(O.a)({},e),{},{quantity:t>=0?t:0})}return e}))});case"TOGGLE_BASKET":return Object(O.a)(Object(O.a)({},e),{},{isBasketShow:!e.isBasketShow});case"REMOVE_FROM_BASKET":return Object(O.a)(Object(O.a)({},e),{},{order:e.order.filter((function(e){return e.appId!==a.id}))});case"CLOSE_ALERT":return Object(O.a)(Object(O.a)({},e),{},{alertName:""});default:return e}}var m=Object(a.createContext)(),x={goods:[],loading:!0,order:[],isBasketShow:!1,alertName:""},f=function(e){var t=e.children,c=Object(a.useReducer)(p,x),n=Object(b.a)(c,2),r=n[0],i=n[1];return r.toggleLoading=function(e){i({type:"TOGGLE_LOADING",payload:e})},r.addToBasket=function(e){i({type:"ADD_TO_BASKET",payload:e})},r.incQuantity=function(e){i({type:"INCREMENT_QUANTITY",payload:{id:e}})},r.decQuantity=function(e){i({type:"DECREMENT_QUANTITY",payload:{id:e}})},r.handleBasketShow=function(){i({type:"TOGGLE_BASKET"})},r.removeFromBasket=function(e){i({type:"REMOVE_FROM_BASKET",payload:{id:e}})},r.closeAlert=function(){i({type:"CLOSE_ALERT"})},r.setGoods=function(e){i({type:"SET_GOODS",payload:e})},Object(s.jsx)(m.Provider,{value:r,children:t})};function g(e){var t=e.appId,c=e.title,n=e.url,r=e.imgUrl,i=e.released,o=e.price,l=Object(a.useContext)(m).addToBasket;return Object(s.jsxs)("div",{className:"card goods",children:[Object(s.jsx)("div",{className:"card-image ",children:Object(s.jsx)("img",{src:r,alt:c})}),Object(s.jsxs)("label",{children:[Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:Object(s.jsx)("a",{href:n,children:c})}),Object(s.jsx)("p",{className:"right",style:{fontSize:"1rem"},children:i})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return l({appId:t,title:c,price:o})},children:"Buy now"}),Object(s.jsx)("span",{className:"right blue-text",style:{fontSize:"1.2rem"},children:o})]})]})]})}function v(){var e=Object(a.useContext)(m).goods,t=void 0===e?[]:e;return t.length?Object(s.jsx)("div",{className:"goods",children:t.map((function(e){return Object(s.jsx)(g,Object(O.a)({},e),e.appId)}))}):Object(s.jsx)("h3",{children:"Nothing was found"})}function N(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}function y(){var e=Object(a.useContext)(m),t=e.order,c=e.handleBasketShow,n=void 0===c?Function.prototype:c,r=t.length;return Object(s.jsxs)("div",{className:"cart teal white-text",onClick:n,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),r?Object(s.jsxs)("span",{className:"cart-quantity",children:[" ",r]}):null]})}var T=function(e){var t=e.searchGoods,c=void 0===t?Function.prototype:t,n=Object(a.useState)(""),r=Object(b.a)(n,2),i=r[0],o=r[1];return Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"input-field",children:[Object(s.jsx)("input",{id:"search-input",className:"validate",placeholder:"search",type:"search",value:i,onChange:function(e){return o(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&c(i)}}),Object(s.jsx)("button",{className:"btn search-btn",onClick:function(){return c(i)},children:"Search"})]})})};function E(e){var t=e.appId,c=e.title,n=e.price,r=e.quantity,i=Object(a.useContext)(m),o=i.removeFromBasket,l=i.incQuantity,d=i.decQuantity,j=n.split("").map((function(e){return e.replace(/\s+/g,"").replace("-","")})).filter((function(e){return e.length>0})).join("");return"FreeToPlay"===j?j="Free To Play":"Free"===j?j="Free":(j=+j.slice(0,-1).replace(",","."),j*=r,j+="\u20ac"),console.log(j),Object(s.jsxs)("li",{className:"collection-item",children:[c," ",Object(s.jsx)("i",{className:"material-icons change-quantity",onClick:function(){return d(t)},children:"remove"})," ","x",r,Object(s.jsx)("i",{className:"material-icons change-quantity",onClick:function(){return l(t)},children:"add"})," ","= ",j,Object(s.jsx)("span",{className:"secondary-content",children:Object(s.jsx)("i",{className:"material-icons basket-delete",onClick:function(){return o(t)},children:"close"})})]})}function k(){var e=Object(a.useContext)(m),t=e.order,c=void 0===t?[]:t,n=e.handleBasketShow,r=void 0===n?Function.prototype:n;return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),c.length?c.map((function(e){return Object(s.jsx)(E,Object(O.a)({},e),e.appId)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432: ",c.length,Object(s.jsxs)("button",{className:"btn-flat waves-effect waves-light right btn-arrange",type:"submit",name:"action",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c",Object(s.jsx)("i",{className:"material-icons right",children:"send"})]})]}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:r,children:"close"})]})}function S(){var e=Object(a.useContext)(m),t=e.alertName,c=void 0===t?"":t,n=e.closeAlert,r=void 0===n?Function.prototype:n;return Object(a.useEffect)((function(){var e=setTimeout(r,1500);return function(){clearTimeout(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast ",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function C(){var e=Object(a.useContext)(m),t=e.loading,c=e.order,n=e.isBasketShow,r=e.alertName,i=e.setGoods,o=e.toggleLoading;return Object(a.useEffect)((function(){fetch("".concat(j,"Counter%20Strike/page/1"),{method:"GET",headers:{"x-rapidapi-host":u,"x-rapidapi-key":d}}).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){console.error(e)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(T,{searchGoods:function(e){o(!0),fetch("".concat(j).concat(e,"/page/1"),{method:"GET",headers:{"x-rapidapi-host":u,"x-rapidapi-key":d}}).then((function(e){return e.json()})).then((function(e){i(e),o(!1)})).catch((function(e){console.error(e)}))}}),Object(s.jsx)(y,{quantity:c.length}),t?Object(s.jsx)(N,{}):Object(s.jsx)(v,{}),n&&Object(s.jsx)(k,{}),r&&Object(s.jsx)(S,{})]})}var _=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(f,{children:Object(s.jsx)(C,{})}),Object(s.jsx)(l,{})]})};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bf3d8a4c.chunk.js.map