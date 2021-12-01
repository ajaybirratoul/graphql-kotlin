"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1681],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9360:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,metadata:()=>p,toc:()=>c,default:()=>u});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={id:"client-overview",title:"Client Overview",original_id:"client-overview"},p={unversionedId:"client/client-overview",id:"version-3.x.x/client/client-overview",isDocsHomePage:!1,title:"Client Overview",description:"graphql-kotlin-client is a lightweight type-safe GraphQL HTTP client. Type-safe data models are generated at build time",source:"@site/versioned_docs/version-3.x.x/client/client-overview.md",sourceDirName:"client",slug:"/client/client-overview",permalink:"/graphql-kotlin/docs/3.x.x/client/client-overview",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/client/client-overview.md",version:"3.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1638394935,formattedLastUpdatedAt:"12/1/2021",frontMatter:{id:"client-overview",title:"Client Overview",original_id:"client-overview"},sidebar:"version-3.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/spring-server/subscriptions"},next:{title:"Client Features",permalink:"/graphql-kotlin/docs/3.x.x/client/client-features"}},c=[{value:"Project Configuration",id:"project-configuration",children:[]},{value:"Generating GraphQL Client",id:"generating-graphql-client",children:[]},{value:"Executing Queries",id:"executing-queries",children:[]}],s={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," is a lightweight type-safe GraphQL HTTP client. Type-safe data models are generated at build time\nby the GraphQL Kotlin ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"},"Gradle")," and\n",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"},"Maven")," plugins."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," is a thin wrapper on top of ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP Client")," and supports fully\nasynchronous non-blocking communication. It is highly customizable and can be configured with any supported Ktor HTTP\n",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/engines.html"},"engine")," and ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/features.html"},"features"),"."),(0,l.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,l.kt)("p",null,"GraphQL Kotlin provides both Gradle and Maven plugins to automatically generate your client code at build time. Once\nyour data classes are generated, you can then execute their underlying GraphQL operations using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client"),"\nruntime dependency."),(0,l.kt)("p",null,"Basic ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," Gradle configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    id("com.expediagroup.graphql") version $latestGraphQLKotlinVersion\n}\n\ndependencies {\n  implementation("com.expediagroup:graphql-kotlin-client:$latestGraphQLKotlinVersion")\n}\n\ngraphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n\n')),(0,l.kt)("p",null,"Equivalent ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," Maven configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'\n<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>graphql-kotlin-maven-client-example</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n\n    <properties>\n        <graphql-kotlin.version>$latestGraphQLKotlinVersion</graphql-kotlin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <id>generate-graphql-client</id>\n                        <goals>\n                            <goal>introspectSchema</goal>\n                            <goal>generateClient</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>${project.build.directory}/schema.graphql</schemaFile>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n\n')),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples/client"},"graphql-kotlin-client-example")," project for complete\nworking examples of Gradle and Maven based projects."),(0,l.kt)("h2",{id:"generating-graphql-client"},"Generating GraphQL Client"),(0,l.kt)("p",null,"By default, GraphQL Kotlin build plugins will attempt to generate GraphQL clients from all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.graphql")," files located under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources"),". Queries are validated against the target GraphQL schema, which can be manually provided, retrieved by\nthe plugins through introspection (as configured in examples above) or downloaded directly from a custom SDL endpoint.\nSee our documentation for more details on supported ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin"},"Gradle tasks"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"},"Maven Mojos"),"."),(0,l.kt)("p",null,"When creating your GraphQL queries make sure to always specify an operation name and name the files accordingly. Each\none of your query files will generate a corresponding Kotlin file with a class matching your operation\nname that will act as a wrapper for all corresponding data classes. For example, given ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," with\n",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery")," as the operation name, GraphQL Kotlin plugins will generate a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.kt")," file\nwith a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery")," class under the configured package."),(0,l.kt)("p",null,"For example, given a simple schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  helloWorld: String\n}\n\n")),(0,l.kt)("p",null,"And a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"\nquery HelloWorldQuery {\n  helloWorld\n}\n\n")),(0,l.kt)("p",null,"Plugins will generate following client code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\npackage com.example.generated\n\nimport com.expediagroup.graphql.client.GraphQLClient\nimport com.expediagroup.graphql.types.GraphQLResponse\nimport kotlin.String\n\nconst val HELLO_WORLD_QUERY: String = "query HelloWorldQuery {\\n    helloWorld\\n}"\n\nclass HelloWorldQuery(\n  private val graphQLClient: GraphQLClient\n) {\n  suspend fun execute(): GraphQLResponse<HelloWorldQuery.Result> =\n      graphQLClient.execute(HELLO_WORLD_QUERY, "HelloWorldQuery", null)\n\n  data class Result(\n    val helloWorld: String\n  )\n}\n\n')),(0,l.kt)("p",null,"Generated classes requires an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," and exposes a single ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," suspendable method that executes\nthe underlying GraphQL operation using the provided client."),(0,l.kt)("h2",{id:"executing-queries"},"Executing Queries"),(0,l.kt)("p",null,"Your auto generated classes accept an instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," which is a thin wrapper around Ktor HTTP client that\nensures proper serialization and deserialization of your GraphQL objects. ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClient")," requires target URL to be\nspecified and defaults to fully asynchronous non-blocking ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/http-client/engines.html#cio"},"Coroutine-based IO engine"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\npackage com.example.client\n\nimport com.expediagroup.graphql.client.GraphQLClient\nimport com.expediagroup.graphql.generated.HelloWorldQuery\nimport kotlinx.coroutines.runBlocking\nimport java.net.URL\n\nfun main() {\n    val client = GraphQLClient(url = URL("http://localhost:8080/graphql"))\n    val helloWorldQuery = HelloWorldQuery(client)\n    runBlocking {\n        val result = helloWorldQuery.execute()\n        println("hello world query result: ${result.data?.helloWorld}")\n    }\n    client.close()\n}\n\n')))}u.isMDXComponent=!0}}]);