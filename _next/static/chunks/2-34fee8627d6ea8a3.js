"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{457:(e,t,r)=>{r.d(t,{default:()=>h});var o=r(2115),n=r(5438),l=r(2567),i=r(5155);let a="function"==typeof(0,n.Dp)({}),s=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),c=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),u=function(e){var t,r;let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};o&&e.colorSchemes&&"function"==typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach(t=>{var r,o;let[l,i]=t,a=e.getColorSchemeSelector(l);a.startsWith("@")?n[a]={":root":{colorScheme:null===(r=i.palette)||void 0===r?void 0:r.mode}}:n[a.replace(/\s*&/,"")]={colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}});let l={html:s(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...c(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...n},i=null===(r=e.components)||void 0===r?void 0:null===(t=r.MuiCssBaseline)||void 0===t?void 0:t.styleOverrides;return i&&(l=[l,i]),l},d="mui-ecs",m=e=>{let t=u(e,!1),r=Array.isArray(t)?t[0]:t;return!e.vars&&r&&(r.html[":root:has(".concat(d,")")]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach(t=>{var o,n;let[l,i]=t,a=e.getColorSchemeSelector(l);a.startsWith("@")?r[a]={[":root:not(:has(.".concat(d,"))")]:{colorScheme:null===(o=i.palette)||void 0===o?void 0:o.mode}}:r[a.replace(/\s*&/,"")]={["&:not(:has(.".concat(d,"))")]:{colorScheme:null===(n=i.palette)||void 0===n?void 0:n.mode}}}),t},f=(0,n.Dp)(a?e=>{let{theme:t,enableColorScheme:r}=e;return u(t,r)}:e=>{let{theme:t}=e;return m(t)}),h=function(e){let{children:t,enableColorScheme:r=!1}=(0,l.b)({props:e,name:"MuiCssBaseline"});return(0,i.jsxs)(o.Fragment,{children:[a&&(0,i.jsx)(f,{enableColorScheme:r}),!a&&!r&&(0,i.jsx)("span",{className:d,style:{display:"none"}}),t]})}},4527:(e,t,r)=>{r.d(t,{default:()=>s}),r(2115);var o=r(4489),n=r(6366),l=r(5155);function i(e){let{theme:t,...r}=e,i=n.A in t?t[n.A]:void 0;return(0,l.jsx)(o.default,{...r,themeId:i?n.A:void 0,theme:i||t})}var a=r(3226);function s(e){let{theme:t,...r}=e;return"function"!=typeof t&&"colorSchemes"in(n.A in t?t[n.A]:t)?(0,l.jsx)(a.CssVarsProvider,{theme:t,...r}):(0,l.jsx)(i,{theme:t,...r})}},3226:(e,t,r)=>{r.r(t),r.d(t,{CssVarsProvider:()=>k,Experimental_CssVarsProvider:()=>v,getInitColorSchemeScript:()=>b,useColorScheme:()=>y});var o=r(2115),n=r(1157),l=r(2884),i=r(8486),a=r(4489),s=r(5537),c=r(2004),u=r(5155),d=r(864),m=r(3048),f=r(6366);let h={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:p,useColorScheme:y,getInitColorSchemeScript:g}=function(e){let{themeId:t,theme:r={},modeStorageKey:n=s.a$,colorSchemeStorageKey:d=s.EU,disableTransitionOnChange:m=!1,defaultColorScheme:f,resolveTheme:h}=e,p={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},y=o.createContext(void 0),g={},v={},S="string"==typeof f?f:f.light,b="string"==typeof f?f:f.dark;return{CssVarsProvider:function(e){let{children:s,theme:p,modeStorageKey:S=n,colorSchemeStorageKey:b=d,disableTransitionOnChange:k=m,storageWindow:w="undefined"==typeof window?void 0:window,documentNode:C="undefined"==typeof document?void 0:document,colorSchemeNode:x="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:A=!1,disableStyleSheetGeneration:E=!1,defaultMode:$="system",noSsr:j}=e,M=o.useRef(!1),L=(0,i.A)(),I=o.useContext(y),N=!!I&&!A,O=o.useMemo(()=>p||("function"==typeof r?r():r),[p]),W=O[t],_=W||O,{colorSchemes:T=g,components:P=v,cssVarPrefix:K}=_,G=Object.keys(T).filter(e=>!!T[e]).join(","),V=o.useMemo(()=>G.split(","),[G]),R="string"==typeof f?f:f.light,z="string"==typeof f?f:f.dark,B=T[R]&&T[z]?$:T[_.defaultColorScheme]?.palette?.mode||_.palette?.mode,{mode:D,setMode:U,systemMode:F,lightColorScheme:q,darkColorScheme:H,colorScheme:Q,setColorScheme:Z}=(0,c.default)({supportedColorSchemes:V,defaultLightColorScheme:R,defaultDarkColorScheme:z,modeStorageKey:S,colorSchemeStorageKey:b,defaultMode:B,storageWindow:w,noSsr:j}),X=D,Y=Q;N&&(X=I.mode,Y=I.colorScheme);let J=o.useMemo(()=>{let e=Y||_.defaultColorScheme,t=_.generateThemeVars?.()||_.vars,r={..._,components:P,colorSchemes:T,cssVarPrefix:K,vars:t};if("function"==typeof r.generateSpacing&&(r.spacing=r.generateSpacing()),e){let t=T[e];t&&"object"==typeof t&&Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?r[e]={...r[e],...t[e]}:r[e]=t[e]})}return h?h(r):r},[_,Y,P,T,K]),ee=_.colorSchemeSelector;o.useEffect(()=>{if(Y&&x&&ee&&"media"!==ee){let e=ee;if("class"===ee&&(e=".%s"),"data"===ee&&(e="[data-%s]"),ee?.startsWith("data-")&&!ee.includes("%s")&&(e=`[${ee}="%s"]`),e.startsWith("."))x.classList.remove(...V.map(t=>e.substring(1).replace("%s",t))),x.classList.add(e.substring(1).replace("%s",Y));else{let t=e.replace("%s",Y).match(/\[([^\]]+)\]/);if(t){let[e,r]=t[1].split("=");r||V.forEach(t=>{x.removeAttribute(e.replace(Y,t))}),x.setAttribute(e,r?r.replace(/"|'/g,""):"")}else x.setAttribute(e,Y)}}},[Y,ee,x,V]),o.useEffect(()=>{let e;if(k&&M.current&&C){let t=C.createElement("style");t.appendChild(C.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),C.head.appendChild(t),window.getComputedStyle(C.body),e=setTimeout(()=>{C.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[Y,k,C]),o.useEffect(()=>(M.current=!0,()=>{M.current=!1}),[]);let et=o.useMemo(()=>({allColorSchemes:V,colorScheme:Y,darkColorScheme:H,lightColorScheme:q,mode:X,setColorScheme:Z,setMode:U,systemMode:F}),[V,Y,H,q,X,Z,U,F,J.colorSchemeSelector]),er=!0;(E||!1===_.cssVariables||N&&L?.cssVarPrefix===K)&&(er=!1);let eo=(0,u.jsxs)(o.Fragment,{children:[(0,u.jsx)(a.default,{themeId:W?t:void 0,theme:J,children:s}),er&&(0,u.jsx)(l.default,{styles:J.generateStyleSheets?.()||[]})]});return N?eo:(0,u.jsx)(y.Provider,{value:et,children:eo})},useColorScheme:()=>o.useContext(y)||p,getInitColorSchemeScript:e=>(0,s.Ay)({colorSchemeStorageKey:d,defaultLightColorScheme:S,defaultDarkColorScheme:b,modeStorageKey:n,...e})}}({themeId:f.A,theme:()=>(0,d.A)({cssVariables:!0}),colorSchemeStorageKey:h.colorSchemeStorageKey,modeStorageKey:h.modeStorageKey,defaultColorScheme:{light:h.defaultLightColorScheme,dark:h.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,m.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,n.A)({sx:e,theme:this})},t}});function v(e){return(0,u.jsx)(p,{...e})}let S=!1,b=e=>(S||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),S=!0),g(e)),k=p},5761:(e,t,r)=>{r.d(t,{default:()=>i}),r(2115);var o=r(6307),n=r(2739),l=r(6366);function i(){let e=(0,o.default)(n.A);return e[l.A]||e}},9757:(e,t,r)=>{r.d(t,{default:()=>i});var o=r(4413),n=r(2739),l=r(6366);function i(e){let{props:t,name:r}=e;return(0,o.default)({props:t,name:r,defaultTheme:n.A,themeId:l.A})}},7582:(e,t,r)=>{r.d(t,{A:()=>o});let o=r(2115).createContext(null)},8486:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(2115),n=r(7582);function l(){return o.useContext(n.A)}},2806:(e,t,r)=>{let o;r.d(t,{default:()=>s}),r(2115);var n=r(896),l=r(5302),i=r(8029),a=r(5155);if("object"==typeof document){let e=document.querySelector('[name="emotion-insertion-point"]');if(!e){(e=document.createElement("meta")).setAttribute("name","emotion-insertion-point"),e.setAttribute("content","");let t=document.querySelector("head");t&&t.prepend(e)}class t extends i.v{insert(t,r){return this.key&&this.key.endsWith("global")&&(this.before=e),super.insert(t,r)}}o=((e,t)=>{let r=(0,l.A)(e);return r.sheet=new t({key:r.key,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy,prepend:r.sheet.prepend,insertionPoint:r.sheet.insertionPoint}),r})({key:"css",insertionPoint:e},t)}function s(e){let{injectFirst:t,children:r}=e;return t&&o?(0,a.jsx)(n.C,{value:o,children:r}):r}},6536:(e,t,r)=>{r.d(t,{default:()=>i});var o=r(2795),n=r(5129);let l=(0,r(1045).A)("MuiBox",["root"]),i=(0,n.default)({defaultClassName:l.root,generateClassName:o.A.generate})},6681:(e,t,r)=>{r.d(t,{default:()=>o});let o=(0,r(5949).A)()},2835:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var o=r(2115),n=r(3463),l=r(7157),i=r(7123),a=r(4577),s=r(4413),c=r(6307),u=r(2611),d=r(5212);let m=(e,t)=>e.filter(e=>t.includes(e)),f=(e,t,r)=>{let o=e.keys[0];Array.isArray(t)?t.forEach((t,o)=>{r((t,r)=>{o<=e.keys.length-1&&(0===o?Object.assign(t,r):t[e.up(e.keys[o])]=r)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:m(e.keys,Object.keys(t))).forEach(n=>{if(e.keys.includes(n)){let l=t[n];void 0!==l&&r((t,r)=>{o===n?Object.assign(t,r):t[e.up(n)]=r},l)}}):("number"==typeof t||"string"==typeof t)&&r((e,t)=>{Object.assign(e,t)},t)};function h(e){return`--Grid-${e}Spacing`}function p(e){return`--Grid-parent-${e}Spacing`}let y="--Grid-columns",g="--Grid-parent-columns",v=({theme:e,ownerState:t})=>{let r={};return f(e.breakpoints,t.size,(e,t)=>{let o={};"grow"===t&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof t&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${t} / var(${g}) - (var(${g}) - ${t}) * (var(${p("column")}) / var(${g})))`}),e(r,o)}),r},S=({theme:e,ownerState:t})=>{let r={};return f(e.breakpoints,t.offset,(e,t)=>{let o={};"auto"===t&&(o={marginLeft:"auto"}),"number"==typeof t&&(o={marginLeft:0===t?"0px":`calc(100% * ${t} / var(${g}) + var(${p("column")}) * ${t} / var(${g}))`}),e(r,o)}),r},b=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={[y]:12};return f(e.breakpoints,t.columns,(e,t)=>{let o=t??12;e(r,{[y]:o,"> *":{[g]:o}})}),r},k=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return f(e.breakpoints,t.rowSpacing,(t,o)=>{let n="string"==typeof o?o:e.spacing?.(o);t(r,{[h("row")]:n,"> *":{[p("row")]:n}})}),r},w=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return f(e.breakpoints,t.columnSpacing,(t,o)=>{let n="string"==typeof o?o:e.spacing?.(o);t(r,{[h("column")]:n,"> *":{[p("column")]:n}})}),r},C=({theme:e,ownerState:t})=>{if(!t.container)return{};let r={};return f(e.breakpoints,t.direction,(e,t)=>{e(r,{flexDirection:t})}),r},x=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},gap:`var(${h("row")}) var(${h("column")})`}}),A=e=>{let t=[];return Object.entries(e).forEach(([e,r])=>{!1!==r&&void 0!==r&&t.push(`grid-${e}-${String(r)}`)}),t},E=(e,t="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,o])=>{r(o)&&t.push(`spacing-${e}-${String(o)}`)}),t}return[]},$=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`];var j=r(5155);let M=(0,d.A)(),L=(0,a.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function I(e){return(0,s.default)({props:e,name:"MuiGrid",defaultTheme:M})}let N=function(e={}){let{createStyledComponent:t=L,useThemeProps:r=I,useTheme:a=c.default,componentName:s="MuiGrid"}=e,d=(e,t)=>{let{container:r,direction:o,spacing:n,wrap:a,size:c}=e,u={root:["root",r&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...$(o),...A(c),...r?E(n,t.breakpoints.keys[0]):[]]};return(0,i.A)(u,e=>(0,l.Ay)(s,e),{})};function m(e,t,r=()=>!0){let o={};return null===e||(Array.isArray(e)?e.forEach((e,n)=>{null!==e&&r(e)&&t.keys[n]&&(o[t.keys[n]]=e)}):"object"==typeof e?Object.keys(e).forEach(t=>{let n=e[t];null!=n&&r(n)&&(o[t]=n)}):o[t.keys[0]]=e),o}let f=t(b,w,k,v,C,x,S),h=o.forwardRef(function(e,t){let l=a(),i=r(e),s=(0,u.A)(i),{className:c,children:h,columns:p=12,container:y=!1,component:g="div",direction:v="row",wrap:S="wrap",size:b={},offset:k={},spacing:w=0,rowSpacing:C=w,columnSpacing:x=w,unstable_level:A=0,...E}=s,$=m(b,l.breakpoints,e=>!1!==e),M=m(k,l.breakpoints),L=e.columns??(A?void 0:p),I=e.spacing??(A?void 0:w),N=e.rowSpacing??e.spacing??(A?void 0:C),O=e.columnSpacing??e.spacing??(A?void 0:x),W={...s,level:A,columns:L,container:y,direction:v,wrap:S,spacing:I,rowSpacing:N,columnSpacing:O,size:$,offset:M},_=d(W,l);return(0,j.jsx)(f,{ref:t,as:g,ownerState:W,className:(0,n.A)(_.root,c),...E,children:o.Children.map(h,e=>{var t;return o.isValidElement(e)&&(t=["Grid"],o.isValidElement(e)&&-1!==t.indexOf(e.type.muiName??e.type?._payload?.value?.muiName))&&y&&e.props.container?o.cloneElement(e,{unstable_level:e.props?.unstable_level??A+1}):e})})});return h.muiName="Grid",h}()},5537:(e,t,r)=>{r.d(t,{Ay:()=>i,EU:()=>l,a$:()=>n}),r(2115);var o=r(5155);let n="mode",l="color-scheme";function i(e){let{defaultMode:t="system",defaultLightColorScheme:r="light",defaultDarkColorScheme:i="dark",modeStorageKey:a=n,colorSchemeStorageKey:s=l,attribute:c="data-color-scheme",colorSchemeNode:u="document.documentElement",nonce:d}=e||{},m="",f=c;if("class"===c&&(f=".%s"),"data"===c&&(f="[data-%s]"),f.startsWith(".")){let e=f.substring(1);m+=`${u}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${u}.classList.add('${e}'.replace('%s', colorScheme));`}let h=f.match(/\[([^\]]+)\]/);if(h){let[e,t]=h[1].split("=");t||(m+=`${u}.removeAttribute('${e}'.replace('%s', light));
      ${u}.removeAttribute('${e}'.replace('%s', dark));`),m+=`
      ${u}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else m+=`${u}.setAttribute('${f}', colorScheme);`;return(0,o.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?d:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${a}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${i}';
  const light = localStorage.getItem('${s}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${m}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}},1769:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});let o=(0,r(5891).A)()},4489:(e,t,r)=>{r.d(t,{default:()=>y});var o=r(2115),n=r(8486),l=r(7582);let i="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var a=r(5155);let s=function(e){let{children:t,theme:r}=e,s=(0,n.A)(),c=o.useMemo(()=>{let e=null===s?{...r}:"function"==typeof r?r(s):{...s,...r};return null!=e&&(e[i]=null!==s),e},[r,s]);return(0,a.jsx)(l.A.Provider,{value:c,children:t})};var c=r(896),u=r(1077);let d=o.createContext(),m=function({value:e,...t}){return(0,a.jsx)(d.Provider,{value:e??!0,...t})};var f=r(1087);let h={};function p(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return o.useMemo(()=>{let o=e&&t[e]||t;if("function"==typeof r){let l=r(o),i=e?{...t,[e]:l}:l;return n?()=>i:i}return e?{...t,[e]:r}:{...t,...r}},[e,t,r,n])}let y=function(e){let{children:t,theme:r,themeId:o}=e,l=(0,u.default)(h),i=(0,n.A)()||h,d=p(o,l,r),y=p(o,i,r,!0),g="rtl"===(o?d[o]:d).direction;return(0,a.jsx)(s,{theme:y,children:(0,a.jsx)(c.T.Provider,{value:d,children:(0,a.jsx)(m,{value:g,children:(0,a.jsx)(f.A,{value:o?d[o].components:d.components,children:t})})})})}},2004:(e,t,r)=>{r.d(t,{default:()=>s});var o=r(2115),n=r(5537);function l(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function i(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function a(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}function s(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:s,supportedColorSchemes:c=[],modeStorageKey:u=n.a$,colorSchemeStorageKey:d=n.EU,storageWindow:m="undefined"==typeof window?void 0:window,noSsr:f=!1}=e,h=c.join(","),p=c.length>1,[y,g]=o.useState(()=>{let e=a(u,t),o=a("".concat(d,"-light"),r),n=a("".concat(d,"-dark"),s);return{mode:e,systemMode:l(e),lightColorScheme:o,darkColorScheme:n}}),[v,S]=o.useState(f||!p);o.useEffect(()=>{S(!0)},[]);let b=i(y,e=>"light"===e?y.lightColorScheme:"dark"===e?y.darkColorScheme:void 0),k=o.useCallback(e=>{g(r=>{if(e===r.mode)return r;let o=null!=e?e:t;try{localStorage.setItem(u,o)}catch(e){}return{...r,mode:o,systemMode:l(o)}})},[u,t]),w=o.useCallback(e=>{e?"string"==typeof e?e&&!h.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):g(t=>{let r={...t};return i(t,t=>{try{localStorage.setItem("".concat(d,"-").concat(t),e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):g(t=>{let o={...t},n=null===e.light?r:e.light,l=null===e.dark?s:e.dark;if(n){if(h.includes(n)){o.lightColorScheme=n;try{localStorage.setItem("".concat(d,"-light"),n)}catch(e){}}else console.error("`".concat(n,"` does not exist in `theme.colorSchemes`."))}if(l){if(h.includes(l)){o.darkColorScheme=l;try{localStorage.setItem("".concat(d,"-dark"),l)}catch(e){}}else console.error("`".concat(l,"` does not exist in `theme.colorSchemes`."))}return o}):g(e=>{try{localStorage.setItem("".concat(d,"-light"),r),localStorage.setItem("".concat(d,"-dark"),s)}catch(e){}return{...e,lightColorScheme:r,darkColorScheme:s}})},[h,d,r,s]),C=o.useCallback(e=>{"system"===y.mode&&g(t=>{let r=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===r?t:{...t,systemMode:r}})},[y.mode]),x=o.useRef(C);return x.current=C,o.useEffect(()=>{if("function"!=typeof window.matchMedia||!p)return;let e=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return x.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[p]),o.useEffect(()=>{if(m&&p){let e=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(d)&&(!r||h.match(r))&&(e.key.endsWith("light")&&w({light:r}),e.key.endsWith("dark")&&w({dark:r})),e.key===u&&(!r||["light","dark","system"].includes(r))&&k(r||t)};return m.addEventListener("storage",e),()=>{m.removeEventListener("storage",e)}}},[w,k,u,d,h,t,m,p]),{...y,mode:v?y.mode:void 0,systemMode:v?y.systemMode:void 0,colorScheme:v?b:void 0,setMode:k,setColorScheme:w}}},1297:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u,unstable_createUseMediaQuery:()=>c});var o,n=r(2115),l=r(4969),i=r(2326),a=r(1077);let s={...o||(o=r.t(n,2))}.useSyncExternalStore;function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{themeId:t}=e;return function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,a.default)();o&&t&&(o=o[t]||o);let c="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:u=!1,matchMedia:d=c?window.matchMedia:null,ssrMatchMedia:m=null,noSsr:f=!1}=(0,i.A)({name:"MuiUseMediaQuery",props:r,theme:o}),h="function"==typeof e?e(o):e;return(void 0!==s?function(e,t,r,o,l){let i=n.useCallback(()=>t,[t]),a=n.useMemo(()=>{if(l&&r)return()=>r(e).matches;if(null!==o){let{matches:t}=o(e);return()=>t}return i},[i,e,o,l,r]),[c,u]=n.useMemo(()=>{if(null===r)return[i,()=>()=>{}];let t=r(e);return[()=>t.matches,e=>(t.addEventListener("change",e),()=>{t.removeEventListener("change",e)})]},[i,r,e]);return s(u,c,a)}:function(e,t,r,o,i){let[a,s]=n.useState(()=>i&&r?r(e).matches:o?o(e).matches:t);return(0,l.default)(()=>{if(!r)return;let t=r(e),o=()=>{s(t.matches)};return o(),t.addEventListener("change",o),()=>{t.removeEventListener("change",o)}},[e,r]),a})(h=h.replace(/^@media( ?)/m,""),u,d,m,f)}}let u=c()},2989:(e,t,r)=>{r.d(t,{default:()=>n});var o=r(2115);function n(e){let{controlled:t,default:r,name:n,state:l="value"}=e,{current:i}=o.useRef(void 0!==t),[a,s]=o.useState(r),c=o.useCallback(e=>{i||s(e)},[]);return[i?t:a,c]}},293:(e,t,r)=>{r.d(t,{default:()=>a});var o,n=r(2115);let l=0,i={...o||(o=r.t(n,2))}.useId;function a(e){if(void 0!==i){let t=i();return null!=e?e:t}return function(e){let[t,r]=n.useState(e),o=e||t;return n.useEffect(()=>{null==t&&(l+=1,r("mui-".concat(l)))},[t]),o}(e)}},4761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f,teardown:()=>m});var o=r(2115),n=r(9183);let l=!0,i=!1,a=new n.Timeout,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(l=!0)}function u(){l=!1}function d(){"hidden"===this.visibilityState&&i&&(l=!0)}function m(e){e.removeEventListener("keydown",c,!0),e.removeEventListener("mousedown",u,!0),e.removeEventListener("pointerdown",u,!0),e.removeEventListener("touchstart",u,!0),e.removeEventListener("visibilitychange",d,!0)}function f(){let e=o.useCallback(e=>{if(null!=e){var t;(t=e.ownerDocument).addEventListener("keydown",c,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0)}},[]),t=o.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!function(e){let{target:t}=e;try{return t.matches(":focus-visible")}catch(e){}return l||function(e){let{type:t,tagName:r}=e;return"INPUT"===r&&!!s[t]&&!e.readOnly||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable}(t)}(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(i=!0,a.start(100,()=>{i=!1}),t.current=!1,!0)},ref:e}}},5619:(e,t,r)=>{r.d(t,{default:()=>n});var o=r(2115);let n=e=>{let t=o.useRef({});return o.useEffect(()=>{t.current=e}),t.current}},4562:(e,t,r)=>{r.d(t,{default:()=>s});var o=r(9811),n=r(3463);let l=function(e,t=[]){if(void 0===e)return{};let r={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&"function"==typeof e[r]&&!t.includes(r)).forEach(t=>{r[t]=e[t]}),r},i=function(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(r=>{t[r]=e[r]}),t},a=function(e){let{getSlotProps:t,additionalProps:r,externalSlotProps:o,externalForwardedProps:a,className:s}=e;if(!t){let e=(0,n.A)(r?.className,s,a?.className,o?.className),t={...r?.style,...a?.style,...o?.style},l={...r,...a,...o};return e.length>0&&(l.className=e),Object.keys(t).length>0&&(l.style=t),{props:l,internalRef:void 0}}let c=l({...a,...o}),u=i(o),d=i(a),m=t(c),f=(0,n.A)(m?.className,r?.className,s,a?.className,o?.className),h={...m?.style,...r?.style,...a?.style,...o?.style},p={...m,...r,...d,...u};return f.length>0&&(p.className=f),Object.keys(h).length>0&&(p.style=h),{props:p,internalRef:m.ref}},s=function(e){var t,r;let{elementType:n,externalSlotProps:l,ownerState:i,skipResolvingSlotProps:s=!1,...c}=e,u=s?{}:"function"==typeof l?l(i,void 0):l,{props:d,internalRef:m}=a({...c,externalSlotProps:u}),f=(0,o.default)(m,null==u?void 0:u.ref,null===(t=e.additionalProps)||void 0===t?void 0:t.ref);return r={...d,ref:f},void 0===n||"string"==typeof n?r:{...r,ownerState:{...r.ownerState,...i}}}}}]);