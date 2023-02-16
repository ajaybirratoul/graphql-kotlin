"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4756],{5162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>q});var n=t(7462),r=t(7294),l=t(6010),o=t(2466),i=t(6775),u=t(1980),s=t(7392),d=t(12);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function c(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:p(t);return function(e){var a=(0,s.l)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function h(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,l=(0,i.k6)(),o=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((function(e){if(o){var a=new URLSearchParams(l.location.search);a.set(o,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[o,l])]}function g(e){var a,t,n,l,o=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=c(e),g=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),v=g[0],f=g[1],k=h({queryString:u,groupId:s}),b=k[0],x=k[1],y=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,d.Nk)(a),n=t[0],l=t[1],[n,(0,r.useCallback)((function(e){a&&l.set(e)}),[a,l])]),q=y[0],w=y[1],N=function(){var e=null!=b?b:q;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){N&&f(N)}),[N]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);f(e),x(e),w(e)}),[x,w,p]),tabValues:p}}var v=t(2389);const f="tabList__CuJ",k="tabItem_LNqP";function b(e){var a=e.className,t=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,d=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var a=e.currentTarget,t=d.indexOf(a),n=s[t].value;n!==i&&(p(a),u(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=d.indexOf(e.currentTarget)+1;t=null!=(n=d[r])?n:d[0];break;case"ArrowLeft":var l,o=d.indexOf(e.currentTarget)-1;t=null!=(l=d[o])?l:d[d.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},s.map((function(e){var a=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:function(e){return d.push(e)},onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":i===a})}),null!=t?t:a)})))}function x(e){var a=e.lazy,t=e.children,n=e.selectedValue;if(t=Array.isArray(t)?t:[t],a){var l=t.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function y(e){var a=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,a)),r.createElement(x,(0,n.Z)({},e,a)))}function q(e){var a=(0,v.Z)();return r.createElement(y,(0,n.Z)({key:String(a)},e))}},6575:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=t(7462),r=t(3366),l=(t(7294),t(3905)),o=(t(8561),t(4866)),i=t(5162),u=["components"],s={id:"getting-started",title:"Getting Started",slug:"/"},d=void 0,p={unversionedId:"getting-started",id:"version-5.x.x/getting-started",title:"Getting Started",description:"GraphQL Kotlin is a collection of libraries, built on top of graphql-java, that simplify running GraphQL clients and servers in Kotlin.",source:"@site/versioned_docs/version-5.x.x/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/graphql-kotlin/docs/5.x.x/",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-5.x.x/getting-started.mdx",tags:[],version:"5.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1676561815,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{id:"getting-started",title:"Getting Started",slug:"/"},sidebar:"version-5.x.x/docs",next:{title:"Examples",permalink:"/graphql-kotlin/docs/5.x.x/examples"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"Generating a Schema",id:"generating-a-schema",level:2},{value:"Apollo Federation",id:"apollo-federation",level:3},{value:"Running a Server",id:"running-a-server",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Examples",id:"examples",level:2},{value:"Blogs and Videos",id:"blogs-and-videos",level:2},{value:"Additional resources",id:"additional-resources",level:2}],h={toc:m};function g(e){var a=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"GraphQL Kotlin is a collection of libraries, built on top of ",(0,l.kt)("a",{parentName:"p",href:"https://www.graphql-java.com/"},"graphql-java"),", that simplify running GraphQL clients and servers in Kotlin."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Using a JVM dependency manager, link any ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-*")," library to your project."),(0,l.kt)(o.Z,{defaultValue:"gradle",values:[{label:"Gradle Kotlin",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"gradle",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation("com.expediagroup", "graphql-kotlin-spring-server", latestVersion)\n'))),(0,l.kt)(i.Z,{value:"maven",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-spring-server</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),(0,l.kt)("h2",{id:"generating-a-schema"},"Generating a Schema"),(0,l.kt)("p",null,"You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to generate a schema from Kotlin code and expose it with any server library."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/schema-generator-getting-started"},"Schema Generator Getting Started"),"."),(0,l.kt)("h3",{id:"apollo-federation"},"Apollo Federation"),(0,l.kt)("p",null,"Using ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-federation"),", you can generate an ",(0,l.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/federation/federation-spec/"},"Apollo Federation")," compliant schema."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/schema-generator/federation/apollo-federation"},"Apollo Federation"),"."),(0,l.kt)("h2",{id:"running-a-server"},"Running a Server"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," is a combination of the schema generator, federation, and server libraries. If you are looking to run a GraphQL server, this is the place to start."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/server/graphql-server"},"GraphQL Kotlin Server"),"."),(0,l.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-plugins")," can be used to generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-client")," from an existing schema that is easy to use and type-safe."),(0,l.kt)("p",null,"See the docs in ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/client/client-overview"},"Client Overview"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"examples")," module is a collection of working code and examples on how to use all of the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," modules."),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/examples"},"example docs")," for more info."),(0,l.kt)("h2",{id:"blogs-and-videos"},"Blogs and Videos"),(0,l.kt)("p",null,"You can find more posts and recorded conference talks on GraphQL and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," on our ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/5.x.x/blogs-and-videos"},"Blogs and Videos")," page."),(0,l.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://graphql.org/"},"GraphQL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.graphql-java.com/documentation/"},"graphql-java"))))}g.isMDXComponent=!0}}]);