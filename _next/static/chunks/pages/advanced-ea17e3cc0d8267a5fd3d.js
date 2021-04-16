_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"5l8Q":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var c=n("nKUr"),a=n("q1tI"),l=n("m/eG"),s=n("wHSu"),r=n("IP2g"),d=n("9bat"),i=n("upOX"),o=function(e){var t=e.probeId,n=Object(a.useContext)(d.a).handleUpdateProbeResponseTimeAlert,s=Object(a.useState)(2e3),r=s[0],i=s[1],o=Object(a.useState)(!0),u=o[0],j=o[1],b=function(e,t,c){i(t),j(c),n(e,t,c)};return Object(c.jsx)(l.b,{name:"probe_".concat(t,"_response_time"),value:"response-time",help:"Response time is longer than xxx milliseconds",defaultChecked:!0,checked:!0,onChange:function(e){return b(t,r,e.target.checked)},children:Object(c.jsxs)("div",{className:"flex flex-row align-middle items-center space-x-4",children:[Object(c.jsx)("span",{children:"Response time is longer than"}),Object(c.jsx)(l.l,{id:"probe_".concat(t,"_response_time_value"),type:"number",placeholder:"2000",className:"w-full md:w-64",value:r,disabled:!u,onChange:function(e){return b(t,e.target.valueAsNumber,u)}}),Object(c.jsx)("span",{children:"milliseconds"})]})})},u=function(e){var t=e.probeId,n=Object(a.useContext)(d.a).handleUpdateProbeData,s=Object(a.useState)(5),r=s[0],i=s[1];return Object(c.jsx)(l.l,{id:"probe_".concat(t,"_threshold"),type:"number",placeholder:"5",value:r,className:"w-full md:w-64",onChange:function(e){return c=e.target.value,i(parseInt(c,10)),n({id:t,field:"incidentThreshold",value:c}),void n({id:t,field:"recoveryThreshold",value:c});var c}})},j=function(e){var t=e.probeId,n=e.request,i=e.requestIndex,o=e.requestArray,u=Object(a.useContext)(d.a),j=u.handleAddProbeRequestHeader,b=u.handleUpdateProbeRequestPosition,x=u.handleUpdateProbeRequestData,h=u.handleUpdateProbeRequestBody,m=u.handleUpdateProbeRequestEnableBody,f=u.handleUpdateProbeRequestHeaderKey,p=u.handleUpdateProbeRequestHeaderValue,O=u.handleRemoveProbeRequestHeader,v=u.handleRemoveProbeRequest;return Object(c.jsxs)("div",{className:"w-full p-8 rounded-md bg-gray-100 border border-solid border-gray-300 space-y-8",children:[Object(c.jsxs)("div",{className:"flex flex-row align-middle justify-between",children:[Object(c.jsxs)("div",{className:"flex align-middle",children:["#",i+1]}),Object(c.jsxs)("div",{className:"flex align-middle space-x-4",children:[0!==i&&Object(c.jsx)("button",{type:"button",onClick:function(){return b(t,i,i-1)},children:Object(c.jsx)(r.a,{icon:s.b})}),i!==o.length-1&&Object(c.jsx)("button",{type:"button",onClick:function(){return b(t,i,i+1)},children:Object(c.jsx)(r.a,{icon:s.a})}),o.length>1&&Object(c.jsx)("button",{type:"button",onClick:function(){return v(t,i)},children:Object(c.jsx)(r.a,{icon:s.f})})]})]}),Object(c.jsxs)("div",{className:"flex flex-row space-x-8",children:[Object(c.jsx)("div",{className:"w-8/12",children:Object(c.jsx)(l.l,{id:"probe_".concat(t,"_request_").concat(i,"_url"),placeholder:"https://github.com",value:n.url,onChange:function(e){return x({id:t,index:i,field:"url",value:e.target.value})}})}),Object(c.jsx)("div",{className:"w-4/12",children:Object(c.jsxs)(l.i,{id:"probe_".concat(t,"_method"),value:n.method,onChange:function(e){return x({id:t,index:i,field:"method",value:e.target.value})},children:[Object(c.jsx)(l.j,{value:"GET",children:"GET"}),Object(c.jsx)(l.j,{value:"POST",children:"POST"}),Object(c.jsx)(l.j,{value:"PUT",children:"PUT"}),Object(c.jsx)(l.j,{value:"PATCH",children:"PATCH"}),Object(c.jsx)(l.j,{value:"DELETE",children:"DELETE"}),Object(c.jsx)(l.j,{value:"OPTIONS",children:"OPTIONS"}),Object(c.jsx)(l.j,{value:"HEAD",children:"HEAD"})]})})]}),Object(c.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(c.jsx)("p",{children:"Headers"}),Object.keys(n.headers).map((function(e,a){return Object(c.jsxs)("div",{className:"flex flex-row space-x-8",children:[Object(c.jsx)(l.l,{id:"probe_".concat(t,"_request_").concat(i,"_headers_").concat(a),value:e,onChange:function(e){return f(t,i,a,e.target.value)}}),Object(c.jsx)(l.l,{id:"probe_".concat(t,"_request_").concat(i,"_headers_").concat(a,"_value"),value:n.headers[e],onChange:function(e){return p(t,i,a,e.target.value)}}),Object(c.jsx)("button",{type:"button",onClick:function(){return O(t,a)},children:Object(c.jsx)(r.a,{icon:s.f})})]},a)})),Object(c.jsx)("button",{type:"button",onClick:function(){return j(t,i)},className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add header"})})]}),Object(c.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(c.jsxs)("div",{className:"flex items-center space-x-8 flex-row",children:[Object(c.jsx)("p",{children:"Body"}),Object(c.jsx)("div",{className:"w-full sm:w-3/12",children:Object(c.jsxs)(l.i,{id:"probe_".concat(t,"_content_type"),onChange:function(e){return m(t,i,e.target.value)},children:[Object(c.jsx)(l.j,{value:"No Body",children:"No Body"}),Object(c.jsx)(l.j,{value:"JSON",children:"JSON"})]})})]}),"{}"!==JSON.stringify(n.body)&&Object(c.jsx)(l.m,{placeholder:"{ }",id:"probe_".concat(t,"_body"),onBlur:function(e){return function(e){try{JSON.parse(e)}catch(t){alert(t)}}(e.target.value)},value:JSON.stringify(n.body),onChange:function(e){return h({id:t,index:i,field:"body",value:e.target.value})}}),Object(c.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-8",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Timeout"}),Object(c.jsx)(l.l,{id:"probe_".concat(t,"_timeout"),type:"number",placeholder:"10",min:1,value:n.timeout,className:"w-full md:w-64",onChange:function(e){x({id:t,index:i,field:"timeout",value:e.target.value})}}),Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"milliseconds"})]})]})]})},b=function(e){var t=e.probe,n=e.id,b=Object(a.useContext)(d.a),x=b.probeData,h=b.handleAddProbeRequest,m=b.handleUpdateProbeData,f=b.handleUpdateProbeAlert,p=b.handleRemoveProbe;return Object(c.jsxs)("div",{className:"border border-solid rounded-md mb-8",children:[Object(c.jsxs)("div",{className:"flex flex-row items-center justify-between p-4 bg-gray-50 border-b",children:[Object(c.jsxs)("p",{children:["Probe ID : ",n.split("-")[0]]}),x.length>1&&Object(c.jsx)("button",{onClick:function(){return p(n)},children:Object(c.jsx)(r.a,{icon:s.f})})]}),Object(c.jsx)("div",{className:"p-4 ",children:Object(c.jsx)("form",{children:Object(c.jsx)("fieldset",{children:Object(c.jsxs)("div",{className:"space-y-8 flex flex-col",children:[Object(c.jsx)(l.l,{label:"Name",id:"probe_".concat(n,"_name"),placeholder:"Home Page Probe",className:"w-full md:w-6/12",onChange:function(e){m({id:n,field:"name",value:e.target.value})}}),Object(c.jsx)(l.l,{label:"Description",id:"probe_".concat(n,"_description"),placeholder:"Probe for Checking Home Page Downtime",className:"w-full md:w-6/12",onChange:function(e){m({id:n,field:"description",value:e.target.value})}}),Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Requests"}),t.requests.map((function(e,t,a){return Object(c.jsx)(j,{probeId:n,request:e,requestIndex:t,requestArray:a},t)})),Object(c.jsx)("button",{type:"button",onClick:function(){return h(n)},className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add another request"})}),Object(c.jsxs)("div",{className:"flex flex-col space-y-8",children:[Object(c.jsx)("p",{className:"font-bold text-sm sm:text-lg",children:"Advanced"}),Object(c.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-8",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Interval"}),Object(c.jsx)(l.l,{id:"probe_".concat(n,"_interval"),type:"number",placeholder:"10",value:t.interval,className:"w-full md:w-64",onChange:function(e){m({id:n,field:"interval",value:e.target.value})}}),Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"seconds"})]}),Object(c.jsxs)("div",{className:"flex flex-col space-y-4 space-x-4",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Notify on"}),Object(c.jsx)(i.a,{name:"probe_".concat(n,"_status_not_2xx"),value:"status-not-2xx",help:"Checks if status code is not 2xx (200-204)",defaultChecked:!0,onChange:function(e){return f(n,"status-not-2xx",e.target.checked)},children:"Status Code not 2XX (Not Success)"}),Object(c.jsx)(o,{probeId:n})]}),Object(c.jsxs)("div",{className:"flex flex-row items-center justify-start space-x-8",children:[Object(c.jsx)("p",{className:"text-sm sm:text-lg",children:"Threshold"}),Object(c.jsx)(u,{probeId:n})]})]})]},n)})})})]})},x=n("ukxq"),h=n("qIcA"),m=function(e){var t,n,d=e.id,i=e.type,o=Object(a.useContext)(x.a),u=o.notificationData,j=o.handleUpdateNotificationType,b=o.handleUpdateNotificationData,m=o.handleRemoveNotification;return Object(c.jsxs)("div",{className:"border border-solid rounded-md mb-8",children:[Object(c.jsxs)("div",{className:"flex flex-row items-center justify-between p-4 bg-gray-50 border-b",children:[Object(c.jsxs)("p",{children:["Notification ID : ",d.split("-")[0]]}),u.length>1&&Object(c.jsx)("button",{onClick:function(){return m(d)},children:Object(c.jsx)(r.a,{icon:s.f})})]}),Object(c.jsxs)("div",{className:"p-4 md:w-8/12 lg:w-6/12",children:[Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsx)(l.i,{label:"Type",value:null===(t=u.find((function(e){return e.id===d})))||void 0===t?void 0:t.type,onChange:function(e){j({id:d,type:e.target.value})},children:h.a.map((function(e){return Object(c.jsx)(l.j,{value:e.name,children:e.label},e.name)}))})}),Object(c.jsx)("form",{children:Object(c.jsx)("fieldset",{children:null===h.a||void 0===h.a||null===(n=h.a.find((function(e){return e.name===i})))||void 0===n?void 0:n.fields.map((function(e){var t,n=null===(t=u.find((function(e){return e.id===d})))||void 0===t?void 0:t.data;return Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsx)(l.l,{id:e.name,label:e.label,defaultValue:n[e.name],onChange:function(t){b({id:d,field:e.name,value:t.target.value})}})},e.name)}))})})]})]})};function f(){var e=Object(a.useContext)(x.a),t=e.notificationData,n=e.handleAddNotification,s=Object(a.useContext)(d.a),r=s.probeData,i=s.handleAddProbe,o=Object(a.useState)(!1),u=o[0],j=o[1],h=Object(a.useState)("Probe"),f=h[0],p=h[1];return Object(c.jsxs)(l.g,{children:[Object(c.jsxs)("div",{className:"mb-5 flex justify-end",children:[Object(c.jsx)(l.a,{onClick:function(){return j(!0)},children:"Generate Config File"}),Object(c.jsx)(l.e,{visible:u,onClose:function(){return j(!1)}})]}),Object(c.jsxs)("div",{className:"flex flex-col md:flex-row space-x-0 space-y-8 md:space-y-0 md:space-x-8",children:[Object(c.jsx)("div",{className:"w-full md:w-3/12",children:Object(c.jsx)(l.k,{menu:["Probe","Notification"],activeMenu:f,onMenuChange:function(e,t){return function(e,t){e.preventDefault(),p(t)}(e,t)}})}),Object(c.jsx)("div",{className:"w-full md:w-9/12",children:"Notification"===f?Object(c.jsxs)("div",{children:[t.map((function(e){return Object(c.jsx)(m,{id:e.id,type:e.type},e.id)})),Object(c.jsx)("button",{onClick:n,className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add another notification"})})]}):"Probe"===f?Object(c.jsxs)("div",{children:[r.map((function(e){return Object(c.jsx)(b,{probe:e,id:e.id},e.id)})),Object(c.jsx)("button",{onClick:i,className:"w-full border-4 border-dashed rounded-md p-4",children:Object(c.jsx)("p",{children:"Add another probe"})})]}):Object(c.jsx)(c.Fragment,{children:"Nothing to render"})})]})]})}},Lqna:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced",function(){return n("5l8Q")}])}},[["Lqna",0,2,6,5,1,3,4]]]);