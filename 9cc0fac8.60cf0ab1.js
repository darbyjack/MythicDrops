(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(169)),i={id:"aura_gems",title:"Aura Gems"},c={id:"aura_gems",isDocsHomePage:!1,title:"Aura Gems",description:"Use Case",source:"@site/../docs/aura_gems.md",permalink:"/MythicDrops/docs/aura_gems",sidebar:"docs",previous:{title:"tier.yml",permalink:"/MythicDrops/docs/tier_yml"}},l=[{value:"Use Case",id:"use-case",children:[]},{value:"Buff Self Gem",id:"buff-self-gem",children:[]},{value:"Buff Others Gem",id:"buff-others-gem",children:[]},{value:"Debuff Self Gem",id:"debuff-self-gem",children:[]},{value:"Debuff Others Gem",id:"debuff-others-gem",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"use-case"},"Use Case"),Object(o.b)("p",null,"Aura gems are gems that can be used to provide continuous buffs or debuffs. These\nbuffs or debuffs can be applied to the player with the gem or to other entities nearby."),Object(o.b)("p",null,"Auras replenish every 30s."),Object(o.b)("h2",{id:"buff-self-gem"},"Buff Self Gem"),Object(o.b)("p",null,"Below is an example of a Socket Gem that applies a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html"}),"potion effect")," that grants increased damage\nto the wielding player."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'Enraging I:\n  trigger-type: AURA\n  all-of-item-groups:\n    - armor\n  potion-effects:\n    INCREASE_DAMAGE:\n      intensity: 0\n      duration: 30000\n      affects-wielder: true\n  weight: 400\n  prefix: Enraging\n  lore:\n    - "&4Increases damage dealt while item is equipped."\n  family: Rage\n  level: 1\n')),Object(o.b)("h2",{id:"buff-others-gem"},"Buff Others Gem"),Object(o.b)("p",null,"Below is an example of a Socket Gem that applies a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html"}),"potion effect")," that grants increased damage\nto other players, but not the wielding player."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'Enraging I:\n  trigger-type: AURA\n  all-of-item-groups:\n    - armor\n  potion-effects:\n    INCREASE_DAMAGE:\n      intensity: 0\n      duration: 30000\n      affects-wielder: false\n      affects-target: true\n  weight: 400\n  prefix: Enraging\n  lore:\n    - "&4Increases damage dealt by others while item is equipped."\n  family: Rage\n  level: 1\n')),Object(o.b)("h2",{id:"debuff-self-gem"},"Debuff Self Gem"),Object(o.b)("p",null,"Below is an example of a Socket Gem that applies a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html"}),"potion effect")," that applies confusion\nto the wielding player."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'Confusion I:\n  trigger-type: AURA\n  all-of-item-groups:\n    - armor\n  potion-effects:\n    CONFUSION:\n      intensity: 0\n      duration: 30000\n      affects-wielder: true\n  weight: 400\n  prefix: Confusing\n  lore:\n    - "&4Confuses the wielder while item is equipped."\n  family: Psychic\n  level: 1\n')),Object(o.b)("h2",{id:"debuff-others-gem"},"Debuff Others Gem"),Object(o.b)("p",null,"Below is an example of a Socket Gem that applies a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html"}),"potion effect")," that applies confusion\nto other players, but not the wielding player."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'Confusing I:\n  trigger-type: AURA\n  all-of-item-groups:\n    - armor\n  potion-effects:\n    CONFUSION:\n      intensity: 0\n      duration: 30000\n      affects-wielder: false\n      affects-target: true\n  weight: 400\n  prefix: Confusing\n  lore:\n    - "&4Confuses other nearby players while item is equipped."\n  family: Psychic\n  level: 1\n')))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),b=r,m=f["".concat(i,".").concat(b)]||f[b]||u[b]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);