"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[5609],{7417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=(a(8561),["components"]),l={id:"scalars",title:"Scalars"},p=void 0,s={unversionedId:"schema-generator/writing-schemas/scalars",id:"version-5.x.x/schema-generator/writing-schemas/scalars",title:"Scalars",description:"Primitive Types",source:"@site/versioned_docs/version-5.x.x/schema-generator/writing-schemas/scalars.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/scalars",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/scalars",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/schema-generator/writing-schemas/scalars.md",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1676561815,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{id:"scalars",title:"Scalars"},sidebar:"version-5.x.x/docs",previous:{title:"Arguments",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/arguments"},next:{title:"Enums",permalink:"/graphql-kotlin/docs/5.x.x/schema-generator/writing-schemas/enums"}},d={},m=[{value:"Primitive Types",id:"primitive-types",level:2},{value:"GraphQL ID",id:"graphql-id",level:2},{value:"Custom Scalars",id:"custom-scalars",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"Extended Scalars",id:"extended-scalars",level:3},{value:"<code>TypeNotSupportedException</code>",id:"typenotsupportedexception",level:3}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"primitive-types"},"Primitive Types"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),' can directly map most Kotlin "primitive" types to standard GraphQL scalar types or\nextended scalar types provided by ',(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kotlin Type"),(0,i.kt)("th",{parentName:"tr",align:null},"GraphQL Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.String")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Int")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Int"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Double")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Float"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kotlin.Float")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Float"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The GraphQL spec uses the term ",(0,i.kt)("inlineCode",{parentName:"p"},"Float")," for signed double\u2010precision fractional values. ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," maps this to a ",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.Double")," for the execution. The generator will map both ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Double")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Float")," to GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"Float")," but we reccomend you use ",(0,i.kt)("inlineCode",{parentName:"p"},"kotlin.Double"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Extended GraphQL scalar types provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," were ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/releases/tag/v15.0"},"deprecated in v15"),".\nThis includes the following types: ",(0,i.kt)("inlineCode",{parentName:"p"},"Long"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Short"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BigInteger"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BigDecimal"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Char"),". If you are currently\nusing these types, they will be removed in future ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," releases."),(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," project if you need continued support.")),(0,i.kt)("h2",{id:"graphql-id"},"GraphQL ID"),(0,i.kt)("p",null,"GraphQL supports the scalar type ",(0,i.kt)("inlineCode",{parentName:"p"},"ID"),", a unique identifier that is not intended to be human readable. IDs are\nserialized as a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". To expose a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"ID")," field, you must use the ",(0,i.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.generator.scalars.ID")," class, which wraps the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," value."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"graphql-java")," supports additional types (",(0,i.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Int"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Long"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID"),") but ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/317"},"due to serialization issues")," we can only directly support Strings. You can still use a type like UUID internally just as long as you convert or parse the value yourself and handle the errors.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class Person(\n    val id: ID,\n    val name: String\n)\n\nfun findPersonById(id: ID) = Person(id, "John Smith")\n\nfun generateRandomId(): ID = ID(UUID.randomUUID().toString())\n')),(0,i.kt)("p",null,"This would produce the following schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n}\n\ntype Query {\n    findPersonById(id: ID!): Person!\n    generateRandomId: ID!\n}\n\ntype Person {\n    id: ID!\n    name: String!\n}\n")),(0,i.kt)("h2",{id:"custom-scalars"},"Custom Scalars"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," uses Kotlin reflections to generate all schema objects. If you want to\napply custom behavior to the objects, you can also define your own custom scalars. Custom scalars have to be explicitly\nadded to the schema through ",(0,i.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks.willGenerateGraphQLType"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),(0,i.kt)("p",null,"Example usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class CustomSchemaGeneratorHooks : SchemaGeneratorHooks {\n\n  override fun willGenerateGraphQLType(type: KType): GraphQLType? = when (type.classifier as? KClass<*>) {\n    UUID::class -> graphqlUUIDType\n    else -> null\n  }\n}\n\nval graphqlUUIDType = GraphQLScalarType.newScalar()\n    .name("UUID")\n    .description("A type representing a formatted java.util.UUID")\n    .coercing(UUIDCoercing)\n    .build()\n\nobject UUIDCoercing : Coercing<UUID, String> {\n    override fun parseValue(input: Any?): UUID = UUID.fromString(serialize(input))\n\n    override fun parseLiteral(input: Any?): UUID? {\n        val uuidString = (input as? StringValue)?.value\n        return UUID.fromString(uuidString)\n    }\n\n    override fun serialize(dataFetcherResult: Any?): String = dataFetcherResult.toString()\n}\n')),(0,i.kt)("p",null,"Once the scalars are registered you can use them anywhere in the schema as regular objects."),(0,i.kt)("h2",{id:"common-issues"},"Common Issues"),(0,i.kt)("h3",{id:"extended-scalars"},"Extended Scalars"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," only supports the primitive scalar types listed above. If you are looking to use common java types as scalars, you need to include the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java-extended-scalars"},"graphql-java-extended-scalars")," library and set up the hooks (see above), or write the logic yourself for how to resolve these custom scalars."),(0,i.kt)("p",null,"The most popular types that require extra configuration are: ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Instant"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ZonedDateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"URL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID")),(0,i.kt)("h3",{id:"typenotsupportedexception"},(0,i.kt)("inlineCode",{parentName:"h3"},"TypeNotSupportedException")),(0,i.kt)("p",null,"If you see the following message ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot convert ** since it is not a valid GraphQL type or outside the supported packages ***"),". This means that you need to update the ",(0,i.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/customizing-schemas/generator-config"},"generator configuration")," to include the package of your type or you did not properly set up the hooks to register the new type."))}c.isMDXComponent=!0}}]);