"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6663],{2512:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=(t(8561),["components"]),s={id:"data-loaders",title:"Data Loaders"},d=void 0,l={unversionedId:"server/data-loaders",id:"version-4.x.x/server/data-loaders",title:"Data Loaders",description:"Data Loaders are a popular caching pattern from the JavaScript GraphQL implementation.",source:"@site/versioned_docs/version-4.x.x/server/data-loaders.md",sourceDirName:"server",slug:"/server/data-loaders",permalink:"/graphql-kotlin/docs/4.x.x/server/data-loaders",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/server/data-loaders.md",tags:[],version:"4.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677269153,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{id:"data-loaders",title:"Data Loaders"},sidebar:"version-4.x.x/docs",previous:{title:"GraphQLRequestHandler",permalink:"/graphql-kotlin/docs/4.x.x/server/graphql-request-handler"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/4.x.x/server/server-subscriptions"}},p={},u=[{value:"<code>KotlinDataLoader</code>",id:"kotlindataloader",level:2},{value:"<code>getValueFromDataLoader</code>",id:"getvaluefromdataloader",level:2}],c={toc:u};function h(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Data Loaders are a popular caching pattern from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql/dataloader"},"JavaScript GraphQL implementation"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," provides ",(0,o.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v16/batching/"},"support for this pattern")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry"),"."),(0,o.kt)("p",null,"Since ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," allows you to abstract the schema generation and data fetching code, you may not even need data loaders if instead you have some persistant cache on your server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class User(val id: ID) {\n\n    // The friendService and userService, which have nothing to do with GraphQL,\n    // should be concerned with caching and batch calls instead of your schema classes\n    fun getFriends(): List<User> {\n        val friends: List<ID> = friendService.getFriends(id)\n        return userService.getUsers(friends)\n    }\n\n}\n")),(0,o.kt)("p",null,"If you still want to use data loaders though, they are supported through the common interfaces."),(0,o.kt)("h2",{id:"kotlindataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"KotlinDataLoader")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/server/graphql-request-handler"},"GraphQLRequestHandler")," accepts an optional ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," that will be used on every request.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistryFactory")," generates a new ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaderRegistry")," on every request. The registry is a map of a unique data loader names to a ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," object that handles the cache for an output type in your graph.\nA ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," caches the types by some unique value, usually by the type id, and can handle different types of batch requests."),(0,o.kt)("p",null,"To help in the registration of these various ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoaders"),", we have created a basic interface ",(0,o.kt)("inlineCode",{parentName:"p"},"KotlinDataLoader"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface KotlinDataLoader<K, V> {\n    val dataLoaderName: String\n    fun getDataLoader(): DataLoader<K, V>\n}\n")),(0,o.kt)("p",null,"This allows for library users to still have full control over the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader")," and its various configuraiton options,\nbut then allows common server code to handle the registration, generation on request, and execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserDataLoader : KotlinDataLoader<ID, User> {\n    override val dataLoaderName = "UserDataLoader"\n    override fun getDataLoader() = DataLoader<ID, User>({ ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id -> userService.getUser(id) }\n        }\n    }, DataLoaderOptions.newOptions().setCachingEnabled(false))\n}\n\nclass FriendsDataLoader : KotlinDataLoader<ID, List<User>> {\n    override val dataLoaderName = "FriendsDataLoader"\n    override fun getDataLoader() = DataLoader<ID, List<User>> { ids ->\n        CompletableFuture.supplyAsync {\n            ids.map { id ->\n                val friends: List<ID> = friendService.getFriends(id)\n                userService.getUsers(friends)\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"getvaluefromdataloader"},(0,o.kt)("inlineCode",{parentName:"h2"},"getValueFromDataLoader")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," includes a helpful extension function on the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataFetchingEnvironment")," so that you can easily retrieve values from the data loaders in your schema code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'class User(val id: ID) {\n\n    @GraphQLDescription("Get the users friends using data loader")\n    fun getFriends(dataFetchingEnvironment: DataFetchingEnvironment): CompletableFuture<List<User>> {\n        return dataFetchingEnvironment.getValueFromDataLoader("FriendsDataLoader", id)\n    }\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Because the execution of data loaders is handled by ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),", which runs using ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletionStage"),", currently we can\nnot support ",(0,o.kt)("inlineCode",{parentName:"p"},"suspend")," functions when envoking data loaders. Instead, return the ",(0,o.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," directly from the ",(0,o.kt)("inlineCode",{parentName:"p"},"DataLoader"),"\nresponse in your schema functions. See issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/986"},"#986"),".")))}h.isMDXComponent=!0}}]);