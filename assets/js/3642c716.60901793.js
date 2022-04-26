"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,h=u["".concat(o,".").concat(f)]||u[f]||c[f]||a;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],d={id:"federated-directives",title:"Federated Directives"},o=void 0,s={unversionedId:"schema-generator/federation/federated-directives",id:"schema-generator/federation/federated-directives",title:"Federated Directives",description:"graphql-kotlin supports a number of directives that can be used to annotate a schema and direct certain behaviors.",source:"@site/docs/schema-generator/federation/federated-directives.md",sourceDirName:"schema-generator/federation",slug:"/schema-generator/federation/federated-directives",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-directives",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/federation/federated-directives.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1650988260,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"federated-directives",title:"Federated Directives"},sidebar:"docs",previous:{title:"Federated Schemas",permalink:"/graphql-kotlin/docs/schema-generator/federation/federated-schemas"},next:{title:"Federated Type Resolution",permalink:"/graphql-kotlin/docs/schema-generator/federation/type-resolution"}},p={},c=[{value:"<code>@extends</code> directive",id:"extends-directive",level:2},{value:"<code>@external</code> directive",id:"external-directive",level:2},{value:"<code>@key</code> directive",id:"key-directive",level:2},{value:"<code>@provides</code> directive",id:"provides-directive",level:2},{value:"<code>@requires</code> directive",id:"requires-directive",level:2}],u={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," supports a number of directives that can be used to annotate a schema and direct certain behaviors."),(0,a.kt)("p",null,"For more details, see the ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation Specification"),"."),(0,a.kt)("h2",{id:"extends-directive"},(0,a.kt)("inlineCode",{parentName:"h2"},"@extends")," directive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @extends on OBJECT | INTERFACE\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@extends")," directive is used to represent type extensions in the schema. Native type extensions are currently\nunsupported by the ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," libraries. Federated extended types should have corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"@key")," directive\ndefined that specifies primary key required to fetch the underlying object."),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n   fun newFunctionality(): String = "whatever"\n}\n')),(0,a.kt)("p",null,"will generate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),(0,a.kt)("h2",{id:"external-directive"},(0,a.kt)("inlineCode",{parentName:"h2"},"@external")," directive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @external on FIELD_DEFINITION\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@external")," directive is used to mark a field as owned by another service. This allows service A to use fields from\nservice B while also knowing at runtime the types of that field. ",(0,a.kt)("inlineCode",{parentName:"p"},"@external")," directive is only applicable on federated\nextended types. All the external fields should either be referenced from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"@requires")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@provides"),"\ndirectives field sets."),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  fun newFunctionality(): String = "whatever"\n}\n')),(0,a.kt)("p",null,"will generate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends {\n  id: String! @external\n  newFunctionality: String!\n}\n')),(0,a.kt)("h2",{id:"key-directive"},(0,a.kt)("inlineCode",{parentName:"h2"},"@key")," directive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @key(fields: _FieldSet!) repeatable on OBJECT | INTERFACE\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@key")," directive is used to indicate a combination of fields that can be used to uniquely identify and fetch an\nobject or interface. The specified field set can represent single field (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'"id"'),"), multiple fields (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'"id name"'),") or\nnested selection sets (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'"id user { name }"'),"). Multiple keys can be specified on a target type."),(0,a.kt)("p",null,"Key directives should be specified on the root base type as well as all the corresponding federated (i.e. extended)\ntypes. Key fields specified in the directive field set should correspond to a valid field on the underlying GraphQL\ninterface/object. Federated extended types should also instrument all the referenced key fields with ",(0,a.kt)("inlineCode",{parentName:"p"},"@external"),"\ndirective."),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@KeyDirective(FieldSet("upc"))\nclass Product(val id: String, val upc: String, val name: String)\n')),(0,a.kt)("p",null,"will generate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields: "id") @key(fields: "upc") {\n  id: String!\n  name: String!\n  upc: String!\n}\n')),(0,a.kt)("h2",{id:"provides-directive"},(0,a.kt)("inlineCode",{parentName:"h2"},"@provides")," directive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @provides(fields: _FieldSet!) on FIELD_DEFINITION\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@provides")," directive is used to annotate the expected returned field set from a field on a base type that is\nguaranteed to be selectable by the gateway. This allows you to expose only a subset of fields from the underlying\nfederated object type to be selectable from the federated schema. Provided fields specified in the directive field set\nshould correspond to a valid field on the underlying GraphQL interface/object type. ",(0,a.kt)("inlineCode",{parentName:"p"},"@provides")," directive can only be\nused on fields returning federated extended objects."),(0,a.kt)("p",null,"Example:\nWe might want to expose only name of the user that submitted a review."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\nclass Review(val id: String) {\n  @ProvidesDirective(FieldSet("name"))\n  fun user(): User = getUserByReviewId(id)\n}\n\n@KeyDirective(FieldSet("userId"))\n@ExtendsDirective\nclass User(\n  @ExternalDirective val userId: String,\n  @ExternalDirective val name: String\n)\n')),(0,a.kt)("p",null,"will generate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'type Review @key(fields : "id") {\n  id: String!\n  user: User! @provides(fields : "name")\n}\n\ntype User @key(fields : "userId") @extends {\n  userId: String! @external\n  name: String! @external\n}\n')),(0,a.kt)("h2",{id:"requires-directive"},(0,a.kt)("inlineCode",{parentName:"h2"},"@requires")," directive"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @requires(fields: _FieldSet!) on FIELD_DEFINITON\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@requires")," directive is used to annotate the required input field set from a base type for a resolver. It is used\nto develop a query plan where the required fields may not be needed by the client, but the service may need additional\ninformation from other services. Required fields specified in the directive field set should correspond to a valid field\non the underlying GraphQL interface/object and should be instrumented with ",(0,a.kt)("inlineCode",{parentName:"p"},"@external")," directive. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"@requires"),"\ndirective specifies additional fields (besides the one specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"@key")," directive) that are required to resolve\nfederated type fields, this directive can only be specified on federated extended objects fields."),(0,a.kt)("p",null,"NOTE: fields specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"@requires")," directive will only be specified in the queries that reference those fields.\nThis is problematic for Kotlin as the non nullable primitive properties have to be initialized when they are declared.\nSimplest workaround for this problem is to initialize the underlying property to some dummy value that will be used if\nit is not specified. This approach might become problematic though as it might be impossible to determine whether fields\nwas initialized with the default value or the invalid/default value was provided by the federated query. Another\npotential workaround is to rely on delegation to initialize the property after the object gets created. This will ensure\nthat exception will be thrown if queries attempt to resolve fields that reference the uninitialized property."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@KeyDirective(FieldSet("id"))\n@ExtendsDirective\nclass Product(@ExternalDirective val id: String) {\n  @ExternalDirective\n  var weight: Double by Delegates.notNull()\n\n  @RequiresDirective(FieldSet("weight"))\n  fun shippingCost(): String { ... }\n\n  fun additionalInfo(): String { ... }\n}\n')),(0,a.kt)("p",null,"will generate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'type Product @key(fields : "id") @extends  {\n  additionalInfo: String!\n  id: String! @external\n  shippingCost: String! @requires(fields : "weight")\n  weight: Float! @external\n}\n')))}f.isMDXComponent=!0}}]);