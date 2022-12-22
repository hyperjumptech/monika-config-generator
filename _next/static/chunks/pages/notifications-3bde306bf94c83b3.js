(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{5720:function(e,n,i){"use strict";i.d(n,{c:function(){return o}});var r=i(9499),t=i(7294);function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e){var n=e.initialValues,i=(0,t.useState)(n),a=i[0],o=i[1];return{values:a,setFieldValue:function(e,n){o((function(i){return l(l({},i),{},(0,r.Z)({},e,n))}))}}}},2323:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return m}});var r=i(7812),t=i(1436),a=i(2814),l=i(1163),o=i(7294),s=i(5934),d=i(4365),u=i(7156),c=i(5720),p=i(5893);function m(){var e,n=(0,l.useRouter)(),i=(0,s.Z)(),r=(0,s.Z)(),t=(0,c.c)({initialValues:{notificationChannel:"desktop",recipients:[{id:r,email:""}]}}),a=(0,o.useContext)(u.u).handleSetNotifications,m=t.values,g=t.setFieldValue,b=m.notificationChannel,y=[{type:"desktop",label:"Desktop",formComponent:(0,p.jsx)(k,{}),data:{id:i,type:b,data:void 0}},{type:"email",label:"Email",formComponent:(0,p.jsx)(v,{formHelper:t}),data:w(i,m)},{type:"discord",label:"Discord",formComponent:(0,p.jsx)(f,{formHelper:t}),data:{id:i,type:b,data:{url:null===m||void 0===m?void 0:m.url}}},{type:"workplace",label:"Facebook Workplace",formComponent:(0,p.jsx)(h,{formHelper:t}),data:{id:i,type:b,data:{thread_id:null===m||void 0===m?void 0:m.thread_id,access_token:null===m||void 0===m?void 0:m.access_token}}},{type:"teams",label:"Microsoft Teams",formComponent:(0,p.jsx)(f,{formHelper:t}),data:{id:i,type:b,data:{url:null===m||void 0===m?void 0:m.url}}},{type:"monika-notif",label:"Monika WhatsApp Notifier",formComponent:(0,p.jsx)(f,{formHelper:t}),data:{id:i,type:b,data:{url:null===m||void 0===m?void 0:m.url}}},{type:"slack",label:"Slack",formComponent:(0,p.jsx)(f,{formHelper:t}),data:{id:i,type:b,data:{url:null===m||void 0===m?void 0:m.url}}},{type:"telegram",label:"Telegram",formComponent:(0,p.jsx)(x,{formHelper:t}),data:{id:i,type:b,data:{group_id:null===m||void 0===m?void 0:m.group_id,bot_token:null===m||void 0===m?void 0:m.bot_token}}},{type:"webhook",label:"Webhook",formComponent:(0,p.jsx)(f,{formHelper:t}),data:{id:i,type:b,data:{url:null===m||void 0===m?void 0:m.url}}},{type:"whatsapp",label:"WhatsApp",formComponent:(0,p.jsx)(j,{formHelper:t}),data:{id:i,type:b,data:{recipients:null===m||void 0===m?void 0:m.recipients,url:null===m||void 0===m?void 0:m.url,username:null===m||void 0===m?void 0:m.username,password:null===m||void 0===m?void 0:m.password}}}];return(0,p.jsxs)(d.Ar,{children:[(0,p.jsx)(d.$y,{subtitle:"Add notifications"}),(0,p.jsxs)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:[(0,p.jsx)(d.l0.Item,{label:"How do you want to be notified when your website is down?",name:"notification-channel",children:(0,p.jsx)(d.Ph,{id:"notification-channel",value:b,onChange:function(e){return g("notificationChannel",e.target.value)},children:y.map((function(e){return(0,p.jsx)(d.$m,{value:e.type,children:e.label},e.type)}))})}),null===(e=y.find((function(e){return e.type===b})))||void 0===e?void 0:e.formComponent,(0,p.jsxs)("div",{className:"mt-12 py-3",children:[(0,p.jsx)(d.zx,{onClick:function(){n.back()},outline:!0,className:"mr-7",children:"Back"}),(0,p.jsx)(d.zx,{onClick:function(){var e,i=null===(e=y.find((function(e){return e.type===b})))||void 0===e?void 0:e.data;a(i?[i]:[]),n.push("/download")},children:"Next"})]})]})]})}function v(e){var n=e.formHelper,i=n.values,l=n.setFieldValue,o=i.emailService,u=i.recipients,c=(null===u||void 0===u?void 0:u.length)>1;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(d.l0.Item,{label:"What is the e-mail address to receive the notification?",name:"recipients",children:[null===u||void 0===u?void 0:u.map((function(e){return(0,p.jsxs)("div",{className:"flex mb-2",children:[(0,p.jsx)(d.oi,{placeholder:"monika@example.com",value:e.email,type:"email",onChange:function(n){return i=e.id,r=n.target.value,void l("recipients",u.map((function(e){return e.id===i?{id:e.id,email:r}:e})));var i,r},className:c?"w-11/12":"w-full"}),c&&(0,p.jsx)(d.zx,{className:"items-center px-5",variant:"text",children:(0,p.jsx)(a.G,{size:"lg",icon:t.uMC,onClick:function(){return n=e.id,void l("recipients",u.filter((function(e){return e.id!==n})));var n}})})]},e.id)})),(0,p.jsx)(d.zx,{variant:"text",onClick:function(){l("recipients",u?[].concat((0,r.Z)(u),[{id:(0,s.Z)(),email:""}]):[{id:(0,s.Z)(),email:""}])},children:"Add another e-mail address"})]}),(0,p.jsxs)(d.l0.Item,{label:"How to send the e-mail?",name:"type",children:[(0,p.jsx)(d.Ph,{id:"type",value:o,onChange:function(e){return l("emailService",e.target.value)},children:[{type:"",label:"Select a method..."},{type:"smtp",label:"SMTP"},{type:"mailgun",label:"Mailgun"},{type:"sendgrid",label:"Sendgrid"}].map((function(e){return(0,p.jsx)(d.$m,{value:e.type,children:e.label},e.type)}))}),"smtp"===o&&(0,p.jsx)(g,{formHelper:n}),"mailgun"===o&&(0,p.jsx)(b,{formHelper:n}),"sendgrid"===o&&(0,p.jsx)(y,{formHelper:n})]})]})}function h(e){var n=e.formHelper,i=n.values,r=n.setFieldValue,t=i.thread_id,a=i.access_token;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.l0.Item,{label:"Thread ID",name:"thread_id",children:(0,p.jsx)(d.oi,{id:"thread_id",value:t,onChange:function(e){return r("thread_id",e.target.value)},placeholder:"12345678910"})}),(0,p.jsx)(d.l0.Item,{label:"Access Token",name:"access_token",children:(0,p.jsx)(d.oi,{id:"access_token",value:a,onChange:function(e){return r("access_token",e.target.value)},placeholder:"your_custom_integration_access_token"})})]})}function f(e){var n=e.formHelper,i=n.values,r=n.setFieldValue,t=i.url;return(0,p.jsx)(d.l0.Item,{label:"Webhook URL",name:"url",children:(0,p.jsx)(d.oi,{id:"url",value:t,type:"url",onChange:function(e){return r("url",e.target.value)}})})}function x(e){var n=e.formHelper,i=n.values,r=n.setFieldValue,t=i.group_id,a=i.bot_token;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.l0.Item,{label:"Group ID",name:"group_id",children:(0,p.jsx)(d.oi,{id:"group_id",value:t,onChange:function(e){return r("group_id",e.target.value)},placeholder:"-123456"})}),(0,p.jsx)(d.l0.Item,{label:"Bot Token",name:"bot_token",children:(0,p.jsx)(d.oi,{id:"bot_token",value:a,onChange:function(e){return r("bot_token",e.target.value)},placeholder:"abcdefg:hijklmnopqrstuvwxyz"})})]})}function j(e){var n=e.formHelper,i=n.values,l=n.setFieldValue,o=i.recipients,u=i.url,c=i.username,m=i.password,v=(null===o||void 0===o?void 0:o.length)>1;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(d.l0.Item,{label:"Recipient Number",name:"recipients",children:[null===o||void 0===o?void 0:o.map((function(e){return(0,p.jsxs)("div",{className:"flex mb-2",children:[(0,p.jsx)(d.oi,{value:e.number,type:"tel",onChange:function(n){return i=e.id,r=n.target.value,void l("recipients",o.map((function(e){return e.id===i?{id:e.id,number:r}:e})));var i,r},className:v?"w-11/12":"w-full"}),v&&(0,p.jsx)(d.zx,{className:"items-center px-5",variant:"text",children:(0,p.jsx)(a.G,{size:"lg",icon:t.uMC,onClick:function(){return n=e.id,void l("recipients",o.filter((function(e){return e.id!==n})));var n}})})]},e.id)})),(0,p.jsx)(d.zx,{variant:"text",onClick:function(){l("recipients",o?[].concat((0,r.Z)(o),[{id:(0,s.Z)(),number:""}]):[{id:(0,s.Z)(),number:""}])},children:"Add another Recipient Number"})]}),(0,p.jsx)(d.l0.Item,{label:"URL",name:"url",children:(0,p.jsx)(d.oi,{id:"url",value:u,type:"url",onChange:function(e){return l("url",e.target.value)}})}),(0,p.jsx)(d.l0.Item,{label:"Username",name:"username",children:(0,p.jsx)(d.oi,{id:"username",value:c,onChange:function(e){return l("username",e.target.value)}})}),(0,p.jsx)(d.l0.Item,{label:"Password",name:"password",children:(0,p.jsx)(d.oi,{id:"password",value:m,type:"password",onChange:function(e){return l("password",e.target.value)}})})]})}function g(e){var n=e.formHelper,i=n.values,r=n.setFieldValue,t=i.hostname,a=i.port,l=i.username,o=i.password;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.l0.Item,{children:(0,p.jsxs)("p",{className:"text-lg",children:["Provide your SMTP server configuration.",(0,p.jsx)("br",{}),"Check out our docs to see an"," ",(0,p.jsx)("a",{className:"underline",href:"https://hyperjumptech.github.io/monika/guides/notifications#example-using-gmail-smtp",target:"_blank",rel:"noreferrer noopenner",children:"example of using Gmail SMTP server"}),"."]})}),(0,p.jsx)(d.l0.Item,{label:"SMTP Hostname",name:"hostname",children:(0,p.jsx)(d.oi,{id:"hostname",value:t,onChange:function(e){return r("hostname",e.target.value)},placeholder:"smtp.example.com"})}),(0,p.jsx)(d.l0.Item,{label:"SMTP Port",name:"port",children:(0,p.jsx)(d.oi,{id:"port",value:a,type:"number",onChange:function(e){return r("port",e.target.value)},placeholder:"587"})}),(0,p.jsx)(d.l0.Item,{label:"SMTP Username",name:"username",children:(0,p.jsx)(d.oi,{id:"username",value:l,onChange:function(e){return r("username",e.target.value)},placeholder:"email@example.com"})}),(0,p.jsx)(d.l0.Item,{label:"SMTP Password",name:"password",children:(0,p.jsx)(d.oi,{id:"password",value:o,onChange:function(e){return r("password",e.target.value)},type:"password",placeholder:"super-secret-password"})})]})}function b(e){var n=e.formHelper,i=n.values,r=n.setFieldValue,t=i.apiKey,a=i.domain;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.l0.Item,{children:(0,p.jsxs)("p",{className:"text-lg",children:["Provide your Mailgun configuration.",(0,p.jsx)("br",{}),"You can get the API key and the domain from"," ",(0,p.jsx)("a",{href:"https://www.mailgun.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Mailgun website"}),"."]})}),(0,p.jsx)(d.l0.Item,{label:"API Key",name:"apiKey",children:(0,p.jsx)(d.oi,{id:"apiKey",value:t,onChange:function(e){return r("apiKey",e.target.value)},type:"text",placeholder:"key-xxxx"})}),(0,p.jsx)(d.l0.Item,{label:"Domain",name:"domain",children:(0,p.jsx)(d.oi,{id:"domain",value:a,onChange:function(e){return r("domain",e.target.value)},type:"text",placeholder:"mailgun.com"})})]})}function y(e){var n=e.formHelper,i=n.values,r=n.setFieldValue,t=i.apiKey;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.l0.Item,{children:(0,p.jsxs)("p",{className:"text-lg",children:["Provide your Sendgrid configuration.",(0,p.jsx)("br",{}),"You can get the API key from"," ",(0,p.jsx)("a",{href:"https://sendgrid.com/",target:"_blank",rel:"noreferrer noopener",className:"underline",children:"Sendgrid website"}),"."]})}),(0,p.jsx)(d.l0.Item,{label:"API Key",name:"apiKey",children:(0,p.jsx)(d.oi,{id:"apiKey",value:t,onChange:function(e){return r("apiKey",e.target.value)},type:"apiKey",placeholder:"key-xxxx"})})]})}function k(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("p",{children:"There are prerequisites for using Desktop notification:"}),(0,p.jsxs)("ul",{className:"list-disc ml-8",children:[(0,p.jsxs)("li",{children:["macOS: ",">="," 10.8 for native notifications, or Growl if earlier."]}),(0,p.jsx)("li",{children:"Linux: `notify-osd` or `libnotify-bin` installed (Ubuntu should have this by default)"}),(0,p.jsxs)("li",{children:["Windows: ",">="," 8, or task bar balloons for Windows ","<"," 8. Growl as fallback. Growl takes precedence over Windows balloons."]})]})]})}function w(e,n){var i;switch(null===n||void 0===n?void 0:n.emailService){case"smtp":return{id:e,type:null===n||void 0===n?void 0:n.emailService,data:{recipients:null===n||void 0===n?void 0:n.recipients.map((function(e){return e.email})),hostname:null===n||void 0===n?void 0:n.hostname,port:parseInt(null!==(i=null===n||void 0===n?void 0:n.port)&&void 0!==i?i:0),username:null===n||void 0===n?void 0:n.username,password:null===n||void 0===n?void 0:n.password}};case"mailgun":return{id:e,type:null===n||void 0===n?void 0:n.emailService,data:{recipients:null===n||void 0===n?void 0:n.recipients.map((function(e){return e.email})),apiKey:null===n||void 0===n?void 0:n.apiKey,domain:null===n||void 0===n?void 0:n.domain}};case"sendgrid":return{id:e,type:null===n||void 0===n?void 0:n.emailService,data:{recipients:null===n||void 0===n?void 0:n.recipients.map((function(e){return e.email})),apiKey:null===n||void 0===n?void 0:n.apiKey,sender:null===n||void 0===n?void 0:n.sender}}}}},1865:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notifications",function(){return i(2323)}])}},function(e){e.O(0,[523,988,365,774,888,179],(function(){return n=1865,e(e.s=n);var n}));var n=e.O();_N_E=n}]);