(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{331:function(t,e,r){var content=r(333);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("af5f9648",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";var n=r(331);r.n(n).a},333:function(t,e,r){(e=r(73)(!1)).push([t.i,".txt{white-space:pre-wrap}",""]),t.exports=e},335:function(t,e,r){"use strict";r.r(e);r(72);var n=r(29),o={data:function(){return{title:"",body:"",created_at:"",user:""}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.params,t.error,!(r=t.payload)){e.next=3;break}return e.abrupt("return",{title:r.title,body:r.body,created_at:r.created_at,user:r.user});case 3:case"end":return e.stop()}}),e)})))()}},c=(r(332),r(68)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("a",{attrs:{href:"https://utautattaro.github.io/ghblog/"}},[t._v("< back to top")]),t._v(" "),r("b-card",{staticClass:"my-4",attrs:{title:t.title,"sub-title":new Date(t.created_at).toLocaleString()}},[r("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.$md.render(t.body))}}),t._v(" "),r("span",{staticStyle:{position:"absolute",top:"5px",right:"5px"}},[t._v("\n          "+t._s(t.user.login)+"\n          "),r("b-avatar",{attrs:{href:t.user.html_url,target:"_blank",src:t.user.avatar_url}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);