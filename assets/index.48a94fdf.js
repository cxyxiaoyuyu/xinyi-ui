var lt=Object.defineProperty,ct=Object.defineProperties;var rt=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var Y=(e,n,t)=>n in e?lt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,w=(e,n)=>{for(var t in n||(n={}))K.call(n,t)&&Y(e,t,n[t]);if(L)for(var t of L(n))Z.call(n,t)&&Y(e,t,n[t]);return e},A=(e,n)=>ct(e,rt(n));var Q=(e,n)=>{var t={};for(var u in e)K.call(e,u)&&n.indexOf(u)<0&&(t[u]=e[u]);if(e!=null&&L)for(var u of L(e))n.indexOf(u)<0&&Z.call(e,u)&&(t[u]=e[u]);return t};import{d as f,i as V,r as p,c as m,a as i,b as D,e as o,w as c,p as S,f as I,o as d,g as r,F as x,h as z,n as T,t as E,j as y,k as g,l as ee,m as B,q as te,s as it,u as ne,v as q,x as N,y as oe,S as dt,z as O,T as se,A as M,B as P,C as J,D as ue,E as X,G as H,H as pt,I as _t,J as mt,K as ft}from"./vendor.6138c21a.js";const bt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}};bt();var v=(e,n)=>{const t=e.__vccOpts||e;for(const[u,s]of n)t[u]=s;return t};const vt=f({name:"",setup(){const e=V("asideVisible");return{toggleAside:()=>{e.value=!e.value}}}}),G=e=>(S("data-v-a30150a2"),e=e(),I(),e),ht={class:"topNav"},xt={class:"logo"},yt=G(()=>i("use",{"xlink:href":"#icon-menu"},null,-1)),gt=[yt],$t=G(()=>i("span",null,"XinYi UI",-1)),Ct={class:"navlist"},Bt=r("\u4E3B\u9875"),Ft=r("\u6587\u6863"),Et=G(()=>i("li",null,[i("a",{href:""},"GitHub")],-1));function Dt(e,n,t,u,s,l){const a=p("router-link");return d(),m("div",ht,[i("div",xt,[e.$route.path.includes("/doc")?(d(),m("svg",{key:0,class:"icon menu",onClick:n[0]||(n[0]=(..._)=>e.toggleAside&&e.toggleAside(..._))},gt)):D("",!0),$t]),i("div",Ct,[i("ul",null,[i("li",null,[o(a,{to:"/"},{default:c(()=>[Bt]),_:1})]),i("li",null,[o(a,{to:"/doc"},{default:c(()=>[Ft]),_:1})]),Et])])])}var wt=v(vt,[["render",Dt],["__scopeId","data-v-a30150a2"]]);const At=f({name:"",setup(){return{}}}),ae=e=>(S("data-v-5c384082"),e=e(),I(),e),kt={class:"home"},Tt=ae(()=>i("h2",null,"XinYi \xA0UI ",-1)),Mt=ae(()=>i("h3",null,"\u4E00\u5957\u57FA\u4E8EVue3 \u7684\u7B80\u6613UI\u6846\u67B6",-1)),Vt=r("Get Started");function St(e,n,t,u,s,l){const a=p("x-button");return d(),m("div",kt,[Tt,Mt,o(a,{round:"",type:"primary",size:"big",onClick:n[0]||(n[0]=_=>e.$router.push({name:"install"}))},{default:c(()=>[Vt]),_:1})])}var It=v(At,[["render",St],["__scopeId","data-v-5c384082"]]);const zt=["Icon","Button","Switch","Input","Tabs","Table","Form","Drawer","Dialog","MessageBox","Toast"];const Lt=f({name:"",setup(){return{asideVisible:V("asideVisible"),compentList:zt}}}),le=e=>(S("data-v-73d1edcd"),e=e(),I(),e),Xt={class:"doc"},Ht=le(()=>i("h4",null,"\u5F00\u59CB\u4F7F\u7528",-1)),jt={class:"route"},Ut=r("\u5B89\u88C5"),qt={class:"route"},Nt=r("\u5F00\u59CB\u4F7F\u7528"),Ot=le(()=>i("h4",null,"\u7EC4\u4EF6\u5217\u8868",-1));function Pt(e,n,t,u,s,l){const a=p("router-link"),_=p("router-view");return d(),m("div",Xt,[i("aside",{class:T({hide:!e.asideVisible})},[Ht,i("div",jt,[o(a,{to:"/doc/install"},{default:c(()=>[Ut]),_:1})]),i("div",qt,[o(a,{to:"/doc/get-started"},{default:c(()=>[Nt]),_:1})]),Ot,(d(!0),m(x,null,z(e.compentList,h=>(d(),m("div",{key:h,class:"route"},[o(a,{to:`/doc/${h.toLowerCase()}`},{default:c(()=>[r(E(h)+" \u7EC4\u4EF6",1)]),_:2},1032,["to"])]))),128))],2),i("main",null,[o(_)])])}var Jt=v(Lt,[["render",Pt],["__scopeId","data-v-73d1edcd"]]),ce=e=>{e.__sourceCode=`<template>
   <x-switch v-model="value" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref(true)
    return {value};
  },
});
<\/script>`,e.__sourceCodeTitle="\u5E38\u89C4\u7528\u6CD5"};const re=f({setup(){return{value:y(!0)}}});function Gt(e,n,t,u,s,l){const a=p("x-switch");return d(),g(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=_=>e.value=_)},null,8,["modelValue"])}typeof ce=="function"&&ce(re);var Wt=v(re,[["render",Gt]]),ie=e=>{e.__sourceCode=`<template>
   <x-switch v-model="value" disabled/>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref(true)
    return {value};
  },
});
<\/script>`,e.__sourceCodeTitle="\u652F\u6301disabled"};const de=f({setup(){return{value:y(!0)}}});function Rt(e,n,t,u,s,l){const a=p("x-switch");return d(),g(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=_=>e.value=_),disabled:""},null,8,["modelValue"])}typeof ie=="function"&&ie(de);var Kt=v(de,[["render",Rt]]);const Zt=i("h2",null,"Switch \u7EC4\u4EF6\u793A\u4F8B",-1),Yt=f({setup(e){const n=[["v-model","\u503C","boolean","true/false","false"],["disabled","disabled","boolean","true/false","false"]];return(t,u)=>{const s=p("Demo"),l=p("props-table");return d(),m(x,null,[Zt,o(s,{component:Wt}),o(s,{component:Kt}),o(l,{data:n})],64)}}});var pe=e=>{e.__sourceCode=`<template>
  <x-icon icon="edit"></x-icon>
  <x-icon icon="message"></x-icon>
  <x-icon icon="delete"></x-icon>
  <x-icon icon="star"></x-icon>
  <x-icon icon="error"></x-icon>
</template>`,e.__sourceCodeTitle="\u5E38\u89C4\u7528\u6CD5"};const _e={};function Qt(e,n){const t=p("x-icon");return d(),m(x,null,[o(t,{icon:"edit"}),o(t,{icon:"message"}),o(t,{icon:"delete"}),o(t,{icon:"star"}),o(t,{icon:"error"})],64)}typeof pe=="function"&&pe(_e);var en=v(_e,[["render",Qt]]);const tn={setup(){return{IconDemo:en}}},nn=i("h2",null,"Icon \u7EC4\u4EF6\u793A\u4F8B",-1);function on(e,n,t,u,s,l){const a=p("Demo");return d(),m(x,null,[nn,o(a,{component:u.IconDemo},null,8,["component"])],64)}var sn=v(tn,[["render",on]]);var me=e=>{e.__sourceCode=`<template>
  <div class="row">
    <x-button>\u9ED8\u8BA4\u6309\u94AE</x-button>
    <x-button type="primary">\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button type="success">\u6210\u529F\u6309\u94AE</x-button>
    <x-button type="info">\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button type="warning">\u8B66\u544A\u6309\u94AE</x-button>
    <x-button type="danger">\u5371\u9669\u6309\u94AE</x-button>
  </div>
  <div class="row">
    <x-button plain>\u6734\u7D20\u6309\u94AE</x-button>
    <x-button plain type="primary">\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button plain type="success">\u6210\u529F\u6309\u94AE</x-button>
    <x-button plain type="info">\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button plain type="warning">\u8B66\u544A\u6309\u94AE</x-button>
    <x-button plain type="danger">\u5371\u9669\u6309\u94AE</x-button>
  </div>
  <div class="row">
    <x-button round>\u5706\u89D2\u6309\u94AE</x-button>
    <x-button round type="primary">\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button round type="success">\u6210\u529F\u6309\u94AE</x-button>
    <x-button round type="info">\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button round type="warning">\u8B66\u544A\u6309\u94AE</x-button>
    <x-button round type="danger">\u5371\u9669\u6309\u94AE</x-button>
  </div>
  <div>
    <x-button text>\u6587\u5B57\u6309\u94AE</x-button>
    <x-button type="primary" text>\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button type="success" text>\u6210\u529F\u6309\u94AE</x-button>
    <x-button type="info" text>\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button type="warning" text>\u8B66\u544A\u6309\u94AE</x-button>
    <x-button type="danger" text>\u5371\u9669\u6309\u94AE</x-button>
  </div>
</template>

<style>
.row {
  margin-bottom: 20px;
}
</style>`,e.__sourceCodeTitle="\u4E3B\u9898\u6309\u94AE"};const fe={},un={class:"row"},an=r("\u9ED8\u8BA4\u6309\u94AE"),ln=r("\u4E3B\u8981\u6309\u94AE"),cn=r("\u6210\u529F\u6309\u94AE"),rn=r("\u4FE1\u606F\u6309\u94AE"),dn=r("\u8B66\u544A\u6309\u94AE"),pn=r("\u5371\u9669\u6309\u94AE"),_n={class:"row"},mn=r("\u6734\u7D20\u6309\u94AE"),fn=r("\u4E3B\u8981\u6309\u94AE"),bn=r("\u6210\u529F\u6309\u94AE"),vn=r("\u4FE1\u606F\u6309\u94AE"),hn=r("\u8B66\u544A\u6309\u94AE"),xn=r("\u5371\u9669\u6309\u94AE"),yn={class:"row"},gn=r("\u5706\u89D2\u6309\u94AE"),$n=r("\u4E3B\u8981\u6309\u94AE"),Cn=r("\u6210\u529F\u6309\u94AE"),Bn=r("\u4FE1\u606F\u6309\u94AE"),Fn=r("\u8B66\u544A\u6309\u94AE"),En=r("\u5371\u9669\u6309\u94AE"),Dn=r("\u6587\u5B57\u6309\u94AE"),wn=r("\u4E3B\u8981\u6309\u94AE"),An=r("\u6210\u529F\u6309\u94AE"),kn=r("\u4FE1\u606F\u6309\u94AE"),Tn=r("\u8B66\u544A\u6309\u94AE"),Mn=r("\u5371\u9669\u6309\u94AE");function Vn(e,n){const t=p("x-button");return d(),m(x,null,[i("div",un,[o(t,null,{default:c(()=>[an]),_:1}),o(t,{type:"primary"},{default:c(()=>[ln]),_:1}),o(t,{type:"success"},{default:c(()=>[cn]),_:1}),o(t,{type:"info"},{default:c(()=>[rn]),_:1}),o(t,{type:"warning"},{default:c(()=>[dn]),_:1}),o(t,{type:"danger"},{default:c(()=>[pn]),_:1})]),i("div",_n,[o(t,{plain:""},{default:c(()=>[mn]),_:1}),o(t,{plain:"",type:"primary"},{default:c(()=>[fn]),_:1}),o(t,{plain:"",type:"success"},{default:c(()=>[bn]),_:1}),o(t,{plain:"",type:"info"},{default:c(()=>[vn]),_:1}),o(t,{plain:"",type:"warning"},{default:c(()=>[hn]),_:1}),o(t,{plain:"",type:"danger"},{default:c(()=>[xn]),_:1})]),i("div",yn,[o(t,{round:""},{default:c(()=>[gn]),_:1}),o(t,{round:"",type:"primary"},{default:c(()=>[$n]),_:1}),o(t,{round:"",type:"success"},{default:c(()=>[Cn]),_:1}),o(t,{round:"",type:"info"},{default:c(()=>[Bn]),_:1}),o(t,{round:"",type:"warning"},{default:c(()=>[Fn]),_:1}),o(t,{round:"",type:"danger"},{default:c(()=>[En]),_:1})]),i("div",null,[o(t,{text:""},{default:c(()=>[Dn]),_:1}),o(t,{type:"primary",text:""},{default:c(()=>[wn]),_:1}),o(t,{type:"success",text:""},{default:c(()=>[An]),_:1}),o(t,{type:"info",text:""},{default:c(()=>[kn]),_:1}),o(t,{type:"warning",text:""},{default:c(()=>[Tn]),_:1}),o(t,{type:"danger",text:""},{default:c(()=>[Mn]),_:1})])],64)}typeof me=="function"&&me(fe);var Sn=v(fe,[["render",Vn]]);var be=e=>{e.__sourceCode=`<template>
  <div class="row">
    <x-button icon="search">\u9ED8\u8BA4\u6309\u94AE</x-button>
    <x-button icon="edit" type="primary">\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button icon="menu" type="success">\u6210\u529F\u6309\u94AE</x-button>
    <x-button icon="message" type="info">\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button icon="star" type="warning">\u8B66\u544A\u6309\u94AE</x-button>
    <x-button icon="delete" type="danger">\u5371\u9669\u6309\u94AE</x-button>
  </div>
  <div class="row">
    <x-button round>\u9ED8\u8BA4\u6309\u94AE<x-icon icon="search"></x-icon></x-button>
    <x-button round type="primary">\u4E3B\u8981\u6309\u94AE<x-icon icon="edit"></x-icon></x-button>
    <x-button round type="success">\u6210\u529F\u6309\u94AE<x-icon icon="menu"></x-icon></x-button>
    <x-button round type="info">\u4FE1\u606F\u6309\u94AE<x-icon icon="message"></x-icon></x-button>
    <x-button round type="warning">\u8B66\u544A\u6309\u94AE<x-icon icon="star"></x-icon></x-button>
    <x-button round type="danger">\u5371\u9669\u6309\u94AE<x-icon icon="delete"></x-icon></x-button>
  </div>
  <div>
    <x-button icon="search" circle></x-button>
    <x-button icon="edit" circle type="primary"></x-button>
    <x-button icon="menu" circle type="success"></x-button>
    <x-button icon="message" circle type="info"></x-button>
    <x-button icon="star" circle type="warning"></x-button>
    <x-button icon="delete" circle type="danger"></x-button>
  </div>
</template>

<style>
.row {
  margin-bottom: 20px;
}
</style>`,e.__sourceCodeTitle="\u56FE\u6807\u6309\u94AE"};const ve={},In={class:"row"},zn=r("\u9ED8\u8BA4\u6309\u94AE"),Ln=r("\u4E3B\u8981\u6309\u94AE"),Xn=r("\u6210\u529F\u6309\u94AE"),Hn=r("\u4FE1\u606F\u6309\u94AE"),jn=r("\u8B66\u544A\u6309\u94AE"),Un=r("\u5371\u9669\u6309\u94AE"),qn={class:"row"},Nn=r("\u9ED8\u8BA4\u6309\u94AE"),On=r("\u4E3B\u8981\u6309\u94AE"),Pn=r("\u6210\u529F\u6309\u94AE"),Jn=r("\u4FE1\u606F\u6309\u94AE"),Gn=r("\u8B66\u544A\u6309\u94AE"),Wn=r("\u5371\u9669\u6309\u94AE");function Rn(e,n){const t=p("x-button"),u=p("x-icon");return d(),m(x,null,[i("div",In,[o(t,{icon:"search"},{default:c(()=>[zn]),_:1}),o(t,{icon:"edit",type:"primary"},{default:c(()=>[Ln]),_:1}),o(t,{icon:"menu",type:"success"},{default:c(()=>[Xn]),_:1}),o(t,{icon:"message",type:"info"},{default:c(()=>[Hn]),_:1}),o(t,{icon:"star",type:"warning"},{default:c(()=>[jn]),_:1}),o(t,{icon:"delete",type:"danger"},{default:c(()=>[Un]),_:1})]),i("div",qn,[o(t,{round:""},{default:c(()=>[Nn,o(u,{icon:"search"})]),_:1}),o(t,{round:"",type:"primary"},{default:c(()=>[On,o(u,{icon:"edit"})]),_:1}),o(t,{round:"",type:"success"},{default:c(()=>[Pn,o(u,{icon:"menu"})]),_:1}),o(t,{round:"",type:"info"},{default:c(()=>[Jn,o(u,{icon:"message"})]),_:1}),o(t,{round:"",type:"warning"},{default:c(()=>[Gn,o(u,{icon:"star"})]),_:1}),o(t,{round:"",type:"danger"},{default:c(()=>[Wn,o(u,{icon:"delete"})]),_:1})]),i("div",null,[o(t,{icon:"search",circle:""}),o(t,{icon:"edit",circle:"",type:"primary"}),o(t,{icon:"menu",circle:"",type:"success"}),o(t,{icon:"message",circle:"",type:"info"}),o(t,{icon:"star",circle:"",type:"warning"}),o(t,{icon:"delete",circle:"",type:"danger"})])],64)}typeof be=="function"&&be(ve);var Kn=v(ve,[["render",Rn]]),he=e=>{e.__sourceCode=`<template>
 <div class="row">
    <x-button disabled @click="handleClick">\u9ED8\u8BA4\u6309\u94AE</x-button>
    <x-button type="primary" disabled>\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button type="success" disabled>\u6210\u529F\u6309\u94AE</x-button>
    <x-button type="info" disabled>\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button type="warning" disabled>\u8B66\u544A\u6309\u94AE</x-button>
    <x-button type="danger" disabled>\u5371\u9669\u6309\u94AE</x-button>
  </div>
  <div>
    <x-button plain disabled>\u6734\u7D20\u6309\u94AE</x-button>
    <x-button plain type="primary" disabled>\u4E3B\u8981\u6309\u94AE</x-button>
    <x-button plain type="success" disabled>\u6210\u529F\u6309\u94AE</x-button>
    <x-button plain type="info" disabled>\u4FE1\u606F\u6309\u94AE</x-button>
    <x-button plain type="warning" disabled>\u8B66\u544A\u6309\u94AE</x-button>
    <x-button plain type="danger" disabled>\u5371\u9669\u6309\u94AE</x-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup(){
    return {
      handleClick(){
        console.log('\u4E0D\u4F1A\u6253\u5370') 
      } 
    } 
  }
});
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"};const xe=f({setup(){return{handleClick(){console.log("\u4E0D\u4F1A\u6253\u5370")}}}}),Zn={class:"row"},Yn=r("\u9ED8\u8BA4\u6309\u94AE"),Qn=r("\u4E3B\u8981\u6309\u94AE"),eo=r("\u6210\u529F\u6309\u94AE"),to=r("\u4FE1\u606F\u6309\u94AE"),no=r("\u8B66\u544A\u6309\u94AE"),oo=r("\u5371\u9669\u6309\u94AE"),so=r("\u6734\u7D20\u6309\u94AE"),uo=r("\u4E3B\u8981\u6309\u94AE"),ao=r("\u6210\u529F\u6309\u94AE"),lo=r("\u4FE1\u606F\u6309\u94AE"),co=r("\u8B66\u544A\u6309\u94AE"),ro=r("\u5371\u9669\u6309\u94AE");function io(e,n,t,u,s,l){const a=p("x-button");return d(),m(x,null,[i("div",Zn,[o(a,{disabled:"",onClick:e.handleClick},{default:c(()=>[Yn]),_:1},8,["onClick"]),o(a,{type:"primary",disabled:""},{default:c(()=>[Qn]),_:1}),o(a,{type:"success",disabled:""},{default:c(()=>[eo]),_:1}),o(a,{type:"info",disabled:""},{default:c(()=>[to]),_:1}),o(a,{type:"warning",disabled:""},{default:c(()=>[no]),_:1}),o(a,{type:"danger",disabled:""},{default:c(()=>[oo]),_:1})]),i("div",null,[o(a,{plain:"",disabled:""},{default:c(()=>[so]),_:1}),o(a,{plain:"",type:"primary",disabled:""},{default:c(()=>[uo]),_:1}),o(a,{plain:"",type:"success",disabled:""},{default:c(()=>[ao]),_:1}),o(a,{plain:"",type:"info",disabled:""},{default:c(()=>[lo]),_:1}),o(a,{plain:"",type:"warning",disabled:""},{default:c(()=>[co]),_:1}),o(a,{plain:"",type:"danger",disabled:""},{default:c(()=>[ro]),_:1})])],64)}typeof he=="function"&&he(xe);var po=v(xe,[["render",io]]),ye=e=>{e.__sourceCode=`<template>
  <x-button-group>
    <x-button type="primary" icon="prev">\u4E0A\u4E00\u9875</x-button>
    <x-button type="primary">\u4E0B\u4E00\u9875<x-icon icon="next"></x-icon></x-button>
  </x-button-group>
  <x-button-group>
    <x-button type="warning" icon="star"></x-button>
    <x-button type="success" icon="message"></x-button>
    <x-button type="danger" icon="delete"></x-button>
  </x-button-group>
</template>`,e.__sourceCodeTitle="\u6309\u94AE\u7EC4"};const ge={},_o=r("\u4E0A\u4E00\u9875"),mo=r("\u4E0B\u4E00\u9875");function fo(e,n){const t=p("x-button"),u=p("x-icon"),s=p("x-button-group");return d(),m(x,null,[o(s,null,{default:c(()=>[o(t,{type:"primary",icon:"prev"},{default:c(()=>[_o]),_:1}),o(t,{type:"primary"},{default:c(()=>[mo,o(u,{icon:"next"})]),_:1})]),_:1}),o(s,null,{default:c(()=>[o(t,{type:"warning",icon:"star"}),o(t,{type:"success",icon:"message"}),o(t,{type:"danger",icon:"delete"})]),_:1})],64)}typeof ye=="function"&&ye(ge);var bo=v(ge,[["render",fo]]),$e=e=>{e.__sourceCode=`<template>
  <span>\u70B9\u51FB\u6309\u94AE\u5207\u6362\u72B6\u6001</span>
  <div style="margin-top: 8px;">
    <x-button 
      type="primary" 
      :loading="loading" 
      @click="toggleLoading"
    >{{text}}
    </x-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  setup(){
    const loading = ref(true) 
    const toggleLoading = () => {
      loading.value = !loading.value
    }
    const text = computed(()=>{
      if(loading.value){
        return '\u6B63\u5728\u52A0\u8F7D' 
      } 
      return '\u52A0\u8F7D\u5B8C\u6210'
    })
    return { loading,toggleLoading,text }
  }
});
<\/script>`,e.__sourceCodeTitle="\u52A0\u8F7D\u4E2D\u6309\u94AE"};const Ce=f({setup(){const e=y(!0),n=()=>{e.value=!e.value},t=ee(()=>e.value?"\u6B63\u5728\u52A0\u8F7D":"\u52A0\u8F7D\u5B8C\u6210");return{loading:e,toggleLoading:n,text:t}}}),vo=i("span",null,"\u70B9\u51FB\u6309\u94AE\u5207\u6362\u72B6\u6001",-1),ho={style:{"margin-top":"8px"}};function xo(e,n,t,u,s,l){const a=p("x-button");return d(),m(x,null,[vo,i("div",ho,[o(a,{type:"primary",loading:e.loading,onClick:e.toggleLoading},{default:c(()=>[r(E(e.text),1)]),_:1},8,["loading","onClick"])])],64)}typeof $e=="function"&&$e(Ce);var yo=v(Ce,[["render",xo]]),Be=e=>{e.__sourceCode=`<template>
  <div class="row">
    <x-button size="big">\u5927\u6309\u94AE</x-button>
    <x-button>\u9ED8\u8BA4\u5927\u5C0F</x-button>
    <x-button size="small">\u5C0F\u6309\u94AE</x-button>
  </div>
  <div class="row">
    <x-button round size="big">\u5927\u6309\u94AE</x-button>
    <x-button round>\u9ED8\u8BA4\u5927\u5C0F</x-button>
    <x-button round size="small">\u5C0F\u6309\u94AE</x-button>
  </div>
  <div>
    <x-button circle size="big" icon="star"></x-button>
    <x-button circle icon="message"></x-button>
    <x-button circle size="small" icon="delete"></x-button>
  </div>
