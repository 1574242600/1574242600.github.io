(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{BKX0:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var a=t("dI71"),r=t("q1tI"),l=t.n(r),i=t("JuFf"),c=function(e){function n(n){return e.call(this,n)||this}Object(a.a)(n,e);var t=n.prototype;return t.renderFriends=function(e){return e.map((function(e,n){var t=e.avatar,a=e.description,r=e.name,c=e.url,s=e.inaccessible;return l.a.createElement("li",{className:i.linkItem,key:n},l.a.createElement("a",{href:c,target:"_blank",rel:"noreferrer"},l.a.createElement("img",{className:"lazyload","data-src":t}),l.a.createElement("h4",null,r),l.a.createElement("p",null,a),!0===s&&l.a.createElement("p",{style:{color:"red"}}," 链接已失效 ")))}))},t.render=function(){var e=this.props.data.dataJson.links;return l.a.createElement("div",{className:i.linkCard},l.a.createElement("h1",null,"朋友们"),l.a.createElement("ul",{className:i.linkList},this.renderFriends(e)))},n}(l.a.Component)},JuFf:function(e,n,t){e.exports={linkCard:"link-module--link-card--3o-fw",linkList:"link-module--link-list--1RoTg",linkItem:"link-module--link-item--f0ZsA"}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-yoshino-src-pages-link-jsx-a4dd1e32164a160c1e28.js.map