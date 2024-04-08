import{r as j,R as r,j as e}from"./index-BhCh3Y0R.js";import{_ as C,a as u,c as W,P as t,b as B,g as l,C as J}from"./index.es-JtArKx5t.js";import{f as O,a as F,C as V}from"./index.esm-Dyb-2ca6.js";import{C as P,b as $,d as D,e as f,a as y,m as I,c as K}from"./DefaultLayout-aWtO1IVd.js";import{a,C as b}from"./CRow-r-KbXgAR.js";import{C as k,a as M}from"./CCardBody-D1GULrM2.js";import{C as ie}from"./CCardHeader-Crzh5wpZ.js";import{c as ce,b as de,a as xe}from"./cib-twitter-CkoJaElQ.js";import{e as me,c as te,h as L,b as ae,j as U,a as z,g as he,i as G,m as q,d as Q,f as X,l as Y,k as re}from"./cil-user-follow-Cd913K3A.js";import{c as le}from"./cil-user-Ddrdy7PS.js";import{C as ue}from"./CCardGroup-BFZF8NuX.js";import"./cil-lock-locked-DmxpJbVL.js";var _=j.forwardRef(function(s,o){var i=s.children,x=s.className,n=C(s,["children","className"]);return r.createElement("div",u({className:W("card-footer",x)},n,{ref:o}),i)});_.propTypes={children:t.node,className:t.string};_.displayName="CCardFooter";var ee=j.createContext({}),oe=j.forwardRef(function(s,o){var i=s.children,x=s.className,n=C(s,["children","className"]);return r.createElement("div",u({className:W("progress-stacked",x),ref:o},n),r.createElement(ee.Provider,{value:{stacked:!0}},i))});oe.propTypes={children:t.node,className:t.string};oe.displayName="CProgressStacked";var se=j.forwardRef(function(s,o){var i,x=s.children,n=s.animated,d=s.className,m=s.color,c=s.value,p=c===void 0?0:c,g=s.variant,T=C(s,["children","animated","className","color","value","variant"]),E=j.useContext(ee).stacked;return r.createElement("div",u({className:W("progress-bar",(i={},i["bg-".concat(m)]=m,i["progress-bar-".concat(g)]=g,i["progress-bar-animated"]=n,i),d)},!E&&{style:{width:"".concat(p,"%")}},T,{ref:o}),x)});se.propTypes={animated:t.bool,children:t.node,className:t.string,color:B,value:t.number,variant:t.oneOf(["striped"])};se.displayName="CProgressBar";var H=j.forwardRef(function(s,o){var i=s.children,x=s.className,n=s.height,d=s.progressBarClassName,m=s.thin,c=s.value,p=s.white,g=C(s,["children","className","height","progressBarClassName","thin","value","white"]),T=j.useContext(ee).stacked;return r.createElement("div",u({className:W("progress",{"progress-thin":m,"progress-white":p},x)},c!==void 0&&{role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100},{style:u(u({},n?{height:"".concat(n,"px")}:{}),T?{width:"".concat(c,"%")}:{}),ref:o}),r.Children.toArray(i).some(function(E){return E.type&&E.type.displayName==="CProgressBar"})?r.Children.map(i,function(E){if(r.isValidElement(E)&&E.type.displayName==="CProgressBar")return r.cloneElement(E,u(u({},c&&{value:c}),g))}):r.createElement(se,u({},d&&{className:d},{value:c},g),i))});H.propTypes={children:t.node,className:t.string,height:t.number,progressBarClassName:t.string,thin:t.bool,value:t.number,white:t.bool};H.displayName="CProgress";var R=j.forwardRef(function(s,o){var i,x=s.action,n=s.chart,d=s.className,m=s.color,c=s.title,p=s.value,g=C(s,["action","chart","className","color","title","value"]);return r.createElement(k,u({className:W((i={},i["bg-".concat(m)]=m,i["text-white"]=m,i),d)},g,{ref:o}),r.createElement(M,{className:"pb-0 d-flex justify-content-between align-items-start"},r.createElement("div",null,p&&r.createElement("div",{className:"fs-4 fw-semibold"},p),c&&r.createElement("div",null,c)),x),n)});R.propTypes={action:t.node,chart:t.oneOfType([t.string,t.node]),className:t.string,color:B,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};R.displayName="CWidgetStatsA";var w=j.forwardRef(function(s,o){var i=s.className,x=s.color,n=s.inverse,d=s.progress,m=s.text,c=s.title,p=s.value,g=C(s,["className","color","inverse","progress","text","title","value"]);return r.createElement(k,u({className:i,color:x},n&&{textColor:"white"},g,{ref:o}),r.createElement(M,null,p&&r.createElement("div",{className:"fs-4 fw-semibold"},p),c&&r.createElement("div",null,c),r.createElement(H,u({className:"my-2",height:4},n&&{white:!0},d)),m&&r.createElement("small",{className:n?"text-white text-opacity-75":"text-body-secondary"},m)))});w.propTypes={className:t.string,color:B,inverse:t.bool,progress:t.object,text:t.string,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};w.displayName="CWidgetCWidgetStatsB";var h=j.forwardRef(function(s,o){var i=s.className,x=s.color,n=s.icon,d=s.inverse,m=s.progress,c=s.title,p=s.value,g=C(s,["className","color","icon","inverse","progress","title","value"]);return r.createElement(k,u({className:i,color:x},d&&{textColor:"white"},g,{ref:o}),r.createElement(M,null,n&&r.createElement("div",{className:W("text-end mb-4",d?"text-white text-opacity-75":"text-body-secondary")},n),p&&r.createElement("div",{className:"fs-4 fw-semibold"},p),c&&r.createElement("div",{className:d?"text-white text-opacity-75":"text-body-secondary"},c),r.createElement(H,u({className:"mt-3 mb-0",height:4},d&&{white:!0},m))))});h.propTypes={className:t.string,color:B,icon:t.oneOfType([t.string,t.node]),inverse:t.bool,progress:t.object,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};h.displayName="CWidgetStatsCWidgetStatsC";var A=j.forwardRef(function(s,o){var i,x=s.className,n=s.chart,d=s.color,m=s.icon,c=s.values,p=C(s,["className","chart","color","icon","values"]);return r.createElement(k,u({className:x},p,{ref:o}),r.createElement(ie,{className:W("position-relative d-flex justify-content-center align-items-center",(i={},i["bg-".concat(d)]=d,i))},m,n),r.createElement(M,{className:"row text-center"},c&&c.map(function(g,T){return r.createElement(r.Fragment,{key:T},T%2!==0&&r.createElement("div",{className:"vr"}),r.createElement(a,null,r.createElement("div",{className:"fs-5 fw-semibold"},g.value),r.createElement("div",{className:"text-uppercase text-body-secondary small"},g.title)))})))});A.propTypes={chart:t.oneOfType([t.string,t.node]),className:t.string,color:B,icon:t.oneOfType([t.string,t.node]),values:t.arrayOf(t.any)};A.displayName="CWidgetStatsD";var S=j.forwardRef(function(s,o){var i=s.chart,x=s.className,n=s.title,d=s.value,m=C(s,["chart","className","title","value"]);return r.createElement(k,u({className:W(x)},m,{ref:o}),r.createElement(M,{className:"text-center"},n&&r.createElement("div",{className:"text-body-secondary small text-uppercase fw-semibold"},n),d&&r.createElement("div",{className:"fs-6 fw-semibold py-3"},d),i))});S.propTypes={children:t.node,chart:t.oneOfType([t.string,t.node]),className:t.string,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};S.displayName="CWidgetStatsE";var v=j.forwardRef(function(s,o){var i=s.className,x=s.color,n=s.footer,d=s.icon,m=s.padding,c=m===void 0?!0:m,p=s.title,g=s.value,T=C(s,["className","color","footer","icon","padding","title","value"]);return r.createElement(k,u({className:i},T,{ref:o}),r.createElement(M,{className:"d-flex align-items-center ".concat(c===!1&&"p-0")},r.createElement("div",{className:"me-3 text-white bg-".concat(x," ").concat(c?"p-3":"p-4")},d),r.createElement("div",null,r.createElement("div",{className:"fs-6 fw-semibold text-".concat(x)},g),r.createElement("div",{className:"text-body-secondary text-uppercase fw-semibold small"},p))),n&&r.createElement(_,null,n))});v.propTypes={className:t.string,color:B,footer:t.oneOfType([t.string,t.node]),icon:t.oneOfType([t.string,t.node]),padding:t.bool,title:t.oneOfType([t.string,t.node]),value:t.oneOfType([t.string,t.node,t.number])};v.displayName="CWidgetStatsF";var N=function(s,o){if(!(typeof window>"u")&&!(typeof document>"u")){var i=o??document.body;return window.getComputedStyle(i,null).getPropertyValue(s).replace(/^\s/,"")}};const Z=s=>{const o={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return e.jsxs(b,{className:s.className,xs:{gutter:4},children:[e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(A,{...s.withCharts&&{chart:e.jsx(O,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:o})},icon:e.jsx(l,{icon:ce,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(A,{...s.withCharts&&{chart:e.jsx(O,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:o})},icon:e.jsx(l,{icon:de,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(A,{...s.withCharts&&{chart:e.jsx(O,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:o})},icon:e.jsx(l,{icon:xe,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(A,{color:"warning",...s.withCharts&&{chart:e.jsx(O,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:o})},icon:e.jsx(l,{icon:me,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]})})]})};Z.propTypes={className:t.string,withCharts:t.bool};const ne=s=>{const o=j.useRef(null),i=j.useRef(null);return j.useEffect(()=>{document.documentElement.addEventListener("ColorSchemeChange",()=>{o.current&&setTimeout(()=>{o.current.data.datasets[0].pointBackgroundColor=N("--cui-primary"),o.current.update()}),i.current&&setTimeout(()=>{i.current.data.datasets[0].pointBackgroundColor=N("--cui-info"),i.current.update()})})},[o,i]),e.jsxs(b,{className:s.className,xs:{gutter:4},children:[e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(R,{color:"primary",value:e.jsxs(e.Fragment,{children:["26K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-12.4% ",e.jsx(l,{icon:te}),")"]})]}),title:"Users",action:e.jsxs(P,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(f,{children:"Action"}),e.jsx(f,{children:"Another action"}),e.jsx(f,{children:"Something else here..."}),e.jsx(f,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(F,{ref:o,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:N("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(R,{color:"info",value:e.jsxs(e.Fragment,{children:["$6.200"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(40.9% ",e.jsx(l,{icon:ae}),")"]})]}),title:"Income",action:e.jsxs(P,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(f,{children:"Action"}),e.jsx(f,{children:"Another action"}),e.jsx(f,{children:"Something else here..."}),e.jsx(f,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(F,{ref:i,className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:N("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{border:{display:!1},grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(R,{color:"warning",value:e.jsxs(e.Fragment,{children:["2.49%"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(84.7% ",e.jsx(l,{icon:ae}),")"]})]}),title:"Conversion Rate",action:e.jsxs(P,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(f,{children:"Action"}),e.jsx(f,{children:"Another action"}),e.jsx(f,{children:"Something else here..."}),e.jsx(f,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(F,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),e.jsx(a,{sm:6,xl:4,xxl:3,children:e.jsx(R,{color:"danger",value:e.jsxs(e.Fragment,{children:["44K"," ",e.jsxs("span",{className:"fs-6 fw-normal",children:["(-23.6% ",e.jsx(l,{icon:te}),")"]})]}),title:"Sessions",action:e.jsxs(P,{alignment:"end",children:[e.jsx($,{color:"transparent",caret:!1,className:"text-white p-0",children:e.jsx(l,{icon:L})}),e.jsxs(D,{children:[e.jsx(f,{children:"Action"}),e.jsx(f,{children:"Another action"}),e.jsx(f,{children:"Something else here..."}),e.jsx(f,{disabled:!0,children:"Disabled action"})]})]}),chart:e.jsx(V,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})};ne.propTypes={className:t.string,withCharts:t.bool};const Se=()=>{const s=(o,i)=>Math.floor(Math.random()*(i-o+1)+o);return e.jsxs(k,{className:"mb-4",children:[e.jsx(ie,{children:"Widgets"}),e.jsxs(M,{children:[e.jsx(y,{href:"components/widgets/#cwidgetstatsa",children:e.jsx(ne,{})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsb",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{progress:{color:"success",value:89.9},text:"Lorem ipsum dolor sit amet enim.",title:"Widget title",value:"89.9%"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{value:"12.124",title:"Widget title",progress:{color:"info",value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{value:"$98.111,00",title:"Widget title",progress:{color:"warning",value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{value:"2 TB",title:"Widget title",progress:{color:"primary",value:89.9},text:"Lorem ipsum dolor sit amet enim."})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsb",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{color:"success",inverse:!0,value:"89.9%",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{color:"info",inverse:!0,value:"12.124",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{color:"warning",inverse:!0,value:"$98.111,00",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(w,{color:"primary",inverse:!0,value:"2 TB",title:"Widget title",progress:{value:89.9},text:"Lorem ipsum dolor sit amet enim."})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatse",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(S,{chart:e.jsx(V,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:N("--cui-danger"),borderColor:"transparent",borderWidth:1,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(S,{chart:e.jsx(V,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:N("--cui-primary"),borderColor:"transparent",borderWidth:1,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(S,{chart:e.jsx(V,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:N("--cui-success"),borderColor:"transparent",borderWidth:1,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(S,{chart:e.jsx(F,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:"transparent",borderColor:N("--cui-danger"),borderWidth:2,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(S,{chart:e.jsx(F,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:"transparent",borderColor:N("--cui-success"),borderWidth:2,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})}),e.jsx(a,{sm:4,md:3,xl:2,children:e.jsx(S,{chart:e.jsx(F,{className:"mx-auto",style:{height:"40px",width:"80px"},data:{labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],datasets:[{backgroundColor:"transparent",borderColor:N("--cui-info"),borderWidth:2,data:[s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100),s(40,100)]}]},options:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}}),title:"title",value:"1,123"})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsf",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:U,size:"xl"}),title:"income",value:"$1.999,50",color:"primary"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:le,size:"xl"}),title:"income",value:"$1.999,50",color:"info"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:I,size:"xl"}),title:"income",value:"$1.999,50",color:"warning"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:K,size:"xl"}),title:"income",value:"$1.999,50",color:"danger"})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsf",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:U,size:"xl"}),title:"income",value:"$1.999,50",color:"primary",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:he,size:"xl"}),title:"income",value:"$1.999,50",color:"info",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:I,size:"xl"}),title:"income",value:"$1.999,50",color:"warning",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:K,size:"xl"}),title:"income",value:"$1.999,50",color:"danger",footer:e.jsxs(J,{className:"font-weight-bold font-xs text-body-secondary",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank",children:["View more",e.jsx(l,{icon:z,className:"float-end",width:16})]})})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsf",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:U,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"primary"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:le,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"info"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:I,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"warning"})}),e.jsx(a,{xs:12,sm:6,xl:4,xxl:3,children:e.jsx(v,{icon:e.jsx(l,{width:24,icon:K,size:"xl"}),padding:!1,title:"income",value:"$1.999,50",color:"danger"})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsd",children:e.jsx(Z,{})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsd",children:e.jsx(Z,{withCharts:!0})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsc",children:e.jsxs(ue,{className:"mb-4",children:[e.jsx(h,{icon:e.jsx(l,{icon:G,height:36}),value:"87.500",title:"Visitors",progress:{color:"info",value:75}}),e.jsx(h,{icon:e.jsx(l,{icon:q,height:36}),value:"385",title:"New Clients",progress:{color:"success",value:75}}),e.jsx(h,{icon:e.jsx(l,{icon:Q,height:36}),value:"1238",title:"Products sold",progress:{color:"warning",value:75}}),e.jsx(h,{icon:e.jsx(l,{icon:X,height:36}),value:"28%",title:"Returning Visitors",progress:{color:"primary",value:75}}),e.jsx(h,{icon:e.jsx(l,{icon:Y,height:36}),value:"5:34:11",title:"Avg. Time",progress:{color:"danger",value:75}})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsc",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{icon:e.jsx(l,{icon:G,height:36}),value:"87.500",title:"Visitors",progress:{color:"info",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{icon:e.jsx(l,{icon:q,height:36}),value:"385",title:"New Clients",progress:{color:"success",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{icon:e.jsx(l,{icon:Q,height:36}),value:"1238",title:"Products sold",progress:{color:"warning",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{icon:e.jsx(l,{icon:X,height:36}),value:"28%",title:"Returning Visitors",progress:{color:"primary",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{icon:e.jsx(l,{icon:Y,height:36}),value:"5:34:11",title:"Avg. Time",progress:{color:"danger",value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{icon:e.jsx(l,{icon:re,height:36}),value:"972",title:"Comments",progress:{color:"info",value:75}})})]})}),e.jsx(y,{href:"components/widgets/#cwidgetstatsc",children:e.jsxs(b,{xs:{gutter:4},children:[e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{color:"info",icon:e.jsx(l,{icon:G,height:36}),value:"87.500",title:"Visitors",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{color:"success",icon:e.jsx(l,{icon:q,height:36}),value:"385",title:"New Clients",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{color:"warning",icon:e.jsx(l,{icon:Q,height:36}),value:"1238",title:"Products sold",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{color:"primary",icon:e.jsx(l,{icon:X,height:36}),value:"28%",title:"Returning Visitors",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{color:"danger",icon:e.jsx(l,{icon:Y,height:36}),value:"5:34:11",title:"Avg. Time",inverse:!0,progress:{value:75}})}),e.jsx(a,{xs:6,lg:4,xxl:2,children:e.jsx(h,{color:"info",icon:e.jsx(l,{icon:re,height:36}),value:"972",title:"Comments",inverse:!0,progress:{value:75}})})]})})]})]})};export{Se as default};