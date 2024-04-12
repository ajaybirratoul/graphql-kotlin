"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6624],{69442:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=o(74848),r=o(28453);const s={id:"generator-config",title:"Generator Configuration & Hooks"},a=void 0,i={id:"schema-generator/customizing-schemas/generator-config",title:"Generator Configuration & Hooks",description:"graphql-kotlin-schema-generator provides a single function, toSchema, to generate a schema from Kotlin objects. This",source:"@site/docs/schema-generator/customizing-schemas/generator-config.md",sourceDirName:"schema-generator/customizing-schemas",slug:"/schema-generator/customizing-schemas/generator-config",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/generator-config",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/customizing-schemas/generator-config.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1712947896,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{id:"generator-config",title:"Generator Configuration & Hooks"},sidebar:"docs",previous:{title:"Annotations",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/annotations"},next:{title:"Documenting Schema",permalink:"/graphql-kotlin/docs/8.x.x/schema-generator/customizing-schemas/documenting-schema"}},c={},l=[{value:"TopLevelObjects",id:"toplevelobjects",level:2},{value:"SchemaGeneratorConfig",id:"schemageneratorconfig",level:2},{value:"SchemaGeneratorHooks",id:"schemageneratorhooks",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," provides a single function, ",(0,t.jsx)(n.code,{children:"toSchema,"})," to generate a schema from Kotlin objects. This\nfunction accepts four arguments: config, queries, mutations and subscriptions."]}),"\n",(0,t.jsx)(n.h2,{id:"toplevelobjects",children:"TopLevelObjects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The queries, mutations and subscriptions are a list of\n",(0,t.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/TopLevelObject.kt",children:"TopLevelObjects"}),"\nand will be used to generate corresponding GraphQL root types."]}),"\n",(0,t.jsxs)(n.li,{children:["Annotated schema ",(0,t.jsx)(n.code,{children:"TopLevelObject"})," will be used to generate any schema directives"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schemageneratorconfig",children:"SchemaGeneratorConfig"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorConfig.kt",children:"config"}),"\ncontains all the extra information you need to pass, including custom hooks, supported packages and name overrides.\n",(0,t.jsx)(n.code,{children:"SchemaGeneratorConfig"})," has some default settings but you can override them and add custom behaviors for generating your\nschema."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"supportedPackages"})," ",(0,t.jsx)(n.strong,{children:"[Required]"})," - List of Kotlin packages that can contain schema objects. Limits the scope of\npackages that can be scanned using reflections."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"topLevelNames"})," ",(0,t.jsx)(n.em,{children:"[Optional]"})," - Set the name of the top level GraphQL fields, defaults to ",(0,t.jsx)(n.code,{children:"Query"}),", ",(0,t.jsx)(n.code,{children:"Mutation"})," and\n",(0,t.jsx)(n.code,{children:"Subscription"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hooks"})," ",(0,t.jsx)(n.em,{children:"[Optional]"})," - Set custom behaviors for generating the schema, see below for details."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dataFetcherFactory"})," ",(0,t.jsx)(n.em,{children:"[Optional]"})," - Sets custom behavior for generating data fetchers"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"introspectionEnabled"})," ",(0,t.jsx)(n.em,{children:"[Optional]"})," - Boolean flag indicating whether introspection queries are enabled, introspection queries are enabled by default"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"additionalTypes"})," ",(0,t.jsx)(n.em,{children:"[Optional]"})," - Set of additional GraphQL types to include when generating the schema."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"schemaObject"})," ",(0,t.jsx)(n.em,{children:"[Optional]"})," - Object that contains schema directive information"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"schemageneratorhooks",children:"SchemaGeneratorHooks"}),"\n",(0,t.jsx)(n.p,{children:"Hooks are lifecycle events that are called and triggered while the schema is building that allow users to customize the\nschema."}),"\n",(0,t.jsxs)(n.p,{children:["For exact names and details of every hook, see the comments and descriptions in our latest\n",(0,t.jsx)(n.a,{href:"https://www.javadoc.io/doc/com.expediagroup/graphql-kotlin-schema-generator",children:"javadocs"})," or directly in the source file:\n",(0,t.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/hooks/SchemaGeneratorHooks.kt",children:"SchemaGeneratorHooks.kt"})]}),"\n",(0,t.jsx)(n.p,{children:"As an example here is how you would write a custom hook and provide it through the configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'class MyCustomHooks : SchemaGeneratorHooks {\n  // Only generate functions that start with "dog"\n  // This would probably be better just to use @GraphQLIgnore, but this is just an example\n  override fun isValidFunction(function: KFunction<*>) = function.name.startsWith("dog")\n}\n\nclass Query {\n  fun dogSound() = "bark"\n\n  fun catSound() = "meow"\n}\n\nval config = SchemaGeneratorConfig(supportedPackages = listOf("org.example"), hooks = MyCustomHooks())\n\nval queries = listOf(TopLevelObject(Query()))\n\ntoSchema(queries = queries, config = config)\n'})}),"\n",(0,t.jsx)(n.p,{children:"will generate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-graphql",children:"schema {\n  query: Query\n}\n\ntype Query {\n  dogSound: String!\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notice there is no ",(0,t.jsx)(n.code,{children:"catSound"})," function."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);