(this["webpackJsonpresturaunt-todo-app"]=this["webpackJsonpresturaunt-todo-app"]||[]).push([[0],{178:function(e,t,o){},187:function(e,t,o){},193:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),a=o(35),c=o.n(a),s=o(45),r=o(46),l=o(57),d=o(56),h=o(114),u=o(13),j=o(209),b=o(211),p=o(130),m=o.n(p),O=o(69),f=o(145),x=o(212),g=o(210),y=o(208),v=o(213),k=o(7),C=(o(70),o(146));k.a.initializeApp({apiKey:"AIzaSyCKTMDYgXATkKCMxxYZJuH22e36BOE2OsQ",authDomain:"todo-authentication-react.firebaseapp.com",projectId:"todo-authentication-react",storageBucket:"todo-authentication-react.appspot.com",messagingSenderId:"589088212389",appId:"1:589088212389:web:19ec8df13a656d097ed44c",measurementId:"G-T9Y03VTMH9"});var N=k.a.auth(),_=new C.a.AuthUI(N),w=(o(178),o(2));function S(e,t,o){return T.apply(this,arguments)}function T(){return(T=Object(f.a)(m.a.mark((function e(t,o,n){var i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!n){e.next=7;break}return e.next=4,N.signInWithEmailAndPassword(t,o);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,N.createUserWithEmailAndPassword(t,o);case 9:e.t0=e.sent;case 10:i=e.t0,console.log(i),e.next=17;break;case 14:e.prev=14,e.t1=e.catch(0),console.log(e.t1);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var P=function(){var e=Object(n.useState)(!0),t=Object(O.a)(e,2),o=t[0],i=t[1],a=Object(n.useState)(null),c=Object(O.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),d=Object(O.a)(l,2),h=d[0],j=d[1],b=Object(n.useState)(""),p=Object(O.a)(b,2),m=p[0],f=p[1],C=Object(n.useState)(""),T=Object(O.a)(C,2),P=T[0],D=T[1],L=Object(n.useState)(""),A=Object(O.a)(L,2),E=A[0],I=A[1];return N.onAuthStateChanged((function(e){return r(e)})),Object(n.useEffect)((function(){s||_.start(".google-login",{signInOptions:[k.a.auth.GoogleAuthProvider.PROVIDER_ID],signInFlow:"redirect"})}),[s]),Object(w.jsx)("div",{className:"auth-form-wrapper",children:Object(w.jsx)(x.a,{className:"auth-form-card",children:Object(w.jsx)(x.a.Content,{children:s?Object(w.jsx)(u.a,{to:"/list"}):Object(w.jsxs)(n.Fragment,{children:[Object(w.jsx)(x.a.Header,{className:"auth-form-header",children:"Restaurant Passport"}),Object(w.jsxs)(g.a,{compact:!0,secondary:!0,children:[Object(w.jsx)(g.a.Item,{name:"Login",onClick:function(){return i(!0)},active:o}),Object(w.jsx)(g.a.Item,{name:"Sign up",onClick:function(){return i(!1)},active:!o})]}),o?Object(w.jsxs)(n.Fragment,{children:[Object(w.jsxs)(y.a,{children:[Object(w.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(w.jsx)("label",{className:"form-labels",children:"Email"}),Object(w.jsx)("input",{placeholder:"Email Address",name:"loginEmail",type:"email",value:h||"",onChange:function(e){return j(e.target.value)}})]}),Object(w.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(w.jsx)("label",{className:"form-labels",children:"Password"}),Object(w.jsx)("input",{placeholder:"Password",name:"loginPassword",type:"password",value:m||"",onChange:function(e){return f(e.target.value)}})]}),Object(w.jsx)(v.a,{onClick:function(){return S(h,m,!0)},className:"auth-form-buttons",color:"green",children:"Login"})]}),Object(w.jsx)("div",{className:"google-login"})]}):Object(w.jsxs)(n.Fragment,{children:[Object(w.jsxs)(y.a,{children:[Object(w.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(w.jsx)("label",{className:"form-labels",children:"Email"}),Object(w.jsx)("input",{placeholder:"Email Address",name:"signUpEmail",type:"email",value:P||"",onChange:function(e){return D(e.target.value)}})]}),Object(w.jsxs)(y.a.Field,{className:"auth-form-fields",children:[Object(w.jsx)("label",{className:"form-labels",children:"Password"}),Object(w.jsx)("input",{placeholder:"Password",name:"signUpPassword",type:"password",value:E||"",onChange:function(e){return I(e.target.value)}})]}),Object(w.jsx)(v.a,{className:"auth-form-buttons",color:"teal",onClick:function(){return S(P,E,!1)},children:"Sign up"})]}),Object(w.jsx)("div",{className:"google-login"})]})]})})})})},D=(o(186),o(187),o(36)),L=o(60),A=o.n(L),E=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).onChangeTodoDescription=n.onChangeTodoDescription.bind(Object(D.a)(n)),n.onChangeTodoPriority=n.onChangeTodoPriority.bind(Object(D.a)(n)),n.onSubmit=n.onSubmit.bind(Object(D.a)(n)),n.state={todo_description:"",todo_priority:"",todo_completed:!1,user_id:"null"},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this;k.a.auth().onAuthStateChanged((function(t){t?e.setState({user_id:t.uid}):(console.log("no id"),u.a)})).bind(this)}},{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted:"),console.log("Todo Description: ".concat(this.state.todo_description)),console.log("Todo Priority: ".concat(this.state.todo_priority));var t={todo_description:this.state.todo_description,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed,user_id:this.state.user_id};A()("https://www.restaurant-list.com/todos/add/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e.data)})),this.setState({todo_description:"",todo_priority:"",todo_completed:!1,user_id:"null"}),this.props.history.push("/list"),window.location.reload()}},{key:"render",value:function(){return Object(w.jsxs)("div",{style:{marginTop:10},children:[Object(w.jsx)("h3",{children:"Create New Entry"}),Object(w.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Description: "}),Object(w.jsx)("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsxs)("div",{className:"form-check form-check-inline",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(w.jsx)("label",{className:"form-check-label",children:"Low"})]}),Object(w.jsxs)("div",{className:"form-check form-check-inline",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(w.jsx)("label",{className:"form-check-label",children:"Medium"})]}),Object(w.jsxs)("div",{className:"form-check form-check-inline",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(w.jsx)("label",{className:"form-check-label",children:"High"})]})]}),Object(w.jsx)("div",{className:"form-group row justify-content-center",children:Object(w.jsx)("input",{type:"submit",value:"Create Entry",className:"btn btn-outline-primary"})})]}),Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("a",{href:"/list",className:"btn btn-outline-danger",role:"button","aria-pressed":"true",style:{marginBottom:"40px"},children:"Cancel"})})]})}}]),o}(n.Component),I=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).onChangeTodoDescription=n.onChangeTodoDescription.bind(Object(D.a)(n)),n.onChangeTodoPriority=n.onChangeTodoPriority.bind(Object(D.a)(n)),n.onChangeTodoCompleted=n.onChangeTodoCompleted.bind(Object(D.a)(n)),n.onSubmit=n.onSubmit.bind(Object(D.a)(n)),n.state={todo_description:"",todo_priority:"",todo_completed:!1,user_id:"null"},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this;k.a.auth().onAuthStateChanged((function(t){t?e.setState({user_id:t.uid}):(console.log("no id"),u.a)})).bind(this),A()("https://www.restaurant-list.com/todos/"+this.props.match.params.id+"/").then((function(t){e.setState({todo_description:t.data.todo_description,todo_priority:t.data.todo_priority,todo_completed:t.data.todo_completed})})).catch((function(e){console.log(e)}))}},{key:"onChangeTodoDescription",value:function(e){this.setState({todo_description:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({todo_priority:e.target.value})}},{key:"onChangeTodoCompleted",value:function(e){this.setState({todo_completed:!this.state.todo_completed})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={todo_description:this.state.todo_description,todo_priority:this.state.todo_priority,todo_completed:this.state.todo_completed};A()("https://www.restaurant-list.com/todos/update/"+this.props.match.params.id+"/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e.data)})),this.props.history.push("/list"),window.location.reload()}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{align:"center",children:"Update List"}),Object(w.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Description: "}),Object(w.jsx)("input",{type:"text",className:"form-control",value:this.state.todo_description,onChange:this.onChangeTodoDescription})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsxs)("div",{className:"form-check form-check-inline",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(w.jsx)("label",{className:"form-check-label",children:"Low"})]}),Object(w.jsxs)("div",{className:"form-check form-check-inline",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(w.jsx)("label",{className:"form-check-label",children:"Medium"})]}),Object(w.jsxs)("div",{className:"form-check form-check-inline",children:[Object(w.jsx)("input",{className:"form-check-input",type:"radio",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.todo_priority,onChange:this.onChangeTodoPriority}),Object(w.jsx)("label",{className:"form-check-label",children:"High"})]})]}),Object(w.jsxs)("div",{className:"form-check",children:[Object(w.jsx)("input",{className:"form-check-input",id:"completedCheckbox",type:"checkbox",name:"completedCheckbox",onChange:this.onChangeTodoCompleted,checked:this.state.todo_completed,value:this.state.todo_completed}),Object(w.jsx)("label",{className:"form-check-label",htmlFor:"completedCheckbox",children:"Visited"})]}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{className:"form-group row justify-content-center",children:Object(w.jsx)("input",{type:"submit",value:"Update Item",className:"btn btn-outline-primary"})})]}),Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("a",{href:"/list",className:"btn btn-outline-danger",role:"button","aria-pressed":"true",style:{marginBottom:"40px"},children:"Cancel"})})]})}}]),o}(n.Component),F=o(150),M=function(e){return Object(w.jsxs)("tr",{style:{border:!0===e.todo.todo_completed?"5px double #00FA9A":"black"},children:[Object(w.jsx)("td",{children:e.todo.todo_description}),Object(w.jsx)("td",{children:e.todo.todo_priority}),Object(w.jsx)("td",{children:Object(w.jsx)(h.b,{to:"/edit/"+e.todo._id,className:"btn btn-outline-info",children:"Edit"})}),Object(w.jsx)("td",{children:Object(w.jsx)(F.a,{onClick:function(){return function(e){A()("https://www.restaurant-list.com/todos/delete/"+e.todo._id+"/",{method:"POST"}).then((function(e){console.log("Item successfully deleted!")})).catch((function(e){console.log(e)})),window.location.reload()}(e)},className:"btn btn-outline-danger",children:"Delete"})}),Object(w.jsx)("td",{style:{display:"none"},children:e.todo.todo_completed})]})};var H=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(s.a)(this,o),(n=t.call(this,e)).state={todos:[],user_id:"null"},n}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=this;k.a.auth().onAuthStateChanged((function(t){t?(e.setState({user_id:t.uid}),A()("https://www.restaurant-list.com/todos/list/"+e.state.user_id+"/").then((function(t){e.setState({todos:t.data})})).catch((function(e){console.log(e)}))):(console.log("no id"),u.a)}))}},{key:"todoList",value:function(){var e=this;return Object.keys(this.state.todos).map((function(t){return Object(w.jsx)(M,{todo:e.state.todos[t]},t)}))}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Restaurant List"}),Object(w.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Restaurant"}),Object(w.jsx)("th",{children:"Priority Level"}),Object(w.jsx)("th",{children:"Action"}),Object(w.jsx)("th",{children:"Delete"}),Object(w.jsx)("th",{style:{display:"none"}})]})}),Object(w.jsx)("tbody",{children:this.todoList()})]}),Object(w.jsx)("div",{className:"row justify-content-center",children:Object(w.jsx)("a",{href:"/create",className:"btn btn-outline-primary",role:"button","aria-pressed":"true",style:{marginBottom:"40px"},children:"Create New Entry"})})]})}}]),o}(n.Component);var B=function(){var e=(new Date).getFullYear();return Object(w.jsx)("footer",{children:Object(w.jsx)("div",{id:"footerdiv",children:Object(w.jsxs)("p",{children:["Copyright \u24d2 ",e]})})})},R=function(e){Object(l.a)(o,e);var t=Object(d.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return Object(w.jsxs)(h.a,{children:[Object(w.jsxs)(j.a,{bg:"dark",style:{backgroundColor:"282c34"},expand:"sm",children:[Object(w.jsx)(j.a.Brand,{href:"/",style:{color:"white"},children:"Restaurant Passport"}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(j.a.Collapse,{id:"basic-navbar-nav",style:{color:"white"},children:Object(w.jsxs)(b.a,{className:"mr-auto",children:[Object(w.jsx)(b.a.Link,{href:"/",className:"nav-link",onClick:function(){return N.signOut()},style:{color:"white"},children:"Log Out"}),Object(w.jsx)(b.a.Link,{href:"/list",className:"nav-link",style:{color:"white"},children:"View List"}),Object(w.jsx)(b.a.Link,{href:"/create",className:"nav-link",style:{color:"white"},children:"Add Entry"})]})})]}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(u.b,{path:"/",exact:!0,component:P}),Object(w.jsx)(u.b,{path:"/list",exact:!0,component:H}),Object(w.jsx)(u.b,{path:"/edit/:id",component:I}),Object(w.jsx)(u.b,{path:"/create",component:E})]}),Object(w.jsx)(B,{})]})}}]),o}(n.Component),U=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,215)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;o(e),n(e),i(e),a(e),c(e)}))};o(191),o(192);c.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(R,{})}),document.getElementById("root")),U()}},[[193,1,2]]]);
//# sourceMappingURL=main.13d5b883.chunk.js.map