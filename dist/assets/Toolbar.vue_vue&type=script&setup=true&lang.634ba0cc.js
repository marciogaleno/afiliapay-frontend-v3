import{i as s}from"./index.bd34858d.js";import{a}from"./activePanelState.7dbe99e9.js";import{u as e}from"./useDropdown.0b518adf.js";import{d as l,ad as r,r as n,g as o,o as t,e as c,f as i,q as g,E as u}from"./vendor.2e4d4237.js";const d={class:"toolbar ml-auto"},m={class:"toolbar-link"},f={class:"dark-mode ml-auto"},v=["checked"],p=i("span",null,null,-1),h=["src"];var b=l({setup(l){const{locale:b}=r(),k=n(null);e(k);const j=o((()=>{switch(b.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";case"en":default:return"/images/icons/flags/united-states-of-america.svg"}}));return(e,l)=>(t(),c("div",d,[i("div",m,[i("label",f,[i("input",{type:"checkbox",checked:!g(s),onChange:l[0]||(l[0]=a=>{s.value=!a.target.checked})},null,40,v),p])]),i("a",{class:"toolbar-link right-panel-trigger",onClick:l[1]||(l[1]=s=>a.value="languages")},[i("img",{src:g(j),alt:""},null,8,h)]),u(e.$slots,"default")]))}});export{b as _};
