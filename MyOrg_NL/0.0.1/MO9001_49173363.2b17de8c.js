/*! For license information please see MO9001_49173363.2b17de8c.js.LICENSE.txt */
"use strict";(self.webpackChunkdxcustomcomponent=self.webpackChunkdxcustomcomponent||[]).push([[49173363],{197:(e,t,r)=>{r.d(t,{A:()=>fo});var n={};r.r(n),r.d(n,{Component:()=>ot,name:()=>nt,set:()=>rt,viewBox:()=>at});var o={};r.r(o),r.d(o,{Component:()=>ct,name:()=>st,set:()=>it,viewBox:()=>lt});var a={};r.r(a),r.d(a,{Component:()=>Ot,name:()=>Dt,set:()=>Tt,viewBox:()=>qt});var i={};r.r(i),r.d(i,{Component:()=>Bt,name:()=>_t,set:()=>Ft,viewBox:()=>Nt});var s={};r.r(s),r.d(s,{Component:()=>Ut,name:()=>Wt,set:()=>Vt,viewBox:()=>Zt});var c={};r.r(c),r.d(c,{Component:()=>Mr,name:()=>zr,set:()=>Pr,viewBox:()=>Lr});var l={};r.r(l),r.d(l,{Component:()=>Or,name:()=>Dr,set:()=>Tr,viewBox:()=>qr});var d={};r.r(d),r.d(d,{Component:()=>rn,name:()=>tn,set:()=>en,viewBox:()=>nn});var u={};r.r(u),r.d(u,{Component:()=>gn,name:()=>hn,set:()=>fn,viewBox:()=>bn});var m={};r.r(m),r.d(m,{Component:()=>vn,name:()=>yn,set:()=>$n,viewBox:()=>An});var p={};r.r(p),r.d(p,{Component:()=>Fn,name:()=>qn,set:()=>On,viewBox:()=>_n});var f=r(4848),h=r(1594),g=r(8267),b=r(1357),$=r(9549);const y=e=>["between","around","evenly"].includes(e)?`space-${e}`:["start","end"].includes(e)?`flex-${e}`:e,v=(e,t)=>{if(!e)return"";if(!0===e)return g.AH`
      display: flex;
    `;const r=(e=>{if(!Array.isArray(e))return[e,e,e,e];switch(e.length){case 1:return[e[0],e[0],e[0],e[0]];case 2:return[e[0],e[1],e[0],e[1]];case 3:return[e[0],e[1],e[2],e[1]];case 4:return e;default:return[void 0,void 0,void 0,void 0]}})(e.pad);if(e&&"object"==typeof e){const n=!e.direction||e.direction.includes("row"),o=e.direction&&e.direction.includes("reverse");return g.AH`
      display: ${e.inline?"inline-flex":"flex"};

      ${void 0!==r[0]&&g.AH`
        padding-block-start: calc(${r[0]} * ${t});
      `}
      ${void 0!==r[1]&&g.AH`
        padding-inline-end: calc(${r[1]} * ${t});
      `}

        ${void 0!==r[2]&&g.AH`
        padding-block-end: calc(${r[2]} * ${t});
      `}

        ${void 0!==r[3]&&g.AH`
        padding-inline-start: calc(${r[3]} * ${t});
      `}

      ${e.direction&&g.AH`
        flex-direction: ${e.direction};
      `}

      ${e.justify&&g.AH`
        justify-content: ${y(e.justify)};
      `}

      ${e.wrap&&g.AH`
        flex-wrap: ${e.wrap};
      `}

      ${e.alignItems&&g.AH`
        align-items: ${y(e.alignItems)};
      `}

      ${e.alignContent&&g.AH`
        align-content: ${y(e.alignContent)};
      `}

      ${e.itemGap&&g.AH`
          > * {
            margin-${n?"inline-start":"block-start"}: calc(${e.itemGap} * ${e=>e.theme.base.spacing});
            ${o?":last-child":":first-child"} {
              margin-${n?"inline-start":"block-start"}: 0;
            }
          }
        `}

      ${void 0!==e.gap&&g.AH`
        gap: calc(${e.gap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.colGap&&g.AH`
        column-gap: calc(${e.colGap} * ${e=>e.theme.base.spacing});
      `}

      ${void 0!==e.rowGap&&g.AH`
        row-gap: calc(${e.rowGap} * ${e=>e.theme.base.spacing});
      `}
    `}},A=e=>g.AH`
    ${e&&g.AH`
      max-width: 100%;
      min-width: 0;

      ${void 0!==e.grow&&g.AH`
        flex-grow: ${e.grow};
      `}

      ${void 0!==e.shrink&&g.AH`
        flex-shrink: ${e.shrink};
      `}

      ${e.alignSelf&&g.AH`
        align-self: ${y(e.alignSelf)};
      `}

      ${e.basis&&g.AH`
        flex-basis: ${e.basis};
      `}
    `}
  `,w=["xs","sm","md","lg","xl"],x=g.Ay.div(({container:e,item:t,theme:{base:{breakpoints:r,spacing:n}},xs:o,sm:a,md:i,lg:s,xl:c})=>{const l={xs:o,sm:a,md:i,lg:s,xl:c};return g.AH`
      ${v(e,n)}
      ${A(t)}

    ${w.map(e=>l[e]&&g.AH`
            @media screen and (min-width: ${r[e]}) {
              ${v(l[e]?.container,n)}
              ${A(l[e]?.item)}
            }
          `)}
    `});x.defaultProps=$.qn;const k=(0,h.forwardRef)(function(e,t){return(0,f.jsx)(x,{...e,ref:t})});var C=r(6824),j=r(9463);const H=()=>{const{translations:e,locale:t}=(0,j.A)();return(0,h.useMemo)(()=>(0,C.A)(e,t),[e,t])};var E=r(4853),S=r(9187),I=r(6061),R=r(9576),P=r(7321),z=r(2477),M=r(5206),L=r(832),T=r(4685);const D=()=>(0,h.useRef)((0,T.A)()).current,O=(e,t)=>{const r=(0,h.useRef)(!1);(0,h.useEffect)(()=>{if(r.current)return e();r.current=!0},t)};var q=r(5582);var F=r(712);const _=function(e,t,{target:r=document,eventOptions:n,dependencies:o=[]}={}){(0,h.useEffect)(()=>{const[o]=(0,F.A)([r]);if(o)return o.addEventListener(e,t,n),()=>{o.removeEventListener(e,t,n)}},[e,r,t,n,...o])};var B=r(680),N=r(4680);const V=(0,h.createContext)({checkActive:()=>!0,setActive:()=>{},popovers:{}}),W=g.Ay.div`
  background-color: inherit;

  ::before {
    content: '';
    display: block;
    position: absolute;
    inset: -0.25rem;
    background-color: inherit;
    transform: rotate(45deg);
  }
`;W.defaultProps=$.qn;const U=g.Ay.div(({theme:{base:{"border-radius":e,"z-index":{popover:t,backdrop:r},shadow:{high:n},palette:o},components:{card:{background:a,"foreground-color":i},"form-control":{"border-radius":s}}},portal:c,offset:l})=>{const{backgroundColor:d}=(0,P.LP)(a,i);return g.AH`
      /*
        Margin should never be used with Popper.
        https://popper.js.org/docs/v2/migration-guide/#4-remove-all-css-margins
      */
      margin: 0 !important;
      z-index: ${c?r-1:t};
      background: ${d};
      border-radius: calc(${s} * ${e});
      box-shadow: ${n};
      color: ${o["foreground-color"]};

      @media (forced-colors: active) {
        border: 0.0625rem solid transparent;
      }

      &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
      }

      &[data-popper-placement^='top'] {
        > ${W} {
          top: calc(100%);

          ::before {
            border-bottom-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${l}px;
          bottom: -${l}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='bottom'] {
        > ${W} {
          bottom: calc(100%);

          ::before {
            border-top-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          height: ${l}px;
          top: -${l}px;
          left: 0;
          right: 0;
        }
      }

      &[data-popper-placement^='right'] {
        > ${W} {
          right: calc(100%);

          ::before {
            border-bottom-left-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${l}px;
          left: -${l}px;
          top: 0;
          bottom: 0;
        }
      }

      &[data-popper-placement^='left'] {
        > ${W} {
          left: calc(100%);

          ::before {
            border-top-right-radius: calc(${e} / 4);
          }
        }

        ::before {
          content: '';
          position: absolute;
          width: ${l}px;
          right: -${l}px;
          top: 0;
          bottom: 0;
        }
      }
    `});U.defaultProps=$.qn;var Z=r(127),G=r(6629),K=r(2365);Object.freeze({name:"sameWidth",enabled:!0,phase:"beforeWrite",fn({state:e}){e.styles.popper.width=`${e.rects.reference.width}px`},requires:["computeStyles"]});const X=Z.A?(0,G.A)():0,Y=(Object.freeze({name:"fitToContent",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn({state:e}){e.styles.popper.width="fit-content",e.elements.popper.style.maxWidth="60ch",e.elements.popper.style.minWidth=`${e.rects.reference.width}px`}}),Object.freeze({name:"placeAndContain",enabled:!0,phase:"beforeWrite",requires:["computeStyles","offset"],fn:({state:e})=>{const[t,r]=e.placement.split("-"),n={top:0,bottom:0,right:0,left:0},o=e.orderedModifiers.find(({name:e})=>"preventOverflow"===e)?.options?.padding;"number"==typeof o?(n.top=o,n.bottom=o,n.right=o,n.left=o):o&&(n.top=o.top??n.top,n.bottom=o.bottom??n.bottom,n.right=o.right??n.right,n.left=o.left??n.left);const a=document.documentElement.clientWidth,i=document.documentElement.clientHeight,s=e.rects.reference,c=s.x,l=c+s.width,d=s.y,u=d+s.height,m=(c+l)/2<a/2,p=(d+u)/2<i/2,f=e.modifiersData.offset?.[e.placement]?.x??0,h=e.modifiersData.offset?.[e.placement]?.y??0;let g=null,b=null;const $=[...e.elements.popper.children].flatMap(e=>{const t=e.querySelectorAll("[data-popover-scroll-el]");return t.length>0?[...t]:e}).reduce((t,r)=>r===e.elements.arrow?t:(0,K.A)(r)[0]?t+r.scrollHeight+X:t+r.scrollHeight,0),y=Math.max(e.elements.popper.scrollHeight,$),v=Math.max(e.elements.popper.scrollWidth,...Array.from(e.elements.popper.children).map(t=>t===e.elements.arrow?-1/0:(0,K.A)(t)[1]?t.scrollWidth+X:t.scrollWidth));let A=t;"bottom"===t?(b=i-u-h-n.bottom,u+h+y+n.bottom>i&&(A=p?"bottom":"top")):"top"===t?(b=d+h-n.top,d+h-y+n.top<0&&(A=p?"bottom":"top")):"left"===t?(g=c+f-n.left,c+f-v+n.left<0&&(A=m?"right":"left")):"right"===t&&(g=a-l-f-n.right,l+f+v+n.right>a&&(A=m?"right":"left")),"left"!==A&&"right"!==A||(b=i-n.top-n.bottom),e.elements.popper.style.maxHeight=`${b}px`,e.elements.popper.style.maxWidth=null!==g?`${g}px`:"",A=`${A}${r?`-${r}`:""}`,e.placement!==A&&(e.placement=A,e.reset=!0)}})),Q={none:0,short:500,long:1e3},J=(0,h.forwardRef)(function({show:e=!0,portal:t=!0,target:r,placement:n="bottom",strategy:o="fixed",style:a,modifiers:i=[],arrow:s=!1,groupId:c,showDelay:l="none",hideDelay:d="none",hideOnTargetHidden:u=!1,children:m,onHide:p,onShow:g,...b},$){const{portalTarget:y}=(0,j.A)(),{checkActive:v,setActive:A,popovers:w}=(0,h.useContext)(V),[x,k]=(0,z.A)(),C=(0,E.A)($,k),H=(0,h.useRef)(null),S=(0,h.useRef)(),I=(0,h.useRef)(null),[R,P]=(0,h.useState)(e),T=(0,h.useRef)(),F=D(),Z=r instanceof Element?r:r?.contextElement,G="boolean"==typeof t?y:t,K=(0,h.useMemo)(()=>{const e=!!i.slice().reverse().find(e=>"flip"===e.name&&void 0!==e.enabled)?.enabled;return[{name:"computeStyles",options:{gpuAcceleration:!1}},{name:"offset",options:{offset:[0,s?5.5:2]}},{name:"hide",enabled:u},{name:"arrow",enabled:s,options:{element:H.current,padding:7}},{name:"preventOverflow",options:{tether:!i.find(e=>"sameWidth"===e.name||"fitToContent"),padding:16}},{...Y,enabled:!e},...i]},[s,u,i]),X=(0,h.useMemo)(()=>{const e=[...K].reverse().find(e=>"offset"===e.name&&!1!==e.enabled);return Array.isArray(e?.options?.offset)?e?.options?.offset[1]??0:0},[K]),{styles:J,attributes:ee,forceUpdate:te}=(0,L.E)(r,x,{placement:n,strategy:o,modifiers:K});te&&(S.current=te);const[re]=(0,h.useState)(()=>new AbortController),[ne]=(0,h.useState)(()=>new WeakSet),[oe]=(0,h.useState)(()=>new ResizeObserver(e=>{let t=!1;for(const{target:r}of e)ne.has(r)?t||(t=!0,re.signal.aborted||S.current?.()):ne.add(r)}));(0,h.useEffect)(()=>()=>{re.abort(),oe.disconnect()},[]),(0,h.useEffect)(()=>{if(x)return oe.observe(x),()=>{oe.unobserve(x)}},[x]),(0,h.useEffect)(()=>{if(Z)return oe.observe(Z),()=>{oe.unobserve(Z)}},[Z]),(0,h.useLayoutEffect)(()=>{I.current=Z?(0,B.A)(Z,document.documentElement):null},[Z]),(0,h.useEffect)(()=>{if(!R||!Z)return;const e=new AbortController;let t;e.signal.addEventListener("aborted",()=>{cancelAnimationFrame(t)});const r=()=>{if(I.current){const e=(0,B.A)(Z,document.documentElement);I.current.x===e.x&&I.current.y===e.y||(I.current=e,S.current?.())}e.signal.aborted||(t=requestAnimationFrame(r))};return t=requestAnimationFrame(r),()=>{e.abort()}},[R,Z]),(0,h.useEffect)(()=>{c&&e&&A(F,c),N.A?(T.current&&clearTimeout(T.current),T.current=window.setTimeout(()=>{P(e),e&&S.current?.()},Q[e?l:d])):(P(e),e&&S.current?.())},[e]),(0,h.useEffect)(()=>()=>clearTimeout(T.current),[]),O(()=>{R?g?.():p?.()},[R]),(0,h.useEffect)(()=>{c&&w[c]&&w[c]!==F&&P(!1)},[c?w[c]:void 0]);const ae=((e,t=!0)=>{const r=D();return(0,h.useEffect)(()=>{if(e&&t)return q.y.has(e)||q.y.set(e,new Set),e.toggleAttribute("data-popover-target",!0),q.y.get(e).add(r),()=>{q.y.has(e)&&(q.y.get(e).delete(r),0===q.y.get(e).size&&(q.y.delete(e),e.removeAttribute("data-popover-target")))}},[t,e,r]),r})(Z,!!t),ie=(0,h.useCallback)(e=>{if(Z&&t){const t=new Event(e.type.startsWith("popover:")?e.type:`popover:${e.type}`,{bubbles:!0,cancelable:!0});Z.dispatchEvent(t)}},[Z,t]);_("focusout",ie,{target:C}),_("popover:focusout",ie,{target:C}),_("focusin",ie,{target:C}),_("popover:focusin",ie,{target:C});const se=(0,f.jsxs)(U,{...b,"data-popover-id":ae,portal:!(!t||!G),offset:X,ref:C,style:{...a,...J.popper},...ee.popper,children:[s&&(0,f.jsx)(W,{ref:H,style:{...J.arrow}}),m]});return!r||!R||c&&!v(F,c)?null:t&&G?(0,M.createPortal)(se,G):se});var ee=r(8579);const te=()=>(0,j.A)().themeMachine.theme;var re=r(9511),ne=r(9749),oe=r(4869),ae=r(4860),ie=r(9115);const se=({children:e,theme:t})=>{const r=N.A?window.cosmos.configurationContext??ie.Q:ie.Q,n=(0,h.useContext)(r),o=new ae.A({theme:t,parent:n.themeMachine});return(0,f.jsx)(r.Provider,{value:{...n,themeMachine:o},children:(0,f.jsx)(g.NP,{theme:o.theme,children:e})})};var ce=r(8044);const le=(0,ce.A)("tooltip",[]),de=g.Ay.div(({theme:e})=>{const t=(0,P.Vr)(e.base["font-size"],e.base["font-scale"]);return g.AH`
    background-color: ${e.components.tooltip["background-color"]};
    color: ${e.components.tooltip["foreground-color"]};
    font-size: ${t.xxs};
    max-width: 40ch;
    padding: ${e.base.spacing};
    white-space: pre-line;
    word-break: break-word;
  `});de.defaultProps=$.qn;const ue=(0,h.forwardRef)(function({testId:e,children:t,target:r,ignoredElements:n=[],showDelay:o="short",hideDelay:a="long",placement:i="top",describeTarget:s=!0,smart:c,groupId:l="tooltip",...d},u){const m=D(),[p,g]=(0,h.useState)(!1),[b,$]=(0,h.useState)(!1),y=(0,E.A)(u),v=(0,h.useRef)(null),A=(0,ee.A)(e,le),w="string"==typeof t||Array.isArray(t)&&t.every(e=>"string"==typeof e),x=(0,h.useCallback)(({target:e})=>{v.current=e,e!==y.current&&e!==r&&g(!1)},[r]);(0,h.useEffect)(()=>{if(!r)return;const e=()=>{const e=t=>{if((0,K.A)(t).some(Boolean)&&!["absolute","fixed"].includes(window.getComputedStyle(t).position))return!0;for(const r of t.children)if(e(r))return!0;return!1};g(!c||e(r))},t=()=>{e()},o=()=>{v.current&&v.current===y.current||g(!1),v.current=null},a=()=>{n.some(e=>e?.matches(":hover"))||re.A.primary||e()},i=()=>{(0,ne.A)()!==r&&g(!1)},s=({key:e})=>{"Escape"===e&&p&&($(!0),g(!1))};return document.addEventListener("keydown",s),document.addEventListener("mousedown",x),r.addEventListener("focusin",t),r.addEventListener("focusout",o),r.addEventListener("mouseenter",a),r.addEventListener("mouseleave",i),()=>{document.removeEventListener("keydown",s),document.removeEventListener("mousedown",x),r.removeEventListener("focusin",t),r.removeEventListener("focusout",o),r.removeEventListener("mouseenter",a),r.removeEventListener("mouseleave",i)}},[r,x,c,p]),(0,h.useEffect)(()=>{if(r&&s&&p){const e=r.getAttribute("aria-describedby");r.setAttribute("aria-describedby",e?`${e} ${m}`:m)}else if(r){const e=r.getAttribute("aria-describedby");if(e)if(e===m)r.removeAttribute("aria-describedby");else{const t=e.replace(new RegExp(`(?:^|\\s+)${m}`),"");r.setAttribute("aria-describedby",t)}}},[s,r,p]),(0,h.useEffect)(()=>{!p&&b&&$(!1)},[p,b]);const k=te(),C={base:{palette:{"primary-background":k.components.tooltip["background-color"],"foreground-color":k.components.tooltip["foreground-color"],interactive:(0,P.ho)(k.base.palette.interactive,k.components.tooltip["background-color"])}}};return(0,f.jsx)(se,{theme:C,children:(0,f.jsx)(J,{"data-testid":A.root,id:m,groupId:l,...d,show:p,showDelay:b?"none":o,hideDelay:b?"none":a,onMouseOver:()=>{g(!0)},onMouseOut:()=>{g(!1)},strategy:"fixed",as:de,role:w?"tooltip":"dialog",target:r,arrow:!0,placement:i,onMouseDown:x,hideOnTargetHidden:!0,ref:y,children:t})})}),me=(0,oe.A)(ue,le);var pe=r(1862);const fe=(0,ce.A)("backdrop",[]),he={slow:2,medium:1,fast:.5,none:0},ge=(0,g.Ay)(k)(e=>{const{theme:{base:t}}=e,{opacity:r,alpha:n,variant:o,position:a}=e,i=`max(calc(${he[e.transitionSpeed]} * ${t.animation.speed}), 1ms)`;return g.AH`
      position: ${a};
      z-index: ${"fixed"===a?t["z-index"].backdrop:t["z-index"].popover+1};
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      opacity: ${r};
      transition-property: opacity;
      transition-timing-function: ${e.theme.base.animation.timing.ease};
      /* stylelint-disable declaration-block-no-duplicate-properties */
      transition-duration: 1ms;
      transition-duration: ${i};
      /* stylelint-enable declaration-block-no-duplicate-properties */

      ${"dark"===o&&g.AH`
        background: rgba(0, 0, 0, ${n});
      `}

      ${"light"===o&&g.AH`
        background: rgba(255, 255, 255, ${n});
      `}
    `});ge.defaultProps=$.qn;const be=(0,oe.A)((0,h.forwardRef)(function({testId:e,children:t,container:r,open:n=!1,variant:o="dark",transitionSpeed:a="medium",alpha:i=.6,position:s="fixed",onBeforeTransitionIn:c,onAfterTransitionIn:l,onBeforeTransitionOut:d,onAfterTransitionOut:u,...m},p){const g=(0,ee.A)(e,fe),[b,$]=(0,h.useState)("closed"),[y,v]=(0,z.A)(),A=(0,E.A)(p,v),w=(0,h.useCallback)(e=>{if("opacity"!==e.propertyName||e.target!==e.currentTarget)return;let t;"closing"===b?(t="closed",u?.()):(t="open",l?.()),$(t)},[b,u,l]);return(0,h.useEffect)(()=>{n?"closed"!==b&&"closing"!==b||(c?.(),(0,pe.A)(),$("opening")):"open"!==b&&"opening"!==b||(d?.(),$("closing"))},[n]),(0,h.useEffect)(()=>{if(!A.current)return;const e=window.getComputedStyle(A.current).opacity;"closing"===b&&"0"===e&&(u?.(),$("closed")),"opening"===b&&"1"===e&&(l?.(),$("open"))},[b]),n||"closed"!==b?(0,f.jsx)(ie.A,{portalTarget:y??void 0,children:(0,f.jsx)(ge,{"data-testid":g.root,container:{justify:"center",alignItems:"center",...r},transitionSpeed:a,opacity:"opening"===b||"open"===b?1:0,alpha:i,variant:o,position:s,onTransitionEnd:w,ref:A,...m,children:t})}):null}),fe),$e=(0,g.Ay)(be)(()=>g.AH`
    border-radius: inherit;
  `);$e.defaultProps=$.qn;const ye=g.Ay.div(({theme:e})=>g.AH`
    &:focus-visible {
      box-shadow: ${e.components.button["focus-shadow"]};
      outline: none;
      border-radius: calc(9999 * ${e.base["border-radius"]});
    }
  `);ye.defaultProps=$.qn;const ve=(0,g.Ay)(ye)(({theme:e,placement:t,determinate:r})=>{const n="inline"===t?"1em":"2rem",o=(0,b.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return g.AH`
    position: relative;

    svg {
      display: block;
      width: ${n};
      height: ${n};

      circle {
        fill: transparent;
        stroke: ${o};
        stroke-width: 2;
        r: 45%;
        cx: 50%;
        cy: 50%;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;

        &:nth-child(2) {
          stroke: ${e.components.progress["progress-color"]};
          transition: stroke-dashoffset calc(0.5 * ${e.base.animation.speed})
            ${e.base.animation.timing.ease};

          ${!r&&g.AH`
            @keyframes LoadingRing {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }
            animation: LoadingRing calc(4 * ${e.base.animation.speed}) linear infinite;
          `}
        }
      }
    }

    ${"inline"===t&&g.AH`
      display: inline-flex;
      vertical-align: top;
    `}
  `});ve.defaultProps=$.qn;const Ae=(0,g.Ay)(ye)(({theme:e,placement:t,determinate:r})=>{const n=(0,b.J1)(e.base.palette["foreground-color"])>.5?e.base.colors.gray["extra-dark"]:e.base.colors.gray.light;return g.AH`
    background-color: ${n};
    border-radius: ${e.base["border-radius"]};
    ${"local"===t?g.AH`
          width: calc(100% - 4 * ${e.base.spacing});
        `:g.AH`
          width: 100%;
        `}
    height: 0.375rem;
    min-width: 2rem;
    max-width: min(calc(100vw - 4 * ${e.base.spacing}), ${e.base["content-width"].lg});
    overflow: hidden;

    ::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      left: 0;
      border-radius: ${e.base["border-radius"]};
      background-color: ${e.components.progress["progress-color"]};
      ${r&&g.AH`
        transform: translateX(var(--progress, 0));
        transform-origin: 0 50%;
        transition: transform calc(0.5 * ${e.base.animation.speed})
          ${e.base.animation.timing.ease};
      `}

      ${!r&&g.AH`
        @keyframes LoadingBar {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(200%);
          }
        }
        animation: LoadingBar calc(8 * ${e.base.animation.speed}) linear infinite;
        width: 50%;
      `}
    }

    ${"inline"===t&&g.AH`
      width: 3rem;
      display: inline-block;
      position: relative;
    `}
  `});Ae.defaultProps=$.qn;const we=(0,g.Ay)(ye)(({theme:e,placement:t})=>g.AH`
    line-height: 1;
    display: ${"inline"===t?"inline-flex":"block"};

    @keyframes LoadingEllipsis {
      0% {
        transform: scale(0);
        opacity: 0;
      }

      50% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    > span {
      display: flex;
      justify-content: center;

      ${"inline"===t&&g.AH`
        display: inline-flex;
      `}
    }

    > span span {
      margin: 0 0.3125rem;
      background: ${e.components.progress["progress-color"]};
      border-radius: 50%;
      animation: LoadingEllipsis calc(4 * ${e.base.animation.speed}) infinite;

      ${"global"===t&&g.AH`
        width: 1.25rem;
        height: 1.25rem;
      `}

      ${("local"===t||"block"===t)&&g.AH`
        width: 0.625rem;
        height: 0.625rem;
      `}

      ${"inline"===t&&g.AH`
        width: 0.1875rem;
        height: 0.1875rem;
        margin: 0 0.1875rem;
        animation-duration: calc(4 * ${e.base.animation.speed});
      `}

      &:nth-child(2) {
        animation-delay: 0.1667s;
      }

      &:nth-child(3) {
        animation-delay: ${.3334}s;
      }
    }
  `);we.defaultProps=$.qn;const xe=g.Ay.span(({theme:e})=>{const t=(0,S.A)(()=>(0,b.B3)((0,P.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),r=(0,P.Vr)(e.base["font-size"],e.base["font-scale"]);return g.AH`
    font-size: ${r[e.components.label["font-size"]]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    color: ${t};
  `});xe.defaultProps=$.qn;const ke=(0,g.Ay)(k)(({theme:e,placement:t})=>g.AH`
    ${"inline"!==t&&g.AH`
      width: 100%;
    `}

    ${"block"===t&&g.AH`
      margin-block: calc(2 * ${e.base.spacing});
    `}
  `);ke.defaultProps=$.qn;var Ce=r(7521);r(8347);const je=(0,h.createContext)({announce:()=>{},announcePolite:()=>{},announceAssertive:()=>{},initialized:!1}),He=()=>{const e=N.A?window.cosmos.liveLogContext??je:je;return(0,h.useContext)(e)},Ee=(0,h.forwardRef)(function({value:e,minValue:t=0,maxValue:r=100,message:n,placement:o,style:a,...i},s){let c=e;return"number"==typeof e&&(c=e>r||t>r?0:e<t?100:-100*(1-(e-t)/(r-t))),(0,f.jsx)(Ae,{ref:s,role:"progressbar","aria-valuemin":t,"aria-valuemax":r,"aria-valuenow":e,placement:o,determinate:"number"==typeof e,style:{...a,"--progress":c?`${c}%`:""},...i})}),Se=(0,h.forwardRef)(function({message:e,placement:t,...r},n){return(0,f.jsx)(we,{ref:n,role:"progressbar",placement:t,...r,children:(0,f.jsxs)("span",{children:[(0,f.jsx)("span",{}),(0,f.jsx)("span",{}),(0,f.jsx)("span",{})]})})}),Ie={ring:(0,h.forwardRef)(function({value:e,minValue:t=0,maxValue:r=100,placement:n,...o},a){let i;const s=18*Math.PI;return i="number"!=typeof e?(1-.33)*s:e>r||t>r?0:e<t?s:(1-(e-t)/(r-t))*s,(0,f.jsx)(ve,{ref:a,role:"progressbar","aria-valuemin":t,"aria-valuemax":r,"aria-valuenow":e,placement:n,determinate:"number"==typeof e,...o,children:(0,f.jsxs)("svg",{viewBox:"0 0 20 20",children:[(0,f.jsx)("circle",{}),(0,f.jsx)("circle",{strokeDasharray:s,style:{strokeDashoffset:i}})]})})}),bar:Ee,ellipsis:Se},Re=(0,h.forwardRef)(function({variant:e="ring",placement:t="global",visible:r=!0,focusOnVisible:n=!1,delay:o=!1,onTransitionStartIn:a,onTransitionEndIn:i,onTransitionStartOut:s,onTransitionEndOut:c,value:l,message:d,liveConfig:u,...m},p){const g=H(),{portalTarget:$}=(0,j.A)(),{announcePolite:y}=He(),v=te(),A=(0,E.A)(p),[w,x]=(0,h.useState)(!o&&r),[C,S]=(0,h.useState)(!w),I=(0,h.useRef)(),R=(0,h.useRef)(),P=(0,h.useRef)(),z=(0,h.useRef)(),L="global"===t||"local"===t,T="number"==typeof l?`${l}%`:void 0,D=d&&T?`${d} - ${T}`:d||T,O=()=>{x(!0),S(!1)},q=()=>{x(!1),L||S(!0)};if((0,h.useEffect)(()=>{if(r)I.current=Date.now(),o?P.current=window.setTimeout(O,100):O();else if(void 0!==P.current)if(clearTimeout(P.current),void 0!==R.current){const e=Date.now()-R.current;e>=1e3?q():z.current=window.setTimeout(q,1e3-e)}else q();else q()},[r]),(0,h.useEffect)(()=>{u?.contextualLabel&&w&&y({message:`${u.contextualLabel}, ${D??g("loading")}`,type:"status"})},[w]),(0,h.useEffect)(()=>{!C&&w&&(R.current=Date.now(),n&&A.current?.focus())},[C]),C)return null;const F=Ie[e];let _=(0,f.jsx)(F,{"aria-label":"number"!=typeof l&&D?D:g("loading"),as:"inline"===t?"span":void 0,...m,placement:t,value:l,"aria-valuetext":"number"==typeof l?D:void 0,ref:A,tabIndex:-1});"inline"!==t&&(_=(0,f.jsxs)(k,{container:{direction:"column",alignItems:"center",gap:.5},as:ke,placement:t,children:[_,d&&(0,f.jsx)(Ce.A,{as:xe,variant:"secondary","aria-hidden":!0,children:d})]}));const B=(0,b.J1)(v.base.palette["foreground-color"])>.5?"dark":"light",N=L?(0,f.jsx)($e,{open:w,container:{direction:"column"},position:"global"===t?"fixed":"absolute",variant:B,alpha:.8,onBeforeTransitionIn:a,onAfterTransitionIn:i,onBeforeTransitionOut:s,onAfterTransitionOut:()=>{S(!0),c?.()},children:_}):_;return"global"===t&&$?(0,M.createPortal)(N,$):N}),Pe=Re,ze=new Map([]),Me=(...e)=>{e.forEach(({set:e,name:t,...r})=>{const n=e??"budicon";ze.has(n)?ze.get(n).has(t)||ze.get(n).set(t,r):ze.set(n,new Map([[t,r]]))})},Le=g.Ay.svg(({theme:e,size:t="s"})=>{const{components:{icon:{size:{s:r,m:n,l:o}}}}=e;return g.AH`
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    flex-shrink: 0;
    /* stylelint-disable unit-allowed-list */
    min-width: 14px;
    min-height: 14px;
    /* stylelint-enable unit-allowed-list */

    @media (forced-colors: active) {
      fill: CanvasText;
    }

    ${"s"===t&&g.AH`
      width: ${r};
      height: ${r};
    `}

    ${"m"===t&&g.AH`
      width: ${n};
      height: ${n};
    `}

    ${"l"===t&&g.AH`
      width: ${o};
      height: ${o};
    `}

    ${"font-size"===t&&g.AH`
      width: 1em;
      height: 1em;
    `}
  `});Le.defaultProps=$.qn;const Te=g.Ay.div(({theme:e,background:t,foreground:r,size:n="m",shape:o="square"})=>{const a=(0,P.W0)(t),{base:{"border-radius":i},components:{icon:{size:{s,m:c,l},"border-radius-multiplier":d}}}=e;return g.AH`
    color: ${r??a};
    background-color: ${t};
    display: flex;
    justify-content: center;
    align-items: center;

    ${"s"===n&&g.AH`
      width: ${s};
      height: ${s};
    `}

    ${"m"===n&&g.AH`
      width: ${c};
      height: ${c};
    `}

    ${"l"===n&&g.AH`
      width: ${l};
      height: ${l};
    `}

    ${"font-size"===n&&g.AH`
      width: 1em;
      height: 1em;
    `}

    ${"square"===o&&g.AH`
      border-radius: calc(${d} * ${i});
    `}

    ${"circle"===o&&g.AH`
      border-radius: 50%;
    `}

    ${Le} {
      width: 50%;
      height: 50%;
      /* stylelint-disable unit-allowed-list */
      min-width: min(14px, 90%);
      min-height: min(14px, 90%);
      /* stylelint-enable unit-allowed-list */
    }
  `});Te.defaultProps=$.qn;const De=Object.freeze({Component:()=>null}),Oe=(0,h.forwardRef)(function({set:e,name:t,size:n,"aria-label":o,role:a,...i},s){const{base:{"icon-set":c}}=te(),l=e??c??"budicon",[d,u]=(0,h.useState)(ze.get(l)?.get(t)??De);return(0,h.useEffect)(()=>{if(ze.get(l)?.has(t))return void u(ze.get(l).get(t));const e=new AbortController;return(async()=>{try{const e=encodeURIComponent(t);let n,o;switch(l){case"streamline":n="streamline-icons";break;case"budicon":n="icons";break;default:throw new Error("Unknown icon")}try{o=await r(1291)(`./${n}/${e}.icon`)}catch{o=await r(1291)(`./${n}/${e}.icon.tsx`)}if(o.name!==t||!o.Component)throw new Error("Malformed icon definition");Me(o)}catch{Me({set:l,name:t,...De})}e.signal.aborted||u(ze.get(l).get(t)??De)})(),()=>e.abort()},[t,l]),"string"==typeof i.background?(0,f.jsx)(Te,{...i,background:i.background,foreground:i.foreground,shape:i.shape,size:n,ref:s,children:(0,f.jsx)(Le,{role:a??void 0!==o?"img":"presentation","aria-label":o,viewBox:d.viewBox,children:(0,f.jsx)(d.Component,{})})}):(0,f.jsx)(Le,{...i,role:a??void 0!==o?"img":"presentation","aria-label":o,viewBox:d.viewBox,size:n,ref:s,children:(0,f.jsx)(d.Component,{})})}),qe=Oe,Fe=e=>{const{base:{spacing:t,animation:{speed:r,timing:{ease:n}},"disabled-opacity":o},components:{button:{"focus-shadow":a}}}=e;return g.AH`
    text-decoration: none;
    transition-property: background-color, color, border-color, box-shadow, translate;
    transition-duration: calc(0.5 * ${r});
    transition-timing-function: ${n};
    cursor: pointer;

    @media (forced-colors: none) {
      outline: none;
    }

    & + & {
      margin-inline-start: ${t};
    }

    /* Not able to combine with selector above. Stylis bug? */

    & + ${U} + & {
      margin-inline-start: ${t};
    }

    &:disabled,
    &[disabled] {
      opacity: ${o};
      cursor: not-allowed;
      pointer-events: none;
    }

    &:enabled:focus,
    &:not([disabled]):focus {
      box-shadow: ${a};
    }
  `},_e=(e,t)=>({contrastColor:t?e:(0,S.A)(()=>(0,P.W0)(e)),hoverColors:(0,P.ZV)(t||e),activeColors:(0,P.BI)(t||e)}),Be=(e,t)=>{const r=(0,P.VR)(t)?t:(0,P.W0)(e),n=(0,S.A)(()=>(0,b.IM)(e,r).AA),o=n?e:(0,P.ho)(e,t),a=(0,S.A)(()=>(0,b.jh)(.9,t,e)),i=(0,S.A)(()=>(0,b.jh)(.8,t,o));return{textColor:n?e:(0,P.W0)(e),hoverBg:a,hoverFg:(0,P.ho)(e,a??"transparent"),activeBg:(0,S.A)(()=>(0,b.jh)(.8,t,o)),activeFg:(0,P.ho)(o,i??"transparent")}},Ne=g.Ay.button.withConfig((0,P.ks)("loading"))(({variant:e,icon:t,loading:r,compact:n,theme:o})=>{const{base:{spacing:a,"border-radius":i,palette:{"primary-background":s},"hit-area":{"mouse-min":c,"finger-min":l,"compact-min":d},animation:{speed:u}},components:{button:{color:m,"foreground-color":p,"secondary-color":f,"secondary-fill-style":h,padding:b,"border-radius":$,"border-width":y,touch:{padding:v}}}}=o,A=Fe(o),w=g.AH`
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: ${c};
      min-width: ${c};
      border: ${y} solid transparent;
      border-radius: calc(${i} * ${$});
      -webkit-user-select: none;
      user-select: none;
      white-space: nowrap;

      ${!t&&g.AH`
        padding: ${b};
      `}

      ${t&&g.AH`
        border-radius: calc(${i} * ${$});

        > svg {
          display: block;
        }
      `} ${n&&g.AH`
        min-height: ${d};
        min-width: ${d};
      `} @media (
        pointer: coarse) {
        border-radius: calc(${i} * ${$});

        ${!n&&g.AH`
          min-height: ${l};
          min-width: ${l};
        `}

        ${!t&&g.AH`
          padding: ${v};
        `}
      }

      &:active {
        translate: 0 0.0625rem;
      }
    `,{contrastColor:x,hoverColors:k,activeColors:C}="primary"!==e||"auto"===p?_e("primary"===e?m:f):_e(p,m),j=g.AH`
      --button-background-color: ${"primary"===e?m:f};
      color: ${x};
      background-color: ${"primary"===e?m:f};

      @media (hover: hover) {
        &:hover {
          background-color: ${k.background};
          text-decoration: none;
        }
      }

      &:active {
        background-color: ${C.background};
        color: ${C.foreground};
        text-decoration: none;
      }
    `,H=Be(f,s),E=g.AH`
      --button-background-color: ${s};
      color: ${H.textColor};
      background-color: ${s};
      border-color: ${f};

      @media (hover: hover) {
        &:hover {
          background-color: ${H.hoverBg};
          text-decoration: none;
        }
      }

      &:active {
        color: ${H.activeFg};
        background-color: ${H.activeBg};
        border-color: ${H.activeFg};
        text-decoration: none;
      }
    `,S=Be("outline"===h?f:m,s),I=g.AH`
      --button-background-color: ${t?"transparent":s};
      color: ${t?"currentColor":S.textColor};
      background-color: ${t?"transparent":s};

      @media (hover: hover) {
        &:hover {
          ${t&&g.AH`
            ::before {
              content: '';
              position: absolute;
              top: calc(${y} * -1);
              bottom: calc(${y} * -1);
              left: calc(${y} * -1);
              right: calc(${y} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.1;
            }
          `}

          ${!t&&g.AH`
            background-color: ${S.hoverBg};
            color: ${S.hoverFg};
            border-color: ${S.hoverFg};
            text-decoration: none;
          `}
        }

        &:active {
          ${t&&g.AH`
            ::before {
              content: '';
              position: absolute;
              top: calc(${y} * -1);
              bottom: calc(${y} * -1);
              left: calc(${y} * -1);
              right: calc(${y} * -1);
              border-radius: inherit;
              background-color: currentColor;
              opacity: 0.2;
            }
          `}

          ${!t&&g.AH`
            background-color: ${S.activeBg};
            color: ${S.activeFg};
            border-color: ${S.activeFg};
            text-decoration: none;
          `}
        }
      }
    `;return g.AH`
      ${A}
      ${w}
        ${("primary"===e||"secondary"===e&&"fill"===h)&&j}
        ${"secondary"===e&&"outline"===h&&E}
        ${"simple"===e&&I}
        ${"primary"===e&&g.AH`
        font-weight: ${o.base["font-weight"]["semi-bold"]};
      `}

        ${r&&g.AH`
        ${ge} {
          background-color: var(--button-background-color);
          border-radius: inherit;
        }

        ${ve} {
          width: 1em;
          height: 1em;

          ${!t&&g.AH`
            margin-inline-end: calc(${a} / 2);
          `}
          circle:nth-child(2) {
            animation-duration: calc(${u} * 2);
          }
        }
      `}
    `});Ne.defaultProps=$.qn;const Ve=g.Ay.a.withConfig((0,P.ks)("loading"))(({theme:e,variant:t,href:r})=>{const{base:{palette:{"foreground-color":n}},components:{button:{color:o,"secondary-fill-style":a},link:{color:i}}}=e;let s=i;r||"solid"!==a||(s=o);const{background:c}=(0,P.BI)(s),{background:l}=(0,P.BI)(n),d=Fe(e),u=g.AH`
    background-color: transparent;
    display: inline;
    text-align: start;
    border: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    > ${Le} {
      vertical-align: bottom;
    }
  `,m=g.AH`
    color: ${s};

    &:active {
      color: ${c};
    }
  `,p=g.AH`
    color: ${n};

    &:active {
      color: ${l};
    }
  `;return g.AH`
    ${d}
    ${u}
      ${"link"===t&&m}
      ${"text"===t&&p}
  `});Ve.defaultProps=$.qn;const We=(0,h.forwardRef)(function({variant:e="secondary",type:t="button",disabled:r=!1,icon:n=!1,compact:o=!1,href:a,as:i,forwardedAs:s,label:c,"aria-label":l,loading:d=!1,children:u,className:m,...p},g){const[b,$]=(0,z.A)(),y=(0,h.useRef)(),v=(0,h.useRef)(),A=(0,h.useRef)(),w=(0,E.A)(g,$),x=["link","text"].includes(e),k=d&&!x,C=x?Ve:Ne,j=e=>{w.current&&v.current&&A.current&&(0,I.A)({x:e.clientX,y:e.clientY},v.current)&&Date.now()-A.current<500&&w.current.click()};return(0,h.useEffect)(()=>(document.addEventListener("mouseup",j),()=>{document.removeEventListener("mouseup",j),y.current=void 0,v.current=void 0,A.current=void 0}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(C,{...p,ref:w,as:i||(a?"a":"button"),forwardedAs:s||(a?"a":"button"),className:(0,R.A)("button",m,{variant:e,icon:n,compact:o,loading:d}),variant:e,icon:n,compact:o,type:a?void 0:t,href:a,disabled:r&&!a,loading:k,"aria-label":l||c,onMouseDown:e=>{p.onMouseDown?.(e),e.persist(),y.current=e,v.current=e.currentTarget.getBoundingClientRect(),A.current=Date.now()},onMouseUp:e=>{const t=y.current&&!y.current.defaultPrevented;return y.current=void 0,v.current=void 0,A.current=void 0,t&&w.current!==document.activeElement&&w.current?.focus(),p.onMouseUp?.(e)},children:[k&&(0,f.jsx)(Pe,{variant:"ring",placement:"inline"}),n&&k?null:u]}),b&&c&&(0,f.jsx)(me,{target:b,showDelay:"none",hideDelay:"none",describeTarget:!1,children:c})]})});var Ue=r(8268);const Ze=(e,t=document,r=[])=>{const n=(0,h.useCallback)(t=>{"Escape"===t.key&&e(t)},[e,...r]);_("keydown",n,{target:t})},Ge=()=>{const{direction:e}=(0,j.A)();return(0,h.useMemo)(()=>"ltr"===e?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])};var Ke=r(7666);const Xe=["button","a","input","li","legend"],Ye=e=>{const t=(0,h.useRef)();return(0,h.useLayoutEffect)(()=>{t.current=e},[e]),t.current};var Qe=r(3563);const Je=g.Ay.span`
  ${b.Ic}
  -webkit-user-select: none;
  user-select: none;
`,et=(0,h.forwardRef)(function(e,t){return(0,f.jsx)(Je,{...e,ref:t})}),tt=(e,t,r,n,o)=>{(0,h.useEffect)(()=>{let a=null;if(t>0){const r=e?.current??o?.current?.getRootNode()??document;if(!(0,Ue.A)(r,HTMLElement,SVGElement,Document,ShadowRoot))return;const i=r.querySelectorAll(n);i.length>t&&(a=i[t])}if(a){const t=new IntersectionObserver(e=>{e[0].isIntersecting&&r()},{root:e.current??null});return t.observe(a),()=>{t.disconnect()}}},[r,t])},rt="budicon",nt="galaxy",ot=()=>(0,f.jsx)("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),at="0 0 25 25",it="streamline",st="folder-empty",ct=()=>(0,f.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),lt="0 0 18 18",dt=(0,ce.A)("empty-state",["message","icon"]);Me(n),Me(o);const ut=g.Ay.div(({theme:e})=>{const t=(0,S.A)(()=>(0,b.B3)(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return g.AH`
    height: 100%;

    ${Le} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});ut.defaultProps=$.qn;const mt=(0,h.forwardRef)(function(e,t){const{base:{"icon-set":r}}=te(),n=H(),{testId:o,message:a=n("no_items"),...i}=e,s=(0,ee.A)(o,dt);return(0,f.jsxs)(k,{"data-testid":s.root,...i,as:ut,ref:t,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[(0,f.jsx)(qe,{"data-testid":s.icon,name:"streamline"===r?"folder-empty":"galaxy"}),(0,f.jsx)(Ce.A,{"data-testid":s.message,variant:"secondary",children:a})]})}),pt=(0,oe.A)(mt,dt),ft=(0,h.createContext)({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:(0,T.A)(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),ht=(0,ce.A)("meta-list",[]),gt=g.Ay.ul(({wrapItems:e})=>g.AH`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&g.AH`
      white-space: nowrap;
    `}
  `),bt=g.Ay.li(({wrapItems:e})=>g.AH`
    min-width: 0;
    display: inline-block;

    ${e?g.AH`
          overflow-wrap: break-word;
        `:g.AH`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),$t=(0,h.forwardRef)(function({testId:e,items:t,wrapItems:r=!0,...n},o){const a=(0,ee.A)(e,ht),i=t.length<=1?"none":void 0;return(0,f.jsx)(k,{"data-testid":a.root,...n,as:gt,role:i,container:{colGap:.5,alignItems:"center",wrap:r?"wrap":"nowrap"},wrapItems:r,ref:o,children:t.flatMap((e,t,n)=>e?[(0,f.jsx)(Ce.A,{as:bt,variant:"secondary",role:i,wrapItems:r,children:e},`${t+0}`)].concat(t!==n.length-1?[(0,f.jsx)(Ce.A,{as:bt,"aria-hidden":!0,variant:"secondary",children:"•"},`${t+0}-sep`)]:[]):[])})}),yt=(0,oe.A)($t,ht),vt=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,At=e=>{if(!e)return;if(!0===e)return g.AH`
      display: grid;
    `;const{inline:t,pad:r,cols:n,autoCols:o,rows:a,autoRows:i,autoFlow:s,areas:c,template:l,colGap:d,rowGap:u,gap:m,justifyItems:p,justifyContent:f,alignItems:h,alignContent:b}=e;return g.AH`
    display: ${t?"inline-grid":"grid"};

    ${void 0!==r&&g.AH`
      padding: ${({theme:{base:{spacing:e}}})=>(Array.isArray(r)?r:[r]).map(t=>`calc(${t} * ${e})`).join(" ")};
    `}

    ${n&&g.AH`
      grid-template-columns: ${n};
    `}

    ${o&&g.AH`
      grid-auto-columns: ${o};
    `}

    ${a&&g.AH`
      grid-template-rows: ${a};
    `}

    ${i&&g.AH`
      grid-auto-rows: ${i};
    `}

    ${s&&g.AH`
      grid-auto-flow: ${s};
    `}

    ${c&&g.AH`
      grid-template-areas: ${c};
    `}

    ${l&&g.AH`
      grid-template: ${l};
    `}

    ${void 0!==m&&g.AH`
      gap: calc(${m} * ${e=>e.theme.base.spacing});
    `}

    ${void 0!==d&&g.AH`
      column-gap: calc(${d} * ${e=>e.theme.base.spacing});
    `}

    ${void 0!==u&&g.AH`
      row-gap: calc(${u} * ${e=>e.theme.base.spacing});
    `}

    ${p&&g.AH`
      justify-items: ${p};
    `}

    ${f&&g.AH`
      justify-content: ${vt(f)};
    `}

    ${h&&g.AH`
      align-items: ${h};
    `}

    ${b&&g.AH`
      align-content: ${vt(b)};
    `}
  `},wt=e=>{if(!e)return;const{colStart:t,colEnd:r,colStartEnd:n,rowStart:o,rowEnd:a,rowStartEnd:i,area:s,justifySelf:c,alignSelf:l}=e;return g.AH`
    ${t&&g.AH`
      grid-column-start: ${t};
    `}

    ${r&&g.AH`
      grid-column-end: ${r};
    `}

    ${n&&g.AH`
      grid-column: ${n};
    `}

    ${o&&g.AH`
      grid-row-start: ${o};
    `}

    ${a&&g.AH`
      grid-row-end: ${a};
    `}

    ${i&&g.AH`
      grid-row: ${i};
    `}

    ${s&&g.AH`
      grid-area: ${s};
    `}

    ${c&&g.AH`
      justify-self: ${c};
    `}

    ${l&&g.AH`
      align-self: ${l};
    `}
  `},xt=["xs","sm","md","lg","xl"],kt=g.Ay.div(({container:e,item:t,theme:{base:{breakpoints:r}},xs:n,sm:o,md:a,lg:i,xl:s})=>{const c={xs:n,sm:o,md:a,lg:i,xl:s};return g.AH`
      ${At(e)}
      ${wt(t)}

    ${xt.map(e=>c[e]&&g.AH`
            @media screen and (min-width: ${r[e]}) {
              ${At(c[e]?.container)}
              ${wt(c[e]?.item)}
            }
          `)}
    `});kt.defaultProps=$.qn;const Ct=(0,h.forwardRef)(function(e,t){return(0,f.jsx)(kt,{...e,ref:t})}),jt=(0,ce.A)("summary-item",["primary","secondary","visual","actions"]),Ht=g.Ay.div`
  > ${ve}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;Ht.defaultProps=$.qn;const Et=(0,g.Ay)(Ct)(({theme:e,isString:t,overflowStrategy:r})=>g.AH`
    ${"ellipsis"===r?g.AH`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:g.AH`
          word-break: break-word;
        `}

    ${t&&g.AH`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);Et.defaultProps=$.qn;const St=(0,g.Ay)(Ct)(({overflowStrategy:e})=>g.AH`
    ${"ellipsis"===e?g.AH`
          overflow: hidden;
          text-overflow: ellipsis;
        `:g.AH`
          word-break: break-word;
        `}
  `),It=g.Ay.div`
  white-space: nowrap;
`,Rt=g.Ay.div``,Pt=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,zt=({secondary:e,layout:t,visual:r,actions:n})=>`"${r?"visual ":""}primary${e&&"inline"===t?" secondary":""}${n?" actions":""}"${e&&"stacked"===t?`\n"${r?"visual ":""}secondary${n?" actions":""}"`:""}`,Mt=(0,h.forwardRef)(function({testId:e,visual:t,primary:r,secondary:n,layout:o="stacked",actions:a,container:i,overflowStrategy:s="wrap",as:c,...l},d){const u=(0,ee.A)(e,jt);return(0,f.jsxs)(Ct,{"data-testid":u.root,...l,ref:d,container:{cols:Pt({visual:t,actions:a}),colGap:2,areas:zt({secondary:n,layout:o,visual:t,actions:a}),...i},as:Rt,forwardedAs:c,children:[t&&(0,f.jsx)(Ct,{"data-testid":u.visual,as:Ht,item:{area:"visual",alignSelf:"center"},children:t}),(0,f.jsx)(Et,{"data-testid":u.primary,item:{area:"primary",alignSelf:n&&"stacked"===o?"end":"center"},isString:"string"==typeof r,overflowStrategy:s,children:r}),n&&(0,f.jsx)(St,{"data-testid":u.secondary,item:{area:"secondary",alignSelf:"stacked"===o?"start":"center"},overflowStrategy:s,children:n}),a&&(0,f.jsx)(Ct,{"data-testid":u.actions,as:It,item:{area:"actions",alignSelf:"center"},children:a})]})}),Lt=(0,oe.A)(Mt,jt),Tt="budicon",Dt="caret-left",Ot=()=>(0,f.jsx)("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),qt="0 0 25 25",Ft="budicon",_t="caret-right",Bt=()=>(0,f.jsx)("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),Nt="0 0 25 25",Vt="budicon",Wt="check",Ut=()=>(0,f.jsx)("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),Zt="0 0 25 25",Gt=((0,ce.A)("alert",[]),(0,ce.A)("count",[])),Kt=((0,ce.A)("keyboard",[]),(0,ce.A)("selectable",["remove"]),(0,ce.A)("status",[]),(0,ce.A)("tag",[]),g.Ay.span(({theme:e,variant:t,children:r})=>{const{foreground:n,background:o}=e.components.badges.count[t],a=(0,S.A)(()=>(0,b.B3)(n,.1)),i=(0,P.Vr)(e.base["font-size"],e.base["font-scale"]);return g.AH`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${n};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${a};
    font-size: ${i.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${1===r.length?g.AH`
          aspect-ratio: 1 / 1;
        `:g.AH`
          padding-inline: ${e.base.spacing};
        `}
  `}));Kt.defaultProps=$.qn;const Xt=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",Yt=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${(e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${Xt(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${Xt(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${Xt(e)}`}return"999T+"})(t)}`},Qt=(0,oe.A)((0,h.forwardRef)(function({testId:e,variant:t="default",children:r,...n},o){const a=(0,ee.A)(e,Gt);return Number.isInteger(r)?(0,f.jsx)(Kt,{"data-testid":a.root,variant:t,...n,ref:o,children:Yt(r)}):null}),Gt),Jt=g.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
  color: inherit;

  @media (forced-colors: none) {
    outline: none;
  }

  & + & {
    margin-inline-start: ${e=>e.theme.base.spacing};
  }
`;Jt.defaultProps=$.qn;const er=(0,h.forwardRef)(function({type:e="button",disabled:t=!1,href:r,...n},o){const a=(0,h.useRef)(),i=(0,E.A)(o);(0,h.useEffect)(()=>()=>{a.current=void 0},[]);const s=e=>{n.onMouseDown?.(e),e.persist(),a.current=e},c=e=>{const t=a.current&&!a.current.defaultPrevented;return a.current=void 0,t&&i.current!==document.activeElement&&i.current?.focus(),n.onMouseUp?.(e)};return r?(0,f.jsx)(Jt,{as:"a",ref:i,href:r,disabled:t,...n,onMouseDown:s,onMouseDownCapture:c}):(0,f.jsx)(Jt,{ref:i,type:e,disabled:t,...n,onMouseDown:s,onMouseUp:c})});var tr=r(4864);const rr=g.Ay.mark(({theme:e})=>g.AH`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);rr.defaultProps=$.qn;const nr=e=>(0,f.jsx)(rr,{...e});var or=r(3974);const ar={isItem:e=>(0,or.A)(e,"primary"),getItem(e,t){let r;return e.some(e=>this.isItem(e)&&e.id===t?(r=e,!0):!!e.items&&(r=this.getItem(e.items,t),!!r)),r},getPath(e,t){let r=[];return e.some(e=>{if(e.id===t)return r=[e],!0;if(e.items){const n=this.getPath(e.items,t);return n.length&&(r=n.concat(e)),!!r.length}return!1}),r},setItem(e,t,r){return e.map(e=>e.id===t?{...r}:e.items?{...e,items:this.setItem(e.items,t,r)}:e)},mapItem(e,t,r){return e.map((e,n,o)=>{let a=e;return e.items&&(a={...a,items:this.mapItem(e.items,t,r)}),this.isItem(a)&&e.id===t&&(a=r(a,n,o)),a})},mapTree(e,t){return e.map((e,r,n)=>{let o=e;return e.items&&(o={...o,items:this.mapTree(e.items,t)}),this.isItem(o)?t(o,r,n):o})},flatten(e,t=[],r={parentFirst:!1}){let n=[],o=[];return e.forEach(e=>{if(this.isItem(e)&&n.push(t.length>0?{...e,ancestors:t}:e),e.items){const a=this.flatten(e.items,[...t,e],r);r.parentFirst?o=[...o,...a]:n=[...n,...a]}}),r.parentFirst?[...n,...o]:n},toggleSelected(e,t,r,n){return this.mapTree(e,e=>{if(this.isItem(e)){if(e.id===t)return{...e,selected:void 0!==n?n:!e.selected};if("single-select"===r)return{...e,selected:!1}}return e})},selectItem(e,t,r){return this.toggleSelected(e,t,r,!0)},deselectItem(e,t,r){return this.toggleSelected(e,t,r,!1)},getSelected(e){return e.reduce((e,t)=>(this.isItem(t)&&t.selected&&(e=[...e,t]),t.items&&(e=[...e,...this.getSelected(t.items)]),e),[])},prependTo(e,t,r){return r?this.mapItem(e,r,e=>({...e,items:[...t,...e.items??[]]})):[...t,...e]},appendTo(e,t,r){return r?this.mapItem(e,r,e=>({...e,items:[...e.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let r;return this.mapItem(e,t,(e,t,n)=>(r=n[t+1],e)),r},getPrevItem(e,t){if(!t)return e[0];let r;return this.mapItem(e,t,(e,t,n)=>(r=n[t-1],e)),r},getParentItem(e,t){if(!t)return;const[,r]=this.getPath(e,t);return r}};var ir=r(2952);(0,g.Ay)(We)`
  align-self: center;
`;const sr=(0,g.Ay)(qe)``,cr=g.Ay.li(({theme:{base:e,components:t},isParentItem:r,itemLayout:n,mode:o="action","aria-selected":a=!1,selectableParent:i=!1})=>{const s=(0,S.A)(()=>(0,b.jh)(.85,e.palette["primary-background"],e.palette.interactive)),c=(0,S.A)(()=>(0,b.jh)(.95,e.palette["primary-background"],e.palette.interactive)),l=t["radio-check"][":checked"]["background-color"],d=(0,S.A)(()=>(0,P.W0)(l));return g.AH`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${"inline"===n&&g.AH`
        justify-content: flex-start;

        ${Rt} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${Ht}):has(${St}):has(${It}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${Ht}):has(${St}):not(:has(${It})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${Ht}):not(:has(${St})):has(${It}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${Ht}):not(:has(${St})):not(
              :has(${It})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Ht})):has(${St}):has(${It}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${Ht})):has(${St}):not(
              :has(${It})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Ht})):not(:has(${St})):has(
              ${It}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Ht})):not(:has(${St})):not(
              :has(${It})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${Et} {
            ${ir.EN};
          }

          & > ${St} {
            ${ir.EN};

            ul {
              li {
                ${ir.EN};
              }
              justify-content: end;
            }
          }

          & > ${It} > ${x} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${s};
      }

      &:hover {
        ${sr} {
          visibility: visible;
          ${"single-select"===o&&g.AH`
            ${a?g.AH`
                  color: ${l};
                `:g.AH`
                  visibility: hidden;
                `}
          `}
          ${"multi-select"===o&&g.AH`
            ${!a&&g.AH`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${c};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${r&&!i&&("multi-select"===o||"single-select"===o)&&g.AH`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${kt} {
        flex-grow: 1;
      }

      ${sr} {
        margin-inline-start: 0;
        ${"single-select"===o&&g.AH`
          ${a?g.AH`
                color: ${l};
              `:g.AH`
                visibility: hidden;
              `}
        `}
        ${"multi-select"===o&&g.AH`
          ${a?g.AH`
                color: ${d};
                background-color: ${l};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:g.AH`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});cr.defaultProps=$.qn;const lr=g.Ay.div`
  ${Le} {
    width: 1em;
    height: 1em;
  }

  & > ${Ce.D} {
    ${ir.EN};
  }
`,dr=(g.Ay.p`
  ${b.Ic}
`,g.Ay.li(({theme:e})=>g.AH`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `));dr.defaultProps=$.qn;const ur=g.Ay.div(({theme:e})=>g.AH`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);ur.defaultProps=$.qn;const mr=g.Ay.legend(({theme:{base:e}})=>{const t=(0,S.A)(()=>(0,b.jh)(.95,e.palette["primary-background"],e.palette.interactive)),r=(0,S.A)(()=>(0,b.jh)(.85,e.palette["primary-background"],e.palette.interactive));return g.AH`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${r};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${kt} {
      grid-column-gap: ${e.spacing};
    }

    ${Le} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});mr.defaultProps=$.qn;const pr=g.Ay.ul(({theme:e})=>g.AH`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${ut} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${ur} {
      margin-block-start: ${e.base.spacing};
    }
  `);pr.defaultProps=$.qn;const fr=g.Ay.fieldset(({theme:e})=>g.AH`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);fr.defaultProps=$.qn;const hr=(0,g.Ay)(fr)`
  min-width: 10rem;
`,gr=g.Ay.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,br=g.Ay.div(({theme:e})=>g.AH`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);br.defaultProps=$.qn;const $r=g.Ay.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return g.AH`
    display: flex;
    flex-direction: column;

    &,
    ${br} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${e.base.shadow["focus-inset"]};

      @media (forced-colors: active) {
        outline: 0.125rem solid Highlight;
        outline-offset: -0.125rem;
      }
    }

    ${Je}:first-child {
      + ${br}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});$r.defaultProps=$.qn;const yr=(0,ce.A)("menu",["create-new"]),vr=(0,ce.A)("menu-item",[]);Me(a,i,s);const Ar=({expandHandler:e})=>{const{end:t}=Ge(),r=(0,f.jsx)(qe,{name:`caret-${t}`});return e?(0,f.jsx)(We,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:r}):r},wr=({ancestors:e=[]})=>{const t=e.length>2,r=t?[e[0],e[e.length-1]]:e,{end:n}=Ge();return(0,f.jsx)(k,{container:{gap:.5,alignItems:"center"},as:lr,title:e.map(e=>ar.isItem(e)?e.primary:e.label).join(" > "),children:r.map((e,r,o)=>{const a=ar.isItem(e)?e.primary:e.label;return(0,f.jsxs)(h.Fragment,{children:[(0,f.jsx)(Ce.A,{variant:"secondary",children:a}),r<o.length-1&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ce.A,{variant:"secondary",children:(0,f.jsx)(qe,{name:`caret-${n}`})}),t&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ce.A,{variant:"secondary",children:"…"}),(0,f.jsx)(Ce.A,{variant:"secondary",children:(0,f.jsx)(qe,{name:`caret-${n}`})})]})]})]},e.id)})})},xr=(0,oe.A)(({testId:e,id:t,primary:r,secondary:n,ancestors:o,visual:a,count:i,items:s,selected:c,partial:l,href:d,tooltip:u,onClick:m,onExpand:p,disabled:g,role:b="menuitem",...$})=>{const y=H(),{mode:v,onItemClick:A,itemLayout:w,accent:x,variant:C,setFocusDescendant:j,getScopedItemId:E,arrowNavigationUnsupported:S}=(0,h.useContext)(ft),I=(0,ee.A)(e,vr),R="single-select"===v||"multi-select"===v,P=s&&"boolean"==typeof c,M=(0,h.useMemo)(()=>E(t),[t,E]),L=`${t}-count`,T=`${t}-secondary`,D=(0,h.useCallback)(e=>{if(e.detail>0){const t=e.target,r=t.getAttribute("role")===b?t:t.closest(`li[role="${b}"]`);r&&j(r)}m?.(t,e),A?.(t,e)},[m,A,t]),O=(0,h.useCallback)(e=>{p?.(t,e),e.stopPropagation()},[p,t]);let q;if(x&&!s){const e="function"==typeof x?x(r):x;q=(0,tr.A)(r,e,e=>(0,f.jsx)(nr,{children:e}))}const F=o?(0,f.jsx)(wr,{ancestors:o}):n&&(0,f.jsx)(yt,{items:n,id:T}),[_,B]=(0,z.A)(),N=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Lt,{ref:B,primary:q||(s?r:(0,f.jsx)(Ce.A,{children:r})),secondary:F,layout:w,visual:a,actions:s||i?(0,f.jsxs)(k,{container:{gap:1,alignItems:"center",justify:"center"},children:[void 0!==i&&(0,f.jsx)(Qt,{id:L,"aria-label":y("menu_item_count",[i]),children:i}),s&&(0,f.jsx)(Ar,{expandHandler:P?O:void 0})]}):void 0,container:{colGap:1}}),u&&(0,f.jsx)(me,{target:_,hideDelay:"none",showDelay:"short",children:u})]}),V=(0,h.useMemo)(()=>{const e=y("menu_collapsed",[r]);return s?y(S?"menu_item_shift_space_expand_collapse":"menu_item_expand_arrow",[e]):r},[c,r,s]),W=(0,h.useMemo)(()=>{let e;return n?(e=T,void 0!==i&&i>=0&&(e=`${e} ${L}`)):e=void 0!==i&&i>=0?L:"",e},[s,n,L,T]);return(0,f.jsxs)(k,{"data-testid":I.root,...$,container:{alignItems:"center",justify:"between",gap:1},id:M,as:cr,"aria-label":V,"aria-describedby":W,role:b,"aria-disabled":g,"data-expand":!!s,itemLayout:w,tabIndex:-1,disabled:g,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(!g)return s&&"boolean"!=typeof c?O(e):D(e)},onMouseEnter:"flyout"===C?O:void 0,href:d,mode:v,isParentItem:!!s,"aria-selected":!!c,selectableParent:P,children:[R&&(!s||P)&&(0,f.jsx)(sr,{name:"check"}),d&&!R?(0,f.jsx)(er,{href:d,tabIndex:"-1",children:N}):N]})},vr),kr=(e,t,r,n)=>{const o=!!e.firstElementChild?.matches("legend"),a=e.querySelectorAll([':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'].join(", "))[Math.max(Math.min(n-(o?2:1),r-1),0)];let i;if(a){const t=e.getBoundingClientRect().top,o=a.getBoundingClientRect(),s=e.querySelector(":scope > ul")?.scrollTop??0;let c=o.bottom;r>n&&(c=(o.top+o.bottom)/2),i=c-t+s}t.style.height=i?`${i}px`:""},Cr=({id:e,label:t,items:r,itemRole:n})=>{const{componentId:o}=(0,h.useContext)(ft),a=`${o}-${e}`;return(0,f.jsxs)("li",{role:"presentation",children:[(0,f.jsx)(k,{container:{alignItems:"center",pad:[.5,1]},as:ur,id:a,children:t}),(0,f.jsx)("ul",{role:"group","aria-labelledby":a,children:r.length>0&&r.map(e=>(0,h.createElement)(xr,{...e,key:e.id,role:n??"menuitem"}))})]})},jr=e=>Array.isArray(e.items),Hr=(0,h.forwardRef)(function({items:e,parent:t,menuRole:r},n){const o=H(),a=(0,E.A)(n),i=(0,h.useRef)(null),s=(0,h.useRef)(null),c=(0,h.useRef)(null),[l,d]=(0,h.useState)(),{componentId:u,loadMore:m,loading:p,scrollAt:g,emptyText:b,onItemExpand:$,pushFlyoutId:y,flyOutActiveIdStack:v,updateActiveDescendants:A,updateParentDescendantStack:w}=(0,h.useContext)(ft),{announcePolite:x}=He();tt(i,e.length-1,()=>{m?.(t?.item?.id)},":scope > li"),O(()=>{if(l){const t=e.find(e=>e.id===l.id);t&&jr(t)?d(t):d(void 0)}},[l,e]),(0,h.useEffect)(()=>{e.some(e=>v.includes(e.id))||(c.current=null,d(void 0))},[v]),(0,h.useEffect)(()=>{0!==e.length||p||x({message:b??o("no_items")})},[e.length,p]);const k=(0,h.useMemo)(()=>e.length?e.map(e=>ar.isItem(e)?(0,h.createElement)(xr,{...e,key:e.id,"aria-haspopup":!!e.items,"aria-expanded":e.items?e.id===l?.id:void 0,role:"listbox"===r?"option":"menuitem",onExpand:(t,r)=>{e.items?(c.current=r.currentTarget,d(jr(e)?e:void 0),e?.onExpand?.(t,r),$?.(t,r),y(e.id||u),A(),w&&w(c.current.closest("li"))):(c.current=null,d(void 0))}}):(0,h.createElement)(Cr,{...e,key:e.id,itemRole:"listbox"===r?"option":"menuitem"})):p?null:(0,f.jsx)(pt,{message:b,forwardedAs:"li"}),[e,p,b,l,v]),C=(0,f.jsxs)(pr,{ref:i,role:r,children:[k,p&&!l&&(0,f.jsx)(gr,{children:(0,f.jsx)(Pe,{placement:"local"})})]});(0,h.useLayoutEffect)(()=>{d(void 0),a.current&&(s.current=a.current.parentElement,kr(a.current,a.current,e.length,g))},[e]);const j=(0,h.useCallback)(()=>{l&&d(void 0)},[l]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(hr,{ref:a,onScroll:j,"data-flyout-menu-parent-id":u,"data-flyout-menu-id":t?.item.id||u,children:C}),l&&a.current&&(0,f.jsx)(J,{target:c.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:(0,f.jsx)(Hr,{items:l.items,parent:{el:a.current,item:l,siblingItems:e,setExpandedItem:d,returnFocusRef:c},menuRole:r})})]})}),Er=Hr,Sr=(e,t,r)=>{const{portalTarget:n}=(0,j.A)(),o=n?.ownerDocument?.defaultView||window,a=(0,h.useCallback)(e=>{const n=e.composedPath(),o=n[0];if(!(0,Ue.A)(o,Node))return;let a=0,i=1;for(;!(0,Ue.A)(n[a],Document);){const e=n[a],t=n[i];if(!e||!t)return;if((0,Ue.A)(t,DocumentFragment)||(0,Ue.A)(t,Document)){if(!(0,Ue.A)(e,Node)||!t.contains(e))return;a=i}else if((0,Ue.A)(e,DocumentFragment)){if(!(0,Ue.A)(t,Element)||t.shadowRoot!==e)return;a=i}i+=1}(0,F.A)(t).flatMap(e=>(0,Ue.A)(e,Element)||(0,Ue.A)(e,Document)||(0,Ue.A)(e,DocumentFragment)?[e,...(0,q.A)(e)]:[e]).every(e=>e!==o&&!e.contains(o))&&r(e)},[...t,r]);(0,h.useEffect)(()=>{const t=Array.isArray(e)?e:[e];return t.forEach(e=>o?.document?.addEventListener(e,a)),()=>{t.forEach(e=>o?.document?.removeEventListener(e,a))}},[e,a])};var Ir=r(9608),Rr=r(3029);const Pr="budicon",zr="drag",Mr=()=>(0,f.jsx)("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),Lr="0 0 25 25",Tr="budicon",Dr="arrow-micro-up-down",Or=()=>(0,f.jsx)("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),qr="0 0 25 25";Me(c),Me(l);const Fr=(0,g.Ay)(We)(({rotateIcon:e})=>g.AH`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${b.Ic};
    }

    ${e&&g.AH`
      ${Le} {
        transform: rotate(90deg);
      }
    `}
  `),_r=g.Ay.div(({theme:e})=>g.AH`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${e.base.animation.speed} ${e.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${e.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${e.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${e.base.palette.interactive};
    }

    ${Ne} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);_r.defaultProps=$.qn;const Br=(0,h.forwardRef)(function({onMouseDown:e,onKeyDown:t},r){const n=(0,E.A)(r),o=H(),[a,i]=(0,h.useState)(!1),[s,c]=(0,h.useState)(!1);Ze(()=>{i(!1),c(!1)});const l=t=>{const r=(0,Ir.A)(n);r&&(r.style.setProperty("user-select","none"),i(!0),e?.(t))};return(0,f.jsx)(_r,{onMouseDown:l,onMouseUp:()=>{const e=(0,Ir.A)(n);e&&(e.style.removeProperty("user-select"),i(!1))},ref:n,children:(0,f.jsx)(Fr,{tabIndex:0,icon:!0,label:a||s?void 0:o("resize"),"aria-label":o(a||s?"drag_handle_cancel_description":"drag_handle_activate_description"),onMouseDown:l,onKeyDown:e=>{"Space"===e.code&&(e.preventDefault(),c(!s)),t?.(e,s)},onBlur:()=>{c(!1)},rotateIcon:s,children:(0,f.jsx)(qe,{name:s?"arrow-micro-up-down":"drag"})})})}),Nr=(0,b.ir)(Rr.Y3),Vr=g.Ay.div(e=>{const{state:t,shadow:r,position:n,placement:o,transitionSpeed:a,size:i,resizeable:s,theme:c}=e;let l="horizontal",d="X",u="top";"top"!==o&&"bottom"!==o||(l="vertical",d="Y",u="left");const m="open"===t||"opening"===t?0:"100%",p=a||c.base.animation.speed;return g.AH`
    z-index: ${c.base["z-index"].drawer};
    position: ${n};
    ${o}: 0;
    ${u}: 0;
    height: ${"vertical"===l?i:"100%"};
    width: ${"horizontal"===l?i:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${p}, 0.0001s);
    transition-timing-function: ${c.base.animation.timing.ease};
    transform: ${"open"===t?"none":`translate${d}(${"top"===o||"left"===o?"-":""}${m})`};

    ${r&&g.AH`
      box-shadow: ${c.base.shadow.high};
    `}

    ${s&&g.AH`
      width: ${"horizontal"===l?"var(--resize-drawer-width)":"100%"};
    `}
  `});Vr.defaultProps=$.qn;const Wr=(0,h.forwardRef)(function(e,t){const{open:r=!1,shadow:n=!1,position:o="absolute",children:a,placement:i="right",transitionSpeed:s,size:c="100%",resizeable:l=!1,onAfterOpen:d,onAfterClose:u,onBeforeOpen:m,onBeforeClose:p,onOuterClick:g,nullWhenClosed:b=!1,...$}=e,y=(0,E.A)(t),{ltr:v,rtl:A}=Ge(),[w,x]=(0,h.useState)(r?"open":"closed");let k=Ye(w);k||(k=w),Sr("mousedown",[y],(0,h.useCallback)(()=>{r&&g?.()},[r,g])),(0,h.useEffect)(()=>{!r||"closed"!==w&&"closing"!==w?r||"open"!==w&&"opening"!==w?r&&"open"===w&&"open"!==k?d?.():r||"closed"!==w||"closed"===k||u?.():(p?.(),x("closing")):(m?.(),(0,pe.A)(y.current),x("opening"))},[r,w,k,m,p,d,u]);const C=(0,h.useCallback)(e=>{e.target===y.current&&"transform"===e.propertyName&&x(r?"open":"closed")},[r]),j=(0,h.useRef)();(0,h.useEffect)(()=>{if(!l||!y.current)return;const e=(0,Ir.A)(y);e&&(e.style.getPropertyValue("--resize-drawer-width")||e.style.setProperty("--resize-drawer-width",c))},[y.current]);const H=(0,h.useCallback)(e=>{const t=(0,Ir.A)(y),r=y.current?.getBoundingClientRect();if(!r||!t)return;j.current=e.clientX;const n=new AbortController;t.addEventListener("mousemove",e=>{if(!j.current||!r.width)return;const n=j.current,o="right"===i?n-e.clientX:e.clientX-n,a=Math.max(o+r.width,parseInt(Nr,10));t.style.setProperty("--resize-drawer-width",`clamp(${Nr}, ${a}px, ${Rr.m1})`)},{passive:!0,signal:n.signal}),t.addEventListener("mouseup",()=>{n.abort()},{once:!0})},[i]),S=(0,h.useCallback)((e,t)=>{if(!t)return;const r=(0,Ir.A)(y),n=document.documentElement.clientWidth*Rr.ph,o=y.current?.getBoundingClientRect();if(!o||!r)return;if("ArrowLeft"!==e.code&&"ArrowRight"!==e.code)return;e.preventDefault();const a=("ArrowLeft"===e.code?1:-1)*("right"===i?1:-1),s=Math.max(o.width+a*n,parseInt(Nr,10));r.style.setProperty("--resize-drawer-width",`clamp(${Nr}, ${s}px, ${Rr.m1})`)},[i]),I=l&&"open"===w&&("left"===i&&A||"right"===i&&v);return"closed"===w&&!r&&b?null:(0,f.jsxs)(Vr,{ref:y,position:o,shadow:n&&r,transitionSpeed:s,placement:i,size:c,resizeable:l,open:r,state:w,onTransitionEnd:C,...$,children:[a,I&&(0,f.jsx)(Br,{onMouseDown:H,onKeyDown:S})]})});Me(a,i);const Ur=({text:e,onClick:t})=>{const r=H(),{arrowNavigationUnsupported:n}=(0,h.useContext)(ft),{start:o}=Ge(),a=(0,h.useCallback)(e=>{"Enter"!==e.key&&e.key!==`Arrow${(0,Qe.A)(o)}`||t()},[t,o]);return(0,f.jsx)(k,{container:{alignItems:"center"},as:mr,onClick:t,onKeyDown:a,"data-collapse":"true","aria-expanded":!0,"aria-label":`${r("menu_expanded",[e||""])} ${r(n?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:(0,f.jsx)(Lt,{visual:(0,f.jsx)(qe,{name:`caret-${o}`}),primary:e})})},Zr=(e,t)=>{e.disabled=t;const r=e.querySelector("legend button");r&&(r.disabled=t)},Gr=(e,t)=>e.reduce((e,t)=>!ar.isItem(t)&&t.items?e+t.items.length+1:e+1,t?1:0),Kr=e=>e.flatMap(e=>ar.isItem(e)?e:[e,...e.items?e.items:[]]),Xr=(0,h.forwardRef)(function({items:e,parent:t,id:r,menuRole:n,...o},a){const i=H(),s=(0,h.useRef)(null),c=(0,E.A)(a),l=(0,h.useRef)(null),d=(0,h.useRef)(null),[u,m]=(0,h.useState)(!t),[p,g]=(0,h.useState)(),{scrollAt:b,"aria-label":$,loadMore:y,loading:v,emptyText:A,currentItemId:w,onItemExpand:x,focusControl:k,updateActiveDescendants:C,setFocusReturnEl:j,onItemCollapse:S,expandTo:I}=(0,h.useContext)(ft),{end:R}=Ge(),{announcePolite:P}=He();tt(l,e.length-1,()=>{v||y?.(t?.item?.id)},":scope > li"),(0,h.useLayoutEffect)(()=>{c.current&&!p&&(s.current=c.current.parentElement,kr(c.current,s.current,Gr(e,v),b))}),(0,h.useEffect)(()=>{t&&m(!0)},[]),O(()=>{if(p){const t=Kr(e).find(e=>e.id===p.id);t&&jr(t)?g(t):g(void 0)}},[p,e]),O(()=>{if(w){const t=Kr(e).find(e=>e.items?.length&&void 0!==ar.getItem(e.items,w));t&&(g(jr(t)?t:void 0),C({preventScroll:!0}))}},[w,e,t]),(0,h.useEffect)(()=>{if(I?.parentItemId){const t=Kr(e).find(e=>e.id===I.parentItemId);if(t)g(jr(t)?t:void 0),C({preventScroll:!0}),I.onComplete();else{const t=Kr(e).find(e=>e.items?.length&&void 0!==ar.getItem(e.items,I.parentItemId));t?g(jr(t)?t:void 0):I.onComplete()}}},[I,e,t]);const z=(0,h.useCallback)((t,r)=>{const n=ar.getItem(e,t);d.current=r.currentTarget,n&&jr(n)?g(n):g(void 0),n?.onExpand?.(t,r),x?.(t,r),C({preventScroll:!0})},[e]);(0,h.useEffect)(()=>{0!==e.length||v||P({message:A??i("no_items")})},[e.length,v]);const M=(0,h.useMemo)(()=>e.length?e.map((t,r)=>ar.isItem(t)?(0,h.createElement)(xr,{...t,key:t.id,role:"listbox"===n?"option":"menuitem",onExpand:t.items?z:void 0}):(0,f.jsxs)(h.Fragment,{children:[(0,f.jsx)(Cr,{...t,items:t.items.map(e=>e.items?{...e,onExpand:z}:e),itemRole:"listbox"===n?"option":"menuitem"}),e[r+1]&&ar.isItem(e[r+1])&&(0,f.jsx)(dr,{role:"separator"})]},t.id)):v?null:(0,f.jsx)(pt,{message:A,forwardedAs:"li"}),[e,v,A]),L=(0,f.jsxs)(pr,{id:p?void 0:r,ref:l,role:n,...o,children:[t&&(0,f.jsx)(Ur,{text:t.item.primary,onClick:()=>{m(!1)}}),M,v&&!p&&(0,f.jsx)(gr,{children:(0,f.jsx)(Pe,{placement:"local",liveConfig:{contextualLabel:$??i("menu")}})})]});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Wr,{"aria-hidden":!!p,as:fr,ref:c,open:u,style:{opacity:p?0:1},disabled:!!p,placement:R,onBeforeOpen:()=>{t&&(t.el.style.opacity="0"),c.current&&(c.current.style.opacity="1")},onAfterOpen:()=>{t&&Zr(t.el,!0)},onBeforeClose:()=>{t&&s.current&&(Zr(t.el,!1),t.el.style.opacity="1",kr(t.el,s.current,Gr(t.siblingItems),b)),c.current&&(c.current.style.opacity="0")},onAfterClose:()=>{if(t){k?.focus();const e=t.returnFocusRef.current;t.setExpandedItem(void 0),e&&j(e?.closest("li")),S?.(t.item.id),C()}},children:L}),p&&c.current&&(0,f.jsx)(Xr,{id:r,items:p.items,parent:{el:c.current,item:p,siblingItems:e,setExpandedItem:g,returnFocusRef:d},menuRole:n})]})}),Yr=Xr,Qr=(0,h.forwardRef)(function(e,t){const r=D(),{testId:n,id:o=r,items:a=[],itemLayout:i="stacked",onCreateNew:s,mode:c="action",accent:l,scrollAt:d=7,emptyText:u,onItemClick:m,onItemActive:p,onItemExpand:g,loadMore:b,onItemCollapse:$,loading:y=!1,currentItemId:v,header:A,footer:w,variant:x="drill-down",focusControlEl:k,arrowNavigationUnsupported:C,"aria-describedby":j,"aria-label":S,role:I="menu",listId:R,pauseDescendantEvaluation:P,menuList:z,handleRef:M,...L}=e,O=(0,ee.A)(n,yr),q=H(),{end:F,start:_}=Ge(),B=D(),N=(0,E.A)(t),V=(0,h.useRef)(0),[W,U]=(0,h.useState)(0),[Z,G]=(0,h.useState)(null),[K,X]=(0,h.useState)([o]),[Y,Q]=(0,h.useState)(),[J,te]=(0,h.useState)(!1),[re,oe]=(0,h.useState)([]),[ae,ie]=(0,h.useState)(),se=!k,ce=(0,h.useMemo)(()=>`fieldset[data-flyout-menu-id="${K[K.length-1]}"]`,[K]),le=(0,h.useMemo)(()=>k||N.current,[k,N.current]);(0,h.useImperativeHandle)(M,()=>({expandTo:e=>{ie(e)}}),[]);const de=(0,h.useCallback)(e=>{X([...K,e])},[K]);(0,h.useEffect)(()=>{X([...K,o])},[o]);const ue=(0,h.useCallback)(e=>{oe([...re,e])},[re]),me=(0,h.useCallback)(e=>btoa(encodeURIComponent(e)),[o]),pe=(0,h.useCallback)(e=>decodeURIComponent(atob(e)),[o]),fe=(0,h.useCallback)(({preventScroll:e=!1}={})=>{te(e),U(Math.random())},[]),he=(0,h.useMemo)(()=>({focusEl:le,scope:N.current,scopeSelector:"drill-down"===x?'fieldset[aria-hidden="false"]':ce,selector:`[role="${"menu"===I?"menuitem":"option"}"], legend`,focusDescendantEl:Z,clearFocusDescendant:()=>{G(null)},focusReturnEl:Y,clearFocusReturn:()=>{Q(null)},currentDescendantId:v?me(v):void 0,preventInitialScroll:J,clearPreventScroll:()=>{te(!1)},pauseDescendantEvaluation:P}),[le,N.current,ce,Y,Z,v,J,P]),{activeDescendant:ge,descendants:be}=(({focusEl:e,scope:t,scopeSelector:r,selector:n,orientation:o="vertical",focusDescendantEl:a,clearFocusDescendant:i,focusReturnEl:s,clearFocusReturn:c,currentDescendantId:l,onClick:d,preventInitialScroll:u,pauseDescendantEvaluation:m=!1,clearPreventScroll:p},f=[])=>{const[g,b]=(0,h.useState)(0),$=(0,h.useRef)(""),y=(0,h.useRef)(m),[v,A]=(0,h.useState)(null),[w,x]=(0,h.useState)(null),[k,C]=(0,h.useState)(),{rtl:j}=Ge(),H=(0,h.useCallback)(()=>{k?.forEach(e=>{e.setAttribute("data-current","false")})},[k]),E=(0,h.useCallback)(e=>{H(),C(e?Array.from(e).filter(e=>(0,Ue.A)(e,HTMLElement)):null)},[k]),S=(0,h.useCallback)(({clear:t}={clear:!1})=>{const r=[];if(k&&k.length&&k.forEach(e=>{e.id=e.id||(0,T.A)(),r.push(e.id)}),t){const t=e?.getAttribute("aria-owns")?.split(" "),n=t?.filter(e=>!r.includes(e));e?.setAttribute("aria-owns",n?.join(" ")||"")}else e?.setAttribute("aria-owns",r.join(" "))},[e,k]),I=(0,h.useCallback)(()=>{if(m)return;let e=t;if(e&&(0,Ue.A)(e,HTMLElement)){if(r&&(e=e.querySelector(r)),!e)return void E(null);if(n){const t=e.querySelectorAll(n);E(t)}else{const t=e.querySelectorAll(Ke.U);E(t)}}else E(null);null===w&&x(0)},[t,r,n,m,w]);return(0,h.useEffect)(()=>{y.current=m},[m]),(0,h.useEffect)(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",(0,ne.A)()===e?"true":"false");const r=()=>{t.setAttribute("data-active-scope","true")},n=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",r),e.addEventListener("blur",n),()=>{e.removeEventListener("focus",r),e.removeEventListener("blur",n)}},[t,e]),(0,h.useEffect)(()=>{m||I()},[m]),(0,h.useEffect)(()=>{const e=setTimeout(()=>{I(),y.current||x(0)},0);return()=>clearTimeout(e)},[...f]),(0,h.useEffect)(()=>{m?(H(),S({clear:!0})):(S(),b(Math.random()))},[m,e,k]),(0,h.useEffect)(()=>{const t=()=>{c?.(),p?.(),null!==w&&w+1<k.length?x(w+1):x(0)},r=()=>{c?.(),p?.(),x(null!==w&&w-1>-1?w-1:k.length-1)},n=e=>{k?.length&&(["ArrowDown","ArrowUp"].includes(e.key)&&"vertical"===o&&e.preventDefault(),["ArrowLeft","ArrowRight"].includes(e.key)&&"horizontal"===o&&e.preventDefault(),setTimeout(()=>{switch(e.key){case"ArrowDown":"vertical"===o&&t();break;case"ArrowUp":"vertical"===o&&r();break;case"ArrowRight":"horizontal"===o&&(j?r():t());break;case"ArrowLeft":"horizontal"===o&&(j?t():r());break;case"Enter":if(null!==w){if(d){d(k[w]);break}const e=k[w].nodeName.toLowerCase();Xe.includes(e)?k[w].click():k[w].querySelector(`${Xe.join(",")}`)?.click()}}},0))};return!m&&e&&k?.length&&!l&&e.addEventListener("keydown",n),()=>{e?.removeEventListener("keydown",n)}},[e,w,k,m]),(0,h.useEffect)(()=>{!m&&k&&l&&k.forEach((e,t)=>{e.id===l&&x(t)})},[l,k,m]),(0,h.useEffect)(()=>{if(y.current)return;const t=v||w,r=s?.id;let n;const o=a?.id;let l,d=!1;if(k&&k.length){if(k.forEach((e,t)=>{null===v&&e.id===o&&(l=t,d=!0,A(t)),e.id===r&&(n=t),e.setAttribute("data-current","false")}),n&&n!==w)return x(n),void c?.();if(d&&void 0!==l)return b(Math.random()),void x(l);if(null!==t&&k[t]){const r=k[t];if(r.setAttribute("data-current","true"),e?.setAttribute("aria-activedescendant",r.id),r.id!==$.current&&!u){const e=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;e?.call(r,!1)}null!==v&&(A(null),i?.()),$.current=r.id}}return()=>{e?.removeAttribute("aria-activedescendant")}},[k,w,a,e,g]),{activeDescendant:null!==w&&k?k[w]:void 0,descendants:k||null}})(he,[W]),$e=Ye(ge);(({loading:e,descendants:t,previousActiveDescendant:r,activeDescendant:n,focusReturnEl:o,setFocusReturnEl:a,scrollEl:i})=>{(0,h.useEffect)(()=>{if(e&&t&&t.length&&n){const e=[...t].pop();let r;return(e?.id||void 0)===n.id?(i&&(i.scrollTop=i.scrollHeight-i.offsetHeight),o?.id!==n.id&&(r=setTimeout(()=>{a(e)},0))):o?.id!==n.id&&(r=setTimeout(()=>{a(n)},0)),()=>clearTimeout(r)}},[e,t,r,n,i,o])})({loading:y,descendants:be,previousActiveDescendant:$e,activeDescendant:ge,focusReturnEl:Y,setFocusReturnEl:Q,scrollEl:he.scope?.querySelector(he.scopeSelector)?.querySelector("ul")}),(0,h.useEffect)(()=>{const e=(e=null)=>{if(ge){if("true"===ge.dataset.expand&&"collapse"!==e)return void(ge.querySelector('span[aria-hidden="true"]')??ge).click();if("expand"!==e)if("flyout"===x&&K.length>1&&re.length>0){X([...K].slice(0,-1));const e=re.pop();void 0!==e&&Q(e),fe()}else"true"===ge.dataset.collapse&&ge.click()}},t=t=>{switch(t.key){case`Arrow${(0,Qe.A)(F)}`:if(C)break;e("expand");break;case`Arrow${(0,Qe.A)(_)}`:if(C)break;e("collapse");break;case"Escape":if("flyout"===x&&K.length>1&&re.length>0){t.preventDefault(),t.stopPropagation(),X([...K].slice(0,-1));const e=re.pop();void 0!==e&&Q(e),fe()}}C&&(" "===t.key||"Spacebar"===t.key)&&t.shiftKey&&(t.preventDefault(),e())};return ge&&p?.(pe(ge.id)),le?.addEventListener("keydown",t),()=>le?.removeEventListener("keydown",t)},[le,ge,K]),(0,h.useEffect)(()=>{const e=setTimeout(()=>{if(a.length===V.current){const e=be?.map(e=>e.id),t=he.scope?.querySelector(he.scopeSelector)?.querySelectorAll(he.selector);if(!t)return void fe();const r=Array.from(t);return r?.length!==e?.length?void fe():void(r.every((t,r)=>t.id===e[r])||fe())}V.current=a.length,fe()},0);return()=>clearTimeout(e)},[a]);const ye=(0,h.useMemo)(()=>({componentId:o,"aria-label":S,mode:c,arrowNavigationUnsupported:C,onItemClick:(e,t)=>{se&&N.current?.focus(),m?.(e,t)},onItemActive:p,onItemExpand:g,onItemCollapse:$,itemLayout:i,accent:l,scrollAt:d,emptyText:u,radioName:B,loadMore:b,loading:y,variant:x,focusControl:le,updateActiveDescendants:fe,setFocusReturnEl:Q,setFocusDescendant:G,getScopedItemId:me,pushFlyoutId:de,flyOutActiveIdStack:K,updateParentDescendantStack:ue,expandTo:{parentItemId:ae,onComplete:()=>{ie(void 0)}}}),[o,S,c,C,m,p,g,$,i,l,d,u,B,b,y,x,le,fe,Q,G,me,de,K,ue,ae]),ve=z??("drill-down"===x?(0,f.jsx)(Yr,{items:a,id:R,menuRole:I,"aria-multiselectable":"multi-select"===c,"aria-labelledby":S?`${o}-menuLabel`:void 0}):(0,f.jsx)(Er,{items:a,menuRole:I}));return(0,f.jsxs)($r,{"data-testid":O.root,id:o,"aria-describedby":se?`${o}-menuDescription`:void 0,...L,ref:N,tabIndex:se?0:void 0,children:[se&&(0,f.jsx)("span",{id:`${o}-menuDescription`,hidden:!0,children:`${q("menu_selection_instructions")} `&&j||""}),S&&(0,f.jsx)(et,{id:`${o}-menuLabel`,children:S}),A&&(0,f.jsx)("header",{"data-popover-scroll-el":!0,children:A}),(0,f.jsx)(br,{"data-popover-scroll-el":!0,children:(0,f.jsx)(ft.Provider,{value:ye,children:ve})}),(s||w)&&(0,f.jsx)("footer",{"data-popover-scroll-el":!0,children:s?(0,f.jsxs)(We,{"data-testid":O.createNew,variant:"link",onClick:s,children:[(0,f.jsx)(qe,{name:"plus"})," ",q("create_new")]}):w})]})}),Jr=(0,oe.A)(Qr,yr),en="budicon",tn="arrow-micro-down",rn=()=>(0,f.jsx)("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),nn="0 0 25 25",on=(0,ce.A)("menu-button",[]);Me(d);const an=g.Ay.button(({theme:{base:{spacing:e}}})=>g.AH`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${U} + ${Ne} {
        margin-inline-start: ${e};
      }
    `);an.defaultProps=$.qn;const sn=g.Ay.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":r,"finger-min":n}},components:{icon:{size:{s:o}}}}=e;return g.AH`
    max-width: 100%;

    ${t&&g.AH`
      padding-inline-start: calc((${r} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${n} - ${o} * 2);
      }
    `}

    ${Ce.D} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${Le}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),cn=(0,g.Ay)(J)`
  min-width: 20ch;
`,ln=(0,h.forwardRef)(function(e,t){const r=D(),{testId:n,id:o=r,text:a,menu:i,popover:s,onClick:c,icon:l,count:d,iconOnly:u=!1,showArrow:m=!1,...p}=e,g=(0,ee.A)(n,on),[b,$]=(0,h.useState)(!1),y=(0,E.A)(t),v=(0,E.A)(s?.ref),A=(0,E.A)(i?.ref);((e,t)=>{const[r,n]=(0,h.useState)(!1),o=(0,h.useRef)(null),{portalTarget:a}=(0,j.A)(),i=(0,h.useRef)();(0,h.useEffect)(()=>()=>{i.current?.abort()},[]);const s=(0,h.useCallback)(s=>{if(!r)return;const c=(0,Ue.A)(s,FocusEvent)?s.relatedTarget:null,l=(0,F.A)(e).flatMap(e=>[e,...(0,q.A)(e)]);if((0,Ue.A)(c,Node)){const e=l.find(e=>e?.contains(c));if(e)return void(o.current=e)}const d=new AbortController,u=e=>{l.some(t=>e.composedPath().some(e=>(0,Ue.A)(e,Node)&&t.contains(e)))||(n(!1),t?.(!1,o.current),o.current=null),d.abort()};(l[0]??a)?.getRootNode({composed:!1}).addEventListener("focusin",u,{once:!0,signal:d.signal}),(l[0]??a)?.getRootNode({composed:!0}).addEventListener("mouseup",u,{once:!0,signal:d.signal});const m=()=>{n(!1),t?.(!1,o.current),o.current=null,d.abort()};try{window.parent?.document.addEventListener("focusin",m,{once:!0,signal:d.signal}),window.parent?.document.addEventListener("mouseup",m,{once:!0,signal:d.signal})}catch{}i.current=d},[r,t,e]),c=(0,h.useCallback)(e=>{if(!r){n(!0);const r=e.currentTarget;t?.(!0,r),o.current=r}},[r,t]);(0,h.useEffect)(()=>{const t=(e=>(0,F.A)(e).flatMap(e=>[e,...(0,q.A)(e)]).filter(e=>(0,Ue.A)(e,HTMLElement)))(e);t.forEach(e=>{e?.contains(document.activeElement)&&c(new FocusEvent("focusin",{relatedTarget:document.activeElement}))})},[]),(0,h.useEffect)(()=>{const t=(0,F.A)(e);return t.forEach(e=>{e?.addEventListener("focusin",c),e?.addEventListener("popover:focusin",c),e?.addEventListener("focusout",s),e?.addEventListener("popover:focusout",s)}),()=>{t.forEach(e=>{e?.removeEventListener("focusin",c),e?.removeEventListener("popover:focusin",c),e?.removeEventListener("focusout",s),e?.removeEventListener("popover:focusout",s)})}},[e,c,s])})([v,y],(0,h.useCallback)(e=>{e||$(!1)},[])),Ze(e=>{b&&($(!1),e.stopPropagation())},y),Ze(e=>{b&&($(!1),e.stopPropagation(),y.current?.focus())},i?.focusControlEl);const{rtl:w}=Ge();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(We,{"data-testid":g.root,as:an,"aria-label":a,...p,id:o,ref:y,"aria-expanded":b,"aria-haspopup":"menu","aria-controls":b?`${o}-popover`:void 0,label:u&&!b?a:void 0,onClick:e=>{const t=e.detail>0;b?t&&$(!1):$(!0),b&&!t||c?.(e)},icon:u,children:(0,f.jsxs)(k,{as:sn,container:{alignItems:"center",gap:1},padIcon:u&&m,children:[l&&(0,f.jsx)(qe,{name:l}),!u&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Ce.A,{children:a}),"number"==typeof d&&(0,f.jsx)(Qt,{children:d})]}),(!u||m)&&(0,f.jsx)(qe,{name:"arrow-micro-down"})]})}),(0,f.jsx)(cn,{placement:w?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...s,id:`${o}-popover`,show:!!i&&b,target:y.current,ref:v,children:i&&(0,f.jsx)(Jr,{testId:g.root,...i,ref:A,items:i.items,onItemClick:(e,t)=>{"multi-select"!==i.mode&&$(!1),i.onItemClick?.(e,t)},focusControlEl:i.focusControlEl||y.current||void 0})})]})}),dn=(0,oe.A)(ln,on),un=(0,h.forwardRef)(function({"data-testid":e,items:t,menuAt:r=2,scrollAt:n,iconOnly:o=!0,menuButtonProps:a,contextualLabel:i,compact:s=!1,disabled:c=!1,tabIndex:l},d){const u=H(),m=(0,E.A)(d);return t&&0!==t.length?t.length>=r?(0,f.jsx)(dn,{...e?{"data-testid":e}:{},ref:m,text:u("actions"),"aria-label":i&&u("actions_for",[i]),iconOnly:!0,icon:"more",variant:"simple",compact:s,onClick:a?.onClick,onKeyDown:a?.onKeyDown,disabled:c,tabIndex:l,menu:{scrollAt:n,items:t.map(({text:e,onClick:t,...r})=>({...r,primary:e,onClick:t?(e,r)=>{t(e,r,m.current??void 0)}:void 0}))}}):(0,f.jsx)(f.Fragment,{children:t.map(({id:t,icon:r,text:n,onClick:a,...l})=>(0,h.createElement)(We,{...e?{"data-testid":e}:{},key:t,variant:r&&o?"simple":void 0,onClick:e=>a?.(t,e),label:r?n:void 0,icon:!!r&&o,compact:s,"aria-label":i?`${n} - ${i}`:n,disabled:c,...l},r&&o?(0,f.jsx)(qe,{name:r}):n))}):null}),mn=g.Ay.label(({theme:e,labelHidden:t})=>{const{"foreground-color":r}=e.components.label,n=(0,S.A)(()=>t?b.Ic:(0,b.B3)((0,P.W0)(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),o=(0,P.Vr)(e.base["font-size"],e.base["font-scale"]);return t?b.Ic:g.AH`
          max-width: max-content;
          font-size: ${o[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${"auto"===r?n:r};
        `});mn.defaultProps=$.qn;const pn=(0,h.forwardRef)(function({children:e,labelHidden:t=!1,htmlFor:r,...n},o){return(0,f.jsx)(mn,{ref:o,labelHidden:t,htmlFor:""===r?void 0:r,...n,children:e})}),fn="budicon",hn="warn-solid",gn=()=>(0,f.jsx)("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),bn="0 0 25 25",$n="budicon",yn="diamond-minus",vn=()=>(0,f.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),An="0 0 25 25";var wn=r(9418),xn=r(49);const kn=(0,ce.A)("html",[]),Cn=(0,wn.A)(),jn=g.AH`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,Hn=g.Ay.div(({theme:e})=>g.AH`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${(e=>{const{base:{"font-size":t,"font-scale":r,palette:n},components:{text:o}}=e,a=(0,P.Vr)(t,r);return`\n    ${jn}\n    table {\n      ${(e=>g.AH`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`)(e)}\n    }\n    img {\n      max-width: 100%;\n      height: auto;\n      border-radius: 0.25rem;\n    }\n    a {\n      color: ${n.interactive};\n    }\n    pre {\n      white-space: break-spaces;\n    }\n    p {\n      min-height: ${a[o.primary["font-size"]]};\n    }\n    h1 {\n      font-size: ${a[o.h1["font-size"]]};\n      font-weight: ${o.h1["font-weight"]};\n      min-height: ${a[o.h1["font-size"]]};\n    }\n    h2 {\n      font-size: ${a[o.h2["font-size"]]};\n      font-weight: ${o.h2["font-weight"]};\n      min-height: ${a[o.h2["font-size"]]};\n    }\n    h3 {\n      font-size: ${a[o.h3["font-size"]]};\n      font-weight: ${o.h3["font-weight"]};\n      min-height: ${a[o.h3["font-size"]]};\n    }\n    h4 {\n      font-size: ${a[o.h4["font-size"]]};\n      font-weight: ${o.h4["font-weight"]};\n      min-height: ${a[o.h4["font-size"]]};\n    }\n    h5 {\n      font-size: ${a[o.h5["font-size"]]};\n      font-weight: ${o.h5["font-weight"]};\n      min-height: ${a[o.h5["font-size"]]};\n    }\n    h6 {\n      font-size: ${a[o.h6["font-size"]]};\n      font-weight: ${o.h6["font-weight"]};\n      min-height: ${a[o.h6["font-size"]]};\n    }\n  `})(e)}

    ${U} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${U} li {
      margin: 0;
    }
  `);if(Hn.defaultProps=$.qn,Cn.isSupported){const e=new WeakSet;Cn.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),"A"===t.tagName&&t.hasAttribute("href")&&"_blank"===t.getAttribute("target")&&e.add(t))}),Cn.addHook("afterSanitizeAttributes",t=>{if("A"===t.tagName&&t.hasAttribute("href")){const r=t.getAttribute("href");let n;try{n=new URL(r,window.location.href)}catch(e){return}window.location.origin!==n.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const En=(0,h.forwardRef)(function({testId:e,content:t,customTags:r,...n},o){const[a,i]=(0,h.useState)(!1),s=(0,h.useMemo)(()=>a&&Cn.isSupported?Cn.sanitize(t,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?e=>r.includes(e):void 0},ALLOWED_URI_REGEXP:xn.A}):"",[t,r,a]),c=(0,ee.A)(e,kn);return(0,h.useEffect)(()=>{i(!0)},[]),(0,f.jsx)(Hn,{"data-testid":c.root,...n,dangerouslySetInnerHTML:{__html:s},ref:o})}),Sn=(0,oe.A)(En,kn),In=g.Ay.div``,Rn=g.Ay.div``,Pn=g.Ay.div(({theme:e})=>g.AH`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${Rn} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);Pn.defaultProps=$.qn,g.Ay.div``;const zn=(0,g.Ay)(J)(({theme:e})=>g.AH`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${Pn} {
        overflow: hidden;
      }
    }
  `);zn.defaultProps=$.qn;const Mn=(0,h.forwardRef)(function({arrow:e=!0,target:t,portal:r,strategy:n,placement:o,children:a,progress:i,focusTrap:s=!0,...c},l){const d=(0,E.A)(l);return((e,t=!0,r=[],n=!0)=>{const o=(0,h.useCallback)(t=>{if(e?.current&&"Tab"===t.key){const r=(0,Ke.A)(e),{0:o,[r.length-1]:a}=r,i=(0,ne.A)();if((i===e.current||!e.current.contains(i)||e.current.contains(i)&&!r.includes(i))&&n)if(t.preventDefault(),i){const r=(0,Ke.A)(e,{includeActiveEl:!0}),n=r.findIndex(e=>e===i);-1!==n?t.shiftKey?r[(n-1+r.length)%r.length].focus():r[(n+1)%r.length].focus():t.shiftKey?a?.focus():o?.focus()}else t.shiftKey?a?.focus():o?.focus();else t.shiftKey&&i===o?(t.preventDefault(),a?.focus()):t.shiftKey||i!==a||(t.preventDefault(),o?.focus())}},r);_("keydown",o,{target:t?void 0:e})})(s?d:null,!1),(0,f.jsx)(zn,{...c,role:"dialog",arrow:e,"aria-modal":!1,"aria-busy":!!i,ref:d,target:t,portal:r,strategy:n,placement:o,children:a})}),Ln=(0,g.Ay)(We)``,Tn=(0,g.Ay)(Mn)(({theme:e})=>g.AH`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${Pn} > ${Ln} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);Tn.defaultProps=$.qn;const Dn=(0,h.forwardRef)(function({target:e,heading:t,children:r,progress:n,onDismiss:o,...a},i){const s=H(),c=D(),l=(0,E.A)(i),d=(0,h.useRef)(null),u=(0,h.useRef)(null),m=((e,t,r,n=[])=>{const[o,a]=(0,h.useState)(void 0);return(0,h.useEffect)(()=>{if(!t.current)return;const n=requestAnimationFrame(()=>{const n=t.current;if(!n)return void a(void 0);if(0===n.clientHeight&&0===n.clientWidth)return void a(void 0);const o=(0,Ke.A)(e).some(e=>n.contains(e)&&e!==n&&!r?.some(t=>t.current===e)),i=window.getComputedStyle(n),s="auto"===i.overflowY||"scroll"===i.overflowY,c="auto"===i.overflowX||"scroll"===i.overflowX,[l,d]=(0,K.A)(n);a(!o&&(s&&d||c&&l)?0:void 0)});return()=>{cancelAnimationFrame(n)}},n),o})(l,d,[u],[n]);Ze(e=>{o?.(),e.stopPropagation()},l,[o]),Sr("mousedown",[e,l],()=>{o?.()}),(0,h.useLayoutEffect)(()=>{const e=(0,ne.A)();return()=>{e instanceof HTMLElement&&e.isConnected&&e.focus()}},[]),(0,h.useEffect)(()=>{n||(()=>{if(n)return;const e=(0,Ke.A)(l),t=e.find(e=>d.current?.contains(e))??u.current??e[0];t?.focus()})()},[n]),(0,h.useEffect)(()=>{const t=()=>{setTimeout(()=>{o?.()},0)};return e.addEventListener("click",t),()=>{e.removeEventListener("click",t)}},[]);const p=t?(0,f.jsx)(Ce.A,{id:c,variant:"h2",children:"string"==typeof t?t:t.primary}):null,g=(0,f.jsx)(Pe,{visible:!!n,focusOnVisible:!0,placement:"local",message:"string"==typeof n?n:void 0}),b=(0,f.jsx)(Ln,{icon:!0,variant:"simple",onClick:()=>{o()},label:s("close"),ref:u,children:(0,f.jsx)(qe,{name:"times"})});return(0,f.jsxs)(Tn,{...a,..."string"==typeof t?{"aria-labelledby":c}:{"aria-label":t?.primary},arrow:!0,target:e,progress:n,ref:l,children:[t&&p&&(0,f.jsxs)(k,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:Rn,children:["string"==typeof t?p:(0,f.jsx)(Lt,{primary:p,secondary:t.secondary?(0,f.jsx)(Ce.A,{variant:"secondary",children:t.secondary}):void 0,visual:t.visual}),b]}),(!t||r||n)&&(0,f.jsxs)(k,{container:{direction:"column"},item:{grow:1},as:Pn,ref:d,tabIndex:m,children:[!t&&b,r&&(0,f.jsx)(In,{inert:n?"":void 0,children:r}),g]})]})}),On="budicon",qn="information",Fn=()=>(0,f.jsx)("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),_n="0 0 25 25";Me(p);const Bn=g.Ay.div``,Nn=(0,h.forwardRef)(function(e,t){const r=H(),{heading:n=r("additional_info"),contextualLabel:o,children:a,dialogHandle:i,...s}=e,[c,l]=(0,h.useState)(null),d=(0,h.useRef)(null),u=(0,E.A)(i);return(0,h.useImperativeHandle)(u,()=>({open:()=>{l(d.current)},close:()=>{l(null)}})),(0,f.jsxs)(k,{container:!0,as:Bn,ref:t,...s,children:[(0,f.jsx)(We,{variant:"simple",label:r("additional_info"),compact:!0,icon:!0,ref:d,onClick:()=>{u.current?.open()},"aria-label":`${r("additional_info")} - ${o??n}`,children:(0,f.jsx)(qe,{name:"information"})}),c&&(0,f.jsx)(Dn,{heading:n,target:c,onDismiss:()=>{u.current?.close()},children:"string"==typeof a?(0,f.jsx)(Sn,{content:a}):a})]})}),Vn=g.Ay.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":r,animation:{speed:n,timing:o},palette:a},components:{"form-field":i,"form-control":{"foreground-color":s,"background-color":c,"border-color":l,"border-radius":d,"border-width":u,":hover":{"border-color":m},":focus":{"border-color":p,"box-shadow":f},":disabled":{"border-color":h,"background-color":$},":read-only":{"border-color":y,"background-color":v}}}},status:A,hasSuggestion:w})=>{const x=(0,P.Vr)(t,r),k=A&&i[A]?i[A]["status-color"]:l,C=w&&A?(0,b.jh)(.1,i[A]["status-color"],a["primary-background"]):c;return g.AH`
      color: ${s};
      background-color: ${C};
      border-radius: calc(${e} * ${d});
      border-color: ${k};
      border-width: ${u};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${n};
      transition-timing-function: ${o.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${$};
        border-color: ${h};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${p};
        box-shadow: ${f};
        ${w&&g.AH`
          background-color: ${c};
        `}
      }

      &:focus-within:not([disabled]) {
        ${w&&g.AH`
          background-color: ${c};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!A&&g.AH`
          border-color: ${m};
        `}
        ${w&&g.AH`
          background-color: ${c};
          box-shadow: 0 0 0 0.125rem ${(0,b.B3)(k,.2)};
        `}
      }

      ${w&&g.AH`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${v};
        border-color: ${y};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${x.s}, 16px);
      }
    `});Vn.defaultProps=$.qn,(0,h.forwardRef)(function(e,t){return(0,f.jsx)(Vn,{ref:t,...e})});const Wn=g.Ay.span`
  display: none;
`,Un=(0,h.forwardRef)(function(e,t){const{portalTarget:r}=(0,j.A)();return r?(0,M.createPortal)((0,f.jsx)(Wn,{...e,ref:t}),r):null}),Zn=["label","info","additional-info","suggestion-accept","suggestion-reject"],Gn=(0,ce.A)("form-field",Zn),Kn=(0,ce.A)("radio-check",["control",...Zn]),Xn=g.Ay.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":r,"radio-check":{size:n,"touch-size":o,"background-color":a,"border-color":i,"border-width":s}}},status:c}=e;let l=i;return"error"!==c&&"warning"!==c||(l=r[c]["status-color"]),g.AH`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${n};
      height: ${n};
      margin-inline-end: calc(0.5 * ${t});
      border: ${s} solid ${l};
      background-color: ${a};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});Xn.defaultProps=$.qn;const Yn=g.Ay.input(e=>{const{disabled:t,theme:{base:{"border-radius":r},components:{"form-control":{":focus":{"box-shadow":n,"border-color":o},":read-only":{"background-color":a}},"radio-check":{size:i,":checked":{"background-color":s,"border-color":c}},checkbox:{"border-radius":l},"radio-button":{"border-radius":d}}}}=e,u=e.readOnly?a:s,m=(0,S.A)(()=>(0,P.W0)(u)),p=`+ ${mn} ${Xn}`,{ltr:f}=Ge();return g.AH`
    ${b.Ic}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${i};
    height: ${i};

    ${!t&&g.AH`
      &:focus ${p} {
        box-shadow: ${n};
        border-color: ${o};
      }
    `}
    &:checked
      ${p},
      &:checked:disabled
      ${p},
      &[type='checkbox']:indeterminate
      ${p},
      &[type='checkbox']:indeterminate:disabled
      ${p} {
      border-color: ${e.readOnly?"inherit":c};
      background-color: ${u};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${p}, &[type='radio'] ${p}::after {
      border-radius: ${d};
    }

    &[type='radio'] ${p}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${i} * 0.3);
      height: calc(${i} * 0.3);
      border-radius: ${d};
      border: calc(${i} * 0.2) solid ${m};
    }

    &[type='checkbox'] ${p} {
      border-radius: min(calc(${r} * ${l}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${p} {
      &::after {
        width: 40%;
        height: 75%;
        ${f?g.AH`
              transform: rotate(45deg) translate(50%, -30%);
            `:g.AH`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${m};
        border-bottom: 0.15em solid ${m};
      }
    }

    &[type='checkbox']:indeterminate ${p} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${m};
      }
    }
  `});Yn.defaultProps=$.qn;const Qn=g.Ay.div(e=>{const{disabled:t,readOnly:r,theme:{base:n,components:{"radio-check":{label:{color:o,"font-weight":a}},"form-control":{":hover":{"border-color":i}}}}}=e,s=(0,P.Vr)(n["font-size"],n["font-scale"]);return g.AH`
      > ${mn} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${a};
        word-break: break-word;
        font-size: ${s.s};
        color: ${o};
        margin: 0;
        min-height: ${n["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${n["hit-area"]["finger-min"]};
        }
      }

      > ${no} {
        margin: 0;
        padding-inline-start: calc(${n.spacing} / 4);
      }

      ${!(t||r)&&g.AH`
        &:not(:focus-within) > ${mn}:hover ${Xn} {
          border-color: ${i};
        }
      `}
    `});Qn.defaultProps=$.qn;const Jn=g.Ay.label(({disabled:e,readOnly:t,status:r,theme:{base:{palette:n,shadow:o,spacing:a},components:{card:i,"form-field":s,"radio-check":{label:c},"form-control":{":hover":{"border-color":l}}}}})=>{const d="error"===r?s.error["status-color"]:n["border-line"];return g.AH`
      min-width: min-content;
      cursor: pointer;
      background-color: ${i.background};
      border-radius: ${i["border-radius"]};
      border: 0.0625rem solid ${d};
      padding: ${a};

      ${e&&g.AH`
        cursor: not-allowed;
      `}
      ${!(e||t)&&g.AH`
        :hover:not(:focus-within) {
          border-color: ${l};

          ${mn} ${Xn} {
            border-color: ${l};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${mn} {
        display: flex;
        align-items: center;
        color: ${c.color};
        font-weight: ${c["font-weight"]};
        margin: 0;
      }

      > ${no} {
        margin: 0;
        padding-inline-start: calc(${a} / 4);
      }
    `});Jn.defaultProps=$.qn;const eo=(0,h.forwardRef)(function(e,t){const r=D(),n=H(),{testId:o,type:a,id:i=r,label:s,required:c=!1,disabled:l=!1,readOnly:d=!1,indeterminate:u=!1,checked:m,defaultChecked:p,variant:g="simple",onClick:b,onKeyDown:$,onChange:y,status:v,info:A,additionalInfo:w,ariaDescribedby:x,suppressAnnouncements:k,className:C,...j}=e,S=(0,ee.A)(o,Kn),I="radio"===a,P="card"===g,z=(0,E.A)(t),M=D();return(0,h.useEffect)(()=>{!I&&z.current&&(z.current.indeterminate=!!u)},[z,u,I]),(0,h.useEffect)(()=>{if(!z.current)return;const e=z.current.nextSibling;if("LABEL"!==e?.nodeName.toUpperCase())return;const t=new AbortController;return e.addEventListener("mousedown",e=>{z.current===(0,ne.A)()&&e.preventDefault()},{signal:t.signal}),()=>{t.abort()}},[]),(0,f.jsx)(lo,{testId:S,as:P?Jn:Qn,label:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(Xn,{status:v,isRadio:I,as:Vn,required:c,disabled:l,readOnly:d}),s,d&&(0,f.jsx)(Un,{id:M,children:n("read_only")})]}),labelAs:P?"div":void 0,id:i,required:c,disabled:l,readOnly:d,status:v,info:A,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:w,suppressAnnouncements:k,children:(0,f.jsx)(Yn,{"data-testid":S.control,...j,className:(0,R.A)("radio-check",C,{variant:g,type:a}),id:i,type:a,required:c,checked:m,defaultChecked:p,"aria-describedby":d?`${x} ${M}`:x,disabled:l,readOnly:d,onChange:y,onClick:e=>{d&&e.preventDefault(),b?.(e)},onKeyDown:e=>{"checkbox"===a&&d&&" "===e.key&&e.preventDefault(),"radio"===a&&d&&e.key.includes("Arrow")&&e.preventDefault(),$?.(e)},ref:z})})});(0,oe.A)(eo,Kn),Me(u,m,s);const to=(0,g.Ay)(qe)(({theme:e,status:t})=>g.AH`
    height: 1em;
    width: 1em;
    color: ${(0,S.A)(()=>(0,P.ho)(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);to.defaultProps=$.qn;const ro=(0,g.Ay)(We)(({theme:e})=>g.AH`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);ro.defaultProps=$.qn;const no=g.Ay.div(({status:e,theme:{base:{"font-size":t,"font-scale":r,spacing:n,palette:o},components:{"form-field":a}}})=>{const{xxs:i}=(0,P.Vr)(t,r);return g.AH`
      max-width: max-content;
      font-size: ${i};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${n});
      }

      ${e&&a[e]&&g.AH`
        color: ${(0,S.A)(()=>(0,P.ho)(a[e]["status-color"],o["primary-background"]),()=>a[e]["status-color"])};
      `}
    `});no.defaultProps=$.qn;const oo=g.Ay.div``,ao=g.Ay.div(e=>{const{asFieldset:t,showAdditionalInfo:r,disabled:n,required:o,theme:{base:{palette:{urgent:a},"disabled-opacity":i,spacing:s,"hit-area":{"compact-min":c}}}}=e;return g.AH`
    ${n&&g.AH`
      opacity: ${i};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${Yn}:only-of-type) {
      ${no} {
        min-width: 100%;
      }
    }

    ${x}:has(${Qn}) {
      flex-shrink: 0;
    }

    > ${mn}, > ${oo}, > ${x}:has(> ${mn}) {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${s});
        min-height: ${c};
      }
    }

    > ${mn}, > ${oo} > ${mn}, > ${x} > ${mn} {
      ${o&&g.AH`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${a};
        }
      `}

      ${n&&g.AH`
        cursor: not-allowed;
      `}
    }

    ${t&&r&&g.AH`
      > ${x} > ${mn} {
        display: block;
      }

      > ${x}:has(> ${mn}) > ${Bn} {
        align-self: flex-start;
      }
    `}
  `});ao.defaultProps=$.qn;const io=(0,g.Ay)(We)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":r,spacing:n,palette:o},components:{"form-control":{"border-radius":a,"border-width":i},"form-field":s}}})=>{const{xxs:c}=(0,P.Vr)(e,t),l=(0,S.A)(()=>(0,P.ho)(s.pending["status-color"],o["primary-background"]),()=>s.pending["status-color"]),d=(0,P.ZV)(l),u=(0,S.A)(()=>(0,P.W0)(l)),m=u?(0,b.B3)(u,.4):u;return g.AH`
    background-color: ${l};
    color: ${u};
    font-size: ${c};
    min-width: calc(3 * ${n});
    min-height: calc(3 * ${n});
    padding: 0 ${n};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${i} solid ${m};
      border-end-start-radius: calc(${r} * ${a});
      margin-inline-start: calc(2 * ${n});
    }

    &:last-child {
      border-end-end-radius: calc(${r} * ${a});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${d.foreground};
      background-color: ${d.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});io.defaultProps=$.qn;const so={error:"warn-solid",warning:"diamond-minus",success:"check"},co=(0,h.forwardRef)(function(e,t){const r=D(),{testId:n,children:o,id:a=r,as:i="div",label:s,labelAs:c="label",labelFor:l=a,labelId:d,labelHidden:u=!1,labelAfter:m=!1,info:p,status:g,suppressAnnouncements:b,isRadioCheck:$,charLimitDisplay:y,required:v=!1,disabled:A=!1,readOnly:w=!1,inline:x=!1,onClear:C,actions:j,container:S,additionalInfo:I,onResolveSuggestion:P,"aria-describedby":z,className:M,...L}=e,T=(0,ee.A)(n,Gn),O="fieldset"===i||"string"!=typeof i&&"target"in i&&"fieldset"===i.target,q=H(),{announceAssertive:F}=He(),_=O||"legend"===c?"span":c,B="pending"===g&&!!P,N=(0,E.A)(t),V=(0,h.useRef)(null),[W,U]=(0,h.useState)(null),Z=!!I&&!A&&!u,G=O&&!d?`${a}-label`:d,K=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(pn,{"data-testid":T.label,id:G,as:_,htmlFor:"label"===_?l:void 0,labelHidden:u,onClick:e=>{w&&e.preventDefault()},inline:x,ref:V,children:s}),Z&&W&&(0,f.jsx)(Nn,{"data-testid":T.additionalInfo,heading:I.heading,contextualLabel:W,children:I.content})]});let X,Y;if(X=$||O||u?O&&!u?(0,f.jsx)(k,{container:{alignItems:"end",justify:Z&&!$?"between":void 0},children:K}):K:(0,f.jsx)(k,{as:oo,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:K}),(0,h.useEffect)(()=>{U(V.current?.textContent??null)},[s]),(0,h.useEffect)(()=>{if(b||"error"!==g&&"warning"!==g)return;let e=q(g);"string"==typeof p&&(e=`${e} ${p}`),V.current?.textContent&&(e=`${V.current?.textContent} ${e}`),F({message:e,type:g})},[g,p]),O||h.Children.count(o)>1)Y=o;else{const e=h.Children.only(o).props["aria-describedby"];Y=(0,h.cloneElement)(o,{"aria-describedby":[e,p&&!w?`${a}-info`:void 0].join(" ").trim()||void 0})}j&&(Y=(0,f.jsxs)(k,{container:{alignItems:"center",gap:.5},children:[Y,(0,f.jsx)(un,{items:j,menuAt:3})]}));let Q=(0,f.jsxs)(k,{id:`${a}-info`,"data-testid":T.info,status:g,as:no,container:{alignItems:"center",gap:.5},children:[g&&"pending"!==g&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(k,{item:{alignSelf:"start"},as:to,status:g,name:so[g]}),(0,f.jsx)(et,{children:`${q(g)} `})]}),p]});if(y&&(Q=(0,f.jsxs)(k,{container:{justify:Q?"between":"end",gap:1},children:[Q,(0,f.jsx)(k,{item:{shrink:0},children:y})]})),B){const e=(0,Ke.A)(N);Q=(0,f.jsxs)(k,{container:{alignItems:"start",justify:"between"},children:[(0,f.jsxs)(no,{"data-testid":T.info,status:g,id:`${a}-info`,children:[q("suggestion_info"),(0,f.jsx)(et,{"aria-live":"polite",children:q("suggestion_assist")})]}),(0,f.jsxs)(k,{container:{wrap:"nowrap"},children:[(0,f.jsx)(io,{"data-testid":T.suggestionReject,onClick:()=>{P(!1),e[0]?.focus()},"aria-label":`${q("no")}, ${q("reject_suggestion_button_a11y")}${W?` - ${W}`:""}`,children:q("no")}),(0,f.jsx)(io,{"data-testid":T.suggestionAccept,onClick:()=>{P(!0),e[0]?.focus()},"aria-label":`${q("yes")}, ${q("accept_suggestion_button_a11y")}${W?` - ${W}`:""}`,children:q("yes")})]})]})}const J=[];return z&&J.push(z),O&&p&&J.push(`${a}-info`),(0,f.jsxs)(k,{"data-testid":T.root,...L,container:{direction:x?"row":"column",alignItems:x?"center":void 0,wrap:$?"wrap":void 0,...S},as:ao,asFieldset:O,isRadioCheck:$,showAdditionalInfo:Z,id:`${a}-field`,forwardedAs:i,required:v,disabled:A,readOnly:w,onKeyDown:B?e=>{"Enter"===e.key&&(e.target.closest("button")||(e.preventDefault(),P?.(!0)))}:void 0,"aria-describedby":J.length?J.join(" "):void 0,"aria-labelledby":O?G:void 0,ref:N,className:(0,R.A)("form-field",M,{status:g}),children:[(O||!m)&&X,Y,!O&&m&&X,!w&&Q,$&&C&&(0,f.jsx)(ro,{variant:"link",onClick:()=>{C()},children:q("clear_selection")})]})}),lo=(0,oe.A)(co,Gn);g.Ay.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${Vn} {
    position: relative;
  }

  > :first-child {
    > ${Vn}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${Vn}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`.defaultProps=$.qn;const uo=g.Ay.input(({theme:{base:e,components:t}})=>g.AH`
    width: 100%;
    height: ${t.input.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${t.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `);uo.defaultProps=$.qn;const mo=uo,po=(0,ce.A)("input",["control",...Zn]),fo=(0,oe.A)((0,h.forwardRef)(function(e,t){const r=D(),{testId:n,id:o=r,value:a,defaultValue:i,required:s=!1,disabled:c=!1,readOnly:l=!1,label:d,additionalInfo:u,labelHidden:m,info:p,status:h,actions:g,onResolveSuggestion:b,className:$,...y}=e,v=(0,ee.A)(n,po),A={};(0,or.A)(e,"value")?A.value=a??"":(0,or.A)(e,"defaultValue")&&(A.defaultValue=i??"");const w=(0,f.jsx)(Vn,{"data-testid":v.control,ref:t,id:o,required:s,disabled:c,readOnly:l,status:h,hasSuggestion:!!b&&"pending"===h,...A,autoComplete:"_off",...y,as:mo,className:(0,R.A)("input",$)});return d?(0,f.jsx)(lo,{testId:v,additionalInfo:u,label:d,labelHidden:m,id:o,info:p,readOnly:l,status:h,required:s,disabled:c,actions:g,onResolveSuggestion:b,children:w}):w}),po)},1093:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(4848),o=r(9115);const a=e=>t=>(0,n.jsx)(o.A,{children:(0,n.jsx)(e,{...t})})},2477:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(1594);const o=(e=null)=>(0,n.useState)(e)},3072:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,$=r?Symbol.for("react.fundamental"):60117,y=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function A(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case u:case a:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case l:case m:case g:case h:case c:return e;default:return t}}case o:return t}}}function w(e){return A(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=m,t.Fragment=a,t.Lazy=g,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||A(e)===d},t.isConcurrentMode=w,t.isContextConsumer=function(e){return A(e)===l},t.isContextProvider=function(e){return A(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return A(e)===m},t.isFragment=function(e){return A(e)===a},t.isLazy=function(e){return A(e)===g},t.isMemo=function(e){return A(e)===h},t.isPortal=function(e){return A(e)===o},t.isProfiler=function(e){return A(e)===s},t.isStrictMode=function(e){return A(e)===i},t.isSuspense=function(e){return A(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===s||e===i||e===p||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===m||e.$$typeof===$||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b)},t.typeOf=A},3404:(e,t,r)=>{e.exports=r(3072)},4146:(e,t,r)=>{var n=r(3404),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(f){var o=p(r);o&&o!==f&&e(t,o,n)}var i=d(r);u&&(i=i.concat(u(r)));for(var s=c(t),h=c(r),g=0;g<i.length;++g){var b=i[g];if(!(a[b]||n&&n[b]||h&&h[b]||s&&s[b])){var $=m(r,b);try{l(t,b,$)}catch(e){}}}}return t}},4853:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(1594);const o=(...e)=>{const t=(0,n.useRef)(null),[r]=(0,n.useState)(()=>Object.defineProperty({current:null},"current",{configurable:!0,enumerable:!0,get:()=>t.current,set:r=>{t.current=r,e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})}}));return r}},7103:(e,t,r)=>{r.d(t,{A:()=>n});const n={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},7521:(e,t,r)=>{r.d(t,{A:()=>u,D:()=>d});var n=r(4848),o=r(1594),a=r(8267),i=r(1357),s=r(9549),c=r(9187),l=r(7321);const d=a.Ay.span(e=>{const{variant:t,status:r,theme:{base:{"font-size":n,"font-scale":o,"font-family":s,palette:{"foreground-color":d,urgent:u,warn:m,success:p},transparency:{"transparent-2":f}},components:{text:h}}}=e;let g;r&&(g={error:u,warning:m,success:p}[r]),"secondary"===t&&(g=(0,c.A)(()=>(0,i.B3)(g??d,f)));const b=(0,l.Vr)(n,o);return a.AH`
    font-size: ${b[h[t]["font-size"]]};
    font-weight: ${h[t]["font-weight"]};
    font-family: ${h[t]["font-family"]||s};
    color: ${g};
  `});d.defaultProps=s.qn;const u=(0,o.forwardRef)(function({variant:e="primary",as:t,...r},o){return!t&&/h\d/i.test(e)&&(t=e),(0,n.jsx)(d,{ref:o,variant:e,as:t,...r})})},8579:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(1594),o=r(9463);const a=(e,t)=>{const{testIds:r}=(0,o.A)();return(0,n.useMemo)(()=>r?"object"==typeof e&&e?e:t(e):{},[r,e,t])}},8887:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e){function t(e,n,c,l,m){for(var p,f,h,g,v,w=0,x=0,k=0,C=0,j=0,P=0,M=h=p=0,T=0,D=0,O=0,q=0,F=c.length,_=F-1,B="",N="",V="",W="";T<F;){if(f=c.charCodeAt(T),T===_&&0!==x+C+k+w&&(0!==x&&(f=47===x?10:47),C=k=w=0,F++,_++),0===x+C+k+w){if(T===_&&(0<D&&(B=B.replace(u,"")),0<B.trim().length)){switch(f){case 32:case 9:case 59:case 13:case 10:break;default:B+=c.charAt(T)}f=59}switch(f){case 123:for(p=(B=B.trim()).charCodeAt(0),h=1,q=++T;T<F;){switch(f=c.charCodeAt(T)){case 123:h++;break;case 125:h--;break;case 47:switch(f=c.charCodeAt(T+1)){case 42:case 47:e:{for(M=T+1;M<_;++M)switch(c.charCodeAt(M)){case 47:if(42===f&&42===c.charCodeAt(M-1)&&T+2!==M){T=M+1;break e}break;case 10:if(47===f){T=M+1;break e}}T=M}}break;case 91:f++;case 40:f++;case 34:case 39:for(;T++<_&&c.charCodeAt(T)!==f;);}if(0===h)break;T++}if(h=c.substring(q,T),0===p&&(p=(B=B.replace(d,"").trim()).charCodeAt(0)),64===p){switch(0<D&&(B=B.replace(u,"")),f=B.charCodeAt(1)){case 100:case 109:case 115:case 45:D=n;break;default:D=R}if(q=(h=t(n,D,h,f,m+1)).length,0<z&&(v=s(3,h,D=r(R,B,O),n,E,H,q,f,m,l),B=D.join(""),void 0!==v&&0===(q=(h=v.trim()).length)&&(f=0,h="")),0<q)switch(f){case 115:B=B.replace(A,i);case 100:case 109:case 45:h=B+"{"+h+"}";break;case 107:h=(B=B.replace(b,"$1 $2"))+"{"+h+"}",h=1===I||2===I&&a("@"+h,3)?"@-webkit-"+h+"@"+h:"@"+h;break;default:h=B+h,112===l&&(N+=h,h="")}else h=""}else h=t(n,r(n,B,O),h,l,m+1);V+=h,h=O=D=M=p=0,B="",f=c.charCodeAt(++T);break;case 125:case 59:if(1<(q=(B=(0<D?B.replace(u,""):B).trim()).length))switch(0===M&&(p=B.charCodeAt(0),45===p||96<p&&123>p)&&(q=(B=B.replace(" ",":")).length),0<z&&void 0!==(v=s(1,B,n,e,E,H,N.length,l,m,l))&&0===(q=(B=v.trim()).length)&&(B="\0\0"),p=B.charCodeAt(0),f=B.charCodeAt(1),p){case 0:break;case 64:if(105===f||99===f){W+=B+c.charAt(T);break}default:58!==B.charCodeAt(q-1)&&(N+=o(B,p,f,B.charCodeAt(2)))}O=D=M=p=0,B="",f=c.charCodeAt(++T)}}switch(f){case 13:case 10:47===x?x=0:0===1+p&&107!==l&&0<B.length&&(D=1,B+="\0"),0<z*L&&s(0,B,n,e,E,H,N.length,l,m,l),H=1,E++;break;case 59:case 125:if(0===x+C+k+w){H++;break}default:switch(H++,g=c.charAt(T),f){case 9:case 32:if(0===C+w+x)switch(j){case 44:case 58:case 9:case 32:g="";break;default:32!==f&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+x+w&&(D=O=1,g="\f"+g);break;case 108:if(0===C+x+w+S&&0<M)switch(T-M){case 2:112===j&&58===c.charCodeAt(T-3)&&(S=j);case 8:111===P&&(S=P)}break;case 58:0===C+x+w&&(M=T);break;case 44:0===x+k+C+w&&(D=1,g+="\r");break;case 34:case 39:0===x&&(C=C===f?0:0===C?f:C);break;case 91:0===C+x+k&&w++;break;case 93:0===C+x+k&&w--;break;case 41:0===C+x+w&&k--;break;case 40:0===C+x+w&&(0===p&&(2*j+3*P==533||(p=1)),k++);break;case 64:0===x+k+C+w+M+h&&(h=1);break;case 42:case 47:if(!(0<C+w+k))switch(x){case 0:switch(2*f+3*c.charCodeAt(T+1)){case 235:x=47;break;case 220:q=T,x=42}break;case 42:47===f&&42===j&&q+2!==T&&(33===c.charCodeAt(q+2)&&(N+=c.substring(q,T+1)),g="",x=0)}}0===x&&(B+=g)}P=j,j=f,T++}if(0<(q=N.length)){if(D=n,0<z&&void 0!==(v=s(2,N,D,e,E,H,q,l,m,l))&&0===(N=v).length)return W+N+V;if(N=D.join(",")+"{"+N+"}",0!==I*S){switch(2!==I||a(N,2)||(S=0),S){case 111:N=N.replace(y,":-moz-$1")+N;break;case 112:N=N.replace($,"::-webkit-input-$1")+N.replace($,"::-moz-$1")+N.replace($,":-ms-input-$1")+N}S=0}}return W+N+V}function r(e,t,r){var o=t.trim().split(h);t=o;var a=o.length,i=e.length;switch(i){case 0:case 1:var s=0;for(e=0===i?"":e[0]+" ";s<a;++s)t[s]=n(e,t[s],r).trim();break;default:var c=s=0;for(t=[];s<a;++s)for(var l=0;l<i;++l)t[c++]=n(e[l]+" ",o[s],r).trim()}return t}function n(e,t,r){var n=t.charCodeAt(0);switch(33>n&&(n=(t=t.trim()).charCodeAt(0)),n){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*r&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function o(e,t,r,n){var i=e+";",s=2*t+3*r+4*n;if(944===s){e=i.indexOf(":",9)+1;var c=i.substring(e,i.length-1).trim();return c=i.substring(0,e).trim()+c+";",1===I||2===I&&a(c,1)?"-webkit-"+c+c:c}if(0===I||2===I&&!a(i,1))return i;switch(s){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(j,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(c=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+c+i;case 1005:return p.test(i)?i.replace(m,":-webkit-")+i.replace(m,":-moz-")+i:i;case 1e3:switch(t=(c=i.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(t)){case 226:c=i.replace(v,"tb");break;case 232:c=i.replace(v,"tb-rl");break;case 220:c=i.replace(v,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+c+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(t=(i=e).length-10,s=(c=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(111>c.charCodeAt(8))break;case 115:i=i.replace(c,"-webkit-"+c)+";"+i;break;case 207:case 102:i=i.replace(c,"-webkit-"+(102<s?"inline-":"")+"box")+";"+i.replace(c,"-webkit-"+c)+";"+i.replace(c,"-ms-"+c+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return c=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+c+"-ms-flex-"+c+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(x,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(x,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?o(e.replace("stretch","fill-available"),t,r,n).replace(":fill-available",":stretch"):i.replace(c,"-webkit-"+c)+i.replace(c,"-moz-"+c.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===r+n&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(f,"$1-webkit-$2")+i}return i}function a(e,t){var r=e.indexOf(1===t?":":"{"),n=e.substring(0,3!==t?r:10);return r=e.substring(r+1,e.length-1),M(2!==t?n:n.replace(k,"$1"),r,t)}function i(e,t){var r=o(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return r!==t+";"?r.replace(w," or ($1)").substring(4):"("+t+")"}function s(e,t,r,n,o,a,i,s,c,d){for(var u,m=0,p=t;m<z;++m)switch(u=P[m].call(l,e,p,r,n,o,a,i,s,c,d)){case void 0:case!1:case!0:case null:break;default:p=u}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!=typeof e?I=1:(I=2,M=e):I=0),c}function l(e,r){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<z){var o=s(-1,r,n,n,E,H,0,0,0,0);void 0!==o&&"string"==typeof o&&(r=o)}var a=t(R,n,r,0,0);return 0<z&&void 0!==(o=s(-2,a,n,n,E,H,a.length,0,0,0))&&(a=o),S=0,H=E=1,a}var d=/^\0+/g,u=/[\0\r\f]/g,m=/: */g,p=/zoo|gra/,f=/([,: ])(transform)/g,h=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,$=/::(place)/g,y=/:(read-only)/g,v=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,x=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,H=1,E=1,S=0,I=1,R=[],P=[],z=0,M=null,L=0;return l.use=function e(t){switch(t){case void 0:case null:z=P.length=0;break;default:if("function"==typeof t)P[z++]=t;else if("object"==typeof t)for(var r=0,n=t.length;r<n;++r)e(t[r]);else L=0|!!t}return e},l.set=c,void 0!==e&&c(e),l}},9115:(e,t,r)=>{r.d(t,{Q:()=>y,A:()=>k});var n=r(4848),o=r(1594),a=r(5206),i=r(8267),s=(r(8347),r(9080)),c=r(9549),l=r(4860),d=r(3607),u=r(9839),m=r(127),p=r(4680),f=r(994),h=r(2477),g=r(4853);class b extends HTMLElement{connectedCallback(){this.dispatchEvent(new Event("connect-disconnect",{bubbles:!1}))}disconnectedCallback(){this.dispatchEvent(new Event("connect-disconnect",{bubbles:!1}))}}customElements.get("pega-connected-watcher")||customElements.define("pega-connected-watcher",b);const $=u.A?navigator.language:"en",y=(0,o.createContext)({locale:$,direction:(0,d.oW)($),translations:d.nH,themeMachine:c.qR,styleSheetTarget:m.A?document.head:void 0,portalTarget:m.A?document.body:void 0,loadedRef:{current:!1},renderNativeControls:!1,testIds:!0,mountedStyleSheetManagers:[],initialized:!1}),v=Symbol.for("@pega/cosmos-react-core.metadata"),A=new Set,w={version:f.rE,mountedConfigs:[],mountOrder:[],mountCount:{}};p.A&&(window.cosmos.instances||(window.cosmos.instances=[]),window.cosmos.instances.push(w),Array.isArray(window[v])&&(window.cosmos.instances.push(...window[v]),delete window[v]),window[v]||(window[v]={push:e=>{window.cosmos.instances?.push(e)}}));const x=(0,o.forwardRef)(function({children:e,locale:t,direction:r,translations:c,theme:f,disableDefaultFontLoading:b,styleSheets:$,styleSheetTarget:v,portalTarget:x,renderNativeControls:k,testIds:C,id:j},H){const E=p.A?window.cosmos.configurationContext??y:y,S=(0,o.useContext)(E),I=f?new l.A({theme:f,parent:S.themeMachine}):S.themeMachine,R=(0,o.useMemo)(()=>(0,d.Ay)({...S.translations,...c}),[S.translations,c]),[P,z]=(0,h.A)(),[M,L]=(0,h.A)(),[,T]=(0,o.useState)(null),D=(0,g.A)(z,H);(0,o.useEffect)(()=>{if(!M)return;const e=()=>{T(M.isConnected)};return M.addEventListener("connect-disconnect",e),()=>{M.removeEventListener("connect-disconnect",e)}},[M]);const[O,q]=(0,o.useMemo)(()=>{if(!m.A||!P?.isConnected)return[void 0,void 0];const e=P.getRootNode(),t=e instanceof ShadowRoot?e:document.head,r=e instanceof ShadowRoot?e:document.body,n=v??S.styleSheetTarget,o=x??S.portalTarget;return[e.contains(n??null)?n:t,e.contains(o??null)?o:r]},[P,P?.isConnected,v,x,S.styleSheetTarget,S.portalTarget]),F=(0,o.useMemo)(()=>!S.initialized||!(!P||P.getRootNode()===S.styleSheetTarget?.getRootNode()),[S.initialized,P]),_=F?[]:S.mountedStyleSheetManagers,B=(0,o.useMemo)(()=>!!_?.includes(i.ID),[_]);(0,o.useEffect)(()=>{const e=Symbol(j);return(e=>{A.add(e),w.mountedConfigs=[...A].map(e=>e.description??"Unknown");const t=e.description??"Unknown";w.mountOrder.push(t),t in w.mountCount||(w.mountCount[t]=0),w.mountCount[t]+=1})(e),()=>{(e=>{A.delete(e),w.mountedConfigs=[...A].map(e=>e.description??"Unknown")})(e)}},[j]);const N=F?(0,n.jsxs)(n.Fragment,{children:[!b&&O&&(0,a.createPortal)((0,n.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..700;1,400..700&family=Inter:wght@400..700&family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,400..700&display=swap","data-cosmos-global-style":!0}),O),(0,n.jsx)(s.Ay,{}),e]}):(0,n.jsx)(n.Fragment,{children:e}),V=B?N:(0,n.jsx)(i.ID,{disableVendorPrefixes:!0,target:u.A&&O?.isConnected&&!navigator.userAgent.includes("jsdom")?O:void 0,children:N});return(0,n.jsxs)("div",{"data-config-root":!0,style:{display:"contents"},ref:D,children:[(0,n.jsx)(E.Provider,{value:{locale:t??S.locale,direction:r??(void 0!==t?(0,d.oW)(t):S.direction),translations:R,themeMachine:I,styleSheetTarget:O,portalTarget:q,loadedRef:S.loadedRef,renderNativeControls:k??S.renderNativeControls,testIds:C??S.testIds,mountedStyleSheetManagers:B?_:[..._??[],i.ID],initialized:!0},children:(0,n.jsxs)(i.NP,{theme:I.theme,children:[$&&O&&(0,a.createPortal)($.map(e=>(0,n.jsx)("link",{rel:"stylesheet",href:e,"data-cosmos-global-style":!0},e)),O),V]})}),(0,n.jsx)("pega-connected-watcher",{ref:L,style:{display:"none"}})]})}),k=x},9316:(e,t,r)=>{function n(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:()=>a});var o=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=n(function(e){return o.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})},9463:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1594),o=(r(8347),r(4680)),a=r(9115);const i=()=>{const e=o.A?window.cosmos.configurationContext??a.Q:a.Q;return(0,n.useContext)(e)}}}]);
//# sourceMappingURL=MO9001_49173363.2b17de8c.js.map