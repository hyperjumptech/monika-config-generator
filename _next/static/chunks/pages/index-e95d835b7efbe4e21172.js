_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("nKUr"),r=n("q1tI"),i=n("m/eG"),o=n("20a2"),c=n("ukxq"),l=n("9bat"),u="have_used",s="have_configuration_file";function d(){var e=Object(o.useRouter)(),t=Object(r.useState)(),n=t[0],d=t[1],f=Object(r.useRef)(null),b=function(){var e=Object(r.useContext)(l.a).handleSetProbes,t=Object(r.useContext)(c.a).handleSetNotifications;return function(n){return new Promise((function(a,r){var i=new FileReader;i.onload=function(){try{var n=JSON.parse(String(i.result)),o=n.probes,c=n.notifications;o&&e(o),c&&t(c),a()}catch(l){r(l)}},i.readAsText(n)}))}}();return Object(a.jsx)(i.f,{children:Object(a.jsx)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:Object(a.jsxs)("form",{children:[Object(a.jsxs)("fieldset",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("legend",{className:"text-base sm:text-lg font-medium",children:"Monika Configuration Generator"}),Object(a.jsxs)("p",{className:"text-sm sm:text-lg text-gray-400",children:["Here you can create a configuration file for"," ",Object(a.jsx)("a",{href:"https://hyperjumptech.github.io/monika/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("u",{children:"Monika"})}),". ",Object(a.jsx)("br",{}),"Let's get started."]})]}),Object(a.jsxs)("div",{className:"mt-12 space-y-4",children:[Object(a.jsx)(i.g,{name:"condition",onClick:function(e){return d(e)},value:"new",help:"Select this if you have never tried Monika before. We will guide you one step at a time.",children:"I'm new to Monika"}),Object(a.jsx)(i.g,{name:"condition",onClick:function(e){return d(e)},value:u,help:"Select this if you want to jump into customizing Monika's configuration.",children:"I have used Monika before"}),Object(a.jsx)(i.g,{name:"condition",onClick:function(e){return d(e)},value:s,help:"Select this if you want to edit your configuration file.",children:"I have a configuration file"})]})]}),Object(a.jsxs)("div",{className:"mt-12 py-3",children:[Object(a.jsx)(i.a,{onClick:function(t){var a;switch(t.preventDefault(),console.log(t.target,"Click Next"),n){case"new":e.push("/what-do-you-want");break;case u:break;case s:null===(a=f.current)||void 0===a||a.click()}},children:"Next"}),Object(a.jsx)("input",{ref:f,type:"file",accept:"application/json",className:"hidden h-0 w-0","aria-hidden":"true",onChange:function(t){var n,a=null===(n=t.target.files)||void 0===n?void 0:n[0];a&&b(a).then((function(){e.push("/advanced")})).catch((function(e){console.log(e.message)}))}})]})]})})})}},"7Cbv":function(e,t,n){"use strict";var a,r=new Uint8Array(16);function i(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(e){return"string"===typeof e&&o.test(e)},l=[],u=0;u<256;++u)l.push((u+256).toString(16).substr(1));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n};t.a=function(e,t,n){var a=(e=e||{}).random||(e.rng||i)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return s(a)}},"9bat":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n("nKUr"),r=n("rePB"),i=n("q1tI"),o=n("7Cbv");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(i.createContext)({probeData:[],handleSetProbes:function(){},handleAddProbe:function(){},handleRemoveProbe:function(){}}),s=function(e){var t=e.children,n=Object(i.useState)([]),r=n[0],c=n[1];return Object(a.jsx)(u.Provider,{value:{probeData:r,handleSetProbes:function(e){c(e)},handleAddProbe:function(e){var t=r.concat(l(l({},e),{},{id:Object(o.a)()}));c(t)},handleRemoveProbe:function(e){var t=r.filter((function(t){return t.id!==e.id}));c(t)}},children:t})}},qIcA:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=[{label:"Recipient Emails (comma separated)",name:"recipients"}],r=[{label:"SMTP (E-mail)",name:"smtp",fields:[{label:"SMTP Hostname",name:"hostname"},{label:"SMTP Port",name:"port"},{label:"SMTP Username",name:"username"},{label:"SMTP Password",name:"password"}].concat(a),defaultValue:{hostname:"",port:0,username:"",password:"",recipients:[]}}],i=[{label:"Mailgun",name:"mailgun",fields:[{label:"API Key",name:"apiKey",info:"Lorem ipsum dolor sit amet"},{label:"Domain",name:"domain",info:"Lorem ipsum dolor sit amet"}].concat(a),defaultValue:{apiKey:"",domain:"",recipients:[]}}],o=[{label:"Sengrid",name:"sengrid",fields:[{label:"API Key",name:"apiKey",info:"Lorem ipsum dolor sit amet"}].concat(a),defaultValue:{apiKey:"",recipients:[]}}],c=[r,i,o,[{label:"Slack",name:"slack",fields:[{label:"Incoming Webhook URL",name:"url"}],defaultValue:{url:"",body:{url:"",time:"",alert:""}}}],[{label:"Teams",name:"teams",fields:[{label:"Incoming Webhook URL",name:"url"}],defaultValue:{url:"",body:{url:"",time:"",alert:"",status:""}}}],[{label:"Telegram",name:"telegram",fields:[{label:"BOT Token",name:"bot_token"},{label:"Group ID",name:"group_id"}],defaultValue:{bot_token:"",group_id:"",body:{url:"",time:"",alert:""}}}],[{label:"Webhook",name:"webhook",fields:[{label:"Webhook URL",name:"url"}],defaultValue:{url:"",body:{url:"",time:"",alert:""}}}]].flat()},ukxq:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return s}));var a=n("nKUr"),r=n("rePB"),i=n("q1tI"),o=n("qIcA"),c=n("7Cbv");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=Object(i.createContext)({notificationData:[],handleSetNotifications:function(){},handleAddNotification:function(){},handleRemoveNotification:function(){},handleUpdateNotificationType:function(){},handleUpdateNotificationData:function(){}}),d=function(e){var t=e.children,n=Object(i.useState)([{id:Object(c.a)().split("-")[0],type:"smtp",data:o.b[0].defaultValue}]),r=n[0],l=n[1];return Object(a.jsx)(s.Provider,{value:{notificationData:r,handleSetNotifications:function(e){l(e)},handleAddNotification:function(){var e=Object(c.a)().split("-")[0],t=r.concat({id:e,type:"smtp",data:o.b[0].defaultValue});l(t)},handleRemoveNotification:function(e){var t=r.filter((function(t){return t.id!==e}));l(t)},handleUpdateNotificationType:function(e){var t=e.id,n=e.type,a=r.map((function(e){var a;return e.id===t?{id:t,type:n,data:null===(a=o.a.find((function(e){return e.name===n})))||void 0===a?void 0:a.defaultValue}:e}));l(a)},handleUpdateNotificationData:function(e){var t,n=r.find((function(t){return t.id===e.id})),a=null!==(t=null===n||void 0===n?void 0:n.data)&&void 0!==t?t:{};a[e.field]=e.value;var i=r.map((function(t){return t.id===e.id?u(u({},t),{},{data:a}):t}));l(i)}},children:t})}}},[["/EDR",0,2,5,4,1,3]]]);