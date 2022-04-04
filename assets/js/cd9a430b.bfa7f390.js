"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8463:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Telemetry",c={unversionedId:"telemetry",id:"telemetry",title:"Telemetry",description:"The free edition of Meerkat DSA uses a lot of telemetry, and does not provide a",source:"@site/docs/telemetry.md",sourceDirName:".",slug:"/telemetry",permalink:"/docs/telemetry",editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/usage"},next:{title:"Conformance",permalink:"/docs/conformance"}},u=[{value:"What Data Is Collected",id:"what-data-is-collected",children:[],level:2},{value:"What Data is Not Collected",id:"what-data-is-not-collected",children:[],level:2},{value:"Why This Data Is Collected",id:"why-this-data-is-collected",children:[],level:2},{value:"Bulk Insertion Mode",id:"bulk-insertion-mode",children:[],level:2},{value:"Prisma Telemetry",id:"prisma-telemetry",children:[],level:2},{value:"Other Telemetry",id:"other-telemetry",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"telemetry"},"Telemetry"),(0,i.kt)("p",null,"The free edition of Meerkat DSA uses a lot of telemetry, and does not provide a\nway for users to opt out (though you could block it somewhat easily if you do a\nlittle digging on how it works). This is a small homage to pay to somebody that\njust wrote a free and open-sourced X.500 DSA for you. The telemetry data\ncollected is owned by Wildboar Software."),(0,i.kt)("p",null,"Note that what follows is subject to change and is not warrantied. We could be\nwrong about what follows. As a general principle, Meerkat DSA telemetry will not\ninclude highly sensitive data or data that could become highly sensitive."),(0,i.kt)("h2",{id:"what-data-is-collected"},"What Data Is Collected"),(0,i.kt)("p",null,'Meerkat DSA collects telemetry data on all DAP and DSP requests, and sends this\ndata back to "the mothership" ',(0,i.kt)("em",{parentName:"p"},"after")," the request is complete, thereby not\nblocking the response on sending telemetry data. This data is extremely\ngranular. Meerkat DSA collects a ",(0,i.kt)("em",{parentName:"p"},"ridiculous")," amount of information about each\nrequest, which includes (but is not limited to):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Statistics relating to the host system, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The operation system"),(0,i.kt)("li",{parentName:"ul"},"Memory and CPU status"),(0,i.kt)("li",{parentName:"ul"},"The hostname"),(0,i.kt)("li",{parentName:"ul"},"The uptime"),(0,i.kt)("li",{parentName:"ul"},"License status"))),(0,i.kt)("li",{parentName:"ul"},"Statistics relating to the connection, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IP address"),(0,i.kt)("li",{parentName:"ul"},"TCP port"),(0,i.kt)("li",{parentName:"ul"},"Transport and presentation layers"),(0,i.kt)("li",{parentName:"ul"},"Authentication level"),(0,i.kt)("li",{parentName:"ul"},"Outstanding operations and pagination"))),(0,i.kt)("li",{parentName:"ul"},"Statistics relating to the request and response, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The operation code of the request"),(0,i.kt)("li",{parentName:"ul"},"The error code of any errors"),(0,i.kt)("li",{parentName:"ul"},"The attribute types (but not values) used in filters and selections"),(0,i.kt)("li",{parentName:"ul"},"The context types (but not values) used in filters and selections"),(0,i.kt)("li",{parentName:"ul"},"Statistics on the number of results returned from search and list operations"),(0,i.kt)("li",{parentName:"ul"},"Statistics on paging"),(0,i.kt)("li",{parentName:"ul"},"Statistics on continuation references, chaining, networking, etc"),(0,i.kt)("li",{parentName:"ul"},"Statistics on security parameters (nothing sensitive is collected)")))),(0,i.kt)("p",null,'In addition to this, Meerkat DSA periodically creates a "database report" which\ncollects data including, but not limited to the following:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Statistics on the number of entries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This includes categories, such as subentries, administrative points, etc."))),(0,i.kt)("li",{parentName:"ul"},"Statistics on the object classes of entries that are stored."),(0,i.kt)("li",{parentName:"ul"},"Schema statistics, including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Attribute types"),(0,i.kt)("li",{parentName:"ul"},"Context types"),(0,i.kt)("li",{parentName:"ul"},"Matching rules"),(0,i.kt)("li",{parentName:"ul"},"Matching rule uses"),(0,i.kt)("li",{parentName:"ul"},"DIT structure rules"),(0,i.kt)("li",{parentName:"ul"},"DIT content rules"),(0,i.kt)("li",{parentName:"ul"},"DIT context use rules"),(0,i.kt)("li",{parentName:"ul"},"Name forms"),(0,i.kt)("li",{parentName:"ul"},"Friendships"))),(0,i.kt)("li",{parentName:"ul"},"Statistics on operational bindings"),(0,i.kt)("li",{parentName:"ul"},"Known access points")),(0,i.kt)("p",null,"If request telemetry is tolerable, but the database reports are not, the latter\nmay be blocked by restarting Meerkat DSA before each report is sent. We will not\ntell you how often that is or help you disable it, but if you look at the code,\nyou might be able to figure out how often to restart Meerkat DSA to effectively\nprohibit database reports."),(0,i.kt)("h2",{id:"what-data-is-not-collected"},"What Data is Not Collected"),(0,i.kt)("p",null,"Meerkat DSA does not collect any information regarding the ",(0,i.kt)("inlineCode",{parentName:"p"},"administerPassword"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"changePassword")," operations. (Technically speaking, Meerkat DSA does\n",(0,i.kt)("em",{parentName:"p"},"generate")," some relatively non-descript telemetry data, then discards it rather\nthan transmitting it.)"),(0,i.kt)("p",null,"Meerkat DSA does not collect the names of entries, but does sometimes collect\nthe length of their distinguished names. (The utility of this is in determining\nhow deep the DIT is.)"),(0,i.kt)("p",null,"Meerkat DSA also does not collect the contents of specific entries, but will\ncollect aggregate data that comes from entries. For example, a count of all\ndistinct object classes in use will be collected, but not which object classes\nany particular entry has."),(0,i.kt)("p",null,"Statistics on passwords is never collected."),(0,i.kt)("h2",{id:"why-this-data-is-collected"},"Why This Data Is Collected"),(0,i.kt)("p",null,"The telemetry data collected by Meerkat DSA primarily to provide support, bug\nfixes, and improvements."),(0,i.kt)("p",null,"Here are some examples of how the data collected could help improve Meerkat DSA:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The types of object classes stored can give us a hint as to whether Meerkat\nDSA is being used as a store of user information for an identity provider. If\nit turned out that Meerkat DSA were exclusively being used as such, we might\ntry to prioritize features relating to security above other features, or we\nmight try to discover why users don't use Meerkat DSA for other purposes."),(0,i.kt)("li",{parentName:"ul"},"If we see an unexpected, large number of failed authentication attempts, it\ncould tell us that the network is under attack by nefarious actors using\nbrute-force methods. We can alert the known network of users and prioritize\nupdates that stifle these attacks."),(0,i.kt)("li",{parentName:"ul"},"Seeing search requests consistently return zero results may indicate that\nthere is an issue with a matching rule implementation, which can be fixed."),(0,i.kt)("li",{parentName:"ul"},'Collecting the operational bindings may be useful in constructing a "map" of\nthe directory landscape. This data could be useful for identifying single\npoints of failure in the network, establishing global first-level DSAs based\non which DSAs are already popular, publishing reports and studies, and more.')),(0,i.kt)("p",null,"Future versions of Meerkat DSA, where Meerkat is less buggy, might not collect\nas much data, since the primary purpose of collecting this data is to provide\nsupport and fix bugs."),(0,i.kt)("h2",{id:"bulk-insertion-mode"},"Bulk Insertion Mode"),(0,i.kt)("p",null,"Telemetry is disabled when using Bulk Insertion Mode. Be sure to understand the\ntrade-offs regarding the use of Bulk Insertion Mode before enabling it to\ncircumvent telemetry: Bulk Insertion Mode disables all access controls and\nmost schema validation for ",(0,i.kt)("inlineCode",{parentName:"p"},"addEntry")," operations."),(0,i.kt)("h2",{id:"prisma-telemetry"},"Prisma Telemetry"),(0,i.kt)("p",null,"Prisma, which is the ORM that Meerkat DSA uses for interacting with the\ndatabase, uses its own telemetry.\nRead ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/concepts/more/telemetry"},"this documentation"),"\nfor information on how to disable Prisma's telemetry. As of this writing,\nPrisma's telemetry may be disabled by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"CHECKPOINT_DISABLE")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h2",{id:"other-telemetry"},"Other Telemetry"),(0,i.kt)("p",null,"There may be other telemetry collected by Meerkat DSA's dependencies or the\nplatform or database on which Meerkat runs. Wildboar Software and the makers of\nMeerkat DSA offer no warranty on what telemetry is or is not collected from\nthese sources. Other than dependencies we ourselves have created, we do not have\ncontrol over telemetry collected by the dependencies or infrastructure."))}p.isMDXComponent=!0}}]);