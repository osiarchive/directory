"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(u,r(r({ref:t},l),{},{components:n})):a.createElement(u,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6385:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},c="The Web Admin Console",d={unversionedId:"webadmin",id:"webadmin",title:"The Web Admin Console",description:"Meerkat DSA also provides a web-based administrative console, which does not use",source:"@site/docs/webadmin.md",sourceDirName:".",slug:"/webadmin",permalink:"/directory/docs/webadmin",editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/webadmin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/directory/docs/env"},next:{title:"Database Administration",permalink:"/directory/docs/database"}},l=[{value:"Authentication",id:"authentication",children:[],level:2},{value:"TLS",id:"tls",children:[],level:2}],m={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-web-admin-console"},"The Web Admin Console"),(0,o.kt)("p",null,"Meerkat DSA also provides a web-based administrative console, which does not use\nJavaScript so as to be lightweight, maximally compatible, and secure. If you are\nwondering why the web-based administrative portal is ugly, that's why. The lack\nof Javascript means that you can access your Meerkat DSA web admin console over\n",(0,o.kt)("a",{parentName:"p",href:"https://www.torproject.org/"},"TOR"),"."),(0,o.kt)("p",null,"The web admin console is only necessary for accepting or rejecting requested\noperational bindings and triggering ",(0,o.kt)("a",{parentName:"p",href:"/directory/docs/administration#hibernation"},"hibernation"),"; everything else can be done using the X.500 protocols. In\nthe future, we will find a way to make even this possible without the web\nconsole."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that exposing the web-based administrative console is a ",(0,o.kt)("strong",{parentName:"p"},"security risk"),"\nbecause, if a user can obtain illegitimate access to the web administration\nconsole, all entries may be read, entries may be deleted, and many more hazards.\nIf you do not expect to need this, it is strongly recommended that you do not\nenable it."))),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"Meerkat DSA only supports HTTP basic authentication for the web admin console.\nThis is a deliberate design feature. Meerkat DSA's web admin console is meant to\nbe lightweight, cross-platform, and low maintenance. Originally, there was no\nsecurity on the web administration console whatsoever, but this was added so\nthat DSA administrators could have a modicum of security with minimal setup."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"HTTP Basic Authentication will only be enabled if both the\n",(0,o.kt)("a",{parentName:"p",href:"#meerkatwebadminauthusername"},(0,o.kt)("inlineCode",{parentName:"a"},"MEERKAT_WEB_ADMIN_AUTH_USERNAME"))," and\n",(0,o.kt)("a",{parentName:"p",href:"#meerkatwebadminauthpassword"},(0,o.kt)("inlineCode",{parentName:"a"},"MEERKAT_WEB_ADMIN_AUTH_PASSWORD"))," environment\nvariables are set."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"HTTP Basic Authentication transmits your username and password in the clear\n(without encryption). This means that you should secure your communication with\nthe web admin console by ensuring that\n",(0,o.kt)("a",{parentName:"p",href:"#meerkatwebadminusetls"},(0,o.kt)("inlineCode",{parentName:"a"},"MEERKAT_WEB_ADMIN_USE_TLS"))," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and that\n",(0,o.kt)("a",{parentName:"p",href:"/directory/docs/tls"},"TLS is configured")," (otherwise, the former environment variable will\nhave no effect). Otherwise, intermediaries may be able to sniff your password."),(0,o.kt)("p",{parentName:"div"},"Since this password is not well-protected, it is highly recommended that you\nalso ensure that this password is not used for any other services. This password\nshould be unique to Meerkat DSA's web admin console, and not used as the\npassword for any entry in your DSA."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using passwords in general is vastly inferior to TLS client certificate\nauthentication. HTTP Basic Authentication was implemented in Meerkat DSA so that\nadmininstrators could have a modicum of security with little upfront setup, but\nit is ",(0,o.kt)("strong",{parentName:"p"},"highly recommended")," that administrators configure a secure reverse\nproxy, such as Nginx, Caddy, or Apache, to use TLS client certificate\nauthentication, rather than relying on the security of a password. Even better\nyet, the web admin console should only be accessible behind a VPN, or have some\nkind of network access controls to prevent users from accessing it entirely."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Don't rely on your own ability to generate a secure password. Generate a secure\npassword using an offline tool such as the OpenSSL command line. You can run\nthis command on Unix-like systems (Linux, BSDs, MacOS, etc.) to generate a\nsecure password: ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl rand 32 | base64"),"."))),(0,o.kt)("h2",{id:"tls"},"TLS"),(0,o.kt)("p",null,"Even if ",(0,o.kt)("a",{parentName:"p",href:"#authentication"},"HTTP Basic Authentication")," is used, TLS should still\nbe enabled to encrypt your traffic to and from the web admin console. To\nconfigure TLS for the web admin console, you simply configure TLS for your\nentire DSA, using the environment variables starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"MEERKAT_TLS_"),"."),(0,o.kt)("p",null,"The only case in which you should ",(0,o.kt)("em",{parentName:"p"},"not")," enable TLS for the web admin console is\nif you are using an HTTPS-enabled reverse proxy, such as Nginx, Caddy, or\nApache Web Server."))}p.isMDXComponent=!0}}]);