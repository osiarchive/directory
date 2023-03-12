"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[7465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="Deviations and Nuances",d={unversionedId:"deviations-nuances",id:"deviations-nuances",title:"Deviations and Nuances",description:"Meerkat DSA deviates from the X.500 specifications in a few ways, often due to",source:"@site/docs/deviations-nuances.md",sourceDirName:".",slug:"/deviations-nuances",permalink:"/directory/docs/deviations-nuances",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/deviations-nuances.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conformance",permalink:"/directory/docs/conformance"},next:{title:"Information Disclosure",permalink:"/directory/docs/information-disclosure"}},h={},u=[{value:"The &quot;Never Contributing&quot; Bug",id:"the-never-contributing-bug",level:2},{value:"Protected Passwords",id:"protected-passwords",level:2},{value:"Hidden Service Admin Areas",id:"hidden-service-admin-areas",level:2},{value:"Other Deviations",id:"other-deviations",level:2}],c={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deviations-and-nuances"},"Deviations and Nuances"),(0,r.kt)("p",null,"Meerkat DSA deviates from the X.500 specifications in a few ways, often due to\nambiguities in the specifications or creative leeway given by the\nspecifications to DSA implementors. These deviations are noted below. Also\nnoted below are nuances in Meerkat DSA:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'RFC 4512: "The root DSE SHALL NOT be included if the client performs a subtree\nsearch starting from the root." I could not find anywhere in the X.500\nspecifications where this behavior is required, however, it makes sense to me:\na search that does not explicitly target the root DSE should not include it,\nbecause the root DSE is, in some sense, not a "real" entry in the DIT.'),(0,r.kt)("li",{parentName:"ul"},"Meerkat will not allow the creation of attribute values from the modifyDN\noperation. This is for security / integrity purposes."),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA automatically sets the\n",(0,r.kt)("inlineCode",{parentName:"li"},"SearchControlOptions.separateFamilyMembers")," option when LDAP search requests\nare converted to DAP search requests. This does not violate the X.500\nstandards, but it is not mentioned. In fact, there is no specified behavior on\nhow to translate an LDAP request into DAP--only the opposite."),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA will not throw a ",(0,r.kt)("inlineCode",{parentName:"li"},"noSuchAttributeOrValue")," error during a compare\noperation. That is insecure because it reveals that the entry does not have an\nattribute of the asserted type."),(0,r.kt)("li",{parentName:"ul"},'The "Target Not Found" subprocedure defined in X.518 seems to imply that a\nsingle CR must be chosen from candidateRefs to be added to the\nNRContinuationList. Instead, Meerkat DSA adds all of them. Why not try all of\nthem?'),(0,r.kt)("li",{parentName:"ul"},"Check Suitability of filter for a subtree search in a shadowed area is\nextremely complicated and guaranteed to be incorrect. However, it will\nfunction better when the attribute selection of replication and the filter is\nsimpler."),(0,r.kt)("li",{parentName:"ul"},"Check Suitability of selection for a search or read is not performed at all.\nThe selection will return whatever attributes are requested and replicated."),(0,r.kt)("li",{parentName:"ul"},"The X.500 specifications are not clear at all as to how the ",(0,r.kt)("inlineCode",{parentName:"li"},"uniqueIdentifier"),"\nattribute is to be used for authentication, since it is multi-valued and\nuser-modifiable, so, during bind, the first ",(0,r.kt)("inlineCode",{parentName:"li"},"uniqueIdentifier"),", if it exists,\nwill be used as the bound ",(0,r.kt)("inlineCode",{parentName:"li"},"NameAndOptionalUID"),"."),(0,r.kt)("li",{parentName:"ul"},"How LDAP matching rule assertion syntax is obtained from\nMatchingRuleDescription: it is not. It is obtained from the\n",(0,r.kt)("inlineCode",{parentName:"li"},"ldapAssertionSyntax")," property of matching rules."),(0,r.kt)("li",{parentName:"ul"},'Because LDAP schema values are converted to the equivalent X.500 types,\nextensions (fields starting with "X-") will be ignored and not preserved.'),(0,r.kt)("li",{parentName:"ul"},'ITU Recommendation X.511, Section 7.5.f is not clear in what it means by\n"behaves as though normal entries do not exist." The parent of a subentry is\nnecessarily a normal entry. Does this mean that a subtree search can only\nreturn subentries immediately subordinate to the base object? Meerkat DSA\nbehaves as if this were so.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"administrativeRole")," is automatically added to top-level DSEs when added if it\nis not present, making the entry an AAP."),(0,r.kt)("li",{parentName:"ul"},"The specification is not clear as to whether ",(0,r.kt)("inlineCode",{parentName:"li"},"pageNumber"),' is zero-indexed or\none-indexed. Meerkat DSA will treat this as zero-indexed. This means that,\nwhether the parameter is 0 or not supplied in the request, a simple falsy\ncheck can inform the DSA as to whether it can ignore this parameter. If a user\ndid not want to use paging, they should omit this value, rather than setting\nit to zero or one to indicate that they want the first page; for this reason,\n1 will be treated as the "second" page. As another slight benefit, this also\nmeans that if clients differ in their behavior from this, it means that\n',(0,r.kt)("em",{parentName:"li"},"fewer")," entries will be returned."),(0,r.kt)("li",{parentName:"ul"},"Pagination may not be used when signing is required and chaining is not\nprohibited. This is because there is no way to merge results while preserving\nthe signatures from other DSAs. If chaining is prohibited, there will only be\nresults from the local DSA, which mean that the results can be paginated and\nsigned."),(0,r.kt)("li",{parentName:"ul"},"There are necessarily no access controls that can be applied to first-level\nDSEs that do not yet exist. This begs the question: how do we control which\nusers can add first-level DSEs? Meerkat DSA does this by prohibiting entries\nthat do not have a ",(0,r.kt)("inlineCode",{parentName:"li"},"may_add_top_level_dse")," flag set. The first entry to have\na password set will automatically get this flag set as well. After that first\nentry, any other entries that should have this permission will require\ndirect database queries to get this flag set. To use this privilege, a user\ncannot be authenticated anonymously. This does not apply if there are no\nusers with passwords set, or if the ",(0,r.kt)("inlineCode",{parentName:"li"},"MEERKAT_OPEN_TOP_LEVEL")," environment\nvariable is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},'When sorting is used in LDAP requests, the response will always indicate a\nsuccessful sort by including the sort response control with a success code. If\never in the future, sorting status can "trickle-up" to the LDAP response from\nthe operation dispatcher, maybe this will change.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"matchedValuesOnly")," keeps only the matched values from all members of the\nreturned family. This might not be incorrect, since the X.500 specifications\ndo not clarify what the expected behavior is for non-contributing family\nmembers, but it is something to be aware of."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"restrictedBy")," alternative of ",(0,r.kt)("inlineCode",{parentName:"li"},"ProtectedItems")," is not supported for the\npurposes of access control."),(0,r.kt)("li",{parentName:"ul"},'Pending implementation: it will be slightly more efficient to use the\nuser-first alternative for ACI Items, because the ACI Items can be\n"pre-filtered" to only retain the relevant ones.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DiscloseOnError")," permissions do not apply to some operations, such as list\nand search when they return 0 results, or addEntry, because Meerkat DSA\nrequires the target objects to be discoverable in the first place."),(0,r.kt)("li",{parentName:"ul"},"We do not check for ",(0,r.kt)("inlineCode",{parentName:"li"},"DiscloseOnError")," in modifyEntry and addEntry operations\nthat add values, to determine when an attribute value already exists before it\nis added, because checks are already in place to determine if it can be added.\nThe X.500 specifications permit the attribute value's existence to be\ndisclosed if DiscloseOnError OR Add permissions exist for that value, but\nsince Add permissions are a necessary pre-requisite before Meerkat DSA even\nchecks for duplicates, there is no need to worry about ",(0,r.kt)("inlineCode",{parentName:"li"},"DiscloseOnError"),"\npermissions."),(0,r.kt)("li",{parentName:"ul"},"The ITU specs do not explicitly say that an IDM client cannot make multiple\nsubsequent bind attempts before the first one gets a response. If this is\nallowed, it opens the doors to brute-force attempts. Nefarious users can\ncircumvent rate-limiting by submitting back-to-back bind requests without\nwaiting for each one to succeed sequentially. Meerkat DSA aborts IDM\nconnections with clients that attempt back-to-back binds."),(0,r.kt)("li",{parentName:"ul"},"ITU X.511 (2016), Page 43, Footnote 2: This is because, apparently, the ACI\nfor a subordinate reference may not be available locally (see ITU X.518\n(2016), Section 19.3.1.2.1, item 3). If this is the case, the DSA ",(0,r.kt)("em",{parentName:"li"},"must")," chain\nto let the subordinate DSA decide whether to reveal this entry. There is not\nreally a good way to know if the subordinate DSA actually informed the\nsuperior DSA of relevant access control information, so Meerkat DSA will\n",(0,r.kt)("em",{parentName:"li"},"assume")," that it has all of the ACI information necessary to make this\ndecision. If the subordinate does not inform the superior of ACI information,\nit is the fault of the subordinate if its ",(0,r.kt)("inlineCode",{parentName:"li"},"subr")," entry is disclosed. For that\nmatter, the subordinate DSA could use no access control or an unsupported\naccess control scheme, for all the superior DSA knows."),(0,r.kt)("li",{parentName:"ul"},"The specification is not clear as to which member of search or list results,\nincluding those within a compound entry or hierarchy selection, should have\n",(0,r.kt)("inlineCode",{parentName:"li"},"partialName")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"TRUE")," when a name is partially-resolved. Meerkat DSA\nwill only set ",(0,r.kt)("inlineCode",{parentName:"li"},"partialName")," for the base object, unless\n",(0,r.kt)("inlineCode",{parentName:"li"},"separateFamilyMembers")," is used, in which case all members of the family will\nbe marked accordingly."),(0,r.kt)("li",{parentName:"ul"},'Permission to read the entry and the attribute types and values of the new RDN\nare required for renaming an entry. This prevents information disclosure where\na nefarious user could attempt to discover values present in the entry by\nseeing which newRDN choices come back with a "no such values" error.'),(0,r.kt)("li",{parentName:"ul"},"The X.500 specifications demand that, if a change or removal of a subschema or\nDIT structural rule results in a change in the governing structural rule of\nany entry in the subschema, every entry within the subtree beneath that entry\ndownwards until autonomous administrative points must have their governing\nstructure rules recalculated. Meerkat DSA does not update governing structure\nrules automatically, because it could mean that potentially millions (or even\nbillions, depending on how big the directory gets!) of entries would be\naffected. With Meerkat DSA, administrators must manually kick off a\nrecalculation of an entry's governing structure rule. This can be done by\nperforming a modifyDN operation that 'renames' an entry to its exact same name\non every entry, starting from the immediate subordinates of any affected entry\ndownwards until you reach autonomous administrative points or subschema\nadministrative points. Note that, whenever an entry is made into an autonomous\nadministrative point or subschema administrative point, or whenever such an\nadministrative point has a DIT structure rule added, removed, or modified in\nits subschema, its governing structure rule will be automatically\nrecalculated; this does not recurse downward automatically."),(0,r.kt)("li",{parentName:"ul"},"When a subentry is added below an administrative point that is also a context\nprefix, the superior DSA's operational binding (if one exists) is updated."),(0,r.kt)("li",{parentName:"ul"},"The Root DSE may not be modified."),(0,r.kt)("li",{parentName:"ul"},"The information selection of a read or search operation is not evaluated against the\nselection of information that is shadowed for a shadow DSE. Meerkat DSA\nwill simply return whatever it has."),(0,r.kt)("li",{parentName:"ul"},"When using the ",(0,r.kt)("inlineCode",{parentName:"li"},"removeValues")," change from the ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyEntry")," operation, the\npresence of the values to be removed will not be checked. Whether they exist\nor not, this change will succeed. One benefit of this is that we do not have\nto worry about accidentally disclosing to users which values exist and do not\nexist for an entry by returning a different error when they do exist."),(0,r.kt)("li",{parentName:"ul"},"When using the ",(0,r.kt)("inlineCode",{parentName:"li"},"alterValues")," change from the ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyEntry")," operation, ",(0,r.kt)("inlineCode",{parentName:"li"},"Modify"),"\npermission is also required for the values that are to be replaced. This is\nmore strict than the specification."),(0,r.kt)("li",{parentName:"ul"},'Default context values are not used exactly as specified in X.501 (2016),\nSection 13.9.2. If the context is required by context use rules, and if the\ncontext of that type is not supplied, a default value can "fill the gap," but\nbeyond that, default context values are not used. This is because the verbiage\nof the section 13.9.2 is unclear.'),(0,r.kt)("li",{parentName:"ul"},"ITU Recommendation X.501 (2016), Section 14.10 states that, when a\nhierarchical parent is removed, its children are to be removed from ",(0,r.kt)("em",{parentName:"li"},"the"),"\nhierarchical group. The specification does not make it clear whether they\nshould now belong to separate hierarchical groups with themselves at the top\nor if we should recursively remove all hierarchical group attributes for all\nhierarchical descendants. Meerkat DSA puts the children in their own separate\nhierarchical groups. It is not clear whether this is a deviation from the\nspecification at all. This was chosen because it is the most performant,\neasiest to implement, and preserves potentially a lot of work from accidental\ndeletion."),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA does not throw an error if a search or list operation returns a\nnull result (a result with zero entries or RDNs)."),(0,r.kt)("li",{parentName:"ul"},"The way Meerkat DSA handles invalid signed operations is complicated and is\ndescribed ",(0,r.kt)("a",{parentName:"li",href:"/directory/docs/distributed#handling-of-invalid-signatures"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"userPwdHistory")," attribute returns password history items that have fallen\nout of history according to the ",(0,r.kt)("inlineCode",{parentName:"li"},"pwdMaxTimeInHistory")," operational attribute.\nWhen passwords are changed, they are still evaluated against the current,\nvalid password history.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is done for performance reasons. There is no practical way to keep\nthese attributes synced up with ",(0,r.kt)("inlineCode",{parentName:"li"},"pwdMaxTimeInHistory"),"."))),(0,r.kt)("li",{parentName:"ul"},"Password history is never deleted unless ",(0,r.kt)("inlineCode",{parentName:"li"},"administerPassword")," is used and only\nif there are insufficient slots in the ",(0,r.kt)("inlineCode",{parentName:"li"},"userPwdHistory")," to store the old and\nnew passwords.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is kind of a good thing: if you change ",(0,r.kt)("inlineCode",{parentName:"li"},"pwdMaxTimeInHistory")," to a\nhigher value, the history items that would have been truncated from history\nwill flawlessly re-appear in history."))),(0,r.kt)("li",{parentName:"ul"},"Meerkat DSA can enforce mandatory password resets as described (mentioned in\npassing, really) in ITU Recommendation X.511. As it is unclear how this is to\nbe recorded in the X.500 specifications, Meerkat DSA uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"pwdReset"),"\nattribute defined ",(0,r.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/draft-behera-ldap-password-policy-10"},"here"),"\nand commonly used in LDAP servers. In addition to this, the X.500\nspecifications say that the only allowed operation should be ",(0,r.kt)("inlineCode",{parentName:"li"},"changePassword"),",\nbut Meerkat DSA is much more generous than this, allowing ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyEntry"),"\n(since it can also be used to change an entry's password),\n",(0,r.kt)("inlineCode",{parentName:"li"},"administerPassword")," (since theoretically, an administrator could administer\ntheir own password), and ",(0,r.kt)("inlineCode",{parentName:"li"},"search")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"list"),', since many DUA implementations\nmight present an interactive "tree-like" representation of the directory that\nautomatically performs these operations and which cease to work if these\noperations are unavailable. In LDAP, the only operations available when a\npassword is pending a change are ',(0,r.kt)("inlineCode",{parentName:"li"},"search"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"modifyEntry"),", and the LDAP\n",(0,r.kt)("inlineCode",{parentName:"li"},"changePassword")," extended request."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"securityError")," with a ",(0,r.kt)("inlineCode",{parentName:"li"},"problem")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"blockedCredentials")," will never be\nreturned, even if the account is blocked. This is for security reasons:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the asserted credentials are invalid, it risks disclosing whether an\nentry exists. A nefarious user could guess distinguished names until they\nget a ",(0,r.kt)("inlineCode",{parentName:"li"},"blockedCredentials")," error instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"invalidCredentials"),", which will\nreveal the existence of entries they were not supposed to know about."),(0,r.kt)("li",{parentName:"ul"},"If the asserted credentials are valid, it risks disclosing the correct\npassword for a locked account. Nefarious users could guess passwords for a\nlocked account until they receive a ",(0,r.kt)("inlineCode",{parentName:"li"},"blockedCredentials")," error instead of\n",(0,r.kt)("inlineCode",{parentName:"li"},"invalidCredentials"),", which will reveal that they guessed the password that\nwas in place prior to the block."))),(0,r.kt)("li",{parentName:"ul"},"Duplicates are only removed from search or list results in these\ncircumstances:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When a local operation yields local results that are duplicates, and"),(0,r.kt)("li",{parentName:"ul"},"When paginated search results are requested and the ",(0,r.kt)("inlineCode",{parentName:"li"},"unmerged")," option is\nleft unused or explicitly set to ",(0,r.kt)("inlineCode",{parentName:"li"},"FALSE"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This might not be a deviation at all, because the procedures for\ndeduplicating entries are vague enough to lack details for handling the\npresence of multiple possibly-signed result sets. It is worth knowing,\nthough: if you have a strong need for absolutely no duplicate entries in\nresults, simply request pagination, even if you only read the first page."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.itu.int/rec/T-REC-X.501/en"},"ITU Recommendation X.501 (2019)"),",\nSection 10.3 outlines very specific ordering in which entries included as a\nresult of hierarchical selection are to be returned in search results, but\nMeerkat DSA does not strictly obey this, solely because an implementation that\ndid strictly obey this would be complicated, and for the small benefit of\ncorrect ordering. Instead, Meerkat DSA performs the hierarchy selection\nsub-searches in such an order that the returned entries are innately ",(0,r.kt)("em",{parentName:"li"},"likely"),"\nto appear in approximately the proper ordering."),(0,r.kt)("li",{parentName:"ul"},"Relaxations and Tightenings do not apply to ",(0,r.kt)("inlineCode",{parentName:"li"},"extensibleMatch"),". This was partly\ndue to difficulty in implementing this, but also because it seems like\nunintuitive behavior to replace matching rules that a user specifically\nrequested."),(0,r.kt)("li",{parentName:"ul"},"Where a search rule is used to provide default values in a request attribute\nprofile, filter evaluation does not check if the supertypes of that the\nasserted attribute type have request attribute profiles with default values."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"additionalControl")," component in a search rule has no effect, because\nMeerkat DSA does not recognize any service control attributes."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"matchingUse")," component in a search rule's ",(0,r.kt)("inlineCode",{parentName:"li"},"inputAttributeTypes")," has no\neffect because there are no matching restrictions defined anywhere and Meerkat\nDSA does not support any."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"entryType")," component of a search rule's input attribute type's\n",(0,r.kt)("inlineCode",{parentName:"li"},"defaultValues")," field is unused, because the specification does not define how\nit is to be used. As such, Meerkat DSA simply joins all default values defined\nin each item in this set as though there were no ",(0,r.kt)("inlineCode",{parentName:"li"},"entryType")," field at all.")),(0,r.kt)("h2",{id:"the-never-contributing-bug"},'The "Never Contributing" Bug'),(0,r.kt)("p",null,"ITU Recommendation X.511 (2016), Section 7.13 states that:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the filter used is the default filter (and : { }), then all members of a\nfamily grouping shall be marked as participating members, but not as\ncontributing members.")),(0,r.kt)("p",null,"This is a problem, because ",(0,r.kt)("inlineCode",{parentName:"p"},"familyReturn")," defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"contributingEntriesOnly"),",\nwhich means that ",(0,r.kt)("em",{parentName:"p"},"nothing")," will be returned even though the compound entry as a\nwhole matches ",(0,r.kt)("inlineCode",{parentName:"p"},"and:{}"),". In other words, if the default search filter and\nselection are used, compound entries will be entirely hidden from results if the\nX.500 specifications are observed strictly."),(0,r.kt)("p",null,"This was probably not intentional, so I reported it. In early January of 2022.\nUntil I get clarification, Meerkat DSA will mark every entry as a contributing\nmember if there is a match, but no identified contributing members."),(0,r.kt)("h2",{id:"protected-passwords"},"Protected Passwords"),(0,r.kt)("p",null,"Annex E of\n",(0,r.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.511/en"},"ITU Recommendation X.511 (2019)"),"\ndefines a ",(0,r.kt)("em",{parentName:"p"},"proposed")," algorithm for producing protected passwords as used by\nsimple authentication. This is a non-normative section of the specification, and\nas such, it is not technically a deviation from the X.500 specifications."),(0,r.kt)("p",null,"The Annex E solution incorporates the raw, ",(0,r.kt)("em",{parentName:"p"},"unhashed")," password into the data\nstructure that will be used to produce the hash that is evaluated. This means\nthat the password would have to be stored ",(0,r.kt)("em",{parentName:"p"},"unhashed")," to make this possible,\nwhich goes against all modern expectations for the secure storage of passwords\nin software architecture. For this reason, Meerkat DSA uses a procedure similar\nto the Annex E procedure, but by redefining the first hash input to replace the\nraw user password with a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPwd")," (and, unrelated, to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"random1"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"BIT STRING")," optional):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asn1"},'-- This is the data structure described in ITU Rec. X.511, Annex E.\nX511-AnnexE-Hashable1 ::= SEQUENCE {\n    name        DistinguishedName,\n    time1       GeneralizedTime,\n    random1     BIT STRING,\n    password    OCTET STRING }\n\n-- This is what Meerkat DSA actually hashes to produce f1.\nMeerkats-Actual-Hashable1 ::= SEQUENCE {\n    name        DistinguishedName,\n    time1       GeneralizedTime,\n    random1     BIT STRING OPTIONAL,\n    password    encrypted < UserPwd -- This is an ASN.1 "selection type." -- }\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," field MUST use the ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," alternative of ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPwd"),". The\nencrypted value MUST use the exact algorithm that can be found the ",(0,r.kt)("inlineCode",{parentName:"p"},"pwdEncAlg"),'\noperational attribute. The reason for this is that the password is stored\nencrypted / hashed in the database and cannot be "re-encrypted" using some other\nalgorithm. Clients must first read the algorithm used for this password before\nattempting to produce a protected password, because they need the exact\nalgorithm ',(0,r.kt)("em",{parentName:"p"},"and parameters")," to produce an identical encrypted / hashed value."),(0,r.kt)("p",null,"Unrelated to the problems above, Meerkat DSA also makes ",(0,r.kt)("inlineCode",{parentName:"p"},"random1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"random2"),"\noptional for protected passwords. You will notice that the above\n",(0,r.kt)("inlineCode",{parentName:"p"},"Meerkats-Actual-Hashable1")," that ",(0,r.kt)("inlineCode",{parentName:"p"},"random1")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONAL"),". In addition to this,\nthe second hashable defined in Annex E is also modified as such:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asn1"},"-- This is the data structure described in ITU Rec. X.511, Annex E.\nX511-AnnexE-Hashable2 ::= SEQUENCE {\n    f1          OCTET STRING, -- hashed octet string from above\n    time2       GeneralizedTime,\n    random2     BIT STRING }\n\n-- This is what Meerkat DSA actually hashes to locally produce the hash value.\nMeerkats-Actual-Hashable2 ::= SEQUENCE {\n    f1          OCTET STRING, -- hashed octet string from above\n    time2       GeneralizedTime,\n    random2     BIT STRING OPTIONAL }\n")),(0,r.kt)("p",null,"It is also worth noting that Meerkat DSA does not support every hash\nalgorithm under the sun. These are the ones that are supported at the time of\nwriting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha224")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha256")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha384")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha512")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha3-244")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha3-256")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha3-384")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sha3-512")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shake128")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shake256"))),(0,r.kt)("p",null,"If a user produces a protected password with an algorithm not listed above, the\npassword authentication will simply fail as though the password had been wrong."),(0,r.kt)("p",null,"Finally, if a user provides simple credentials using the ",(0,r.kt)("inlineCode",{parentName:"p"},"protected"),"\nalternative, but does not supply a ",(0,r.kt)("inlineCode",{parentName:"p"},"time1")," value, the ",(0,r.kt)("inlineCode",{parentName:"p"},"protected")," password will\nbe used to construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPwd")," value (using the ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypted")," alternative), and\nthat will be asserted. To reiterate, this does not violate the specifications,\nsince this behavior is explicitly undefined therein."),(0,r.kt)("h2",{id:"hidden-service-admin-areas"},"Hidden Service Admin Areas"),(0,r.kt)("p",null,"The X.500 specifications mandate that searches are not to recurse into other\nservice administrative areas, but this means that service admin points will not\nbe discoverable at all via ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," operations. Since LDAP has no ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),'\noperation, it also means that LDAP users will never be able to find any entry\nthat lies in a different service administrative area (except by "guessing" that\nit exists).'),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US,ST=FL")," is a service admin point, and a user performs a\none-level search at ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," subordinate will be hidden from the\nresults entirely. The user will have no way of even finding ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," except for\nperforming a ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," operation and noticing that this subordinate differs from\nthe results obtained by a one-level search (since ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," is not governed by\nservice administration)."),(0,r.kt)("p",null,"Meerkat DSA deviates from the specification by recursing one entry into other\nservice administrative areas so that the DIT is traversible to users. Continuing\non the previous example, this means that, if a user performs a one-level search\nat ",(0,r.kt)("inlineCode",{parentName:"p"},"C=US"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," subordinate will be returned. If a subtree search at\n",(0,r.kt)("inlineCode",{parentName:"p"},"C=US")," is performed, ",(0,r.kt)("inlineCode",{parentName:"p"},"ST=FL")," will be returned as well, but none of its\nsubordinates (the latter of which is technically correct behavior)."),(0,r.kt)("p",null,"This behavior can be turned off by setting\n",(0,r.kt)("a",{parentName:"p",href:"/directory/docs/env#meerkat_principled_service_admin"},(0,r.kt)("inlineCode",{parentName:"a"},"MEERKAT_PRINCIPLED_SERVICE_ADMIN")),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above issue will be reported to the ITU working group that authors the X.500\nspecifications, so it may be resolved in a future version.")),(0,r.kt)("h2",{id:"other-deviations"},"Other Deviations"),(0,r.kt)("p",null,"There are other deviations that haven't been mentioned here. Most deviations\nare the frequency of automated updates to operational bindings. Meerkat DSA\nupdates operational bindings more frequently than is required by the\nspecifications. This should not be of significance more the vast majority of\nusers, and is probably desirable."))}p.isMDXComponent=!0}}]);