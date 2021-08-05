import{_ as t}from"./V-Avatar.vue_vue&type=script&setup=true&lang.76ef855d.js";import{_ as a}from"./V-Block.vue_vue&type=script&setup=true&lang.bdf2e24f.js";import{d as e,ar as r,r as s,as as d,o as i,e as l,f as u,s as o,t as n,E as c,B as v,n as p}from"./vendor.f636d161.js";const f={class:"card-head"},g={key:0,class:"card-inner"};var b=e({props:{title:{type:String,required:!0},subtitle:{type:String,default:void 0},avatar:{type:String,default:void 0},badge:{type:String,default:void 0},content:{type:String,default:void 0},radius:{type:String,default:"regular",validator:t=>-1!==["regular","smooth","rounded"].indexOf(t)||(console.warn(`V-CardAction: invalid "${t}" radius. Should be regular, smooth or rounded`),!1)}},setup(e){var b;const{slots:m}=r(),y=s(!!(null==(b=m.default)?void 0:b.call(m)));return d((()=>{var t;y.value=!!(null==(t=m.default)?void 0:t.call(m))})),(r,s)=>{const d=t,b=a;return i(),l("div",{class:p(["is-raised",["regular"===e.radius&&"s-card","smooth"===e.radius&&"r-card","rounded"===e.radius&&"l-card"]])},[u("div",f,[o(b,{title:e.title,subtitle:e.subtitle,center:""},{icon:n((()=>[o(d,{picture:e.avatar,badge:e.badge},null,8,["picture","badge"])])),action:n((()=>[c(r.$slots,"action")])),_:3},8,["title","subtitle"])]),y.value?(i(),l("div",g,[c(r.$slots,"default")])):v("",!0)],2)}}});export{b as _};
