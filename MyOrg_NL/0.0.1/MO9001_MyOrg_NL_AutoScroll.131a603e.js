(self.webpackChunkdxcustomcomponent=self.webpackChunkdxcustomcomponent||[]).push([[54036871],{1291:e=>{function t(e){return Promise.resolve().then(()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=()=>[],t.resolve=t,t.id=1291,e.exports=t},1957:(e,t,r)=>{window?.__webpack_nonce__&&(r.nc=window.__webpack_nonce__)},3970:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PegaExtensionsAutoScrollTextField:()=>p,default:()=>m,getAutoScrollTextFieldTestIds:()=>h});var n=r(1594),l=r(8044),o=r(8579),c=r(7521),s=r(197),u=r(4869),a=r(1093),i=(r(1957),r(8267));const d=i.Ay.div(()=>i.AH`
    width: 100%;
    max-width: 22rem;

    /* Target the native <input> rendered inside Cosmos Input */
    input[type='text'] {
      /* Allow horizontal overflow so JS can drive scrollLeft */
      overflow-x: hidden;
      text-overflow: clip;
      white-space: nowrap;

      /* Hide the scrollbar visually across all browsers */
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE / Edge legacy */

      &::-webkit-scrollbar {
        display: none; /* Chrome / Safari */
      }
    }
  `);var f=r(4848);const h=(0,l.A)("auto-scroll-text-field",[]),p=({testId:e,getPConnect:t,validatemessage:r="",helperText:l="",label:u,labelHidden:a,placeholder:i,disabled:p,readOnly:m,required:g,hasSuggestions:w=!1,idleTimeout:v=2e3,displayMode:b,value:A,...x})=>{const _=t(),y=_.getActionsApi(),k=_.getStateProps().value,C=(0,n.useRef)(null),F=(0,n.useRef)(null),S=(0,n.useRef)(!1),T=(0,n.useRef)(!1),L=(0,n.useRef)(null),[E,I]=(0,n.useState)(A??""),[O,W]=(0,n.useState)(w?"pending":void 0),M=(0,o.A)(e,h);(0,n.useEffect)(()=>{I(A??"")},[A]),(0,n.useEffect)(()=>{w?W("pending"):""!==r?W("error"):"success"!==O&&W(void 0)},[r,w,O]);const P=(0,n.useCallback)(()=>{const e=C.current;if(!e)return;const t=e.scrollWidth-e.clientWidth;if(t<=0)return;T.current=!0,e.scrollLeft=0;const r=Math.min(300+4*t,3e3),n=performance.now(),l=o=>{const c=o-n,s=Math.min(c/r,1),u=s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;e.scrollLeft=u*t,s<1?L.current=requestAnimationFrame(l):(e.scrollLeft=t,T.current=!1)};L.current=requestAnimationFrame(l)},[]),R=(0,n.useCallback)(()=>{F.current&&(clearTimeout(F.current),F.current=null),L.current&&(cancelAnimationFrame(L.current),L.current=null),T.current=!1,C.current&&(C.current.scrollLeft=C.current.scrollWidth)},[]),q=(0,n.useCallback)(e=>{R(),e&&0!==e.length&&(F.current=setTimeout(P,v))},[R,P,v]);return(0,n.useEffect)(()=>()=>{F.current&&clearTimeout(F.current),L.current&&cancelAnimationFrame(L.current)},[]),"DISPLAY_ONLY"===b?(0,f.jsx)(c.A,{children:E||""}):(0,f.jsx)(d,{children:(0,f.jsx)(s.A,{...x,ref:C,testId:M.root,type:"text",label:u,labelHidden:a,placeholder:i,value:E,status:O,info:r||l,disabled:p,readOnly:m,required:g,onChange:e=>{const t=e.target.value;w&&W(void 0),I(t),A!==t&&(y.updateFieldValue(k,t),S.current=!0),q(t)},onBlur:e=>{A&&!S.current||(y.triggerFieldChange(k,e.target.value),w&&_.ignoreSuggestion(""),S.current=!1),R(),e.target.scrollWidth>e.target.clientWidth&&P()},onFocus:()=>{R(),C.current&&(C.current.scrollLeft=C.current.scrollWidth)},onKeyDown:()=>{R()}})})},m=(0,u.A)((0,a.A)(p),h)}}]);
//# sourceMappingURL=MO9001_MyOrg_NL_AutoScroll.131a603e.js.map