</template>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"};const Fe={},go={class:"row"},$o=r("\u5927\u6309\u94AE"),Co=r("\u9ED8\u8BA4\u5927\u5C0F"),Bo=r("\u5C0F\u6309\u94AE"),Fo={class:"row"},Eo=r("\u5927\u6309\u94AE"),Do=r("\u9ED8\u8BA4\u5927\u5C0F"),wo=r("\u5C0F\u6309\u94AE");function Ao(e,n){const t=p("x-button");return d(),m(x,null,[i("div",go,[o(t,{size:"big"},{default:c(()=>[$o]),_:1}),o(t,null,{default:c(()=>[Co]),_:1}),o(t,{size:"small"},{default:c(()=>[Bo]),_:1})]),i("div",Fo,[o(t,{round:"",size:"big"},{default:c(()=>[Eo]),_:1}),o(t,{round:""},{default:c(()=>[Do]),_:1}),o(t,{round:"",size:"small"},{default:c(()=>[wo]),_:1})]),i("div",null,[o(t,{circle:"",size:"big",icon:"star"}),o(t,{circle:"",icon:"message"}),o(t,{circle:"",size:"small",icon:"delete"})])],64)}typeof Be=="function"&&Be(Fe);var ko=v(Fe,[["render",Ao]]);const To=i("h2",null,"Button \u7EC4\u4EF6\u793A\u4F8B",-1),Mo=i("h2",null,"\u5C5E\u6027",-1),Vo=f({setup(e){const n=[["type","\u6309\u94AE\u7C7B\u578B","string","primary / success / warning / danger / info","button"],["plain","\u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE","boolean","true/false","false"],["text","\u662F\u5426\u4E3A\u6587\u672C\u6309\u94AE","boolean","true/false","false"],["round","\u662F\u5426\u4E3A\u5706\u89D2\u6309\u94AE","boolean","true/false","false"],["icon","\u56FE\u6807\u540D","string","",""],["circle","\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE","boolean","true/false","false"],["disabled","\u662F\u5426disabled","boolean","true/false","false"],["loading","\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001","boolean","true/false","false"],["size","\u6309\u94AE\u5927\u5C0F","boolean","big/medium/small","medium"]];return(t,u)=>{const s=p("Demo"),l=p("props-table");return d(),m(x,null,[To,o(s,{component:Sn}),o(s,{component:Kn}),o(s,{component:po}),o(s,{component:bo}),o(s,{component:yo}),o(s,{component:ko}),Mo,o(l,{data:n})],64)}}});var Ee=e=>{e.__sourceCode=`<template>
  <div>
    <x-table :thead="theadData" :data="tableData"></x-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const theadData = ref([
      { prop: "\u65E5\u671F", width: 200 },
      { prop: "\u59D3\u540D", width: 200 },
      { prop: "\u5730\u5740"},
    ]);
    const tableData = ref([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    return { tableData, theadData };
  },
});
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"};const De=f({setup(){const e=y([{prop:"\u65E5\u671F",width:200},{prop:"\u59D3\u540D",width:200},{prop:"\u5730\u5740"}]);return{tableData:y([[1,2,3],[4,5,6],[7,8,9]]),theadData:e}}});function So(e,n,t,u,s,l){const a=p("x-table");return d(),m("div",null,[o(a,{thead:e.theadData,data:e.tableData},null,8,["thead","data"])])}typeof Ee=="function"&&Ee(De);var Io=v(De,[["render",So]]),we=e=>{e.__sourceCode=`<template>
  <div>
    <x-table stripe :thead="theadData" :data="tableData"></x-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const theadData = ref([
      { prop: "\u65E5\u671F", width: 200 },
      { prop: "\u59D3\u540D", width: 200 },
      { prop: "\u5730\u5740" },
    ]);
    const tableData = ref([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [11, 12, 13],
    ]);
    return { tableData, theadData };
  },
});
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u9694\u884C\u53D8\u8272"};const Ae=f({setup(){const e=y([{prop:"\u65E5\u671F",width:200},{prop:"\u59D3\u540D",width:200},{prop:"\u5730\u5740"}]);return{tableData:y([[1,2,3],[4,5,6],[7,8,9],[11,12,13]]),theadData:e}}});function zo(e,n,t,u,s,l){const a=p("x-table");return d(),m("div",null,[o(a,{stripe:"",thead:e.theadData,data:e.tableData},null,8,["thead","data"])])}typeof we=="function"&&we(Ae);var Lo=v(Ae,[["render",zo]]),ke=e=>{e.__sourceCode=`<template>
  <div>
    <x-table border :thead="theadData" :data="tableData"></x-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const theadData = ref([
      { prop: "\u65E5\u671F", width: 200 },
      { prop: "\u59D3\u540D", width: 200 },
      { prop: "\u5730\u5740" },
    ]);
    const tableData = ref([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [11, 12, 13],
    ]);
    return { tableData, theadData };
  },
});
<\/script>`,e.__sourceCodeTitle="\u5E26\u8FB9\u6846(\u53EF\u62D6\u52A8\u6539\u53D8\u5217\u5BBD)"};const Te=f({setup(){const e=y([{prop:"\u65E5\u671F",width:200},{prop:"\u59D3\u540D",width:200},{prop:"\u5730\u5740"}]);return{tableData:y([[1,2,3],[4,5,6],[7,8,9],[11,12,13]]),theadData:e}}});function Xo(e,n,t,u,s,l){const a=p("x-table");return d(),m("div",null,[o(a,{border:"",thead:e.theadData,data:e.tableData},null,8,["thead","data"])])}typeof ke=="function"&&ke(Te);var Ho=v(Te,[["render",Xo]]);const jo=i("h2",null,"Table \u7EC4\u4EF6\u793A\u4F8B",-1),Uo=i("h2",null,"\u5C5E\u6027",-1),qo=f({setup(e){const n=["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u53EF\u9009\u503C","\u9ED8\u8BA4\u503C"],t=[["thead","\u8868\u5934\u6570\u636E","array/object","",""],["data","\u8868\u683C\u6570\u636E","array","",""],["stripe","\u662F\u5426\u9694\u884C\u53D8\u8272","boolean","true/false","false"],["border","\u662F\u5426\u6709\u8FB9\u6846","boolean","true/false","false"]];return(u,s)=>{const l=p("Demo"),a=p("x-table");return d(),m("div",null,[jo,o(l,{component:Io}),o(l,{component:Lo}),o(l,{component:Ho}),Uo,o(a,{thead:n,data:t})])}}});var Me=e=>{e.__sourceCode=`<template>
  <x-input v-model="message" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("");
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u793A\u4F8B"};const Ve=f({setup(e){const n=y("");return(t,u)=>{const s=p("x-input");return d(),g(s,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])}}});typeof Me=="function"&&Me(Ve);var Se=e=>{e.__sourceCode=`<template>
  <x-input v-model="message" disabled placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("\u7981\u7528\u72B6\u6001");
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"};const Ie=f({setup(e){const n=y("\u7981\u7528\u72B6\u6001");return(t,u)=>{const s=p("x-input");return d(),g(s,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),disabled:"",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])}}});typeof Se=="function"&&Se(Ie);var ze=e=>{e.__sourceCode=`<template>
  <x-input v-model="message" readonly placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("\u53EA\u8BFB\u72B6\u6001");
