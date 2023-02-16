"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8436],{6709:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=i(7462),o=i(3366),s=(i(7294),i(3905)),r=(i(8561),["components"]),a={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},l=void 0,p={unversionedId:"schema-generator/execution/subscriptions",id:"version-3.x.x/schema-generator/execution/subscriptions",title:"Subscriptions",description:"Subscriptions are supported with graphql-java. See their documentation first:",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/subscriptions.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/subscriptions.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1676561815,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},sidebar:"version-3.x.x/docs",previous:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/optional-undefined-arguments"},next:{title:"Introspection",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/introspection"}},u={},c=[{value:"Subscription Hooks",id:"subscription-hooks",level:3},{value:"<code>willResolveMonad</code>",id:"willresolvemonad",level:4},{value:"<code>isValidSubscriptionReturnType</code>",id:"isvalidsubscriptionreturntype",level:4},{value:"Server Implementation",id:"server-implementation",level:3}],d={toc:c};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Subscriptions are supported with ",(0,s.kt)("inlineCode",{parentName:"p"},"graphql-java"),". See their documentation first:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/subscriptions/"},"https://www.graphql-java.com/documentation/v16/subscriptions/")),(0,s.kt)("p",null,"To make a function a subscription function update the return type to a type wrapped in an implementation of a\nreactive-streams ",(0,s.kt)("inlineCode",{parentName:"p"},"Publisher<T>"),". As an example here is a function that uses Spring WebFlux to return a random number every\nsecond. Since it is an implementation of ",(0,s.kt)("inlineCode",{parentName:"p"},"Publisher")," this is a valid method."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun counter(): Flux<Int> = Flux.interval(Duration.ofSeconds(1)).map { Random.nextInt() }\n")),(0,s.kt)("h3",{id:"subscription-hooks"},"Subscription Hooks"),(0,s.kt)("h4",{id:"willresolvemonad"},(0,s.kt)("inlineCode",{parentName:"h4"},"willResolveMonad")),(0,s.kt)("p",null,"This hook is called after a new subscription type is generated but before it is added to the schema. The other generator hooks are still called so you can add logic for the types and\nvalidation of subscriptions the same as queries and mutations."),(0,s.kt)("h4",{id:"isvalidsubscriptionreturntype"},(0,s.kt)("inlineCode",{parentName:"h4"},"isValidSubscriptionReturnType")),(0,s.kt)("p",null,"This hook is called when generating the functions for each subscription. It allows for changing the rules of what classes can be used as the return type. By default, graphql-java supports ``."),(0,s.kt)("p",null,"To effectively use this hook, you should also override the ",(0,s.kt)("inlineCode",{parentName:"p"},"hook, and if you are using")," you should override the `` bean to specify a custom subscription execution strategy."),(0,s.kt)("h3",{id:"server-implementation"},"Server Implementation"),(0,s.kt)("p",null,"The server that runs your GraphQL schema will have to support some method for subscriptions, like WebSockets.\n",(0,s.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," provides a default WebSocket based implementation. See more details in the\n",(0,s.kt)("a",{parentName:"p",href:"../../spring-server/subscriptions"},"server documentation"),"."))}h.isMDXComponent=!0}}]);