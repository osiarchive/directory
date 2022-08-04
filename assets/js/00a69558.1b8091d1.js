"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[804],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="Transport Layer Security (TLS)",c={unversionedId:"tls",id:"tls",title:"Transport Layer Security (TLS)",description:"TLS is an essential part of directory security. It gives your directory",source:"@site/docs/tls.md",sourceDirName:".",slug:"/tls",permalink:"/directory/docs/tls",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/tls.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/directory/docs/networking"},next:{title:"Online PKI",permalink:"/directory/docs/online-pki"}},u={},p=[{value:"TLS Configuration",id:"tls-configuration",level:2},{value:"TLS Client Certificate Authentication",id:"tls-client-certificate-authentication",level:2},{value:"Disabling Server Authentication",id:"disabling-server-authentication",level:2},{value:"The Web Admin Console",id:"the-web-admin-console",level:2},{value:"Setting the Local Qualifier",id:"setting-the-local-qualifier",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transport-layer-security-tls"},"Transport Layer Security (TLS)"),(0,a.kt)("p",null,"TLS is an essential part of directory security. It gives your directory\npoint-to-point confidentiality and integrity."),(0,a.kt)("p",null,"However, it ",(0,a.kt)("em",{parentName:"p"},"does not")," give your directory operations end-to-end integrity;\nintermediary DSAs may spoof arguments, results, and errors, except when signing\nis used. See ",(0,a.kt)("a",{parentName:"p",href:"/directory/docs/signing"},"here")," for information on configuring signing."),(0,a.kt)("h2",{id:"tls-configuration"},"TLS Configuration"),(0,a.kt)("p",null,"Almost all TLS-related environment variables start with ",(0,a.kt)("inlineCode",{parentName:"p"},"MEERKAT_TLS_"),". Review\nthese environment variables ",(0,a.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkattlsanswerocsprequests"},"here")," for\ninformation on specific configuration options."),(0,a.kt)("p",null,"Your TLS configuration applies to scenarios where Meerkat DSA operates both as a\nserver and a client. The only exceptions to this are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/directory/docs/env#meerkattlsrejectunauthorizedclients"},(0,a.kt)("inlineCode",{parentName:"a"},"MEERKAT_TLS_REJECT_UNAUTHORIZED_CLIENTS"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/directory/docs/env#meerkattlsrejectunauthorizedclients"},(0,a.kt)("inlineCode",{parentName:"a"},"MEERKAT_TLS_REJECT_UNAUTHORIZED_SERVERS")))),(0,a.kt)("p",null,"Which, as their names imply, operate differently depending on whether Meerkat\nDSA acts as a TLS client or server."),(0,a.kt)("p",null,"At minimum, TLS can be configured via the following environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_CERT_FILE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_KEY_FILE"))),(0,a.kt)("p",null,"Or by including"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MEERKAT_TLS_PFX_FILE"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MEERKAT_TLS_CERT_FILE")," contains a file path to the X.509 certificate to be\nused for TLS. ",(0,a.kt)("inlineCode",{parentName:"p"},"MEERKAT_TLS_KEY_FILE")," shall contain the file path to the\nprivate key to be used for TLS. If both of these are present, TLS will be\nenabled. Otherwise, TLS will silently fail."),(0,a.kt)("p",null,"If either the key file or PFX file are password-protected, these can be\ndecrypted by supplying the passphrase in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MEERKAT_TLS_KEY_PASSPHRASE"),"\nenvironment variable."),(0,a.kt)("p",null,"You can configure your trust anchors (root certificate authorities) through the\nuse of the ",(0,a.kt)("a",{parentName:"p",href:"./env#meerkattlscafile"},(0,a.kt)("inlineCode",{parentName:"a"},"MEERKAT_TLS_CA_FILE"))," environment variable.\nThe file referred to by this variable contains the certificate authorities used\nto verify TLS peers. If unset, this defaults to a bundle of trust anchors that\nare built-in to the NodeJS runtime."),(0,a.kt)("h2",{id:"tls-client-certificate-authentication"},"TLS Client Certificate Authentication"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"TLS Client Certificate Authentication is also known as\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication#mTLS"},'"Mutual TLS" or "mTLS"'),".")),(0,a.kt)("p",null,"One way to greatly enhance the security of your directory is to require TLS\nclient certificate authentication. If you use TLS client certificate\nauthentication, clients that (attempt to) connect to your directory will be\nrequired to present proof of possession of a private key whose validity can be\ntraced back to a configured trust anchor. This is much more secure than a\npassword, and it blocks clients at the TLS socket, rather than at the\napplication layer, meaning that a smaller attack surface is exposed by a DSA\nconfigured as such."),(0,a.kt)("p",null,"As long as you have TLS already configured (as described above), all you need to\ndo to enable this is set the environment variable\n",(0,a.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkattlsrejectunauthorizedclients"},(0,a.kt)("inlineCode",{parentName:"a"},"MEERKAT_TLS_REJECT_UNAUTHORIZED_CLIENTS")),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (enabled)."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"While TLS client certificate authentication is generally very secure, there are\nrisks involved. Namely, you are inviting TLS peers to submit X.509 certificates\nto your TLS socket for validation. These inputs are complicated, and in the\npast, there have been security vulnerabilities discovered in TLS implementations\nwhereby maliciously-crafted client certificates could be used to, say, bring\nservices offline, read memory, or take control of remote hosts."),(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://nvd.nist.gov/vuln/detail/CVE-2022-0778"},"CVE-2022-0778")," for an\nexample of what could go wrong. Still, if extreme privacy and authentication are\nneeded, the benefits of this usually outweigh the risks.")),(0,a.kt)("h2",{id:"disabling-server-authentication"},"Disabling Server Authentication"),(0,a.kt)("p",null,"Yes, it is possible to disable server authentication. You can do this by setting\nthe environment variable\n",(0,a.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkattlsrejectunauthorizedclients"},(0,a.kt)("inlineCode",{parentName:"a"},"MEERKAT_TLS_REJECT_UNAUTHORIZED_SERVERS")),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," (disabled). This will cause Meerkat DSA to ignore an invalid\ncertification path presented by a server to which it connects."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you disable server authentication, it mitigates the protection afforded by\nTLS; anybody can impersonate the server. If you disable server authentication")),(0,a.kt)("h2",{id:"the-web-admin-console"},"The Web Admin Console"),(0,a.kt)("p",null,"Enabling TLS is also critical for securing your web admin console (if enabled).\nSee more information ",(0,a.kt)("a",{parentName:"p",href:"/directory/docs/webadmin#tls"},"here"),"."),(0,a.kt)("h2",{id:"setting-the-local-qualifier"},"Setting the Local Qualifier"),(0,a.kt)("p",null,"The meaning of the ",(0,a.kt)("inlineCode",{parentName:"p"},"localQualifier")," component of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthenticationLevel")," as\ndescribed in ",(0,a.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.501/en"},"ITU Recommendation X.501 (2019)"),",\nSection 18.4.2.3, is left to DSA implementations. In Meerkat DSA the\n",(0,a.kt)("inlineCode",{parentName:"p"},"localQualifier")," is given a value depending on the level of transport security\nthat is used to protect a connection with a client."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/directory/docs/authorization#setting-the-local-qualifier-of-a-client"},"here")," for\ndocumentation on how to configure how your DSA sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"localQualifier")," for a\ngiven client."))}h.isMDXComponent=!0}}]);