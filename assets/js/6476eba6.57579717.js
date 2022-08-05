"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[4827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={},s="Usage",p={unversionedId:"usage",id:"usage",title:"Usage",description:"Meerkat DSA is an X.500 directory server that users can interact with via the",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/directory/docs/usage",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/usage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advice",permalink:"/directory/docs/advice"},next:{title:"Telemetry",permalink:"/directory/docs/telemetry"}},c={},u=[{value:"X.500 Clients",id:"x500-clients",level:2},{value:"X.500 CLI",id:"x500-cli",level:3},{value:"LDAP Clients",id:"ldap-clients",level:2},{value:"LDAP Nuances",id:"ldap-nuances",level:2},{value:"Internationalization",id:"internationalization",level:2},{value:"Approximate Matching",id:"approximate-matching",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Meerkat DSA is an X.500 directory server that users can interact with via the\nDirectory Access Protocol (DAP) or the Lightweight Directory Access Protocol\n(LDAP). The Directory Access Protocol (DAP) is transported using\nInternet Direct Mapping (IDM) as is specified in the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.itu.int/itu-t/recommendations/rec.aspx?rec=X.519"},"International Telecommunication Union's Recommendation X.519"),".\nIn the future,\nmore transport protocols may be supported for DAP. For clarification, none of\nthe above statements preclude the usage of the Directory System Protocol (DSP)\nor the Directory Operational Binding Management Protocol (DOP) by other DSAs.\nThe Directory Information Shadowing Protocol (DISP) is unsupported, currently,\nbut it will be supported in the future."),(0,i.kt)("p",null,"Both of these protocols may use StartTLS to secure traffic, or they may be\nencapsulated in TLS completely. The use of these URL schemes will have these\nmeanings to Meerkat DSA:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idm")," - Internet Direct Mapping (IDM)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idms")," - Internet Direct Mapping over TLS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ldap")," - LDAP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ldaps")," - LDAP over TLS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"itot")," - ISO Transport Over TCP"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lpp")," - Lightweight Presentation Protocol")),(0,i.kt)("h2",{id:"x500-clients"},"X.500 Clients"),(0,i.kt)("h3",{id:"x500-cli"},"X.500 CLI"),(0,i.kt)("p",null,"Currently, there is only one X.500 client that we know about: the ",(0,i.kt)("inlineCode",{parentName:"p"},"x500"),"\ncommand-line interface (CLI), which is also published by wildboar software. This\ntool uses the Directory Access Protocol to interact with the directory."),(0,i.kt)("h2",{id:"ldap-clients"},"LDAP Clients"),(0,i.kt)("p",null,"Meerkat DSA supports LDAP, though LDAP functionality is only of secondary\nimportance to the project's goals. Meerkat DSA's LDAP implementation was\nprimarily tested against Apache Directory Studio; for that reason, it is the\nrecommended LDAP client, but there are\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_LDAP_software"},"others"),". You can download\nApache Directory Studio ",(0,i.kt)("a",{parentName:"p",href:"http://directory.apache.org/studio/"},"here"),"."),(0,i.kt)("p",null,"We encourage you to read the documentation on how Meerkat DSA handles LDAP.\nThere are important nuances that, for instance, could result in searches not\nbehaving the way you would expect."),(0,i.kt)("h2",{id:"ldap-nuances"},"LDAP Nuances"),(0,i.kt)("p",null,"Meerkat DSA does not process LDAP requests directly. LDAP Service is provided\nby Meerkat DSA by translating an LDAP request to an equivalent DAP request,\nprocessing the DAP request as usual, and converting the DAP result into an LDAP\nresult. This approach works well for most use cases, but it does have its\nnuances:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"LDAP has no concept of contexts. All values with contexts will be included in\nLDAP results containing attribute values, but the contexts themselves will not\nbe included."),(0,i.kt)("li",{parentName:"ul"},'For all LDAP searches, a temporal context assertion of "now" will be quietly\nadded to the DAP request that is produced from the LDAP request so that\nattribute values that are "not current" will be excluded from the results.'),(0,i.kt)("li",{parentName:"ul"},"When LDAP attribute options are supplied, they will be converted to the\n",(0,i.kt)("inlineCode",{parentName:"li"},"ldapAttributeOptionContext")," context values. Note that, to use LDAP attribute\noptions, DIT context use rules must permit them."),(0,i.kt)("li",{parentName:"ul"},"In modification operations, all values with and without contexts will be\ntreated equally, meaning that values with contexts will behave as though they\nhad no contexts, with the exception of ",(0,i.kt)("inlineCode",{parentName:"li"},"ldapAttributeOptionContext"),"s and\ntemporal contexts, as noted above. For this reason, it is recommended that\nsensitive modification operations take place over DAP instead of LDAP."),(0,i.kt)("li",{parentName:"ul"},"In LDAP, the ",(0,i.kt)("inlineCode",{parentName:"li"},"subtreeSpec")," attribute is a ",(0,i.kt)("inlineCode",{parentName:"li"},"userApplications")," attribute, but in\nX.500, ",(0,i.kt)("inlineCode",{parentName:"li"},"subtreeSpecification")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"directoryOperation")," attribute. The latter\nis respected.")),(0,i.kt)("h2",{id:"internationalization"},"Internationalization"),(0,i.kt)("p",null,"The language of the logging used by Meerkat DSA is determined by the system's\nenvironment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"LANG"),". If your selected language is not supported, English\nwill be used as a default."),(0,i.kt)("p",null,"Currently, only English is supported, but future editions may support other\nlanguages."),(0,i.kt)("p",null,"In LDAP, diagnostic messages will be returned in the language of the DSA. There\nis no current means for indicating an LDAP user's language preference."),(0,i.kt)("h2",{id:"approximate-matching"},"Approximate Matching"),(0,i.kt)("p",null,'Meerkat DSA implements some "approximate" equivalents of some of the matching\nrules defined in the X.500 series of specifications. These equivalents are used\nwhenever ',(0,i.kt)("inlineCode",{parentName:"p"},"approximateMatch")," alternative of a ",(0,i.kt)("inlineCode",{parentName:"p"},"FilterItem")," is used."),(0,i.kt)("p",null,"Approximate matching rules are only implemented where it would not be easy to\nconstruct equivalent semantics using some combination of other matching rules.\nFor instance, you could not easily craft an search filter that tolerates a\nsingle-letter typo or transposition for every possible permutation of letters in\na word, so an approximate matching rule has be implemented for this."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Matching Rule"),(0,i.kt)("th",{parentName:"tr",align:null},"Behavior"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"acceptableCertPoliciesMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if a simple majority of the asserted policies are present.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"algorithmIdentifierMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if just the ",(0,i.kt)("inlineCode",{parentName:"td"},"algorithm")," object identifier matches.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"attDescriptor"),(0,i.kt)("td",{parentName:"tr",align:null},"Leading and trailing whitespace and casing are ignored.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bitStringMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Tolerates a single inverted bit from the assertion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caseIgnoreIA5Match"),(0,i.kt)("td",{parentName:"tr",align:null},"Trims whitespace and tolerates a fast Levenshtein difference of 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caseIgnoreListMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"caseIgnoreIA5Match"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"caseIgnoreMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"caseIgnoreIA5Match"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"directoryStringFirstComponentMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Trims whitespace and ignores casing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"distinguishedNameMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if all but the last RDN matches the assertion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dualStringMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Tolerates a fast Levenshtein difference of 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"generalizedTimeMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Tolerates an mismatching time by one day.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integerFirstComponentMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches an integer that is up to 10% incorrect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integerMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches an integer that is up to 10% incorrect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intEmailMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Trims whitespace, lowercases, and matches if local parts differ by FL* of 1.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"jidMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"intEmailMatch"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"objectIdentifierMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if either value is a prefix of the other.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pwdEncAlgMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if just the ",(0,i.kt)("inlineCode",{parentName:"td"},"algorithm")," object identifier matches.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uniqueMemberMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if only the distinguished name matches.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uriMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Matches if only protocol, hostname, port, and path matches.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uTCTimeMatch"),(0,i.kt)("td",{parentName:"tr",align:null},"Tolerates an mismatching time by one day.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'"FL" = Fast Levenshtein.')))}m.isMDXComponent=!0}}]);