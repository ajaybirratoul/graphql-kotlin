"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[2250],{85162:(e,r,a)=>{a.d(r,{Z:()=>i});var n=a(67294),t=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var r=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,i),hidden:a},r)}},74866:(e,r,a)=>{a.d(r,{Z:()=>N});var n=a(87462),t=a(67294),o=a(86010),i=a(12466),l=a(76775),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){var r,a;return null!=(r=null==(a=t.Children.map(e,(function(e){if(!e||(0,t.isValidElement)(e)&&(r=e.props)&&"object"==typeof r&&"value"in r)return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?r:[]}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function p(e){var r=e.values,a=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:d(a);return function(e){var r=(0,u.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,a])}function m(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,a=void 0!==r&&r,n=e.groupId,o=(0,l.k6)(),i=function(e){var r=e.queryString,a=void 0!==r&&r,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,t.useCallback)((function(e){if(i){var r=new URLSearchParams(o.location.search);r.set(i,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[i,o])]}function h(e){var r,a,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=p(e),h=(0,t.useState)((function(){return function(e){var r,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var t=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:i,tabValues:d})})),f=h[0],k=h[1],g=v({queryString:s,groupId:u}),b=g[0],y=g[1],N=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(r),n=a[0],o=a[1],[n,(0,t.useCallback)((function(e){r&&o.set(e)}),[r,o])]),w=N[0],S=N[1],x=function(){var e=null!=b?b:w;return m({value:e,tabValues:d})?e:null}();return(0,t.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:f,selectValue:(0,t.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),S(e)}),[y,S,d]),tabValues:d}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var r=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,a=c.indexOf(r),n=u[a].value;n!==l&&(d(r),s(n))},m=function(e){var r,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,t=c.indexOf(e.currentTarget)+1;a=null!=(n=c[t])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;a=null!=(o=c[i])?o:c[c.length-1]}null==(r=a)||r.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},r)},u.map((function(e){var r=e.value,a=e.label,i=e.attributes;return t.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,key:r,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===r})}),null!=a?a:r)})))}function b(e){var r=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){var i=o.find((function(e){return e.props.value===n}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},o.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function y(e){var r=h(e);return t.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},t.createElement(g,(0,n.Z)({},e,r)),t.createElement(b,(0,n.Z)({},e,r)))}function N(e){var r=(0,f.Z)();return t.createElement(y,(0,n.Z)({key:String(r)},e))}},64414:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),t=a(63366),o=(a(67294),a(3905)),i=(a(95657),a(74866)),l=a(85162),s=["components"],u={id:"hooks-provider",title:"Schema Generator Hooks Provider"},c=void 0,d={unversionedId:"plugins/hooks-provider",id:"version-5.x.x/plugins/hooks-provider",title:"Schema Generator Hooks Provider",description:"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan",source:"@site/versioned_docs/version-5.x.x/plugins/hooks-provider.mdx",sourceDirName:"plugins",slug:"/plugins/hooks-provider",permalink:"/graphql-kotlin/docs/5.x.x/plugins/hooks-provider",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/plugins/hooks-provider.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1685995381,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"hooks-provider",title:"Schema Generator Hooks Provider"},sidebar:"version-5.x.x/docs",previous:{title:"Usage",permalink:"/graphql-kotlin/docs/5.x.x/plugins/maven-plugin-usage"}},p={},m=[{value:"Creating Custom Hooks Service Provider",id:"creating-custom-hooks-service-provider",level:2},{value:"Add dependency on graphql-kotlin-hooks-provider",id:"add-dependency-on-graphql-kotlin-hooks-provider",level:3},{value:"Create new SchemaGeneratorHooksProvider implementation",id:"create-new-schemageneratorhooksprovider-implementation",level:3},{value:"Create provider configuration file",id:"create-provider-configuration-file",level:3},{value:"Limitations",id:"limitations",level:2}],v={toc:m},h="wrapper";function f(e){var r=e.components,a=(0,t.Z)(e,s);return(0,o.kt)(h,(0,n.Z)({},v,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan\nyour classpath for classes implementing ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces\nand then generate corresponding GraphQL schema using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". By default, plugins will generate\nthe schema using ",(0,o.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If your project uses custom hooks or needs to generate the federated GraphQL\nschema, you will need to provide an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," that will be used to create an instance of\nyour custom hooks."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," is a service provider interface that exposes a single ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks")," method to generate an instance\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," that will be used to generate your schema. By utilizing Java ",(0,o.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nwe can dynamically load your custom provider from the classpath. Service provider can be provided as part of your project\nsources, included inside of one of your project dependencies or through explicitly provided artifact. Since we need to be\nable to deterministically choose a single hooks provider, generation of schema will fail if there are multiple providers\non the classpath."),(0,o.kt)("h2",{id:"creating-custom-hooks-service-provider"},"Creating Custom Hooks Service Provider"),(0,o.kt)("h3",{id:"add-dependency-on-graphql-kotlin-hooks-provider"},"Add dependency on graphql-kotlin-hooks-provider"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-hooks-provider")," module."),(0,o.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimplementation("com.expediagroup", "graphql-kotlin-hooks-provider", latestVersion)\n'))),(0,o.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-hooks-provider</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h3",{id:"create-new-schemageneratorhooksprovider-implementation"},"Create new SchemaGeneratorHooksProvider implementation"),(0,o.kt)("p",null,"Service provider implementation has to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface that provides a way to instantiate\nschema generator hooks that will be used to generate the GraphQL schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nclass MyCustomSchemaGeneratorHooksProvider : SchemaGeneratorHooksProvider {\n    override fun hooks(): SchemaGeneratorHooks = MyCustomHooks()\n}\n")),(0,o.kt)("h3",{id:"create-provider-configuration-file"},"Create provider configuration file"),(0,o.kt)("p",null,"Service loader provider configuration file should be created under JAR ",(0,o.kt)("inlineCode",{parentName:"p"},"/META-INF/services")," directory (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services"),"\nin default project structure). Name of the provider configuration should be fully qualified service provider interface name, i.e.\n",(0,o.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider")," and contain single entry - a fully qualified\nname of the service provider implementation."),(0,o.kt)("p",null,"Using the example service provider implementation from the above, our project structure should look like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"my-project\n|- src\n  |- main\n    |- kotlin\n      |- com\n        |- example\n          |- MyCustomSchemaGeneratorHooksProvider.kt\n    |- resources\n      |- META-INF\n        |- services\n          |- com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider\n\n")),(0,o.kt)("p",null,"Our service provider configuration file should have following content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"com.example.MyCustomSchemaGeneratorHooksProvider\n")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"We don't support Java 9 module mechanism for declaring ",(0,o.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," implementations. As a workaround, you have to define\nyour service providers in the provider configuration file under ",(0,o.kt)("inlineCode",{parentName:"p"},"META-INF/services"),"."))}f.isMDXComponent=!0}}]);