import{aX as Z,aY as q,aZ as J,a_ as K,a$ as ee,b0 as x,b1 as k,aI as te,b2 as ne,aV as ae,A as m,b3 as H,aT as z,aj as N,b4 as oe,b5 as D,b6 as ue,b7 as re,b8 as le,u as O,a as se,y as ie,r as F,b9 as de,e as _,f as E,g as T}from"./index-020c9acf.js";import{z as fe}from"./index.esm-6d65e3fa.js";import{u as S}from"./epTheme-fa49d53e.js";function ce(t){return function(e,n,a){var u=Object(e);if(!Z(e)){var r=q(n);e=J(e),n=function(f){return r(u[f],f,u)}}var i=t(e,n,a);return i>-1?u[r?e[i]:i]:void 0}}var me=ce(K);const he=me,ge=ee({id:"pure-app",state:()=>{var t,e,n,a;return{sidebar:{opened:(e=(t=x.getItem("responsive-layout"))==null?void 0:t.sidebarStatus)!=null?e:k().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(a=(n=x.getItem("responsive-layout"))==null?void 0:n.layout)!=null?a:k().Layout,device:te()?"mobile":"desktop"}},getters:{getSidebarStatus(){return this.sidebar.opened},getDevice(){return this.device}},actions:{TOGGLE_SIDEBAR(t,e){const n=x.getItem("responsive-layout");t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,n.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,n.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,n.sidebarStatus=this.sidebar.opened),x.setItem("responsive-layout",n)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function ve(){return ge(ne)}const P="\u5F53\u524D\u8DEF\u7531\u914D\u7F6E\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E";function pe(){const t=ve(),e=ae().options.routes,n=m(()=>{var o;return(o=z())==null?void 0:o.username}),a=m(()=>(o,c)=>({background:o===c?S().epThemeColor:"",color:o===c?"#f4f4f5":"#000"})),u=m(()=>(o,c)=>o===c?"":"dark:hover:!text-primary"),r=m(()=>n.value?{marginRight:"10px"}:""),i=m(()=>!t.getSidebarStatus),f=m(()=>t.getDevice),{$storage:d,$config:h}=H(),g=m(()=>{var o;return(o=d==null?void 0:d.layout)==null?void 0:o.layout}),l=m(()=>h.Title);function s(o){const c=k().Title;c?document.title=`${N(o.title)} | ${c}`:document.title=N(o.title)}function v(){z().logOut()}function p(){oe.push("/welcome")}function C(){D.emit("openPanel")}function B(){t.toggleSideBar()}function M(o){o==null||o.handleResize()}function Q(o){var y;if(!o.children)return console.error(P);const c=/^http(s?):\/\//,b=(y=o.children[0])==null?void 0:y.path;return c.test(b)?o.path+"/"+b:b}function U(o,c){if(X(o))return;let b="";const y=o.lastIndexOf("/");y>0&&(b=o.slice(0,y));function w(A,I){return I?I.map($=>{$.path===A?$.redirect?w($.redirect,$.children):D.emit("changLayoutRoute",{indexPath:A,parentPath:b}):$.children&&w(A,$.children)}):console.error(P)}w(o,c)}function X(o){return ue.includes(o)}function Y(o){fe(o)}return{title:l,device:f,layout:g,logout:v,routers:e,$storage:d,backHome:p,onPanel:C,changeTitle:s,toggleSideBar:B,menuSelect:U,handleResize:M,resolvePath:Q,isCollapse:i,pureApp:t,username:n,avatarsStyle:r,getDropdownItemStyle:a,getDropdownItemClass:u,changeWangeditorLanguage:Y}}function be(){const{$storage:t,$config:e}=H(),n=()=>{var r,i,f,d,h,g,l,s,v,p,C,B,M;re().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=le),t.locale||(t.locale={locale:(r=e==null?void 0:e.Locale)!=null?r:"zh"},O().locale.value=(i=e==null?void 0:e.Locale)!=null?i:"zh"),t.layout||(t.layout={layout:(f=e==null?void 0:e.Layout)!=null?f:"vertical",theme:(d=e==null?void 0:e.Theme)!=null?d:"default",darkMode:(h=e==null?void 0:e.DarkMode)!=null?h:!1,sidebarStatus:(g=e==null?void 0:e.SidebarStatus)!=null?g:!0,epThemeColor:(l=e==null?void 0:e.EpThemeColor)!=null?l:"#409EFF"}),t.configure||(t.configure={grey:(s=e==null?void 0:e.Grey)!=null?s:!1,weak:(v=e==null?void 0:e.Weak)!=null?v:!1,hideTabs:(p=e==null?void 0:e.HideTabs)!=null?p:!1,showLogo:(C=e==null?void 0:e.ShowLogo)!=null?C:!0,showModel:(B=e==null?void 0:e.ShowModel)!=null?B:"smart",multiTagsCache:(M=e==null?void 0:e.MultiTagsCache)!=null?M:!1})},a=m(()=>t==null?void 0:t.layout.layout),u=m(()=>t.layout);return{layout:a,layoutTheme:u,initStorage:n}}function je(t){const{$storage:e,changeTitle:n,changeWangeditorLanguage:a,handleResize:u}=pe(),{locale:r,t:i}=O(),f=se();function d(){e.locale={locale:"zh"},r.value="zh",t&&u(t.value)}function h(){e.locale={locale:"en"},r.value="en",t&&u(t.value)}return ie(()=>r.value,()=>{n(f.meta),r.value==="en"?a(r.value):a("zh-CN")}),{t:i,route:f,locale:r,translationCh:d,translationEn:h}}const L={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"head",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/vue-pure-admin/vue-pure-admin/node_modules/.pnpm/@pureadmin+theme@2.4.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $vxe-primary-color: #409EFF !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $vxe-primary-color: #409EFF !default;
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $vxe-primary-color: #f5222d !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $vxe-primary-color: #fa541c !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $vxe-primary-color: #fadb14 !default;
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $vxe-primary-color: #13c2c2 !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $vxe-primary-color: #52c41a !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $vxe-primary-color: #eb2f96 !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $vxe-primary-color: #722ed1 !default;
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},$e="/vue-pure-admin/",ye="assets";function V(t){let e=t.replace("#","").match(/../g);for(let n=0;n<3;n++)e[n]=parseInt(e[n],16);return e}function W(t,e,n){let a=[t.toString(16),e.toString(16),n.toString(16)];for(let u=0;u<3;u++)a[u].length==1&&(a[u]=`0${a[u]}`);return`#${a.join("")}`}function Te(t,e){let n=V(t);for(let a=0;a<3;a++)n[a]=Math.floor(n[a]*(1-e));return W(n[0],n[1],n[2])}function Ce(t,e){let n=V(t);for(let a=0;a<3;a++)n[a]=Math.floor((255-n[a])*e+n[a]);return W(n[0],n[1],n[2])}function R(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function j({scopeName:t,multipleScopeVars:e}){const n=Array.isArray(e)&&e.length?e:L.multipleScopeVars;let a=document.documentElement.className;new RegExp(R(t)).test(a)||(n.forEach(u=>{a=a.replace(new RegExp(R(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=a.replace(/(^\s+|\s+$)/g,""))}function G({id:t,href:e}){const n=document.createElement("link");return n.rel="stylesheet",n.href=e,n.id=t,n}function Be(t){const e={scopeName:"theme-default",customLinkHref:r=>r,...t},n=e.themeLinkTagId||L.themeLinkTagId;let a=document.getElementById(n);const u=e.customLinkHref(`/${$e}/${ye}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,""));if(a){a.id=`${n}_old`;const r=G({id:n,href:u});a.nextSibling?a.parentNode.insertBefore(r,a.nextSibling):a.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{a.parentNode.removeChild(a),a=null},60),j(e)};return}a=G({id:n,href:u}),j(e),document[(e.themeLinkTagInjectTo||L.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(a)}function Ge(){var g;const{layoutTheme:t,layout:e}=be(),n=F([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:a}=H(),u=F((g=a==null?void 0:a.layout)==null?void 0:g.darkMode),r=document.documentElement;function i(l="default"){var s,v;if(t.value.theme=l,Be({scopeName:`layout-theme-${l}`}),a.layout={layout:e.value,theme:l,darkMode:u.value,sidebarStatus:(s=a.layout)==null?void 0:s.sidebarStatus,epThemeColor:(v=a.layout)==null?void 0:v.epThemeColor},l==="default"||l==="light")d(k().EpThemeColor);else{const p=he(n.value,{themeColor:l});d(p.color)}}const f=l=>new de(l).shade(10).toString(),d=l=>{S().setEpThemeColor(l),r.style.setProperty("--el-color-primary-active",f(l)),document.documentElement.style.setProperty("--el-color-primary",l);for(let s=1;s<=9;s++)document.documentElement.style.setProperty(`--el-color-primary-light-${s}`,Ce(l,s/10));for(let s=1;s<=2;s++)document.documentElement.style.setProperty(`--el-color-primary-dark-${s}`,Te(l,s/10))};function h(){S().epTheme==="light"&&u.value?i("default"):i(S().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:n,dataThemeChange:h,setEpThemeColor:d,setLayoutThemeColor:i}}const Me={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16"},xe=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Se=T("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),ke=[xe,Se];function we(t,e){return _(),E("svg",Me,ke)}const Oe={render:we},Ae={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16"},Le=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),He=T("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),_e=[Le,He];function Ee(t,e){return _(),E("svg",Ae,_e)}const Ve={render:Ee},Ie={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",class:"globalization",width:"1em",height:"1em",viewBox:"0 0 512 512"},ze=T("path",{d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zM267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"},null,-1),Ne=[ze];function De(t,e){return _(),E("svg",Ie,Ne)}const We={render:De};export{Ge as a,pe as b,je as c,Oe as d,Ve as e,ve as f,We as g,Be as t,be as u};