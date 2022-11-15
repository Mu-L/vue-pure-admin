import{useColumns as $}from"./columns-d9514943.js";import{a as z}from"./system-5b90ff7d.js";import{T as I}from"./index-e028abe1.js";import{u as i}from"./hooks-db06b462.js";import{d as x,t as F,r as g,o as N,h as n,e as j,f as M,l as e,j as o,b as a,k as s,_ as O}from"./index-ffcb3fda.js";import"./index-8c282ca9.js";import"./epTheme-cda789aa.js";const q={class:"main"},G=x({name:"Role"}),H=x({...G,setup(J){const c=F({name:"",code:"",status:""}),_=g([]),d=g(!0),{columns:w}=$(),v=g(),b=F({total:0,pageSize:10,currentPage:1,background:!0});function K(l){}function Q(l){}function D(l){}function B(l){}function V(l){}async function p(){d.value=!0;const{data:l}=await z();_.value=l.list,b.total=l.total,setTimeout(()=>{d.value=!1},500)}const E=l=>{!l||(l.resetFields(),p())};return N(()=>{p()}),(l,u)=>{const y=n("el-input"),m=n("el-form-item"),h=n("el-option"),S=n("el-select"),r=n("el-button"),T=n("el-form"),R=n("el-popconfirm"),C=n("el-dropdown-item"),L=n("el-dropdown-menu"),A=n("el-dropdown"),P=n("PureTable");return j(),M("div",q,[e(T,{ref_key:"formRef",ref:v,inline:!0,model:c,class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:o(()=>[e(m,{label:"\u89D2\u8272\u540D\u79F0\uFF1A",prop:"name"},{default:o(()=>[e(y,{modelValue:c.name,"onUpdate:modelValue":u[0]||(u[0]=t=>c.name=t),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{label:"\u89D2\u8272\u6807\u8BC6\uFF1A",prop:"code"},{default:o(()=>[e(y,{modelValue:c.code,"onUpdate:modelValue":u[1]||(u[1]=t=>c.code=t),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",clearable:""},null,8,["modelValue"])]),_:1}),e(m,{label:"\u72B6\u6001\uFF1A",prop:"status"},{default:o(()=>[e(S,{modelValue:c.status,"onUpdate:modelValue":u[2]||(u[2]=t=>c.status=t),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",clearable:""},{default:o(()=>[e(h,{label:"\u5DF2\u5F00\u542F",value:"1"}),e(h,{label:"\u5DF2\u5173\u95ED",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:o(()=>[e(r,{type:"primary",icon:a(i)("search"),loading:d.value,onClick:p},{default:o(()=>[s(" \u641C\u7D22 ")]),_:1},8,["icon","loading"]),e(r,{icon:a(i)("refresh"),onClick:u[3]||(u[3]=t=>E(v.value))},{default:o(()=>[s(" \u91CD\u7F6E ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),e(a(I),{title:"\u89D2\u8272\u5217\u8868",loading:d.value,dataList:_.value,onRefresh:p},{buttons:o(()=>[e(r,{type:"primary",icon:a(i)("add")},{default:o(()=>[s(" \u65B0\u589E\u89D2\u8272 ")]),_:1},8,["icon"])]),default:o(({size:t,checkList:U})=>[e(P,{border:"",align:"center",showOverflowTooltip:"","table-layout":"auto",size:t,data:_.value,columns:a(w),checkList:U,pagination:b,paginationSmall:t==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:V,onSizeChange:B,onCurrentChange:D},{operation:o(({row:f})=>[e(r,{class:"reset-margin",link:"",type:"primary",size:t,onClick:k=>void 0,icon:a(i)("edits")},{default:o(()=>[s(" \u4FEE\u6539 ")]),_:2},1032,["size","onClick","icon"]),e(R,{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664?"},{reference:o(()=>[e(r,{class:"reset-margin",link:"",type:"primary",size:t,icon:a(i)("delete"),onClick:k=>void 0},{default:o(()=>[s(" \u5220\u9664 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1024),e(A,null,{dropdown:o(()=>[e(L,null,{default:o(()=>[e(C,null,{default:o(()=>[e(r,{class:"reset-margin !h-[20px] !text-gray-500 dark:!text-white dark:hover:!text-primary",link:"",type:"primary",size:t,icon:a(i)("menu")},{default:o(()=>[s(" \u83DC\u5355\u6743\u9650 ")]),_:2},1032,["size","icon"])]),_:2},1024),e(C,null,{default:o(()=>[e(r,{class:"reset-margin !h-[20px] !text-gray-500 dark:!text-white dark:hover:!text-primary",link:"",type:"primary",size:t,icon:a(i)("database")},{default:o(()=>[s(" \u6570\u636E\u6743\u9650 ")]),_:2},1032,["size","icon"])]),_:2},1024)]),_:2},1024)]),default:o(()=>[e(r,{class:"ml-3",link:"",type:"primary",size:t,onClick:k=>void 0,icon:a(i)("more")},null,8,["size","onClick","icon"])]),_:2},1024)]),_:2},1032,["size","data","columns","checkList","pagination","paginationSmall","header-cell-style"])]),_:1},8,["loading","dataList"])])}}});const le=O(H,[["__scopeId","data-v-ab82c99b"]]);export{le as default};