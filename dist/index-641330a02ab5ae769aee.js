!function(){"use strict";var e,t={2178:function(e,t,n){n(397),n(4571),n(405);var r=n(6162),a=n(2708),o=n.n(a),i=n(338),c=n(7888),l=n(7485),u=n.n(l),s=n(6129),d=n.n(s),p={nav:"example__nav--sauxV","example-section":"example__example-section--h6bgl"},f=n(3460),m=n.n(f);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=e.literal,n=e.language,a=d().highlight(t,d().languages[n]),o="language-"+n;return r.createElement("pre",{className:o},r.createElement("code",{dangerouslySetInnerHTML:{__html:a},className:o}))};y.propTypes={literal:o().string,language:o().string};var g=function(){var e=(0,r.useRef)(null),t=(0,r.useRef)(null),n=(0,r.useRef)(null),a=v((0,r.useState)(""),2),o=a[0],i=a[1],l=v((0,r.useState)(""),2),s=l[0],d=l[1],f=v((0,r.useState)(""),2),h=f[0],g=f[1];return r.createElement("div",{className:p.wrapper},r.createElement("div",{id:"activationSection",className:p["example-section"]},r.createElement("div",{style:u()({flex:"0 0 50%"})},r.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.createElement("div",null,r.createElement("div",{style:{maxWidth:"300px",margin:"10px auto"}},r.createElement("h3",null,'Input type "alphanumeric"')),r.createElement("div",null,r.createElement(m(),{initialFocus:!0,wrapperRef:n,id:"activation",codeLength:6,type:"alphanumeric",hide:!1,placeholder:"",disabled:!1,value:h,onChange:function(e){g(e)},letterCase:"upper",customStyleComponent:{maxWidth:"300px",margin:"0 auto"}}))),r.createElement("div",{style:{maxWidth:"300px",margin:"0 auto"}},r.createElement("input",{type:"submit",className:"submit-btn",onClick:function(){for(var e=!0,t=0;t<6;t+=1)if(void 0===h[t]){n.current.children[t]&&n.current.children[t].click(),e=!1;break}e&&6===h.length&&alert("activation success")}})))),r.createElement("div",{style:u()({flex:"0 0 50%"})},r.createElement("div",{style:{fontSize:"12px"}},r.createElement(c.D,{source:"```javascript\n<ReactCodesInput\n  initialFocus={false}\n  wrapperRef={$activationWrapperRef}\n  id=\"activation\"\n  codeLength={10}\n  type=\"alphanumeric\" // ['alphanumeric', 'alpha', 'number']\n  hide={false}\n  placeholder=\"\"\n  value={activation}\n  onChange={res => {\n    setActivation(res);\n  }}\n  letterCase=\"upper\"\n  customStyleComponent={{\n    maxWidth: '300px',\n    margin: '0 auto'\n  }}\n/>\n ```",renderers:{CodeBlock:y}})))),r.createElement("div",{id:"passwordSection",className:p["example-section"]},r.createElement("div",{style:u()({flex:"0 0 50%"})},r.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.createElement("div",null,r.createElement("div",{style:{maxWidth:"300px",margin:"10px auto"}},r.createElement("h3",null,'Input type "alpha"')),r.createElement("div",null,r.createElement(m(),{initialFocus:!1,wrapperRef:e,id:"password",codeLength:6,type:"alpha",hide:!0,placeholder:"",value:o,onChange:function(e){i(e)},customStyleComponent:{maxWidth:"300px",margin:"0 auto"}}))),r.createElement("div",{style:{maxWidth:"300px",margin:"0 auto"}},r.createElement("input",{type:"submit",className:"submit-btn",onClick:function(){for(var t=!0,n=0;n<6;n+=1)if(void 0===o[n]){e.current.children[n]&&e.current.children[n].click(),t=!1;break}t&&6===o.length&&alert("password success")}})))),r.createElement("div",{style:u()({flex:"0 0 50%"})},r.createElement("div",{style:{fontSize:"12px"}},r.createElement(c.D,{source:"```javascript\n<ReactCodesInput\n  initialFocus={true}\n  wrapperRef={$passwordWrapperRef}\n  id=\"password\"\n  codeLength={6}\n  type=\"alpha\" // ['alphanumeric', 'alpha', 'number']\n  hide={true}\n  placeholder=\"\"\n  value={password}\n  onChange={res => {\n    setPassword(res);\n  }}\n  customStyleComponent={{\n    maxWidth: '300px',\n    margin: '0 auto'\n  }}\n/>\n ```",renderers:{CodeBlock:y}})))),r.createElement("div",{id:"pinSection",className:p["example-section"]},r.createElement("div",{style:u()({flex:"0 0 50%"})},r.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.createElement("div",null,r.createElement("div",{style:{maxWidth:"300px",margin:"10px auto"}},r.createElement("h3",null,'Input type "number" only')),r.createElement("div",null,r.createElement(m(),{initialFocus:!1,wrapperRef:t,id:"pin",codeLength:4,type:"number",hide:!1,placeholder:"",value:s,onChange:function(e){d(e)},customStyleComponent:{maxWidth:"300px",margin:"0 auto"}}))),r.createElement("div",{style:{maxWidth:"300px",margin:"0 auto"}},r.createElement("input",{type:"submit",className:"submit-btn",onClick:function(){for(var e=!0,n=0;n<4;n+=1)if(void 0===s[n]){t.current.children[n]&&t.current.children[n].click(),e=!1;break}e&&4===s.length&&alert("pin success")}})))),r.createElement("div",{style:u()({flex:"0 0 50%"})},r.createElement("div",{style:{fontSize:"12px"}},r.createElement(c.D,{source:"```javascript\n<ReactCodesInput\n  initialFocus={false}\n  wrapperRef={$pinWrapperRef}\n  id=\"pin\"\n  codeLength={4}\n  type=\"number\" // ['alphanumeric', 'alpha', 'number']\n  hide={false}\n  placeholder=\"\"\n  value={pin}\n  onChange={res => {\n    setPin(res);\n  }}\n  customStyleComponent={{\n    maxWidth: '300px',\n    margin: '0 auto'\n  }}\n/>\n ```",renderers:{CodeBlock:y}})))))};i.render(r.createElement(g,null),document.getElementById("root"))},7442:function(e,t,n){n.r(t),t.default={component:"react-codes-input__component--hMZiq",disabled:"react-codes-input__disabled--yBreD",code:"react-codes-input__code--ot5P7",wrapper:"react-codes-input__wrapper--deP_G","code-wrapper":"react-codes-input__code-wrapper--nQ3Hf","entered-value":"react-codes-input__entered-value--AwNna",hide:"react-codes-input__hide--Hnm2o",active:"react-codes-input__active--OvmED","code-wrapper--focus":"react-codes-input__code-wrapper--focus--FaRc2",entered:"react-codes-input__entered--bXk53","blink-empty":"react-codes-input__blink-empty--ZYK8w"}},5086:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},c=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},l=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(6162)),d=n(9418),p=u(n(7442));"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var e=this;function t(t){return function(n){var r=e.className.split(/\s+/g),a=r.indexOf(n);t(r,a,n),e.className=r.join(" ")}}return{add:t((function(e,t,n){~t||e.push(n)})),remove:t((function(e,t){~t&&e.splice(t,1)})),toggle:t((function(e,t,n){~t?e.splice(t,1):e.push(n)})),contains:function(t){return!!~e.className.split(/\s+/g).indexOf(t)},item:function(t){return e.className.split(/\s+/g)[t]||null}}}});var f=(0,d.getRandomId)(),m=["alphanumeric","alpha","number"];t.default=function(e){var t=e.initialFocus,n=void 0!==t&&t,a=e.wrapperRef,o=e.codeLength,i=void 0===o?6:o,u=e.id,v=void 0===u?f:u,h=e.onChange,y=e.type,g=void 0===y?m[0]:y,E=e.letterCase,b=void 0===E?d.CASE_TYPES[0]:E,x=e.value,_=void 0===x?"":x,w=e.disabled,C=void 0!==w&&w,S=e.hide,k=void 0!==S&&S,O=e.focusColor,A=void 0===O?"#007bff":O,L=e.classNameComponent,N=void 0===L?"":L,j=e.classNameWrapper,I=void 0===j?"":j,P=e.classNameCodeWrapper,R=void 0===P?"":P,W=e.classNameEnteredValue,B=void 0===W?"":W,M=e.classNameCode,D=void 0===M?"":M,F=e.classNameCodeWrapperFocus,T=void 0===F?"":F,Y=e.customStyleComponent,H=void 0===Y?{}:Y,$=e.customStyleWrapper,z=void 0===$?{}:$,U=e.customStyleCodeWrapper,V=void 0===U?{}:U,Z=e.customStyleEnteredValue,q=void 0===Z?{}:Z,G=e.customStyleCode,K=void 0===G?{}:G,Q=e.customStyleCodeWrapperFocus,X=void 0===Q?{}:Q,J=e.placeholder,ee=void 0===J?"":J,te=e.customStylePlaceholder,ne=void 0===te?{}:te,re=(0,s.useMemo)((function(){return l([],c(Array(i).keys()),!1)}),[]),ae=c((0,s.useState)(_),2),oe=ae[0],ie=ae[1],ce=c((0,s.useState)(!1),2),le=ce[0],ue=ce[1],se=(0,s.useRef)(null),de=(0,s.useCallback)((function(e){if(!se.current.contains(e.target))for(var t=0;t<re.length;t+=1)document.getElementById("".concat(v).concat(t)).classList.remove(p.default.active)}),[]);(0,s.useEffect)((function(){return n&&document.getElementById("".concat(v).concat(0)).click(),window.addEventListener("mousedown",de),window.addEventListener("touchstart",de),function(){window.removeEventListener("mousedown",de),window.removeEventListener("touchstart",de)}}),[]);var pe=(0,s.useCallback)((function(e){var t=e.keyCode;[37,38,39,40].indexOf(t)>=0?e.preventDefault():g!==m[2]||69!==t||e.preventDefault()}),[g]);(0,s.useEffect)((function(){return se.current.addEventListener("keydown",pe,!1),se.current.addEventListener("keypress",pe,!1),function(){se.current.removeEventListener("keydown",pe),se.current.removeEventListener("keypress",pe)}}),[g]),(0,s.useEffect)((function(){ie((0,d.getCased)(_,b))}),[_,b]),(0,s.useEffect)((function(){document.getElementById(v).removeAttribute("value")}));var fe=(0,s.useCallback)((function(){var e=document.getElementById(v).value,t="";switch(g){case m[0]:t=(0,d.getAlphanumeric)(e);break;case m[1]:t=(0,d.getAlpha)(e);break;case m[2]:t=(0,d.getNumeric)(e);break;default:t=(0,d.getAlphanumeric)(e)}g===m[2]&&t.length>re.length||(t=(0,d.getCased)(t,b),ie(t),h&&h(t))}),[g,b,re]),me=(0,s.useCallback)((function(){ue(!0)}),[]),ve=(0,s.useCallback)((function(){ue(!1)}),[]),he=(0,s.useMemo)((function(){var e={};return g===m[2]&&(e.type="number",e.pattern="[0-9]*"),e}),[g]);return s.default.createElement("div",{ref:se,className:(0,d.cx)(p.default.component,C&&p.default.disabled,N),style:H},s.default.createElement("div",{ref:a,className:(0,d.cx)(p.default.wrapper,I),style:z},re.map((function(e,t){var n=t===re.length-1,a=void 0!==oe[t],o=!1,i={};return le&&(oe.length===t&&(o=!0),n&&oe.length-1===t&&(o=!0)),o&&(i.border="1px solid ".concat(A),i.boxShadow="0px 0px 5px 0px ".concat(A)),s.default.createElement("div",{key:t,id:"".concat(v).concat(t),onClick:function(){for(var e=0;e<re.length;e+=1)document.getElementById("".concat(v).concat(e)).classList.remove(p.default.active);var t=-1;for(e=0;e<re.length;e+=1)if(void 0===oe[e]){document.getElementById("".concat(v).concat(e)).click(),t=e;break}document.getElementById("".concat(v).concat(t))?document.getElementById("".concat(v).concat(t)).classList.add(p.default.active):document.getElementById("".concat(v).concat(re.length-1)).classList.add(p.default.active),document.getElementById(v).focus()},className:(0,d.cx)(p.default["code-wrapper"],R,o&&p.default.active,a&&p.default.entered),style:V},s.default.createElement("div",{className:(0,d.cx)(p.default["entered-value"],B,k&&a&&p.default.hide),style:q},void 0===oe[t]&&s.default.createElement("span",{style:r({color:"#ddd"},ne)},ee.split("")[t])," ",k?"":oe[t]),s.default.createElement("div",{className:(0,d.cx)(p.default.code,D),style:K},s.default.createElement("div",{className:(0,d.cx)(p.default["code-wrapper--focus"],T),style:r(r({},i),X)})))}))),s.default.createElement("input",r({id:v,autoComplete:"off",type:"password",value:oe,disabled:C,maxLength:re.length,onChange:fe,onFocus:me,onBlur:ve,style:{position:"absolute",opacity:"0",marginLeft:"-999px"}},he)))}},3460:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(5086));t.default=a.default},9418:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCased=t.getNumeric=t.getAlpha=t.getAlphanumeric=t.getRandomId=t.cx=t.CASE_TYPES=void 0,t.CASE_TYPES=["upper","lower"];t.cx=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=[],a=0;a<e.length;a+=1){var o=e[a];if(o){var i=typeof o;if("string"===i||"number"===i)r.push(o);else if(Array.isArray(o)&&o.length){var c=t.cx.apply(null,o);c&&r.push(c)}else if("object"===i)for(var l in o)({}).hasOwnProperty.call(o,l)&&o[l]&&r.push(l)}}return r.join(" ")};t.getRandomId=function(){return Math.random().toString(36).slice(-8)};t.getAlphanumeric=function(e){var t="";return String(e).split("").forEach((function(e){var n=e.toLowerCase().charCodeAt(0);(n>=48&&n<=57||n>=97&&n<=122)&&(t+=e)})),t};t.getAlpha=function(e){var t="";return String(e).split("").forEach((function(e){var n=e.toLowerCase().charCodeAt(0);n>=97&&n<=122&&(t+=e)})),t};t.getNumeric=function(e){var t="";return e.split("").forEach((function(e){var n=e.toLowerCase().charCodeAt(0);n>=48&&n<=57&&(t+=e)})),t};t.getCased=function(e,n){var r=t.CASE_TYPES.indexOf(n);if(!(r>=0))return e.toUpperCase();switch(r){case 0:return e.toUpperCase();case 1:return e.toLowerCase()}}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,a,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],o=e[s][2];for(var c=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(c=!1,o<i&&(i=o));if(c){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,a,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={826:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],c=n[1],l=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var s=l(r)}for(t&&t(n);u<i.length;u++)o=i[u],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},n=self.webpackChunkreact_codes_input=self.webpackChunkreact_codes_input||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[128],(function(){return r(2178)}));a=r.O(a)}();