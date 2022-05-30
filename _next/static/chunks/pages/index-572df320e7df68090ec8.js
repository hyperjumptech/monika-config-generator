(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1964:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),i=n(7294),o=n(1277),a=n(1163),s=n(6156),c=n(7874),u=n(7792),l=n(7180);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return e.map((function(e,t){var n,r=e.name,i=e.requests;if(!r){if(i.length>0){var o=e.requests;n=new URL(o[0].url).hostname.replaceAll(".","_")}else n="Probe ".concat(t);return h(h({},e),{},{name:n})}}))},p=function(e){return e.map((function(e){if(!e.alerts||0===e.alerts.length)return h(h({},e),{},{alerts:[(0,u.__)(),(0,u.NC)(2e3)]});if(e.alerts.some((function(e){return"string"===typeof e}))){var t=e.alerts.map((function(e){if("string"===typeof e){if("status-not-2xx"===e)return(0,u.__)();if(e.startsWith("response-time-greater-than-"))try{var t=function(e){var t=e.match(/(\d+)-(m?s)$/);if(!t)throw new Error("alert string does not contain valid time number");var n=Number(t[1]);return"s"===t[2]?1e3*n:n}(e);return(0,u.NC)(t)}catch(n){return null}}return e})).filter(Boolean);return h(h({},e),{},{alerts:t})}return e}))},m="new",g="have_used",v="have_configuration_file";function x(){var e=(0,a.useRouter)(),t=(0,i.useState)(),n=t[0],s=t[1],f=(0,i.useState)(""),h=f[0],x=f[1],b=(0,i.useRef)(null),j=function(){var e=(0,i.useContext)(u.A8).handleSetProbes,t=(0,i.useContext)(c.u).handleSetNotifications;return function(n){return new Promise((function(r,i){var o=new FileReader;o.onload=function(){try{var n=l.zD(String(o.result)),a=n.probes,s=n.notifications;if(!a)throw new Error("something wrong in probes key");var c=d(a),u=p(c);e(u),s&&t(s),r()}catch(f){i(f)}},o.readAsText(n)}))}}();return(0,r.jsxs)(o.Ar,{children:[(0,r.jsx)(o.$y,{description:"Web app to generate configuration file for Monika, the open source and free monitoring tool."}),(0,r.jsx)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:(0,r.jsxs)("form",{children:[(0,r.jsxs)("fieldset",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("legend",{className:"text-base sm:text-lg font-medium",children:"Monika Configuration Generator"}),(0,r.jsxs)("p",{className:"text-sm sm:text-lg text-gray-400",children:["Here you can create a configuration file for"," ",(0,r.jsx)("a",{className:"font-semibold bg-gradient-to-r from-purple to-aqua bg-clip-text text-transparent",href:"https://hyperjumptech.github.io/monika/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("u",{children:"Monika"})}),". ",(0,r.jsx)("br",{}),"Let's get started."]})]}),(0,r.jsxs)("div",{className:"mt-12 space-y-4",children:[(0,r.jsx)(o.Y8,{"data-testid":m,name:"condition",onClick:function(e){return s(e)},value:m,help:"Select this if you have never tried Monika before. We will guide you one step at a time.",children:"I'm new to Monika"}),(0,r.jsx)(o.Y8,{name:"condition",onClick:function(e){return s(e)},value:g,help:"Select this if you want to jump into customizing Monika's configuration.",children:"I have used Monika before"}),(0,r.jsx)(o.Y8,{name:"condition",onClick:function(e){return s(e)},value:v,help:"Select this if you want to edit your configuration file.",children:"I have a configuration file"})]})]}),(0,r.jsxs)("div",{className:"mt-12 py-3",children:[!!h&&(0,r.jsxs)("p",{className:"text-red-500 mb-4",children:["YAML file is not valid: ".concat(h,". Please check the right format from our "),(0,r.jsx)("a",{className:"underline font-bold text-black",href:"https://hyperjumptech.github.io/monika/overview",target:"_blank",rel:"noopener noreferrer",children:"docs"})]}),(0,r.jsx)(o.zx,{"data-testid":"next-button",onClick:function(t){var r;switch(t.preventDefault(),n){case m:e.push("/what-do-you-want");break;case g:e.push("/advanced");break;case v:null===(r=b.current)||void 0===r||r.click()}},children:"Next"}),(0,r.jsx)("input",{ref:b,type:"file",accept:"text/yaml",className:"hidden h-0 w-0","aria-hidden":"true",onChange:function(t){var n,r=null===(n=t.target.files)||void 0===n?void 0:n[0];r&&j(r).then((function(){e.push("/advanced")})).catch((function(e){x(e.message)}))}})]})]})})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1964)}])}},function(e){e.O(0,[774,523,799,277,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);