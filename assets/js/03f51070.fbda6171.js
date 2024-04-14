"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2245],{95662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(74848),i=n(28453);const o={id:"subscriptions",title:"Subscriptions"},r=void 0,a={id:"schema-generator/execution/subscriptions",title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/versioned_docs/version-5.x.x/schema-generator/execution/subscriptions.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/execution/subscriptions.md",tags:[],version:"5.x.x",lastUpdatedBy:"mitjade",lastUpdatedAt:1713121966,formattedLastUpdatedAt:"Apr 14, 2024",frontMatter:{id:"subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/execution/introspection"}},c={},l=[{value:"Flow Support",id:"flow-support",level:3},{value:"Subscription Hooks",id:"subscription-hooks",level:3},{value:"<code>didGenerateSubscriptionType</code>",id:"didgeneratesubscriptiontype",level:4},{value:"<code>isValidSubscriptionReturnType</code>",id:"isvalidsubscriptionreturntype",level:4},{value:"Server Implementation",id:"server-implementation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Subscriptions are supported with ",(0,s.jsx)(t.code,{children:"graphql-java"}),". See their documentation first:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.graphql-java.com/documentation/v16/subscriptions/",children:"https://www.graphql-java.com/documentation/v16/subscriptions/"})}),"\n",(0,s.jsxs)(t.p,{children:["To make a function a subscription function you just have to have the return type wrapped in an implementation of a\nreactive-streams ",(0,s.jsx)(t.code,{children:"Publisher<T>"}),". As an example, here is a function that uses Spring WebFlux to return a random number every\nsecond. Since ",(0,s.jsx)(t.code,{children:"Flux"})," is an implementation of ",(0,s.jsx)(t.code,{children:"Publisher"})," this is a valid method."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then in the ",(0,s.jsx)(t.code,{children:"toSchema"})," method you just have to provide a ",(0,s.jsx)(t.code,{children:"List<TopLevelObject>"})," the same way as queries and mutations\nare provided with the ",(0,s.jsx)(t.code,{children:"subscriptions"})," argument."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-kotlin",children:"toSchema(\n    config = schemaConfig,\n    queries = queries.toTopLevelObjects(),\n    mutations = mutations.toTopLevelObjects(),\n    subscriptions = subscriptions.toTopLevelObjects()\n)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"flow-support",children:"Flow Support"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"graphql-kotlin"})," provides support for Kotlin ",(0,s.jsx)(t.code,{children:"Flow"})," through ",(0,s.jsx)(t.code,{children:"FlowSubscriptionExecutionStrategy"}),". Thanks to the Kotlin\ncoroutines interoperability, this strategy also works with any ",(0,s.jsx)(t.code,{children:"Publisher"})," and will automatically convert them to a ",(0,s.jsx)(t.code,{children:"Flow"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"subscription-hooks",children:"Subscription Hooks"}),"\n",(0,s.jsx)(t.h4,{id:"didgeneratesubscriptiontype",children:(0,s.jsx)(t.code,{children:"didGenerateSubscriptionType"})}),"\n",(0,s.jsx)(t.p,{children:"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator hooks are still called so you can add logic for the types and\nvalidation of subscriptions the same as queries and mutations."}),"\n",(0,s.jsx)(t.h4,{id:"isvalidsubscriptionreturntype",children:(0,s.jsx)(t.code,{children:"isValidSubscriptionReturnType"})}),"\n",(0,s.jsxs)(t.p,{children:["This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes can be used as the return type. By default, graphql-java supports ",(0,s.jsx)(t.code,{children:"org.reactivestreams.Publisher"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To effectively use this hook, you should also override the ",(0,s.jsx)(t.code,{children:"willResolveMonad"})," hook, and if you are using ",(0,s.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," you should override the ",(0,s.jsx)(t.code,{children:"GraphQL"})," bean to specify a custom subscription execution strategy."]}),"\n",(0,s.jsx)(t.h3,{id:"server-implementation",children:"Server Implementation"}),"\n",(0,s.jsxs)(t.p,{children:["The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",(0,s.jsx)(t.code,{children:"graphql-kotlin-spring-server"})," provides a default WebSocket based implementation. See more details in the\n",(0,s.jsx)(t.a,{href:"/graphql-kotlin/docs/5.x.x/server/server-subscriptions",children:"server documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);