"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4668],{3090:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=(t(8561),["components"]),r={id:"optional-undefined-arguments",title:"Optional Undefined Arguments",original_id:"optional-undefined-arguments"},u=void 0,s={unversionedId:"schema-generator/execution/optional-undefined-arguments",id:"version-3.x.x/schema-generator/execution/optional-undefined-arguments",title:"Optional Undefined Arguments",description:"In GraphQL, input types can be optional which means that the client can either:",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/optional-undefined-arguments.md",sourceDirName:"schema-generator/execution",slug:"/schema-generator/execution/optional-undefined-arguments",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/optional-undefined-arguments",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/optional-undefined-arguments.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1676561815,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{id:"optional-undefined-arguments",title:"Optional Undefined Arguments",original_id:"optional-undefined-arguments"},sidebar:"version-3.x.x/docs",previous:{title:"Contextual Data",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/contextual-data"},next:{title:"Subscriptions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/subscriptions"}},p={},d=[],c={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In GraphQL, input types can be optional which means that the client can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Not specify a value at all"),(0,o.kt)("li",{parentName:"ul"},"Send null explictly"),(0,o.kt)("li",{parentName:"ul"},"Send the non-null type")),(0,o.kt)("p",null,"Optional input types are represented as nullable parameters in Kotlin"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nfun optionalInput(value: String?): String? = value\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'\nquery OptionalInputQuery {\n  undefined: optionalInput\n  null: optionalInput(value: null)\n  foo: optionalInput(value: "foo")\n}\n\n')),(0,o.kt)("p",null,"By default, if an optional input value is not specified, then the execution engine will set the argument in Kotlin to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".\nThis means that you can not tell, by just the value alone, whether the request did not contain any argument or the client explicitly passed in ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"Instead, you should inspect the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment"},"DataFetchingEnvironment")," where you can see if the request had the variable defined and even check parent arguments as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\nfun optionalInput(value: String?, dataFetchingEnvironment: DataFetchingEnvironment): String =\n    if (dataFetchingEnvironment.containsArgument("value")) {\n        "The value was $value"\n    } else {\n        "The value was undefined"\n    }\n\n')))}m.isMDXComponent=!0}}]);