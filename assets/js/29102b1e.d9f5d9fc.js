"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[5628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Changelog for Meerkat DSA",u={unversionedId:"changelog-meerkat",id:"changelog-meerkat",title:"Changelog for Meerkat DSA",description:"Version 2.7.0",source:"@site/docs/changelog-meerkat.md",sourceDirName:".",slug:"/changelog-meerkat",permalink:"/directory/docs/changelog-meerkat",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/changelog-meerkat.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"X.500 Client Configuration File",permalink:"/directory/docs/client-config"},next:{title:"Versioning",permalink:"/directory/docs/versioning"}},p={},d=[{value:"Version 2.7.0",id:"version-270",level:2},{value:"New Features / Improvements",id:"new-features--improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Version 2.6.0",id:"version-260",level:2},{value:"Version 2.5.0",id:"version-250",level:2},{value:"Version 2.4.4",id:"version-244",level:2},{value:"Version 2.4.3",id:"version-243",level:2},{value:"Changes",id:"changes",level:3},{value:"Updating",id:"updating",level:3},{value:"Version 2.4.2",id:"version-242",level:2},{value:"Version 2.4.1",id:"version-241",level:2},{value:"Version 2.4.0",id:"version-240",level:2},{value:"Version 2.3.0",id:"version-230",level:2},{value:"Version 2.2.0",id:"version-220",level:2},{value:"Changes",id:"changes-1",level:3},{value:"Upgrading to this version",id:"upgrading-to-this-version",level:3},{value:"Version 2.1.0",id:"version-210",level:2},{value:"Version 2.0.0",id:"version-200",level:2},{value:"Changes",id:"changes-2",level:3},{value:"Upgrading to this Version",id:"upgrading-to-this-version-1",level:3},{value:"Version 1.3.0",id:"version-130",level:2},{value:"Changes",id:"changes-3",level:3},{value:"Announcement",id:"announcement",level:3},{value:"Next Developments",id:"next-developments",level:3},{value:"Version 1.2.7",id:"version-127",level:2},{value:"Version 1.2.6",id:"version-126",level:2},{value:"Version 1.2.5",id:"version-125",level:2},{value:"Version 1.2.4",id:"version-124",level:2},{value:"Version 1.2.3",id:"version-123",level:2},{value:"Version 1.2.2",id:"version-122",level:2},{value:"Version 1.2.1",id:"version-121",level:2},{value:"Version 1.2.0",id:"version-120",level:2},{value:"Version 1.1.0",id:"version-110",level:2},{value:"Migration",id:"migration",level:3}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog-for-meerkat-dsa"},"Changelog for Meerkat DSA"),(0,r.kt)("h2",{id:"version-270"},"Version 2.7.0"),(0,r.kt)("p",null,"The defining aspect of this version is support for shadowing, which allows you\nto replicate entries across multiple DSAs."),(0,r.kt)("h2",{id:"new-features--improvements"},"New Features / Improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support shadowing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Shadow operational binding management via DOP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This includes ",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/opbinding#relayed-operational-bindings"},"relayed DOP")))),(0,r.kt)("li",{parentName:"ul"},"All DISP operations: consumer-initiated and supplier-initiated"),(0,r.kt)("li",{parentName:"ul"},"Total and incremental refreshes"))),(0,r.kt)("li",{parentName:"ul"},"Significant performance enhancements when inserting entries"),(0,r.kt)("li",{parentName:"ul"},"Improvements to the ",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/webadmin"},"web admin console")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"moddn")," command in the X.500 CLI has been separated into two different\n",(0,r.kt)("inlineCode",{parentName:"li"},"move")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"rename")," commands, making it clearer what the syntax of the\narguments should be."),(0,r.kt)("li",{parentName:"ul"},"DAP / DSP operations can now be chained with signing when using bulk insert mode."),(0,r.kt)("li",{parentName:"ul"},"Signatures on requests, results, and errors are ignored when using bulk insert mode."),(0,r.kt)("li",{parentName:"ul"},"Connections between DSAs retained and reused, greatly improving performance for\ndistributed operations.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This means that the TCP connections and TLS do not need to be re-established\neach time the DSA performs a distributed operation directed at a DSA that\nit has had prior contact with.")))),(0,r.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix display of operational binding expiration times in the\n",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/webadmin"},"web admin console")),(0,r.kt)("li",{parentName:"ul"},"Fix non-use of shadow context prefix knowledge in Find DSE procedure"),(0,r.kt)("li",{parentName:"ul"},"Do not enforce access controls when moving an entry to the top level if open\ntop level is configured."),(0,r.kt)("li",{parentName:"ul"},"Fix a bug with getting context assertion defaults"),(0,r.kt)("li",{parentName:"ul"},"Fix logging unbinds at warning level"),(0,r.kt)("li",{parentName:"ul"},"Fix StartTLS establishment"),(0,r.kt)("li",{parentName:"ul"},"Fix OSI application association rejection when encountering an unsupported application context"),(0,r.kt)("li",{parentName:"ul"},"Fix OSI transmission of errors"),(0,r.kt)("li",{parentName:"ul"},"Fix handling of malformed TPDUs in the OSI transport layer"),(0,r.kt)("li",{parentName:"ul"},"Fix negotiation of TPDU size in OSI transport layer"),(0,r.kt)("li",{parentName:"ul"},"Use timeout supplied to X.500 client function to determine the TCP socket timeout"),(0,r.kt)("li",{parentName:"ul"},"Do not include the ",(0,r.kt)("inlineCode",{parentName:"li"},"valuesWithContext")," in an attribute if there are no contexts"),(0,r.kt)("li",{parentName:"ul"},"Fix establishment of governing structure rule in a context prefix established\nby a hierarchical operational binding"),(0,r.kt)("li",{parentName:"ul"},"Chained operations will not be retried if they are modification operations and\nthe outcome was an abort or reject, except with certain reason / problem codes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is because these outcomes could indicate an internal error, in which\ncase, the modification might have been half-completed. If the error was\ncaused by the user, we also do not want to propagate requests that were\nalready determined to be invalid."))),(0,r.kt)("li",{parentName:"ul"},"Fix back-propagation of rejects, aborts, and timeouts received from chained\noperations.")),(0,r.kt)("h2",{id:"version-260"},"Version 2.6.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create X.509 attribute certificates using an extension to the ",(0,r.kt)("inlineCode",{parentName:"li"},"read"),"\noperation, documented ",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/attr-cert"},"here"),".")),(0,r.kt)("h2",{id:"version-250"},"Version 2.5.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support Non-Specific Hierarchical Operational Bindings (NHOBs), which allow\nentries in multiple directories to share / compete for the same namespace."),(0,r.kt)("li",{parentName:"ul"},"Fixed bugs in operational binding management"),(0,r.kt)("li",{parentName:"ul"},"Fix issues with validating some self-signed certificates")),(0,r.kt)("h2",{id:"version-244"},"Version 2.4.4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SECURITY UPDATE")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix use of ",(0,r.kt)("inlineCode",{parentName:"li"},"prescriptiveACI")," to regulate subentries in simplified access\ncontrol.")),(0,r.kt)("p",null,"This security bug was introduced as a result of version 2.4.2. You were\nunaffected if you did not use versions 2.4.2 or 2.4.3, or if you never used\nsimplified access control."),(0,r.kt)("h2",{id:"version-243"},"Version 2.4.3"),(0,r.kt)("p",null,"Summary: small deviation introduced in which searches recurse one entry into\nother service administrative areas for the sake of DIT discoverability."),(0,r.kt)("h3",{id:"changes"},"Changes"),(0,r.kt)("p",null,"The X.500 specifications mandate that searches are not to recurse into other\nservice administrative areas, but this means that service admin points will not\nbe discoverable at all via ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," operations. Since LDAP has no ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),'\noperation, it also means that LDAP users will never be able to find any entry\nthat lies in a different service administrative area (except by "guessing" that\nit exists).'),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US,ST=FL")," is a service admin point, and a user performs a\none-level search at ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," subordinate will be hidden from the\nresults entirely. The user will have no way of even finding ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," except for\nperforming a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," operation and noticing that this subordinate differs from\nthe results obtained by a one-level search (since ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," is not governed by\nservice administration)."),(0,r.kt)("p",null,"This version of Meerkat DSA onwards will deviate from the specification by\nrecursing one entry into other service administrative areas so that the DIT is\ntraversible to users. Continuing on the previous example, this means that, if a\nuser performs a one-level search at ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," subordinate will be\nreturned. If a subtree search at ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US")," is performed, ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," will be returned\nas well, but none of its subordinates (the latter of which is technically\ncorrect behavior)."),(0,r.kt)("p",null,"If this is undesirable, meaning that you want Meerkat DSA to behave exactly as\nthe specifications specify, fear not: this version of Meerkat DSA also\nintroduces a new option, ",(0,r.kt)("inlineCode",{parentName:"p"},"MEERKAT_PRINCIPLED_SERVICE_ADMIN"),", which, if set to\n",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", disables this deviation. Meerkat DSA will thereby adhere strictly to the\nspecifications and service admin points will be hidden from search results."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above issue will be reported to the ITU working group that authors the X.500\nspecifications, so it may be resolved in a future version.")),(0,r.kt)("h3",{id:"updating"},"Updating"),(0,r.kt)("p",null,"You do not have to do anything to upgrade to this version. Just update the\nMeerkat DSA version."),(0,r.kt)("h2",{id:"version-242"},"Version 2.4.2"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SECURITY UPDATE")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix non-use of ",(0,r.kt)("inlineCode",{parentName:"li"},"prescriptiveACI")," to regulate subentries in several access\ncontrol schemes.")),(0,r.kt)("p",null,"Meerkat DSA previously did not use ",(0,r.kt)("inlineCode",{parentName:"p"},"prescriptiveACI")," from superior access\ncontrol areas to govern access to subentries."),(0,r.kt)("h2",{id:"version-241"},"Version 2.4.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix Denial-of-Service caused by failing assertion")),(0,r.kt)("p",null,"You do not have to do anything for this upgrade to work. Just update the\nversion of Meerkat DSA you're using."),(0,r.kt)("h2",{id:"version-240"},"Version 2.4.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Service Administration",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This means that directory administrators can define search rules that\nconstrain the types of searches users can perform")))),(0,r.kt)("p",null,"You do not have to do anything for this upgrade to work. Just update the\nversion of Meerkat DSA you're using. The Demo DIT has a\n",(0,r.kt)("a",{parentName:"p",href:"/directory/docs/demo#demo-dit-overview"},"service administrative area")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"C=US,ST=FL,L=MAR,L=Ocala")," that you can experiment with."),(0,r.kt)("h2",{id:"version-230"},"Version 2.3.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Relaxations and Tightenings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This means that users can specify a desired minimum and maximum number of\nentries to be returned from the search, and, if the first pass of the search\ndoes not return a number of results within this range, a new pass of the\nsearch will proceed, but using a user-specified replacement of the otherwise\napplicable matching rules that makes the search filter stricter or more\nrelaxed."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Zonal matching"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'This is a type of relaxation that replaces locale-related attributes in the\nsearch filter with their equivalent "zone identifiers," such as postal\ncodes, and can intelligently expand the scope of the search by including\nneighboring zones.'),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/usage"},"the documentation on zonal matching"),".")),(0,r.kt)("p",{parentName:"li"},"You do not need to do anything for this to work other than apply migrations."))),(0,r.kt)("h2",{id:"version-220"},"Version 2.2.0"),(0,r.kt)("h3",{id:"changes-1"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support all hierarchy selections in the ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," operation."),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"extendedFilter")," component of ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," operation arguments.")),(0,r.kt)("h3",{id:"upgrading-to-this-version"},"Upgrading to this version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you previously set any hierarchical group-related attributes on any\nentries, hierarchical selections might not work as expected. You can fix this\nby removing the attributes and re-adding them.")),(0,r.kt)("h2",{id:"version-210"},"Version 2.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implement the Search Continuation Reference Procedure defined in\n",(0,r.kt)("a",{parentName:"li",href:"https://www.itu.int/rec/T-REC-X.518/en"},"ITU Recommendation X.518 (2019)"),",\nSection 20.4.3.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This means that, in some circumstances, instead of returning continuation\nreferences to the client, Meerkat DSA will chain searches to other DSAs to\ncontinue the search."))),(0,r.kt)("li",{parentName:"ul"},"Improved distinguished name comparison for checking which remote DSAs are\ntrusted for Identity-Based Requester Authentication, described in\n",(0,r.kt)("a",{parentName:"li",href:"https://www.itu.int/rec/T-REC-X.519/en"},"ITU Recommendation X.518 (2019)"),",\nSection 22.1.1."),(0,r.kt)("li",{parentName:"ul"},"Properly support the ",(0,r.kt)("inlineCode",{parentName:"li"},"unmerged")," option in paginated ",(0,r.kt)("inlineCode",{parentName:"li"},"list")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"search"),"\noperations.")),(0,r.kt)("h2",{id:"version-200"},"Version 2.0.0"),(0,r.kt)("h3",{id:"changes-2"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Password Administration via Password Administrative Areas"),(0,r.kt)("li",{parentName:"ul"},"Password Assertion via the ",(0,r.kt)("inlineCode",{parentName:"li"},"compare")," operation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Before, asserting a password using the ",(0,r.kt)("inlineCode",{parentName:"li"},"compare")," operation would never work,\nbecause of a security feature of Meerkat DSA. User passwords were not even\naccessible via normal means in the code of Meerkat DSA (to prevent\ndisclosing them, even if they are encrypted)."),(0,r.kt)("li",{parentName:"ul"},"Now, the ",(0,r.kt)("inlineCode",{parentName:"li"},"compare")," operation can evaluate user passwords, and it has all of\nthe same side-effects as attempting a password during a bind operation (e.g.\nincrementing ",(0,r.kt)("inlineCode",{parentName:"li"},"pwdFails")," if the password is wrong)."))),(0,r.kt)("li",{parentName:"ul"},"Remote password checking via the ",(0,r.kt)("inlineCode",{parentName:"li"},"compare")," operation during binding",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This means that, no matter what DSA you attempt to bind to, it can submit a\n",(0,r.kt)("inlineCode",{parentName:"li"},"compare")," operation to the DSA that actually contains the password for a\ngiven user."),(0,r.kt)("li",{parentName:"ul"},"This is configurable via the\n",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/env#meerkat_remote_pwd_time_limit"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_REMOTE_PWD_TIME_LIMIT")),"\nenvironment variable. It defaults to 0, meaning that this feature is\ndisabled by default. This is for security reasons."))),(0,r.kt)("li",{parentName:"ul"},"Nearly doubled performance for most workloads"),(0,r.kt)("li",{parentName:"ul"},"TLS Debugging Options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ability to log (pre-)master secrets, either to the log or to a separate\nfile via the ",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/env#meerkat_log_tls_secrets"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_LOG_TLS_SECRETS"))," environment variable."),(0,r.kt)("li",{parentName:"ul"},"The ability to print OpenSSL trace information via the\n",(0,r.kt)("a",{parentName:"li",href:"https://wildboar-software.github.io/directory/docs/env#meerkat_sslkeylog_file"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_SSLKEYLOG_FILE")),"\nenvironment variable.")))),(0,r.kt)("h3",{id:"upgrading-to-this-version-1"},"Upgrading to this Version"),(0,r.kt)("p",null,'The reason this version is a major version update is that I had to introduce a\nbreaking change into the database schema. The schema for this version is totally\nincompatible with earlier versions. There is no way to "upgrade" to this\nversion. You must completely restart.'),(0,r.kt)("p",null,"Fortunately, this update is a massive improvement and fix of many issues over\nthe previous version, so it is plausible that this will mean fewer breaking\nchanges going forward."),(0,r.kt)("h2",{id:"version-130"},"Version 1.3.0"),(0,r.kt)("h3",{id:"changes-3"},"Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support ISO Transport Over TCP (ITOT), as defined in ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc1006"},"IETF RFC 1006"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is supported both when Meerkat DSA acts as a server and as a client (in DSP, DOP, or DISP, for instance)."),(0,r.kt)("li",{parentName:"ul"},"It is recommended that you leave this disabled unless you need it for some reason."))),(0,r.kt)("li",{parentName:"ul"},"Introduce missing LDAP syntaxes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"utmCoordinates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uiiForm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"epcForm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countryString3c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"countryString3n")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dnsString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"intEmailString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jidString")))),(0,r.kt)("li",{parentName:"ul"},"Reject chaining to any TCP port that has the same port as the DBMS.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is a security feature to prevent malicious users from tricking your DSA\ninto making requests to your DBMS. (In all likelihood, your DBMS will\nprobably just interpret these as corrupt packets, but there is a ",(0,r.kt)("em",{parentName:"li"},"chance"),"\nthat it might not!)")))),(0,r.kt)("h3",{id:"announcement"},"Announcement"),(0,r.kt)("p",null,"Wildboar Software is now maintaining the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_Development_Environment"},"ISO Development Environment"),'!\nThis massive project contains an X.500 directory that was implemented in the\nearly 90s called "Quipu." Check it out\n',(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wildboar-Software/isode"},"here"),"! It was recently updated in a\n",(0,r.kt)("a",{parentName:"p",href:"https://app.bountysource.com/issues/109508245-will-not-compile-on-a-modern-linux-system-bounty"},"BountySource challenge"),"\nto run on modern Linux systems, such as Ubuntu. Thank you\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/abcpro1"},"@abcpro1")," for your work on this!"),(0,r.kt)("p",null,"Part of the rationale for prioritizing ITOT support was for integration testing\nwith Quipu DSA. The ",(0,r.kt)("inlineCode",{parentName:"p"},"@wildboar/rose-transport")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@wildboar/x500-client-ts"),"\nlibraries have been tested with Quipu DSA, but Meerkat DSA has not been\nintegration-tested with Quipu DSA yet. However, this is in the works!"),(0,r.kt)("p",null,"More documentation about Quipu DSA, the X.500 libraries, terminal client, and\nother tools found within ISODE will be added soon!"),(0,r.kt)("h3",{id:"next-developments"},"Next Developments"),(0,r.kt)("p",null,"No promises, but the current plan is to work on X.500 clients and SDKs next so\nthat X.500 directories can be easily used. These include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Rust SDK / Library",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This will open up possibilities for PAM modules, Linux kernel modules, and more!"))),(0,r.kt)("li",{parentName:"ul"},"A Golang SDK / Library (which is already ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Wildboar-Software/directory/tree/master/libs/x500-go"},"partially complete"),")"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://www.passportjs.org/"},"PassportJS")," Strategy")),(0,r.kt)("p",null,"Depending on how long this takes, work may also begin on an X.500 GUI client!"),(0,r.kt)("h2",{id:"version-127"},"Version 1.2.7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix excessively frequent database report telemetry.")),(0,r.kt)("h2",{id:"version-126"},"Version 1.2.6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix crashes caused by use of telemetry.")),(0,r.kt)("h2",{id:"version-125"},"Version 1.2.5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix use of ",(0,r.kt)("inlineCode",{parentName:"li"},"ManageDSAIT")," control in LDAP not returning most search results.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This was caused because of a deviation in behavior from LDAP and DAP. Code\nwas added so that LDAP behaves as would be expected from LDAP, while leaving\nthe DAP code unchanged.")))),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-124"},"Version 1.2.4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log much more information on LDAP searches",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Almost the entire search request is logged."),(0,r.kt)("li",{parentName:"ul"},"The number of search results returned is logged."),(0,r.kt)("li",{parentName:"ul"},"This was implemented specifically to make it easier to diagnose issues with\nintegration with tools that use LDAP authentication. Often, LDAP searches\nare used to enumerate users, so it is important to be able to debug these."))),(0,r.kt)("li",{parentName:"ul"},"Log bound distinguished names if the ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_BOUND_DN")," environment\nvariable is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-123"},"Version 1.2.3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where ",(0,r.kt)("inlineCode",{parentName:"li"},"uid")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"dc")," did not have LDAP names.")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-122"},"Version 1.2.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed access controls being too restrictive on LDAP users. Now LDAP user\naccess controls work just like DAP user access controls."),(0,r.kt)("li",{parentName:"ul"},"Added the ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_REVEAL_USER_PWD")," configuration option, which allows for\nhashed password values to be disclosed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"userPwd")," attribute.")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-121"},"Version 1.2.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed invalid object classes, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"inetOrgPerson"),", which did not permit\nsome optional attributes that it should have, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"mail"),".")),(0,r.kt)("p",null,"No administrative action is needed to upgrade to this version. Just download it\nand use it."),(0,r.kt)("h2",{id:"version-120"},"Version 1.2.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The List Continuation Reference (LCR) procedure is now supported."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where continuation references produced during the ",(0,r.kt)("inlineCode",{parentName:"li"},"list")," operation\nwhere not added to the partial outcome qualifier in the result."),(0,r.kt)("li",{parentName:"ul"},"Fixed a security vulnerability where the names of subordinate references could\nbe disclosed in a ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," operation to clients not authorized to see it."),(0,r.kt)("li",{parentName:"ul"},"Almost all LDAP schema objects\n",(0,r.kt)("a",{parentName:"li",href:"https://www.iana.org/assignments/ldap-parameters/ldap-parameters.xhtml"},"published with IANA"),"\nand almost all X.500 schema objects defined in any ITU recommendation\nare built-in to Meerkat DSA now.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Schema objects" refers to attribute types, context types, matching rules,\nLDAP syntaxes, object classes, and name forms.'),(0,r.kt)("li",{parentName:"ul"},"These schema objects include those to support:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Samba Servers / Active Directory Domain Controllers"),(0,r.kt)("li",{parentName:"ul"},"PGP Key Servers"),(0,r.kt)("li",{parentName:"ul"},"SSH Authentication"),(0,r.kt)("li",{parentName:"ul"},"PAM Authentication"),(0,r.kt)("li",{parentName:"ul"},"DNS Servers"),(0,r.kt)("li",{parentName:"ul"},"Java"),(0,r.kt)("li",{parentName:"ul"},"Sabayon Servers"),(0,r.kt)("li",{parentName:"ul"},"Kerberos Servers"),(0,r.kt)("li",{parentName:"ul"},"Email Servers"),(0,r.kt)("li",{parentName:"ul"},"FTP Servers"),(0,r.kt)("li",{parentName:"ul"},"RADIUS Servers"),(0,r.kt)("li",{parentName:"ul"},"Remote Calendars"),(0,r.kt)("li",{parentName:"ul"},"Printer Discovery"),(0,r.kt)("li",{parentName:"ul"},"Sudo Configuration"),(0,r.kt)("li",{parentName:"ul"},"LDAP Tables"),(0,r.kt)("li",{parentName:"ul"},"Voicemail"),(0,r.kt)("li",{parentName:"ul"},"X.400 Messaging"),(0,r.kt)("li",{parentName:"ul"},"X.952 Open Distributed Processing"),(0,r.kt)("li",{parentName:"ul"},"DHCP Server Configuration"),(0,r.kt)("li",{parentName:"ul"},"DUA Configuration"),(0,r.kt)("li",{parentName:"ul"},"Dynamic Groups"),(0,r.kt)("li",{parentName:"ul"},"Federated Filesystem"),(0,r.kt)("li",{parentName:"ul"},"H.323 Multimedia"),(0,r.kt)("li",{parentName:"ul"},"Intelligent Networks"),(0,r.kt)("li",{parentName:"ul"},"And more!"))),(0,r.kt)("li",{parentName:"ul"},"Many new operational attributes are supported, such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vendorName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vendorVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"administratorsAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entryDN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"superiorUUID")))),(0,r.kt)("li",{parentName:"ul"},"Wildboar Software defined name forms for most structural object classes that\nwere added to this release, to lessen the burden of setup.")))),(0,r.kt)("h2",{id:"version-110"},"Version 1.1.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Distributed operation is now secure."),(0,r.kt)("li",{parentName:"ul"},"Production and verification of signed arguments, results, and errors."),(0,r.kt)("li",{parentName:"ul"},"Strong authentication is now supported."),(0,r.kt)("li",{parentName:"ul"},"Many performance improvements."),(0,r.kt)("li",{parentName:"ul"},"The web admin console may now be protected using TLS and HTTP basic.\nauthentication. It is also secure against CSRF attacks."),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug with parsing attribute certificates."),(0,r.kt)("li",{parentName:"ul"},"Fixed hidden LDAP entries that have non-LDAP attribute types in RDNs."),(0,r.kt)("li",{parentName:"ul"},"Fixed display of dates and times."),(0,r.kt)("li",{parentName:"ul"},"Fix bug with Trust Anchor List file decoding (not reading a ",(0,r.kt)("inlineCode",{parentName:"li"},"ContentInfo"),")."),(0,r.kt)("li",{parentName:"ul"},"Search Aliases procedure used the DSA's name in the chaining arguments\noriginator field. (Not a security vulnerability, though, since the association\n",(0,r.kt)("em",{parentName:"li"},"was")," used for AC decisions.)"),(0,r.kt)("li",{parentName:"ul"},"Fix bug where entry could be created without required attribute by merely\nproviding the attribute with no values.")),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_CLIENT_CERT_AUTH")," no longer controls ",(0,r.kt)("inlineCode",{parentName:"li"},"rejectUnauthorized"),". This\nwas a security bug. In fact, this environment variable is no longer used\nentirely. ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_REJECT_UNAUTHORIZED_CLIENTS")," controls mTLS. If set to\n",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", mTLS is enforced."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_KEY")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_KEY_FILE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_CERT_CHAIN")," has been renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_SIGNING_CERTS_CHAIN_FILE")),(0,r.kt)("li",{parentName:"ul"},"Removed ",(0,r.kt)("inlineCode",{parentName:"li"},"DANGEROUSLY")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DSP")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DOP"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Just use the ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DSP")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ENABLE_DOP")," environment variables to enable\nDSP and DOP, respectively.")))))}h.isMDXComponent=!0}}]);