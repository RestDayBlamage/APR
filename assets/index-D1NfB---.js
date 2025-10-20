(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();var Dd={exports:{}},Ol={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function GE(){if(Pv)return Ol;Pv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:u}}return Ol.Fragment=t,Ol.jsx=n,Ol.jsxs=n,Ol}var zv;function VE(){return zv||(zv=1,Dd.exports=GE()),Dd.exports}var Je=VE(),Ud={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function kE(){if(Bv)return re;Bv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function x(F,$,St){this.props=F,this.context=$,this.refs=y,this.updater=St||b}x.prototype.isReactComponent={},x.prototype.setState=function(F,$){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,$,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function N(){}N.prototype=x.prototype;function U(F,$,St){this.props=F,this.context=$,this.refs=y,this.updater=St||b}var A=U.prototype=new N;A.constructor=U,E(A,x.prototype),A.isPureReactComponent=!0;var L=Array.isArray;function O(){}var P={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function R(F,$,St){var Mt=St.ref;return{$$typeof:o,type:F,key:$,ref:Mt!==void 0?Mt:null,props:St}}function w(F,$){return R(F.type,$,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function Z(F){var $={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(St){return $[St]})}var et=/\/+/g;function lt(F,$){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):$.toString(36)}function ut(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(O,O):(F.status="pending",F.then(function($){F.status==="pending"&&(F.status="fulfilled",F.value=$)},function($){F.status==="pending"&&(F.status="rejected",F.reason=$)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function B(F,$,St,Mt,Dt){var at=typeof F;(at==="undefined"||at==="boolean")&&(F=null);var ht=!1;if(F===null)ht=!0;else switch(at){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(F.$$typeof){case o:case t:ht=!0;break;case _:return ht=F._init,B(ht(F._payload),$,St,Mt,Dt)}}if(ht)return Dt=Dt(F),ht=Mt===""?"."+lt(F,0):Mt,L(Dt)?(St="",ht!=null&&(St=ht.replace(et,"$&/")+"/"),B(Dt,$,St,"",function(Wt){return Wt})):Dt!=null&&(H(Dt)&&(Dt=w(Dt,St+(Dt.key==null||F&&F.key===Dt.key?"":(""+Dt.key).replace(et,"$&/")+"/")+ht)),$.push(Dt)),1;ht=0;var Ct=Mt===""?".":Mt+":";if(L(F))for(var Bt=0;Bt<F.length;Bt++)Mt=F[Bt],at=Ct+lt(Mt,Bt),ht+=B(Mt,$,St,at,Dt);else if(Bt=S(F),typeof Bt=="function")for(F=Bt.call(F),Bt=0;!(Mt=F.next()).done;)Mt=Mt.value,at=Ct+lt(Mt,Bt++),ht+=B(Mt,$,St,at,Dt);else if(at==="object"){if(typeof F.then=="function")return B(ut(F),$,St,Mt,Dt);throw $=String(F),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return ht}function q(F,$,St){if(F==null)return F;var Mt=[],Dt=0;return B(F,Mt,"","",function(at){return $.call(St,at,Dt++)}),Mt}function W(F){if(F._status===-1){var $=F._result;$=$(),$.then(function(St){(F._status===0||F._status===-1)&&(F._status=1,F._result=St)},function(St){(F._status===0||F._status===-1)&&(F._status=2,F._result=St)}),F._status===-1&&(F._status=0,F._result=$)}if(F._status===1)return F._result.default;throw F._result}var vt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},yt={map:q,forEach:function(F,$,St){q(F,function(){$.apply(this,arguments)},St)},count:function(F){var $=0;return q(F,function(){$++}),$},toArray:function(F){return q(F,function($){return $})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return re.Activity=g,re.Children=yt,re.Component=x,re.Fragment=n,re.Profiler=s,re.PureComponent=U,re.StrictMode=a,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(F){return P.H.useMemoCache(F)}},re.cache=function(F){return function(){return F.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(F,$,St){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Mt=E({},F.props),Dt=F.key;if($!=null)for(at in $.key!==void 0&&(Dt=""+$.key),$)!I.call($,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&$.ref===void 0||(Mt[at]=$[at]);var at=arguments.length-2;if(at===1)Mt.children=St;else if(1<at){for(var ht=Array(at),Ct=0;Ct<at;Ct++)ht[Ct]=arguments[Ct+2];Mt.children=ht}return R(F.type,Dt,Mt)},re.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:u,_context:F},F},re.createElement=function(F,$,St){var Mt,Dt={},at=null;if($!=null)for(Mt in $.key!==void 0&&(at=""+$.key),$)I.call($,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Dt[Mt]=$[Mt]);var ht=arguments.length-2;if(ht===1)Dt.children=St;else if(1<ht){for(var Ct=Array(ht),Bt=0;Bt<ht;Bt++)Ct[Bt]=arguments[Bt+2];Dt.children=Ct}if(F&&F.defaultProps)for(Mt in ht=F.defaultProps,ht)Dt[Mt]===void 0&&(Dt[Mt]=ht[Mt]);return R(F,at,Dt)},re.createRef=function(){return{current:null}},re.forwardRef=function(F){return{$$typeof:f,render:F}},re.isValidElement=H,re.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:W}},re.memo=function(F,$){return{$$typeof:d,type:F,compare:$===void 0?null:$}},re.startTransition=function(F){var $=P.T,St={};P.T=St;try{var Mt=F(),Dt=P.S;Dt!==null&&Dt(St,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(O,vt)}catch(at){vt(at)}finally{$!==null&&St.types!==null&&($.types=St.types),P.T=$}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(F){return P.H.use(F)},re.useActionState=function(F,$,St){return P.H.useActionState(F,$,St)},re.useCallback=function(F,$){return P.H.useCallback(F,$)},re.useContext=function(F){return P.H.useContext(F)},re.useDebugValue=function(){},re.useDeferredValue=function(F,$){return P.H.useDeferredValue(F,$)},re.useEffect=function(F,$){return P.H.useEffect(F,$)},re.useEffectEvent=function(F){return P.H.useEffectEvent(F)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(F,$,St){return P.H.useImperativeHandle(F,$,St)},re.useInsertionEffect=function(F,$){return P.H.useInsertionEffect(F,$)},re.useLayoutEffect=function(F,$){return P.H.useLayoutEffect(F,$)},re.useMemo=function(F,$){return P.H.useMemo(F,$)},re.useOptimistic=function(F,$){return P.H.useOptimistic(F,$)},re.useReducer=function(F,$,St){return P.H.useReducer(F,$,St)},re.useRef=function(F){return P.H.useRef(F)},re.useState=function(F){return P.H.useState(F)},re.useSyncExternalStore=function(F,$,St){return P.H.useSyncExternalStore(F,$,St)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.0",re}var Fv;function Rm(){return Fv||(Fv=1,Ud.exports=kE()),Ud.exports}var Rn=Rm(),Ld={exports:{}},Pl={},Nd={exports:{}},Od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function XE(){return Iv||(Iv=1,(function(o){function t(B,q){var W=B.length;B.push(q);t:for(;0<W;){var vt=W-1>>>1,yt=B[vt];if(0<s(yt,q))B[vt]=q,B[W]=yt,W=vt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var q=B[0],W=B.pop();if(W!==q){B[0]=W;t:for(var vt=0,yt=B.length,F=yt>>>1;vt<F;){var $=2*(vt+1)-1,St=B[$],Mt=$+1,Dt=B[Mt];if(0>s(St,W))Mt<yt&&0>s(Dt,St)?(B[vt]=Dt,B[Mt]=W,vt=Mt):(B[vt]=St,B[$]=W,vt=$);else if(Mt<yt&&0>s(Dt,W))B[vt]=Dt,B[Mt]=W,vt=Mt;else break t}}return q}function s(B,q){var W=B.sortIndex-q.sortIndex;return W!==0?W:B.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,S=!1,b=!1,E=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function A(B){for(var q=n(d);q!==null;){if(q.callback===null)a(d);else if(q.startTime<=B)a(d),q.sortIndex=q.expirationTime,t(p,q);else break;q=n(d)}}function L(B){if(E=!1,A(B),!b)if(n(p)!==null)b=!0,O||(O=!0,Z());else{var q=n(d);q!==null&&ut(L,q.startTime-B)}}var O=!1,P=-1,I=5,R=-1;function w(){return y?!0:!(o.unstable_now()-R<I)}function H(){if(y=!1,O){var B=o.unstable_now();R=B;var q=!0;try{t:{b=!1,E&&(E=!1,N(P),P=-1),S=!0;var W=v;try{e:{for(A(B),g=n(p);g!==null&&!(g.expirationTime>B&&w());){var vt=g.callback;if(typeof vt=="function"){g.callback=null,v=g.priorityLevel;var yt=vt(g.expirationTime<=B);if(B=o.unstable_now(),typeof yt=="function"){g.callback=yt,A(B),q=!0;break e}g===n(p)&&a(p),A(B)}else a(p);g=n(p)}if(g!==null)q=!0;else{var F=n(d);F!==null&&ut(L,F.startTime-B),q=!1}}break t}finally{g=null,v=W,S=!1}q=void 0}}finally{q?Z():O=!1}}}var Z;if(typeof U=="function")Z=function(){U(H)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,lt=et.port2;et.port1.onmessage=H,Z=function(){lt.postMessage(null)}}else Z=function(){x(H,0)};function ut(B,q){P=x(function(){B(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var W=v;v=q;try{return B()}finally{v=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=v;v=B;try{return q()}finally{v=W}},o.unstable_scheduleCallback=function(B,q,W){var vt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?vt+W:vt):W=vt,B){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=W+yt,B={id:_++,callback:q,priorityLevel:B,startTime:W,expirationTime:yt,sortIndex:-1},W>vt?(B.sortIndex=W,t(d,B),n(p)===null&&B===n(d)&&(E?(N(P),P=-1):E=!0,ut(L,W-vt))):(B.sortIndex=yt,t(p,B),b||S||(b=!0,O||(O=!0,Z()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var q=v;return function(){var W=v;v=q;try{return B.apply(this,arguments)}finally{v=W}}}})(Od)),Od}var Hv;function WE(){return Hv||(Hv=1,Nd.exports=XE()),Nd.exports}var Pd={exports:{}},Bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function qE(){if(Gv)return Bn;Gv=1;var o=Rm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,_)},Bn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},Bn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Bn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Bn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Bn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Bn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Bn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Bn.requestFormReset=function(p){a.d.r(p)},Bn.unstable_batchedUpdates=function(p,d){return p(d)},Bn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},Bn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Bn.version="19.2.0",Bn}var Vv;function YE(){if(Vv)return Pd.exports;Vv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pd.exports=qE(),Pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function ZE(){if(kv)return Pl;kv=1;var o=WE(),t=Rm(),n=YE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var T=!1,C=h.child;C;){if(C===r){T=!0,r=h,l=m;break}if(C===l){T=!0,l=h,r=m;break}C=C.sibling}if(!T){for(C=m.child;C;){if(C===r){T=!0,r=m,l=h;break}if(C===l){T=!0,l=m,r=h;break}C=C.sibling}if(!T)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),U=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case L:return"Suspense";case O:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return i=e.displayName||null,i!==null?i:lt(e.type)||"Memo";case I:i=e._payload,e=e._init;try{return lt(e(i))}catch{}}return null}var ut=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},vt=[],yt=-1;function F(e){return{current:e}}function $(e){0>yt||(e.current=vt[yt],vt[yt]=null,yt--)}function St(e,i){yt++,vt[yt]=e.current,e.current=i}var Mt=F(null),Dt=F(null),at=F(null),ht=F(null);function Ct(e,i){switch(St(at,i),St(Dt,e),St(Mt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?av(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=av(i),e=rv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Mt),St(Mt,e)}function Bt(){$(Mt),$(Dt),$(at)}function Wt(e){e.memoizedState!==null&&St(ht,e);var i=Mt.current,r=rv(i,e.type);i!==r&&(St(Dt,e),St(Mt,r))}function ue(e){Dt.current===e&&($(Mt),$(Dt)),ht.current===e&&($(ht),Dl._currentValue=W)}var en,V;function Te(e){if(en===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);en=i&&i[1]||"",V=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+V}var ne=!1;function $t(e,i){if(!e||ne)return"";ne=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ft){var it=ft}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ft){it=ft}e.call(_t.prototype)}}else{try{throw Error()}catch(ft){it=ft}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ft){if(ft&&it&&typeof ft.stack=="string")return[ft.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),T=m[0],C=m[1];if(T&&C){var G=T.split(`
`),nt=C.split(`
`);for(h=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(l===G.length||h===nt.length)for(l=G.length-1,h=nt.length-1;1<=l&&0<=h&&G[l]!==nt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(G[l]!==nt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||G[l]!==nt[h]){var pt=`
`+G[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=h);break}}}finally{ne=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Te(r):""}function qt(e,i){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te("Lazy");case 13:return e.child!==i&&i!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Te("Activity");default:return""}}function Se(e){try{var i="",r=null;do i+=qt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var It=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,We=o.unstable_shouldYield,z=o.unstable_requestPaint,M=o.unstable_now,k=o.unstable_getCurrentPriorityLevel,J=o.unstable_ImmediatePriority,dt=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,At=o.unstable_IdlePriority,Ht=o.log,Yt=o.unstable_setDisableYieldValue,Tt=null,Rt=null;function jt(e){if(typeof Ht=="function"&&Yt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Tt,e)}catch{}}var zt=Math.clz32?Math.clz32:Y,Ut=Math.log,se=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Ut(e)/se|0)|0}var bt=256,wt=262144,Ft=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?h=Et(l):(T&=C,T!==0?h=Et(T):r||(r=C&~e,r!==0&&(h=Et(r))))):(C=l&~m,C!==0?h=Et(C):T!==0?h=Et(T):r||(r=l&~e,r!==0&&(h=Et(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Gt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ae(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function be(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Vn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,i,r,l,h,m){var T=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(r=T&~r;0<r;){var pt=31-zt(r),_t=1<<pt;C[pt]=0,G[pt]=-1;var it=nt[pt];if(it!==null)for(nt[pt]=null,pt=0;pt<it.length;pt++){var ft=it[pt];ft!==null&&(ft.lane&=-536870913)}r&=~_t}l!==0&&Xo(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~i))}function Xo(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function $i(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-zt(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Ts(e,i){var r=i&-i;return r=(r&42)!==0?1:bs(r),(r&(e.suspendedLanes|i))!==0?0:r}function bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function As(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zr(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Cv(e.type))}function Wo(e,i){var r=q.p;try{return q.p=e,i()}finally{q.p=r}}var ui=Math.random().toString(36).slice(2),fn="__reactFiber$"+ui,wn="__reactProps$"+ui,Ya="__reactContainer$"+ui,qo="__reactEvents$"+ui,Tf="__reactListeners$"+ui,bf="__reactHandles$"+ui,pu="__reactResources$"+ui,Br="__reactMarker$"+ui;function D(e){delete e[fn],delete e[wn],delete e[qo],delete e[Tf],delete e[bf]}function j(e){var i=e[fn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ya]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=hv(e);e!==null;){if(r=e[fn])return r;e=hv(e)}return i}e=r,r=e.parentNode}return null}function st(e){if(e=e[fn]||e[Ya]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ct(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Q(e){var i=e[pu];return i||(i=e[pu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function xt(e){e[Br]=!0}var Lt=new Set,kt={};function Ot(e,i){Kt(e,i),Kt(e+"Capture",i)}function Kt(e,i){for(kt[e]=i,e=0;e<i.length;e++)Lt.add(i[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},de={};function Le(e){return It.call(de,e)?!0:It.call(Qt,e)?!1:ee.test(e)?de[e]=!0:(Qt[e]=!0,!1)}function Ge(e,i,r){if(Le(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Ne(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function pe(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ae(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){r=""+T,m.call(this,T)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(T){r=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Dn(e){if(!e._valueTracker){var i=qe(e)?"checked":"value";e._valueTracker=Ae(e,i,""+e[i])}}function ha(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=qe(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Fr=/[\n"\\]/g;function ge(e){return e.replace(Fr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function zn(e,i,r,l,h,m,T,C){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Xt(i)):e.value!==""+Xt(i)&&(e.value=""+Xt(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?Sn(e,T,Xt(i)):r!=null?Sn(e,T,Xt(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Xt(C):e.removeAttribute("name")}function kn(e,i,r,l,h,m,T,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Dn(e);return}r=r!=null?""+Xt(r):"",i=i!=null?""+Xt(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T),Dn(e)}function Sn(e,i,r){i==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function on(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Xt(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Rs(e,i,r){if(i!=null&&(i=""+Xt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Xt(r):""}function ta(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(ut(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Xt(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Dn(e)}function Cs(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function e_(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||zy.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function n_(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&e_(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&e_(e,m,i[m])}function Af(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var By=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mu(e){return Fy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var Rf=null;function Cf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function i_(e){var i=st(e);if(i&&(e=i.stateNode)){var r=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(zn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ge(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[wn]||null;if(!h)throw Error(a(90));zn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&ha(l)}break t;case"textarea":Rs(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&on(e,!!r.multiple,i,!1)}}}var wf=!1;function a_(e,i,r){if(wf)return e(i,r);wf=!0;try{var l=e(i);return l}finally{if(wf=!1,(ws!==null||Ds!==null)&&(nc(),ws&&(i=ws,e=Ds,Ds=ws=null,i_(i),e)))for(i=0;i<e.length;i++)i_(e[i])}}function Yo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[wn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Df=!1;if(pa)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){Df=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{Df=!1}var Za=null,Uf=null,_u=null;function r_(){if(_u)return _u;var e,i=Uf,r=i.length,l,h="value"in Za?Za.value:Za.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var T=r-e;for(l=1;l<=T&&i[r-l]===h[m-l];l++);return _u=h.slice(e,1<l?1-l:void 0)}function gu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function vu(){return!0}function s_(){return!1}function Zn(e){function i(r,l,h,m,T){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vu:s_,this.isPropagationStopped=s_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=vu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=vu)},persist:function(){},isPersistent:vu}),i}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=Zn(Ir),jo=g({},Ir,{view:0,detail:0}),Iy=Zn(jo),Lf,Nf,Ko,Su=g({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ko&&(Ko&&e.type==="mousemove"?(Lf=e.screenX-Ko.screenX,Nf=e.screenY-Ko.screenY):Nf=Lf=0,Ko=e),Lf)},movementY:function(e){return"movementY"in e?e.movementY:Nf}}),o_=Zn(Su),Hy=g({},Su,{dataTransfer:0}),Gy=Zn(Hy),Vy=g({},jo,{relatedTarget:0}),Of=Zn(Vy),ky=g({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=Zn(ky),Wy=g({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qy=Zn(Wy),Yy=g({},Ir,{data:0}),l_=Zn(Yy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Ky[e])?!!i[e]:!1}function Pf(){return Qy}var Jy=g({},jo,{key:function(e){if(e.key){var i=Zy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=gu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pf,charCode:function(e){return e.type==="keypress"?gu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$y=Zn(Jy),tM=g({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),u_=Zn(tM),eM=g({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pf}),nM=Zn(eM),iM=g({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),aM=Zn(iM),rM=g({},Su,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sM=Zn(rM),oM=g({},Ir,{newState:0,oldState:0}),lM=Zn(oM),uM=[9,13,27,32],zf=pa&&"CompositionEvent"in window,Qo=null;pa&&"documentMode"in document&&(Qo=document.documentMode);var cM=pa&&"TextEvent"in window&&!Qo,c_=pa&&(!zf||Qo&&8<Qo&&11>=Qo),f_=" ",h_=!1;function d_(e,i){switch(e){case"keyup":return uM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function fM(e,i){switch(e){case"compositionend":return p_(i);case"keypress":return i.which!==32?null:(h_=!0,f_);case"textInput":return e=i.data,e===f_&&h_?null:e;default:return null}}function hM(e,i){if(Us)return e==="compositionend"||!zf&&d_(e,i)?(e=r_(),_u=Uf=Za=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return c_&&i.locale!=="ko"?null:i.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!dM[e.type]:i==="textarea"}function __(e,i,r,l){ws?Ds?Ds.push(l):Ds=[l]:ws=l,i=uc(i,"onChange"),0<i.length&&(r=new xu("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Jo=null,$o=null;function pM(e){J0(e,0)}function yu(e){var i=ct(e);if(ha(i))return e}function g_(e,i){if(e==="change")return i}var v_=!1;if(pa){var Bf;if(pa){var Ff="oninput"in document;if(!Ff){var x_=document.createElement("div");x_.setAttribute("oninput","return;"),Ff=typeof x_.oninput=="function"}Bf=Ff}else Bf=!1;v_=Bf&&(!document.documentMode||9<document.documentMode)}function S_(){Jo&&(Jo.detachEvent("onpropertychange",y_),$o=Jo=null)}function y_(e){if(e.propertyName==="value"&&yu($o)){var i=[];__(i,$o,e,Cf(e)),a_(pM,i)}}function mM(e,i,r){e==="focusin"?(S_(),Jo=i,$o=r,Jo.attachEvent("onpropertychange",y_)):e==="focusout"&&S_()}function _M(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yu($o)}function gM(e,i){if(e==="click")return yu(i)}function vM(e,i){if(e==="input"||e==="change")return yu(i)}function xM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ci=typeof Object.is=="function"?Object.is:xM;function tl(e,i){if(ci(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!It.call(i,h)||!ci(e[h],i[h]))return!1}return!0}function M_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function E_(e,i){var r=M_(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=M_(r)}}function T_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?T_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function b_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Tn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Tn(e.document)}return i}function If(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var SM=pa&&"documentMode"in document&&11>=document.documentMode,Ls=null,Hf=null,el=null,Gf=!1;function A_(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Gf||Ls==null||Ls!==Tn(l)||(l=Ls,"selectionStart"in l&&If(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),el&&tl(el,l)||(el=l,l=uc(Hf,"onSelect"),0<l.length&&(i=new xu("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ls)))}function Hr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Ns={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionrun:Hr("Transition","TransitionRun"),transitionstart:Hr("Transition","TransitionStart"),transitioncancel:Hr("Transition","TransitionCancel"),transitionend:Hr("Transition","TransitionEnd")},Vf={},R_={};pa&&(R_=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Gr(e){if(Vf[e])return Vf[e];if(!Ns[e])return e;var i=Ns[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in R_)return Vf[e]=i[r];return e}var C_=Gr("animationend"),w_=Gr("animationiteration"),D_=Gr("animationstart"),yM=Gr("transitionrun"),MM=Gr("transitionstart"),EM=Gr("transitioncancel"),U_=Gr("transitionend"),L_=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kf.push("scrollEnd");function ki(e,i){L_.set(e,i),Ot(i,[e])}var Mu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],Os=0,Xf=0;function Eu(){for(var e=Os,i=Xf=Os=0;i<e;){var r=Ri[i];Ri[i++]=null;var l=Ri[i];Ri[i++]=null;var h=Ri[i];Ri[i++]=null;var m=Ri[i];if(Ri[i++]=null,l!==null&&h!==null){var T=l.pending;T===null?h.next=h:(h.next=T.next,T.next=h),l.pending=h}m!==0&&N_(r,h,m)}}function Tu(e,i,r,l){Ri[Os++]=e,Ri[Os++]=i,Ri[Os++]=r,Ri[Os++]=l,Xf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Wf(e,i,r,l){return Tu(e,i,r,l),bu(e)}function Vr(e,i){return Tu(e,null,null,i),bu(e)}function N_(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-zt(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function bu(e){if(50<El)throw El=0,td=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ps={};function TM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(e,i,r,l){return new TM(e,i,r,l)}function qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,i){var r=e.alternate;return r===null?(r=fi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function O_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Au(e,i,r,l,h,m){var T=0;if(l=e,typeof e=="function")qf(e)&&(T=1);else if(typeof e=="string")T=wE(e,r,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=fi(31,r,i,h),e.elementType=R,e.lanes=m,e;case E:return kr(r.children,h,m,i);case y:T=8,h|=24;break;case x:return e=fi(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case L:return e=fi(13,r,i,h),e.elementType=L,e.lanes=m,e;case O:return e=fi(19,r,i,h),e.elementType=O,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:T=10;break t;case N:T=9;break t;case A:T=11;break t;case P:T=14;break t;case I:T=16,l=null;break t}T=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=fi(T,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function kr(e,i,r,l){return e=fi(7,e,l,i),e.lanes=r,e}function Yf(e,i,r){return e=fi(6,e,null,i),e.lanes=r,e}function P_(e){var i=fi(18,null,null,0);return i.stateNode=e,i}function Zf(e,i,r){return i=fi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var z_=new WeakMap;function Ci(e,i){if(typeof e=="object"&&e!==null){var r=z_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Se(i)},z_.set(e,i),i)}return{value:e,source:i,stack:Se(i)}}var zs=[],Bs=0,Ru=null,nl=0,wi=[],Di=0,ja=null,ea=1,na="";function _a(e,i){zs[Bs++]=nl,zs[Bs++]=Ru,Ru=e,nl=i}function B_(e,i,r){wi[Di++]=ea,wi[Di++]=na,wi[Di++]=ja,ja=e;var l=ea;e=na;var h=32-zt(l)-1;l&=~(1<<h),r+=1;var m=32-zt(i)+h;if(30<m){var T=h-h%5;m=(l&(1<<T)-1).toString(32),l>>=T,h-=T,ea=1<<32-zt(i)+h|r<<h|l,na=m+e}else ea=1<<m|r<<h|l,na=e}function jf(e){e.return!==null&&(_a(e,1),B_(e,1,0))}function Kf(e){for(;e===Ru;)Ru=zs[--Bs],zs[Bs]=null,nl=zs[--Bs],zs[Bs]=null;for(;e===ja;)ja=wi[--Di],wi[Di]=null,na=wi[--Di],wi[Di]=null,ea=wi[--Di],wi[Di]=null}function F_(e,i){wi[Di++]=ea,wi[Di++]=na,wi[Di++]=ja,ea=i.id,na=i.overflow,ja=e}var Un=null,Ze=null,ye=!1,Ka=null,Ui=!1,Qf=Error(a(519));function Qa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw il(Ci(i,e)),Qf}function I_(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[fn]=e,i[wn]=l,r){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(r=0;r<bl.length;r++)_e(bl[r],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),kn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),ta(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||nv(i.textContent,r)?(l.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),l.onScroll!=null&&_e("scroll",i),l.onScrollEnd!=null&&_e("scrollend",i),l.onClick!=null&&(i.onclick=da),i=!0):i=!1,i||Qa(e,!0)}function H_(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Un=Un.return}}function Fs(e){if(e!==Un)return!1;if(!ye)return H_(e),ye=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||md(e.type,e.memoizedProps)),r=!r),r&&Ze&&Qa(e),H_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=fv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ze=fv(e)}else i===27?(i=Ze,fr(e.type)?(e=Sd,Sd=null,Ze=e):Ze=i):Ze=Un?Ni(e.stateNode.nextSibling):null;return!0}function Xr(){Ze=Un=null,ye=!1}function Jf(){var e=Ka;return e!==null&&(Jn===null?Jn=e:Jn.push.apply(Jn,e),Ka=null),e}function il(e){Ka===null?Ka=[e]:Ka.push(e)}var $f=F(null),Wr=null,ga=null;function Ja(e,i,r){St($f,i._currentValue),i._currentValue=r}function va(e){e._currentValue=$f.current,$($f)}function th(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function eh(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=h;for(var G=0;G<i.length;G++)if(C.context===i[G]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),th(m.return,r,e),l||(T=null);break t}m=C.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=r,m=T.alternate,m!==null&&(m.lanes|=r),th(T,r,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function Is(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var C=h.type;ci(h.pendingProps.value,T.value)||(e!==null?e.push(C):e=[C])}}else if(h===ht.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Dl):e=[Dl])}h=h.return}e!==null&&eh(i,e,r,l),i.flags|=262144}function Cu(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qr(e){Wr=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return G_(Wr,e)}function wu(e,i){return Wr===null&&qr(e),G_(e,i)}function G_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ga===null){if(e===null)throw Error(a(308));ga=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ga=ga.next=i;return r}var bM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},AM=o.unstable_scheduleCallback,RM=o.unstable_NormalPriority,hn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nh(){return{controller:new bM,data:new Map,refCount:0}}function al(e){e.refCount--,e.refCount===0&&AM(RM,function(){e.controller.abort()})}var rl=null,ih=0,Hs=0,Gs=null;function CM(e,i){if(rl===null){var r=rl=[];ih=0,Hs=sd(),Gs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ih++,i.then(V_,V_),i}function V_(){if(--ih===0&&rl!==null){Gs!==null&&(Gs.status="fulfilled");var e=rl;rl=null,Hs=0,Gs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function wM(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var k_=B.S;B.S=function(e,i){A0=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&CM(e,i),k_!==null&&k_(e,i)};var Yr=F(null);function ah(){var e=Yr.current;return e!==null?e:Ve.pooledCache}function Du(e,i){i===null?St(Yr,Yr.current):St(Yr,i.pool)}function X_(){var e=ah();return e===null?null:{parent:hn._currentValue,pool:e}}var Vs=Error(a(460)),rh=Error(a(474)),Uu=Error(a(542)),Lu={then:function(){}};function W_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function q_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(da,da),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Z_(e),e;default:if(typeof i.status=="string")i.then(da,da);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Z_(e),e}throw jr=i,Vs}}function Zr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(jr=r,Vs):r}}var jr=null;function Y_(){if(jr===null)throw Error(a(459));var e=jr;return jr=null,e}function Z_(e){if(e===Vs||e===Uu)throw Error(a(483))}var ks=null,sl=0;function Nu(e){var i=sl;return sl+=1,ks===null&&(ks=[]),q_(ks,e,i)}function ol(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ou(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function j_(e){function i(K,X){if(e){var tt=K.deletions;tt===null?(K.deletions=[X],K.flags|=16):tt.push(X)}}function r(K,X){if(!e)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function l(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function h(K,X){return K=ma(K,X),K.index=0,K.sibling=null,K}function m(K,X,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<X?(K.flags|=67108866,X):tt):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function T(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function C(K,X,tt,mt){return X===null||X.tag!==6?(X=Yf(tt,K.mode,mt),X.return=K,X):(X=h(X,tt),X.return=K,X)}function G(K,X,tt,mt){var Jt=tt.type;return Jt===E?pt(K,X,tt.props.children,mt,tt.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===I&&Zr(Jt)===X.type)?(X=h(X,tt.props),ol(X,tt),X.return=K,X):(X=Au(tt.type,tt.key,tt.props,null,K.mode,mt),ol(X,tt),X.return=K,X)}function nt(K,X,tt,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=Zf(tt,K.mode,mt),X.return=K,X):(X=h(X,tt.children||[]),X.return=K,X)}function pt(K,X,tt,mt,Jt){return X===null||X.tag!==7?(X=kr(tt,K.mode,mt,Jt),X.return=K,X):(X=h(X,tt),X.return=K,X)}function _t(K,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Yf(""+X,K.mode,tt),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return tt=Au(X.type,X.key,X.props,null,K.mode,tt),ol(tt,X),tt.return=K,tt;case b:return X=Zf(X,K.mode,tt),X.return=K,X;case I:return X=Zr(X),_t(K,X,tt)}if(ut(X)||Z(X))return X=kr(X,K.mode,tt,null),X.return=K,X;if(typeof X.then=="function")return _t(K,Nu(X),tt);if(X.$$typeof===U)return _t(K,wu(K,X),tt);Ou(K,X)}return null}function it(K,X,tt,mt){var Jt=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Jt!==null?null:C(K,X,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===Jt?G(K,X,tt,mt):null;case b:return tt.key===Jt?nt(K,X,tt,mt):null;case I:return tt=Zr(tt),it(K,X,tt,mt)}if(ut(tt)||Z(tt))return Jt!==null?null:pt(K,X,tt,mt,null);if(typeof tt.then=="function")return it(K,X,Nu(tt),mt);if(tt.$$typeof===U)return it(K,X,wu(K,tt),mt);Ou(K,tt)}return null}function ft(K,X,tt,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(tt)||null,C(X,K,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return K=K.get(mt.key===null?tt:mt.key)||null,G(X,K,mt,Jt);case b:return K=K.get(mt.key===null?tt:mt.key)||null,nt(X,K,mt,Jt);case I:return mt=Zr(mt),ft(K,X,tt,mt,Jt)}if(ut(mt)||Z(mt))return K=K.get(tt)||null,pt(X,K,mt,Jt,null);if(typeof mt.then=="function")return ft(K,X,tt,Nu(mt),Jt);if(mt.$$typeof===U)return ft(K,X,tt,wu(X,mt),Jt);Ou(X,mt)}return null}function Vt(K,X,tt,mt){for(var Jt=null,Re=null,Zt=X,ce=X=0,xe=null;Zt!==null&&ce<tt.length;ce++){Zt.index>ce?(xe=Zt,Zt=null):xe=Zt.sibling;var Ce=it(K,Zt,tt[ce],mt);if(Ce===null){Zt===null&&(Zt=xe);break}e&&Zt&&Ce.alternate===null&&i(K,Zt),X=m(Ce,X,ce),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce,Zt=xe}if(ce===tt.length)return r(K,Zt),ye&&_a(K,ce),Jt;if(Zt===null){for(;ce<tt.length;ce++)Zt=_t(K,tt[ce],mt),Zt!==null&&(X=m(Zt,X,ce),Re===null?Jt=Zt:Re.sibling=Zt,Re=Zt);return ye&&_a(K,ce),Jt}for(Zt=l(Zt);ce<tt.length;ce++)xe=ft(Zt,K,ce,tt[ce],mt),xe!==null&&(e&&xe.alternate!==null&&Zt.delete(xe.key===null?ce:xe.key),X=m(xe,X,ce),Re===null?Jt=xe:Re.sibling=xe,Re=xe);return e&&Zt.forEach(function(_r){return i(K,_r)}),ye&&_a(K,ce),Jt}function te(K,X,tt,mt){if(tt==null)throw Error(a(151));for(var Jt=null,Re=null,Zt=X,ce=X=0,xe=null,Ce=tt.next();Zt!==null&&!Ce.done;ce++,Ce=tt.next()){Zt.index>ce?(xe=Zt,Zt=null):xe=Zt.sibling;var _r=it(K,Zt,Ce.value,mt);if(_r===null){Zt===null&&(Zt=xe);break}e&&Zt&&_r.alternate===null&&i(K,Zt),X=m(_r,X,ce),Re===null?Jt=_r:Re.sibling=_r,Re=_r,Zt=xe}if(Ce.done)return r(K,Zt),ye&&_a(K,ce),Jt;if(Zt===null){for(;!Ce.done;ce++,Ce=tt.next())Ce=_t(K,Ce.value,mt),Ce!==null&&(X=m(Ce,X,ce),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return ye&&_a(K,ce),Jt}for(Zt=l(Zt);!Ce.done;ce++,Ce=tt.next())Ce=ft(Zt,K,ce,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&Zt.delete(Ce.key===null?ce:Ce.key),X=m(Ce,X,ce),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return e&&Zt.forEach(function(HE){return i(K,HE)}),ye&&_a(K,ce),Jt}function Ie(K,X,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var Jt=tt.key;X!==null;){if(X.key===Jt){if(Jt=tt.type,Jt===E){if(X.tag===7){r(K,X.sibling),mt=h(X,tt.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===I&&Zr(Jt)===X.type){r(K,X.sibling),mt=h(X,tt.props),ol(mt,tt),mt.return=K,K=mt;break t}r(K,X);break}else i(K,X);X=X.sibling}tt.type===E?(mt=kr(tt.props.children,K.mode,mt,tt.key),mt.return=K,K=mt):(mt=Au(tt.type,tt.key,tt.props,null,K.mode,mt),ol(mt,tt),mt.return=K,K=mt)}return T(K);case b:t:{for(Jt=tt.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){r(K,X.sibling),mt=h(X,tt.children||[]),mt.return=K,K=mt;break t}else{r(K,X);break}else i(K,X);X=X.sibling}mt=Zf(tt,K.mode,mt),mt.return=K,K=mt}return T(K);case I:return tt=Zr(tt),Ie(K,X,tt,mt)}if(ut(tt))return Vt(K,X,tt,mt);if(Z(tt)){if(Jt=Z(tt),typeof Jt!="function")throw Error(a(150));return tt=Jt.call(tt),te(K,X,tt,mt)}if(typeof tt.then=="function")return Ie(K,X,Nu(tt),mt);if(tt.$$typeof===U)return Ie(K,X,wu(K,tt),mt);Ou(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(r(K,X.sibling),mt=h(X,tt),mt.return=K,K=mt):(r(K,X),mt=Yf(tt,K.mode,mt),mt.return=K,K=mt),T(K)):r(K,X)}return function(K,X,tt,mt){try{sl=0;var Jt=Ie(K,X,tt,mt);return ks=null,Jt}catch(Zt){if(Zt===Vs||Zt===Uu)throw Zt;var Re=fi(29,Zt,null,K.mode);return Re.lanes=mt,Re.return=K,Re}finally{}}}var Kr=j_(!0),K_=j_(!1),$a=!1;function sh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(De&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=bu(e),N_(e,null,r),i}return Tu(e,l,i,r),bu(e)}function ll(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,$i(e,r)}}function lh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var uh=!1;function ul(){if(uh){var e=Gs;if(e!==null)throw e}}function cl(e,i,r,l){uh=!1;var h=e.updateQueue;$a=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var G=C,nt=G.next;G.next=null,T===null?m=nt:T.next=nt,T=G;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,C=pt.lastBaseUpdate,C!==T&&(C===null?pt.firstBaseUpdate=nt:C.next=nt,pt.lastBaseUpdate=G))}if(m!==null){var _t=h.baseState;T=0,pt=nt=G=null,C=m;do{var it=C.lane&-536870913,ft=it!==C.lane;if(ft?(ve&it)===it:(l&it)===it){it!==0&&it===Hs&&(uh=!0),pt!==null&&(pt=pt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Vt=e,te=C;it=i;var Ie=r;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){_t=Vt.call(Ie,_t,it);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,it=typeof Vt=="function"?Vt.call(Ie,_t,it):Vt,it==null)break t;_t=g({},_t,it);break t;case 2:$a=!0}}it=C.callback,it!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=h.callbacks,ft===null?h.callbacks=[it]:ft.push(it))}else ft={lane:it,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pt===null?(nt=pt=ft,G=_t):pt=pt.next=ft,T|=it;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;ft=C,C=ft.next,ft.next=null,h.lastBaseUpdate=ft,h.shared.pending=null}}while(!0);pt===null&&(G=_t),h.baseState=G,h.firstBaseUpdate=nt,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),sr|=T,e.lanes=T,e.memoizedState=_t}}function Q_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function J_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Q_(r[e],i)}var Xs=F(null),Pu=F(0);function $_(e,i){e=Ra,St(Pu,e),St(Xs,i),Ra=e|i.baseLanes}function ch(){St(Pu,Ra),St(Xs,Xs.current)}function fh(){Ra=Pu.current,$(Xs),$(Pu)}var hi=F(null),Li=null;function nr(e){var i=e.alternate;St(ln,ln.current&1),St(hi,e),Li===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&(Li=e)}function hh(e){St(ln,ln.current),St(hi,e),Li===null&&(Li=e)}function tg(e){e.tag===22?(St(ln,ln.current),St(hi,e),Li===null&&(Li=e)):ir()}function ir(){St(ln,ln.current),St(hi,hi.current)}function di(e){$(hi),Li===e&&(Li=null),$(ln)}var ln=F(0);function zu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||vd(r)||xd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xa=0,le=null,Be=null,dn=null,Bu=!1,Ws=!1,Qr=!1,Fu=0,fl=0,qs=null,DM=0;function nn(){throw Error(a(321))}function dh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ci(e[r],i[r]))return!1;return!0}function ph(e,i,r,l,h,m){return xa=m,le=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Bg:wh,Qr=!1,m=r(l,h),Qr=!1,Ws&&(m=ng(i,r,l,h)),eg(e),m}function eg(e){B.H=pl;var i=Be!==null&&Be.next!==null;if(xa=0,dn=Be=le=null,Bu=!1,fl=0,qs=null,i)throw Error(a(300));e===null||pn||(e=e.dependencies,e!==null&&Cu(e)&&(pn=!0))}function ng(e,i,r,l){le=e;var h=0;do{if(Ws&&(qs=null),fl=0,Ws=!1,25<=h)throw Error(a(301));if(h+=1,dn=Be=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=Fg,m=i(r,l)}while(Ws);return m}function UM(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?hl(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(le.flags|=1024),i}function mh(){var e=Fu!==0;return Fu=0,e}function _h(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function gh(e){if(Bu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bu=!1}xa=0,dn=Be=le=null,Ws=!1,fl=Fu=0,qs=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?le.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(Be===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=dn===null?le.memoizedState:dn.next;if(i!==null)dn=i,Be=e;else{if(e===null)throw le.alternate===null?Error(a(467)):Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},dn===null?le.memoizedState=dn=e:dn=dn.next=e}return dn}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hl(e){var i=fl;return fl+=1,qs===null&&(qs=[]),e=q_(qs,e,i),i=le,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Bg:wh),e}function Hu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===U)return Ln(e)}throw Error(a(438,String(e)))}function vh(e){var i=null,r=le.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Iu(),le.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=w;return i.index++,r}function Sa(e,i){return typeof i=="function"?i(e):i}function Gu(e){var i=un();return xh(i,Be,e)}function xh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var C=T=null,G=null,nt=i,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(ve&_t)===_t:(xa&_t)===_t){var it=nt.revertLane;if(it===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===Hs&&(pt=!0);else if((xa&it)===it){nt=nt.next,it===Hs&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(C=G=_t,T=m):G=G.next=_t,le.lanes|=it,sr|=it;_t=nt.action,Qr&&r(m,_t),m=nt.hasEagerState?nt.eagerState:r(m,_t)}else it={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(C=G=it,T=m):G=G.next=it,le.lanes|=_t,sr|=_t;nt=nt.next}while(nt!==null&&nt!==i);if(G===null?T=m:G.next=C,!ci(m,e.memoizedState)&&(pn=!0,pt&&(r=Gs,r!==null)))throw r;e.memoizedState=m,e.baseState=T,e.baseQueue=G,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sh(e){var i=un(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var T=h=h.next;do m=e(m,T.action),T=T.next;while(T!==h);ci(m,i.memoizedState)||(pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function ig(e,i,r){var l=le,h=un(),m=ye;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var T=!ci((Be||h).memoizedState,r);if(T&&(h.memoizedState=r,pn=!0),h=h.queue,Eh(sg.bind(null,l,h,e),[e]),h.getSnapshot!==i||T||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,Ys(9,{destroy:void 0},rg.bind(null,l,h,r,i),null),Ve===null)throw Error(a(349));m||(xa&127)!==0||ag(l,i,r)}return r}function ag(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=le.updateQueue,i===null?(i=Iu(),le.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function rg(e,i,r,l){i.value=r,i.getSnapshot=l,og(i)&&lg(e)}function sg(e,i,r){return r(function(){og(i)&&lg(e)})}function og(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ci(e,r)}catch{return!0}}function lg(e){var i=Vr(e,2);i!==null&&$n(i,e,2)}function yh(e){var i=Xn();if(typeof e=="function"){var r=e;if(e=r(),Qr){jt(!0);try{r()}finally{jt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:e},i}function ug(e,i,r,l){return e.baseState=r,xh(e,Be,typeof l=="function"?l:Sa)}function LM(e,i,r,l,h){if(Xu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};B.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,cg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function cg(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=B.T,T={};B.T=T;try{var C=r(h,l),G=B.S;G!==null&&G(T,C),fg(e,i,C)}catch(nt){Mh(e,i,nt)}finally{m!==null&&T.types!==null&&(m.types=T.types),B.T=m}}else try{m=r(h,l),fg(e,i,m)}catch(nt){Mh(e,i,nt)}}function fg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){hg(e,i,l)},function(l){return Mh(e,i,l)}):hg(e,i,r)}function hg(e,i,r){i.status="fulfilled",i.value=r,dg(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,cg(e,r)))}function Mh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,dg(i),i=i.next;while(i!==l)}e.action=null}function dg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function pg(e,i){return i}function mg(e,i){if(ye){var r=Ve.formState;if(r!==null){t:{var l=le;if(ye){if(Ze){e:{for(var h=Ze,m=Ui;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ni(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ze=Ni(h.nextSibling),l=h.data==="F!";break t}}Qa(l)}l=!1}l&&(i=r[0])}}return r=Xn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pg,lastRenderedState:i},r.queue=l,r=Og.bind(null,le,l),l.dispatch=r,l=yh(!1),m=Ch.bind(null,le,!1,l.queue),l=Xn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=LM.bind(null,le,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function _g(e){var i=un();return gg(i,Be,e)}function gg(e,i,r){if(i=xh(e,i,pg)[0],e=Gu(Sa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=hl(i)}catch(T){throw T===Vs?Uu:T}else l=i;i=un();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(le.flags|=2048,Ys(9,{destroy:void 0},NM.bind(null,h,r),null)),[l,m,e]}function NM(e,i){e.action=i}function vg(e){var i=un(),r=Be;if(r!==null)return gg(i,r,e);un(),i=i.memoizedState,r=un();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Ys(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=le.updateQueue,i===null&&(i=Iu(),le.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function xg(){return un().memoizedState}function Vu(e,i,r,l){var h=Xn();le.flags|=e,h.memoizedState=Ys(1|i,{destroy:void 0},r,l===void 0?null:l)}function ku(e,i,r,l){var h=un();l=l===void 0?null:l;var m=h.memoizedState.inst;Be!==null&&l!==null&&dh(l,Be.memoizedState.deps)?h.memoizedState=Ys(i,m,r,l):(le.flags|=e,h.memoizedState=Ys(1|i,m,r,l))}function Sg(e,i){Vu(8390656,8,e,i)}function Eh(e,i){ku(2048,8,e,i)}function OM(e){le.flags|=4;var i=le.updateQueue;if(i===null)i=Iu(),le.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function yg(e){var i=un().memoizedState;return OM({ref:i,nextImpl:e}),function(){if((De&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Mg(e,i){return ku(4,2,e,i)}function Eg(e,i){return ku(4,4,e,i)}function Tg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function bg(e,i,r){r=r!=null?r.concat([e]):null,ku(4,4,Tg.bind(null,i,e),r)}function Th(){}function Ag(e,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&dh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Rg(e,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&dh(i,l[1]))return l[0];if(l=e(),Qr){jt(!0);try{e()}finally{jt(!1)}}return r.memoizedState=[l,i],l}function bh(e,i,r){return r===void 0||(xa&1073741824)!==0&&(ve&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=C0(),le.lanes|=e,sr|=e,r)}function Cg(e,i,r,l){return ci(r,i)?r:Xs.current!==null?(e=bh(e,r,l),ci(e,i)||(pn=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(ve&261930)===0?(pn=!0,e.memoizedState=r):(e=C0(),le.lanes|=e,sr|=e,i)}function wg(e,i,r,l,h){var m=q.p;q.p=m!==0&&8>m?m:8;var T=B.T,C={};B.T=C,Ch(e,!1,i,r);try{var G=h(),nt=B.S;if(nt!==null&&nt(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pt=wM(G,l);dl(e,i,pt,_i(e))}else dl(e,i,l,_i(e))}catch(_t){dl(e,i,{then:function(){},status:"rejected",reason:_t},_i())}finally{q.p=m,T!==null&&C.types!==null&&(T.types=C.types),B.T=T}}function PM(){}function Ah(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=Dg(e).queue;wg(e,h,i,W,r===null?PM:function(){return Ug(e),r(l)})}function Dg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:W},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ug(e){var i=Dg(e);i.next===null&&(i=e.alternate.memoizedState),dl(e,i.next.queue,{},_i())}function Rh(){return Ln(Dl)}function Lg(){return un().memoizedState}function Ng(){return un().memoizedState}function zM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=_i();e=tr(r);var l=er(i,e,r);l!==null&&($n(l,i,r),ll(l,i,r)),i={cache:nh()},e.payload=i;return}i=i.return}}function BM(e,i,r){var l=_i();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xu(e)?Pg(i,r):(r=Wf(e,i,r,l),r!==null&&($n(r,e,l),zg(r,i,l)))}function Og(e,i,r){var l=_i();dl(e,i,r,l)}function dl(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))Pg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,C=m(T,r);if(h.hasEagerState=!0,h.eagerState=C,ci(C,T))return Tu(e,i,h,0),Ve===null&&Eu(),!1}catch{}finally{}if(r=Wf(e,i,h,l),r!==null)return $n(r,e,l),zg(r,i,l),!0}return!1}function Ch(e,i,r,l){if(l={lane:2,revertLane:sd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Xu(e)){if(i)throw Error(a(479))}else i=Wf(e,r,l,2),i!==null&&$n(i,e,2)}function Xu(e){var i=e.alternate;return e===le||i!==null&&i===le}function Pg(e,i){Ws=Bu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function zg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,$i(e,r)}}var pl={readContext:Ln,use:Hu,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};pl.useEffectEvent=nn;var Bg={readContext:Ln,use:Hu,useCallback:function(e,i){return Xn().memoizedState=[e,i===void 0?null:i],e},useContext:Ln,useEffect:Sg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Vu(4194308,4,Tg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Vu(4194308,4,e,i)},useInsertionEffect:function(e,i){Vu(4,2,e,i)},useMemo:function(e,i){var r=Xn();i=i===void 0?null:i;var l=e();if(Qr){jt(!0);try{e()}finally{jt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Xn();if(r!==void 0){var h=r(i);if(Qr){jt(!0);try{r(i)}finally{jt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=BM.bind(null,le,e),[l.memoizedState,e]},useRef:function(e){var i=Xn();return e={current:e},i.memoizedState=e},useState:function(e){e=yh(e);var i=e.queue,r=Og.bind(null,le,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Th,useDeferredValue:function(e,i){var r=Xn();return bh(r,e,i)},useTransition:function(){var e=yh(!1);return e=wg.bind(null,le,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=le,h=Xn();if(ye){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ve===null)throw Error(a(349));(ve&127)!==0||ag(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Sg(sg.bind(null,l,m,e),[e]),l.flags|=2048,Ys(9,{destroy:void 0},rg.bind(null,l,m,r,i),null),r},useId:function(){var e=Xn(),i=Ve.identifierPrefix;if(ye){var r=na,l=ea;r=(l&~(1<<32-zt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Fu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=DM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Rh,useFormState:mg,useActionState:mg,useOptimistic:function(e){var i=Xn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Ch.bind(null,le,!0,r),r.dispatch=i,[e,i]},useMemoCache:vh,useCacheRefresh:function(){return Xn().memoizedState=zM.bind(null,le)},useEffectEvent:function(e){var i=Xn(),r={impl:e};return i.memoizedState=r,function(){if((De&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},wh={readContext:Ln,use:Hu,useCallback:Ag,useContext:Ln,useEffect:Eh,useImperativeHandle:bg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:Rg,useReducer:Gu,useRef:xg,useState:function(){return Gu(Sa)},useDebugValue:Th,useDeferredValue:function(e,i){var r=un();return Cg(r,Be.memoizedState,e,i)},useTransition:function(){var e=Gu(Sa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:hl(e),i]},useSyncExternalStore:ig,useId:Lg,useHostTransitionStatus:Rh,useFormState:_g,useActionState:_g,useOptimistic:function(e,i){var r=un();return ug(r,Be,e,i)},useMemoCache:vh,useCacheRefresh:Ng};wh.useEffectEvent=yg;var Fg={readContext:Ln,use:Hu,useCallback:Ag,useContext:Ln,useEffect:Eh,useImperativeHandle:bg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:Rg,useReducer:Sh,useRef:xg,useState:function(){return Sh(Sa)},useDebugValue:Th,useDeferredValue:function(e,i){var r=un();return Be===null?bh(r,e,i):Cg(r,Be.memoizedState,e,i)},useTransition:function(){var e=Sh(Sa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:hl(e),i]},useSyncExternalStore:ig,useId:Lg,useHostTransitionStatus:Rh,useFormState:vg,useActionState:vg,useOptimistic:function(e,i){var r=un();return Be!==null?ug(r,Be,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:vh,useCacheRefresh:Ng};Fg.useEffectEvent=yg;function Dh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Uh={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=_i(),h=tr(l);h.payload=i,r!=null&&(h.callback=r),i=er(e,h,l),i!==null&&($n(i,e,l),ll(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=_i(),h=tr(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=er(e,h,l),i!==null&&($n(i,e,l),ll(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=_i(),l=tr(r);l.tag=2,i!=null&&(l.callback=i),i=er(e,l,r),i!==null&&($n(i,e,r),ll(i,e,r))}};function Ig(e,i,r,l,h,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,T):i.prototype&&i.prototype.isPureReactComponent?!tl(r,l)||!tl(h,m):!0}function Hg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Uh.enqueueReplaceState(i,i.state,null)}function Jr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Gg(e){Mu(e)}function Vg(e){console.error(e)}function kg(e){Mu(e)}function Wu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Xg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Lh(e,i,r){return r=tr(r),r.tag=3,r.payload={element:null},r.callback=function(){Wu(e,i)},r}function Wg(e){return e=tr(e),e.tag=3,e}function qg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Xg(i,r,l)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){Xg(i,r,l),typeof h!="function"&&(or===null?or=new Set([this]):or.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function FM(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Is(i,r,h,!0),r=hi.current,r!==null){switch(r.tag){case 31:case 13:return Li===null?ic():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Lu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),id(e,l,h)),!1;case 22:return r.flags|=65536,l===Lu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),id(e,l,h)),!1}throw Error(a(435,r.tag))}return id(e,l,h),ic(),!1}if(ye)return i=hi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Qf&&(e=Error(a(422),{cause:l}),il(Ci(e,r)))):(l!==Qf&&(i=Error(a(423),{cause:l}),il(Ci(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ci(l,r),h=Lh(e.stateNode,l,h),lh(e,h),an!==4&&(an=2)),!1;var m=Error(a(520),{cause:l});if(m=Ci(m,r),Ml===null?Ml=[m]:Ml.push(m),an!==4&&(an=2),i===null)return!0;l=Ci(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Lh(r.stateNode,l,e),lh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(or===null||!or.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Wg(h),qg(h,e,r,l),lh(r,h),!1}r=r.return}while(r!==null);return!1}var Nh=Error(a(461)),pn=!1;function Nn(e,i,r,l){i.child=e===null?K_(i,null,r,l):Kr(i,e.child,r,l)}function Yg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var T={};for(var C in l)C!=="ref"&&(T[C]=l[C])}else T=l;return qr(i),l=ph(e,i,r,T,m,h),C=mh(),e!==null&&!pn?(_h(e,i,h),ya(e,i,h)):(ye&&C&&jf(i),i.flags|=1,Nn(e,i,l,h),i.child)}function Zg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!qf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,jg(e,i,m,l,h)):(e=Au(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Gh(e,h)){var T=m.memoizedProps;if(r=r.compare,r=r!==null?r:tl,r(T,l)&&e.ref===i.ref)return ya(e,i,h)}return i.flags|=1,e=ma(m,l),e.ref=i.ref,e.return=i,i.child=e}function jg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(tl(m,l)&&e.ref===i.ref)if(pn=!1,i.pendingProps=l=m,Gh(e,h))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,ya(e,i,h)}return Oh(e,i,r,l,h)}function Kg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Qg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Du(i,m!==null?m.cachePool:null),m!==null?$_(i,m):ch(),tg(i);else return l=i.lanes=536870912,Qg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Du(i,m.cachePool),$_(i,m),ir(),i.memoizedState=null):(e!==null&&Du(i,null),ch(),ir());return Nn(e,i,h,r),i.child}function ml(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Qg(e,i,r,l,h){var m=ah();return m=m===null?null:{parent:hn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Du(i,null),ch(),tg(i),e!==null&&Is(e,i,l,!0),i.childLanes=h,null}function qu(e,i){return i=Zu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Jg(e,i,r){return Kr(i,e.child,null,r),e=qu(i,i.pendingProps),e.flags|=2,di(i),i.memoizedState=null,e}function IM(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ye){if(l.mode==="hidden")return e=qu(i,l),i.lanes=536870912,ml(null,e);if(hh(i),(e=Ze)?(e=cv(e,Ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},r=P_(e),r.return=i,i.child=r,Un=i,Ze=null)):e=null,e===null)throw Qa(i);return i.lanes=536870912,null}return qu(i,l)}var m=e.memoizedState;if(m!==null){var T=m.dehydrated;if(hh(i),h)if(i.flags&256)i.flags&=-257,i=Jg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||Is(e,i,r,!1),h=(r&e.childLanes)!==0,pn||h){if(l=Ve,l!==null&&(T=Ts(l,r),T!==0&&T!==m.retryLane))throw m.retryLane=T,Vr(e,T),$n(l,e,T),Nh;ic(),i=Jg(e,i,r)}else e=m.treeContext,Ze=Ni(T.nextSibling),Un=i,ye=!0,Ka=null,Ui=!1,e!==null&&F_(i,e),i=qu(i,l),i.flags|=4096;return i}return e=ma(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Yu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Oh(e,i,r,l,h){return qr(i),r=ph(e,i,r,l,void 0,h),l=mh(),e!==null&&!pn?(_h(e,i,h),ya(e,i,h)):(ye&&l&&jf(i),i.flags|=1,Nn(e,i,r,h),i.child)}function $g(e,i,r,l,h,m){return qr(i),i.updateQueue=null,r=ng(i,l,r,h),eg(e),l=mh(),e!==null&&!pn?(_h(e,i,m),ya(e,i,m)):(ye&&l&&jf(i),i.flags|=1,Nn(e,i,r,m),i.child)}function t0(e,i,r,l,h){if(qr(i),i.stateNode===null){var m=Ps,T=r.contextType;typeof T=="object"&&T!==null&&(m=Ln(T)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Uh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},sh(i),T=r.contextType,m.context=typeof T=="object"&&T!==null?Ln(T):Ps,m.state=i.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(Dh(i,r,T,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&Uh.enqueueReplaceState(m,m.state,null),cl(i,l,m,h),ul(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,G=Jr(r,C);m.props=G;var nt=m.context,pt=r.contextType;T=Ps,typeof pt=="object"&&pt!==null&&(T=Ln(pt));var _t=r.getDerivedStateFromProps;pt=typeof _t=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||nt!==T)&&Hg(i,m,l,T),$a=!1;var it=i.memoizedState;m.state=it,cl(i,l,m,h),ul(),nt=i.memoizedState,C||it!==nt||$a?(typeof _t=="function"&&(Dh(i,r,_t,l),nt=i.memoizedState),(G=$a||Ig(i,r,G,l,it,nt,T))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),m.props=l,m.state=nt,m.context=T,l=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,oh(e,i),T=i.memoizedProps,pt=Jr(r,T),m.props=pt,_t=i.pendingProps,it=m.context,nt=r.contextType,G=Ps,typeof nt=="object"&&nt!==null&&(G=Ln(nt)),C=r.getDerivedStateFromProps,(nt=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==_t||it!==G)&&Hg(i,m,l,G),$a=!1,it=i.memoizedState,m.state=it,cl(i,l,m,h),ul();var ft=i.memoizedState;T!==_t||it!==ft||$a||e!==null&&e.dependencies!==null&&Cu(e.dependencies)?(typeof C=="function"&&(Dh(i,r,C,l),ft=i.memoizedState),(pt=$a||Ig(i,r,pt,l,it,ft,G)||e!==null&&e.dependencies!==null&&Cu(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ft,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ft,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ft),m.props=l,m.state=ft,m.context=G,l=pt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Yu(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Kr(i,e.child,null,h),i.child=Kr(i,null,r,h)):Nn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=ya(e,i,h),e}function e0(e,i,r,l){return Xr(),i.flags|=256,Nn(e,i,r,l),i.child}var Ph={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zh(e){return{baseLanes:e,cachePool:X_()}}function Bh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=mi),e}function n0(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(ye){if(h?nr(i):ir(),(e=Ze)?(e=cv(e,Ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},r=P_(e),r.return=i,i.child=r,Un=i,Ze=null)):e=null,e===null)throw Qa(i);return xd(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,h?(ir(),h=i.mode,C=Zu({mode:"hidden",children:C},h),l=kr(l,h,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=zh(r),l.childLanes=Bh(e,T,r),i.memoizedState=Ph,ml(null,l)):(nr(i),Fh(i,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(m)i.flags&256?(nr(i),i.flags&=-257,i=Ih(e,i,r)):i.memoizedState!==null?(ir(),i.child=e.child,i.flags|=128,i=null):(ir(),C=l.fallback,h=i.mode,l=Zu({mode:"visible",children:l.children},h),C=kr(C,h,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Kr(i,e.child,null,r),l=i.child,l.memoizedState=zh(r),l.childLanes=Bh(e,T,r),i.memoizedState=Ph,i=ml(null,l));else if(nr(i),xd(C)){if(T=C.nextSibling&&C.nextSibling.dataset,T)var nt=T.dgst;T=nt,l=Error(a(419)),l.stack="",l.digest=T,il({value:l,source:null,stack:null}),i=Ih(e,i,r)}else if(pn||Is(e,i,r,!1),T=(r&e.childLanes)!==0,pn||T){if(T=Ve,T!==null&&(l=Ts(T,r),l!==0&&l!==G.retryLane))throw G.retryLane=l,Vr(e,l),$n(T,e,l),Nh;vd(C)||ic(),i=Ih(e,i,r)}else vd(C)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Ze=Ni(C.nextSibling),Un=i,ye=!0,Ka=null,Ui=!1,e!==null&&F_(i,e),i=Fh(i,l.children),i.flags|=4096);return i}return h?(ir(),C=l.fallback,h=i.mode,G=e.child,nt=G.sibling,l=ma(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,nt!==null?C=ma(nt,C):(C=kr(C,h,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,ml(null,l),l=i.child,C=e.child.memoizedState,C===null?C=zh(r):(h=C.cachePool,h!==null?(G=hn._currentValue,h=h.parent!==G?{parent:G,pool:G}:h):h=X_(),C={baseLanes:C.baseLanes|r,cachePool:h}),l.memoizedState=C,l.childLanes=Bh(e,T,r),i.memoizedState=Ph,ml(e.child,l)):(nr(i),r=e.child,e=r.sibling,r=ma(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=r,i.memoizedState=null,r)}function Fh(e,i){return i=Zu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zu(e,i){return e=fi(22,e,null,i),e.lanes=0,e}function Ih(e,i,r){return Kr(i,e.child,null,r),e=Fh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function i0(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),th(e.return,i,r)}function Hh(e,i,r,l,h,m){var T=e.memoizedState;T===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(T.isBackwards=i,T.rendering=null,T.renderingStartTime=0,T.last=l,T.tail=r,T.tailMode=h,T.treeForkCount=m)}function a0(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var T=ln.current,C=(T&2)!==0;if(C?(T=T&1|2,i.flags|=128):T&=1,St(ln,T),Nn(e,i,l,r),l=ye?nl:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&i0(e,r,i);else if(e.tag===19)i0(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&zu(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Hh(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&zu(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Hh(i,!0,r,null,m,l);break;case"together":Hh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ya(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),sr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Is(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=ma(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ma(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Gh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Cu(e)))}function HM(e,i,r){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Ja(i,hn,e.memoizedState.cache),Xr();break;case 27:case 5:Wt(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Ja(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,hh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(nr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?n0(e,i,r):(nr(i),e=ya(e,i,r),e!==null?e.sibling:null);nr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Is(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return a0(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),St(ln,ln.current),l)break;return null;case 22:return i.lanes=0,Kg(e,i,r,i.pendingProps);case 24:Ja(i,hn,e.memoizedState.cache)}return ya(e,i,r)}function r0(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!Gh(e,r)&&(i.flags&128)===0)return pn=!1,HM(e,i,r);pn=(e.flags&131072)!==0}else pn=!1,ye&&(i.flags&1048576)!==0&&B_(i,nl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Zr(i.elementType),i.type=e,typeof e=="function")qf(e)?(l=Jr(e,l),i.tag=1,i=t0(null,i,e,l,r)):(i.tag=0,i=Oh(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===A){i.tag=11,i=Yg(null,i,e,l,r);break t}else if(h===P){i.tag=14,i=Zg(null,i,e,l,r);break t}}throw i=lt(e)||e,Error(a(306,i,""))}}return i;case 0:return Oh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=Jr(l,i.pendingProps),t0(e,i,l,h,r);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,oh(e,i),cl(i,l,null,r);var T=i.memoizedState;if(l=T.cache,Ja(i,hn,l),l!==m.cache&&eh(i,[hn],r,!0),ul(),l=T.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=e0(e,i,l,r);break t}else if(l!==h){h=Ci(Error(a(424)),i),il(h),i=e0(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=Ni(e.firstChild),Un=i,ye=!0,Ka=null,Ui=!0,r=K_(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Xr(),l===h){i=ya(e,i,r);break t}Nn(e,i,l,r)}i=i.child}return i;case 26:return Yu(e,i),e===null?(r=_v(i.type,null,i.pendingProps,null))?i.memoizedState=r:ye||(r=i.type,e=i.pendingProps,l=cc(at.current).createElement(r),l[fn]=i,l[wn]=e,On(l,r,e),xt(l),i.stateNode=l):i.memoizedState=_v(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Wt(i),e===null&&ye&&(l=i.stateNode=dv(i.type,i.pendingProps,at.current),Un=i,Ui=!0,h=Ze,fr(i.type)?(Sd=h,Ze=Ni(l.firstChild)):Ze=h),Nn(e,i,i.pendingProps.children,r),Yu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ye&&((h=l=Ze)&&(l=_E(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,Un=i,Ze=Ni(l.firstChild),Ui=!1,h=!0):h=!1),h||Qa(i)),Wt(i),h=i.type,m=i.pendingProps,T=e!==null?e.memoizedProps:null,l=m.children,md(h,m)?l=null:T!==null&&md(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=ph(e,i,UM,null,null,r),Dl._currentValue=h),Yu(e,i),Nn(e,i,l,r),i.child;case 6:return e===null&&ye&&((e=r=Ze)&&(r=gE(r,i.pendingProps,Ui),r!==null?(i.stateNode=r,Un=i,Ze=null,e=!0):e=!1),e||Qa(i)),null;case 13:return n0(e,i,r);case 4:return Ct(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Kr(i,null,l,r):Nn(e,i,l,r),i.child;case 11:return Yg(e,i,i.type,i.pendingProps,r);case 7:return Nn(e,i,i.pendingProps,r),i.child;case 8:return Nn(e,i,i.pendingProps.children,r),i.child;case 12:return Nn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ja(i,i.type,l.value),Nn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,qr(i),h=Ln(h),l=l(h),i.flags|=1,Nn(e,i,l,r),i.child;case 14:return Zg(e,i,i.type,i.pendingProps,r);case 15:return jg(e,i,i.type,i.pendingProps,r);case 19:return a0(e,i,r);case 31:return IM(e,i,r);case 22:return Kg(e,i,r,i.pendingProps);case 24:return qr(i),l=Ln(hn),e===null?(h=ah(),h===null&&(h=Ve,m=nh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},sh(i),Ja(i,hn,h)):((e.lanes&r)!==0&&(oh(e,i),cl(i,null,null,r),ul()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ja(i,hn,l)):(l=m.cache,Ja(i,hn,l),l!==h.cache&&eh(i,[hn],r,!0))),Nn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ma(e){e.flags|=4}function Vh(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(L0())e.flags|=8192;else throw jr=Lu,rh}else e.flags&=-16777217}function s0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yv(i))if(L0())e.flags|=8192;else throw jr=Lu,rh}function ju(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Oe():536870912,e.lanes|=i,Qs|=i)}function _l(e,i){if(!ye)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function GM(e,i,r){var l=i.pendingProps;switch(Kf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(i),null;case 1:return je(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),va(hn),Bt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fs(i)?Ma(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Jf())),je(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Ma(i),m!==null?(je(i),s0(i,m)):(je(i),Vh(i,h,null,l,r))):m?m!==e.memoizedState?(Ma(i),je(i),s0(i,m)):(je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ma(i),je(i),Vh(i,h,e,l,r)),null;case 27:if(ue(i),r=at.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ma(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}e=Mt.current,Fs(i)?I_(i):(e=dv(h,l,r),i.stateNode=e,Ma(i))}return je(i),null;case 5:if(ue(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ma(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return je(i),null}if(m=Mt.current,Fs(i))I_(i);else{var T=cc(at.current);switch(m){case 1:m=T.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=T.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=T.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=T.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=T.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?T.createElement("select",{is:l.is}):T.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?T.createElement(h,{is:l.is}):T.createElement(h)}}m[fn]=i,m[wn]=l;t:for(T=i.child;T!==null;){if(T.tag===5||T.tag===6)m.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===i)break t;for(;T.sibling===null;){if(T.return===null||T.return===i)break t;T=T.return}T.sibling.return=T.return,T=T.sibling}i.stateNode=m;t:switch(On(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ma(i)}}return je(i),Vh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ma(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=at.current,Fs(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=Un,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[fn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||nv(e.nodeValue,r)),e||Qa(i,!0)}else e=cc(e).createTextNode(l),e[fn]=i,i.stateNode=e}return je(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Fs(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=i}else Xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),e=!1}else r=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(di(i),i):(di(i),null);if((i.flags&128)!==0)throw Error(a(558))}return je(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Fs(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[fn]=i}else Xr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;je(i),h=!1}else h=Jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(di(i),i):(di(i),null)}return di(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),ju(i,i.updateQueue),je(i),null);case 4:return Bt(),e===null&&cd(i.stateNode.containerInfo),je(i),null;case 10:return va(i.type),je(i),null;case 19:if($(ln),l=i.memoizedState,l===null)return je(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)_l(l,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=zu(e),m!==null){for(i.flags|=128,_l(l,!1),e=m.updateQueue,i.updateQueue=e,ju(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)O_(r,e),r=r.sibling;return St(ln,ln.current&1|2),ye&&_a(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&M()>tc&&(i.flags|=128,h=!0,_l(l,!1),i.lanes=4194304)}else{if(!h)if(e=zu(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,ju(i,e),_l(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!ye)return je(i),null}else 2*M()-l.renderingStartTime>tc&&r!==536870912&&(i.flags|=128,h=!0,_l(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=M(),e.sibling=null,r=ln.current,St(ln,h?r&1|2:r&1),ye&&_a(i,l.treeForkCount),e):(je(i),null);case 22:case 23:return di(i),fh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(je(i),i.subtreeFlags&6&&(i.flags|=8192)):je(i),r=i.updateQueue,r!==null&&ju(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&$(Yr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),va(hn),je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function VM(e,i){switch(Kf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return va(hn),Bt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ue(i),null;case 31:if(i.memoizedState!==null){if(di(i),i.alternate===null)throw Error(a(340));Xr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(di(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Xr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(ln),null;case 4:return Bt(),null;case 10:return va(i.type),null;case 22:case 23:return di(i),fh(),e!==null&&$(Yr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return va(hn),null;case 25:return null;default:return null}}function o0(e,i){switch(Kf(i),i.tag){case 3:va(hn),Bt();break;case 26:case 27:case 5:ue(i);break;case 4:Bt();break;case 31:i.memoizedState!==null&&di(i);break;case 13:di(i);break;case 19:$(ln);break;case 10:va(i.type);break;case 22:case 23:di(i),fh(),e!==null&&$(Yr);break;case 24:va(hn)}}function gl(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,T=r.inst;l=m(),T.destroy=l}r=r.next}while(r!==h)}}catch(C){ze(i,i.return,C)}}function ar(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var T=l.inst,C=T.destroy;if(C!==void 0){T.destroy=void 0,h=i;var G=r,nt=C;try{nt()}catch(pt){ze(h,G,pt)}}}l=l.next}while(l!==m)}}catch(pt){ze(i,i.return,pt)}}function l0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{J_(i,r)}catch(l){ze(e,e.return,l)}}}function u0(e,i,r){r.props=Jr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){ze(e,i,l)}}function vl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){ze(e,i,h)}}function ia(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){ze(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){ze(e,i,h)}else r.current=null}function c0(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){ze(e,e.return,h)}}function kh(e,i,r){try{var l=e.stateNode;cE(l,e.type,r,i),l[wn]=i}catch(h){ze(e,e.return,h)}}function f0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&fr(e.type)||e.tag===4}function Xh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||f0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&fr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(l===27&&fr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Wh(e,i,r),e=e.sibling;e!==null;)Wh(e,i,r),e=e.sibling}function Ku(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&fr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ku(e,i,r),e=e.sibling;e!==null;)Ku(e,i,r),e=e.sibling}function h0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);On(i,l,r),i[fn]=e,i[wn]=r}catch(m){ze(e,e.return,m)}}var Ea=!1,mn=!1,qh=!1,d0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function kM(e,i){if(e=e.containerInfo,dd=gc,e=b_(e),If(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var T=0,C=-1,G=-1,nt=0,pt=0,_t=e,it=null;e:for(;;){for(var ft;_t!==r||h!==0&&_t.nodeType!==3||(C=T+h),_t!==m||l!==0&&_t.nodeType!==3||(G=T+l),_t.nodeType===3&&(T+=_t.nodeValue.length),(ft=_t.firstChild)!==null;)it=_t,_t=ft;for(;;){if(_t===e)break e;if(it===r&&++nt===h&&(C=T),it===m&&++pt===l&&(G=T),(ft=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=ft}r=C===-1||G===-1?null:{start:C,end:G}}else r=null}r=r||{start:0,end:0}}else r=null;for(pd={focusedElem:e,selectionRange:r},gc=!1,bn=i;bn!==null;)if(i=bn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,bn=e;else for(;bn!==null;){switch(i=bn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Vt=Jr(r.type,h);e=l.getSnapshotBeforeUpdate(Vt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){ze(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)gd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,bn=e;break}bn=i.return}}function p0(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ba(e,r),l&4&&gl(5,r);break;case 1:if(ba(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(T){ze(r,r.return,T)}else{var h=Jr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){ze(r,r.return,T)}}l&64&&l0(r),l&512&&vl(r,r.return);break;case 3:if(ba(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{J_(e,i)}catch(T){ze(r,r.return,T)}}break;case 27:i===null&&l&4&&h0(r);case 26:case 5:ba(e,r),i===null&&l&4&&c0(r),l&512&&vl(r,r.return);break;case 12:ba(e,r);break;case 31:ba(e,r),l&4&&g0(e,r);break;case 13:ba(e,r),l&4&&v0(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=JM.bind(null,r),vE(e,r))));break;case 22:if(l=r.memoizedState!==null||Ea,!l){i=i!==null&&i.memoizedState!==null||mn,h=Ea;var m=mn;Ea=l,(mn=i)&&!m?Aa(e,r,(r.subtreeFlags&8772)!==0):ba(e,r),Ea=h,mn=m}break;case 30:break;default:ba(e,r)}}function m0(e){var i=e.alternate;i!==null&&(e.alternate=null,m0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&D(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,jn=!1;function Ta(e,i,r){for(r=r.child;r!==null;)_0(e,i,r),r=r.sibling}function _0(e,i,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Tt,r)}catch{}switch(r.tag){case 26:mn||ia(r,i),Ta(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||ia(r,i);var l=Ke,h=jn;fr(r.type)&&(Ke=r.stateNode,jn=!1),Ta(e,i,r),Rl(r.stateNode),Ke=l,jn=h;break;case 5:mn||ia(r,i);case 6:if(l=Ke,h=jn,Ke=null,Ta(e,i,r),Ke=l,jn=h,Ke!==null)if(jn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(r.stateNode)}catch(m){ze(r,i,m)}else try{Ke.removeChild(r.stateNode)}catch(m){ze(r,i,m)}break;case 18:Ke!==null&&(jn?(e=Ke,lv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ro(e)):lv(Ke,r.stateNode));break;case 4:l=Ke,h=jn,Ke=r.stateNode.containerInfo,jn=!0,Ta(e,i,r),Ke=l,jn=h;break;case 0:case 11:case 14:case 15:ar(2,r,i),mn||ar(4,r,i),Ta(e,i,r);break;case 1:mn||(ia(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&u0(r,i,l)),Ta(e,i,r);break;case 21:Ta(e,i,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,Ta(e,i,r),mn=l;break;default:Ta(e,i,r)}}function g0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ro(e)}catch(r){ze(i,i.return,r)}}}function v0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ro(e)}catch(r){ze(i,i.return,r)}}function XM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new d0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new d0),i;default:throw Error(a(435,e.tag))}}function Qu(e,i){var r=XM(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=$M.bind(null,e,l);l.then(h,h)}})}function Kn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,T=i,C=T;t:for(;C!==null;){switch(C.tag){case 27:if(fr(C.type)){Ke=C.stateNode,jn=!1;break t}break;case 5:Ke=C.stateNode,jn=!1;break t;case 3:case 4:Ke=C.stateNode.containerInfo,jn=!0;break t}C=C.return}if(Ke===null)throw Error(a(160));_0(m,T,h),Ke=null,jn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)x0(i,e),i=i.sibling}var Xi=null;function x0(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(i,e),Qn(e),l&4&&(ar(3,e,e.return),gl(3,e),ar(5,e,e.return));break;case 1:Kn(i,e),Qn(e),l&512&&(mn||r===null||ia(r,r.return)),l&64&&Ea&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Xi;if(Kn(i,e),Qn(e),l&512&&(mn||r===null||ia(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Br]||m[fn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),On(m,l,r),m[fn]=e,xt(m),l=m;break t;case"link":var T=xv("link","href",h).get(l+(r.href||""));if(T){for(var C=0;C<T.length;C++)if(m=T[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(C,1);break e}}m=h.createElement(l),On(m,l,r),h.head.appendChild(m);break;case"meta":if(T=xv("meta","content",h).get(l+(r.content||""))){for(C=0;C<T.length;C++)if(m=T[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(C,1);break e}}m=h.createElement(l),On(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[fn]=e,xt(m),l=m}e.stateNode=l}else Sv(h,e.type,e.stateNode);else e.stateNode=vv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?Sv(h,e.type,e.stateNode):vv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&kh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Kn(i,e),Qn(e),l&512&&(mn||r===null||ia(r,r.return)),r!==null&&l&4&&kh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Kn(i,e),Qn(e),l&512&&(mn||r===null||ia(r,r.return)),e.flags&32){h=e.stateNode;try{Cs(h,"")}catch(Vt){ze(e,e.return,Vt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,kh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(qh=!0);break;case 6:if(Kn(i,e),Qn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Vt){ze(e,e.return,Vt)}}break;case 3:if(dc=null,h=Xi,Xi=fc(i.containerInfo),Kn(i,e),Xi=h,Qn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(Vt){ze(e,e.return,Vt)}qh&&(qh=!1,S0(e));break;case 4:l=Xi,Xi=fc(e.stateNode.containerInfo),Kn(i,e),Qn(e),Xi=l;break;case 12:Kn(i,e),Qn(e);break;case 31:Kn(i,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qu(e,l)));break;case 13:Kn(i,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&($u=M()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qu(e,l)));break;case 22:h=e.memoizedState!==null;var G=r!==null&&r.memoizedState!==null,nt=Ea,pt=mn;if(Ea=nt||h,mn=pt||G,Kn(i,e),mn=pt,Ea=nt,Qn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||G||Ea||mn||$r(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){G=r=i;try{if(m=G.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{C=G.stateNode;var _t=G.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;C.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Vt){ze(G,G.return,Vt)}}}else if(i.tag===6){if(r===null){G=i;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(Vt){ze(G,G.return,Vt)}}}else if(i.tag===18){if(r===null){G=i;try{var ft=G.stateNode;h?uv(ft,!0):uv(G.stateNode,!1)}catch(Vt){ze(G,G.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Qu(e,r))));break;case 19:Kn(i,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qu(e,l)));break;case 30:break;case 21:break;default:Kn(i,e),Qn(e)}}function Qn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(f0(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Xh(e);Ku(e,m,h);break;case 5:var T=r.stateNode;r.flags&32&&(Cs(T,""),r.flags&=-33);var C=Xh(e);Ku(e,C,T);break;case 3:case 4:var G=r.stateNode.containerInfo,nt=Xh(e);Wh(e,nt,G);break;default:throw Error(a(161))}}catch(pt){ze(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function S0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;S0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)p0(e,i.alternate,i),i=i.sibling}function $r(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ar(4,i,i.return),$r(i);break;case 1:ia(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&u0(i,i.return,r),$r(i);break;case 27:Rl(i.stateNode);case 26:case 5:ia(i,i.return),$r(i);break;case 22:i.memoizedState===null&&$r(i);break;case 30:$r(i);break;default:$r(i)}e=e.sibling}}function Aa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,T=m.flags;switch(m.tag){case 0:case 11:case 15:Aa(h,m,r),gl(4,m);break;case 1:if(Aa(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){ze(l,l.return,nt)}if(l=m,h=l.updateQueue,h!==null){var C=l.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)Q_(G[h],C)}catch(nt){ze(l,l.return,nt)}}r&&T&64&&l0(m),vl(m,m.return);break;case 27:h0(m);case 26:case 5:Aa(h,m,r),r&&l===null&&T&4&&c0(m),vl(m,m.return);break;case 12:Aa(h,m,r);break;case 31:Aa(h,m,r),r&&T&4&&g0(h,m);break;case 13:Aa(h,m,r),r&&T&4&&v0(h,m);break;case 22:m.memoizedState===null&&Aa(h,m,r),vl(m,m.return);break;case 30:break;default:Aa(h,m,r)}i=i.sibling}}function Yh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&al(r))}function Zh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&al(e))}function Wi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)y0(e,i,r,l),i=i.sibling}function y0(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Wi(e,i,r,l),h&2048&&gl(9,i);break;case 1:Wi(e,i,r,l);break;case 3:Wi(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&al(e)));break;case 12:if(h&2048){Wi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,T=m.id,C=m.onPostCommit;typeof C=="function"&&C(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ze(i,i.return,G)}}else Wi(e,i,r,l);break;case 31:Wi(e,i,r,l);break;case 13:Wi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,T=i.alternate,i.memoizedState!==null?m._visibility&2?Wi(e,i,r,l):xl(e,i):m._visibility&2?Wi(e,i,r,l):(m._visibility|=2,Zs(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Yh(T,i);break;case 24:Wi(e,i,r,l),h&2048&&Zh(i.alternate,i);break;default:Wi(e,i,r,l)}}function Zs(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,T=i,C=r,G=l,nt=T.flags;switch(T.tag){case 0:case 11:case 15:Zs(m,T,C,G,h),gl(8,T);break;case 23:break;case 22:var pt=T.stateNode;T.memoizedState!==null?pt._visibility&2?Zs(m,T,C,G,h):xl(m,T):(pt._visibility|=2,Zs(m,T,C,G,h)),h&&nt&2048&&Yh(T.alternate,T);break;case 24:Zs(m,T,C,G,h),h&&nt&2048&&Zh(T.alternate,T);break;default:Zs(m,T,C,G,h)}i=i.sibling}}function xl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:xl(r,l),h&2048&&Yh(l.alternate,l);break;case 24:xl(r,l),h&2048&&Zh(l.alternate,l);break;default:xl(r,l)}i=i.sibling}}var Sl=8192;function js(e,i,r){if(e.subtreeFlags&Sl)for(e=e.child;e!==null;)M0(e,i,r),e=e.sibling}function M0(e,i,r){switch(e.tag){case 26:js(e,i,r),e.flags&Sl&&e.memoizedState!==null&&DE(r,Xi,e.memoizedState,e.memoizedProps);break;case 5:js(e,i,r);break;case 3:case 4:var l=Xi;Xi=fc(e.stateNode.containerInfo),js(e,i,r),Xi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Sl,Sl=16777216,js(e,i,r),Sl=l):js(e,i,r));break;default:js(e,i,r)}}function E0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function yl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];bn=l,b0(l,e)}E0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)T0(e),e=e.sibling}function T0(e){switch(e.tag){case 0:case 11:case 15:yl(e),e.flags&2048&&ar(9,e,e.return);break;case 3:yl(e);break;case 12:yl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ju(e)):yl(e);break;default:yl(e)}}function Ju(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];bn=l,b0(l,e)}E0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ar(8,i,i.return),Ju(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Ju(i));break;default:Ju(i)}e=e.sibling}}function b0(e,i){for(;bn!==null;){var r=bn;switch(r.tag){case 0:case 11:case 15:ar(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:al(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,bn=l;else t:for(r=e;bn!==null;){l=bn;var h=l.sibling,m=l.return;if(m0(l),l===r){bn=null;break t}if(h!==null){h.return=m,bn=h;break t}bn=m}}}var WM={getCacheForType:function(e){var i=Ln(hn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Ln(hn).controller.signal}},qM=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,me=null,ve=0,Pe=0,pi=null,rr=!1,Ks=!1,jh=!1,Ra=0,an=0,sr=0,ts=0,Kh=0,mi=0,Qs=0,Ml=null,Jn=null,Qh=!1,$u=0,A0=0,tc=1/0,ec=null,or=null,yn=0,lr=null,Js=null,Ca=0,Jh=0,$h=null,R0=null,El=0,td=null;function _i(){return(De&2)!==0&&ve!==0?ve&-ve:B.T!==null?sd():zr()}function C0(){if(mi===0)if((ve&536870912)===0||ye){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),mi=e}else mi=536870912;return e=hi.current,e!==null&&(e.flags|=32),mi}function $n(e,i,r){(e===Ve&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&($s(e,0),ur(e,ve,mi,!1)),Vn(e,r),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(ts|=r),an===4&&ur(e,ve,mi,!1)),aa(e))}function w0(e,i,r){if((De&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Gt(e,i),h=l?jM(e,i):nd(e,i,!0),m=l;do{if(h===0){Ks&&!l&&ur(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!YM(r)){h=nd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var C=e;h=Ml;var G=C.current.memoizedState.isDehydrated;if(G&&($s(C,T).flags|=256),T=nd(C,T,!1),T!==2){if(jh&&!G){C.errorRecoveryDisabledLanes|=m,ts|=m,h=4;break t}m=Jn,Jn=h,m!==null&&(Jn===null?Jn=m:Jn.push.apply(Jn,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){$s(e,0),ur(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ur(l,i,mi,!rr);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=$u+300-M(),10<h)){if(ur(l,i,mi,!rr),gt(l,0,!0)!==0)break t;Ca=i,l.timeoutHandle=sv(D0.bind(null,l,r,Jn,ec,Qh,i,mi,ts,Qs,rr,m,"Throttled",-0,0),h);break t}D0(l,r,Jn,ec,Qh,i,mi,ts,Qs,rr,m,null,-0,0)}}break}while(!0);aa(e)}function D0(e,i,r,l,h,m,T,C,G,nt,pt,_t,it,ft){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},M0(i,m,_t);var Vt=(m&62914560)===m?$u-M():(m&4194048)===m?A0-M():0;if(Vt=UE(_t,Vt),Vt!==null){Ca=m,e.cancelPendingCommit=Vt(F0.bind(null,e,i,m,r,l,h,T,C,G,pt,_t,null,it,ft)),ur(e,m,T,!nt);return}}F0(e,i,m,r,l,h,T,C,G)}function YM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!ci(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(e,i,r,l){i&=~Kh,i&=~ts,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-zt(h),T=1<<m;l[m]=-1,h&=~T}r!==0&&Xo(e,r,i)}function nc(){return(De&6)===0?(Tl(0),!1):!0}function ed(){if(me!==null){if(Pe===0)var e=me.return;else e=me,ga=Wr=null,gh(e),ks=null,sl=0,e=me;for(;e!==null;)o0(e.alternate,e),e=e.return;me=null}}function $s(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,dE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ca=0,ed(),Ve=e,me=r=ma(e.current,null),ve=i,Pe=0,pi=null,rr=!1,Ks=Gt(e,i),jh=!1,Qs=mi=Kh=ts=sr=an=0,Jn=Ml=null,Qh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-zt(l),m=1<<h;i|=e[h],l&=~m}return Ra=i,Eu(),r}function U0(e,i){le=null,B.H=pl,i===Vs||i===Uu?(i=Y_(),Pe=3):i===rh?(i=Y_(),Pe=4):Pe=i===Nh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pi=i,me===null&&(an=1,Wu(e,Ci(i,e.current)))}function L0(){var e=hi.current;return e===null?!0:(ve&4194048)===ve?Li===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Li:!1}function N0(){var e=B.H;return B.H=pl,e===null?pl:e}function O0(){var e=B.A;return B.A=WM,e}function ic(){an=4,rr||(ve&4194048)!==ve&&hi.current!==null||(Ks=!0),(sr&134217727)===0&&(ts&134217727)===0||Ve===null||ur(Ve,ve,mi,!1)}function nd(e,i,r){var l=De;De|=2;var h=N0(),m=O0();(Ve!==e||ve!==i)&&(ec=null,$s(e,i)),i=!1;var T=an;t:do try{if(Pe!==0&&me!==null){var C=me,G=pi;switch(Pe){case 8:ed(),T=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(i=!0);var nt=Pe;if(Pe=0,pi=null,to(e,C,G,nt),r&&Ks){T=0;break t}break;default:nt=Pe,Pe=0,pi=null,to(e,C,G,nt)}}ZM(),T=an;break}catch(pt){U0(e,pt)}while(!0);return i&&e.shellSuspendCounter++,ga=Wr=null,De=l,B.H=h,B.A=m,me===null&&(Ve=null,ve=0,Eu()),T}function ZM(){for(;me!==null;)P0(me)}function jM(e,i){var r=De;De|=2;var l=N0(),h=O0();Ve!==e||ve!==i?(ec=null,tc=M()+500,$s(e,i)):Ks=Gt(e,i);t:do try{if(Pe!==0&&me!==null){i=me;var m=pi;e:switch(Pe){case 1:Pe=0,pi=null,to(e,i,m,1);break;case 2:case 9:if(W_(m)){Pe=0,pi=null,z0(i);break}i=function(){Pe!==2&&Pe!==9||Ve!==e||(Pe=7),aa(e)},m.then(i,i);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:W_(m)?(Pe=0,pi=null,z0(i)):(Pe=0,pi=null,to(e,i,m,7));break;case 5:var T=null;switch(me.tag){case 26:T=me.memoizedState;case 5:case 27:var C=me;if(T?yv(T):C.stateNode.complete){Pe=0,pi=null;var G=C.sibling;if(G!==null)me=G;else{var nt=C.return;nt!==null?(me=nt,ac(nt)):me=null}break e}}Pe=0,pi=null,to(e,i,m,5);break;case 6:Pe=0,pi=null,to(e,i,m,6);break;case 8:ed(),an=6;break t;default:throw Error(a(462))}}KM();break}catch(pt){U0(e,pt)}while(!0);return ga=Wr=null,B.H=l,B.A=h,De=r,me!==null?0:(Ve=null,ve=0,Eu(),an)}function KM(){for(;me!==null&&!We();)P0(me)}function P0(e){var i=r0(e.alternate,e,Ra);e.memoizedProps=e.pendingProps,i===null?ac(e):me=i}function z0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=$g(r,i,i.pendingProps,i.type,void 0,ve);break;case 11:i=$g(r,i,i.pendingProps,i.type.render,i.ref,ve);break;case 5:gh(i);default:o0(r,i),i=me=O_(i,Ra),i=r0(r,i,Ra)}e.memoizedProps=e.pendingProps,i===null?ac(e):me=i}function to(e,i,r,l){ga=Wr=null,gh(i),ks=null,sl=0;var h=i.return;try{if(FM(e,h,i,r,ve)){an=1,Wu(e,Ci(r,e.current)),me=null;return}}catch(m){if(h!==null)throw me=h,m;an=1,Wu(e,Ci(r,e.current)),me=null;return}i.flags&32768?(ye||l===1?e=!0:Ks||(ve&536870912)!==0?e=!1:(rr=e=!0,(l===2||l===9||l===3||l===6)&&(l=hi.current,l!==null&&l.tag===13&&(l.flags|=16384))),B0(i,e)):ac(i)}function ac(e){var i=e;do{if((i.flags&32768)!==0){B0(i,rr);return}e=i.return;var r=GM(i.alternate,i,Ra);if(r!==null){me=r;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);an===0&&(an=5)}function B0(e,i){do{var r=VM(e.alternate,e);if(r!==null){r.flags&=32767,me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=r}while(e!==null);an=6,me=null}function F0(e,i,r,l,h,m,T,C,G){e.cancelPendingCommit=null;do rc();while(yn!==0);if((De&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Xf,Ai(e,r,m,T,C,G),e===Ve&&(me=Ve=null,ve=0),Js=i,lr=e,Ca=r,Jh=m,$h=h,R0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,tE(rt,function(){return k0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=q.p,q.p=2,T=De,De|=4;try{kM(e,i,r)}finally{De=T,q.p=h,B.T=l}}yn=1,I0(),H0(),G0()}}function I0(){if(yn===1){yn=0;var e=lr,i=Js,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=q.p;q.p=2;var h=De;De|=4;try{x0(i,e);var m=pd,T=b_(e.containerInfo),C=m.focusedElem,G=m.selectionRange;if(T!==C&&C&&C.ownerDocument&&T_(C.ownerDocument.documentElement,C)){if(G!==null&&If(C)){var nt=G.start,pt=G.end;if(pt===void 0&&(pt=nt),"selectionStart"in C)C.selectionStart=nt,C.selectionEnd=Math.min(pt,C.value.length);else{var _t=C.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var ft=it.getSelection(),Vt=C.textContent.length,te=Math.min(G.start,Vt),Ie=G.end===void 0?te:Math.min(G.end,Vt);!ft.extend&&te>Ie&&(T=Ie,Ie=te,te=T);var K=E_(C,te),X=E_(C,Ie);if(K&&X&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var tt=_t.createRange();tt.setStart(K.node,K.offset),ft.removeAllRanges(),te>Ie?(ft.addRange(tt),ft.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),ft.addRange(tt))}}}}for(_t=[],ft=C;ft=ft.parentNode;)ft.nodeType===1&&_t.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_t.length;C++){var mt=_t[C];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}gc=!!dd,pd=dd=null}finally{De=h,q.p=l,B.T=r}}e.current=i,yn=2}}function H0(){if(yn===2){yn=0;var e=lr,i=Js,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=q.p;q.p=2;var h=De;De|=4;try{p0(e,i.alternate,i)}finally{De=h,q.p=l,B.T=r}}yn=3}}function G0(){if(yn===4||yn===3){yn=0,z();var e=lr,i=Js,r=Ca,l=R0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,Js=lr=null,V0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(or=null),As(r),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,h=q.p,q.p=2,B.T=null;try{for(var m=e.onRecoverableError,T=0;T<l.length;T++){var C=l[T];m(C.value,{componentStack:C.stack})}}finally{B.T=i,q.p=h}}(Ca&3)!==0&&rc(),aa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===td?El++:(El=0,td=e):El=0,Tl(0)}}function V0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,al(i)))}function rc(){return I0(),H0(),G0(),k0()}function k0(){if(yn!==5)return!1;var e=lr,i=Jh;Jh=0;var r=As(Ca),l=B.T,h=q.p;try{q.p=32>r?32:r,B.T=null,r=$h,$h=null;var m=lr,T=Ca;if(yn=0,Js=lr=null,Ca=0,(De&6)!==0)throw Error(a(331));var C=De;if(De|=4,T0(m.current),y0(m,m.current,T,r),De=C,Tl(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Tt,m)}catch{}return!0}finally{q.p=h,B.T=l,V0(e,i)}}function X0(e,i,r){i=Ci(r,i),i=Lh(e.stateNode,i,2),e=er(e,i,2),e!==null&&(Vn(e,2),aa(e))}function ze(e,i,r){if(e.tag===3)X0(e,e,r);else for(;i!==null;){if(i.tag===3){X0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){e=Ci(r,e),r=Wg(2),l=er(i,r,2),l!==null&&(qg(r,l,i,e),Vn(l,2),aa(l));break}}i=i.return}}function id(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new qM;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(jh=!0,h.add(r),e=QM.bind(null,e,i,r),i.then(e,e))}function QM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ve===e&&(ve&r)===r&&(an===4||an===3&&(ve&62914560)===ve&&300>M()-$u?(De&2)===0&&$s(e,0):Kh|=r,Qs===ve&&(Qs=0)),aa(e)}function W0(e,i){i===0&&(i=Oe()),e=Vr(e,i),e!==null&&(Vn(e,i),aa(e))}function JM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),W0(e,r)}function $M(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),W0(e,r)}function tE(e,i){return ie(e,i)}var sc=null,eo=null,ad=!1,oc=!1,rd=!1,cr=0;function aa(e){e!==eo&&e.next===null&&(eo===null?sc=eo=e:eo=eo.next=e),oc=!0,ad||(ad=!0,nE())}function Tl(e,i){if(!rd&&oc){rd=!0;do for(var r=!1,l=sc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var T=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=h&~(T&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,j0(l,m))}else m=ve,m=gt(l,l===Ve?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Gt(l,m)||(r=!0,j0(l,m));l=l.next}while(r);rd=!1}}function eE(){q0()}function q0(){oc=ad=!1;var e=0;cr!==0&&hE()&&(e=cr);for(var i=M(),r=null,l=sc;l!==null;){var h=l.next,m=Y0(l,i);m===0?(l.next=null,r===null?sc=h:r.next=h,h===null&&(eo=r)):(r=l,(e!==0||(m&3)!==0)&&(oc=!0)),l=h}yn!==0&&yn!==5||Tl(e),cr!==0&&(cr=0)}function Y0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-zt(m),C=1<<T,G=h[T];G===-1?((C&r)===0||(C&l)!==0)&&(h[T]=ae(C,i)):G<=i&&(e.expiredLanes|=C),m&=~C}if(i=Ve,r=ve,r=gt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ye(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Gt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Ye(l),As(r)){case 2:case 8:r=dt;break;case 32:r=rt;break;case 268435456:r=At;break;default:r=rt}return l=Z0.bind(null,e),r=ie(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Ye(l),e.callbackPriority=2,e.callbackNode=null,2}function Z0(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(rc()&&e.callbackNode!==r)return null;var l=ve;return l=gt(e,e===Ve?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(w0(e,l,i),Y0(e,M()),e.callbackNode!=null&&e.callbackNode===r?Z0.bind(null,e):null)}function j0(e,i){if(rc())return null;w0(e,i,!0)}function nE(){pE(function(){(De&6)!==0?ie(J,eE):q0()})}function sd(){if(cr===0){var e=Hs;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),cr=e}return cr}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:mu(""+e)}function Q0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function iE(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=K0((h[wn]||null).action),T=l.submitter;T&&(i=(i=T[wn]||null)?K0(i.formAction):T.getAttribute("formAction"),i!==null&&(m=i,T=null));var C=new xu("action","action",null,l,h);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(cr!==0){var G=T?Q0(h,T):new FormData(h);Ah(r,{pending:!0,data:G,method:h.method,action:m},null,G)}}else typeof m=="function"&&(C.preventDefault(),G=T?Q0(h,T):new FormData(h),Ah(r,{pending:!0,data:G,method:h.method,action:m},m,G))},currentTarget:h}]})}}for(var od=0;od<kf.length;od++){var ld=kf[od],aE=ld.toLowerCase(),rE=ld[0].toUpperCase()+ld.slice(1);ki(aE,"on"+rE)}ki(C_,"onAnimationEnd"),ki(w_,"onAnimationIteration"),ki(D_,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(yM,"onTransitionRun"),ki(MM,"onTransitionStart"),ki(EM,"onTransitionCancel"),ki(U_,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bl));function J0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var T=l.length-1;0<=T;T--){var C=l[T],G=C.instance,nt=C.currentTarget;if(C=C.listener,G!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=nt;try{m(h)}catch(pt){Mu(pt)}h.currentTarget=null,m=G}else for(T=0;T<l.length;T++){if(C=l[T],G=C.instance,nt=C.currentTarget,C=C.listener,G!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=nt;try{m(h)}catch(pt){Mu(pt)}h.currentTarget=null,m=G}}}}function _e(e,i){var r=i[qo];r===void 0&&(r=i[qo]=new Set);var l=e+"__bubble";r.has(l)||($0(i,e,2,!1),r.add(l))}function ud(e,i,r){var l=0;i&&(l|=4),$0(r,e,l,i)}var lc="_reactListening"+Math.random().toString(36).slice(2);function cd(e){if(!e[lc]){e[lc]=!0,Lt.forEach(function(r){r!=="selectionchange"&&(sE.has(r)||ud(r,!1,e),ud(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[lc]||(i[lc]=!0,ud("selectionchange",!1,i))}}function $0(e,i,r,l){switch(Cv(i)){case 2:var h=OE;break;case 8:h=PE;break;default:h=bd}r=h.bind(null,i,r,e),h=void 0,!Df||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function fd(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var C=l.stateNode.containerInfo;if(C===h)break;if(T===4)for(T=l.return;T!==null;){var G=T.tag;if((G===3||G===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;C!==null;){if(T=j(C),T===null)return;if(G=T.tag,G===5||G===6||G===26||G===27){l=m=T;continue t}C=C.parentNode}}l=l.return}a_(function(){var nt=m,pt=Cf(r),_t=[];t:{var it=L_.get(e);if(it!==void 0){var ft=xu,Vt=e;switch(e){case"keypress":if(gu(r)===0)break t;case"keydown":case"keyup":ft=$y;break;case"focusin":Vt="focus",ft=Of;break;case"focusout":Vt="blur",ft=Of;break;case"beforeblur":case"afterblur":ft=Of;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=o_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=nM;break;case C_:case w_:case D_:ft=Xy;break;case U_:ft=aM;break;case"scroll":case"scrollend":ft=Iy;break;case"wheel":ft=sM;break;case"copy":case"cut":case"paste":ft=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=u_;break;case"toggle":case"beforetoggle":ft=lM}var te=(i&4)!==0,Ie=!te&&(e==="scroll"||e==="scrollend"),K=te?it!==null?it+"Capture":null:it;te=[];for(var X=nt,tt;X!==null;){var mt=X;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||K===null||(mt=Yo(X,K),mt!=null&&te.push(Al(X,mt,tt))),Ie)break;X=X.return}0<te.length&&(it=new ft(it,Vt,null,r,pt),_t.push({event:it,listeners:te}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",it&&r!==Rf&&(Vt=r.relatedTarget||r.fromElement)&&(j(Vt)||Vt[Ya]))break t;if((ft||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,ft?(Vt=r.relatedTarget||r.toElement,ft=nt,Vt=Vt?j(Vt):null,Vt!==null&&(Ie=u(Vt),te=Vt.tag,Vt!==Ie||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ft=null,Vt=nt),ft!==Vt)){if(te=o_,mt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=u_,mt="onPointerLeave",K="onPointerEnter",X="pointer"),Ie=ft==null?it:ct(ft),tt=Vt==null?it:ct(Vt),it=new te(mt,X+"leave",ft,r,pt),it.target=Ie,it.relatedTarget=tt,mt=null,j(pt)===nt&&(te=new te(K,X+"enter",Vt,r,pt),te.target=tt,te.relatedTarget=Ie,mt=te),Ie=mt,ft&&Vt)e:{for(te=oE,K=ft,X=Vt,tt=0,mt=K;mt;mt=te(mt))tt++;mt=0;for(var Jt=X;Jt;Jt=te(Jt))mt++;for(;0<tt-mt;)K=te(K),tt--;for(;0<mt-tt;)X=te(X),mt--;for(;tt--;){if(K===X||X!==null&&K===X.alternate){te=K;break e}K=te(K),X=te(X)}te=null}else te=null;ft!==null&&tv(_t,it,ft,te,!1),Vt!==null&&Ie!==null&&tv(_t,Ie,Vt,te,!0)}}t:{if(it=nt?ct(nt):window,ft=it.nodeName&&it.nodeName.toLowerCase(),ft==="select"||ft==="input"&&it.type==="file")var Re=g_;else if(m_(it))if(v_)Re=vM;else{Re=_M;var Zt=mM}else ft=it.nodeName,!ft||ft.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&Af(nt.elementType)&&(Re=g_):Re=gM;if(Re&&(Re=Re(e,nt))){__(_t,Re,r,pt);break t}Zt&&Zt(e,it,nt),e==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&Sn(it,"number",it.value)}switch(Zt=nt?ct(nt):window,e){case"focusin":(m_(Zt)||Zt.contentEditable==="true")&&(Ls=Zt,Hf=nt,el=null);break;case"focusout":el=Hf=Ls=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,A_(_t,r,pt);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":A_(_t,r,pt)}var ce;if(zf)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Us?d_(e,r)&&(xe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(xe="onCompositionStart");xe&&(c_&&r.locale!=="ko"&&(Us||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Us&&(ce=r_()):(Za=pt,Uf="value"in Za?Za.value:Za.textContent,Us=!0)),Zt=uc(nt,xe),0<Zt.length&&(xe=new l_(xe,e,null,r,pt),_t.push({event:xe,listeners:Zt}),ce?xe.data=ce:(ce=p_(r),ce!==null&&(xe.data=ce)))),(ce=cM?fM(e,r):hM(e,r))&&(xe=uc(nt,"onBeforeInput"),0<xe.length&&(Zt=new l_("onBeforeInput","beforeinput",null,r,pt),_t.push({event:Zt,listeners:xe}),Zt.data=ce)),iE(_t,e,nt,r,pt)}J0(_t,i)})}function Al(e,i,r){return{instance:e,listener:i,currentTarget:r}}function uc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Yo(e,r),h!=null&&l.unshift(Al(e,h,m)),h=Yo(e,i),h!=null&&l.push(Al(e,h,m))),e.tag===3)return l;e=e.return}return[]}function oE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tv(e,i,r,l,h){for(var m=i._reactName,T=[];r!==null&&r!==l;){var C=r,G=C.alternate,nt=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||nt===null||(G=nt,h?(nt=Yo(r,m),nt!=null&&T.unshift(Al(r,nt,G))):h||(nt=Yo(r,m),nt!=null&&T.push(Al(r,nt,G)))),r=r.return}T.length!==0&&e.push({event:i,listeners:T})}var lE=/\r\n?/g,uE=/\u0000|\uFFFD/g;function ev(e){return(typeof e=="string"?e:""+e).replace(lE,`
`).replace(uE,"")}function nv(e,i){return i=ev(i),ev(e)===i}function Fe(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Cs(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Cs(e,""+l);break;case"className":Ne(e,"class",l);break;case"tabIndex":Ne(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,r,l);break;case"style":n_(e,l,m);break;case"data":if(i!=="object"){Ne(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=mu(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Fe(e,i,"name",h.name,h,null),Fe(e,i,"formEncType",h.formEncType,h,null),Fe(e,i,"formMethod",h.formMethod,h,null),Fe(e,i,"formTarget",h.formTarget,h,null)):(Fe(e,i,"encType",h.encType,h,null),Fe(e,i,"method",h.method,h,null),Fe(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=mu(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=da);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=mu(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":_e("beforetoggle",e),_e("toggle",e),Ge(e,"popover",l);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ge(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=By.get(r)||r,Ge(e,r,l))}}function hd(e,i,r,l,h,m){switch(r){case"style":n_(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Cs(e,l):(typeof l=="number"||typeof l=="bigint")&&Cs(e,""+l);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[wn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Ge(e,r,l)}}}function On(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var T=r[m];if(T!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,m,T,r,null)}}h&&Fe(e,i,"srcSet",r.srcSet,r,null),l&&Fe(e,i,"src",r.src,r,null);return;case"input":_e("invalid",e);var C=m=T=h=null,G=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":h=pt;break;case"type":T=pt;break;case"checked":G=pt;break;case"defaultChecked":nt=pt;break;case"value":m=pt;break;case"defaultValue":C=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Fe(e,i,l,pt,r,null)}}kn(e,m,C,G,nt,T,h,!1);return;case"select":_e("invalid",e),l=T=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":T=C;break;case"multiple":l=C;default:Fe(e,i,h,C,r,null)}i=m,r=T,e.multiple=!!l,i!=null?on(e,!!l,i,!1):r!=null&&on(e,!!l,r,!0);return;case"textarea":_e("invalid",e),m=h=l=null;for(T in r)if(r.hasOwnProperty(T)&&(C=r[T],C!=null))switch(T){case"value":l=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Fe(e,i,T,C,r,null)}ta(e,l,h,m);return;case"option":for(G in r)if(r.hasOwnProperty(G)&&(l=r[G],l!=null))switch(G){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Fe(e,i,G,l,r,null)}return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(l=0;l<bl.length;l++)_e(bl[l],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Fe(e,i,nt,l,r,null)}return;default:if(Af(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&hd(e,i,pt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Fe(e,i,C,l,r,null))}function cE(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,C=null,G=null,nt=null,pt=null;for(ft in r){var _t=r[ft];if(r.hasOwnProperty(ft)&&_t!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=_t;default:l.hasOwnProperty(ft)||Fe(e,i,ft,null,l,_t)}}for(var it in l){var ft=l[it];if(_t=r[it],l.hasOwnProperty(it)&&(ft!=null||_t!=null))switch(it){case"type":m=ft;break;case"name":h=ft;break;case"checked":nt=ft;break;case"defaultChecked":pt=ft;break;case"value":T=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:ft!==_t&&Fe(e,i,it,ft,l,_t)}}zn(e,T,C,G,nt,pt,m,h);return;case"select":ft=T=C=it=null;for(m in r)if(G=r[m],r.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ft=G;default:l.hasOwnProperty(m)||Fe(e,i,m,null,l,G)}for(h in l)if(m=l[h],G=r[h],l.hasOwnProperty(h)&&(m!=null||G!=null))switch(h){case"value":it=m;break;case"defaultValue":C=m;break;case"multiple":T=m;default:m!==G&&Fe(e,i,h,m,l,G)}i=C,r=T,l=ft,it!=null?on(e,!!r,it,!1):!!l!=!!r&&(i!=null?on(e,!!r,i,!0):on(e,!!r,r?[]:"",!1));return;case"textarea":ft=it=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Fe(e,i,C,null,l,h)}for(T in l)if(h=l[T],m=r[T],l.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":it=h;break;case"defaultValue":ft=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Fe(e,i,T,h,l,m)}Rs(e,it,ft);return;case"option":for(var Vt in r)if(it=r[Vt],r.hasOwnProperty(Vt)&&it!=null&&!l.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Fe(e,i,Vt,null,l,it)}for(G in l)if(it=l[G],ft=r[G],l.hasOwnProperty(G)&&it!==ft&&(it!=null||ft!=null))switch(G){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Fe(e,i,G,it,l,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)it=r[te],r.hasOwnProperty(te)&&it!=null&&!l.hasOwnProperty(te)&&Fe(e,i,te,null,l,it);for(nt in l)if(it=l[nt],ft=r[nt],l.hasOwnProperty(nt)&&it!==ft&&(it!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:Fe(e,i,nt,it,l,ft)}return;default:if(Af(i)){for(var Ie in r)it=r[Ie],r.hasOwnProperty(Ie)&&it!==void 0&&!l.hasOwnProperty(Ie)&&hd(e,i,Ie,void 0,l,it);for(pt in l)it=l[pt],ft=r[pt],!l.hasOwnProperty(pt)||it===ft||it===void 0&&ft===void 0||hd(e,i,pt,it,l,ft);return}}for(var K in r)it=r[K],r.hasOwnProperty(K)&&it!=null&&!l.hasOwnProperty(K)&&Fe(e,i,K,null,l,it);for(_t in l)it=l[_t],ft=r[_t],!l.hasOwnProperty(_t)||it===ft||it==null&&ft==null||Fe(e,i,_t,it,l,ft)}function iv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,T=h.initiatorType,C=h.duration;if(m&&C&&iv(T)){for(T=0,C=h.responseEnd,l+=1;l<r.length;l++){var G=r[l],nt=G.startTime;if(nt>C)break;var pt=G.transferSize,_t=G.initiatorType;pt&&iv(_t)&&(G=G.responseEnd,T+=pt*(G<C?1:(C-nt)/(G-nt)))}if(--l,i+=8*(m+T)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dd=null,pd=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function av(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function rv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function md(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _d=null;function hE(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var sv=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,ov=typeof Promise=="function"?Promise:void 0,pE=typeof queueMicrotask=="function"?queueMicrotask:typeof ov<"u"?function(e){return ov.resolve(null).then(e).catch(mE)}:sv;function mE(e){setTimeout(function(){throw e})}function fr(e){return e==="head"}function lv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),ro(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Rl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Rl(r);for(var m=r.firstChild;m;){var T=m.nextSibling,C=m.nodeName;m[Br]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=T}}else r==="body"&&Rl(e.ownerDocument.body);r=h}while(r);ro(i)}function uv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function gd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":gd(r),D(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function _E(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Br])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function gE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ni(e.nextSibling),e===null))return null;return e}function cv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ni(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$?"||e.data==="$~"}function xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vE(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ni(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Sd=null;function fv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Ni(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function hv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function dv(e,i,r){switch(i=cc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Rl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);D(e)}var Oi=new Map,pv=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wa=q.d;q.d={f:xE,r:SE,D:yE,C:ME,L:EE,m:TE,X:AE,S:bE,M:RE};function xE(){var e=wa.f(),i=nc();return e||i}function SE(e){var i=st(e);i!==null&&i.tag===5&&i.type==="form"?Ug(i):wa.r(e)}var no=typeof document>"u"?null:document;function mv(e,i,r){var l=no;if(l&&typeof i=="string"&&i){var h=ge(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),pv.has(h)||(pv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),On(i,"link",e),xt(i),l.head.appendChild(i)))}}function yE(e){wa.D(e),mv("dns-prefetch",e,null)}function ME(e,i){wa.C(e,i),mv("preconnect",e,i)}function EE(e,i,r){wa.L(e,i,r);var l=no;if(l&&e&&i){var h='link[rel="preload"][as="'+ge(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+ge(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+ge(r.imageSizes)+'"]')):h+='[href="'+ge(e)+'"]';var m=h;switch(i){case"style":m=io(e);break;case"script":m=ao(e)}Oi.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Oi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Cl(m))||i==="script"&&l.querySelector(wl(m))||(i=l.createElement("link"),On(i,"link",e),xt(i),l.head.appendChild(i)))}}function TE(e,i){wa.m(e,i);var r=no;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ge(l)+'"][href="'+ge(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ao(e)}if(!Oi.has(m)&&(e=g({rel:"modulepreload",href:e},i),Oi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(wl(m)))return}l=r.createElement("link"),On(l,"link",e),xt(l),r.head.appendChild(l)}}}function bE(e,i,r){wa.S(e,i,r);var l=no;if(l&&e){var h=Q(l).hoistableStyles,m=io(e);i=i||"default";var T=h.get(m);if(!T){var C={loading:0,preload:null};if(T=l.querySelector(Cl(m)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Oi.get(m))&&yd(e,r);var G=T=l.createElement("link");xt(G),On(G,"link",e),G._p=new Promise(function(nt,pt){G.onload=nt,G.onerror=pt}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,hc(T,i,l)}T={type:"stylesheet",instance:T,count:1,state:C},h.set(m,T)}}}function AE(e,i){wa.X(e,i);var r=no;if(r&&e){var l=Q(r).hoistableScripts,h=ao(e),m=l.get(h);m||(m=r.querySelector(wl(h)),m||(e=g({src:e,async:!0},i),(i=Oi.get(h))&&Md(e,i),m=r.createElement("script"),xt(m),On(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function RE(e,i){wa.M(e,i);var r=no;if(r&&e){var l=Q(r).hoistableScripts,h=ao(e),m=l.get(h);m||(m=r.querySelector(wl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Oi.get(h))&&Md(e,i),m=r.createElement("script"),xt(m),On(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function _v(e,i,r,l){var h=(h=at.current)?fc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=io(r.href),r=Q(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=io(r.href);var m=Q(h).hoistableStyles,T=m.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=h.querySelector(Cl(e)))&&!m._p&&(T.instance=m,T.state.loading=5),Oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Oi.set(e,r),m||CE(h,e,r,T.state))),i&&l===null)throw Error(a(528,""));return T}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ao(r),r=Q(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function io(e){return'href="'+ge(e)+'"'}function Cl(e){return'link[rel="stylesheet"]['+e+"]"}function gv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function CE(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),On(i,"link",r),xt(i),e.head.appendChild(i))}function ao(e){return'[src="'+ge(e)+'"]'}function wl(e){return"script[async]"+e}function vv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ge(r.href)+'"]');if(l)return i.instance=l,xt(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xt(l),On(l,"style",h),hc(l,r.precedence,e),i.instance=l;case"stylesheet":h=io(r.href);var m=e.querySelector(Cl(h));if(m)return i.state.loading|=4,i.instance=m,xt(m),m;l=gv(r),(h=Oi.get(h))&&yd(l,h),m=(e.ownerDocument||e).createElement("link"),xt(m);var T=m;return T._p=new Promise(function(C,G){T.onload=C,T.onerror=G}),On(m,"link",l),i.state.loading|=4,hc(m,r.precedence,e),i.instance=m;case"script":return m=ao(r.src),(h=e.querySelector(wl(m)))?(i.instance=h,xt(h),h):(l=r,(h=Oi.get(m))&&(l=g({},r),Md(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),xt(h),On(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,hc(l,r.precedence,e));return i.instance}function hc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,T=0;T<l.length;T++){var C=l[T];if(C.dataset.precedence===i)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function yd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Md(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var dc=null;function xv(e,i,r){if(dc===null){var l=new Map,h=dc=new Map;h.set(r,l)}else h=dc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Br]||m[fn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(i)||"";T=e+T;var C=l.get(T);C?C.push(m):l.set(T,[m])}}return l}function Sv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function wE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function yv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function DE(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=io(l.href),m=i.querySelector(Cl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=pc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,xt(m);return}m=i.ownerDocument||i,l=gv(l),(h=Oi.get(h))&&yd(l,h),m=m.createElement("link"),xt(m);var T=m;T._p=new Promise(function(C,G){T.onload=C,T.onerror=G}),On(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=pc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ed=0;function UE(e,i){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Ed===0&&(Ed=62500*fE());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Ed?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function _c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,i.forEach(LE,e),mc=null,pc.call(e))}function LE(e,i){if(!(i.state.loading&4)){var r=mc.get(e);if(r)var l=r.get(null);else{r=new Map,mc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),l=T)}l&&r.set(null,l)}h=i.instance,T=h.getAttribute("data-precedence"),m=r.get(T)||l,m===l&&r.set(null,h),r.set(T,h),this.count++,l=pc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Dl={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function NE(e,i,r,l,h,m,T,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Mv(e,i,r,l,h,m,T,C,G,nt,pt,_t){return e=new NE(e,i,r,T,G,nt,pt,_t,C),i=1,m===!0&&(i|=24),m=fi(3,null,null,i),e.current=m,m.stateNode=e,i=nh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},sh(m),e}function Ev(e){return e?(e=Ps,e):Ps}function Tv(e,i,r,l,h,m){h=Ev(h),l.context===null?l.context=h:l.pendingContext=h,l=tr(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=er(e,l,i),r!==null&&($n(r,e,i),ll(r,e,i))}function bv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Td(e,i){bv(e,i),(e=e.alternate)&&bv(e,i)}function Av(e){if(e.tag===13||e.tag===31){var i=Vr(e,67108864);i!==null&&$n(i,e,67108864),Td(e,67108864)}}function Rv(e){if(e.tag===13||e.tag===31){var i=_i();i=bs(i);var r=Vr(e,i);r!==null&&$n(r,e,i),Td(e,i)}}var gc=!0;function OE(e,i,r,l){var h=B.T;B.T=null;var m=q.p;try{q.p=2,bd(e,i,r,l)}finally{q.p=m,B.T=h}}function PE(e,i,r,l){var h=B.T;B.T=null;var m=q.p;try{q.p=8,bd(e,i,r,l)}finally{q.p=m,B.T=h}}function bd(e,i,r,l){if(gc){var h=Ad(l);if(h===null)fd(e,i,l,vc,r),wv(e,l);else if(BE(h,e,i,r,l))l.stopPropagation();else if(wv(e,l),i&4&&-1<zE.indexOf(e)){for(;h!==null;){var m=st(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=Et(m.pendingLanes);if(T!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;T;){var G=1<<31-zt(T);C.entanglements[1]|=G,T&=~G}aa(m),(De&6)===0&&(tc=M()+500,Tl(0))}}break;case 31:case 13:C=Vr(m,2),C!==null&&$n(C,m,2),nc(),Td(m,2)}if(m=Ad(l),m===null&&fd(e,i,l,vc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else fd(e,i,l,null,r)}}function Ad(e){return e=Cf(e),Rd(e)}var vc=null;function Rd(e){if(vc=null,e=j(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return vc=e,null}function Cv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case J:return 2;case dt:return 8;case rt:case Pt:return 32;case At:return 268435456;default:return 32}default:return 32}}var Cd=!1,hr=null,dr=null,pr=null,Ul=new Map,Ll=new Map,mr=[],zE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(e,i){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ul.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(i.pointerId)}}function Nl(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=st(i),i!==null&&Av(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function BE(e,i,r,l,h){switch(i){case"focusin":return hr=Nl(hr,e,i,r,l,h),!0;case"dragenter":return dr=Nl(dr,e,i,r,l,h),!0;case"mouseover":return pr=Nl(pr,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Ul.set(m,Nl(Ul.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Ll.set(m,Nl(Ll.get(m)||null,e,i,r,l,h)),!0}return!1}function Dv(e){var i=j(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Wo(e.priority,function(){Rv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Wo(e.priority,function(){Rv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Ad(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Rf=l,r.target.dispatchEvent(l),Rf=null}else return i=st(r),i!==null&&Av(i),e.blockedOn=r,!1;i.shift()}return!0}function Uv(e,i,r){xc(e)&&r.delete(i)}function FE(){Cd=!1,hr!==null&&xc(hr)&&(hr=null),dr!==null&&xc(dr)&&(dr=null),pr!==null&&xc(pr)&&(pr=null),Ul.forEach(Uv),Ll.forEach(Uv)}function Sc(e,i){e.blockedOn===i&&(e.blockedOn=null,Cd||(Cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,FE)))}var yc=null;function Lv(e){yc!==e&&(yc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Rd(l||r)===null)continue;break}var m=st(r);m!==null&&(e.splice(i,3),i-=3,Ah(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function ro(e){function i(G){return Sc(G,e)}hr!==null&&Sc(hr,e),dr!==null&&Sc(dr,e),pr!==null&&Sc(pr,e),Ul.forEach(i),Ll.forEach(i);for(var r=0;r<mr.length;r++){var l=mr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)Dv(r),r.blockedOn===null&&mr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],T=h[wn]||null;if(typeof m=="function")T||Lv(r);else if(T){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[wn]||null)C=T.formAction;else if(Rd(h)!==null)continue}else C=T.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Lv(r)}}}function Nv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(T){return h=T})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function wd(e){this._internalRoot=e}Mc.prototype.render=wd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=_i();Tv(r,l,e,i,null,null)},Mc.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Tv(e.current,2,null,e,null,null),nc(),i[Ya]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=zr();e={blockedOn:null,target:e,priority:i};for(var r=0;r<mr.length&&i!==0&&i<mr[r].priority;r++);mr.splice(r,0,e),r===0&&Dv(e)}};var Ov=t.version;if(Ov!=="19.2.0")throw Error(a(527,Ov,"19.2.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var IE={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Tt=Ec.inject(IE),Rt=Ec}catch{}}return Pl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=Gg,m=Vg,T=kg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError)),i=Mv(e,1,!1,null,null,r,l,null,h,m,T,Nv),e[Ya]=i.current,cd(e),new wd(i)},Pl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=Gg,T=Vg,C=kg,G=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(G=r.formState)),i=Mv(e,1,!0,i,r??null,l,h,G,m,T,C,Nv),i.context=Ev(null),r=i.current,l=_i(),l=bs(l),h=tr(l),h.callback=null,er(r,h,l),r=l,i.current.lanes=r,Vn(i,r),aa(i),e[Ya]=i.current,cd(e),new Mc(i)},Pl.version="19.2.0",Pl}var Xv;function jE(){if(Xv)return Ld.exports;Xv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ld.exports=ZE(),Ld.exports}var KE=jE();const QE="/APR/assets/Logo-C9kic6B3.png";function za(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function oS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Do={duration:.5,overwrite:!1,delay:0},Cm,Pn,Qe,Fi=1e8,Xe=1/Fi,Mp=Math.PI*2,JE=Mp/4,$E=0,lS=Math.sqrt,tT=Math.cos,eT=Math.sin,Cn=function(t){return typeof t=="string"},sn=function(t){return typeof t=="function"},Ga=function(t){return typeof t=="number"},wm=function(t){return typeof t>"u"},fa=function(t){return typeof t=="object"},ni=function(t){return t!==!1},Dm=function(){return typeof window<"u"},Tc=function(t){return sn(t)||Cn(t)},uS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gn=Array.isArray,Ep=/(?:-?\.?\d|\.)+/gi,cS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fS=/[+-]=-?[.\d]+/,hS=/[^,'"\[\]\s]+/gi,nT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$e,ra,Tp,Um,Ti={},rf={},dS,pS=function(t){return(rf=Uo(t,Ti))&&li},Lm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Kl=function(t,n){return!n&&console.warn(t)},mS=function(t,n){return t&&(Ti[t]=n)&&rf&&(rf[t]=n)||Ti},Ql=function(){return 0},iT={suppressEvents:!0,isStart:!0,kill:!1},Kc={suppressEvents:!0,kill:!1},aT={suppressEvents:!0},Nm={},Rr=[],bp={},_S,xi={},Bd={},Wv=30,Qc=[],Om="",Pm=function(t){var n=t[0],a,s;if(fa(n)||sn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=Qc.length;s--&&!Qc[s].targetTest(n););a=Qc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new HS(t[s],a)))||t.splice(s,1);return t},_s=function(t){return t._gsap||Pm(Ii(t))[0]._gsap},gS=function(t,n,a){return(a=t[n])&&sn(a)?t[n]():wm(a)&&t.getAttribute&&t.getAttribute(n)||a},ii=function(t,n){return(t=t.split(",")).forEach(n)||t},cn=function(t){return Math.round(t*1e5)/1e5||0},vn=function(t){return Math.round(t*1e7)/1e7||0},bo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},rT=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},sf=function(){var t=Rr.length,n=Rr.slice(0),a,s;for(bp={},Rr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},zm=function(t){return!!(t._initted||t._startAt||t.add)},vS=function(t,n,a,s){Rr.length&&!Pn&&sf(),t.render(n,a,!!(Pn&&n<0&&zm(t))),Rr.length&&!Pn&&sf()},xS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(hS).length<2?n:Cn(t)?t.trim():t},SS=function(t){return t},bi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},sT=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Uo=function(t,n){for(var a in n)t[a]=n[a];return t},qv=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=fa(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},of=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},Yl=function(t){var n=t.parent||$e,a=t.keyframes?sT(Gn(t.keyframes)):bi;if(ni(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},oT=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},yS=function(t,n,a,s,u){var c=t[s],f;if(u)for(f=n[u];c&&c[u]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},vf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,c=n._next;u?u._next=c:t[a]===n&&(t[a]=c),c?c._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},Ur=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},gs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},lT=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Ap=function(t,n,a,s){return t._startAt&&(Pn?t._startAt.revert(Kc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},uT=function o(t){return!t||t._ts&&o(t.parent)},Yv=function(t){return t._repeat?Lo(t._tTime,t=t.duration()+t._rDelay)*t:0},Lo=function(t,n){var a=Math.floor(t=vn(t/n));return t&&a===t?a-1:a},lf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},xf=function(t){return t._end=vn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Xe)||0))},Sf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=vn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),xf(t),a._dirty||gs(a,t)),t},MS=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=lf(t.rawTime(),n),(!n._dur||lu(0,n.totalDuration(),a)-n._tTime>Xe)&&n.render(a,!0)),gs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Xe}},oa=function(t,n,a,s){return n.parent&&Ur(n),n._start=vn((Ga(a)?a:a||t!==$e?zi(t,a,n):t._time)+n._delay),n._end=vn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),yS(t,n,"_first","_last",t._sort?"_start":0),Rp(n)||(t._recent=n),s||MS(t,n),t._ts<0&&Sf(t,t._tTime),t},ES=function(t,n){return(Ti.ScrollTrigger||Lm("scrollTrigger",n))&&Ti.ScrollTrigger.create(n,t)},TS=function(t,n,a,s,u){if(Fm(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!Pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&_S!==Si.frame)return Rr.push(t),t._lazy=[u,s],1},cT=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Rp=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},fT=function(t,n,a,s){var u=t.ratio,c=n<0||!n&&(!t._start&&cT(t)&&!(!t._initted&&Rp(t))||(t._ts<0||t._dp._ts<0)&&!Rp(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=lu(0,t._tDur,n),_=Lo(p,f),t._yoyo&&_&1&&(c=1-c),_!==Lo(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||Pn||s||t._zTime===Xe||!n&&t._zTime){if(!t._initted&&TS(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?Xe:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&Ap(t,n,a,!0),t._onUpdate&&!a&&yi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&yi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Ur(t,1),!a&&!Pn&&(yi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},hT=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},No=function(t,n,a,s){var u=t._repeat,c=vn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:vn(c*(u+1)+t._rDelay*u):c,f>0&&!s&&Sf(t,t._tTime=t._tDur*f),t.parent&&xf(t),a||gs(t.parent,t),t},Zv=function(t){return t instanceof qn?gs(t):No(t,t._dur)},dT={_start:0,endTime:Ql,totalDuration:Ql},zi=function o(t,n,a){var s=t.labels,u=t._recent||dT,c=t.duration()>=Fi?u.endTime(!1):t._dur,f,p,d;return Cn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?u:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Gn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Zl=function(t,n,a){var s=Ga(n[1]),u=(s?2:1)+(t<2?0:1),c=n[u],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ni(p.vars.inherit)&&p.parent;c.immediateRender=ni(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[u-1]}return new gn(n[0],c,n[u+1])},Pr=function(t,n){return t||t===0?n(t):n},lu=function(t,n,a){return a<t?t:a>n?n:a},Hn=function(t,n){return!Cn(t)||!(n=nT.exec(t))?"":n[1]},pT=function(t,n,a){return Pr(a,function(s){return lu(t,n,s)})},Cp=[].slice,bS=function(t,n){return t&&fa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&fa(t[0]))&&!t.nodeType&&t!==ra},mT=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return Cn(s)&&!n||bS(s,1)?(u=a).push.apply(u,Ii(s)):a.push(s)})||a},Ii=function(t,n,a){return Qe&&!n&&Qe.selector?Qe.selector(t):Cn(t)&&!a&&(Tp||!Oo())?Cp.call((n||Um).querySelectorAll(t),0):Gn(t)?mT(t,a):bS(t)?Cp.call(t,0):t?[t]:[]},wp=function(t){return t=Ii(t)[0]||Kl("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Ii(n,a.querySelectorAll?a:a===t?Kl("Invalid scope")||Um.createElement("div"):t)}},AS=function(t){return t.sort(function(){return .5-Math.random()})},RS=function(t){if(sn(t))return t;var n=fa(t)?t:{each:t},a=vs(n.ease),s=n.from||0,u=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return Cn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,S,b){var E=(b||n).length,y=c[E],x,N,U,A,L,O,P,I,R;if(!y){if(R=n.grid==="auto"?0:(n.grid||[1,Fi])[1],!R){for(P=-Fi;P<(P=b[R++].getBoundingClientRect().left)&&R<E;);R<E&&R--}for(y=c[E]=[],x=p?Math.min(R,E)*_-.5:s%R,N=R===Fi?0:p?E*g/R-.5:s/R|0,P=0,I=Fi,O=0;O<E;O++)U=O%R-x,A=N-(O/R|0),y[O]=L=d?Math.abs(d==="y"?A:U):lS(U*U+A*A),L>P&&(P=L),L<I&&(I=L);s==="random"&&AS(y),y.max=P-I,y.min=I,y.v=E=(parseFloat(n.amount)||parseFloat(n.each)*(R>E?E-1:d?d==="y"?E/R:R:Math.max(R,E/R))||0)*(s==="edges"?-1:1),y.b=E<0?u-E:u,y.u=Hn(n.amount||n.each)||0,a=a&&E<0?BS(a):a}return E=(y[v]-y.min)/y.max||0,vn(y.b+(a?a(E):E)*y.v)+y.u}},Dp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=vn(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Ga(a)?0:Hn(a))}},CS=function(t,n){var a=Gn(t),s,u;return!a&&fa(t)&&(s=a=t.radius||Fi,t.values?(t=Ii(t.values),(u=!Ga(t[0]))&&(s*=s)):t=Dp(t.increment)),Pr(n,a?sn(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),p=parseFloat(u?c.y:0),d=Fi,_=0,g=t.length,v,S;g--;)u?(v=t[g].x-f,S=t[g].y-p,v=v*v+S*S):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,u||_===c||Ga(c)?_:_+Hn(c)}:Dp(t))},wS=function(t,n,a,s){return Pr(Gn(t)?!n:a===!0?!!(a=0):!s,function(){return Gn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},_T=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,c){return c(u)},s)}},gT=function(t,n){return function(a){return t(parseFloat(a))+(n||Hn(a))}},vT=function(t,n,a){return US(t,n,0,1,a)},DS=function(t,n,a){return Pr(a,function(s){return t[~~n(s)]})},xT=function o(t,n,a){var s=n-t;return Gn(t)?DS(t,o(0,t.length),n):Pr(a,function(u){return(s+(u-t)%s)%s+t})},ST=function o(t,n,a){var s=n-t,u=s*2;return Gn(t)?DS(t,o(0,t.length-1),n):Pr(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},Jl=function(t){for(var n=0,a="",s,u,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",u=t.substr(s+7,c-s-7).match(f?hS:Ep),a+=t.substr(n,s-n)+wS(f?u:+u[0],f?0:+u[1],+u[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},US=function(t,n,a,s,u){var c=n-t,f=s-a;return Pr(u,function(p){return a+((p-t)/c*f||0)})},yT=function o(t,n,a,s){var u=isNaN(t+n)?0:function(S){return(1-S)*t+S*n};if(!u){var c=Cn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Gn(t)&&!Gn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,u=function(b){b*=g;var E=Math.min(v,~~b);return _[E](b-E)},a=n}else s||(t=Uo(Gn(t)?[]:{},t));if(!_){for(p in n)Bm.call(f,t,p,"get",n[p]);u=function(b){return Gm(b,f)||(c?t.p:t)}}}return Pr(a,u)},jv=function(t,n,a){var s=t.labels,u=Fi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&u>(f=Math.abs(f))&&(p=c,u=f);return p},yi=function(t,n,a){var s=t.vars,u=s[n],c=Qe,f=t._ctx,p,d,_;if(u)return p=s[n+"Params"],d=s.callbackScope||t,a&&Rr.length&&sf(),f&&(Qe=f),_=p?u.apply(d,p):u.call(d),Qe=c,_},kl=function(t){return Ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pn),t.progress()<1&&yi(t,"onInterrupt"),t},Eo,LS=[],NS=function(t){if(t)if(t=!t.name&&t.default||t,Dm()||t.headless){var n=t.name,a=sn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:Ql,render:Gm,add:Bm,kill:BT,modifier:zT,rawVars:0},c={targetTest:0,get:0,getSetter:Hm,aliases:{},register:0};if(Oo(),t!==s){if(xi[n])return;bi(s,bi(of(t,u),c)),Uo(s.prototype,Uo(u,of(t,c))),xi[s.prop=n]=s,t.targetTest&&(Qc.push(s),Nm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}mS(n,s),t.register&&t.register(li,s,ai)}else LS.push(t)},ke=255,Xl={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},Fd=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*ke+.5|0},OS=function(t,n,a){var s=t?Ga(t)?[t>>16,t>>8&ke,t&ke]:0:Xl.black,u,c,f,p,d,_,g,v,S,b;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Xl[t])s=Xl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&ke,s&ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&ke,t&ke]}else if(t.substr(0,3)==="hsl"){if(s=b=t.match(Ep),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,u=_*2-c,s.length>3&&(s[3]*=1),s[0]=Fd(p+1/3,u,c),s[1]=Fd(p,u,c),s[2]=Fd(p-1/3,u,c);else if(~t.indexOf("="))return s=t.match(cS),a&&s.length<4&&(s[3]=1),s}else s=t.match(Ep)||Xl.transparent;s=s.map(Number)}return n&&!b&&(u=s[0]/ke,c=s[1]/ke,f=s[2]/ke,g=Math.max(u,c,f),v=Math.min(u,c,f),_=(g+v)/2,g===v?p=d=0:(S=g-v,d=_>.5?S/(2-g-v):S/(g+v),p=g===u?(c-f)/S+(c<f?6:0):g===c?(f-u)/S+2:(u-c)/S+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},PS=function(t){var n=[],a=[],s=-1;return t.split(Cr).forEach(function(u){var c=u.match(Mo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},Kv=function(t,n,a){var s="",u=(t+s).match(Cr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!u)return t;if(u=u.map(function(v){return(v=OS(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=PS(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Cr,"1").split(Mo),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?u.shift()||c+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!d)for(d=t.split(Cr),g=d.length-1;f<g;f++)s+=d[f]+u[f];return s+d[g]},Cr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Xl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),MT=/hsl[a]?\(/,zS=function(t){var n=t.join(" "),a;if(Cr.lastIndex=0,Cr.test(n))return a=MT.test(n),t[1]=Kv(t[1],a),t[0]=Kv(t[0],a,PS(t[1])),!0},$l,Si=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,c=u,f=[],p,d,_,g,v,S,b=function E(y){var x=o()-s,N=y===!0,U,A,L,O;if((x>t||x<0)&&(a+=x-n),s+=x,L=s-a,U=L-c,(U>0||N)&&(O=++g.frame,v=L-g.time*1e3,g.time=L=L/1e3,c+=U+(U>=u?4:u-U),A=1),N||(p=d(E)),A)for(S=0;S<f.length;S++)f[S](L,v,O,y)};return g={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){dS&&(!Tp&&Dm()&&(ra=Tp=window,Um=ra.document||{},Ti.gsap=li,(ra.gsapVersions||(ra.gsapVersions=[])).push(li.version),pS(rf||ra.GreenSockGlobals||!ra.gsap&&ra||{}),LS.forEach(NS)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},$l=1,b(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),$l=0,d=Ql},lagSmoothing:function(y,x){t=y||1/0,n=Math.min(x||33,t)},fps:function(y){u=1e3/(y||240),c=g.time*1e3+u},add:function(y,x,N){var U=x?function(A,L,O,P){y(A,L,O,P),g.remove(U)}:y;return g.remove(y),f[N?"unshift":"push"](U),Oo(),U},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},g})(),Oo=function(){return!$l&&Si.wake()},Ee={},ET=/^[\d.\-M][\d.\-,\s]/,TT=/["']/g,bT=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,p,d;u<c;u++)p=a[u],f=u!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(TT,"").trim():+d,s=p.substr(f+1).trim();return n},AT=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},RT=function(t){var n=(t+"").split("("),a=Ee[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[bT(n[1])]:AT(t).split(",").map(xS)):Ee._CE&&ET.test(t)?Ee._CE("",t):a},BS=function(t){return function(n){return 1-t(1-n)}},FS=function o(t,n){for(var a=t._first,s;a;)a instanceof qn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},vs=function(t,n){return t&&(sn(t)?t:Ee[t]||RT(t))||n},Es=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},c;return ii(t,function(f){Ee[f]=Ti[f]=u,Ee[c=f.toLowerCase()]=a;for(var p in u)Ee[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ee[f+"."+p]=u[p]}),u},IS=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Id=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),c=u/Mp*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*eT((_-c)*u)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:IS(f);return u=Mp/u,p.config=function(d,_){return o(t,d,_)},p},Hd=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:IS(a);return s.config=function(u){return o(t,u)},s};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Es(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;Es("Elastic",Id("in"),Id("out"),Id());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Es("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);Es("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Es("Circ",function(o){return-(lS(1-o*o)-1)});Es("Sine",function(o){return o===1?1:-tT(o*JE)+1});Es("Back",Hd("in"),Hd("out"),Hd());Ee.SteppedEase=Ee.steps=Ti.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,c=1-Xe;return function(f){return((s*lu(0,c,f)|0)+u)*a}}};Do.ease=Ee["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Om+=o+","+o+"Params,"});var HS=function(t,n){this.id=$E++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:gS,this.set=n?n.getSetter:Hm},tu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,No(this,+n.duration,1,1),this.data=n.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),$l||Si.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,No(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Oo(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(Sf(this,a),!u._dp||u.parent||MS(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&oa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Xe||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),vS(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Yv(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Yv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?Lo(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?lf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Xe?0:this._rts,this.totalTime(lu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),xf(this),lT(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&oa(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ni(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=aT);var s=Pn;return Pn=a,zm(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Pn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Zv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Zv(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(zi(this,a),ni(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ni(s)),this._dur||(this._zTime=-Xe),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-Xe)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(u){var c=sn(a)?a:SS,f=function(){var d=s.then;s.then=null,sn(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),u(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){kl(this)},o})();bi(tu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var qn=(function(o){oS(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=ni(a.sortChildren),$e&&oa(a.parent||$e,za(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&ES(za(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,c){return Zl(0,arguments,this),this},n.from=function(s,u,c){return Zl(1,arguments,this),this},n.fromTo=function(s,u,c,f){return Zl(2,arguments,this),this},n.set=function(s,u,c){return u.duration=0,u.parent=this,Yl(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new gn(s,u,zi(this,c),1),this},n.call=function(s,u,c){return oa(this,gn.delayedCall(0,s,u),c)},n.staggerTo=function(s,u,c,f,p,d,_){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new gn(s,c,zi(this,p)),this},n.staggerFrom=function(s,u,c,f,p,d,_){return c.runBackwards=1,Yl(c).immediateRender=ni(c.immediateRender),this.staggerTo(s,u,c,f,p,d,_)},n.staggerFromTo=function(s,u,c,f,p,d,_,g){return f.startAt=c,Yl(f).immediateRender=ni(f.immediateRender),this.staggerTo(s,u,f,p,d,_,g)},n.render=function(s,u,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:vn(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,S,b,E,y,x,N,U,A,L,O,P;if(this!==$e&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,A=this._start,U=this._ts,x=!U,g&&(d||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(O=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,u,c);if(v=vn(_%y),_===p?(E=this._repeat,v=d):(L=vn(_/y),E=~~L,E&&E===L&&(v=d,E--),v>d&&(v=d)),L=Lo(this._tTime,y),!f&&this._tTime&&L!==E&&this._tTime-L*y-this._dur<=0&&(L=E),O&&E&1&&(v=d-v,P=1),E!==L&&!this._lock){var I=O&&L&1,R=I===(O&&E&1);if(E<L&&(I=!I),f=I?0:_%d?d:_,this._lock=1,this.render(f||(P?0:vn(E*y)),u,!d)._lock=0,this._tTime=_,!u&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,R&&(this._lock=2,f=I?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;FS(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(N=hT(this,vn(f),vn(v)),N&&(_-=v-(v=N._start))),this._tTime=_,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&!u&&!L&&(yi(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(S=this._first;S;){if(b=S._next,(S._act||v>=S._start)&&S._ts&&N!==S){if(S.parent!==this)return this.render(s,u,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,u,c),v!==this._time||!this._ts&&!x){N=0,b&&(_+=this._zTime=-Xe);break}}S=b}else{S=this._last;for(var w=s<0?s:v;S;){if(b=S._prev,(S._act||w<=S._end)&&S._ts&&N!==S){if(S.parent!==this)return this.render(s,u,c);if(S.render(S._ts>0?(w-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(w-S._start)*S._ts,u,c||Pn&&zm(S)),v!==this._time||!this._ts&&!x){N=0,b&&(_+=this._zTime=w?-Xe:Xe);break}}S=b}}if(N&&!u&&(this.pause(),N.render(v>=f?0:-Xe)._zTime=v>=f?1:-1,this._ts))return this._start=A,xf(this),this.render(s,u,c);this._onUpdate&&!u&&yi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(A===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Ur(this,1),!u&&!(s<0&&!f)&&(_||f||!p)&&(yi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var c=this;if(Ga(u)||(u=zi(this,u,s)),!(s instanceof tu)){if(Gn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(Cn(s))return this.addLabel(s,u);if(sn(s))s=gn.delayedCall(0,s);else return this}return this!==s?oa(this,s,u):this},n.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-Fi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof gn?u&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,u,c)))),d=d._next;return p},n.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},n.remove=function(s){return Cn(s)?this.removeLabel(s):sn(s)?this.killTweensOf(s):(s.parent===this&&vf(this,s),s===this._recent&&(this._recent=this._last),gs(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vn(Si.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=zi(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,c){var f=gn.delayedCall(0,u||Ql,c);return f.data="isPause",this._hasPause=1,oa(this,f,zi(this,s))},n.removePause=function(s){var u=this._first;for(s=zi(this,s);u;)u._start===s&&u.data==="isPause"&&Ur(u),u=u._next},n.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Tr!==f[p]&&f[p].kill(s,u);return this},n.getTweensOf=function(s,u){for(var c=[],f=Ii(s),p=this._first,d=Ga(u),_;p;)p instanceof gn?rT(p._targets,f)&&(d?(!Tr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&c.push(p):(_=p.getTweensOf(f,u)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,u){u=u||{};var c=this,f=zi(c,s),p=u,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,S,b=gn.to(c,bi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Xe,onStart:function(){if(c.pause(),!S){var y=u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());b._dur!==y&&No(b,y,0,1).render(b._time,!0,!0),S=1}_&&_.apply(b,g||[])}},u));return v?b.render(0):b},n.tweenFromTo=function(s,u,c){return this.tweenTo(u,bi({startAt:{time:zi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),jv(this,zi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),jv(this,zi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Xe)},n.shiftChildren=function(s,u,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(d in p)p[d]>=c&&(p[d]+=s);return gs(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),gs(this)},n.totalDuration=function(s){var u=0,c=this,f=c._last,p=Fi,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,oa(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(u-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>u&&f._ts&&(u=f._end),f=d;No(c,c===$e&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if($e._ts&&(vS($e,lf(s,$e)),_S=Si.frame),Si.frame>=Wv){Wv+=Mi.autoSleep||120;var u=$e._first;if((!u||!u._ts)&&Mi.autoSleep&&Si._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Si.sleep()}}},t})(tu);bi(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var CT=function(t,n,a,s,u,c,f){var p=new ai(this._pt,t,n,0,1,qS,null,u),d=0,_=0,g,v,S,b,E,y,x,N;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=Jl(s)),c&&(N=[a,s],c(N,t,n),a=N[0],s=N[1]),v=a.match(zd)||[];g=zd.exec(s);)b=g[0],E=s.substring(d,g.index),S?S=(S+1)%5:E.substr(-5)==="rgba("&&(S=1),b!==v[_++]&&(y=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:y,c:b.charAt(1)==="="?bo(y,b)-y:parseFloat(b)-y,m:S&&S<4?Math.round:0},d=zd.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(fS.test(s)||x)&&(p.e=0),this._pt=p,p},Bm=function(t,n,a,s,u,c,f,p,d,_){sn(s)&&(s=s(u||0,t,c));var g=t[n],v=a!=="get"?a:sn(g)?d?t[n.indexOf("set")||!sn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,S=sn(g)?d?NT:XS:Im,b;if(Cn(s)&&(~s.indexOf("random(")&&(s=Jl(s)),s.charAt(1)==="="&&(b=bo(v,s)+(Hn(v)||0),(b||b===0)&&(s=b))),!_||v!==s||Up)return!isNaN(v*s)&&s!==""?(b=new ai(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?PT:WS,0,S),d&&(b.fp=d),f&&b.modifier(f,this,t),this._pt=b):(!g&&!(n in t)&&Lm(n,s),CT.call(this,t,n,v,s,S,p||Mi.stringFilter,d))},wT=function(t,n,a,s,u){if(sn(t)&&(t=jl(t,u,n,a,s)),!fa(t)||t.style&&t.nodeType||Gn(t)||uS(t))return Cn(t)?jl(t,u,n,a,s):t;var c={},f;for(f in t)c[f]=jl(t[f],u,n,a,s);return c},GS=function(t,n,a,s,u,c){var f,p,d,_;if(xi[t]&&(f=new xi[t]).init(u,f.rawVars?n[t]:wT(n[t],s,u,c,a),a,s,c)!==!1&&(a._pt=p=new ai(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==Eo))for(d=a._ptLookup[a._targets.indexOf(u)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Tr,Up,Fm=function o(t,n,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,S=s.autoRevert,b=t._dur,E=t._startAt,y=t._targets,x=t.parent,N=x&&x.data==="nested"?x.vars.targets:y,U=t._overwrite==="auto"&&!Cm,A=t.timeline,L,O,P,I,R,w,H,Z,et,lt,ut,B,q;if(A&&(!v||!u)&&(u="none"),t._ease=vs(u,Do.ease),t._yEase=g?BS(vs(g===!0?u:g,Do.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!s.runBackwards,!A||v&&!s.stagger){if(Z=y[0]?_s(y[0]).harness:0,B=Z&&s[Z.prop],L=of(s,Nm),E&&(E._zTime<0&&E.progress(1),n<0&&_&&f&&!S?E.render(-1,!0):E.revert(_&&b?Kc:iT),E._lazy=0),c){if(Ur(t._startAt=gn.set(y,bi({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!E&&ni(p),startAt:null,delay:0,onUpdate:d&&function(){return yi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Pn||!f&&!S)&&t._startAt.revert(Kc),f&&b&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&b&&!E){if(n&&(f=!1),P=bi({overwrite:!1,data:"isFromStart",lazy:f&&!E&&ni(p),immediateRender:f,stagger:0,parent:x},L),B&&(P[Z.prop]=B),Ur(t._startAt=gn.set(y,P)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Pn?t._startAt.revert(Kc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Xe,Xe);else if(!n)return}for(t._pt=t._ptCache=0,p=b&&ni(p)||p&&!b,O=0;O<y.length;O++){if(R=y[O],H=R._gsap||Pm(y)[O]._gsap,t._ptLookup[O]=lt={},bp[H.id]&&Rr.length&&sf(),ut=N===y?O:N.indexOf(R),Z&&(et=new Z).init(R,B||L,t,ut,N)!==!1&&(t._pt=I=new ai(t._pt,R,et.name,0,1,et.render,et,0,et.priority),et._props.forEach(function(W){lt[W]=I}),et.priority&&(w=1)),!Z||B)for(P in L)xi[P]&&(et=GS(P,L,t,ut,R,N))?et.priority&&(w=1):lt[P]=I=Bm.call(t,R,P,"get",L[P],ut,N,0,s.stringFilter);t._op&&t._op[O]&&t.kill(R,t._op[O]),U&&t._pt&&(Tr=t,$e.killTweensOf(R,lt,t.globalTime(n)),q=!t.parent,Tr=0),t._pt&&p&&(bp[H.id]=1)}w&&YS(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!q,v&&n<=0&&A.render(Fi,!0,!0)},DT=function(t,n,a,s,u,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,S;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,S=t._targets.length;S--;){if(_=v[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Up=1,t.vars[n]="+=0",Fm(t,f),Up=0,p?Kl(n+" not eligible for reset"):1;d.push(_)}for(S=d.length;S--;)g=d[S],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=cn(a)+Hn(g.e)),g.b&&(g.b=_.s+Hn(g.b))},UT=function(t,n){var a=t[0]?_s(t[0]).harness:0,s=a&&a.aliases,u,c,f,p;if(!s)return n;u=Uo({},n);for(c in s)if(c in u)for(p=s[c].split(","),f=p.length;f--;)u[p[f]]=u[c];return u},LT=function(t,n,a,s){var u=n.ease||s||"power1.inOut",c,f;if(Gn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:u})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:u})},jl=function(t,n,a,s,u){return sn(t)?t.call(n,a,s,u):Cn(t)&&~t.indexOf("random(")?Jl(t):t},VS=Om+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",kS={};ii(VS+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return kS[o]=1});var gn=(function(o){oS(t,o);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=o.call(this,c?s:Yl(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,S=p.overwrite,b=p.keyframes,E=p.defaults,y=p.scrollTrigger,x=p.yoyoEase,N=s.parent||$e,U=(Gn(a)||uS(a)?Ga(a[0]):"length"in s)?[a]:Ii(a),A,L,O,P,I,R,w,H;if(f._targets=U.length?Pm(U):Kl("GSAP target "+a+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,b||v||Tc(d)||Tc(_)){if(s=f.vars,A=f.timeline=new qn({data:"nested",defaults:E||{},targets:N&&N.data==="nested"?N.vars.targets:U}),A.kill(),A.parent=A._dp=za(f),A._start=0,v||Tc(d)||Tc(_)){if(P=U.length,w=v&&RS(v),fa(v))for(I in v)~VS.indexOf(I)&&(H||(H={}),H[I]=v[I]);for(L=0;L<P;L++)O=of(s,kS),O.stagger=0,x&&(O.yoyoEase=x),H&&Uo(O,H),R=U[L],O.duration=+jl(d,za(f),L,R,U),O.delay=(+jl(_,za(f),L,R,U)||0)-f._delay,!v&&P===1&&O.delay&&(f._delay=_=O.delay,f._start+=_,O.delay=0),A.to(R,O,w?w(L,R,U):0),A._ease=Ee.none;A.duration()?d=_=0:f.timeline=0}else if(b){Yl(bi(A.vars.defaults,{ease:"none"})),A._ease=vs(b.ease||s.ease||"none");var Z=0,et,lt,ut;if(Gn(b))b.forEach(function(B){return A.to(U,B,">")}),A.duration();else{O={};for(I in b)I==="ease"||I==="easeEach"||LT(I,b[I],O,b.easeEach);for(I in O)for(et=O[I].sort(function(B,q){return B.t-q.t}),Z=0,L=0;L<et.length;L++)lt=et[L],ut={ease:lt.e,duration:(lt.t-(L?et[L-1].t:0))/100*d},ut[I]=lt.v,A.to(U,ut,Z),Z+=ut.duration;A.duration()<d&&A.to({},{duration:d-A.duration()})}}d||f.duration(d=A.duration())}else f.timeline=0;return S===!0&&!Cm&&(Tr=za(f),$e.killTweensOf(U),Tr=0),oa(N,za(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!b&&f._start===vn(N._time)&&ni(g)&&uT(za(f))&&N.data!=="nested")&&(f._tTime=-Xe,f.render(Math.max(0,-_)||0)),y&&ES(za(f),y),f}var n=t.prototype;return n.render=function(s,u,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-Xe&&!_?p:s<Xe?0:s,v,S,b,E,y,x,N,U,A;if(!d)fT(this,s,u,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,U=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,u,c);if(v=vn(g%E),g===p?(b=this._repeat,v=d):(y=vn(g/E),b=~~y,b&&b===y?(v=d,b--):v>d&&(v=d)),x=this._yoyo&&b&1,x&&(A=this._yEase,v=d-v),y=Lo(this._tTime,E),v===f&&!c&&this._initted&&b===y)return this._tTime=g,this;b!==y&&(U&&this._yEase&&FS(U,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==E&&this._initted&&(this._lock=c=1,this.render(vn(E*b),!0).invalidate()._lock=0))}if(!this._initted){if(TS(this,_?s:v,c,u,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&b!==y))return this;if(d!==this._dur)return this.render(s,u,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=N=(A||this._ease)(v/d),this._from&&(this.ratio=N=1-N),!f&&g&&!u&&!y&&(yi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(N,S.d),S=S._next;U&&U.render(s<0?s:U._dur*U._ease(v/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&Ap(this,s,u,c),yi(this,"onUpdate")),this._repeat&&b!==y&&this.vars.onRepeat&&!u&&this.parent&&yi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&Ap(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Ur(this,1),!u&&!(_&&!f)&&(g||f||x)&&(yi(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,c,f,p){$l||Si.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Fm(this,d),_=this._ease(d/this._dur),DT(this,s,u,c,f,_,d,p)?this.resetTo(s,u,c,f,1):(Sf(this,0),this.parent||yS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Pn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Tr&&Tr.vars.overwrite!==!0)._first||kl(this),this.parent&&c!==this.timeline.totalDuration()&&No(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Ii(s):f,d=this._ptLookup,_=this._pt,g,v,S,b,E,y,x;if((!u||u==="all")&&oT(f,p))return u==="all"&&(this._pt=0),kl(this);for(g=this._op=this._op||[],u!=="all"&&(Cn(u)&&(E={},ii(u,function(N){return E[N]=1}),u=E),u=UT(f,u)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],u==="all"?(g[x]=u,b=v,S={}):(S=g[x]=g[x]||{},b=u);for(E in b)y=v&&v[E],y&&((!("kill"in y.d)||y.d.kill(E)===!0)&&vf(this,y,"_pt"),delete v[E]),S!=="all"&&(S[E]=1)}return this._initted&&!this._pt&&_&&kl(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return Zl(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return Zl(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return $e.killTweensOf(s,u,c)},t})(tu);bi(gn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(o){gn[o]=function(){var t=new qn,n=Cp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Im=function(t,n,a){return t[n]=a},XS=function(t,n,a){return t[n](a)},NT=function(t,n,a,s){return t[n](s.fp,a)},OT=function(t,n,a){return t.setAttribute(n,a)},Hm=function(t,n){return sn(t[n])?XS:wm(t[n])&&t.setAttribute?OT:Im},WS=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},PT=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},qS=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Gm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},zT=function(t,n,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,n,a),u=c},BT=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?vf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},FT=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},YS=function(t){for(var n=t._pt,a,s,u,c;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=u},ai=(function(){function o(n,a,s,u,c,f,p,d,_){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||WS,this.d=p||this,this.set=d||Im,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=FT,this.m=a,this.mt=u,this.tween=s},o})();ii(Om+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Nm[o]=1});Ti.TweenMax=Ti.TweenLite=gn;Ti.TimelineLite=Ti.TimelineMax=qn;$e=new qn({sortChildren:!1,defaults:Do,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=zS;var xs=[],Jc={},IT=[],Qv=0,HT=0,Gd=function(t){return(Jc[t]||IT).map(function(n){return n()})},Lp=function(){var t=Date.now(),n=[];t-Qv>2&&(Gd("matchMediaInit"),xs.forEach(function(a){var s=a.queries,u=a.conditions,c,f,p,d;for(f in s)c=ra.matchMedia(s[f]).matches,c&&(p=1),c!==u[f]&&(u[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),Gd("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Qv=t,Gd("matchMedia"))},ZS=(function(){function o(n,a){this.selector=a&&wp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=HT++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){sn(a)&&(u=s,s=a,a=sn);var c=this,f=function(){var d=Qe,_=c.selector,g;return d&&d!==c&&d.data.push(c),u&&(c.selector=wp(u)),Qe=c,g=s.apply(c,arguments),sn(g)&&c._r.push(g),Qe=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===sn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=Qe;Qe=null,a(this),Qe=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof gn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var f=u.getTweens(),p=u.data.length,d;p--;)d=u.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)d=u.data[p],d instanceof qn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof gn)&&d.revert&&d.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=xs.length;c--;)xs[c].id===this.id&&xs.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),GT=(function(){function o(n){this.contexts=[],this.scope=n,Qe&&Qe.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){fa(a)||(a={matches:a});var c=new ZS(0,u||this.scope),f=c.conditions={},p,d,_;Qe&&!c.selector&&(c.selector=Qe.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=ra.matchMedia(a[d]),p&&(xs.indexOf(c)<0&&xs.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Lp):p.addEventListener("change",Lp)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),uf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return NS(s)})},timeline:function(t){return new qn(t)},getTweensOf:function(t,n){return $e.getTweensOf(t,n)},getProperty:function(t,n,a,s){Cn(t)&&(t=Ii(t)[0]);var u=_s(t||{}).get,c=a?SS:xS;return a==="native"&&(a=""),t&&(n?c((xi[n]&&xi[n].get||u)(t,n,a,s)):function(f,p,d){return c((xi[f]&&xi[f].get||u)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Ii(t),t.length>1){var s=t.map(function(_){return li.quickSetter(_,n,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var c=xi[n],f=_s(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;Eo._pt=0,g.init(t,a?_+a:_,Eo,0,[t]),g.render(1,g),Eo._pt&&Gm(1,Eo)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,u=li.to(t,bi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return u.resetTo(n,p,d,_)};return c.tween=u,c},isTweening:function(t){return $e.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=vs(t.ease,Do.ease)),qv(Do,t||{})},config:function(t){return qv(Mi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!xi[f]&&!Ti[f]&&Kl(n+" effect requires "+f+" plugin.")}),Bd[n]=function(f,p,d){return a(Ii(f),bi(p||{},u),d)},c&&(qn.prototype[n]=function(f,p,d){return this.add(Bd[n](f,fa(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Ee[t]=vs(n)},parseEase:function(t,n){return arguments.length?vs(t,n):Ee},getById:function(t){return $e.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new qn(t),s,u;for(a.smoothChildTiming=ni(t.smoothChildTiming),$e.remove(a),a._dp=0,a._time=a._tTime=$e._time,s=$e._first;s;)u=s._next,(n||!(!s._dur&&s instanceof gn&&s.vars.onComplete===s._targets[0]))&&oa(a,s,s._start-s._delay),s=u;return oa($e,a,0),a},context:function(t,n){return t?new ZS(t,n):Qe},matchMedia:function(t){return new GT(t)},matchMediaRefresh:function(){return xs.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Lp()},addEventListener:function(t,n){var a=Jc[t]||(Jc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Jc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:xT,wrapYoyo:ST,distribute:RS,random:wS,snap:CS,normalize:vT,getUnit:Hn,clamp:pT,splitColor:OS,toArray:Ii,selector:wp,mapRange:US,pipe:_T,unitize:gT,interpolate:yT,shuffle:AS},install:pS,effects:Bd,ticker:Si,updateRoot:qn.updateRoot,plugins:xi,globalTimeline:$e,core:{PropTween:ai,globals:mS,Tween:gn,Timeline:qn,Animation:tu,getCache:_s,_removeLinkedListItem:vf,reverting:function(){return Pn},context:function(t){return t&&Qe&&(Qe.data.push(t),t._ctx=Qe),Qe},suppressOverwrites:function(t){return Cm=t}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return uf[o]=gn[o]});Si.add(qn.updateRoot);Eo=uf.to({},{duration:0});var VT=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},kT=function(t,n){var a=t._targets,s,u,c;for(s in n)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=VT(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[u],s))},Vd=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var p,d;if(Cn(u)&&(p={},ii(u,function(_){return p[_]=1}),u=p),n){p={};for(d in u)p[d]=n(u[d]);u=p}kT(f,u)}}}},li=uf.registerPlugin({name:"attr",init:function(t,n,a,s,u){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,u,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Pn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Vd("roundProps",Dp),Vd("modifiers"),Vd("snap",CS))||uf;gn.version=qn.version=li.version="3.13.0";dS=1;Dm()&&Oo();Ee.Power0;Ee.Power1;Ee.Power2;Ee.Power3;Ee.Power4;Ee.Linear;Ee.Quad;Ee.Cubic;Ee.Quart;Ee.Quint;Ee.Strong;Ee.Elastic;Ee.Back;Ee.SteppedEase;Ee.Bounce;Ee.Sine;Ee.Expo;Ee.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jv,br,Ao,Vm,ps,$v,km,XT=function(){return typeof window<"u"},Va={},us=180/Math.PI,Ro=Math.PI/180,so=Math.atan2,tx=1e8,Xm=/([A-Z])/g,WT=/(left|right|width|margin|padding|x)/i,qT=/[\s,\(]\S/,la={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Np=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},YT=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},ZT=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},jT=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},jS=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},KS=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},KT=function(t,n,a){return t.style[n]=a},QT=function(t,n,a){return t.style.setProperty(n,a)},JT=function(t,n,a){return t._gsap[n]=a},$T=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},t1=function(t,n,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},e1=function(t,n,a,s,u){var c=t._gsap;c[n]=a,c.renderTransform(u,c)},tn="transform",ri=tn+"Origin",n1=function o(t,n){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in Va&&u){if(this.tfm=this.tfm||{},t!=="transform")t=la[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Ba(s,f)}):this.tfm[t]=c.x?c[t]:Ba(s,t),t===ri&&(this.tfm.zOrigin=c.zOrigin);else return la.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(tn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,n,"")),t=tn}(u||n)&&this.props.push(t,n,u[t])},QS=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},i1=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(Xm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=km(),(!u||!u.isStart)&&!a[tn]&&(QS(a),s.zOrigin&&a[ri]&&(a[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},JS=function(t,n){var a={target:t,props:[],revert:i1,save:n1};return t._gsap||li.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},$S,Op=function(t,n){var a=br.createElementNS?br.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):br.createElement(t);return a&&a.style?a:br.createElement(t)},Hi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Xm,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Po(n)||n,1)||""},ex="O,Moz,ms,Ms,Webkit".split(","),Po=function(t,n,a){var s=n||ps,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(ex[c]+t in u););return c<0?null:(c===3?"ms":c>=0?ex[c]:"")+t},Pp=function(){XT()&&window.document&&(Jv=window,br=Jv.document,Ao=br.documentElement,ps=Op("div")||{style:{}},Op("div"),tn=Po(tn),ri=tn+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$S=!!Po("perspective"),km=li.core.reverting,Vm=1)},nx=function(t){var n=t.ownerSVGElement,a=Op("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Ao.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Ao.removeChild(a),u},ix=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},ty=function(t){var n,a;try{n=t.getBBox()}catch{n=nx(t),a=1}return n&&(n.width||n.height)||a||(n=nx(t)),n&&!n.width&&!n.x&&!n.y?{x:+ix(t,["x","cx","x1"])||0,y:+ix(t,["y","cy","y1"])||0,width:0,height:0}:n},ey=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ty(t))},ys=function(t,n){if(n){var a=t.style,s;n in Va&&n!==ri&&(n=tn),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(Xm,"-$1").toLowerCase())):a.removeAttribute(n)}},Ar=function(t,n,a,s,u,c){var f=new ai(t._pt,n,a,0,1,c?KS:jS);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},ax={deg:1,rad:1,turn:1},a1={grid:1,flex:1},Lr=function o(t,n,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=ps.style,p=WT.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",S=s==="%",b,E,y,x;if(s===c||!u||ax[s]||ax[c])return u;if(c!=="px"&&!v&&(u=o(t,n,a,"px")),x=t.getCTM&&ey(t),(S||c==="%")&&(Va[n]||~n.indexOf("adius")))return b=x?t.getBBox()[p?"width":"height"]:t[_],cn(S?u/b*g:u/100*b);if(f[p?"width":"height"]=g+(v?c:s),E=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===br||!E.appendChild)&&(E=br.body),y=E._gsap,y&&S&&y.width&&p&&y.time===Si.time&&!y.uncache)return cn(u/y.width*g);if(S&&(n==="height"||n==="width")){var N=t.style[n];t.style[n]=g+s,b=t[_],N?t.style[n]=N:ys(t,n)}else(S||c==="%")&&!a1[Hi(E,"display")]&&(f.position=Hi(t,"position")),E===t&&(f.position="static"),E.appendChild(ps),b=ps[_],E.removeChild(ps),f.position="absolute";return p&&S&&(y=_s(E),y.time=Si.time,y.width=E[_]),cn(v?b*u/g:b&&u?g/b*u:0)},Ba=function(t,n,a,s){var u;return Vm||Pp(),n in la&&n!=="transform"&&(n=la[n],~n.indexOf(",")&&(n=n.split(",")[0])),Va[n]&&n!=="transform"?(u=nu(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:ff(Hi(t,ri))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=cf[n]&&cf[n](t,n,a)||Hi(t,n)||gS(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Lr(t,n,u,a)+a:u},r1=function(t,n,a,s){if(!a||a==="none"){var u=Po(n,t,1),c=u&&Hi(t,u,1);c&&c!==a?(n=u,a=c):n==="borderColor"&&(a=Hi(t,"borderTopColor"))}var f=new ai(this._pt,t.style,n,0,1,qS),p=0,d=0,_,g,v,S,b,E,y,x,N,U,A,L;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Hi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[n],t.style[n]=s,s=Hi(t,n)||s,E?t.style[n]=E:ys(t,n)),_=[a,s],zS(_),a=_[0],s=_[1],v=a.match(Mo)||[],L=s.match(Mo)||[],L.length){for(;g=Mo.exec(s);)y=g[0],N=s.substring(p,g.index),b?b=(b+1)%5:(N.substr(-5)==="rgba("||N.substr(-5)==="hsla(")&&(b=1),y!==(E=v[d++]||"")&&(S=parseFloat(E)||0,A=E.substr((S+"").length),y.charAt(1)==="="&&(y=bo(S,y)+A),x=parseFloat(y),U=y.substr((x+"").length),p=Mo.lastIndex-U.length,U||(U=U||Mi.units[n]||A,p===s.length&&(s+=U,f.e+=U)),A!==U&&(S=Lr(t,n,E,U)||0),f._pt={_next:f._pt,p:N||d===1?N:",",s:S,c:x-S,m:b&&b<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?KS:jS;return fS.test(s)&&(f.e=0),this._pt=f,f},rx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},s1=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=rx[a]||a,n[1]=rx[s]||s,n.join(" ")},o1=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,c=a._gsap,f,p,d;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),d=u.length;--d>-1;)f=u[d],Va[f]&&(p=1,f=f==="transformOrigin"?ri:tn),ys(a,f);p&&(ys(a,tn),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",nu(a,1),c.uncache=1,QS(s)))}},cf={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new ai(t._pt,n,a,0,0,o1);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},eu=[1,0,0,1,0,0],ny={},iy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},sx=function(t){var n=Hi(t,tn);return iy(n)?eu:n.substr(7).match(cS).map(cn)},Wm=function(t,n){var a=t._gsap||_s(t),s=t.style,u=sx(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?eu:u):(u===eu&&!t.offsetParent&&t!==Ao&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Ao.appendChild(t)),u=sx(t),p?s.display=p:ys(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Ao.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},zp=function(t,n,a,s,u,c){var f=t._gsap,p=u||Wm(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=p[0],b=p[1],E=p[2],y=p[3],x=p[4],N=p[5],U=n.split(" "),A=parseFloat(U[0])||0,L=parseFloat(U[1])||0,O,P,I,R;a?p!==eu&&(P=S*y-b*E)&&(I=A*(y/P)+L*(-E/P)+(E*N-y*x)/P,R=A*(-b/P)+L*(S/P)-(S*N-b*x)/P,A=I,L=R):(O=ty(t),A=O.x+(~U[0].indexOf("%")?A/100*O.width:A),L=O.y+(~(U[1]||U[0]).indexOf("%")?L/100*O.height:L)),s||s!==!1&&f.smooth?(x=A-d,N=L-_,f.xOffset=g+(x*S+N*E)-x,f.yOffset=v+(x*b+N*y)-N):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=L,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ri]="0px 0px",c&&(Ar(c,f,"xOrigin",d,A),Ar(c,f,"yOrigin",_,L),Ar(c,f,"xOffset",g,f.xOffset),Ar(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+L)},nu=function(t,n){var a=t._gsap||new HS(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Hi(t,ri)||"0",_,g,v,S,b,E,y,x,N,U,A,L,O,P,I,R,w,H,Z,et,lt,ut,B,q,W,vt,yt,F,$,St,Mt,Dt;return _=g=v=E=y=x=N=U=A=0,S=b=1,a.svg=!!(t.getCTM&&ey(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[tn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[tn]!=="none"?p[tn]:"")),s.scale=s.rotate=s.translate="none"),P=Wm(t,a.svg),a.svg&&(a.uncache?(W=t.getBBox(),d=a.xOrigin-W.x+"px "+(a.yOrigin-W.y)+"px",q=""):q=!n&&t.getAttribute("data-svg-origin"),zp(t,q||d,!!q||a.originIsAbsolute,a.smooth!==!1,P)),L=a.xOrigin||0,O=a.yOrigin||0,P!==eu&&(H=P[0],Z=P[1],et=P[2],lt=P[3],_=ut=P[4],g=B=P[5],P.length===6?(S=Math.sqrt(H*H+Z*Z),b=Math.sqrt(lt*lt+et*et),E=H||Z?so(Z,H)*us:0,N=et||lt?so(et,lt)*us+E:0,N&&(b*=Math.abs(Math.cos(N*Ro))),a.svg&&(_-=L-(L*H+O*et),g-=O-(L*Z+O*lt))):(Dt=P[6],St=P[7],yt=P[8],F=P[9],$=P[10],Mt=P[11],_=P[12],g=P[13],v=P[14],I=so(Dt,$),y=I*us,I&&(R=Math.cos(-I),w=Math.sin(-I),q=ut*R+yt*w,W=B*R+F*w,vt=Dt*R+$*w,yt=ut*-w+yt*R,F=B*-w+F*R,$=Dt*-w+$*R,Mt=St*-w+Mt*R,ut=q,B=W,Dt=vt),I=so(-et,$),x=I*us,I&&(R=Math.cos(-I),w=Math.sin(-I),q=H*R-yt*w,W=Z*R-F*w,vt=et*R-$*w,Mt=lt*w+Mt*R,H=q,Z=W,et=vt),I=so(Z,H),E=I*us,I&&(R=Math.cos(I),w=Math.sin(I),q=H*R+Z*w,W=ut*R+B*w,Z=Z*R-H*w,B=B*R-ut*w,H=q,ut=W),y&&Math.abs(y)+Math.abs(E)>359.9&&(y=E=0,x=180-x),S=cn(Math.sqrt(H*H+Z*Z+et*et)),b=cn(Math.sqrt(B*B+Dt*Dt)),I=so(ut,B),N=Math.abs(I)>2e-4?I*us:0,A=Mt?1/(Mt<0?-Mt:Mt):0),a.svg&&(q=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!iy(Hi(t,tn)),q&&t.setAttribute("transform",q))),Math.abs(N)>90&&Math.abs(N)<270&&(u?(S*=-1,N+=E<=0?180:-180,E+=E<=0?180:-180):(b*=-1,N+=N<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=cn(S),a.scaleY=cn(b),a.rotation=cn(E)+f,a.rotationX=cn(y)+f,a.rotationY=cn(x)+f,a.skewX=N+f,a.skewY=U+f,a.transformPerspective=A+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ri]=ff(d)),a.xOffset=a.yOffset=0,a.force3D=Mi.force3D,a.renderTransform=a.svg?u1:$S?ay:l1,a.uncache=0,a},ff=function(t){return(t=t.split(" "))[0]+" "+t[1]},kd=function(t,n,a){var s=Hn(n);return cn(parseFloat(n)+parseFloat(Lr(t,"x",a+"px",s)))+s},l1=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,ay(t,n)},es="0deg",zl="0px",ns=") ",ay=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,S=a.skewY,b=a.scaleX,E=a.scaleY,y=a.transformPerspective,x=a.force3D,N=a.target,U=a.zOrigin,A="",L=x==="auto"&&t&&t!==1||x===!0;if(U&&(g!==es||_!==es)){var O=parseFloat(_)*Ro,P=Math.sin(O),I=Math.cos(O),R;O=parseFloat(g)*Ro,R=Math.cos(O),c=kd(N,c,P*R*-U),f=kd(N,f,-Math.sin(O)*-U),p=kd(N,p,I*R*-U+U)}y!==zl&&(A+="perspective("+y+ns),(s||u)&&(A+="translate("+s+"%, "+u+"%) "),(L||c!==zl||f!==zl||p!==zl)&&(A+=p!==zl||L?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ns),d!==es&&(A+="rotate("+d+ns),_!==es&&(A+="rotateY("+_+ns),g!==es&&(A+="rotateX("+g+ns),(v!==es||S!==es)&&(A+="skew("+v+", "+S+ns),(b!==1||E!==1)&&(A+="scale("+b+", "+E+ns),N.style[tn]=A||"translate(0, 0)"},u1=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,S=a.target,b=a.xOrigin,E=a.yOrigin,y=a.xOffset,x=a.yOffset,N=a.forceCSS,U=parseFloat(c),A=parseFloat(f),L,O,P,I,R;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Ro,d*=Ro,L=Math.cos(p)*g,O=Math.sin(p)*g,P=Math.sin(p-d)*-v,I=Math.cos(p-d)*v,d&&(_*=Ro,R=Math.tan(d-_),R=Math.sqrt(1+R*R),P*=R,I*=R,_&&(R=Math.tan(_),R=Math.sqrt(1+R*R),L*=R,O*=R)),L=cn(L),O=cn(O),P=cn(P),I=cn(I)):(L=g,I=v,O=P=0),(U&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(U=Lr(S,"x",c,"px"),A=Lr(S,"y",f,"px")),(b||E||y||x)&&(U=cn(U+b-(b*L+E*P)+y),A=cn(A+E-(b*O+E*I)+x)),(s||u)&&(R=S.getBBox(),U=cn(U+s/100*R.width),A=cn(A+u/100*R.height)),R="matrix("+L+","+O+","+P+","+I+","+U+","+A+")",S.setAttribute("transform",R),N&&(S.style[tn]=R)},c1=function(t,n,a,s,u){var c=360,f=Cn(u),p=parseFloat(u)*(f&&~u.indexOf("rad")?us:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=u.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*tx)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*tx)%c-~~(d/c)*c)),t._pt=v=new ai(t._pt,n,a,s,d,YT),v.e=_,v.u="deg",t._props.push(a),v},ox=function(t,n){for(var a in n)t[a]=n[a];return t},f1=function(t,n,a){var s=ox({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,S,b;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[tn]=n,f=nu(a,1),ys(a,tn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[tn],c[tn]=n,f=nu(a,1),c[tn]=d);for(p in Va)d=s[p],_=f[p],d!==_&&u.indexOf(p)<0&&(S=Hn(d),b=Hn(_),g=S!==b?Lr(a,p,d,b):parseFloat(d),v=parseFloat(_),t._pt=new ai(t._pt,f,p,g,v-g,Np),t._pt.u=b||0,t._props.push(p));ox(f,s)};ii("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",c=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(f){return t<2?o+f:"border"+f+o});cf[t>1?"border"+o:o]=function(f,p,d,_,g){var v,S;if(arguments.length<4)return v=c.map(function(b){return Ba(f,b,d)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(_+"").split(" "),S={},c.forEach(function(b,E){return S[b]=v[E]=v[E]||v[(E-1)/2|0]}),f.init(p,S,g)}});var ry={name:"css",register:Pp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,S,b,E,y,x,N,U,A,L,O,P,I;Vm||Pp(),this.styles=this.styles||JS(t),I=this.styles.props,this.tween=a;for(E in n)if(E!=="autoRound"&&(_=n[E],!(xi[E]&&GS(E,n,a,s,t,u)))){if(S=typeof _,b=cf[E],S==="function"&&(_=_.call(a,s,t,u),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=Jl(_)),b)b(this,t,E,_,a)&&(P=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Cr.lastIndex=0,Cr.test(d)||(y=Hn(d),x=Hn(_)),x?y!==x&&(d=Lr(t,E,d,x)+x):y&&(_+=y),this.add(f,"setProperty",d,_,s,u,0,0,E),c.push(E),I.push(E,0,f[E]);else if(S!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(a,s,t,u):p[E],Cn(d)&&~d.indexOf("random(")&&(d=Jl(d)),Hn(d+"")||d==="auto"||(d+=Mi.units[E]||Hn(Ba(t,E))||""),(d+"").charAt(1)==="="&&(d=Ba(t,E))):d=Ba(t,E),v=parseFloat(d),N=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),N&&(_=_.substr(2)),g=parseFloat(_),E in la&&(E==="autoAlpha"&&(v===1&&Ba(t,"visibility")==="hidden"&&g&&(v=0),I.push("visibility",0,f.visibility),Ar(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=la[E],~E.indexOf(",")&&(E=E.split(",")[0]))),U=E in Va,U){if(this.styles.save(E),S==="string"&&_.substring(0,6)==="var(--"&&(_=Hi(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),A||(L=t._gsap,L.renderTransform&&!n.parseTransform||nu(t,n.parseTransform),O=n.smoothOrigin!==!1&&L.smooth,A=this._pt=new ai(this._pt,f,tn,0,1,L.renderTransform,L,0,-1),A.dep=1),E==="scale")this._pt=new ai(this._pt,L,"scaleY",L.scaleY,(N?bo(L.scaleY,N+g):g)-L.scaleY||0,Np),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){I.push(ri,0,f[ri]),_=s1(_),L.svg?zp(t,_,0,O,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==L.zOrigin&&Ar(this,L,"zOrigin",L.zOrigin,x),Ar(this,f,E,ff(d),ff(_)));continue}else if(E==="svgOrigin"){zp(t,_,1,O,0,this);continue}else if(E in ny){c1(this,L,E,v,N?bo(v,N+_):_);continue}else if(E==="smoothOrigin"){Ar(this,L,"smooth",L.smooth,_);continue}else if(E==="force3D"){L[E]=_;continue}else if(E==="transform"){f1(this,_,t);continue}}else E in f||(E=Po(E)||E);if(U||(g||g===0)&&(v||v===0)&&!qT.test(_)&&E in f)y=(d+"").substr((v+"").length),g||(g=0),x=Hn(_)||(E in Mi.units?Mi.units[E]:y),y!==x&&(v=Lr(t,E,d,x)),this._pt=new ai(this._pt,U?L:f,E,v,(N?bo(v,N+g):g)-v,!U&&(x==="px"||E==="zIndex")&&n.autoRound!==!1?jT:Np),this._pt.u=x||0,y!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=ZT);else if(E in f)r1.call(this,t,E,d,N?N+_:_);else if(E in t)this.add(t,E,d||t[E],N?N+_:_,s,u);else if(E!=="parseTransform"){Lm(E,_);continue}U||(E in f?I.push(E,0,f[E]):typeof t[E]=="function"?I.push(E,2,t[E]()):I.push(E,1,d||t[E])),c.push(E)}}P&&YS(this)},render:function(t,n){if(n.tween._time||!km())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Ba,aliases:la,getSetter:function(t,n,a){var s=la[n];return s&&s.indexOf(",")<0&&(n=s),n in Va&&n!==ri&&(t._gsap.x||Ba(t,"x"))?a&&$v===a?n==="scale"?$T:JT:($v=a||{})&&(n==="scale"?t1:e1):t.style&&!wm(t.style[n])?KT:~n.indexOf("-")?QT:Hm(t,n)},core:{_removeProperty:ys,_getMatrix:Wm}};li.utils.checkPrefix=Po;li.core.getStyleSaver=JS;(function(o,t,n,a){var s=ii(o+","+t+","+n,function(u){Va[u]=1});ii(t,function(u){Mi.units[u]="deg",ny[u]=1}),la[s[13]]=o+","+t,ii(a,function(u){var c=u.split(":");la[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Mi.units[o]="px"});li.registerPlugin(ry);var Wl=li.registerPlugin(ry)||li;Wl.core.Tween;const h1=({logo:o,logoAlt:t="Logo",items:n,className:a="",ease:s="power3.out",baseColor:u="#fff",menuColor:c,buttonBgColor:f,buttonTextColor:p})=>{const[d,_]=Rn.useState(!1),[g,v]=Rn.useState(!1),S=Rn.useRef(null),b=Rn.useRef([]),E=Rn.useRef(null),y=()=>{const A=S.current;if(!A)return 260;if(window.matchMedia("(max-width: 768px)").matches){const O=A.querySelector(".card-nav-content");if(O){const P=O.style.visibility,I=O.style.pointerEvents,R=O.style.position,w=O.style.height;O.style.visibility="visible",O.style.pointerEvents="auto",O.style.position="static",O.style.height="auto",O.offsetHeight;const H=60,Z=16,et=O.scrollHeight;return O.style.visibility=P,O.style.pointerEvents=I,O.style.position=R,O.style.height=w,H+et+Z}}return 260},x=()=>{const A=S.current;if(!A)return null;Wl.set(A,{height:60,overflow:"hidden"}),Wl.set(b.current,{y:50,opacity:0});const L=Wl.timeline({paused:!0});return L.to(A,{height:y,duration:.4,ease:s}),L.to(b.current,{y:0,opacity:1,duration:.4,ease:s,stagger:.08},"-=0.1"),L};Rn.useLayoutEffect(()=>{const A=x();return E.current=A,()=>{A?.kill(),E.current=null}},[s,n]),Rn.useLayoutEffect(()=>{const A=()=>{if(E.current)if(g){const L=y();Wl.set(S.current,{height:L}),E.current.kill();const O=x();O&&(O.progress(1),E.current=O)}else{E.current.kill();const L=x();L&&(E.current=L)}};return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[g]);const N=()=>{const A=E.current;A&&(g?(_(!1),A.eventCallback("onReverseComplete",()=>v(!1)),A.reverse()):(_(!0),v(!0),A.play(0)))},U=A=>L=>{L&&(b.current[A]=L)};return Je.jsx("div",{className:`card-nav-container ${a}`,children:Je.jsxs("nav",{ref:S,className:`card-nav ${g?"open":""}`,style:{backgroundColor:u},children:[Je.jsxs("div",{className:"card-nav-top",children:[Je.jsxs("div",{className:`hamburger-menu ${d?"open":""}`,onClick:N,role:"button","aria-label":g?"Close menu":"Open menu",tabIndex:0,style:{color:c||"#000"},children:[Je.jsx("div",{className:"hamburger-line"}),Je.jsx("div",{className:"hamburger-line"})]}),Je.jsx("div",{className:"logo-container",children:Je.jsx("img",{src:o,alt:t,className:"logo"})}),Je.jsx("button",{type:"button",className:"card-nav-cta-button",style:{backgroundColor:f,color:p},children:"PORTFOLIO"})]}),Je.jsx("div",{className:"card-nav-content","aria-hidden":!g,children:(n||[]).slice(0,3).map((A,L)=>Je.jsxs("div",{className:"nav-card",ref:U(L),style:{backgroundColor:A.bgColor,color:A.textColor},children:[Je.jsx("div",{className:"nav-card-label",children:A.label}),Je.jsx("div",{className:"nav-card-links",children:A.links?.map((O,P)=>Je.jsx("a",{className:"nav-card-link",href:O.href,"aria-label":O.ariaLabel,children:O.label},`${O.label}-${P}`))})]},`${A.label}-${L}`))})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qm="180",d1=0,lx=1,p1=2,sy=1,m1=2,Pa=3,Nr=0,si=1,Fa=2,wr=0,Co=1,Bp=2,ux=3,cx=4,_1=5,hs=100,g1=101,v1=102,x1=103,S1=104,y1=200,M1=201,E1=202,T1=203,Fp=204,Ip=205,b1=206,A1=207,R1=208,C1=209,w1=210,D1=211,U1=212,L1=213,N1=214,Hp=0,Gp=1,Vp=2,zo=3,kp=4,Xp=5,Wp=6,qp=7,oy=0,O1=1,P1=2,Dr=0,z1=1,B1=2,F1=3,I1=4,H1=5,G1=6,V1=7,ly=300,Bo=301,Fo=302,Yp=303,Zp=304,yf=306,jp=1e3,Qi=1001,Kp=1002,Ei=1003,k1=1004,bc=1005,ei=1006,Xd=1007,ms=1008,ka=1009,uy=1010,cy=1011,iu=1012,Ym=1013,Ms=1014,ua=1015,Go=1016,Zm=1017,jm=1018,au=1020,fy=35902,hy=35899,dy=1021,py=1022,Gi=1023,ru=1026,su=1027,my=1028,Km=1029,_y=1030,Qm=1031,Jm=1033,$c=33776,tf=33777,ef=33778,nf=33779,Qp=35840,Jp=35841,$p=35842,tm=35843,em=36196,nm=37492,im=37496,am=37808,rm=37809,sm=37810,om=37811,lm=37812,um=37813,cm=37814,fm=37815,hm=37816,dm=37817,pm=37818,mm=37819,_m=37820,gm=37821,vm=36492,xm=36494,Sm=36495,ym=36283,Mm=36284,Em=36285,Tm=36286,X1=3200,W1=3201,q1=0,Y1=1,Er="",Bi="srgb",Io="srgb-linear",hf="linear",He="srgb",oo=7680,fx=519,Z1=512,j1=513,K1=514,gy=515,Q1=516,J1=517,$1=518,tb=519,hx=35044,dx="300 es",ca=2e3,df=2001;class Vo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,c=s.length;u<c;u++)s[u].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=Math.PI/180,bm=180/Math.PI;function uu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[n&63|128]+Fn[n>>8&255]+"-"+Fn[n>>16&255]+Fn[n>>24&255]+Fn[a&255]+Fn[a>>8&255]+Fn[a>>16&255]+Fn[a>>24&255]).toLowerCase()}function Me(o,t,n){return Math.max(t,Math.min(n,o))}function eb(o,t){return(o%t+t)%t}function qd(o,t,n){return(1-n)*o+n*t}function Bl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class oe{constructor(t=0,n=0){oe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*s+t.x,this.y=u*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cu{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3];const v=u[c+0],S=u[c+1],b=u[c+2],E=u[c+3];if(f===0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=S,t[n+2]=b,t[n+3]=E;return}if(g!==E||p!==v||d!==S||_!==b){let y=1-f;const x=p*v+d*S+_*b+g*E,N=x>=0?1:-1,U=1-x*x;if(U>Number.EPSILON){const L=Math.sqrt(U),O=Math.atan2(L,x*N);y=Math.sin(y*O)/L,f=Math.sin(f*O)/L}const A=f*N;if(p=p*y+v*A,d=d*y+S*A,_=_*y+b*A,g=g*y+E*A,y===1-f){const L=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=L,d*=L,_*=L,g*=L}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,u,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=u[c],v=u[c+1],S=u[c+2],b=u[c+3];return t[n]=f*b+_*g+p*S-d*v,t[n+1]=p*b+_*v+d*g-f*S,t[n+2]=d*b+_*S+f*v-p*g,t[n+3]=_*b-f*g-p*v-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(u/2),v=p(a/2),S=p(s/2),b=p(u/2);switch(c){case"XYZ":this._x=v*_*g+d*S*b,this._y=d*S*g-v*_*b,this._z=d*_*b+v*S*g,this._w=d*_*g-v*S*b;break;case"YXZ":this._x=v*_*g+d*S*b,this._y=d*S*g-v*_*b,this._z=d*_*b-v*S*g,this._w=d*_*g+v*S*b;break;case"ZXY":this._x=v*_*g-d*S*b,this._y=d*S*g+v*_*b,this._z=d*_*b+v*S*g,this._w=d*_*g-v*S*b;break;case"ZYX":this._x=v*_*g-d*S*b,this._y=d*S*g+v*_*b,this._z=d*_*b-v*S*g,this._w=d*_*g+v*S*b;break;case"YZX":this._x=v*_*g+d*S*b,this._y=d*S*g+v*_*b,this._z=d*_*b-v*S*g,this._w=d*_*g-v*S*b;break;case"XZY":this._x=v*_*g-d*S*b,this._y=d*S*g-v*_*b,this._z=d*_*b+v*S*g,this._w=d*_*g+v*S*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-d)*S,this._z=(c-s)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(_-p)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(u+d)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(u-d)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-s)/S,this._x=(u+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-u*p,this._y=s*_+c*p+u*f-a*d,this._z=u*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,u=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*c+n*this._w,this._x=S*a+n*this._x,this._y=S*s+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,f),g=Math.sin((1-n)*_)/d,v=Math.sin(n*_)/d;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,n=0,a=0){ot.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(px.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(px.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-u*s),g=2*(u*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-u*g,this.z=s+p*g+u*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-u*f,this.y=u*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Yd.copy(this).projectOnVector(t),this.sub(Yd)}reflect(t){return this.sub(Yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yd=new ot,px=new cu;class fe{constructor(t,n,a,s,u,c,f,p,d){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d)}set(t,n,a,s,u,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],S=a[5],b=a[8],E=s[0],y=s[3],x=s[6],N=s[1],U=s[4],A=s[7],L=s[2],O=s[5],P=s[8];return u[0]=c*E+f*N+p*L,u[3]=c*y+f*U+p*O,u[6]=c*x+f*A+p*P,u[1]=d*E+_*N+g*L,u[4]=d*y+_*U+g*O,u[7]=d*x+_*A+g*P,u[2]=v*E+S*N+b*L,u[5]=v*y+S*U+b*O,u[8]=v*x+S*A+b*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*u*_+a*f*p+s*u*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*u,S=d*u-c*p,b=n*g+a*v+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=g*E,t[1]=(s*d-_*a)*E,t[2]=(f*a-s*c)*E,t[3]=v*E,t[4]=(_*n-s*p)*E,t[5]=(s*u-f*n)*E,t[6]=S*E,t[7]=(a*p-d*n)*E,t[8]=(c*n-a*u)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,c,f){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Zd.makeScale(t,n)),this}rotate(t){return this.premultiply(Zd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Zd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new fe;function vy(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function pf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nb(){const o=pf("canvas");return o.style.display="block",o}const mx={};function ou(o){o in mx||(mx[o]=!0,console.warn(o))}function ib(o,t,n){return new Promise(function(a,s){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const _x=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gx=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ab(){const o={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(s,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===He&&(s.r=Ia(s.r),s.g=Ia(s.g),s.b=Ia(s.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(s.r=wo(s.r),s.g=wo(s.g),s.b=wo(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?hf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,c){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return ou("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return ou("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Io]:{primaries:t,whitePoint:a,transfer:hf,toXYZ:_x,fromXYZ:gx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:t,whitePoint:a,transfer:He,toXYZ:_x,fromXYZ:gx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),o}const we=ab();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lo;class rb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{lo===void 0&&(lo=pf("canvas")),lo.width=t.width,lo.height=t.height;const s=lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=lo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=pf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let c=0;c<u.length;c++)u[c]=Ia(u[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ia(n[a]/255)*255):n[a]=Ia(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sb=0;class $m{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=uu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?u.push(jd(s[c].image)):u.push(jd(s[c]))}else u=jd(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function jd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ob=0;const Kd=new ot;class Yn extends Vo{constructor(t=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,a=Qi,s=Qi,u=ei,c=ms,f=Gi,p=ka,d=Yn.DEFAULT_ANISOTROPY,_=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=uu(),this.name="",this.source=new $m(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ly)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jp:t.x=t.x-Math.floor(t.x);break;case Qi:t.x=t.x<0?0:1;break;case Kp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jp:t.y=t.y-Math.floor(t.y);break;case Qi:t.y=t.y<0?0:1;break;case Kp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=ly;Yn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,n=0,a=0,s=1){rn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],S=p[5],b=p[9],E=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-E)<.01&&Math.abs(b-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+E)<.1&&Math.abs(b+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,A=(S+1)/2,L=(x+1)/2,O=(_+v)/4,P=(g+E)/4,I=(b+y)/4;return U>A&&U>L?U<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(U),s=O/a,u=P/a):A>L?A<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(A),a=O/s,u=I/s):L<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(L),a=P/u,s=I/u),this.set(a,s,u,n),this}let N=Math.sqrt((y-b)*(y-b)+(g-E)*(g-E)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(y-b)/N,this.y=(g-E)/N,this.z=(v-_)/N,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lb extends Vo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new rn(0,0,t,n),this.scissorTest=!1,this.viewport=new rn(0,0,t,n);const s={width:t,height:n,depth:a.depth},u=new Yn(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new $m(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends lb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class xy extends Yn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ub extends Yn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fu{constructor(t=new ot(1/0,1/0,1/0),n=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(qi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(qi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=qi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,qi):qi.fromBufferAttribute(u,c),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ac.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ac.copy(a.boundingBox)),Ac.applyMatrix4(t.matrixWorld),this.union(Ac)}const s=t.children;for(let u=0,c=s.length;u<c;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fl),Rc.subVectors(this.max,Fl),uo.subVectors(t.a,Fl),co.subVectors(t.b,Fl),fo.subVectors(t.c,Fl),gr.subVectors(co,uo),vr.subVectors(fo,co),is.subVectors(uo,fo);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-is.z,is.y,gr.z,0,-gr.x,vr.z,0,-vr.x,is.z,0,-is.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-is.y,is.x,0];return!Qd(n,uo,co,fo,Rc)||(n=[1,0,0,0,1,0,0,0,1],!Qd(n,uo,co,fo,Rc))?!1:(Cc.crossVectors(gr,vr),n=[Cc.x,Cc.y,Cc.z],Qd(n,uo,co,fo,Rc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],qi=new ot,Ac=new fu,uo=new ot,co=new ot,fo=new ot,gr=new ot,vr=new ot,is=new ot,Fl=new ot,Rc=new ot,Cc=new ot,as=new ot;function Qd(o,t,n,a,s){for(let u=0,c=o.length-3;u<=c;u+=3){as.fromArray(o,u);const f=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),p=t.dot(as),d=n.dot(as),_=a.dot(as);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const cb=new fu,Il=new ot,Jd=new ot;class Mf{constructor(t=new ot,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):cb.setFromPoints(t).getCenter(a);let s=0;for(let u=0,c=t.length;u<c;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Il.subVectors(t,this.center);const n=Il.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Il,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Il.copy(t.center).add(Jd)),this.expandByPoint(Il.copy(t.center).sub(Jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ua=new ot,$d=new ot,wc=new ot,xr=new ot,tp=new ot,Dc=new ot,ep=new ot;class Sy{constructor(t=new ot,n=new ot(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ua.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,n),Ua.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){$d.copy(t).add(n).multiplyScalar(.5),wc.copy(n).sub(t).normalize(),xr.copy(this.origin).sub($d);const u=t.distanceTo(n)*.5,c=-this.direction.dot(wc),f=xr.dot(this.direction),p=-xr.dot(wc),d=xr.lengthSq(),_=Math.abs(1-c*c);let g,v,S,b;if(_>0)if(g=c*p-f,v=c*f-p,b=u*_,g>=0)if(v>=-b)if(v<=b){const E=1/_;g*=E,v*=E,S=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=u,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v=-u,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v<=-b?(g=Math.max(0,-(-c*u+f)),v=g>0?-u:Math.min(Math.max(-u,-p),u),S=-g*g+v*(v+2*p)+d):v<=b?(g=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+d):(g=Math.max(0,-(c*u+f)),v=g>0?u:Math.min(Math.max(-u,-p),u),S=-g*g+v*(v+2*p)+d);else v=c>0?-u:u,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy($d).addScaledVector(wc,v),S}intersectSphere(t,n){Ua.subVectors(t.center,this.origin);const a=Ua.dot(this.direction),s=Ua.dot(Ua)-a*a,u=t.radius*t.radius;if(s>u)return null;const c=Math.sqrt(u-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(u=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||u>s||((u>a||isNaN(a))&&(a=u),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,n,a,s,u){tp.subVectors(n,t),Dc.subVectors(a,t),ep.crossVectors(tp,Dc);let c=this.direction.dot(ep),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;xr.subVectors(this.origin,t);const p=f*this.direction.dot(Dc.crossVectors(xr,Dc));if(p<0)return null;const d=f*this.direction.dot(tp.cross(xr));if(d<0||p+d>c)return null;const _=-f*xr.dot(ep);return _<0?null:this.at(_/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(t,n,a,s,u,c,f,p,d,_,g,v,S,b,E,y){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d,_,g,v,S,b,E,y)}set(t,n,a,s,u,c,f,p,d,_,g,v,S,b,E,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=u,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=b,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/ho.setFromMatrixColumn(t,0).length(),u=1/ho.setFromMatrixColumn(t,1).length(),c=1/ho.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=c*_,S=c*g,b=f*_,E=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=S+b*d,n[5]=v-E*d,n[9]=-f*p,n[2]=E-v*d,n[6]=b+S*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,S=p*g,b=d*_,E=d*g;n[0]=v+E*f,n[4]=b*f-S,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=S*f-b,n[6]=E+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,S=p*g,b=d*_,E=d*g;n[0]=v-E*f,n[4]=-c*g,n[8]=b+S*f,n[1]=S+b*f,n[5]=c*_,n[9]=E-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,S=c*g,b=f*_,E=f*g;n[0]=p*_,n[4]=b*d-S,n[8]=v*d+E,n[1]=p*g,n[5]=E*d+v,n[9]=S*d-b,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,S=c*d,b=f*p,E=f*d;n[0]=p*_,n[4]=E-v*g,n[8]=b*g+S,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*g+b,n[10]=v-E*g}else if(t.order==="XZY"){const v=c*p,S=c*d,b=f*p,E=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+E,n[5]=c*_,n[9]=S*g-b,n[2]=b*g-S,n[6]=f*_,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fb,t,hb)}lookAt(t,n,a){const s=this.elements;return gi.subVectors(t,n),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Sr.crossVectors(a,gi),Sr.lengthSq()===0&&(Math.abs(a.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Sr.crossVectors(a,gi)),Sr.normalize(),Uc.crossVectors(gi,Sr),s[0]=Sr.x,s[4]=Uc.x,s[8]=gi.x,s[1]=Sr.y,s[5]=Uc.y,s[9]=gi.y,s[2]=Sr.z,s[6]=Uc.z,s[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],S=a[13],b=a[2],E=a[6],y=a[10],x=a[14],N=a[3],U=a[7],A=a[11],L=a[15],O=s[0],P=s[4],I=s[8],R=s[12],w=s[1],H=s[5],Z=s[9],et=s[13],lt=s[2],ut=s[6],B=s[10],q=s[14],W=s[3],vt=s[7],yt=s[11],F=s[15];return u[0]=c*O+f*w+p*lt+d*W,u[4]=c*P+f*H+p*ut+d*vt,u[8]=c*I+f*Z+p*B+d*yt,u[12]=c*R+f*et+p*q+d*F,u[1]=_*O+g*w+v*lt+S*W,u[5]=_*P+g*H+v*ut+S*vt,u[9]=_*I+g*Z+v*B+S*yt,u[13]=_*R+g*et+v*q+S*F,u[2]=b*O+E*w+y*lt+x*W,u[6]=b*P+E*H+y*ut+x*vt,u[10]=b*I+E*Z+y*B+x*yt,u[14]=b*R+E*et+y*q+x*F,u[3]=N*O+U*w+A*lt+L*W,u[7]=N*P+U*H+A*ut+L*vt,u[11]=N*I+U*Z+A*B+L*yt,u[15]=N*R+U*et+A*q+L*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],S=t[14],b=t[3],E=t[7],y=t[11],x=t[15];return b*(+u*p*g-s*d*g-u*f*v+a*d*v+s*f*S-a*p*S)+E*(+n*p*S-n*d*v+u*c*v-s*c*S+s*d*_-u*p*_)+y*(+n*d*g-n*f*S-u*c*g+a*c*S+u*f*_-a*d*_)+x*(-s*f*_-n*p*g+n*f*v+s*c*g-a*c*v+a*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],S=t[11],b=t[12],E=t[13],y=t[14],x=t[15],N=g*y*d-E*v*d+E*p*S-f*y*S-g*p*x+f*v*x,U=b*v*d-_*y*d-b*p*S+c*y*S+_*p*x-c*v*x,A=_*E*d-b*g*d+b*f*S-c*E*S-_*f*x+c*g*x,L=b*g*p-_*E*p-b*f*v+c*E*v+_*f*y-c*g*y,O=n*N+a*U+s*A+u*L;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/O;return t[0]=N*P,t[1]=(E*v*u-g*y*u-E*s*S+a*y*S+g*s*x-a*v*x)*P,t[2]=(f*y*u-E*p*u+E*s*d-a*y*d-f*s*x+a*p*x)*P,t[3]=(g*p*u-f*v*u-g*s*d+a*v*d+f*s*S-a*p*S)*P,t[4]=U*P,t[5]=(_*y*u-b*v*u+b*s*S-n*y*S-_*s*x+n*v*x)*P,t[6]=(b*p*u-c*y*u-b*s*d+n*y*d+c*s*x-n*p*x)*P,t[7]=(c*v*u-_*p*u+_*s*d-n*v*d-c*s*S+n*p*S)*P,t[8]=A*P,t[9]=(b*g*u-_*E*u-b*a*S+n*E*S+_*a*x-n*g*x)*P,t[10]=(c*E*u-b*f*u+b*a*d-n*E*d-c*a*x+n*f*x)*P,t[11]=(_*f*u-c*g*u-_*a*d+n*g*d+c*a*S-n*f*S)*P,t[12]=L*P,t[13]=(_*E*s-b*g*s+b*a*v-n*E*v-_*a*y+n*g*y)*P,t[14]=(b*f*s-c*E*s-b*a*p+n*E*p+c*a*y-n*f*y)*P,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*P,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,c=t.x,f=t.y,p=t.z,d=u*c,_=u*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,c){return this.set(1,a,u,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,c=n._y,f=n._z,p=n._w,d=u+u,_=c+c,g=f+f,v=u*d,S=u*_,b=u*g,E=c*_,y=c*g,x=f*g,N=p*d,U=p*_,A=p*g,L=a.x,O=a.y,P=a.z;return s[0]=(1-(E+x))*L,s[1]=(S+A)*L,s[2]=(b-U)*L,s[3]=0,s[4]=(S-A)*O,s[5]=(1-(v+x))*O,s[6]=(y+N)*O,s[7]=0,s[8]=(b+U)*P,s[9]=(y-N)*P,s[10]=(1-(v+E))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let u=ho.set(s[0],s[1],s[2]).length();const c=ho.set(s[4],s[5],s[6]).length(),f=ho.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],Yi.copy(this);const d=1/u,_=1/c,g=1/f;return Yi.elements[0]*=d,Yi.elements[1]*=d,Yi.elements[2]*=d,Yi.elements[4]*=_,Yi.elements[5]*=_,Yi.elements[6]*=_,Yi.elements[8]*=g,Yi.elements[9]*=g,Yi.elements[10]*=g,n.setFromRotationMatrix(Yi),a.x=u,a.y=c,a.z=f,this}makePerspective(t,n,a,s,u,c,f=ca,p=!1){const d=this.elements,_=2*u/(n-t),g=2*u/(a-s),v=(n+t)/(n-t),S=(a+s)/(a-s);let b,E;if(p)b=u/(c-u),E=c*u/(c-u);else if(f===ca)b=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(f===df)b=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,c,f=ca,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),S=-(a+s)/(a-s);let b,E;if(p)b=1/(c-u),E=c/(c-u);else if(f===ca)b=-2/(c-u),E=-(c+u)/(c-u);else if(f===df)b=-1/(c-u),E=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=b,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ho=new ot,Yi=new xn,fb=new ot(0,0,0),hb=new ot(1,1,1),Sr=new ot,Uc=new ot,gi=new ot,vx=new xn,xx=new cu;class Xa{constructor(t=0,n=0,a=0,s=Xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],S=s[10];switch(n){case"XYZ":this._y=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return vx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return xx.setFromEuler(this),this.setFromQuaternion(xx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xa.DEFAULT_ORDER="XYZ";class yy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let db=0;const Sx=new ot,po=new cu,La=new xn,Lc=new ot,Hl=new ot,pb=new ot,mb=new cu,yx=new ot(1,0,0),Mx=new ot(0,1,0),Ex=new ot(0,0,1),Tx={type:"added"},_b={type:"removed"},mo={type:"childadded",child:null},np={type:"childremoved",child:null};class oi extends Vo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=uu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const t=new ot,n=new Xa,a=new cu,s=new ot(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xn},normalMatrix:{value:new fe}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(yx,t)}rotateY(t){return this.rotateOnAxis(Mx,t)}rotateZ(t){return this.rotateOnAxis(Ex,t)}translateOnAxis(t,n){return Sx.copy(t).applyQuaternion(this.quaternion),this.position.add(Sx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(yx,t)}translateY(t){return this.translateOnAxis(Mx,t)}translateZ(t){return this.translateOnAxis(Ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(La.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Lc.copy(t):Lc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?La.lookAt(Hl,Lc,this.up):La.lookAt(Lc,Hl,this.up),this.quaternion.setFromRotationMatrix(La),s&&(La.extractRotation(s.matrixWorld),po.setFromRotationMatrix(La),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tx),mo.child=t,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_b),np.child=t,this.dispatchEvent(np),np.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),La.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),La.multiply(t.parent.matrixWorld)),t.applyMatrix4(La),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tx),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,t,pb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hl,mb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(u(t.materials,this.material[p]));s.material=f}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(u(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),S=c(t.animations),b=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}oi.DEFAULT_UP=new ot(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new ot,Na=new ot,ip=new ot,Oa=new ot,_o=new ot,go=new ot,bx=new ot,ap=new ot,rp=new ot,sp=new ot,op=new rn,lp=new rn,up=new rn;class Ki{constructor(t=new ot,n=new ot,a=new ot){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Zi.subVectors(t,n),s.cross(Zi);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){Zi.subVectors(s,n),Na.subVectors(a,n),ip.subVectors(t,n);const c=Zi.dot(Zi),f=Zi.dot(Na),p=Zi.dot(ip),d=Na.dot(Na),_=Na.dot(ip),g=c*d-f*f;if(g===0)return u.set(0,0,0),null;const v=1/g,S=(d*p-f*_)*v,b=(c*_-f*p)*v;return u.set(1-S-b,b,S)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getInterpolation(t,n,a,s,u,c,f,p){return this.getBarycoord(t,n,a,s,Oa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Oa.x),p.addScaledVector(c,Oa.y),p.addScaledVector(f,Oa.z),p)}static getInterpolatedAttribute(t,n,a,s,u,c){return op.setScalar(0),lp.setScalar(0),up.setScalar(0),op.fromBufferAttribute(t,n),lp.fromBufferAttribute(t,a),up.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(op,u.x),c.addScaledVector(lp,u.y),c.addScaledVector(up,u.z),c}static isFrontFacing(t,n,a,s){return Zi.subVectors(a,n),Na.subVectors(t,n),Zi.cross(Na).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Zi.cross(Na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ki.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,u){return Ki.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let c,f;_o.subVectors(s,a),go.subVectors(u,a),ap.subVectors(t,a);const p=_o.dot(ap),d=go.dot(ap);if(p<=0&&d<=0)return n.copy(a);rp.subVectors(t,s);const _=_o.dot(rp),g=go.dot(rp);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(_o,c);sp.subVectors(t,u);const S=_o.dot(sp),b=go.dot(sp);if(b>=0&&S<=b)return n.copy(u);const E=S*d-p*b;if(E<=0&&d>=0&&b<=0)return f=d/(d-b),n.copy(a).addScaledVector(go,f);const y=_*b-S*g;if(y<=0&&g-_>=0&&S-b>=0)return bx.subVectors(u,s),f=(g-_)/(g-_+(S-b)),n.copy(s).addScaledVector(bx,f);const x=1/(y+E+v);return c=E*x,f=v*x,n.copy(a).addScaledVector(_o,c).addScaledVector(go,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const My={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function cp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Ue{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=we.workingColorSpace){if(t=eb(t,1),n=Me(n,0,1),a=Me(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=cp(c,u,t+1/3),this.g=cp(c,u,t),this.b=cp(c,u,t-1/3)}return we.colorSpaceToWorking(this,s),this}setStyle(t,n=Bi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Bi){const a=My[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=wo(t.r),this.g=wo(t.g),this.b=wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bi){return we.workingToColorSpace(In.copy(this),t),Math.round(Me(In.r*255,0,255))*65536+Math.round(Me(In.g*255,0,255))*256+Math.round(Me(In.b*255,0,255))}getHexString(t=Bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(In.copy(this),n);const a=In.r,s=In.g,u=In.b,c=Math.max(a,s,u),f=Math.min(a,s,u);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-u)/g+(s<u?6:0);break;case s:p=(u-a)/g+2;break;case u:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(In.copy(this),n),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Bi){we.workingToColorSpace(In.copy(this),t);const n=In.r,a=In.g,s=In.b;return t!==Bi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+n,yr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(yr),t.getHSL(Nc);const a=qd(yr.h,Nc.h,n),s=qd(yr.s,Nc.s,n),u=qd(yr.l,Nc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Ue;Ue.NAMES=My;let gb=0;class hu extends Vo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=uu(),this.name="",this.type="Material",this.blending=Co,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fp,this.blendDst=Ip,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(a.blending=this.blending),this.side!==Nr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Fp&&(a.blendSrc=this.blendSrc),this.blendDst!==Ip&&(a.blendDst=this.blendDst),this.blendEquation!==hs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const c=[];for(const f in u){const p=u[f];delete p.metadata,c.push(p)}return c}if(n){const u=s(t.textures),c=s(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ey extends hu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xa,this.combine=oy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _n=new ot,Oc=new oe;let vb=0;class Ji{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=hx,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(t),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Bl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ti(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Bl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Bl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Bl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Bl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),s=ti(s,this.array),u=ti(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hx&&(t.usage=this.usage),t}}class Ty extends Ji{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class by extends Ji{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ha extends Ji{constructor(t,n,a){super(new Float32Array(t),n,a)}}let xb=0;const Pi=new xn,fp=new oi,vo=new ot,vi=new fu,Gl=new fu,An=new ot;class qa extends Vo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=uu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vy(t)?by:Ty)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new fe().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,a){return Pi.makeTranslation(t,n,a),this.applyMatrix4(Pi),this}scale(t,n,a){return Pi.makeScale(t,n,a),this.applyMatrix4(Pi),this}lookAt(t){return fp.lookAt(t),fp.updateMatrix(),this.applyMatrix4(fp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ha(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const u=t[s];n.setXYZ(s,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];vi.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const a=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];Gl.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(vi.min,Gl.min),vi.expandByPoint(An),An.addVectors(vi.max,Gl.max),vi.expandByPoint(An)):(vi.expandByPoint(Gl.min),vi.expandByPoint(Gl.max))}vi.getCenter(a);let s=0;for(let u=0,c=t.count;u<c;u++)An.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(An));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)An.fromBufferAttribute(f,d),p&&(vo.fromBufferAttribute(t,d),An.add(vo)),s=Math.max(s,a.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ji(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let I=0;I<a.count;I++)f[I]=new ot,p[I]=new ot;const d=new ot,_=new ot,g=new ot,v=new oe,S=new oe,b=new oe,E=new ot,y=new ot;function x(I,R,w){d.fromBufferAttribute(a,I),_.fromBufferAttribute(a,R),g.fromBufferAttribute(a,w),v.fromBufferAttribute(u,I),S.fromBufferAttribute(u,R),b.fromBufferAttribute(u,w),_.sub(d),g.sub(d),S.sub(v),b.sub(v);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(E.copy(_).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(H),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(H),f[I].add(E),f[R].add(E),f[w].add(E),p[I].add(y),p[R].add(y),p[w].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let I=0,R=N.length;I<R;++I){const w=N[I],H=w.start,Z=w.count;for(let et=H,lt=H+Z;et<lt;et+=3)x(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const U=new ot,A=new ot,L=new ot,O=new ot;function P(I){L.fromBufferAttribute(s,I),O.copy(L);const R=f[I];U.copy(R),U.sub(L.multiplyScalar(L.dot(R))).normalize(),A.crossVectors(O,R);const H=A.dot(p[I])<0?-1:1;c.setXYZW(I,U.x,U.y,U.z,H)}for(let I=0,R=N.length;I<R;++I){const w=N[I],H=w.start,Z=w.count;for(let et=H,lt=H+Z;et<lt;et+=3)P(t.getX(et+0)),P(t.getX(et+1)),P(t.getX(et+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ji(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const s=new ot,u=new ot,c=new ot,f=new ot,p=new ot,d=new ot,_=new ot,g=new ot;if(t)for(let v=0,S=t.count;v<S;v+=3){const b=t.getX(v+0),E=t.getX(v+1),y=t.getX(v+2);s.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,y),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),f.fromBufferAttribute(a,b),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)s.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let S=0,b=0;for(let E=0,y=p.length;E<y;E++){f.isInterleavedBufferAttribute?S=p[E]*f.data.stride+f.offset:S=p[E]*_;for(let x=0;x<_;x++)v[b++]=d[S++]}return new Ji(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qa,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const u=this.morphAttributes;for(const f in u){const p=[],d=u[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],S=t(v,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const S=d[g];_.push(S.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const u=t.morphAttributes;for(const d in u){const _=[],g=u[d];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ax=new xn,rs=new Sy,Pc=new Mf,Rx=new ot,zc=new ot,Bc=new ot,Fc=new ot,hp=new ot,Ic=new ot,Cx=new ot,Hc=new ot;class Vi extends oi{constructor(t=new qa,n=new Ey){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(u&&f){Ic.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const _=f[p],g=u[p];_!==0&&(hp.fromBufferAttribute(g,t),c?Ic.addScaledVector(hp,_):Ic.addScaledVector(hp.sub(n),_))}n.add(Ic)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(u),rs.copy(t.ray).recast(t.near),!(Pc.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Pc,Rx)===null||rs.origin.distanceToSquared(Rx)>(t.far-t.near)**2))&&(Ax.copy(u).invert(),rs.copy(t.ray).applyMatrix4(Ax),!(a.boundingBox!==null&&rs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,rs)))}_computeIntersections(t,n,a){let s;const u=this.geometry,c=this.material,f=u.index,p=u.attributes.position,d=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,E=v.length;b<E;b++){const y=v[b],x=c[y.materialIndex],N=Math.max(y.start,S.start),U=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let A=N,L=U;A<L;A+=3){const O=f.getX(A),P=f.getX(A+1),I=f.getX(A+2);s=Gc(this,x,t,a,d,_,g,O,P,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const b=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=b,x=E;y<x;y+=3){const N=f.getX(y),U=f.getX(y+1),A=f.getX(y+2);s=Gc(this,c,t,a,d,_,g,N,U,A),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,E=v.length;b<E;b++){const y=v[b],x=c[y.materialIndex],N=Math.max(y.start,S.start),U=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let A=N,L=U;A<L;A+=3){const O=A,P=A+1,I=A+2;s=Gc(this,x,t,a,d,_,g,O,P,I),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const b=Math.max(0,S.start),E=Math.min(p.count,S.start+S.count);for(let y=b,x=E;y<x;y+=3){const N=y,U=y+1,A=y+2;s=Gc(this,c,t,a,d,_,g,N,U,A),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function Sb(o,t,n,a,s,u,c,f){let p;if(t.side===si?p=a.intersectTriangle(c,u,s,!0,f):p=a.intersectTriangle(s,u,c,t.side===Nr,f),p===null)return null;Hc.copy(f),Hc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Hc);return d<n.near||d>n.far?null:{distance:d,point:Hc.clone(),object:o}}function Gc(o,t,n,a,s,u,c,f,p,d){o.getVertexPosition(f,zc),o.getVertexPosition(p,Bc),o.getVertexPosition(d,Fc);const _=Sb(o,t,n,a,zc,Bc,Fc,Cx);if(_){const g=new ot;Ki.getBarycoord(Cx,zc,Bc,Fc,g),s&&(_.uv=Ki.getInterpolatedAttribute(s,f,p,d,g,new oe)),u&&(_.uv1=Ki.getInterpolatedAttribute(u,f,p,d,g,new oe)),c&&(_.normal=Ki.getInterpolatedAttribute(c,f,p,d,g,new ot),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ot,materialIndex:0};Ki.getNormal(zc,Bc,Fc,v.normal),_.face=v,_.barycoord=g}return _}class du extends qa{constructor(t=1,n=1,a=1,s=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:c};const f=this;s=Math.floor(s),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,S=0;b("z","y","x",-1,-1,a,n,t,c,u,0),b("z","y","x",1,-1,a,n,-t,c,u,1),b("x","z","y",1,1,t,a,n,s,c,2),b("x","z","y",1,-1,t,a,-n,s,c,3),b("x","y","z",1,-1,t,n,a,s,u,4),b("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new Ha(d,3)),this.setAttribute("normal",new Ha(_,3)),this.setAttribute("uv",new Ha(g,2));function b(E,y,x,N,U,A,L,O,P,I,R){const w=A/P,H=L/I,Z=A/2,et=L/2,lt=O/2,ut=P+1,B=I+1;let q=0,W=0;const vt=new ot;for(let yt=0;yt<B;yt++){const F=yt*H-et;for(let $=0;$<ut;$++){const St=$*w-Z;vt[E]=St*N,vt[y]=F*U,vt[x]=lt,d.push(vt.x,vt.y,vt.z),vt[E]=0,vt[y]=0,vt[x]=O>0?1:-1,_.push(vt.x,vt.y,vt.z),g.push($/P),g.push(1-yt/I),q+=1}}for(let yt=0;yt<I;yt++)for(let F=0;F<P;F++){const $=v+F+ut*yt,St=v+F+ut*(yt+1),Mt=v+(F+1)+ut*(yt+1),Dt=v+(F+1)+ut*yt;p.push($,St,Dt),p.push(St,Mt,Dt),W+=6}f.addGroup(S,W,R),S+=W,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ho(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Wn(o){const t={};for(let n=0;n<o.length;n++){const a=Ho(o[n]);for(const s in a)t[s]=a[s]}return t}function yb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function Ay(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Mb={clone:Ho,merge:Wn};var Eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends hu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eb,this.fragmentShader=Tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ho(t.uniforms),this.uniformsGroups=yb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class mf extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new ot,wx=new oe,Dx=new oe;class ji extends mf{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=bm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bm*2*Math.atan(Math.tan(Wd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,n){return this.getViewBounds(t,wx,Dx),n.subVectors(Dx,wx)}setViewOffset(t,n,a,s,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Wd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const xo=-90,So=1;class bb extends oi{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ji(xo,So,t,n);s.layers=this.layers,this.add(s);const u=new ji(xo,So,t,n);u.layers=this.layers,this.add(u);const c=new ji(xo,So,t,n);c.layers=this.layers,this.add(c);const f=new ji(xo,So,t,n);f.layers=this.layers,this.add(f);const p=new ji(xo,So,t,n);p.layers=this.layers,this.add(p);const d=new ji(xo,So,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,c,f,p]=n;for(const d of n)this.remove(d);if(t===ca)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===df)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,u),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,S),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class Ry extends Yn{constructor(t=[],n=Bo,a,s,u,c,f,p,d,_){super(t,n,a,s,u,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ab extends Or{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new Ry(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new du(5,5,5),u=new Wa({name:"CubemapFromEquirect",uniforms:Ho(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:wr});u.uniforms.tEquirect.value=n;const c=new Vi(s,u),f=n.minFilter;return n.minFilter===ms&&(n.minFilter=ei),new bb(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(u)}}class Vc extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const y=n.getJointPose(E,a),x=this._getHandJoint(d,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,b=.005;d.inputState.pinching&&v>S+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=S-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Vc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Ux extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xa,this.environmentIntensity=1,this.environmentRotation=new Xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Cb extends Yn{constructor(t=null,n=1,a=1,s,u,c,f,p,d=Ei,_=Ei,g,v){super(null,c,f,p,d,_,s,u,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pp=new ot,wb=new ot,Db=new fe;class cs{constructor(t=new ot(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=pp.subVectors(a,n).cross(wb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(pp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||Db.getNormalMatrix(t),s=this.coplanarPoint(pp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Mf,Ub=new oe(.5,.5),kc=new ot;class Cy{constructor(t=new cs,n=new cs,a=new cs,s=new cs,u=new cs,c=new cs){this.planes=[t,n,a,s,u,c]}set(t,n,a,s,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(u),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ca,a=!1){const s=this.planes,u=t.elements,c=u[0],f=u[1],p=u[2],d=u[3],_=u[4],g=u[5],v=u[6],S=u[7],b=u[8],E=u[9],y=u[10],x=u[11],N=u[12],U=u[13],A=u[14],L=u[15];if(s[0].setComponents(d-c,S-_,x-b,L-N).normalize(),s[1].setComponents(d+c,S+_,x+b,L+N).normalize(),s[2].setComponents(d+f,S+g,x+E,L+U).normalize(),s[3].setComponents(d-f,S-g,x-E,L-U).normalize(),a)s[4].setComponents(p,v,y,A).normalize(),s[5].setComponents(d-p,S-v,x-y,L-A).normalize();else if(s[4].setComponents(d-p,S-v,x-y,L-A).normalize(),n===ca)s[5].setComponents(d+p,S+v,x+y,L+A).normalize();else if(n===df)s[5].setComponents(p,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){ss.center.set(0,0,0);const n=Ub.distanceTo(t.center);return ss.radius=.7071067811865476+n,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(kc.x=s.normal.x>0?t.max.x:t.min.x,kc.y=s.normal.y>0?t.max.y:t.min.y,kc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lb extends hu{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _f=new ot,gf=new ot,Lx=new xn,Vl=new Sy,Xc=new Mf,mp=new ot,Nx=new ot;class Nb extends oi{constructor(t=new qa,n=new Lb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let s=1,u=n.count;s<u;s++)_f.fromBufferAttribute(n,s-1),gf.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=_f.distanceTo(gf);t.setAttribute("lineDistance",new Ha(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,u=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Xc.copy(a.boundingSphere),Xc.applyMatrix4(s),Xc.radius+=u,t.ray.intersectsSphere(Xc)===!1)return;Lx.copy(s).invert(),Vl.copy(t.ray).applyMatrix4(Lx);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const S=Math.max(0,c.start),b=Math.min(_.count,c.start+c.count);for(let E=S,y=b-1;E<y;E+=d){const x=_.getX(E),N=_.getX(E+1),U=Wc(this,t,Vl,p,x,N,E);U&&n.push(U)}if(this.isLineLoop){const E=_.getX(b-1),y=_.getX(S),x=Wc(this,t,Vl,p,E,y,b-1);x&&n.push(x)}}else{const S=Math.max(0,c.start),b=Math.min(v.count,c.start+c.count);for(let E=S,y=b-1;E<y;E+=d){const x=Wc(this,t,Vl,p,E,E+1,E);x&&n.push(x)}if(this.isLineLoop){const E=Wc(this,t,Vl,p,b-1,S,b-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function Wc(o,t,n,a,s,u,c){const f=o.geometry.attributes.position;if(_f.fromBufferAttribute(f,s),gf.fromBufferAttribute(f,u),n.distanceSqToSegment(_f,gf,mp,Nx)>a)return;mp.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(mp);if(!(d<t.near||d>t.far))return{distance:d,point:Nx.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Ox=new ot,Px=new ot;class Ob extends Nb{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let s=0,u=n.count;s<u;s+=2)Ox.fromBufferAttribute(n,s),Px.fromBufferAttribute(n,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Ox.distanceTo(Px);t.setAttribute("lineDistance",new Ha(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wy extends Yn{constructor(t,n,a=Ms,s,u,c,f=Ei,p=Ei,d,_=ru,g=1){if(_!==ru&&_!==su)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,u,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $m(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Dy extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ss extends qa{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,S=[],b=[],E=[],y=[];for(let x=0;x<_;x++){const N=x*v-c;for(let U=0;U<d;U++){const A=U*g-u;b.push(A,-N,0),E.push(0,0,1),y.push(U/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let N=0;N<f;N++){const U=N+d*x,A=N+d*(x+1),L=N+1+d*(x+1),O=N+1+d*x;S.push(U,A,O),S.push(A,L,O)}this.setIndex(S),this.setAttribute("position",new Ha(b,3)),this.setAttribute("normal",new Ha(E,3)),this.setAttribute("uv",new Ha(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}class qc extends Wa{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pb extends hu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zb extends hu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bb extends mf{constructor(t=-1,n=1,a=1,s=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Fb extends ji{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ib{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function zx(o,t,n,a){const s=Hb(a);switch(n){case dy:return o*t;case my:return o*t/s.components*s.byteLength;case Km:return o*t/s.components*s.byteLength;case _y:return o*t*2/s.components*s.byteLength;case Qm:return o*t*2/s.components*s.byteLength;case py:return o*t*3/s.components*s.byteLength;case Gi:return o*t*4/s.components*s.byteLength;case Jm:return o*t*4/s.components*s.byteLength;case $c:case tf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ef:case nf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jp:case tm:return Math.max(o,16)*Math.max(t,8)/4;case Qp:case $p:return Math.max(o,8)*Math.max(t,8)/2;case em:case nm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case im:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case am:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case sm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case om:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case lm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case um:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case cm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case fm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case hm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case dm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case pm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case mm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case _m:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case gm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case vm:case xm:case Sm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ym:case Mm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Em:case Tm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hb(o){switch(o){case ka:case uy:return{byteLength:1,components:1};case iu:case cy:case Go:return{byteLength:2,components:1};case Zm:case jm:return{byteLength:2,components:4};case Ms:case Ym:case ua:return{byteLength:4,components:1};case fy:case hy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uy(){let o=null,t=!1,n=null,a=null;function s(u,c){n(u,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function Gb(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=o.SHORT;else if(d instanceof Uint32Array)S=o.UNSIGNED_INT;else if(d instanceof Int32Array)S=o.INT;else if(d instanceof Int8Array)S=o.BYTE;else if(d instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<g.length;S++){const b=g[v],E=g[S];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++v,g[v]=E)}g.length=v+1;for(let S=0,b=g.length;S<b;S++){const E=g[S];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:u,update:c}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vA="gl_FragColor = linearToOutputTexel( gl_FragColor );",xA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,EA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,PA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:Vb,alphahash_pars_fragment:kb,alphamap_fragment:Xb,alphamap_pars_fragment:Wb,alphatest_fragment:qb,alphatest_pars_fragment:Yb,aomap_fragment:Zb,aomap_pars_fragment:jb,batching_pars_vertex:Kb,batching_vertex:Qb,begin_vertex:Jb,beginnormal_vertex:$b,bsdfs:tA,iridescence_fragment:eA,bumpmap_pars_fragment:nA,clipping_planes_fragment:iA,clipping_planes_pars_fragment:aA,clipping_planes_pars_vertex:rA,clipping_planes_vertex:sA,color_fragment:oA,color_pars_fragment:lA,color_pars_vertex:uA,color_vertex:cA,common:fA,cube_uv_reflection_fragment:hA,defaultnormal_vertex:dA,displacementmap_pars_vertex:pA,displacementmap_vertex:mA,emissivemap_fragment:_A,emissivemap_pars_fragment:gA,colorspace_fragment:vA,colorspace_pars_fragment:xA,envmap_fragment:SA,envmap_common_pars_fragment:yA,envmap_pars_fragment:MA,envmap_pars_vertex:EA,envmap_physical_pars_fragment:OA,envmap_vertex:TA,fog_vertex:bA,fog_pars_vertex:AA,fog_fragment:RA,fog_pars_fragment:CA,gradientmap_pars_fragment:wA,lightmap_pars_fragment:DA,lights_lambert_fragment:UA,lights_lambert_pars_fragment:LA,lights_pars_begin:NA,lights_toon_fragment:PA,lights_toon_pars_fragment:zA,lights_phong_fragment:BA,lights_phong_pars_fragment:FA,lights_physical_fragment:IA,lights_physical_pars_fragment:HA,lights_fragment_begin:GA,lights_fragment_maps:VA,lights_fragment_end:kA,logdepthbuf_fragment:XA,logdepthbuf_pars_fragment:WA,logdepthbuf_pars_vertex:qA,logdepthbuf_vertex:YA,map_fragment:ZA,map_pars_fragment:jA,map_particle_fragment:KA,map_particle_pars_fragment:QA,metalnessmap_fragment:JA,metalnessmap_pars_fragment:$A,morphinstance_vertex:tR,morphcolor_vertex:eR,morphnormal_vertex:nR,morphtarget_pars_vertex:iR,morphtarget_vertex:aR,normal_fragment_begin:rR,normal_fragment_maps:sR,normal_pars_fragment:oR,normal_pars_vertex:lR,normal_vertex:uR,normalmap_pars_fragment:cR,clearcoat_normal_fragment_begin:fR,clearcoat_normal_fragment_maps:hR,clearcoat_pars_fragment:dR,iridescence_pars_fragment:pR,opaque_fragment:mR,packing:_R,premultiplied_alpha_fragment:gR,project_vertex:vR,dithering_fragment:xR,dithering_pars_fragment:SR,roughnessmap_fragment:yR,roughnessmap_pars_fragment:MR,shadowmap_pars_fragment:ER,shadowmap_pars_vertex:TR,shadowmap_vertex:bR,shadowmask_pars_fragment:AR,skinbase_vertex:RR,skinning_pars_vertex:CR,skinning_vertex:wR,skinnormal_vertex:DR,specularmap_fragment:UR,specularmap_pars_fragment:LR,tonemapping_fragment:NR,tonemapping_pars_fragment:OR,transmission_fragment:PR,transmission_pars_fragment:zR,uv_pars_fragment:BR,uv_pars_vertex:FR,uv_vertex:IR,worldpos_vertex:HR,background_vert:GR,background_frag:VR,backgroundCube_vert:kR,backgroundCube_frag:XR,cube_vert:WR,cube_frag:qR,depth_vert:YR,depth_frag:ZR,distanceRGBA_vert:jR,distanceRGBA_frag:KR,equirect_vert:QR,equirect_frag:JR,linedashed_vert:$R,linedashed_frag:t2,meshbasic_vert:e2,meshbasic_frag:n2,meshlambert_vert:i2,meshlambert_frag:a2,meshmatcap_vert:r2,meshmatcap_frag:s2,meshnormal_vert:o2,meshnormal_frag:l2,meshphong_vert:u2,meshphong_frag:c2,meshphysical_vert:f2,meshphysical_frag:h2,meshtoon_vert:d2,meshtoon_frag:p2,points_vert:m2,points_frag:_2,shadow_vert:g2,shadow_frag:v2,sprite_vert:x2,sprite_frag:S2},Nt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},sa={basic:{uniforms:Wn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Wn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Wn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Wn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Wn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Wn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Wn([Nt.points,Nt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Wn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Wn([Nt.common,Nt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Wn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Wn([Nt.sprite,Nt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Wn([Nt.common,Nt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Wn([Nt.lights,Nt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};sa.physical={uniforms:Wn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Yc={r:0,b:0,g:0},os=new Xa,y2=new xn;function M2(o,t,n,a,s,u,c){const f=new Ue(0);let p=u===!0?0:1,d,_,g=null,v=0,S=null;function b(U){let A=U.isScene===!0?U.background:null;return A&&A.isTexture&&(A=(U.backgroundBlurriness>0?n:t).get(A)),A}function E(U){let A=!1;const L=b(U);L===null?x(f,p):L&&L.isColor&&(x(L,1),A=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,A){const L=b(A);L&&(L.isCubeTexture||L.mapping===yf)?(_===void 0&&(_=new Vi(new du(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ho(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(O,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),os.copy(A.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler(os)),_.material.toneMapped=we.getTransfer(L.colorSpace)!==He,(g!==L||v!==L.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=L,v=L.version,S=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new Vi(new Ss(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ho(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=we.getTransfer(L.colorSpace)!==He,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||S!==o.toneMapping)&&(d.material.needsUpdate=!0,g=L,v=L.version,S=o.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function x(U,A){U.getRGB(Yc,Ay(o)),a.buffers.color.setClear(Yc.r,Yc.g,Yc.b,A,c)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,A=1){f.set(U),p=A,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:E,addToRenderList:y,dispose:N}}function E2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let u=s,c=!1;function f(w,H,Z,et,lt){let ut=!1;const B=g(et,Z,H);u!==B&&(u=B,d(u.object)),ut=S(w,et,Z,lt),ut&&b(w,et,Z,lt),lt!==null&&t.update(lt,o.ELEMENT_ARRAY_BUFFER),(ut||c)&&(c=!1,A(w,H,Z,et),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function p(){return o.createVertexArray()}function d(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,H,Z){const et=Z.wireframe===!0;let lt=a[w.id];lt===void 0&&(lt={},a[w.id]=lt);let ut=lt[H.id];ut===void 0&&(ut={},lt[H.id]=ut);let B=ut[et];return B===void 0&&(B=v(p()),ut[et]=B),B}function v(w){const H=[],Z=[],et=[];for(let lt=0;lt<n;lt++)H[lt]=0,Z[lt]=0,et[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:et,object:w,attributes:{},index:null}}function S(w,H,Z,et){const lt=u.attributes,ut=H.attributes;let B=0;const q=Z.getAttributes();for(const W in q)if(q[W].location>=0){const yt=lt[W];let F=ut[W];if(F===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(F=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(F=w.instanceColor)),yt===void 0||yt.attribute!==F||F&&yt.data!==F.data)return!0;B++}return u.attributesNum!==B||u.index!==et}function b(w,H,Z,et){const lt={},ut=H.attributes;let B=0;const q=Z.getAttributes();for(const W in q)if(q[W].location>=0){let yt=ut[W];yt===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor));const F={};F.attribute=yt,yt&&yt.data&&(F.data=yt.data),lt[W]=F,B++}u.attributes=lt,u.attributesNum=B,u.index=et}function E(){const w=u.newAttributes;for(let H=0,Z=w.length;H<Z;H++)w[H]=0}function y(w){x(w,0)}function x(w,H){const Z=u.newAttributes,et=u.enabledAttributes,lt=u.attributeDivisors;Z[w]=1,et[w]===0&&(o.enableVertexAttribArray(w),et[w]=1),lt[w]!==H&&(o.vertexAttribDivisor(w,H),lt[w]=H)}function N(){const w=u.newAttributes,H=u.enabledAttributes;for(let Z=0,et=H.length;Z<et;Z++)H[Z]!==w[Z]&&(o.disableVertexAttribArray(Z),H[Z]=0)}function U(w,H,Z,et,lt,ut,B){B===!0?o.vertexAttribIPointer(w,H,Z,lt,ut):o.vertexAttribPointer(w,H,Z,et,lt,ut)}function A(w,H,Z,et){E();const lt=et.attributes,ut=Z.getAttributes(),B=H.defaultAttributeValues;for(const q in ut){const W=ut[q];if(W.location>=0){let vt=lt[q];if(vt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const yt=vt.normalized,F=vt.itemSize,$=t.get(vt);if($===void 0)continue;const St=$.buffer,Mt=$.type,Dt=$.bytesPerElement,at=Mt===o.INT||Mt===o.UNSIGNED_INT||vt.gpuType===Ym;if(vt.isInterleavedBufferAttribute){const ht=vt.data,Ct=ht.stride,Bt=vt.offset;if(ht.isInstancedInterleavedBuffer){for(let Wt=0;Wt<W.locationSize;Wt++)x(W.location+Wt,ht.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Wt=0;Wt<W.locationSize;Wt++)y(W.location+Wt);o.bindBuffer(o.ARRAY_BUFFER,St);for(let Wt=0;Wt<W.locationSize;Wt++)U(W.location+Wt,F/W.locationSize,Mt,yt,Ct*Dt,(Bt+F/W.locationSize*Wt)*Dt,at)}else{if(vt.isInstancedBufferAttribute){for(let ht=0;ht<W.locationSize;ht++)x(W.location+ht,vt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ht=0;ht<W.locationSize;ht++)y(W.location+ht);o.bindBuffer(o.ARRAY_BUFFER,St);for(let ht=0;ht<W.locationSize;ht++)U(W.location+ht,F/W.locationSize,Mt,yt,F*Dt,F/W.locationSize*ht*Dt,at)}}else if(B!==void 0){const yt=B[q];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(W.location,yt);break;case 3:o.vertexAttrib3fv(W.location,yt);break;case 4:o.vertexAttrib4fv(W.location,yt);break;default:o.vertexAttrib1fv(W.location,yt)}}}}N()}function L(){I();for(const w in a){const H=a[w];for(const Z in H){const et=H[Z];for(const lt in et)_(et[lt].object),delete et[lt];delete H[Z]}delete a[w]}}function O(w){if(a[w.id]===void 0)return;const H=a[w.id];for(const Z in H){const et=H[Z];for(const lt in et)_(et[lt].object),delete et[lt];delete H[Z]}delete a[w.id]}function P(w){for(const H in a){const Z=a[H];if(Z[w.id]===void 0)continue;const et=Z[w.id];for(const lt in et)_(et[lt].object),delete et[lt];delete Z[w.id]}}function I(){R(),c=!0,u!==s&&(u=s,d(u.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:I,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:O,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:y,disableUnusedAttributes:N}}function T2(o,t,n){let a;function s(d){a=d}function u(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let S=0;for(let b=0;b<g;b++)S+=_[b];n.update(S,a,1)}function p(d,_,g,v){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<d.length;b++)c(d[b],_[b],v[b]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let b=0;for(let E=0;E<g;E++)b+=_[E]*v[E];n.update(b,a,1)}}this.setMode=s,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function b2(o,t,n,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){return!(P!==Gi&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const I=P===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ka&&a.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ua&&!I)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),A=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=b>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:A,vertexTextures:L,maxSamples:O}}function A2(o){const t=this;let n=null,a=0,s=!1,u=!1;const c=new cs,f=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||s;return s=v,a=g.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,S){const b=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,x=o.get(g);if(!s||b===null||b.length===0||u&&!y)u?_(null):d();else{const N=u?0:a,U=N*4;let A=x.clippingState||null;p.value=A,A=_(b,v,U,S);for(let L=0;L!==U;++L)A[L]=n[L];x.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,S,b){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=p.value,b!==!0||y===null){const x=S+E*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(y===null||y.length<x)&&(y=new Float32Array(x));for(let U=0,A=S;U!==E;++U,A+=4)c.copy(g[U]).applyMatrix4(N,f),c.normal.toArray(y,A),y[A+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}function R2(o){let t=new WeakMap;function n(c,f){return f===Yp?c.mapping=Bo:f===Zp&&(c.mapping=Fo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Yp||f===Zp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new Ab(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const To=4,Bx=[.125,.215,.35,.446,.526,.582],ds=20,_p=new Bb,Fx=new Ue;let gp=null,vp=0,xp=0,Sp=!1;const fs=(1+Math.sqrt(5))/2,yo=1/fs,Ix=[new ot(-fs,yo,0),new ot(fs,yo,0),new ot(-yo,0,fs),new ot(yo,0,fs),new ot(0,fs,-yo),new ot(0,fs,yo),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)],C2=new ot;class Hx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,u={}){const{size:c=256,position:f=C2}=u;gp=this._renderer.getRenderTarget(),vp=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),Sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gp,vp,xp),this._renderer.xr.enabled=Sp,t.scissorTest=!1,Zc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bo||t.mapping===Fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gp=this._renderer.getRenderTarget(),vp=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),Sp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Go,format:Gi,colorSpace:Io,depthBuffer:!1},s=Gx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gx(t,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w2(u)),this._blurMaterial=D2(u,t,n)}return s}_compileMaterial(t){const n=new Vi(this._lodPlanes[0],t);this._renderer.compile(n,_p)}_sceneToCubeUV(t,n,a,s,u){const p=new ji(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(Fx),g.toneMapping=Dr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const E=new Ey({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),y=new Vi(new du,E);let x=!1;const N=t.background;N?N.isColor&&(E.color.copy(N),t.background=null,x=!0):(E.color.copy(Fx),x=!0);for(let U=0;U<6;U++){const A=U%3;A===0?(p.up.set(0,d[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[U],u.y,u.z)):A===1?(p.up.set(0,0,d[U]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[U],u.z)):(p.up.set(0,d[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[U]));const L=this._cubeSize;Zc(s,A*L,U>2?L:0,L,L),g.setRenderTarget(s),x&&g.render(y,p),g.render(t,p)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=S,g.autoClear=v,t.background=N}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Bo||t.mapping===Fo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vx());const u=s?this._cubemapMaterial:this._equirectMaterial,c=new Vi(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=t;const p=this._cubeSize;Zc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,_p)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let u=1;u<s;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Ix[(s-u-1)%Ix.length];this._blur(t,u-1,u,c,f)}n.autoClear=a}_blur(t,n,a,s,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",u),this._halfBlur(c,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Vi(this._lodPlanes[s],d),v=d.uniforms,S=this._sizeLods[a]-1,b=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*ds-1),E=u/b,y=isFinite(u)?1+Math.floor(_*E):ds;y>ds&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const x=[];let N=0;for(let P=0;P<ds;++P){const I=P/E,R=Math.exp(-I*I/2);x.push(R),P===0?N+=R:P<y&&(N+=2*R)}for(let P=0;P<x.length;P++)x[P]=x[P]/N;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=b,v.mipInt.value=U-a;const A=this._sizeLods[s],L=3*A*(s>U-To?s-U+To:0),O=4*(this._cubeSize-A);Zc(n,L,O,3*A,2*A),p.setRenderTarget(n),p.render(g,_p)}}function w2(o){const t=[],n=[],a=[];let s=o;const u=o-To+1+Bx.length;for(let c=0;c<u;c++){const f=Math.pow(2,s);n.push(f);let p=1/f;c>o-To?p=Bx[c-o+To-1]:c===0&&(p=0),a.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,b=6,E=3,y=2,x=1,N=new Float32Array(E*b*S),U=new Float32Array(y*b*S),A=new Float32Array(x*b*S);for(let O=0;O<S;O++){const P=O%3*2/3-1,I=O>2?0:-1,R=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];N.set(R,E*b*O),U.set(v,y*b*O);const w=[O,O,O,O,O,O];A.set(w,x*b*O)}const L=new qa;L.setAttribute("position",new Ji(N,E)),L.setAttribute("uv",new Ji(U,y)),L.setAttribute("faceIndex",new Ji(A,x)),t.push(L),s>To&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Gx(o,t,n){const a=new Or(o,t,n);return a.texture.mapping=yf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Zc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function D2(o,t,n){const a=new Float32Array(ds),s=new ot(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:t_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Vx(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:t_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function kx(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:t_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function t_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U2(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Yp||p===Zp,_=p===Bo||p===Fo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new Hx(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return d&&S&&S.height>0||_&&S&&s(S)?(n===null&&(n=new Hx(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function u(f){const p=f.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function L2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&ou("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function N2(o,t,n,a){const s={},u=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",c),delete s[v.id];const S=u.get(v);S&&(t.remove(S),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)t.update(v[S],o.ARRAY_BUFFER)}function d(g){const v=[],S=g.index,b=g.attributes.position;let E=0;if(S!==null){const N=S.array;E=S.version;for(let U=0,A=N.length;U<A;U+=3){const L=N[U+0],O=N[U+1],P=N[U+2];v.push(L,O,O,P,P,L)}}else if(b!==void 0){const N=b.array;E=b.version;for(let U=0,A=N.length/3-1;U<A;U+=3){const L=U+0,O=U+1,P=U+2;v.push(L,O,O,P,P,L)}}else return;const y=new(vy(v)?by:Ty)(v,1);y.version=E;const x=u.get(g);x&&t.remove(x),u.set(g,y)}function _(g){const v=u.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&d(g)}else d(g);return u.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function O2(o,t,n){let a;function s(v){a=v}let u,c;function f(v){u=v.type,c=v.bytesPerElement}function p(v,S){o.drawElements(a,S,u,v*c),n.update(S,a,1)}function d(v,S,b){b!==0&&(o.drawElementsInstanced(a,S,u,v*c,b),n.update(S,a,b))}function _(v,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,u,v,0,b);let y=0;for(let x=0;x<b;x++)y+=S[x];n.update(y,a,1)}function g(v,S,b,E){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)d(v[x]/c,S[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,u,v,0,E,0,b);let x=0;for(let N=0;N<b;N++)x+=S[N]*E[N];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function P2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function z2(o,t,n){const a=new WeakMap,s=new rn;function u(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let w=function(){I.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const b=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let A=0;b===!0&&(A=1),E===!0&&(A=2),y===!0&&(A=3);let L=f.attributes.position.count*A,O=1;L>t.maxTextureSize&&(O=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*O*4*g),I=new xy(P,L,O,g);I.type=ua,I.needsUpdate=!0;const R=A*4;for(let H=0;H<g;H++){const Z=x[H],et=N[H],lt=U[H],ut=L*O*4*H;for(let B=0;B<Z.count;B++){const q=B*R;b===!0&&(s.fromBufferAttribute(Z,B),P[ut+q+0]=s.x,P[ut+q+1]=s.y,P[ut+q+2]=s.z,P[ut+q+3]=0),E===!0&&(s.fromBufferAttribute(et,B),P[ut+q+4]=s.x,P[ut+q+5]=s.y,P[ut+q+6]=s.z,P[ut+q+7]=0),y===!0&&(s.fromBufferAttribute(lt,B),P[ut+q+8]=s.x,P[ut+q+9]=s.y,P[ut+q+10]=s.z,P[ut+q+11]=lt.itemSize===4?s.w:1)}}v={count:g,texture:I,size:new oe(L,O)},a.set(f,v),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const E=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function B2(o,t,n,a){let s=new WeakMap;function u(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const Ly=new Yn,Xx=new wy(1,1),Ny=new xy,Oy=new ub,Py=new Ry,Wx=[],qx=[],Yx=new Float32Array(16),Zx=new Float32Array(9),jx=new Float32Array(4);function ko(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=Wx[s];if(u===void 0&&(u=new Float32Array(s),Wx[s]=u),t!==0){a.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(u,f)}return u}function Mn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function En(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Ef(o,t){let n=qx[t];n===void 0&&(n=new Int32Array(t),qx[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function F2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function I2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2fv(this.addr,t),En(n,t)}}function H2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;o.uniform3fv(this.addr,t),En(n,t)}}function G2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4fv(this.addr,t),En(n,t)}}function V2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;jx.set(a),o.uniformMatrix2fv(this.addr,!1,jx),En(n,a)}}function k2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Zx.set(a),o.uniformMatrix3fv(this.addr,!1,Zx),En(n,a)}}function X2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Yx.set(a),o.uniformMatrix4fv(this.addr,!1,Yx),En(n,a)}}function W2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function q2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2iv(this.addr,t),En(n,t)}}function Y2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;o.uniform3iv(this.addr,t),En(n,t)}}function Z2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4iv(this.addr,t),En(n,t)}}function j2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function K2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;o.uniform2uiv(this.addr,t),En(n,t)}}function Q2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;o.uniform3uiv(this.addr,t),En(n,t)}}function J2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;o.uniform4uiv(this.addr,t),En(n,t)}}function $2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let u;this.type===o.SAMPLER_2D_SHADOW?(Xx.compareFunction=gy,u=Xx):u=Ly,n.setTexture2D(t||u,s)}function tC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||Oy,s)}function eC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||Py,s)}function nC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||Ny,s)}function iC(o){switch(o){case 5126:return F2;case 35664:return I2;case 35665:return H2;case 35666:return G2;case 35674:return V2;case 35675:return k2;case 35676:return X2;case 5124:case 35670:return W2;case 35667:case 35671:return q2;case 35668:case 35672:return Y2;case 35669:case 35673:return Z2;case 5125:return j2;case 36294:return K2;case 36295:return Q2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return $2;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return eC;case 36289:case 36303:case 36311:case 36292:return nC}}function aC(o,t){o.uniform1fv(this.addr,t)}function rC(o,t){const n=ko(t,this.size,2);o.uniform2fv(this.addr,n)}function sC(o,t){const n=ko(t,this.size,3);o.uniform3fv(this.addr,n)}function oC(o,t){const n=ko(t,this.size,4);o.uniform4fv(this.addr,n)}function lC(o,t){const n=ko(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function uC(o,t){const n=ko(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function cC(o,t){const n=ko(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function fC(o,t){o.uniform1iv(this.addr,t)}function hC(o,t){o.uniform2iv(this.addr,t)}function dC(o,t){o.uniform3iv(this.addr,t)}function pC(o,t){o.uniform4iv(this.addr,t)}function mC(o,t){o.uniform1uiv(this.addr,t)}function _C(o,t){o.uniform2uiv(this.addr,t)}function gC(o,t){o.uniform3uiv(this.addr,t)}function vC(o,t){o.uniform4uiv(this.addr,t)}function xC(o,t,n){const a=this.cache,s=t.length,u=Ef(n,s);Mn(a,u)||(o.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||Ly,u[c])}function SC(o,t,n){const a=this.cache,s=t.length,u=Ef(n,s);Mn(a,u)||(o.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||Oy,u[c])}function yC(o,t,n){const a=this.cache,s=t.length,u=Ef(n,s);Mn(a,u)||(o.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||Py,u[c])}function MC(o,t,n){const a=this.cache,s=t.length,u=Ef(n,s);Mn(a,u)||(o.uniform1iv(this.addr,u),En(a,u));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||Ny,u[c])}function EC(o){switch(o){case 5126:return aC;case 35664:return rC;case 35665:return sC;case 35666:return oC;case 35674:return lC;case 35675:return uC;case 35676:return cC;case 5124:case 35670:return fC;case 35667:case 35671:return hC;case 35668:case 35672:return dC;case 35669:case 35673:return pC;case 5125:return mC;case 36294:return _C;case 36295:return gC;case 36296:return vC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return MC}}class TC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=iC(n.type)}}class bC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EC(n.type)}}class AC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,c=s.length;u!==c;++u){const f=s[u];f.setValue(t,n[f.id],a)}}}const yp=/(\w+)(\])?(\[|\.)?/g;function Kx(o,t){o.seq.push(t),o.map[t.id]=t}function RC(o,t,n){const a=o.name,s=a.length;for(yp.lastIndex=0;;){const u=yp.exec(a),c=yp.lastIndex;let f=u[1];const p=u[2]==="]",d=u[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){Kx(n,d===void 0?new TC(f,o,t):new bC(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new AC(f),Kx(n,g)),n=g}}}class af{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(n,s),c=t.getUniformLocation(n,u.name);RC(u,c,this)}}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,c=n.length;u!==c;++u){const f=n[u],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function Qx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const CC=37297;let wC=0;function DC(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=s;c<u;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const Jx=new fe;function UC(o){we._getMatrix(Jx,we.workingColorSpace,o);const t=`mat3( ${Jx.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(o)){case hf:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function $x(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+DC(o.getShaderSource(t),f)}else return u}function LC(o,t){const n=UC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NC(o,t){let n;switch(t){case z1:n="Linear";break;case B1:n="Reinhard";break;case F1:n="Cineon";break;case I1:n="ACESFilmic";break;case G1:n="AgX";break;case V1:n="Neutral";break;case H1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jc=new ot;function OC(){we.getLuminanceCoefficients(jc);const o=jc.x.toFixed(4),t=jc.y.toFixed(4),n=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ql).join(`
`)}function zC(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function BC(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),c=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function ql(o){return o!==""}function tS(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Am(o){return o.replace(FC,HC)}const IC=new Map;function HC(o,t){let n=he[t];if(n===void 0){const a=IC.get(t);if(a!==void 0)n=he[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Am(n)}const GC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nS(o){return o.replace(GC,VC)}function VC(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function iS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===sy?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===m1?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Pa&&(t="SHADOWMAP_TYPE_VSM"),t}function XC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bo:case Fo:t="ENVMAP_TYPE_CUBE";break;case yf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Fo:t="ENVMAP_MODE_REFRACTION";break}return t}function qC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case oy:t="ENVMAP_BLENDING_MULTIPLY";break;case O1:t="ENVMAP_BLENDING_MIX";break;case P1:t="ENVMAP_BLENDING_ADD";break}return t}function YC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function ZC(o,t,n,a){const s=o.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=kC(n),d=XC(n),_=WC(n),g=qC(n),v=YC(n),S=PC(n),b=zC(u),E=s.createProgram();let y,x,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ql).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ql).join(`
`),x.length>0&&(x+=`
`)):(y=[iS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ql).join(`
`),x=[iS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?he.tonemapping_pars_fragment:"",n.toneMapping!==Dr?NC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,LC("linearToOutputTexel",n.outputColorSpace),OC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ql).join(`
`)),c=Am(c),c=tS(c,n),c=eS(c,n),f=Am(f),f=tS(f,n),f=eS(f,n),c=nS(c),f=nS(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=N+y+c,A=N+x+f,L=Qx(s,s.VERTEX_SHADER,U),O=Qx(s,s.FRAGMENT_SHADER,A);s.attachShader(E,L),s.attachShader(E,O),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(H){if(o.debug.checkShaderErrors){const Z=s.getProgramInfoLog(E)||"",et=s.getShaderInfoLog(L)||"",lt=s.getShaderInfoLog(O)||"",ut=Z.trim(),B=et.trim(),q=lt.trim();let W=!0,vt=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,L,O);else{const yt=$x(s,L,"vertex"),F=$x(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+yt+`
`+F)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(B===""||q==="")&&(vt=!1);vt&&(H.diagnostics={runnable:W,programLog:ut,vertexShader:{log:B,prefix:y},fragmentShader:{log:q,prefix:x}})}s.deleteShader(L),s.deleteShader(O),I=new af(s,E),R=BC(s,E)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(E,CC)),w},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wC++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=O,this}let jC=0;class KC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new QC(t),n.set(t,a)),a}}class QC{constructor(t){this.id=jC++,this.code=t,this.usedTimes=0}}function JC(o,t,n,a,s,u,c){const f=new yy,p=new KC,d=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let S=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return d.add(R),R===0?"uv":`uv${R}`}function y(R,w,H,Z,et){const lt=Z.fog,ut=et.geometry,B=R.isMeshStandardMaterial?Z.environment:null,q=(R.isMeshStandardMaterial?n:t).get(R.envMap||B),W=q&&q.mapping===yf?q.image.height:null,vt=b[R.type];R.precision!==null&&(S=s.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const yt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,F=yt!==void 0?yt.length:0;let $=0;ut.morphAttributes.position!==void 0&&($=1),ut.morphAttributes.normal!==void 0&&($=2),ut.morphAttributes.color!==void 0&&($=3);let St,Mt,Dt,at;if(vt){const be=sa[vt];St=be.vertexShader,Mt=be.fragmentShader}else St=R.vertexShader,Mt=R.fragmentShader,p.update(R),Dt=p.getVertexShaderID(R),at=p.getFragmentShaderID(R);const ht=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),Bt=et.isInstancedMesh===!0,Wt=et.isBatchedMesh===!0,ue=!!R.map,en=!!R.matcap,V=!!q,Te=!!R.aoMap,ne=!!R.lightMap,$t=!!R.bumpMap,qt=!!R.normalMap,Se=!!R.displacementMap,It=!!R.emissiveMap,ie=!!R.metalnessMap,Ye=!!R.roughnessMap,We=R.anisotropy>0,z=R.clearcoat>0,M=R.dispersion>0,k=R.iridescence>0,J=R.sheen>0,dt=R.transmission>0,rt=We&&!!R.anisotropyMap,Pt=z&&!!R.clearcoatMap,At=z&&!!R.clearcoatNormalMap,Ht=z&&!!R.clearcoatRoughnessMap,Yt=k&&!!R.iridescenceMap,Tt=k&&!!R.iridescenceThicknessMap,Rt=J&&!!R.sheenColorMap,jt=J&&!!R.sheenRoughnessMap,zt=!!R.specularMap,Ut=!!R.specularColorMap,se=!!R.specularIntensityMap,Y=dt&&!!R.transmissionMap,bt=dt&&!!R.thicknessMap,wt=!!R.gradientMap,Ft=!!R.alphaMap,Et=R.alphaTest>0,gt=!!R.alphaHash,Gt=!!R.extensions;let ae=Dr;R.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ae=o.toneMapping);const Oe={shaderID:vt,shaderType:R.type,shaderName:R.name,vertexShader:St,fragmentShader:Mt,defines:R.defines,customVertexShaderID:Dt,customFragmentShaderID:at,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Wt,batchingColor:Wt&&et._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&et.instanceColor!==null,instancingMorph:Bt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Io,alphaToCoverage:!!R.alphaToCoverage,map:ue,matcap:en,envMap:V,envMapMode:V&&q.mapping,envMapCubeUVHeight:W,aoMap:Te,lightMap:ne,bumpMap:$t,normalMap:qt,displacementMap:v&&Se,emissiveMap:It,normalMapObjectSpace:qt&&R.normalMapType===Y1,normalMapTangentSpace:qt&&R.normalMapType===q1,metalnessMap:ie,roughnessMap:Ye,anisotropy:We,anisotropyMap:rt,clearcoat:z,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ht,dispersion:M,iridescence:k,iridescenceMap:Yt,iridescenceThicknessMap:Tt,sheen:J,sheenColorMap:Rt,sheenRoughnessMap:jt,specularMap:zt,specularColorMap:Ut,specularIntensityMap:se,transmission:dt,transmissionMap:Y,thicknessMap:bt,gradientMap:wt,opaque:R.transparent===!1&&R.blending===Co&&R.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Et,alphaHash:gt,combine:R.combine,mapUv:ue&&E(R.map.channel),aoMapUv:Te&&E(R.aoMap.channel),lightMapUv:ne&&E(R.lightMap.channel),bumpMapUv:$t&&E(R.bumpMap.channel),normalMapUv:qt&&E(R.normalMap.channel),displacementMapUv:Se&&E(R.displacementMap.channel),emissiveMapUv:It&&E(R.emissiveMap.channel),metalnessMapUv:ie&&E(R.metalnessMap.channel),roughnessMapUv:Ye&&E(R.roughnessMap.channel),anisotropyMapUv:rt&&E(R.anisotropyMap.channel),clearcoatMapUv:Pt&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:At&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:jt&&E(R.sheenRoughnessMap.channel),specularMapUv:zt&&E(R.specularMap.channel),specularColorMapUv:Ut&&E(R.specularColorMap.channel),specularIntensityMapUv:se&&E(R.specularIntensityMap.channel),transmissionMapUv:Y&&E(R.transmissionMap.channel),thicknessMapUv:bt&&E(R.thicknessMap.channel),alphaMapUv:Ft&&E(R.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(qt||We),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ut.attributes.uv&&(ue||Ft),fog:!!lt,useFog:R.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ct,skinning:et.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ae,decodeVideoTexture:ue&&R.map.isVideoTexture===!0&&we.getTransfer(R.map.colorSpace)===He,decodeVideoTextureEmissive:It&&R.emissiveMap.isVideoTexture===!0&&we.getTransfer(R.emissiveMap.colorSpace)===He,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Fa,flipSided:R.side===si,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Gt&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&R.extensions.multiDraw===!0||Wt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Oe.vertexUv1s=d.has(1),Oe.vertexUv2s=d.has(2),Oe.vertexUv3s=d.has(3),d.clear(),Oe}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const H in R.defines)w.push(H),w.push(R.defines[H]);return R.isRawShaderMaterial===!1&&(N(w,R),U(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function N(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function U(R,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),w.gradientMap&&f.enable(22),R.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),R.push(f.mask)}function A(R){const w=b[R.type];let H;if(w){const Z=sa[w];H=Mb.clone(Z.uniforms)}else H=R.uniforms;return H}function L(R,w){let H;for(let Z=0,et=_.length;Z<et;Z++){const lt=_[Z];if(lt.cacheKey===w){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new ZC(o,w,R,u),_.push(H)),H}function O(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),R.destroy()}}function P(R){p.remove(R)}function I(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:A,acquireProgram:L,releaseProgram:O,releaseShaderCache:P,programs:_,dispose:I}}function $C(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function u(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:u}}function tw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function aS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function rS(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,S,b,E,y){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:b,renderOrder:g.renderOrder,z:E,group:y},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=b,x.renderOrder=g.renderOrder,x.z=E,x.group=y),t++,x}function f(g,v,S,b,E,y){const x=c(g,v,S,b,E,y);S.transmission>0?a.push(x):S.transparent===!0?s.push(x):n.push(x)}function p(g,v,S,b,E,y){const x=c(g,v,S,b,E,y);S.transmission>0?a.unshift(x):S.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||tw),a.length>1&&a.sort(v||aS),s.length>1&&s.sort(v||aS)}function _(){for(let g=t,v=o.length;g<v;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:f,unshift:p,finish:_,sort:d}}function ew(){let o=new WeakMap;function t(a,s){const u=o.get(a);let c;return u===void 0?(c=new rS,o.set(a,[c])):s>=u.length?(c=new rS,u.push(c)):c=u[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function nw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ot,color:new Ue};break;case"SpotLight":n={position:new ot,direction:new ot,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ot,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ot,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":n={color:new Ue,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[t.id]=n,n}}}function iw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let aw=0;function rw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function sw(o){const t=new nw,n=iw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ot);const s=new ot,u=new xn,c=new xn;function f(d){let _=0,g=0,v=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let S=0,b=0,E=0,y=0,x=0,N=0,U=0,A=0,L=0,O=0,P=0;d.sort(rw);for(let R=0,w=d.length;R<w;R++){const H=d[R],Z=H.color,et=H.intensity,lt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Z.r*et,g+=Z.g*et,v+=Z.b*et;else if(H.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(H.sh.coefficients[B],et);P++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,W=n.get(H);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,a.directionalShadow[S]=W,a.directionalShadowMap[S]=ut,a.directionalShadowMatrix[S]=H.shadow.matrix,N++}a.directional[S]=B,S++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(Z).multiplyScalar(et),B.distance=lt,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,a.spot[E]=B;const q=H.shadow;if(H.map&&(a.spotLightMap[L]=H.map,L++,q.updateMatrices(H),H.castShadow&&O++),a.spotLightMatrix[E]=q.matrix,H.castShadow){const W=n.get(H);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,a.spotShadow[E]=W,a.spotShadowMap[E]=ut,A++}E++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(Z).multiplyScalar(et),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=B,y++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const q=H.shadow,W=n.get(H);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,a.pointShadow[b]=W,a.pointShadowMap[b]=ut,a.pointShadowMatrix[b]=H.shadow.matrix,U++}a.point[b]=B,b++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(et),B.groundColor.copy(H.groundColor).multiplyScalar(et),a.hemi[x]=B,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const I=a.hash;(I.directionalLength!==S||I.pointLength!==b||I.spotLength!==E||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==N||I.numPointShadows!==U||I.numSpotShadows!==A||I.numSpotMaps!==L||I.numLightProbes!==P)&&(a.directional.length=S,a.spot.length=E,a.rectArea.length=y,a.point.length=b,a.hemi.length=x,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=A+L-O,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=P,I.directionalLength=S,I.pointLength=b,I.spotLength=E,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=N,I.numPointShadows=U,I.numSpotShadows=A,I.numSpotMaps=L,I.numLightProbes=P,a.version=aw++)}function p(d,_){let g=0,v=0,S=0,b=0,E=0;const y=_.matrixWorldInverse;for(let x=0,N=d.length;x<N;x++){const U=d[x];if(U.isDirectionalLight){const A=a.directional[g];A.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(y),g++}else if(U.isSpotLight){const A=a.spot[S];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(y),S++}else if(U.isRectAreaLight){const A=a.rectArea[b];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(y),c.identity(),u.copy(U.matrixWorld),u.premultiply(y),c.extractRotation(u),A.halfWidth.set(U.width*.5,0,0),A.halfHeight.set(0,U.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),b++}else if(U.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(U.matrixWorld),A.position.applyMatrix4(y),v++}else if(U.isHemisphereLight){const A=a.hemi[E];A.direction.setFromMatrixPosition(U.matrixWorld),A.direction.transformDirection(y),E++}}}return{setup:f,setupView:p,state:a}}function sS(o){const t=new sw(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function u(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function ow(o){let t=new WeakMap;function n(s,u=0){const c=t.get(s);let f;return c===void 0?(f=new sS(o),t.set(s,[f])):u>=c.length?(f=new sS(o),c.push(f)):f=c[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cw(o,t,n){let a=new Cy;const s=new oe,u=new oe,c=new rn,f=new Pb({depthPacking:W1}),p=new zb,d={},_=n.maxTextureSize,g={[Nr]:si,[si]:Nr,[Fa]:Fa},v=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:lw,fragmentShader:uw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new qa;b.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Vi(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sy;let x=this.type;this.render=function(O,P,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const R=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(wr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const et=x!==Pa&&this.type===Pa,lt=x===Pa&&this.type!==Pa;for(let ut=0,B=O.length;ut<B;ut++){const q=O[ut],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const vt=W.getFrameExtents();if(s.multiply(vt),u.copy(W.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/vt.x),s.x=u.x*vt.x,W.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/vt.y),s.y=u.y*vt.y,W.mapSize.y=u.y)),W.map===null||et===!0||lt===!0){const F=this.type!==Pa?{minFilter:Ei,magFilter:Ei}:{};W.map!==null&&W.map.dispose(),W.map=new Or(s.x,s.y,F),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const yt=W.getViewportCount();for(let F=0;F<yt;F++){const $=W.getViewport(F);c.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),Z.viewport(c),W.updateMatrices(q,F),a=W.getFrustum(),A(P,I,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Pa&&N(W,I),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(R,w,H)};function N(O,P){const I=t.update(E);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Or(s.x,s.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(P,null,I,v,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(P,null,I,S,E,null)}function U(O,P,I,R){let w=null;const H=I.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)w=H;else if(w=I.isPointLight===!0?p:f,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Z=w.uuid,et=P.uuid;let lt=d[Z];lt===void 0&&(lt={},d[Z]=lt);let ut=lt[et];ut===void 0&&(ut=w.clone(),lt[et]=ut,P.addEventListener("dispose",L)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,R===Pa?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:g[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=o.properties.get(w);Z.light=I}return w}function A(O,P,I,R,w){if(O.visible===!1)return;if(O.layers.test(P.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&w===Pa)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,O.matrixWorld);const et=t.update(O),lt=O.material;if(Array.isArray(lt)){const ut=et.groups;for(let B=0,q=ut.length;B<q;B++){const W=ut[B],vt=lt[W.materialIndex];if(vt&&vt.visible){const yt=U(O,vt,R,w);O.onBeforeShadow(o,O,P,I,et,yt,W),o.renderBufferDirect(I,null,et,yt,O,W),O.onAfterShadow(o,O,P,I,et,yt,W)}}}else if(lt.visible){const ut=U(O,lt,R,w);O.onBeforeShadow(o,O,P,I,et,ut,null),o.renderBufferDirect(I,null,et,ut,O,null),O.onAfterShadow(o,O,P,I,et,ut,null)}}const Z=O.children;for(let et=0,lt=Z.length;et<lt;et++)A(Z[et],P,I,R,w)}function L(O){O.target.removeEventListener("dispose",L);for(const I in d){const R=d[I],w=O.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const fw={[Hp]:Gp,[Vp]:Wp,[kp]:qp,[zo]:Xp,[Gp]:Hp,[Wp]:Vp,[qp]:kp,[Xp]:zo};function hw(o,t){function n(){let Y=!1;const bt=new rn;let wt=null;const Ft=new rn(0,0,0,0);return{setMask:function(Et){wt!==Et&&!Y&&(o.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){Y=Et},setClear:function(Et,gt,Gt,ae,Oe){Oe===!0&&(Et*=ae,gt*=ae,Gt*=ae),bt.set(Et,gt,Gt,ae),Ft.equals(bt)===!1&&(o.clearColor(Et,gt,Gt,ae),Ft.copy(bt))},reset:function(){Y=!1,wt=null,Ft.set(-1,0,0,0)}}}function a(){let Y=!1,bt=!1,wt=null,Ft=null,Et=null;return{setReversed:function(gt){if(bt!==gt){const Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=gt;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return bt},setTest:function(gt){gt?ht(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!Y&&(o.depthMask(gt),wt=gt)},setFunc:function(gt){if(bt&&(gt=fw[gt]),Ft!==gt){switch(gt){case Hp:o.depthFunc(o.NEVER);break;case Gp:o.depthFunc(o.ALWAYS);break;case Vp:o.depthFunc(o.LESS);break;case zo:o.depthFunc(o.LEQUAL);break;case kp:o.depthFunc(o.EQUAL);break;case Xp:o.depthFunc(o.GEQUAL);break;case Wp:o.depthFunc(o.GREATER);break;case qp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=gt}},setLocked:function(gt){Y=gt},setClear:function(gt){Et!==gt&&(bt&&(gt=1-gt),o.clearDepth(gt),Et=gt)},reset:function(){Y=!1,wt=null,Ft=null,Et=null,bt=!1}}}function s(){let Y=!1,bt=null,wt=null,Ft=null,Et=null,gt=null,Gt=null,ae=null,Oe=null;return{setTest:function(be){Y||(be?ht(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(be){bt!==be&&!Y&&(o.stencilMask(be),bt=be)},setFunc:function(be,Vn,Ai){(wt!==be||Ft!==Vn||Et!==Ai)&&(o.stencilFunc(be,Vn,Ai),wt=be,Ft=Vn,Et=Ai)},setOp:function(be,Vn,Ai){(gt!==be||Gt!==Vn||ae!==Ai)&&(o.stencilOp(be,Vn,Ai),gt=be,Gt=Vn,ae=Ai)},setLocked:function(be){Y=be},setClear:function(be){Oe!==be&&(o.clearStencil(be),Oe=be)},reset:function(){Y=!1,bt=null,wt=null,Ft=null,Et=null,gt=null,Gt=null,ae=null,Oe=null}}}const u=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,S=[],b=null,E=!1,y=null,x=null,N=null,U=null,A=null,L=null,O=null,P=new Ue(0,0,0),I=0,R=!1,w=null,H=null,Z=null,et=null,lt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=q>=2);let vt=null,yt={};const F=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),St=new rn().fromArray(F),Mt=new rn().fromArray($);function Dt(Y,bt,wt,Ft){const Et=new Uint8Array(4),gt=o.createTexture();o.bindTexture(Y,gt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<wt;Gt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return gt}const at={};at[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ht(o.DEPTH_TEST),c.setFunc(zo),$t(!1),qt(lx),ht(o.CULL_FACE),Te(wr);function ht(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function Ct(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function Bt(Y,bt){return g[Y]!==bt?(o.bindFramebuffer(Y,bt),g[Y]=bt,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Wt(Y,bt){let wt=S,Ft=!1;if(Y){wt=v.get(bt),wt===void 0&&(wt=[],v.set(bt,wt));const Et=Y.textures;if(wt.length!==Et.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Gt=Et.length;gt<Gt;gt++)wt[gt]=o.COLOR_ATTACHMENT0+gt;wt.length=Et.length,Ft=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(wt)}function ue(Y){return b!==Y?(o.useProgram(Y),b=Y,!0):!1}const en={[hs]:o.FUNC_ADD,[g1]:o.FUNC_SUBTRACT,[v1]:o.FUNC_REVERSE_SUBTRACT};en[x1]=o.MIN,en[S1]=o.MAX;const V={[y1]:o.ZERO,[M1]:o.ONE,[E1]:o.SRC_COLOR,[Fp]:o.SRC_ALPHA,[w1]:o.SRC_ALPHA_SATURATE,[R1]:o.DST_COLOR,[b1]:o.DST_ALPHA,[T1]:o.ONE_MINUS_SRC_COLOR,[Ip]:o.ONE_MINUS_SRC_ALPHA,[C1]:o.ONE_MINUS_DST_COLOR,[A1]:o.ONE_MINUS_DST_ALPHA,[D1]:o.CONSTANT_COLOR,[U1]:o.ONE_MINUS_CONSTANT_COLOR,[L1]:o.CONSTANT_ALPHA,[N1]:o.ONE_MINUS_CONSTANT_ALPHA};function Te(Y,bt,wt,Ft,Et,gt,Gt,ae,Oe,be){if(Y===wr){E===!0&&(Ct(o.BLEND),E=!1);return}if(E===!1&&(ht(o.BLEND),E=!0),Y!==_1){if(Y!==y||be!==R){if((x!==hs||A!==hs)&&(o.blendEquation(o.FUNC_ADD),x=hs,A=hs),be)switch(Y){case Co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bp:o.blendFunc(o.ONE,o.ONE);break;case ux:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case cx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ux:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cx:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}N=null,U=null,L=null,O=null,P.set(0,0,0),I=0,y=Y,R=be}return}Et=Et||bt,gt=gt||wt,Gt=Gt||Ft,(bt!==x||Et!==A)&&(o.blendEquationSeparate(en[bt],en[Et]),x=bt,A=Et),(wt!==N||Ft!==U||gt!==L||Gt!==O)&&(o.blendFuncSeparate(V[wt],V[Ft],V[gt],V[Gt]),N=wt,U=Ft,L=gt,O=Gt),(ae.equals(P)===!1||Oe!==I)&&(o.blendColor(ae.r,ae.g,ae.b,Oe),P.copy(ae),I=Oe),y=Y,R=!1}function ne(Y,bt){Y.side===Fa?Ct(o.CULL_FACE):ht(o.CULL_FACE);let wt=Y.side===si;bt&&(wt=!wt),$t(wt),Y.blending===Co&&Y.transparent===!1?Te(wr):Te(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Ft=Y.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),It(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(Y){w!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),w=Y)}function qt(Y){Y!==d1?(ht(o.CULL_FACE),Y!==H&&(Y===lx?o.cullFace(o.BACK):Y===p1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),H=Y}function Se(Y){Y!==Z&&(B&&o.lineWidth(Y),Z=Y)}function It(Y,bt,wt){Y?(ht(o.POLYGON_OFFSET_FILL),(et!==bt||lt!==wt)&&(o.polygonOffset(bt,wt),et=bt,lt=wt)):Ct(o.POLYGON_OFFSET_FILL)}function ie(Y){Y?ht(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function Ye(Y){Y===void 0&&(Y=o.TEXTURE0+ut-1),vt!==Y&&(o.activeTexture(Y),vt=Y)}function We(Y,bt,wt){wt===void 0&&(vt===null?wt=o.TEXTURE0+ut-1:wt=vt);let Ft=yt[wt];Ft===void 0&&(Ft={type:void 0,texture:void 0},yt[wt]=Ft),(Ft.type!==Y||Ft.texture!==bt)&&(vt!==wt&&(o.activeTexture(wt),vt=wt),o.bindTexture(Y,bt||at[Y]),Ft.type=Y,Ft.texture=bt)}function z(){const Y=yt[vt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function k(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function J(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function dt(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(Y){St.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),St.copy(Y))}function jt(Y){Mt.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Mt.copy(Y))}function zt(Y,bt){let wt=d.get(bt);wt===void 0&&(wt=new WeakMap,d.set(bt,wt));let Ft=wt.get(Y);Ft===void 0&&(Ft=o.getUniformBlockIndex(bt,Y.name),wt.set(Y,Ft))}function Ut(Y,bt){const Ft=d.get(bt).get(Y);p.get(bt)!==Ft&&(o.uniformBlockBinding(bt,Ft,Y.__bindingPointIndex),p.set(bt,Ft))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},vt=null,yt={},g={},v=new WeakMap,S=[],b=null,E=!1,y=null,x=null,N=null,U=null,A=null,L=null,O=null,P=new Ue(0,0,0),I=0,R=!1,w=null,H=null,Z=null,et=null,lt=null,St.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:ht,disable:Ct,bindFramebuffer:Bt,drawBuffers:Wt,useProgram:ue,setBlending:Te,setMaterial:ne,setFlipSided:$t,setCullFace:qt,setLineWidth:Se,setPolygonOffset:It,setScissorTest:ie,activeTexture:Ye,bindTexture:We,unbindTexture:z,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:Yt,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:At,texStorage3D:Ht,texSubImage2D:J,texSubImage3D:dt,compressedTexSubImage2D:rt,compressedTexSubImage3D:Pt,scissor:Rt,viewport:jt,reset:se}}function dw(o,t,n,a,s,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new oe,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,M){return S?new OffscreenCanvas(z,M):pf("canvas")}function E(z,M,k){let J=1;const dt=We(z);if((dt.width>k||dt.height>k)&&(J=k/Math.max(dt.width,dt.height)),J<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const rt=Math.floor(J*dt.width),Pt=Math.floor(J*dt.height);g===void 0&&(g=b(rt,Pt));const At=M?b(rt,Pt):g;return At.width=rt,At.height=Pt,At.getContext("2d").drawImage(z,0,0,rt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+rt+"x"+Pt+")."),At}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),z;return z}function y(z){return z.generateMipmaps}function x(z){o.generateMipmap(z)}function N(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(z,M,k,J,dt=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let rt=M;if(M===o.RED&&(k===o.FLOAT&&(rt=o.R32F),k===o.HALF_FLOAT&&(rt=o.R16F),k===o.UNSIGNED_BYTE&&(rt=o.R8)),M===o.RED_INTEGER&&(k===o.UNSIGNED_BYTE&&(rt=o.R8UI),k===o.UNSIGNED_SHORT&&(rt=o.R16UI),k===o.UNSIGNED_INT&&(rt=o.R32UI),k===o.BYTE&&(rt=o.R8I),k===o.SHORT&&(rt=o.R16I),k===o.INT&&(rt=o.R32I)),M===o.RG&&(k===o.FLOAT&&(rt=o.RG32F),k===o.HALF_FLOAT&&(rt=o.RG16F),k===o.UNSIGNED_BYTE&&(rt=o.RG8)),M===o.RG_INTEGER&&(k===o.UNSIGNED_BYTE&&(rt=o.RG8UI),k===o.UNSIGNED_SHORT&&(rt=o.RG16UI),k===o.UNSIGNED_INT&&(rt=o.RG32UI),k===o.BYTE&&(rt=o.RG8I),k===o.SHORT&&(rt=o.RG16I),k===o.INT&&(rt=o.RG32I)),M===o.RGB_INTEGER&&(k===o.UNSIGNED_BYTE&&(rt=o.RGB8UI),k===o.UNSIGNED_SHORT&&(rt=o.RGB16UI),k===o.UNSIGNED_INT&&(rt=o.RGB32UI),k===o.BYTE&&(rt=o.RGB8I),k===o.SHORT&&(rt=o.RGB16I),k===o.INT&&(rt=o.RGB32I)),M===o.RGBA_INTEGER&&(k===o.UNSIGNED_BYTE&&(rt=o.RGBA8UI),k===o.UNSIGNED_SHORT&&(rt=o.RGBA16UI),k===o.UNSIGNED_INT&&(rt=o.RGBA32UI),k===o.BYTE&&(rt=o.RGBA8I),k===o.SHORT&&(rt=o.RGBA16I),k===o.INT&&(rt=o.RGBA32I)),M===o.RGB&&(k===o.UNSIGNED_INT_5_9_9_9_REV&&(rt=o.RGB9_E5),k===o.UNSIGNED_INT_10F_11F_11F_REV&&(rt=o.R11F_G11F_B10F)),M===o.RGBA){const Pt=dt?hf:we.getTransfer(J);k===o.FLOAT&&(rt=o.RGBA32F),k===o.HALF_FLOAT&&(rt=o.RGBA16F),k===o.UNSIGNED_BYTE&&(rt=Pt===He?o.SRGB8_ALPHA8:o.RGBA8),k===o.UNSIGNED_SHORT_4_4_4_4&&(rt=o.RGBA4),k===o.UNSIGNED_SHORT_5_5_5_1&&(rt=o.RGB5_A1)}return(rt===o.R16F||rt===o.R32F||rt===o.RG16F||rt===o.RG32F||rt===o.RGBA16F||rt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function A(z,M){let k;return z?M===null||M===Ms||M===au?k=o.DEPTH24_STENCIL8:M===ua?k=o.DEPTH32F_STENCIL8:M===iu&&(k=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ms||M===au?k=o.DEPTH_COMPONENT24:M===ua?k=o.DEPTH_COMPONENT32F:M===iu&&(k=o.DEPTH_COMPONENT16),k}function L(z,M){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ei&&z.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?M.mipmaps.length:1}function O(z){const M=z.target;M.removeEventListener("dispose",O),I(M),M.isVideoTexture&&_.delete(M)}function P(z){const M=z.target;M.removeEventListener("dispose",P),w(M)}function I(z){const M=a.get(z);if(M.__webglInit===void 0)return;const k=z.source,J=v.get(k);if(J){const dt=J[M.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&R(z),Object.keys(J).length===0&&v.delete(k)}a.remove(z)}function R(z){const M=a.get(z);o.deleteTexture(M.__webglTexture);const k=z.source,J=v.get(k);delete J[M.__cacheKey],c.memory.textures--}function w(z){const M=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let dt=0;dt<M.__webglFramebuffer[J].length;dt++)o.deleteFramebuffer(M.__webglFramebuffer[J][dt]);else o.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)o.deleteFramebuffer(M.__webglFramebuffer[J]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=z.textures;for(let J=0,dt=k.length;J<dt;J++){const rt=a.get(k[J]);rt.__webglTexture&&(o.deleteTexture(rt.__webglTexture),c.memory.textures--),a.remove(k[J])}a.remove(z)}let H=0;function Z(){H=0}function et(){const z=H;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),H+=1,z}function lt(z){const M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function ut(z,M){const k=a.get(z);if(z.isVideoTexture&&ie(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&k.__version!==z.version){const J=z.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(k,z,M);return}}else z.isExternalTexture&&(k.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,k.__webglTexture,o.TEXTURE0+M)}function B(z,M){const k=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&k.__version!==z.version){at(k,z,M);return}n.bindTexture(o.TEXTURE_2D_ARRAY,k.__webglTexture,o.TEXTURE0+M)}function q(z,M){const k=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&k.__version!==z.version){at(k,z,M);return}n.bindTexture(o.TEXTURE_3D,k.__webglTexture,o.TEXTURE0+M)}function W(z,M){const k=a.get(z);if(z.version>0&&k.__version!==z.version){ht(k,z,M);return}n.bindTexture(o.TEXTURE_CUBE_MAP,k.__webglTexture,o.TEXTURE0+M)}const vt={[jp]:o.REPEAT,[Qi]:o.CLAMP_TO_EDGE,[Kp]:o.MIRRORED_REPEAT},yt={[Ei]:o.NEAREST,[k1]:o.NEAREST_MIPMAP_NEAREST,[bc]:o.NEAREST_MIPMAP_LINEAR,[ei]:o.LINEAR,[Xd]:o.LINEAR_MIPMAP_NEAREST,[ms]:o.LINEAR_MIPMAP_LINEAR},F={[Z1]:o.NEVER,[tb]:o.ALWAYS,[j1]:o.LESS,[gy]:o.LEQUAL,[K1]:o.EQUAL,[$1]:o.GEQUAL,[Q1]:o.GREATER,[J1]:o.NOTEQUAL};function $(z,M){if(M.type===ua&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===Xd||M.magFilter===bc||M.magFilter===ms||M.minFilter===ei||M.minFilter===Xd||M.minFilter===bc||M.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,vt[M.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,vt[M.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,vt[M.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,yt[M.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ei||M.minFilter!==bc&&M.minFilter!==ms||M.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function St(z,M){let k=!1;z.__webglInit===void 0&&(z.__webglInit=!0,M.addEventListener("dispose",O));const J=M.source;let dt=v.get(J);dt===void 0&&(dt={},v.set(J,dt));const rt=lt(M);if(rt!==z.__cacheKey){dt[rt]===void 0&&(dt[rt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,k=!0),dt[rt].usedTimes++;const Pt=dt[z.__cacheKey];Pt!==void 0&&(dt[z.__cacheKey].usedTimes--,Pt.usedTimes===0&&R(M)),z.__cacheKey=rt,z.__webglTexture=dt[rt].texture}return k}function Mt(z,M,k){return Math.floor(Math.floor(z/k)/M)}function Dt(z,M,k,J){const rt=z.updateRanges;if(rt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,k,J,M.data);else{rt.sort((Tt,Rt)=>Tt.start-Rt.start);let Pt=0;for(let Tt=1;Tt<rt.length;Tt++){const Rt=rt[Pt],jt=rt[Tt],zt=Rt.start+Rt.count,Ut=Mt(jt.start,M.width,4),se=Mt(Rt.start,M.width,4);jt.start<=zt+1&&Ut===se&&Mt(jt.start+jt.count-1,M.width,4)===Ut?Rt.count=Math.max(Rt.count,jt.start+jt.count-Rt.start):(++Pt,rt[Pt]=jt)}rt.length=Pt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Ht=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Tt=0,Rt=rt.length;Tt<Rt;Tt++){const jt=rt[Tt],zt=Math.floor(jt.start/4),Ut=Math.ceil(jt.count/4),se=zt%M.width,Y=Math.floor(zt/M.width),bt=Ut,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(o.TEXTURE_2D,0,se,Y,bt,wt,k,J,M.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ht),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function at(z,M,k){let J=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=o.TEXTURE_3D);const dt=St(z,M),rt=M.source;n.bindTexture(J,z.__webglTexture,o.TEXTURE0+k);const Pt=a.get(rt);if(rt.version!==Pt.__version||dt===!0){n.activeTexture(o.TEXTURE0+k);const At=we.getPrimaries(we.workingColorSpace),Ht=M.colorSpace===Er?null:we.getPrimaries(M.colorSpace),Yt=M.colorSpace===Er||At===Ht?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Tt=E(M.image,!1,s.maxTextureSize);Tt=Ye(M,Tt);const Rt=u.convert(M.format,M.colorSpace),jt=u.convert(M.type);let zt=U(M.internalFormat,Rt,jt,M.colorSpace,M.isVideoTexture);$(J,M);let Ut;const se=M.mipmaps,Y=M.isVideoTexture!==!0,bt=Pt.__version===void 0||dt===!0,wt=rt.dataReady,Ft=L(M,Tt);if(M.isDepthTexture)zt=A(M.format===su,M.type),bt&&(Y?n.texStorage2D(o.TEXTURE_2D,1,zt,Tt.width,Tt.height):n.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,Rt,jt,null));else if(M.isDataTexture)if(se.length>0){Y&&bt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,se[0].width,se[0].height);for(let Et=0,gt=se.length;Et<gt;Et++)Ut=se[Et],Y?wt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ut.width,Ut.height,Rt,jt,Ut.data):n.texImage2D(o.TEXTURE_2D,Et,zt,Ut.width,Ut.height,0,Rt,jt,Ut.data);M.generateMipmaps=!1}else Y?(bt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,Tt.width,Tt.height),wt&&Dt(M,Tt,Rt,jt)):n.texImage2D(o.TEXTURE_2D,0,zt,Tt.width,Tt.height,0,Rt,jt,Tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Y&&bt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,se[0].width,se[0].height,Tt.depth);for(let Et=0,gt=se.length;Et<gt;Et++)if(Ut=se[Et],M.format!==Gi)if(Rt!==null)if(Y){if(wt)if(M.layerUpdates.size>0){const Gt=zx(Ut.width,Ut.height,M.format,M.type);for(const ae of M.layerUpdates){const Oe=Ut.data.subarray(ae*Gt/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Gt/Ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ae,Ut.width,Ut.height,1,Rt,Oe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ut.width,Ut.height,Tt.depth,Rt,Ut.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,zt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?wt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ut.width,Ut.height,Tt.depth,Rt,jt,Ut.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Et,zt,Ut.width,Ut.height,Tt.depth,0,Rt,jt,Ut.data)}else{Y&&bt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,se[0].width,se[0].height);for(let Et=0,gt=se.length;Et<gt;Et++)Ut=se[Et],M.format!==Gi?Rt!==null?Y?wt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ut.width,Ut.height,Rt,Ut.data):n.compressedTexImage2D(o.TEXTURE_2D,Et,zt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?wt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ut.width,Ut.height,Rt,jt,Ut.data):n.texImage2D(o.TEXTURE_2D,Et,zt,Ut.width,Ut.height,0,Rt,jt,Ut.data)}else if(M.isDataArrayTexture)if(Y){if(bt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,Tt.width,Tt.height,Tt.depth),wt)if(M.layerUpdates.size>0){const Et=zx(Tt.width,Tt.height,M.format,M.type);for(const gt of M.layerUpdates){const Gt=Tt.data.subarray(gt*Et/Tt.data.BYTES_PER_ELEMENT,(gt+1)*Et/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Tt.width,Tt.height,1,Rt,jt,Gt)}M.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,jt,Tt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Tt.width,Tt.height,Tt.depth,0,Rt,jt,Tt.data);else if(M.isData3DTexture)Y?(bt&&n.texStorage3D(o.TEXTURE_3D,Ft,zt,Tt.width,Tt.height,Tt.depth),wt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Rt,jt,Tt.data)):n.texImage3D(o.TEXTURE_3D,0,zt,Tt.width,Tt.height,Tt.depth,0,Rt,jt,Tt.data);else if(M.isFramebufferTexture){if(bt)if(Y)n.texStorage2D(o.TEXTURE_2D,Ft,zt,Tt.width,Tt.height);else{let Et=Tt.width,gt=Tt.height;for(let Gt=0;Gt<Ft;Gt++)n.texImage2D(o.TEXTURE_2D,Gt,zt,Et,gt,0,Rt,jt,null),Et>>=1,gt>>=1}}else if(se.length>0){if(Y&&bt){const Et=We(se[0]);n.texStorage2D(o.TEXTURE_2D,Ft,zt,Et.width,Et.height)}for(let Et=0,gt=se.length;Et<gt;Et++)Ut=se[Et],Y?wt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Rt,jt,Ut):n.texImage2D(o.TEXTURE_2D,Et,zt,Rt,jt,Ut);M.generateMipmaps=!1}else if(Y){if(bt){const Et=We(Tt);n.texStorage2D(o.TEXTURE_2D,Ft,zt,Et.width,Et.height)}wt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,jt,Tt)}else n.texImage2D(o.TEXTURE_2D,0,zt,Rt,jt,Tt);y(M)&&x(J),Pt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}z.__version=M.version}function ht(z,M,k){if(M.image.length!==6)return;const J=St(z,M),dt=M.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+k);const rt=a.get(dt);if(dt.version!==rt.__version||J===!0){n.activeTexture(o.TEXTURE0+k);const Pt=we.getPrimaries(we.workingColorSpace),At=M.colorSpace===Er?null:we.getPrimaries(M.colorSpace),Ht=M.colorSpace===Er||Pt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,Tt=M.image[0]&&M.image[0].isDataTexture,Rt=[];for(let gt=0;gt<6;gt++)!Yt&&!Tt?Rt[gt]=E(M.image[gt],!0,s.maxCubemapSize):Rt[gt]=Tt?M.image[gt].image:M.image[gt],Rt[gt]=Ye(M,Rt[gt]);const jt=Rt[0],zt=u.convert(M.format,M.colorSpace),Ut=u.convert(M.type),se=U(M.internalFormat,zt,Ut,M.colorSpace),Y=M.isVideoTexture!==!0,bt=rt.__version===void 0||J===!0,wt=dt.dataReady;let Ft=L(M,jt);$(o.TEXTURE_CUBE_MAP,M);let Et;if(Yt){Y&&bt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,se,jt.width,jt.height);for(let gt=0;gt<6;gt++){Et=Rt[gt].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];M.format!==Gi?zt!==null?Y?wt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,ae.width,ae.height,zt,ae.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,0,0,ae.width,ae.height,zt,Ut,ae.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt,se,ae.width,ae.height,0,zt,Ut,ae.data)}}}else{if(Et=M.mipmaps,Y&&bt){Et.length>0&&Ft++;const gt=We(Rt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,se,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Tt){Y?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Rt[gt].width,Rt[gt].height,zt,Ut,Rt[gt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,Rt[gt].width,Rt[gt].height,0,zt,Ut,Rt[gt].data);for(let Gt=0;Gt<Et.length;Gt++){const Oe=Et[Gt].image[gt].image;Y?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,Oe.width,Oe.height,zt,Ut,Oe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,se,Oe.width,Oe.height,0,zt,Ut,Oe.data)}}else{Y?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt,Ut,Rt[gt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,se,zt,Ut,Rt[gt]);for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];Y?wt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,0,0,zt,Ut,ae.image[gt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Gt+1,se,zt,Ut,ae.image[gt])}}}y(M)&&x(o.TEXTURE_CUBE_MAP),rt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}z.__version=M.version}function Ct(z,M,k,J,dt,rt){const Pt=u.convert(k.format,k.colorSpace),At=u.convert(k.type),Ht=U(k.internalFormat,Pt,At,k.colorSpace),Yt=a.get(M),Tt=a.get(k);if(Tt.__renderTarget=M,!Yt.__hasExternalTextures){const Rt=Math.max(1,M.width>>rt),jt=Math.max(1,M.height>>rt);dt===o.TEXTURE_3D||dt===o.TEXTURE_2D_ARRAY?n.texImage3D(dt,rt,Ht,Rt,jt,M.depth,0,Pt,At,null):n.texImage2D(dt,rt,Ht,Rt,jt,0,Pt,At,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),It(M)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,J,dt,Tt.__webglTexture,0,Se(M)):(dt===o.TEXTURE_2D||dt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,J,dt,Tt.__webglTexture,rt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(z,M,k){if(o.bindRenderbuffer(o.RENDERBUFFER,z),M.depthBuffer){const J=M.depthTexture,dt=J&&J.isDepthTexture?J.type:null,rt=A(M.stencilBuffer,dt),Pt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Se(M);It(M)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,rt,M.width,M.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,rt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,rt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,z)}else{const J=M.textures;for(let dt=0;dt<J.length;dt++){const rt=J[dt],Pt=u.convert(rt.format,rt.colorSpace),At=u.convert(rt.type),Ht=U(rt.internalFormat,Pt,At,rt.colorSpace),Yt=Se(M);k&&It(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Ht,M.width,M.height):It(M)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,Ht,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ht,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(z,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=a.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ut(M.depthTexture,0);const dt=J.__webglTexture,rt=Se(M);if(M.depthTexture.format===ru)It(M)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,dt,0);else if(M.depthTexture.format===su)It(M)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0,rt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function ue(z){const M=a.get(z),k=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){const J=z.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const dt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",dt)};J.addEventListener("dispose",dt),M.__depthDisposeCallback=dt}M.__boundDepthTexture=J}if(z.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const J=z.texture.mipmaps;J&&J.length>0?Wt(M.__webglFramebuffer[0],z):Wt(M.__webglFramebuffer,z)}else if(k){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=o.createRenderbuffer(),Bt(M.__webglDepthbuffer[J],z,!1);else{const dt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer[J];o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,rt)}}else{const J=z.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Bt(M.__webglDepthbuffer,z,!1);else{const dt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,dt,o.RENDERBUFFER,rt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function en(z,M,k){const J=a.get(z);M!==void 0&&Ct(J.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),k!==void 0&&ue(z)}function V(z){const M=z.texture,k=a.get(z),J=a.get(M);z.addEventListener("dispose",P);const dt=z.textures,rt=z.isWebGLCubeRenderTarget===!0,Pt=dt.length>1;if(Pt||(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=M.version,c.memory.textures++),rt){k.__webglFramebuffer=[];for(let At=0;At<6;At++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[At]=[];for(let Ht=0;Ht<M.mipmaps.length;Ht++)k.__webglFramebuffer[At][Ht]=o.createFramebuffer()}else k.__webglFramebuffer[At]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let At=0;At<M.mipmaps.length;At++)k.__webglFramebuffer[At]=o.createFramebuffer()}else k.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let At=0,Ht=dt.length;At<Ht;At++){const Yt=a.get(dt[At]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&It(z)===!1){k.__webglMultisampledFramebuffer=o.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let At=0;At<dt.length;At++){const Ht=dt[At];k.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,k.__webglColorRenderbuffer[At]);const Yt=u.convert(Ht.format,Ht.colorSpace),Tt=u.convert(Ht.type),Rt=U(Ht.internalFormat,Yt,Tt,Ht.colorSpace,z.isXRRenderTarget===!0),jt=Se(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Rt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,k.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(k.__webglDepthRenderbuffer=o.createRenderbuffer(),Bt(k.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(rt){n.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture),$(o.TEXTURE_CUBE_MAP,M);for(let At=0;At<6;At++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ht=0;Ht<M.mipmaps.length;Ht++)Ct(k.__webglFramebuffer[At][Ht],z,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ht);else Ct(k.__webglFramebuffer[At],z,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(M)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let At=0,Ht=dt.length;At<Ht;At++){const Yt=dt[At],Tt=a.get(Yt);let Rt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Rt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Tt.__webglTexture),$(Rt,Yt),Ct(k.__webglFramebuffer,z,Yt,o.COLOR_ATTACHMENT0+At,Rt,0),y(Yt)&&x(Rt)}n.unbindTexture()}else{let At=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(At=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(At,J.__webglTexture),$(At,M),M.mipmaps&&M.mipmaps.length>0)for(let Ht=0;Ht<M.mipmaps.length;Ht++)Ct(k.__webglFramebuffer[Ht],z,M,o.COLOR_ATTACHMENT0,At,Ht);else Ct(k.__webglFramebuffer,z,M,o.COLOR_ATTACHMENT0,At,0);y(M)&&x(At),n.unbindTexture()}z.depthBuffer&&ue(z)}function Te(z){const M=z.textures;for(let k=0,J=M.length;k<J;k++){const dt=M[k];if(y(dt)){const rt=N(z),Pt=a.get(dt).__webglTexture;n.bindTexture(rt,Pt),x(rt),n.unbindTexture()}}}const ne=[],$t=[];function qt(z){if(z.samples>0){if(It(z)===!1){const M=z.textures,k=z.width,J=z.height;let dt=o.COLOR_BUFFER_BIT;const rt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=a.get(z),At=M.length>1;if(At)for(let Yt=0;Yt<M.length;Yt++)n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Ht=z.texture.mipmaps;Ht&&Ht.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Yt=0;Yt<M.length;Yt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(dt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(dt|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const Tt=a.get(M[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,k,J,0,0,k,J,dt,o.NEAREST),p===!0&&(ne.length=0,$t.length=0,ne.push(o.COLOR_ATTACHMENT0+Yt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ne.push(rt),$t.push(rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Yt=0;Yt<M.length;Yt++){n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Yt]);const Tt=a.get(M[Yt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Tt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const M=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Se(z){return Math.min(s.maxSamples,z.samples)}function It(z){const M=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ie(z){const M=c.render.frame;_.get(z)!==M&&(_.set(z,M),z.update())}function Ye(z,M){const k=z.colorSpace,J=z.format,dt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||k!==Io&&k!==Er&&(we.getTransfer(k)===He?(J!==Gi||dt!==ka)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function We(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=et,this.resetTextureUnits=Z,this.setTexture2D=ut,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=en,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=It}function pw(o,t){function n(a,s=Er){let u;const c=we.getTransfer(s);if(a===ka)return o.UNSIGNED_BYTE;if(a===Zm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===jm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===fy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===hy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===uy)return o.BYTE;if(a===cy)return o.SHORT;if(a===iu)return o.UNSIGNED_SHORT;if(a===Ym)return o.INT;if(a===Ms)return o.UNSIGNED_INT;if(a===ua)return o.FLOAT;if(a===Go)return o.HALF_FLOAT;if(a===dy)return o.ALPHA;if(a===py)return o.RGB;if(a===Gi)return o.RGBA;if(a===ru)return o.DEPTH_COMPONENT;if(a===su)return o.DEPTH_STENCIL;if(a===my)return o.RED;if(a===Km)return o.RED_INTEGER;if(a===_y)return o.RG;if(a===Qm)return o.RG_INTEGER;if(a===Jm)return o.RGBA_INTEGER;if(a===$c||a===tf||a===ef||a===nf)if(c===He)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===$c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===tf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ef)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===nf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===$c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===tf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ef)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===nf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Qp||a===Jp||a===$p||a===tm)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Qp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Jp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$p)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===tm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===em||a===nm||a===im)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===em||a===nm)return c===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===im)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===am||a===rm||a===sm||a===om||a===lm||a===um||a===cm||a===fm||a===hm||a===dm||a===pm||a===mm||a===_m||a===gm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===am)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===rm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===sm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===om)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===lm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===um)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===cm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===hm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===dm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===pm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===mm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===_m)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===gm)return c===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vm||a===xm||a===Sm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===vm)return c===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===xm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ym||a===Mm||a===Em||a===Tm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===ym)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Mm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Em)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Tm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===au?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Dy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Wa({vertexShader:mw,fragmentShader:_w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Vi(new Ss(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vw extends Vo{constructor(t,n){super();const a=this;let s=null,u=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,S=null,b=null;const E=typeof XRWebGLBinding<"u",y=new gw,x={},N=n.getContextAttributes();let U=null,A=null;const L=[],O=[],P=new oe;let I=null;const R=new ji;R.viewport=new rn;const w=new ji;w.viewport=new rn;const H=[R,w],Z=new Fb;let et=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let ht=L[at];return ht===void 0&&(ht=new dp,L[at]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(at){let ht=L[at];return ht===void 0&&(ht=new dp,L[at]=ht),ht.getGripSpace()},this.getHand=function(at){let ht=L[at];return ht===void 0&&(ht=new dp,L[at]=ht),ht.getHandSpace()};function ut(at){const ht=O.indexOf(at.inputSource);if(ht===-1)return;const Ct=L[ht];Ct!==void 0&&(Ct.update(at.inputSource,at.frame,d||c),Ct.dispatchEvent({type:at.type,data:at.inputSource}))}function B(){s.removeEventListener("select",ut),s.removeEventListener("selectstart",ut),s.removeEventListener("selectend",ut),s.removeEventListener("squeeze",ut),s.removeEventListener("squeezestart",ut),s.removeEventListener("squeezeend",ut),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let at=0;at<L.length;at++){const ht=O[at];ht!==null&&(O[at]=null,L[at].disconnect(ht))}et=null,lt=null,y.reset();for(const at in x)delete x[at];t.setRenderTarget(U),S=null,v=null,g=null,s=null,A=null,Dt.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){f=at,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",ut),s.addEventListener("selectstart",ut),s.addEventListener("selectend",ut),s.addEventListener("squeeze",ut),s.addEventListener("squeezestart",ut),s.addEventListener("squeezeend",ut),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),N.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Bt=null,Wt=null;N.depth&&(Wt=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=N.stencil?su:ru,Bt=N.stencil?au:Ms);const ue={colorFormat:n.RGBA8,depthFormat:Wt,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(ue),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new Or(v.textureWidth,v.textureHeight,{format:Gi,type:ka,depthTexture:new wy(v.textureWidth,v.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ct={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(s,n,Ct),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Or(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:ka,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Dt.setContext(s),Dt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(at){for(let ht=0;ht<at.removed.length;ht++){const Ct=at.removed[ht],Bt=O.indexOf(Ct);Bt>=0&&(O[Bt]=null,L[Bt].disconnect(Ct))}for(let ht=0;ht<at.added.length;ht++){const Ct=at.added[ht];let Bt=O.indexOf(Ct);if(Bt===-1){for(let ue=0;ue<L.length;ue++)if(ue>=O.length){O.push(Ct),Bt=ue;break}else if(O[ue]===null){O[ue]=Ct,Bt=ue;break}if(Bt===-1)break}const Wt=L[Bt];Wt&&Wt.connect(Ct)}}const W=new ot,vt=new ot;function yt(at,ht,Ct){W.setFromMatrixPosition(ht.matrixWorld),vt.setFromMatrixPosition(Ct.matrixWorld);const Bt=W.distanceTo(vt),Wt=ht.projectionMatrix.elements,ue=Ct.projectionMatrix.elements,en=Wt[14]/(Wt[10]-1),V=Wt[14]/(Wt[10]+1),Te=(Wt[9]+1)/Wt[5],ne=(Wt[9]-1)/Wt[5],$t=(Wt[8]-1)/Wt[0],qt=(ue[8]+1)/ue[0],Se=en*$t,It=en*qt,ie=Bt/(-$t+qt),Ye=ie*-$t;if(ht.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ye),at.translateZ(ie),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Wt[10]===-1)at.projectionMatrix.copy(ht.projectionMatrix),at.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const We=en+ie,z=V+ie,M=Se-Ye,k=It+(Bt-Ye),J=Te*V/z*We,dt=ne*V/z*We;at.projectionMatrix.makePerspective(M,k,J,dt,We,z),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function F(at,ht){ht===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(ht.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let ht=at.near,Ct=at.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(Ct=y.depthFar)),Z.near=w.near=R.near=ht,Z.far=w.far=R.far=Ct,(et!==Z.near||lt!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),et=Z.near,lt=Z.far),Z.layers.mask=at.layers.mask|6,R.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const Bt=at.parent,Wt=Z.cameras;F(Z,Bt);for(let ue=0;ue<Wt.length;ue++)F(Wt[ue],Bt);Wt.length===2?yt(Z,R,w):Z.projectionMatrix.copy(R.projectionMatrix),$(at,Z,Bt)};function $(at,ht,Ct){Ct===null?at.matrix.copy(ht.matrixWorld):(at.matrix.copy(Ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(ht.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(ht.projectionMatrix),at.projectionMatrixInverse.copy(ht.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=bm*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(at){p=at,v!==null&&(v.fixedFoveation=at),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(at){return x[at]};let St=null;function Mt(at,ht){if(_=ht.getViewerPose(d||c),b=ht,_!==null){const Ct=_.views;S!==null&&(t.setRenderTargetFramebuffer(A,S.framebuffer),t.setRenderTarget(A));let Bt=!1;Ct.length!==Z.cameras.length&&(Z.cameras.length=0,Bt=!0);for(let V=0;V<Ct.length;V++){const Te=Ct[V];let ne=null;if(S!==null)ne=S.getViewport(Te);else{const qt=g.getViewSubImage(v,Te);ne=qt.viewport,V===0&&(t.setRenderTargetTextures(A,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(A))}let $t=H[V];$t===void 0&&($t=new ji,$t.layers.enable(V),$t.viewport=new rn,H[V]=$t),$t.matrix.fromArray(Te.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Te.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),V===0&&(Z.matrix.copy($t.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Bt===!0&&Z.cameras.push($t)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const V=g.getDepthInformation(Ct[0]);V&&V.isValid&&V.texture&&y.init(V,s.renderState)}if(Wt&&Wt.includes("camera-access")&&E){t.state.unbindTexture(),g=a.getBinding();for(let V=0;V<Ct.length;V++){const Te=Ct[V].camera;if(Te){let ne=x[Te];ne||(ne=new Dy,x[Te]=ne);const $t=g.getCameraImage(Te);ne.sourceTexture=$t}}}}for(let Ct=0;Ct<L.length;Ct++){const Bt=O[Ct],Wt=L[Ct];Bt!==null&&Wt!==void 0&&Wt.update(Bt,ht,d||c)}St&&St(at,ht),ht.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Dt=new Uy;Dt.setAnimationLoop(Mt),this.setAnimationLoop=function(at){St=at},this.dispose=function(){}}}const ls=new Xa,xw=new xn;function Sw(o,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,Ay(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function s(y,x,N,U,A){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),g(y,x)):x.isMeshPhongMaterial?(u(y,x),_(y,x)):x.isMeshStandardMaterial?(u(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,A)):x.isMeshMatcapMaterial?(u(y,x),b(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),E(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,N,U):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===si&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===si&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const N=t.get(x),U=N.envMap,A=N.envMapRotation;U&&(y.envMap.value=U,ls.copy(A),ls.x*=-1,ls.y*=-1,ls.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),y.envMapRotation.value.setFromMatrix4(xw.makeRotationFromEuler(ls)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,N,U){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*N,y.scale.value=U*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,N){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===si&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const N=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function yw(o,t,n,a){let s={},u={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,U){const A=U.program;a.uniformBlockBinding(N,A)}function d(N,U){let A=s[N.id];A===void 0&&(b(N),A=_(N),s[N.id]=A,N.addEventListener("dispose",y));const L=U.program;a.updateUBOMapping(N,L);const O=t.render.frame;u[N.id]!==O&&(v(N),u[N.id]=O)}function _(N){const U=g();N.__bindingPointIndex=U;const A=o.createBuffer(),L=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,A),o.bufferData(o.UNIFORM_BUFFER,L,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,A),A}function g(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const U=s[N.id],A=N.uniforms,L=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let O=0,P=A.length;O<P;O++){const I=Array.isArray(A[O])?A[O]:[A[O]];for(let R=0,w=I.length;R<w;R++){const H=I[R];if(S(H,O,R,L)===!0){const Z=H.__offset,et=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let ut=0;ut<et.length;ut++){const B=et[ut],q=E(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Z+lt,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,lt),lt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(N,U,A,L){const O=N.value,P=U+"_"+A;if(L[P]===void 0)return typeof O=="number"||typeof O=="boolean"?L[P]=O:L[P]=O.clone(),!0;{const I=L[P];if(typeof O=="number"||typeof O=="boolean"){if(I!==O)return L[P]=O,!0}else if(I.equals(O)===!1)return I.copy(O),!0}return!1}function b(N){const U=N.uniforms;let A=0;const L=16;for(let P=0,I=U.length;P<I;P++){const R=Array.isArray(U[P])?U[P]:[U[P]];for(let w=0,H=R.length;w<H;w++){const Z=R[w],et=Array.isArray(Z.value)?Z.value:[Z.value];for(let lt=0,ut=et.length;lt<ut;lt++){const B=et[lt],q=E(B),W=A%L,vt=W%q.boundary,yt=W+vt;A+=vt,yt!==0&&L-yt<q.storage&&(A+=L-yt),Z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=A,A+=q.storage}}}const O=A%L;return O>0&&(A+=L-O),N.__size=A,N.__cache={},this}function E(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function y(N){const U=N.target;U.removeEventListener("dispose",y);const A=c.indexOf(U.__bindingPointIndex);c.splice(A,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete u[U.id]}function x(){for(const N in s)o.deleteBuffer(s[N]);c=[],s={},u={}}return{bind:p,update:d,dispose:x}}class Mw{constructor(t={}){const{canvas:n=nb(),context:a=null,depth:s=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=c;const b=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const N=[],U=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=Bi;let O=0,P=0,I=null,R=-1,w=null;const H=new rn,Z=new rn;let et=null;const lt=new Ue(0);let ut=0,B=n.width,q=n.height,W=1,vt=null,yt=null;const F=new rn(0,0,B,q),$=new rn(0,0,B,q);let St=!1;const Mt=new Cy;let Dt=!1,at=!1;const ht=new xn,Ct=new ot,Bt=new rn,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function en(){return I===null?W:1}let V=a;function Te(D,j){return n.getContext(D,j)}try{const D={alpha:!0,depth:s,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",wt,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",Et,!1),V===null){const j="webgl2";if(V=Te(j,D),V===null)throw Te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ne,$t,qt,Se,It,ie,Ye,We,z,M,k,J,dt,rt,Pt,At,Ht,Yt,Tt,Rt,jt,zt,Ut,se;function Y(){ne=new L2(V),ne.init(),zt=new pw(V,ne),$t=new b2(V,ne,t,zt),qt=new hw(V,ne),$t.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),Se=new P2(V),It=new $C,ie=new dw(V,ne,qt,It,$t,zt,Se),Ye=new R2(A),We=new U2(A),z=new Gb(V),Ut=new E2(V,z),M=new N2(V,z,Se,Ut),k=new B2(V,M,z,Se),Tt=new z2(V,$t,ie),At=new A2(It),J=new JC(A,Ye,We,ne,$t,Ut,At),dt=new Sw(A,It),rt=new ew,Pt=new ow(ne),Yt=new M2(A,Ye,We,qt,k,S,p),Ht=new cw(A,k,$t),se=new yw(V,Se,$t,qt),Rt=new T2(V,ne,Se),jt=new O2(V,ne,Se),Se.programs=J.programs,A.capabilities=$t,A.extensions=ne,A.properties=It,A.renderLists=rt,A.shadowMap=Ht,A.state=qt,A.info=Se}Y();const bt=new vw(A,V);this.xr=bt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=ne.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ne.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(B,q,!1))},this.getSize=function(D){return D.set(B,q)},this.setSize=function(D,j,st=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,q=j,n.width=Math.floor(D*W),n.height=Math.floor(j*W),st===!0&&(n.style.width=D+"px",n.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(B*W,q*W).floor()},this.setDrawingBufferSize=function(D,j,st){B=D,q=j,W=st,n.width=Math.floor(D*st),n.height=Math.floor(j*st),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(F)},this.setViewport=function(D,j,st,ct){D.isVector4?F.set(D.x,D.y,D.z,D.w):F.set(D,j,st,ct),qt.viewport(H.copy(F).multiplyScalar(W).round())},this.getScissor=function(D){return D.copy($)},this.setScissor=function(D,j,st,ct){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,j,st,ct),qt.scissor(Z.copy($).multiplyScalar(W).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(D){qt.setScissorTest(St=D)},this.setOpaqueSort=function(D){vt=D},this.setTransparentSort=function(D){yt=D},this.getClearColor=function(D){return D.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,st=!0){let ct=0;if(D){let Q=!1;if(I!==null){const xt=I.texture.format;Q=xt===Jm||xt===Qm||xt===Km}if(Q){const xt=I.texture.type,Lt=xt===ka||xt===Ms||xt===iu||xt===au||xt===Zm||xt===jm,kt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Kt=kt.r,ee=kt.g,Qt=kt.b;Lt?(b[0]=Kt,b[1]=ee,b[2]=Qt,b[3]=Ot,V.clearBufferuiv(V.COLOR,0,b)):(E[0]=Kt,E[1]=ee,E[2]=Qt,E[3]=Ot,V.clearBufferiv(V.COLOR,0,E))}else ct|=V.COLOR_BUFFER_BIT}j&&(ct|=V.DEPTH_BUFFER_BIT),st&&(ct|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",wt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Yt.dispose(),rt.dispose(),Pt.dispose(),It.dispose(),Ye.dispose(),We.dispose(),k.dispose(),Ut.dispose(),se.dispose(),J.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ai),bt.removeEventListener("sessionend",Xo),$i.stop()};function wt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const D=Se.autoReset,j=Ht.enabled,st=Ht.autoUpdate,ct=Ht.needsUpdate,Q=Ht.type;Y(),Se.autoReset=D,Ht.enabled=j,Ht.autoUpdate=st,Ht.needsUpdate=ct,Ht.type=Q}function Et(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function gt(D){const j=D.target;j.removeEventListener("dispose",gt),Gt(j)}function Gt(D){ae(D),It.remove(D)}function ae(D){const j=It.get(D).programs;j!==void 0&&(j.forEach(function(st){J.releaseProgram(st)}),D.isShaderMaterial&&J.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,st,ct,Q,xt){j===null&&(j=Wt);const Lt=Q.isMesh&&Q.matrixWorld.determinant()<0,kt=Ya(D,j,st,ct,Q);qt.setMaterial(ct,Lt);let Ot=st.index,Kt=1;if(ct.wireframe===!0){if(Ot=M.getWireframeAttribute(st),Ot===void 0)return;Kt=2}const ee=st.drawRange,Qt=st.attributes.position;let de=ee.start*Kt,Le=(ee.start+ee.count)*Kt;xt!==null&&(de=Math.max(de,xt.start*Kt),Le=Math.min(Le,(xt.start+xt.count)*Kt)),Ot!==null?(de=Math.max(de,0),Le=Math.min(Le,Ot.count)):Qt!=null&&(de=Math.max(de,0),Le=Math.min(Le,Qt.count));const Ge=Le-de;if(Ge<0||Ge===1/0)return;Ut.setup(Q,ct,kt,st,Ot);let Ne,pe=Rt;if(Ot!==null&&(Ne=z.get(Ot),pe=jt,pe.setIndex(Ne)),Q.isMesh)ct.wireframe===!0?(qt.setLineWidth(ct.wireframeLinewidth*en()),pe.setMode(V.LINES)):pe.setMode(V.TRIANGLES);else if(Q.isLine){let Xt=ct.linewidth;Xt===void 0&&(Xt=1),qt.setLineWidth(Xt*en()),Q.isLineSegments?pe.setMode(V.LINES):Q.isLineLoop?pe.setMode(V.LINE_LOOP):pe.setMode(V.LINE_STRIP)}else Q.isPoints?pe.setMode(V.POINTS):Q.isSprite&&pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ou("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Xt=Q._multiDrawStarts,qe=Q._multiDrawCounts,Ae=Q._multiDrawCount,Dn=Ot?z.get(Ot).bytesPerElement:1,ha=It.get(ct).currentProgram.getUniforms();for(let Tn=0;Tn<Ae;Tn++)ha.setValue(V,"_gl_DrawID",Tn),pe.render(Xt[Tn]/Dn,qe[Tn])}else if(Q.isInstancedMesh)pe.renderInstances(de,Ge,Q.count);else if(st.isInstancedBufferGeometry){const Xt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,qe=Math.min(st.instanceCount,Xt);pe.renderInstances(de,Ge,qe)}else pe.render(de,Ge)};function Oe(D,j,st){D.transparent===!0&&D.side===Fa&&D.forceSinglePass===!1?(D.side=si,D.needsUpdate=!0,ui(D,j,st),D.side=Nr,D.needsUpdate=!0,ui(D,j,st),D.side=Fa):ui(D,j,st)}this.compile=function(D,j,st=null){st===null&&(st=D),x=Pt.get(st),x.init(j),U.push(x),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),D!==st&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const ct=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const xt=Q.material;if(xt)if(Array.isArray(xt))for(let Lt=0;Lt<xt.length;Lt++){const kt=xt[Lt];Oe(kt,st,Q),ct.add(kt)}else Oe(xt,st,Q),ct.add(xt)}),x=U.pop(),ct},this.compileAsync=function(D,j,st=null){const ct=this.compile(D,j,st);return new Promise(Q=>{function xt(){if(ct.forEach(function(Lt){It.get(Lt).currentProgram.isReady()&&ct.delete(Lt)}),ct.size===0){Q(D);return}setTimeout(xt,10)}ne.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let be=null;function Vn(D){be&&be(D)}function Ai(){$i.stop()}function Xo(){$i.start()}const $i=new Uy;$i.setAnimationLoop(Vn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(D){be=D,bt.setAnimationLoop(D),D===null?$i.stop():$i.start()},bt.addEventListener("sessionstart",Ai),bt.addEventListener("sessionend",Xo),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,j,I),x=Pt.get(D,U.length),x.init(j),U.push(x),ht.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Mt.setFromProjectionMatrix(ht,ca,j.reversedDepth),at=this.localClippingEnabled,Dt=At.init(this.clippingPlanes,at),y=rt.get(D,N.length),y.init(),N.push(y),bt.enabled===!0&&bt.isPresenting===!0){const xt=A.xr.getDepthSensingMesh();xt!==null&&Ts(xt,j,-1/0,A.sortObjects)}Ts(D,j,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(vt,yt),ue=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ue&&Yt.addToRenderList(y,D),this.info.render.frame++,Dt===!0&&At.beginShadows();const st=x.state.shadowsArray;Ht.render(st,D,j),Dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=y.opaque,Q=y.transmissive;if(x.setupLights(),j.isArrayCamera){const xt=j.cameras;if(Q.length>0)for(let Lt=0,kt=xt.length;Lt<kt;Lt++){const Ot=xt[Lt];As(ct,Q,D,Ot)}ue&&Yt.render(D);for(let Lt=0,kt=xt.length;Lt<kt;Lt++){const Ot=xt[Lt];bs(y,D,Ot,Ot.viewport)}}else Q.length>0&&As(ct,Q,D,j),ue&&Yt.render(D),bs(y,D,j);I!==null&&P===0&&(ie.updateMultisampleRenderTarget(I),ie.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(A,D,j),Ut.resetDefaultState(),R=-1,w=null,U.pop(),U.length>0?(x=U[U.length-1],Dt===!0&&At.setGlobalState(A.clippingPlanes,x.state.camera)):x=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Ts(D,j,st,ct){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)st=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Mt.intersectsSprite(D)){ct&&Bt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ht);const Lt=k.update(D),kt=D.material;kt.visible&&y.push(D,Lt,kt,st,Bt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Mt.intersectsObject(D))){const Lt=k.update(D),kt=D.material;if(ct&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Bt.copy(D.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Bt.copy(Lt.boundingSphere.center)),Bt.applyMatrix4(D.matrixWorld).applyMatrix4(ht)),Array.isArray(kt)){const Ot=Lt.groups;for(let Kt=0,ee=Ot.length;Kt<ee;Kt++){const Qt=Ot[Kt],de=kt[Qt.materialIndex];de&&de.visible&&y.push(D,Lt,de,st,Bt.z,Qt)}}else kt.visible&&y.push(D,Lt,kt,st,Bt.z,null)}}const xt=D.children;for(let Lt=0,kt=xt.length;Lt<kt;Lt++)Ts(xt[Lt],j,st,ct)}function bs(D,j,st,ct){const Q=D.opaque,xt=D.transmissive,Lt=D.transparent;x.setupLightsView(st),Dt===!0&&At.setGlobalState(A.clippingPlanes,st),ct&&qt.viewport(H.copy(ct)),Q.length>0&&zr(Q,j,st),xt.length>0&&zr(xt,j,st),Lt.length>0&&zr(Lt,j,st),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function As(D,j,st,ct){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new Or(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Go:ka,minFilter:ms,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const xt=x.state.transmissionRenderTarget[ct.id],Lt=ct.viewport||H;xt.setSize(Lt.z*A.transmissionResolutionScale,Lt.w*A.transmissionResolutionScale);const kt=A.getRenderTarget(),Ot=A.getActiveCubeFace(),Kt=A.getActiveMipmapLevel();A.setRenderTarget(xt),A.getClearColor(lt),ut=A.getClearAlpha(),ut<1&&A.setClearColor(16777215,.5),A.clear(),ue&&Yt.render(st);const ee=A.toneMapping;A.toneMapping=Dr;const Qt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),Dt===!0&&At.setGlobalState(A.clippingPlanes,ct),zr(D,st,ct),ie.updateMultisampleRenderTarget(xt),ie.updateRenderTargetMipmap(xt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Le=0,Ge=j.length;Le<Ge;Le++){const Ne=j[Le],pe=Ne.object,Xt=Ne.geometry,qe=Ne.material,Ae=Ne.group;if(qe.side===Fa&&pe.layers.test(ct.layers)){const Dn=qe.side;qe.side=si,qe.needsUpdate=!0,Wo(pe,st,ct,Xt,qe,Ae),qe.side=Dn,qe.needsUpdate=!0,de=!0}}de===!0&&(ie.updateMultisampleRenderTarget(xt),ie.updateRenderTargetMipmap(xt))}A.setRenderTarget(kt,Ot,Kt),A.setClearColor(lt,ut),Qt!==void 0&&(ct.viewport=Qt),A.toneMapping=ee}function zr(D,j,st){const ct=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,xt=D.length;Q<xt;Q++){const Lt=D[Q],kt=Lt.object,Ot=Lt.geometry,Kt=Lt.group;let ee=Lt.material;ee.allowOverride===!0&&ct!==null&&(ee=ct),kt.layers.test(st.layers)&&Wo(kt,j,st,Ot,ee,Kt)}}function Wo(D,j,st,ct,Q,xt){D.onBeforeRender(A,j,st,ct,Q,xt),D.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(A,j,st,ct,D,xt),Q.transparent===!0&&Q.side===Fa&&Q.forceSinglePass===!1?(Q.side=si,Q.needsUpdate=!0,A.renderBufferDirect(st,j,ct,Q,D,xt),Q.side=Nr,Q.needsUpdate=!0,A.renderBufferDirect(st,j,ct,Q,D,xt),Q.side=Fa):A.renderBufferDirect(st,j,ct,Q,D,xt),D.onAfterRender(A,j,st,ct,Q,xt)}function ui(D,j,st){j.isScene!==!0&&(j=Wt);const ct=It.get(D),Q=x.state.lights,xt=x.state.shadowsArray,Lt=Q.state.version,kt=J.getParameters(D,Q.state,xt,j,st),Ot=J.getProgramCacheKey(kt);let Kt=ct.programs;ct.environment=D.isMeshStandardMaterial?j.environment:null,ct.fog=j.fog,ct.envMap=(D.isMeshStandardMaterial?We:Ye).get(D.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Kt===void 0&&(D.addEventListener("dispose",gt),Kt=new Map,ct.programs=Kt);let ee=Kt.get(Ot);if(ee!==void 0){if(ct.currentProgram===ee&&ct.lightsStateVersion===Lt)return wn(D,kt),ee}else kt.uniforms=J.getUniforms(D),D.onBeforeCompile(kt,A),ee=J.acquireProgram(kt,Ot),Kt.set(Ot,ee),ct.uniforms=kt.uniforms;const Qt=ct.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qt.clippingPlanes=At.uniform),wn(D,kt),ct.needsLights=Tf(D),ct.lightsStateVersion=Lt,ct.needsLights&&(Qt.ambientLightColor.value=Q.state.ambient,Qt.lightProbe.value=Q.state.probe,Qt.directionalLights.value=Q.state.directional,Qt.directionalLightShadows.value=Q.state.directionalShadow,Qt.spotLights.value=Q.state.spot,Qt.spotLightShadows.value=Q.state.spotShadow,Qt.rectAreaLights.value=Q.state.rectArea,Qt.ltc_1.value=Q.state.rectAreaLTC1,Qt.ltc_2.value=Q.state.rectAreaLTC2,Qt.pointLights.value=Q.state.point,Qt.pointLightShadows.value=Q.state.pointShadow,Qt.hemisphereLights.value=Q.state.hemi,Qt.directionalShadowMap.value=Q.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Qt.spotShadowMap.value=Q.state.spotShadowMap,Qt.spotLightMatrix.value=Q.state.spotLightMatrix,Qt.spotLightMap.value=Q.state.spotLightMap,Qt.pointShadowMap.value=Q.state.pointShadowMap,Qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ct.currentProgram=ee,ct.uniformsList=null,ee}function fn(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=af.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function wn(D,j){const st=It.get(D);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function Ya(D,j,st,ct,Q){j.isScene!==!0&&(j=Wt),ie.resetTextureUnits();const xt=j.fog,Lt=ct.isMeshStandardMaterial?j.environment:null,kt=I===null?A.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Io,Ot=(ct.isMeshStandardMaterial?We:Ye).get(ct.envMap||Lt),Kt=ct.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ee=!!st.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Qt=!!st.morphAttributes.position,de=!!st.morphAttributes.normal,Le=!!st.morphAttributes.color;let Ge=Dr;ct.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ge=A.toneMapping);const Ne=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,pe=Ne!==void 0?Ne.length:0,Xt=It.get(ct),qe=x.state.lights;if(Dt===!0&&(at===!0||D!==w)){const Sn=D===w&&ct.id===R;At.setState(ct,D,Sn)}let Ae=!1;ct.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==qe.state.version||Xt.outputColorSpace!==kt||Q.isBatchedMesh&&Xt.batching===!1||!Q.isBatchedMesh&&Xt.batching===!0||Q.isBatchedMesh&&Xt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Xt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Xt.instancing===!1||!Q.isInstancedMesh&&Xt.instancing===!0||Q.isSkinnedMesh&&Xt.skinning===!1||!Q.isSkinnedMesh&&Xt.skinning===!0||Q.isInstancedMesh&&Xt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Xt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Xt.instancingMorph===!1&&Q.morphTexture!==null||Xt.envMap!==Ot||ct.fog===!0&&Xt.fog!==xt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==At.numPlanes||Xt.numIntersection!==At.numIntersection)||Xt.vertexAlphas!==Kt||Xt.vertexTangents!==ee||Xt.morphTargets!==Qt||Xt.morphNormals!==de||Xt.morphColors!==Le||Xt.toneMapping!==Ge||Xt.morphTargetsCount!==pe)&&(Ae=!0):(Ae=!0,Xt.__version=ct.version);let Dn=Xt.currentProgram;Ae===!0&&(Dn=ui(ct,j,Q));let ha=!1,Tn=!1,Fr=!1;const ge=Dn.getUniforms(),zn=Xt.uniforms;if(qt.useProgram(Dn.program)&&(ha=!0,Tn=!0,Fr=!0),ct.id!==R&&(R=ct.id,Tn=!0),ha||w!==D){qt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ge.setValue(V,"projectionMatrix",D.projectionMatrix),ge.setValue(V,"viewMatrix",D.matrixWorldInverse);const on=ge.map.cameraPosition;on!==void 0&&on.setValue(V,Ct.setFromMatrixPosition(D.matrixWorld)),$t.logarithmicDepthBuffer&&ge.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ge.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,Tn=!0,Fr=!0)}if(Q.isSkinnedMesh){ge.setOptional(V,Q,"bindMatrix"),ge.setOptional(V,Q,"bindMatrixInverse");const Sn=Q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ge.setValue(V,"boneTexture",Sn.boneTexture,ie))}Q.isBatchedMesh&&(ge.setOptional(V,Q,"batchingTexture"),ge.setValue(V,"batchingTexture",Q._matricesTexture,ie),ge.setOptional(V,Q,"batchingIdTexture"),ge.setValue(V,"batchingIdTexture",Q._indirectTexture,ie),ge.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ge.setValue(V,"batchingColorTexture",Q._colorsTexture,ie));const kn=st.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Tt.update(Q,st,Dn),(Tn||Xt.receiveShadow!==Q.receiveShadow)&&(Xt.receiveShadow=Q.receiveShadow,ge.setValue(V,"receiveShadow",Q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(zn.envMap.value=Ot,zn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&j.environment!==null&&(zn.envMapIntensity.value=j.environmentIntensity),Tn&&(ge.setValue(V,"toneMappingExposure",A.toneMappingExposure),Xt.needsLights&&qo(zn,Fr),xt&&ct.fog===!0&&dt.refreshFogUniforms(zn,xt),dt.refreshMaterialUniforms(zn,ct,W,q,x.state.transmissionRenderTarget[D.id]),af.upload(V,fn(Xt),zn,ie)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(af.upload(V,fn(Xt),zn,ie),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ge.setValue(V,"center",Q.center),ge.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ge.setValue(V,"normalMatrix",Q.normalMatrix),ge.setValue(V,"modelMatrix",Q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Sn=ct.uniformsGroups;for(let on=0,Rs=Sn.length;on<Rs;on++){const ta=Sn[on];se.update(ta,Dn),se.bind(ta,Dn)}}return Dn}function qo(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function Tf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,j,st){const ct=It.get(D);ct.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),It.get(D.texture).__webglTexture=j,It.get(D.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:st,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){const st=It.get(D);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const bf=V.createFramebuffer();this.setRenderTarget=function(D,j=0,st=0){I=D,O=j,P=st;let ct=!0,Q=null,xt=!1,Lt=!1;if(D){const Ot=It.get(D);if(Ot.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(V.FRAMEBUFFER,null),ct=!1;else if(Ot.__webglFramebuffer===void 0)ie.setupRenderTarget(D);else if(Ot.__hasExternalTextures)ie.rebindTextures(D,It.get(D.texture).__webglTexture,It.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Qt=D.depthTexture;if(Ot.__boundDepthTexture!==Qt){if(Qt!==null&&It.has(Qt)&&(D.width!==Qt.image.width||D.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(D)}}const Kt=D.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Lt=!0);const ee=It.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?Q=ee[j][st]:Q=ee[j],xt=!0):D.samples>0&&ie.useMultisampledRTT(D)===!1?Q=It.get(D).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[st]:Q=ee,H.copy(D.viewport),Z.copy(D.scissor),et=D.scissorTest}else H.copy(F).multiplyScalar(W).floor(),Z.copy($).multiplyScalar(W).floor(),et=St;if(st!==0&&(Q=bf),qt.bindFramebuffer(V.FRAMEBUFFER,Q)&&ct&&qt.drawBuffers(D,Q),qt.viewport(H),qt.scissor(Z),qt.setScissorTest(et),xt){const Ot=It.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,st)}else if(Lt){const Ot=j;for(let Kt=0;Kt<D.textures.length;Kt++){const ee=It.get(D.textures[Kt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,st,Ot)}}else if(D!==null&&st!==0){const Ot=It.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ot.__webglTexture,st)}R=-1},this.readRenderTargetPixels=function(D,j,st,ct,Q,xt,Lt,kt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=It.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){qt.bindFramebuffer(V.FRAMEBUFFER,Ot);try{const Kt=D.textures[kt],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ct&&st>=0&&st<=D.height-Q&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt),V.readPixels(j,st,ct,Q,zt.convert(ee),zt.convert(Qt),xt))}finally{const Kt=I!==null?It.get(I).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(D,j,st,ct,Q,xt,Lt,kt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=It.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot)if(j>=0&&j<=D.width-ct&&st>=0&&st<=D.height-Q){qt.bindFramebuffer(V.FRAMEBUFFER,Ot);const Kt=D.textures[kt],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.bufferData(V.PIXEL_PACK_BUFFER,xt.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt),V.readPixels(j,st,ct,Q,zt.convert(ee),zt.convert(Qt),0);const Le=I!==null?It.get(I).__webglFramebuffer:null;qt.bindFramebuffer(V.FRAMEBUFFER,Le);const Ge=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ib(V,Ge,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,xt),V.deleteBuffer(de),V.deleteSync(Ge),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,st=0){const ct=Math.pow(2,-st),Q=Math.floor(D.image.width*ct),xt=Math.floor(D.image.height*ct),Lt=j!==null?j.x:0,kt=j!==null?j.y:0;ie.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Lt,kt,Q,xt),qt.unbindTexture()};const pu=V.createFramebuffer(),Br=V.createFramebuffer();this.copyTextureToTexture=function(D,j,st=null,ct=null,Q=0,xt=null){xt===null&&(Q!==0?(ou("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=Q,Q=0):xt=0);let Lt,kt,Ot,Kt,ee,Qt,de,Le,Ge;const Ne=D.isCompressedTexture?D.mipmaps[xt]:D.image;if(st!==null)Lt=st.max.x-st.min.x,kt=st.max.y-st.min.y,Ot=st.isBox3?st.max.z-st.min.z:1,Kt=st.min.x,ee=st.min.y,Qt=st.isBox3?st.min.z:0;else{const kn=Math.pow(2,-Q);Lt=Math.floor(Ne.width*kn),kt=Math.floor(Ne.height*kn),D.isDataArrayTexture?Ot=Ne.depth:D.isData3DTexture?Ot=Math.floor(Ne.depth*kn):Ot=1,Kt=0,ee=0,Qt=0}ct!==null?(de=ct.x,Le=ct.y,Ge=ct.z):(de=0,Le=0,Ge=0);const pe=zt.convert(j.format),Xt=zt.convert(j.type);let qe;j.isData3DTexture?(ie.setTexture3D(j,0),qe=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ie.setTexture2DArray(j,0),qe=V.TEXTURE_2D_ARRAY):(ie.setTexture2D(j,0),qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Ae=V.getParameter(V.UNPACK_ROW_LENGTH),Dn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ha=V.getParameter(V.UNPACK_SKIP_PIXELS),Tn=V.getParameter(V.UNPACK_SKIP_ROWS),Fr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ne.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ne.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Kt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Qt);const ge=D.isDataArrayTexture||D.isData3DTexture,zn=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const kn=It.get(D),Sn=It.get(j),on=It.get(kn.__renderTarget),Rs=It.get(Sn.__renderTarget);qt.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let ta=0;ta<Ot;ta++)ge&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(D).__webglTexture,Q,Qt+ta),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(j).__webglTexture,xt,Ge+ta)),V.blitFramebuffer(Kt,ee,Lt,kt,de,Le,Lt,kt,V.DEPTH_BUFFER_BIT,V.NEAREST);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||It.has(D)){const kn=It.get(D),Sn=It.get(j);qt.bindFramebuffer(V.READ_FRAMEBUFFER,pu),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Br);for(let on=0;on<Ot;on++)ge?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kn.__webglTexture,Q,Qt+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,kn.__webglTexture,Q),zn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Sn.__webglTexture,xt,Ge+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Sn.__webglTexture,xt),Q!==0?V.blitFramebuffer(Kt,ee,Lt,kt,de,Le,Lt,kt,V.COLOR_BUFFER_BIT,V.NEAREST):zn?V.copyTexSubImage3D(qe,xt,de,Le,Ge+on,Kt,ee,Lt,kt):V.copyTexSubImage2D(qe,xt,de,Le,Kt,ee,Lt,kt);qt.bindFramebuffer(V.READ_FRAMEBUFFER,null),qt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else zn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(qe,xt,de,Le,Ge,Lt,kt,Ot,pe,Xt,Ne.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,xt,de,Le,Ge,Lt,kt,Ot,pe,Ne.data):V.texSubImage3D(qe,xt,de,Le,Ge,Lt,kt,Ot,pe,Xt,Ne):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,xt,de,Le,Lt,kt,pe,Xt,Ne.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,xt,de,Le,Ne.width,Ne.height,pe,Ne.data):V.texSubImage2D(V.TEXTURE_2D,xt,de,Le,Lt,kt,pe,Xt,Ne);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Dn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ha),V.pixelStorei(V.UNPACK_SKIP_ROWS,Tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fr),xt===0&&j.generateMipmaps&&V.generateMipmap(qe),qt.unbindTexture()},this.initRenderTarget=function(D){It.get(D).__webglFramebuffer===void 0&&ie.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ie.setTextureCube(D,0):D.isData3DTexture?ie.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ie.setTexture2DArray(D,0):ie.setTexture2D(D,0),qt.unbindTexture()},this.resetState=function(){O=0,P=0,I=null,qt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}function Ew({mouseForce:o=20,cursorSize:t=100,isViscous:n=!1,viscous:a=30,iterationsViscous:s=32,iterationsPoisson:u=32,dt:c=.014,BFECC:f=!0,resolution:p=.5,isBounce:d=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:v="",autoDemo:S=!0,autoSpeed:b=.5,autoIntensity:E=2.2,takeoverDuration:y=.25,autoResumeDelay:x=1e3,autoRampDuration:N=.6}){const U=Rn.useRef(null),A=Rn.useRef(null),L=Rn.useRef(null),O=Rn.useRef(null),P=Rn.useRef(null),I=Rn.useRef(!0),R=Rn.useRef(null);return Rn.useEffect(()=>{if(!U.current)return;function w(z){let M;Array.isArray(z)&&z.length>0?z.length===1?M=[z[0],z[0]]:M=z:M=["#ffffff","#ffffff"];const k=M.length,J=new Uint8Array(k*4);for(let rt=0;rt<k;rt++){const Pt=new Ue(M[rt]);J[rt*4+0]=Math.round(Pt.r*255),J[rt*4+1]=Math.round(Pt.g*255),J[rt*4+2]=Math.round(Pt.b*255),J[rt*4+3]=255}const dt=new Cb(J,k,1,Gi);return dt.magFilter=ei,dt.minFilter=ei,dt.wrapS=Qi,dt.wrapT=Qi,dt.generateMipmaps=!1,dt.needsUpdate=!0,dt}const H=w(_),Z=new rn(0,0,0,0);class et{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(M){this.container=M,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Mw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ue(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Ib,this.clock.start()}resize(){if(!this.container)return;const M=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(M.width)),this.height=Math.max(1,Math.floor(M.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const lt=new et;class ut{constructor(){this.mouseMoved=!1,this.coords=new oe,this.coords_old=new oe,this.diff=new oe,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new oe,this.takeoverTo=new oe,this.onInteract=null}init(M){this.container=M,M.addEventListener("mousemove",this._onMouseMove,!1),M.addEventListener("touchstart",this._onTouchStart,!1),M.addEventListener("touchmove",this._onTouchMove,!1),M.addEventListener("mouseenter",this._onMouseEnter,!1),M.addEventListener("mouseleave",this._onMouseLeave,!1),M.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(M,k){if(!this.container)return;this.timer&&clearTimeout(this.timer);const J=this.container.getBoundingClientRect(),dt=(M-J.left)/J.width,rt=(k-J.top)/J.height;this.coords.set(dt*2-1,-(rt*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(M,k){this.coords.set(M,k),this.mouseMoved=!0}onDocumentMouseMove(M){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const k=this.container.getBoundingClientRect(),J=(M.clientX-k.left)/k.width,dt=(M.clientY-k.top)/k.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(J*2-1,-(dt*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(M.clientX,M.clientY),this.hasUserControl=!0}onDocumentTouchStart(M){if(M.touches.length===1){const k=M.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY),this.hasUserControl=!0}}onDocumentTouchMove(M){if(M.touches.length===1){const k=M.touches[0];this.onInteract&&this.onInteract(),this.setCoords(k.pageX,k.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const M=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(M>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const k=M*M*(3-2*M);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,k)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new ut;class q{constructor(M,k,J){this.mouse=M,this.manager=k,this.enabled=J.enabled,this.speed=J.speed,this.resumeDelay=J.resumeDelay||3e3,this.rampDurationMs=(J.rampDuration||0)*1e3,this.active=!1,this.current=new oe(0,0),this.target=new oe,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new oe,this.pickNewTarget()}pickNewTarget(){const M=Math.random;this.target.set((M()*2-1)*(1-this.margin),(M()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const M=performance.now();if(M-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=M,this.activationTime=M),!this.active)return;this.mouse.isAutoActive=!0;let J=(M-this.lastTime)/1e3;this.lastTime=M,J>.2&&(J=.016);const dt=this._tmpDir.subVectors(this.target,this.current),rt=dt.length();if(rt<.01){this.pickNewTarget();return}dt.normalize();let Pt=1;if(this.rampDurationMs>0){const Yt=Math.min(1,(M-this.activationTime)/this.rampDurationMs);Pt=Yt*Yt*(3-2*Yt)}const At=this.speed*J*Pt,Ht=Math.min(At,rt);this.current.addScaledVector(dt,Ht),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,vt=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,yt=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,F=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,$=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,St=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Mt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Dt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,at=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ht=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Ct{constructor(M){this.props=M||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Ux,this.camera=new mf,this.uniforms&&(this.material=new qc(this.props.material),this.geometry=new Ss(2,2),this.plane=new Vi(this.geometry,this.material),this.scene.add(this.plane))}update(){lt.renderer.setRenderTarget(this.props.output||null),lt.renderer.render(this.scene,this.camera),lt.renderer.setRenderTarget(null)}}class Bt extends Ct{constructor(M){super({material:{vertexShader:W,fragmentShader:F,uniforms:{boundarySpace:{value:M.cellScale},px:{value:M.cellScale},fboSize:{value:M.fboSize},velocity:{value:M.src.texture},dt:{value:M.dt},isBFECC:{value:!0}}},output:M.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const M=new qa,k=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);M.setAttribute("position",new Ji(k,3));const J=new qc({vertexShader:vt,fragmentShader:F,uniforms:this.uniforms});this.line=new Ob(M,J),this.scene.add(this.line)}update({dt:M,isBounce:k,BFECC:J}){this.uniforms.dt.value=M,this.line.visible=k,this.uniforms.isBFECC.value=J,super.update()}}class Wt extends Ct{constructor(M){super({output:M.dst}),this.init(M)}init(M){super.init();const k=new Ss(1,1),J=new qc({vertexShader:yt,fragmentShader:Mt,blending:Bp,depthWrite:!1,uniforms:{px:{value:M.cellScale},force:{value:new oe(0,0)},center:{value:new oe(0,0)},scale:{value:new oe(M.cursor_size,M.cursor_size)}}});this.mouse=new Vi(k,J),this.scene.add(this.mouse)}update(M){const k=B.diff.x/2*M.mouse_force,J=B.diff.y/2*M.mouse_force,dt=M.cursor_size*M.cellScale.x,rt=M.cursor_size*M.cellScale.y,Pt=Math.min(Math.max(B.coords.x,-1+dt+M.cellScale.x*2),1-dt-M.cellScale.x*2),At=Math.min(Math.max(B.coords.y,-1+rt+M.cellScale.y*2),1-rt-M.cellScale.y*2),Ht=this.mouse.material.uniforms;Ht.force.value.set(k,J),Ht.center.value.set(Pt,At),Ht.scale.value.set(M.cursor_size,M.cursor_size),super.update()}}class ue extends Ct{constructor(M){super({material:{vertexShader:W,fragmentShader:ht,uniforms:{boundarySpace:{value:M.boundarySpace},velocity:{value:M.src.texture},velocity_new:{value:M.dst_.texture},v:{value:M.viscous},px:{value:M.cellScale},dt:{value:M.dt}}},output:M.dst,output0:M.dst_,output1:M.dst}),this.init()}update({viscous:M,iterations:k,dt:J}){let dt,rt;this.uniforms.v.value=M;for(let Pt=0;Pt<k;Pt++)Pt%2===0?(dt=this.props.output0,rt=this.props.output1):(dt=this.props.output1,rt=this.props.output0),this.uniforms.velocity_new.value=dt.texture,this.props.output=rt,this.uniforms.dt.value=J,super.update();return rt}}class en extends Ct{constructor(M){super({material:{vertexShader:W,fragmentShader:St,uniforms:{boundarySpace:{value:M.boundarySpace},velocity:{value:M.src.texture},px:{value:M.cellScale},dt:{value:M.dt}}},output:M.dst}),this.init()}update({vel:M}){this.uniforms.velocity.value=M.texture,super.update()}}class V extends Ct{constructor(M){super({material:{vertexShader:W,fragmentShader:Dt,uniforms:{boundarySpace:{value:M.boundarySpace},pressure:{value:M.dst_.texture},divergence:{value:M.src.texture},px:{value:M.cellScale}}},output:M.dst,output0:M.dst_,output1:M.dst}),this.init()}update({iterations:M}){let k,J;for(let dt=0;dt<M;dt++)dt%2===0?(k=this.props.output0,J=this.props.output1):(k=this.props.output1,J=this.props.output0),this.uniforms.pressure.value=k.texture,this.props.output=J,super.update();return J}}class Te extends Ct{constructor(M){super({material:{vertexShader:W,fragmentShader:at,uniforms:{boundarySpace:{value:M.boundarySpace},pressure:{value:M.src_p.texture},velocity:{value:M.src_v.texture},px:{value:M.cellScale},dt:{value:M.dt}}},output:M.dst}),this.init()}update({vel:M,pressure:k}){this.uniforms.velocity.value=M.texture,this.uniforms.pressure.value=k.texture,super.update()}}class ne{constructor(M){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...M},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new oe,this.cellScale=new oe,this.boundarySpace=new oe,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Go:ua}createAllFBO(){const k={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:ei,magFilter:ei,wrapS:Qi,wrapT:Qi};for(let J in this.fbos)this.fbos[J]=new Or(this.fboSize.x,this.fboSize.y,k)}createShaderPass(){this.advection=new Bt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Wt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ue({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new en({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new V({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Te({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const M=Math.max(1,Math.round(this.options.resolution*lt.width)),k=Math.max(1,Math.round(this.options.resolution*lt.height)),J=1/M,dt=1/k;this.cellScale.set(J,dt),this.fboSize.set(M,k)}resize(){this.calcSize();for(let M in this.fbos)this.fbos[M].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let M=this.fbos.vel_1;this.options.isViscous&&(M=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:M});const k=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:M,pressure:k})}}class $t{constructor(){this.init()}init(){this.simulation=new ne,this.scene=new Ux,this.camera=new mf,this.output=new Vi(new Ss(2,2),new qc({vertexShader:W,fragmentShader:$,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new oe},palette:{value:H},bgColor:{value:Z}}})),this.scene.add(this.output)}addScene(M){this.scene.add(M)}resize(){this.simulation.resize()}render(){lt.renderer.setRenderTarget(null),lt.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class qt{constructor(M){this.props=M,lt.init(M.$wrapper),B.init(M.$wrapper),B.autoIntensity=M.autoIntensity,B.takeoverDuration=M.takeoverDuration,this.lastUserInteraction=performance.now(),B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new q(B,this,{enabled:M.autoDemo,speed:M.autoSpeed,resumeDelay:M.autoResumeDelay,rampDuration:M.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():I.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(lt.renderer.domElement),this.output=new $t}resize(){lt.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),lt.update(),this.output.update()}loop(){this.running&&(this.render(),O.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,O.current&&(cancelAnimationFrame(O.current),O.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),lt.renderer){const M=lt.renderer.domElement;M&&M.parentNode&&M.parentNode.removeChild(M),lt.renderer.dispose()}}catch{}}}const Se=U.current;Se.style.position=Se.style.position||"relative",Se.style.overflow=Se.style.overflow||"hidden";const It=new qt({$wrapper:Se,autoDemo:S,autoSpeed:b,autoIntensity:E,takeoverDuration:y,autoResumeDelay:x,autoRampDuration:N});A.current=It,(()=>{if(!A.current)return;const z=A.current.output?.simulation;if(!z)return;const M=z.options.resolution;Object.assign(z.options,{mouse_force:o,cursor_size:t,isViscous:n,viscous:a,iterations_viscous:s,iterations_poisson:u,dt:c,BFECC:f,resolution:p,isBounce:d}),p!==M&&z.resize()})(),It.start();const Ye=new IntersectionObserver(z=>{const M=z[0],k=M.isIntersecting&&M.intersectionRatio>0;I.current=k,A.current&&(k&&!document.hidden?A.current.start():A.current.pause())},{threshold:[0,.01,.1]});Ye.observe(Se),P.current=Ye;const We=new ResizeObserver(()=>{A.current&&(R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>{A.current&&A.current.resize()}))});return We.observe(Se),L.current=We,()=>{if(O.current&&cancelAnimationFrame(O.current),L.current)try{L.current.disconnect()}catch{}if(P.current)try{P.current.disconnect()}catch{}A.current&&A.current.dispose(),A.current=null}},[f,t,c,d,n,u,s,o,p,a,_,S,b,E,y,x,N]),Rn.useEffect(()=>{const w=A.current;if(!w)return;const H=w.output?.simulation;if(!H)return;const Z=H.options.resolution;Object.assign(H.options,{mouse_force:o,cursor_size:t,isViscous:n,viscous:a,iterations_viscous:s,iterations_poisson:u,dt:c,BFECC:f,resolution:p,isBounce:d}),w.autoDriver&&(w.autoDriver.enabled=S,w.autoDriver.speed=b,w.autoDriver.resumeDelay=x,w.autoDriver.rampDurationMs=N*1e3,w.autoDriver.mouse&&(w.autoDriver.mouse.autoIntensity=E,w.autoDriver.mouse.takeoverDuration=y)),p!==Z&&H.resize()},[o,t,n,a,s,u,c,f,p,d,S,b,E,y,x,N]),Je.jsx("div",{ref:U,className:`liquid-ether-container ${v||""}`,style:g})}function Tw(){const o=[{label:"About",bgColor:"#2d2d2d",textColor:"#f0f0f0",links:[{label:"Company",ariaLabel:"About Company"},{label:"Careers",ariaLabel:"About Careers"}]},{label:"Projects",bgColor:"#2d2d2d",textColor:"#f0f0f0",links:[{label:"Featured",ariaLabel:"Featured Projects"},{label:"Case Studies",ariaLabel:"Project Case Studies"}]},{label:"Contact",bgColor:"#2d2d2d",textColor:"#f0f0f0",links:[{label:"Email",ariaLabel:"Email us"},{label:"Twitter",ariaLabel:"Twitter"},{label:"LinkedIn",ariaLabel:"LinkedIn"}]}],[t,n]=Rn.useState(null),a=s=>{n(t===s?null:s)};return Je.jsxs(Je.Fragment,{children:[Je.jsx(Ew,{colors:["#f0f0f0","#f0f0f0","#FF9D00"],mouseForce:10,cursorSize:600,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.2,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),Je.jsxs("div",{className:"App",children:[Je.jsx(h1,{logo:QE,logoAlt:"Company Logo",items:o,baseColor:"#f0f0f0",menuColor:"#2d2d2d",buttonBgColor:"#2d2d2d1",buttonTextColor:"#f0f0f0",ease:"power3.out",openIndex:t,toggleMenu:a}),Je.jsx("div",{className:"model-viewer-container"})]})]})}KE.createRoot(document.getElementById("root")).render(Je.jsx(Rn.StrictMode,{children:Je.jsx(Tw,{})}));
