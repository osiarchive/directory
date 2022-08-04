"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,c=p["".concat(s,".").concat(m)]||p[m]||g[m]||o;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>g});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],l={},s="Logging and Monitoring",d={unversionedId:"logging-monitoring",id:"logging-monitoring",title:"Logging and Monitoring",description:"Meerkat DSA supports internationalized logging, and using different formats.",source:"@site/docs/logging-monitoring.md",sourceDirName:".",slug:"/logging-monitoring",permalink:"/directory/docs/logging-monitoring",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/logging-monitoring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/directory/docs/authentication"},next:{title:"Schema Administration",permalink:"/directory/docs/schema"}},u={},g=[{value:"Internationalization",id:"internationalization",level:2},{value:"Log Levels",id:"log-levels",level:2},{value:"Customizing Logging the Simple Way",id:"customizing-logging-the-simple-way",level:2},{value:"Customizing Log Formats and Transports via the Init Script",id:"customizing-log-formats-and-transports-via-the-init-script",level:2},{value:"SNMP Monitoring",id:"snmp-monitoring",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"&quot;Why are errors logged at DEBUG level?&quot;",id:"why-are-errors-logged-at-debug-level",level:2},{value:"&quot;Why log connection IDs instead of IP addresses?&quot;",id:"why-log-connection-ids-instead-of-ip-addresses",level:2},{value:"&quot;What is this COULD_BAN I see in the log messages?&quot;",id:"what-is-this-could_ban-i-see-in-the-log-messages",level:2},{value:"&quot;Who Caused This Error?&quot;",id:"who-caused-this-error",level:2}],p={toc:g};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-and-monitoring"},"Logging and Monitoring"),(0,o.kt)("p",null,"Meerkat DSA supports internationalized logging, and using different formats.\nUnder the hood, Meerkat DSA uses\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/winston"},"winston")," for logging, which means that\nalmost any logging format and logging transport may be used. By default,\nMeerkat DSA logs plain text to the console."),(0,o.kt)("h2",{id:"internationalization"},"Internationalization"),(0,o.kt)("p",null,"The language of the logging used by Meerkat DSA is determined by the system's\nenvironment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"LANG"),". If your selected language is not supported, English\nwill be used as a default."),(0,o.kt)("p",null,"Currently, only English is supported, but future editions may support other\nlanguages."),(0,o.kt)("h2",{id:"log-levels"},"Log Levels"),(0,o.kt)("p",null,"In Meerkat DSA, there are four log levels, which are common to many\napplications. Their meanings are described below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"debug"),"-level messages are messages that log requests and responses, which\ncan be useful for seeing error messages. Note that errors in requests will\nbe logged at ",(0,o.kt)("inlineCode",{parentName:"li"},"debug")," level, not ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"warn"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),'-level messages are messages that may serve as important "landmarks"\nfor DSA administrators, but which have little value by themselves, such as\nseeing that the server began listening, or that a client connected.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"warn"),"-level messages are messages that indicate a potential problem with\nthe DSA, confidentiality, data integrity, availability, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error"),"-level messages are messages that have emerged from errors that\nrequire administrator attention, such as data corruption, loops, invalid\nschema, database connectivity issues, resource constraints, etc.")),(0,o.kt)("h2",{id:"customizing-logging-the-simple-way"},"Customizing Logging the Simple Way"),(0,o.kt)("p",null,"You can configure logging through environment variables."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_NO_COLOR")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will disable colored logging output."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_NO_TIMESTAMP")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will disable the timestamp from log\nmessages."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_LEVEL")," to a log level will log all messages having a\nseverity at that level or higher. It may be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"warn"),",\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"error"),", in order of decreasing verbosity. The default is ",(0,o.kt)("inlineCode",{parentName:"li"},"info"),"."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_JSON")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will cause Meerkat DSA to output logs in\nJSON format."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_NO_CONSOLE")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will disable logging to the console.\nNote that if you have no other log transport configured, no logs will be\ncollected at all."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_FILE")," to the file path of a file to write logs will\ncause Meerkat DSA to write logs to that file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_FILE_MAX_SIZE")," controls the number of bytes permitted in a\nlog file before it is rotated out for a new log file. This has no effect if\n",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_FILE")," is not set."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_FILE_MAX_FILES")," controls the maximum number of log files\nbefore which Meerkat DSA deletes the oldest one."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_ZIP")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will make Meerkat DSA compress rotated-out\nlog files."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_TAILABLE")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," will... just read this: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/winstonjs/winston/blob/HEAD/docs/transports.md#file-transport"},"https://github.com/winstonjs/winston/blob/HEAD/docs/transports.md#file-transport"),"."),(0,o.kt)("li",{parentName:"ul"},"Setting ",(0,o.kt)("inlineCode",{parentName:"li"},"MEERKAT_LOG_HTTP")," to a URL will cause Meerkat DSA to use HTTP\ntransport for log messages. URL-based usernames and passwords may be used,\nwhich will enable the use of HTTP basic authentication.")),(0,o.kt)("h2",{id:"customizing-log-formats-and-transports-via-the-init-script"},"Customizing Log Formats and Transports via the Init Script"),(0,o.kt)("p",null,"In addition to the above logging configuration via environment variables,\nlogging can be customized via the init script. See the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import winston from "winston";\n\nexport async function init (ctx) {\n  ctx.log = winston.createLogger({\n    level: "info",\n    format: winston.format.json(),\n    transports: [\n      new winston.transports.Console(),\n    ],\n  });\n}\n\nexport default init;\n')),(0,o.kt)("p",null,"The example above overwrites the context object's ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," property with your\nown logger, which uses the JSON format."),(0,o.kt)("h2",{id:"snmp-monitoring"},"SNMP Monitoring"),(0,o.kt)("p",null,"Meerkat DSA will support SNMP monitoring in a paid version in the future."),(0,o.kt)("h2",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Meerkat DSA will support custom webhooks in a paid version in the future. These\nwebhooks can be used to collect telemetry data."),(0,o.kt)("h2",{id:"why-are-errors-logged-at-debug-level"},'"Why are errors logged at DEBUG level?"'),(0,o.kt)("p",null,"When a user gets an error as a result of doing something wrong, (e.g. creating\nan entry where they are not allowed by access control, or creating an entry that\ndoes not conform to schema requirements), it is not an ",(0,o.kt)("em",{parentName:"p"},"issue")," for Meerkat DSA\nto respond with an error: it is expected behavior, in fact. The logs are meant\nfor DSA administrators, not users, and therefore the level or log messages\nshould reflect the level of attention that an administrator should pay to a\nmessage. Error messages should be displayed, say, if the database is corrupted,\nthe server is configured insecurely, resource utilization is unusually high,\nconnections are getting dropped, etc."),(0,o.kt)("p",null,"Note that some user-facing errors ",(0,o.kt)("em",{parentName:"p"},"will")," show up in non-debug level log\nmessages: namely invalid authentication attempts. Invalid authentication\nattempts are logged at WARN level, because repeated invalid attempts could\nindicate a brute-force password-guessing attack, or some other hacking attempt,\nwhich might warrant administrative intervention."),(0,o.kt)("p",null,"Also note that, in the future, a large number of errors may result in\nerror-level messages (as well as connections being dropped or blocked), because\nan unusually large number of errors may also indicate attempted hacking."),(0,o.kt)("h2",{id:"why-log-connection-ids-instead-of-ip-addresses"},'"Why log connection IDs instead of IP addresses?"'),(0,o.kt)("p",null,"There is a lot of information that goes into a connection / association:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bound DN"),(0,o.kt)("li",{parentName:"ul"},"Auth Level"),(0,o.kt)("li",{parentName:"ul"},"Address family"),(0,o.kt)("li",{parentName:"ul"},"Remote address"),(0,o.kt)("li",{parentName:"ul"},"Remote port"),(0,o.kt)("li",{parentName:"ul"},"Protocol"),(0,o.kt)("li",{parentName:"ul"},"Whether TLS is used")),(0,o.kt)("p",null,"Therefore, to avoid duplicating all of this information, it makes sense just to\nlog, upon binding, all of this information one time alongside the UUID assigned\nto the association, so that from there out, the first message containing this\nUUID can be used to correlate the UUID to all of these data."),(0,o.kt)("p",null,"Also, it makes it easier to redact Personally-Identifiable Information (PII), if\nIP addresses count as such."),(0,o.kt)("h2",{id:"what-is-this-could_ban-i-see-in-the-log-messages"},'"What is this COULD_BAN I see in the log messages?"'),(0,o.kt)("p",null,"It is inevitable that, if a valuable directory service is created, nefarious\nusers will attempt to hack it. Log messages that ",(0,o.kt)("em",{parentName:"p"},"could")," indicate malicious\nbehavior are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"COULD_BAN=")," followed by the IPv6 and IPv4 addresses\nof the offending client. This easily identifiable and parseable pattern is\ndeliberately added so that Meerkat DSA log messages can be parsed by tools like\n",(0,o.kt)("a",{parentName:"p",href:"https://www.fail2ban.org/wiki/index.php/Main_Page"},"Fail2Ban"),", so that offending\nIP addresses can be blocked."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using a reverse proxy, such as Nginx, these IP addresses might be for\nthe proxy and not for the actual offending client. If you automatically block IP\naddresses using Fail2Ban and these IP addresses are for the reverse proxy,\nyou'll inadvertently block all traffic from your reverse proxy, which will make\nyour DSA inaccessible to everybody!")),(0,o.kt)("h2",{id:"who-caused-this-error"},'"Who Caused This Error?"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the error, you should see a UUID, which is the association ID."),(0,o.kt)("li",{parentName:"ul"},"Scroll up in the logs until you find the host name that corresponds to this.")),(0,o.kt)("p",null,"In this case below, the UUID ",(0,o.kt)("inlineCode",{parentName:"p"},"b64d9434-c760-48ce-a287-1b0ae549138b")," belongs to\na Directory Access Protocol (DAP) association that originated from the IP\naddress ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," (the localhost), with the remote port being ",(0,o.kt)("inlineCode",{parentName:"p"},"42692"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022-07-26T02:01:01.104Z [info]:        IPv6:::ffff:127.0.0.1:42692: IDM transport established.\n2022-07-26T02:01:02.115Z [info]:        IPv6://::ffff:127.0.0.1/42692: DAP association b64d9434-c760-48ce-a287-1b0ae549138b bound anonymously.\n2022-07-26T02:01:02.133Z [debug]:       Received DAP request with invoke ID 2140052278 and operation 1 from connection b64d9434-c760-48ce-a287-1b0ae549138b.\n2022-07-26T02:01:02.149Z [warn]:        b64d9434-c760-48ce-a287-1b0ae549138b/2140052278: NameError Target entry not found.\n")),(0,o.kt)("p",null,"Note that, if you are seeking to prosecute nefarious users that exhibit illegal,\nmalicious behavior towards your directory infrastructure, you should retain both\nthe IP address and the port number, since the user of\nNetwork Address Translation (NAT) means that the one or more people or devices\ncould be sharing that IP address."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are using a reverse proxy, such as Nginx, in front of your Meerkat DSA\ninstance, make the IP addresses you are preserving are not for the proxy!")))}m.isMDXComponent=!0}}]);