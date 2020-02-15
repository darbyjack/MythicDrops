(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{145:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(1),o=t(9),i=(t(0),t(153)),a={id:"itemGroups_yml",title:"itemGroups.yml"},c={id:"itemGroups_yml",title:"itemGroups.yml",description:"## Configuration",source:"@site/../docs/itemGroups_yml.md",permalink:"/MythicDrops/docs/itemGroups_yml",sidebar:"docs",previous:{title:"identifying.yml",permalink:"/MythicDrops/docs/identifying_yml"},next:{title:"language.yml",permalink:"/MythicDrops/docs/language_yml"}},u=[{value:"Configuration",id:"configuration",children:[]}],p={rightToc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\nitemGroups.yml with inline explanations of what each configuration option does."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"version: 5.0.0\n## Item group. You can add and remove materials here. Materials can be found here:\n## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n##\n## You can also create your own item groups. For instance:\n##\n## heavy armor:\n##   - DIAMOND_HELMET\n##   - DIAMOND_CHESTPLATE\n##   - DIAMOND_LEGGINGS\n##   - DIAMOND_BOOTS\n##   - IRON_HELMET\n##   - IRON_CHESTPLATE\n##   - IRON_LEGGINGS\n##   - IRON_BOOTS\nsword:\n  - WOODEN_SWORD\n  - STONE_SWORD\n  - IRON_SWORD\n  - GOLDEN_SWORD\n  - DIAMOND_SWORD\n# other item groups down here...\n")))}l.isMDXComponent=!0},153:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return O}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},s=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),f=r,O=s["".concat(a,".").concat(f)]||s[f]||m[f]||i;return t?o.a.createElement(O,c({ref:n},p,{components:t})):o.a.createElement(O,c({ref:n},p))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);