import{d as e,o,e as r,E as d,n as l}from"./vendor.2e4d4237.js";var i=e({props:{size:{type:String,default:void 0,validator:e=>-1!==[void 0,"small","medium","large","big","xl"].indexOf(e)||(console.warn(`V-IconBox: invalid "${e}" size. Should be small, medium, large, big, xl or undefined`),!1)},color:{type:String,default:void 0,validator:e=>!e||(-1!==["primary","info","success","warning","danger","purple","yellow","orange","green","red","blue"].indexOf(e)||(console.warn(`V-IconBox: invalid "${e}" color. Should be primary, info, success, warning, danger, purple, yellow, orange, green, red, blue or undefined`),!1))},rounded:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1}},setup:e=>(i,n)=>(o(),r("div",{class:l(["v-icon",[e.size&&"is-"+e.size,e.color&&"is-"+e.color,e.rounded&&"is-rounded",e.bordered&&"is-bordered"]])},[d(i.$slots,"default")],2))});export{i as _};
