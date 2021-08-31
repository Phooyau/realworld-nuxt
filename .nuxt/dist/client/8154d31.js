(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{198:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"h",(function(){return o})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return d})),r.d(e,"a",(function(){return v})),r.d(e,"g",(function(){return f})),r.d(e,"b",(function(){return _}));var n=r(66),c=function(t){return n.b.get("/api/articles",{params:t})},o=function(t){return n.b.get("/api/articles/feed",{params:t})},l=function(t,data){return n.b.post("/api/articles/".concat(t,"/favorite"),data)},m=function(t,data){return n.b.delete("/api/articles/".concat(t,"/favorite"),data)},d=function(t){return n.b.get("/api/articles/".concat(t))},v=function(data){return n.b.post("/api/articles",data)},f=function(t){return n.b.get("/api/articles/".concat(t,"/comments"))},_=function(t,data){return n.b.post("/api/articles/".concat(t,"/comments"),data)}},268:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(36),r(212)),o=r.n(c),l=r(198),m={name:"ArticleMeta",props:{article:{type:Object,required:!0}}},d=r(30),v=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM dd, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.following}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n      Follow "+t._s(t.article.author.username)+" "),r("span",{staticClass:"counter"},[t._v("(10)")])]),t._v("\n    \n  "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited}},[r("i",{staticClass:"ion-heart"}),t._v("\n      Favorite Post "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],1)}),[],!1,null,null,null).exports,f={name:"ArticleComments",props:{article:{type:Object,required:!0}},data:function(){return{comment:{body:""},comments:[]}},created:function(){this.loadComments()},methods:{loadComments:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.g)(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.b)(t.article.slug,{comment:t.comment});case 2:r=e.sent,r.data,t.comment.body="",t.loadComments();case 6:case"end":return e.stop()}}),e)})))()}}},_={name:"ArticleIndex",components:{ArticleMeta:v,ArticleComments:Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",{staticClass:"card comment-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"comment.body"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.article.author.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary"},[t._v("\n        Post Comment\n      ")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v(t._s(e.body))])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[r("img",{staticClass:"comment-author-img",attrs:{src:t.article.author.image}})]),t._v("\n       \n      "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:{name:"profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(t._f("date")(t.article.createdAt,"MMM dd, YYYY")))])],1)])}))],2)}),[],!1,null,null,null).exports},middleware:"authenticated",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,article,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,Object(l.e)(r.slug);case 3:return n=e.sent,data=n.data,article=data.article,c=new o.a,article.body=c.render(article.body),e.abrupt("return",{article:article});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"".concat(this.article.title," - RealWorld"),meta:[{hid:"description",name:"description",content:this.article.description}]}}},C=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("ArticleMeta",{attrs:{article:t.article}})],1)]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12",domProps:{innerHTML:t._s(t.article.body)}})]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("ArticleMeta",{attrs:{article:t.article}})],1),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("ArticleComments",{attrs:{article:t.article}})],1)])])])}),[],!1,null,null,null);e.default=C.exports}}]);