"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7205],{19478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(74848),s=t(28453);const i={id:"ktor-http-request-response",title:"HTTP request and response"},o=void 0,l={id:"server/ktor-server/ktor-http-request-response",title:"HTTP request and response",description:"Ktor HTTP request/response can be intercepted by installing various plugins to your module or by intercepting specific",source:"@site/docs/server/ktor-server/ktor-http-request-response.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-http-request-response",permalink:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-http-request-response",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/ktor-server/ktor-http-request-response.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1712947896,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{id:"ktor-http-request-response",title:"HTTP request and response"},sidebar:"docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-graphql-context"},next:{title:"Ktor Plugin Configuration",permalink:"/graphql-kotlin/docs/8.x.x/server/ktor-server/ktor-configuration"}},a={},p=[{value:"Installing Additional Plugins",id:"installing-additional-plugins",level:2},{value:"Intercepting Pipeline Phases",id:"intercepting-pipeline-phases",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Ktor HTTP request/response can be intercepted by installing various plugins to your module or by intercepting specific\nphases of application call pipeline. By installing ",(0,r.jsx)(n.code,{children:"graphql-kotlin-ktor-server"})," plugin you will configure following pipeline"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n    A(Request) --\x3e B(ContentNegotiation)\n    B --\x3e C(Routing)\n    C --\x3e D(GraphQL)\n    D --\x3e E(Response)"}),"\n",(0,r.jsx)(n.h2,{id:"installing-additional-plugins",children:"Installing Additional Plugins"}),"\n",(0,r.jsxs)(n.p,{children:["You can install additional plugins in your module next to the ",(0,r.jsx)(n.code,{children:"GraphQL"})," module. See ",(0,r.jsx)(n.a,{href:"https://ktor.io/docs/plugins.html",children:"Ktor docs"}),"\nfor details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'fun Application.myModule() {\n    // install additional plugins\n    install(CORS) { ... }\n    install(Authentication) { ... }\n\n    // install graphql plugin\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(TestQuery())\n        }\n    }\n    // install authenticated GraphQL routes\n    install(Routing) {\n        authenticate("auth-basic") {\n            graphQLPostRoute()\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"intercepting-pipeline-phases",children:"Intercepting Pipeline Phases"}),"\n",(0,r.jsxs)(n.p,{children:["You can intercept requests/responses in various phases of application call pipeline by specifying an interceptor. See\n",(0,r.jsx)(n.a,{href:"https://ktor.io/docs/custom-plugins-base-api.html#call-handling",children:"Ktor docs"})," for details."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'fun Application.myModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(TestQuery())\n        }\n    }\n    install(Routing) {\n        graphQLPostRoute()\n    }\n\n    intercept(ApplicationCallPipeline.Monitoring) {\n        call.request.origin.apply {\n            println("Request URL: $scheme://$localHost:$localPort$uri")\n        }\n    }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);