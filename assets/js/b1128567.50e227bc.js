"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6429],{86393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var a=t(74848),i=t(28453);const s={id:"arguments",title:"Arguments"},l=void 0,r={id:"schema-generator/writing-schemas/arguments",title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/versioned_docs/version-7.x.x/schema-generator/writing-schemas/arguments.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-7.x.x/schema-generator/writing-schemas/arguments.md",tags:[],version:"7.x.x",lastUpdatedBy:"mitjade",lastUpdatedAt:1713121966,formattedLastUpdatedAt:"Apr 14, 2024",frontMatter:{id:"arguments",title:"Arguments"},sidebar:"docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars"}},o={},u=[{value:"Input Types",id:"input-types",level:2},{value:"Optional fields",id:"optional-fields",level:2},{value:"Default values",id:"default-values",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"class Query {\n    fun doSomething(value: Int): Boolean = true\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The above Kotlin code will generate following GraphQL schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Query {\n  doSomething(value: Int!): Boolean!\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This behavior is true for all arguments except for the special classes for the ",(0,a.jsx)(n.a,{href:"../execution/contextual-data",children:"GraphQLContext"})," and the ",(0,a.jsx)(n.a,{href:"../execution/data-fetching-environment",children:"DataFetchingEnvironment"})]}),"\n",(0,a.jsx)(n.h2,{id:"input-types",children:"Input Types"}),"\n",(0,a.jsxs)(n.p,{children:["Query, Mutation, and Subscription function arguments are automatically converted to GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",(0,a.jsx)(n.code,{children:"graphql-kotlin-schema-generator"})," will automatically append\nan ",(0,a.jsx)(n.code,{children:"Input"})," suffix to the GraphQL name of input objects."]}),"\n",(0,a.jsx)(n.p,{children:"For example, the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"class WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (widget.value == null) {\n            widget.value = 42\n        }\n        return widget\n    }\n}\n\ndata class Widget(var value: Int? = null) {\n    fun multiplyValueBy(multiplier: Int): Int? = value?.times(multiplier)\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Will generate the following schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"type Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output types."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"All input object fields have to be exposed through a public primary constructor. This primary constructor is used to instantiate\nthe input objects at runtime when resolving the queries."})}),"\n",(0,a.jsxs)(n.p,{children:["If you know a type will only be used for input types you can call your class something like ",(0,a.jsx)(n.code,{children:"CustomTypeInput"}),". The library will not\nappend ",(0,a.jsx)(n.code,{children:"Input"})," if the class name already ends with ",(0,a.jsx)(n.code,{children:"Input"})," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."]}),"\n",(0,a.jsxs)(n.p,{children:["If you would like to restrict an Kotlin class to only being used as input or output, see how to use ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/restricting-input-output",children:"GraphQLValidObjectLocations"})]}),"\n",(0,a.jsx)(n.h2,{id:"optional-fields",children:"Optional fields"}),"\n",(0,a.jsx)(n.p,{children:"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable)."}),"\n",(0,a.jsxs)(n.p,{children:["Therefore, in order for a GraphQL input field to be optional, ",(0,a.jsx)(n.strong,{children:"it needs to be nullable and must have a default value"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'fun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int? = null): String {\n    return "requiredValue=$requiredValue, optionalValue=$optionalValue"\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"default-values",children:"Default values"}),"\n",(0,a.jsxs)(n.p,{children:["Default Kotlin values are supported, however the default value information is not available to the schema due to the ",(0,a.jsx)(n.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53",children:"reflection limitations of Kotlin"}),".\nThe parameters must also be defined as optional (nullable) in the schema, as the only way a default value will be used is when the client does not specify any value in the request."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'fun print(message: String? = "hello"): String? = message\n'})}),"\n",(0,a.jsx)(n.p,{children:"The following operations will return the message in the comments"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:'query PrintMessages {\n    first: print(message = "foo") # foo\n    second: print(message = null) # null\n    third: print # hello\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you need logic to determine when a client passed in a value vs when the default value was used (aka the argument was missing in the request), see ",(0,a.jsx)(n.a,{href:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments",children:"optional undefined arguments"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var a=t(96540);const i={},s=a.createContext(i);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);