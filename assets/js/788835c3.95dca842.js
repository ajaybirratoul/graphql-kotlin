"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[1694],{5162:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){var n=e.children,a=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},n)}},4866:(e,n,a)=>{a.d(n,{Z:()=>N});var t=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6775),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:c(a);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,a])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId,l=(0,o.k6)(),i=function(e){var n=e.queryString,a=void 0!==n&&n,t=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function f(e){var n,a,t,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,c=d(e),f=(0,r.useState)((function(){return function(e){var n,a=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:c})})),k=f[0],h=f[1],g=v({queryString:s,groupId:u}),y=g[0],b=g[1],I=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,p.Nk)(n),t=a[0],l=a[1],[t,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),N=I[0],S=I[1],C=function(){var e=null!=y?y:N;return m({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){C&&h(C)}),[C]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),b(e),S(e)}),[b,S,c]),tabValues:c}}var k=a(2389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){var n=e.className,a=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,a=p.indexOf(n),t=u[a].value;t!==o&&(c(n),s(t))},m=function(e){var n,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var t,r=p.indexOf(e.currentTarget)+1;a=null!=(t=p[r])?t:p[0];break;case"ArrowLeft":var l,i=p.indexOf(e.currentTarget)-1;a=null!=(l=p[i])?l:p[p.length-1]}null==(n=a)||n.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},n)},u.map((function(e){var n=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",g,null==i?void 0:i.className,{"tabs__item--active":o===n})}),null!=a?a:n)})))}function b(e){var n=e.lazy,a=e.children,t=e.selectedValue;if(a=Array.isArray(a)?a:[a],n){var l=a.find((function(e){return e.props.value===t}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})})))}function I(e){var n=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(y,(0,t.Z)({},e,n)),r.createElement(b,(0,t.Z)({},e,n)))}function N(e){var n=(0,k.Z)();return r.createElement(I,(0,t.Z)({key:String(n)},e))}},4297:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>m});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),i=(a(8561),a(4866)),o=a(5162),s=["components"],u={id:"client-features",title:"Client Features"},p=void 0,c={unversionedId:"client/client-features",id:"client/client-features",title:"Client Features",description:"Jackson and Kotlinx Serialization Support",source:"@site/docs/client/client-features.mdx",sourceDirName:"client",slug:"/client/client-features",permalink:"/graphql-kotlin/docs/7.x.x/client/client-features",draft:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/client/client-features.mdx",tags:[],version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1677269153,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{id:"client-features",title:"Client Features"},sidebar:"docs",previous:{title:"Client Overview",permalink:"/graphql-kotlin/docs/7.x.x/client/client-overview"},next:{title:"Client Customization",permalink:"/graphql-kotlin/docs/7.x.x/client/client-customization"}},d={},m=[{value:"Jackson and Kotlinx Serialization Support",id:"jackson-and-kotlinx-serialization-support",level:2},{value:"Polymorphic Types Support",id:"polymorphic-types-support",level:2},{value:"Custom Scalar Support",id:"custom-scalar-support",level:2},{value:"Default Enum Values",id:"default-enum-values",level:2},{value:"Auto Generated Documentation",id:"auto-generated-documentation",level:2},{value:"Native Support for Coroutines",id:"native-support-for-coroutines",level:2},{value:"Batch Operation Support",id:"batch-operation-support",level:2},{value:"Optional Input Support",id:"optional-input-support",level:2}],v={toc:m};function f(e){var n=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},v,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jackson-and-kotlinx-serialization-support"},"Jackson and Kotlinx Serialization Support"),(0,l.kt)("p",null,"GraphQL Kotlin supports generation of client data models that are compatible with both ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," (default) and ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"\nformats. Build plugins and ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-spring-client")," default to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Jackson")," whereas ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-kotlin-ktor-client"),"\ndefaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx.serialization"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/client/client-serialization"},"client serialization documentation")," for additional details."),(0,l.kt)("h2",{id:"polymorphic-types-support"},"Polymorphic Types Support"),(0,l.kt)("p",null,"GraphQL supports polymorphic types through unions and interfaces which can be represented in Kotlin as marker and\nregular interfaces. In order to ensure generated objects are not empty, GraphQL queries referencing polymorphic types\nwill automatically generate fallback implementations that will be used if there is no match. Polymorphic queries have to\nexplicitly request ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," field as it is used by serializers to correctly distinguish between different implementations."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"kotlinx-serialization")," currently does not provide mechanism to automatically register polymorphic fallbacks. Fallbacks\nhave to be explicitly configured when creating your ",(0,l.kt)("inlineCode",{parentName:"p"},"GraphQLClientKotlinxSerializer"),"."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val serializerWithFallback = GraphQLClientKotlinxSerializer(jsonBuilder = {\n    serializersModule = SerializersModule {\n        polymorphic(BasicInterface::class) {\n            defaultDeserializer { DefaultBasicInterfaceImplementation.serializer() }\n        }\n    }\n})\nval client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"), serializer = serializerWithFallback)\n')),(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.serialization/issues/1575"},"https://github.com/Kotlin/kotlinx.serialization/issues/1575")," for details.")),(0,l.kt)("p",null,"Given example schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  interfaceQuery: BasicInterface!\n}\n\ninterface BasicInterface {\n  id: Int!\n  name: String!\n}\n\ntype FirstInterfaceImplementation implements BasicInterface {\n  id: Int!\n  intValue: Int!\n  name: String!\n}\n\ntype SecondInterfaceImplementation implements BasicInterface {\n  floatValue: Float!\n  id: Int!\n  name: String!\n}\n")),(0,l.kt)("p",null,"We can query interface field as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query PolymorphicQuery {\n  interfaceQuery {\n    __typename\n    id\n    name\n    ... on FirstInterfaceImplementation {\n      intValue\n    }\n    ... on SecondInterfaceImplementation {\n      floatValue\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Which will generate following data models"),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\n@JsonTypeInfo(\n  use = JsonTypeInfo.Id.NAME,\n  include = JsonTypeInfo.As.PROPERTY,\n  property = "__typename",\n  defaultImpl = DefaultBasicInterfaceImplementation::class\n)\n@JsonSubTypes(value = [com.fasterxml.jackson.annotation.JsonSubTypes.Type(value =\n    FirstInterfaceImplementation::class,\n    name="FirstInterfaceImplementation"),com.fasterxml.jackson.annotation.JsonSubTypes.Type(value\n    = SecondInterfaceImplementation::class, name="SecondInterfaceImplementation")])\ninterface BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface\n\n@Generated\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface\n\n@Generated\ndata class DefaultBasicInterfaceImplementation(\n  override val id: Int,\n  override val name: String\n) : BasicInterface\n'))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\n@Serializable\nsealed class BasicInterface {\n  abstract val id: Int\n  abstract val name: String\n}\n\n@Generated\n@Serializable\n@SerialName(value = "FirstInterfaceImplementation")\ndata class FirstInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val intValue: Int\n) : BasicInterface()\n\n@Generated\n@Serializable\n@SerialName(value = "SecondInterfaceImplementation")\ndata class SecondInterfaceImplementation(\n  override val id: Int,\n  override val name: String,\n  val floatValue: Float\n) : BasicInterface()\n\n@Generated\n@Serializable\ndata class DefaultBasicInterfaceImplementation(\n  override val id: String\n  override val name: String\n) : BasicInterface()\n')))),(0,l.kt)("h2",{id:"custom-scalar-support"},"Custom Scalar Support"),(0,l.kt)("p",null,"By default, custom GraphQL scalars are serialized and ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/type-aliases.html"},"type-aliased"),"\nto a String. GraphQL Kotlin plugins also support custom serialization based on provided configuration."),(0,l.kt)("p",null,"In order to automatically convert between custom GraphQL ",(0,l.kt)("inlineCode",{parentName:"p"},"UUID")," scalar type and ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID"),", we first need to create\nour custom ",(0,l.kt)("inlineCode",{parentName:"p"},"ScalarConverter"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"package com.example.client\n\nimport com.expediagroup.graphql.client.converter.ScalarConverter\nimport java.util.UUID\n\nclass UUIDScalarConverter : ScalarConverter<UUID> {\n    override fun toScalar(rawValue: Any): UUID = UUID.fromString(rawValue.toString())\n    override fun toJson(value: UUID): Any = value.toString()\n}\n")),(0,l.kt)("p",null,"And then configure build plugin by specifying"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Custom GraphQL scalar name"),(0,l.kt)("li",{parentName:"ul"},"Target JVM class name"),(0,l.kt)("li",{parentName:"ul"},"Converter that provides logic to map between GraphQL and Kotlin type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'graphql {\n    packageName = "com.example.generated"\n    endpoint = "http://localhost:8080/graphql"\n    customScalars = listOf(GraphQLScalar("UUID", "java.util.UUID", "com.example.UUIDScalarConverter"))\n}\n')),(0,l.kt)("p",null,"Custom scalar fields will then be automatically converted to a ",(0,l.kt)("inlineCode",{parentName:"p"},"java.util.UUID")," type using appropriate converter/serializer."),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("p",null,"Following converters will be generated under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\npublic class AnyToUUIDConverter : StdConverter<Any, UUID>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: Any): UUID = converter.toScalar(value)\n}\n\n@Generated\npublic class UUIDToAnyConverter : StdConverter<UUID, Any>() {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override fun convert(`value`: UUID): Any = converter.toJson(value)\n}\n")),(0,l.kt)("p",null,"Custom scalars fields will then be annotated with Jackson annotations referencing the above converters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\npublic data class Result(\n  @JsonSerialize(converter = UUIDToAnyConverter::class)\n  @JsonDeserialize(converter = AnyToUUIDConverter::class)\n  public val custom: UUID,\n  @JsonSerialize(contentConverter = UUIDToAnyConverter::class)\n  @JsonDeserialize(contentConverter = AnyToUUIDConverter::class)\n  public val customList: List<UUID>\n)\n"))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("p",null,"Following serializer will be generated under ",(0,l.kt)("inlineCode",{parentName:"p"},"com.example.generated.scalars")," package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Generated\npublic object UUIDSerializer : KSerializer<UUID> {\n  private val converter: UUIDScalarConverter = UUIDScalarConverter()\n\n  public override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("UUID", STRING)\n\n  public override fun serialize(encoder: Encoder, `value`: UUID): Unit {\n    val encoded = converter.toJson(value)\n    encoder.encodeString(encoded.toString())\n  }\n\n  public override fun deserialize(decoder: Decoder): UUID {\n    val jsonDecoder = decoder as JsonDecoder\n    val element = jsonDecoder.decodeJsonElement()\n    val rawContent = element.jsonPrimitive.content\n    return converter.toScalar(rawContent)\n  }\n}\n')),(0,l.kt)("p",null,"Custom scalars fields will then be annotated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@Serializable")," annotation referencing the above serializer."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Generated\n@Serializable\npublic data class Result(\n  @Serializable(with = UUIDSerializer::class)\n  public val custom: UUID,\n  public val customList: List<@Serializable(with = UUIDSerializer::class) UUID>\n)\n")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"/graphql-kotlin/docs/7.x.x/plugins/maven-plugin-goals"},"Maven")," plugin documentation for additional details."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"While custom scalars are most commonly represented using some primitive values (e.g. serializing UUID as String), it is\npossible to use arbitrary objects representation as custom scalar. For example Apollo Federation relies on ",(0,l.kt)("inlineCode",{parentName:"p"},"_Any")," scalar\nto accept federated entity representations which is a JSON map containing ",(0,l.kt)("inlineCode",{parentName:"p"},"__typename")," information and a number of additional\nfields used to uniquely identify the target object."),(0,l.kt)(i.Z,{defaultValue:"jackson",values:[{label:"Jackson",value:"jackson"},{label:"kotlinx.serialization",value:"kotlinx"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"jackson",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Jackson uses reflection to automatically serialize the objects. In order to rely on this behavior for custom scalars,\nwe simply need to implement a pass-through converter."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class AnyScalarConverter : ScalarConverter<Any> {\n    override fun toScalar(rawValue: Any): Any = rawValue\n    override fun toJson(value: Any): Any = value\n}\n")),(0,l.kt)("p",{parentName:"admonition"},"This will allow us to pass arbitrary objects as custom scalar inputs. Given following Federation type and ",(0,l.kt)("inlineCode",{parentName:"p"},"_entities")," query"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'type Product @key(fields : "id") {\n    id: String!\n    name: String!\n}\n\nquery EntitiesQuery($representations: [_Any!]!) {\n    _entities(representations: $representations) {\n        __typename\n        ...on Product { name }\n        }\n    }\n}\n')),(0,l.kt)("p",{parentName:"admonition"},"We can create corresponding ",(0,l.kt)("inlineCode",{parentName:"p"},"ProductEntityRepresentation")," data class and use it in our generated query."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class ProductEntityRepresentation(val id: String) {\n    val __typename: String = "Product"\n}\n\nval entityData = client.execute(EntitiesQuery(variables = EntitiesQuery.Variables(representations = listOf(ProductEntityRepresentation(id = "apollo-federation")))))\n'))),(0,l.kt)(o.Z,{value:"kotlinx",mdxType:"TabItem"},(0,l.kt)("p",{parentName:"admonition"},"Using kotlinx-serialization we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonObject")," to represent arbitrary objects as custom scalars."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class AnyScalarConverter : ScalarConverter<JsonObject> {\n    override fun toScalar(rawValue: Any): JsonObject = Json.parseToJsonElement(rawValue.toString()).jsonObject\n    override fun toJson(value: JsonObject): Any = value\n}\n")),(0,l.kt)("p",{parentName:"admonition"},"This will allow us to pass arbitrary objects as custom scalar inputs. Given following Federation type and ",(0,l.kt)("inlineCode",{parentName:"p"},"_entities")," query"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},'type Product @key(fields : "id") {\n    id: String!\n    name: String!\n}\n\nquery EntitiesQuery($representations: [_Any!]!) {\n    _entities(representations: $representations) {\n        __typename\n        ...on Product { name }\n        }\n    }\n}\n')),(0,l.kt)("p",{parentName:"admonition"},"We can then represent product entity representation as ",(0,l.kt)("inlineCode",{parentName:"p"},"JsonObject")," and use it in our generated query."),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val entity = Json.decodeFromString<JsonObject>(\n    """\n    |{\n    |  "__typename": "Product",\n    |  "id": "apollo-federation"\n    |}\n    """.trimMargin()\n)\n\nval entityData = client.execute(EntitiesQuery(variables = EntitiesQuery.Variables(representations = listOf(entity))))\n'))))),(0,l.kt)("h2",{id:"default-enum-values"},"Default Enum Values"),(0,l.kt)("p",null,"Enums represent predefined set of values. Adding additional enum values could be a potentially breaking change as your\nclients may not be able to process it. GraphQL Kotlin Client automatically adds default ",(0,l.kt)("inlineCode",{parentName:"p"},"__UNKNOWN_VALUE")," to all generated\nenums as a catch all safeguard for handling new enum values."),(0,l.kt)("h2",{id:"auto-generated-documentation"},"Auto Generated Documentation"),(0,l.kt)("p",null,"GraphQL Kotlin build plugins automatically pull in GraphQL descriptions of the queried fields from the target schema and\nadd it as KDoc to corresponding data models."),(0,l.kt)("p",null,"Given simple GraphQL object definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'"Some basic description"\ntype BasicObject {\n  "Unique identifier"\n  id: Int!\n  "Object name"\n  name: String!\n}\n')),(0,l.kt)("p",null,"Will result in a corresponding auto generated data class"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"/**\n * Some basic description\n */\n @Generated\ndata class BasicObject(\n  /**\n   * Unique identifier\n   */\n  val id: Int,\n  /**\n   * Object name\n   */\n  val name: String\n)\n")),(0,l.kt)("h2",{id:"native-support-for-coroutines"},"Native Support for Coroutines"),(0,l.kt)("p",null,"GraphQL Kotlin Client is a generic interface that exposes ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," methods that will suspend your GraphQL operation until\nit gets a response back without blocking the underlying thread. Reference Ktor and Spring WebClient based implementations\noffer fully asynchronous communication through Kotlin coroutines. In order to fetch data asynchronously you should wrap\nyour client execution in ",(0,l.kt)("inlineCode",{parentName:"p"},"launch")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," coroutine builder and explicitly ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," for their results."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/reference/coroutines-overview.html"},"Kotlin coroutines documentation")," for additional details."),(0,l.kt)("h2",{id:"batch-operation-support"},"Batch Operation Support"),(0,l.kt)("p",null,"GraphQL Kotlin Clients provide out of the box support for batching multiple client operations into a single GraphQL request.\nBatch requests are sent as an array of individual GraphQL requests and clients expect the server to respond with a corresponding\narray of GraphQL responses. Each response is then deserialized to a corresponding result type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val client = GraphQLKtorClient(url = URL("http://localhost:8080/graphql"))\nval firstQuery = FirstQuery(variables = FirstQuery.Variables(foo = "bar"))\nval secondQuery = SecondQuery(variables = SecondQuery.Variables(foo = "baz"))\n\nval results: List<GraphQLResponse<*>> = client.execute(listOf(firstQuery, secondQuery))\n')),(0,l.kt)("h2",{id:"optional-input-support"},"Optional Input Support"),(0,l.kt)("p",null,"In the GraphQL world, input types can be optional which means that the client can specify a value, specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," value\nOR don't specify any value. This is in contrast with the JVM world where objects can either have some specific value or\ndon't have any value (i.e. are ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"). By default, GraphQL Kotlin Client treats ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," Kotlin values as unspecified, which\nmeans they will skip all ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," values when serializing the request, e.g. given following query"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query OptionalInputQuery($optionalValue: String) {\n  optional(value: $optionalValue)\n")),(0,l.kt)("p",null,"GraphQL Kotlin plugins will generate corresponding POJO that defines ",(0,l.kt)("inlineCode",{parentName:"p"},"Variables")," as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"public data class Variables(\n  public val optionalValue: String? = null\n)\n")),(0,l.kt)("p",null,"Regardless whether we specify ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalValue")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or rely on the default value, this field won't be serialized,\ni.e. variables will be serialized as an empty JSON object ",(0,l.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,l.kt)("p",null,"By specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"useOptionalInputWrapper = true")," plugin configuration option, we can opt-in to a behavior that supports\nthree states - defined, ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," or undefined. Generated code will then use ",(0,l.kt)("inlineCode",{parentName:"p"},"OptionalInput")," wrapper to represent those states.\nSee ",(0,l.kt)("a",{parentName:"p",href:"../plugins/gradle-plugin-tasks"},"Gradle")," and ",(0,l.kt)("a",{parentName:"p",href:"../plugins/maven-plugin-goals"},"Maven")," plugin for configuration details."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'public data class Variables(\n  public val optionalValue: OptionalInput<String> = OptionalInput.Undefined\n)\n\n// usage\n// - same behavior as default null, serialized as {}\nval undefinedVariables = Variables(optionalValue = OptionalInput.Undefined)\n\n// - serialized as {"optionalValue": null}\nval nullVariables = Variables(optionalValue = OptionalInput.Defined(null))\n\n// - serialized as {"optionalValue": "foo"}\nval definedVariables = Variables(optionalValue = OptionalInput.Defined("foo")\n')))}f.isMDXComponent=!0}}]);