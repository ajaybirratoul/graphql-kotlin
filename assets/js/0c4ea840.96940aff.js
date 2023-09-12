"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1780],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||h[d]||s;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92839:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={id:"graphql-request-parser",title:"GraphQLRequestParser"},l=void 0,p={unversionedId:"server/graphql-request-parser",id:"server/graphql-request-parser",title:"GraphQLRequestParser",description:"The GraphQLRequestParser interface is required to parse the library-specific HTTP request object into the common GraphQLServerRequest class.",source:"@site/docs/server/graphql-request-parser.md",sourceDirName:"server",slug:"/server/graphql-request-parser",permalink:"/graphql-kotlin/docs/7.x.x/server/graphql-request-parser",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/graphql-request-parser.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1694541734,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"graphql-request-parser",title:"GraphQLRequestParser"},sidebar:"docs",previous:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/7.x.x/server/graphql-server"},next:{title:"GraphQLContextFactory",permalink:"/graphql-kotlin/docs/7.x.x/server/graphql-context-factory"}},u={},c=[],h={toc:c},d="wrapper";function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)(d,(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLRequestParser")," interface is required to parse the library-specific HTTP request object into the common ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLServerRequest")," class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface GraphQLRequestParser<Request> {\n    suspend fun parseRequest(request: Request): GraphQLServerRequest?\n}\n")),(0,s.kt)("p",null,"While not officially part of the spec, there is a standard format used by most GraphQL clients and servers for ",(0,s.kt)("a",{parentName:"p",href:"https://graphql.org/learn/serving-over-http/"},"serving GraphQL over HTTP"),".\nFollowing the above convention, GraphQL clients should generally use HTTP POST requests with the following body structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": "...",\n  "operationName": "...",\n  "variables": { "myVariable": "someValue" }\n}\n')),(0,s.kt)("p",null,"where"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"query")," is a required field and contains the operation (query, mutation, or subscription) to be executed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"operationName")," is an optional string, only required if multiple operations are specified in the ",(0,s.kt)("inlineCode",{parentName:"li"},"query")," string."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"variables")," is an optional map of JSON objects that are referenced as input arguments in the ",(0,s.kt)("inlineCode",{parentName:"li"},"query")," string")),(0,s.kt)("p",null,"GraphQL Kotlin server supports both single and batch GraphQL requests. Batch requests are represented as a list of individual\nGraphQL requests. When processing batch requests, the same context will be used for processing all requests and the server will\nrespond with a list of GraphQL responses."),(0,s.kt)("p",null,"If the request is not a valid GraphQL format, the interface should return ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," and let the server specific code return a bad request status to the client.\nThis is not the same as a GraphQL error or an exception thrown by the schema.\nThose types of errors should still parse the request and return a valid response with errors set via the ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/graphql-request-handler"},"GraphQLRequestHandler"),"."),(0,s.kt)("p",null,"This interface should only be concerned with parsing the request, not about forwarding info to the context or execution.\nThat is handled by the ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/graphql-context-factory"},"GraphQLContextFactory"),"."))}f.isMDXComponent=!0}}]);