"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1298],{2739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=(t(95657),["components"]),l={id:"data-fetching-environment",title:"Data Fetching Environment",original_id:"data-fetching-environment"},c=void 0,d={unversionedId:"schema-generator/execution/data-fetching-environment",id:"version-3.x.x/schema-generator/execution/data-fetching-environment",title:"Data Fetching Environment",description:"Each resolver has access to a DataFetchingEnvironment that provides additional information about the currently executed query including information about what data is requested",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/data-fetching-environment.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/data-fetching-environment",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/data-fetching-environment.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1688768417,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"data-fetching-environment",title:"Data Fetching Environment",original_id:"data-fetching-environment"},sidebar:"version-3.x.x/docs",previous:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/exceptions"},next:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"}},s={},p=[],u={toc:p},h="wrapper";function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each resolver has access to a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," that provides additional information about the currently executed query including information about what data is requested\nas well as details about current execution state. For more details on the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/data-fetching/"},"graphql-java documentation")),(0,r.kt)("p",null,"You can access this info by including the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," as one of the arguments to a Kotlin function. This argument will be automatically populated and injected\nduring the query execution but will not be included in the schema definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nclass Query {\n    fun printEnvironmentInfo(parentField: String): MyObject = MyObject()\n}\n\nclass MyObject {\n  fun printParentField(childField: String, environment: DataFetchingEnvironment): String {\n    val parentField = environment.executionStepInfo.parent.getArgument("parentField")\n    return "The parentField was $parentField and the childField was $childField"\n  }\n}\n\n')),(0,r.kt)("p",null,"This will produce the following schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  printEnvironmentInfo(parentField: String!): MyObject!\n}\n\ntype MyObject {\n  printParentField(childField: String!): String!\n}\n\n")),(0,r.kt)("p",null,"Then the following query would return ",(0,r.kt)("inlineCode",{parentName:"p"},'"The parentField was foo and the childField was bar"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'\n{\n  printEnvironmentInfo(parentField: "foo") {\n    printParentField(childField: "bar")\n  }\n}\n\n')),(0,r.kt)("p",null,"You can also use this to retrieve arguments and query information from higher up the query chain. You can see a working\nexample in the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-example")," module\n","[",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/EnvironmentQuery.kt"},"link"),"]."))}m.isMDXComponent=!0}}]);