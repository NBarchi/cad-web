import{j as D,l as N,m as F,n as d,o as a,p as r,q as l,u as E}from"./chunk-62PDQCB5.js";import{Bb as v,Cb as I,Kb as p,U as m,Xa as u,Xb as L,Zb as O,_ as i,a as o,bb as g,cc as _,db as b,eb as C,fa as h,ka as c,ma as y,tc as T,ua as f,za as S}from"./chunk-APQM6NZY.js";var w=(()=>{class n extends l{name="common";static \u0275fac=(()=>{let e;return function(s){return(e||(e=c(n)))(s||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),k=(()=>{class n{document=i(_);platformId=i(S);el=i(f);injector=i(y);cd=i(L);renderer=i(u);config=i(E);baseComponentStyle=i(w);baseStyle=i(l);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=F("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,t="",s={}){return N(e,t,s)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!T(this.platformId)){let{dt:t}=e;t&&t.currentValue&&(this._loadScopedThemeStyles(t.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(t.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>d.off("theme:change",e))}_loadStyles(){let e=()=>{r.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),r.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!r.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),r.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!a.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:s,style:B}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,o({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(t?.css,o({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(s?.css,o({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(o({name:"global-style"},this.styleOptions),B),a.setLoadedStyleName("common")}if(!a.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:t}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,o({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(o({name:`${this.componentStyle?.name}-style`},this.styleOptions),t),a.setLoadedStyleName(this.componentStyle?.name)}if(!a.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,o({name:"layer-order",first:!0},this.styleOptions)),a.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:t}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},s=this.componentStyle?.load(t,o({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=s?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){r.clearLoadedStyleNames(),d.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,t){let s=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof s=="function"?s({instance:this}):typeof s=="string"?s:e}sx(e){let t=this.componentStyle?.inlineStyles?.[e];return typeof t=="function"?t({instance:this}):typeof t=="string"?t:o({},t)}get parent(){return this.parentInstance}static \u0275fac=function(t){return new(t||n)};static \u0275dir=b({type:n,inputs:{dt:"dt"},features:[p([w,l]),h]})}return n})();var j=["*"],x=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,A=(()=>{class n extends l{name="baseicon";inlineStyles=x;static \u0275fac=(()=>{let e;return function(s){return(e||(e=c(n)))(s||n)}})();static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();var oe=(()=>{class n extends k{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=D(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(s){return(e||(e=c(n)))(s||n)}})();static \u0275cmp=g({type:n,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",O],styleClass:"styleClass"},features:[p([A]),C],ngContentSelectors:j,decls:1,vars:0,template:function(t,s){t&1&&(v(),I(0))},encapsulation:2,changeDetection:0})}return n})();export{k as a,oe as b};
