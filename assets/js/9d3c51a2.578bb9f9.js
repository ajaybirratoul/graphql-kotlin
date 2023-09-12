"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||h[u]||o;return n?r.createElement(d,c(c({ref:t},p),{},{components:n})):r.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={id:"schema",title:"Schema"},s=void 0,l={unversionedId:"schema-generator/writing-schemas/schema",id:"schema-generator/writing-schemas/schema",title:"Schema",description:"Schema Object",source:"@site/docs/schema-generator/writing-schemas/schema.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/schema",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/schema",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/schema.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1694541734,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{id:"schema",title:"Schema"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/schema-generator-getting-started"},next:{title:"Types and Fields",permalink:"/graphql-kotlin/docs/7.x.x/schema-generator/writing-schemas/fields"}},p={},m=[{value:"Schema Object",id:"schema-object",level:2}],h={toc:m},u="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)(u,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"schema-object"},"Schema Object"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SchemaGenerator")," automatically generates schema object from the provided list of ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObjects")," representing ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions"),"."),(0,o.kt)("p",null,"In order to provide ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/documenting-schema"},"schema description")," or to specify ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/schema-generator/customizing-schemas/directives"},"schema directives"),", we need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject")," reference to a schema class."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Only annotations are processed on the schema object. Generator will throw an exception if schema class contains any properties or functions.")),(0,o.kt)("p",null,"In the example below, we provide custom description and apply ",(0,o.kt)("inlineCode",{parentName:"p"},"@contact")," directive on the schema object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ContactDirective(\n  name = "My Team Name",\n  url = "https://myteam.slack.com/archives/teams-chat-room-url",\n  description = "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall)."\n)\n@GraphQLDescription("My schema description")\nclass MySchema\n\nclass HelloWorldQuery {\n    fun helloWorld() = "Hello World!"\n}\n\n// generate schema\nval schema = toSchema(\n    config = yourCustomConfig(),\n    queries = listOf(TopLevelObject(HelloWorldQuery())),\n    schemaObject = TopLevelObject(MySchema())\n)\n')),(0,o.kt)("p",null,"Will generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'schema @contact(description : "send urgent issues to [#oncall](https://yourteam.slack.com/archives/oncall).", name : "My Team Name", url : "https://myteam.slack.com/archives/teams-chat-room-url"){\n  query: Query\n}\n\ntype Query {\n    helloWorld: String!\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java")," currently does not include schema description in the generated SDL (it is available in the introspection results only).\nFixed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/graphql-java/graphql-java/pull/2856"},"https://github.com/graphql-java/graphql-java/pull/2856"),".")))}d.isMDXComponent=!0}}]);