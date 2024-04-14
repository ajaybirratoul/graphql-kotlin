"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3491],{94349:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(74848),t=r(28453);const o={id:"data-loader",title:"Data Loaders"},s=void 0,i={id:"server/data-loader/data-loader",title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/versioned_docs/version-6.x.x/server/data-loader/data-loader.md",sourceDirName:"server/data-loader",slug:"/server/data-loader/",permalink:"/graphql-kotlin/docs/6.x.x/server/data-loader/",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/server/data-loader/data-loader.md",tags:[],version:"6.x.x",lastUpdatedBy:"mitjade",lastUpdatedAt:1713121966,formattedLastUpdatedAt:"Apr 14, 2024",frontMatter:{id:"data-loader",title:"Data Loaders"},sidebar:"docs",previous:{title:"Automatic Persisted Queries (APQ)",permalink:"/graphql-kotlin/docs/6.x.x/server/automatic-persisted-queries/"},next:{title:"Data Loader Instrumentations",permalink:"/graphql-kotlin/docs/6.x.x/server/data-loader/data-loader-instrumentation"}},d={},l=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",level:2},{value:"<code>KotlinDataLoaderRegistryFactory</code>",id:"kotlindataloaderregistryfactory",level:2},{value:"<code>KotlinDataLoaderRegistry</code>",id:"kotlindataloaderregistry",level:2},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",level:2},{value:"DataLoaders and Coroutines",id:"dataloaders-and-coroutines",level:2},{value:"Example",id:"example",level:3}];function c(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Data Loaders are a popular caching pattern from the ",(0,n.jsx)(a.a,{href:"https://github.com/graphql/dataloader",children:"JavaScript GraphQL implementation"}),".\n",(0,n.jsx)(a.code,{children:"graphql-java"})," provides ",(0,n.jsx)(a.a,{href:"https://www.graphql-java.com/documentation/v16/batching/",children:"support for this pattern"}),"\nusing the ",(0,n.jsx)(a.code,{children:"DataLoader"})," and ",(0,n.jsx)(a.code,{children:"DataLoaderRegistry"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Since ",(0,n.jsx)(a.code,{children:"graphql-kotlin"})," allows you to abstract the schema generation and data fetching code, you may not even need\ndata loaders if instead you have some persistent cache on your server."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"class User(val id: ID) {\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"If you still want to use data loaders though, they are supported through the common interfaces."}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"graphql-kotlin-dataloader"})," module provides convenient abstractions over the ",(0,n.jsx)(a.a,{href:"https://github.com/graphql-java/java-dataloader",children:"java-dataloader"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"kotlindataloader",children:(0,n.jsx)(a.code,{children:"KotlinDataLoader"})}),"\n",(0,n.jsxs)(a.p,{children:["To help in the registration of ",(0,n.jsx)(a.code,{children:"DataLoaders"}),", we have created an interface ",(0,n.jsx)(a.code,{children:"KotlinDataLoader"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["This allows for library users to still have full control over the creation of the ",(0,n.jsx)(a.code,{children:"DataLoader"})," and its various configuration\noptions but also allows common server code to handle the registration, generation and execution of the request."]}),"\n",(0,n.jsx)(a.h2,{id:"kotlindataloaderregistryfactory",children:(0,n.jsx)(a.code,{children:"KotlinDataLoaderRegistryFactory"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.a,{href:"/graphql-kotlin/docs/6.x.x/server/graphql-request-handler",children:"GraphQLRequestHandler"})," accepts an optional ",(0,n.jsx)(a.code,{children:"KotlinDataLoaderRegistryFactory"}),".\nwhich generates a new ",(0,n.jsx)(a.code,{children:"KotlinDataLoaderRegistry"})," on every request. The registry is a map of a unique data loader names to a ",(0,n.jsx)(a.code,{children:"DataLoader"})," object that handles the cache for an output type in your graph.\nA ",(0,n.jsx)(a.code,{children:"DataLoader"})," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoaderFactory.newDataLoader<ID, User> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoaderFactory.newDataLoader<ID, User>(\n        { ids ->\n            CompletableFuture.supplyAsync {\n                ids.map { id ->\n                    val friends: List<ID> = friendService.getFriends(id)\n                    userService.getUsers(friends)\n                }\n            }\n        },\n        DataLoaderOptions.newOptions().setCachingEnabled(false)\n    )\n}\n\nval dataLoaderRegistryFactory = KotlinDataLoaderRegistryFactory(\n    UserDataLoader(), FriendsDataLoader()\n)\n\nval dataLoaderRegistry = dataLoaderRegistryFactory.generate()\n'})}),"\n",(0,n.jsx)(a.h2,{id:"kotlindataloaderregistry",children:(0,n.jsx)(a.code,{children:"KotlinDataLoaderRegistry"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader/src/main/kotlin/com/expediagroup/graphql/dataloader/KotlinDataLoaderRegistry.kt",children:"KotlinDataLoaderRegistry"}),"\nis a decorator of the original ",(0,n.jsx)(a.code,{children:"graphql-java"})," ",(0,n.jsx)(a.a,{href:"https://github.com/graphql-java/java-dataloader/blob/master/src/main/java/org/dataloader/DataLoaderRegistry.java",children:"DataLoaderRegistry"}),"\nthat keeps track of all underlying ",(0,n.jsx)(a.code,{children:"DataLoader"}),"s futures. By keeping track of to cache map containing returned futures,\nwe get more granular control when to dispatch data loader calls."]}),"\n",(0,n.jsx)(a.h2,{id:"getvaluefromdataloader",children:(0,n.jsx)(a.code,{children:"getValueFromDataLoader"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"graphql-kotlin-server"})," includes a helpful extension function on the ",(0,n.jsx)(a.code,{children:"DataFetchingEnvironment"})," so that you can easily retrieve values from the data loaders in your schema code."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'class User(val id: ID) {\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"dataloaders-and-coroutines",children:"DataLoaders and Coroutines"}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"graphql-java"})," relies on ",(0,n.jsx)(a.code,{children:"CompletableFuture"}),"s for scheduling and asynchronously executing GraphQL operations.\nWhile we can provide native support for coroutines for data fetchers (aka field resolvers) because they are resolved\nindependently, we cannot easily provide native support for the ",(0,n.jsx)(a.code,{children:"DataLoader"})," pattern as it relies\non ",(0,n.jsx)(a.code,{children:"CompletableFuture"})," state machine internals and we cannot update it to use coroutines without fully rewriting\nGraphQL Java execution engine."]}),"\n",(0,n.jsxs)(a.p,{children:["If you would like to use ",(0,n.jsx)(a.code,{children:"DataLoader"})," pattern in your project, you have to update your data fetchers (aka field resolvers) to return\n",(0,n.jsx)(a.code,{children:"CompletableFuture"})," from the invoked ",(0,n.jsx)(a.code,{children:"DataLoader"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.p,{children:"Consider the following query:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-graphql",children:"fragment UserFragment on User {\n    id\n    name\n}\nquery GetUsersFriends {\n    user_1: user(id: 1) {\n        ...UserFragment\n    }\n    user_2: user(id: 2) {\n        ...UserFragment\n    }\n}\n"})}),"\n",(0,n.jsx)(a.p,{children:"And the corresponding code that will autogenerate schema:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:"class MyQuery(\n    private val userService: UserService\n) : Query {\n    suspend fun getUser(id: Int): User = userService.getUser(id)\n}\n\nclass UserService {\n    suspend fun getUser(id: Int): User = // async logic to get user\n    suspend fun getUsers(ids: List<Int>): List<User> = // async logic to get users\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["When we execute the above query, we will end up calling ",(0,n.jsx)(a.code,{children:"UserService#getUser"})," twice which will result in two independent\ndownstream service/database calls. This problem is called N+1 problem. By using ",(0,n.jsx)(a.code,{children:"DataLoader"})," pattern,\nwe can solve this problem and only make a single downstream request/query."]}),"\n",(0,n.jsxs)(a.p,{children:["Lets create the ",(0,n.jsx)(a.code,{children:"UserDataLoader"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader" // 1\n    override fun getDataLoader() = // 2\n        DataLoaderFactory.newDataLoader<Int, User> { ids, batchLoaderEnvironment ->\n            val coroutineScope = // 3\n                batchLoaderEnvironment.getGraphQLContext()?.get<CoroutineScope>()\n                    ?: CoroutineScope(EmptyCoroutineContext) // 4\n\n            coroutineScope.future { // 5\n                userService.getUsers(ids)\n            }\n        }\n}\n\n'})}),"\n",(0,n.jsx)(a.p,{children:"There are some things going on here:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["We define the ",(0,n.jsx)(a.code,{children:"UserDataLoader"}),' with name "UserDataLoader".']}),"\n",(0,n.jsxs)(a.li,{children:["The ",(0,n.jsx)(a.code,{children:"KotlinDataLoader#getDataLoader()"})," method returns a ",(0,n.jsx)(a.code,{children:"DataLoader<Int, User>"}),", which ",(0,n.jsx)(a.code,{children:"BatchLoader"})," function should return a ",(0,n.jsx)(a.code,{children:"List<User>"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Given that we ",(0,n.jsx)(a.strong,{children:"don't want"})," to change our ",(0,n.jsx)(a.code,{children:"UserService"})," async model that is using coroutines, we need a ",(0,n.jsx)(a.code,{children:"CoroutineScope"}),", ",(0,n.jsx)(a.a,{href:"../../schema-generator/execution/async-models/#coroutines",children:"which is conveniently available"})," in the ",(0,n.jsx)(a.code,{children:"GraphQLContext"})," and accessible through ",(0,n.jsx)(a.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/executions/graphql-kotlin-dataloader-instrumentation/src/main/kotlin/com/expediagroup/graphql/dataloader/instrumentation/extensions/BatchLoaderEnvironmentExtensions.kt#L43",children:(0,n.jsx)(a.code,{children:"DataFetchingEnvironment#getGraphQLContext()"})})," extension function."]}),"\n",(0,n.jsxs)(a.li,{children:["After retrieving the ",(0,n.jsx)(a.code,{children:"CoroutineScope"})," from the ",(0,n.jsx)(a.code,{children:"batchLoaderEnvironment"})," we will be able to execute the ",(0,n.jsx)(a.code,{children:"userService.getUsers(ids)"})," suspendable function."]}),"\n",(0,n.jsxs)(a.li,{children:["We interoperate the suspendable function result to a ",(0,n.jsx)(a.code,{children:"CompletableFuture"})," using ",(0,n.jsx)(a.a,{href:"https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-jdk8/kotlinx.coroutines.future/future.html",children:"coroutineScope.future"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Finally, we need to update ",(0,n.jsx)(a.code,{children:"user"})," field resolver, to return the ",(0,n.jsx)(a.code,{children:"CompletableFuture<User>"})," from the invoked ",(0,n.jsx)(a.code,{children:"DataLoader"}),".\nMake sure to update method signature to also accept the ",(0,n.jsx)(a.code,{children:"dataFetchingEnvironment"})," as you need to pass it to ",(0,n.jsx)(a.code,{children:"DataLoader#load"})," method to be able to execute the request in appropriate coroutine scope."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-kotlin",children:'class MyQuery(\n    private val userService: UserService\n) : Query {\n    fun getUser(id: Int, dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<User> =\n        dataFetchingEnvironment\n            .getDataLoader<Int, Mission>("UserDataLoader")\n            .load(id, dataFetchingEnvironment)\n}\n\nclass UserService {\n    suspend fun getUser(id: Int): User {\n        // logic to get user\n    }\n    suspend fun getUsers(ids: List<Int>): List<User> {\n        // logic to get users, this method is called from the DataLoader\n    }\n}\n'})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,a,r)=>{r.d(a,{R:()=>s,x:()=>i});var n=r(96540);const t={},o=n.createContext(t);function s(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);