(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(9),a=(n(0),n(155)),o={id:"repairCosts_yml",title:"repairCosts.yml"},s={id:"repairCosts_yml",title:"repairCosts.yml",description:"## Configuration",source:"@site/../docs/repairCosts_yml.md",permalink:"/MythicDrops/docs/repairCosts_yml",sidebar:"docs",previous:{title:"relation.yml",permalink:"/MythicDrops/docs/relation_yml"},next:{title:"repairing.yml",permalink:"/MythicDrops/docs/repairing_yml"}},c=[{value:"Configuration",id:"configuration",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"MythicDrops has a lot of configuration options. Below is the shortened contents of the\nrepairCosts.yml with inline explanations of what each configuration option does."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"version: 1.0.0\n## Identifier for an item that can be repaired. Needs to be unique.\n## Does NOT have to be anything sensible, it can be gibberish like\n## asijsoiadsnansga.\nwooden-axe:\n  ## Name of the material of the item that can be repaired.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  material-name: WOODEN_AXE\n  ## You can specify an item name to create custom repair costs for items\n  ## with a given name. This defaults to being undefined and that's usually\n  ## fine for most usages.\n  item-name: Example\n  ## Behaves identically to item-name, but with the item's lore instead.\n  item-lore:\n    - Example\n  ## Costs to repair this item.\n  costs:\n    ## Identifier for a repair cost. Needs to be unique per costs section.\n    ## You can have multiple.\n    ## Does NOT have to be anything sensible, it can be gibberish like\n    ## asijsoiadsnansga.\n    default:\n      ## Name of the material of the item that is required to do the repairing.\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n      material-name: OAK_WOOD\n      ## Priority of this particular cost. If you have multiple matching costs\n      ## in your inventory, the one with the highest valued priority wins (1 > 0).\n      priority: 0\n      ## How many of this item are required to perform the repair?\n      amount: 1\n      ## How much experience is required to perform the repair?\n      experience-cost: 0\n      ## What percentage of the item's durability should be repaired?\n      repair-per-cost: 0.1\n      ## The item used to perform the repair must have a name matching this\n      ## value if it is defined.\n      ## This defaults to being undefined and that's usually\n      ## fine for most usages.\n      item-name: Example\n      ## Behaves identically to item-name, but with the item's lore instead.\n      item-lore:\n        - Example\n      ## Behaves identically to item-name, but with the item's enchantments instead.\n      enchantments:\n        MENDING: 1\n# other repair costs down here...\n")))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(o,".").concat(f)]||u[f]||m[f]||a;return n?i.a.createElement(h,s({ref:t},l,{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);