"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[9348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},s="Versioning",c={unversionedId:"versioning",id:"versioning",title:"Versioning",description:"Meerkat DSA roughly uses Semantic Versioning, but it is",source:"@site/docs/versioning.md",sourceDirName:".",slug:"/versioning",permalink:"/directory/docs/versioning",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/versioning.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Changelog for Meerkat DSA",permalink:"/directory/docs/changelog-meerkat"},next:{title:"Support",permalink:"/directory/docs/support"}},p={},u=[{value:"Incrementing the Version",id:"incrementing-the-version",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"versioning"},"Versioning"),(0,a.kt)("p",null,"Meerkat DSA roughly uses ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),', but it is\nnot entirely clear what constitutes a "breaking change" for something other than\na pure API. What about changes to environment variable names, or log messages?\nIn the face of this ambiguity, Meerkat DSA takes a somewhat liberal approach to\nversioning, in part to avoid scaring off new users with repeated major version\nincrements.'),(0,a.kt)("h2",{id:"incrementing-the-version"},"Incrementing the Version"),(0,a.kt)("p",null,"Unfortunately, there is no sure fire way to bump the version currently. I just\nsearch for all files containing the current version and increment those.\nCurrently, the files I change are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./.github/workflows/meerkat.yml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./apps/meerkat-docs/docs/changelog-meerkat.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./apps/meerkat-docs/docs/conformance.md")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./k8s/charts/meerkat-dsa/Chart.yaml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./pkg/control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./pkg/docker-compose.yaml")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./pkg/meerkat-dsa.rb")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"./snap/snapcraft.yaml"))))}d.isMDXComponent=!0}}]);