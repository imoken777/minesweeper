(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,t,n){"use strict";n.r(t);var l=n(5893),o=n(7294),a=n(2729),c=n.n(a);let i=()=>{let[e,t]=(0,o.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[n,a]=(0,o.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),i=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],r=12,s=(l,o)=>{let c=JSON.parse(JSON.stringify(e)),i=JSON.parse(JSON.stringify(n));i[o][l]=1,a(i);let r=!1;for(let t of e)for(let e of t)if(1===e){r=!0;break}r||(()=>{let e=0;for(;e<10;){let t=Math.floor(9*Math.random()),n=Math.floor(9*Math.random());1!==c[t][n]&&n!==l&&t!==o&&(c[t][n]=1,e++)}t(c)})()},_=(e,t,l)=>{let o=JSON.parse(JSON.stringify(n));l.preventDefault(),console.log("Right click is triggered"),10!==n[t][e]?o[t][e]=10:o[t][e]=-1,a(o)},f=(t,n)=>{let l=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],o=0;if(1===e[n][t])e.forEach((t,n)=>{t.forEach((t,l)=>{1===e[n][l]&&(i[n][l]=11,r=14)})}),i[n][t]=15;else for(let[a,c]of l){let l=t+a,r=n+c;l>=0&&l<i.length&&r>=0&&r<i.length&&(1===e[r][l]&&o++,i[n][t]=o)}if(0===i[n][t])for(let[e,o]of l){let l=t+e,a=n+o;l>=0&&l<i.length&&a>=0&&a<i.length&&-1===i[a][l]&&f(l,a)}};n.map((e,t)=>{e.map((e,l)=>{1===n[t][l]&&f(l,t),n[t][l]>8&&(i[t][l]=n[t][l])})});let d=()=>{r=14};return(0,l.jsxs)("div",{className:c().container,children:[(0,l.jsx)("div",{className:c().face,onClick:()=>d(),style:{backgroundPosition:-30*r+30}}),(0,l.jsx)("div",{className:c().board,children:i.map((e,t)=>e.map((e,n)=>(0,l.jsx)("div",{className:-1===e?c().cell_block:c().cell,onClick:()=>s(n,t),onContextMenu:e=>_(n,t,e),children:-1!==e&&(0,l.jsx)("div",{className:c().stone_type1,style:{backgroundPosition:15===e?-300:-30*e+30,backgroundColor:15===e?"red":void 0}})},"".concat(n,"-").concat(t))))})]})};t.default=i},2729:function(e){e.exports={container:"index_container__gnN1f",cell:"index_cell__3W8ZQ",cell_block:"index_cell_block__VN6dz",stone_type1:"index_stone_type1__wpVVZ",board:"index_board__2d6xe",face:"index_face__Yr_Hp"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);