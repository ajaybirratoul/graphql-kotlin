"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[866],{69670:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=a(87462),o=a(63366),i=(a(67294),a(3905)),r=(a(95657),["components"]),s={id:"unions",title:"Unions"},l=void 0,c={unversionedId:"schema-generator/writing-schemas/unions",id:"schema-generator/writing-schemas/unions",title:"Unions",description:"GraphQL Kotlin allows for two ways of defining unions in the schema",source:"@site/docs/schema-generator/writing-schemas/unions.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/unions",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/unions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/unions.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"unions",title:"Unions"},sidebar:"docs",previous:{title:"Interfaces",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/interfaces"},next:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/nested-arguments"}},d={},p=[{value:"Marker Interfaces",id:"marker-interfaces",level:2},{value:"<code>@GraphQLUnion</code>",id:"graphqlunion",level:2},{value:"Example Usage",id:"example-usage",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Limitations",id:"limitations",level:3}],h={toc:p},m="wrapper";function u(e){var n=e.components,a=(0,o.Z)(e,r);return(0,i.kt)(m,(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQL Kotlin allows for two ways of defining unions in the schema"),(0,i.kt)("h2",{id:"marker-interfaces"},"Marker Interfaces"),(0,i.kt)("p",null,"Marker interfaces (i.e. interfaces without any common fields or methods) are exposed as GraphQL union types. All the\ntypes that implement the marker interface, and are available on the classpath, will be automatically exposed as\nobjects in the schema."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Unions"},"The GraphQL spec")," does not allow unions to be used as input.\nThis means that while it is valid Kotlin code to have a marker inteface as an argument, upon schema generation, an exception will be thrown.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface BodyPart\n\nclass LeftHand(val field: String): BodyPart\n\nclass RightHand(val property: Int): BodyPart\n\nclass PolymorphicQuery {\n    fun whichHand(whichHand: String): BodyPart = when (whichHand) {\n        "right" -> RightHand(12)\n        else -> LeftHand("hello world")\n    }\n}\n')),(0,i.kt)("p",null,"The above will generate following GraphQL schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"union BodyPart = LeftHand | RightHand\n\ntype LeftHand {\n  field: String!\n}\n\ntype RightHand {\n  property: Int!\n}\n\ntype Query {\n  whichHand(whichHand: String!): BodyPart!\n}\n")),(0,i.kt)("h2",{id:"graphqlunion"},(0,i.kt)("inlineCode",{parentName:"h2"},"@GraphQLUnion")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Instead of this custom annotation, the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/custom-type-reference"},"@GraphQLType")," annotation may be a better option")),(0,i.kt)("p",null,"The downside to marker interface unions is that you can not edit classes included in dependencies to implement new schema unions.\nFor example in an SDL-First world you could have this Kotlin class defined in some library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SharedModel(val foo: String)\n")),(0,i.kt)("p",null,"And then write your schema as the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"# From library\ntype SharedModel {\n  foo: String!\n}\n\n# Defined in our schema\ntype ServiceModel {\n  bar: String!\n}\n\n# Defined in our schema\nunion CustomUnion = SharedModel | ServiceModel\n\ntype Query {\n    getModel: CustomUnion\n}\n")),(0,i.kt)("p",null,"But this is not currently possible in the full code-generation approach. Instead, you will need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@GraphQLUnion")," annotation on your functions or properties."),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Defined in some other library\nclass SharedModel(val foo: String)\n\n// Our code\nclass ServiceModel(val bar: String)\n\nclass Query {\n    @GraphQLUnion(\n        name = "CustomUnion",\n        possibleTypes = [SharedModel::class, ServiceModel::class],\n        description = "Return one or the other model"\n    )\n    fun getModel(): Any = ServiceModel("abc")\n}\n')),(0,i.kt)("p",null,"If directives are needed, this can also be used as a meta-annotation"),(0,i.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Defined in some other library\nclass SharedModel(val foo: String)\n\n// Our code\nclass ServiceModel(val bar: String)\n\n\n@SomeDirective\n@GraphQLUnion(\n    name = "CustomUnion",\n    possibleTypes = [SharedModel::class, ServiceModel::class],\n    description = "Return one or the other model"\n)\nannotation class CustomUnion\n\nclass Query {\n    @CustomUnion\n    fun getModel(): Any = ServiceModel("abc")\n}\n')),(0,i.kt)("p",null,"The annotation requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," of the new union to create and the ",(0,i.kt)("inlineCode",{parentName:"p"},"possibleTypes")," that this union can return.\nHowever since we can not enforce the type checks anymore, you must use ",(0,i.kt)("inlineCode",{parentName:"p"},"Any")," as the return type."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Even when using it as a meta-annotation, it is not always possible to add directives to the union definition\nif the directive annotation cannot apply to an annotation class.\nYou will have to modify the type with ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/generator-config"},"schema generator hooks"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/custom-type-reference"},"@GraphQLType")," annotation can be used as a workaround to this issue."))}u.isMDXComponent=!0}}]);