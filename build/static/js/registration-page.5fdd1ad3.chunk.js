(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{177:function(e,a,r){"use strict";var t=r(143),s=r(144);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=s(r(0)),n=(0,t(r(145)).default)(o.createElement("path",{d:"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"}),"SupervisorAccount");a.default=n},178:function(e,a,r){"use strict";var t=r(3),s=r(38),o=r(39),n=r(40),i=r(41),l=r(0),c=r(180),d=r.n(c),m=r(179),u=r.n(m),h=r(352),p=r(354),f=function(e){Object(n.a)(r,e);var a=Object(i.a)(r);function r(){var e;Object(s.a)(this,r);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return(e=a.call.apply(a,[this].concat(o))).state={hidePassword:!0},e.showPassword=function(){e.setState((function(e){return{hidePassword:!e.hidePassword}}))},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state.hidePassword,a=this.props,r=a.handleChange,s=a.label,o=a.name,n=a.error,i=a.helperText,l=a.value;return Object(t.jsx)(h.a,{style:{marginTop:10},fullWidth:!0,id:o,name:o,label:s,type:e?"password":"input",value:l,onChange:r,error:n,helperText:i,InputProps:e?{startAdornment:Object(t.jsx)(p.a,{position:"start",children:Object(t.jsx)(u.a,{onClick:this.showPassword,color:"primary"})})}:{startAdornment:Object(t.jsx)(p.a,{position:"start",children:Object(t.jsx)(d.a,{onClick:this.showPassword,color:"primary"})})}})}}]),r}(l.Component);a.a=f},179:function(e,a,r){"use strict";var t=r(143),s=r(144);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=s(r(0)),n=(0,t(r(145)).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M12 14c.04 0 .08-.01.12-.01l-2.61-2.61c0 .04-.01.08-.01.12 0 1.38 1.12 2.5 2.5 2.5zm1.01-4.79l1.28 1.28c-.26-.57-.71-1.03-1.28-1.28zm7.81 2.29C19.17 8.13 15.79 6 12 6c-.68 0-1.34.09-1.99.22l.92.92c.35-.09.7-.14 1.07-.14 2.48 0 4.5 2.02 4.5 4.5 0 .37-.06.72-.14 1.07l2.05 2.05c.98-.86 1.81-1.91 2.41-3.12zM12 17c.95 0 1.87-.13 2.75-.39l-.98-.98c-.54.24-1.14.37-1.77.37-2.48 0-4.5-2.02-4.5-4.5 0-.63.13-1.23.36-1.77L6.11 7.97c-1.22.91-2.23 2.1-2.93 3.52C4.83 14.86 8.21 17 12 17z",opacity:".3"}),o.createElement("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm2.28 4.49l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.06-1.07.14L13 9.21c.58.25 1.03.71 1.28 1.28zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"})),"VisibilityOffTwoTone");a.default=n},180:function(e,a,r){"use strict";var t=r(143),s=r(144);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=s(r(0)),n=(0,t(r(145)).default)(o.createElement(o.Fragment,null,o.createElement("path",{d:"M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z",opacity:".3"}),o.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"})),"VisibilityTwoTone");a.default=n},181:function(e,a,r){e.exports={main:"RegistrationView_main__31q0x",button:"RegistrationView_button__uwlOf",inputs:"RegistrationView_inputs__1CWzE"}},182:function(e,a,r){"use strict";var t=r(143),s=r(144);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=s(r(0)),n=(0,t(r(145)).default)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");a.default=n},351:function(e,a,r){"use strict";r.r(a);var t=r(3),s=(r(0),r(20)),o=r(183),n=r(184),i=r(354),l=r(177),c=r.n(l),d=r(182),m=r.n(d),u=r(121),h=r(352),p=r(141),f=r(178),b=r(12),w=r(181),v=r.n(w),j=n.a({name:n.c("Enter your name").min(3,"Name should be of minimum 3 characters length").required("Name is required"),email:n.c("Enter your email").email("Enter a valid email").required("Email is required"),password:n.c("Enter your password").min(6,"Password should be of minimum 7 characters length").required("Password is required"),confirmPassword:n.c("Enter your password").required("Confirm your password").min(6,"Password should be of minimum 7 characters length").oneOf([n.b("password")],"Password does not match")});var C={registrationUser:b.a.registrationUser};a.default=Object(s.b)(null,C)((function(e){var a=e.registrationUser,r=(e.errorRegistration,Object(o.a)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:j,onSubmit:function(e,r){!function(e,r){var t={name:e.name,email:e.email,password:e.password};a(t),r()}(e,r.resetForm)}}));return Object(t.jsx)("div",{className:v.a.main,children:Object(t.jsxs)(u.a,{className:"paper",children:[Object(t.jsx)("h2",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(t.jsxs)("form",{className:v.a.form,onSubmit:r.handleSubmit,children:[Object(t.jsx)(h.a,{fullWidth:!0,id:"name",style:{marginTop:10},name:"name",label:"Name",value:r.values.name,onChange:r.handleChange,error:r.touched.name&&Boolean(r.errors.name),helperText:r.touched.name&&r.errors.name,className:v.a.inputs,InputProps:{startAdornment:Object(t.jsx)(i.a,{position:"start",children:Object(t.jsx)(c.a,{color:"primary"})})}}),Object(t.jsx)(h.a,{fullWidth:!0,id:"email",style:{marginTop:10},name:"email",label:"Email",value:r.values.email,onChange:r.handleChange,error:r.touched.email&&Boolean(r.errors.email),helperText:r.touched.email&&r.errors.email,className:v.a.inputs,InputProps:{startAdornment:Object(t.jsx)(i.a,{position:"start",children:Object(t.jsx)(m.a,{color:"primary"})})}}),Object(t.jsx)(f.a,{name:"password",label:"Password",handleChange:r.handleChange,value:r.values.password,error:r.touched.password&&Boolean(r.errors.password),helperText:r.touched.password&&r.errors.password},"password"),Object(t.jsx)(f.a,{name:"confirmPassword",label:"Confirm password",handleChange:r.handleChange,value:r.values.confirmPassword,error:r.touched.confirmPassword&&Boolean(r.errors.confirmPassword),helperText:r.touched.confirmPassword&&r.errors.confirmPassword},"confirmPassword"),Object(t.jsx)(p.a,{disableRipple:!0,disabled:!(""!==r.values.name&&""!==r.values.email&&""!==r.values.password&&""!==r.values.passwordConfrim),variant:"outlined",className:v.a.button,style:{marginTop:10},type:"submit",children:"Join"})]})]})})}))}}]);
//# sourceMappingURL=registration-page.5fdd1ad3.chunk.js.map