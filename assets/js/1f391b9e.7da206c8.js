"use strict";(self.webpackChunkcookiebook=self.webpackChunkcookiebook||[]).push([[85],{7979:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(7294),l=n(6010),i=n(3938),c=n(3905),s=n(6845),o=n(7588),r=n(2915),m="mdxPageWrapper_3qD3";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,v=n.title,u=n.description,f=n.wrapperClassName,N=n.hide_table_of_contents,k=d.permalink;return t.createElement(i.Z,{title:v,description:u,permalink:k,wrapperClassName:null!=f?f:r.kM.wrapper.mdxPages,pageClassName:r.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",m)},t.createElement("div",{className:(0,l.Z)("col",!N&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(a,null))),!N&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(o.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},7588:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(7462),l=n(3366),i=n(7294),c=n(6010),s=n(5002),o="tableOfContents_35-E",r=["className"];var m=function(e){var a=e.className,n=(0,l.Z)(e,r);return i.createElement("div",{className:(0,c.Z)(o,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,n){n.d(a,{Z:function(){return r}});var t=n(7462),l=n(3366),i=n(7294),c=n(2915),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function r(e){var a=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,v=e.linkActiveClassName,u=void 0===v?void 0:v,f=e.minHeadingLevel,N=e.maxHeadingLevel,k=(0,l.Z)(e,s),g=(0,c.LU)(),C=null!=f?f:g.tableOfContents.minHeadingLevel,_=null!=N?N:g.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:C,maxHeadingLevel:_}),h=(0,i.useMemo)((function(){if(d&&u)return{linkClassName:d,linkActiveClassName:u,minHeadingLevel:C,maxHeadingLevel:_}}),[d,u,C,_]);return(0,c.Si)(h),i.createElement(o,(0,t.Z)({toc:p,className:r,linkClassName:d},k))}}}]);