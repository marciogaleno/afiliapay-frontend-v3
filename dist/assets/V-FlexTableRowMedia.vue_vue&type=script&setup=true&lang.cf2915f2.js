import{_ as s}from"./V-Avatar.vue_vue&type=script&setup=true&lang.76ef855d.js";import{_ as a}from"./V-AvatarStack.vue_vue&type=script&setup=true&lang.462e2327.js";import{_ as t}from"./FlexTableDropdown.8c1efa5e.js";import{d as e,o as l,e as i,D as r,f as c,s as n,C as d,n as o,F as u}from"./vendor.f636d161.js";const p={class:"flex-table-cell is-media is-grow","data-th":"User"},m={class:"item-name"},v={class:"item-meta"},f={class:"flex-table-cell","data-th":"Location"},b={class:"light-text"},x={class:"flex-table-cell","data-th":"Industry"},g={class:"light-text"},h={class:"flex-table-cell","data-th":"Status"},y={class:"flex-table-cell","data-th":"Relations"},_={class:"flex-table-cell cell-end","data-th":"Actions"};var w=e({props:{rows:{type:Array,required:!0}},setup(e){const w=e;return(e,A)=>{const j=s,D=a,S=t;return l(!0),i(u,null,r(w.rows,(s=>(l(),i("div",{key:s.id,class:"flex-table-item"},[c("div",p,[n(j,{size:"medium",picture:s.picture,badge:s.badge},null,8,["picture","badge"]),c("div",null,[c("span",m,d(s.name),1),c("span",v,[c("span",null,d(s.position),1)])])]),c("div",f,[c("span",b,d(s.location),1)]),c("div",x,[c("span",g,d(s.industry),1)]),c("div",h,[c("span",{class:o(["tag is-rounded",["Active"===s.status&&"is-success","Disabled"===s.status&&"","New"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]])},d(s.status),3)]),c("div",y,[n(D,{class:"is-pushed-mobile",size:"small",avatars:s.contacts,limit:3},null,8,["avatars"])]),c("div",_,[n(S)])])))),128)}}});export{w as _};
