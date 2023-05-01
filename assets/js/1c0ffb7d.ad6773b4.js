"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4998],{92524:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=(a(95657),["components"]),o={id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},p=void 0,s={unversionedId:"getting-started",id:"version-3.x.x/getting-started",title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that aim to simplify running GraphQL in Kotlin",source:"@site/versioned_docs/version-3.x.x/getting-started.md",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/3.x.x/",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/getting-started.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1682983698,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{id:"getting-started",title:"Getting Started",original_id:"getting-started",slug:"/"},sidebar:"version-3.x.x/docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/3.x.x/examples"}},d={},h=[{value:"Modules",id:"modules",level:2},{value:"Installation",id:"installation",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Generating a Schema",id:"generating-a-schema",level:2},{value:"Apollo Federation",id:"apollo-federation",level:3},{value:"Running a Server",id:"running-a-server",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Blogs and Videos",id:"blogs-and-videos",level:2}],g={toc:h},c="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(c,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that aim to simplify running GraphQL in Kotlin"),(0,l.kt)("h2",{id:"modules"},"Modules"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/examples"},"examples"),"\n\u2014 Example apps that use graphql-kotlin libraries to test and demonstrate usages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-client"},"graphql-kotlin-client")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-client"},"Javadoc"),")\n\u2014 Lightweight GraphQL Kotlin HTTP client"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-schema-generator"},"graphql-kotlin-schema-generator")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-schema-generator"},"Javadoc"),")\n\u2014 Code only GraphQL schema generation for Kotlin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-federation"},"graphql-kotlin-federation")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-federation"},"Javadoc"),")\n\u2014 Schema generator extension to build federated GraphQL schemas"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-spring-server"},"graphql-kotlin-spring-server")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-spring-server"},"Javadoc"),")\n\u2014 Spring Boot auto-configuration library to create GraphQL server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/graphql-kotlin-types"},"graphql-kotlin-types")," (",(0,l.kt)("a",{parentName:"li",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-types"},"Javadoc"),")\n\u2014 Core types used by both client and server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/3.x.x/plugins"},"plugins"),"\n\u2014 GraphQL Kotlin Gradle and Maven plugins")),(0,l.kt)("p",null,"If you encounter any problems using this library please open up a new\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues"},"Issue")),(0,l.kt)("p",null,"Additional resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Using a JVM dependency manager, link any ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project. You can see the latest\nversion and other examples in ",(0,l.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/com.expediagroup/graphql-kotlin-spring-server"},"Sonatype Central\nRepository")),(0,l.kt)("h3",{id:"maven"},"Maven"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-spring-server</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),(0,l.kt)("h3",{id:"gradle"},"Gradle"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n\n')),(0,l.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,l.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/federated/apollo-federation"},"Apollo Federation"),"."),(0,l.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-server")," is a combination of the schema generator, fedeation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/spring-server/spring-overview"},"Spring Server Overview"),"."),(0,l.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/client/client-overview"},"Client Overview"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/examples"},"example docs")," for more info."),(0,l.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,l.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"},"Blogs and Videos")," page."))}m.isMDXComponent=!0}}]);