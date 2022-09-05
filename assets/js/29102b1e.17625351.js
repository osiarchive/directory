"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[5628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return n?i.createElement(k,l(l({ref:t},d),{},{components:n})):i.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],o={},s="Changelog for Meerkat DSA",u={unversionedId:"changelog-meerkat",id:"changelog-meerkat",title:"Changelog for Meerkat DSA",description:"Version 1.2.4",source:"@site/docs/changelog-meerkat.md",sourceDirName:".",slug:"/changelog-meerkat",permalink:"/directory/docs/changelog-meerkat",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/changelog-meerkat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"X.500 Client Configuration File",permalink:"/directory/docs/client-config"},next:{title:"Versioning",permalink:"/directory/docs/versioning"}},d={},m=[{value:"Version 1.2.4",id:"version-124",level:2},{value:"Version 1.2.3",id:"version-123",level:2},{value:"Version 1.2.2",id:"version-122",level:2},{value:"Version 1.2.1",id:"version-121",level:2},{value:"Version 1.2.0",id:"version-120",level:2},{value:"Version 1.1.0",id:"version-110",level:2},{value:"Migration",id:"migration",level:3}],p={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-meerkat-dsa"},"Changelog for Meerkat DSA"),(0,r.kt)("h2",{id:"version-124"},"Version 1.2.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log much more information on LDAP searches",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Almost the entire search request is logged."),(0,r.kt)("li",{parentName:"ul"},"The number of search results returned is logged."),(0,r.kt)("li",{parentName:"ul"},"This was implemented specifically to make it easier to diagnose issues with\nintegration with tools that use LDAP authentication. Often, LDAP searches\nare used to enumerate users, so it is important to be able to debug these."))),(0,r.kt)("li",{parentName:"ul"},"Log bound distinguished names if the ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_BOUND_DN")," environment\nvariable is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-123"},"Version 1.2.3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,r.kt)("inlineCode",{parentName:"li"},"uid")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dc")," did not have LDAP names.")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-122"},"Version 1.2.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed access controls being too restrictive on LDAP users. Now LDAP user\naccess controls work just like DAP user access controls."),(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_REVEAL_USER_PWD")," configuration option, which allows for\nhashed password values to be disclosed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"userPwd")," attribute.")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-121"},"Version 1.2.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed invalid object classes, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"inetOrgPerson"),", which did not permit\nsome optional attributes that it should have, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"mail"),".")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-120"},"Version 1.2.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The List Continuation Reference (LCR) procedure is now supported."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where continuation references produced during the ",(0,r.kt)("inlineCode",{parentName:"li"},"list")," operation\nwhere not added to the partial outcome qualifier in the result."),(0,r.kt)("li",{parentName:"ul"},"Fixed a security vulnerability where the names of subordinate references could\nbe disclosed in a ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," operation to clients not authorized to see it."),(0,r.kt)("li",{parentName:"ul"},"Almost all LDAP schema objects\n",(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/ldap-parameters/ldap-parameters.xhtml"},"published with IANA"),"\nand almost all X.500 schema objects defined in any ITU recommendation\nare built-in to Meerkat DSA now.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Schema objects" refers to attribute types, context types, matching rules,\nLDAP syntaxes, object classes, and name forms.'),(0,r.kt)("li",{parentName:"ul"},"These schema objects include those to support:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Samba Servers / Active Directory Domain Controllers"),(0,r.kt)("li",{parentName:"ul"},"PGP Key Servers"),(0,r.kt)("li",{parentName:"ul"},"SSH Authentication"),(0,r.kt)("li",{parentName:"ul"},"PAM Authentication"),(0,r.kt)("li",{parentName:"ul"},"DNS Servers"),(0,r.kt)("li",{parentName:"ul"},"Java"),(0,r.kt)("li",{parentName:"ul"},"Sabayon Servers"),(0,r.kt)("li",{parentName:"ul"},"Kerberos Servers"),(0,r.kt)("li",{parentName:"ul"},"Email Servers"),(0,r.kt)("li",{parentName:"ul"},"FTP Servers"),(0,r.kt)("li",{parentName:"ul"},"RADIUS Servers"),(0,r.kt)("li",{parentName:"ul"},"Remote Calendars"),(0,r.kt)("li",{parentName:"ul"},"Printer Discovery"),(0,r.kt)("li",{parentName:"ul"},"Sudo Configuration"),(0,r.kt)("li",{parentName:"ul"},"LDAP Tables"),(0,r.kt)("li",{parentName:"ul"},"Voicemail"),(0,r.kt)("li",{parentName:"ul"},"X.400 Messaging"),(0,r.kt)("li",{parentName:"ul"},"X.952 Open Distributed Processing"),(0,r.kt)("li",{parentName:"ul"},"DHCP Server Configuration"),(0,r.kt)("li",{parentName:"ul"},"DUA Configuration"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Groups"),(0,r.kt)("li",{parentName:"ul"},"Federated Filesystem"),(0,r.kt)("li",{parentName:"ul"},"H.323 Multimedia"),(0,r.kt)("li",{parentName:"ul"},"Intelligent Networks"),(0,r.kt)("li",{parentName:"ul"},"And more!"))),(0,r.kt)("li",{parentName:"ul"},"Many new operational attributes are supported, such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vendorName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vendorVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"administratorsAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entryDN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"superiorUUID")))),(0,r.kt)("li",{parentName:"ul"},"Wildboar Software defined name forms for most structural object classes that\nwere added to this release, to lessen the burden of setup.")))),(0,r.kt)("h2",{id:"version-110"},"Version 1.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distributed operation is now secure."),(0,r.kt)("li",{parentName:"ul"},"Production and verification of signed arguments, results, and errors."),(0,r.kt)("li",{parentName:"ul"},"Strong authentication is now supported."),(0,r.kt)("li",{parentName:"ul"},"Many performance improvements."),(0,r.kt)("li",{parentName:"ul"},"The web admin console may now be protected using TLS and HTTP basic.\nauthentication. It is also secure against CSRF attacks."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug with parsing attribute certificates."),(0,r.kt)("li",{parentName:"ul"},"Fixed hidden LDAP entries that have non-LDAP attribute types in RDNs."),(0,r.kt)("li",{parentName:"ul"},"Fixed display of dates and times."),(0,r.kt)("li",{parentName:"ul"},"Fix bug with Trust Anchor List file decoding (not reading a ",(0,r.kt)("inlineCode",{parentName:"li"},"ContentInfo"),")."),(0,r.kt)("li",{parentName:"ul"},"Search Aliases procedure used the DSA's name in the chaining arguments\noriginator field. (Not a security vulnerability, though, since the association\n",(0,r.kt)("em",{parentName:"li"},"was")," used for AC decisions.)"),(0,r.kt)("li",{parentName:"ul"},"Fix bug where entry could be created without required attribute by merely\nproviding the attribute with no values.")),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_CLIENT_CERT_AUTH")," no longer controls ",(0,r.kt)("inlineCode",{parentName:"li"},"rejectUnauthorized"),". This\nwas a security bug. In fact, this environment variable is no longer used\nentirely. ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_REJECT_UNAUTHORIZED_CLIENTS")," controls mTLS. If set to\n",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", mTLS is enforced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_KEY")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_KEY_FILE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_CERT_CHAIN")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_CERTS_CHAIN_FILE")),(0,r.kt)("li",{parentName:"ul"},"Removed ",(0,r.kt)("inlineCode",{parentName:"li"},"DANGEROUSLY")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DSP")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DOP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Just use the ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DSP")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DOP")," environment variables to enable\nDSP and DOP, respectively.")))))}c.isMDXComponent=!0}}]);