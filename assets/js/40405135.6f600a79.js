"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9424],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(a),g=r,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},28388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={id:"gradle-plugin",title:"Gradle Plugin",original_id:"gradle-plugin"},p=void 0,d={unversionedId:"plugins/gradle-plugin",id:"version-3.x.x/plugins/gradle-plugin",title:"Gradle Plugin",description:"GraphQL Kotlin Gradle Plugin provides functionality to introspect GraphQL schemas and generate a lightweight GraphQL HTTP client.",source:"@site/versioned_docs/version-3.x.x/plugins/gradle-plugin.md",sourceDirName:"plugins",slug:"/plugins/gradle-plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/gradle-plugin",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/plugins/gradle-plugin.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1694541734,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"gradle-plugin",title:"Gradle Plugin",original_id:"gradle-plugin"},sidebar:"version-3.x.x/docs",previous:{title:"Client Customization",permalink:"/graphql-kotlin/docs/3.x.x/client/client-customization"},next:{title:"Maven Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Extension",id:"extension",level:2},{value:"Tasks",id:"tasks",level:2},{value:"graphqlDownloadSDL",id:"graphqldownloadsdl",level:3},{value:"graphqlGenerateClient",id:"graphqlgenerateclient",level:3},{value:"graphqlGenerateTestClient",id:"graphqlgeneratetestclient",level:3},{value:"graphqlIntrospectSchema",id:"graphqlintrospectschema",level:3},{value:"Examples",id:"examples",level:2},{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:3},{value:"Introspecting Schema",id:"introspecting-schema",level:3},{value:"Generating Client",id:"generating-client",level:3},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:3},{value:"Generating Test Client",id:"generating-test-client",level:3},{value:"Complete Minimal Configuration Example",id:"complete-minimal-configuration-example",level:3},{value:"Complete Configuration Example",id:"complete-configuration-example",level:3}],u={toc:c},g="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(g,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin Gradle Plugin provides functionality to introspect GraphQL schemas and generate a lightweight GraphQL HTTP client."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," is published on Gradle ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.gradle.org/plugin/com.expediagroup.graphql"},"Plugin Portal"),".\nIn order to execute any of the provided tasks you need to first apply the plugin on your project."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nplugins {\n    id("com.expediagroup.graphql") version $graphQLKotlinVersion\n}\n\n')),(0,l.kt)("h2",{id:"extension"},"Extension"),(0,l.kt)("p",null,"GraphQL Kotlin Gradle Plugin uses an extension on the project named ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," of type\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/plugins/graphql-kotlin-gradle-plugin/src/main/kotlin/com/expediagroup/graphql/plugin/gradle/GraphQLPluginExtension.kt"},"GraphQLPluginExtension"),".\nThis extension can be used to configure global options instead of explicitly configuring individual tasks. Once extension\nis configured, it will automatically download SDL/run introspection to generate GraphQL schema and subsequently generate\nall GraphQL clients. GraphQL Extension should be used by default, except for cases where you need to only run individual\ntasks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    // GraphQL server endpoint that will be used to for running introspection queries. Alternatively you can download schema directly from `sdlEndpoint`.\n    endpoint = "http://localhost:8080/graphql"\n    // GraphQL server SDL endpoint that will be used to download schema. Alternatively you can run introspection query against `endpoint`.\n    sdlEndpoint = "http://localhost:8080/sdl"\n    // Target package name to be used for generated classes.\n    packageName = "com.example.generated"\n    // Optional HTTP headers to be specified on an introspection query or SDL request.\n    headers["X-Custom-Header"] = "Custom-Header-Value"\n    // Boolean flag indicating whether or not selection of deprecated fields is allowed.\n    allowDeprecatedFields = false\n    // Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.\n    converters["UUID"] = ScalarConverterMapping("java.util.UUID", "com.example.UUIDScalarConverter")\n    // List of query files to be processed.\n    queryFiles.add(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    // Timeout configuration\n    timeout {\n        // Connect timeout in milliseconds\n        connect = 5_000\n        // Read timeout in milliseconds\n        read = 15_000\n    }\n  }\n}\n\n')),(0,l.kt)("h2",{id:"tasks"},"Tasks"),(0,l.kt)("p",null,"All ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-gradle-plugin")," tasks are grouped together under ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQL")," task group and their names are prefixed with\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphql"),". You can find detailed information about GraphQL kotlin tasks by running Gradle ",(0,l.kt)("inlineCode",{parentName:"p"},"help --task <taskName>")," task."),(0,l.kt)("h3",{id:"graphqldownloadsdl"},"graphqlDownloadSDL"),(0,l.kt)("p",null,"Task that attempts to download GraphQL schema in SDL format from the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying\nschema file as ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself\nand could be used as an alternative to ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlIntrospectSchema")," to generate input for the subsequent\n",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server SDL endpoint that will be used to download schema.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","String, Any",">"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on a SDL request.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfig"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout configuration(in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value are:")," connect timeout = 5_000, read timeout = 15_000.",(0,l.kt)("br",null))))),(0,l.kt)("h3",{id:"graphqlgenerateclient"},"graphqlGenerateClient"),(0,l.kt)("p",null,"Task that generates GraphQL Kotlin client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual clients with their specific data models are generated for each query\nfile and are placed under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project, either through explicit configuration\nor through the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," extension, it will automatically configure itself as a dependency of a ",(0,l.kt)("inlineCode",{parentName:"p"},"compileKotlin")," task and\nresulting generated code will be automatically added to the project main source set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"converters")),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","String, ScalarConverter",">"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"FileCollection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/main/resources"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName"),".")))),(0,l.kt)("h3",{id:"graphqlgeneratetestclient"},"graphqlGenerateTestClient"),(0,l.kt)("p",null,"Task that generates GraphQL Kotlin test client and corresponding data classes based on the provided GraphQL queries that are\nevaluated against target Graphql schema. Individual test clients with their specific data models are generated for each query\nfile and are placed under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When this task is added to the project it will automatically configure\nitself as a dependency of a ",(0,l.kt)("inlineCode",{parentName:"p"},"compileTestKotlin")," task and resulting generated code will be automatically added to the project\ntest source set."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields")),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean flag indicating whether selection of deprecated fields is allowed or not.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"allowDeprecatedFields"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"converters")),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","String, ScalarConverter",">"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Custom GraphQL scalar to converter mapping containing information about corresponding Java type and converter that should be used to serialize/deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"packageName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target package name for generated code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"packageName"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")),(0,l.kt)("td",{parentName:"tr",align:null},"FileCollection"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"List of query files to be processed. Instead of a list of files to be processed you can specify ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")," directory instead. If this property is specified it will take precedence over the corresponding directory property.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Directory file containing GraphQL queries. Instead of specifying a directory you can also specify list of query file by using ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFiles")," property instead.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value is:")," ",(0,l.kt)("inlineCode",{parentName:"td"},"src/test/resources"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"queryFileDirectory"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")),(0,l.kt)("td",{parentName:"tr",align:null},"File"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"GraphQL schema file that will be used to generate client code.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFile")," has to be provided"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to GraphQL schema file that will be used to generate client code.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"schemaFileName"),".")))),(0,l.kt)("h3",{id:"graphqlintrospectschema"},"graphqlIntrospectSchema"),(0,l.kt)("p",null,"Task that executes GraphQL introspection query against specified ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," and saves the underlying schema file as\n",(0,l.kt)("inlineCode",{parentName:"p"},"schema.graphql")," under build directory. In general, this task provides limited functionality by itself and instead\nshould be used to generate input for the subsequent ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateClient")," task."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Properties")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Target GraphQL server endpoint that will be used to execute introspection queries.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Command line property is"),": ",(0,l.kt)("inlineCode",{parentName:"td"},"endpoint"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"headers")),(0,l.kt)("td",{parentName:"tr",align:null},"Map","<","String, Any",">"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional HTTP headers to be specified on an introspection query.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"timeoutConfig")),(0,l.kt)("td",{parentName:"tr",align:null},"TimeoutConfig"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout configuration(in milliseconds) to download schema from SDL endpoint before we cancel the request.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Default value are:")," connect timeout = 5_000, read timeout = 15_000.",(0,l.kt)("br",null))))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,l.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlDownloadSDL")," task requires target GraphQL server ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified and can\nbe executed directly from the command line by explicitly passing ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," parameter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\n$ gradle graphqlDownloadSDL --endpoint="http://localhost:8080/sdl"\n\n')),(0,l.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\n\n')),(0,l.kt)("p",null,">"," NOTE: This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\n",">"," invoke it OR configure it as a dependency of some other task."),(0,l.kt)("h3",{id:"introspecting-schema"},"Introspecting Schema"),(0,l.kt)("p",null,"Introspection task requires target GraphQL server ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly passing endpoint parameter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\n$ gradle graphqlIntrospectSchema --endpoint="http://localhost:8080/graphql"\n\n')),(0,l.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n    endpoint.set("http://localhost:8080/graphql")\n}\n\n')),(0,l.kt)("p",null,">"," NOTE: This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\n",">"," invoke it OR configure it as a dependency of some other task."),(0,l.kt)("h3",{id:"generating-client"},"Generating Client"),(0,l.kt)("p",null,"GraphQL Kotlin client code is generated based on the provided queries that will be executed against target GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default\nconfiguration and storing GraphQL queries under ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directories, task can be executed directly from the\ncommand line by explicitly providing required properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\n$ gradle graphqlGenerateClient --schemaFileName"mySchema.graphql" --packageName="com.example.generated"\n\n')),(0,l.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n}\n\n')),(0,l.kt)("p",null,"This will process all GraphQL queries located under ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project compile sources."),(0,l.kt)("h3",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,l.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,l.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"\nscalar UUID\n\n")),(0,l.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\npackage com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: String): UUID = UUID.fromString(rawValue)\n    override fun toJson(value: UUID): String = value.toString()\n}\n\n")),(0,l.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n  converters.put("UUID", ScalarConverterMapping("java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n\n')),(0,l.kt)("h3",{id:"generating-test-client"},"Generating Test Client"),(0,l.kt)("p",null,"GraphQL Kotlin test client code is generated based on the provided queries that will be executed against target GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,l.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default\nconfiguration and storing GraphQL queries under ",(0,l.kt)("inlineCode",{parentName:"p"},"src/test/resources")," directories, task can be executed directly from the\ncommand line by explicitly providing required properties."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'\n$ gradle graphqlGenerateTestClient --schemaFileName"mySchema.graphql" --packageName="com.example.generated"\n\n')),(0,l.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateTestClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n}\n\n')),(0,l.kt)("p",null,"This will process all GraphQL queries located under ",(0,l.kt)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,l.kt)("p",null,">"," NOTE: ",(0,l.kt)("inlineCode",{parentName:"p"},"graphqlGenerateTestClient")," cannot be configured through the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," extension and has to be explicitly configured."),(0,l.kt)("h3",{id:"complete-minimal-configuration-example"},"Complete Minimal Configuration Example"),(0,l.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a\ncorresponding schema. This generated schema is subsequently used to generate GraphQL client code based on the queries\nprovided under ",(0,l.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n\n')),(0,l.kt)("p",null,"Above configuration is equivalent to the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLIntrospectSchemaTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n  endpoint.set("http://localhost:8080/graphql")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(graphqlIntrospectSchema.outputFile)\n  dependsOn("graphqlIntrospectSchema")\n}\n\n')),(0,l.kt)("h3",{id:"complete-configuration-example"},"Complete Configuration Example"),(0,l.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client code based on the provided query."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.config.TimeoutConfig\nimport com.expediagroup.graphql.plugin.generator.ScalarConverterMapping\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    sdlEndpoint = "http://localhost:8080/sdl"\n    packageName = "com.example.generated"\n    // optional configuration\n    allowDeprecatedFields = true\n    headers["X-Custom-Header"] = "My-Custom-Header"\n    converters["UUID"] = ScalarConverterMapping("java.util.UUID", "com.example.UUIDScalarConverter")\n    queryFiles.add(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    timeout {\n        connect = 10_000\n        read = 30_000\n    }\n  }\n}\n\n')),(0,l.kt)("p",null,"Above configuration is equivalent to the following"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'\n// build.gradle.kts\nimport com.expediagroup.graphql.plugin.config.TimeoutConfig\nimport com.expediagroup.graphql.plugin.generator.ScalarConverterMapping\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLIntrospectSchemaTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n    headers.put("X-Custom-Header", "My-Custom-Header")\n    timeoutConfig.set(TimeoutConfig(connect = 10_000, read = 30_000))\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    // optional\n    allowDeprecatedFields.set(true)\n    converters.put("UUID", ScalarConverterMapping("java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n\n    dependsOn("graphqlDownloadSDL")\n}\n\n')))}m.isMDXComponent=!0}}]);