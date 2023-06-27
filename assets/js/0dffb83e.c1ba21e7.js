"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[5075],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],l={},s="Roadmap",u={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"We will not promise any particular schedule of delivery of features or bug fixes",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/directory/docs/roadmap",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/directory/docs/architecture"},next:{title:"The X.500 Command Line Interface",permalink:"/directory/docs/x500cli"}},c={},p=[{value:"Version 2.7.0 - Shadowing",id:"version-270---shadowing",level:2},{value:"Version 2.8.0 - Cross References",id:"version-280---cross-references",level:2},{value:"Version 2.9.0 - Schema Update (&quot;Wildboar Schema&quot;)",id:"version-290---schema-update-wildboar-schema",level:2},{value:"Version 2.10.0 and Beyond",id:"version-2100-and-beyond",level:2},{value:"Integration, Scalability, and Security",id:"integration-scalability-and-security",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Enterprise Features",id:"enterprise-features",level:2},{value:"Never Will Support",id:"never-will-support",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roadmap"},"Roadmap"),(0,i.kt)("p",null,"We will not promise any particular schedule of delivery of features or bug fixes\nat this time. However, the very high-level roadmap for Meerkat DSA can be\nbroken down to the following versions."),(0,i.kt)("h2",{id:"version-270---shadowing"},"Version 2.7.0 - Shadowing"),(0,i.kt)("p",null,"This update will introduce support for the Directory Information Shadowing\nProtocol (DISP). This will allow directory information to be replicated to\nother DSAs to produce read-only copies."),(0,i.kt)("h2",{id:"version-280---cross-references"},"Version 2.8.0 - Cross References"),(0,i.kt)("p",null,"This update will introduce support for cross references, allowing DSAs to share\nrouting information pertaining to other known DSAs. This will allow the entire\nDIT to become more discoverable and performant."),(0,i.kt)("h2",{id:"version-290---schema-update-wildboar-schema"},'Version 2.9.0 - Schema Update ("Wildboar Schema")'),(0,i.kt)("p",null,'This update will introduce thousands of new schema objects defined by Wildboar\nSoftware into the default schema. This is desirable so that X.500 directories\ncan build upon a common framework of mutually-understood schemata, rather than\n"re-inventing the wheel" each in isolation from each other. For instance, there\nmay be a desire for X.500 directories to store marital information about users,\nusing a ',(0,i.kt)("inlineCode",{parentName:"p"},"married")," auxiliary object class that permits the presence of a\n",(0,i.kt)("inlineCode",{parentName:"p"},"spouseDN")," attribute in an entry. It would be unfortunate for directory\nadministrators everywhere to define their own equivalent object classes, thereby\nduplicating work and reducing inter-domain compatibility."),(0,i.kt)("h2",{id:"version-2100-and-beyond"},"Version 2.10.0 and Beyond"),(0,i.kt)("p",null,"Not much can be said about anything this far in the future. However, these\nfeatures need to be introduced at some point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SASL Authentication, allowing alternative authentication mechanisms"),(0,i.kt)("li",{parentName:"ul"},"Rule-Based Access Control, allowing an alternative access control mechanism",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This might ",(0,i.kt)("em",{parentName:"li"},"not")," be supported, because its semantics are extremely vague.")))),(0,i.kt)("h2",{id:"integration-scalability-and-security"},"Integration, Scalability, and Security"),(0,i.kt)("p",null,"It is assumed that, after a few months or years of existence, there will be\nmany Meerkat DSA instances running, and much more data stored in DSAs. As such,\nit will be more important for Meerkat DSA to be scalable, secure, and capable\nof integration."),(0,i.kt)("p",null,"After extensive testing as an identity provider and private database, and\nparticularly after rigorous security testing, distributed operation will be\na primary focus of this phase."),(0,i.kt)("p",null,"Scalability will be a parameter of this phase; Meerkat DSA will be hardened\nagainst denial-of-service attacks, excessive resource consumption, and generally\nheavily tuned for performance."),(0,i.kt)("p",null,"It is expected that, before this is implemented, Quota Administrative Areas\nwill be implemented, which will be a new administrative area type defined by\nMeerkat DSA that rate-limits user activity."),(0,i.kt)("p",null,"Support for other databases may be added to help increase adoption."),(0,i.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,i.kt)("p",null,"After proving itself as a fully-featured, X.500-compliant DSA, Meerkat DSA will\ngain new features that make it even better than the directory service\nenvisioned by the X.500 specification authors. These advanced features are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LDIF uploads"),(0,i.kt)("li",{parentName:"ul"},"ZeroMQ Transport"),(0,i.kt)("li",{parentName:"ul"},"Onion Routing"),(0,i.kt)("li",{parentName:"ul"},"Multiple Password Hashes"),(0,i.kt)("li",{parentName:"ul"},"OpenLDAP-like access control"),(0,i.kt)("li",{parentName:"ul"},"XML Encoding Rules (XER) Support"),(0,i.kt)("li",{parentName:"ul"},"Directory Service Markup Language (DSML) Support"),(0,i.kt)("li",{parentName:"ul"},"SCIM Support (Maybe)"),(0,i.kt)("li",{parentName:"ul"},"gRPC API"),(0,i.kt)("li",{parentName:"ul"},"LDAP-to-JSON API"),(0,i.kt)("li",{parentName:"ul"},"Storage Administrative Areas"),(0,i.kt)("li",{parentName:"ul"},"IPFS"),(0,i.kt)("li",{parentName:"ul"},"Blockchain Integration")),(0,i.kt)("h2",{id:"enterprise-features"},"Enterprise Features"),(0,i.kt)("p",null,"Yes, there will eventually be a paid version of Meerkat DSA."),(0,i.kt)("p",null,"This is not really a coherent phase, since enterprise features will be developed\nalongside all other phases, but enterprise users will have these features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SNMP Monitoring"),(0,i.kt)("li",{parentName:"ul"},"Analytic Extensions"),(0,i.kt)("li",{parentName:"ul"},"User Behavior Analytics"),(0,i.kt)("li",{parentName:"ul"},"Legal Hold"),(0,i.kt)("li",{parentName:"ul"},"Compliance Features"),(0,i.kt)("li",{parentName:"ul"},"Webhooks"),(0,i.kt)("li",{parentName:"ul"},"SMTP and SMS notifications"),(0,i.kt)("li",{parentName:"ul"},"Audit Logging"),(0,i.kt)("li",{parentName:"ul"},"Active Directory Integration"),(0,i.kt)("li",{parentName:"ul"},"PKI-related features",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Generate keypair and cert for an entry"),(0,i.kt)("li",{parentName:"ul"},"Generate attribute certificate for an entry"))),(0,i.kt)("li",{parentName:"ul"},"Automation")),(0,i.kt)("h2",{id:"never-will-support"},"Never Will Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LDAP ",(0,i.kt)("inlineCode",{parentName:"li"},"matchedValues")," control, because it is a superset of the DAP\n",(0,i.kt)("inlineCode",{parentName:"li"},"matchedValuesOnly")," option."),(0,i.kt)("li",{parentName:"ul"},"Multi-stage SASL authentication mechanisms, because the specification does not\nmake it clear how the DSA is expected to return an intermediate SASL response.\nNote that the ",(0,i.kt)("inlineCode",{parentName:"li"},"credentials")," field of a ",(0,i.kt)("inlineCode",{parentName:"li"},"DirectoryBindResult")," is to\nauthenticate the DSA to the DUA, not to provide SASL continuation."),(0,i.kt)("li",{parentName:"ul"},"Support for the ",(0,i.kt)("inlineCode",{parentName:"li"},"overspecifiedFilter"),' control might never be supported,\nbecause determining which filter item is to "blame" for a search returning no\nresults is a contextual, subjective problem, and it requires speculatively\nevaluating a second, arbitrarily less restrictive filter against all search\nresults to determine if the original filter was originally overspecified.')))}m.isMDXComponent=!0}}]);