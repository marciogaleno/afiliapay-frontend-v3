import{r as e,i as a,_ as s,a as l,u as t}from"./index.bd34858d.js";import{_ as r}from"./V-Control.33905393.js";import{_ as i}from"./V-Field.vue_vue&type=script&setup=true&lang.aee224b6.js";import{d as n,r as o,b as u,a9 as c,G as d,i as m,o as p,e as f,f as h,s as v,t as g,q as b,m as k,A as y}from"./vendor.2e4d4237.js";import{s as _}from"./sleep.2a252ff4.js";const w={class:"auth-wrapper-inner is-single"},x={class:"auth-nav"},j=h("div",{class:"left"},null,-1),P={class:"center"},S={class:"right"},V={class:"dark-mode ml-auto"},q=["checked"],A=h("span",null,null,-1),C={class:"single-form-wrap"},F={class:"inner-wrap"},I={class:"auth-head"},L=h("h2",null,"Welcome Back.",-1),R=h("p",null,"Please sign in to your account",-1),W=y(" I do not have an account yet "),B={class:"form-card"},E=["onSubmit"],G={class:"login-form"},K=h("input",{class:"input",type:"text",placeholder:"Username",autocomplete:"username"},null,-1),M=h("input",{class:"input",type:"password",placeholder:"Password",autocomplete:"current-password"},null,-1),U=h("label",{for:"remember-me",class:"form-switch is-primary"},[h("input",{id:"remember-me",type:"checkbox",class:"is-switch"}),h("i",{"aria-hidden":"true"})],-1),z=h("div",{class:"setting-meta"},[h("label",{for:"remember-me"},[h("span",null,"Remember Me")])],-1),D=y(" Sign In "),H=h("div",{class:"forgot-link has-text-centered"},[h("a",null,"Forgot Password?")],-1);var J=n({setup(n){const y=o(!1),J=u(),N=c(),O=t(),Q=e(),T=N.query.redirect,X=async()=>{y.value||(y.value=!0,await _(2e3),Q.token="logged-in",O.success("Welcome back, Erik Kovalsky"),T?J.push(T):J.push({name:"app"}),y.value=!1)};return d({title:"Auth Login 3 - Vuero"}),(e,t)=>{const n=s,o=m("RouterLink"),u=r,c=i,d=l;return p(),f("div",w,[h("div",x,[j,h("div",P,[v(o,{to:{name:"index"},class:"header-item"},{default:g((()=>[v(n,{width:"38px",height:"38px"})])),_:1})]),h("div",S,[h("label",V,[h("input",{type:"checkbox",checked:!b(a),onChange:t[0]||(t[0]=e=>{a.value=!e.target.checked})},null,40,q),A])])]),h("div",C,[h("div",F,[h("div",I,[L,R,v(o,{to:{name:"auth-signup"}},{default:g((()=>[W])),_:1})]),h("div",B,[h("form",{onSubmit:k(X,["prevent"])},[h("div",G,[v(c,null,{default:g((()=>[v(u,{icon:"feather:user"},{default:g((()=>[K])),_:1})])),_:1}),v(c,null,{default:g((()=>[v(u,{icon:"feather:lock"},{default:g((()=>[M])),_:1})])),_:1}),v(u,{class:"setting-item"},{default:g((()=>[U,z])),_:1}),v(u,{class:"login"},{default:g((()=>[v(d,{loading:y.value,type:"submit",color:"primary",bold:"",fullwidth:"",raised:""},{default:g((()=>[D])),_:1},8,["loading"])])),_:1})])],40,E)]),H])])])}}});export default J;
