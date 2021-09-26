(this["webpackJsonpfront-challenge-spacex"]=this["webpackJsonpfront-challenge-spacex"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(10);var a=n(2),c=n.n(a),r=n(9),s=n.n(r),i=n(3),l=(n(15),n(16),n(1)),o=function(e){var t=e.text,n=e.icon,a=e.type,c=e.className,r=e.onClick;return c="button".concat(" ",c||"").concat(" ",!n||t&&0!==t.length?"":"icon"),Object(l.jsxs)("button",{type:a,className:c,onClick:r,children:[n&&n({}),t]})},u=n(6),j=n(5),d=n.n(j),h=(n(19),function(e){var t=e.onSubmit,n=e.onClose,c=Object(a.useState)(10),r=Object(i.a)(c,2),s=r[0],j=r[1];return Object(l.jsxs)("form",{onSubmit:t.bind(null,s),className:"search-form",children:[Object(l.jsx)("h4",{children:"Search last launches"}),Object(l.jsx)(o,{icon:u.a,onClick:n,type:"button",className:"close-form-button danger"}),Object(l.jsxs)("label",{children:["Find",Object(l.jsx)("select",{onChange:function(e){var t=parseInt(e.target.value)||0;j(t)},value:s,className:"search-latest-launches",children:function(){for(var e=[],t=10;t<=100;t+=10)e.push(Object(l.jsx)("option",{value:t,children:t},d()()));return e}()}),"last launches"]}),Object(l.jsx)(o,{text:"Search",type:"submit",className:"search-form-button"})]})}),b=(n(22),function(e){var t=e.onSubmit,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{className:"app-title",children:"Last Launches \ud83d\ude80"}),Object(l.jsx)("p",{className:"app-description",children:"Find out what happened on the latest SpaceX launches. Click on a card to see more"}),r&&Object(l.jsx)(h,{onSubmit:function(e,n){s(!1),n.preventDefault(),t(e)},onClose:function(){s(!1)}}),!r&&Object(l.jsx)(o,{onClick:function(){s(!0)},text:"New search",className:"search-button"})]})}),p=function(e){var t=e.text,n=e.className,a=e.href,c=e.rel,r=e.target,s=e.onClick;return Object(l.jsx)("a",{className:"button "+(n||""),onClick:s,href:a,rel:c,target:r,children:t})},f=(n(23),function(e){var t=e.image,n=e.name,c=e.details,r=e.date,s=e.external_link,j=Object(a.useState)(!1),d=Object(i.a)(j,2),h=d[0],b=d[1],f=function(e){b((function(e){return!e})),e.stopPropagation()};return Object(l.jsxs)("div",{onClick:f,className:h?"card expanded":"card",children:[h&&Object(l.jsx)(o,{icon:u.a,onClick:f,type:"button",className:"close-card-button danger"}),h&&t&&Object(l.jsx)("div",{className:"card-image-container",children:Object(l.jsx)("img",{className:"card-image",src:t,alt:n})}),n&&Object(l.jsx)("h4",{className:"card-name",children:n}),c&&Object(l.jsx)("p",{className:"card-details",children:h?c:Array.from(c).splice(0,120).join("").concat("...")}),r&&Object(l.jsx)("p",{className:"card-date",children:r}),h&&Object(l.jsx)(p,{className:"card-link-button",onClick:function(e){return e.stopPropagation()},text:"See more",href:s,rel:"noreferrer",target:"_blank"})]})}),m=function(e){var t=e.launches.map((function(e){return Object(l.jsx)(f,{image:e.image,name:e.name,details:e.details,date:e.date,external_link:e.ref_link},d()())}));return 0===t.length?Object(l.jsx)("p",{children:"Loading data..."}):Object(l.jsx)("ul",{className:"card-list",children:t})},x=n(4),O=n.n(x),k=n(8);function g(e){return v.apply(this,arguments)}function v(){return(v=Object(k.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spacex.land/graphql/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.data.launchesPast);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(k.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t<=0)){e.next=2;break}return e.abrupt("return",[]);case 2:return n="\n  query {\n  launchesPast(limit: ".concat(t,") {\n    mission_name\n    launch_date_local\n    links {\n      article_link\n      video_link\n      flickr_images\n    }\n    details\n  }\n}\n"),e.prev=3,e.next=6,g(n);case 6:return a=e.sent,e.abrupt("return",S(a));case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function S(e){return e.map((function(e){var t="https://i.imgur.com/6Cv9SoC.jpg",n=e.links.article_link||e.links.video_link,a=e.links.flickr_images.filter((function(e){return e}));return a.length>0&&(t=a.sort((function(){return.5-Math.random()}))[0]),{details:e.details||"no details yet",name:e.mission_name,image:t,ref_link:n,date:new Date(e.launch_date_local).toDateString()}}))}var y=function(){var e=Object(a.useState)(10),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),o=s[0],u=s[1];Object(a.useEffect)((function(){u([]),function(e){return N.apply(this,arguments)}(n).then((function(e){return u(e)}))}),[n]);return Object(l.jsxs)("main",{children:[Object(l.jsx)(b,{onSubmit:function(e){c(e)}}),Object(l.jsx)(m,{launches:o})]})};n(25);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a083deb1.chunk.js.map