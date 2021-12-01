"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[989],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),l=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),h=n,d=m["".concat(a,".").concat(h)]||m[h]||u[h]||i;return t?o.createElement(d,p(p({ref:r},c),{},{components:t})):o.createElement(d,p({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=m;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var l=2;l<i;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9156:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>s,metadata:()=>a,toc:()=>l,default:()=>u});var o=t(7462),n=t(3366),i=(t(7294),t(3905)),p=["components"],s={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},a={unversionedId:"spring-server/subscriptions",id:"version-3.x.x/spring-server/subscriptions",isDocsHomePage:!1,title:"Subscriptions",description:"Schema",source:"@site/versioned_docs/version-3.x.x/spring-server/subscriptions.md",sourceDirName:"spring-server",slug:"/spring-server/subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/spring-server/subscriptions.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1638394935,formattedLastUpdatedAt:"12/1/2021",frontMatter:{id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},sidebar:"version-3.x.x/docs",previous:{title:"Access the HTTP Request-Response",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/http-request-response"},next:{title:"Client Overview",permalink:"/graphql-kotlin/docs/3.x.x/client/client-overview"}},l=[{value:"Schema",id:"schema",children:[]},{value:"<code>graphql-ws</code> subprotocol",id:"graphql-ws-subprotocol",children:[{value:"Overview",id:"overview",children:[]},{value:"Subscription Hooks",id:"subscription-hooks",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:l};function u(e){var r=e.components,t=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"To see more details of how to implement subscriptions in your schema, see ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"},"executing subscriptions"),"."),(0,i.kt)("h2",{id:"graphql-ws-subprotocol"},(0,i.kt)("inlineCode",{parentName:"h2"},"graphql-ws")," subprotocol"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/3.x.x/PROTOCOL.md"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-ws")," subprotocol")," defined by Apollo. This requires that your client send and parse messages in a specific format."),(0,i.kt)("p",null,"You can see more details in the file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionProtocolHandler.kt"},"ApolloSubscriptionProtocolHandler"),"."),(0,i.kt)("p",null,"If you would like to implement your own subscription handler, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"HandlerMapping")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which sets the url for subscriptions to the Apollo subscription handler."),(0,i.kt)("h3",{id:"subscription-hooks"},"Subscription Hooks"),(0,i.kt)("p",null,"In line with the protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"onConnect"),(0,i.kt)("li",{parentName:"ul"},"onOperation"),(0,i.kt)("li",{parentName:"ul"},"onOperationComplete"),(0,i.kt)("li",{parentName:"ul"},"onDisconnect")),(0,i.kt)("p",null,"You can see more details in the file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/execution/ApolloSubscriptionHooks.kt"},"ApolloSubscriptionHooks"),"."),(0,i.kt)("p",null,"If you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-spring-server/src/main/kotlin/com/expediagroup/graphql/spring/SubscriptionAutoConfiguration.kt"},"default one")," which do not perform any actions."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can see an example implementation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/subscriptions/SimpleSubscription.kt"},"example app"),"."))}u.isMDXComponent=!0}}]);