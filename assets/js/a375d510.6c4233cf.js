"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2679],{8124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=(a(8561),["components"]),l={id:"fetching-data",title:"Fetching Data"},s=void 0,c={unversionedId:"schema-generator/execution/fetching-data",id:"schema-generator/execution/fetching-data",title:"Fetching Data",description:"Each field exposed in the GraphQL schema has a corresponding resolver (aka data fetcher) associated with it. graphql-kotlin-schema-generator generates the GraphQL schema",source:"@site/docs/schema-generator/execution/fetching-data.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/fetching-data",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/fetching-data",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/execution/fetching-data.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677269153,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{id:"fetching-data",title:"Fetching Data"},sidebar:"docs",previous:{title:"Advanced Features",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/advanced-features"},next:{title:"Async Models",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/execution/async-models"}},p={},h=[{value:"Customizing Default Behavior",id:"customizing-default-behavior",level:3}],d={toc:h};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each field exposed in the GraphQL schema has a corresponding resolver (aka data fetcher) associated with it. ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," generates the GraphQL schema\ndirectly from the source code, automatically mapping all the fields either to use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/FunctionDataFetcher.kt"},"FunctionDataFetcher"),"\nto resolve underlying functions or the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/PropertyDataFetcher.kt"},"PropertyDataFetcher"),"\nto read a value from an underlying Kotlin property."),(0,o.kt)("p",null,"While all the fields in a GraphQL schema are resolved independently to produce a final result, whether a field is backed by a function or a property can have significant\nperformance repercussions. For example, given the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  product(id: ID!): Product\n}\n\ntype Product {\n  id: ID!\n  name: String!\n  reviews: [Review!]!\n}\n\ntype Review {\n  id: ID!\n  text: String!\n}\n")),(0,o.kt)("p",null,"We can define ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Product(val id: ID, val name: String, reviews: List<Review>)\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Product(val id: ID, val name: String) {\n  suspend fun reviews(): List<Reviews> {\n     // logic to fetch reviews here\n  }\n}\n")),(0,o.kt)("p",null,"If we expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," field as a property it will always be populated regardless whether or not your client actually asks for it. On the other hand if ",(0,o.kt)("inlineCode",{parentName:"p"},"reviews")," is backed\nby a function, it will only be called if your client asks for this data. In order to minimize the over-fetching of data from your underlying data sources we recommend to\nexpose all your GraphQL fields that require some additional computations through functions."),(0,o.kt)("h3",{id:"customizing-default-behavior"},"Customizing Default Behavior"),(0,o.kt)("p",null,"You can provide your own custom data fetchers to resolve functions and properties by providing an instance of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/KotlinDataFetcherFactoryProvider.kt#L31"},"KotlinDataFetcherFactoryProvider"),"\nto your ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorConfig.kt"},"SchemaGeneratorConfig"),"."),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/server/spring-server"},"spring example app")," for an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomDataFetcherFactoryProvider"),"."))}u.isMDXComponent=!0}}]);