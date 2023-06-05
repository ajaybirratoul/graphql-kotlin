"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7653],{85162:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){var a=e.children,n=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:n},a)}},74866:(e,a,n)=>{n.d(a,{Z:()=>q});var t=n(87462),l=n(67294),r=n(86010),i=n(12466),o=n(76775),p=n(91980),s=n(67392),u=n(50012);function c(e){return function(e){var a,n;return null!=(a=null==(n=l.Children.map(e,(function(e){if(!e||(0,l.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function g(e){var a=e.values,n=e.children;return(0,l.useMemo)((function(){var e=null!=a?a:c(n);return function(e){var a=(0,s.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function d(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function m(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId,r=(0,o.k6)(),i=function(e){var a=e.queryString,n=void 0!==a&&a,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,p._X)(i),(0,l.useCallback)((function(e){if(i){var a=new URLSearchParams(r.location.search);a.set(i,e),r.replace(Object.assign({},r.location,{search:a.toString()}))}}),[i,r])]}function h(e){var a,n,t,r,i=e.defaultValue,o=e.queryString,p=void 0!==o&&o,s=e.groupId,c=g(e),h=(0,l.useState)((function(){return function(e){var a,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var l=null!=(a=t.find((function(e){return e.default})))?a:t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:i,tabValues:c})})),k=h[0],v=h[1],f=m({queryString:p,groupId:s}),y=f[0],b=f[1],q=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,u.Nk)(a),t=n[0],r=n[1],[t,(0,l.useCallback)((function(e){a&&r.set(e)}),[a,r])]),x=q[0],G=q[1],L=function(){var e=null!=y?y:x;return d({value:e,tabValues:c})?e:null}();return(0,l.useLayoutEffect)((function(){L&&v(L)}),[L]),{selectedValue:k,selectValue:(0,l.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),b(e),G(e)}),[b,G,c]),tabValues:c}}var k=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var a=e.className,n=e.block,o=e.selectedValue,p=e.selectValue,s=e.tabValues,u=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var a=e.currentTarget,n=u.indexOf(a),t=s[n].value;t!==o&&(c(a),p(t))},d=function(e){var a,n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var t,l=u.indexOf(e.currentTarget)+1;n=null!=(t=u[l])?t:u[0];break;case"ArrowLeft":var r,i=u.indexOf(e.currentTarget)-1;n=null!=(r=u[i])?r:u[u.length-1]}null==(a=n)||a.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a)},s.map((function(e){var a=e.value,n=e.label,i=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:function(e){return u.push(e)},onKeyDown:d,onClick:g},i,{className:(0,r.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===a})}),null!=n?n:a)})))}function y(e){var a=e.lazy,n=e.children,t=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){var i=r.find((function(e){return e.props.value===t}));return i?(0,l.cloneElement)(i,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map((function(e,a){return(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t})})))}function b(e){var a=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},l.createElement(f,(0,t.Z)({},e,a)),l.createElement(y,(0,t.Z)({},e,a)))}function q(e){var a=(0,k.Z)();return l.createElement(b,(0,t.Z)({key:String(a)},e))}},5668:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(87462),l=n(63366),r=(n(67294),n(3905)),i=(n(95657),n(74866)),o=n(85162),p=["components"],s={id:"gradle-plugin-usage",title:"Gradle Plugin Usage",sidebar_label:"Usage"},u=void 0,c={unversionedId:"plugins/gradle-plugin-usage",id:"version-4.x.x/plugins/gradle-plugin-usage",title:"Gradle Plugin Usage",description:"Downloading Schema SDL",source:"@site/versioned_docs/version-4.x.x/plugins/gradle-plugin-usage.mdx",sourceDirName:"plugins",slug:"/plugins/gradle-plugin-usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-usage",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/gradle-plugin-usage.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1685995381,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"gradle-plugin-usage",title:"Gradle Plugin Usage",sidebar_label:"Usage"},sidebar:"version-4.x.x/docs",previous:{title:"Tasks",permalink:"/graphql-kotlin/docs/4.x.x/plugins/gradle-plugin-tasks"},next:{title:"Goals",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-goals"}},g={},d=[{value:"Downloading Schema SDL",id:"downloading-schema-sdl",level:2},{value:"Introspecting Schema",id:"introspecting-schema",level:2},{value:"Generating Client",id:"generating-client",level:2},{value:"Generating Client with Custom Scalars",id:"generating-client-with-custom-scalars",level:2},{value:"Generating Client using Kotlinx Serialization",id:"generating-client-using-kotlinx-serialization",level:2},{value:"Generating Test Client",id:"generating-test-client",level:2},{value:"Minimal Client Configuration Example",id:"minimal-client-configuration-example",level:2},{value:"Complete Client Configuration Example",id:"complete-client-configuration-example",level:2},{value:"Generating Multiple Clients",id:"generating-multiple-clients",level:2},{value:"Generating SDL Example",id:"generating-sdl-example",level:2},{value:"Generating SDL with Custom Hooks Provider Example",id:"generating-sdl-with-custom-hooks-provider-example",level:2}],m={toc:d},h="wrapper";function k(e){var a=e.components,n=(0,l.Z)(e,p);return(0,r.kt)(h,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"downloading-schema-sdl"},"Downloading Schema SDL"),(0,r.kt)("p",null,"GraphQL endpoints are often public and as such many servers might disable introspection queries in production environment.\nSince GraphQL schema is needed to generate type safe clients, as alternative GraphQL servers might expose private\nendpoints (e.g. accessible only from within network, etc) that could be used to download schema in Schema Definition\nLanguage (SDL) directly. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphqlDownloadSDL")," task requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified and can\nbe executed directly from the command line by explicitly passing ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlDownloadSDL --endpoint="http://localhost:8080/sdl"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")),(0,r.kt)("h2",{id:"introspecting-schema"},"Introspecting Schema"),(0,r.kt)("p",null,"Introspection task requires target GraphQL server ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," to be specified. Task can be executed directly from the\ncommand line by explicitly passing endpoint parameter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlIntrospectSchema --endpoint="http://localhost:8080/graphql"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n    endpoint.set("http://localhost:8080/graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlIntrospectSchema {\n    endpoint = "http://localhost:8080/graphql"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")),(0,r.kt)("h2",{id:"generating-client"},"Generating Client"),(0,r.kt)("p",null,"GraphQL Kotlin client code is generated based on the provided queries that will be executed against target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,r.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default\nconfiguration and storing GraphQL queries under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directories, task can be executed directly from the\ncommand line by explicitly providing required properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlGenerateClient --schemaFileName"mySchema.graphql" --packageName="com.example.generated"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFileName = "mySchema.graphql"\n}\n')))),(0,r.kt)("p",null,"This will process all GraphQL files located under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," and generate corresponding GraphQL Kotlin client\ndata models. Generated classes will be automatically added to the project compile sources."),(0,r.kt)("h2",{id:"generating-client-with-custom-scalars"},"Generating Client with Custom Scalars"),(0,r.kt)("p",null,"By default, all custom GraphQL scalars will be serialized as Strings. You can override this default behavior by specifying\ncustom ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/clients/graphql-kotlin-client/src/main/kotlin/com/expediagroup/graphql/client/converter/ScalarConverter.kt"},"scalar converter"),"."),(0,r.kt)("p",null,"For example given following custom scalar in our GraphQL schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar UUID\n")),(0,r.kt)("p",null,"We can create a custom converter to automatically convert this custom scalar to ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.UUID")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString()\n    override fun toJson(value: UUID): String = value.toString()\n}\n")),(0,r.kt)("p",null,"Afterwards we need to configure our plugin to use this custom converter"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n  customScalars.add(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\n\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFileName = "mySchema.graphql"\n    customScalars.add(new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')))),(0,r.kt)("h2",{id:"generating-client-using-kotlinx-serialization"},"Generating Client using Kotlinx Serialization"),(0,r.kt)("p",null,"GraphQL Kotlin plugins default to generate client data models that are compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FasterXML/jackson"},"Jackson"),".\nWe can change this default behavior by explicitly specifying serializer type (in the extension or explicitly in the generate\nclient task) and configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," compiler plugin. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization"},"kotlinx.serialization documentation"),"\nfor details."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n  serializer.set(GraphQLSerializer.KOTLINX)\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    id 'org.jetbrains.kotlin.plugin.serialization' version '$kotlinVersion'\n}\n\ngraphqlGenerateClient {\n    packageName = \"com.example.generated\"\n    schemaFileName = \"mySchema.graphql\"\n    serializer = GraphQLSerializer.KOTLINX\n}\n")))),(0,r.kt)("h2",{id:"generating-test-client"},"Generating Test Client"),(0,r.kt)("p",null,"GraphQL Kotlin test client code is generated based on the provided queries that will be executed against target GraphQL ",(0,r.kt)("inlineCode",{parentName:"p"},"schemaFile"),".\nSeparate class is generated for each provided GraphQL query and are saved under specified ",(0,r.kt)("inlineCode",{parentName:"p"},"packageName"),". When using default\nconfiguration and storing GraphQL queries under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/resources")," directories, task can be executed directly from the\ncommand line by explicitly providing required properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'$ gradle graphqlGenerateTestClient --schemaFileName"mySchema.graphql" --packageName="com.example.generated"\n')),(0,r.kt)("p",null,"Task can also be explicitly configured in your Gradle build file"),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlGenerateTestClient by tasks.getting(GraphQLGenerateTestClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFileName.set("mySchema.graphql")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateTestClient {\n    packageName = "com.example.generated"\n    schemaFileName = "mySchema.graphql"\n}\n')))),(0,r.kt)("p",null,"This will process all GraphQL queries located under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/resources")," and generate corresponding GraphQL Kotlin clients.\nGenerated classes will be automatically added to the project test compile sources."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateTestClient")," cannot be configured through the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," extension and has to be explicitly configured.")),(0,r.kt)("h2",{id:"minimal-client-configuration-example"},"Minimal Client Configuration Example"),(0,r.kt)("p",null,"Following is the minimal configuration that runs introspection query against a target GraphQL server and generates a\ncorresponding schema. This generated schema is subsequently used to generate GraphQL client code based on the queries\nprovided under ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  client {\n    endpoint = "http://localhost:8080/graphql"\n    packageName = "com.example.generated"\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLIntrospectSchemaTask\n\nval graphqlIntrospectSchema by tasks.getting(GraphQLIntrospectSchemaTask::class) {\n  endpoint.set("http://localhost:8080/graphql")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n  packageName.set("com.example.generated")\n  schemaFile.set(graphqlIntrospectSchema.outputFile)\n  dependsOn("graphqlIntrospectSchema")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'graphql {\n    client {\n        endpoint = "http://localhost:8080/graphql"\n        packageName = "com.example.generated"\n    }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphqlIntrospectSchema {\n    endpoint = "http://localhost:8080/graphql"\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = graphqlIntrospectSchema.outputFile\n    dependsOn graphqlIntrospectSchema\n}\n')))),(0,r.kt)("h2",{id:"complete-client-configuration-example"},"Complete Client Configuration Example"),(0,r.kt)("p",null,"Following is a configuration example that downloads schema SDL from a target GraphQL server that is then used to generate\nthe GraphQL client data models using ",(0,r.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization")," that are based on the provided query."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\ngraphql {\n  client {\n    sdlEndpoint = "http://localhost:8080/sdl"\n    packageName = "com.example.generated"\n    // optional configuration\n    allowDeprecatedFields = true\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    headers = mapOf("X-Custom-Header" to "My-Custom-Header")\n    queryFiles = listOf(file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql"))\n    serializer = GraphQLSerializer.KOTLINX\n    timeout {\n        connect = 10_000\n        read = 30_000\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.config.TimeoutConfiguration\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nplugins {\n    kotlin("plugin.serialization") version $kotlinVersion\n}\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n    headers.put("X-Custom-Header", "My-Custom-Header")\n    timeoutConfig.set(TimeoutConfiguration(connect = 10_000, read = 30_000))\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    // optional\n    allowDeprecatedFields.set(true)\n    customScalars.add(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n    serializer.set(GraphQLSerializer.KOTLINX)\n\n    dependsOn("graphqlDownloadSDL")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\n\nplugins {\n    id \'org.jetbrains.kotlin.plugin.serialization\' version \'$kotlinVersion\'\n}\n\ngraphql {\n    client {\n        sdlEndpoint = "http://localhost:8080/sdl"\n        packageName = "com.example.generated"\n        // optional configuration\n        allowDeprecatedFields = true\n        customScalars = [new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter")]\n        headers = ["X-Custom-Header" : "My-Custom-Header"]\n        queryFiles = [file("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")]\n        serializer = GraphQLSerializer.KOTLINX\n        timeout { t ->\n            t.connect = 10000\n            t.read = 30000\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLScalar\nimport com.expediagroup.graphql.plugin.gradle.config.GraphQLSerializer\nimport com.expediagroup.graphql.plugin.gradle.config.TimeoutConfiguration\n\nplugins {\n    id \'org.jetbrains.kotlin.plugin.serialization\' version \'$kotlinVersion\'\n}\n\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n    headers["X-Custom-Header"] = "My-Custom-Header"\n    timeoutConfig = new TimeoutConfiguration(10000, 30000)\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated"\n    schemaFile = graphqlDownloadSDL.outputFile\n    // optional\n    allowDeprecatedFields = true\n    customScalars.add(new GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyQuery.graphql")\n    serializer = GraphQLSerializer.KOTLINX\n\n    dependsOn graphqlDownloadSDL\n}\n')))),(0,r.kt)("h2",{id:"generating-multiple-clients"},"Generating Multiple Clients"),(0,r.kt)("p",null,"GraphQL Kotlin Gradle Plugin registers tasks for generation of a client queries targeting single GraphQL endpoint. You\ncan generate queries targeting additional endpoints by explicitly creating and configuring additional tasks."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\nval graphqlDownloadSDL by tasks.getting(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8080/sdl")\n}\nval graphqlGenerateClient by tasks.getting(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated.first")\n    schemaFile.set(graphqlDownloadSDL.outputFile)\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyFirstQuery.graphql")\n    dependsOn("graphqlDownloadSDL")\n}\n\nval graphqlDownloadOtherSDL by tasks.creating(GraphQLDownloadSDLTask::class) {\n    endpoint.set("http://localhost:8081/sdl")\n}\nval graphqlGenerateOtherClient by tasks.creating(GraphQLGenerateClientTask::class) {\n    packageName.set("com.example.generated.second")\n    schemaFile.set(graphqlDownloadOtherSDL.outputFile)\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MySecondQuery.graphql")\n    dependsOn("graphqlDownloadOtherSDL")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLDownloadSDLTask\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateClientTask\n\ngraphqlDownloadSDL {\n    endpoint = "http://localhost:8080/sdl"\n}\ngraphqlGenerateClient {\n    packageName = "com.example.generated.first"\n    schemaFile = graphqlDownloadSDL.outputFile\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MyFirstQuery.graphql")\n\n    dependsOn graphqlDownloadSDL\n}\n\ntask graphqlDownloadOtherSDL(type: GraphQLDownloadSDLTask) {\n    endpoint = "http://localhost:8081/sdl"\n}\ntask graphqlGenerateOtherClient(type: GraphQLGenerateClientTask) {\n    packageName = "com.other.generated.second"\n    schemaFile = graphqlDownloadOtherSDL.outputFile\n    queryFiles.from("${project.projectDir}/src/main/resources/queries/MySecondQuery.graphql")\n\n    dependsOn graphqlDownloadOtherSDL\n}\n')))),(0,r.kt)("h2",{id:"generating-sdl-example"},"Generating SDL Example"),(0,r.kt)("p",null,"GraphQL schema can be generated directly from your source code using reflections. ",(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateSDL")," will scan your\nclasspath looking for classes implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscription")," marker interfaces and then generates the\ncorresponding GraphQL schema using ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and default ",(0,r.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". In order to\nlimit the amount of packages to scan, this task requires users to provide a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"packages")," that can contain GraphQL\ntypes."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  schema {\n    packages = listOf("com.example")\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateSDLTask\n\nval graphqlGenerateSDL by tasks.getting(GraphQLGenerateSDLTask::class) {\n    packages.set(listOf("com.example"))\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphql {\n  schema {\n    packages = ["com.example"]\n  }\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateSDL {\n    packages = ["com.example"]\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")),(0,r.kt)("h2",{id:"generating-sdl-with-custom-hooks-provider-example"},"Generating SDL with Custom Hooks Provider Example"),(0,r.kt)("p",null,"Plugin will default to use ",(0,r.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks")," to generate target GraphQL schema. If your project uses custom hooks\nor needs to generate the federated GraphQL schema, you will need to provide an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider"),"\nservice provider that will be used to create an instance of your custom hooks."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"graphqlGenerateSDL")," utilizes ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nmechanism to dynamically load available ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," service providers from the classpath. Service provider\ncan be provided as part of your project, included in one of your project dependencies or through explicitly provided artifact.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/plugins/hooks-provider"},"Schema Generator Hooks Provider")," for additional details on how to create custom hooks service provider.\nConfiguration below shows how to configure GraphQL Kotlin plugin with explicitly provided artifact to generate federated\nGraphQL schema."),(0,r.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Groovy",value:"groovy"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.graphql\n\ngraphql {\n  schema {\n    packages = listOf("com.example")\n  }\n}\n\ndependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimport com.expediagroup.graphql.plugin.gradle.tasks.GraphQLGenerateSDLTask\n\nval graphqlGenerateSDL by tasks.getting(GraphQLGenerateSDLTask::class) {\n    packages.set(listOf("com.example"))\n}\n\ndependencies {\n    graphqlSDL("com.expediagroup:graphql-kotlin-federated-hooks-provider:$graphQLKotlinVersion")\n}\n'))),(0,r.kt)(o.Z,{value:"groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'// build.gradle\ngraphql {\n  schema {\n    packages = ["com.example"]\n  }\n}\n\ndependencies {\n    graphqlSDL "com.expediagroup:graphql-kotlin-federated-hooks-provider:$DEFAULT_PLUGIN_VERSION"\n}\n')),(0,r.kt)("p",null,"Above configuration is equivalent to the following task definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'//build.gradle\ngraphqlGenerateSDL {\n    packages = ["com.example"]\n}\n\ndependencies {\n    graphqlSDL "com.expediagroup:graphql-kotlin-federated-hooks-provider:$DEFAULT_PLUGIN_VERSION"\n}\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This task does not automatically configure itself to be part of your build lifecycle. You will need to explicitly\ninvoke it OR configure it as a dependency of some other task.")))}k.isMDXComponent=!0}}]);