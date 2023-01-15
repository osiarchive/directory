"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[9056],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(i),u=r,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||n;return i?a.createElement(h,o(o({ref:t},p),{},{components:i})):a.createElement(h,o({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<n;l++)o[l]=i[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},1556:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=i(7462),r=i(3366),n=(i(7294),i(3905)),o=["components"],s={},c="X.500-Related Specifications",l={unversionedId:"specs",id:"specs",title:"X.500-Related Specifications",description:"X.500 Specifications",source:"@site/docs/specs.md",sourceDirName:".",slug:"/specs",permalink:"/directory/docs/specs",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/specs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ASN.1 Modules",permalink:"/directory/docs/asn1"},next:{title:"X.500 Client Configuration File",permalink:"/directory/docs/client-config"}},p={},m=[{value:"X.500 Specifications",id:"x500-specifications",level:2},{value:"LDAP Specifications",id:"ldap-specifications",level:2},{value:"Recommended Reading",id:"recommended-reading",level:2},{value:"A Note About Versions",id:"a-note-about-versions",level:2}],d={toc:m};function u(e){var t=e.components,i=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"x500-related-specifications"},"X.500-Related Specifications"),(0,n.kt)("h2",{id:"x500-specifications"},"X.500 Specifications"),(0,n.kt)("p",null,'Below are links to the the "X.500 specifications" that define the X.500\ndirectory system:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.500"},"ITU Recommendation X.500"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This introduces the directory system. It is a more detailed introduction for\nsomebody that has no idea what the X.500 directory system is."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.501"},"ITU Recommendation X.501"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This describes how X.500 directories model information, including entries,\nattributes, contexts, operational bindings, schema, and access control\ninformation. It is lengthy, but it is a great read for somebody wanting to\nadminister an X.500 directory."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.509"},"ITU Recommendation X.509"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This describes the security of X.500 directories, including password-based\nauthentication, the use of public and private keys, the use of certificates,\nattribute certificates, and authorization and validation lists, and\npublic key infrastructure."),(0,n.kt)("li",{parentName:"ul"},"Yes, this is the original specification where X.509 certificates, used in\nTLS/SSL were and are defined.\n",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc5280.html"},"IETF RFC 5280")," is\nmerely a ",(0,n.kt)("em",{parentName:"li"},"profile")," of the X.509 PKI defined for usage by the Internet."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.510"},"ITU Recommendation X.510"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a new specification that was first defined in 2020, but it is\nmerely extracted from the 2016 version of X.509 (with some added\nclarification). It defines protocols for the management of public key\ninfrastructure and privilege management infrastructure. To some extent, you\ncan think of it like the ",(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc8555"},"ACME protocol"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.511"},"ITU Recommendation X.511"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This specification defines the protocol that would be used by clients of the\ndirectory system."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.518"},"ITU Recommendation X.518"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This specification defines the procedures to be used for directories to\ncooperate to provide the directory service. This is much more technical and\nin-depth than the other specifications."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.519"},"ITU Recommendation X.519"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This puts a bow on the preceeding X.500 specifications by defining the\nprotocols to transport the abstract operations defined in the other\nspecifications. It defines transport over the OSI networking stack as well\nas TCP/IP (called the Internet-Directly-Mapped (IDM))."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.520"},"ITU Recommendation X.520"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines a minimal set of attribute types, context types, and matching\nrules that every DSA should support."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.521"},"ITU Recommendation X.521"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines a minimal set of object classes and name forms that every DSA\nshould support."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.525"},"ITU Recommendation X.525"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines the abstract operations for the Directory Information\nShadowing Protocol (DISP), which is used to replicate directory information\nacross directory servers."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.530"},"ITU Recommendation X.530"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines X.700 management objects for managing the directory system.\nThis specification has not been updated since 2008.")))),(0,n.kt)("h2",{id:"ldap-specifications"},"LDAP Specifications"),(0,n.kt)("p",null,"It is worth reiterating here that Meerkat DSA is primarily an X.500 directory\nserver (DSA), and only secondarily an LDAP server. Here are the specifications\nthat define the Lightweight Directory Access Protocol (LDAP):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4510"},"IETF RFC 4510"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This is a very brief introduction to LDAP and an index of the other\nspecifications."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4511"},"IETF RFC 4511"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines the LDAP protocol."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4512"},"IETF RFC 4512"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines LDAP directory information models, kind of like\n",(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.501"},"ITU Recommendation X.501"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4513"},"IETF RFC 4513"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines authentication and security mechanisms used by LDAP."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4514"},"IETF RFC 4514"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines how LDAP converts X.500 distinguished names into strings."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4515"},"IETF RFC 4515"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines how LDAP search filters can be represented with strings."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4516"},"IETF RFC 4516"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines the ",(0,n.kt)("inlineCode",{parentName:"li"},"ldap://")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"ldaps://")," URL scheme."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4517"},"IETF RFC 4517"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines LDAP syntaxes and matching rules."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4518"},"IETF RFC 4518"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines how LDAP converts and normalizes strings."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc4519"},"IETF RFC 4519"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This defines directory schema to be used by LDAP directories. A lot of the\nschema here mirrors the schema found in\n",(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.520"},"ITU Recommendation X.520"),"\nand\n",(0,n.kt)("a",{parentName:"li",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.521"},"ITU Recommendation X.521"),".")))),(0,n.kt)("h2",{id:"recommended-reading"},"Recommended Reading"),(0,n.kt)("p",null,"If you only plan to act as a client (a Directory User Agent) to an X.500\ndirectory, you should read, at minimum, X.500 and X.511. If you plan to host\nan X.500 directory server, you should read, at minimum X.500, X.501, X.509. If\nyou are hosting an X.500 directory server and expect to use shadowing\n(replication), you should read X.525. If you expect to develop an X.500\ndirectory server or contribute to Meerkat DSA, you should read, at minimum,\nX.500, X.501, X.509, X.511, X.518, X.519, and X.525 (which is all of the X.500\nspecifications to date, except X.510 and X.530)."),(0,n.kt)("h2",{id:"a-note-about-versions"},"A Note About Versions"),(0,n.kt)("p",null,'When the 2019 versions were made free, I downloaded them and checked for\ndifferences between them and the 2016 versions. There is almost no difference\nat all, except that some of the contents of X.509 were split off into X.510.\nSo if, for some reason, you can only get ahold of the 2016 versions, don\'t fret:\nthey are still pretty much "up-to-date."'))}u.isMDXComponent=!0}}]);