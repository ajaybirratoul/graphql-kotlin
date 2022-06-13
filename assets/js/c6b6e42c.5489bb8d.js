"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[6199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),o=n(2389),i=n(3725),l=n(6010);const s="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,c=e.block,p=e.defaultValue,u=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=u?u:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,x=k.setTabGroupChoices,N=(0,r.useState)(b),w=N[0],E=N[1],I=[],O=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=y[m];null!=T&&T!==w&&g.some((function(e){return e.value===T}))&&E(T)}var F=function(e){var t=e.currentTarget,n=I.indexOf(t),a=g[n].value;a!==w&&(O(t),E(a),null!=m&&x(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return I.push(e)},onKeyDown:S,onFocus:F,onClick:F},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],d={id:"apollo-federation",title:"Apollo Federation"},c=void 0,p={unversionedId:"schema-generator/federation/apollo-federation",id:"version-4.x.x/schema-generator/federation/apollo-federation",title:"Apollo Federation",description:"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value",source:"@site/versioned_docs/version-4.x.x/schema-generator/federation/apollo-federation.mdx",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/apollo-federation",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/apollo-federation",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/schema-generator/federation/apollo-federation.mdx",tags:[],version:"4.x.x",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1655161182,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"apollo-federation",title:"Apollo Federation"},sidebar:"version-4.x.x/docs",previous:{title:"Introspection",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/execution/introspection"},next:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/4.x.x/schema-generator/federation/federated-schemas"}},u={},m=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>toFederatedSchema</code>",id:"tofederatedschema",level:3},{value:"Example",id:"example",level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In many cases, exposing single GraphQL API that exposes unified view of all the available data provides tremendous value\nto their clients. As the underlying graph scales, managing single monolithic GraphQL server might become less and less\nfeasible making it much harder to manage and leading to unnecessary bottlenecks. Migrating towards federated model with\nan API gateway and a number of smaller GraphQL services behind it alleviates some of those problems and allows teams to\nscale their graphs more easily."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/introduction/"},"Apollo Federation")," is an architecture for\ncomposing multiple GraphQL services into a single graph. Federated schemas rely on a number of custom directives to\ninstrument the behavior of the underlying graph and convey the relationships between different schema types. Each individual\nGraphQL server generates a valid GraphQL schema and can be run independently. This is in contrast with a traditional schema\nstitching approach where relationships between individual services, i.e. linking configuration, is configured at the GraphQL\ngateway level."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Using a JVM dependency manager, link ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," to your project."),(0,o.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-federation", latestVersion)\n'))),(0,o.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-federation</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation")," build on top of ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," and adds a few extra methods and class to use to generate federation\ncompliant schemas."),(0,o.kt)("h3",{id:"tofederatedschema"},(0,o.kt)("inlineCode",{parentName:"h3"},"toFederatedSchema")),(0,o.kt)("p",null,"Just like the basic ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/schema-generator-getting-started"},"toSchema"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," accepts four parameters: ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mutations")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"subscriptions"),".\nThe difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," class is of type ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/FederatedSchemaGeneratorConfig.kt"},"FederatedSchemaGeneratorConfig"),".\nThis class extends the ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/4.x.x/schema-generator/customizing-schemas/generator-config"},"base configuration class")," and adds some default logic. You can override the logic if needed, but do so with caution as you may no longer generate a spec compliant schema."),(0,o.kt)("p",null,"You can see the definition for ",(0,o.kt)("inlineCode",{parentName:"p"},"toFederatedSchema")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-federation/src/main/kotlin/com/expediagroup/graphql/generator/federation/toFederatedSchema.kt"},"in the\nsource")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(fields = FieldSet("id"))\ndata class User(\n  val id: ID,\n  val name: String\n)\n\nclass Query {\n  fun getUsers(): List<User> = getUsersFromDB()\n}\n\nval config = FederatedSchemaGeneratorConfig(\n  supportedPackages = "com.example"\n)\n\ntoFederatedSchema(\n  config = config,\n  queries = listOf(TopLevelObject(Query()))\n)\n')),(0,o.kt)("p",null,"will generate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'# Federation spec types\nscalar _Any\nscalar _FieldSet\n\nunion _Entity\n\ntype _Service {\n   sdl: String!\n}\n\ndirective @external on FIELD_DEFINITION\ndirective @requires(fields: _FieldSet) on FIELD_DEFINITION\ndirective @provides(fields: _FieldSet) on FIELD_DEFINITION\ndirective @key(fields: _FieldSet) on OBJECT | INTERFACE\ndirective @extends on OBJECT | INTERFACE\n\n# Schema types\ntype Query @extends {\n   getUsers: [User!]!\n\n   _entities(representations: [_Any!]!): [_Entity]!\n   _service: _Service!\n}\n\ntype User @key(fields : "id") {\n   id: ID!\n   name: String!\n}\n')))}f.isMDXComponent=!0}}]);