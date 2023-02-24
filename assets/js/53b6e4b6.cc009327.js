"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8668],{8773:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>h,toc:()=>l});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=(a(8561),["components"]),s={id:"contextual-data",title:"Contextual Data"},c=void 0,h={unversionedId:"schema-generator/execution/contextual-data",id:"schema-generator/execution/contextual-data",title:"Contextual Data",description:'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL',source:"@site/docs/schema-generator/execution/contextual-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/contextual-data",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/contextual-data",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/contextual-data.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677269153,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{id:"contextual-data",title:"Contextual Data"},sidebar:"docs",previous:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/data-fetching-environment"},next:{title:"Optional Undefined Arguments",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/optional-undefined-arguments"}},p={},l=[{value:"GraphQL Context Map",id:"graphql-context-map",level:2}],u={toc:l};function d(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'All GraphQL servers have a concept of a "context". A GraphQL context contains metadata that is useful to the GraphQL\nserver, but shouldn\'t necessarily be part of the GraphQL schema. A prime example of something that is appropriate\nfor the GraphQL context would be trace headers for an OpenTracing system such as\n',(0,r.kt)("a",{parentName:"p",href:"https://expediadotcom.github.io/haystack"},"Haystack"),". The GraphQL query does not need the information to perform\nits function, but the server needs the information to ensure observability."),(0,r.kt)("p",null,"The contents of the GraphQL context vary across applications and it is up to the GraphQL server developers to decide\nwhat it should contain. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," provides a simple mechanism to build a context per operation with the\n",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/server/graphql-context-factory"},"GraphQLContextFactory"),".\nIf a custom factory is defined, it will then be used to populate GraphQL context based on the incoming request and make\nit available during execution."),(0,r.kt)("h2",{id:"graphql-context-map"},"GraphQL Context Map"),(0,r.kt)("p",null,"In graphql-java v17 a new context map was added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment"),". This is now the way of saving info for execution, and\nyou can access this map through the ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ContextualQuery : Query {\n    fun contextualQuery(\n        dataFetchingEnvironment: DataFetchingEnvironment,\n        value: Int\n    ): String =\n        "The custom value was ${dataFetchingEnvironment.graphQLContext.get("foo")} and the value was $value"\n}\n')))}d.isMDXComponent=!0}}]);