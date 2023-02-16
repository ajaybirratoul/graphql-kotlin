"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5668],{3818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=(t(8561),["components"]),r={id:"client-features",title:"Client Features",original_id:"client-features"},s=void 0,p={unversionedId:"client/client-features",id:"version-3.x.x/client/client-features",title:"Client Features",description:"Polymorphic Types\xa0Support",source:"@site/versioned_docs/version-3.x.x/client/client-features.md",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/3.x.x/client/client-features",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/client/client-features.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1676561815,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{id:"client-features",title:"Client Features",original_id:"client-features"},sidebar:"version-3.x.x/docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/3.x.x/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/3.x.x/client/client-customization"}},c={},u=[{value:"Polymorphic Types\xa0Support",id:"polymorphic-typessupport",level:2},{value:"Default Enum\xa0Values",id:"default-enumvalues",level:2},{value:"Auto Generated Documentation",id:"auto-generated-documentation",level:2},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"polymorphic-typessupport"},"Polymorphic Types\xa0Support"),(0,o.kt)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nhave to ",(0,o.kt)("strong",{parentName:"p"},"explicitly specify all implementations"),". Polymorphic queries also have to explicitly request ",(0,o.kt)("inlineCode",{parentName:"p"},"__typename"),"\nfield so it can be used to Jackson correctly distinguish between different implementations."),(0,o.kt)("p",null,"Given example schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n\n")),(0,o.kt)("p",null,"We can query interface field as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n\n")),(0,o.kt)("p",null,"Which will generate following data model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename"\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    PolymorphicQuery.FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = PolymorphicQuery.SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  val id: Int\n  val name: String\n}\n\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : PolymorphicQuery.BasicInterface\n\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : PolymorphicQuery.BasicInterface\n\n')),(0,o.kt)("h2",{id:"default-enumvalues"},"Default Enum\xa0Values"),(0,o.kt)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,o.kt)("inlineCode",{parentName:"p"},"@JsonEnumDefaultValue __UNKNOWN_VALUE"),"\nto all generated enums as a catch all safeguard for handling new enum values."),(0,o.kt)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),(0,o.kt)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),(0,o.kt)("p",null,"Given simple GraphQL object definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'\n"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n\n')),(0,o.kt)("p",null,"Will result in a corresponding auto generated data class"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\n/**\n * Some basic description\n */\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n\n")),(0,o.kt)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),(0,o.kt)("p",null,"GraphQL Kotlin Client is a thin wrapper on top of ",(0,o.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client")," which provides\nfully asynchronous communication through Kotlin coroutines. ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," exposes single ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method that will\nsuspend your GraphQL operation until it gets a response back without blocking the underlying thread. In order to fetch\ndata asynchronously and perform some additional computations at the same time you should wrap your client execution in\n",(0,o.kt)("inlineCode",{parentName:"p"},"launch")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," for their results."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."))}m.isMDXComponent=!0}}]);