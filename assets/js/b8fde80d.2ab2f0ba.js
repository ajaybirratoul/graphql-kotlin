"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8515],{7206:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>i});var t=n(7462),r=n(3366),s=(n(7294),n(3905)),o=(n(8561),["components"]),u={id:"enums",title:"Enums"},m=void 0,l={unversionedId:"schema-generator/writing-schemas/enums",id:"schema-generator/writing-schemas/enums",title:"Enums",description:"Enums are automatically mapped to GraphQL enum type.",source:"@site/docs/schema-generator/writing-schemas/enums.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/enums",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/enums",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/enums.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1676561815,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{id:"enums",title:"Enums"},sidebar:"docs",previous:{title:"Scalars",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/scalars"},next:{title:"Lists",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/lists"}},p={},i=[{value:"Converting a Java enum to a GraphQL Enum",id:"converting-a-java-enum-to-a-graphql-enum",level:3}],c={toc:i};function h(e){var a=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Enums are automatically mapped to GraphQL enum type."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"enum class MyEnumType {\n  ONE,\n  TWO\n}\n")),(0,s.kt)("p",null,"Above enum will be generated as following GraphQL object"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MyEnumType {\n  ONE\n  TWO\n}\n")),(0,s.kt)("h3",{id:"converting-a-java-enum-to-a-graphql-enum"},"Converting a Java enum to a GraphQL Enum"),(0,s.kt)("p",null,"If you want to use Java enums from another package, but you ",(0,s.kt)("strong",{parentName:"p"},"don't")," want\ninclude everything from that package using ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/generator-config"},(0,s.kt)("inlineCode",{parentName:"a"},"supportedPackages"))," or you want\nto customize the GraphQL type, you can use ",(0,s.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/generator-config"},"schema generator hooks")," to\nassociate the Java enum with a runtime ",(0,s.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/com.graphql-java/graphql-java/latest/index.html"},(0,s.kt)("inlineCode",{parentName:"a"},"GraphQLEnumType")),"."),(0,s.kt)("p",null,"Step 1: Create a GraphQLEnumType using the Java enum values"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"// in some other package\npublic enum Status {\n  APPROVED,\n  DECLINED\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'val statusEnumType = GraphQLEnumType.newEnum()\n    .name("Status")\n    .values(Status.values().map {\n      GraphQLEnumValueDefinition.newEnumValueDefinition()\n          .value(it.name)\n          .build()\n    })\n    .build()\n')),(0,s.kt)("p",null,"Step 2: Add a schema generation hook"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? {\n    return when (type.classifier as? KClass<*>) {\n      Status::class.java -> statusEnumType\n      else -> super.willGenerateGraphQLType(type)\n    }\n  }\n}\n")),(0,s.kt)("p",null,"Step 3. Use your Java enum anywhere in your schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass StatusQuery : Query {\n  fun currentStatus: Status = getCurrentStatus()\n}\n")))}h.isMDXComponent=!0}}]);