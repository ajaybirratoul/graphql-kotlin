"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[7668],{95141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=t(74848),r=t(28453);const a={id:"async-models",title:"Async Models",original_id:"async-models"},s=void 0,l={id:"schema-generator/execution/async-models",title:"Async Models",description:"By default, graphql-kotlin-schema-generator will resolve all functions synchronously, i.e. it will block the",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/async-models.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/async-models",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/async-models.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1712947896,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{id:"async-models",title:"Async Models",original_id:"async-models"},sidebar:"docs",previous:{title:"Fetching Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/fetching-data"},next:{title:"Exceptions and Partial Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/exceptions"}},c={},i=[{value:"Coroutines",id:"coroutines",level:2},{value:"CompletableFuture",id:"completablefuture",level:2},{value:"RxJava/Reactor",id:"rxjavareactor",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," will resolve all functions synchronously, i.e. it will block the\nunderlying thread while executing the target function. While you could configure your GraphQL server with execution\nstrategies that execute each query in parallel on some thread pools, instead we highly recommend to utilize asynchronous\nprogramming models."]}),"\n",(0,o.jsx)(n.h2,{id:"coroutines",children:"Coroutines"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," has built-in support for Kotlin coroutines. Provided default\n",(0,o.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/execution/FunctionDataFetcher.kt",children:"FunctionDataFetcher"}),"\nwill automatically asynchronously execute suspendable functions and convert the result to ",(0,o.jsx)(n.code,{children:"CompletableFuture"})," expected\nby ",(0,o.jsx)(n.code,{children:"graphql-java"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"\ndata class User(val id: String, val name: String)\n\nclass Query {\n    suspend fun getUser(id: String): User {\n        // Your coroutine logic to get user data\n    }\n}\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"will produce the following schema"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"\ntype Query {\n  getUser(id: String!): User\n}\n\ntype User {\n  id: String!\n  name: String!\n}\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"completablefuture",children:"CompletableFuture"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"graphql-java"})," relies on Java ",(0,o.jsx)(n.code,{children:"CompletableFuture"})," for asynchronously processing the requests. In order to simplify the\ninterop with ",(0,o.jsx)(n.code,{children:"graphql-java"}),", ",(0,o.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," has a built-in hook which will automatically unwrap a\n",(0,o.jsx)(n.code,{children:"CompletableFuture"})," and use the inner class as the return type in the schema."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"\ndata class User(val id: String, val name: String)\n\nclass Query {\n    fun getUser(id: String): CompletableFuture<User> {\n        // Your logic to get data asynchronously\n    }\n}\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"will result in the exactly the same schema as in the coroutine example above."}),"\n",(0,o.jsx)(n.h2,{id:"rxjavareactor",children:"RxJava/Reactor"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to use a different monad type, like ",(0,o.jsx)(n.code,{children:"Single"})," from ",(0,o.jsx)(n.a,{href:"https://github.com/ReactiveX/RxJava",children:"RxJava"})," or ",(0,o.jsx)(n.code,{children:"Mono"})," from\n",(0,o.jsx)(n.a,{href:"https://projectreactor.io/",children:"Project Reactor"}),", you have to:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create custom ",(0,o.jsx)(n.code,{children:"SchemaGeneratorHook"})," that implements ",(0,o.jsx)(n.code,{children:"willResolveMonad"})," to provide the necessary logic\nto correctly unwrap the monad and return the inner class to generate valid schema"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"\nclass MonadHooks : SchemaGeneratorHooks {\n    override fun willResolveMonad(type: KType): KType = when (type.classifier) {\n        Mono::class -> type.arguments.firstOrNull()?.type\n        else -> type\n    } ?: type\n}\n\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Provide custom data fetcher that will properly process those monad types."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"\nclass CustomFunctionDataFetcher(target: Any?, fn: KFunction<*>, objectMapper: ObjectMapper) : FunctionDataFetcher(target, fn, objectMapper) {\n  override fun get(environment: DataFetchingEnvironment): Any? = when (val result = super.get(environment)) {\n    is Mono<*> -> result.toFuture()\n    else -> result\n  }\n}\n\nclass CustomDataFetcherFactoryProvider(\n    private val objectMapper: ObjectMapper\n) : SimpleKotlinDataFetcherFactoryProvider(objectMapper) {\n\n  override fun functionDataFetcherFactory(target: Any?, kFunction: KFunction<*>): DataFetcherFactory<Any> = DataFetcherFactory<Any> {\n    CustomFunctionDataFetcher(\n      target = target,\n      fn = kFunction,\n      objectMapper = objectMapper)\n  }\n}\n\n"})}),"\n",(0,o.jsx)(n.p,{children:"With the above you can then create your schema as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'\nclass ReactorQuery {\n    fun asynchronouslyDo(): Mono<Int> = Mono.just(1)\n}\n\nval configWithReactorMonoMonad = SchemaGeneratorConfig(\n  supportedPackages = listOf("myPackage"),\n  hooks = MonadHooks(),\n  dataFetcherFactoryProvider = CustomDataFetcherFactoryProvider())\n\ntoSchema(queries = listOf(TopLevelObject(ReactorQuery())), config = configWithReactorMonoMonad)\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"This will produce"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-graphql",children:"\ntype Query {\n  asynchronouslyDo(): Int\n}\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can find additional example on how to configure the hooks in our ",(0,o.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/graphql-kotlin-schema-generator/src/test/kotlin/com/expediagroup/graphql/generator/SchemaGeneratorAsyncTests.kt",children:"unit\ntests"}),"\nand ",(0,o.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/AsyncQuery.kt",children:"example app"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);