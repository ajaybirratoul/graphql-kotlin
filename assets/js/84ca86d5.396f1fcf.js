"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[642],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"fields",title:"Types and Fields"},l=void 0,c={unversionedId:"schema-generator/writing-schemas/fields",id:"schema-generator/writing-schemas/fields",title:"Types and Fields",description:"graphql-kotlin-schema-generator uses reflection to automatically map",source:"@site/docs/schema-generator/writing-schemas/fields.md",sourceDirName:"schema-generator/writing-schemas",slug:"/schema-generator/writing-schemas/fields",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/fields",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/fields.md",tags:[],version:"current",lastUpdatedBy:"Samuel Vazquez",lastUpdatedAt:1649821089,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"fields",title:"Types and Fields"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/graphql-kotlin/docs/schema-generator/schema-generator-getting-started"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability"}},p={},m=[{value:"Type Inheritance",id:"type-inheritance",level:2}],d={toc:m};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," uses ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reflection.html"},"reflection")," to automatically map\nKotlin classes and enums to the corresponding GraphQL types."),(0,o.kt)("p",null,"By default, all public properties and functions with a ",(0,o.kt)("a",{parentName:"p",href:"https://spec.graphql.org/draft/#sec-Names"},"valid GraphQL name"),"\nand a supported return type will be mapped to a corresponding GraphQL field. Kotlin return types have to be either one of the\n",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars"},"supported scalars")," or a custom Kotlin type defined within supported packages. Nullability information is\nautomatically inferred from the underlying Kotlin return type."),(0,o.kt)("p",null,"Additional built-in validations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"function types aka lambdas property types are currently not supported by the schema generator"),(0,o.kt)("li",{parentName:"ul"},"automatically generated data class methods (",(0,o.kt)("inlineCode",{parentName:"li"},"componentN"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"copy"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"equals"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"hashCode"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"toString"),") are filtered out")),(0,o.kt)("p",null,"Default behavior can be customized. Fields can be ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/renaming-fields"},"renamed")," or ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/excluding-fields"},"excluded"),".\nSupport for additional types or validations can be added by providing an instance of custom ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config#schemageneratorhooks"},"SchemaGeneratorHook"),"."),(0,o.kt)("h2",{id:"type-inheritance"},"Type Inheritance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides support for both GraphQL ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/unions"},"unions")," and ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/writing-schemas/interfaces"},"interfaces"),".\nSuperclasses and interfaces can be excluded from the schema by marking them with ",(0,o.kt)("inlineCode",{parentName:"p"},"@GraphQLIgnore")," annotation or by providing\ncustom filtering logic in a custom ",(0,o.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/customizing-schemas/generator-config#schemageneratorhooks"},"SchemaGeneratorHook"),"."))}h.isMDXComponent=!0}}]);