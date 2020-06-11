/*! For license information please see be644da0.34529955.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(1),a=n(9),i=(n(0),n(168)),r=n(174),s=n(173),l=n(172),c={id:"socketGems_yml",title:"socketGems.yml"},f={id:"socketGems_yml",title:"socketGems.yml",description:'import useBaseUrl from "@docusaurus/useBaseUrl";',source:"@site/../docs/socketGems_yml.mdx",permalink:"/MythicDrops/docs/socketGems_yml",sidebar:"docs",previous:{title:"repairing.yml",permalink:"/MythicDrops/docs/repairing_yml"},next:{title:"socketing.yml",permalink:"/MythicDrops/docs/socketing_yml"}},u=[{value:"Configuration",id:"configuration",children:[{value:"New in 6.2.x",id:"new-in-62x",children:[]},{value:"New in 6.0.2",id:"new-in-602",children:[]}]}],m={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"MythicDrops has a lot of configuration options. Below is the shortened contents of the\nsocketGems.yml with inline explanations of what each configuration option does."),Object(i.b)(s.a,{defaultValue:"5.2.0",values:[{label:"5.2.0 (MD 6.1.x)",value:"5.2.0"},{label:"5.1.0 (MD 6.0.x)",value:"5.1.0"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"5.2.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.2.0\nsocket-gems:\n  ## Name of the socket gem. It\'s displayed on items when the socket gem\n  ## is added.\n  Harden I:\n    ## When does this get triggered? Available options:\n    ## - ON_HIT\n    ## - WHEN_HIT\n    ## - ON_HIT_AND_WHEN_HIT\n    ## - AURA\n    ##\n    ## Defaults to ON_HIT_AND_WHEN_HIT.\n    trigger-type: WHEN_HIT\n    ## Item groups that this gem can be applied to. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## In 6.1.0, this maps to all-of-item-groups.\n    item-groups:\n      - armor\n    ## This gem can only be applied to items that match all of\n    ## the below item groups. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## Only works in 6.1.x+.\n    all-of-item-groups:\n      - armor\n    ## This gem can only be applied to items that match any of\n    ## the below item groups. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## Only works in 6.1.x+.\n    any-item-groups:\n      - armor\n    ## This gem can only be applied to items that match none of\n    ## the below item groups. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## Only works in 6.1.x+.\n    none-of-item-groups:\n      - armor\n    ## Potion effects that can be applied.\n    potion-effects:\n      ## Name of the potion effect type.\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html\n      DAMAGE_RESISTANCE:\n        ## Intensity of the effect. 0 is level 1 due to Minecraft. Defaults to 0.\n        intensity: 0\n        ## Duration of the effect in milliseconds. Defaults to 0.\n        duration: 600\n        ## Target of the potion effect.\n        ## Available options:\n        ## - SELF\n        ## - OTHER\n        ## - NONE\n        ## - AREA\n        ##\n        ## Defaults to NONE.\n        target: SELF\n        ## Radius of the effect. Only used for AREA targets and AURA triggers. Defaults to 0.\n        radius: 0\n        ## Chance for the effect to trigger. Defaults to 1.0.\n        chance-to-trigger: 1.0\n        ## Does the potion effect affect the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        affects-wielder: true\n        ## Does the potion effect affect not the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        ##\n        ## "not the wielder" meaning any other entities within the given radius.\n        affects-target: true\n    ## Particle effects that can be applied.\n    particle-effects:\n      ## Name of the particle type.\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html\n      FIREWORKS_SPARK:\n        ## Number of particles to spawn. Defaults to 0.\n        intensity: 1\n        ## Duration of the effect in milliseconds. Defaults to 0.\n        duration: 2000\n        ## Target of the potion effect.\n        ## Available options:\n        ## - SELF\n        ## - OTHER\n        ## - NONE\n        ## - AREA\n        ##\n        ## Defaults to NONE.\n        target: SELF\n        ## Radius of the effect. Only used for AREA targets and AURA triggers. Defaults to 0.\n        radius: 0\n        ## Chance for the effect to trigger. Defaults to 1.0.\n        chance-to-trigger: 1.0\n        ## Does the particle effect affect the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        affects-wielder: true\n        ## Does the particle effect affect not the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        ##\n        ## "not the wielder" meaning any other entities within the given radius.\n        affects-target: true\n    ## Commands to be run by the socket gem when triggered. Not able to be triggered by AURA.\n    ## "CONSOLE:" will cause the command to be run by the console.\n    ## "PLAYER:" will cause the command to be run by the player if possible.\n    commands:\n      - "CONSOLE:version MythicDrops"\n      - "PLAYER:spawn"\n    ## Enchantments to be added to the item when the gem is applied. Supports both single level\n    ## and level ranges.\n    enchantments:\n      DAMAGE_ALL: 2\n      DAMAGE_UNDEAD:\n        minimum-level: 1\n        maximum-level: 2\n    ## Attributes to be added to the item when the gem is applied.\n    attributes:\n      uniquehardenIkey1:\n        ## Attribute for this particular modifier. Attribute names here:\n        ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n        attribute: GENERIC_ARMOR\n        ## Decimal value for the amount this attribute adds.\n        amount: 2.0\n        ## Operation for this particular modifier. Operation names and descriptions here:\n        ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n        operation: ADD_NUMBER\n      uniquehardenIkey2:\n        ## Attribute for this particular modifier. Attribute names here:\n        ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html\n        attribute: GENERIC_ARMOR\n        ## Decimal value for the minimum amount this attribute adds.\n        minimum-amount: 4.0\n        ## Decimal value for the maximum amount this attribute adds.\n        maximum-amount: 6.0\n        ## Operation for this particular modifier. Operation names and descriptions here:\n        ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/AttributeModifier.Operation.html\n        operation: ADD_NUMBER\n    ## Weight of the socket gem. See the weights section of the documentation\n    ## for more information. Defaults to 0.\n    weight: 400\n    ## Prefix to add to an item\'s name when this gem is applied. Defaults to no prefix.\n    prefix: Hard\n    ## Suffix to add to an item\'s name when this gem is applied. Defaults to no prefix.\n    suffix: Hard\n    ## Lore to add to an item\'s description when this gem is applied. Defaults to no lore.\n    lore:\n      - "&4Boosts defense for 0.5s when hit"\n    ## Family of the socket gem. This is primarily used for Socket Gem Combining.\n    family: Harden\n    ## Level of the socket gem. This is primarily used for Socket Gem Combining.\n    level: 1\n# other socket gems down here...\n'))),Object(i.b)(l.a,{value:"5.1.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.1.0\nsocket-gems:\n  ## Name of the socket gem. It\'s displayed on items when the socket gem\n  ## is added.\n  Harden I:\n    ## When does this get triggered? Available options:\n    ## - ON_HIT\n    ## - WHEN_HIT\n    ## - ON_HIT_AND_WHEN_HIT\n    ## - AURA\n    ##\n    ## Defaults to ON_HIT_AND_WHEN_HIT.\n    trigger-type: WHEN_HIT\n    ## Item groups that this gem can be applied to. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## In 6.1.0, this maps to all-of-item-groups.\n    item-groups:\n      - armor\n    ## This gem can only be applied to items that match all of\n    ## the below item groups. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## Only works in 6.1.x+.\n    all-of-item-groups:\n      - armor\n    ## This gem can only be applied to items that match any of\n    ## the below item groups. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## Only works in 6.1.x+.\n    any-item-groups:\n      - armor\n    ## This gem can only be applied to items that match none of\n    ## the below item groups. Defaults to empty,\n    ## which means that it can be applied to any item.\n    ## Only works in 6.1.x+.\n    none-of-item-groups:\n      - armor\n    ## Potion effects that can be applied.\n    potion-effects:\n      ## Name of the potion effect type.\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html\n      DAMAGE_RESISTANCE:\n        ## Intensity of the effect. 0 is level 1 due to Minecraft. Defaults to 0.\n        intensity: 0\n        ## Duration of the effect in milliseconds. Defaults to 0.\n        duration: 600\n        ## Target of the potion effect.\n        ## Available options:\n        ## - SELF\n        ## - OTHER\n        ## - NONE\n        ## - AREA\n        ##\n        ## Defaults to NONE.\n        target: SELF\n        ## Radius of the effect. Only used for AREA targets and AURA triggers. Defaults to 0.\n        radius: 0\n        ## Chance for the effect to trigger. Defaults to 1.0.\n        chance-to-trigger: 1.0\n        ## Does the potion effect affect the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        affects-wielder: true\n        ## Does the potion effect affect not the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        ##\n        ## "not the wielder" meaning any other entities within the given radius.\n        affects-target: true\n    ## Particle effects that can be applied.\n    particle-effects:\n      ## Name of the particle type.\n      ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html\n      FIREWORKS_SPARK:\n        ## Number of particles to spawn. Defaults to 0.\n        intensity: 1\n        ## Duration of the effect in milliseconds. Defaults to 0.\n        duration: 2000\n        ## Target of the potion effect.\n        ## Available options:\n        ## - SELF\n        ## - OTHER\n        ## - NONE\n        ## - AREA\n        ##\n        ## Defaults to NONE.\n        target: SELF\n        ## Radius of the effect. Only used for AREA targets and AURA triggers. Defaults to 0.\n        radius: 0\n        ## Chance for the effect to trigger. Defaults to 1.0.\n        chance-to-trigger: 1.0\n        ## Does the particle effect affect the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        affects-wielder: true\n        ## Does the particle effect affect not the wielder of the socket gem? Only used for\n        ## AURA trigger types. Defaults to false.\n        ##\n        ## "not the wielder" meaning any other entities within the given radius.\n        affects-target: true\n    ## Commands to be run by the socket gem when triggered. Not able to be triggered by AURA.\n    ## "CONSOLE:" will cause the command to be run by the console.\n    ## "PLAYER:" will cause the command to be run by the player if possible.\n    commands:\n      - "CONSOLE:version MythicDrops"\n      - "PLAYER:spawn"\n    ## Enchantments to be added to the item when the gem is applied. Supports both single level\n    ## and level ranges.\n    enchantments:\n      DAMAGE_ALL: 2\n      DAMAGE_UNDEAD:\n        minimum-level: 1\n        maximum-level: 2\n    ## Weight of the socket gem. See the weights section of the documentation\n    ## for more information. Defaults to 0.\n    weight: 400\n    ## Prefix to add to an item\'s name when this gem is applied. Defaults to no prefix.\n    prefix: Hard\n    ## Suffix to add to an item\'s name when this gem is applied. Defaults to no prefix.\n    suffix: Hard\n    ## Lore to add to an item\'s description when this gem is applied. Defaults to no lore.\n    lore:\n      - "&4Boosts defense for 0.5s when hit"\n    ## Family of the socket gem. This is primarily used for Socket Gem Combining.\n    family: Harden\n    ## Level of the socket gem. This is primarily used for Socket Gem Combining.\n    level: 1\n# other socket gems down here...\n')))),Object(i.b)("h3",{id:"new-in-62x"},"New in 6.2.x"),Object(i.b)("h4",{id:"new-socket-command-type"},"New Socket Command Type"),Object(i.b)("p",null,"There is a new ",Object(i.b)("inlineCode",{parentName:"p"},"SUDO")," socket command type that only works with the new format detailed below."),Object(i.b)("h4",{id:"new-socket-command-format"},"New Socket Command Format"),Object(i.b)("p",null,"You can now specify socket commands via a new format:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"commands:\n  thisisauniqueidentifierkey:\n    runner: SUDO # CONSOLE and PLAYER work here too\n    command: mythicdrops spawn tier # Put the command you want the player to run here\n    # Put any permissions you want granted temporarily (just as long as it takes to run the command) here\n    permissions:\n      - mythicdrops.command.spawn.tier\n")),Object(i.b)("h3",{id:"new-in-602"},"New in 6.0.2"),Object(i.b)("p",null,"You can now combine the fields ",Object(i.b)("inlineCode",{parentName:"p"},"all-of-item-groups"),", ",Object(i.b)("inlineCode",{parentName:"p"},"any-of-item-groups"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"none-of-item-groups")," like below."),Object(i.b)("p",null,"This will only allow the item to be applied to an item with a material that is:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"in the armor item group"),Object(i.b)("li",{parentName:"ul"},"in the chest or head or leggings item groups"),Object(i.b)("li",{parentName:"ul"},"not in the leather item group")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"Harden I:\n  trigger-type: WHEN_HIT\n  item-groups:\n    all-of-item-groups:\n      - armor\n    any-of-item-groups:\n      - chest\n      - head\n      - leggings\n    none-of-item-groups:\n      - leather\n  # other configuration...\n")),Object(i.b)("img",{alt:"Example of Gem Group Combinations",src:Object(r.a)("img/allofanyofnoneof.png")}),";")}p.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),f=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=f(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=f(n),p=o,h=u["".concat(r,".").concat(p)]||u[p]||m[p]||i;return n?a.a.createElement(h,s({ref:t},c,{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},169:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var r=a.apply(null,o);r&&e.push(r)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(o=function(){return a}.apply(t,[]))||(e.exports=o)}()},170:function(e,t,n){"use strict";var o=n(0),a=n(52);t.a=function(){return Object(o.useContext)(a.a)}},171:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},172:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},173:function(e,t,n){"use strict";n(24),n(19),n(20);var o=n(0),a=n.n(o),i=n(171);var r=function(){return Object(o.useContext)(i.a)},s=n(169),l=n.n(s),c=n(131),f=n.n(c),u=37,m=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,s=e.values,c=e.groupId,p=r(),h=p.tabGroupChoices,d=p.setTabGroupChoices,g=Object(o.useState)(i),b=g[0],y=g[1];if(null!=c){var O=h[c];null!=O&&O!==b&&y(O)}var w=function(e){y(e),null!=c&&d(c,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:l()("tab-item",f.a.tabItem,{"tab-item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return w(t)},onClick:function(){return w(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===b}))[0]))}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(175);var o=n(170);function a(e){var t=(Object(o.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},175:function(e,t,n){"use strict";var o=n(12),a=n(25),i=n(176),r="".startsWith;o(o.P+o.F*n(177)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return r?r.call(t,o,n):t.slice(n,n+o.length)===o}})},176:function(e,t,n){var o=n(75),a=n(26);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},177:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);