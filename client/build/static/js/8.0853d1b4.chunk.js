(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{204:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return p})),n.d(e,"c",(function(){return l})),n.d(e,"j",(function(){return d})),n.d(e,"h",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return m})),n.d(e,"k",(function(){return b})),n.d(e,"a",(function(){return g})),n.d(e,"i",(function(){return v}));var r=n(12),a=n.n(r),o=n(29),c=n(25),i=n.n(c),u=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/api/post/new/".concat(e),r,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){return t.data})).catch((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/post").then((function(t){return console.log(t),t.data})).catch((function(t){return console.log(t),t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/post/?page=".concat(e)).then((function(t){return console.log(t),t.data})).catch((function(t){return console.log(t.response),t.response}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(t,e,n){return fetch("/api/post/like",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({userId:t,postId:n})}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},d=function(t,e,n){return fetch("/api/post/unlike",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({userId:t,postId:n})}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},f=function(){var t=Object(o.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/post/".concat(e)).then((function(t){return t.data})).catch((function(t){return t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/post/by/".concat(e),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){return t.data.result})).catch((function(t){return console.error(t)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/api/post/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return r=t.sent,t.abrupt("return",r.json());case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",console.log(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i()("/api/post/".concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},data:r});case 3:if(!(o=t.sent)){t.next=6;break}return t.abrupt("return",o);case 6:t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),console.error(t.t0),!t.t0.response.data){t.next=13;break}return t.abrupt("return",t.t0.response.data);case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n,r){return t.apply(this,arguments)}}(),g=function(t,e,n,r){return fetch("/api/post/comment",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({userId:t,postId:n,comment:r})}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},v=function(t,e,n,r){return fetch("/api/post/uncomment",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({userId:t,postId:n,comment:r})}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))}},210:function(t,e,n){t.exports=n.p+"static/media/Logo.2aee7378.png"},244:function(t,e,n){"use strict";n.r(e);var r=n(111),a=n(80),o=n(81),c=n(83),i=n(82),u=n(0),s=n.n(u),p=n(204),l=n(11),d=n(9),f=n(210),h=n.n(f),m=n(214),b=n.n(m),g=n(222),v=n.n(g),y=function(t){Object(c.a)(n,t);var e=Object(i.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).init=function(e){Object(p.h)(e).then((function(e){e.error?t.setState({redirectToProfile:!0}):t.setState({id:e.postedBy._id,title:e.title,body:e.body,error:""})}))},t.isValid=function(){var e=t.state,n=e.title,r=e.body,a=e.fileSize;return a>1e6?(console.log(a),t.setState({error:"File size should be less than 100kb",loading:!1}),!1):0!==n.length&&0!==r.length||(t.setState({error:"All fields are required",loading:!1}),!1)},t.handleChange=function(e){return function(n){var a;t.setState({error:""});var o="photo"===e?n.target.files[0]:n.target.value,c="photo"===e?n.target.files[0].size:0;t.postData.append(e,o),t.setState((a={},Object(r.a)(a,e,o),Object(r.a)(a,"fileSize",c),a))}},t.clickSubmit=function(e){if(e.preventDefault(),t.setState({loading:!0}),t.isValid()){var n=t.props.match.params.postId,r=Object(l.c)().token;Object(p.k)(n,r,t.postData).then((function(e){t.setState({loading:!1,redirectToProfile:!0,title:"",body:"",photo:"",error:""})})).catch((function(e){t.setState({error:e.error,loading:!1})}))}},t.editPostForm=function(e,n){return s.a.createElement("form",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"text-muted"},"Post Photo"),s.a.createElement("input",{onChange:t.handleChange("photo"),type:"file",accept:"image/*",className:"form-control"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{className:"text-muted"},"Title"),s.a.createElement("input",{onChange:t.handleChange("title"),type:"text",className:"form-control",value:e})),s.a.createElement("div",{className:"md-form"},s.a.createElement(b.a,{onInit:function(t){t.ui.getEditableElement().parentElement.insertBefore(t.ui.view.toolbar.element,t.ui.getEditableElement())},onChange:function(e,n){var r=n.getData();t.postData.append("body",r),t.setState({body:r})},editor:v.a,data:n})),s.a.createElement("button",{onClick:t.clickSubmit,className:"btn btn-raised btn-primary"},"Update Post"))},t.state={id:"",title:"",body:"",redirectToProfile:!1,error:"",fileSize:0,loading:!1},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.postData=new FormData;var t=this.props.match.params.postId;this.init(t)}},{key:"render",value:function(){var t=this.state,e=t.id,n=t.title,r=t.body,a=t.redirectToProfile,o=t.error,c=t.loading;return a?s.a.createElement(d.a,{to:"/user/".concat(Object(l.c)().user._id)}):s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"m-4"},s.a.createElement("div",{className:"alert alert-danger",style:{display:o?"":"none"}},o),c?s.a.createElement("div",{align:"center",className:"ui segment"},s.a.createElement("div",{className:"ui active inverted dimmer"},s.a.createElement("div",{className:"ui text loader"},"Loading")),s.a.createElement("p",null)):"",s.a.createElement("img",{style:{height:"200px",width:"auto"},className:"img-thumbnail",src:"/api/post/photo/".concat(this.props.match.params.postId),onError:function(t){return t.target.src="".concat(h.a)},alt:n}),Object(l.c)().user._id===e&&this.editPostForm(n,r)))}}]),n}(u.Component);e.default=y}}]);
//# sourceMappingURL=8.0853d1b4.chunk.js.map