<\/script>`,e.__sourceCodeTitle="\u53EA\u8BFB\u72B6\u6001"};const Le=f({setup(e){const n=y("\u53EA\u8BFB\u72B6\u6001");return(t,u)=>{const s=p("x-input");return d(),g(s,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),readonly:"",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])}}});typeof ze=="function"&&ze(Le);var Xe=e=>{e.__sourceCode=`<template>
  <x-input v-model="message" clear placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("\u4E00\u952E\u6E05\u7A7A");
<\/script>`,e.__sourceCodeTitle="\u4E00\u952E\u6E05\u7A7A"};const He=f({setup(e){const n=y("\u4E00\u952E\u6E05\u7A7A");return(t,u)=>{const s=p("x-input");return d(),g(s,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),clear:"",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["modelValue"])}}});typeof Xe=="function"&&Xe(He);var je=e=>{e.__sourceCode=`<template>
  <x-input v-model="message" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></x-input>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const message = ref("");
<\/script>`,e.__sourceCodeTitle="\u5BC6\u7801\u7C7B\u578B\u7684\u8F93\u5165\u6846"};const Ue=f({setup(e){const n=y("");return(t,u)=>{const s=p("x-input");return d(),g(s,{modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])}}});typeof je=="function"&&je(Ue);const No=i("h2",null,"Input \u7EC4\u4EF6\u793A\u4F8B",-1),Oo=f({setup(e){const n=[["v-model","\u662F\u5426\u663E\u793A","boolean","true/false","false"],["clear","\u662F\u5426\u4E00\u952E\u6E05\u7A7A","boolean","true/false","false"],["type","\u8F93\u5165\u6846\u7C7B\u578B","string","input/password","input"],["disabled","\u662F\u5426\u7981\u7528","boolean","true/false","false"],["readonly","\u662F\u5426\u53EA\u8BFB","boolean","true/false","false"]];return(t,u)=>{const s=p("Demo"),l=p("props-table");return d(),m(x,null,[No,o(s,{component:Ve}),o(s,{component:He}),o(s,{component:Ue}),o(s,{component:Ie}),o(s,{component:Le}),o(l,{data:n})],64)}}});const Po=f({name:"XSwitch",props:{modelValue:{type:Boolean,required:!0},disabled:{type:Boolean,default:!1}},setup(){}}),Jo=["disabled"],Go=i("span",null,null,-1),Wo=[Go];function Ro(e,n,t,u,s,l){return d(),m("button",{class:T(["gulu-switch",{"gulu-checked":e.modelValue,"gulu-disabled":e.disabled}]),disabled:e.disabled,onClick:n[0]||(n[0]=a=>e.$emit("update:modelValue",!e.modelValue))},Wo,10,Jo)}var Ko=v(Po,[["render",Ro]]);(function(e){var n,t,u,s,l,a='<svg><symbol id="icon-clear" viewBox="0 0 1024 1024"><path d="M810.666667 273.706667l-60.373333-60.373333-238.293333 238.293333-238.293333-238.293333-60.373333 60.373333 238.293333 238.293333-238.293333 238.293333 60.373333 60.373333 238.293333-238.293333 238.293333 238.293333 60.373333-60.373333-238.293333-238.293333z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"  ></path><path d="M657.066667 360.533333c-12.8-12.8-32-12.8-44.8 0l-102.4 102.4-102.4-102.4c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l102.4-102.4 102.4 102.4c6.4 6.4 14.933333 8.533333 23.466667 8.533334s17.066667-2.133333 23.466666-8.533334c12.8-12.8 12.8-32 0-44.8l-106.666666-100.266666 102.4-102.4c12.8-12.8 12.8-34.133333 0-46.933334z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M511.882596 287.998081h-0.361244a31.998984 31.998984 0 0 1-31.659415-31.977309v-0.361244c0-0.104761 0.115598-11.722364 0.115598-63.658399V96.000564a31.998984 31.998984 0 1 1 64.001581 0V192.001129c0 52.586273-0.111986 63.88237-0.119211 64.337537a32.002596 32.002596 0 0 1-31.977309 31.659415zM511.998194 959.99842a31.998984 31.998984 0 0 1-31.998984-31.998984v-96.379871c0-51.610915-0.111986-63.174332-0.115598-63.286318s0-0.242033 0-0.361243a31.998984 31.998984 0 0 1 63.997968-0.314283c0 0.455167 0.11921 11.711527 0.11921 64.034093v96.307622a31.998984 31.998984 0 0 1-32.002596 31.998984zM330.899406 363.021212a31.897836 31.897836 0 0 1-22.866739-9.612699c-0.075861-0.075861-8.207461-8.370021-44.931515-45.094076L195.198137 240.429485a31.998984 31.998984 0 0 1 45.256635-45.253022L308.336112 263.057803c37.182834 37.182834 45.090463 45.253022 45.41197 45.578141A31.998984 31.998984 0 0 1 330.899406 363.021212zM806.137421 838.11473a31.901448 31.901448 0 0 1-22.628318-9.374279L715.624151 760.859111c-36.724054-36.724054-45.018214-44.859267-45.097687-44.93874a31.998984 31.998984 0 0 1 44.77618-45.729864c0.32512 0.317895 8.395308 8.229136 45.578142 45.411969l67.88134 67.88134a31.998984 31.998984 0 0 1-22.624705 54.630914zM224.000113 838.11473a31.901448 31.901448 0 0 0 22.628317-9.374279l67.88134-67.88134c36.724054-36.724054 45.021826-44.859267 45.097688-44.93874a31.998984 31.998984 0 0 0-44.776181-45.729864c-0.32512 0.317895-8.395308 8.229136-45.578142 45.411969l-67.88134 67.884953a31.998984 31.998984 0 0 0 22.628318 54.627301zM255.948523 544.058589h-0.361244c-0.104761 0-11.722364-0.115598-63.658399-0.115598H95.942765a31.998984 31.998984 0 1 1 0-64.00158h95.996952c52.586273 0 63.88237 0.111986 64.337538 0.11921a31.998984 31.998984 0 0 1 31.659414 31.97731v0.361244a32.002596 32.002596 0 0 1-31.988146 31.659414zM767.939492 544.058589a32.002596 32.002596 0 0 1-31.995372-31.666639v-0.361244a31.998984 31.998984 0 0 1 31.659415-31.970085c0.455167 0 11.754876-0.11921 64.34115-0.11921h96.000564a31.998984 31.998984 0 0 1 0 64.00158H831.944685c-51.936034 0-63.553638 0.111986-63.665624 0.115598h-0.335957zM692.999446 363.0176a31.998984 31.998984 0 0 1-22.863126-54.381656c0.317895-0.32512 8.229136-8.395308 45.41197-45.578141l67.88134-67.884953A31.998984 31.998984 0 1 1 828.693489 240.429485l-67.892177 67.88134c-31.020013 31.023625-41.644196 41.759794-44.241539 44.393262l-0.697201 0.722488a31.908673 31.908673 0 0 1-22.863126 9.591025z" fill="" ></path></symbol><symbol id="icon-next" viewBox="0 0 1024 1024"><path d="M636.416 522.24l-397.824 387.072c-23.552 23.04-23.552 59.904 0 82.432 23.552 23.04 61.44 23.04 84.992 0l440.32-428.032c23.552-23.04 23.552-59.904 0-82.432l-440.32-428.032C311.808 41.472 296.448 35.84 281.088 35.84c-15.36 0-30.72 5.632-42.496 16.896-23.552 23.04-23.552 59.904 0 82.432l397.824 387.072z" fill="" ></path></symbol><symbol id="icon-prev" viewBox="0 0 1024 1024"><path d="M387.584 501.76l397.824-387.072c23.552-23.04 23.552-59.904 0-82.43199999-23.552-23.04-61.44-23.03999999-84.992-1e-8l-440.32 428.032c-23.552 23.04-23.552 59.904 0 82.432l440.32 428.032C712.192 982.528 727.552 988.16 742.912 988.16c15.36 0 30.72-5.632 42.49600001-16.896 23.552-23.04 23.552-59.904-1e-8-82.432l-397.824-387.072z" fill="" ></path></symbol><symbol id="icon-delete" viewBox="0 0 1024 1024"><path d="M768 384c-19.2 0-32 12.8-32 32l0 377.6c0 25.6-19.2 38.4-38.4 38.4L326.4 832c-25.6 0-38.4-19.2-38.4-38.4L288 416C288 396.8 275.2 384 256 384S224 396.8 224 416l0 377.6c0 57.6 44.8 102.4 102.4 102.4l364.8 0c57.6 0 102.4-44.8 102.4-102.4L793.6 416C800 396.8 787.2 384 768 384z"  ></path><path d="M460.8 736l0-320C460.8 396.8 448 384 435.2 384S396.8 396.8 396.8 416l0 320c0 19.2 12.8 32 32 32S460.8 755.2 460.8 736z"  ></path><path d="M627.2 736l0-320C627.2 396.8 608 384 588.8 384S563.2 396.8 563.2 416l0 320C563.2 755.2 576 768 588.8 768S627.2 755.2 627.2 736z"  ></path><path d="M832 256l-160 0L672 211.2C672 166.4 633.6 128 588.8 128L435.2 128C390.4 128 352 166.4 352 211.2L352 256 192 256C172.8 256 160 268.8 160 288S172.8 320 192 320l640 0c19.2 0 32-12.8 32-32S851.2 256 832 256zM416 211.2C416 198.4 422.4 192 435.2 192l153.6 0c12.8 0 19.2 6.4 19.2 19.2L608 256l-192 0L416 211.2z"  ></path></symbol><symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M511.51086 191.938474c3.901867 0 7.855922 2.629897 9.619078 6.404873l76.456323 163.568333 14.470573 30.958082 33.778314 5.177929 176.005596 26.978445c4.025687 0.613984 7.151887 3.372817 8.588609 7.573489 1.49812 4.597715 0.525979 9.113565-2.705622 12.43317L698.311313 578.179258l-22.428825 23.075555 5.163603 31.762401 30.016641 184.659697c0.708128 4.342912-1.251503 9.267061-4.669346 11.773138-1.888 1.294482-3.837398 1.923816-5.951549 1.923816-1.657756 0-3.391237-0.452301-4.885264-1.27504L542.540573 745.200226l-31.029714-17.217127-31.029714 17.217127-152.8492 84.810594c-1.804089 0.979304-3.708462 1.184989-4.993734 1.184989-2.229784 0-4.393054-0.618077-5.947456-1.697665-3.517103-2.547009-5.465478-7.361665-4.743024-11.745509l0.011256-0.070608 0.011256-0.070608 29.979802-184.605461 5.15644-31.749098-22.413476-23.070438L195.321524 445.029726l-0.034792-0.035816-0.034792-0.035816c-3.152806-3.234671-4.151553-7.829316-2.676969-12.299117 1.429559-4.243651 4.564969-7.03216 8.625448-7.652284l175.983083-26.960025 33.787524-5.175883 14.470573-30.967292 76.41232-163.519214C503.630379 194.588837 507.60183 191.938474 511.51086 191.938474M511.51086 127.981836c-28.733415 0-55.262628 16.983813-67.577095 43.278689L367.498932 334.828858 191.515848 361.78786c-27.747971 4.242627-50.581002 23.639396-59.603493 50.610678-9.069563 27.215852-2.341325 56.800657 17.537422 77.197196l129.370463 133.159766-29.979802 184.604438c-4.693906 28.500101 7.41897 57.661258 30.884404 74.331939 12.605086 8.908904 27.721365 13.461593 42.912345 13.461593 12.334933 0 24.720008-3.003404 35.839253-9.114588l153.034419-84.913948 153.084561 84.937484c11.003612 6.083555 23.384593 9.268084 35.847439 9.268084 15.358803 0 30.170137-4.721535 42.881646-13.662161 23.39585-16.623609 35.509748-45.783743 30.861892-74.284867l-30.011524-184.628998 129.413442-133.147486c19.854187-20.396539 26.571169-49.970088 17.513886-77.246315-9.03477-26.960025-31.886221-46.332235-59.615773-50.561559L655.525857 334.828858l-76.456323-163.568333C566.788837 144.976906 540.26781 127.981836 511.51086 127.981836L511.51086 127.981836z"  ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M304 464m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M752 464m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M528 464m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M512 64C265.6 64 64 243.2 64 460.8c0 115.2 57.6 224 156.8 300.8V928c0 12.8 6.4 22.4 16 28.8 3.2 3.2 9.6 3.2 16 3.2s12.8 0 16-3.2l172.8-105.6c25.6 3.2 48 6.4 70.4 6.4 246.4 0 448-179.2 448-396.8S758.4 64 512 64z m0 729.6c-22.4 0-48-3.2-73.6-6.4-6.4 0-16 0-22.4 3.2l-134.4 80v-128c0-9.6-6.4-19.2-12.8-25.6-89.6-64-140.8-156.8-140.8-259.2C128 278.4 300.8 128 512 128s384 150.4 384 332.8-172.8 332.8-384 332.8z"  ></path></symbol><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M257.7 752c2 0 4-0.2 6-0.5L431.9 722c2-0.4 3.9-1.3 5.3-2.8l423.9-423.9c3.9-3.9 3.9-10.2 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2c-1.9 11.1 1.5 21.9 9.4 29.8 6.6 6.4 14.9 9.9 23.8 9.9z m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M859.1 894.2c-13.6 0-26.5-5.1-36.4-14.4L683.4 740.5l-10.9 8.6c-30.8 24.2-65.1 42.9-102.2 55.5-36.1 12.3-73.8 18.5-112 18.5-45 0-88.9-8.5-130.4-25.4-43-17.4-81.6-43-114.6-76.1-33.1-33.1-58.7-71.7-76.2-114.7-16.8-41.5-25.4-85.4-25.4-130.5 0-45 8.5-88.9 25.4-130.5 17.4-43 43.1-81.6 76.2-114.7 33.1-33.1 71.7-58.7 114.6-76.1 41.5-16.8 85.4-25.4 130.4-25.4s88.9 8.5 130.5 25.4c43 17.4 81.6 43.1 114.7 76.1 28.3 28.3 51.2 60.7 68.1 96.5 16.4 34.6 26.9 71.4 31.2 109.6 4.3 37.8 2.3 75.9-5.8 113-8.2 37.8-22.6 73.7-42.7 106.6l7.6 11.5L897.4 804l0.4 0.4c19.4 20.5 19.3 52.6 0 73.1-10.2 10.8-23.9 16.7-38.7 16.7zM460.8 209.7c-35.6 0-70.2 6.9-102.9 20.4-33.9 14-64.2 34.5-90 61-49.2 50.5-76.3 117.2-76.3 187.7s27.1 137.2 76.3 187.7l0.1 0.2 0.2 0.1c50.5 49.2 117.2 76.3 187.7 76.3 35.6 0 70.2-6.9 102.9-20.4 33.9-14 64.2-34.5 90-61 49.2-50.5 76.3-117.2 76.3-187.7S698 336.8 648.8 286.3l-0.1-0.2-0.2-0.1c-50.5-49.2-117.2-76.3-187.7-76.3z"  ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 784H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zM904 472H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"  ></path></symbol><symbol id="icon-xinyi" viewBox="0 0 1024 1024"><path d="M909.653333 996.352H113.083733a41.301333 41.301333 0 0 1-41.233066-41.233067V249.2416h879.035733v705.979733c0 22.766933-18.363733 41.130667-41.233067 41.130667z" fill="#FFE085" ></path><path d="M988.740267 599.688533H34.133333V288.597333c0-21.6064 17.476267-39.253333 39.253334-39.253333h876.1344c21.6064 0 39.253333 17.5104 39.253333 39.253333v311.0912z" fill="#FFF0C2" ></path><path d="M430.045867 994.577067h159.914666V249.514667h-159.914666z" fill="#FF8882" ></path><path d="M159.573333 1.262933s208.896-17.749333 263.714134 88.064c54.852267 105.813333 87.825067 175.5136 87.825066 175.5136S349.0816 309.077333 257.024 243.131733C164.932267 177.152 159.573333 1.262933 159.573333 1.262933z m703.112534 0s-208.896-17.749333-263.748267 88.064c-54.818133 105.813333-87.825067 175.650133-87.825067 175.650134s162.065067 44.2368 254.122667-21.742934c92.091733-65.9456 97.450667-242.005333 97.450667-242.005333zM191.2832 427.895467a23.893333 23.893333 0 0 0-41.984-15.496534 23.893333 23.893333 0 0 0-41.984 15.496534c0 6.8608 3.140267 12.629333 7.645867 17.476266l34.372266 33.109334 33.860267-32.733867c4.369067-4.471467 8.0896-10.717867 8.0896-17.851733z m160.187733 0a23.8592 23.8592 0 0 0-41.984-15.496534 23.8592 23.8592 0 0 0-41.984 15.496534c0 6.8608 3.140267 12.629333 7.611734 17.476266l34.372266 33.109334 33.860267-32.733867c4.369067-4.471467 8.123733-10.717867 8.123733-17.851733z m400.2816 0a23.893333 23.893333 0 0 0-41.984-15.496534 23.8592 23.8592 0 0 0-41.984 15.496534c0 6.8608 3.140267 12.629333 7.611734 17.476266l34.372266 33.109334 33.860267-32.733867c4.369067-4.471467 8.123733-10.717867 8.123733-17.851733z" fill="#FF8882" ></path><path d="M911.906133 427.895467a23.8592 23.8592 0 0 0-41.984-15.496534 23.893333 23.893333 0 0 0-41.984 15.496534c0 6.8608 3.140267 12.629333 7.645867 17.476266l34.338133 33.109334 33.860267-32.733867c4.369067-4.471467 8.123733-10.717867 8.123733-17.851733z" fill="#FF8882" ></path></symbol></svg>',_=(_=document.getElementsByTagName("script"))[_.length-1].getAttribute("data-injectcss"),h=function(b,C){C.parentNode.insertBefore(b,C)};if(_&&!e.__iconfont__svg__cssinject__){e.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(b){console&&console.log(b)}}function F(){l||(l=!0,u())}function $(){try{s.documentElement.doScroll("left")}catch{return void setTimeout($,50)}F()}n=function(){var b,C;(C=document.createElement("div")).innerHTML=a,a=null,(b=C.getElementsByTagName("svg")[0])&&(b.setAttribute("aria-hidden","true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",C=b,(b=document.body).firstChild?h(C,b.firstChild):b.appendChild(C))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(n,0):(t=function(){document.removeEventListener("DOMContentLoaded",t,!1),n()},document.addEventListener("DOMContentLoaded",t,!1)):document.attachEvent&&(u=n,s=e.document,l=!1,$(),s.onreadystatechange=function(){s.readyState=="complete"&&(s.onreadystatechange=null,F())})})(window);const Zo={name:"XIcon",props:["icon"]},Yo={class:"gulu-icon","aria-hidden":"true"},Qo=["xlink:href"];function es(e,n,t,u,s,l){return d(),m("svg",Yo,[i("use",{"xlink:href":`#icon-${t.icon}`},null,8,Qo)])}var qe=v(Zo,[["render",es]]);const ts={name:"XButton",inheritAttrs:!1,components:{Icon:qe},props:{type:{type:String,default:"button"},plain:{type:Boolean,default:!1},text:{type:Boolean,default:!1},round:{type:Boolean,default:!1},icon:{type:String},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,default:"medium"}},setup(e,{slots:n}){const{type:t,plain:u,round:s,circle:l,disabled:a,text:_,size:h}=e;return{classes:{[`gulu-type-${t}`]:t,"gulu-text":_,"gulu-plain":u,"gulu-round":s,"gulu-circle":l,"gulu-disabled":a,[`gulu-size-${h}`]:h}}}},ns=["disabled"],os={key:1};function ss(e,n,t,u,s,l){const a=p("Icon");return d(),m("button",te({class:["gulu-button",u.classes]},e.$attrs,{disabled:t.disabled}),[t.icon?(d(),g(a,{key:0,class:"gulu-icon",icon:t.icon},null,8,["icon"])):D("",!0),e.$slots.default?(d(),m("span",os,[B(e.$slots,"default")])):D("",!0),t.loading?(d(),g(a,{key:2,icon:"loading"})):D("",!0)],16,ns)}var j=v(ts,[["render",ss]]);const us=f({name:"XButtonGroup",setup(){return{}}}),as={class:"gulu-button-group"};function ls(e,n,t,u,s,l){return d(),m("div",as,[B(e.$slots,"default")])}var cs=v(us,[["render",ls]]);const rs=f({name:"XTable",props:{thead:{type:Array||Object},data:{type:Array},stripe:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},setup(e){const{stripe:n,border:t}=e,u={"gulu-stripe":n,"gulu-border":t};let s,l,a=[];return{classes:u,setColRef:b=>{b&&a.push(b)},mouseDown:(b,C)=>{!t||(s=b.target,l=C,b.offsetX>s.offsetWidth-10&&(s.down=!0,s.oldWidth=s.offsetWidth,s.oldX=b.x))},mouseMove:(b,C)=>{!t||(b.target.offsetWidth-b.offsetX<10?b.target.style.cursor="col-resize":b.target.style.cursor="default",s||(s=b.target,l=C),s.down&&(a[l].width=s.oldWidth+(b.x-s.oldX),s.style.cursor="col-resize"))},mouseUp:b=>{!t||(s||(s=b.target,l=void 0),s.down=!1,s.style.cursor="defult")}}}}),is=["width"],ds=["onMousedown","onMousemove"];function ps(e,n,t,u,s,l){return d(),m("table",{class:T(["gulu-table",e.classes])},[i("colgroup",null,[(d(!0),m(x,null,z(e.thead,a=>{var _;return d(),m("col",{ref_for:!0,ref:e.setColRef,width:(_=a.width)!=null?_:a.width},null,8,is)}),256))]),i("thead",null,[i("tr",null,[(d(!0),m(x,null,z(e.thead,(a,_)=>(d(),m("th",{onMousedown:h=>e.mouseDown(h,_),onMousemove:h=>e.mouseMove(h,_),onMouseup:n[0]||(n[0]=h=>e.mouseUp(h))},E(a.prop?a.prop:a),41,ds))),256))])]),i("tbody",null,[(d(!0),m(x,null,z(e.data,a=>(d(),m("tr",null,[(d(!0),m(x,null,z(a,_=>(d(),m("td",null,E(_),1))),256))]))),256))])],2)}var _s=v(rs,[["render",ps]]);const ms={name:"XDrawer",props:{title:{type:String},modelValue:{type:Boolean,default:!1},direction:{type:String,default:"bottom"}},setup(e,{emit:n}){return{closeDrawer:()=>{n("update:modelValue",!1)}}}},fs={class:"title"},bs={class:"content"};function vs(e,n,t,u,s,l){return d(),m("div",{class:T(["drawer-mask",{open:t.modelValue}]),onClick:n[0]||(n[0]=it((...a)=>u.closeDrawer&&u.closeDrawer(...a),["self"]))},[i("div",{class:T(["drawer",t.direction])},[i("div",fs,E(t.title),1),i("div",bs,[B(e.$slots,"default",{},void 0,!0)])],2)],2)}var hs=v(ms,[["render",vs],["__scopeId","data-v-09d81839"]]),U=ne();const xs={class:"gulu-input"},ys=["value","disabled","readonly","type"],gs={name:"XInput",inheritAttrs:!1},$s=f(A(w({},gs),{props:{modelValue:{type:[String,Number]},clear:{type:Boolean,default:!1},type:{type:String,default:"input"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:n,emit:t}){const u=N(),s=u.parent;console.log(s,"parent"),q(()=>{console.log("onMounted"),U.emit("addInput",u)});const l=_=>{t("update:modelValue",_.target.value),s.exposed.validate()},a=()=>{t("update:modelValue","")};return n({emit:t}),(_,h)=>{const F=p("x-icon");return d(),m("div",xs,[i("input",te({class:"input",value:e.modelValue,disabled:e.disabled,readonly:e.readonly,type:e.type},_.$attrs,{onInput:h[0]||(h[0]=$=>l($))}),null,16,ys),e.clear&&e.modelValue?(d(),g(F,{key:0,icon:"error",class:"icon",onClick:a})):D("",!0)])}}}));var Cs=v($s,[["__scopeId","data-v-1921ef80"]]);const Bs={class:"gulu-form-item"},Fs={key:0},Es={key:1,class:"error"},Ds={name:"XFormItem"},ws=f(A(w({},Ds),{props:{label:{type:String,default:""},prop:{type:String}},setup(e,{expose:n}){const t=e,u=y(""),s=V("form");oe();const l=s.props.model[t.prop];let a;U.on("addInput",$=>{$.parent===_&&(a=$)});const _=N();return q(()=>{t.prop&&U.emit("addFormItem",_)}),n({validate:()=>{const $=s.props.rules[t.prop]||[],b=s.props.model[t.prop],C={[t.prop]:$};return new dt(C).validate({[t.prop]:b},R=>{R?u.value=R[0].message:u.value=""})},resetField:()=>{console.log(a,"input",l),a.exposed.emit("update:modelValue",l),u.value=""}}),($,b)=>(d(),m("div",Bs,[e.label?(d(),m("label",Fs,E(e.label),1)):D("",!0),B($.$slots,"default"),u.value?(d(),m("span",Es,E(u.value),1)):D("",!0)]))}})),As={name:"XForm"},ks=f(A(w({},As),{props:{model:{type:Object,required:!0},rules:{type:Object}},setup(e,{expose:n}){const t=N();console.log("form",t),O("form",t);const u=[];return U.on("addFormItem",a=>{u.push(a)}),n({validate:a=>{const _=u.map(h=>h.exposed.validate());Promise.all(_).then(()=>{a(!0)}).catch(()=>{a(!1)})},resetFields:()=>{u.map(a=>a.exposed.resetField())}}),(a,_)=>(d(),m("div",null,[B(a.$slots,"default")]))}}));const Ts={class:"gulu-dialog-wrapper"},Ms={class:"gulu-dialog"},Vs={name:"XDialog"},Ss=f(A(w({},Vs),{props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:n}){const t=()=>{n("update:modelValue",!1)},u=()=>{t()};return(s,l)=>e.modelValue?(d(),g(se,{key:0,to:"body"},[i("div",{class:"gulu-dialog-overlay",onClick:u}),i("div",Ts,[i("div",Ms,[i("header",null,[B(s.$slots,"title"),i("span",{onClick:t,class:"gulu-dialog-close"})]),i("main",null,[B(s.$slots,"content")]),i("footer",null,[B(s.$slots,"footer")])])])])):D("",!0)}})),Is={class:"gulu-tabs"},zs={name:"XTabs"},Ls=f(A(w({},zs),{props:{selected:{type:String,required:!0}},setup(e){const n=e,t=ne();return O("eventBus",t),q(()=>{t.emit("update:selected",n.selected)}),(u,s)=>(d(),m("div",Is,[B(u.$slots,"default")]))}}));const Xs=["data-name"],Hs={name:"XTabsItem"},js=f(A(w({},Hs),{props:{disabled:{type:Boolean,default:!1},name:{type:[String,Number],required:!0}},emits:["click"],setup(e,{emit:n}){const t=e,u=y(!1),s=ee(()=>({active:u.value,disabled:t.disabled})),l=V("eventBus"),a=()=>{t.disabled||l.emit("update:selected",t.name)};return l.on("update:selected",_=>{u.value=_===t.name}),(_,h)=>(d(),m("div",{class:T(["gulu-tabs-item",M(s)]),onClick:a,"data-name":e.name},[B(_.$slots,"default",{},void 0,!0)],10,Xs))}}));var Ne=v(js,[["__scopeId","data-v-1938f550"]]);const Us={class:"gulu-tabs-head"},qs={class:"line",ref:"line"},Ns={name:"XTabsHead"},Os=f(A(w({},Ns),{setup(e){return oe().default().forEach(u=>{if(u.type!==Ne)throw new Error("TabsHead \u5B50\u6807\u7B7E\u5FC5\u987B\u662F TabsItem ")}),(u,s)=>(d(),m("div",Us,[B(u.$slots,"default",{},void 0,!0),i("div",qs,null,512)]))}}));var Ps=v(Os,[["__scopeId","data-v-1f584f20"]]);const Js={name:"XTabsBody"},Gs={class:"tabs-body"};function Ws(e,n,t,u,s,l){return d(),m("div",Gs,[B(e.$slots,"default")])}var Rs=v(Js,[["render",Ws]]);const Ks={name:"XTabsPane"},Zs=f(A(w({},Ks),{props:{name:{type:[String,Number],required:!0}},setup(e){const n=e,t=y(!1);return V("eventBus").on("update:selected",s=>{t.value=s===n.name}),(s,l)=>t.value?(d(),m("div",{key:0,class:T(["tabs-pane",{active:t.value}])},[B(s.$slots,"default",{},void 0,!0)],2)):D("",!0)}}));var Ys=v(Zs,[["__scopeId","data-v-7edd136f"]]);const Qs={class:"gulu-message-wrapper"},eu={class:"gulu-message"},tu=r("\u786E\u5B9A"),nu=r("\u53D6\u6D88"),ou=f({props:{title:{type:String,default:"\u63D0\u793A"},content:{type:String}},emits:["ok","cancel","close"],setup(e,{emit:n}){const t=()=>{n("cancel")},u=()=>{n("ok")},s=()=>{n("close")};return(l,a)=>(d(),g(se,{to:"body"},[i("div",{class:"gulu-message-overlay",onClick:s}),i("div",Qs,[i("div",eu,[i("header",null,[i("span",null,E(e.title),1),i("span",{onClick:s,class:"gulu-message-close"})]),i("main",null,E(e.content),1),i("footer",null,[o(j,{type:"primary",onClick:u},{default:c(()=>[tu]),_:1}),o(j,{onClick:t},{default:c(()=>[nu]),_:1})])])])]))}}),Oe=e=>new Promise((n,t)=>{const{title:u,content:s}=e,l=document.createElement("div"),a=P({render(){return J(ou,{title:u,content:s,onOk:()=>{a.unmount(),n("ok")},onCancel:()=>{t(),a.unmount()},onClose:()=>{a.unmount()}})}});a.mount(l),document.body.appendChild(l)});const su={class:"toast",ref:"toast"},uu={class:"message"},au=["innerHTML"],lu={class:"line",ref:"line"},cu=f({props:{autoClose:{type:[Boolean,Number],default:5,validator(e){return typeof e=="boolean"||typeof e=="number"}},closeButton:{type:String,default:"\u5173\u95ED"},enableHtml:{type:Boolean,default:!1},position:{type:String,default:"top",validator(e){return["top","bottom","middle"].indexOf(e)>=0}}},emits:["close"],setup(e,{emit:n}){const t=e;s();const u=()=>{n("close")};function s(){t.autoClose&&setTimeout(()=>{n("close")},t.autoClose*1e3)}return(l,a)=>(d(),m("div",{class:T(["wrapper",[`position-${e.position}`]])},[i("div",su,[i("div",uu,[e.enableHtml?(d(),m("div",{key:1,innerHTML:l.$slots.default[0]},null,8,au)):B(l.$slots,"default",{key:0},void 0,!0)]),i("div",lu,null,512),e.closeButton?(d(),m("span",{key:0,class:"close",onClick:u},E(e.closeButton),1)):D("",!0)],512)],2))}});var ru=v(cu,[["__scopeId","data-v-449dc110"]]);const iu=e=>{const l=e,{content:n}=l,t=Q(l,["content"]),u=document.createElement("div"),s=P({render(){return J(ru,A(w({},t),{onClose:()=>{s.unmount()}}),{default:()=>n})}});s.mount(u),document.body.appendChild(u)},k=function(e,n){return e.install=t=>{if(t.component(e.name,e),n)for(let u of n)t.component(u.name,u)},e},du=function(e){return{install(n){e.forEach(t=>n.use(t))}}},pu=k(Ko),_u=k(qe),mu=k(j,[cs]),fu=k(_s),bu=k(hs),vu=k(Cs),hu=k(ks,[ws]),xu=k(Ss),yu=k(Ls,[Ps,Rs,Ne,Ys]),gu=[pu,_u,mu,fu,bu,vu,hu,xu,yu];var $u=du(gu),Pe=e=>{e.__sourceCode=`<template>
  <x-form :model="userInfo" :rules="rules" ref="loginForm">
    <x-form-item label="\u7528\u6237\u540D" prop="username">
      <x-input
        v-model="userInfo.username"
        placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"
        clear
      ></x-input>
    </x-form-item>
    <x-form-item label="\u5BC6\u7801" prop="password">
      <x-input
        v-model="userInfo.password"
        placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"
        clear
      ></x-input>
    </x-form-item>
    <x-form-item>
      <x-button @click="login" type="primary">\u767B\u5F55</x-button>
      <x-button @click="reset" type="warning">\u91CD\u7F6E</x-button>
    </x-form-item>
  </x-form>
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";
import { openMessageBox } from "../../lib";

