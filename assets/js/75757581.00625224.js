"use strict";(self.webpackChunkgraphql_kotlin_docs=self.webpackChunkgraphql_kotlin_docs||[]).push([[3258],{96120:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(74848),s=t(28453);const o={id:"release-proc",title:"Releasing a new version",original_id:"release-proc"},i=void 0,a={id:"contributors/release-proc",title:"Releasing a new version",description:"In order to release a new version we need to draft a new release",source:"@site/versioned_docs/version-3.x.x/contributors/release-proc.md",sourceDirName:"contributors",slug:"/contributors/release-proc",permalink:"/graphql-kotlin/docs/3.x.x/contributors/release-proc",draft:!1,unlisted:!1,editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/contributors/release-proc.md",tags:[],version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1712947896,formattedLastUpdatedAt:"Apr 12, 2024",frontMatter:{id:"release-proc",title:"Releasing a new version",original_id:"release-proc"},sidebar:"docs",previous:{title:"Maven Plugin",permalink:"/graphql-kotlin/docs/3.x.x/plugins/maven-plugin"}},l={},c=[{value:"Release requirements",id:"release-requirements",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["In order to ",(0,n.jsx)(r.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/releases",children:"release a new version"})," we need to draft a new release\nand tag the commit. Releases are following ",(0,n.jsx)(r.a,{href:"https://semver.org/",children:"semantic versioning"})," and specify major, minor and patch version."]}),"\n",(0,n.jsxs)(r.p,{children:["Once release is published it will trigger corresponding ",(0,n.jsx)(r.a,{href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/3.x.x/.github/workflows/release.yml",children:"Github Action"}),"\nbased on the published release event. Release workflow will then proceed to build and publish all library artifacts to ",(0,n.jsx)(r.a,{href:"https://central.sonatype.org/",children:"Maven Central"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"release-requirements",children:"Release requirements"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["tag should specify newly released library version that is following ",(0,n.jsx)(r.a,{href:"https://semver.org/",children:"semantic versioning"})]}),"\n",(0,n.jsx)(r.li,{children:"tag and release name should match"}),"\n",(0,n.jsxs)(r.li,{children:["release should contain the information about all the change sets that were included in the given release. We are using ",(0,n.jsx)(r.code,{children:"release-drafter"})," to help automatically\ncollect this information and generate automatic release notes."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(96540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);