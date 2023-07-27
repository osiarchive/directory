"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[4763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Why Not LDAP?",c={unversionedId:"why-not-ldap",id:"why-not-ldap",title:"Why Not LDAP?",description:"LDAP is a perfectly fine protocol, and in many respects, it simplifies access to",source:"@site/docs/why-not-ldap.md",sourceDirName:".",slug:"/why-not-ldap",permalink:"/directory/docs/why-not-ldap",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/why-not-ldap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to X.500 Directory Systems",permalink:"/directory/docs/intro"},next:{title:"Uses",permalink:"/directory/docs/uses"}},p={},d=[],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-not-ldap"},"Why Not LDAP?"),(0,o.kt)("p",null,"LDAP is a perfectly fine protocol, and in many respects, it simplifies access to\ndirectories. However, it was invented at a time when the X.500 standards had not\ndefined the Internet Directly-Mapped (IDM) transport, which allows directory\nprotocols to be transported over TCP/IP. Since TCP/IP became the de facto\nstandard for transport on the Internet, this made LDAP much more appealing."),(0,o.kt)("p",null,"However, now we have IDM, as well as ISO Transport over TCP (ITOT). If you look\nat how LDAP and DAP work under the hood, they use similar encodings, so easier\nimplementation of an LDAP client is not much of a selling point (although\nimplementing an LDAP ",(0,o.kt)("em",{parentName:"p"},"server")," is MUCH easier)."),(0,o.kt)("p",null,"The point is: I believe LDAP took off primarily because it used TCP/IP and\nbecause server implementations were easier and as such, more likely to be free\nand open source. But now, we have a free and open-source X.500 DSA\n(Meerkat DSA), and we can transport the X.500 protocols over TCP/IP. DAP has\nmany more features over LDAP, and it is not much harder to implement a DAP\nclient over an LDAP client. That said, I believe Directory Access Protocol to\nbe a superior alternative."),(0,o.kt)("p",null,"LDAP once served an important role as a simpler protocol for directory\noperations, and to some extent it still does. But it should be understood to be\n",(0,o.kt)("em",{parentName:"p"},"lightweight")," only; its value lies in supporting low-power devices and other\nsimple clients. An LDAP server is essentially just a searchable string\ndatabase, whereas an X.500 directory server is so feature rich as to be an\napplication in and of itself."),(0,o.kt)("p",null,"To elaborate upon the features that Directory Access Protocol (DAP) has that\nLightweight Directory Access Protocol (LDAP) does not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contexts, whereby you can associate metadata to values",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"LDAP has something similar, but it is just a very constrained string, and\nthe only defined use of it is to specify a language."))),(0,o.kt)("li",{parentName:"ul"},"Compound entry-awareness, meaning that you can view a compound entry has\nhaving nested entries, rather than viewing them all separately, and you can\nfilter on complete compound entries (or subsets thereof), kind of like a\njoin in a relational database. For example, if you have objects of class\n",(0,o.kt)("inlineCode",{parentName:"li"},"device")," as child entries to the ancestor of object class ",(0,o.kt)("inlineCode",{parentName:"li"},"person"),", you can\nsearch the directory for a ",(0,o.kt)("inlineCode",{parentName:"li"},"person")," who has a ",(0,o.kt)("inlineCode",{parentName:"li"},"device")," that has a particular\n",(0,o.kt)("inlineCode",{parentName:"li"},"serialNumber"),". This is not possible with LDAP; there is no join-like concept\nin LDAP."),(0,o.kt)("li",{parentName:"ul"},"True distributed operation: the X.500 protocols capably support fully\ndistributed operation. LDAP has little to no concept of distributed operation\nand primarily uses referrals and expects clients to issue their own\nsubrequests."),(0,o.kt)("li",{parentName:"ul"},"More detailed results"),(0,o.kt)("li",{parentName:"ul"},"More detailed errors"),(0,o.kt)("li",{parentName:"ul"},'Hierarchy selections, whereby separate "virtual hierarchy" can exist on top\nof the DIT, and be searched'),(0,o.kt)("li",{parentName:"ul"},'Relaxation, which works kind of like "auto-correct" in searches'),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"list")," operation, which can be more performant"),(0,o.kt)("li",{parentName:"ul"},"Password management operations, ",(0,o.kt)("inlineCode",{parentName:"li"},"changePassword")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"administerPassword"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"There are extensions for password modification in LDAP, but no guarantee\nthat any LDAP server supports them, since it is just an extension."))),(0,o.kt)("li",{parentName:"ul"},'Mapping-based matching, including Zonal Matching, where the directory can\nintelligently modify a search filter that names a specific location (such as a\ncity) to be a "fuzzy search" over all nearby postal codes.'),(0,o.kt)("li",{parentName:"ul"},"Signed requests, responses, and errors, providing end-to-end integrity,\ndespite the distributed nature of the directory."),(0,o.kt)("li",{parentName:"ul"},"More authentication options: authentication via a cryptographically-signed\ntoken using X.509 PKI, or via the\n",(0,o.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc2025"},"GSS-API's SPKM mechanism"),"."),(0,o.kt)("li",{parentName:"ul"},"Data integrity at rest using cryptographically-signed entries, attributes, and\nattribute values."),(0,o.kt)("li",{parentName:"ul"},"A well-defined universal access control mechanism.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is one huge problem with LDAP. There is no way to define access\ncontrols that will be understood by all LDAP servers. An X.500 directory\nserver has multiple standardized access control mechanisms.")))),(0,o.kt)("p",null,"Note that a feature being in the list above does not mean that it is currently\nsupported by Meerkat DSA. Most features are, though."))}h.isMDXComponent=!0}}]);