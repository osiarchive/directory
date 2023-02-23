"use strict";(self.webpackChunkdirectory=self.webpackChunkdirectory||[]).push([[3426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(l,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},l="Zonal Matching",d={unversionedId:"zonal",id:"zonal",title:"Zonal Matching",description:"Meerkat DSA supports Zonal Matching which is a Mapping-Based Matching (defined",source:"@site/docs/zonal.md",sourceDirName:".",slug:"/zonal",permalink:"/directory/docs/zonal",draft:!1,editUrl:"https://github.com/Wildboar-Software/directory/edit/main/website/docs/zonal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/directory/docs/usage"},next:{title:"Telemetry",permalink:"/directory/docs/telemetry"}},h={},c=[{value:"Meerkat DSA&#39;s Zonal Matching Definition",id:"meerkat-dsas-zonal-matching-definition",level:2},{value:"Meerkat DSA&#39;s Zonal Matching Algorithm",id:"meerkat-dsas-zonal-matching-algorithm",level:2},{value:"Nuances",id:"nuances",level:2},{value:"Seeding the Gazetteer (Zonal Mapping Database)",id:"seeding-the-gazetteer-zonal-mapping-database",level:2},{value:"USA-only Gazetteer Seed",id:"usa-only-gazetteer-seed",level:2}],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zonal-matching"},"Zonal Matching"),(0,o.kt)("p",null,"Meerkat DSA supports Zonal Matching which is a Mapping-Based Matching (defined\nin ",(0,o.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.501/en"},"ITU Recommendation X.501 (2019)"),",\nSection 13.6.2) that is defined in\n",(0,o.kt)("a",{parentName:"p",href:"https://www.itu.int/rec/T-REC-X.520/en"},"ITU Recommendation X.520 (2019)"),',\nSection 8.8. Essentially, if a user-provided search filter does not yield any\nresults by selecting for entries in a specific locality (e.g. city, township),\nMeerkat DSA can perform a geographically-intelligent replacement of the\nexcessively restrictive search filter items to a match on "zones" (if requested\nby the user). In Meerkat DSA\'s case, postal codes are used as "zones."'),(0,o.kt)("p",null,"This can be useful if, say, you are searching for a person that may not\ntechnically live in ",(0,o.kt)("inlineCode",{parentName:"p"},"C=US,ST=FL,L=Tampa"),', but might live within the greater\noutlying "Tampa metropolitan area." If requested, and if no entries under\n',(0,o.kt)("inlineCode",{parentName:"p"},"C=US,ST=FL")," had the locality name ",(0,o.kt)("inlineCode",{parentName:"p"},"Tampa")," (as specified in the search filter),\nsearch filter item asserting ",(0,o.kt)("inlineCode",{parentName:"p"},"Tampa")," would be replaced with one or more equality\nassertions of the ",(0,o.kt)("inlineCode",{parentName:"p"},"postalCode")," attribute, whose asserted values would be postal\ncodes within and surrounding Tampa."),(0,o.kt)("h2",{id:"meerkat-dsas-zonal-matching-definition"},"Meerkat DSA's Zonal Matching Definition"),(0,o.kt)("p",null,"There are no specific implementations of zonal matching defined in the X.500\nspecifications, and--as far as I know--none were ever defined anywhere. So\nMeerkat DSA had to define its own zonal matching. Below is its ASN.1\nspecification, followed by an explanation of how it works."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-asn1"},"id-zmr-postalZonalMatch OBJECT IDENTIFIER ::= { 1 3 6 1 4 1 56490 58 1 }\npostalZonalMatch ZONAL-MATCHING ::= {\n    SELECT BY           {\n        id-at-countryName\n        | id-at-stateOrProvinceName\n        | id-at-localityName }\n    APPLICABLE TO       { stateOrProvinceName | localityName }\n    SUBTYPES INCLUDED   TRUE\n    COMBINABLE          TRUE\n    USER CONTROL        TRUE\n    EXCLUSIVE           TRUE\n    MATCHING RULE       zonalMatch.&id\n    ID                  id-zmr-postalZonalMatch\n}\n")),(0,o.kt)("p",null,"The above means that, if zonal matching is requested, it will be chosen if the\nbase object name and the search filter together can produce ",(0,o.kt)("inlineCode",{parentName:"p"},"countryName"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"stateOrProvinceName"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"localityName")," assertions. If any one of these is\nmissing, this zonal matching will not be used. Since this is the only zonal\nmatching implemented in Meerkat DSA, this also means that no zonal matching will\nbe used at all."),(0,o.kt)("p",null,"The above specification also indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"localityName")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"stateOrProvinceName")," will be replaced by the assertions this zonal mapping\nproduces in the search filter."),(0,o.kt)("p",null,"This implementation is combinable, meaning that multiple filter items can be\nused to produce a mapping. It is user-controlled, meaning that the user can\nspecify different levels of breadth with which to expand the search area (e.g.\n20 miles outside of the city or just 5). It is exclusive, which means that the\nuser can specify that they want their search to return only the marginal set of\nresults that were not present in the unrelaxed result set."),(0,o.kt)("h2",{id:"meerkat-dsas-zonal-matching-algorithm"},"Meerkat DSA's Zonal Matching Algorithm"),(0,o.kt)("p",null,"As stated earlier, when zonal matching is requested, and when the proper\nattribute value assertions are present in the base object name and search\nfilter, the asserted values in the filter (not in the base object name) are\nreplaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"postalCode"),' assertions whose asserted values are the postal codes\nassociated with that locality. This corresponds to a zonal "area" of 0. These\npostal codes are associated with one or more longitude-latitude points, which\nare queried from the "gazetteer" and sorted.'),(0,o.kt)("p",null,'If a greater area is specified, the "diameter" of the original area is obtained\nby defining a box whose lower bound is the southern-most point, whose upper\nbound is the northern-most point, whose left bound is the western-most point,\nand whose right bound is the eastern-most point. The diagonal area of this box\nis defined as the "diameter," for our purposes. ("Hypotenuse" would be a more\ntechnically correct term, but since zonal matching is conceptually thought of\nas outwardly-expanding concentric circles, and since it is "fuzzy" by nature, we\ndo not have to nitpick these terms.)'),(0,o.kt)("p",null,'Each subsequent "area" or "level" of the zonal relaxation adds or subtracts\n(whichever makes the box bigger) R / L to each\nbound of the box described above, where R is the "radius" of the level-0 area,\nand L is the level. (Note that this only applies above level-0, so that no\ndivision by zero happens.) In other words, at level 1, all four edges of the box\nexpand outwards by R. At level 2, this is by R + R/2.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'The rationale for this seemingly obtuse algorithm is that, as the "diameter" of\na circle doubles, the area within that circle ',(0,o.kt)("em",{parentName:"p"},"more than doubles"),'. Likewise, if\nthe expansion of the box proceeded at a constant length at each level, the area\ncaptured would increase "exponentially," and so would the entries evaluated in\neach marginal relaxation of the zonal match. Instead, we want an algorithm that\nis inclined to return a roughly constant number of entries at each expansion of\nthe area. Dividing the added radius by the level at each level will result in\nthe box expanding by a decreasing radius at each iteration, but the area added\nby each iteration will be less volatile.')),(0,o.kt)("p",null,"The algorithm doesn't end here. Once the box for a given zonal level is\ndetermined, all postal codes that have a single point within that box are\nselected as the replacement ",(0,o.kt)("inlineCode",{parentName:"p"},"postalCode")," assertions for the ",(0,o.kt)("inlineCode",{parentName:"p"},"localityName")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"stateOrProvinceName")," assertions in the filter. It is a known and understood\ndrawback of this algorithm that this may result in a really jagged, irregular\nsearch area."),(0,o.kt)("h2",{id:"nuances"},"Nuances"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"None of the selected locale attributes in the distinguished name of the base\nobject are replaced. In other words, if your search the subtree under\n",(0,o.kt)("inlineCode",{parentName:"li"},"C=US,ST=FL"),", no amount of zonal relaxation will make your search cross the\nFloridian border into Georgia and return results under ",(0,o.kt)("inlineCode",{parentName:"li"},"C=US,ST=GA"),"."),(0,o.kt)("li",{parentName:"ul"},"The algorithm ",(0,o.kt)("em",{parentName:"li"},"never")," returns ",(0,o.kt)("inlineCode",{parentName:"li"},"multiple-mappings"),", even if there are two\nseparate real localities that have the same exact names within the country\nand state-or-province. In such a case, all of their postal codes will be\nconsidered as one, leading to some very strange results."),(0,o.kt)("li",{parentName:"ul"},"Your database is empty by default, so zonal matching will not work at all\nunless you seed it with postal codes and their geographic coordinates.")),(0,o.kt)("h2",{id:"seeding-the-gazetteer-zonal-mapping-database"},"Seeding the Gazetteer (Zonal Mapping Database)"),(0,o.kt)("p",null,"To populate the ",(0,o.kt)("em",{parentName:"p"},"gazetteer")," (the internal database used for zonal matching),\nyou will need to seed the ",(0,o.kt)("inlineCode",{parentName:"p"},"PostalCodesGazetteEntry")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"PostalCodeBoundaryPoints"),". The former contains the country, state-or-province,\nand locality name associated with each postal code. The latter contains one or\nmore geographic coordinates corresponding to points on the boundaries of the\npostal code regions. These coordinates are composed of ",(0,o.kt)("inlineCode",{parentName:"p"},"northing")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"easting"),"\ncomponents, which are meters (postive or negative) from the prime equator and\nprime meridian, respectively."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Despite the name, you do not have to insert the coordinates of the ",(0,o.kt)("em",{parentName:"p"},"boundaries"),'\nof the postal code region in your gazeteer. You can just insert any point within\nthe postal code region. This will have the effect of preventing the seemingly\nabsurd scenario of a postal code from being included in the mapping just by\nhaving a single boundary point within the box described above. Boundary points\nwere selected just because they are readily available online; something else,\nsuch as a "center of gravity" will have to be calculated from this data.')),(0,o.kt)("h2",{id:"usa-only-gazetteer-seed"},"USA-only Gazetteer Seed"),(0,o.kt)("p",null,"As part of developing Meerkat DSA, a USA-only dataset for the gazetteer was\ncreated, and made freely available. Because these files were too large to commit\nto Meerkat DSA's git repository, they are available instead as downloads from\nblob storage. There is no license included with them, but if it matters at all,\nI hereby release them under an MIT license. You can do whatever you want with\nthis data. I won't sue."),(0,o.kt)("p",null,"First, download the files. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command found on many unix-like\nsystems, you can run these commands from within the root of the cloned\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Wildboar-Software/directory"},"Meerkat DSA repo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p data/zonal\ncurl https://wildboarprod.blob.core.windows.net/public-data/boundary.csv -o data/zonal/boundary.csv\ncurl https://wildboarprod.blob.core.windows.net/public-data/gazette.csv -o data/zonal/gazette.csv\n")),(0,o.kt)("p",null,"If you have your ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," environment variable defined, you can then run\n",(0,o.kt)("inlineCode",{parentName:"p"},"node ./tools/seed.mjs")," (provided that you have NodeJS installed). This will\ntake a minute or two, but it will load up your database with the gazetteer data.\nYou may set your ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," in the root-level ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. Just make sure\nnot to commit it, since this file is not in ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"!"))}u.isMDXComponent=!0}}]);