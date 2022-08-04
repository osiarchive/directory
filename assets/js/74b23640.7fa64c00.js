"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Demo",d={unversionedId:"demo",id:"demo",title:"Demo",description:"Wildboar Software hosts a demo environment of",source:"@site/docs/demo.md",sourceDirName:".",slug:"/demo",permalink:"/directory/docs/demo",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/demo.md",tags:[],version:"current",frontMatter:{}},m={},c=[{value:"Credentials",id:"credentials",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Hacking Challenge",id:"hacking-challenge",level:2}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"demo"},"Demo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wildboarsoftware.com/"},"Wildboar Software")," hosts a demo environment of\nMeerkat DSA instances, that are bound together by operational bindings. You can\nconnect to any of these access points via Directory Access Protocol over\nInternet Directly-Mapped (IDM) transport:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idm://dsa01.root.mkdemo.wildboar.software:4632")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idm://dsa01.gb.mkdemo.wildboar.software:4632")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idm://dsa01.ru.mkdemo.wildboar.software:4632")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idm://dsa01.moscow.mkdemo.wildboar.software:4632"))),(0,r.kt)("p",null,"Note that the above host names do not mean that these instances are hosted in\nthe countries indicated by their names. Rather, these merely identify the\nnaming contexts that each of these DSAs serve. You can access any one of these\nDSAs and they should be able to chain operations to each other. These DSAs also\nexpose LDAP endpoints at the following URLs respectively:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ldap://dsa01.root.mkdemo.wildboar.software:389")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ldap://dsa01.gb.mkdemo.wildboar.software:389")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ldap://dsa01.ru.mkdemo.wildboar.software:389")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ldap://dsa01.moscow.mkdemo.wildboar.software:389"))),(0,r.kt)("p",null,"Finally, you can connect to the web administration console, which will only\nshow you the DSEs residing in any given DSA. These sits can be accessed via\nweb browser:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://webadm01.root.mkdemo.wildboar.software:18080")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://webadm01.gb.mkdemo.wildboar.software:18080")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://webadm01.ru.mkdemo.wildboar.software:18080")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://webadm01.moscow.mkdemo.wildboar.software:18080"))),(0,r.kt)("h2",{id:"credentials"},"Credentials"),(0,r.kt)("p",null,"You may log in as the administrator account with these credentials:"),(0,r.kt)("p",null,"Bind DN: ",(0,r.kt)("inlineCode",{parentName:"p"},"cn=admin"),"\nPassword: ",(0,r.kt)("inlineCode",{parentName:"p"},"asdf")),(0,r.kt)("h2",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"You may read and write all you want to these DSAs. They exist specifically so\nyou can try them out. Do not get attached to any data stored in them, however;\nthey are deleted and recreated regularly."),(0,r.kt)("h2",{id:"hacking-challenge"},"Hacking Challenge"),(0,r.kt)("p",null,"For so long as this documentation is kept online, you are permitted by Wildboar\nSoftware to attempt to hack the hosts named above (exclusively), subject to\nthese rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You may not use these hosts to take over the Kubernetes cluster or other\ninfrastructure on which they run, or anything else at all. The boundaries for\nhacking are strictly these hosts.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"However, if you discover a vulnerability where you believe this is\npossible, please let us know!"))),(0,r.kt)("li",{parentName:"ol"},"You may not hack in such a way that inserts, saves, stores, or transmits\nanything vulgar, illegal, violent, disrespectful, etc. Keep it clean, please."),(0,r.kt)("li",{parentName:"ol"},"If you discover a vulnerability that is not already known by Wildboar\nSoftware, you MUST disclose it to Wildboar Software.")),(0,r.kt)("p",null,"These will not be formal rules, per se, but please:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Do not attempt password cracking or brute-force attacks. Meerkat DSA will be\nslow if you have dozens of clients all simultaneously flooding it with\nrequests. We already know about this. We are primarily interested in\ninformation disclosures and data corruption."),(0,r.kt)("li",{parentName:"ol"},"Let Jonathan M. Wilbur know you are attempting to hack Meerkat DSA via\n",(0,r.kt)("a",{parentName:"li",href:"mailto:jonathan.wilbur@wildboarsoftware.com"},"email"),".")),(0,r.kt)("p",null,"If these rules are abused often enough, the demo environment will be removed, so\nplay nice!"))}p.isMDXComponent=!0}}]);