(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12],{205:function(e,a,t){e.exports=t.p+"static/media/Default.2aee7378.png"},242:function(e,a,t){"use strict";t.r(a);var c=t(80),n=t(81),r=t(83),s=t(82),i=t(0),l=t.n(i),o=t(112),m=t(205),u=t.n(m),d=t(18),p=t(11),f=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={users:[]},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=Object(p.c)().user._id,t=Object(p.c)().token;Object(o.a)(a,t).then((function(a){e.setState({users:a})})).catch((function(e){return console.log(e.response.data.error)}))}},{key:"render",value:function(){var e=this.state.users;return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"mt-5 mb-5"},"Find People"),l.a.createElement("div",{className:"card-deck"},e.map((function(e,a){return l.a.createElement("div",{key:a,className:"card testimonial-card"},l.a.createElement("div",{className:"card-up indigo lighten-1"}),l.a.createElement("div",{className:"avatar mx-auto white"},l.a.createElement("img",{alt:"avatar",src:e._id?"/api/user/photo/".concat(e._id):u.a,className:"rounded-circle",onError:function(e){e.target.src="".concat(u.a)}})),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},e.name),l.a.createElement("hr",null),l.a.createElement("p",{className:"text-dark"},l.a.createElement("i",{className:"fas fa-quote-left"})," Email: ",e.email),l.a.createElement(d.b,{to:"/user/".concat(e._id)},"View Profile")))}))))}}]),t}(i.Component);a.default=f}}]);
//# sourceMappingURL=12.f3c9f9eb.chunk.js.map