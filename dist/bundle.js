!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ColorTune=t():e.ColorTune=t()}(self,(function(){return function(){"use strict";var e={630:function(e,t,n){function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(e);for(var a in Array.isArray(n)?(t=i.classList).add.apply(t,r(n)):n&&i.classList.add(n),o)i[a]=o[a];return i}n.r(t),n.d(t,{make:function(){return i}})},424:function(e,t,n){var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".ce-color-tune--colorWrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.ce-color-tune--colorSelect {\n    width: 100%;\n    outline: none;\n    border-radius: 2px;\n    box-sizing: border-box;\n    background: transparent;\n}\n\n.ce-color-tune--colorIcon svg {\n    margin-right: 2px;\n    width: 12px;\n    height: 12px;\n}\n",""]),t.Z=o},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},548:function(e,t,n){var r=n(379),o=n.n(r),i=n(424);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},379:function(e,t,n){var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],l=t.base?c[0]+t.base:c[0],u=n[l]||0,s="".concat(l," ").concat(u);n[l]=u+1;var f=a(s),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:v(d,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var l=c(e,t),u=0;u<n.length;u++){var s=a(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=l}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(r),n.d(r,{default:function(){return o}}),n(548).toString();var t=n(630).make,o=function(){function n(e){var t=e.api,r=e.data,o=e.config,i=e.block;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.api=t,this.block=i,this.data=r||{color:null},this.colors=o.colors||[],this.colorOpacity=o.colorOpacity||.4,this._CSS={colorWrapper:"ce-color-tune--colorWrapper",colorIcon:"ce-color-tune--colorIcon",colorSelect:"ce-color-tune--colorSelect"}}var r,o,i;return r=n,i=[{key:"isTune",get:function(){return!0}}],(o=[{key:"wrap",value:function(e){return this.wrapper=t("div"),this.wrapper.append(e),this._applySelectedColor(),this.wrapper}},{key:"render",value:function(){var e=t("div");if(this.colors.length){var n=this.makeColorSelect();e.appendChild(n)}return e}},{key:"makeColorSelect",value:function(){var e=this,n=t("div",[this._CSS.colorWrapper]),r=t("div",this._CSS.colorIcon);r.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.21025 11.1659C4.81666 11.1659 3.6841 12.2868 3.6841 13.6662C3.6841 14.758 2.71153 15.3331 2 15.3331C2.77469 16.3499 4.10091 17 5.3682 17C7.22913 17 8.7364 15.5081 8.7364 13.6662C8.7364 12.2868 7.60384 11.1659 6.21025 11.1659ZM17.7505 3.35644L16.6264 2.24378C16.298 1.91874 15.7633 1.91874 15.4349 2.24378L7.89435 9.70732L10.21 11.9993L17.7505 4.53577C18.0832 4.20656 18.0832 3.68148 17.7505 3.35644Z"/>\n</svg>\n';var o=t("select",this._CSS.colorSelect);return this.colors.forEach((function(n){var r="string"==typeof n?{key:n,label:n}:n,i=r.key,a=r.label,c=t("option",[e._CSS.colorSelect]);c.value=i,c.text=a,c.selected=e.data.color===i,o.appendChild(c)})),o.addEventListener("change",(function(t){e.data.color=t.target.value,e._applySelectedColor()})),n.appendChild(r),n.appendChild(o),n}},{key:"save",value:function(){return this.data}},{key:"_applySelectedColor",value:function(){var e=this._getSelectedColor();this.wrapper.style.backgroundColor="transparent"!==e?this._hexToRgbA(e,this.colorOpacity):e}},{key:"_getSelectedColor",value:function(){var e=this;if(this.data.color){var t=this.colors.find((function(t){return"string"==typeof t?t===e.data.color:t.key===e.data.color}));if(t)return"string"==typeof t?t:t.color}return"transparent"}},{key:"_hexToRgbA",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+",".concat(n,")");throw new Error("EditorJS :: BlockTunes :: Unexpected Color Format. Color must be valid hex string, got "+e)}}])&&e(r.prototype,o),i&&e(r,i),n}()}(),r}()}));