"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[8352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),o=n(2389),l=n(3725),i=n(6010);const s="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,u=e.block,p=e.defaultValue,d=e.values,m=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,O=(0,r.useState)(b),w=O[0],j=O[1],C=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=y[m];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&j(x)}var S=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==w&&(T(t),j(a),null!=m&&N(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},g)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:S,onClick:S},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},4044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(9877),i=n(8215),s=["components"],c={id:"schema-generator-getting-started",title:"Getting Started"},u=void 0,p={unversionedId:"schema-generator/schema-generator-getting-started",id:"schema-generator/schema-generator-getting-started",title:"Getting Started",description:"Install",source:"@site/docs/schema-generator/schema-generator-getting-started.mdx",sourceDirName:"schema-generator",slug:"/schema-generator/schema-generator-getting-started",permalink:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/schema-generator-getting-started.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1650988260,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"schema-generator-getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/blogs-and-videos"},next:{title:"Types and Fields",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/fields"}},d={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toSchema</code>",id:"toschema",level:2},{value:"<code>TopLevelObject</code>",id:"toplevelobject",level:2},{value:"Dynamic <code>TopLevelObject</code>",id:"dynamic-toplevelobject",level:3}],g={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to your project."),(0,o.kt)(l.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-schema-generator", latestVersion)\n'))),(0,o.kt)(i.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-schema-generator</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides a single function, ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema"),", to generate a schema from Kotlin objects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Widget(val id: Int, val value: String)\n\nclass WidgetQuery {\n  fun widgetById(id: Int): Widget? {\n    // grabs widget from a data source\n  }\n}\n\nclass WidgetMutation {\n  fun saveWidget(value: String): Widget {\n    // some logic for saving widget\n  }\n}\n\nval widgetQuery = WidgetQuery()\nval widgetMutation = WidgetMutation()\nval schema = toSchema(\n  config = yourCustomConfig(),\n  queries = listOf(TopLevelObject(widgetQuery)),\n  mutations = listOf(TopLevelObject(widgetMutation))\n)\n")),(0,o.kt)("p",null,"will generate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"schema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  widgetById(id: Int!): Widget\n}\n\ntype Mutation {\n  saveWidget(value: String!): Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n")),(0,o.kt)("p",null,"Any ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," functions defined on a query, mutation, or subscription Kotlin class will be translated into GraphQL fields on the object\ntype. ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," will then recursively apply Kotlin reflection on the specified classes to generate all\nremaining object types, their properties, functions, and function arguments."),(0,o.kt)("p",null,"The generated ",(0,o.kt)("inlineCode",{parentName:"p"},"GraphQLSchema")," can then be used to expose a GraphQL API endpoint."),(0,o.kt)("h2",{id:"toschema"},(0,o.kt)("inlineCode",{parentName:"h2"},"toSchema")),(0,o.kt)("p",null,"This function accepts four arguments: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions")," are a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject"),"s and will be used to generate corresponding GraphQL root types. See\nbelow on why we use this wrapper class. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," contains all the extra information you need to pass, including\ncustom hooks, supported packages, and name overrides. See the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/toSchema.kt"},"in the\nsource")),(0,o.kt)("h2",{id:"toplevelobject"},(0,o.kt)("inlineCode",{parentName:"h2"},"TopLevelObject")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," uses Kotlin reflection to build a GraphQL schema from given classes using ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-java"),"'s schema builder. We\ndon't just pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass")," though, we have to actually pass an object, because the functions on the object are\ntransformed into the data fetchers. In most cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject")," can be constructed with just an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class Query {\n  fun getNumber() = 1\n}\n\nval topLevelObject = TopLevelObject(Query())\n\ntoSchema(config = config, queries = listOf(topLevelObject))\n")),(0,o.kt)("p",null,"In the above case, ",(0,o.kt)("inlineCode",{parentName:"p"},"toSchema")," will use ",(0,o.kt)("inlineCode",{parentName:"p"},"topLevelObject::class")," as the reflection target, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," as the data fetcher\ntarget."),(0,o.kt)("h3",{id:"dynamic-toplevelobject"},"Dynamic ",(0,o.kt)("inlineCode",{parentName:"h3"},"TopLevelObject")),(0,o.kt)("p",null,"In a lot of cases, such as with Spring AOP, the object (or bean) being used to generate a schema is a dynamic proxy. In\nthis case, ",(0,o.kt)("inlineCode",{parentName:"p"},"topLevelObject::class")," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"Query"),", but rather a generated class that will confuse the schema generator.\nTo specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"KClass")," to use for reflection on a proxy, pass the class to ",(0,o.kt)("inlineCode",{parentName:"p"},"TopLevelObject"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Component\nclass Query {\n  fun getNumber() = 1\n}\n\nval query = getObjectFromBean()\nval customDef = TopLevelObject(query, Query::class)\n\ntoSchema(config, listOf(customDef))\n")))}h.isMDXComponent=!0}}]);