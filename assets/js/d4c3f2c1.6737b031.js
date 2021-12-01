"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1061],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(v,i(i({ref:r},p),{},{components:n})):t.createElement(v,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(7294);const o=function(e){var r=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:o},r)}},1395:(e,r,n)=>{n.d(r,{Z:()=>p});var t=n(7294),o=n(944),a=n(6010);const i="tabItem_vU9c",l="tabItemActive_cw6a";var s=37,c=39;const p=function(e){var r=e.lazy,n=e.block,p=e.defaultValue,d=e.values,u=e.groupId,m=e.className,v=(0,o.Z)(),h=v.tabGroupChoices,f=v.setTabGroupChoices,k=(0,t.useState)(p),g=k[0],y=k[1],b=t.Children.toArray(e.children),x=[];if(null!=u){var C=h[u];null!=C&&C!==g&&d.some((function(e){return e.value===C}))&&y(C)}var N=function(e){var r=e.currentTarget,n=x.indexOf(r),t=d[n].value;y(t),null!=u&&(f(u,t),setTimeout((function(){var e,n,t,o,a,i,s,c;(e=r.getBoundingClientRect(),n=e.top,t=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&a<=c&&o<=s&&t>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(l),setTimeout((function(){return r.classList.remove(l)}),2e3))}),150))},w=function(e){var r,n;switch(e.keyCode){case c:var t=x.indexOf(e.target)+1;n=x[t]||x[0];break;case s:var o=x.indexOf(e.target)-1;n=x[o]||x[x.length-1]}null==(r=n)||r.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var r=e.value,n=e.label;return t.createElement("li",{role:"tab",tabIndex:g===r?0:-1,"aria-selected":g===r,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":g===r}),key:r,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:N,onClick:N},n)}))),r?(0,t.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},b.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},9443:(e,r,n)=>{n.d(r,{Z:()=>t});const t=(0,n(7294).createContext)(void 0)},944:(e,r,n)=>{n.d(r,{Z:()=>a});var t=n(7294),o=n(9443);const a=function(){var e=(0,t.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7469:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>c,metadata:()=>p,toc:()=>d,default:()=>m});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(1395),l=n(8215),s=["components"],c={id:"hooks-provider",title:"Schema Generator Hooks Provider"},p={unversionedId:"plugins/hooks-provider",id:"version-4.x.x/plugins/hooks-provider",isDocsHomePage:!1,title:"Schema Generator Hooks Provider",description:"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan",source:"@site/versioned_docs/version-4.x.x/plugins/hooks-provider.mdx",sourceDirName:"plugins",slug:"/plugins/hooks-provider",permalink:"/graphql-kotlin/docs/4.x.x/plugins/hooks-provider",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-4.x.x/plugins/hooks-provider.mdx",version:"4.x.x",lastUpdatedBy:"Shane Myrick",lastUpdatedAt:1638394935,formattedLastUpdatedAt:"12/1/2021",frontMatter:{id:"hooks-provider",title:"Schema Generator Hooks Provider"},sidebar:"version-4.x.x/docs",previous:{title:"Maven Plugin Usage",permalink:"/graphql-kotlin/docs/4.x.x/plugins/maven-plugin-usage"}},d=[{value:"Creating Custom Hooks Service Provider",id:"creating-custom-hooks-service-provider",children:[{value:"Add dependency on graphql-kotlin-hooks-provider",id:"add-dependency-on-graphql-kotlin-hooks-provider",children:[]},{value:"Create new SchemaGeneratorHooksProvider implementation",id:"create-new-schemageneratorhooksprovider-implementation",children:[]},{value:"Create provider configuration file",id:"create-provider-configuration-file",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],u={toc:d};function m(e){var r=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan\nyour classpath for classes implementing ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",(0,a.kt)("inlineCode",{parentName:"p"},"Query"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscription")," interfaces\nand then generate corresponding GraphQL schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". By default, plugins will generate\nthe schema using ",(0,a.kt)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If your project uses custom hooks or needs to generate the federated GraphQL\nschema, you will need to provide an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," that will be used to create an instance of\nyour custom hooks."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," is a service provider interface that exposes a single ",(0,a.kt)("inlineCode",{parentName:"p"},"hooks")," method to generate an instance\nof ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," that will be used to generate your schema. By utilizing Java ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nwe can dynamically load your custom provider from the classpath. Service provider can be provided as part of your project\nsources, included inside of one of your project dependencies or through explicitly provided artifact. Since we need to be\nable to deterministically choose a single hooks provider, generation of schema will fail if there are multiple providers\non the classpath."),(0,a.kt)("h2",{id:"creating-custom-hooks-service-provider"},"Creating Custom Hooks Service Provider"),(0,a.kt)("h3",{id:"add-dependency-on-graphql-kotlin-hooks-provider"},"Add dependency on graphql-kotlin-hooks-provider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface is defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-hooks-provider")," module."),(0,a.kt)(i.Z,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"gradle",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimplementation("com.expediagroup", "graphql-kotlin-hooks-provider", latestVersion)\n'))),(0,a.kt)(l.Z,{value:"maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-hooks-provider</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,a.kt)("h3",{id:"create-new-schemageneratorhooksprovider-implementation"},"Create new SchemaGeneratorHooksProvider implementation"),(0,a.kt)("p",null,"Service provider implementation has to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface that provides a way to instantiate\nschema generator hooks that will be used to generate the GraphQL schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nclass MyCustomSchemaGeneratorHooksProvider : SchemaGeneratorHooksProvider {\n    override fun hooks(): SchemaGeneratorHooks = MyCustomHooks()\n}\n")),(0,a.kt)("h3",{id:"create-provider-configuration-file"},"Create provider configuration file"),(0,a.kt)("p",null,"Service loader provider configuration file should be created under JAR ",(0,a.kt)("inlineCode",{parentName:"p"},"/META-INF/services")," directory (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services"),"\nin default project structure). Name of the provider configuration should be fully qualified service provider interface name, i.e.\n",(0,a.kt)("inlineCode",{parentName:"p"},"com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider")," and contain single entry - a fully qualified\nname of the service provider implementation."),(0,a.kt)("p",null,"Using the example service provider implementation from the above, our project structure should look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"my-project\n|- src\n  |- main\n    |- kotlin\n      |- com\n        |- example\n          |- MyCustomSchemaGeneratorHooksProvider.kt\n    |- resources\n      |- META-INF\n        |- services\n          |- com.expediagroup.graphql.plugin.schema.hooks.SchemaGeneratorHooksProvider\n\n")),(0,a.kt)("p",null,"Our service provider configuration file should have following content"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"com.example.MyCustomSchemaGeneratorHooksProvider\n")),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"We don't support Java 9 module mechanism for declaring ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceLoader")," implementations. As a workaround, you have to define\nyour service providers in the provider configuration file under ",(0,a.kt)("inlineCode",{parentName:"p"},"META-INF/services"),"."))}m.isMDXComponent=!0},6010:(e,r,n)=>{function t(e){var r,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(o&&(o+=" "),o+=r);return o}n.d(r,{Z:()=>o})}}]);