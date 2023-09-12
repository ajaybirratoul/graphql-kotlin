"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[948],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"framework-comparison",title:"GraphQL Frameworks Comparison"},s=void 0,p={unversionedId:"framework-comparison",id:"framework-comparison",title:"GraphQL Frameworks Comparison",description:"GraphQL Java",source:"@site/docs/framework-comparison.md",sourceDirName:".",slug:"/framework-comparison",permalink:"/graphql-kotlin/docs/7.x.x/framework-comparison",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/framework-comparison.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1694541734,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"framework-comparison",title:"GraphQL Frameworks Comparison"},sidebar:"docs",previous:{title:"Examples",permalink:"/graphql-kotlin/docs/7.x.x/examples"},next:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/7.x.x/blogs-and-videos"}},c={},h=[{value:"GraphQL Java",id:"graphql-java",level:2},{value:"GraphQL Java Schema",id:"graphql-java-schema",level:3},{value:"GraphQL Kotlin Schema",id:"graphql-kotlin-schema",level:3},{value:"DGS",id:"dgs",level:2},{value:"Extra Features of DGS",id:"extra-features-of-dgs",level:3},{value:"Extra Features of graphql-kotlin",id:"extra-features-of-graphql-kotlin",level:3}],u={toc:h},m="wrapper";function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"graphql-java"},"GraphQL Java"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphql-java.com/"},"graphql-java")," is one of the most popular JVM based GraphQL implemenations. GraphQL Kotlin is\nbuilt on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"grahpql-java")," as it can be easily extended with additional functionality and this implementation\nhas been used and tested by many users."),(0,o.kt)("h3",{id:"graphql-java-schema"},"GraphQL Java Schema"),(0,o.kt)("p",null,"The most common way to create the schema in ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," is to first manually write the SDL file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n    query: Query\n}\n\ntype Query {\n    bookById(id: ID): Book\n}\n\ntype Book {\n    id: ID!\n    name: String!\n    pageCount: Int!\n    author: Author\n}\n\ntype Author {\n    id: ID!\n    firstName: String!\n    lastName: String!\n}\n")),(0,o.kt)("p",null,"Then write the runtime code that matches this schema to build the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Internal DB class, not schema class\nclass Book(\n    val id: ID,\n    val name: String,\n    val totalPages: Int, // This needs to be renamed to pageCount\n    val authorId: ID // This is not in the schema\n)\n\n// Internal DB class, not schema class\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nclass GraphQLDataFetchers {\n    private val books: List<Book> = booksFromDB()\n    private val authors: List<Author> = authorsFromDB()\n\n    fun getBookByIdDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val bookId: String = dataFetchingEnvironment.getArgument("id")\n        return books.firstOrNull { it.id == bookId }\n    }\n\n    fun getAuthorDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return authors.firstOrNull { it.id == book.authorId }\n    }\n\n    fun getPageCountDataFetcher() = DataFetcher { dataFetchingEnvironment ->\n        val book: Book = dataFetchingEnvironment.getSource() as Book\n        return book.totalPages\n    }\n}\n\nval schemaParser = SchemaParser()\nval schemaGenerator = SchemaGenerator()\nval schemaFile = loadSchema("schema.graphqls")\nval typeRegistry = schemaParser.parse(schemaFile)\nval graphQLDataFetchers = GraphQLDataFetchers()\n\nval runtimeWiring = RuntimeWiring.newRuntimeWiring()\n    .type(\n        newTypeWiring("Query")\n            .dataFetcher("bookById", graphQLDataFetchers.getBookByIdDataFetcher())\n    )\n    .type(\n        newTypeWiring("Book")\n            .dataFetcher("author", graphQLDataFetchers.getAuthorDataFetcher())\n            .dataFetcher("pageCount", graphQLDataFetchers.getPageCountDataFetcher())\n    )\n    .build()\n\n// Combine the types and runtime code together to make a schema\nval graphQLSchema: GraphQLSchema = schemaGenerator.makeExecutableSchema(typeDefinitionRegistry, runtimeWiring)\n')),(0,o.kt)("p",null,"This means that there are two sources of truth for your schema and changes in either have to be reflected in both locations.\nAs your schema scales to hundreds of types and many different resolvers, it can get more difficult to track what code needs to be changed if you want to add a new field,\ndeprecate or delete an existing one, or fix a bug in the resolver code."),(0,o.kt)("p",null,"These errors will hopefully be caught by your build or automated tests, but it is another layer your have to be worried about when creating your API."),(0,o.kt)("h3",{id:"graphql-kotlin-schema"},"GraphQL Kotlin Schema"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," aims to simplify this process by using Kotlin reflection to generate the schema for you.\nAll you need to do is write your schema code in a Kotlin class with public functions or properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'private val books: List<Book> = booksFromDB()\nprivate val authors: List<Author> = authorsFromDB()\n\nclass Query {\n    fun bookById(id: ID): Book? = books.find { it.id == id }\n}\n\nclass Book(\n    val id: ID,\n    val name: String,\n    private val totalPages: Int,\n    private val authorId: ID\n) {\n    fun author(): Author? = authors.find { it.id == authorId }\n    fun pageCount(): Int = totalPages\n}\n\nclass Author(\n    val id: ID,\n    val firstName: String,\n    val lastName: String\n)\n\nval config = SchemaGeneratorConfig(supportedPackages = "com.example")\nval queries = listOf(TopLevelObject(Query()))\nval schema: GraphQLSchema = toSchema(config, queries)\n')),(0,o.kt)("p",null,"This makes changes in code directly reflect to your schema and you can still produce the ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," to print and export an SDL file."),(0,o.kt)("h2",{id:"dgs"},"DGS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://netflix.github.io/dgs/"},"DGS")," is a GraphQL server framework for Spring Boot. It works with both Java and Kotlin.\nDGS is also built on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," and implements many similar features to ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java-kickstart/graphql-spring-boot"},"graphql-java-kickstart/graphql-spring-boot"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Auto-configuration of server routes and request handling"),(0,o.kt)("li",{parentName:"ul"},"Auto-wiring of data fetchers (resolvers) to the ",(0,o.kt)("inlineCode",{parentName:"li"},"GraphQLSchema")),(0,o.kt)("li",{parentName:"ul"},"Apollo Federation support"),(0,o.kt)("li",{parentName:"ul"},"Subscriptions support"),(0,o.kt)("li",{parentName:"ul"},"Client schema-code generation")),(0,o.kt)("p",null,"While both libraries do very similar things, there are some minor differences which may serve different usecases better.\nAs with open source library, you can compare and use the right tool for the job."),(0,o.kt)("h3",{id:"extra-features-of-dgs"},"Extra Features of DGS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support for a SDL-First (Schema-First) approach"),(0,o.kt)("li",{parentName:"ul"},"Ability to autogenerate code stubs from the schema"),(0,o.kt)("li",{parentName:"ul"},"Includes ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/json-path/JsonPath"},"JsonPath")," testing library"),(0,o.kt)("li",{parentName:"ul"},"Build on top of Spring MVC")),(0,o.kt)("h3",{id:"extra-features-of-graphql-kotlin"},"Extra Features of graphql-kotlin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports code-first approach (generates schema from source code - does not require duplicate implementation of data fetchers, schema classes, and SDL files)"),(0,o.kt)("li",{parentName:"ul"},"Abstract server logic can be used in any framework, e.g. Ktor"),(0,o.kt)("li",{parentName:"ul"},"Reference server implementation build on top of ",(0,o.kt)("a",{parentName:"li",href:"https://spring.io/reactive"},"Spring Webflux")," for a reactive server stack"),(0,o.kt)("li",{parentName:"ul"},"Simple nesting of data fetchers"),(0,o.kt)("li",{parentName:"ul"},"Client code generation for Ktor and Spring"),(0,o.kt)("li",{parentName:"ul"},"Client plugin support for both Maven and Gradle")))}d.isMDXComponent=!0}}]);