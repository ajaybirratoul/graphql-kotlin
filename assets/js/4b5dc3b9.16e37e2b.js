"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9970],{55398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=(a(95657),["components"]),l={id:"fetching-data",title:"Fetching Data",original_id:"fetching-data"},s=void 0,c={unversionedId:"schema-generator/execution/fetching-data",id:"version-3.x.x/schema-generator/execution/fetching-data",title:"Fetching Data",description:"Each field exposed through a GraphQL query has a corresponding resolver (aka data fetcher) associated with it. graphql-kotlin-schema-generator generates GraphQL schema",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/fetching-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/fetching-data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/fetching-data.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1688768417,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"fetching-data",title:"Fetching Data",original_id:"fetching-data"},sidebar:"version-3.x.x/docs",previous:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/advanced-features"},next:{title:"Async Models",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models"}},p={},d=[{value:"Customizing Default Behavior",id:"customizing-default-behavior",level:3}],h={toc:d},u="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each field exposed through a GraphQL query has a corresponding resolver (aka data fetcher) associated with it. ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," generates GraphQL schema\ndirectly from the source code automatically mapping all the fields either to use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nto resolve underlying functions or a ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/data-fetching/"},"PropertyDataFetcher")," to read a value from an underlying Kotlin property."),(0,o.kt)("p",null,"While all the fields in a GraphQL query are resolved independently to produce a final result, whether field is backed by a function or a property can have significant\nperformance repercussions. For example, given the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  product(id: Int!): Product\n}\n\ntype Product {\n  id: Int!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review {\n  id: Int!\n  text: String!\n}\n\n")),(0,o.kt)("p",null,"We can define ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class Product(val id: Int, val name: String, reviews: List<Review>)\n\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nclass Product(val id: Int, val name: String) {\n  suspend fun reviews(): List<Reviews> {\n     // logic to fetch reviews here\n  }\n}\n\n")),(0,o.kt)("p",null,"If we expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," field as a property it will always be populated regardless whether or not your client actually asks for it. On the other hand if ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," is backed\nby a function, it will only be called if your client asks for this data. In order to minimize the over-fetching of data from your underlying data sources we recommend to\nexpose all your GraphQL fields that require some additional computations through functions."),(0,o.kt)("h3",{id:"customizing-default-behavior"},"Customizing Default Behavior"),(0,o.kt)("p",null,"You can provide your own custom data fetchers to resolve functions and properties by providing an instance of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/execution/KotlinDataFetcherFactoryProvider.kt#L31"},"KotlinDataFetcherFactoryProvider"),"\nto your ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/SchemaGeneratorConfig.kt"},"SchemaGeneratorConfig"),".\nSee our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/spring"},"spring example app")," for an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomDataFetcherFactoryProvider"),"."))}g.isMDXComponent=!0}}]);