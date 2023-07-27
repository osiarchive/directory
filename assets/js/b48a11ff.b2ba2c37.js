"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[8920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Database Administration",c={unversionedId:"database",id:"database",title:"Database Administration",description:"How to Customize the Database Schema",source:"@site/docs/database.md",sourceDirName:".",slug:"/database",permalink:"/directory/docs/database",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Web Admin Console",permalink:"/directory/docs/webadmin"},next:{title:"Authorization",permalink:"/directory/docs/authorization"}},u={},d=[{value:"How to Customize the Database Schema",id:"how-to-customize-the-database-schema",level:2},{value:"Maximum entries",id:"maximum-entries",level:2},{value:"Bulk Insertion",id:"bulk-insertion",level:2},{value:"Bulk Insertion Mode",id:"bulk-insertion-mode",level:3},{value:"Use of Different Database Types",id:"use-of-different-database-types",level:2},{value:"Performance Tuning",id:"performance-tuning",level:2},{value:"Connection Pool Size",id:"connection-pool-size",level:3},{value:"Unix Sockets",id:"unix-sockets",level:3}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-administration"},"Database Administration"),(0,i.kt)("h2",{id:"how-to-customize-the-database-schema"},"How to Customize the Database Schema"),(0,i.kt)("p",null,"Meerkat DSA uses Prisma as an ORM for interacting with the database. If you want\nto change the database schema, you may do so using the normal methods for\nupdating Prisma schema and the Prisma client."),(0,i.kt)("h2",{id:"maximum-entries"},"Maximum entries"),(0,i.kt)("p",null,"There is a maximum of 2.1 billion entries possible in the database. There is\nalmost no way any reasonable use case would ever use this many entries, and the\nDIT should be spread across multiple DSAs long before this maximum is reached."),(0,i.kt)("p",null,'Note that entries are soft-deleted, meaning that they are not truly "deleted"\nfrom the database, but merely marked as deleted with a deletion timestamp.'),(0,i.kt)("p",null,"If you run low on storage space, deleting these soft-deleted entries can be\na good way to reclaim some space."),(0,i.kt)("h2",{id:"bulk-insertion"},"Bulk Insertion"),(0,i.kt)("p",null,"In Meerkat DSA, you can insert a large number of entries either through the\nDirectory Access Protocol (DAP) ",(0,i.kt)("inlineCode",{parentName:"p"},"addEntry")," operation, or you can bypass the\nDirectory protocols entirely and insert entries directly into the database."),(0,i.kt)("p",null,"The former method is good for when you need to insert up to 100,000 entries or\nso. The former method will ensure that you do not violate schema, object class\ndefinitions, and access controls, but it will be much slower than the\nalternative. If you use this method, you should ensure that the NodeJS runtime\nis not using debugging and that the client you are using for the insertion is\nnot authenticating between each entry addition; in other words, you should\nensure that the same authenticated session is used to insert all entries."),(0,i.kt)("p",null,"Direct insertion into the database, on the other hand, will be much faster, but\nyou have a greater chance of screwing up and not inserting what you expected."),(0,i.kt)("p",null,"Note that entries will not be validated when they are read and searched--not\nwhen they are inserted. This means that, for instance, if you have a violation\nof the object class (such as by missing a mandatory attribute), Meerkat DSA will\nbe oblivious to this change, and there will usually not be any degredation of\nfunctionality, but entries could still be technically incorrect. Be aware that\nthere ",(0,i.kt)("em",{parentName:"p"},"are")," cases where invalid entries could have catastrophic effects:\ninserting an invalid access control subentry, for instance, could introduce a\nsevere security vulnerability!"),(0,i.kt)("h3",{id:"bulk-insertion-mode"},"Bulk Insertion Mode"),(0,i.kt)("p",null,"Bulk insertion mode can be enabled by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"MEERKAT_BULK_INSERT_MODE"),"\nenvironment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". This is a dangerous setting and should only be used\nwhen the DSA is not exposed to the public Internet, because all access controls\nare disabled. This will only make insertions very slightly faster."),(0,i.kt)("p",null,"According to empirical experiments, it seems that you should be able to insert\nabout 10 entries per second when using bulk insertion mode."),(0,i.kt)("h2",{id:"use-of-different-database-types"},"Use of Different Database Types"),(0,i.kt)("p",null,"In the future, Meerkat DSA may support Postgres and SQLite for the free version\nand Microsoft SQL Server in the paid version. For now, only MySQL is supported.\nMariaDB might be compatible, but a single test early on was not successful."),(0,i.kt)("h2",{id:"performance-tuning"},"Performance Tuning"),(0,i.kt)("h3",{id:"connection-pool-size"},"Connection Pool Size"),(0,i.kt)("p",null,"Empirical testing has not demonstrated any significant performance improvements\nby editing the default connection pool, but it should be done anyway, to avoid\nthis being a problem in the first place. In a typical use case, where Meerkat\nDSA is the only client to the backing database, its connection pool may be set\nhigher. This can be done by adding a ",(0,i.kt)("inlineCode",{parentName:"p"},"?connection_limit=##")," query parameter to\nthe end of your ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),", like so:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mysql://root:example@localhost:3306/directory?connection_limit=40")),(0,i.kt)("p",null,"You'll want to set this number to more than ",(0,i.kt)("inlineCode",{parentName:"p"},"2*N + 1"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," is the number\nof CPU cores on the system where Meerkat DSA is running; if you set it equal to\nor lower, you will likely hinder performance."),(0,i.kt)("h3",{id:"unix-sockets"},"Unix Sockets"),(0,i.kt)("p",null,"The use of Unix Domain Sockets to connect to the database instead of TCP\nlikewise has shown little effect on performance, but if available, Unix Domain\nSockets should be preferred over TCP sockets. Unix Domain Sockets have much\nlower latency and higher throughput than TCP."),(0,i.kt)("p",null,"They can be configured by adding the socket name to your ",(0,i.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," like so:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mysql://user2:asdf2@localhost/directory2?socket=/var/run/mysqld/mysqld.sock")),(0,i.kt)("p",null,"Obviously, you'll want to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/run/mysqld/mysqld.sock")," with the real\npath to the Unix socket."))}m.isMDXComponent=!0}}]);