const userInfo = reactive({
  username: 'tom',
  password: "",
});
const rules = reactive({
  username: [{ required: true, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D" }],
  password: [{ required: true, message: "\u8BF7\u8F93\u5165\u5BC6\u7801" }],
});

const loginForm = ref(null)

const login = () => {
  loginForm.value.validate(valid => {
    console.log(valid) 
    if(valid){
      openMessageBox({title: '\u63D0\u793A',content: '\u767B\u5F55\u6210\u529F'}) 
    }
  })
};
const reset = () => {
  loginForm.value.resetFields()
}
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"};const Cu=r("\u767B\u5F55"),Bu=r("\u91CD\u7F6E"),Je=f({setup(e){const n=ue({username:"tom",password:""}),t=ue({username:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}]}),u=y(null),s=()=>{u.value.validate(a=>{console.log(a),a&&Oe({title:"\u63D0\u793A",content:"\u767B\u5F55\u6210\u529F"})})},l=()=>{u.value.resetFields()};return(a,_)=>{const h=p("x-input"),F=p("x-form-item"),$=p("x-button"),b=p("x-form");return d(),g(b,{model:M(n),rules:M(t),ref_key:"loginForm",ref:u},{default:c(()=>[o(F,{label:"\u7528\u6237\u540D",prop:"username"},{default:c(()=>[o(h,{modelValue:M(n).username,"onUpdate:modelValue":_[0]||(_[0]=C=>M(n).username=C),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",clear:""},null,8,["modelValue"])]),_:1}),o(F,{label:"\u5BC6\u7801",prop:"password"},{default:c(()=>[o(h,{modelValue:M(n).password,"onUpdate:modelValue":_[1]||(_[1]=C=>M(n).password=C),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",clear:""},null,8,["modelValue"])]),_:1}),o(F,null,{default:c(()=>[o($,{onClick:s,type:"primary"},{default:c(()=>[Cu]),_:1}),o($,{onClick:l,type:"warning"},{default:c(()=>[Bu]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});typeof Pe=="function"&&Pe(Je);const W=e=>(S("data-v-1a7111e4"),e=e(),I(),e),Fu=W(()=>i("h2",null,"Form \u7EC4\u4EF6\u793A\u4F8B",-1)),Eu=W(()=>i("h2",null,"Form \u65B9\u6CD5",-1)),Du=W(()=>i("h2",null,"FormItem \u65B9\u6CD5",-1)),wu=f({setup(e){const n=[["model","\u8868\u5355\u6570\u636E\u5BF9\u8C61","object","",""],["rules","\u8868\u5355\u9A8C\u8BC1\u89C4\u5219","object","",""]],t=["\u65B9\u6CD5\u540D","\u8BF4\u660E","\u56DE\u8C03\u51FD\u6570"],u=[["validate","\u5BF9\u6574\u4E2A\u8868\u5355\u4F5C\u9A8C\u8BC1\u3002 \u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u56DE\u8C03\u51FD\u6570\u6709\u4E00\u4E2A\u53C2\u6570 \u8868\u793A\u8868\u5355\u662F\u5426\u9A8C\u8BC1\u901A\u8FC7","Callback(boolean)"],["resetFields","\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C",""]],s=["\u65B9\u6CD5\u540D","\u8BF4\u660E","\u53C2\u6570"],l=[["validate","\u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u9A8C\u8BC1",""],["resetField","\u5BF9\u8BE5\u8868\u5355\u9879\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u5176\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C",""]],a=[["prop","\u8868\u5355\u57DF model \u5B57\u6BB5","string","\u4F20\u5165 Form \u7EC4\u4EF6\u7684 model \u4E2D\u7684\u5B57\u6BB5",""],["label","\u6807\u7B7E","string","",""]];return(_,h)=>{const F=p("Demo"),$=p("props-table"),b=p("x-table");return d(),m(x,null,[Fu,o(F,{component:Je}),o($,{data:n,title:"Form \u5C5E\u6027"}),Eu,o(b,{thead:t,data:u,class:"table"}),o($,{data:a,title:"FormItem \u5C5E\u6027"}),Du,o(b,{thead:s,data:l,class:"table"})],64)}}});var Au=v(wu,[["__scopeId","data-v-1a7111e4"]]),Ge=e=>{e.__sourceCode=`<template>
  <div>
    <label><input type="radio" value="top" v-model="direction" />\u4ECE\u4E0A\u5F80\u4E0B</label>
    <label><input type="radio" value="right" v-model="direction" />\u4ECE\u53F3\u5F80\u5DE6</label>
    <label><input type="radio" value="left" v-model="direction" />\u4ECE\u5DE6\u5F80\u53F3</label>
    <label><input type="radio" value="bottom" v-model="direction" />\u4ECE\u4E0B\u5F80\u4E0A</label>

    <x-button style="margin-left:10px" @click="drawerVisible = true">open drawer</x-button>

    <x-drawer title="\u6211\u662F\u6807\u9898" v-model="drawerVisible" :direction="direction">
      <span>\u6211\u6765\u5566!</span>
    </x-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
const drawerVisible = ref(false);
const innerDrawer = ref(false);
const direction = ref("top");
const showDrawer = () => {
  drawerVisible.value = true;
};
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"};const ku=r("\u4ECE\u4E0A\u5F80\u4E0B"),Tu=r("\u4ECE\u53F3\u5F80\u5DE6"),Mu=r("\u4ECE\u5DE6\u5F80\u53F3"),Vu=r("\u4ECE\u4E0B\u5F80\u4E0A"),Su=r("open drawer"),Iu=i("span",null,"\u6211\u6765\u5566!",-1),We=f({setup(e){const n=y(!1);y(!1);const t=y("top");return(u,s)=>{const l=p("x-button"),a=p("x-drawer");return d(),m("div",null,[i("label",null,[X(i("input",{type:"radio",value:"top","onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_)},null,512),[[H,t.value]]),ku]),i("label",null,[X(i("input",{type:"radio",value:"right","onUpdate:modelValue":s[1]||(s[1]=_=>t.value=_)},null,512),[[H,t.value]]),Tu]),i("label",null,[X(i("input",{type:"radio",value:"left","onUpdate:modelValue":s[2]||(s[2]=_=>t.value=_)},null,512),[[H,t.value]]),Mu]),i("label",null,[X(i("input",{type:"radio",value:"bottom","onUpdate:modelValue":s[3]||(s[3]=_=>t.value=_)},null,512),[[H,t.value]]),Vu]),o(l,{style:{"margin-left":"10px"},onClick:s[4]||(s[4]=_=>n.value=!0)},{default:c(()=>[Su]),_:1}),o(a,{title:"\u6211\u662F\u6807\u9898",modelValue:n.value,"onUpdate:modelValue":s[5]||(s[5]=_=>n.value=_),direction:t.value},{default:c(()=>[Iu]),_:1},8,["modelValue","direction"])])}}});typeof Ge=="function"&&Ge(We);const zu=i("h2",null,"Drawer \u7EC4\u4EF6\u793A\u4F8B",-1),Lu=f({setup(e){const n=[["title","\u6807\u9898","string","",""],["v-model","\u662F\u5426\u663E\u793A","boolean","true/false","false"],["direction","\u65B9\u5411","string","top/left/right/bottom","bottom"]];return(t,u)=>{const s=p("Demo"),l=p("props-table");return d(),m(x,null,[zu,o(s,{component:We}),o(l,{data:n})],64)}}});var Re=e=>{e.__sourceCode=`<template>
  <x-button text type="primary" @click="visible = true">\u663E\u793ADialog</x-button>
  
  <x-dialog v-model="visible">
    <template #title>\u63D0\u793A</template>
    <template #content>Vue \u5B9E\u73B0\u4E86\u4E00\u5957\u5185\u5BB9\u5206\u53D1\u7684 API</template>
    <template #footer>
      <x-button @click="visible = false">\u53D6\u6D88</x-button>
      <x-button type="primary" @click="visible = false">\u786E\u5B9A</x-button>
    </template>
  </x-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const visible = ref(false);
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"};const Xu=r("\u663E\u793ADialog"),Hu=r("\u63D0\u793A"),ju=r("Vue \u5B9E\u73B0\u4E86\u4E00\u5957\u5185\u5BB9\u5206\u53D1\u7684 API"),Uu=r("\u53D6\u6D88"),qu=r("\u786E\u5B9A"),Ke=f({setup(e){const n=y(!1);return(t,u)=>{const s=p("x-button"),l=p("x-dialog");return d(),m(x,null,[o(s,{text:"",type:"primary",onClick:u[0]||(u[0]=a=>n.value=!0)},{default:c(()=>[Xu]),_:1}),o(l,{modelValue:n.value,"onUpdate:modelValue":u[3]||(u[3]=a=>n.value=a)},{title:c(()=>[Hu]),content:c(()=>[ju]),footer:c(()=>[o(s,{onClick:u[1]||(u[1]=a=>n.value=!1)},{default:c(()=>[Uu]),_:1}),o(s,{type:"primary",onClick:u[2]||(u[2]=a=>n.value=!1)},{default:c(()=>[qu]),_:1})]),_:1},8,["modelValue"])],64)}}});typeof Re=="function"&&Re(Ke);const Nu=i("h2",null,"Dialog \u7EC4\u4EF6\u793A\u4F8B",-1),Ou=f({setup(e){const n=[["v-model","\u662F\u5426\u663E\u793A","boolean","true/false","false"]],t=[["title","dialog \u6807\u9898"],["content","dialog \u5185\u5BB9"],["footer","dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9"]];return(u,s)=>{const l=p("Demo"),a=p("props-table"),_=p("slots-table");return d(),m(x,null,[Nu,o(l,{component:Ke}),o(a,{data:n}),o(_,{data:t})],64)}}});var Ze=e=>{e.__sourceCode=`<template>
  <x-button text type="primary" @click="show">\u663E\u793AMessageBox</x-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { openMessageBox } from '../../lib/openMessageBox'
const show = () => {
  openMessageBox({title: '\u63D0\u793A',content: '\u5185\u5BB9'})
    .then(()=>{
      console.log('\u70B9\u51FB\u4E86\u786E\u5B9A') 
    })
    .catch(() => {
      console.log('\u70B9\u51FB\u4E86\u53D6\u6D88') 
    })
}
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"};const Pu=r("\u663E\u793AMessageBox"),Ye=f({setup(e){const n=()=>{Oe({title:"\u63D0\u793A",content:"\u5185\u5BB9"}).then(()=>{console.log("\u70B9\u51FB\u4E86\u786E\u5B9A")}).catch(()=>{console.log("\u70B9\u51FB\u4E86\u53D6\u6D88")})};return(t,u)=>{const s=p("x-button");return d(),g(s,{text:"",type:"primary",onClick:n},{default:c(()=>[Pu]),_:1})}}});typeof Ze=="function"&&Ze(Ye);const Ju=i("h2",null,"MessageBox \u7EC4\u4EF6\u793A\u4F8B",-1),Gu=f({setup(e){const n=[["title","\u6807\u9898","string","","\u63D0\u793A"],["content","\u5185\u5BB9","string","",""]];return(t,u)=>{const s=p("Demo"),l=p("props-table");return d(),m(x,null,[Ju,o(s,{component:Ye}),o(l,{data:n})],64)}}});var Qe=e=>{e.__sourceCode=`<template>
  <x-button type="primary" text @click="open('top')">open Toast Top</x-button>
  <x-button type="primary" text @click="open('middle')">open Toast Middle</x-button>
  <x-button type="primary" text @click="open('bottom')">open Toast Bottom</x-button>
</template>

<script lang="ts" setup>
import { reactive,ref } from "vue";
import { openToast } from '../../lib/openToast'

const open = (position) => {
  openToast({
    autoClose: true,
    position,
    closeButton: '\u597D\u7684',
    content: '\u54C8\u54C8\u54C8\u54C8' 
  })
}
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"};const Wu=r("open Toast Top"),Ru=r("open Toast Middle"),Ku=r("open Toast Bottom"),et=f({setup(e){const n=t=>{iu({autoClose:!0,position:t,closeButton:"\u597D\u7684",content:"\u54C8\u54C8\u54C8\u54C8"})};return(t,u)=>{const s=p("x-button");return d(),m(x,null,[o(s,{type:"primary",text:"",onClick:u[0]||(u[0]=l=>n("top"))},{default:c(()=>[Wu]),_:1}),o(s,{type:"primary",text:"",onClick:u[1]||(u[1]=l=>n("middle"))},{default:c(()=>[Ru]),_:1}),o(s,{type:"primary",text:"",onClick:u[2]||(u[2]=l=>n("bottom"))},{default:c(()=>[Ku]),_:1})],64)}}});typeof Qe=="function"&&Qe(et);const Zu=i("h2",null,"Toast \u7EC4\u4EF6\u793A\u4F8B",-1),Yu=f({setup(e){const n=[["autoClose","\u591A\u5C11\u79D2\u4EE5\u540E\u5173\u95ED \u6216\u4E0D\u81EA\u52A8\u5173\u95ED","boolean/number","true/false","5"],["closeButton","\u5173\u95ED\u6309\u94AE\u5185\u5BB9","string","--","\u5173\u95ED"],["enableHtml","\u662F\u5426\u652F\u6301html","boolean","true/false","false"],["position","toast\u663E\u793A\u7684\u4F4D\u7F6E","string","top/middle/bottom","top"]];return(t,u)=>{const s=p("Demo"),l=p("props-table");return d(),m(x,null,[Zu,o(s,{component:et}),o(l,{data:n})],64)}}});var tt=e=>{e.__sourceCode=`<template>
  <x-tabs selected="css">
    <x-tabs-head>
      <x-tabs-item name="html">HTML</x-tabs-item>
      <x-tabs-item name="css">CSS</x-tabs-item>
      <x-tabs-item name="js">JS</x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
      <x-tabs-pane name="html">\u8FD9\u662FHTML\u7684\u5185\u5BB9</x-tabs-pane>
      <x-tabs-pane name="css">\u8FD9\u662FCSS\u7684\u5185\u5BB9</x-tabs-pane>
      <x-tabs-pane name="js">\u8FD9\u662FJavaScritp\u7684\u5185\u5BB9</x-tabs-pane>
    </x-tabs-body>
  </x-tabs>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"};const Qu=r("HTML"),ea=r("CSS"),ta=r("JS"),na=r("\u8FD9\u662FHTML\u7684\u5185\u5BB9"),oa=r("\u8FD9\u662FCSS\u7684\u5185\u5BB9"),sa=r("\u8FD9\u662FJavaScritp\u7684\u5185\u5BB9"),nt=f({setup(e){return(n,t)=>{const u=p("x-tabs-item"),s=p("x-tabs-head"),l=p("x-tabs-pane"),a=p("x-tabs-body"),_=p("x-tabs");return d(),g(_,{selected:"css"},{default:c(()=>[o(s,null,{default:c(()=>[o(u,{name:"html"},{default:c(()=>[Qu]),_:1}),o(u,{name:"css"},{default:c(()=>[ea]),_:1}),o(u,{name:"js"},{default:c(()=>[ta]),_:1})]),_:1}),o(a,null,{default:c(()=>[o(l,{name:"html"},{default:c(()=>[na]),_:1}),o(l,{name:"css"},{default:c(()=>[oa]),_:1}),o(l,{name:"js"},{default:c(()=>[sa]),_:1})]),_:1})]),_:1})}}});typeof tt=="function"&&tt(nt);var ot=e=>{e.__sourceCode=`<template>
  <x-tabs selected="css">
    <x-tabs-head>
      <x-tabs-item name="html">HTML</x-tabs-item>
      <x-tabs-item name="xml" disabled>XML</x-tabs-item>
      <x-tabs-item name="css">CSS</x-tabs-item>
      <x-tabs-item name="js">JS</x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
      <x-tabs-pane name="html">\u8FD9\u662FHTML\u7684\u5185\u5BB9</x-tabs-pane>
      <x-tabs-pane name="xml">\u8FD9\u662FXML\u7684\u5185\u5BB9</x-tabs-pane>
      <x-tabs-pane name="css">\u8FD9\u662FCSS\u7684\u5185\u5BB9</x-tabs-pane>
      <x-tabs-pane name="js">\u8FD9\u662FJavaScritp\u7684\u5185\u5BB9</x-tabs-pane>
    </x-tabs-body>
  </x-tabs>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
<\/script>

<style lang="scss" scoped></style>`,e.__sourceCodeTitle="disabled"};const ua=r("HTML"),aa=r("XML"),la=r("CSS"),ca=r("JS"),ra=r("\u8FD9\u662FHTML\u7684\u5185\u5BB9"),ia=r("\u8FD9\u662FXML\u7684\u5185\u5BB9"),da=r("\u8FD9\u662FCSS\u7684\u5185\u5BB9"),pa=r("\u8FD9\u662FJavaScritp\u7684\u5185\u5BB9"),st=f({setup(e){return(n,t)=>{const u=p("x-tabs-item"),s=p("x-tabs-head"),l=p("x-tabs-pane"),a=p("x-tabs-body"),_=p("x-tabs");return d(),g(_,{selected:"css"},{default:c(()=>[o(s,null,{default:c(()=>[o(u,{name:"html"},{default:c(()=>[ua]),_:1}),o(u,{name:"xml",disabled:""},{default:c(()=>[aa]),_:1}),o(u,{name:"css"},{default:c(()=>[la]),_:1}),o(u,{name:"js"},{default:c(()=>[ca]),_:1})]),_:1}),o(a,null,{default:c(()=>[o(l,{name:"html"},{default:c(()=>[ra]),_:1}),o(l,{name:"xml"},{default:c(()=>[ia]),_:1}),o(l,{name:"css"},{default:c(()=>[da]),_:1}),o(l,{name:"js"},{default:c(()=>[pa]),_:1})]),_:1})]),_:1})}}});typeof ot=="function"&&ot(st);const _a=i("h2",null,"Tabs \u7EC4\u4EF6\u793A\u4F8B",-1),ma=f({setup(e){const n=[["selected","\u9009\u4E2D\u7684\u6807\u7B7E\u540D\u79F0 \u5FC5\u586B","string","--","--"]],t=[["name","\u6807\u7B7E\u540D\u79F0 \u5FC5\u586B","string","--","--"],["disabled","\u662F\u5426disabled","boolean","true/false","false"]],u=[["name","\u6807\u7B7E\u540D\u79F0 \u5FC5\u586B","string","--","--"]];return(s,l)=>{const a=p("Demo"),_=p("props-table");return d(),m(x,null,[_a,o(a,{component:nt}),o(a,{component:st}),o(_,{data:n,title:"tabs \u5C5E\u6027"}),o(_,{data:t,title:"tabsItem \u5C5E\u6027"}),o(_,{data:u,title:"tabsPane \u5C5E\u6027"})],64)}}});var fa=`<h1>\u5B89\u88C5</h1>
<p>\u6253\u5F00\u7EC8\u7AEF\u8FD0\u884C\u4E0B\u5217\u547D\u4EE4\uFF1A</p>
<pre><code>npm install xinyi-ui
</code></pre>
<p>\u6216</p>
<pre><code>yarn add xinyi-ui
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/get-started">\u5F00\u59CB\u4F7F\u7528</a></p>
`,ba=`<h1>\u5F00\u59CB\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<h2>\u5168\u5C40\u5F15\u5165</h2>
<pre><code>import { createApp } from 'vue'
import App from './App.vue'

import XinyiUI from 'xinyi-ui'

const app = createApp(App)
app.use(XinyiUI)
app.mount('#app')

</code></pre>
<h2>\u5355\u4E2A\u5F15\u5165</h2>
<pre><code>import { createApp } from 'vue'
import App from './App.vue'

import { XIcon, XSwitch, XButton,XTable} from 'xinyi-ui'

const app = createApp(App)
app.use(XIcon)
app.use(XSwitch)
app.use(XButton)
app.use(XTable)
app.mount('#app')
</code></pre>
<p>\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u4E86\u3002</p>
<h2>Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h2>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;x-button type=&quot;primary&quot;&gt;\u6309\u94AE&lt;/x-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/button">button\u7EC4\u4EF6</a></p>
`;const va={props:{content:{type:String,required:!0}}},ha=["innerHTML"];function xa(e,n,t,u,s,l){return d(),m("article",{class:"markdown-body",innerHTML:t.content},null,8,ha)}var ya=v(va,[["render",xa]]);const ut=e=>J(ya,{content:e}),at=pt({history:_t(),routes:[{path:"/",name:"home",component:It},{path:"/doc",name:"doc",component:Jt,children:[{path:"",redirect:"/doc/install"},{path:"install",name:"install",component:ut(fa)},{path:"get-started",component:ut(ba)},{path:"icon",component:sn},{path:"switch",component:Yt},{path:"button",component:Vo},{path:"table",component:qo},{path:"input",component:Oo},{path:"form",component:Au},{path:"tabs",component:ma},{path:"drawer",component:Lu},{path:"dialog",component:Ou},{path:"messageBox",component:Gu},{path:"toast",component:Yu}]}],linkActiveClass:"active"}),ga=f({name:"",setup(){const e=document.documentElement.clientWidth,n=y(e>500);return O("asideVisible",n),at.afterEach(()=>{e<500&&(n.value=!1)}),{}},components:{TopNav:wt}});function $a(e,n,t,u,s,l){const a=p("top-nav"),_=p("router-view");return d(),m("div",null,[o(a),o(_)])}var Ca=v(ga,[["render",$a]]);const Ba=f({name:"",props:{component:{type:Object,require:!0}},setup(e){const n=()=>u.value=!0,t=()=>u.value=!1,u=y(!1),s=mt.highlight(e.component.__sourceCode,{language:"xml"}).value;return{showCode:n,hideCode:t,codeVisible:u,html:s}},components:{Button:j}}),Fa={class:"demo"},Ea={class:"demo-component"},Da={class:"demo-actions"},wa=r("\u9690\u85CF\u4EE3\u7801"),Aa=r("\u67E5\u770B\u4EE3\u7801"),ka={key:0,class:"demo-code"},Ta=["innerHTML"];function Ma(e,n,t,u,s,l){const a=p("Button");return d(),m("div",Fa,[i("h2",null,E(e.component.__sourceCodeTitle),1),i("div",Ea,[(d(),g(ft(e.component)))]),i("div",Da,[e.codeVisible?(d(),g(a,{key:0,onClick:e.hideCode},{default:c(()=>[wa]),_:1},8,["onClick"])):(d(),g(a,{key:1,onClick:e.showCode},{default:c(()=>[Aa]),_:1},8,["onClick"]))]),e.codeVisible?(d(),m("div",ka,[i("pre",null,[i("code",{innerHTML:e.html},null,8,Ta)])])):D("",!0)])}var Va=v(Ba,[["render",Ma],["__scopeId","data-v-565fef18"]]);const Sa=f({props:{title:{type:String,default:"\u5C5E\u6027"},data:Array},setup(e){const n=["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u53EF\u9009\u503C","\u9ED8\u8BA4\u503C"];return(t,u)=>{const s=p("x-table");return d(),m(x,null,[i("h2",null,E(e.title),1),o(s,{thead:n,data:e.data,class:"table"},null,8,["data"])],64)}}});var Ia=v(Sa,[["__scopeId","data-v-02ff14e3"]]);const za=e=>(S("data-v-edddd07c"),e=e(),I(),e),La=za(()=>i("h2",null,"\u63D2\u69FD",-1)),Xa=f({props:{data:Array},setup(e){const n=["\u63D2\u69FD\u540D","\u8BF4\u660E"];return(t,u)=>{const s=p("x-table");return d(),m(x,null,[La,o(s,{thead:n,data:e.data},null,8,["data"])],64)}}});var Ha=v(Xa,[["__scopeId","data-v-edddd07c"]]);P(Ca).use(at).component("Demo",Va).use($u).component("PropsTable",Ia).component("SlotsTable",Ha).mount("#app");
