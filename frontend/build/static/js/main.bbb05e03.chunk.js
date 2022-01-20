(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),o=n.n(s),i=(n(19),n(12)),r=n(3),l=n(5),u=n(0);var d=function(e){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("div",{className:"header__logo"}),Object(u.jsxs)("div",{className:"".concat(e.onVisible?"header__account_active":"header__account"),children:[Object(u.jsx)("p",{className:"header__email",children:e.email}),Object(u.jsx)(l.b,{to:"/sign-in",className:"header__button",onClick:e.onClose,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})},p=c.a.createContext();var b=function(e){var t=c.a.useContext(p);console.log(t.data._id),console.log(e.card.owner._id);var n=e.card.owner._id===t.data._id,a="element__delete ".concat(n?"element__delete_active":"element__delete"),s=e.card.likes.some((function(e){return e._id===t._id})),o="element__like ".concat(s?"element__like_active":"element__like");return Object(u.jsxs)("div",{className:"element",children:[Object(u.jsx)("img",{className:"element__img",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(u.jsxs)("div",{className:"element__info",children:[Object(u.jsx)("button",{className:a,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onCardDelete(e.card)}}),Object(u.jsx)("h2",{className:"element__name",children:e.card.name}),Object(u.jsxs)("div",{className:"element__like-group",children:[Object(u.jsx)("button",{className:o,type:"button","aria-label":"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"element__like-counter",children:e.card.likes.length})]})]})]})},h=c.a.createContext();var j=function(e){var t=c.a.useContext(p),n=c.a.useContext(h);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsx)("div",{className:"profile__avatar",children:Object(u.jsx)("div",{className:"profile__overlay",children:Object(u.jsx)("img",{className:"profile__image",src:t.data.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditAvatar})})}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__text",children:[Object(u.jsx)("h1",{className:"profile__name",children:t.data.name}),Object(u.jsx)("p",{className:"profile__description",children:t.data.about})]}),Object(u.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",onClick:e.onEditProfile})]}),Object(u.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439",onClick:e.onAddPlace})]}),Object(u.jsx)("section",{className:"elements",children:n.map((function(t){return Object(u.jsx)(b,{onCardClick:e.onCardClick,card:t,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var m=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("p",{className:"footer__text",children:"\xa9 2021 Mesto Russia"})})};var O=function(e){return Object(u.jsx)("div",{className:"popup popup_type_picture ".concat(e.card&&e.card.link.length>0?"popup_opened":""),children:Object(u.jsxs)("div",{className:"popup__bigsize",children:[Object(u.jsx)("img",{className:"popup__image",src:e.card?e.card.link:"",alt:e.card?e.card.name:""}),Object(u.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0444\u043e\u0440\u043c\u044b",onClick:e.onClose}),Object(u.jsx)("p",{className:"popup__imgName",children:e.card?e.card.name:""})]})})},f=n(10),x=n(11),g=new(function(){function e(t){Object(f.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(x.a)(e,[{key:"_checkFetch",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch(this.baseUrl+"/users/me",{headers:this.headers}).then((function(t){return e._checkFetch(t)}))}},{key:"getCards",value:function(){var e=this;return fetch(this.baseUrl+"/cards",{headers:this.headers}).then((function(t){return e._checkFetch(t)}))}},{key:"patchUserData",value:function(e,t){var n=this;return fetch(this.baseUrl+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._checkFetch(e)}))}},{key:"patchCard",value:function(e,t){var n=this;return fetch(this.baseUrl+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkFetch(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch(this.baseUrl+"/cards/"+e,{method:"DELETE",headers:this.headers}).then((function(e){return t._checkFetch(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch(this.baseUrl+"/cards/likes/"+e,{method:"PUT",headers:this.headers}).then((function(e){return t._checkFetch(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch(this.baseUrl+"/cards/likes/"+e,{method:"DELETE",headers:this.headers}).then((function(e){return t._checkFetch(e)}))}},{key:"patchAvatar",value:function(e){var t=this;return fetch(this.baseUrl+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkFetch(e)}))}}]),e}())({baseUrl:"https://api.chernyshevdi.nomoredomains.rocks",headers:{"Content-Type":"application/json",authorization:localStorage.getItem("token")}});var v=function(e){return Object(u.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen),children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0444\u043e\u0440\u043c\u044b",onClick:e.onClose}),Object(u.jsxs)("form",{className:"popup__form",method:"post",name:e.name,onSubmit:e.onSubmit,children:[Object(u.jsx)("h3",{className:"popup__name",children:e.title}),e.children,Object(u.jsx)("button",{className:"popup__button",type:"submit","aria-label":"\u0414\u0430",children:e.buttonText})]})]})})};var C=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),s=n[0],o=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),d=l[0],b=l[1],h=c.a.useContext(p);return Object(a.useEffect)((function(){o(h.name),b(h.about)}),[h,e.isOpen]),Object(u.jsxs)(v,{name:"type_profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen?"popup_opened":"",onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:d})},children:[Object(u.jsx)("input",{type:"text",className:"popup__input",id:"popup__name",name:"profile_name",placeholder:"\u0418\u043c\u044f",required:!0,onChange:function(e){o(e.target.value)},value:s||""}),Object(u.jsx)("span",{className:"popup__name-error popup__input-error"}),Object(u.jsx)("input",{type:"text",className:"popup__input",id:"popup__description",name:"profile_description",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,onChange:function(e){b(e.target.value)},value:d||""}),Object(u.jsx)("span",{className:"popup__description-error popup__input-error"})]})};var A=function(e){var t=c.a.useRef(null);return Object(u.jsxs)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440?",isOpen:e.isOpen?"popup_opened":"",onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(u.jsx)("input",{type:"url",className:"popup__input",id:"popup__avatar",name:"avatarUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:t}),Object(u.jsx)("span",{className:"popup__input-error popup__avatar-error"})]})};var _=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(r.a)(o,2),l=i[0],d=i[1];return Object(a.useEffect)((function(){s(""),d("")}),[e.isOpen]),Object(u.jsxs)(v,{name:"type_card-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen?"popup_opened":"",onClose:e.onClose,buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:l})},children:[Object(u.jsx)("input",{type:"text",className:"popup__input",id:"popup__location",name:"addFormName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,onChange:function(e){s(e.target.value)},value:c||""}),Object(u.jsx)("span",{className:"popup__input-error popup__location-error"}),Object(u.jsx)("input",{type:"url",className:"popup__input",id:"popup__link",name:"addFormUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){d(e.target.value)},value:l||""}),Object(u.jsx)("span",{className:"popup__input-error popup__link-error"})]})},k=n(2);var N=function(e){return Object(u.jsxs)("div",{className:"loginPage",children:[Object(u.jsx)(l.b,{to:e.link,className:"loginPage__headerButton",children:e.headerButton}),Object(u.jsxs)("form",{className:"loginPage__form",onSubmit:e.onSubmit,children:[Object(u.jsx)("h2",{className:"loginPage__title",children:e.name}),Object(u.jsx)("input",{className:"loginPage__input",placeholder:"Email",onChange:e.emailChange,value:e.valueEmail||""}),Object(u.jsx)("input",{className:"loginPage__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:e.passChange,value:e.valuePass||""}),Object(u.jsx)("button",{className:"loginPage__submitButton",children:e.submitButton})]}),e.children]})};var y=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),l=i[0],d=i[1];return Object(u.jsx)(N,{headerButton:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",name:"\u0412\u0445\u043e\u0434",submitButton:"\u0412\u043e\u0439\u0442\u0438",link:"/sign-up",passChange:function(e){s(e.target.value)},emailChange:function(e){d(e.target.value)},valuePass:a,valueEmail:l,onSubmit:function(t){t.preventDefault(),e.onUpdate({password:a,email:l})}})};var E=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],o=c.a.useState(""),i=Object(r.a)(o,2),d=i[0],p=i[1];return Object(u.jsx)(N,{headerButton:"\u0412\u043e\u0439\u0442\u0438",name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",submitButton:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",link:"/sign-in",passChange:function(e){s(e.target.value)},emailChange:function(e){p(e.target.value)},valuePass:a,valueEmail:d,onSubmit:function(t){t.preventDefault(),e.onUpdate({password:a,email:d})},children:Object(u.jsx)(l.b,{to:"/sign-in",className:"loginPage__subSubmitButton",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})};var L=function(e){return Object(u.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":"popup"),children:Object(u.jsxs)("div",{className:"popup__checkContainer",children:[Object(u.jsx)("button",{className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0444\u043e\u0440\u043c\u044b",onClick:e.onClose}),Object(u.jsx)("img",{className:"popup__checkImage",src:e.onSubmit?"data:image/png;base64,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":"data:image/png;base64,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",alt:e.onSubmit?"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(u.jsx)("h3",{className:"popup__status",children:e.onSubmit?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})},I=n(13),S=n(14),T=["component"];var B=function(e){var t=e.component,n=Object(S.a)(e,T);return Object(u.jsx)(k.b,{children:function(){return n.loggedIn?Object(u.jsx)(t,Object(I.a)({},n)):Object(u.jsx)(k.a,{to:"/sign-in"})}})},U="https://api.chernyshevdi.nomoredomains.rocks",W=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var V=function(){return Object(u.jsx)("div",{className:"preloader",children:Object(u.jsx)("p",{className:"preloader__title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})})};var G=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),b=l[0],f=l[1],x=Object(a.useState)(!1),v=Object(r.a)(x,2),N=v[0],I=v[1],S=Object(a.useState)({name:"",link:""}),T=Object(r.a)(S,2),G=T[0],P=T[1],H=Object(a.useState)(""),Q=Object(r.a)(H,2),w=Q[0],F=Q[1],D=Object(a.useState)(),q=Object(r.a)(D,2),z=q[0],Y=q[1],Z=Object(a.useState)(),M=Object(r.a)(Z,2),R=M[0],K=M[1],J=Object(k.g)(),X=c.a.useState(!1),$=Object(r.a)(X,2),ee=$[0],te=$[1],ne=c.a.useState(null),ae=Object(r.a)(ne,2),ce=ae[0],se=ae[1],oe=c.a.useState(!1),ie=Object(r.a)(oe,2),re=ie[0],le=ie[1];function ue(){I(!1),s(!1),f(!1),P({name:"",link:""})}return Object(a.useEffect)((function(){var e=localStorage.getItem("token");e?(fetch(U+"/users/me",{method:"GET",headers:{"Content-Type":"application/json",authorization:localStorage.getItem("token")}}).then(W).then((function(e){return e})).then((function(e){F(e.data.email),te(!0),J("/page")})).catch((function(e){console.log(e)})),g.getUserData(),g.getCards()):te(!1)}),[localStorage.getItem("token"),J]),Object(a.useEffect)((function(){g.getUserData().then((function(e){Y(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){g.getCards().then((function(e){K(e.data.reverse())})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&ue()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)(p.Provider,{value:z,children:[Object(u.jsx)(d,{email:w,onVisible:ee,onClose:function(){localStorage.removeItem("token"),J("/login")}}),Object(u.jsx)(h.Provider,{value:R,children:void 0===z||void 0===R?Object(u.jsx)(V,{}):Object(u.jsxs)(k.d,{children:[Object(u.jsx)(k.b,{element:Object(u.jsx)(B,{path:"/",loggedIn:ee,component:j})}),Object(u.jsx)(k.b,{path:"/page",element:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{onEditProfile:function(){s(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){I(!0)},onCardClick:function(e){P(e)},cards:R,onCardLike:function(e){e.likes.some((function(e){return e._id===z._id}))?g.deleteLike(e._id).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)})):g.addLike(e._id).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){g.deleteCard(e._id).then((function(){K((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(C,{isOpen:n,onClose:ue,onUpdateUser:function(e){g.patchUserData(e.name,e.about).then((function(e){Y(e),s(!1)})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(_,{isOpen:b,onClose:ue,onAddPlace:function(e){g.patchCard(e.name,e.link).then((function(e){K([e.data].concat(Object(i.a)(R))),f(!1)})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(A,{isOpen:N,onClose:ue,onUpdateAvatar:function(e){g.patchAvatar(e.avatar).then((function(e){Y(e),I(!1)})).catch((function(e){console.log(e)}))}}),Object(u.jsx)(O,{onClose:ue,card:G}),Object(u.jsx)(m,{})]})}),Object(u.jsx)(k.b,{exact:!0,path:"/sign-in",element:Object(u.jsx)(y,{handleUpdateLogin:function(){te(!0)},onUpdate:function(e){var t,n;(t=e.password,n=e.email,fetch(U+"/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(W).then((function(e){console.log(e),e.token&&localStorage.setItem("token",e.token)}))).then((function(){J("/page")})).catch((function(e){console.log(e)}))}})}),Object(u.jsx)(k.b,{exact:!0,path:"/sign-up",element:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(E,{onUpdate:function(e){var t,n;(t=e.password,n=e.email,fetch(U+"/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(W)).then((function(){se(!0),le(!0)})).catch((function(){se(!1),le(!0)}))}}),Object(u.jsx)(L,{isOpen:re,onSubmit:ce,onClose:function(){le(!1)}})]})}),Object(u.jsx)(k.b,{exact:!0,path:"/",element:ee?Object(u.jsx)(k.a,{to:"/page"}):Object(u.jsx)(k.a,{to:"/sign-in"})})]})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(G,{})})}),document.getElementById("root")),P()}},[[21,1,2]]]);
//# sourceMappingURL=main.bbb05e03.chunk.js.map