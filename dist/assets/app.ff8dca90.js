import{_ as e}from"./index.bd34858d.js";import{_ as a,a as s,b as t,c as l,d as o}from"./LanguagesPanel.vue_vue&type=style&index=0&lang.52e01215.js";import{a as i}from"./ProjectsQuickDropdown.vue_vue&type=script&setup=true&lang.297722cc.js";import{_ as n}from"./Sidebar.vue_vue&type=style&index=0&lang.47b3e2b7.js";import{_ as r}from"./DashboardsSubsidebar.vue_vue&type=style&index=0&lang.4d8a7f81.js";import{_ as u}from"./Toolbar.vue_vue&type=script&setup=true&lang.634ba0cc.js";import{d,a9 as p,r as c,af as v,a7 as f,i as m,o as h,e as b,s as g,t as y,f as _,H as j,B as k,U as w,n as x,E as S,C,q as L,T as D}from"./vendor.2e4d4237.js";import{p as P}from"./sidebarLayoutState.bcf39008.js";import"./useDropdown.0b518adf.js";import"./V-Avatar.vue_vue&type=script&setup=true&lang.dcb01031.js";import"./V-Dropdown.11925b9c.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ff2c09a6.js";import"./activePanelState.7dbe99e9.js";import"./V-Tag.vue_vue&type=script&setup=true&lang.7d749f45.js";const T={class:"sidebar-layout"},V=_("div",{class:"app-overlay"},null,-1),B={class:"brand-end"},O=_("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:home"},null,-1),q=_("li",null,[_("a",{href:"#"},[_("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"})])],-1),A=[_("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"feather:home"},null,-1)],E={class:"view-wrapper"},M={class:"page-content-wrapper"},R={key:1,class:"page-content is-relative"},$={class:"page-title has-text-centered"},z={class:"menu-toggle has-chevron"},H=[_("span",{class:"rotate"},[_("i",{"aria-hidden":"true",class:"icon-line-top"}),_("i",{"aria-hidden":"true",class:"icon-line-center"}),_("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],I={class:"title-wrap"},Q={class:"title is-4"};var U=d({props:{theme:{type:String,default:"default"},defaultSidebar:{type:String,default:"dashboard"},closeOnChange:{type:Boolean,default:!1},openOnMounted:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1}},setup(d){const D=d,U=p(),F=c(!1),G=c(D.openOnMounted),J=c(D.defaultSidebar);return v((()=>{const e=G.value;document.querySelectorAll(".view-wrapper").forEach((a=>{!1===e?a.classList.remove("is-pushed-full"):a.classList.contains("is-pushed-full")||a.classList.add("is-pushed-full")}))})),f((()=>U.fullPath),(()=>{F.value=!1,D.closeOnChange&&G.value&&(G.value=!1)})),(d,p)=>{const c=e,v=m("RouterLink"),f=a,U=s,K=t,N=l,W=i,X=n,Y=r,Z=o,ee=u;return h(),b("div",T,[V,g(K,{"is-open":F.value,onToggle:p[0]||(p[0]=e=>F.value=!F.value)},{brand:y((()=>[g(v,{to:{name:"index"},class:"navbar-item is-brand"},{default:y((()=>[g(c,{width:"38px",height:"38px"})])),_:1}),_("div",B,[g(f),g(U)])])),_:1},8,["is-open"]),g(N,{"is-open":F.value,onToggle:p[1]||(p[1]=e=>F.value=!F.value)},{links:y((()=>[_("li",null,[g(v,{to:{name:"app"}},{default:y((()=>[O])),_:1})])])),"bottom-links":y((()=>[q])),_:1},8,["is-open"]),g(w,{name:"slide-x"},{default:y((()=>[F.value&&"dashboard"===J.value?(h(),j(W,{key:0})):k("",!0)])),_:1}),g(X,{theme:D.theme,"is-open":G.value},{links:y((()=>[_("li",null,[_("a",{class:x(["dashboard"===J.value&&"is-active"]),"data-content":"Dashboards",onClick:p[2]||(p[2]=e=>{var a;(a="dashboard")===J.value?G.value=!G.value:(G.value=!0,J.value=a)})},A,2)])])),_:1},8,["theme","is-open"]),g(w,{name:"slide-x"},{default:y((()=>[G.value&&"dashboard"===J.value?(h(),j(Y,{key:0,onClose:p[3]||(p[3]=e=>G.value=!1)})):k("",!0)])),_:1}),g(Z),_("div",E,[_("div",M,[D.nowrap?S(d.$slots,"default",{key:0}):(h(),b("div",R,[_("div",$,[_("div",{class:"vuero-hamburger nav-trigger push-resize",onClick:p[4]||(p[4]=e=>G.value=!G.value)},[_("span",z,[_("span",{class:x([[G.value&&"active"],"icon-box-toggle"])},H,2)])]),_("div",I,[_("h1",Q,C(L(P)),1)]),g(ee,{class:"desktop-toolbar"})]),S(d.$slots,"default")]))])])])}}}),F=d({setup(e){const a=p();return(e,s)=>{const t=m("RouterView"),l=U;return h(),j(l,null,{default:y((()=>[g(t,null,{default:y((({Component:e})=>[g(w,{name:"fade-fast",mode:"out-in"},{default:y((()=>[(h(),j(D(e),{key:L(a).fullPath}))])),_:2},1024)])),_:1})])),_:1})}}}),G={};"function"==typeof G&&G(F);export default F;
