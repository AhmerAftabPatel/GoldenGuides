(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[15],{246:function(e,s,t){"use strict";t.r(s);var a=t(80),r=t(81),n=t(83),o=t(82),c=t(0),m=t.n(c),l=t(11),i=function(e){Object(n.a)(t,e);var s=Object(o.a)(t);function t(e){var r;return Object(a.a)(this,t),(r=s.call(this,e)).resetPassword=function(e){e.preventDefault(),r.setState({message:"",error:""}),Object(l.e)({newPassword:r.state.newPassword,resetPasswordLink:r.props.match.params.resetPasswordToken}).then((function(e){console.log(e.message),r.setState({message:e.message,newPassword:""})})).catch((function(e){e.response.data&&r.setState({error:e.response.data.error})}))},r.state={newPassword:"",message:"",error:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"container w-50"},m.a.createElement("h2",{className:"mt-5 mb-5"},"Reset your Password"),this.state.message&&m.a.createElement("h4",{className:"bg-success"},this.state.message),this.state.error&&m.a.createElement("h4",{className:"bg-warning"},this.state.error),m.a.createElement("form",null,m.a.createElement("div",{className:"form-group mt-5"},m.a.createElement("input",{type:"password",className:"form-control",placeholder:"Your new password",value:this.state.newPassword,name:"newPassword",onChange:function(s){return e.setState({newPassword:s.target.value,message:"",error:""})},autoFocus:!0})),m.a.createElement("button",{onClick:this.resetPassword,className:"btn btn-raised btn-primary"},"Reset Password")))}}]),t}(c.Component);s.default=i}}]);
//# sourceMappingURL=15.a4e14579.chunk.js.map