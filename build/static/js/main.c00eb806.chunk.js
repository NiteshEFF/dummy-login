(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,a){e.exports={login:"Login_login__2Px22",actions:"Login_actions__1b5Oz"}},function(e,t,a){e.exports={control:"input_control__7EVew",invalid:"input_invalid__10w9F"}},,,function(e,t,a){e.exports={card:"Card_card__1te4P"}},function(e,t,a){e.exports={button:"Button_button__2lgkF"}},function(e,t,a){e.exports={home:"Home_home__3idT9"}},function(e,t,a){e.exports={nav:"Navigation_nav__JfAVK"}},function(e,t,a){e.exports={"main-header":"MainHeader_main-header__2OmAM"}},,,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(7),l=a.n(i),o=(a(21),a(3)),s=a(2),r=a(0),u=c.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,t){}}),d=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1];Object(n.useEffect)((function(){if("1"===localStorage.getItem("isloggedIn"))return i(!0)}),[]);return Object(r.jsx)(u.Provider,{value:{isLoggedIn:c,onLogout:function(){localStorage.clear(),i(!1)},onLogin:function(e,t){localStorage.setItem("isloggedIn","1"),i(!0)}},children:e.children})},j=u,b=a(8),f=a.n(b),O=function(e){return Object(r.jsx)("div",{className:"".concat(f.a.card," ").concat(e.className),children:e.children})},v=a(4),g=a.n(v),m=a(9),p=a.n(m),h=function(e){return Object(r.jsx)("button",{type:e.type||"button",className:"".concat(p.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},x=a(5),_=a.n(x),I=c.a.forwardRef((function(e,t){var a=Object(n.useRef)(),c=function(){a.current.focus()};return Object(n.useImperativeHandle)(t,(function(){return{focus:c}})),Object(r.jsxs)("div",{className:"".concat(_.a.control," ").concat(!1===e.isValid?_.a.invalid:""),children:[Object(r.jsx)("label",{htmlFor:e.For,children:e.title}),Object(r.jsx)("input",{ref:a,type:e.type,id:e.For,value:e.value,onChange:e.changeHandler,onBlur:e.validateHandler})]})})),L=function(e,t){switch(t.type){case"EMAIL_INPUT":return Object(s.a)(Object(s.a)({},e),{},{email:{value:t.payload.val,isValid:t.payload.val.includes("@")}});case"VALID_EMAIL":return Object(s.a)(Object(s.a)({},e),{},{email:{value:e.email.value,isValid:e.email.value.includes("@")}});case"PWD_INPUT":return Object(s.a)(Object(s.a)({},e),{},{password:{value:t.payload.val,isValid:t.payload.val.length>6}});case"VALID_PWD":return Object(s.a)(Object(s.a)({},e),{},{password:{value:e.password.value,isValid:e.password.value.length>6}});case"VALID_INPUT":return Object(s.a)(Object(s.a)({},e),{},{formIsValid:e.email.value.includes("@")&&e.password.value.length>6});default:return{value:"",isValid:!1}}},V=function(){var e=Object(n.useContext)(j),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useReducer)(L,{email:{value:"",isValid:null},password:{value:"",isValid:null},formIsValid:!1}),i=Object(o.a)(c,2),l=i[0],s=i[1];Object(n.useEffect)((function(){var e=setTimeout((function(){s({type:"VALID_INPUT"})}),500);return function(){clearTimeout(e)}}),[l.email.isValid,l.password.isValid]),Object(n.useEffect)((function(){t.current.focus()}),[]);return Object(r.jsx)(O,{className:g.a.login,children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),l.email.isValid&&l.password.isValid?e.onLogin(l.email.value,l.password.value):l.email.isValid?a.current.focus():t.current.focus()},children:[Object(r.jsx)(I,{ref:t,isValid:l.email.isValid,For:"email",type:"email",title:"Email",value:l.email.value,changeHandler:function(e){s({type:"EMAIL_INPUT",payload:{val:e.target.value}})},validateHandler:function(){s({type:"VALID_EMAIL"})}}),Object(r.jsx)(I,{ref:a,isValid:l.password.isValid,For:"password",type:"password",title:"Password",value:l.password.value,changeHandler:function(e){s({type:"PWD_INPUT",payload:{val:e.target.value}})},validateHandler:function(){s({type:"VALID_PWD"})}}),Object(r.jsx)("div",{className:g.a.actions,children:Object(r.jsx)(h,{type:"submit",className:g.a.btn,children:"Login"})})]})})},y=a(10),w=a.n(y),N=function(){var e=Object(n.useContext)(j);return Object(r.jsxs)(O,{className:w.a.home,children:[Object(r.jsx)("h1",{children:"Welcome back!"}),Object(r.jsx)(h,{onClick:e.onLogout,children:"Logout"})]})},P=a(11),A=a.n(P),C=function(){var e=Object(n.useContext)(j);return Object(r.jsx)("nav",{className:A.a.nav,children:Object(r.jsxs)("ul",{children:[e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},D=a(12),E=a.n(D),T=function(e){return Object(r.jsxs)("header",{className:E.a["main-header"],children:[Object(r.jsx)("h1",{children:"A Typical Page"}),Object(r.jsx)(C,{})]})};var H=function(){var e=Object(n.useContext)(j);return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(T,{}),Object(r.jsxs)("main",{children:[!e.isLoggedIn&&Object(r.jsx)(V,{}),e.isLoggedIn&&Object(r.jsx)(N,{})]})]})};l.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(d,{children:Object(r.jsx)(H,{})}))}],[[23,1,2]]]);
//# sourceMappingURL=main.c00eb806.chunk.js.map