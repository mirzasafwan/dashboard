import{_ as j,a as d,P as a,c as l}from"./index.es-JtArKx5t.js";import{r as v,R as e}from"./index-BhCh3Y0R.js";import{e as C,b as y}from"./CFormInput-D-8LPFWP.js";import{u as w}from"./DefaultLayout-aWtO1IVd.js";var g=v.forwardRef(function(t,N){var k=t.className,n=t.button,R=t.feedback,L=t.feedbackInvalid,V=t.feedbackValid,x=t.floatingLabel,A=t.tooltipFeedback,p=t.hitArea,r=t.id,m=t.indeterminate,I=t.inline,s=t.invalid,i=t.label,T=t.reverse,h=t.type,O=h===void 0?"checkbox":h,b=t.valid,E=j(t,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),c=v.useRef(null),z=w(N,c);v.useEffect(function(){c.current&&m&&(c.current.indeterminate=m)},[m,c.current]);var o=function(){return e.createElement("input",d({type:O,className:l(n?"btn-check":"form-check-input",{"is-invalid":s,"is-valid":b,"me-2":p}),id:r},E,{ref:z}))},f=function(){return e.createElement(C,{describedby:E["aria-describedby"],feedback:R,feedbackInvalid:L,feedbackValid:V,floatingLabel:x,invalid:s,tooltipFeedback:A,valid:b})},F=function(){var u;return e.createElement(y,d({customClassName:l(n?l("btn",n.variant?"btn-".concat(n.variant,"-").concat(n.color):"btn-".concat(n.color),(u={},u["btn-".concat(n.size)]=n.size,u),"".concat(n.shape)):"form-check-label")},r&&{htmlFor:r}),i)},P=function(){return n?e.createElement(e.Fragment,null,e.createElement(o,null),i&&e.createElement(F,null),e.createElement(f,null)):i?p?e.createElement(e.Fragment,null,e.createElement(o,null),e.createElement(y,d({customClassName:l("form-check-label stretched-link",k)},r&&{htmlFor:r}),i),e.createElement(f,null)):e.createElement("div",{className:l("form-check",{"form-check-inline":I,"form-check-reverse":T,"is-invalid":s,"is-valid":b},k)},e.createElement(o,null),e.createElement(F,null),e.createElement(f,null)):e.createElement(o,null)};return e.createElement(P,null)});g.propTypes=d({button:a.object,className:a.string,hitArea:a.oneOf(["full"]),id:a.string,indeterminate:a.bool,inline:a.bool,label:a.oneOfType([a.string,a.node]),reverse:a.bool,type:a.oneOf(["checkbox","radio"])},C.propTypes);g.displayName="CFormCheck";export{g as C};
