!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var i,o,a,u,f,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,s=t,u=e.apply(r,n)}function O(e){return s=e,f=setTimeout(h,t),c?p(e):u}function T(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function h(){var e=b();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-s)):n}(e))}function w(e){return f=void 0,m&&i?p(e):(i=o=void 0,u)}function S(){var e=b(),n=T(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=o=f=void 0},S.flush=function(){return void 0===f?u:w(b())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var O,T=document.querySelector(".feedback-form"),h={},w=T.elements.email,S=T.elements.message;T.addEventListener("input",e(t)((function(e){"email"===e.target.name&&(h.email=e.target.value);"message"===e.target.name&&(h.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),T.addEventListener("submit",(function(e){if(e.preventDefault(),""!==h.email&&void 0!==h.email&&""!==h.message&&void 0!==h.message)return console.log(h),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),void(h={})})),(O=JSON.parse(localStorage.getItem("feedback-form-state")))&&(w.value=O.email?O.email:"",S.value=O.message?O.message:"",h.email=O.email,h.message=O.message)}();
//# sourceMappingURL=03-feedback.56b7d256.js.map