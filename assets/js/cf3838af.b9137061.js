"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[6416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,y=p["".concat(c,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},c="Dynamic Entries",s={unversionedId:"dynamic",id:"dynamic",title:"Dynamic Entries",description:"Meerkat DSA supports dynamic entries, as detailed in",source:"@site/docs/dynamic.md",sourceDirName:".",slug:"/dynamic",permalink:"/directory/docs/dynamic",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/dynamic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operational Bindings",permalink:"/directory/docs/opbinding"},next:{title:"Administration",permalink:"/directory/docs/administration"}},d={},p=[{value:"Deviations",id:"deviations",level:2},{value:"Security",id:"security",level:2},{value:"Recovery",id:"recovery",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dynamic-entries"},"Dynamic Entries"),(0,i.kt)("p",null,"Meerkat DSA supports dynamic entries, as detailed in\n",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc2589.html"},"IETF RFC 2589"),", but deviates from\nthe specification "),(0,i.kt)("p",null,"If an entry is marked as a dynamic object using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamicObject")," object\nclass (OID ",(0,i.kt)("inlineCode",{parentName:"p"},"1.3.6.1.4.1.1466.101.119.2"),"), but the created entry does not contain\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"entryTtl")," operational attribute, the default value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"entryTtl")," will\nbe determined by the\n",(0,i.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkatdefaultentryttl"},(0,i.kt)("inlineCode",{parentName:"a"},"MEERKAT_DEFAULT_ENTRY_TTL"))," environment\nvariable. If unset, this value defaults to 60, meaning that dynamic objects\ncreated without an ",(0,i.kt)("inlineCode",{parentName:"p"},"entryTtl")," attribute that specifies otherwise will be\nautomatically deleted after one minute."),(0,i.kt)("h2",{id:"deviations"},"Deviations"),(0,i.kt)("p",null,"The Meerkat DSA implementation of dynamic entries deviates from the\nspecification in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By allowing the ",(0,i.kt)("inlineCode",{parentName:"li"},"entryTtl")," operational attribute\n(OID ",(0,i.kt)("inlineCode",{parentName:"li"},"1.3.6.1.4.1.1466.101.119.3"),') to be modified normally like any other\nattribute. The LDAP "Refresh Request" extension is not needed.'),(0,i.kt)("li",{parentName:"ol"},"While the specification forbids the creation of non-dynamic entries under\ndynamic ones, Meerkat DSA does not forbid this. This is a feature: entire\nsubtrees may be made dynamic by merely making their roots dynamic.")),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"The power to use dynamic entries is the power to delete them! If a user can\napply an ",(0,i.kt)("inlineCode",{parentName:"p"},"entryTtl")," attribute value to an entry, it means that the entry can and\nwill be deleted after the specified time. A user's permission to delete an entry\nis neither checked when the ",(0,i.kt)("inlineCode",{parentName:"p"},"entryTtl")," attribute value is added, nor when the\nvalue is modified or removed.")),(0,i.kt)("p",null,"A user's ability to create dynamic entries can be controlled normally by access\ncontrols. Simply ensure that a user cannot create, modify, or delete ",(0,i.kt)("inlineCode",{parentName:"p"},"entryTtl"),"\nattributes and/or values, and ensure that users cannot create objects with an\n",(0,i.kt)("inlineCode",{parentName:"p"},"objectClass")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamicObject"),"."),(0,i.kt)("h2",{id:"recovery"},"Recovery"),(0,i.kt)("p",null,"If a dynamic entry is automatically deleted by accident, it may still be\nrecoverable, because Meerkat DSA does not actually remove the entry from the\ndatabase: it simply ceases to appear in results after the expiration time. If\nyou search in the database and find the wrongly expired entry, you can set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"expiresTimestamp")," column to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,i.kt)("p",null,"In the future, there will be extended operations that allow DSA administrators\nto actually delete entries that are marked as deleted or expired. If such an\noperation is used, expired entries may, in fact, be unrecoverable. But, again,\nthis is not currently implemented."))}u.isMDXComponent=!0}}]);