"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},41981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"ktor-http-request-response",title:"HTTP request and response"},s=void 0,p={unversionedId:"server/ktor-server/ktor-http-request-response",id:"server/ktor-server/ktor-http-request-response",title:"HTTP request and response",description:"Ktor HTTP request/response can be intercepted by installing various plugins to your module or by intercepting specific",source:"@site/docs/server/ktor-server/ktor-http-request-response.md",sourceDirName:"server/ktor-server",slug:"/server/ktor-server/ktor-http-request-response",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-http-request-response",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/ktor-server/ktor-http-request-response.md",tags:[],version:"current",lastUpdatedBy:"Martin Gilbey",lastUpdatedAt:1707931880,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"ktor-http-request-response",title:"HTTP request and response"},sidebar:"docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-graphql-context"},next:{title:"Ktor Plugin Configuration",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-configuration"}},c={},u=[{value:"Installing Additional Plugins",id:"installing-additional-plugins",level:2},{value:"Intercepting Pipeline Phases",id:"intercepting-pipeline-phases",level:2}],d={toc:u},g="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ktor HTTP request/response can be intercepted by installing various plugins to your module or by intercepting specific\nphases of application call pipeline. By installing ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-server")," plugin you will configure following pipeline"),(0,o.kt)("mermaid",{value:"flowchart LR\n    A(Request) --\x3e B(ContentNegotiation)\n    B --\x3e C(Routing)\n    C --\x3e D(GraphQL)\n    D --\x3e E(Response)"}),(0,o.kt)("h2",{id:"installing-additional-plugins"},"Installing Additional Plugins"),(0,o.kt)("p",null,"You can install additional plugins in your module next to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQL")," module. See ",(0,o.kt)("a",{parentName:"p",href:"https://ktor.io/docs/plugins.html"},"Ktor docs"),"\nfor details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun Application.myModule() {\n    // install additional plugins\n    install(CORS) { ... }\n    install(Authentication) { ... }\n\n    // install graphql plugin\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(TestQuery())\n        }\n    }\n    // install authenticated GraphQL routes\n    install(Routing) {\n        authenticate("auth-basic") {\n            graphQLPostRoute()\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"intercepting-pipeline-phases"},"Intercepting Pipeline Phases"),(0,o.kt)("p",null,"You can intercept requests/responses in various phases of application call pipeline by specifying an interceptor. See\n",(0,o.kt)("a",{parentName:"p",href:"https://ktor.io/docs/custom-plugins-base-api.html#call-handling"},"Ktor docs")," for details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun Application.myModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(TestQuery())\n        }\n    }\n    install(Routing) {\n        graphQLPostRoute()\n    }\n\n    intercept(ApplicationCallPipeline.Monitoring) {\n        call.request.origin.apply {\n            println("Request URL: $scheme://$localHost:$localPort$uri")\n        }\n    }\n}\n')))}f.isMDXComponent=!0}}]);