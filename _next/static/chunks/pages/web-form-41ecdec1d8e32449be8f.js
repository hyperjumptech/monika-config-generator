_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"20a2":function(e,t,n){e.exports=n("nOHt")},"3Iu1":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/web-form",function(){return n("bohX")}])},bohX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var c=n("nKUr"),r=n("rePB"),a=n("KQm4"),o=n("20a2"),i=n("q1tI"),u=n("7Cbv"),s=n("m/eG"),l=n("9bat");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(){var e=Object(o.useRouter)(),t=Object(i.useState)(""),n=t[0],b=t[1],j=Object(i.useState)([{id:Object(u.a)(),name:"",value:""}]),f=j[0],O=j[1],p=Object(i.useContext)(l.a).handleSetProbes,m=function(e,t,n){O((function(c){return c.map((function(c){return c.id===e?d(d({},c),{},Object(r.a)({},t,n)):c}))}))};return Object(c.jsx)(s.g,{children:Object(c.jsx)("div",{className:"lg:py-20 xl:py-32 xl:px-80",children:Object(c.jsxs)("form",{className:"text-sm sm:text-lg",onSubmit:function(t){t.preventDefault();var c={};Object.values(f).filter((function(e){return e.name})).forEach((function(e){return c[e.name]=e.value})),p([{id:Object(u.a)(),name:"",requests:[{url:n,body:c,timeout:1e4,method:"POST"}],incidentThreshold:5,recoveryThreshold:5,alerts:[]}]),e.push("/notifications")},children:[Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("div",{className:"space-y-8 mb-10",children:[Object(c.jsx)("p",{children:"What is the address (URL) of the web form?"}),Object(c.jsx)(s.l,{id:"url",onChange:function(e){return b(e.target.value)},value:n,type:"url",placeholder:"https://example.com"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"mb-6",children:"What are the data to send?"}),f.map((function(e){var t=e.id,n=e.name,r=e.value;return Object(c.jsxs)("div",{className:"flex space-x-7 mb-6",children:[Object(c.jsx)("div",{className:"flex-1",children:Object(c.jsx)(s.l,{id:"data".concat(t,"-name"),label:"Name",onChange:function(e){return m(t,"name",e.target.value)},value:n})}),Object(c.jsx)("div",{className:"flex-1",children:Object(c.jsx)(s.l,{id:"data".concat(t,"-value"),label:"Value",onChange:function(e){return m(t,"value",e.target.value)},value:r})}),Object(c.jsx)("div",{className:"self-end py-3",children:Object(c.jsx)("button",{type:"button",className:"cursor-pointer underline focus:outline-none",onClick:function(){return function(e){O((function(t){return t.filter((function(t){return t.id!==e}))}))}(t)},children:"Remove"})})]},t)})),Object(c.jsx)("button",{className:"cursor-pointer underline focus:outline-none",type:"button",onClick:function(){O((function(e){return[].concat(Object(a.a)(e),[{id:Object(u.a)(),name:"",value:""}])}))},children:"Add more data"})]})]}),Object(c.jsxs)("div",{className:"mt-12 py-3 space-x-7",children:[Object(c.jsx)(s.a,{type:"button",outline:!0,onClick:function(){return e.back()},children:"Back"}),Object(c.jsx)(s.a,{type:"submit",children:"Next"})]})]})})})}}},[["3Iu1",0,2,6,5,1,3,4]]]);