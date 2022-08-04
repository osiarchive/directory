"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),h=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=h(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(n),m=a,p=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(p,o(o({ref:t},c),{},{components:n})):i.createElement(p,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>h,toc:()=>u});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Deviations and Nuances",h={unversionedId:"deviations-nuances",id:"deviations-nuances",title:"Deviations and Nuances",description:"Meerkat DSA deviates from the X.500 specifications in a few ways, often due to",source:"@site/docs/deviations-nuances.md",sourceDirName:".",slug:"/deviations-nuances",permalink:"/directory/docs/deviations-nuances",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/deviations-nuances.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conformance",permalink:"/directory/docs/conformance"},next:{title:"Information Disclosure",permalink:"/directory/docs/information-disclosure"}},c={},u=[{value:"The &quot;Never Contributing&quot; Bug",id:"the-never-contributing-bug",level:2},{value:"Other Deviations",id:"other-deviations",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deviations-and-nuances"},"Deviations and Nuances"),(0,r.kt)("p",null,"Meerkat DSA deviates from the X.500 specifications in a few ways, often due to\nambiguities in the specifications or creative leeway given by the\nspecifications to DSA implementors. These deviations are noted below. Also\nnoted below are nuances in Meerkat DSA:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'RFC 4512: "The root DSE SHALL NOT be included if the client performs a subtree\nsearch starting from the root." I could not find anywhere in the X.500\nspecifications where this behavior is required, however, it makes sense to me:\na search that does not explicitly target the root DSE should not include it,\nbecause the root DSE is, in some sense, not a "real" entry in the DIT.'),(0,r.kt)("li",{parentName:"ul"},"Meerkat will not allow the creation of attribute values from the modifyDN\noperation. This is for security / integrity purposes."),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA automatically sets the\n",(0,r.kt)("inlineCode",{parentName:"li"},"SearchControlOptions.separateFamilyMembers")," option when LDAP search requests\nare converted to DAP search requests. This does not violate the X.500\nstandards, but it is not mentioned. In fact, there is no specified behavior on\nhow to translate an LDAP request into DAP--only the opposite."),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA will not throw a ",(0,r.kt)("inlineCode",{parentName:"li"},"noSuchAttributeOrValue")," error during a compare\noperation. That is insecure because it reveals that the entry does not have an\nattribute of the asserted type."),(0,r.kt)("li",{parentName:"ul"},'The "Target Not Found" subprocedure defined in X.518 seems to imply that a\nsingle CR must be chosen from candidateRefs to be added to the\nNRContinuationList. Instead, Meerkat DSA adds all of them. Why not try all of\nthem?'),(0,r.kt)("li",{parentName:"ul"},"Check Suitability of filter for a subtree search in a shadowed area is\nextremely complicated and guaranteed to be incorrect. However, it will\nfunction better when the attribute selection of replication and the filter is\nsimpler."),(0,r.kt)("li",{parentName:"ul"},"Check Suitability of selection for a search or read is not performed at all.\nThe selection will return whatever attributes are requested and replicated."),(0,r.kt)("li",{parentName:"ul"},"The X.500 specifications are not clear at all as to how the ",(0,r.kt)("inlineCode",{parentName:"li"},"uniqueIdentifier"),"\nattribute is to be used for authentication, since it is multi-valued and\nuser-modifiable, so, during bind, the first ",(0,r.kt)("inlineCode",{parentName:"li"},"uniqueIdentifier"),", if it exists,\nwill be used as the bound ",(0,r.kt)("inlineCode",{parentName:"li"},"NameAndOptionalUID"),"."),(0,r.kt)("li",{parentName:"ul"},"How LDAP matching rule assertion syntax is obtained from\nMatchingRuleDescription: it is not. It is obtained from the\n",(0,r.kt)("inlineCode",{parentName:"li"},"ldapAssertionSyntax")," property of matching rules."),(0,r.kt)("li",{parentName:"ul"},'Because LDAP schema values are converted to the equivalent X.500 types,\nextensions (fields starting with "X-") will be ignored and not preserved.'),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"unmerged")," parameter of paged results requests will be ignored for now."),(0,r.kt)("li",{parentName:"ul"},'ITU Recommendation X.511, Section 7.5.f is not clear in what it means by\n"behaves as though normal entries do not exist." The parent of a subentry is\nnecessarily a normal entry. Does this mean that a subtree search can only\nreturn subentries immediately subordinate to the base object? Meerkat DSA\nbehaves as if this were so.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"administrativeRole")," is automatically added to top-level DSEs when added if it\nis not present, making the entry an AAP."),(0,r.kt)("li",{parentName:"ul"},"The specification is not clear as to whether ",(0,r.kt)("inlineCode",{parentName:"li"},"pageNumber"),' is zero-indexed or\none-indexed. Meerkat DSA will treat this as zero-indexed. This means that,\nwhether the parameter is 0 or not supplied in the request, a simple falsy\ncheck can inform the DSA as to whether it can ignore this parameter. If a user\ndid not want to use paging, they should omit this value, rather than setting\nit to zero or one to indicate that they want the first page; for this reason,\n1 will be treated as the "second" page. As another slight benefit, this also\nmeans that if clients differ in their behavior from this, it means that\n',(0,r.kt)("em",{parentName:"li"},"fewer")," entries will be returned."),(0,r.kt)("li",{parentName:"ul"},"Pagination may not be used when signing is required and chaining is not\nprohibited. This is because there is no way to merge results while preserving\nthe signatures from other DSAs. If chaining is prohibited, there will only be\nresults from the local DSA, which mean that the results can be paginated and\nsigned."),(0,r.kt)("li",{parentName:"ul"},"There are necessarily no access controls that can be applied to first-level\nDSEs that do not yet exist. This begs the question: how do we control which\nusers can add first-level DSEs? Meerkat DSA does this by prohibiting entries\nthat do not have a ",(0,r.kt)("inlineCode",{parentName:"li"},"may_add_top_level_dse")," flag set. The first entry to have\na password set will automatically get this flag set as well. After that first\nentry, any other entries that should have this permission will require\ndirect database queries to get this flag set. To use this privilege, a user\ncannot be authenticated anonymously. This does not apply if there are no\nusers with passwords set, or if the ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_OPEN_TOP_LEVEL")," environment\nvariable is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},'When sorting is used in LDAP requests, the response will always indicate a\nsuccessful sort by including the sort response control with a success code. If\never in the future, sorting status can "trickle-up" to the LDAP response from\nthe operation dispatcher, maybe this will change.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"matchedValuesOnly")," keeps only the matched values from all members of the\nreturned family. This might not be incorrect, since the X.500 specifications\ndo not clarify what the expected behavior is for non-contributing family\nmembers, but it is something to be aware of."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"restrictedBy")," alternative of ",(0,r.kt)("inlineCode",{parentName:"li"},"ProtectedItems")," is not supported for the\npurposes of access control."),(0,r.kt)("li",{parentName:"ul"},'Pending implementation: it will be slightly more efficient to use the\nuser-first alternative for ACI Items, because the ACI Items can be\n"pre-filtered" to only retain the relevant ones.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DiscloseOnError")," permissions do not apply to some operations, such as list\nand search when they return 0 results, or addEntry, because Meerkat DSA\nrequires the target objects to be discoverable in the first place."),(0,r.kt)("li",{parentName:"ul"},"We do not check for ",(0,r.kt)("inlineCode",{parentName:"li"},"DiscloseOnError")," in modifyEntry and addEntry operations\nthat add values, to determine when an attribute value already exists before it\nis added, because checks are already in place to determine if it can be added.\nThe X.500 specifications permit the attribute value's existence to be\ndisclosed if DiscloseOnError OR Add permissions exist for that value, but\nsince Add permissions are a necessary pre-requisite before Meerkat DSA even\nchecks for duplicates, there is no need to worry about ",(0,r.kt)("inlineCode",{parentName:"li"},"DiscloseOnError"),"\npermissions."),(0,r.kt)("li",{parentName:"ul"},"The ITU specs do not explicitly say that an IDM client cannot make multiple\nsubsequent bind attempts before the first one gets a response. If this is\nallowed, it opens the doors to brute-force attempts. Nefarious users can\ncircumvent rate-limiting by submitting back-to-back bind requests without\nwaiting for each one to succeed sequentially. Meerkat DSA aborts IDM\nconnections with clients that attempt back-to-back binds."),(0,r.kt)("li",{parentName:"ul"},"ITU X.511 (2016), Page 43, Footnote 2: This is because, apparently, the ACI\nfor a subordinate reference may not be available locally (see ITU X.518\n(2016), Section 19.3.1.2.1, item 3). If this is the case, the DSA ",(0,r.kt)("em",{parentName:"li"},"must")," chain\nto let the subordinate DSA decide whether to reveal this entry. There is not\nreally a good way to know if the subordinate DSA actually informed the\nsuperior DSA of relevant access control information, so Meerkat DSA will\n",(0,r.kt)("em",{parentName:"li"},"assume")," that it has all of the ACI information necessary to make this\ndecision. If the subordinate does not inform the superior of ACI information,\nit is the fault of the subordinate if its ",(0,r.kt)("inlineCode",{parentName:"li"},"subr")," entry is disclosed. For that\nmatter, the subordinate DSA could use no access control or an unsupported\naccess control scheme, for all the superior DSA knows."),(0,r.kt)("li",{parentName:"ul"},"The specification is not clear as to which member of search or list results,\nincluding those within a compound entry or hierarchy selection, should have\n",(0,r.kt)("inlineCode",{parentName:"li"},"partialName")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUE")," when a name is partially-resolved. Meerkat DSA\nwill only set ",(0,r.kt)("inlineCode",{parentName:"li"},"partialName")," for the base object, unless\n",(0,r.kt)("inlineCode",{parentName:"li"},"separateFamilyMembers")," is used, in which case all members of the family will\nbe marked accordingly."),(0,r.kt)("li",{parentName:"ul"},'Permission to read the entry and the attribute types and values of the new RDN\nare required for renaming an entry. This prevents information disclosure where\na nefarious user could attempt to discover values present in the entry by\nseeing which newRDN choices come back with a "no such values" error.'),(0,r.kt)("li",{parentName:"ul"},"The X.500 specifications demand that, if a change or removal of a subschema or\nDIT structural rule results in a change in the governing structural rule of\nany entry in the subschema, every entry within the subtree beneath that entry\ndownwards until autonomous administrative points must have their governing\nstructure rules recalculated. Meerkat DSA does not update governing structure\nrules automatically, because it could mean that potentially millions (or even\nbillions, depending on how big the directory gets!) of entries would be\naffected. With Meerkat DSA, administrators must manually kick off a\nrecalculation of an entry's governing structure rule. This can be done by\nperforming a modifyDN operation that 'renames' an entry to its exact same name\non every entry, starting from the immediate subordinates of any affected entry\ndownwards until you reach autonomous administrative points or subschema\nadministrative points. Note that, whenever an entry is made into an autonomous\nadministrative point or subschema administrative point, or whenever such an\nadministrative point has a DIT structure rule added, removed, or modified in\nits subschema, its governing structure rule will be automatically\nrecalculated; this does not recurse downward automatically."),(0,r.kt)("li",{parentName:"ul"},"When a subentry is added below an administrative point that is also a context\nprefix, the superior DSA's operational binding (if one exists) is updated."),(0,r.kt)("li",{parentName:"ul"},"The Root DSE may not be modified."),(0,r.kt)("li",{parentName:"ul"},"The information selection of a read or search operation is not evaluated against the\nselection of information that is shadowed for a shadow DSE. Meerkat DSA\nwill simply return whatever it has."),(0,r.kt)("li",{parentName:"ul"},"When using the ",(0,r.kt)("inlineCode",{parentName:"li"},"removeValues")," change from the ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyEntry")," operation, the\npresence of the values to be removed will not be checked. Whether they exist\nor not, this change will succeed. One benefit of this is that we do not have\nto worry about accidentally disclosing to users which values exist and do not\nexist for an entry by returning a different error when they do exist."),(0,r.kt)("li",{parentName:"ul"},"When using the ",(0,r.kt)("inlineCode",{parentName:"li"},"alterValues")," change from the ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyEntry")," operation, ",(0,r.kt)("inlineCode",{parentName:"li"},"Modify"),"\npermission is also required for the values that are to be replaced. This is\nmore strict than the specification."),(0,r.kt)("li",{parentName:"ul"},'Default context values are not used exactly as specified in X.501 (2016),\nSection 13.9.2. If the context is required by context use rules, and if the\ncontext of that type is not supplied, a default value can "fill the gap," but\nbeyond that, default context values are not used. This is because the verbiage\nof the section 13.9.2 is unclear.'),(0,r.kt)("li",{parentName:"ul"},"ITU Recommendation X.501 (2016), Section 14.10 states that, when a\nhierarchical parent is removed, its children are to be removed from ",(0,r.kt)("em",{parentName:"li"},"the"),"\nhierarchical group. The specification does not make it clear whether they\nshould now belong to separate hierarchical groups with themselves at the top\nor if we should recursively remove all hierarchical group attributes for all\nhierarchical descendants. Meerkat DSA puts the children in their own separate\nhierarchical groups. It is not clear whether this is a deviation from the\nspecification at all. This was chosen because it is the most performant,\neasiest to implement, and preserves potentially a lot of work from accidental\ndeletion."),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA does not throw an error if a search or list operation returns a\nnull result (a result with zero entries or RDNs)."),(0,r.kt)("li",{parentName:"ul"},"The way Meerkat DSA handles invalid signed operations is complicated and is\ndescribed ",(0,r.kt)("a",{parentName:"li",href:"/directory/docs/distributed#handling-of-invalid-signatures"},"here"),".")),(0,r.kt)("h2",{id:"the-never-contributing-bug"},'The "Never Contributing" Bug'),(0,r.kt)("p",null,"X.511 (2016), Section 7.13 states that:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the filter used is the default filter (and : { }), then all members of a\nfamily grouping shall be marked as participating members, but not as\ncontributing members.")),(0,r.kt)("p",null,"This is a problem, because ",(0,r.kt)("inlineCode",{parentName:"p"},"familyReturn")," defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"contributingEntriesOnly"),",\nwhich means that ",(0,r.kt)("em",{parentName:"p"},"nothing")," will be returned even though the compound entry as a\nwhole matches ",(0,r.kt)("inlineCode",{parentName:"p"},"and:{}"),". In other words, if the default search filter and\nselection are used, compound entries will be entirely hidden from results if the\nX.500 specifications are observed strictly."),(0,r.kt)("p",null,"This was probably not intentional, so I reported it. In early January of 2022.\nUntil I get clarification, Meerkat DSA will mark every entry as a contributing\nmember if there is a match, but no identified contributing members."),(0,r.kt)("h2",{id:"other-deviations"},"Other Deviations"),(0,r.kt)("p",null,"There are other deviations that haven't been mentioned here. Most deviations\nare the frequency of automated updates to operational bindings. Meerkat DSA\nupdates operational bindings more frequently than is required by the\nspecifications. This should not be of significance more the vast majority of\nusers, and is probably desirable."))}m.isMDXComponent=!0}}]);