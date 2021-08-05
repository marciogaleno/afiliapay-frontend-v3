import{_ as s,a as n}from"./DocumentationItem.1541dd65.js";import{_ as a}from"./V-FilePond.vue_vue&type=script&setup=true&lang.6ae861e3.js";import{_ as p}from"./V-Control.33905393.js";import{_ as t}from"./V-Field.vue_vue&type=script&setup=true&lang.aee224b6.js";import{o as i,H as r,t as e,s as o,f as m,A as l,d as c,r as u,G as k,e as b,n as d,q as g,B as f}from"./vendor.2e4d4237.js";import{u as y,_ as h}from"./useMarkdownToc.4a1c98c8.js";import{p as v}from"./sidebarLayoutState.bcf39008.js";import"./V-Icon.vue_vue&type=script&setup=true&lang.ff2c09a6.js";const w=m("h3",{id:"v-filepond",tabindex:"-1"},"V-FilePond",-1),_=m("p",null,[l("Vuero ships with the "),m("code",null,"<V-FilePond />"),l(" component, a custom credit card previewer. Check the code for more details.")],-1),q=m("div",{class:"language-vue line-numbers-mode"},[m("pre",null,[m("code",null,[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),l("script")]),l(),m("span",{class:"prism--token prism--attr-name"},"setup"),l(),m("span",{class:"prism--token prism--attr-name"},"lang"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("ts"),m("span",{class:"prism--token prism--punctuation"},'"')]),m("span",{class:"prism--token prism--punctuation"},">")]),m("span",{class:"prism--token prism--script"},[m("span",{class:"prism--token prism--language-javascript"},[l("\n"),m("span",{class:"prism--token prism--keyword"},"import"),l(),m("span",{class:"prism--token prism--punctuation"},"{"),l(" ref "),m("span",{class:"prism--token prism--punctuation"},"}"),l(" from vue\n\n"),m("span",{class:"prism--token prism--keyword"},"const"),l(),m("span",{class:"prism--token prism--function-variable prism--function"},"onAddFile"),l(),m("span",{class:"prism--token prism--operator"},"="),l(),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--parameter"},[l("error"),m("span",{class:"prism--token prism--operator"},":"),l(" any"),m("span",{class:"prism--token prism--punctuation"},","),l(" fileInfo"),m("span",{class:"prism--token prism--operator"},":"),l(" any")]),m("span",{class:"prism--token prism--punctuation"},")"),l(),m("span",{class:"prism--token prism--operator"},"=>"),l(),m("span",{class:"prism--token prism--punctuation"},"{"),l("\n  "),m("span",{class:"prism--token prism--keyword"},"if"),l(),m("span",{class:"prism--token prism--punctuation"},"("),l("error"),m("span",{class:"prism--token prism--punctuation"},")"),l(),m("span",{class:"prism--token prism--punctuation"},"{"),l("\n    console"),m("span",{class:"prism--token prism--punctuation"},"."),m("span",{class:"prism--token prism--function"},"error"),m("span",{class:"prism--token prism--punctuation"},"("),l("error"),m("span",{class:"prism--token prism--punctuation"},")"),l("\n    "),m("span",{class:"prism--token prism--keyword"},"return"),l("\n  "),m("span",{class:"prism--token prism--punctuation"},"}"),l("\n\n  "),m("span",{class:"prism--token prism--keyword"},"const"),l(" _file "),m("span",{class:"prism--token prism--operator"},"="),l(" fileInfo"),m("span",{class:"prism--token prism--punctuation"},"."),l("file "),m("span",{class:"prism--token prism--keyword"},"as"),l(" File\n  "),m("span",{class:"prism--token prism--keyword"},"if"),l(),m("span",{class:"prism--token prism--punctuation"},"("),l("_file"),m("span",{class:"prism--token prism--punctuation"},")"),l(),m("span",{class:"prism--token prism--punctuation"},"{"),l("\n    wizardData"),m("span",{class:"prism--token prism--punctuation"},"."),l("logo "),m("span",{class:"prism--token prism--operator"},"="),l(" _file\n  "),m("span",{class:"prism--token prism--punctuation"},"}"),l("\n"),m("span",{class:"prism--token prism--punctuation"},"}"),l("\n\n"),m("span",{class:"prism--token prism--keyword"},"const"),l(),m("span",{class:"prism--token prism--function-variable prism--function"},"onRemoveFile"),l(),m("span",{class:"prism--token prism--operator"},"="),l(),m("span",{class:"prism--token prism--punctuation"},"("),m("span",{class:"prism--token prism--parameter"},[l("error"),m("span",{class:"prism--token prism--operator"},":"),l(" any"),m("span",{class:"prism--token prism--punctuation"},","),l(" fileInfo"),m("span",{class:"prism--token prism--operator"},":"),l(" any")]),m("span",{class:"prism--token prism--punctuation"},")"),l(),m("span",{class:"prism--token prism--operator"},"=>"),l(),m("span",{class:"prism--token prism--punctuation"},"{"),l("\n  "),m("span",{class:"prism--token prism--keyword"},"if"),l(),m("span",{class:"prism--token prism--punctuation"},"("),l("error"),m("span",{class:"prism--token prism--punctuation"},")"),l(),m("span",{class:"prism--token prism--punctuation"},"{"),l("\n    console"),m("span",{class:"prism--token prism--punctuation"},"."),m("span",{class:"prism--token prism--function"},"error"),m("span",{class:"prism--token prism--punctuation"},"("),l("error"),m("span",{class:"prism--token prism--punctuation"},")"),l("\n    "),m("span",{class:"prism--token prism--keyword"},"return"),l("\n  "),m("span",{class:"prism--token prism--punctuation"},"}"),l("\n\n  wizardData"),m("span",{class:"prism--token prism--punctuation"},"."),l("logo "),m("span",{class:"prism--token prism--operator"},"="),l(),m("span",{class:"prism--token prism--keyword"},"null"),l("\n"),m("span",{class:"prism--token prism--punctuation"},"}"),l("\n")])]),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),l("script")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),l("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),l("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),l("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n      "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"<"),l("V-FilePond")]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"class"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("profile-filepond"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"name"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("profile_filepond"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},":chunk-retry-delays"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("[500, 1000, 3000]"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"label-idle"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("<i class="),m("span",{class:"prism--token prism--punctuation"},"'"),l("lnil lnil-cloud-upload"),m("span",{class:"prism--token prism--punctuation"},"'"),l("></i>"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},":accepted-file-types"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("["),m("span",{class:"prism--token prism--punctuation"},"'"),l("image/png"),m("span",{class:"prism--token prism--punctuation"},"'"),l(", "),m("span",{class:"prism--token prism--punctuation"},"'"),l("image/jpeg"),m("span",{class:"prism--token prism--punctuation"},"'"),l(", "),m("span",{class:"prism--token prism--punctuation"},"'"),l("image/gif"),m("span",{class:"prism--token prism--punctuation"},"'"),l("]"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},":image-preview-height"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("140"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},":image-resize-target-width"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("140"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},":image-resize-target-height"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("140"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"image-crop-aspect-ratio"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("1:1"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"style-panel-layout"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("compact circle"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"style-load-indicator-position"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("center bottom"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"style-progress-indicator-position"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("right bottom"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"style-button-remove-item-position"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("left bottom"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"style-button-process-item-position"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("right bottom"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"@addfile"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("onAddFile"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n        "),m("span",{class:"prism--token prism--attr-name"},"@removefile"),m("span",{class:"prism--token prism--attr-value"},[m("span",{class:"prism--token prism--punctuation prism--attr-equals"},"="),m("span",{class:"prism--token prism--punctuation"},'"'),l("onRemoveFile"),m("span",{class:"prism--token prism--punctuation"},'"')]),l("\n      "),m("span",{class:"prism--token prism--punctuation"},"/>")]),l("\n    "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),l("V-Control")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n  "),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),l("V-Field")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n"),m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--tag"},[m("span",{class:"prism--token prism--punctuation"},"</"),l("template")]),m("span",{class:"prism--token prism--punctuation"},">")]),l("\n")])]),m("div",{class:"line-numbers-wrapper"},[m("span",{class:"line-number"},"1"),m("br"),m("span",{class:"line-number"},"2"),m("br"),m("span",{class:"line-number"},"3"),m("br"),m("span",{class:"line-number"},"4"),m("br"),m("span",{class:"line-number"},"5"),m("br"),m("span",{class:"line-number"},"6"),m("br"),m("span",{class:"line-number"},"7"),m("br"),m("span",{class:"line-number"},"8"),m("br"),m("span",{class:"line-number"},"9"),m("br"),m("span",{class:"line-number"},"10"),m("br"),m("span",{class:"line-number"},"11"),m("br"),m("span",{class:"line-number"},"12"),m("br"),m("span",{class:"line-number"},"13"),m("br"),m("span",{class:"line-number"},"14"),m("br"),m("span",{class:"line-number"},"15"),m("br"),m("span",{class:"line-number"},"16"),m("br"),m("span",{class:"line-number"},"17"),m("br"),m("span",{class:"line-number"},"18"),m("br"),m("span",{class:"line-number"},"19"),m("br"),m("span",{class:"line-number"},"20"),m("br"),m("span",{class:"line-number"},"21"),m("br"),m("span",{class:"line-number"},"22"),m("br"),m("span",{class:"line-number"},"23"),m("br"),m("span",{class:"line-number"},"24"),m("br"),m("span",{class:"line-number"},"25"),m("br"),m("span",{class:"line-number"},"26"),m("br"),m("span",{class:"line-number"},"27"),m("br"),m("span",{class:"line-number"},"28"),m("br"),m("span",{class:"line-number"},"29"),m("br"),m("span",{class:"line-number"},"30"),m("br"),m("span",{class:"line-number"},"31"),m("br"),m("span",{class:"line-number"},"32"),m("br"),m("span",{class:"line-number"},"33"),m("br"),m("span",{class:"line-number"},"34"),m("br"),m("span",{class:"line-number"},"35"),m("br"),m("span",{class:"line-number"},"36"),m("br"),m("span",{class:"line-number"},"37"),m("br"),m("span",{class:"line-number"},"38"),m("br"),m("span",{class:"line-number"},"39"),m("br"),m("span",{class:"line-number"},"40"),m("br"),m("span",{class:"line-number"},"41"),m("br"),m("span",{class:"line-number"},"42"),m("br"),m("span",{class:"line-number"},"43"),m("br"),m("span",{class:"line-number"},"44"),m("br"),m("span",{class:"line-number"},"45"),m("br"),m("span",{class:"line-number"},"46"),m("br"),m("span",{class:"line-number"},"47"),m("br"),m("span",{class:"line-number"},"48"),m("br"),m("span",{class:"line-number"},"49"),m("br")])],-1);const V={state:{flipped:!1}},F={render:function(n,m){const l=a,c=p,u=t,k=s;return i(),r(k,{frontmatter:n.frontmatter},{code:e((()=>[q])),example:e((()=>[o(u,{grouped:""},{default:e((()=>[o(c,null,{default:e((()=>[o(l,{class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom"})])),_:1}),o(c,null,{default:e((()=>[o(l,{size:"small",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom"})])),_:1}),o(c,null,{default:e((()=>[o(l,{size:"tiny",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom"})])),_:1})])),_:1})])),default:e((()=>[w,_])),_:1},8,["frontmatter"])},data:()=>({frontmatter:V})},j=m("h3",{id:"v-filepond-props",tabindex:"-1"},"V-FilePond Props",-1),z=m("p",null,[l("Here is the props added for "),m("code",null,"<V-FilePond />"),l(" component, you can check all options available on "),m("a",{href:"https://pqina.nl/filepond/docs/patterns/api/filepond-instance/#properties"},"filepond official documentation"),l(":")],-1),P=m("table",null,[m("thead",null,[m("tr",null,[m("th",null,"Props"),m("th",null,"Default"),m("th",null,"Type")])]),m("tbody",null,[m("tr",null,[m("td",null,"size"),m("td",null,[m("span",{class:"is-string"},[m("code",null,"grey")])]),m("td",null,[m("code",null,"small"),l(", "),m("code",null,"tiny")])])])],-1);const x={disable_code:!0},A={render:function(n,a){const p=s;return i(),r(p,{frontmatter:n.frontmatter},{default:e((()=>[j,z,P])),_:1},8,["frontmatter"])},data:()=>({frontmatter:x})},I={class:"page-content-inner"},C={class:"columns is-multiline"},D={key:0,class:"column is-3 toc-column"};var H=c({setup(s){const a=u(null),p=y(a);return u(null),v.value="V-FilePond",k({title:"V-FilePond - Addons - Vuero"}),(s,t)=>{const r=n,e=F,l=A,c=h;return i(),b("div",I,[o(r,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"index"}},{label:"Elements",to:{name:"elements"}},{label:"Addons"},{label:"V-FilePond",to:{name:"elements-addons-filepond"}}]}),m("div",C,[m("div",{ref:a,class:d([[g(p).length>0?"is-9":"is-12"],"column doc-column"])},[o(e),o(l)],2),g(p).length?(i(),b("div",D,[o(c,{toc:g(p)},null,8,["toc"])])):f("",!0)])])}}});export default H;
