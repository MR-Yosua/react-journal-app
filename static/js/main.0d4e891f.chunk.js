(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{158:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(32),s=n.n(r),o=n(7),i=n(8),u=n.n(i),l=n(11),d=n(20),j=n(21),b=n(10),p=n(5),m=n(17),f=n.n(m),h=n(30);n(73),n(76);h.a.initializeApp({apiKey:"AIzaSyBkwvxFJ53mXIWXPYdyMPi5QImPAEnjqT8",authDomain:"react-journal-app-6fdc8.firebaseapp.com",projectId:"react-journal-app-6fdc8",storageBucket:"react-journal-app-6fdc8.appspot.com",messagingSenderId:"901752510157",appId:"1:901752510157:web:96e61fa9469d2784a93b84"});var O=h.a.firestore(),x=new h.a.auth.GoogleAuthProvider,v=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dsdunk4iv/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dsdunk4iv/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(p.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="[Auth] Login",y="[Auth] Logout",w="[UI] Set Error",N="[UI] Remove Error",k="[UI] Start loading",C="[UI] Finish loading",E="[Notes] New note",S="[Notes] Set active note",I="[Notes] Load notes",A="[Notes] Update note",P="[Notes] Delete note",B="[Notes] Logout cleaning",D=function(e,t){return{type:S,payload:Object(p.a)({id:e},t)}},L=function(e,t){return{type:E,payload:Object(p.a)({id:e},t)}},M=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:a=t.sent,n(U(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return{type:I,payload:e}},R=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(p.a)({},e)).id,t.next=6,O.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r).then((function(){n(T(e.id,r))})).catch((function(e){console.log(e)}));case 6:f.a.fire({position:"top-end",width:"25rem",icon:"success",title:"Your note was saved",showConfirmButton:!1,timer:1500});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},T=function(e,t){return{type:A,payload:{id:e,note:Object(p.a)({id:e},t)}}},Y=function(e){return{type:P,payload:e}},F=n(35),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(p.a)(Object(p.a)({},a),{},Object(F.a)({},t.name,t.value)))};return[a,o,s]},q=n(27),J=n.n(q),X=(n(46),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=J()().format("dddd D MMMM");return Object(a.jsxs)("div",{className:"notes__appbar ",children:[Object(a.jsx)("span",{children:n}),Object(a.jsx)("input",{id:"fileselector",type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,f.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,onBeforeOpen:function(){f.a.showLoading()}}),t.next=4,v(e);case 4:r=t.sent,c.url=r,n(R(c)),f.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileselector").click()},children:"Picture"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(R(t))},children:"Save"})]})]})}),z=function(){var e=Object(o.c)((function(e){return e.notes})).active,t=W(e),n=Object(d.a)(t,3),r=n[0],s=n[1],i=n[2],j=r.body,b=r.title,m=r.id,h=Object(o.b)(),x=Object(c.useRef)(e.id);Object(c.useEffect)((function(){e.id!==x.current&&(i(e),x.current=e.id)}),[e,i]),Object(c.useEffect)((function(){h(D(r.id,Object(p.a)({},r)))}),[r,h]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(X,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{type:"text",placeholder:"Add title",className:"notes__title-input",autoComplete:"off",name:"title",value:b,onChange:s}),Object(a.jsx)("textarea",{placeholder:"What happened today?",className:"notes__textarea",autoComplete:"off",name:"body",value:j,onChange:s}),e.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:e.url,alt:"img"})})]}),Object(a.jsx)("button",{className:"btn-danger",onClick:function(){f.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&(f.a.fire("Deleted!","Your note has been deleted.","success"),h(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,O.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(m)))}))},children:"Delete"})]})},G=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsxs)("p",{children:["Select some Journal",Object(a.jsx)("br",{}),"Create an entry!"]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},K=function(e){return{type:w,payload:e}},Q=function(){return{type:C}},V=function(e,t){return function(n){n({type:k}),h.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(H(t.uid,t.displayName)),n(Q())})).catch((function(e){console.log(e),n(Q()),f.a.fire("Error",e.message,"error")}))}},H=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},Z=function(){return{type:y}},$=function(e){var t=e.id,n=e.date,c=e.title,r=e.body,s=e.url,i=Object(o.b)(),u=J()(n);return Object(a.jsxs)("div",{className:"journal__entry animate__animated animate__fadeIn animate__faster",onClick:function(){i(D(t,{date:n,title:c,body:r,url:s}))},children:[s&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(s,")")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:c}),Object(a.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:u.format("MMMM")}),Object(a.jsx)("h4",{children:u.format("e")})]})]})},ee=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(a.jsx)($,Object(p.a)({},e),e.id)}))})},te=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsxs)("span",{children:[" ",t," "]})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.auth().signOut();case 2:t(Z()),t({type:B});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,O.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(D(r.id,c)),t(L(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(a.jsx)(ee,{})]})},ne=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)(te,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(z,{}):Object(a.jsx)(G,{})})]})},ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=W({email:"cam@gmail.com",password:"asdasd"}),r=Object(d.a)(n,2),s=r[0],i=r[1],u=s.email,l=s.password;return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:" Login "}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(V(u,l))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:i}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:i}),Object(a.jsx)("button",{type:"submit",className:"btn-login btn-primary btn-block",disabled:t,children:"Login"}),Object(a.jsxs)("div",{className:"auth__social-network",children:[Object(a.jsx)("p",{children:"Login with social networks"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){h.a.auth().signInWithPopup(x).then((function(t){var n=t.user;e(H(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]}),Object(a.jsx)(j.b,{to:"/auth/register",className:"link mt-5",children:"Create new account"})]})]})]})},ce=n(61),re=n.n(ce),se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=W({name:"camelio",email:"cam@gmail.com",password:"asdasd",password2:"asdasd"}),r=Object(d.a)(n,2),s=r[0],i=r[1],b=s.name,p=s.email,m=s.password,O=s.password2,x=function(){return 0===b.trim().length?(e(K("Name is required")),!1):re.a.isEmail(p)?m!==O?(e(K("Password must be equals")),!1):m.length<=5?(e(K("Password must have at least 5 characters")),!1):(e({type:N}),!0):(e(K("Email is not valid")),!1)};return Object(a.jsxs)(c.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title-register",children:" Register "}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),x()&&e(function(e,t,n){return function(a){h.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.user,e.next=3,a.updateProfile({displayName:n});case 3:f.a.fire({position:"center",icon:"success",title:"Your Register was successful",showConfirmButton:!1,timer:1500});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){f.a.fire("Error",e.message,"error")}))}}(p,m,b))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(a.jsx)("div",{className:"animate__animated animate__pulse",children:t}),Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:b,onChange:i}),Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:p,onChange:i}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:m,onChange:i}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"auth__input",value:O,onChange:i}),Object(a.jsx)("button",{type:"submit",className:"btn-login btn-primary btn-block mb-5",children:"Register"}),Object(a.jsx)(j.b,{to:"/auth/login",className:"link mt-5",children:"Aready Registered?"})]})]})},oe=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/auth/login",component:ae}),Object(a.jsx)(b.b,{exact:!0,path:"/auth/register",component:se}),Object(a.jsx)(b.a,{to:"/auth/register"})]})})})},ie=n(36),ue=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ie.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(b.b,Object(p.a)(Object(p.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(p.a)({},e)):Object(a.jsx)(b.a,{to:"/auth/login"})}}))},le=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ie.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(b.b,Object(p.a)(Object(p.a)({},c),{},{component:function(e){return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)(n,Object(p.a)({},e))}}))},de=function(){var e=Object(o.b)(),t=Object(c.useState)(!0),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),p=Object(d.a)(i,2),m=p[0],f=p[1];return Object(c.useEffect)((function(){h.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(H(n.uid,n.displayName)),f(!0),e(M(n.uid))):f(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s,f]),r?Object(a.jsx)("div",{className:"loader__preloader"}):Object(a.jsx)(j.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(le,{isAuthenticated:m,path:"/auth",component:oe}),Object(a.jsx)(ue,{exact:!0,isAuthenticated:m,path:"/",component:ne}),Object(a.jsx)(b.a,{to:"/auth/login"})]})})})},je=n(22),be=n(62),pe=n(45),me={notes:[],active:null},fe={loading:!1,msgError:null},he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,Oe=Object(je.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(p.a)(Object(p.a)({},e),{},{msgError:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{msgError:null});case k:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case C:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(p.a)(Object(p.a)({},e),{},{active:Object(p.a)({},t.payload)});case E:return Object(p.a)(Object(p.a)({},e),{},{notes:[t.payload].concat(Object(pe.a)(e.notes))});case I:return Object(p.a)(Object(p.a)({},e),{},{notes:Object(pe.a)(t.payload)});case A:return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case P:return Object(p.a)(Object(p.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case B:return Object(p.a)(Object(p.a)({},e),{},{active:null,notes:[]});default:return e}}}),xe=Object(je.e)(Oe,he(Object(je.a)(be.a))),ve=function(){return Object(a.jsx)(o.a,{store:xe,children:Object(a.jsx)(de,{})})};n(158);s.a.render(Object(a.jsx)(ve,{}),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.0d4e891f.chunk.js.map