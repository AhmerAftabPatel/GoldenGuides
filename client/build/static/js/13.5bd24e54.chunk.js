(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{205:function(e,a,t){e.exports=t.p+"static/media/Default.2aee7378.png"},213:function(e,a,t){"use strict";t.r(a);var c=t(80),n=t(81),r=t(83),s=t(82),l=t(0),i=t.n(l),o=t(112),m=t(205),u=t.n(m),d=t(18),h=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={users:[]},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(o.c)().then((function(a){e.setState({users:a})})).catch((function(e){return console.log(e.response.data.error)}))}},{key:"render",value:function(){var e=this.state.users;return i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"mt-5 mb-5"},"Users"),i.a.createElement("div",{className:"row"},e.map((function(e,a){return i.a.createElement("div",{key:a,className:"col-md-3"},i.a.createElement("div",{className:"card testimonial-card"},i.a.createElement("div",{className:"card-up indigo lighten-1"}),i.a.createElement("div",{className:"avatar mx-auto white"},i.a.createElement("img",{alt:"avatar",style:{height:"128px"},src:e._id?"/api/user/photo/".concat(e._id):u.a,onError:function(e){e.target.src="".concat(u.a)},className:"rounded-circle"})),i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},e.name),i.a.createElement("hr",null),i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-quote-left"})," Email: ",e.email),i.a.createElement(d.b,{to:"/user/".concat(e._id)},"View Profile"))))}))))}}]),t}(l.Component);a.default=h}}]);
//# sourceMappingURL=13.5bd24e54.chunk.js.map