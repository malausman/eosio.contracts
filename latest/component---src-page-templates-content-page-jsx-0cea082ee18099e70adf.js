(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t,a){"use strict";a.r(t);a(6),a(37),a(265);var n=a(1),o=a.n(n),i=a(41),r=a(266),l=a(267),s=(a(45),a(3)),c=a(77),d=s.a.div.withConfig({displayName:"ProjectInfoBox__InfoContainer",componentId:"rhaih-0"})(["border:1px solid #c5c5c5;padding:0 6px 6px 6px;margin:6px 6px 15px 6px;"]),p=s.a.div.withConfig({displayName:"ProjectInfoBox__Header",componentId:"rhaih-1"})(["color:#111a44;font-weight:600;border-bottom:1px solid #c5c5c5;padding:8px 0;margin-bottom:5px;"]),m=s.a.li.withConfig({displayName:"ProjectInfoBox__InfoListItem",componentId:"rhaih-2"})(["color:#111a44;"]),g=function(e){var t=e.href,a=e.classname,n=void 0===a?"":a,i=e.children;return o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:n},i)},h=function(e){var t=e.orgName,a=e.repoName,n=e.isTagged,i=e.currentVersion;return o.a.createElement(d,null,o.a.createElement(p,null,"Project Information"),o.a.createElement("ol",{style:{padding:"2px 0"}},o.a.createElement(m,null,o.a.createElement(g,{href:"https://github.com/"+t+"/"+a},"On Github ",o.a.createElement(c.d,null))),o.a.createElement(m,null,o.a.createElement(g,{href:n?"https://github.com/"+t+"/"+a+"/releases/tag/"+i:"https://github.com/"+t+"/"+a+"/releases/latest"},"Release Notes ",o.a.createElement(c.d,null))),o.a.createElement(m,null,o.a.createElement(g,{href:"https://github.com/"+t+"/"+a+"/blob/master/CONTRIBUTING.md"},"Contributing ",o.a.createElement(c.d,null))),o.a.createElement(m,null,o.a.createElement(g,{href:"https://github.com/"+t+"/"+a+"/issues"},"Issues ",o.a.createElement(c.d,null)))))},u=a(35),f=a(2),x=a(66),w=a(271),E=a.n(w);var v=s.a.aside.withConfig({displayName:"TableOfContents__TableOfContentsWrapper",componentId:"w98oq4-0"})(["","{position:absolute;right:0;bottom:0;}"],f.a.LAPTOP_MIN),N=s.a.div.withConfig({displayName:"TableOfContents__TableOfContentsContainer",componentId:"w98oq4-1"})(["font-size:12px;color:#737086;overflow:auto;.active{color:#3892e3;background:url(",") no-repeat;background-position:0px 4px;}.menu-caret{width:","px;","{width:","px;}","{max-width:80vw;}&:hover{background:url(",") no-repeat;background-position:0px 4px;}}","{position:fixed;top:","px;padding:30px 0 100px 0;width:","px;max-height:calc(100vh - ","px);&.overlapping{position:absolute;bottom:0;top:auto;}}","{width:","px;margin-left:82px;}","{margin-left:65px;}","{display:none;}.container-label{color:#111a44;opacity:0.5;font-size:12px;line-height:15px;padding-left:9px;margin-bottom:13px;}.link-label{color:#111a44;margin-bottom:7px;margin-left:-2px;position:relative;}.text-middle-align{display:inline-block;vertical-align:middle;}.page-title{color:#111a44;font-weight:600;line-height:22px;font-size:14px !important;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:1px solid #c5c5c5;margin-bottom:6px;","{display:none;}}ul{font-size:12px;color:#111a44;> li{padding-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&:last-of-type{margin-bottom:6px;}> ul{padding-left:10px;}}}a{display:block;padding:2px 11px;border-radius:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;&:hover{color:#3892e3;}}"],E.a,x.a.WIDTH_TABLE_OF_CONTENTS_DESKTOP,f.a.LAPTOP_MIN,x.a.WIDTH_TABLE_OF_CONTENTS_LAPTOP,f.a.TABLET,E.a,f.a.LAPTOP_MIN,x.a.HEIGHT_HEADER_DESKTOP,x.a.WIDTH_TABLE_OF_CONTENTS_LAPTOP,x.a.HEIGHT_HEADER_DESKTOP,f.a.DESKTOP_MIN,x.a.WIDTH_TABLE_OF_CONTENTS_DESKTOP,f.a.HD_ONLY,f.a.TABLET,f.a.TABLET),b=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={scrollingState:""},a.handleScroll=a.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=this;window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleScroll),setTimeout((function(){e.handleScroll()}),500)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleScroll)},i.handleScroll=function(){var e=(document.querySelector(".Header")||{}).offsetHeight||0,t=(this.wrapperElem||{}).offsetHeight||0,a=document.querySelector(".Footer").getBoundingClientRect().top-e-t<0;this.setState({overlapping:a})},i.render=function(){var e=this,t=this.props,a=t.htmlContent,n=t.contentTitle,i=t.slug,r=t.isTagged,l=t.currentVersion,s=t.orgName,d=t.repoName,p=t.frontMatter,m=p.edit_link,g=p.request_changes_link,f=r&&"latest"===l||!r;return o.a.createElement(v,null,o.a.createElement(N,{ref:function(t){return e.wrapperElem=t},className:"TableOfContents"+(this.state.overlapping?" overlapping":"")},m&&f&&o.a.createElement("div",{className:"link-label"},o.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c.c,{className:"text-middle-align"})," ",o.a.createElement("span",{className:"text-middle-align"},"Edit"))),g&&f&&o.a.createElement("div",{className:"link-label"},o.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c.e,{className:"text-middle-align"})," ",o.a.createElement("span",{className:"text-middle-align"},"Request Changes"))),o.a.createElement(h,{orgName:s,repoName:d,isTagged:r,currentVersion:l}),o.a.createElement("div",{className:"container-label"},"On this page:"),n&&o.a.createElement("div",{className:"page-title"},o.a.createElement(u.Link,{id:"ToCHeader",to:i},n)),a?o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}):this.props.componentContent))},n}(n.Component),y=(a(272),a(9),a(26),a(180),a(14),a(100),a(101),a(273)),S=s.a.span.withConfig({displayName:"Breadcrumbs__BreadcrumbLabel",componentId:"djheee-0"})(["text-transform:capitalize;"]),T=s.a.div.withConfig({displayName:"Breadcrumbs__CrumbWrapper",componentId:"djheee-1"})(["display:inline;font-size:15px;","{font-size:14px;}"],f.a.TABLET),_=function(e){var t=y.data,a=t.paths,n=t.sitedata,i=e.location,r=e.slug,l=e.title,s=void 0===l?"CURRENT_PAGE_HEADER":l,c=e.pathData,d=e.isTagged,p=e.currentVersion,m=e.pathKey,g=e.isCollection,h=i.pathname;r.includes("/index")&&"index.md"===c.filename&&(h=h.replace("/index",""));var f=h.endsWith("/")?h:h+"/",x=f.split("/"),w=a.edges.map((function(e){return e.node.path})),E="/undefined"!==n.pathPrefix?n.pathPrefix:null,v=d?m+"/"+p:m;"/"!==v[v.length-1]&&(v+="/");return function(e,t,a){return!e&&t===a}(g,f,v)||("/"!==E||""!==E)&&!d?null:o.a.createElement("div",{style:{marginBottom:"1em"}},x.map((function(e,t){e=function(e){var t="";if(e.length>0){t=e.replace(/-|_/g," ")}return t}(e),0===t&&!E||1===t&&E?e="Home / ":t===x.length-1||0===t&&E?e=null:t===x.length-3?e+=" :: ":t!==x.length-2&&(e+=" / ");var a=t===x.length-1?r:E?x.slice(2,t+1).join("/"):x.slice(1,t+1).join("/");return o.a.createElement(T,{key:t},w.findIndex((function(e){return e===a||e==="/"+a}))>=0||"Home > "===e?o.a.createElement(u.Link,{to:"/"+a+"/",activeStyle:{fontWeight:700}},o.a.createElement(S,{className:t!==x.length-2?"":"embolden"},t!==x.length-2?e:""!==s?s:e)):o.a.createElement(S,null,t!==x.length-2?e:""!==s?s:e))})))},P=s.a.div.withConfig({displayName:"document-page-styled-components__PageTitle",componentId:"sc-12be0g-0"})(["display:flex;justify-content:space-between;align-items:flex-end;margin-top:-4px;padding-bottom:0.2em;h1{font-weight:600;font-size:44px;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.15;}"]);a.d(t,"query",(function(){return O}));var I=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data,t=e.site.pathPrefix,a=e.allMarkdownRemark.nodes,n=e.markdownRemark,s=n.tableOfContents,c=n.html,d=n.frontmatter,p=n.fields,m=p.articleTitle,g=p.contentTitle,h=p.headTagTitle,u=p.isCollection,f=p.isTagged,x=p.organization,w=p.originalKey,E=p.pathData,v=p.repository,N=p.showSearch,y=p.slug,S=p.tagsList,T=p.latestDDVersion,I=p.importedSummary,O=p.hasPrimaryNavigation,C=p.primaryNavData,k=p.currentVersion,L=p.currentDDVersion,D=p.summaryJson,H=null,A=JSON.parse(E),B=JSON.parse(D),z=JSON.parse(S),M=C?JSON.parse(C):[{text:"NONE",path:"EMPTY"}],j=f?z.filter((function(e){return L===e.tag_reduced}))[0]:null;return j&&"v"!==(H=j.tag)[0]&&(H="v"+H),o.a.createElement(r.a,{orgName:x,repoName:v,contentTitle:g,currentVersion:k,hidesVersion:null,showSearch:N,isTagged:f,title:h,summary:B,pathData:A,slugs:a,currentDDVersion:L,latestDDVersion:T,isCollection:u,hasPrimaryNavigation:O,primaryNavData:M,tagsList:S,importedSummary:I,pathKey:w,pathPrefix:t},o.a.createElement(l.a,{orgName:x,repoName:v,currentVersion:k,hidesVersion:null}),o.a.createElement("article",{className:"ContentPage document-page-container"},o.a.createElement(b,{isTagged:f,currentVersion:H,frontMatter:d,orgName:x,repoName:v,htmlContent:s,contentTitle:g,slug:y}),o.a.createElement(i.Location,null,(function(e){var t=e.location;return o.a.createElement("section",null,o.a.createElement(_,{location:t,slug:y,title:g,pathKey:w,pathData:A,currentVersion:k,isTagged:f,repoName:v,importedSummary:I,isCollection:u}),"NULL"!==m&&o.a.createElement(P,{title:g,className:"document-page-title"},o.a.createElement("h1",null,g)),o.a.createElement("div",{className:"document-page-content",dangerouslySetInnerHTML:{__html:c}}))}))))},n}(o.a.Component),O=(t.default=I,"520600201")},271:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgd2lkdGg9IjRweCIgaGVpZ2h0PSI4Ljg5cHgiIHN0eWxlPSItbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCIgdmlld0JveD0iMCAwIDU3NiAxMjgwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzYgMCkgc2NhbGUoLTEgMSkiPjxwYXRoIGQ9Ik01NzYgMTkydjg5NnEwIDI2LTE5IDQ1dC00NSAxOS00NS0xOUwxOSA2ODVRMCA2NjYgMCA2NDB0MTktNDVsNDQ4LTQ0OHExOS0xOSA0NS0xOXQ0NSAxOSAxOSA0NXoiIGZpbGw9IiMzODkyZTMiLz48L2c+PC9zdmc+Cg=="},272:function(e,t,a){"use strict";var n=a(4),o=a(50)(6),i="findIndex",r=!0;i in[]&&Array(1)[i]((function(){r=!1})),n(n.P+n.F*r,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a(102)(i)},273:function(e){e.exports=JSON.parse('{"data":{"paths":{"edges":[{"node":{"id":"SitePage /dev-404-page/","path":"/dev-404-page/"}},{"node":{"id":"SitePage /build-and-deploy","path":"/build-and-deploy"}},{"node":{"id":"SitePage /guides/how-to-buy-ram","path":"/guides/how-to-buy-ram"}},{"node":{"id":"SitePage /guides/how-to-create-issue-and-transfer-a-token","path":"/guides/how-to-create-issue-and-transfer-a-token"}},{"node":{"id":"SitePage /guides/how-to-stake","path":"/guides/how-to-stake"}},{"node":{"id":"SitePage /guides/how-to-sign-a-multisig-transaction-with-eosio.msig","path":"/guides/how-to-sign-a-multisig-transaction-with-eosio.msig"}},{"node":{"id":"SitePage /guides/how-to-vote","path":"/guides/how-to-vote"}},{"node":{"id":"SitePage /action-reference/eosio.bios/index","path":"/action-reference/eosio.bios/index"}},{"node":{"id":"SitePage /action-reference/eosio.bios","path":"/action-reference/eosio.bios"}},{"node":{"id":"SitePage /action-reference/eosio.msig/index","path":"/action-reference/eosio.msig/index"}},{"node":{"id":"SitePage /action-reference/eosio.msig","path":"/action-reference/eosio.msig"}},{"node":{"id":"SitePage /action-reference/eosio.system/exchange_state","path":"/action-reference/eosio.system/exchange_state"}},{"node":{"id":"SitePage /action-reference/eosio.system/native","path":"/action-reference/eosio.system/native"}},{"node":{"id":"SitePage /action-reference/eosio.system/rex.results","path":"/action-reference/eosio.system/rex.results"}},{"node":{"id":"SitePage /action-reference/eosio.wrap/index","path":"/action-reference/eosio.wrap/index"}},{"node":{"id":"SitePage /action-reference/eosio.wrap","path":"/action-reference/eosio.wrap"}},{"node":{"id":"SitePage /action-reference/eosio.token/index","path":"/action-reference/eosio.token/index"}},{"node":{"id":"SitePage /action-reference/eosio.token","path":"/action-reference/eosio.token"}},{"node":{"id":"SitePage /guides/upgrading-the-eosio.system-contract","path":"/guides/upgrading-the-eosio.system-contract"}},{"node":{"id":"SitePage /","path":"/"}},{"node":{"id":"SitePage /action-reference/eosio.system/index","path":"/action-reference/eosio.system/index"}},{"node":{"id":"SitePage /action-reference/eosio.system","path":"/action-reference/eosio.system"}},{"node":{"id":"SitePage /guides/how-to-use-eosio.wrap","path":"/guides/how-to-use-eosio.wrap"}},{"node":{"id":"SitePage /404.html","path":"/404.html"}},{"node":{"id":"SitePage /404","path":"/404"}}]},"sitedata":{"pathPrefix":"/eosio.contracts/latest"}}}')}}]);
//# sourceMappingURL=component---src-page-templates-content-page-jsx-0cea082ee18099e70adf.js.map