"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=o,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"generator-config",title:"Generator Configuration & Hooks"},l=void 0,c={unversionedId:"schema-generator/customizing-schemas/generator-config",id:"version-4.x.x/schema-generator/customizing-schemas/generator-config",title:"Generator Configuration & Hooks",description:"graphql-kotlin-schema-generator provides a single function, toSchema, to generate a schema from Kotlin objects. This",source:"@site/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/generator-config.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/generator-config",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/customizing-schemas/generator-config.md",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1694541734,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"generator-config",title:"Generator Configuration & Hooks"},sidebar:"version-4.x.x/docs",previous:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/writing-schemas/nested-arguments"},next:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/documenting-fields"}},p={},m=[{value:"TopLevelObjects",id:"toplevelobjects",level:2},{value:"SchemaGeneratorConfig",id:"schemageneratorconfig",level:2},{value:"SchemaGeneratorHooks",id:"schemageneratorhooks",level:2}],u={toc:m},g="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(g,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides a single function, ",(0,a.kt)("inlineCode",{parentName:"p"},"toSchema,")," to generate a schema from Kotlin objects. This\nfunction accepts four arguments: config, queries, mutations and subscriptions."),(0,a.kt)("h2",{id:"toplevelobjects"},"TopLevelObjects"),(0,a.kt)("p",null,"The queries, mutations and subscriptions are a list of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/TopLevelObject.kt"},"TopLevelObjects"),"\nand will be used to generate corresponding GraphQL root types."),(0,a.kt)("h2",{id:"schemageneratorconfig"},"SchemaGeneratorConfig"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorConfig.kt"},"config"),"\ncontains all the extra information you need to pass, including custom hooks, supported packages and name overrides.\n",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorConfig")," has some default settings but you can override them and add custom behaviors for generating your\nschema."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"supportedPackages")," ",(0,a.kt)("strong",{parentName:"li"},"[Required]")," - List of Kotlin packages that can contain schema objects. Limits the scope of\npackages that can be scanned using reflections."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"topLevelNames")," ",(0,a.kt)("em",{parentName:"li"},"[Optional]")," - Set the name of the top level GraphQL fields, defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Mutation")," and\n",(0,a.kt)("inlineCode",{parentName:"li"},"Subscription")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hooks")," ",(0,a.kt)("em",{parentName:"li"},"[Optional]")," - Set custom behaviors for generating the schema, see below for details."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dataFetcherFactory")," ",(0,a.kt)("em",{parentName:"li"},"[Optional]")," - Sets custom behavior for generating data fetchers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"introspectionEnabled")," ",(0,a.kt)("em",{parentName:"li"},"[Optional]")," - Boolean flag indicating whether introspection queries are enabled, introspection queries are enabled by default")),(0,a.kt)("h2",{id:"schemageneratorhooks"},"SchemaGeneratorHooks"),(0,a.kt)("p",null,"Hooks are lifecycle events that are called and triggered while the schema is building that allow users to customize the\nschema."),(0,a.kt)("p",null,"For exact names and details of every hook, see the comments and descriptions in our latest\n",(0,a.kt)("a",{parentName:"p",href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-schema-generator"},"javadocs")," or directly in the source file:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/hooks/SchemaGeneratorHooks.kt"},"SchemaGeneratorHooks.kt")),(0,a.kt)("p",null,"As an example here is how you would write a custom hook and provide it through the configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyCustomHooks : SchemaGeneratorHooks {\n  // Only generate functions that start with "dog"\n  // This would probably be better just to use @GraphQLIgnore, but this is just an example\n  override fun isValidFunction(function: KFunction<*>) = function.name.startsWith("dog")\n}\n\nclass Query {\n  fun dogSound() = "bark"\n\n  fun catSound() = "meow"\n}\n\nval config = SchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = MyCustomHooks())\n\nval queries = listOf(TopLevelObject(Query()))\n\ntoSchema(queries = queries, config = config)\n')),(0,a.kt)("p",null,"will generate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n}\n\ntype Query {\n  dogSound: String!\n}\n")),(0,a.kt)("p",null,"Notice there is no ",(0,a.kt)("inlineCode",{parentName:"p"},"catSound")," function."))}h.isMDXComponent=!0}}]);