(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"t+K2":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a("zLVn"),r=a("dI71"),i=a("q1tI"),c=a.n(i),o=a("Wbzz"),u=a("b0Ia"),m=a("MDWF"),l=a.n(m),s=a("99J+"),d=a("AYN/"),p=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var a=t.prototype;return a.renderPostItem=function(e){var t=e.id,a=Object(n.a)(e,["id"]);return c.a.createElement("li",{key:t},c.a.createElement(s.a,{data:a}))},a.render=function(){var e=this,t=this.props,a=t.data.allMarkdownRemark.edges,n=t.pageContext;return c.a.createElement("div",{className:l.a.index},c.a.createElement(d.a,{title:"标签: "+n.tag+" 第"+n.humanPageNumber+"页"}),c.a.createElement("div",{className:l.a.tagName},"标签： ",n.tag),c.a.createElement("ol",null,a.map((function(t){return e.renderPostItem(t.node)}))),c.a.createElement(u.a,{total:n.numberOfPages*n.limit,current:n.humanPageNumber,pageSize:n.limit,className:l.a.pagination,onChange:function(e){1!==e?Object(o.c)("/"+n.tag+"/"+e):Object(o.c)("/")}}))},t}(c.a.Component)}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-yoshino-src-templates-tag-jsx-1be50ba77965c320ab6f.js.map