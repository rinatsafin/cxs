!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u=o(["\n    <button className=","\n      onclick=",">\n      ","\n    </button>\n  "],["\n    <button className=","\n      onclick=",">\n      ","\n    </button>\n  "]),l=o(["\n    <div className=",">\n    </div>\n  "],["\n    <div className=",">\n    </div>\n  "]),f=o(["\n    <div className=",">\n      <h1 className=",">\n        "," ","\n      </h1>\n      <div className=",">\n        ","\n      </div>\n      <div className=",">\n        ","\n        ","\n        ","\n      </div>\n      <div>\n        ","\n      </div>\n    </div>\n  "],["\n    <div className=",">\n      <h1 className=",">\n        "," ","\n      </h1>\n      <div className=",">\n        ","\n      </div>\n      <div className=",">\n        ","\n        ","\n        ","\n      </div>\n      <div>\n        ","\n      </div>\n    </div>\n  "]),c=n(15),s=r(c),d=n(4),p=r(d),h=n(8),m=n(10),v=r(m),g=function(e,t,n){return t.className&&"object"===a(t.className)&&(t.className=(0,p["default"])(t.className)),(0,h.createElement)(e,t,n)},b=(0,v["default"])(g),y=["#000","#222","#444","#666","#888","cyan","#07f","#70f","#f07","magenta","yellow"],x={_state:{title:"Hello cxs",count:0},get state(){return x._state},set state(e){x._state=i({},state,e),x.listeners.forEach(function(e){return e(x)})},setState:function(e){x._state=i({},x.state,e),x.listeners.forEach(function(e){return e(x)})},listeners:[],subscribe:function(e){"function"==typeof e&&x.listeners.push(e)}},A=function(e){var t=e.text,n=e.className,r=e.onclick,o=void 0===r?function(){}:r;return b(u,i({boxSizing:"border-box",border:"none",borderRadius:3,fontFamily:"inherit",fontSize:"inherit",fontWeight:"bold",display:"inline-block",padding:8,margin:0,color:"white",appearance:"none",backgroundColor:"black"},n),o,t)},N=function(e){var t=e.color,n={height:32,backgroundColor:t};return b(l,n)},w=function(e){var t=e.setState,n=e.state,r=n.title,o=n.count,i={root:{fontFamily:"-apple-system, sans-serif",padding:32,"@media screen and (min-width:40em)":{padding:64}},heading:{color:"green","@media (min-width:40em)":{padding:16,":hover":{color:"tomato"}}},buttons:{display:"flex",marginLeft:-8,marginRight:-8},button:{flex:"1 1 auto",margin:8},block:{textAlign:"center",fontSize:48,height:64,padding:32,color:"white",backgroundColor:y[o%y.length]}},a=Array.from({length:o}).map(function(e,t){return t}).map(function(e){return N({color:y[e%y.length]})});return b(f,i.root,i.heading,r,o,i.block,o,i.buttons,A({text:"-",className:i.button,onclick:function(e){return t({count:n.count-1})}}),A({text:"+",className:i.button,onclick:function(e){return t({count:n.count+1})}}),A({text:"++",className:i.button,onclick:function(e){return t({count:n.count+8})}}),a)};console.log("hello");var C=function(e){var t=w(e);s["default"].update(k,t),p["default"].attach()},k=w(x);p["default"].attach(),x.subscribe(C),document.body.appendChild(k)},function(e,t){var n={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};e.exports=function(e,t){return"number"!=typeof t||n[e]?t:t+"px"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={boxSizing:["border-box"],display:["block","inline-block","inline","table","table-cell","none"],"float":["none","left","right"],textAlign:["left","center","right","justify"],fontWeight:["bold","normal"],textDecoration:["none","underline"],whiteSpace:["nowrap"],listStyle:["none"],overflow:["hidden","scroll"],margin:[0],marginTop:[0],marginRight:[0],marginBottom:[0],marginLeft:[0],padding:[0],paddingTop:[0],paddingRight:[0],paddingBottom:[0],paddingLeft:[0],maxWidth:["100%"],height:["auto"],verticalAlign:["top","middle","bottom","baseline"],position:["relative","absolute","fixed"],borderRadius:[0]};t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(1),l=r(u),f=n(2),c=r(f),s=function(e,t,n){var r=d(e,t,n),i=Object.keys(t).filter(function(e){return null!==t[e]}).filter(function(e){return g(t[e])||!v(t[e])}).map(function(e){return{key:e,prop:y(e),value:b(e,t[e])}}).reduce(function(e,t){return g(t.value)?[].concat(o(e),o(t.value.map(function(e){return a({},t,{value:e})}))):[].concat(o(e),[t])},[]),u=/:/.test(e);if(!u){i.reduce(p(n),[]).forEach(function(e){return r.push(e)})}var l=u?i:i.filter(h);return r.unshift({id:e+(n||""),order:n?2:1,selector:"."+e,css:m("."+e,l,n)}),r},d=function(e,t,n){return Object.keys(t).filter(function(e){return!!t[e]}).filter(function(e){return!g(t[e])&&v(t[e])}).map(function(r){return/^:/.test(r)?s(e+r,t[r],n):/^@/.test(r)?s(e,t[r],r):s(e+" "+r,t[r],n)}).reduce(function(e,t){return e.concat(t)},[])},p=function(e){return function(t,n){var r=c["default"][n.key]?c["default"][n.key].indexOf(n.value):-1;if(r>-1){var i=".cxs-"+n.prop+"-"+n.value;return[].concat(o(t),[{id:i,order:0,selector:i,css:m(i,[n],e)}])}return t}},h=function(e){return(c["default"][e.key]?c["default"][e.key].indexOf(e.value):-1)<0},m=function(e,t,n){var r=t.map(function(e){return e.prop+":"+e.value}),o=e+"{"+r.join(";")+"}";return n?n+" { "+o+" }":o},v=function(e){return"object"===("undefined"==typeof e?"undefined":i(e))},g=function(e){return Array.isArray(e)},b=function(e,t){return"number"==typeof t?(0,l["default"])(e,t):t},y=function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})};t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.options=t.cache=t.styleTag=void 0;var o=n(7),i=r(o),a=n(6),u=r(a),l=n(3),f=r(l),c=t.styleTag=null,s=t.cache={},d=t.options={autoAttach:!0,throttle:50},p=function m(e){var t=[],n="cxs-"+(0,i["default"])(JSON.stringify(e),128),r=(0,f["default"])(n,e);return r.forEach(function(e){return s[e.id]=e}),r.filter(function(e){return!/\:/.test(e.selector)}).filter(function(e){return!/\s/.test(e.selector)}).forEach(function(e){return t.push(e.selector.replace(/^\./,""))}),d.autoAttach&&m.attach(),t.join(" ")},h=function(){if("undefined"==typeof document)return void console.warn("Cannot attach stylesheet without a document");var e=p.rules;t.styleTag=c=c||document.getElementById("cxs"),null===c&&(t.styleTag=c=document.createElement("style"),c.id="cxs",document.head.appendChild(c),p.sheet=c.sheet),e.forEach(function(e){try{p.sheet.insertRule(e.css,p.sheet.cssRules.length)}catch(t){}})};p.attach=(0,u["default"])(h,d.throttle),p.options=d,p.clearCache=function(){return t.cache=s={}},Object.defineProperty(p,"rules",{get:function(){return Object.keys(s||{}).map(function(e){return s[e]||!1}).filter(function(e){return e.css.length}).sort(function(e,t){return e.order-t.order})}}),Object.defineProperty(p,"css",{get:function(){return p.rules.map(function(e){return e.css}).join("")}}),t["default"]=p},function(e,t){function n(e,t,n){function r(t){var n=m,r=v;return m=v=void 0,C=t,b=e.apply(r,n)}function i(e){return C=e,y=setTimeout(c,t),k?r(e):b}function a(e){var n=e-w,r=e-C,o=t-n;return O?A(o,g-r):o}function f(e){var n=e-w,r=e-C;return!w||n>=t||n<0||O&&r>=g}function c(){var e=N();return f(e)?s(e):void(y=setTimeout(c,a(e)))}function s(e){return clearTimeout(y),y=void 0,T&&m?r(e):(m=v=void 0,b)}function d(){void 0!==y&&clearTimeout(y),w=C=0,m=v=y=void 0}function p(){return void 0===y?b:s(N())}function h(){var e=N(),n=f(e);if(m=arguments,v=this,w=e,n){if(void 0===y)return i(w);if(O)return clearTimeout(y),y=setTimeout(c,t),r(w)}return void 0===y&&(y=setTimeout(c,t)),b}var m,v,g,b,y,w=0,C=0,k=!1,O=!1,T=!0;if("function"!=typeof e)throw new TypeError(l);return t=u(t)||0,o(n)&&(k=!!n.leading,O="maxWait"in n,g=O?x(u(n.maxWait)||0,t):g,T="trailing"in n?!!n.trailing:T),h.cancel=d,h.flush=p,h}function r(e){var t=o(e)?y.call(e):"";return t==c||t==s}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||i(e)&&y.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(o(e)){var t=r(e.valueOf)?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=m.test(e);return n||v.test(e)?g(e.slice(2),n?2:8):h.test(e)?f:+e}var l="Expected a function",f=NaN,c="[object Function]",s="[object GeneratorFunction]",d="[object Symbol]",p=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,v=/^0o[0-7]+$/i,g=parseInt,b=Object.prototype,y=b.toString,x=Math.max,A=Math.min,N=Date.now;e.exports=n},function(e,t,n){function r(e,t,n){var r=!0,u=!0;if("function"!=typeof e)throw new TypeError(a);return o(n)&&(r="leading"in n?!!n.leading:r,u="trailing"in n?!!n.trailing:u),i(e,t,{leading:r,maxWait:t,trailing:u})}function o(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var i=n(5),a="Expected a function";e.exports=r},function(e,t,n){function r(e,t){var n,r,o,i,a,u,l,f;for(n=3&e.length,r=e.length-n,o=t,a=3432918353,u=461845907,f=0;f<r;)l=255&e.charCodeAt(f)|(255&e.charCodeAt(++f))<<8|(255&e.charCodeAt(++f))<<16|(255&e.charCodeAt(++f))<<24,++f,l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295,l=l<<15|l>>>17,l=(65535&l)*u+(((l>>>16)*u&65535)<<16)&4294967295,o^=l,o=o<<13|o>>>19,i=5*(65535&o)+((5*(o>>>16)&65535)<<16)&4294967295,o=(65535&i)+27492+(((i>>>16)+58964&65535)<<16);switch(l=0,n){case 3:l^=(255&e.charCodeAt(f+2))<<16;case 2:l^=(255&e.charCodeAt(f+1))<<8;case 1:l^=255&e.charCodeAt(f),l=(65535&l)*a+(((l>>>16)*a&65535)<<16)&4294967295,l=l<<15|l>>>17,l=(65535&l)*u+(((l>>>16)*u&65535)<<16)&4294967295,o^=l}return o^=e.length,o^=o>>>16,o=2246822507*(65535&o)+((2246822507*(o>>>16)&65535)<<16)&4294967295,o^=o>>>13,o=3266489909*(65535&o)+((3266489909*(o>>>16)&65535)<<16)&4294967295,o^=o>>>16,o>>>0}e.exports=r},function(e,t,n){function r(e,t,n){function r(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(Array.isArray(n))r(n);else{if(("number"==typeof n||"boolean"==typeof n||n instanceof Date||n instanceof RegExp)&&(n=n.toString()),"string"==typeof n){if(i.lastChild&&"#text"===i.lastChild.nodeName){i.lastChild.nodeValue+=n;continue}n=o.createTextNode(n)}n&&n.nodeType&&i.appendChild(n)}}}var i;f.indexOf(e)!==-1&&(t.namespace=u);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),i=c?o.createElementNS(c,e):o.createElement(e),t.onload||t.onunload){var s=t.onload||function(){},d=t.onunload||function(){};a(i,function(){s(i)},function(){d(i)}),delete t.onload,delete t.onunload}for(var p in t)if(t.hasOwnProperty(p)){var h=p.toLowerCase(),m=t[p];if("classname"===h&&(h="class",p="class"),"htmlFor"===p&&(p="for"),l[h])if("true"===m)m=h;else if("false"===m)continue;"on"===h.slice(0,2)?i[p]=m:c?i.setAttributeNS(null,p,m):i.setAttribute(p,m)}return r(n),i}var o=n(9),i=n(10),a=n(14),u="http://www.w3.org/2000/svg",l={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,willvalidate:1},f=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=i(r),e.exports.createElement=r},function(e,t,n){(function(t){var r="undefined"!=typeof t?t:"undefined"!=typeof window?window:{},o=n(17);if("undefined"!=typeof document)e.exports=document;else{var i=r["__GLOBAL_DOCUMENT_CACHE@4"];i||(i=r["__GLOBAL_DOCUMENT_CACHE@4"]=o),e.exports=i}}).call(t,function(){return this}())},function(e,t,n){function r(e){return e===m||e===v}function o(e){return y.test(e)}var i=n(12),a=0,u=1,l=2,f=3,c=4,s=5,d=6,p=7,h=8,m=9,v=10,g=11,b=12;e.exports=function(e,t){function n(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"==typeof e?e:y("",e)}e=i(e),t||(t={});var y=t.concat||function(e,t){return String(e)+String(t)};return function(t){function i(e){var t=[];x===p&&(x=c);for(var n=0;n<e.length;n++){var o=e.charAt(n);x===u&&"<"===o?(A.length&&t.push([u,A]),A="",x=l):">"!==o||r(x)?x===u?A+=o:x===l&&/\s/.test(o)?(t.push([l,A]),A="",x=c):x===l?A+=o:x===c&&/[\w-]/.test(o)?(x=s,A=o):x===c&&/\s/.test(o)?(A.length&&t.push([s,A]),t.push([b])):x===s&&/\s/.test(o)?(t.push([s,A]),A="",x=d):x===s&&"="===o?(t.push([s,A],[g]),A="",x=p):x===s?A+=o:x!==d&&x!==c||"="!==o?x!==d&&x!==c||/\s/.test(o)?x===p&&'"'===o?x=v:x===p&&"'"===o?x=m:x===v&&'"'===o?(t.push([h,A],[b]),A="",x=c):x===m&&"'"===o?(t.push([h,A],[b]),A="",x=c):x!==p||/\s/.test(o)?x===h&&/\s/.test(o)?(t.push([h,A],[b]),A="",x=c):x!==h&&x!==m&&x!==v||(A+=o):(x=h,n--):(t.push([b]),/[\w-]/.test(o)?(A+=o,x=s):x=c):(t.push([g]),x=p):(x===l?t.push([l,A]):x===s?t.push([s,A]):x===h&&A.length&&t.push([h,A]),t.push([f]),A="",x=u)}return x===u&&A.length?(t.push([u,A]),A=""):x===h&&A.length?(t.push([h,A]),A=""):x===v&&A.length?(t.push([h,A]),A=""):x===m&&A.length?(t.push([h,A]),A=""):x===s&&(t.push([s,A]),A=""),t}for(var x=u,A="",N=arguments.length,w=[],C=0;C<t.length;C++)if(C<N-1){var k=arguments[C+1],O=i(t[C]),T=x;T===v&&(T=h),T===m&&(T=h),T===p&&(T=h),T===c&&(T=s),O.push([a,T,k]),w.push.apply(w,O)}else w.push.apply(w,i(t[C]));for(var E=[null,{},[]],S=[[E,-1]],C=0;C<w.length;C++){var j=S[S.length-1][0],O=w[C],M=O[0];if(M===l&&/^\//.test(O[1])){var L=S[S.length-1][1];S.length>1&&(S.pop(),S[S.length-1][0][2][L]=e(j[0],j[1],j[2].length?j[2]:void 0))}else if(M===l){var _=[O[1],{},[]];j[2].push(_),S.push([_,j[2].length-1])}else if(M===s||M===a&&O[1]===s){for(var R,F="";C<w.length;C++)if(w[C][0]===s)F=y(F,w[C][1]);else{if(w[C][0]!==a||w[C][1]!==s)break;if("object"!=typeof w[C][2]||F)F=y(F,w[C][2]);else for(R in w[C][2])w[C][2].hasOwnProperty(R)&&!j[1][R]&&(j[1][R]=w[C][2][R])}w[C][0]===g&&C++;for(var P=C;C<w.length;C++)if(w[C][0]===h||w[C][0]===s)j[1][F]?j[1][F]=y(j[1][F],w[C][1]):j[1][F]=n(w[C][1]);else{if(w[C][0]!==a||w[C][1]!==h&&w[C][1]!==s){!F.length||j[1][F]||C!==P||w[C][0]!==f&&w[C][0]!==b||(j[1][F]=F.toLowerCase());break}j[1][F]?j[1][F]=y(j[1][F],w[C][2]):j[1][F]=n(w[C][2])}}else if(M===s)j[1][O[1]]=!0;else if(M===a&&O[1]===s)j[1][O[2]]=!0;else if(M===f){if(o(j[0])&&S.length){var L=S[S.length-1][1];S.pop(),S[S.length-1][0][2][L]=e(j[0],j[1],j[2].length?j[2]:void 0)}}else if(M===a&&O[1]===u)void 0===O[2]||null===O[2]?O[2]="":O[2]||(O[2]=y("",O[2])),Array.isArray(O[2][0])?j[2].push.apply(j[2],O[2]):j[2].push(O[2]);else if(M===u)j[2].push(O[1]);else if(M!==g&&M!==b)throw new Error("unhandled: "+M)}if(E[2].length>1&&/^\s*$/.test(E[2][0])&&E[2].shift(),E[2].length>2||2===E[2].length&&/\S/.test(E[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(E[2][0])&&"string"==typeof E[2][0][0]&&Array.isArray(E[2][0][2])&&(E[2][0]=e(E[2][0][0],E[2][0][1],E[2][0][2])),E[2][0]}};var y=(Object.prototype.hasOwnProperty,RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"))},function(e,t){(function(t){"undefined"!=typeof window?e.exports=window:"undefined"!=typeof t?e.exports=t:"undefined"!=typeof self?e.exports=self:e.exports={}}).call(t,function(){return this}())},function(e,t){function n(e){return function(t,n,o){for(var i in n)i in r&&(n[r[i]]=n[i],delete n[i]);return e(t,n,o)}}e.exports=n;var r={"class":"className","for":"htmlFor","http-equiv":"httpEquiv"}},function(e,t){function n(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function r(e){!c&&document.createRange&&(c=document.createRange(),c.selectNode(document.body));var t;return c&&c.createContextualFragment?t=c.createContextualFragment(e):(t=document.createElement("body"),t.innerHTML=e),t.childNodes[0]}function o(){}function i(e,t){return t&&t!==p?document.createElementNS(t,e):document.createElement(e)}function a(e,t){var n,r,o,i,a,u,l=t.attributes;for(n=l.length-1;n>=0;n--)r=l[n],o=r.name,a=r.value,i=r.namespaceURI,i?(o=r.localName||o,u=e.getAttributeNS(i,o)):u=e.getAttribute(o),u!==a&&(i?e.setAttributeNS(i,o,a):e.setAttribute(o,a));for(l=e.attributes,n=l.length-1;n>=0;n--)r=l[n],r.specified!==!1&&(o=r.name,i=r.namespaceURI,s(t,i,i?o=r.localName||o:o)||e.removeAttributeNode(r))}function u(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}function l(e){return e.id}function f(e,t,f){function c(e,t){var n=N(e);if(n?x[n]=e:t||E(e),e.nodeType===h)for(var r=e.firstChild;r;)c(r,t||n),r=r.nextSibling}function s(e){if(e.nodeType===h)for(var t=e.firstChild;t;)N(t)||(E(t),s(t)),t=t.nextSibling}function d(e,t,n){T(e)!==!1&&(t.removeChild(e),n?N(e)||(E(e),s(e)):c(e))}function p(e,t,n,r){var o=N(t);if(o&&delete x[o],!r){if(k(e,t)===!1)return;if(a(e,t),O(e),S(e,t)===!1)return}if("TEXTAREA"!==e.nodeName){var i,u,l,f,c,s=t.firstChild,y=e.firstChild;e:for(;s;){for(l=s.nextSibling,i=N(s);y;){var T=N(y);if(u=y.nextSibling,!n&&T&&(c=A[T]))c.parentNode.replaceChild(y,c),p(y,c,n),y=u;else{var E=y.nodeType;if(E===s.nodeType){var j=!1;if(E===h?(b(y,s)&&(T||i?i===T&&(j=!0):j=!0),j&&p(y,s,n)):E!==m&&E!=v||(j=!0,y.nodeValue=s.nodeValue),j){s=l,y=u;continue e}}d(y,e,n),y=u}}i&&((f=x[i])?(p(f,s,!0),s=f):A[i]=s),w(s)!==!1&&(e.appendChild(s),C(s)),s.nodeType===h&&(i||s.firstChild)&&M.push(s),s=l,y=u}for(;y;)u=y.nextSibling,d(y,e,n),y=u}var L=g[e.nodeName];L&&L(e,t)}if(f||(f={}),"string"==typeof t)if("#document"===e.nodeName||"HTML"===e.nodeName){var y=t;t=document.createElement("html"),t.innerHTML=y}else t=r(t);var x={},A={},N=f.getNodeKey||l,w=f.onBeforeNodeAdded||o,C=f.onNodeAdded||o,k=f.onBeforeElUpdated||f.onBeforeMorphEl||o,O=f.onElUpdated||o,T=f.onBeforeNodeDiscarded||o,E=f.onNodeDiscarded||o,S=f.onBeforeElChildrenUpdated||f.onBeforeMorphElChildren||o,j=f.childrenOnly===!0,M=[],L=e,_=L.nodeType,R=t.nodeType;if(!j)if(_===h)R===h?b(e,t)||(E(e),L=u(e,i(t.nodeName,t.namespaceURI))):L=t;else if(_===m||_===v){if(R===_)return L.nodeValue=t.nodeValue,L;L=t}if(L===t)E(e);else{p(L,t,!1,j);var F=function(e){for(var t=e.firstChild;t;){var r=t.nextSibling,o=N(t);if(o){var i=x[o];if(i&&b(t,i)){if(t.parentNode.replaceChild(i,t),p(i,t,!0),t=r,n(x))return!1;continue}}t.nodeType===h&&F(t),t=r}};if(!n(x))e:for(;M.length;){var P=M;M=[];for(var B=0;B<P.length;B++)if(F(P[B])===!1)break e}for(var D in x)if(x.hasOwnProperty(D)){var G=x[D];E(G),s(G)}}return!j&&L!==e&&e.parentNode&&e.parentNode.replaceChild(L,e),L}var c,s,d="undefined"!=typeof document?document.body||document.createElement("div"):{},p="http://www.w3.org/1999/xhtml",h=1,m=3,v=8;s=d.hasAttributeNS?function(e,t,n){return e.hasAttributeNS(t,n)}:d.hasAttribute?function(e,t,n){return e.hasAttribute(n)}:function(e,t,n){return!!e.getAttributeNode(n)};var g={OPTION:function(e,t){e.selected=t.selected,e.selected?e.setAttribute("selected",""):e.removeAttribute("selected","")},INPUT:function(e,t){e.checked=t.checked,e.checked?e.setAttribute("checked",""):e.removeAttribute("checked"),e.value!==t.value&&(e.value=t.value),s(t,null,"value")||e.removeAttribute("value"),e.disabled=t.disabled,e.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n),e.firstChild&&(e.firstChild.nodeValue=n)}},b=function(e,t){return e.nodeName===t.nodeName&&e.namespaceURI===t.namespaceURI};e.exports=f},function(e,t,n){function r(e){c[e][0]&&0===c[e][2]&&(c[e][0](),c[e][2]=1)}function o(e){c[e][1]&&1===c[e][2]&&(c[e][1](),c[e][2]=0)}function i(e,t,n){if(c[e.oldValue]){var r=e.target.getAttribute(d);return a(e.oldValue,r)?void(c[r]=c[e.oldValue]):void Object.keys(c).forEach(function(o){e.oldValue===o&&n(o),r===o&&t(o)})}}function a(e,t){return c[e][3]===c[t][3]}function u(e,t){for(var n=Object.keys(c),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(d)){var o=e[r].getAttribute(d);n.forEach(function(e){o===e&&t(e)})}e[r].childNodes.length>0&&u(e[r].childNodes,t)}}var l=n(9),f=n(11),c=Object.create(null),s="onloadid"+(new Date%9e6).toString(36),d="data-"+s,p=0;if(f&&f.MutationObserver){var h=new MutationObserver(function(e){if(!(c.length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==d?(u(e[t].removedNodes,o),u(e[t].addedNodes,r)):i(e[t],r,o)});h.observe(l.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[d]})}e.exports=function m(e,t,n){return t=t||function(){},n=n||function(){},e.setAttribute(d,"o"+p),c["o"+p]=[t,n,0,m.caller],p+=1,e}},function(e,t,n){var r=n(8),o=n(13),i=n(16);e.exports=r,e.exports.update=function(e,t,n){function r(e,t){for(var r=n.events||i,o=0;o<r.length;o++){var a=r[o];t[a]?e[a]=t[a]:e[a]&&(e[a]=void 0)}("INPUT"===e.nodeName&&"file"!==e.type||"TEXTAREA"===e.nodeName||"SELECT"===e.nodeName)&&null===t.getAttribute("value")&&(t.value=e.value)}return n||(n={}),n.events!==!1&&(n.onBeforeMorphEl||(n.onBeforeMorphEl=r)),o(e,t,n)}},function(e,t){e.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},function(e,t){}]);