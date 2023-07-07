"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[4802],{85162:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(67294),i=a(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:a},n)}},74866:(e,n,a)=>{a.d(n,{Z:()=>x});var t=a(87462),i=a(67294),r=a(86010),o=a(12466),l=a(76775),s=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){var n,a;return null!=(n=null==(a=i.Children.map(e,(function(e){if(!e||(0,i.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function g(e){var n=e.values,a=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:c(a);return function(e){var n=(0,p.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,r=(0,l.k6)(),o=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,s._X)(o),(0,i.useCallback)((function(e){if(o){var n=new URLSearchParams(r.location.search);n.set(o,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}}),[o,r])]}function v(e){var n,a,t,r,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,p=e.groupId,c=g(e),v=(0,i.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var i=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:o,tabValues:c})})),f=v[0],k=v[1],h=m({queryString:s,groupId:p}),b=h[0],I=h[1],x=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,u.Nk)(n),t=a[0],r=a[1],[t,(0,i.useCallback)((function(e){n&&r.set(e)}),[n,r])]),y=x[0],N=x[1],w=function(){var e=null!=b?b:y;return d({value:e,tabValues:c})?e:null}();return(0,i.useLayoutEffect)((function(){w&&k(w)}),[w]),{selectedValue:f,selectValue:(0,i.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);k(e),I(e),N(e)}),[I,N,c]),tabValues:c}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var n=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,p=e.tabValues,u=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,g=function(e){var n=e.currentTarget,a=u.indexOf(n),t=p[a].value;t!==l&&(c(n),s(t))},d=function(e){var n,a=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":var t,i=u.indexOf(e.currentTarget)+1;a=null!=(t=u[i])?t:u[0];break;case"ArrowLeft":var r,o=u.indexOf(e.currentTarget)-1;a=null!=(r=u[o])?r:u[u.length-1]}null==(n=a)||n.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n)},p.map((function(e){var n=e.value,a=e.label,o=e.attributes;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:g},o,{className:(0,r.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===n})}),null!=a?a:n)})))}function b(e){var n=e.lazy,a=e.children,t=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){var o=r.find((function(e){return e.props.value===t}));return o?(0,i.cloneElement)(o,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})})))}function I(e){var n=v(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},i.createElement(h,(0,t.Z)({},e,n)),i.createElement(b,(0,t.Z)({},e,n)))}function x(e){var n=(0,f.Z)();return i.createElement(I,(0,t.Z)({key:String(n)},e))}},55299:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var t=a(87462),i=a(63366),r=(a(67294),a(3905)),o=(a(95657),a(74866)),l=a(85162),s=["components"],p={id:"maven-plugin-usage-graalvm",title:"Maven Plugin GraalVM Usage",sidebar_label:"GraalVM Native Image"},u=void 0,c={unversionedId:"plugins/maven-plugin-usage-graalvm",id:"plugins/maven-plugin-usage-graalvm",title:"Maven Plugin GraalVM Usage",description:"GraalVm is a high performance runtime from Oracle that supports Ahead-of-Time (AOT) compilation",source:"@site/docs/plugins/maven-plugin-usage-graalvm.md",sourceDirName:"plugins",slug:"/plugins/maven-plugin-usage-graalvm",permalink:"/graphql-kotlin/docs/7.x.x/plugins/maven-plugin-usage-graalvm",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/maven-plugin-usage-graalvm.md",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1688768417,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"maven-plugin-usage-graalvm",title:"Maven Plugin GraalVM Usage",sidebar_label:"GraalVM Native Image"},sidebar:"docs",previous:{title:"Generating SDL",permalink:"/graphql-kotlin/docs/7.x.x/plugins/maven-plugin-usage-sdl"},next:{title:"Schema Generator Hooks Provider",permalink:"/graphql-kotlin/docs/7.x.x/plugins/hooks-provider"}},g={},d=[{value:"Ktor GraalVM Native Image",id:"ktor-graalvm-native-image",level:2},{value:"Spring GraalVM Native Image",id:"spring-graalvm-native-image",level:2}],m={toc:d},v="wrapper";function f(e){var n=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(v,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.graalvm.org/"},"GraalVm")," is a high performance runtime from Oracle that supports Ahead-of-Time (AOT) compilation\nthat allows you to build native images. By shifting compilation to the build time, we can create binaries that are\n",(0,r.kt)("strong",{parentName:"p"},"already optimized so they start almost instantaneously with immediate peak performance"),". Compiled code is also much\nmore memory efficient as we no longer need the big memory overhead of running the JVM."),(0,r.kt)("p",null,"In order to generate GraalVM Native image we need to provide the information about all the dynamic JVM features that our\napplication relies on. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," generates schema directly from your source code using reflections, we need\nto capture this information to make it available at build time. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql-kotlin")," also relies on classpath scanning\nto look up all polymorphic types implementations as well as to locate all the (Apollo) Federated entity types."),(0,r.kt)("h2",{id:"ktor-graalvm-native-image"},"Ktor GraalVM Native Image"),(0,r.kt)("p",null,"Given following schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class NativeExampleQuery : Query {\n    fun helloWorld() = "Hello World"\n}\n')),(0,r.kt)("p",null,"We first need to configure our server to avoid class scanning. Even though our example schema does not contain any\npolymorphic types, ",(0,r.kt)("strong",{parentName:"p"},"we still need to explicitly opt-out of class scanning by providing type hierarchy"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun Application.graphQLModule() {\n    install(GraphQL) {\n        schema {\n            packages = listOf("com.example")\n            queries = listOf(\n                HelloWorldQuery()\n            )\n        }\n        // mapping between interfaces/union KClass and their implementation KClasses\n        typeHierarchy = mapOf()\n    }\n    install(Routing) {\n        graphQLPostRoute()\n        graphiQLRoute()\n    }\n}\n')),(0,r.kt)("p",null,"We then need to update our build with native configuration"),(0,r.kt)(o.Z,{defaultValue:"native",values:[{label:"Original POM File",value:"original"},{label:"Native POM File",value:"native"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"original",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- lib versions --\x3e\n        <ktor.version>2.2.4</ktor.version>\n        <logback.version>1.4.7</logback.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>io.ktor</groupId>\n            <artifactId>ktor-server-cio-jvm</artifactId>\n            <version>${ktor.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>${logback.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <version>3.3.0</version>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <addClasspath>true</addClasspath>\n                            <mainClass>com.example.ApplicationKt</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n'))),(0,r.kt)(l.Z,{value:"native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- lib versions --\x3e\n        <ktor.version>2.2.4</ktor.version>\n        <logback.version>1.4.7</logback.version>\n        <native-maven-plugin.version>0.9.21</native-maven-plugin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-ktor-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>io.ktor</groupId>\n            <artifactId>ktor-server-cio-jvm</artifactId>\n            <version>${ktor.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>ch.qos.logback</groupId>\n            <artifactId>logback-classic</artifactId>\n            <version>${logback.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <executions>\n                    <execution>\n                        <id>compile</id>\n                        <goals>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-jar-plugin</artifactId>\n                <version>3.3.0</version>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <addClasspath>true</addClasspath>\n                            <mainClass>com.example.ApplicationKt</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n            </plugin>\n            \x3c!-- 1. configure GraphQL Kotlin GraalVM plugin --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-graalvm-metadata</goal>\n                        </goals>\n                        <configuration>\n                            <packages>com.example</packages>\n                            <mainClassName>com.example.ApplicationKt</mainClassName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n    \x3c!-- 2. configure GraalVM Native Maven plugin --\x3e\n    <profiles>\n        <profile>\n            <id>native</id>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>org.graalvm.buildtools</groupId>\n                        <artifactId>native-maven-plugin</artifactId>\n                        <version>${native-maven-plugin.version}</version>\n                        <extensions>true</extensions>\n                        <executions>\n                            <execution>\n                                <id>build-native</id>\n                                <goals>\n                                    <goal>compile-no-fork</goal>\n                                </goals>\n                                <phase>package</phase>\n                            </execution>\n                        </executions>\n                        <configuration>\n                            <verbose>true</verbose>\n                            <buildArgs>\n                                <arg>--initialize-at-build-time=io.ktor,kotlin,ch.qos.logback,org.slf4j</arg>\n                                <arg>-H:+ReportExceptionStackTraces</arg>\n                            </buildArgs>\n                            <metadataRepository>\n                                <enabled>true</enabled>\n                            </metadataRepository>\n                        </configuration>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n')),(0,r.kt)("p",null,"We need to make following changes to be able to generate GraalVM native image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure GraphQL Kotlin plugin to generate GraalVM metadata")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This goal has to run AFTER ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," but before ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," phase. It defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"process-classes")," phase.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html"},"GraalVM Native Maven plugin"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"GraalVM recommends to create separate profile that simplifies native image creation. Alternatively you can also generate\nnative image by explicitly executing ",(0,r.kt)("inlineCode",{parentName:"p"},"native-image")," goal.")))),(0,r.kt)("p",null,"Once the build is configured we can then generate our native image by running ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," command with ",(0,r.kt)("inlineCode",{parentName:"p"},"native")," profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> ./mvnw -Pnative package\n")),(0,r.kt)("p",null,"Native executable image will then be generated under ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory."),(0,r.kt)("h2",{id:"spring-graalvm-native-image"},"Spring GraalVM Native Image"),(0,r.kt)("p",null,"Given following schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Component\nclass NativeExampleQuery : Query {\n    fun helloWorld() = "Hello World"\n}\n')),(0,r.kt)("p",null,"We first need to configure our server to avoid class scanning. Even though our example schema does not contain any\npolymorphic types, ",(0,r.kt)("strong",{parentName:"p"},"we still need to explicitly opt-out of class scanning by providing type hierarchy"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@SpringBootApplication\nclass Application {\n    @Bean\n    fun typeResolver(): GraphQLTypeResolver = SimpleTypeResolver(mapOf())\n}\n\nfun main(args: Array<String>) {\n    runApplication<Application>(*args)\n}\n")),(0,r.kt)("p",null,"We then need to update our build with native configuration"),(0,r.kt)(o.Z,{defaultValue:"native",values:[{label:"Original POM File",value:"original"},{label:"Native POM File",value:"native"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"original",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- plugin versions --\x3e\n        <spring-boot.version>3.0.6</spring-boot.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>${spring-boot.version}</version>\n            </plugin>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <args>\n                        <arg>-Xjsr305=strict</arg>\n                    </args>\n                    <compilerPlugins>\n                        <plugin>spring</plugin>\n                    </compilerPlugins>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-allopen</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n'))),(0,r.kt)(l.Z,{value:"native",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.example</groupId>\n    <artifactId>example-graalvm-server</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <properties>\n        <kotlin.jvmTarget>17</kotlin.jvmTarget>\n        <kotlin.version>1.7.22</kotlin.version>\n        <graphql-kotlin.version>${latestGraphqlKotlinVersion}</graphql-kotlin.version>\n        \x3c!-- plugin versions --\x3e\n        <spring-boot.version>3.0.6</spring-boot.version>\n        <native-maven-plugin.version>0.9.21</native-maven-plugin.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>com.expediagroup</groupId>\n            <artifactId>graphql-kotlin-spring-server</artifactId>\n            <version>${graphql-kotlin.version}</version>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <sourceDirectory>${project.basedir}/src/main/kotlin</sourceDirectory>\n        <testSourceDirectory>${project.basedir}/src/test/kotlin</testSourceDirectory>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <version>${spring-boot.version}</version>\n            </plugin>\n            <plugin>\n                <groupId>org.jetbrains.kotlin</groupId>\n                <artifactId>kotlin-maven-plugin</artifactId>\n                <version>${kotlin.version}</version>\n                <configuration>\n                    <args>\n                        <arg>-Xjsr305=strict</arg>\n                    </args>\n                    <compilerPlugins>\n                        <plugin>spring</plugin>\n                    </compilerPlugins>\n                    <jvmTarget>${kotlin.jvmTarget}</jvmTarget>\n                </configuration>\n                <dependencies>\n                    <dependency>\n                        <groupId>org.jetbrains.kotlin</groupId>\n                        <artifactId>kotlin-maven-allopen</artifactId>\n                        <version>${kotlin.version}</version>\n                    </dependency>\n                </dependencies>\n            </plugin>\n            \x3c!-- 1. configure GraphQL Kotlin GraalVM plugin --\x3e\n            <plugin>\n                <groupId>com.expediagroup</groupId>\n                <artifactId>graphql-kotlin-maven-plugin</artifactId>\n                <version>${graphql-kotlin.version}</version>\n                <executions>\n                    <execution>\n                        <goals>\n                            <goal>generate-graalvm-metadata</goal>\n                        </goals>\n                        <configuration>\n                            <packages>com.example</packages>\n                            <mainClassName>com.example.ApplicationKt</mainClassName>\n                        </configuration>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n    \x3c!-- 2. configure GraalVM Native Maven plugin --\x3e\n    <profiles>\n        <profile>\n            <id>native</id>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>org.graalvm.buildtools</groupId>\n                        <artifactId>native-maven-plugin</artifactId>\n                        <version>${native-maven-plugin.version}</version>\n                        <extensions>true</extensions>\n                        <executions>\n                            <execution>\n                                <id>build-native</id>\n                                <goals>\n                                    <goal>compile-no-fork</goal>\n                                </goals>\n                                <phase>package</phase>\n                            </execution>\n                        </executions>\n                        <configuration>\n                            <verbose>true</verbose>\n                            <metadataRepository>\n                                <enabled>true</enabled>\n                            </metadataRepository>\n                        </configuration>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n')),(0,r.kt)("p",null,"We need to make following changes to be able to generate GraalVM native image:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure GraphQL Kotlin plugin to generate GraalVM metadata")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This goal has to run AFTER ",(0,r.kt)("inlineCode",{parentName:"p"},"compile")," but before ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," phase. It defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"process-classes")," phase.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"https://graalvm.github.io/native-build-tools/latest/maven-plugin.html"},"GraalVM Native Maven plugin"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"GraalVM recommends to create separate profile that simplifies native image creation. Alternatively you can also generate\nnative image by explicitly executing ",(0,r.kt)("inlineCode",{parentName:"p"},"native-image")," goal.")))),(0,r.kt)("p",null,"Once the build is configured we can then generate our native image by running ",(0,r.kt)("inlineCode",{parentName:"p"},"package")," command with ",(0,r.kt)("inlineCode",{parentName:"p"},"native")," profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> ./mvnw -Pnative package\n")),(0,r.kt)("p",null,"Native executable image will then be generated under ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," directory."))}f.isMDXComponent=!0}}]);