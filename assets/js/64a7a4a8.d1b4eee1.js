"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=d(n),m=i,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||s;return n?a.createElement(p,r(r({ref:t},c),{},{components:n})):a.createElement(p,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={},l="Schema Administration",d={unversionedId:"schema",id:"schema",title:"Schema Administration",description:"In general, schema in Meerkat DSA follows the X.500 directory schema",source:"@site/docs/schema.md",sourceDirName:".",slug:"/schema",permalink:"/directory/docs/schema",editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/schema.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging and Monitoring",permalink:"/directory/docs/logging-monitoring"},next:{title:"Networking",permalink:"/directory/docs/networking"}},c=[{value:"Use of Schema",id:"use-of-schema",children:[],level:2},{value:"Pre-Installed Schema",id:"pre-installed-schema",children:[],level:2},{value:"Viewing Schema",id:"viewing-schema",children:[],level:2},{value:"Root DSE Schema",id:"root-dse-schema",children:[],level:2},{value:"Editing Schema",id:"editing-schema",children:[{value:"Editing Data-Only Schema",id:"editing-data-only-schema",children:[],level:3},{value:"Custom Attribute Types",id:"custom-attribute-types",children:[],level:3},{value:"Custom Object Classes",id:"custom-object-classes",children:[],level:3},{value:"Custom Name Forms",id:"custom-name-forms",children:[],level:3},{value:"Custom Context Types",id:"custom-context-types",children:[],level:3},{value:"Custom LDAP Syntaxes",id:"custom-ldap-syntaxes",children:[],level:3},{value:"Custom Matching Rules",id:"custom-matching-rules",children:[],level:3},{value:"Object Identifiers",id:"object-identifiers",children:[],level:3}],level:2},{value:"Guidance",id:"guidance",children:[{value:"Prefer objects, not structured attributes",id:"prefer-objects-not-structured-attributes",children:[],level:3},{value:"Use MAY CONTAINS in auxiliary object classes",id:"use-may-contains-in-auxiliary-object-classes",children:[],level:3},{value:"Do not embed entries within entries",id:"do-not-embed-entries-within-entries",children:[],level:3},{value:"Matchers should tolerate symmetrical syntax, if possible",id:"matchers-should-tolerate-symmetrical-syntax-if-possible",children:[],level:3}],level:2}],u={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"schema-administration"},"Schema Administration"),(0,s.kt)("p",null,"In general, schema in Meerkat DSA follows the X.500 directory schema\nadministration model defined in the X.500 series of specifications."),(0,s.kt)("h2",{id:"use-of-schema"},"Use of Schema"),(0,s.kt)("p",null,"The X.500 standards do not clearly require that all attribute types used within\na subschema be defined within the subschema subentry. In fact, the LDAP\nspecifications explicitly ",(0,s.kt)("em",{parentName:"p"},"do not")," require this. As such, certain\nsubschema operational attributes that describe schema objects that are universal\nin nature (e.g. the attribute type with object identifier ",(0,s.kt)("inlineCode",{parentName:"p"},"2.5.4.3")," is\nuniversally ",(0,s.kt)("inlineCode",{parentName:"p"},"commonName")," and MUST have the same exact meaning everywhere) are\npurely informative. Meerkat DSA does not check that, say, an attribute type\nis defined in the relevant subschema before permitting it to be used in an\nentry."),(0,s.kt)("p",null,"Meerkat DSA does, however, maintain an internal index of recognized schema\nobjects, and it ",(0,s.kt)("em",{parentName:"p"},"does")," check that entry creations and modifications only make\nuse of schema objects that are recognized within this index. This internal index\nis populated with schema objects as described in the following sections."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},'If you are looking at the code of Meerkat DSA, the "index" being talked about\nabove is the aggregation of the ',(0,s.kt)("inlineCode",{parentName:"p"},"attributeTypes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"objectClasses"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"nameForms"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"contextTypes"),", and other schema-related properties of the context object, often\nnamed ",(0,s.kt)("inlineCode",{parentName:"p"},"ctx"),"."))),(0,s.kt)("h2",{id:"pre-installed-schema"},"Pre-Installed Schema"),(0,s.kt)("p",null,"Meerkat DSA comes with schema pre-installed. At a minimum, this pre-installed\nschema includes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All schema in the X.500 specifications.")),(0,s.kt)("p",null,"It is highly recommended that you do not edit or re-define any of the\npre-installed schema: some of it is critical to directory operation. Meerkat\nDSA may fail to work at all if some pre-installed schema elements are altered."),(0,s.kt)("p",null,"If you believe there is a mistake pertaining to the implementation of\npre-installed schema, please report it as a bug instead so it can be fixed\nproperly. Only alter the pre-installed schema if it is advised as a workaround\nfor a known issue."),(0,s.kt)("h2",{id:"viewing-schema"},"Viewing Schema"),(0,s.kt)("p",null,"In X.500 directories, schema are stored and served from subschema subentries.\nThe schema that these subentries serve applies only to the subentry's\nadministrative area. (Note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"subtreeSpecification")," is ignored for\nsubschema subentries. There may only be one subschema subentry, and it applies\nfor the whole administrative area. The subtree specification must not have any\nminimums, maximums, chops, or refinements at all.) Within a subschema subentry,\nthe elements of the schema are served in attributes."),(0,s.kt)("p",null,"Even though these attributes are supposed to be stored in subschema subentries,\nsome of these subschema elements describe attribute types, context types, name\nforms, matching rules, and other constructs that are universal, because they\nhave a single, universally-unique object identifier that identifies them. For\nthese schema elements, Meerkat DSA stores them independent of the subschema\nsubentries, but displays them in every single subschema subentry. For example,\nif you define an object class in Meerkat DSA, that object class will appear in\nevery single subschema subentry, regardless of which subschema subentry to which\nyou added the value of attribute type ",(0,s.kt)("inlineCode",{parentName:"p"},"objectClasses"),'. As stated above, this\nbehavior applies to all schema constructs that are identified by an object\nidentifier; such schema elements will be referred to as "universal schema\nelements" throughout this documentation.'),(0,s.kt)("p",null,"Schema elements that are not global in nature ",(0,s.kt)("em",{parentName:"p"},"do")," apply to specific subentries.\nThese include DIT structure rules, DIT content rules, DIT context use rules,\nmatching rule uses, and attribute friendships."),(0,s.kt)("h2",{id:"root-dse-schema"},"Root DSE Schema"),(0,s.kt)("p",null,"The LDAP specifications require there to be a subschema subentry that applies to\nthe Root DSE. This is useful for informing clients about what attribute types\nexist in the root DSE. In Meerkat DSA, the root DSE may not be edited, which\nmakes a hard-coded subschema subentry an easy and obvious solution. In Meerkat\nDSA, there is a hard-coded subschema subentry having the distinguished name\n",(0,s.kt)("inlineCode",{parentName:"p"},"cn=subschema"),'. This subschema subentry only "exists" if it is queried directly.'),(0,s.kt)("h2",{id:"editing-schema"},"Editing Schema"),(0,s.kt)("p",null,"There is yet another categorical dichotomy in schema elements: those that are\npurely data, and those having a functional component. Some schema elements can\nbe represented purely as data, whereas others require some code to function.\nFor instance, to implement a matching rule, somebody has to actually write code\nto perform the matching. Those subschema elements that require code are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Attribute types"),(0,s.kt)("li",{parentName:"ul"},"Context types","*"),(0,s.kt)("li",{parentName:"ul"},"Matching rules"),(0,s.kt)("li",{parentName:"ul"},"LDAP syntaxes")),(0,s.kt)("p",null,"In attribute types, functions must be defined for encoded and decoding a\nBasic Encoding Rules-encoded ASN.1 element representing the value into a usable\ndata type and back."),(0,s.kt)("p",null,'In context types, a function (a "context matcher") must be defined for matching\na Basic Encoding Rules-encoded ASN.1 element representing a context value with\na similarly-encoded context assertion value. Another function may need to be\ndefined to produce a default value for the context type.'),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You ",(0,s.kt)("em",{parentName:"p"},"can")," define a context type in the database via the ",(0,s.kt)("inlineCode",{parentName:"p"},"ContextDescription"),"\ntable, or by adding values to the ",(0,s.kt)("inlineCode",{parentName:"p"},"contextTypes")," operational attribute of a\nsubschema that resides within your DSA (not a shadow or RHOB subentry, however).\nA context type created in this manner will have a general-purpose matcher that\ncompares two ASN.1 ",(0,s.kt)("em",{parentName:"p"},"values")," byte-for-byte (this differs from comparing the\nwhole element byte-for-byte because it takes into consideration that the\nelement may be constructed and deconstructs it before the byte-for-byte\ncomparison)."),(0,s.kt)("p",{parentName:"div"},"This means that you might not need to define a new context type\nin the init script if its syntax is a ",(0,s.kt)("inlineCode",{parentName:"p"},"BOOLEAN"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"INTEGER"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"OBJECT IDENTIFIER"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"ENUMERATED"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),", or any other primitive type that has one single\nbyte representation when using the Basic Encoding Rules. All bets are off when\nthe syntax is a constructed type or a type that could be constructed."),(0,s.kt)("p",{parentName:"div"},"You may also define a ",(0,s.kt)("inlineCode",{parentName:"p"},"DEFAULT-VALUE")," for that context type in the database.\nThis will be the raw bytes of a Basic Encoding Rules-encoded ASN.1 value."),(0,s.kt)("p",{parentName:"div"},"Still, it is ",(0,s.kt)("em",{parentName:"p"},"better")," to define a context type in the init script, because you\ncan define more complex and strict comparators."))),(0,s.kt)("p",null,'In matching rules, a function (a "matcher") must be defined for evaluating\nwhether a Basic Encoding Rules-encoded ASN.1 element representing an attribute\nvalue matches against a Basic Encoding Rules-encoded ASN.1 element representing\nthe matching rule\'s assertion syntax. This function is slightly different\ndepending on whether an equality matching rule, ordering matching rule, or\nsubstrings matching rule is being defined.'),(0,s.kt)("p",null,"In LDAP syntaxes, functions must be defined for converting to ",(0,s.kt)("inlineCode",{parentName:"p"},"LDAPString"),"s from\nASN.1 elements and vice versa, so that attribute values in LDAP can be\ntranslated into a form that Meerkat DSA can utilize. Instead of handling LDAP\nattribute values directly, Meerkat DSA translates them to the equivalent ASN.1\nelements that would have been in an equivalent Directory Access Protocol (DAP)\nrequest. When Meerkat DSA is done processing the request, the any attribute\nvalues in the response are translated back into an LDAP-equivalent using these\nfunctions."),(0,s.kt)("p",null,"For schema elements that require code, you'll have to add them via the init\nscript, which is detailed below."),(0,s.kt)("h3",{id:"editing-data-only-schema"},"Editing Data-Only Schema"),(0,s.kt)("p",null,"For schema elements that are purely data, such as name forms, they can be\ndefined by simply adding them to subschema subentries as the X.500\nspecifications would portend. Alternatively, they can be added to the database\ndirectly. This should not be too hard to figure out, because schema elements\nhave their own separate tables in the database. Note that if you insert new\nschema elements in the database directly, you may need to restart Meerkat DSA\nfor them to appear."),(0,s.kt)("p",null,"Using the Directory Access Protocol (DAP) to define new schema elements should\nbe preferred to directly inserting data into the database. Once downside of\nusing the DAP to modify schema elements is that you cannot delete universal\nschema elements (attribute types, object classes, etc.) once they are defined.\nThis is intentional: its purpose is to prevent administrators from redefining\nschema elements such that a given object identifier now ambiguously refers to\nmultiple different versions of a schema element."),(0,s.kt)("p",null,'Note that schema objects can only be added via subentries that are "internal"\nto your DSA. If you try to add schema objects to subentries of DSE type ',(0,s.kt)("inlineCode",{parentName:"p"},"rhob"),"\nor ",(0,s.kt)("inlineCode",{parentName:"p"},"shadow"),", they will not be recognized by your DSA. If this were not the case,\nDSAs with which you have an outstanding operational binding could overwrite your\nDSA's internal conception of these schema elements. It is also worth noting that\nnew schema objects are recognized by your DSA on a first-come-first-served\nbasis. If you add, say, an attribute type with object identifier ",(0,s.kt)("inlineCode",{parentName:"p"},"2.5.4.3")," to\na subentry, then somebody else comes along to add the same attribute type to\nanother subentry, the first definition of that attribute type will persist\nthroughout the whole DSA."),(0,s.kt)("p",null,"The benefit of using the database directly is merely that it is simpler and\nfaster."),(0,s.kt)("p",null,"Finally, you can also use the init script to define schema elements when Meerkat\nDSA starts up. However, this is not recommended, because these schema elements\nwill only exist while they are defined in the init script. It is strongly\nadvised that data-only schema elements be persisted to the database."),(0,s.kt)("h3",{id:"custom-attribute-types"},"Custom Attribute Types"),(0,s.kt)("p",null,"Below is an example for implementing a custom attribute type:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  AttributeUsage_userApplications,\n} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta";\nimport { ObjectIdentifier, FALSE } from "asn1-ts";\nimport { DER, _encodeObjectIdentifier } from "asn1-ts/dist/node/functional";\n\nexport async function init (ctx) {\n  ctx.attributeTypes.set("2.5.4.3", {\n    id: new ObjectIdentifier([ 2, 5, 4, 3 ]),\n    name: ["commonName"],\n    description: "A general-purpose name",\n    equalityMatchingRule: new ObjectIdentifier([ 2, 5, 13, 2 ]),\n    // orderingMatchingRule: new ObjectIdentifier(),\n    // substringsMatchingRule: new ObjectIdentifier(),\n    singleValued: FALSE, // FALSE === false. It\'s just an alias defined in the asn1-ts library.\n    collective: FALSE, // FALSE === false. It\'s just an alias defined in the asn1-ts library.\n    dummy: FALSE, // FALSE === false. It\'s just an alias defined in the asn1-ts library.\n    noUserModification: FALSE, // FALSE === false. It\'s just an alias defined in the asn1-ts library.\n    usage: AttributeUsage_userApplications,\n    ldapSyntax: new ObjectIdentifier([ 1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 15 ]), // Directory string syntax.\n    ldapNames: ["cn", "commonName"],\n    ldapDescription: "A general purpose name.",\n    compatibleMatchingRules: new Set(),\n    syntax: "UnboundedDirectoryString",\n    // Keep reading for how to implement an attribute type\n    // driver: {\n    //   readValues\n    //   addValue\n    //   removeValue\n    //   removeAttribute\n    //   countValues\n    //   isPresent\n    //   hasValue\n    //   getEntry\n    // },\n  });\n}\n\nexport default init;\n')),(0,s.kt)("p",null,"To be understood, attributes must be added to the context object's\n",(0,s.kt)("inlineCode",{parentName:"p"},"attributeTypes")," map. The key should be--at minimum--the dot-delimited object\nidentifier. You should also map the same value to the ldap names as well; doing\nso will mean that Meerkat DSA will be able to recognize the attribute by its\nLDAP name when it receives an LDAP request."),(0,s.kt)("p",null,"The format of the attribute above is pretty much what you'd expect from a\nreading of ",(0,s.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.501/en"},"ITU Recommendation X.501"),"'s\ndefinition of the ",(0,s.kt)("inlineCode",{parentName:"p"},"ATTRIBUTE")," object class."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"driver")," field of the attribute info object is for implementing custom\nfunctions for interacting with stored attribute values so that attribute values\nof selected types can be stored, searched, etc. in alternative ways. For\ninstance, if you wanted to store attribute values of this type in their own\nseparate table in the database, you could define a driver that reads and writes\nfrom this table instead of the ",(0,s.kt)("inlineCode",{parentName:"p"},"AttributeValue")," table."),(0,s.kt)("p",null,"Note that attribute drivers should be used sparingly. It is common for users\nto request all attribute types when reading or searching an entry. When this\nhappens, every attribute type's ",(0,s.kt)("inlineCode",{parentName:"p"},"readValues()")," driver will be called. If this\nfunction contains a database query, it will slightly slow down the time it\ntakes to read an entry. Attribute drivers should only be used where there is\nsome utility in storing values of a given attribute in their own table, rather\nthan in the ",(0,s.kt)("inlineCode",{parentName:"p"},"AttributeValue")," table."),(0,s.kt)("h3",{id:"custom-object-classes"},"Custom Object Classes"),(0,s.kt)("p",null,"Object classes are pure data, and as such, there are three ways they can be\nadded to Meerkat DSA:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Direct database insertion into the ",(0,s.kt)("inlineCode",{parentName:"li"},"ObjectClassDescription")," table,"),(0,s.kt)("li",{parentName:"ul"},"Directory Access Protocol (DAP) addition to a subschema subentry via the\n",(0,s.kt)("inlineCode",{parentName:"li"},"objectClasses")," attribute, or"),(0,s.kt)("li",{parentName:"ul"},"Adding the object class to the ",(0,s.kt)("inlineCode",{parentName:"li"},"objectClasses")," index of the context object in\nan init script. (This is not advised, because the object class will only\ncontinue to be defined so long as its definition continues to exist in the\ninit script.)")),(0,s.kt)("h3",{id:"custom-name-forms"},"Custom Name Forms"),(0,s.kt)("p",null,"Name forms are pure data, and as such, there are three ways they can be\nadded to Meerkat DSA:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Direct database insertion into the ",(0,s.kt)("inlineCode",{parentName:"li"},"NameForm")," table,"),(0,s.kt)("li",{parentName:"ul"},"Directory Access Protocol (DAP) addition to a subschema subentry via the\n",(0,s.kt)("inlineCode",{parentName:"li"},"nameForms")," attribute, or"),(0,s.kt)("li",{parentName:"ul"},"Adding the name form to the ",(0,s.kt)("inlineCode",{parentName:"li"},"nameForms")," index of the context object in\nan init script. (This is not advised, because the name form will only\ncontinue to be defined so long as its definition continues to exist in the\ninit script.)")),(0,s.kt)("h3",{id:"custom-context-types"},"Custom Context Types"),(0,s.kt)("p",null,"Below is an example for implementing a custom context type:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  ObjectIdentifier,\n  FALSE,\n} from "asn1-ts";\nimport {\n  DER,\n  _encodePrintableString,\n} from "asn1-ts/dist/node/functional";\n\nexport async function init (ctx) {\n  ctx.contextTypes.set("2.5.31.0", {\n    id: new ObjectIdentifier([ 2, 5, 31, 0 ]),\n    name: ["languageContext"],\n    description: "ISO 639-2 language code",\n    obsolete: FALSE, // FALSE === false. It\'s just an alias defined in the asn1-ts library.\n    syntax: "LanguageContextSyntax ::= PrintableString(SIZE (2..3)) -- ISO 639-2 codes only",\n    // assertionSyntax: ""; // An assertion syntax, if different from the value syntax.\n    defaultValue: () => _encodePrintableString("en", DER), // Defines "en" as the default value.\n    absentMatch: FALSE, // FALSE === false. It\'s just an alias defined in the asn1-ts library.\n    matcher: (assertion, value) => {\n      return (assertion.printableString === value.printableString); // if "en" === "en", it\'s a match!\n    },\n    validator: (value) => {\n      const len = value.printableString.length;\n      if ((len < 2) || (len > 3)) {\n        throw new Error();\n      }\n    },\n  });\n}\n\nexport default init;\n')),(0,s.kt)("h3",{id:"custom-ldap-syntaxes"},"Custom LDAP Syntaxes"),(0,s.kt)("p",null,"Below is an example for implementing a custom ldap syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  ObjectIdentifier,\n  FALSE,\n} from "asn1-ts";\nimport {\n  DER,\n  _encodePrintableString,\n} from "asn1-ts/dist/node/functional";\n\n// countryString SYNTAX-NAME ::= {\n//   LDAP-DESC         "Country String"\n//   DIRECTORY SYNTAX  CountryName\n//   ID                id-lsx-countryString }\n\nexport async function init (ctx) {\n  ctx.ldapSyntaxes.set("1.3.6.1.4.1.1466.115.121.1.11", {\n    id: new ObjectIdentifier([ 1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 11 ]),\n    description: "Country String",\n    decoder: (bytes) => {\n      const str = Buffer.from(bytes).toString("utf-8");\n      return _encodePrintableString(str, DER);\n    },\n    encoder: (value) => {\n      return Buffer.from(value.printableString, "utf-8");\n    },\n  });\n}\n\nexport default init;\n')),(0,s.kt)("p",null,"In a custom LDAP syntax, the decoder is a function that takes a ",(0,s.kt)("inlineCode",{parentName:"p"},"LDAPString"),",\n(which is defined in IETF RFC 4511 as an ",(0,s.kt)("inlineCode",{parentName:"p"},"OCTET STRING"),", and which is\nrepresented in Meerkat DSA as the native JavaScript data type ",(0,s.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"), and\nproduces an ASN.1 element (of type ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},"asn1-ts")," NPM package)\nthat represents the encoded X.500-equivalent of that LDAP value. The encoder\nfunction is the exact opposite, as you might have guessed."),(0,s.kt)("p",null,"Both the encoder and decoder are optional. If you do not define a decoder, you\nwill not be able to write LDAP values of that syntax (because Meerkat will not\nbe able to translate them to ASN.1 elements that it can work with). If you do\nnot define an encoder, you will not be able to read LDAP values of that syntax\n(because Meerkat will not know how to convert those values into an LDAP values)."),(0,s.kt)("p",null,"Note that, for an LDAP syntax to actually be used, an attribute type must\nidentify with the LDAP syntax via the ",(0,s.kt)("inlineCode",{parentName:"p"},"ldapSyntax"),' property of the custom\nattribute type. If an attribute type has no associated LDAP syntax, it will\nsimply be invisible to LDAP. (Note that "invisible" does not mean "ignored.")'),(0,s.kt)("p",null,"It is also highly recommended that you add an entry to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Context")," object's\n",(0,s.kt)("inlineCode",{parentName:"p"},"ldapSyntaxToASN1Syntax")," map. This is simply a map of the object identifier\nas a ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," in dot-delimited notation to the ASN.1 syntax, as described in\nITU Recommendation X.501 (2016 edition), Section 15.7.3. The ASN.1 does not\nhave to be a complete ASN.1 module, and assumes the existence of all X.500\nschema without importing them."),(0,s.kt)("h3",{id:"custom-matching-rules"},"Custom Matching Rules"),(0,s.kt)("p",null,"Below is an example for implementing a custom matching rule:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  ObjectIdentifier,\n  FALSE,\n} from "asn1-ts";\n\n// caseExactMatch MATCHING-RULE ::= {\n//   SYNTAX       UnboundedDirectoryString\n//   LDAP-SYNTAX  directoryString.&id\n//   LDAP-NAME    {"caseExactMatch"}\n//   ID           id-mr-caseExactMatch }\n\nexport async function init (ctx) {\n  ctx.equalityMatchingRules.set("2.5.13.5", {\n    id: new ObjectIdentifier([ 2, 5, 13, 5 ]),\n    name: ["caseExactMatch"],\n    description: "Matches two strings case-sensitively.",\n    obsolete: FALSE,\n    syntax: "UnboundedDirectoryString",\n    ldapAssertionSyntax: new ObjectIdentifier([ 1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 15 ]), // Directory string syntax.\n    matcher: (assertion, value) => { // EqualityMatcher\n      return (assertion.utf8String === value.utf8String);\n    },\n  });\n}\n\nexport default init;\n')),(0,s.kt)("p",null,"For equality matching rules, ordering matching rules, and substring matching\nrules, the example above applies, with one exception: the ",(0,s.kt)("inlineCode",{parentName:"p"},"matcher")," will either\nbe of type ",(0,s.kt)("inlineCode",{parentName:"p"},"EqualityMatcher"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"OrderingMatcher"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"SubstringsMatcher"),", and\nthe matching rule will be indexed in the ",(0,s.kt)("inlineCode",{parentName:"p"},"equalityMatchingRules"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"orderingMatchingRules"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"substringsMatchingRules")," properties, respectively."),(0,s.kt)("p",null,"An ",(0,s.kt)("inlineCode",{parentName:"p"},"EqualityMatcher")," is a function that takes an assertion as an ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element"),",\na value as an ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element"),", and compares the two, returning ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if they\nmatch according to the semantics of the matching rule, and ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," if they do\nnot."),(0,s.kt)("p",null,"An ",(0,s.kt)("inlineCode",{parentName:"p"},"OrderingMatcher")," is a function that takes an assertion as an ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element"),",\na value as an ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element"),", and compares the two, returning an integer\nindicating which value is larger exactly as the predicate parameter of\nJavaScript's ",(0,s.kt)("inlineCode",{parentName:"p"},"Array.sort()")," is expected:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'A value greater than zero means "arrange the value before the assertion."'),(0,s.kt)("li",{parentName:"ul"},'A value less than zero means "arrange the assertion before the value."'),(0,s.kt)("li",{parentName:"ul"},"A value of zero means that the assertion and value are equal with respect to\nordering.")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"SubstringsMatcher")," is a function that takes an assertion as an ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element"),",\na value as an ",(0,s.kt)("inlineCode",{parentName:"p"},"ASN1Element"),", and a ",(0,s.kt)("inlineCode",{parentName:"p"},"SubstringSelection"),", which is an enumerated\ntype defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"@wildboar/x500")," library that indicates whether the\nsubstring to be matches is ",(0,s.kt)("inlineCode",{parentName:"p"},"initial"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"final"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"any"),". In a pinch, these\nvalues may be used instead of the enumerated type:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"any" = 0'),(0,s.kt)("li",{parentName:"ul"},'"initial" = 1'),(0,s.kt)("li",{parentName:"ul"},'"final" = 2')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"SubstringsMatcher")," determines if the asserted substring appears within the\nvalue at the selected location (the start, end, or anywhere), and returns a\n",(0,s.kt)("inlineCode",{parentName:"p"},"boolean")," value of ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if the substring appears within the string where it is\nsought and ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," if it does not."),(0,s.kt)("h3",{id:"object-identifiers"},"Object Identifiers"),(0,s.kt)("p",null,"Particularly in LDAP, it is desirable (if not expected by some implementations)\nto represent object identifiers by their human-friendly names. Whenever a\nschema element, such as an attribute type or name form, is added to Meerkat\nDSA, it is recommended that the object identifier get added to the ",(0,s.kt)("inlineCode",{parentName:"p"},"Context"),"\nobject's ",(0,s.kt)("inlineCode",{parentName:"p"},"objectIdentifierToName")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"nameToObjectIdentifier")," maps. In each\ncase, the object identifier is represented in dot-delimited form."),(0,s.kt)("p",null,"You DO have to manually map object identifiers to names and vice versa for\nschema objects you define in the init script. You DO NOT have to do this for\nschema objects you define in the database or via the subschema operational\nattributes."),(0,s.kt)("p",null,"Note that future versions of Meerkat DSA may expect object identifier names\nused in the ",(0,s.kt)("inlineCode",{parentName:"p"},"nameToObjectIdentifier")," map to be normalized to lowercase or\nuppercase, but this is currently not the case."),(0,s.kt)("h2",{id:"guidance"},"Guidance"),(0,s.kt)("h3",{id:"prefer-objects-not-structured-attributes"},"Prefer objects, not structured attributes"),(0,s.kt)("p",null,"If an attribute type that you're defining is complicated enough to warrant a\n",(0,s.kt)("inlineCode",{parentName:"p"},"SEQUENCE")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"SET"),", you should consider breaking all of its components into\nindividual single-valued attributes, and creating an object class that\nrepresents that type instead. You can use children within compound entries to\nrepresent these structs instead. The benefit of doing this is easier\nextensibility, and a greater likelihood that you can define your attribute\ntype in terms of one of the subset of pre-defined LDAP syntaxes instead of\nhaving to define a new LDAP syntax."),(0,s.kt)("p",null,"The only case where you should do something like this is when: (1) for some\nreason, it would be burdensome to name these child entries, or (2) when all\nfields of the structured type are required, few and fixed in number."),(0,s.kt)("p",null,"Instead of defining an attribute type like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-asn1"},"AccountInfo ::= {\n  name    UTF8String,\n  balance INTEGER,\n  ...\n}\n\naccount ATTRIBUTE ::= {\n  WITH SYNTAX AccountInfo\n  ID { 1 2 3 4 }\n}\n")),(0,s.kt)("p",null,"...define separate single-valued attributes and an object class for them:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-asn1"},"accountName ATTRIBUTE ::= {\n  WITH SYNTAX   UTF8String\n  SINGLE VALUE  TRUE\n  ID            { 1 2 3 4 }\n}\n\naccountBalance ATTRIBUTE ::= {\n  WITH SYNTAX   INTEGER\n  SINGLE VALUE  TRUE\n  ID            { 1 2 3 4 }\n}\n\naccount OBJECT-CLASS ::= {\n  SUBCLASS OF   {top}\n  MUST CONTAIN  {accountName | accountBalance}\n  ID            { 1 2 3 4 }\n}\n")),(0,s.kt)("p",null,"You may want to make the above object class auxiliary if you expect it to be\nmerely an aspect of some other object, such as a person or organization."),(0,s.kt)("h3",{id:"use-may-contains-in-auxiliary-object-classes"},"Use MAY CONTAINS in auxiliary object classes"),(0,s.kt)("p",null,'Auxiliary object classes can be useful for extending the schema of entries,\nhowever, but they can also function as a sort of "tag" if they are defined\nwithout required attributes.'),(0,s.kt)("p",null,"Let's say you define an auxiliary object class called ",(0,s.kt)("inlineCode",{parentName:"p"},"married")," that has an\nattribute ",(0,s.kt)("inlineCode",{parentName:"p"},"spouseDN")," that points to the entry's marital partner. You would not\nwant to make ",(0,s.kt)("inlineCode",{parentName:"p"},"spouseDN")," a ",(0,s.kt)("em",{parentName:"p"},"required")," attribute of ",(0,s.kt)("inlineCode",{parentName:"p"},"married"),", even though it\nmight theoretically make sense that somebody that is married has a spouse."),(0,s.kt)("p",null,"By making ",(0,s.kt)("inlineCode",{parentName:"p"},"spouseDN")," an ",(0,s.kt)("em",{parentName:"p"},"optional")," attribute of the ",(0,s.kt)("inlineCode",{parentName:"p"},"married")," auxiliary object\nclass, you can represent that an entry is married even if you do not know the\nname of the spouse."),(0,s.kt)("p",null,"You can think of this like ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL")," in relational databases: you should only make\na field ",(0,s.kt)("inlineCode",{parentName:"p"},"NOT NULL")," if you can ",(0,s.kt)("em",{parentName:"p"},"never")," think of a situation in which it would be\nacceptable for that field to be absent (such as a lack of knowledge). Most\nfields are not like this."),(0,s.kt)("p",null,'Also be aware that, if you define an attribute as required in an object class\nand users of the directory system do not know the value for that attribute for\nthat entry, they may attempt to bypass such a restriction by putting in, say, a\n"nullish" string like ',(0,s.kt)("inlineCode",{parentName:"p"},'"N/A"'),", ",(0,s.kt)("inlineCode",{parentName:"p"},'"UNKNOWN"'),", ",(0,s.kt)("inlineCode",{parentName:"p"},'"NULL"'),", ",(0,s.kt)("inlineCode",{parentName:"p"},'""'),", or using ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," for\na required attribute with ",(0,s.kt)("inlineCode",{parentName:"p"},"INTEGER")," syntax. The result is that you could wind\nup with garbage data in your directory because you required of users what they\ncould not provide."),(0,s.kt)("h3",{id:"do-not-embed-entries-within-entries"},"Do not embed entries within entries"),(0,s.kt)("p",null,"Use compound entries, or attributes with a distinguished name syntax to point\nto other entries. You should not define attributes with a syntax like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-asn1"},"biologicalChildren ATTRIBUTE ::= {\n  WITH SYNTAX   SET OF Attribute\n  ID            id-at-biologicalChildren\n}\n")),(0,s.kt)("h3",{id:"matchers-should-tolerate-symmetrical-syntax-if-possible"},"Matchers should tolerate symmetrical syntax, if possible"),(0,s.kt)("p",null,"Even if a matching rule specifies an assertion syntax that differs from the\nattribute syntax, the matching rule should attempt to tolerate an assertion\nhaving the value's syntax."))}h.isMDXComponent=!0}}]);