"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[9101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"unions",title:"Unions"},l=void 0,c={unversionedId:"schema-generator/writing-schemas/unions",id:"version-6.x.x/schema-generator/writing-schemas/unions",title:"Unions",description:"GraphQL Kotlin allows for two ways of defining unions in the schema",source:"@site/versioned_docs/version-6.x.x/schema-generator/writing-schemas/unions.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/unions",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/unions",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-6.x.x/schema-generator/writing-schemas/unions.md",tags:[],version:"6.x.x",lastUpdatedBy:"Martin Gilbey",lastUpdatedAt:1707931880,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"unions",title:"Unions"},sidebar:"docs",previous:{title:"Interfaces",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/interfaces"},next:{title:"Nested Resolvers and Shared Arguments",permalink:"/graphql-kotlin/docs/6.x.x/schema-generator/writing-schemas/nested-arguments"}},p={},d=[{value:"Marker Interfaces",id:"marker-interfaces",level:2},{value:"<code>@GraphQLUnion</code>",id:"graphqlunion",level:2},{value:"Example Usage",id:"example-usage",level:3},{value:"Example Usage",id:"example-usage-1",level:3},{value:"Limitations",id:"limitations",level:3}],u={toc:d},h="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Kotlin allows for two ways of defining unions in the schema"),(0,o.kt)("h2",{id:"marker-interfaces"},"Marker Interfaces"),(0,o.kt)("p",null,"Marker interfaces (i.e. interfaces without any common fields or methods) are exposed as GraphQL union types. All the\ntypes that implement the marker interface, and are available on the classpath, will be automatically exposed as\nobjects in the schema."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"http://spec.graphql.org/June2018/#sec-Unions"},"The GraphQL spec")," does not allow unions to be used as input.\nThis means that while it is valid Kotlin code to have a marker inteface as an argument, upon schema generation, an exception will be thrown.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface BodyPart\n\nclass LeftHand(val field: String): BodyPart\n\nclass RightHand(val property: Int): BodyPart\n\nclass PolymorphicQuery {\n    fun whichHand(whichHand: String): BodyPart = when (whichHand) {\n        "right" -> RightHand(12)\n        else -> LeftHand("hello world")\n    }\n}\n')),(0,o.kt)("p",null,"The above will generate following GraphQL schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union BodyPart = LeftHand | RightHand\n\ntype LeftHand {\n  field: String!\n}\n\ntype RightHand {\n  property: Int!\n}\n\ntype Query {\n  whichHand(whichHand: String!): BodyPart!\n}\n")),(0,o.kt)("h2",{id:"graphqlunion"},(0,o.kt)("inlineCode",{parentName:"h2"},"@GraphQLUnion")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Instead of this custom annotation, the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/custom-type-reference"},"@GraphQLType")," annotation may be a better option")),(0,o.kt)("p",null,"The downside to marker interface unions is that you can not edit classes included in dependencies to implement new schema unions.\nFor example in an SDL-First world you could have this Kotlin class defined in some library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class SharedModel(val foo: String)\n")),(0,o.kt)("p",null,"And then write your schema as the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# From library\ntype SharedModel {\n  foo: String!\n}\n\n# Defined in our schema\ntype ServiceModel {\n  bar: String!\n}\n\n# Defined in our schema\nunion CustomUnion = SharedModel | ServiceModel\n\ntype Query {\n    getModel: CustomUnion\n}\n")),(0,o.kt)("p",null,"But this is not currently possible in the full code-generation approach. Instead, you will need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@GraphQLUnion")," annotation on your functions or properties."),(0,o.kt)("h3",{id:"example-usage"},"Example Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Defined in some other library\nclass SharedModel(val foo: String)\n\n// Our code\nclass ServiceModel(val bar: String)\n\nclass Query {\n    @GraphQLUnion(\n        name = "CustomUnion",\n        possibleTypes = [SharedModel::class, ServiceModel::class],\n        description = "Return one or the other model"\n    )\n    fun getModel(): Any = ServiceModel("abc")\n}\n')),(0,o.kt)("p",null,"If directives are needed, this can also be used as a meta-annotation"),(0,o.kt)("h3",{id:"example-usage-1"},"Example Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Defined in some other library\nclass SharedModel(val foo: String)\n\n// Our code\nclass ServiceModel(val bar: String)\n\n\n@SomeDirective\n@GraphQLUnion(\n    name = "CustomUnion",\n    possibleTypes = [SharedModel::class, ServiceModel::class],\n    description = "Return one or the other model"\n)\nannotation class CustomUnion\n\nclass Query {\n    @CustomUnion\n    fun getModel(): Any = ServiceModel("abc")\n}\n')),(0,o.kt)("p",null,"The annotation requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," of the new union to create and the ",(0,o.kt)("inlineCode",{parentName:"p"},"possibleTypes")," that this union can return.\nHowever since we can not enforce the type checks anymore, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," as the return type."),(0,o.kt)("h3",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"Even when using it as a meta-annotation, it is not always possible to add directives to the union definition\nif the directive annotation cannot apply to an annotation class.\nYou will have to modify the type with ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/generator-config"},"schema generator hooks"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/6.x.x/schema-generator/customizing-schemas/custom-type-reference"},"@GraphQLType")," annotation can be used as a workaround to this issue."))}m.isMDXComponent=!0}}]);