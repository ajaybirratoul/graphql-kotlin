"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8811],{91769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=(a(95657),["components"]),i={id:"schema",title:"Schema"},c=void 0,l={unversionedId:"schema-generator/writing-schemas/schema",id:"version-6.x.x/schema-generator/writing-schemas/schema",title:"Schema",description:"Schema Object",source:"@site/versioned_docs/version-6.x.x/schema-generator/writing-schemas/schema.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/schema",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/schema",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/writing-schemas/schema.md",tags:[],version:"6.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1688768417,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"schema",title:"Schema"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},next:{title:"Types and Fields",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/fields"}},m={},p=[{value:"Schema Object",id:"schema-object",level:2}],h={toc:p},d="wrapper";function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"schema-object"},"Schema Object"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," automatically generates schema object from the provided list of ",(0,s.kt)("inlineCode",{parentName:"p"},"TopLevelObjects")," representing ",(0,s.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"subscriptions"),"."),(0,s.kt)("p",null,"In order to provide ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/documenting-schema"},"schema description")," or to specify ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/directives"},"schema directives"),", we need to provide ",(0,s.kt)("inlineCode",{parentName:"p"},"TopLevelObject")," reference to a schema class."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Only annotations are processed on the schema object. Generator will throw an exception if schema class contains any properties or functions.")),(0,s.kt)("p",null,"In the example below, we provide custom description and apply ",(0,s.kt)("inlineCode",{parentName:"p"},"@contact")," directive on the schema object."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ContactDirective(\n  name = "My Team Name",\n  url = "https://myteam.slack.com/archives/teams-chat-room-url",\n  description = "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall)."\n)\n@GraphQLDescription("My schema description")\nclass MySchema\n\nclass HelloWorldQuery {\n    fun helloWorld() = "Hello World!"\n}\n\n// generate schema\nval schema = toSchema(\n    config = yourCustomConfig(),\n    queries = listOf(TopLevelObject(HelloWorldQuery())),\n    schemaObject = TopLevelObject(MySchema())\n)\n')),(0,s.kt)("p",null,"Will generate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},'schema @contact(description : "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall).", name : "My Team Name", url : "https://myteam.slack.com/archives/teams-chat-room-url"){\n  query: Query\n}\n\ntype Query {\n    helloWorld: String!\n}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"graphql-java")," currently does not include schema description in the generated SDL (it is available in the introspection results only).\nFixed in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/pull/2856"},"https://github.com/graphql-java/graphql-java/pull/2856"),".")))}u.isMDXComponent=!0}}]);