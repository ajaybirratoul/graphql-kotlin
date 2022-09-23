"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1051],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),r=t(86010);const l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),r=t(67294),l=t(86010),i=t(72389),o=t(67392),p=t(7094),s=t(12466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t,i=e.lazy,d=e.block,m=e.defaultValue,g=e.values,h=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.l)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,p.U)(),N=x.tabGroupChoices,w=x.setTabGroupChoices,q=(0,r.useState)(y),C=q[0],Q=q[1],O=[],L=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var G=N[h];null!=G&&G!==C&&k.some((function(e){return e.value===G}))&&Q(G)}var T=function(e){var n=e.currentTarget,t=O.indexOf(n),a=k[t].value;a!==C&&(L(n),Q(a),null!=h&&w(h,String(a)))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;t=null!=(l=O[i])?l:O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:T,onClick:T},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},97520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(65488),o=t(85162),p=["components"],s={id:"client-overview",title:"Client Overview"},u=void 0,c={unversionedId:"client/client-overview",id:"version-4.x.x/client/client-overview",title:"Client Overview",description:"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides Ktor HTTP client",source:"@site/versioned_docs/version-4.x.x/client/client-overview.mdx",sourceDirName:"client",slug:"/client/client-overview",permalink:"/graphql-kotlin/docs/4.x.x/client/client-overview",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/client/client-overview.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1663956126,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{id:"client-overview",title:"Client Overview"},sidebar:"version-4.x.x/docs",previous:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/spring-server/spring-subscriptions"},next:{title:"Client Features",permalink:"/graphql-kotlin/docs/4.x.x/client/client-features"}},d={},m=[{value:"Project Configuration",id:"project-configuration",level:2},{value:"Build Configuration",id:"build-configuration",level:3},{value:"Generating GraphQL Operations",id:"generating-graphql-operations",level:3},{value:"Executing Operations",id:"executing-operations",level:3}],g={toc:m};function h(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin provides a set of lightweight type-safe GraphQL HTTP clients. The library provides ",(0,l.kt)("a",{parentName:"p",href:"https://ktor.io/clients/index.html"},"Ktor HTTP client"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-webclient"},"Spring WebClient"),"\nbased reference implementations as well as allows for custom implementations using other engines, see ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/client/client-customization"},"client customization"),"\ndocumentation for additional details. Type-safe data models are generated at build time by the GraphQL Kotlin ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-tasks"},"Gradle"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-goals"},"Maven")," plugins."),(0,l.kt)("p",null,"Client Features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Supports query and mutation operations"),(0,l.kt)("li",{parentName:"ul"},"Supports batch operations"),(0,l.kt)("li",{parentName:"ul"},"Automatic generation of type-safe Kotlin models supporting ",(0,l.kt)("inlineCode",{parentName:"li"},"kotlinx.serialization")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Jackson")," formats"),(0,l.kt)("li",{parentName:"ul"},"Custom scalar support - defaults to String but can be configured to deserialize to specific types"),(0,l.kt)("li",{parentName:"ul"},"Supports default enum values to gracefully handle new/unknown server values"),(0,l.kt)("li",{parentName:"ul"},"Native support for coroutines"),(0,l.kt)("li",{parentName:"ul"},"Easily configurable Ktor and Spring WebClient based HTTP Clients"),(0,l.kt)("li",{parentName:"ul"},"Documentation generated from the underlying GraphQL schema")),(0,l.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,l.kt)("p",null,"GraphQL Kotlin provides both Gradle and Maven plugins to automatically generate your client code at build time. In order\nto auto-generate the client code, plugins require target GraphQL schema and a list of query files to process."),(0,l.kt)("p",null,"GraphQL schema can be provided as"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"result of introspection query (default)"),(0,l.kt)("li",{parentName:"ul"},"downloaded from an SDL endpoint"),(0,l.kt)("li",{parentName:"ul"},"local file")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/gradle-plugin"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"https://expediagroup.github.io/graphql-kotlin/docs/plugins/maven-plugin"},"Maven"),"\nplugin documentation for additional details."),(0,l.kt)("p",null,"GraphQL Kotlin plugins generated classes are simple POJOs that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," and optionally accept variables\n(only if underlying operation uses variables) as a constructor parameter. Generated classes can then be passed directly\nto a GraphQL client to execute either a single or a batch request."),(0,l.kt)("p",null,"Example below configures the project to use introspection query to obtain the schema and uses Spring WebClient based HTTP client."),(0,l.kt)("h3",{id:"build-configuration"},"Build Configuration"),(0,l.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("p",null,"Basic ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," Gradle configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    id("com.expediagroup.graphql") version $latestGraphQLKotlinVersion\n}\n\ndependencies {\n  implementation("com.expediagroup:graphql-kotlin-spring-client:$latestGraphQLKotlinVersion")\n}\n\ngraphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n'))),(0,l.kt)(o.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("p",null,"Basic Maven ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," configuration that executes introspection query against specified endpoint to obtain target\nschema and then generate the clients under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated")," package name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>graphql-kotlin-maven-client-example</artifactId>\n    <version>1.0.0-SNAPSHOT</version>\n\n    <properties>\n        <graphql-kotlin.version>$latestGraphQLKotlinVersion</graphql-kotlin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-client</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <id>generate-graphql-client</id>\n                        <goals>\n                            <goal>introspectSchema</goal>\n                            <goal>generateClient</goal>\n                        </goals>\n                        <configuration>\n                            <endpoint>http://localhost:8080/graphql</endpoint>\n                            <packageName>com.example.generated</packageName>\n                            <schemaFile>${project.build.directory}/schema.graphql</schemaFile>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/examples/client"},"graphql-kotlin-client-example")," project for complete\nworking examples of Gradle and Maven based projects."),(0,l.kt)("h3",{id:"generating-graphql-operations"},"Generating GraphQL Operations"),(0,l.kt)("p",null,"By default, GraphQL Kotlin build plugins will attempt to generate GraphQL operations from all ",(0,l.kt)("inlineCode",{parentName:"p"},"*.graphql")," files located under\n",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources"),". Operations are validated against the target GraphQL schema, which can be manually provided, retrieved by\nthe plugins through introspection (as configured in examples above) or downloaded directly from a custom SDL endpoint.\nSee our documentation for more details on supported ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-tasks"},"Gradle tasks"),"\nand ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-goals"},"Maven Mojos"),"."),(0,l.kt)("p",null,"When creating your GraphQL operations make sure to always specify an operation name and name the files accordingly. Each\none of your GraphQL operation files will generate a corresponding Kotlin file with a class matching your operation\nname. Input objects, enums and custom scalars definitions will be shared across different operations. All other objects\nwill be generated operation specific package name. For example, given ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery")," as\nthe operation name, GraphQL Kotlin plugins will generate a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.kt")," file with a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery"),"\nclass under the configured package."),(0,l.kt)("p",null,"For example, given a simple schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  helloWorld: String\n}\n")),(0,l.kt)("p",null,"And a corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"HelloWorldQuery.graphql")," query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query HelloWorldQuery {\n  helloWorld\n}\n")),(0,l.kt)("p",null,"Plugins will generate following client code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.generated\n\nimport com.expediagroup.graphql.client.types.GraphQLClientRequest\nimport kotlin.String\nimport kotlin.reflect.KClass\n\nconst val HELLO_WORLD_QUERY: String = "query HelloWorldQuery {\\n    helloWorld\\n}"\n\nclass HelloWorldQuery: GraphQLClientRequest<HelloWorldQuery.Result> {\n    override val query: String = HELLO_WORLD_QUERY\n\n    override val operationName: String = "HelloWorldQuery"\n\n    override fun responseType(): KClass<HelloWorldQuery.Result> = HelloWorldQuery.Result::class\n\n    data class Result(\n        val helloWorld: String\n    }\n}\n')),(0,l.kt)("p",null,"Generated classes are simple POJOs that implement ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientRequest")," interface and represent a GraphQL request."),(0,l.kt)("h3",{id:"executing-operations"},"Executing Operations"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," uses the Spring WebClient to execute the underlying operations and allows you to customize it by providing\nan instance of ",(0,l.kt)("inlineCode",{parentName:"p"},"WebClient.Builder"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLWebClient")," requires target URL to be specified and defaults to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson"),"\nbased GraphQL serializer. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html#webflux-client"},"Spring documentation"),"\nfor additional details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package com.example.client\n\nimport com.expediagroup.graphql.client.spring.GraphQLWebClient\nimport com.expediagroup.graphql.generated.HelloWorldQuery\nimport kotlinx.coroutines.runBlocking\n\nfun main() {\n    val client = GraphQLWebClient(url = "http://localhost:8080/graphql")\n    runBlocking {\n        val helloWorldQuery = HelloWorldQuery()\n        val result = client.execute(helloWorldQuery)\n        println("hello world query result: ${result.data?.helloWorld}")\n    }\n}\n')))}h.isMDXComponent=!0}}]);