(self.webpackChunkaaron_cox_personal_website=self.webpackChunkaaron_cox_personal_website||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!i(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),m.canUseDOM?t(c):n&&(c=n(c))}var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(m,"canUseDOM",s),m}}},3203:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Be}});var r,a,i,o,s=n(7294),c=n(5444),l=n(5697),u=n.n(l),m=n(4839),f=n.n(m),p=n(2993),d=n.n(p),h=n(6494),b=n.n(h),y="bodyAttributes",v="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),x="cssText",T="href",O="http-equiv",N="innerHTML",k="itemprop",A="name",S="property",j="rel",C="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",z="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),H=[E.NOSCRIPT,E.SCRIPT,E.STYLE],q="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=Z(e,E.TITLE),n=Z(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},V=function(e){return Z(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==N&&s!==x&&s!==k||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=b()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;le(E.BODY,r),le(E.HTML,a),ce(m,f);var p={baseTag:ue(E.BASE,n),linkTags:ue(E.LINK,i),metaTags:ue(E.META,o),noscriptTags:ue(E.NOSCRIPT,s),scriptTags:ue(E.SCRIPT,l),styleTags:ue(E.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},se=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=se(e)),le(E.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)n.removeAttribute(i[m]);a.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==o.join(",")&&n.setAttribute(q,o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+q+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===N)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(q,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,a=fe(n,r),[s.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=me(n),i=se(t);return a?"<"+e+" "+q+'="true" '+a+">"+Q(i,r)+"</"+e+">":"<"+e+" "+q+'="true">'+Q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===N||n===x){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===N||e===x)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Q(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===H.indexOf(e);return t+"<"+e+" "+q+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:pe(E.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(v,a,r),link:pe(E.LINK,i,r),meta:pe(E.META,o,r),noscript:pe(E.NOSCRIPT,s,r),script:pe(E.SCRIPT,c,r),style:pe(E.STYLE,l,r),title:pe(E.TITLE,{title:m,titleAttributes:f},r)}},he=f()((function(e){return{baseTag:$([T,P],e),bodyAttributes:G(y,e),defer:Z(e,z),encode:Z(e,M),htmlAttributes:G(v,e),linkTags:X(E.LINK,[j,T],e),metaTags:X(E.META,[A,w,O,S,k],e),noscriptTags:X(E.NOSCRIPT,[N],e),onChangeClientState:V(e),scriptTags:X(E.SCRIPT,[C,N],e),styleTags:X(E.STYLE,[x],e),title:J(e),titleAttributes:G(g,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),be=(a=he,o=i=function(e){function t(){return F(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case E.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case E.BODY:return Y({},a,{bodyAttributes:Y({},i)});case E.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(W(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind;var ye=n(4694);function ve(e){return ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve(e)}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function xe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Te(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Oe(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function Ne(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),a=Oe(t.slice(0,r)),i=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[a]=i,e}),{})}var ke=!1;try{ke=!0}catch(Fe){}function Ae(e){return ye.parse.icon?ye.parse.icon(e):null===e?null:"object"===ve(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function Se(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ge({},e,t):{}}function je(e){var t=e.forwardedRef,n=xe(e,["forwardedRef"]),r=n.icon,a=n.mask,i=n.symbol,o=n.className,s=n.title,c=n.titleId,l=Ae(r),u=Se("classes",[].concat(Te(function(e){var t,n=e.spin,r=e.pulse,a=e.fixedWidth,i=e.inverse,o=e.border,s=e.listItem,c=e.flip,l=e.size,u=e.rotation,m=e.pull,f=(ge(t={"fa-spin":n,"fa-pulse":r,"fa-fw":a,"fa-inverse":i,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),ge(t,"fa-rotate-".concat(u),null!=u&&0!==u),ge(t,"fa-pull-".concat(m),null!=m),ge(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),Te(o.split(" ")))),m=Se("transform","string"==typeof n.transform?ye.parse.transform(n.transform):n.transform),f=Se("mask",Ae(a)),p=(0,ye.icon)(l,we({},u,{},m,{},f,{symbol:i,title:s,titleId:c}));if(!p)return function(){var e;!ke&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var d=p.abstract,h={ref:t};return Object.keys(n).forEach((function(e){je.defaultProps.hasOwnProperty(e)||(h[e]=n[e])})),Ce(d[0],h)}je.displayName="FontAwesomeIcon",je.propTypes={border:u().bool,className:u().string,mask:u().oneOfType([u().object,u().array,u().string]),fixedWidth:u().bool,inverse:u().bool,flip:u().oneOf(["horizontal","vertical","both"]),icon:u().oneOfType([u().object,u().array,u().string]),listItem:u().bool,pull:u().oneOf(["right","left"]),pulse:u().bool,rotation:u().oneOf([0,90,180,270]),size:u().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:u().bool,symbol:u().oneOfType([u().bool,u().string]),title:u().string,transform:u().oneOfType([u().string,u().object]),swapOpacity:u().bool},je.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var Ce=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var a=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=Ne(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[Oe(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=xe(r,["style"]);return i.attrs.style=we({},i.attrs.style,{},s),t.apply(void 0,[n.tag,we({},i.attrs,{},c)].concat(Te(a)))}.bind(null,s.createElement),Pe=n(7190),Ie=function(){return s.createElement(s.Fragment,null,s.createElement("section",{className:"hero is-primary mb-2"},s.createElement("div",{className:"hero-body"},s.createElement("nav",{className:"navbar"},s.createElement("div",{className:"container"},s.createElement("div",{className:"navbar-brand"},s.createElement("div",{className:"navbar-item has-permanent-marker-font is-header-element is-header-brand has-text-light"},"Aaron Cox"),s.createElement("span",{className:"navbar-burger","data-target":"navbarMenuHeroA"},s.createElement("span",null),s.createElement("span",null),s.createElement("span",null))),s.createElement("div",{id:"navbarMenuHeroA",className:"navbar-menu"},s.createElement("div",{className:"navbar-end is-header-element"},s.createElement("a",{className:"navbar-item has-text-light",href:"https://github.com/aaronmcox"},s.createElement(je,{icon:Pe.zhw,size:"2x",className:""})),s.createElement("a",{className:"navbar-item mr-2 has-text-light",href:"https://www.linkedin.com/in/aaroncox-dev/"},s.createElement(je,{icon:Pe.D9H,size:"2x",className:""})))))))))},Le=function(){return s.createElement("footer",{className:"footer has-background-light"},s.createElement("div",{className:"container has-text-centered"},s.createElement("p",{className:"has-text-dark is-size-4"},"Thanks for stopping by!")))},ze=function(e){var t=e.children;(0,c.useStaticQuery)("3649515864");return s.createElement(s.Fragment,null,s.createElement(be,null,s.createElement("link",{rel:"stylesheet",href:"https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"}),s.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),s.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",rel:"stylesheet"}),s.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap",rel:"stylesheet"})),s.createElement(Ie,null),s.createElement("main",null,t),s.createElement(Le,null))},Me=n(410);function _e(){return s.createElement("div",{className:"has-background-dark p-6 mb-2"},s.createElement("div",{className:"container p-6"},s.createElement("div",{className:"columns"},s.createElement("div",{className:"column is-narrow-desktop"},s.createElement("figure",{className:"image"},s.createElement(Me.S,{src:"../images/me-jenga-square.jpg",alt:"Me, in my backyard, learning on a giant Jenga set, grinning like a fool.",className:"has-ratio is-centered",style:{borderRadius:"1rem",maxWidth:"500px"},__imageData:n(7367)}))),s.createElement("div",{className:"column"},s.createElement("h1",{className:"title is-1 has-text-info has-permanent-marker-font pb-1"},"Hello!"),s.createElement("h3",{className:"subtitle is-3 has-text-light has-text-weight-bold pb-3"},"I'm Aaron and I develop software."),s.createElement("p",{className:"block has-text-light is-size-5"},"I currently do it for ",s.createElement("a",{href:"https://www.beckman.com",target:"_blank",className:"has-text-info"},"Hinge Health")," in Owensboro, KY."),s.createElement("p",{className:"block has-text-light is-size-5"},"I attended ",s.createElement("a",{href:"https://www.indstate.edu",target:"_blank",className:"has-text-primary"},"Indiana State University")," in Terre Haute, Indiana. I studied computer science and received M.S. and B.S. degrees for my efforts. I gravitated to multidisciplinary work, participating in bioinformatics and physics projects.")))))}var Re=n(8014),De=function(){return s.createElement("section",{className:"hero is-primary p-6 mb-2"},s.createElement("div",{className:"hero-head"},s.createElement("div",{className:"container has-text-centered p-6"},s.createElement("p",{className:"title is-size-1 has-permanent-marker-font has-text-light"},"Some Things I Like"))),s.createElement("div",{className:"hero-body"},s.createElement("div",{className:"container p-3"},s.createElement("div",{className:"columns is-desktop"},s.createElement("div",{className:"column has-text-centered m-1"},s.createElement("div",{className:"box has-background-light pt-6 pb-6"},s.createElement("p",{className:"heading has-text-dark is-size-3"},"Hiking"),s.createElement("p",{className:"title has-text-dark is-size-3"},s.createElement(je,{icon:Re.e6E})))),s.createElement("div",{className:"column has-text-centered m-1"},s.createElement("div",{className:"box has-background-dark pt-6 pb-6"},s.createElement("p",{className:"heading has-text-light is-size-3"},"BBQ"),s.createElement("p",{className:"title has-text-light is-size-3"},s.createElement(je,{icon:Re.Tp2})))),s.createElement("div",{className:"column has-text-centered m-1"},s.createElement("div",{className:"box pacers-gold-background pt-6 pb-6"},s.createElement("p",{className:"heading is-size-3 pacers-blue-color"},"Basketball"),s.createElement("p",{className:"title pacers-blue-color is-size-3"},s.createElement(je,{icon:Re.Elv})))),s.createElement("div",{className:"column has-text-centered m-1"},s.createElement("div",{className:"box has-background-dark pt-6 pb-6"},s.createElement("p",{className:"heading has-text-light is-size-3"},"Reading"),s.createElement("p",{className:"title has-text-light is-size-3"},s.createElement(je,{icon:Re.sth})))),s.createElement("div",{className:"column has-text-centered m-1"},s.createElement("div",{className:"box pacers has-background-light pt-6 pb-6"},s.createElement("p",{className:"heading is-size-3"},"Cooking"),s.createElement("p",{className:"title has-text-dark is-size-3"},s.createElement(je,{icon:Re.XGw}))))))))},He=function(e){var t,n,r,a,i={name:null!==(t=e.name)&&void 0!==t?t:"",value:null!==(n=e.value)&&void 0!==n?n:0,max:null!==(r=e.max)&&void 0!==r?r:10,color:null!==(a=e.color)&&void 0!==a?a:"primary"};return s.createElement("div",{className:"field is-horizontal"},s.createElement("div",{className:"field-label"},s.createElement("label",{className:"has-text-"+i.color+"-light"},i.name)),s.createElement("div",{className:"field-body"},s.createElement("div",{className:"field"},s.createElement("progress",{style:{width:"85%"},className:"progress is-"+i.color+" has-background-dark is-small",value:i.value,max:i.max},i.value))))},qe=function(){return s.createElement("section",{className:"hero is-dark p-6 mb-2"},s.createElement("div",{className:"hero-head"},s.createElement("div",{className:"container has-text-centered p-6"},s.createElement("p",{className:"title is-size-1 has-permanent-marker-font has-text-light"},"Skills & Tech"),s.createElement("p",{className:"subtitle is-size-6"},"(Ratings relative only to myself)"))),s.createElement("div",{className:"hero-body"},s.createElement("div",{className:"container"},s.createElement("div",{className:"columns"},s.createElement("div",{className:"column is-3 is-narrow has-permanent-marker-font is-size-3"},"Languages"),s.createElement("div",{className:"column"},s.createElement(He,{name:"C#",value:9.5,max:10}),s.createElement(He,{name:"TypeScript",value:8,max:10}),s.createElement(He,{name:"JavaScript",value:8,max:10}),s.createElement(He,{name:"C",value:6,max:10}),s.createElement(He,{name:"Python",value:6,max:10}),s.createElement(He,{name:"SQL",value:6,max:10}),s.createElement(He,{name:"English",value:4,max:10}),s.createElement(He,{name:"CSS",value:4,max:10}),s.createElement(He,{name:"Java",value:3,max:10}),s.createElement(He,{name:"C++",value:2,max:10}),s.createElement(He,{name:"Delphi",value:.1,max:10}))),s.createElement("div",{className:"columns"},s.createElement("div",{className:"column is-3 is-narrow has-permanent-marker-font is-size-3"},"Databases"),s.createElement("div",{className:"column"},s.createElement(He,{name:"SQL Server",value:7,max:10,color:"info"}),s.createElement(He,{name:"MySQL / MariaDB",value:5,max:10,color:"info"}),s.createElement(He,{name:"MongoDB",value:5,max:10,color:"info"}),s.createElement(He,{name:"SQLite",value:2,max:10,color:"info"}))),s.createElement("div",{className:"columns"},s.createElement("div",{className:"column is-3 has-permanent-marker-font is-size-3"},"Frameworks"),s.createElement("div",{className:"column"},s.createElement(He,{name:"ASP.NET",value:9,max:10}),s.createElement(He,{name:"React",value:8,max:10}),s.createElement(He,{name:"WPF",value:8,max:10}),s.createElement(He,{name:"Angular",value:7,max:10}),s.createElement(He,{name:"NUnit",value:6,max:10}),s.createElement(He,{name:"Gatsby",value:6,max:10}),s.createElement(He,{name:"express",value:6,max:10}),s.createElement(He,{name:"Flask",value:3,max:10}),s.createElement(He,{name:"xUnit",value:3,max:10}))))))},Be=function(){return s.createElement(ze,null,s.createElement(_e,null),s.createElement(De,null),s.createElement(qe,null))}},7367:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#888888","images":{"fallback":{"src":"/static/71f40fa623b78f6f223581ffb9eaa38c/09068/me-jenga-square.jpg","srcSet":"/static/71f40fa623b78f6f223581ffb9eaa38c/e16e2/me-jenga-square.jpg 275w,\\n/static/71f40fa623b78f6f223581ffb9eaa38c/34063/me-jenga-square.jpg 551w,\\n/static/71f40fa623b78f6f223581ffb9eaa38c/09068/me-jenga-square.jpg 1101w","sizes":"(min-width: 1101px) 1101px, 100vw"},"sources":[{"srcSet":"/static/71f40fa623b78f6f223581ffb9eaa38c/04d56/me-jenga-square.webp 275w,\\n/static/71f40fa623b78f6f223581ffb9eaa38c/aa4eb/me-jenga-square.webp 551w,\\n/static/71f40fa623b78f6f223581ffb9eaa38c/9b8e4/me-jenga-square.webp 1101w","type":"image/webp","sizes":"(min-width: 1101px) 1101px, 100vw"}]},"width":1101,"height":1097}')}}]);
//# sourceMappingURL=component---src-pages-index-js-a41603a5f32463cbbe53.js.map