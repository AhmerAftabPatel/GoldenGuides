(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{245:function(e,t,a){"use strict";a.r(t);var s=a(80),r=a(81),n=a(83),o=a(82),c=a(0),l=a.n(c),m=a(11),i=function(e){Object(n.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={email:"",message:"",error:""},e.forgotPassword=function(t){t.preventDefault(),e.setState({message:"",error:""}),Object(m.b)(e.state.email).then((function(t){console.log(t.message),e.setState({message:t.message})})).catch((function(t){t.response.data&&e.setState({error:t.response.data.error})}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container w-50"},l.a.createElement("h2",{className:"mt-5 mb-5"},"Ask for Password Reset"),this.state.message&&l.a.createElement("h4",{className:"bg-success"},this.state.message),this.state.error&&l.a.createElement("h4",{className:"bg-warning"},this.state.error),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group mt-5"},l.a.createElement("input",{type:"email",className:"form-control",placeholder:"Your email address",value:this.state.email,name:"email",onChange:function(t){return e.setState({email:t.target.value,message:"",error:""})},autoFocus:!0})),l.a.createElement("button",{onClick:this.forgotPassword,className:"btn btn-raised btn-primary"},"Send Password Rest Link")))}}]),a}(c.Component);t.default=i}}]);
//# sourceMappingURL=14.f05d179e.chunk.js.map