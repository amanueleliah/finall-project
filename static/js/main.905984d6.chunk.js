(this["webpackJsonpfinall-project"]=this["webpackJsonpfinall-project"]||[]).push([[0],{121:function(e,t){},138:function(e,t,c){},157:function(e,t,c){},158:function(e,t,c){},173:function(e,t,c){},174:function(e,t,c){},175:function(e,t,c){},177:function(e,t,c){},178:function(e,t){},179:function(e,t,c){},181:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(64),a=c.n(i),r=(c(138),c(36)),j=c(65),o=c.n(j),l=c(15),d=(c(157),c(207)),b=c(208),h=c(217),u=c(205),O=c(206),p=c(218),x=c(219),m=c(215),f=c(211),v=c(120),_=c(214),g=c(216),k=(c(158),c(116)),y=c.n(k),N=c(26),S=c(7),C=Object(n.createContext)(),w=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(S.jsx)(C.Provider,{value:Object(n.useReducer)(t,c),children:s})},T=function(){return Object(n.useContext)(C)};c(160),c(162),c(182);var E=function(){var e=T(),t=Object(l.a)(e,2),c=t[0],n=c.basket,s=c.user;return t[1],Object(S.jsx)("div",{className:"header",children:Object(S.jsxs)(g.a,{children:[Object(S.jsx)(N.b,{to:"/",children:Object(S.jsx)("img",{className:"header__logo",src:"https://fakestoreapi.com/icons/logo.png"})}),Object(S.jsx)(u.a,{w:"xg",size:"lg",children:"WELLCOME TO FAKE STORE"}),Object(S.jsx)(N.b,{to:"/login",children:Object(S.jsxs)("div",{className:"header__nav",children:[Object(S.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Gust"]}),Object(S.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign In":"Guest"})]})}),Object(S.jsxs)("div",{className:"header__option",children:[Object(S.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(S.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(S.jsx)(O.a,{}),Object(S.jsxs)("div",{className:"header__option",children:[Object(S.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(S.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(S.jsx)(O.a,{}),Object(S.jsx)(N.b,{to:"/Checkout",children:Object(S.jsxs)("div",{className:"header__optionBasket",children:[Object(S.jsx)(y.a,{}),Object(S.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:n.length})]})})]})})},P=function(e){var t=e.title,c=e.price,n=e.image;return Object(S.jsxs)(d.a,{p:4,borderRadius:"lg",borderWidth:"1px",children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(h.a,{src:n,width:24})}),Object(S.jsxs)(u.a,{mt:4,noOfLines:2,size:"sm",fontWeight:"medium",children:[" ",t," "]}),Object(S.jsx)(O.a,{}),Object(S.jsxs)(p.a,{children:["$",c]})]})};var L=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),a=Object(l.a)(i,2),j=a[0],h=a[1],u=Object(n.useState)(!0),O=Object(l.a)(u,2),p=O[0],g=O[1];return Object(n.useEffect)((function(){o.a.get("https://fakestoreapi.com/products").then((function(e){var t=e.data;g(!1),s(t),h(t)}))}),[]),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(E,{title:"Fake Store"}),p?Object(S.jsx)(b.a,{children:Object(S.jsx)(x.a,{})}):Object(S.jsxs)(d.a,{p:2,children:[Object(S.jsx)(m.a,{borderInlineStartColor:"pink",onChange:function(e){var t=c.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())}));h(t)},placeholder:"Type here to Search a product",mt:4,colorScheme:"pink"}),Object(S.jsx)(f.a,{columns:4,spacing:4,mt:6,p:2,children:j.map((function(e){return Object(S.jsx)(v.b,{className:"tomove",children:Object(S.jsxs)(N.b,{to:{pathname:"/product/".concat(e.id,","),state:e},children:[Object(S.jsx)(P,Object(r.a)({},e)),Object(S.jsx)(b.a,{children:Object(S.jsx)(_.a,{w:"s",size:"sm",colorScheme:"pink",children:"product Detaile"})})]})})}))})]})]})},B=c(23),R=c(212);var A=function(e){var t=e.location,c=e.id,n=e.title,s=e.image,i=e.price,a=e.rating,r=t.state,j=function(e){var t=e.title;return Object(S.jsx)(d.a,{p:4,shadow:"md",children:Object(S.jsx)(u.a,{children:t})})},o=T(),O=Object(l.a)(o,2),x=(O[0].basket,O[1]),m=function(){x({type:"ADD_TO_BASKET",item:{id:c,title:n,image:s,price:i,rating:a}})};return r||(window.location="/"),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(E,{}),Object(S.jsx)(j,{title:r.title}),Object(S.jsx)(d.a,{p:8,d:"flex",alignItems:"center",children:Object(S.jsx)(d.a,{ml:6,children:Object(S.jsxs)(f.a,{spacing:4,columns:{base:1,md:5},children:[Object(S.jsx)(v.b,{colSpan:2,children:Object(S.jsx)(b.a,{children:Object(S.jsx)(h.a,{w:48,src:r.image})})}),Object(S.jsx)(v.b,{colSpan:3,children:Object(S.jsxs)(g.b,{spacing:4,children:[Object(S.jsxs)(d.a,{mt:3,children:[Object(S.jsxs)(u.a,{children:["Price:$ ",r.price]}),Object(S.jsx)(p.a,{as:"i",children:r.category})]}),Object(S.jsxs)(d.a,{children:[Object(S.jsxs)(p.a,{p:2,children:["Rate ",r.rating.rate]}),Object(S.jsxs)(p.a,{p:2,ml:4,children:[r.rating.count," Peaple"]})]}),Object(S.jsx)(R.a,{children:r.description}),Object(S.jsxs)(g.a,{children:[Object(S.jsx)(N.b,{to:"/checkout",children:Object(S.jsx)(_.a,{w:"xs",size:"md",colorScheme:"purple",onClick:m,children:"Buy now"})}),Object(S.jsx)(_.a,{w:"xs",size:"md",colorScheme:"purple",onClick:m,children:"Add to cart"})]}),Object(S.jsx)(N.b,{to:"/store",children:Object(S.jsx)(_.a,{w:"xs",size:"md",colorScheme:"pink",children:"Wants Back to Store"})})]})})]})})})]})};c(173);var I=function(){return Object(S.jsxs)("div",{className:"home",children:[Object(S.jsx)(d.a,{children:Object(S.jsx)(E,{title:"Fake Store"})}),Object(S.jsx)("div",{className:"home__container",children:Object(S.jsx)(N.b,{to:"/store",children:Object(S.jsx)("img",{className:"home__image",src:"https://fakestoreapi.com/icons/intro.svg",alt:""})})}),Object(S.jsx)(p.a,{p:8,className:"home-Cookie",colorScheme:"pink",children:'Choose your cookie preferences We use cookies and similar tools that are necessary to enable you to make purchases, to improve your shopping experience and to provide our services, as detailed in our Cookie Notice . We also use these cookies to understand how customers use our services (for example, by measuring site visits) so that we can make improvements. If you agree, we will also use cookies that complement your shopping experience, as described in our Cookie Notice . This includes the use of third-party cookies for the purpose of displaying and measuring interest-based advertising. Click on "Personalize cookies" to refuse these cookies, make more detailed choices or find out more.'})]})},M=(c(174),c(175),c(81)),D=c.n(M);var F=function(){var e=T(),t=Object(l.a)(e,2),c=t[0].basket,n=(t[1],Object(B.f)());return Object(S.jsxs)("div",{className:"subtotal",children:[Object(S.jsx)(D.a,{renderText:function(e){return Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(S.jsx)("strong",{children:e})]}),Object(S.jsxs)("small",{className:"subtotal__gift",children:[Object(S.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)}(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(S.jsx)("button",{onClick:function(e){return n.push("/payment")},children:"Proceed to Checkout"})]})};c(177);var z=function(e){var t=e.id,c=e.image,n=e.title,s=e.price,i=(e.rating,e.hideButton,T()),a=Object(l.a)(i,2),r=a[0],j=(r.basket,r.quantity,a[1]);return Object(S.jsxs)("div",{children:[Object(S.jsxs)(f.a,{className:"checkoutProduct",children:[Object(S.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(S.jsxs)("div",{className:"checkoutProduct__info",children:[Object(S.jsx)("p",{className:"checkoutProduct__title",children:n}),Object(S.jsxs)("p",{className:"checkoutProduct__price",children:[Object(S.jsx)("small",{children:"$"}),Object(S.jsx)("strong",{children:s})]})]})]}),Object(S.jsx)(_.a,{colorScheme:"pink",onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})};var K=function(){var e=T(),t=Object(l.a)(e,2),c=t[0].basket;return t[1],Object(S.jsxs)("div",{className:"checkout",children:[Object(S.jsx)(d.a,{children:Object(S.jsx)(E,{})}),Object(S.jsxs)("div",{className:"checkout__left",children:[Object(S.jsx)("h1",{children:"Hello "}),Object(S.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),Object(S.jsx)(f.a,{columns:4,spacing:4,mt:6,p:2,children:c.map((function(e){return Object(S.jsx)(z,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(S.jsxs)("div",{className:"checkout__right",children:[Object(S.jsx)(F,{}),Object(S.jsx)(N.b,{to:"/store",children:Object(S.jsx)(_.a,{p:2,mt:4,shadow:"md",colorScheme:"pink",children:"Continue shopping"})})]})]})},W=c(121),J=c.n(W),$=(c(178),c(0)),H=c.n($),U=c(1),V=(c(179),c(56)),Y=o.a.create({baseURL:""});var q=function(){var e=T(),t=Object(l.a)(e,2),c=t[0],s=c.basket,i=c.user,a=t[1],r=Object(B.f)(),j=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},o=Object(V.useStripe)(),d=Object(V.useElements)(),b=Object(n.useState)(null),h=Object(l.a)(b,2),u=h[0],O=h[1],p=Object(n.useState)(!0),x=Object(l.a)(p,2),m=x[0],v=x[1],_=Object(n.useState)(!1),g=Object(l.a)(_,2),k=g[0],y=g[1],C=Object(n.useState)(""),w=Object(l.a)(C,2),P=w[0],L=w[1],R=Object(n.useState)(!0),A=Object(l.a)(R,2),I=A[0],M=A[1];Object(n.useEffect)((function(){(function(){var e=Object(U.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({method:"post",url:"/payments/create?total=".concat(100*j(s))});case 2:t=e.sent,M(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),console.log("THE SECRET IS >>>",I);var F=function(){var e=Object(U.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),L(!0),e.next=4,o.confirmCardPayment(I,{payment_method:{card:d.getElement(V.CardElement)}}).then((function(e){e.paymentIntent;y(!0),O(null),L(!1),a({type:"EMPTY_BASKET"}),r.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"payment",children:[Object(S.jsx)(E,{}),Object(S.jsxs)("div",{className:"payment__container",children:[Object(S.jsxs)("h1",{children:["Checkout (",Object(S.jsxs)(N.b,{to:"/checkout",children:[null===s||void 0===s?void 0:s.length," items"]}),")"]}),Object(S.jsxs)("div",{className:"payment__section",children:[Object(S.jsx)("div",{className:"payment__title",children:Object(S.jsx)("h3",{children:"Shiping Address"})}),Object(S.jsxs)("div",{className:"payment__address",children:[Object(S.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(S.jsx)("p",{children:"1538 Cardinal lane"}),Object(S.jsx)("p",{children:"Nashvill, TN"})]})]}),Object(S.jsxs)("div",{className:"payment__section",children:[Object(S.jsx)("div",{className:"payment__title",children:Object(S.jsx)("h3",{children:"Billing Address"})}),Object(S.jsxs)("div",{className:"payment__address",children:[Object(S.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(S.jsx)("p",{children:"1538 Cardinal lane"}),Object(S.jsx)("p",{children:"Nashvill, TN"})]})]}),Object(S.jsxs)("div",{className:"payment__section",children:[Object(S.jsx)("div",{className:"payment__title",children:Object(S.jsx)("h3",{children:"Review items and delivery"})}),Object(S.jsx)(f.a,{children:Object(S.jsx)("div",{className:"payment__items",children:s.map((function(e){return Object(S.jsx)(z,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))})})]}),Object(S.jsxs)("div",{className:"payment__section",children:[Object(S.jsx)("div",{className:"payment__title",children:Object(S.jsx)("h3",{children:"Payment Method"})}),Object(S.jsx)("div",{className:"payment__details",children:Object(S.jsxs)("form",{onSubmit:F,children:[Object(S.jsx)(V.CardElement,{onChange:function(e){v(e.empty),O(e.error?e.error.message:"")}}),Object(S.jsxs)("div",{className:"payment__priceContainer",children:[Object(S.jsx)(D.a,{renderText:function(e){return Object(S.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:j(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(S.jsx)("button",{disabled:P||m||k,children:Object(S.jsx)("span",{children:P?Object(S.jsx)("p",{children:"Processing"}):"Buy Now"})})]}),u&&Object(S.jsx)("div",{children:u})]})})]})]})]})},G=c(122),Q=Object(G.a)("pk_test_51JaNxWJ8Q8Z7Bcp22UPUHOK05k1Q1SMcC9oA7ynqhn1anytTpeIilC0Dt8PCDtfxIaPfT6Z122zpLycVCLkCNgc400J1yMI62a");var Z=function(){return Object(S.jsx)(N.a,{children:Object(S.jsxs)(B.c,{children:[Object(S.jsx)(B.a,{path:"/",exact:!0,component:function(e){return Object(S.jsx)(I,{})}}),Object(S.jsx)(B.a,{path:"/store",component:function(e){return Object(S.jsx)(L,{})}}),Object(S.jsx)(B.a,{path:"/login",component:function(e){return Object(S.jsx)(J.a,{})}}),Object(S.jsx)(B.a,{path:"/product/:id",component:function(e){return Object(S.jsx)(A,Object(r.a)({},e))}}),Object(S.jsx)(B.a,{path:"/checkout",component:function(e){return Object(S.jsx)(K,Object(r.a)({},e))}}),Object(S.jsx)(B.a,{path:"/payment",children:Object(S.jsx)(V.Elements,{stripe:Q,children:Object(S.jsx)(q,{})})}),Object(S.jsx)(B.a,{children:"404"})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,220)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))},ee=c(213),te=c(19),ce=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(r.a)(Object(r.a)({},e),{},{basket:[].concat(Object(te.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(te.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(r.a)(Object(r.a)({},e),{},{basket:n});case"SET_USER":return Object(r.a)(Object(r.a)({},e),{},{user:t.user});default:return e}};a.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(w,{initialState:{basket:[],user:null},reducer:ce,children:Object(S.jsx)(ee.a,{children:Object(S.jsx)(Z,{})})})}),document.getElementById("root")),X()}},[[181,1,2]]]);
//# sourceMappingURL=main.905984d6.chunk.js.map