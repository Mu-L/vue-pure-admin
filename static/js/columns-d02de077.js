import{u as e,w as u}from"./xlsx-acc0a47d.js";import{t as i}from"./data-de75864f.js";import{r as m,G as f}from"./index-ab9e3548.js";import{E as b}from"./index-a1190989.js";function w(){const r=m(f(i,!0)),o=[{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}];return{columns:o,dataList:r,exportExcel:()=>{const s=r.value.map(t=>{const n=[];return o.forEach(c=>{n.push(t[c.prop])}),n}),a=[];o.forEach(t=>{a.push(t.label)}),s.unshift(a);const l=e.aoa_to_sheet(s),p=e.book_new();e.book_append_sheet(p,l,"\u6570\u636E\u62A5\u8868"),u(p,"pure-admin-table.xlsx"),b.success("\u5BFC\u51FA\u6210\u529F")}}}export{w as useColumns};