(this["webpackJsonpduty-calendar-client"]=this["webpackJsonpduty-calendar-client"]||[]).push([[0],{115:function(e,t,a){e.exports={brand:"SideMenu_brand__2luj2",sideNav:"SideMenu_sideNav__z1kue",logOut:"SideMenu_logOut__1fXK2"}},116:function(e,t,a){e.exports={calendarContainer:"Calendar_calendarContainer__BCmqF","rbc-toolbar":"Calendar_rbc-toolbar__1I4bN","rbc-agenda-empty":"Calendar_rbc-agenda-empty__3z7kd","\u0441alendarBox":"Calendar_\u0441alendarBox__1P39H",calendarLoading:"Calendar_calendarLoading__1NMv7"}},117:function(e,t,a){e.exports={headerContainer:"Header_headerContainer__VGdLm",brand:"Header_brand__2FjDH",desc:"Header_desc__3PxwE"}},118:function(e,t,a){e.exports={landingContainer:"Landing_landingContainer__2AF4c",landingMain:"Landing_landingMain__2JF-G",authTabs:"Landing_authTabs__3eDhV",calendarImage:"Landing_calendarImage__24Q_q",imageContainer:"Landing_imageContainer__3XV5j"}},128:function(e,t,a){e.exports={confirmationContainer:"EmailConfirmation_confirmationContainer__19FM5",icon:"EmailConfirmation_icon__2y2Rw"}},129:function(e,t,a){e.exports={footer:"Footer_footer__28pE7",dev:"Footer_dev__1OeRd"}},155:function(e,t,a){e.exports={content:"Content_content__14eHl"}},156:function(e,t,a){e.exports={navbar:"Navbar_navbar__3cnDF"}},160:function(e,t,a){e.exports={spinner:"List_spinner__dgiZd"}},164:function(e,t,a){e.exports={siteLayoutContent:"Home_siteLayoutContent__1JiH2",logo:"Home_logo__1dCHP",layout:"Home_layout__nzmxj"}},176:function(e,t,a){},273:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),c=a.n(s),i=(a(176),a(33)),o=a(28),l=a(286),j=a(23),u=a.n(j),d=a(34),m=a(26),b=a(279),h=a(165),O=a(64),x=a(291),f=a(92),p=a(152),g=a(62),v=a.n(g),_="https://duty-calendar-api.herokuapp.com/auth/",y=function(){function e(){Object(f.a)(this,e)}return Object(p.a)(e,null,[{key:"login",value:function(e,t){return v.a.post(_+"login",{email:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t){return v.a.post(_+"register",{email:e,password:t})}},{key:"verifyEmail",value:function(e,t){return v.a.post(_+"verify",{userId:t,secretCode:e})}},{key:"getCurrentUser",value:function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null}},{key:"setVerified",value:function(){var e=this.getCurrentUser();e.verified=!0,localStorage.setItem("user",JSON.stringify(e))}}]),e}(),N=a(3),k=function(){var e=Object(o.h)(),t=e.code,a=e.id,r=Object(n.useState)(!0),s=Object(m.a)(r,2),c=s[0],j=s[1],f=Object(n.useState)(!1),p=Object(m.a)(f,2),g=p[0],v=p[1];return Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.verifyEmail(t,a);case 3:y.setVerified(),v(!0),j(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),v(!1),j(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(N.jsx)(N.Fragment,{children:c?Object(N.jsx)(b.a,{indicator:Object(N.jsx)(O.a,{style:{fontSize:35},spin:!0})}):g?Object(N.jsx)(l.a,{icon:Object(N.jsx)(x.a,{}),title:"Email \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043e",extra:Object(N.jsx)(h.a,{type:"default",children:Object(N.jsx)(i.b,{to:"/",children:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"})})}):Object(N.jsx)(l.a,{status:"error",title:"\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 email",subTitle:"\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0440\u0435\u0439\u0442\u0438 \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c \u0437\u043d\u043e\u0432\u0443 \u0430\u0431\u043e \u0441\u0442\u0432\u043e\u0440\u0456\u043d\u044c \u043d\u043e\u0432\u0438\u0439 \u0430\u043a\u0430\u0443\u043d\u0442",extra:[Object(N.jsx)(h.a,{type:"default",children:Object(N.jsx)(i.b,{to:"/",children:"\u0423\u0432\u0456\u0439\u0442\u0438"})},"console")]})})},w=a(293),C=a(128),F=a.n(C),I=function(e){var t=e.email;return Object(N.jsxs)("div",{className:F.a.confirmationContainer,children:[Object(N.jsx)("div",{className:F.a.icon,children:Object(N.jsx)(w.a,{})}),Object(N.jsx)("span",{children:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443 \u0431\u0443\u043b\u043e \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043d\u0430 ".concat(t)}),Object(N.jsx)(h.a,{type:"default",onClick:function(){return y.logout()},children:"\u0412\u0438\u0439\u0442\u0438"})]})},S=function(e){var t=e.children,a=y.getCurrentUser(),n=null;return n=a&&a.verified?t:a?Object(N.jsx)(I,{email:a.email}):Object(N.jsx)(o.a,{to:"/"}),Object(N.jsx)(N.Fragment,{children:n})},E=a(155),L=a.n(E),D=function(e){var t=e.children;return Object(N.jsx)("main",{className:L.a.content,children:t})},z=a(295),H=a(296),M=a(297),P=a(294),q=a(85),B=a.n(q),K=a(156),T=a.n(K),A=function(e){var t=e.links;return Object(N.jsx)("nav",{className:T.a.navbar,children:Object(N.jsx)("ul",{children:t.map((function(e,t){return Object(N.jsxs)("li",{children:[e.icon,Object(N.jsx)(i.b,{to:e.link,children:e.title})]},t)}))})})},V=a(287),J=a(115),R=a.n(J),U=function(e){var t=e.visible,a=e.email,n=e.onLogout,r=e.onClose,s=e.links;return Object(N.jsx)(V.a,{title:Object(N.jsx)("span",{className:R.a.brand,children:"DutyCalendar"}),visible:t,onClose:r,closable:!0,placement:"left",width:"300",children:Object(N.jsxs)("ul",{className:R.a.sideNav,children:[s.map((function(e,t){return Object(N.jsxs)("li",{children:[e.icon,Object(N.jsx)(i.b,{to:e.link,onClick:r,children:e.title})]},t)})),Object(N.jsxs)("li",{className:R.a.logOut,children:[Object(N.jsx)("div",{children:a}),Object(N.jsxs)("span",{onClick:n,children:[Object(N.jsx)(P.a,{}),"\u0412\u0438\u0439\u0442\u0438"]})]},s.length)]})})},G=[{link:"/home/calendar",title:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440",icon:Object(N.jsx)(z.a,{})},{link:"/home/list",title:"\u0421\u043f\u0438\u0441\u043e\u043a",icon:Object(N.jsx)(H.a,{})}],X=function(e){var t=e.email,a=e.onLogout,r=Object(n.useState)(!1),s=Object(m.a)(r,2),c=s[0],i=s[1];return Object(N.jsxs)("header",{className:B.a.homeHeader,children:[Object(N.jsx)(h.a,{className:B.a.sideMenuButton,icon:Object(N.jsx)(M.a,{}),size:"large",onClick:function(){i(!0)},type:"link",color:"black"}),Object(N.jsx)("span",{className:B.a.brand,children:"DutyCalendar"}),Object(N.jsx)(A,{links:G}),Object(N.jsxs)("span",{className:B.a.user,children:[t,Object(N.jsx)(h.a,{size:"middle",type:"default",icon:Object(N.jsx)(P.a,{}),onClick:a})]}),Object(N.jsx)(U,{visible:c,onClose:function(){i(!1)},email:t,links:G,onLogout:a})]})},Z=a(45),Q=a(284),W=a(280),Y=a(281),$=a(285),ee=a(282),te=a(170),ae=a(288),ne=a(298),re=a(292),se=a(169),ce=a(67),ie=a.n(ce),oe={types:{email:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u043b\u0456\u0434\u043d\u0438\u0439 email"}},le=function e(t,a,n,r,s,c){Object(f.a)(this,e),this.title=void 0,this.allDay=void 0,this.start=void 0,this.end=void 0,this.desc=void 0,this.resourceId=void 0,this.tooltip=void 0,this.title=t,this.allDay=r||!1,this.start=a,this.end=n,this.desc=s||"",this.resourceId=c},je=function(e,t){var a=[];e.sort((function(e,t){return e.id-t.id}));for(var n=0,r=0,s=(e=e.filter((function(e){return!e.isPrivileged}))).filter((function(e){return!e.isPrivileged})),c=s.filter((function(e){return!e.isNonResident})),i=0;i<=30;i++){var o=t?new Date(t):new Date;o.setDate(o.getDate()+i),5===o.getDay()?(r>=c.length&&(r=0),a.push(new le("".concat(c[r].lastName," ").concat(c[r].firstName[0],"."),o,o,!0)),++r>=c.length&&(r=0),a.push(new le("".concat(c[r].lastName," ").concat(c[r].firstName[0],"."),o,o,!0)),r++):6!==o.getDay()&&0!==o.getDay()&&(n>=s.length&&(n=0),a.push(new le("".concat(e[n].lastName," ").concat(e[n].firstName[0],"."),o,o,!0)),++n>=s.length&&(n=0),a.push(new le("".concat(e[n].lastName," ").concat(e[n].firstName[0],"."),o,o,!0)),n++)}return a},ue=function(e){var t=e.initialData,a=e.onSubmit,r=e.loading,s=Q.a.useForm(),c=Object(m.a)(s,1)[0];return Object(n.useEffect)((function(){t&&c.setFieldsValue({name:t.name,members:t.members})}),[t]),Object(N.jsx)("div",{className:ie.a.listForm,children:Object(N.jsxs)(Q.a,{name:"list",form:c,onFinish:a,autoComplete:"off",validateMessages:oe,initialValues:t?{name:t.name,members:t.members}:{name:"\u041d\u043e\u0432\u0438\u0439 \u0421\u043f\u0438\u0441\u043e\u043a"},children:[Object(N.jsxs)(W.a,{gutter:5,children:[Object(N.jsx)(Y.a,{flex:"auto",children:Object(N.jsx)(Q.a.Item,{name:"name",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443"},{max:99,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}],children:Object(N.jsx)($.a,{size:"large",placeholder:"\u041d\u0430\u0437\u0432\u0430"})})}),Object(N.jsx)(Y.a,{children:Object(N.jsx)(Q.a.Item,{children:Object(N.jsx)(h.a,{size:"large",type:"default",htmlType:"submit",icon:Object(N.jsx)(ne.a,{}),loading:r})})})]}),Object(N.jsx)(ee.a,{}),Object(N.jsx)(Q.a.List,{name:"members",rules:[{validator:function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a&&!(a.length<1)){e.next=5;break}return te.a.error({message:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u0433\u043e\u0432\u043e\u0433\u043e"}),e.abrupt("return",Promise.reject(new Error("\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u044f\u043a \u043c\u0456\u043d\u0456\u043c\u0443\u043c \u043e\u0434\u043d\u043e\u0433\u043e \u0447\u0435\u0440\u0433\u043e\u0432\u043e\u0433\u043e")));case 5:a.length>100&&te.a.error({message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0447\u0435\u0440\u0433\u043e\u0432\u0438\u0445 - 100"});case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}],children:function(e,t){var a=t.add,n=t.remove;return Object(N.jsxs)(N.Fragment,{children:[e.map((function(e){return Object(N.jsxs)(W.a,{className:ie.a.formItem,style:{display:"flex",marginBottom:8},gutter:5,children:[Object(N.jsx)(Y.a,{xs:12,sm:12,lg:7,children:Object(N.jsx)(Q.a.Item,Object(Z.a)(Object(Z.a)({},e),{},{name:[e.name,"lastName"],fieldKey:[e.fieldKey,"lastName"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"},{max:99,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}],children:Object(N.jsx)($.a,{placeholder:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435"})}))}),Object(N.jsx)(Y.a,{xs:12,sm:12,lg:7,children:Object(N.jsx)(Q.a.Item,Object(Z.a)(Object(Z.a)({},e),{},{name:[e.name,"firstName"],fieldKey:[e.fieldKey,"firstName"],rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f"},{max:99,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}],children:Object(N.jsx)($.a,{placeholder:"\u0406\u043c'\u044f"})}))}),Object(N.jsx)(Y.a,{xs:23,sm:23,lg:9,children:Object(N.jsx)(Q.a.Item,Object(Z.a)(Object(Z.a)({},e),{},{name:[e.name,"email"],fieldKey:[e.fieldKey,"email"],rules:[{type:"email"}],children:Object(N.jsx)($.a,{placeholder:"Email"})}))}),Object(N.jsx)(Y.a,{xs:1,sm:1,lg:1,children:Object(N.jsx)(re.a,{className:ie.a.deleteMember,onClick:function(){return n(e.name)}})}),Object(N.jsxs)(W.a,{className:ie.a.flags,children:[Object(N.jsx)(Y.a,{children:Object(N.jsx)(Q.a.Item,Object(Z.a)(Object(Z.a)({},e),{},{name:[e.name,"isPrivileged"],fieldKey:[e.fieldKey,"isPrivileged"],valuePropName:"checked",className:ie.a.flagInput,children:Object(N.jsx)(ae.a,{children:"\u041d\u0435 \u0447\u0435\u0440\u0433\u0443\u0454"})}))}),Object(N.jsx)(Y.a,{children:Object(N.jsx)(Q.a.Item,Object(Z.a)(Object(Z.a)({},e),{},{name:[e.name,"isNonResident"],fieldKey:[e.fieldKey,"isNonResident"],valuePropName:"checked",className:ie.a.flagInput,children:Object(N.jsx)(ae.a,{children:"\u0406\u043d\u043e\u0433\u043e\u0440\u043e\u0434\u043d\u0456\u0439"})}))})]})]},e.key)})),Object(N.jsx)(Q.a.Item,{children:Object(N.jsx)(h.a,{type:"dashed",onClick:function(){return a()},block:!0,icon:Object(N.jsx)(se.a,{}),disabled:c.getFieldValue("members")&&c.getFieldValue("members").length>100,children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0447\u0435\u0440\u0433\u043e\u0432\u043e\u0433\u043e"})})]})}})]})})},de=function(){var e=localStorage.getItem("user");return e&&JSON.parse(e).accessToken?{auth:JSON.parse(e).accessToken,"Access-Control-Allow-Origin":"*"}:{}},me="https://duty-calendar-api.herokuapp.com/members-list/",be=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(me,{headers:de()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(me,t,{headers:de()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.patch(me,t,{headers:de()});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=a(160),fe=a.n(xe),pe=function(){var e=Object(o.g)(),t=Object(n.useState)(null),a=Object(m.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),l=i[0],j=i[1],h=Object(n.useState)(!1),x=Object(m.a)(h,2),f=x[0],p=x[1];Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,be();case 4:(a=t.sent).data.members.sort((function(e,t){return e.id-t.id})),s(a.data),j(!1),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),401===t.t0.response.status&&(y.logout(),e.push("/")),j(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}),[]);var g=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(a),a.members.forEach((function(e,t){e.email||delete a.members[t].email})),p(!0),t.prev=3,r){t.next=9;break}return t.next=7,he(a);case 7:t.next=11;break;case 9:return t.next=11,Oe(a);case 11:s(a),p(!1),te.a.success({message:"\u0417\u043c\u0456\u043d\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e"}),t.next=21;break;case 16:t.prev=16,t.t0=t.catch(3),401===t.t0.response.status&&(y.logout(),e.push("/")),p(!1),te.a.error({message:"\u041f\u0456\u0434 \u0447\u0430\u0441 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445 \u0441\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430 :("});case 21:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsx)("div",{children:l?Object(N.jsx)("div",{className:fe.a.spinner,children:Object(N.jsx)(b.a,{indicator:Object(N.jsx)(O.a,{style:{fontSize:30},spin:!0})})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0447\u0435\u0440\u0433\u043e\u0432\u0438\u0445"}),Object(N.jsx)(ue,{initialData:r,onSubmit:g,loading:f})]})})},ge=a(130),ve=a(107),_e=a.n(ve),ye=(a(271),a(272),a(116)),Ne=a.n(ye);function ke(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}_e.a.updateLocale("uk",{week:{dow:1,doy:1}});var we={date:"\u0414\u0430\u0442\u0430",allDay:"\u0423\u0432\u0435\u0441\u044c \u0434\u0435\u043d\u044c",time:"\u0427\u0430\u0441",event:"\u0427\u0435\u0440\u0433\u043e\u0432\u0456",noEventsInRange:"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u0447\u0435\u0440\u0433\u043e\u0432\u0438\u0445",day:"\u0414\u0435\u043d\u044c",next:"\u0414\u0430\u043b\u0456",previous:"\u041d\u0430\u0437\u0430\u0434",month:"\u041c\u0456\u0441\u044f\u0446\u044c",today:"\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456",week:"\u0422\u0438\u0436\u0434\u0435\u043d\u044c",agenda:"\u041f\u0456\u0434\u0441\u0443\u043c\u043e\u043a"},Ce=Object(ge.b)(_e.a),Fe=function(){var e=Object(o.g)(),t=Object(n.useState)(null),a=Object(m.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)("\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440 \u0447\u0435\u0440\u0433\u0443\u0432\u0430\u043d\u043d\u044f"),i=Object(m.a)(c,2),l=i[0],j=i[1],h=Object(n.useState)(!1),x=Object(m.a)(h,2),f=x[0],p=x[1],g=function(){var e=Object(n.useState)(ke()),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(ke())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}().width;return Object(n.useEffect)((function(){Object(d.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.next=4,be();case 4:a=t.sent,n=je(a.data.members,a.data.createdAt),j(a.data.name),s(n),p(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),401===t.t0.response.status&&(y.logout(),e.push("/")),p(!1);case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}),[g]),Object(N.jsxs)("div",{className:Ne.a.calendarContainer,children:[Object(N.jsx)("h1",{children:f?Object(N.jsx)(b.a,{indicator:Object(N.jsx)(O.a,{style:{fontSize:25},spin:!0})}):l}),Object(N.jsx)("div",{className:Ne.a.\u0441alendarBox,children:f?Object(N.jsx)("div",{className:Ne.a.calendarLoading,children:Object(N.jsx)(b.a,{indicator:Object(N.jsx)(O.a,{style:{fontSize:50},spin:!0})})}):Object(N.jsx)(ge.a,{events:r||[],step:60,defaultView:g>768?"month":"agenda",defaultDate:new Date,localizer:Ce,messages:we})})]})},Ie=a(299),Se=a(129),Ee=a.n(Se),Le=function(){return Object(N.jsx)("footer",{className:Ee.a.footer,children:Object(N.jsxs)("div",{className:Ee.a.dev,children:[Object(N.jsx)("span",{children:"\u0406\u0432\u0430\u043d \u041d\u0430\u0437\u0430\u0440\u0435\u043d\u043a\u043e"}),Object(N.jsx)("a",{href:"https://github.com/ivan-nazarenko",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(Ie.a,{})}),Object(N.jsx)("a",{href:"mailto:nazarenkoivan@protonmail.com",children:Object(N.jsx)(w.a,{})})]})})},De=a(164),ze=a.n(De),He=function(){var e=Object(o.g)(),t=y.getCurrentUser();return Object(N.jsxs)("div",{className:ze.a.layout,children:[Object(N.jsx)(X,{email:t.email,onLogout:function(){y.logout(),localStorage.clear(),e.push("/"),window.location.reload()}}),Object(N.jsx)(D,{children:Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{path:"/home/calendar",children:Object(N.jsx)(Fe,{})}),Object(N.jsx)(o.b,{path:"/home/list",children:Object(N.jsx)(pe,{})})]})}),Object(N.jsx)(Le,{})]})},Me=a(283),Pe=a(117),qe=a.n(Pe),Be=function(){return Object(N.jsxs)("header",{className:qe.a.headerContainer,children:[Object(N.jsx)("span",{className:qe.a.brand,children:"DutyCalendar"}),Object(N.jsx)("span",{className:qe.a.desc,children:"\u041a\u0435\u0440\u0443\u0439\u0442\u0435 \u0447\u0435\u0440\u0433\u0443\u0432\u0430\u043d\u043d\u044f\u043c\u0438 \u0437 \u043b\u0435\u0433\u043a\u0456\u0441\u0442\u044e!"})]})},Ke=a(118),Te=a.n(Ke),Ae=a(289),Ve=a(290),Je=a(49),Re=a.n(Je),Ue=function(){var e=Object(o.g)(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],s=a[1],c=Object(n.useState)(!1),i=Object(m.a)(c,2),l=i[0],j=i[1],b=function(){var t=Object(d.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.email,r=a.password,j(!0),t.prev=2,t.next=5,y.login(n,r);case 5:e.push("/home/calendar"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),j(!1),s(!0);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[r&&Object(N.jsx)(Ae.a,{message:"\u041d\u0435\u0432\u0456\u0440\u043d\u0456 \u0434\u0430\u043d\u0456, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437",type:"error",className:Re.a.loginError,showIcon:!0}),Object(N.jsxs)(Q.a,{name:"login",className:Re.a.loginForm,onFinish:b,validateMessages:oe,size:"large",children:[Object(N.jsx)(Q.a.Item,{name:"email",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c email"},{type:"email"}],children:Object(N.jsx)($.a,{prefix:Object(N.jsx)(w.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(N.jsx)(Q.a.Item,{name:"password",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(N.jsx)($.a.Password,{prefix:Object(N.jsx)(Ve.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(N.jsx)(Q.a.Item,{className:Re.a.submitContainer,children:Object(N.jsx)(h.a,{type:"primary",htmlType:"submit",className:Re.a.loginFormButton,loading:l,children:"\u0423\u0432\u0456\u0439\u0442\u0438"})})]})]})},Ge=function(){var e=Object(o.g)(),t=Q.a.useForm(),a=Object(m.a)(t,1)[0],r=Object(n.useState)(!1),s=Object(m.a)(r,2),c=s[0],i=s[1],l=Object(n.useState)(!1),j=Object(m.a)(l,2),b=j[0],O=j[1],x=function(){var t=Object(d.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.email,r=a.password,O(!0),t.prev=2,t.next=5,y.register(n,r);case 5:return t.next=7,y.login(n,r);case 7:e.push("/home/calendar"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),O(!1),i(!0);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)(N.Fragment,{children:[c&&Object(N.jsx)(Ae.a,{message:"\u0426\u0435\u0439 email \u0432\u0436\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f",type:"error",className:Re.a.loginError,showIcon:!0}),Object(N.jsxs)(Q.a,{form:a,name:"registration",className:Re.a.loginForm,onFinish:x,validateMessages:oe,size:"large",children:[Object(N.jsx)(Q.a.Item,{name:"email",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c email"},{type:"email"}],children:Object(N.jsx)($.a,{prefix:Object(N.jsx)(w.a,{className:"site-form-item-icon"}),placeholder:"Email"})}),Object(N.jsx)(Q.a.Item,{name:"password",rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"},{min:6,message:"\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u044c\u043d\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 6 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},{max:99,message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430 \u0434\u043e\u0432\u0436\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"}],hasFeedback:!0,children:Object(N.jsx)($.a,{prefix:Object(N.jsx)(Ve.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"})}),Object(N.jsx)(Q.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("\u041f\u0430\u0440\u043e\u043b\u0456 \u043d\u0435 \u0437\u0431\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f"):Promise.resolve()}}}],children:Object(N.jsx)($.a,{prefix:Object(N.jsx)(Ve.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})}),Object(N.jsx)(Q.a.Item,{className:Re.a.submitContainer,children:Object(N.jsx)(h.a,{type:"primary",htmlType:"submit",className:Re.a.loginFormButton,loading:b,children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"})})]})]})},Xe=Me.a.TabPane,Ze=function(){var e=Object(o.g)();return Object(n.useEffect)((function(){y.getCurrentUser()&&e.push("/home/calendar")}),[]),Object(N.jsxs)("div",{className:Te.a.landingContainer,children:[Object(N.jsx)(Be,{}),Object(N.jsx)("main",{className:Te.a.landingMain,children:Object(N.jsxs)(Me.a,{defaultActiveKey:"1",className:Te.a.authTabs,size:"large",children:[Object(N.jsx)(Xe,{tab:"\u0412\u0445\u0456\u0434",children:Object(N.jsx)(Ue,{})},"1"),Object(N.jsx)(Xe,{tab:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",children:Object(N.jsx)(Ge,{})},"2")]})})]})},Qe=function(){return Object(N.jsxs)(o.d,{children:[Object(N.jsx)(o.b,{exact:!0,path:"/",children:Object(N.jsx)(Ze,{})}),Object(N.jsx)(o.b,{path:"/email-confirmation",children:Object(N.jsx)(S,{})}),Object(N.jsx)(o.b,{exact:!0,path:"/verification/:code/:id",children:Object(N.jsx)(k,{})}),Object(N.jsx)(S,{children:Object(N.jsx)(o.b,{path:"/home",children:Object(N.jsx)(He,{})})}),Object(N.jsxs)(o.b,{to:"*",children:[Object(N.jsx)(l.a,{status:"404",title:"404",subTitle:"\u0421\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e!"}),","]})]})};a(273);var We=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(i.a,{children:Object(N.jsx)(Qe,{})})})};c.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(We,{})}),document.getElementById("root"))},49:function(e,t,a){e.exports={loginForm:"AuthForm_loginForm__XexDI",submitContainer:"AuthForm_submitContainer__2Kb4E",loginFormButton:"AuthForm_loginFormButton__Et2t4",registerLink:"AuthForm_registerLink__7t7cF",loginError:"AuthForm_loginError__25daa"}},67:function(e,t,a){e.exports={listForm:"ListForm_listForm__3jP3w",deleteMember:"ListForm_deleteMember__1G8fu",formItem:"ListForm_formItem__tPiqY",flags:"ListForm_flags__1-g4q",flagInput:"ListForm_flagInput__2jtrC"}},85:function(e,t,a){e.exports={homeHeader:"Header_homeHeader__3_kkt",sideMenuButton:"Header_sideMenuButton__3x8yM",brand:"Header_brand__SqUdZ",user:"Header_user__1rEbA"}}},[[274,1,2]]]);
//# sourceMappingURL=main.67b876b6.chunk.js.map