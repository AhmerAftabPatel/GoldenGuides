(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{207:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r(111);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},212:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(i){n=!0,l=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return n}))},241:function(e,t,r){"use strict";r.r(t);var a=r(111),n=r(207),l=r(212),o=r(0),c=r.n(o),i=r(18),s=r(200),u=r(203),m=r(201),d=r(25),p=r.n(d);t.default=function(){var e=Object(o.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),r=t[0],d=t[1],b=r.name,f=r.email,y=r.password,g=r.error,v=r.success,O=function(e){return function(t){d(Object(n.a)(Object(n.a)({},r),{},Object(a.a)({error:!1},e,t.target.value)))}};return c.a.createElement("div",{className:"container",style:{marginTop:"1vh",padding:"5vw"}},c.a.createElement("div",{className:"container w-75 w-sm-100"},c.a.createElement("div",{className:"card cloudy-knoxville-gradient"},c.a.createElement("h4",{className:"card-header text-center"},c.a.createElement("strong",null,"Sign up")),c.a.createElement("div",{className:"alert alert-danger",style:{display:g?"":"none"}},g),c.a.createElement("div",{className:"alert alert-info",style:{display:v?"":"none"}},"New account is created. Please ",c.a.createElement(i.b,{to:"/login"},"Signin")),c.a.createElement("div",{className:"card-body px-lg-5 pt-0"},c.a.createElement(s.a,{onSubmit:function(e){e.preventDefault(),d(Object(n.a)(Object(n.a)({},r),{},{error:!1}));var t={name:b,email:f,password:y};p.a.post("/api/signup",t).then((function(e){d({name:"",email:"",password:"",error:!1,success:!0})})).catch((function(e){d(Object(n.a)(Object(n.a)({},r),{},{error:e.response.data.error,success:!1})),console.log(e.response.data)}))}},c.a.createElement(s.a.Field,null,c.a.createElement("label",null,"Name"),c.a.createElement("input",{type:"text",required:"required",onChange:O("name"),value:b,placeholder:"user name"})),c.a.createElement(s.a.Field,null,c.a.createElement("label",null,"Email"),c.a.createElement("input",{placeholder:"email",type:"email",required:!0,onChange:O("email"),value:f,id:"materialRegisterFormEmail",className:"form-control"})),c.a.createElement(s.a.Field,null,c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",placeholder:"password",autoComplete:"current-password",required:!0,onChange:O("password"),value:y,id:"materialRegisterFormPassword",className:"form-control","aria-describedby":"materialRegisterFormPasswordHelpBlock"})),c.a.createElement(s.a.Field,null,c.a.createElement(u.a,{label:"I agree to become the coolest"})),c.a.createElement(m.a,{type:"submit"},"Submit"))))))}}}]);
//# sourceMappingURL=10.fdf0bb69.chunk.js.map