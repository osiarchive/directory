"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?i.createElement(b,o(o({ref:t},s),{},{components:n})):i.createElement(b,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={},c="Operational Bindings",p={unversionedId:"opbinding",id:"opbinding",title:"Operational Bindings",description:"Hierarchical Operational Bindings",source:"@site/docs/opbinding.md",sourceDirName:".",slug:"/opbinding",permalink:"/directory/docs/opbinding",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/opbinding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Signed Operations",permalink:"/directory/docs/signing"},next:{title:"Administration",permalink:"/directory/docs/administration"}},s={},d=[{value:"Hierarchical Operational Bindings",id:"hierarchical-operational-bindings",level:2},{value:"Other Operational Bindings",id:"other-operational-bindings",level:2},{value:"Authentication",id:"authentication",level:2}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operational-bindings"},"Operational Bindings"),(0,a.kt)("h2",{id:"hierarchical-operational-bindings"},"Hierarchical Operational Bindings"),(0,a.kt)("p",null,"The only way hierarchical operational bindings may be created is through the\n",(0,a.kt)("inlineCode",{parentName:"p"},"addEntry")," operation with the ",(0,a.kt)("inlineCode",{parentName:"p"},"targetSystem")," parameter set to the access point\nof the subordinate DSA to which the entry is to be added."),(0,a.kt)("p",null,"There is no way to initiate a hierarchical operational binding as a subordinate\nDSA, but this may change in the future."),(0,a.kt)("h2",{id:"other-operational-bindings"},"Other Operational Bindings"),(0,a.kt)("p",null,"There is no way to initiate any other type of operational binding."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Operational bindings are extremely sensitive matters. For this reason, Meerkat\nDSA ",(0,a.kt)("em",{parentName:"p"},"requires")," at least simple authentication over TLS to authorize a\nDirectory Operational Binding Management Protocol (DOP) request. This can be\nconfigured via the ",(0,a.kt)("inlineCode",{parentName:"p"},"MEERKAT_MIN_AUTH_LEVEL_FOR_OB")," environment variable, which\ncontrols the authentication level required for operational bindings, and the\n",(0,a.kt)("inlineCode",{parentName:"p"},"MEERKAT_MIN_AUTH_LOCAL_QUALIFIER_FOR_OB"),", which controls the local qualifier\nrequired for operational bindings."),(0,a.kt)("p",null,'Even after this, operational bindings require acceptance. The only way to do\nthis currently is with the web administration console. Review the requested\noperational binding and click the "approve" button to approve it. If you do\nnot click "approve" quickly enough, the request will expire and the proposed\noperational binding will be rejected. Currently the timeout is five minutes,\nbut this will eventually be configurable.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It is DANGEROUS to enable the web administration console at all. Please\nensure that it is only available behind a reverse proxy that requires\nauthentication and transport security.")))}h.isMDXComponent=!0}}]);