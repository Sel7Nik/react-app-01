(this["webpackJsonpreact-app-01"]=this["webpackJsonpreact-app-01"]||[]).push([[3],{295:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1Ig-t",dialogsItems:"Dialogs_dialogsItems__1puaG",active:"Dialogs_active__3umEF",messanges:"Dialogs_messanges__20qwq"}},296:function(e,s,a){e.exports={dialog:"DialogItem_dialog__-ENoV"}},297:function(e,s,a){e.exports={message:"Message_message__3E_Jm"}},298:function(e,s,a){"use strict";a.r(s);var t=a(295),n=a.n(t),i=a(16),c=a(296),o=a.n(c),d=a(0),r=function(e){var s="/dialogs/"+e.id;return Object(d.jsx)("div",{className:o.a.dialog,children:Object(d.jsxs)(i.b,{to:s,children:[" ",e.name]})})},g=a(297),l=a.n(g),j=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:l.a.message,children:e.message})})},m=a(11),u=a(89),b=a(127),O=a(29),x=a(39),_=Object(x.a)(50),f=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:Object(d.jsx)(u.a,{component:O.b,validate:[x.b,_],placeholder:"Enter your message",name:"newMessageBody"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"SEND MESSAGE"})})]})})),h=function(e){var s=e.dialogsPage,a=s.dialogsData,t=s.messagesData,i=a.map((function(e){return Object(d.jsx)(r,{name:e.name,id:e.id},e.id)})),c=t.map((function(e){return Object(d.jsx)(j,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(d.jsxs)("div",{className:n.a.dialogs,children:[Object(d.jsx)("div",{className:n.a.dialogsItems,children:i}),Object(d.jsx)("div",{className:n.a.messanges,children:c}),Object(d.jsx)(f,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(d.jsx)(m.a,{to:"/login"})},p=a(125),v=a(12),D=a(126),E=a(9);s.default=Object(E.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(p.b)(s))}}})),D.a)(h)}}]);
//# sourceMappingURL=3.bcade978.chunk.js.map