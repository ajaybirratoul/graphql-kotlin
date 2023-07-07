"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6140],{37110:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=s(87462),i=s(63366),n=(s(67294),s(3905)),o=(s(95657),["components"]),a={id:"server-subscriptions",title:"Subscriptions"},p=void 0,l={unversionedId:"server/server-subscriptions",id:"server/server-subscriptions",title:"Subscriptions",description:"GraphQL Kotlin provides WebSocket subscription support with the generic Flow based implementation of [GraphQL WS subscription",source:"@site/docs/server/server-subscriptions.md",sourceDirName:"server",slug:"/server/server-subscriptions",permalink:"/graphql-kotlin/docs/7.x.x/server/server-subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/server/server-subscriptions.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1688768417,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"server-subscriptions",title:"Subscriptions"},sidebar:"docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/7.x.x/server/graphql-request-handler"},next:{title:"Automatic Persisted Queries (APQ)",permalink:"/graphql-kotlin/docs/7.x.x/server/automatic-persisted-queries/"}},c={},u=[],d={toc:u},h="wrapper";function m(e){var r=e.components,s=(0,i.Z)(e,o);return(0,n.kt)(h,(0,t.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"GraphQL Kotlin provides ",(0,n.kt)("inlineCode",{parentName:"p"},"WebSocket")," subscription support with the generic ",(0,n.kt)("inlineCode",{parentName:"p"},"Flow")," based implementation of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md"},(0,n.kt)("inlineCode",{parentName:"a"},"GraphQL WS")," subscription\nprotocol"),". Server implementations should extend generic abstract ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLWebSocketServer<Session, Message>")," class and fill server\nspecific details on how to read incoming messages from the WebSocket session as well as how to send responses back to the client."),(0,n.kt)("p",null,"If you are using one of the official server implementations for GraphQL Kotlin, it will have subscription handling setup for you."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-spring-server")," ",(0,n.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-subscriptions"},"subscriptions")),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("inlineCode",{parentName:"li"},"graphql-kotlin-ktor-server")," ",(0,n.kt)("a",{parentName:"li",href:"/graphql-kotlin/docs/7.x.x/server/spring-server/spring-subscriptions"},"subscriptions"))))}m.isMDXComponent=!0}}]);