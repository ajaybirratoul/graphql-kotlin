"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=c(r),d=o,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||s;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3978:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={id:"http-request-response",title:"Access the HTTP Request-Response",original_id:"http-request-response"},p={unversionedId:"spring-server/http-request-response",id:"version-3.x.x/spring-server/http-request-response",isDocsHomePage:!1,title:"Access the HTTP Request-Response",description:'GraphQL is strongly typed and any data that is not part of the schema is no longer automatically known by the clients. Relying on this information becomes an "undocumented" part of your API. As a result, by default, GraphQL query resolvers do not have access to the raw HTTP request and response objects.',source:"@site/versioned_docs/version-3.x.x/spring-server/http-request-response.md",sourceDirName:"spring-server",slug:"/spring-server/http-request-response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/http-request-response.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1638394935,formattedLastUpdatedAt:"12/1/2021",frontMatter:{id:"http-request-response",title:"Access the HTTP Request-Response",original_id:"http-request-response"},sidebar:"version-3.x.x/docs",previous:{title:"Generating GraphQL Context",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions"}},c=[{value:"GraphQL Context",id:"graphql-context",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'GraphQL is strongly typed and any data that is not part of the schema is no longer automatically known by the clients. Relying on this information becomes an "undocumented" part of your API. As a result, by default, GraphQL query resolvers do not have access to the raw HTTP request and response objects.'),(0,s.kt)("p",null,"That being said, there are some common use cases (like authorization) that require inspecting HTTP headers."),(0,s.kt)("h2",{id:"graphql-context"},"GraphQL Context"),(0,s.kt)("p",null,"The most common way to access the raw HTTP request and response objects is to process them when creating the GraphQLContext through the Spring bean ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-graphql-context"},"GraphQLContextFactory"),". Using the factory you can then extract the information from the incoming request and store it in the context so it can be accessed from any resolver."))}u.isMDXComponent=!0}}]);