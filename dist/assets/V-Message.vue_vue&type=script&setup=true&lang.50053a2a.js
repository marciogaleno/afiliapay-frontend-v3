import{d as s,o as e,e as a,m as o,B as l,f as i,E as r,n}from"./vendor.f636d161.js";const d={class:"message-body"};var c=s({props:{color:{type:String,default:void 0,validator:s=>-1!==[void 0,"primary","success","info","warning","danger","white"].indexOf(s)||(console.warn(`V-Message: invalid "${s}" color. Should be primary, success, info, warning, danger, white or undefined`),!1)},closable:{type:Boolean,default:!1}},emits:["close"],setup:(s,{emit:c})=>(t,f)=>(e(),a("div",{class:n(["message",[s.color&&`is-${s.color}`]])},[s.closable?(e(),a("a",{key:0,class:"delete",onClick:f[0]||(f[0]=o((s=>c("close")),["prevent"]))})):l("",!0),i("div",d,[r(t.$slots,"default")])],2))});export{c as _};
