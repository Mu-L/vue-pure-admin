import{r as n,G as y,s as i,f as t,m as r,ab as c,T as E,b as f,bC as I}from"./index-ab9e3548.js";import{a as M}from"./data-de75864f.js";import{E as O}from"./index-a1190989.js";function k(){const l=n({}),u=n({}),o=n(-1),v=n(y(M,!0)),m=i(()=>a=>{var e;return(e=l.value[a])==null?void 0:e.value}),s=i(()=>a=>{var e;return(e=u.value[a])==null?void 0:e.editing}),p=i(()=>(a,e=!1)=>["cursor-pointer","ml-2","transition","delay-100",e?["hover:scale-110","hover:text-red-500"]:s.value(a)&&["scale-150","text-red-500"]]),b=[{label:"ID\uFF08\u53EF\u7F16\u8F91\uFF09",prop:"id",cellRenderer:({row:a,index:e})=>t("div",{class:"flex-bc h-[32px]",onMouseenter:()=>o.value=e,onMouseleave:()=>h(e)},[r(t("p",null,[a.id]),[[c,!s.value(e)]]),t(E,{"enter-active-class":"animate__animated animate__fadeInUp animate__faster"},{default:()=>[r(t(f("el-input"),{modelValue:m.value(e),onInput:d=>C(d,e)},null),[[c,s.value(e)]])]}),r(t(f("iconify-icon-offline"),{icon:"check",class:p.value(e),onClick:()=>_(e)},null),[[c,s.value(e)]]),r(t(f("iconify-icon-offline"),{icon:"edits",class:p.value(e,!0),onClick:()=>g(a,e)},null),[[c,o.value===e&&!s.value(e)]])])},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"}];function g({id:a},e){l.value[e]=Object.assign({},l.value[e],{value:a}),u.value[e]=Object.assign({},u.value[e],{editing:!0})}function h(a){var e;(e=l.value[a])!=null&&e.value?o.value=a:o.value=-1}function C(a,e){l.value[e].value=a}function _(a){v.value[a].id=l.value[a].value,O.success(`\u60A8\u7F16\u8F91\u4E86\u7B2C ${a+1} \u884C\uFF0C\u7F16\u8F91\u540E\u6570\u636E\u4E3A\uFF1A${JSON.stringify(v.value[a])}`),u.value[a]=Object.assign({},u.value[a],{editing:!1}),I().then(()=>l.value[a].value=null)}return{columns:b,dataList:v}}export{k as useColumns};