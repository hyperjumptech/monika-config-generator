_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{E34x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return n("pHDb")}])},pHDb:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n("nKUr"),a=n("KQm4"),l=n("7Cbv"),i=n("IP2g"),c=n("wHSu"),o=n("m/eG"),s=n("rePB"),u=n("q1tI");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(){var e=function(e){var t=e.initialValues,n=Object(u.useState)(t),r=n[0],a=n[1];return{values:r,setFieldValue:function(e,t){a((function(n){return j(j({},n),{},Object(s.a)({},e,t))}))}}}({initialValues:{notificationChannel:"email",recipients:[{id:Object(l.a)(),email:""}]}}),t=e.values,n=e.setFieldValue,a=t.notificationChannel;return Object(r.jsx)(o.g,{children:Object(r.jsxs)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:[Object(r.jsx)(o.d.Item,{label:"How do you want to be notified when your website is down?",name:"notification-channel",children:Object(r.jsx)(o.i,{id:"notification-channel",value:a,onChange:function(e){return n("notificationChannel",e.target.value)},children:[{type:"email",label:"Email"},{type:"webhook",label:"Webhook"},{type:"slack",label:"Slack"},{type:"telegram",label:"Telegram"},{type:"whatsapp",label:"WhatsApp"},{type:"teams",label:"Microsoft Teams"},{type:"discord",label:"Discord"}].map((function(e){return Object(r.jsx)(o.j,{value:e.type,children:e.label},e.type)}))})}),"email"===a&&Object(r.jsx)(b,{formHelper:e}),("webhook"===a||"slack"===a||"teams"===a||"discord"===a)&&Object(r.jsx)(p,{formHelper:e}),"telegram"===a&&Object(r.jsx)(h,{formHelper:e}),"whatsapp"===a&&Object(r.jsx)(x,{formHelper:e}),Object(r.jsxs)("div",{className:"mt-12 py-3",children:[Object(r.jsx)(o.a,{onClick:function(){console.log("Click back")},outline:!0,className:"mr-7",children:"Back"}),Object(r.jsx)(o.a,{onClick:function(){console.log("Click next"),console.log(JSON.stringify(t,null,2))},children:"Next"})]})]})})}function b(e){var t=e.formHelper,n=t.values,s=t.setFieldValue,u=n.emailService,d=n.recipients,j=(null===d||void 0===d?void 0:d.length)>1;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.d.Item,{label:"What is the e-mail address to receive the notification?",name:"recipients",children:[null===d||void 0===d?void 0:d.map((function(e){return Object(r.jsxs)("div",{className:"flex mb-2",children:[Object(r.jsx)(o.l,{placeholder:"monika@example.com",value:e.email,type:"email",onChange:function(t){return n=e.id,r=t.target.value,void s("recipients",d.map((function(e){return e.id===n?{id:e.id,email:r}:e})));var n,r},className:j?"w-11/12":"w-full"}),j&&Object(r.jsx)(o.a,{className:"items-center px-5",variant:"text",children:Object(r.jsx)(i.a,{size:"lg",icon:c.d,onClick:function(){return t=e.id,void s("recipients",d.filter((function(e){return e.id!==t})));var t}})})]},e.id)})),Object(r.jsx)(o.a,{variant:"text",onClick:function(){s("recipients",d?[].concat(Object(a.a)(d),[{id:Object(l.a)(),email:""}]):[{id:Object(l.a)(),email:""}])},children:"Add another e-mail address"})]}),Object(r.jsxs)(o.d.Item,{label:"How to send the e-mail?",name:"type",children:[Object(r.jsx)(o.i,{id:"type",value:u,onChange:function(e){return s("emailService",e.target.value)},children:[{type:"",label:"Select a method..."},{type:"smtp",label:"SMTP"},{type:"mailgun",label:"Mailgun"},{type:"sendgrid",label:"Sendgrid"}].map((function(e){return Object(r.jsx)(o.j,{value:e.type,children:e.label},e.type)}))}),"smtp"===u&&Object(r.jsx)(f,{formHelper:t}),"mailgun"===u&&Object(r.jsx)(O,{formHelper:t}),"sendgrid"===u&&Object(r.jsx)(g,{formHelper:t})]})]})}function p(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,l=n.url;return Object(r.jsx)(o.d.Item,{label:"Webhook URL",name:"url",children:Object(r.jsx)(o.l,{id:"url",value:l,type:"url",onChange:function(e){return a("url",e.target.value)}})})}function h(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,l=n.group_id,i=n.bot_token;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.d.Item,{label:"Group ID",name:"group_id",children:Object(r.jsx)(o.l,{id:"group_id",value:l,onChange:function(e){return a("group_id",e.target.value)},placeholder:"-123456"})}),Object(r.jsx)(o.d.Item,{label:"Bot Token",name:"bot_token",children:Object(r.jsx)(o.l,{id:"bot_token",value:i,onChange:function(e){return a("bot_token",e.target.value)},placeholder:"abcdefg:hijklmnopqrstuvwxyz"})})]})}function x(e){var t=e.formHelper,n=t.values,s=t.setFieldValue,u=n.recipients,d=n.url,j=n.username,m=n.password,b=(null===u||void 0===u?void 0:u.length)>1;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.d.Item,{label:"Recipient Number",name:"recipients",children:[null===u||void 0===u?void 0:u.map((function(e){return Object(r.jsxs)("div",{className:"flex mb-2",children:[Object(r.jsx)(o.l,{value:e.number,type:"tel",onChange:function(t){return n=e.id,r=t.target.value,void s("recipients",u.map((function(e){return e.id===n?{id:e.id,number:r}:e})));var n,r},className:b?"w-11/12":"w-full"}),b&&Object(r.jsx)(o.a,{className:"items-center px-5",variant:"text",children:Object(r.jsx)(i.a,{size:"lg",icon:c.d,onClick:function(){return t=e.id,void s("recipients",u.filter((function(e){return e.id!==t})));var t}})})]},e.id)})),Object(r.jsx)(o.a,{variant:"text",onClick:function(){s("recipients",u?[].concat(Object(a.a)(u),[{id:Object(l.a)(),number:""}]):[{id:Object(l.a)(),number:""}])},children:"Add another Recipient Number"})]}),Object(r.jsx)(o.d.Item,{label:"URL",name:"url",children:Object(r.jsx)(o.l,{id:"url",value:d,type:"url",onChange:function(e){return s("url",e.target.value)}})}),Object(r.jsx)(o.d.Item,{label:"Username",name:"username",children:Object(r.jsx)(o.l,{id:"username",value:j,onChange:function(e){return s("username",e.target.value)}})}),Object(r.jsx)(o.d.Item,{label:"Password",name:"password",children:Object(r.jsx)(o.l,{id:"password",value:m,type:"password",onChange:function(e){return s("password",e.target.value)}})})]})}function f(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,l=n.hostname,i=n.port,c=n.username,s=n.password;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.d.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your SMTP server configuration.",Object(r.jsx)("br",{}),"Check out our docs to see an"," ",Object(r.jsx)("a",{className:"underline",href:"https://hyperjumptech.github.io/monika/guides/notifications#example-using-gmail-smtp",target:"_blank",rel:"noreferrer noopenner",children:"example of using Gmail SMTP server"}),"."]})}),Object(r.jsx)(o.d.Item,{label:"SMTP Hostname",name:"hostname",children:Object(r.jsx)(o.l,{id:"hostname",value:l,onChange:function(e){return a("hostname",e.target.value)},placeholder:"smtp.example.com"})}),Object(r.jsx)(o.d.Item,{label:"SMTP Port",name:"port",children:Object(r.jsx)(o.l,{id:"port",value:i,type:"number",onChange:function(e){return a("port",e.target.value)},placeholder:"587"})}),Object(r.jsx)(o.d.Item,{label:"SMTP Username",name:"username",children:Object(r.jsx)(o.l,{id:"username",value:c,onChange:function(e){return a("username",e.target.value)},placeholder:"email@example.com"})}),Object(r.jsx)(o.d.Item,{label:"SMTP Password",name:"password",children:Object(r.jsx)(o.l,{id:"password",value:s,onChange:function(e){return a("password",e.target.value)},type:"password",placeholder:"super-secret-password"})})]})}function O(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,l=n.apiKey,i=n.domain;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.d.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your Mailgun configuration.",Object(r.jsx)("br",{}),"You can get the API key and the domain from"," ",Object(r.jsx)("a",{href:"https://www.mailgun.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Mailgun website"}),"."]})}),Object(r.jsx)(o.d.Item,{label:"API Key",name:"apiKey",children:Object(r.jsx)(o.l,{id:"apiKey",value:l,onChange:function(e){return a("apiKey",e.target.value)},type:"text",placeholder:"key-xxxx"})}),Object(r.jsx)(o.d.Item,{label:"Domain",name:"domain",children:Object(r.jsx)(o.l,{id:"domain",value:i,onChange:function(e){return a("domain",e.target.value)},type:"text",placeholder:"mailgun.com"})})]})}function g(e){var t=e.formHelper,n=t.values,a=t.setFieldValue,l=n.apiKey;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.d.Item,{children:Object(r.jsxs)("p",{className:"text-lg",children:["Provide your Sendgrid configuration.",Object(r.jsx)("br",{}),"You can get the API key from"," ",Object(r.jsx)("a",{href:"https://sendgrid.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Sendgrid website"}),"."]})}),Object(r.jsx)(o.d.Item,{label:"API Key",name:"apiKey",children:Object(r.jsx)(o.l,{id:"apiKey",value:l,onChange:function(e){return a("apiKey",e.target.value)},type:"apiKey",placeholder:"key-xxxx"})})]})}}},[["E34x",0,2,6,5,1,3,4]]]);