(self.webpackChunkblog=self.webpackChunkblog||[]).push([[608],{9406:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(9756),a=n(7294),i=n(5444),o=n(9730);function c(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function u(e){var t=e.time,n=t.date,r=t.update;return a.createElement(a.Fragment,null,a.createElement("span",null,a.createElement(o.Z,{path:"/md/today"})," 发表于 ",a.createElement("time",{dateTime:n,itemProp:"dateCreated datePublished"},c(n))),"|",r&&a.createElement("span",null,a.createElement(o.Z,{path:"/md/update"})," 更新于 ",a.createElement("time",{dateTime:r,itemProp:"dateModified"},c(r))),r&&"|")}function s(e){var t=e.info,n=t.date,r=t.update,o=t.timeToRead,c=t.tags;return a.createElement("div",{className:"postInfo-module--post-info--3v5BP"},a.createElement(u,{time:{date:n,update:r}}),a.createElement("span",null,"预计阅读时长: "+o+" 分钟"),"|",a.createElement("span",null,"标签: "," ",null==c?"null":c.map((function(e,t){return a.createElement(a.Fragment,{key:e},a.createElement(i.rU,{to:"/tag/"+e},e),void 0===c[t+1]?"":", ")}))))}function l(e){var t=e.info,n=t.title,i=(0,r.Z)(t,["title"]);return a.createElement("div",null,a.createElement("h2",{className:"postHead-module--title--2tgEC"},n),"{}"!==JSON.stringify(i)&&a.createElement(s,{info:i}))}},5071:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r={};n.r(r),n.d(r,{destroy:function(){return v},elementId:function(){return l},load:function(){return E}});var a={};n.r(a),n.d(a,{disqus:function(){return r}});var i=n(7294),o=n(5444),c=n(2137),u=n(7757),s=n.n(u),l="disqus_thread";function d(e,t){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document,(a=r.createElement("script")).src="//"+t+".disqus.com/embed.js",a.async=!0,a.onerror=n,a.setAttribute("data-timestamp",+new Date),(r.head||r.body).appendChild(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,c.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{document.getElementById(l).innerHTML="Disqus加载失败, 请检查您的地区是否支持Disqus"}catch(t){console.warn(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=this;document.getElementById(l).innerHTML="",window.DISQUS.reset({reload:!0,config:function(){t.page.url=window.location.href,t.page.identifier=window.location.pathname,t.page.title=e}})}function E(e,t){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.disqus_config=function(){this.page.url=window.location.href,this.page.identifier=window.location.pathname,this.page.title=n},void 0!==window.DISQUS){e.next=6;break}window.accessDisqus=!0,d(t,(function(e){p(),window.DISQUS=!1,window.accessDisqus=!1,console.warn(e)})),e.next=10;break;case 6:if(window.accessDisqus){e.next=9;break}return p(),e.abrupt("return",!1);case 9:w(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){}function g(e){var t=(0,o.K2)("4209591199").site.siteMetadata.comment,n=e.postTitle,r=t.type,c=t.id,u=a[r];return void 0===u?"error: no found "+r:((0,i.useEffect)((function(){return u.load(c,n),u.destroy}),[]),i.createElement("div",{id:u.elementId},i.createElement("div",null," loading...")))}},3369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=n(1982),i=n(9406),o=n(5071),c=n(4046);function u(e){if(null===e.data.markdownRemark)return"error: no found about.md";var t=e.data.markdownRemark,n=t.frontmatter,u=t.excerpt,s=t.html;return r.createElement("div",{className:a.k8},r.createElement(c.Z,{title:n.title},r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"og:description",content:u})),r.createElement("div",{className:a.v_},r.createElement(i.Z,{info:n}),r.createElement("div",{className:"post-body",dangerouslySetInnerHTML:{__html:s}})),r.createElement("div",{className:a.UI},r.createElement(o.Z,{postTitle:n.title})))}},1982:function(e,t,n){"use strict";n.d(t,{k8:function(){return r},v_:function(){return a},UI:function(){return i}});var r="post-module--post-card--AAnsR",a="post-module--post--34YDX",i="post-module--comment--2LekW"}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-yoshino-src-pages-about-jsx-23750189ab4147a3f010.js.map