"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[221],{7911:function(n,A,t){t(2791);var e=t(184);A.Z=function(n){var A=n.data,t=n.ItemComponent,r=n.className;return(0,e.jsx)("ul",{className:r,children:A.map((function(n){return(0,e.jsx)(t,{element:n},n.id)}))})}},7906:function(n,A,t){t.d(A,{Z:function(){return w}});var e,r,o,i,a=t(7689),c=t(1087),s=t(211),u=t(168),f=t(8789),l=f.ZP.li(e||(e=(0,u.Z)(["\n  width: 200px;\n  overflow: hidden;\n  border-radius: 10px;\n  scale: 1\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    scale: 1.05;\n    box-shadow: 0px 0px 19px 3px #f0d24c;\n  }\n  margin-bottom: 10px;\n"]))),p=f.ZP.img(r||(r=(0,u.Z)(["\n  height: 300px;\n  object-fit: cover;\n  object-position: center;\n  margin-bottom: 15px;\n  border-radius: 10px;\n"]))),h=f.ZP.p(o||(o=(0,u.Z)(["\n  width: 200px;\n  overflow: hidden;\n  margin-bottom: 10px;\n  padding-left: 15px;\n"]))),m=f.ZP.div(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-left: 15px;\n  padding-bottom: 10px;\n"]))),d=t(9126),Z=t(184),w=function(n){var A=n.element,t=(0,a.TH)(),e=A.poster_path?"https://image.tmdb.org/t/p/w342".concat(A.poster_path):s;return(0,Z.jsx)(l,{children:(0,Z.jsxs)(c.rU,{to:"/movies/".concat(A.id),state:{from:t},children:[(0,Z.jsx)(p,{src:e,alt:"Poster for ".concat(A.title)}),(0,Z.jsx)(h,{children:A.title}),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(d.kum,{}),(0,Z.jsx)("p",{children:A.vote_average.toFixed(1)})]})]})})}},5798:function(n,A,t){t.r(A),t.d(A,{default:function(){return p}});var e=t(5861),r=t(9439),o=t(4687),i=t.n(o),a=t(2791),c=t(7911),s=t(4952),u=t.p+"static/media/movie.4260f3ef44fe44cde2a6.png",f=t(7906),l=t(184),p=function(){var n=(0,a.useState)([]),A=(0,r.Z)(n,2),t=A[0],o=A[1],p=(0,a.useState)(""),h=(0,r.Z)(p,2),m=h[0],d=h[1],Z=(0,a.useState)(!1),w=(0,r.Z)(Z,2),U=w[0],S=w[1];return(0,a.useEffect)((function(){var n=function(){var n=(0,e.Z)(i().mark((function n(){var A;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,S(!0),n.next=4,(0,s.wr)();case 4:if(0!==(A=n.sent).length){n.next=9;break}throw new Error("There are no movies");case 9:o(A);case 10:n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),d(n.t0.message);case 15:return n.prev=15,S(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsx)(l.Fragment,{children:U?(0,l.jsx)("p",{children:"Loading..."}):m?(0,l.jsx)("img",{src:"".concat(u),alt:"movie"}):(0,l.jsx)(c.Z,{data:t,ItemComponent:f.Z,className:"movie-list"})})}},4952:function(n,A,t){t.d(A,{Bt:function(){return p},jC:function(){return f},on:function(){return u},wr:function(){return s},y:function(){return l}});var e=t(5861),r=t(4687),o=t.n(r),i=(new AbortController).signal,a="https://api.themoviedb.org/3",c="api_key=dab7ec22bbd612f5b2269a078012fc2d",s=function(){var n=(0,e.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/trending/movie/day?language=en-US&").concat(c),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,e.Z)(o().mark((function n(A){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/search/movie?query=").concat(A,"&").concat(c),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(A){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(A,"?language=en-US&").concat(c),{signal:i}).then((function(n){return n.json()})).then((function(n){return n}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(A){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(A,"/credits?language=en-US&").concat(c),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.cast}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(A){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(a,"/movie/").concat(A,"/reviews?language=en-US&").concat(c),{signal:i}).then((function(n){return n.json()})).then((function(n){return n.results}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(A){return n.apply(this,arguments)}}()},211:function(n){n.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=221.1b03158b.chunk.js.map