(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{266:function(t,e,r){"use strict";r.r(e);r(71);var n=r(28),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,"https://api.github.com/repos/utautattaro/ghblog/issues",e.next=4,r.$get("https://api.github.com/repos/utautattaro/ghblog/issues");case 4:return n=e.sent,e.abrupt("return",{posts:n});case 6:case"end":return e.stop()}}),e)})))()}},c=r(67),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("div",{staticClass:"bg-dark text-light text-center p-3"},[r("h1",[t._v("ghblog")]),t._v(" "),r("a",{attrs:{href:"https://github.com/utautattaro/ghblog/issues"}},[t._v("issueを立てると記事ができます")])]),t._v(" "),t._l(t.posts,(function(e,n){return r("b-card",{key:n,staticClass:"my-4",attrs:{title:e.title,"sub-title":new Date(e.created_at).toLocaleString()}},[r("b-card-text",[t._v("\n      "+t._s(e.body.substr(0,50))+t._s(e.body.length>50?"...":"")+"\n    ")]),t._v(" "),r("span",{staticStyle:{position:"absolute",top:"5px",right:"5px"}},[t._v("\n      "+t._s(e.user.login)+"\n      "),r("b-avatar",{attrs:{href:e.user.html_url,target:"_blank",src:e.user.avatar_url}})],1),t._v(" "),r("b-link",{staticClass:"card-link",attrs:{to:"/ghblog/post/"+e.id}},[t._v("read more")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);