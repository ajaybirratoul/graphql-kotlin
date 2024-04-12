"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6790],{74660:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);const o={id:"graphql-server",title:"GraphQLServer"},i=void 0,a={id:"server/graphql-server",title:"GraphQLServer",description:"graphql-kotlin-server provides common code and basic interfaces to setup a GraphQL server in any framework.",source:"@site/versioned_docs/version-7.x.x/server/graphql-server.md",sourceDirName:"server",slug:"/server/graphql-server",permalink:"/graphql-kotlin/docs/server/graphql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/server/graphql-server.md",tags:[],version:"7.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1712947896,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{id:"graphql-server",title:"GraphQLServer"},sidebar:"docs",previous:{title:"Federation Tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing"},next:{title:"GraphQLRequestParser",permalink:"/graphql-kotlin/docs/server/graphql-request-parser"}},c={},l=[{value:"<code>GraphQLServer</code>",id:"graphqlserver",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"graphql-kotlin-server"})," provides common code and basic interfaces to setup a GraphQL server in any framework."]}),"\n",(0,n.jsx)(r.p,{children:"The official reference implementations are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/graphql-kotlin/docs/server/spring-server/spring-overview",children:"graphql-kotlin-spring-server"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"We recommend using one of the implementations as the common code has very little logic but you can still use the common\npackage to create implementation for other libraries (Ktor, Spark, etc)."}),"\n",(0,n.jsxs)(r.p,{children:["There are demos of how to use these server libraries in the ",(0,n.jsx)(r.code,{children:"/examples"})," folder of the repo."]}),"\n",(0,n.jsx)(r.h2,{id:"graphqlserver",children:(0,n.jsx)(r.code,{children:"GraphQLServer"})}),"\n",(0,n.jsxs)(r.p,{children:["The top level object in the common package is ",(0,n.jsx)(r.code,{children:"GraphQLServer<T>"}),".\nThis class is open for extensions and requires that you specify the type of the http requests you will be handling."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["For ",(0,n.jsx)(r.a,{href:"https://spring.io/reactive",children:"Spring Reactive"})," we would define a ",(0,n.jsx)(r.code,{children:"GraphQLServer<ServerRequest>"})]}),"\n",(0,n.jsxs)(r.li,{children:["For ",(0,n.jsx)(r.a,{href:"https://ktor.io/",children:"Ktor"})," we would define a ",(0,n.jsx)(r.code,{children:"GraphQLServer<ApplicationRequest>"})]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"In its simplest form, a GraphQL server has the following responsibilties:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Parse the GraphQL request info from the HTTP request"}),"\n",(0,n.jsxs)(r.li,{children:["Create a ",(0,n.jsx)(r.code,{children:"GraphQLContext"})," object from the HTTP request to be used during execution"]}),"\n",(0,n.jsxs)(r.li,{children:["Send the request and the context to the GraphQL schema to execute and get a response (may contain ",(0,n.jsx)(r.code,{children:"data"})," or ",(0,n.jsx)(r.code,{children:"errors"}),")"]}),"\n",(0,n.jsx)(r.li,{children:"Send the reponse back to the client over HTTP"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Most of the logic in a GraphQL server that is specific to your application is already in the schema, so if we have interfaces for all these\ncommon functions, we can abstract away the library specific features."}),"\n",(0,n.jsxs)(r.p,{children:["The one method we don't have an interface for is sending back the response to the client. Once you get the response back from ",(0,n.jsx)(r.code,{children:"GraphQLServer"}),",\nwe leave the rest up to your application to call it's server specific methods to encode and send the response."]})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);