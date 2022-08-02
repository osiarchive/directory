"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,m=h["".concat(d,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8851:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},d="Authentication",c={unversionedId:"authentication",id:"authentication",title:"Authentication",description:"Meerkat DSA supports simple authentication (meaning authentication with a",source:"@site/docs/authentication.md",sourceDirName:".",slug:"/authentication",permalink:"/directory/docs/authentication",editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/authentication.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authorization",permalink:"/directory/docs/authorization"},next:{title:"Logging and Monitoring",permalink:"/directory/docs/logging-monitoring"}},l=[{value:"Anonymous Authentication",id:"anonymous-authentication",children:[],level:2},{value:"How Meerkat DSA Handles Passwords",id:"how-meerkat-dsa-handles-passwords",children:[],level:2},{value:"How to Change Passwords",id:"how-to-change-passwords",children:[],level:2},{value:"Password Policy",id:"password-policy",children:[],level:2},{value:"Strong Authentication",id:"strong-authentication",children:[],level:2},{value:"Architectural Details",id:"architectural-details",children:[],level:2}],p={toc:l};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Meerkat DSA supports simple authentication (meaning authentication with a\npassword) and strong authentication (meaning authentication with digital signatures)\nin DAP, DSP, and DOP. LDAP only supports simple authentication."),(0,r.kt)("h2",{id:"anonymous-authentication"},"Anonymous Authentication"),(0,r.kt)("p",null,"Users of Meerkat DSA may bind anonymously by supplying no password. If this is\nused, authentication will always succeed, even if the bound distinguished name\ndoes not correspond to any real entry present and even if the entry ",(0,r.kt)("em",{parentName:"p"},"does")," exist\nand has a password. This behavior is to avoid information disclosure."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'If Meerkat DSA did not do this, it would be possible for a nefarious\nactor to enumerate the entries in a DSA, despite access controls, by guessing\ndistinguished names in the bind operation and seeing which attempts come back\nwith errors saying "entry does not exist" and which come back with "invalid\npassword." This is the same reason that websites with logins must give you the\nsame error message, regardless of whether you got the username or password\nwrong.'))),(0,r.kt)("p",null,"When users are bound anonymously, they may perform operations against Meerkat\nDSA. It is the responsibility of administrators to configure access controls to\nprevent anonymous users from doing things they should not be able to do."),(0,r.kt)("p",null,"Currently, anonymous usage can only be prevented by access control, but a future\nfeature will enable administrators to reject all anonymous traffic."),(0,r.kt)("h2",{id:"how-meerkat-dsa-handles-passwords"},"How Meerkat DSA Handles Passwords"),(0,r.kt)("p",null,"In the X.500 specifications, there is no specified attribute that is expected to\nserve as the authoritative source of the password for an entry. Each DSA may\nchoose to use a different attribute type to store password information; in fact,\npasswords might not even be stored in entries at all! This is why the\n",(0,r.kt)("inlineCode",{parentName:"p"},"administerPassword")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"changePassword")," operations were introduced to the\nDirectory Access Protocol (DAP)."),(0,r.kt)("p",null,"In Meerkat DSA, both the ",(0,r.kt)("inlineCode",{parentName:"p"},"userPassword")," attribute (specified in\n",(0,r.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.509/en"},"ITU Recommendation X.509"),") and the\n",(0,r.kt)("inlineCode",{parentName:"p"},"userPwd")," attribute (specified in\n",(0,r.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.520/en"},"ITU Recommendation X.520"),") are used.\nHowever, regardless of any access controls, whenever these values are read, they\nreturn empty strings. This is because passwords are extremely sensitive, and\nlet's face it: people re-use passwords between services. To prevent\nadministrators from misconfiguring Meerkat DSA and leaking all of their users'\npasswords, the passwords are simply never returned, even if queried directly,\nand even if access controls permit it. An empty string is returned as the value\nso that directory users can at least know ",(0,r.kt)("em",{parentName:"p"},"if")," an entry has a password. In other\nwords, passwords are ",(0,r.kt)("em",{parentName:"p"},"write-only")," in Meerkat DSA."),(0,r.kt)("p",null,"The password is stored in the database. If password is supplied using cleartext,\nit will be salted and hashed using the Scrypt algorithm and stored in the\ndatabase. If the password is already encrypted / hashed, it will be stored using\nthe algorithm that was used to encrypt it."),(0,r.kt)("h2",{id:"how-to-change-passwords"},"How to Change Passwords"),(0,r.kt)("p",null,"It is recommended to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"administerPassword")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"changePassword"),"\noperations to modify an entry's password."),(0,r.kt)("h2",{id:"password-policy"},"Password Policy"),(0,r.kt)("p",null,"Password policy, as specified in\n",(0,r.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.509/en"},"ITU Recommendation X.509")," is not\ncurrently supported. Future editions of Meerkat DSA will support X.509 Password\nPolicies, though there may only be a subset of these features available for the\nfree edition of Meerkat DSA (which is not to imply that ",(0,r.kt)("em",{parentName:"p"},"all")," of these features\nwill be available in the paid version)."),(0,r.kt)("h2",{id:"strong-authentication"},"Strong Authentication"),(0,r.kt)("p",null,"Meerkat DSA supports strong authentication. If a certification path is supplied,\nthis is used to verify the signature and trustworthiness of the bind token\nprovided in strong authentication."),(0,r.kt)("p",null,"If a certification path is ",(0,r.kt)("em",{parentName:"p"},"not")," supplied in the bind argument, but a name ",(0,r.kt)("em",{parentName:"p"},"is"),"\nsupplied (via the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," parameter), and if the environment variable\n",(0,r.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkatlookupuncertstrongauth"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_LOOKUP_UNCERT_STRONG_AUTH"))," is\nset to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," (enabled), Meerkat DSA searches internally for a user by the asserted\ndistinguished name; if this user is found, and it is of object class\n",(0,r.kt)("inlineCode",{parentName:"p"},"pkiCertPath"),", and it has an attribute of type ",(0,r.kt)("inlineCode",{parentName:"p"},"pkiPath"),", each value of its\n",(0,r.kt)("inlineCode",{parentName:"p"},"pkiPath")," attribute is tried until a certification path is found that verifies\nthe bind token. If no such vindicating certification path is found, Meerkat DSA\nrejects the authentication attempt. It is strongly preferred for clients to\nsupply a certification path in the bind argument so that this lookup need not\nhappen."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Enabling the above feature is risky, since it can open your DSA up to\ndenial-of-service attacks. See more\n",(0,r.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkatlookupuncertstrongauth"},"here"),"."))),(0,r.kt)("p",null,"The certification path is verified with the trust anchors configured in\n",(0,r.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkatsigningcafile"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_SIGNING_CA_FILE")),". If this environment\nvariable is not configured, the bundle of certificates that are built in to\nthe NodeJS runtime are used by default."),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkatsigningdisableverification"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_SIGNING_DISABLE_VERIFICATION")),"\nis enabled (meaning that all signature verification is disabled in Meerkat DSA),\nstrong authentication will always fail."),(0,r.kt)("h2",{id:"architectural-details"},"Architectural Details"),(0,r.kt)("p",null,"You might notice that it can take a few seconds to authenticate to Meerkat DSA.\nThis is no accident."),(0,r.kt)("p",null,"Authentication is protected against\n",(0,r.kt)("a",{parentName:"p",href:"https://ropesec.com/articles/timing-attacks/"},"timing attacks")," by response time\nrandomization and constant-time string comparison. (These two methods may seem\nto contradict each other, and you'd be right to point that out; however, both\nare used so that, if one does not work, the other will.) By default, Meerkat DSA\nalways waits one second, but potentially up to two seconds, before responding\nwith an authentication result. Response time randomization can be configured by administrators via the ",(0,r.kt)("inlineCode",{parentName:"p"},"MEERKAT_BIND_MIN_SLEEP_MS"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"MEERKAT_BIND_SLEEP_RANGE_MS")," environment variables."),(0,r.kt)("p",null,"Notably, Meerkat DSA does not sleep for a random amount of time, perform the\ncredential evaluation, then return a result; it performs a credential evaluation\nthen waits the remaining amount of time such that the randomly-selected sleep\ntime has passed. If the former methodology were used, nefarious actors could\nstill perform a timing attack by attempting authentication many times to see\nwhich attempts take the longest response time on average."))}h.isMDXComponent=!0}}]);