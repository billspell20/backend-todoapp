(this["webpackJsonpresturaunt-todo-app"]=this["webpackJsonpresturaunt-todo-app"]||[]).push([[0],{199:function(e,t,o){},208:function(e,t,o){},231:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),c=o(43),a=o.n(c),s=o(53),r=o(54),l=o(65),d=o(64),h=o(122),j=o(19),u=o(247),b=o(249),p=o(140),m=o.n(p),O=o(78),x=o(163),f=o(250),g=o(248),y=o(246),v=o(251),k=o(42),C=o(164);k.a.initializeApp({apiKey:"AIzaSyCKTMDYgXATkKCMxxYZJuH22e36BOE2OsQ",authDomain:"todo-authentication-react.firebaseapp.com",projectId:"todo-authentication-react",storageBucket:"todo-authentication-react.appspot.com",messagingSenderId:"589088212389",appId:"1:589088212389:web:19ec8df13a656d097ed44c",measurementId:"G-T9Y03VTMH9"});var N=k.a.auth(),w=new C.a.AuthUI(N),_=(o(199),o(4));function T(e,t,o){return S.apply(this,arguments)}function S(){return(S=Object(x.a)(m.a.mark((function e(t,o,n){var i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=7;break}return e.next=4,N.signInWithEmailAndPassword(t,o);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,N.createUserWithEmailAndPassword(t,o);case 9:e.t0=e.sent;case 10:i=e.t0,console.log(i),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(0),console.log(e.t1);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var P=function(){var e=Object(n.useState)(!0),t=Object(O.a)(e,2),o=t[0],i=t[1],c=Object(n.useState)(null),a=Object(O.a)(c,2),s=a[0],r=a[1],l=Object(n.useState)(""),d=Object(O.a)(l,2),h=d[0],u=d[1],b=Object(n.useState)(""),p=Object(O.a)(b,2),m=p[0],x=p[1],C=Object(n.useState)(""),S=Object(O.a)(C,2),P=S[0],D=S[1],L=Object(n.useState)(""),E=Object(O.a)(L,2),I=E[0],F=E[1];return N.onAuthStateChanged((function(e){return r(e)})),Object(n.useEffect)((function(){s||w.start(".google-login",{signInOptions:[k.a.auth.GoogleAuthProvider.PROVIDER_ID],signInFlow:"redirect"})}),[s]),Object(_.jsx)("div",{className:"auth-form-wrapper",children:Object(_.jsx)(f.a,{className:"auth-form-card",children:Object(_.jsx)(f.a.Content,{children:s?void j.a:Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)(f.a.Header,{className:"auth-form-header",children:"Restaurant Passport"}),Object(_.jsxs)(g.a,{compact:!0,secondary:!0,children:[Object(_.jsx)(g.a.Item,{name:"Login",onClick:function(){return i(!0)},active:o}),Object(_.jsx)(g.a.Item,{name:"Sign up",onClick:function(){return i(!1)},active:!o})]}),o?Object(_.jsxs)(n.Fragment,{children:[Object(_.jsxs)(y.a,{children:[Object(_.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(_.jsx)("label",{className:"form-labels",children:"Email"}),Object(_.jsx)("input",{placeholder:"Email Address",name:"loginEmail",type:"email",value:h||"",onChange:function(e){return u(e.target.value)}})]}),Object(_.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(_.jsx)("label",{className:"form-labels",children:"Password"}),Object(_.jsx)("input",{placeholder:"Password",name:"loginPassword",type:"password",value:m||"",onChange:function(e){return x(e.target.value)}})]}),Object(_.jsx)(v.a,{onClick:function(){return T(h,m,!0)},className:"auth-form-buttons",color:"green",children:"Login"})]}),Object(_.jsx)("div",{className:"google-login"})]}):Object(_.jsxs)(n.Fragment,{children:[Object(_.jsxs)(y.a,{children:[Object(_.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(_.jsx)("label",{className:"form-labels",children:"Email"}),Object(_.jsx)("input",{placeholder:"Email Address",name:"signUpEmail",type:"email",value:P||"",onChange:function(e){return D(e.target.value)}})]}),Object(_.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(_.jsx)("label",{className:"form-labels",children:"Password"}),Object(_.jsx)("input",{placeholder:"Password",name:"signUpPassword",type:"password",value:I||"",onChange:function(e){return F(e.target.value)}})]}),Object(_.jsx)(v.a,{className:"auth-form-buttons",color:"teal",onClick:function(){return T(P,I,!1)},children:"Sign up"})]}),Object(_.jsx)("div",{className:"google-login"})]})]})})})})},D=(o(207),o(208),o(44)),L=o(68),E=o.n(L),I=toString(k.a.auth().currentUser),F=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).onChangeTodoDescription=n.onChangeTodoDescription.bind(Object(D.a)(n)),n.onChangeTodoPriority=n.onChangeTodoPriority.bind(Object(D.a)(n)),n.onSubmit=n.onSubmit.bind(Object(D.a)(n)),n.state={todo_description:"",todo_priority:"",todo_completed:!1},n}return Object(r.a)(o,[{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("Todo Description: ".concat(this.state.todo_description)),console.log("Todo Priority: ".concat(this.state.todo_priority));var t={todo_description:this.state.todo_description,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};E.a.post("https://www.restaurant-list.com/todos/"+{user:I}+"/add",t).then((function(e){return console.log(e.data)})),this.setState({todo_description:"",todo_priority:"",todo_completed:!1}),this.props.history.push("/"),window.location.reload()}},{key:"render",value:function(){return Object(_.jsxs)("div",{style:{marginTop:10},children:[Object(_.jsx)("h3",{children:"Create New Entry"}),Object(_.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{children:"Description: "}),Object(_.jsx)("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsxs)("div",{className:"form-check form-check-inline",children:[Object(_.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(_.jsx)("label",{className:"form-check-label",children:"Low"})]}),Object(_.jsxs)("div",{className:"form-check form-check-inline",children:[Object(_.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(_.jsx)("label",{className:"form-check-label",children:"Medium"})]}),Object(_.jsxs)("div",{className:"form-check form-check-inline",children:[Object(_.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(_.jsx)("label",{className:"form-check-label",children:"High"})]})]}),Object(_.jsx)("div",{className:"form-group row justify-content-center",children:Object(_.jsx)("input",{type:"submit",value:"Create Entry",className:"btn btn-outline-primary"})})]}),Object(_.jsx)("div",{className:"row justify-content-center",children:Object(_.jsx)("a",{href:"/",className:"btn btn-outline-danger",role:"button","aria-pressed":"true",style:{marginBottom:"40px"},children:"Cancel"})})]})}}]),o}(n.Component),A=toString(k.a.auth().currentUser),M=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).onChangeTodoDescription=n.onChangeTodoDescription.bind(Object(D.a)(n)),n.onChangeTodoPriority=n.onChangeTodoPriority.bind(Object(D.a)(n)),n.onChangeTodoCompleted=n.onChangeTodoCompleted.bind(Object(D.a)(n)),n.onSubmit=n.onSubmit.bind(Object(D.a)(n)),n.state={todo_description:"",todo_priority:"",todo_completed:!1},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://www.restaurant-list.com/todos/"+{user:A}+this.props.match.params.id).then((function(t){e.setState({todo_description:t.data.todo_description,todo_priority:t.data.todo_priority,todo_completed:t.data.todo_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onChangeTodoCompleted",value:function(e){this.setState({todo_completed:!this.state.todo_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={todo_description:this.state.todo_description,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};console.log(t),E.a.post("https://www.restaurant-list.com/todos/update/"+{user:A}+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),this.props.history.push("/"),window.location.reload()}},{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{align:"center",children:"Update List"}),Object(_.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsx)("label",{children:"Description: "}),Object(_.jsx)("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})]}),Object(_.jsxs)("div",{className:"form-group",children:[Object(_.jsxs)("div",{className:"form-check form-check-inline",children:[Object(_.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(_.jsx)("label",{className:"form-check-label",children:"Low"})]}),Object(_.jsxs)("div",{className:"form-check form-check-inline",children:[Object(_.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(_.jsx)("label",{className:"form-check-label",children:"Medium"})]}),Object(_.jsxs)("div",{className:"form-check form-check-inline",children:[Object(_.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(_.jsx)("label",{className:"form-check-label",children:"High"})]})]}),Object(_.jsxs)("div",{className:"form-check",children:[Object(_.jsx)("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeTodoCompleted,checked:this.state.todo_completed,value:this.state.todo_completed}),Object(_.jsx)("label",{className:"form-check-label",htmlFor:"completedCheckbox",children:"Visited"})]}),Object(_.jsx)("br",{}),Object(_.jsx)("div",{className:"form-group row justify-content-center",children:Object(_.jsx)("input",{type:"submit",value:"Update Item",className:"btn btn-outline-primary"})})]}),Object(_.jsx)("div",{className:"row justify-content-center",children:Object(_.jsx)("a",{href:"/",className:"btn btn-outline-danger",role:"button","aria-pressed":"true",style:{marginBottom:"40px"},children:"Cancel"})})]})}}]),o}(n.Component),H=o(168),U=toString(k.a.auth().currentUser),B=function(e){return Object(_.jsxs)("tr",{style:{border:!0===e.todo.todo_completed?"5px double #00FA9A":"black"},children:[Object(_.jsx)("td",{children:e.todo.todo_description}),Object(_.jsx)("td",{children:e.todo.todo_priority}),Object(_.jsx)("td",{children:Object(_.jsx)(h.b,{to:"/edit/"+{user:U}+"/"+e.todo._id,className:"btn btn-outline-info",children:"Edit"})}),Object(_.jsx)("td",{children:Object(_.jsx)(H.a,{onClick:function(){return function(e){console.log("Test"),E.a.delete("https://www.restaurant-list.com/todos/"+{user:U}+"/delete/"+e.todo._id).then((function(e){console.log("Item successfully deleted!")})).catch((function(e){console.log(e)})),window.location.reload()}(e)},className:"btn btn-outline-danger",children:"Delete"})}),Object(_.jsx)("td",{style:{display:"none"},children:e.todo.todo_completed})]})};var R=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).state={todos:[]},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://www.restaurant-list.com/todos/"+{user:U}).then((function(t){e.setState({todos:t.data})})).catch((function(e){console.log(e)}))}},{key:"todoList",value:function(){return this.state.todos.map((function(e,t){return Object(_.jsx)(B,{todo:e},t)}))}},{key:"render",value:function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:"Restaurant List"}),Object(_.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"Restaurant"}),Object(_.jsx)("th",{children:"Priority Level"}),Object(_.jsx)("th",{children:"Action"}),Object(_.jsx)("th",{children:"Delete"}),Object(_.jsx)("th",{style:{display:"none"}})]})}),Object(_.jsx)("tbody",{children:this.todoList()})]}),Object(_.jsx)("div",{className:"row justify-content-center",children:Object(_.jsx)("a",{href:"/create",className:"btn btn-outline-primary",role:"button","aria-pressed":"true",style:{marginBottom:"40px"},children:"Create New Entry"})})]})}}]),o}(n.Component);var V=function(){var e=(new Date).getFullYear();return Object(_.jsx)("footer",{children:Object(_.jsx)("div",{id:"footerdiv",children:Object(_.jsxs)("p",{children:["Copyright \u24d2 ",e]})})})},Y=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return Object(_.jsxs)(h.a,{children:[Object(_.jsxs)(u.a,{bg:"dark",style:{backgroundColor:"282c34"},expand:"sm",children:[Object(_.jsx)(u.a.Brand,{href:"/",style:{color:"white"},children:"Restaurant Passport"}),Object(_.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(_.jsx)(u.a.Collapse,{id:"basic-navbar-nav",style:{color:"white"},children:Object(_.jsxs)(b.a,{className:"mr-auto",children:[Object(_.jsx)(b.a.Link,{href:"/",className:"nav-link",style:{color:"white"},children:"View List"}),Object(_.jsx)(b.a.Link,{href:"/create",className:"nav-link",style:{color:"white"},children:"Add Entry"})]})})]}),Object(_.jsx)("br",{}),Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(j.b,{path:"/login",exact:!0,component:P}),Object(_.jsx)(j.b,{path:"/",exact:!0,component:R}),Object(_.jsx)(j.b,{path:"/edit/:id",component:M}),Object(_.jsx)(j.b,{path:"/create",component:F})]}),Object(_.jsx)(V,{})]})}}]),o}(n.Component),J=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,253)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;o(e),n(e),i(e),c(e),a(e)}))};o(229),o(230);a.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(Y,{})}),document.getElementById("root")),J()}},[[231,1,2]]]);
//# sourceMappingURL=main.69d9d6a7.chunk.js.map