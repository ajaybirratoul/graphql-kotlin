"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6140],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=m;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37110:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=t(87462),i=t(63366),s=(t(67294),t(3905)),o=["components"],a={id:"server-subscriptions",title:"Subscriptions"},p=void 0,l={unversionedId:"server/server-subscriptions",id:"server/server-subscriptions",title:"Subscriptions",description:"GraphQL Kotlin provides WebSocket subscription support with the generic Flow based implementation of [GraphQL WS subscription",source:"@site/docs/server/server-subscriptions.md",sourceDirName:"server",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/7.x.x/server/server-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/server-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1694122111,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"server-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/7.x.x/server/graphql-request-handler"},next:{title:"Automatic Persisted Queries (APQ)",permalink:"/graphql-kotlin/docs/7.x.x/server/automatic-persisted-queries/"}},c={},u=[],d={toc:u},m="wrapper";function f(e){var r=e.components,t=(0,i.Z)(e,o);return(0,s.kt)(m,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"GraphQL Kotlin provides ",(0,s.kt)("inlineCode",{parentName:"p"},"WebSocket")," subscription support with the generic ",(0,s.kt)("inlineCode",{parentName:"p"},"Flow")," based implementation of ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md"},(0,s.kt)("inlineCode",{parentName:"a"},"GraphQL WS")," subscription\nprotocol"),". Server implementations should extend generic abstract ",(0,s.kt)("inlineCode",{parentName:"p"},"GraphQLWebSocketServer<Session, Message>")," class and fill server\nspecific details on how to read incoming messages from the WebSocket session as well as how to send responses back to the client."),(0,s.kt)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"See ",(0,s.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",(0,s.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-subscriptions"},"subscriptions")),(0,s.kt)("li",{parentName:"ul"},"See ",(0,s.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-ktor-server")," ",(0,s.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-subscriptions"},"subscriptions"))))}f.isMDXComponent=!0}}]);