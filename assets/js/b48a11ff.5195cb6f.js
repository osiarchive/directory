"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,p=h["".concat(l,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Database Administration",u={unversionedId:"database",id:"database",title:"Database Administration",description:"How to Customize the Database Schema",source:"@site/docs/database.md",sourceDirName:".",slug:"/database",permalink:"/directory/docs/database",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Web Admin Console",permalink:"/directory/docs/webadmin"},next:{title:"Authorization",permalink:"/directory/docs/authorization"}},c={},d=[{value:"How to Customize the Database Schema",id:"how-to-customize-the-database-schema",level:2},{value:"Maximum entries",id:"maximum-entries",level:2},{value:"Bulk Insertion",id:"bulk-insertion",level:2},{value:"Bulk Insertion Mode",id:"bulk-insertion-mode",level:3},{value:"Use of Different Database Types",id:"use-of-different-database-types",level:2}],h={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-administration"},"Database Administration"),(0,o.kt)("h2",{id:"how-to-customize-the-database-schema"},"How to Customize the Database Schema"),(0,o.kt)("p",null,"Meerkat DSA uses Prisma as an ORM for interacting with the database. If you want\nto change the database schema, you may do so using the normal methods for\nupdating Prisma schema and the Prisma client."),(0,o.kt)("h2",{id:"maximum-entries"},"Maximum entries"),(0,o.kt)("p",null,"There is a maximum of 2.1 billion entries possible in the database. There is\nalmost no way any reasonable use case would ever use this many entries, and the\nDIT should be spread across multiple DSAs long before this maximum is reached."),(0,o.kt)("p",null,'Note that entries are soft-deleted, meaning that they are not truly "deleted"\nfrom the database, but merely marked as deleted with a deletion timestamp.'),(0,o.kt)("p",null,"If you run low on storage space, deleting these soft-deleted entries can be\na good way to reclaim some space."),(0,o.kt)("h2",{id:"bulk-insertion"},"Bulk Insertion"),(0,o.kt)("p",null,"In Meerkat DSA, you can insert a large number of entries either through the\nDirectory Access Protocol (DAP) ",(0,o.kt)("inlineCode",{parentName:"p"},"addEntry")," operation, or you can bypass the\nDirectory protocols entirely and insert entries directly into the database."),(0,o.kt)("p",null,"The former method is good for when you need to insert up to 100,000 entries or\nso. The former method will ensure that you do not violate schema, object class\ndefinitions, and access controls, but it will be much slower than the\nalternative. If you use this method, you should ensure that the NodeJS runtime\nis not using debugging and that the client you are using for the insertion is\nnot authenticating between each entry addition; in other words, you should\nensure that the same authenticated session is used to insert all entries."),(0,o.kt)("p",null,"Direct insertion into the database, on the other hand, will be much faster, but\nyou have a greater chance of screwing up and not inserting what you expected."),(0,o.kt)("p",null,"Note that entries will not be validated when they are read and searched--not\nwhen they are inserted. This means that, for instance, if you have a violation\nof the object class (such as by missing a mandatory attribute), Meerkat DSA will\nbe oblivious to this change, and there will usually not be any degredation of\nfunctionality, but entries could still be technically incorrect. Be aware that\nthere ",(0,o.kt)("em",{parentName:"p"},"are")," cases where invalid entries could have catastrophic effects:\ninserting an invalid access control subentry, for instance, could introduce a\nsevere security vulnerability!"),(0,o.kt)("h3",{id:"bulk-insertion-mode"},"Bulk Insertion Mode"),(0,o.kt)("p",null,"Bulk insertion mode can be enabled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"MEERKAT_BULK_INSERT_MODE"),"\nenvironment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),". This is a dangerous setting and should only be used\nwhen the DSA is not exposed to the public Internet, because all access controls\nare disabled. This will only make insertions very slightly faster."),(0,o.kt)("p",null,"According to empirical experiments, it seems that you should be able to insert\nabout 10 entries per second when using bulk insertion mode."),(0,o.kt)("h2",{id:"use-of-different-database-types"},"Use of Different Database Types"),(0,o.kt)("p",null,"In the future, Meerkat DSA may support Postgres and SQLite for the free version\nand Microsoft SQL Server in the paid version. For now, only MySQL is supported.\nMariaDB might be compatible, but a single test early on was not successful."))}m.isMDXComponent=!0}}]);