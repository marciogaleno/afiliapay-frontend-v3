import{d as e,o,e as a,C as l,n as d}from"./vendor.f636d161.js";var r=e({props:{label:{type:[String,Number],default:void 0},color:{type:String,default:void 0,validator:e=>-1!==[void 0,"primary","secondary","info","success","warning","danger","orange","blue","green","purple","white","light","solid"].indexOf(e)||(console.warn(`V-Tag: invalid "${e}" color. Should be primary, secondary, info, success, warning, danger, orange, blue, green, purple, white, light, solid or undefined`),!1)},rounded:{type:Boolean,default:!1},curved:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},remove:{type:Boolean,default:!1}},setup:e=>(r,n)=>(o(),a("small",{class:d(["tag",[e.color&&"is-"+e.color,e.rounded&&"is-rounded",e.curved&&"is-curved",e.outlined&&"is-outlined",e.elevated&&"is-elevated",e.remove&&"is-delete"]])},l(e.label),3))});export{r as _};