import{B as n,c as o,a as c,o as e,b as t,d,F as u,n as i,e as l}from"./vendor.94bb8d8d.js";import{_,r as m,A as p}from"./index.7c49e7a2.js";const f={name:"Home",setup(){return n(async()=>{await m.getAll()}),{restaurants:o(()=>p.restaurants)}}},v={class:"container"},x={class:"row justify-content-center"};function B(b,g,h,s,j,k){const r=c("Restaurant");return e(),t("div",v,[d("div",x,[(e(!0),t(u,null,i(s.restaurants,a=>(e(),t("div",{class:"col-md-9",key:a.id},[l(r,{restaurant:a},null,8,["restaurant"])]))),128))])])}var $=_(f,[["render",B]]);export{$ as default};