(this["webpackJsonpyour-progress"]=this["webpackJsonpyour-progress"]||[]).push([[5],{36:function(e,t,n){"use strict";var r=n(38),a=n.n(r),s=n(3);t.a=function(e){var t=e.name,n=e.type,r=e.event;return Object(s.jsx)("div",{className:a.a.main,children:Object(s.jsxs)("button",{className:"btn btn-outline-primary",type:n,onClick:r,children:[Object(s.jsx)("i",{className:e.emo}),t]})})}},37:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(i){a=!0,s=i}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return a}))},38:function(e,t,n){e.exports={main:"Button_main__2cf7G"}},48:function(e,t,n){e.exports={main:"Register_main__3xl0F",border:"Register_border__3K7TJ",title:"Register_title__22Lso",control:"Register_control__cs3SC",button:"Register_button__1AWx-",form:"Register_form__2BrTC",error:"Register_error__1QSWg",message:"Register_message__yeYvu"}},50:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(48),s=n.n(a),c=n(36),o=n(0),i=n(2),u=n(3);t.default=function(){var e=Object(i.e)(),t=Object(o.useState)(""),n=Object(r.a)(t,2),a=n[0],l=n[1],j=Object(o.useState)(!1),b=Object(r.a)(j,2),m=b[0],f=b[1],d=Object(o.useState)(""),O=Object(r.a)(d,2),p=O[0],h=O[1],g=Object(o.useState)(),y=Object(r.a)(g,2),x=y[0],v=y[1],_=Object(o.useState)(!1),S=Object(r.a)(_,2),w=S[0],N=S[1],A=Object(o.useState)(""),C=Object(r.a)(A,2),R=C[0],k=C[1],B=Object(o.useState)(),E=Object(r.a)(B,2),P=E[0],T=E[1],J=Object(o.useState)(!1),q=Object(r.a)(J,2),I=q[0],U=q[1],W=Object(o.useState)(""),$=Object(r.a)(W,2),z=$[0],D=$[1],F=Object(o.useState)(!1),G=Object(r.a)(F,2),K=G[0],L=G[1],M=Object(o.useState)(""),Q=Object(r.a)(M,2),Y=Q[0],Z=Q[1];Object(o.useEffect)((function(){m&&(a.length<8?(f(!1),h("Username must be at least 8 letters")):h(""))}),[a]),Object(o.useEffect)((function(){w&&(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/.test(x)?k(""):(N(!1),k("Password must include 8-16 characters, one capital letter and one number!")))}),[x]),Object(o.useEffect)((function(){I&&(P!==x?(U(!1),D("Please confirm your password again!")):D(""))}),[P]);return Object(u.jsx)("div",{className:s.a.main,children:Object(u.jsxs)("div",{className:s.a.border,children:[Object(u.jsx)("div",{className:s.a.title+" text-white",children:Object(u.jsx)("h1",{children:"Sign on"})}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={username:a,password:x};fetch("https://progress-list.herokuapp.com/user/new-user",{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():e.text().then((function(e){throw new Error(e)}))})).then((function(t){e.push("/")})).catch((function(e){L(!0),Z(e.message)}))},className:s.a.form,children:[Object(u.jsx)("label",{className:s.a.control,children:"Username:"}),Object(u.jsx)("input",{className:s.a.control,type:"text",name:"username",onBlur:function(e){l(e.target.value)},onChange:function(){f(!0)},required:!0}),""!==p?Object(u.jsx)("p",{className:s.a.error,children:p}):"",Object(u.jsx)("label",{className:s.a.control,children:"Password:"}),Object(u.jsx)("input",{className:s.a.control,type:"password",name:"passwd",onBlur:function(e){v(e.target.value)},onChange:function(){N(!0)},required:!0}),""!==R?Object(u.jsx)("p",{className:s.a.error,children:R}):"",Object(u.jsx)("label",{className:s.a.control,children:"Confirm Password:"}),Object(u.jsx)("input",{className:s.a.control,type:"password",name:"confirm_passwd",onBlur:function(e){T(e.target.value)},onChange:function(){U(!0)},required:!0}),""!==z?Object(u.jsx)("p",{className:s.a.error,children:z}):"",Object(u.jsxs)("div",{className:"my-3 d-flex flex-row justify-content-center",children:[Object(u.jsx)(c.a,{name:"Back",event:function(){e.push("/")}}),Object(u.jsx)(c.a,{name:"Sign on",type:"submit"})]})]}),K&&Object(u.jsx)("div",{className:s.a.message,children:Object(u.jsx)("div",{className:"alert alert-danger",children:Y})})]})})}}}]);
//# sourceMappingURL=5.1b73eded.chunk.js.map