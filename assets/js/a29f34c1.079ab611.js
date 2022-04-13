"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||s[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"federation-tracing",title:"Federation Tracing"},d=void 0,l={unversionedId:"schema-generator/federation/federation-tracing",id:"schema-generator/federation/federation-tracing",title:"Federation Tracing",description:"graphql-kotlin-federation module relies on apollographql/federation-jvm",source:"@site/docs/schema-generator/federation/federation-tracing.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federation-tracing",permalink:"/graphql-kotlin/docs/schema-generator/federation/federation-tracing",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federation-tracing.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1649821089,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"federation-tracing",title:"Federation Tracing"},sidebar:"docs",previous:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"},next:{title:"GraphQLServer",permalink:"/graphql-kotlin/docs/server/graphql-server"}},c={},s=[{value:"GraphQL Context Map",id:"graphql-context-map",level:3},{value:"<code>FederatedGraphQLContext</code> (Deprecated)",id:"federatedgraphqlcontext-deprecated",level:3}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," module relies on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apollographql/federation-jvm"},"apollographql/federation-jvm"),"\npackage to provide support for Apollo Federation tracing. Tracing is turned on by including ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTracingInstrumentation"),"\nin your GraphQL instance. In order for the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedTracingInstrumentation")," to know whether incoming request should be\ntraced, we need to provide it a ",(0,o.kt)("inlineCode",{parentName:"p"},"apollo-federation-include-trace")," header value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val schema = toFederatedSchema(myFederatedConfig, listOf(TopLevelObject(MyFederatedQuery())))\nval graphQL = GraphQL.newGraphQL(schema)\n    .instrumentation(FederatedTracingInstrumentation())\n    .build()\n")),(0,o.kt)("h3",{id:"graphql-context-map"},"GraphQL Context Map"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Default ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContextFactory")," provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," populates this header information automatically."))),(0,o.kt)("p",null,"Tracing header information can be provided by populating info directly on the GraphQL context map."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val contextMap = mutableMapOf<Any, Any>()\n    .also { map ->\n        request.headers().firstHeader(FEDERATED_TRACING_HEADER_NAME)?.let { headerValue ->\n            map[FEDERATED_TRACING_HEADER_NAME] = headerValue\n        }\n    }\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .graphQLContext(contextMap)\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")),(0,o.kt)("h3",{id:"federatedgraphqlcontext-deprecated"},(0,o.kt)("inlineCode",{parentName:"h3"},"FederatedGraphQLContext")," (Deprecated)"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Support for custom GraphQL context object is deprecated and will be removed in future releases. Please migrate to use\ngeneric GraphQL context map."))),(0,o.kt)("p",null,"To best support tracing, the context must implement a specific method to get the HTTP headers from the request.\nThis is done by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"FederatedGraphQLContext")," interface instead of just the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLContext")," interface\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyFederatedGraphQLContext(private val request: ServerRequest) : FederatedGraphQLContext {\n    override fun getHTTPRequestHeader(caseInsensitiveHeaderName: String): String? =\n        request.headers().firstHeader(caseInsensitiveHeaderName)\n}\n\nval executionInput = ExecutionInput.newExecutionInput()\n    .context(MyFederatedGraphQLContext(httpRequest))\n    .query(queryString)\n    .build()\ngraphql.executeAsync(executionInput)\n")))}u.isMDXComponent=!0}}]);