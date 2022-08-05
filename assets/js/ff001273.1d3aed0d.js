"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[5641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={},s="Tutorial 1: Set up the X.500 CLI",u={unversionedId:"tutorial01",id:"tutorial01",title:"Tutorial 1: Set up the X.500 CLI",description:"The X.500 CLI is under heavy development right now. This documentation could",source:"@site/docs/tutorial01.md",sourceDirName:".",slug:"/tutorial01",permalink:"/directory/docs/tutorial01",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/tutorial01.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wildboar Directory Studio",permalink:"/directory/docs/studio"},next:{title:"Tutorial 2: Hooking up Gitea with Meerkat DSA",permalink:"/directory/docs/tutorial02"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tutorial-1-set-up-the-x500-cli"},"Tutorial 1: Set up the X.500 CLI"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The X.500 CLI is under heavy development right now. This documentation could\nbecome invalidated. If you believe something is incorrect, please\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Wildboar-Software/directory/issues"},"submit an issue"),".")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Currently, this command can only be installed via ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),",\nwhich you can get by installing ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),"."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g @wildboar/x500-cli"),". If you get a permissions issue, you\nmay need to prefix your command with ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo"),' on Unix-like systems or run this\ncommand in a terminal that is "ran as administrator" on Windows.'),(0,i.kt)("p",null,"If you get an error saying that the command ",(0,i.kt)("inlineCode",{parentName:"p"},"x500")," does not exist after you\nhave done this, you may need to close out of the terminal and open a new one."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"You can use the X.500 command-line interface without a\n",(0,i.kt)("a",{parentName:"p",href:"/directory/docs/client-config"},"configuration file"),", but as you use the CLI, you'll find\nyourself repeatedly typing in the same options to connect to the same DSA, and\nbind using the same entry, and express the same preferences, over and over\nagain. You can save yourself all of this trouble by creating an X.500\nconfiguration file upfront, which you will learn in this tutorial."),(0,i.kt)("p",null,"The X.500 CLI comes with commands for manipulating the X.500 configuration file.\nYou absolutely can edit this file using a text editor or even through\nautomation, but the X.500 CLI will make it easy to get up and running quickly,\nbecause it will (1) place this file in the correct location, (2) give it the\ncorrect formatting, and (3) pre-populate it with a syntactically-correct\nboilerplate configuration."),(0,i.kt)("p",null,"Let's get started by running this command: ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config init"),"."),(0,i.kt)("p",null,"Unless you got some error in your terminal, it worked and created an X.500\nconfiguration file for you. Again, you can view this configuration file with a\ntext editor if you want, but you can quickly pull it up in the terminal by\nrunning ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config view"),"."),(0,i.kt)("p",null,"In a Bash shell, you can also edit this file quickly by running one of these\ncommands to open this file with one of the many popular command-line text\neditors:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano $(x500 config path)\nvi $(x500 config path)\nvim $(x500 config path)\nnvmim $(x500 config path)\nemacs $(x500 config path)\n")),(0,i.kt)("p",null,"Okay, now you know how to create, view, and edit this file, but let's use the\nX.500 commands to do this the ",(0,i.kt)("em",{parentName:"p"},"elegant way"),"."),(0,i.kt)("p",null,"Run the following command to add a preference profile to your configuration\nfile, but replace ",(0,i.kt)("inlineCode",{parentName:"p"},"prefname")," with whatever you want your preference profile to\nbe named, and change the settings below to whatever you want. Note that the\nname is case-sensitive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"x500 config add pref prefname \\\n  --logLevel=debug \\\n  --sizeLimit=1000 \\\n  --timeLimit=30 \\\n  --attributeSizeLimit=10000 \\\n  --callingAETitle='c=US,st=FL,cn=Your name'\n")),(0,i.kt)("p",null,"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config view")," to make sure it was added and looks fine."),(0,i.kt)("p",null,"Now let's add a DSA. Run this command, but replace ",(0,i.kt)("inlineCode",{parentName:"p"},"yourdsa")," with whatever name\nyou want, and replace the URLs in the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessPoint")," option with the actual\naccess points of your DSA. Note that you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"accessPoint")," option\nseveral times if your DSA has multiple access points. The URLs you supply for\na single access point should be comma-separated and should not contain a\nusername and/or password."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"x500 config add dsa yourdsa \\\n  --accessPoint=master:idms://dsa01.yourdomain.com:44632,idm://dsa01.yourdomain.com:4632\n")),(0,i.kt)("p",null,"Again, run ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config view")," to make sure it was added and looks fine."),(0,i.kt)("p",null,"Finally, let's add a simple credential (which means a Bind DN and a password).\nUse this command, but replace the distinguished name with the actual\ndistinguished name against which you wish to bind. Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," at the end.\nThis will cause the command to prompt you for a password. Also, you probably\ndo not want to name this ",(0,i.kt)("inlineCode",{parentName:"p"},"mycred"),", do you?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"x500 config add cred simple mycred 'c=US,st=FL,l=Tampa,cn=Your name' -p\n")),(0,i.kt)("p",null,"Supply your password at the prompt and hit ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config view")," to make sure it was added and looks fine."),(0,i.kt)("p",null,'Now we have created a preference profile, a DSA, and a credential. We have all\nof the ingredients for a "context," which is simply a combination of all three.\nThe "context" construct exists so that you can re-use credentials, preference\nprofiles, and DSAs. Run the following command to create this combination, which\nwe will call ',(0,i.kt)("inlineCode",{parentName:"p"},"main"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"x500 config add context main --pref=prefname --cred=mycred --dsa=yourdsa\n")),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config view")," to make sure it was added and looks fine."),(0,i.kt)("p",null,"Finally, we need to actually ",(0,i.kt)("em",{parentName:"p"},"use")," our newly-defined context. Run this command\nto set the current context to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," context we just defined:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"x500 config set-context main\n")),(0,i.kt)("p",null,"Finally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"x500 config view")," to make sure your context was set and everything\nelse still looks okay."),(0,i.kt)("p",null,"Now we can test our set up. Just try to read the root DSA by typing in this\ncommand alone:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"x500 dap read ''\n")),(0,i.kt)("p",null,"If you get an entry back, it worked!"))}m.isMDXComponent=!0}}]);