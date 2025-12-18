import{a as zt}from"./chunk-GDID4JSI.js";import{a as D,b as Nt}from"./chunk-DPQUDPJK.js";import{a as U,b as A,c as Tt,d as at,e as Dt,f as Bt,g as lt,h as Lt,j as Y,k as st,m as ct,q as R,s as At,t as T}from"./chunk-62PDQCB5.js";import"./chunk-4L54JD4S.js";import{g as Ft}from"./chunk-IJAD3HVN.js";import{Ab as k,Bb as xt,Cb as Ct,Db as q,Fb as Q,Gb as G,Hb as s,Ib as S,Kb as j,Mb as H,Pb as ot,Rb as it,Ta as p,U as N,V as P,Ya as mt,Zb as v,_ as $,_b as $t,ac as rt,bb as F,bc as _t,cb as z,cc as kt,db as B,eb as _,fa as nt,fb as O,ia as K,ic as St,ja as pt,jc as Ot,ka as w,kc as Mt,lb as M,lc as Et,mb as g,mc as Pt,nb as ft,oc as It,pb as vt,pc as L,qa as X,qb as W,ra as bt,sb as a,sc as et,ta as I,tb as l,ua as gt,ub as b,vb as J,wb as tt,xb as yt,za as ht,zb as wt}from"./chunk-APQM6NZY.js";var Wt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=P({})}return t})();var jt=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let i=0;i<o.length;i++)e.classList.add(o[i])}else{let o=n.split(" ");for(let i=0;i<o.length;i++)e.className+=" "+o[i]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(i=>this.removeClass(e,i)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var i=0;i<n.length;i++){if(n[i]==e)return o;n[i].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],i=0;for(var r=0;r<o.length;r++){if(o[r]==e)return i;o[r].attributes&&o[r].attributes[n]&&o[r].nodeType==1&&i++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",i=!0){e&&n&&(i&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let i=Z=>{if(Z)return getComputedStyle(Z).getPropertyValue("position")==="relative"?Z:i(Z.parentElement)},r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),d=n.offsetHeight,u=n.getBoundingClientRect(),y=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),m=this.getViewport(),f=i(e)?.getBoundingClientRect()||{top:-1*y,left:-1*h},C,E;u.top+d+r.height>m.height?(C=u.top-f.top-r.height,e.style.transformOrigin="bottom",u.top+C<0&&(C=-1*u.top)):(C=d+u.top-f.top,e.style.transformOrigin="top");let ut=u.left+r.width-m.width,Jt=u.left-f.left;r.width>m.width?E=(u.left-f.left)*-1:ut>0?E=Jt-ut:E=u.left-f.left,e.style.top=C+"px",e.style.left=E+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,o=!0){let i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),r=i.height,d=i.width,u=n.offsetHeight,y=n.offsetWidth,h=n.getBoundingClientRect(),m=this.getWindowScrollTop(),x=this.getWindowScrollLeft(),f=this.getViewport(),C,E;h.top+u+r>f.height?(C=h.top+m-r,e.style.transformOrigin="bottom",C<0&&(C=m)):(C=u+h.top+m,e.style.transformOrigin="top"),h.left+d>f.width?E=Math.max(0,h.left+x+y-d):E=h.left+x,e.style.top=C+"px",e.style.left=E+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),i=/(auto|scroll)/,r=d=>{let u=window.getComputedStyle(d,null);return i.test(u.getPropertyValue("overflow"))||i.test(u.getPropertyValue("overflowX"))||i.test(u.getPropertyValue("overflowY"))};for(let d of o){let u=d.nodeType===1&&d.dataset.scrollselectors;if(u){let y=u.split(",");for(let h of y){let m=this.findSingle(d,h);m&&r(m)&&n.push(m)}}d.nodeType!==9&&r(d)&&n.push(d)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,r=getComputedStyle(e).getPropertyValue("paddingTop"),d=r?parseFloat(r):0,u=e.getBoundingClientRect(),h=n.getBoundingClientRect().top+document.body.scrollTop-(u.top+document.body.scrollTop)-i-d,m=e.scrollTop,x=e.clientHeight,f=this.getOuterHeight(n);h<0?e.scrollTop=m+h:h+f>x&&(e.scrollTop=m+h-x+f)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,i=0,r=function(){i=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}static fadeOut(e,n){var o=1,i=50,r=n,d=i/r;let u=setInterval(()=>{o=o-d,o<=0&&(o=0,clearInterval(u)),e.style.opacity=o},i)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,i=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(r){return[].indexOf.call(document.querySelectorAll(r),this)!==-1};return i.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let i=getComputedStyle(e);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let i=getComputedStyle(e);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,i=n.getElementsByTagName("body")[0],r=e.innerWidth||o.clientWidth||i.clientWidth,d=e.innerHeight||o.clientHeight||i.clientHeight;return{width:r,height:d}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var i=e.indexOf("rv:");return!0}var r=e.indexOf("Edge/");return r>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),i=[];for(let r of o){let d=getComputedStyle(r);this.isVisible(r)&&d.display!="none"&&d.visibility!="hidden"&&i.push(r)}return i}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let i=getComputedStyle(o);if(this.isVisible(o)&&i.display!="none"&&i.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),i=0;if(o&&o.length>0){let r=o.indexOf(o[0].ownerDocument.activeElement);n?r==-1||r===0?i=o.length-1:i=r-1:r!=-1&&r!==o.length-1&&(i=r+1)}return o[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let r=(d=>!!(d&&d.constructor&&d.call&&d.apply))(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let i=document.createElement(e);return this.setAttributes(i,n),i.append(...o),i}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(i,r)=>{let d=e?.$attrs?.[i]?[e?.$attrs?.[i]]:[];return[r].flat().reduce((u,y)=>{if(y!=null){let h=typeof y;if(h==="string"||h==="number")u.push(y);else if(h==="object"){let m=Array.isArray(y)?o(i,y):Object.entries(y).map(([x,f])=>i==="style"&&(f||f===0)?`${x.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${f}`:f?x:void 0);u=m.length?u.concat(m.filter(x=>!!x)):u}}return u},d)};Object.entries(n).forEach(([i,r])=>{if(r!=null){let d=i.match(/^on(.+)/);d?e.addEventListener(d[1].toLowerCase(),r):i==="pBind"?this.setAttributes(e,r):(r=i==="class"?[...new Set(o("class",r))].join(" ").trim():i==="style"?o("style",r).join(";").trim():r,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=r),e.setAttribute(i,r))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();var Ht=(()=>{class t extends D{autofocus=!1;_autofocus=!1;focused=!1;platformId=$(ht);document=$(kt);host=$(gt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){et(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=jt.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275dir=B({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",v],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[_]})}return t})();var ee=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,ne={root:({props:t,instance:c})=>["p-badge p-component",{"p-badge-circle":st(t.value)&&String(t.value).length===1,"p-badge-dot":Y(t.value)&&!c.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Rt=(()=>{class t extends R{name="badge";theme=ee;classes=ne;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var dt=(()=>{class t extends D{styleClass=I();style=I();badgeSize=I();size=I();severity=I();value=I();badgeDisabled=I(!1,{transform:v});_componentStyle=$(Rt);containerClass=rt(()=>{let e="p-badge p-component";return st(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),Y(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=F({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,o){n&2&&(vt(o.style()),W(o.containerClass()),ft("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[j([Rt]),_],decls:1,vars:1,template:function(n,o){n&1&&s(0),n&2&&S(o.value())},dependencies:[L,T],encapsulation:2,changeDetection:0})}return t})(),Vt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=P({imports:[dt,T,T]})}return t})();var qt=(()=>{class t extends Nt{pathId;ngOnInit(){this.pathId="url(#"+ct()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=F({type:t,selectors:[["SpinnerIcon"]],features:[_],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(K(),a(0,"svg",0)(1,"g"),b(2,"path",1),l(),a(3,"defs")(4,"clipPath",2),b(5,"rect",3),l()()()),n&2&&(W(o.getClassNames()),M("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),p(),M("clip-path",o.pathId),p(3),g("id",o.pathId))},encapsulation:2})}return t})();var ie=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,re={root:"p-ink"},Qt=(()=>{class t extends R{name="ripple";theme=ie;classes=re;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Gt=(()=>{class t extends D{zone=$(bt);_componentStyle=$(Qt);animationListener;mouseDownListener;timeout;constructor(){super(),_t(()=>{et(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(A(n,"p-ink-active"),!at(n)&&!lt(n)){let d=Math.max(Tt(this.el.nativeElement),Bt(this.el.nativeElement));n.style.height=d+"px",n.style.width=d+"px"}let o=Dt(this.el.nativeElement),i=e.pageX-o.left+this.document.body.scrollTop-lt(n)/2,r=e.pageY-o.top+this.document.body.scrollLeft-at(n)/2;this.renderer.setStyle(n,"top",r+"px"),this.renderer.setStyle(n,"left",i+"px"),U(n,"p-ink-active"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&A(d,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&A(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),A(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Lt(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=B({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[j([Qt]),_]})}return t})();var le=["content"],se=["loadingicon"],ce=["icon"],de=["*"],Yt=t=>({class:t});function ue(t,c){t&1&&yt(0)}function pe(t,c){if(t&1&&b(0,"span",8),t&2){let e=k(3);g("ngClass",e.iconClass()),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function be(t,c){if(t&1&&b(0,"SpinnerIcon",9),t&2){let e=k(3);g("styleClass",e.spinnerIconClass())("spin",!0),M("aria-hidden",!0)("data-pc-section","loadingicon")}}function ge(t,c){if(t&1&&(J(0),O(1,pe,1,3,"span",6)(2,be,1,4,"SpinnerIcon",7),tt()),t&2){let e=k(2);p(),g("ngIf",e.loadingIcon),p(),g("ngIf",!e.loadingIcon)}}function he(t,c){}function me(t,c){if(t&1&&O(0,he,0,0,"ng-template",10),t&2){let e=k(2);g("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function fe(t,c){if(t&1&&(J(0),O(1,ge,3,2,"ng-container",2)(2,me,1,1,null,5),tt()),t&2){let e=k();p(),g("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),p(),g("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",H(3,Yt,e.iconClass()))}}function ve(t,c){if(t&1&&b(0,"span",8),t&2){let e=k(2);W(e.icon),g("ngClass",e.iconClass()),M("data-pc-section","icon")}}function ye(t,c){}function we(t,c){if(t&1&&O(0,ye,0,0,"ng-template",10),t&2){let e=k(2);g("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function xe(t,c){if(t&1&&(J(0),O(1,ve,1,4,"span",11)(2,we,1,1,null,5),tt()),t&2){let e=k();p(),g("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),p(),g("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",H(3,Yt,e.iconClass()))}}function Ce(t,c){if(t&1&&(a(0,"span",12),s(1),l()),t&2){let e=k();M("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),p(),S(e.label)}}function $e(t,c){if(t&1&&b(0,"p-badge",13),t&2){let e=k();g("value",e.badge)("severity",e.badgeSeverity)}}var _e=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ke={root:({instance:t,props:c})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!c.label&&!c.badge,"p-button-vertical":(c.iconPos==="top"||c.iconPos==="bottom")&&c.label,"p-button-loading":c.loading,"p-button-link":c.link,[`p-button-${c.severity}`]:c.severity,"p-button-raised":c.raised,"p-button-rounded":c.rounded,"p-button-text":c.text,"p-button-outlined":c.outlined,"p-button-sm":c.size==="small","p-button-lg":c.size==="large","p-button-plain":c.plain,"p-button-fluid":c.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},Ut=(()=>{class t extends R{name="button";theme=_e;classes=ke;static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Se=(()=>{class t extends D{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new X;onFocus=new X;onBlur=new X;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Y(this.fluid)?!!n:this.fluid}_componentStyle=$(Ut);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let o=n.currentValue;for(let i in o)this[i]=o[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=w(t)))(o||t)}})();static \u0275cmp=F({type:t,selectors:[["p-button"]],contentQueries:function(n,o,i){if(n&1&&(q(i,le,5),q(i,se,5),q(i,ce,5),q(i,At,4)),n&2){let r;Q(r=G())&&(o.contentTemplate=r.first),Q(r=G())&&(o.loadingIconTemplate=r.first),Q(r=G())&&(o.iconTemplate=r.first),Q(r=G())&&(o.templates=r)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",v],loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],severity:"severity",outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",$t],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],fluid:[2,"fluid","fluid",v],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[j([Ut]),_,nt],ngContentSelectors:de,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,o){n&1&&(xt(),a(0,"button",0),wt("click",function(r){return o.onClick.emit(r)})("focus",function(r){return o.onFocus.emit(r)})("blur",function(r){return o.onBlur.emit(r)}),Ct(1),O(2,ue,1,0,"ng-container",1)(3,fe,3,5,"ng-container",2)(4,xe,3,5,"ng-container",2)(5,Ce,2,3,"span",3)(6,$e,1,2,"p-badge",4),l()),n&2&&(g("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),M("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),p(2),g("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),p(),g("ngIf",o.loading),p(),g("ngIf",!o.loading),p(),g("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),p(),g("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[L,St,Mt,Pt,Et,Gt,Ht,qt,Vt,dt,T],encapsulation:2,changeDetection:0})}return t})(),Zt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=P({imports:[L,Se,T,T]})}return t})();var Xt=t=>["/news",t];function Oe(t,c){if(t&1&&(a(0,"div",77)(1,"span",67),s(2,"OLDEST"),l(),a(3,"a",68)(4,"h3"),s(5),l()(),a(6,"div",78)(7,"span"),s(8),l(),a(9,"span",71),s(10),ot(11,"date"),l()()()),t&2){let e=c.$implicit;p(3),g("routerLink",H(7,Xt,e.id)),p(2),S(e.title),p(3),S(e.edition),p(2),S(it(11,4,e.date.toDate(),"MMMM yyyy"))}}var Kt=class t{constructor(c){this.newsService=c}feauturedNews=null;olderNews=[];ngOnInit(){this.getNews()}getNews(){this.newsService.getNews().subscribe(c=>{c.length>0&&(this.feauturedNews=c[0],this.olderNews=c.slice(1))})}static \u0275fac=function(e){return new(e||t)(mt(zt))};static \u0275cmp=F({type:t,selectors:[["app-landing"]],decls:175,vars:10,consts:[[1,"landing-wrapper"],[1,"banner"],["loop","","muted","","autoplay","","playsinline","",1,"background-video"],["src","videos/landing-bg-3.mp4","type","video/mp4"],[1,"overlay"],[1,"banner-content"],[1,"scroll-down-arrow"],["xmlns","http://www.w3.org/2000/svg","width","80","height","80","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-arrow-down-short"],["fill-rule","evenodd","d","M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"],[1,"global-reach-section"],[1,"global-reach-txt-wrapper"],[1,"global-reach-txt"],[1,"global-reach-img-wrapper"],["src","img/img-global-reach-1.webp","alt","global-reach-image",1,"global-reach-img"],[1,"about-primary-txt-wrapper"],["a","",1,"about-primary-txt"],[1,"about-primary-img-wrapper"],["src","img/img-2.webp","alt","about-primary-image",1,"about-primary-img"],["src","logos/cad-marine-blanco-2.png","alt","cad-marine-logo",1,"about-primary-img-logo"],[1,"about-us-section"],[1,"about-us-txt-wrapper"],[1,"about-us-title"],[1,"about-us-txt"],[1,"mvp-section"],[1,"mvp-content","mission-bg"],[1,"mvp-title"],[1,"mvp-text"],[1,"mvp-content","vision-bg"],[1,"mvp-content","purpose-bg"],[1,"services-section"],[1,"services-content"],[1,"services-text-container"],[1,"services-title"],[1,"services-text"],[1,"services-img-container"],["src","img/img-6.webp","alt","",1,"services-img"],[1,"solutions-section"],[1,"solutions-title"],[1,"solutions-container"],["routerLink","/cad-shipbroker",1,"sipbroker-container","solutions-item"],["src","logos/cad-shipbroker-blanco-color.png","alt","logo-cad-shipbroker-blanco-color",1,"logo-solutions"],["routerLink","/cad-bunkering",1,"bunkering-container","solutions-item"],["src","logos/cad-bunkering-blanco-color.png","alt","logo-cad-bunkering-blanco-color",1,"logo-solutions"],[1,"values-section"],[1,"values-title"],[1,"values-container"],[1,"value-item"],[1,"img-container"],["src","img/img-integrity.webp","alt","integrity-image"],[1,"values-text-container"],["src","img/img-operational-excellence.webp","alt","image-operational-excellence"],["src","img/img-accountability.webp","alt","image-accountability"],["src","img/img-innovation.webp","alt","image-innovation"],["src","img/img-global-vision.webp","alt",""],[1,"global-section"],[1,"global-txt-wrapper"],["routerLink","/contact",1,"btn-primary"],[1,"global-img-wrapper"],["src","img/img-global.png"],["id","news",1,"news-section"],[1,"news-container"],[1,"news-title"],[1,"news-grid"],[1,"featured-card"],[1,"img-news-wrapper"],["src","img/img-news-section.webp","alt",""],[1,"featured-content"],[1,"category"],[3,"routerLink"],[1,"meta-featured"],[1,"subtitle"],[1,"date"],[1,"news-list"],["class","news-item",4,"ngFor","ngForOf"],[1,"final-section"],["src","logos/cad-marine-blanco-2.png","alt","cad-marine-logo"],["src","img/img-final-cad.webp","alt","img-final-ship"],[1,"news-item"],[1,"meta"]],template:function(e,n){e&1&&(a(0,"div",0)(1,"div",1)(2,"video",2),b(3,"source",3),l(),b(4,"div",4),a(5,"div",5)(6,"h1"),s(7,"Connecting vessels, "),b(8,"br"),s(9," markets, and opportunities"),l()(),a(10,"div",6),K(),a(11,"svg",7),b(12,"path",8),l()()(),pt(),a(13,"section",9)(14,"div",10)(15,"p",11),s(16," From Panama to the world, we link shipowners, operators, and clients through secure, transparent, and efficient maritime operations. "),l()(),a(17,"div",12),b(18,"img",13),l()(),a(19,"div",14)(20,"p",15),s(21," CAD Marine is a maritime consulting firm based in Panama, specializing in ship broking and marine services. We connect international players to ensure smooth, profitable, and compliant operations across global routes. Our commitment is simple: act with integrity, deliver with precision, and build trust that lasts. "),l()(),a(22,"div",16),b(23,"img",17)(24,"img",18),l(),a(25,"section",19)(26,"div",20)(27,"div",21)(28,"h1"),s(29,"About Us"),l(),a(30,"span"),s(31,"Ethics, precision, and a global perspective."),l()(),a(32,"div",22)(33,"p"),s(34," We are a team of maritime professionals driven by reliability, clarity, and strategic insight. From our headquarters in Panama, one of the world\u2019s most vital maritime hubs, we provide brokerage, bunkering, and advisory services that empower our clients to make smarter, faster, and safer decisions. "),l()()()(),a(35,"section",23)(36,"div",24)(37,"div",25)(38,"h1"),s(39,"Mission"),l()(),a(40,"div",26)(41,"p"),s(42," To deliver maritime brokerage and consultancy services that generate real value for our clients through trustworthy, efficient, and transparent processes, leveraging Panama\u2019s strategic position as a global logistics center. "),l()()(),a(43,"div",27)(44,"div",25)(45,"h1"),s(46,"Vision"),l()(),a(47,"div",26)(48,"p"),s(49," To become a global benchmark in ship broking and marine services, recognized for our ethics, trust, and capacity to deliver effective solutions in a changing industry. "),l()()(),a(50,"div",28)(51,"div",25)(52,"h1"),s(53,"Purpose"),l()(),a(54,"div",26)(55,"p"),s(56," To be the most reliable strategic partner in the maritime market, connecting shipowners, operators, and clients with complete transparency and efficiency. "),l()()()(),a(57,"section",29)(58,"div",30)(59,"div",31)(60,"div",32)(61,"h1"),s(62,"Services"),l(),a(63,"span"),s(64,"At CAD Marine, we integrate the essential pillars of maritime commerce:"),l()(),a(65,"div",33)(66,"ul")(67,"li"),s(68,"Ship broking and chartering"),l(),a(69,"li"),s(70,"Maritime consultancy"),l(),a(71,"li"),s(72,"Market analysis and advisory"),l(),a(73,"li"),s(74,"Vessel operations support"),l(),a(75,"li"),s(76,"Strategic connections between shipowners, operators, and clients"),l(),a(77,"li"),s(78,"Bunkering and logistics"),l()()()(),a(79,"div",34),b(80,"img",35),l()()(),a(81,"section",36)(82,"div",37)(83,"h1"),s(84,"Explore our solutions"),l()(),a(85,"div",38)(86,"a",39),b(87,"img",40),l(),a(88,"a",41),b(89,"img",42),l()()(),a(90,"section",43)(91,"div",44)(92,"h1"),s(93,"Values"),l()(),a(94,"div",45)(95,"div",46)(96,"div",47),b(97,"img",48),l(),a(98,"div",49)(99,"h2"),s(100,"Integrity"),l(),a(101,"span"),s(102,"We act with honesty and transparency in every negotiation."),l()()(),a(103,"div",46)(104,"div",47),b(105,"img",50),l(),a(106,"div",49)(107,"h2"),s(108,"Operational Excellence"),l(),a(109,"span"),s(110,"We are committed to precision, efficiency, and high-quality results."),l()()(),a(111,"div",46)(112,"div",47),b(113,"img",51),l(),a(114,"div",49)(115,"h2"),s(116,"Accountablity"),l(),a(117,"span"),s(118,"We uphold our commitments to clients, partners, and the environment."),l()()(),a(119,"div",46)(120,"div",47),b(121,"img",52),l(),a(122,"div",49)(123,"h2"),s(124,"Innovation"),l(),a(125,"span"),s(126,"We embrace change and technology to optimize operations."),l()()(),a(127,"div",46)(128,"div",47),b(129,"img",53),l(),a(130,"div",49)(131,"h2"),s(132,"Global Vision"),l(),a(133,"span"),s(134,"We bridge Panama to the world through expertise and connection."),l()()()()(),a(135,"section",54)(136,"div",55)(137,"h1"),s(138,"Global Reach"),l(),a(139,"p"),s(140," Through a strong network of partners and suppliers, CAD Marine operates across the Americas, Europe, and Asia. We support vessels and clients in energy, bulk, tanker, and project cargo segments, ensuring reliable coordination in every port of call. "),l(),a(141,"button",56),s(142,"Learn More"),l()(),a(143,"div",57),b(144,"img",58),a(145,"span"),s(146,"From Panama, we connect to the routes that move the world."),l()()(),a(147,"section",59)(148,"div",60)(149,"div",61)(150,"h1"),s(151,"News"),l()(),a(152,"div",62)(153,"div",63)(154,"h1"),s(155,"Featured"),l(),a(156,"div",64),b(157,"img",65),l(),a(158,"div",66)(159,"span",67),s(160,"FEATURE"),l(),a(161,"a",68)(162,"h3"),s(163),l()(),a(164,"div",69)(165,"p",70),s(166),l(),a(167,"span",71),s(168),ot(169,"date"),l()()()(),a(170,"div",72),O(171,Oe,12,9,"div",73),l()()()(),a(172,"section",74),b(173,"img",75)(174,"img",76),l()()),e&2&&(p(161),g("routerLink",H(8,Xt,n.feauturedNews==null?null:n.feauturedNews.id)),p(2),S(n.feauturedNews==null?null:n.feauturedNews.title),p(3),S(n.feauturedNews==null?null:n.feauturedNews.edition),p(2),S(it(169,5,n.feauturedNews==null?null:n.feauturedNews.date.toDate(),"MMMM yyyy")),p(3),g("ngForOf",n.olderNews))},dependencies:[Ft,L,Ot,It,Wt,Zt],styles:['.landing-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:auto}.banner[_ngcontent-%COMP%]{position:relative;top:0;left:0;width:auto;height:100vh;overflow:hidden;flex-shrink:0}.background-video[_ngcontent-%COMP%]{position:absolute;max-width:100%;min-height:100dvh;object-fit:cover;z-index:0}.overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;min-height:100%;background:linear-gradient(to bottom,#000c,#0000);pointer-events:none;z-index:1}.banner-content[_ngcontent-%COMP%]{position:absolute;z-index:2;text-align:left;top:50%;left:50%;transform:translate(-50%,-50%);width:fit-content}.banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1rem,6vw,3rem);font-weight:600;margin:0;padding:0;line-height:1.2}.banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before{content:"";display:block;width:50vw;height:3px;background-color:#fff;margin-bottom:25px}.scroll-down-arrow[_ngcontent-%COMP%]{position:absolute;bottom:30px;left:50%;transform:translate(-50%);font-size:2rem;color:#fff;z-index:2;animation:_ngcontent-%COMP%_bounce 2s infinite}@keyframes _ngcontent-%COMP%_bounce{0%,20%,50%,80%,to{transform:translate(-50%) translateY(0)}40%{transform:translate(-50%) translateY(-10px)}60%{transform:translate(-50%) translateY(-5px)}}.global-reach-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;margin-bottom:5%}.global-reach-txt-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;background-color:var(--primary-color)}.global-reach-txt-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,2.5vw,1.5rem);text-align:left;width:60%}.global-reach-img-wrapper[_ngcontent-%COMP%]{display:flex;height:100%;max-width:100%}.global-reach-img[_ngcontent-%COMP%]{object-fit:cover;display:block;max-width:100%;height:100%}@media (max-width: 768px){.global-reach-section[_ngcontent-%COMP%]{height:250px}.global-reach-txt-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;width:80%}.global-reach-txt-wrapper[_ngcontent-%COMP%]{padding:.5rem 0}}.about-primary-txt-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-block:5%;margin-inline:3%}.about-primary-txt-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;text-align:center;line-height:1.5;font-size:clamp(.5rem,2.5vw,1.5rem);max-width:80%}.about-primary-img-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;width:90%;gap:7%;padding-right:3rem;box-sizing:border-box;overflow:hidden;margin-block:5%;margin-inline:0%}.about-primary-img[_ngcontent-%COMP%]{display:block;max-width:100%;min-width:200px;flex:1 1 auto;height:auto}.about-primary-img-logo[_ngcontent-%COMP%]{display:block;height:auto;flex:0 1 auto;width:100%;min-width:200px;max-width:250px}@media (max-width: 768px){.about-primary-img-wrapper[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:end;padding:0;gap:2rem}.about-primary-img-logo[_ngcontent-%COMP%]{min-width:120px;max-width:150px}}.about-us-section[_ngcontent-%COMP%]{margin-block:5%;margin-inline:3%}.about-us-txt-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:1rem;max-width:100%}.about-us-title[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.about-us-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,6vw,4rem);font-weight:600;margin:0;padding:0;line-height:1.2}.about-us-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:clamp(1rem,2vw,1.5rem);font-weight:200}.about-us-txt[_ngcontent-%COMP%]{grid-column:2;grid-row:2;justify-self:end}.about-us-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,2.5vw,1.5rem);text-align:justify}@media (max-width: 768px){.about-us-txt-wrapper[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:.5rem}.about-us-title[_ngcontent-%COMP%]{grid-column:1;grid-row:1}.about-us-txt[_ngcontent-%COMP%]{grid-column:1;grid-row:2}}.mvp-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:100%;margin-block:5%}.mvp-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:200px 1fr;min-height:50vh}.mvp-title[_ngcontent-%COMP%]{align-self:center}.mvp-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;font-size:clamp(1rem,4vw,2rem)}.mvp-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:before{content:"";display:block;width:50px;height:3px;background-color:#fff}.mvp-text[_ngcontent-%COMP%]{padding:0 1rem;justify-self:center;align-self:center;text-align:justify;max-width:600px}.mvp-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,2.5vw,1.5rem)}.mission-bg[_ngcontent-%COMP%]{background-image:linear-gradient(#0009,#0009),url("./media/img-3-HHHJEIJZ.webp");background-size:cover;background-position:top}.vision-bg[_ngcontent-%COMP%]{background-image:linear-gradient(#0009,#0009),url("./media/img-4-ZM6LKANS.webp");background-size:cover;background-position:center}.purpose-bg[_ngcontent-%COMP%]{background-image:linear-gradient(#0009,#0009),url("./media/img-5-6KKKWERC.webp");background-size:cover;background-position:center}@media (max-width: 768px){.mvp-content[_ngcontent-%COMP%]{grid-template-columns:1fr;min-height:auto;padding:40px 0;align-items:center;justify-content:center}.mvp-text[_ngcontent-%COMP%]{padding:0 1.5rem;text-align:justify}}.services-section[_ngcontent-%COMP%]{width:100%;margin-block:5%}.services-content[_ngcontent-%COMP%]{width:100%;max-width:100%;display:grid;grid-template-columns:1fr 40%;align-items:start}.services-text-container[_ngcontent-%COMP%]{position:sticky;top:150px;padding-inline:3%}.services-img-container[_ngcontent-%COMP%]{width:100%;max-width:100%;overflow:hidden}.services-img[_ngcontent-%COMP%]{display:block;object-fit:cover;max-width:100%;height:auto}.services-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,6vw,4rem);font-weight:600;margin:0;padding:0;line-height:1.2}.services-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:clamp(.8rem,2vw,1.5rem);font-weight:200}.services-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,2.5vw,1.5rem);margin-bottom:1rem}@media (max-width: 768px){.services-content[_ngcontent-%COMP%]{grid-template-columns:1fr;justify-content:center}.services-text-container[_ngcontent-%COMP%]{position:static;margin-bottom:2rem}.services-img-container[_ngcontent-%COMP%]{max-height:400px}}.solutions-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-block:5%;gap:1rem}.solutions-container[_ngcontent-%COMP%]{display:flex;min-width:100%;overflow-x:hidden}.sipbroker-container[_ngcontent-%COMP%]{height:auto;max-width:100%;background-image:linear-gradient(#0009,#0009),url("./media/img-cad-shipbroker-Y5Z6775C.webp");background-size:cover;background-position:center}.bunkering-container[_ngcontent-%COMP%]{height:auto;max-width:100%;background-image:linear-gradient(#0009,#0009),url("./media/img-cad-bunkering-SGWZI7PD.webp");background-size:cover;background-position:center}.solutions-item[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;justify-content:center;width:100%;position:relative;cursor:pointer;transition:all .5s cubic-bezier(.25,.8,.25,1)}.solutions-container[_ngcontent-%COMP%]:hover   .solutions-item[_ngcontent-%COMP%]{filter:brightness(.5)}.solutions-item[_ngcontent-%COMP%]:hover{filter:brightness(1)!important;flex:2}.solutions-item[_ngcontent-%COMP%]:before{content:"";display:block;position:absolute;left:5%;top:50%;transform:translateY(-50%);min-width:100px;height:3px;background-color:#fff}.logo-solutions[_ngcontent-%COMP%]{display:block;height:auto;width:100%;max-width:500px}.solutions-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,6vw,4rem);font-weight:600;margin:0;padding:0;line-height:1.2}@media (max-width: 768px){.solutions-container[_ngcontent-%COMP%]{flex-direction:column}.solutions-item[_ngcontent-%COMP%]{width:100%;min-height:30vh;flex:none}.solutions-item[_ngcontent-%COMP%]:before{width:40px;left:5%}.logo-solutions[_ngcontent-%COMP%]{max-width:180px}.solutions-container[_ngcontent-%COMP%]:hover   .solutions-item[_ngcontent-%COMP%]{filter:brightness(1)!important}.solutions-item[_ngcontent-%COMP%]:hover{flex:none!important}}.values-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:5%;margin-inline:3%}.values-title[_ngcontent-%COMP%]{max-width:100%;text-align:left}.values-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,6vw,4rem)}.values-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;padding:1rem;gap:20px;max-width:100%}.value-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1rem;background-color:#505050;max-width:340px}.img-container[_ngcontent-%COMP%]{width:100%;height:200px;overflow:hidden}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.values-text-container[_ngcontent-%COMP%]{text-align:left;flex-grow:1}.values-text-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-block:10px;font-size:clamp(1rem,4vw,1.5rem)}.values-text-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,3vw,1rem);margin-block:10px}.global-section[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;gap:30px;margin-block:5%;margin-inline:3%;justify-content:center}.global-txt-wrapper[_ngcontent-%COMP%]{max-width:500px;flex:1 1 450px;min-width:250px}.global-txt-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,3vw,4rem)}.global-txt-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,2.5vw,1.5rem);text-align:justify}.global-img-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding-inline:3rem;gap:20px;flex:1 1 450px;min-width:250px}.global-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.global-img-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:300;line-height:1.5;font-size:clamp(.5rem,2vw,1rem);text-align:justify}.news-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-block:5%}.news-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(1.5rem,6vw,4rem);font-weight:600;margin:0;padding:0;padding-inline:3%;line-height:1.2;margin-bottom:2rem}.news-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:flex-start;gap:clamp(1rem,4vw,5rem);padding-inline:2%}.featured-card[_ngcontent-%COMP%]{position:relative;flex:3;min-width:50%;display:flex;flex-direction:column;gap:20px}.featured-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{position:absolute;font-size:clamp(1.5rem,6vw,2rem);top:0;left:0;z-index:2;padding:clamp(.5rem,3vw,3rem)}.featured-content[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;padding:clamp(1rem,3vw,3rem);width:100%;z-index:2}.img-news-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:auto;overflow:hidden}.img-news-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;display:block}.featured-content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{font-size:clamp(.5rem,1vw,1rem);letter-spacing:1.5px;display:block}.featured-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(.5rem,2vw,1.5rem);line-height:1.2;font-weight:700}.featured-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:clamp(.5rem,1.5vw,1rem);font-weight:400}.meta-featured[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:clamp(.5rem,1.5vw,1rem)}.meta-featured[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:clamp(.5rem,1.5vw,1rem);font-weight:400}.news-list[_ngcontent-%COMP%]{flex:2;min-width:300px;display:flex;flex-direction:column}.news-item[_ngcontent-%COMP%]{border-top:1px solid white;min-width:50%;padding:3%}.news-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:clamp(.8rem,1vw,1rem);letter-spacing:1.5px;display:block}.news-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:clamp(.7rem,2vw,1rem);line-height:1.2;font-weight:700}.meta[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:clamp(.5rem,2vw,2rem)}.meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:clamp(.5rem,1.5vw,1rem);margin-bottom:10px;font-weight:400}.news-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}@media (max-width: 768px){.news-list[_ngcontent-%COMP%]{min-width:100%;flex:auto}}.final-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;min-width:100%;gap:7%;box-sizing:border-box;overflow:hidden;margin-block:5%}.final-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1){display:block;height:auto;flex:0 1 auto;margin-left:3%;width:100%;min-width:150px;max-width:250px}.final-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2){display:block;max-width:100%;min-width:200px;flex:1 1 auto;height:auto}@media (max-width: 768px){.final-section[_ngcontent-%COMP%]{flex-direction:column;align-items:center;justify-content:end;padding:0;gap:2rem}.final-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1){min-width:120px;max-width:150px;margin-left:0}.final-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2){min-width:0;width:100%}}']})};export{Kt as LandingComponent};
