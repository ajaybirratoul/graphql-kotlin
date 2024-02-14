"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4472],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),l=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,h=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,s=new Array(i);s[0]=m;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var l=2;l<i;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},43455:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),s=["components"],p={id:"spring-subscriptions",title:"Subscriptions"},a=void 0,l={unversionedId:"server/spring-server/spring-subscriptions",id:"server/spring-server/spring-subscriptions",title:"Subscriptions",description:"_To see more details on how to implement subscriptions in your schema, see the schema generator docs on executing subscriptions.",source:"@site/docs/server/spring-server/spring-subscriptions.md",sourceDirName:"server/spring-server",slug:"/server/spring-server/spring-subscriptions",permalink:"/graphql-kotlin/docs/server/spring-server/spring-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/spring-server/spring-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Martin Gilbey",lastUpdatedAt:1707931880,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"spring-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Configuration Properties",permalink:"/graphql-kotlin/docs/server/spring-server/spring-properties"},next:{title:"Ktor Server Overview",permalink:"/graphql-kotlin/docs/server/ktor-server/ktor-overview"}},c={},u=[{value:"Flow Support",id:"flow-support",level:2},{value:"Subscription Protocols",id:"subscription-protocols",level:2},{value:"<code>graphql-transport-ws</code> subprotocol",id:"graphql-transport-ws-subprotocol",level:3},{value:"(deprecated) <code>subscriptions-transport-ws</code> subprotocol",id:"deprecated-subscriptions-transport-ws-subprotocol",level:3},{value:"Subscription Hooks",id:"subscription-hooks",level:2},{value:"<code>onConnect</code> / <code>onConnectWithContext</code>",id:"onconnect--onconnectwithcontext",level:3},{value:"<code>onOperation</code> / <code>onOperationWithContext</code>",id:"onoperation--onoperationwithcontext",level:3},{value:"<code>onOperationComplete</code>",id:"onoperationcomplete",level:3},{value:"<code>onDisconnect</code>",id:"ondisconnect",level:3},{value:"Example",id:"example",level:2}],d={toc:u},m="wrapper";function h(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)(m,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To see more details on how to implement subscriptions in your schema, see the schema generator docs on ",(0,i.kt)("a",{parentName:"em",href:"/graphql-kotlin/docs/schema-generator/execution/subscriptions"},"executing subscriptions"),".\nThis page lists the ",(0,i.kt)("inlineCode",{parentName:"em"},"graphql-kotlin-spring-server")," specific features.")),(0,i.kt)("h2",{id:"flow-support"},"Flow Support"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides automatic support for Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow")," by automatically configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionExecutionStrategy")," beans."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you define your subscriptions using Kotlin ",(0,i.kt)("inlineCode",{parentName:"p"},"Flow"),", make sure to extend ",(0,i.kt)("inlineCode",{parentName:"p"},"FlowSubscriptionSchemaGeneratorHooks")," whenever you need to provide some custom hooks.")),(0,i.kt)("h2",{id:"subscription-protocols"},"Subscription Protocols"),(0,i.kt)("h3",{id:"graphql-transport-ws-subprotocol"},(0,i.kt)("inlineCode",{parentName:"h3"},"graphql-transport-ws")," subprotocol"),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-transport-ws")," subprotocol"),"\nfrom ",(0,i.kt)("a",{parentName:"p",href:"https://the-guild.dev/"},"The Guild"),". This requires that your client send and parse messages in a specific format.\nSee protocol documentation for expected messages."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-transport-ws")," is the default subscription protocol that is enabled by default."),(0,i.kt)("h3",{id:"deprecated-subscriptions-transport-ws-subprotocol"},"(deprecated) ",(0,i.kt)("inlineCode",{parentName:"h3"},"subscriptions-transport-ws")," subprotocol"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"subscriptions-transport-ws")," was deprecated in favor of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-transport-ws")," protocol"),".")),(0,i.kt)("p",null,"We have implemented subscriptions in Spring WebSockets following the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws/blob/master/PROTOCOL.md"},(0,i.kt)("inlineCode",{parentName:"a"},"subscriptions-transport-ws")," subprotocol"),"\ndefined by ",(0,i.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo"),". This requires that your client send and parse messages in a specific\nformat. See protocol documentation for expected messages."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subscription-transport-ws")," is deprecated. In order to use it, you need to explicitly opt-in by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql.subscriptions.protocol=APOLLO_SUBSCRIPTIONS_WS"),"\nconfiguration property. Support for this protocol will be removed in the next major release."),(0,i.kt)("h2",{id:"subscription-hooks"},"Subscription Hooks"),(0,i.kt)("p",null,"In line with the Apollo protocol, we have implemented hooks to execute functions at different stages of the connection lifecycle.\nIf you would like to implement your own subscription hooks, you can provide a primary spring bean for ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloSubscriptionHooks")," that overrides the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-beans"},"default one")," which do not perform any actions."),(0,i.kt)("h3",{id:"onconnect--onconnectwithcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"onConnect")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"onConnectWithContext")),(0,i.kt)("p",null,"Allows validation of connectionParams prior to starting the connection.\nYou can reject the connection by throwing an exception.\nIf you need to forward state to execution, update and return the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/server/spring-server/spring-graphql-context"},"GraphQLContext"),"."),(0,i.kt)("h3",{id:"onoperation--onoperationwithcontext"},(0,i.kt)("inlineCode",{parentName:"h3"},"onOperation")," / ",(0,i.kt)("inlineCode",{parentName:"h3"},"onOperationWithContext")),(0,i.kt)("p",null,"Called when the client executes a GraphQL operation. The context can not be updated here, it is read only."),(0,i.kt)("h3",{id:"onoperationcomplete"},(0,i.kt)("inlineCode",{parentName:"h3"},"onOperationComplete")),(0,i.kt)("p",null,"Called when client's unsubscribes"),(0,i.kt)("h3",{id:"ondisconnect"},(0,i.kt)("inlineCode",{parentName:"h3"},"onDisconnect")),(0,i.kt)("p",null,"Called when the client disconnects"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"You can see an example implementation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscription")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/server/spring-server/src/main/kotlin/com/expediagroup/graphql/examples/server/spring/subscriptions/SimpleSubscription.kt"},"example app"),"."))}h.isMDXComponent=!0}}]);