(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();function UE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ed={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function LE(){if(Cv)return Nl;Cv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:u}}return Nl.Fragment=t,Nl.jsx=n,Nl.jsxs=n,Nl}var wv;function NE(){return wv||(wv=1,Ed.exports=LE()),Ed.exports}var dt=NE(),Td={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function OE(){if(Dv)return ue;Dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,S={};function y(z,$,xt){this.props=z,this.context=$,this.refs=S,this.updater=xt||T}y.prototype.isReactComponent={},y.prototype.setState=function(z,$){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,$,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=y.prototype;function L(z,$,xt){this.props=z,this.context=$,this.refs=S,this.updater=xt||T}var R=L.prototype=new N;R.constructor=L,E(R,y.prototype),R.isPureReactComponent=!0;var O=Array.isArray;function P(){}var U={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function b(z,$,xt){var Et=xt.ref;return{$$typeof:o,type:z,key:$,ref:Et!==void 0?Et:null,props:xt}}function w(z,$){return b(z.type,$,z.props)}function H(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function k(z){var $={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(xt){return $[xt]})}var J=/\/+/g;function rt(z,$){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):$.toString(36)}function st(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function($){z.status==="pending"&&(z.status="fulfilled",z.value=$)},function($){z.status==="pending"&&(z.status="rejected",z.reason=$)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,$,xt,Et,Ct){var it=typeof z;(it==="undefined"||it==="boolean")&&(z=null);var K=!1;if(z===null)K=!0;else switch(it){case"bigint":case"string":case"number":K=!0;break;case"object":switch(z.$$typeof){case o:case t:K=!0;break;case _:return K=z._init,B(K(z._payload),$,xt,Et,Ct)}}if(K)return Ct=Ct(z),K=Et===""?"."+rt(z,0):Et,O(Ct)?(xt="",K!=null&&(xt=K.replace(J,"$&/")+"/"),B(Ct,$,xt,"",function(Nt){return Nt})):Ct!=null&&(H(Ct)&&(Ct=w(Ct,xt+(Ct.key==null||z&&z.key===Ct.key?"":(""+Ct.key).replace(J,"$&/")+"/")+K)),$.push(Ct)),1;K=0;var St=Et===""?".":Et+":";if(O(z))for(var wt=0;wt<z.length;wt++)Et=z[wt],it=St+rt(Et,wt),K+=B(Et,$,xt,it,Ct);else if(wt=x(z),typeof wt=="function")for(z=wt.call(z),wt=0;!(Et=z.next()).done;)Et=Et.value,it=St+rt(Et,wt++),K+=B(Et,$,xt,it,Ct);else if(it==="object"){if(typeof z.then=="function")return B(st(z),$,xt,Et,Ct);throw $=String(z),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return K}function X(z,$,xt){if(z==null)return z;var Et=[],Ct=0;return B(z,Et,"","",function(it){return $.call(xt,it,Ct++)}),Et}function q(z){if(z._status===-1){var $=z._result;$=$(),$.then(function(xt){(z._status===0||z._status===-1)&&(z._status=1,z._result=xt)},function(xt){(z._status===0||z._status===-1)&&(z._status=2,z._result=xt)}),z._status===-1&&(z._status=0,z._result=$)}if(z._status===1)return z._result.default;throw z._result}var _t=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Mt={map:X,forEach:function(z,$,xt){X(z,function(){$.apply(this,arguments)},xt)},count:function(z){var $=0;return X(z,function(){$++}),$},toArray:function(z){return X(z,function($){return $})||[]},only:function(z){if(!H(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ue.Activity=g,ue.Children=Mt,ue.Component=y,ue.Fragment=n,ue.Profiler=s,ue.PureComponent=L,ue.StrictMode=a,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ue.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},ue.cache=function(z){return function(){return z.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(z,$,xt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Et=E({},z.props),Ct=z.key;if($!=null)for(it in $.key!==void 0&&(Ct=""+$.key),$)!I.call($,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&$.ref===void 0||(Et[it]=$[it]);var it=arguments.length-2;if(it===1)Et.children=xt;else if(1<it){for(var K=Array(it),St=0;St<it;St++)K[St]=arguments[St+2];Et.children=K}return b(z.type,Ct,Et)},ue.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},ue.createElement=function(z,$,xt){var Et,Ct={},it=null;if($!=null)for(Et in $.key!==void 0&&(it=""+$.key),$)I.call($,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ct[Et]=$[Et]);var K=arguments.length-2;if(K===1)Ct.children=xt;else if(1<K){for(var St=Array(K),wt=0;wt<K;wt++)St[wt]=arguments[wt+2];Ct.children=St}if(z&&z.defaultProps)for(Et in K=z.defaultProps,K)Ct[Et]===void 0&&(Ct[Et]=K[Et]);return b(z,it,Ct)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(z){return{$$typeof:f,render:z}},ue.isValidElement=H,ue.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:q}},ue.memo=function(z,$){return{$$typeof:d,type:z,compare:$===void 0?null:$}},ue.startTransition=function(z){var $=U.T,xt={};U.T=xt;try{var Et=z(),Ct=U.S;Ct!==null&&Ct(xt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(P,_t)}catch(it){_t(it)}finally{$!==null&&xt.types!==null&&($.types=xt.types),U.T=$}},ue.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ue.use=function(z){return U.H.use(z)},ue.useActionState=function(z,$,xt){return U.H.useActionState(z,$,xt)},ue.useCallback=function(z,$){return U.H.useCallback(z,$)},ue.useContext=function(z){return U.H.useContext(z)},ue.useDebugValue=function(){},ue.useDeferredValue=function(z,$){return U.H.useDeferredValue(z,$)},ue.useEffect=function(z,$){return U.H.useEffect(z,$)},ue.useEffectEvent=function(z){return U.H.useEffectEvent(z)},ue.useId=function(){return U.H.useId()},ue.useImperativeHandle=function(z,$,xt){return U.H.useImperativeHandle(z,$,xt)},ue.useInsertionEffect=function(z,$){return U.H.useInsertionEffect(z,$)},ue.useLayoutEffect=function(z,$){return U.H.useLayoutEffect(z,$)},ue.useMemo=function(z,$){return U.H.useMemo(z,$)},ue.useOptimistic=function(z,$){return U.H.useOptimistic(z,$)},ue.useReducer=function(z,$,xt){return U.H.useReducer(z,$,xt)},ue.useRef=function(z){return U.H.useRef(z)},ue.useState=function(z){return U.H.useState(z)},ue.useSyncExternalStore=function(z,$,xt){return U.H.useSyncExternalStore(z,$,xt)},ue.useTransition=function(){return U.H.useTransition()},ue.version="19.2.0",ue}var Uv;function ym(){return Uv||(Uv=1,Td.exports=OE()),Td.exports}var se=ym();const PE=UE(se);var bd={exports:{}},Ol={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function zE(){return Lv||(Lv=1,(function(o){function t(B,X){var q=B.length;B.push(X);t:for(;0<q;){var _t=q-1>>>1,Mt=B[_t];if(0<s(Mt,X))B[_t]=X,B[q]=Mt,q=_t;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var X=B[0],q=B.pop();if(q!==X){B[0]=q;t:for(var _t=0,Mt=B.length,z=Mt>>>1;_t<z;){var $=2*(_t+1)-1,xt=B[$],Et=$+1,Ct=B[Et];if(0>s(xt,q))Et<Mt&&0>s(Ct,xt)?(B[_t]=Ct,B[Et]=q,_t=Et):(B[_t]=xt,B[$]=q,_t=$);else if(Et<Mt&&0>s(Ct,q))B[_t]=Ct,B[Et]=q,_t=Et;else break t}}return X}function s(B,X){var q=B.sortIndex-X.sortIndex;return q!==0?q:B.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,x=!1,T=!1,E=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function R(B){for(var X=n(d);X!==null;){if(X.callback===null)a(d);else if(X.startTime<=B)a(d),X.sortIndex=X.expirationTime,t(p,X);else break;X=n(d)}}function O(B){if(E=!1,R(B),!T)if(n(p)!==null)T=!0,P||(P=!0,k());else{var X=n(d);X!==null&&st(O,X.startTime-B)}}var P=!1,U=-1,I=5,b=-1;function w(){return S?!0:!(o.unstable_now()-b<I)}function H(){if(S=!1,P){var B=o.unstable_now();b=B;var X=!0;try{t:{T=!1,E&&(E=!1,N(U),U=-1),x=!0;var q=v;try{e:{for(R(B),g=n(p);g!==null&&!(g.expirationTime>B&&w());){var _t=g.callback;if(typeof _t=="function"){g.callback=null,v=g.priorityLevel;var Mt=_t(g.expirationTime<=B);if(B=o.unstable_now(),typeof Mt=="function"){g.callback=Mt,R(B),X=!0;break e}g===n(p)&&a(p),R(B)}else a(p);g=n(p)}if(g!==null)X=!0;else{var z=n(d);z!==null&&st(O,z.startTime-B),X=!1}}break t}finally{g=null,v=q,x=!1}X=void 0}}finally{X?k():P=!1}}}var k;if(typeof L=="function")k=function(){L(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,rt=J.port2;J.port1.onmessage=H,k=function(){rt.postMessage(null)}}else k=function(){y(H,0)};function st(B,X){U=y(function(){B(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var q=v;v=X;try{return B()}finally{v=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=v;v=B;try{return X()}finally{v=q}},o.unstable_scheduleCallback=function(B,X,q){var _t=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?_t+q:_t):q=_t,B){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=q+Mt,B={id:_++,callback:X,priorityLevel:B,startTime:q,expirationTime:Mt,sortIndex:-1},q>_t?(B.sortIndex=q,t(d,B),n(p)===null&&B===n(d)&&(E?(N(U),U=-1):E=!0,st(O,q-_t))):(B.sortIndex=Mt,t(p,B),T||x||(T=!0,P||(P=!0,k()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var X=v;return function(){var q=v;v=X;try{return B.apply(this,arguments)}finally{v=q}}}})(Rd)),Rd}var Nv;function BE(){return Nv||(Nv=1,Ad.exports=zE()),Ad.exports}var Cd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function FE(){if(Ov)return Fn;Ov=1;var o=ym();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,_)},Fn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},Fn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Fn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Fn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Fn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Fn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Fn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Fn.requestFormReset=function(p){a.d.r(p)},Fn.unstable_batchedUpdates=function(p,d){return p(d)},Fn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},Fn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Fn.version="19.2.0",Fn}var Pv;function IE(){if(Pv)return Cd.exports;Pv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Cd.exports=FE(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function HE(){if(zv)return Ol;zv=1;var o=BE(),t=ym(),n=IE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var M=!1,C=h.child;C;){if(C===r){M=!0,r=h,l=m;break}if(C===l){M=!0,l=h,r=m;break}C=C.sibling}if(!M){for(C=m.child;C;){if(C===r){M=!0,r=m,l=h;break}if(C===l){M=!0,l=m,r=h;break}C=C.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return i=e.displayName||null,i!==null?i:rt(e.type)||"Memo";case I:i=e._payload,e=e._init;try{return rt(e(i))}catch{}}return null}var st=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},_t=[],Mt=-1;function z(e){return{current:e}}function $(e){0>Mt||(e.current=_t[Mt],_t[Mt]=null,Mt--)}function xt(e,i){Mt++,_t[Mt]=e.current,e.current=i}var Et=z(null),Ct=z(null),it=z(null),K=z(null);function St(e,i){switch(xt(it,i),xt(Ct,e),xt(Et,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Q0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Q0(i),e=J0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(Et),xt(Et,e)}function wt(){$(Et),$(Ct),$(it)}function Nt(e){e.memoizedState!==null&&xt(K,e);var i=Et.current,r=J0(i,e.type);i!==r&&(xt(Ct,e),xt(Et,r))}function ne(e){Ct.current===e&&($(Et),$(Ct)),K.current===e&&($(K),wl._currentValue=q)}var me,G;function oe(e){if(me===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);me=i&&i[1]||"",G=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+me+e+G}var jt=!1;function te(e,i){if(!e||jt)return"";jt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var at=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){at=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){at=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],C=m[1];if(M&&C){var V=M.split(`
`),et=C.split(`
`);for(h=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;h<et.length&&!et[h].includes("DetermineComponentFrameRoot");)h++;if(l===V.length||h===et.length)for(l=V.length-1,h=et.length-1;1<=l&&0<=h&&V[l]!==et[h];)h--;for(;1<=l&&0<=h;l--,h--)if(V[l]!==et[h]){if(l!==1||h!==1)do if(l--,h--,0>h||V[l]!==et[h]){var ht=`
`+V[l].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=l&&0<=h);break}}}finally{jt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?oe(r):""}function Vt(e,i){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==i&&i!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return oe("Activity");default:return""}}function Le(e){try{var i="",r=null;do i+=Vt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Bt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,an=o.unstable_cancelCallback,tn=o.unstable_shouldYield,F=o.unstable_requestPaint,A=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Tt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,Yt=o.log,Zt=o.unstable_setDisableYieldValue,At=null,Ut=null;function Qt(e){if(typeof Yt=="function"&&Zt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(At,e)}catch{}}var It=Math.clz32?Math.clz32:Y,Ot=Math.log,ce=Math.LN2;function Y(e){return e>>>=0,e===0?32:31-(Ot(e)/ce|0)|0}var Rt=256,Lt=262144,Ht=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~m,l!==0?h=bt(l):(M&=C,M!==0?h=bt(M):r||(r=C&~e,r!==0&&(h=bt(r))))):(C=l&~m,C!==0?h=bt(C):M!==0?h=bt(M):r||(r=l&~e,r!==0&&(h=bt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Gt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function le(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function Ae(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function kn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ai(e,i,r,l,h,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,et=e.hiddenUpdates;for(r=M&~r;0<r;){var ht=31-It(r),gt=1<<ht;C[ht]=0,V[ht]=-1;var at=et[ht];if(at!==null)for(et[ht]=null,ht=0;ht<at.length;ht++){var ct=at[ht];ct!==null&&(ct.lane&=-536870913)}r&=~gt}l!==0&&ko(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~i))}function ko(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-It(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Ki(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-It(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Ts(e,i){var r=i&-i;return r=(r&42)!==0?1:bs(r),(r&(e.suspendedLanes|i))!==0?0:r}function bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function As(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Nr(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Sv(e.type))}function Xo(e,i){var r=X.p;try{return X.p=e,i()}finally{X.p=r}}var li=Math.random().toString(36).slice(2),dn="__reactFiber$"+li,Dn="__reactProps$"+li,Wa="__reactContainer$"+li,Wo="__reactEvents$"+li,gf="__reactListeners$"+li,vf="__reactHandles$"+li,hu="__reactResources$"+li,Or="__reactMarker$"+li;function D(e){delete e[dn],delete e[Dn],delete e[Wo],delete e[gf],delete e[vf]}function j(e){var i=e[dn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Wa]||r[dn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=rv(e);e!==null;){if(r=e[dn])return r;e=rv(e)}return i}e=r,r=e.parentNode}return null}function ot(e){if(e=e[dn]||e[Wa]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function lt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Q(e){var i=e[hu];return i||(i=e[hu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(e){e[Or]=!0}var Pt=new Set,Xt={};function Ft(e,i){Jt(e,i),Jt(e+"Capture",i)}function Jt(e,i){for(Xt[e]=i,e=0;e<i.length;e++)Pt.add(i[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},_e={};function Oe(e){return Bt.call(_e,e)?!0:Bt.call($t,e)?!1:re.test(e)?_e[e]=!0:($t[e]=!0,!1)}function We(e,i,r){if(Oe(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Pe(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function ge(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ze(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Re(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Un(e){if(!e._valueTracker){var i=Ze(e)?"checked":"value";e._valueTracker=Re(e,i,""+e[i])}}function fa(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Ze(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pr=/[\n"\\]/g;function xe(e){return e.replace(Pr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Bn(e,i,r,l,h,m,M,C){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Wt(i)):e.value!==""+Wt(i)&&(e.value=""+Wt(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Sn(e,M,Wt(i)):r!=null?Sn(e,M,Wt(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Wt(C):e.removeAttribute("name")}function Xn(e,i,r,l,h,m,M,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Un(e);return}r=r!=null?""+Wt(r):"",i=i!=null?""+Wt(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Un(e)}function Sn(e,i,r){i==="number"&&An(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function ln(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Wt(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Rs(e,i,r){if(i!=null&&(i=""+Wt(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Wt(r):""}function Qi(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(st(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Wt(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Un(e)}function Cs(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var AS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jm(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||AS.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Zm(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&jm(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&jm(e,m,i[m])}function yf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var RS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),CS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function du(e){return CS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ha(){}var xf=null;function Sf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Ds=null;function Km(e){var i=ot(e);if(i&&(e=i.stateNode)){var r=e[Dn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Bn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xe(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Dn]||null;if(!h)throw Error(a(90));Bn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&fa(l)}break t;case"textarea":Rs(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&ln(e,!!r.multiple,i,!1)}}}var Mf=!1;function Qm(e,i,r){if(Mf)return e(i,r);Mf=!0;try{var l=e(i);return l}finally{if(Mf=!1,(ws!==null||Ds!==null)&&(tc(),ws&&(i=ws,e=Ds,Ds=ws=null,Km(i),e)))for(i=0;i<e.length;i++)Km(e[i])}}function qo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Dn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=!1;if(da)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{Ef=!1}var qa=null,Tf=null,pu=null;function Jm(){if(pu)return pu;var e,i=Tf,r=i.length,l,h="value"in qa?qa.value:qa.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var M=r-e;for(l=1;l<=M&&i[r-l]===h[m-l];l++);return pu=h.slice(e,1<l?1-l:void 0)}function mu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function _u(){return!0}function $m(){return!1}function jn(e){function i(r,l,h,m,M){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_u:$m,this.isPropagationStopped=$m,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),i}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=jn(zr),jo=g({},zr,{view:0,detail:0}),wS=jn(jo),bf,Af,Zo,vu=g({},jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(bf=e.screenX-Zo.screenX,Af=e.screenY-Zo.screenY):Af=bf=0,Zo=e),bf)},movementY:function(e){return"movementY"in e?e.movementY:Af}}),t_=jn(vu),DS=g({},vu,{dataTransfer:0}),US=jn(DS),LS=g({},jo,{relatedTarget:0}),Rf=jn(LS),NS=g({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=jn(NS),PS=g({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zS=jn(PS),BS=g({},zr,{data:0}),e_=jn(BS),FS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=HS[e])?!!i[e]:!1}function Cf(){return GS}var VS=g({},jo,{key:function(e){if(e.key){var i=FS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=mu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?IS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(e){return e.type==="keypress"?mu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kS=jn(VS),XS=g({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n_=jn(XS),WS=g({},jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),qS=jn(WS),YS=g({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=jn(YS),ZS=g({},vu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=jn(ZS),QS=g({},zr,{newState:0,oldState:0}),JS=jn(QS),$S=[9,13,27,32],wf=da&&"CompositionEvent"in window,Ko=null;da&&"documentMode"in document&&(Ko=document.documentMode);var tM=da&&"TextEvent"in window&&!Ko,i_=da&&(!wf||Ko&&8<Ko&&11>=Ko),a_=" ",r_=!1;function s_(e,i){switch(e){case"keyup":return $S.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function eM(e,i){switch(e){case"compositionend":return o_(i);case"keypress":return i.which!==32?null:(r_=!0,a_);case"textInput":return e=i.data,e===a_&&r_?null:e;default:return null}}function nM(e,i){if(Us)return e==="compositionend"||!wf&&s_(e,i)?(e=Jm(),pu=Tf=qa=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return i_&&i.locale!=="ko"?null:i.data;default:return null}}var iM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!iM[e.type]:i==="textarea"}function u_(e,i,r,l){ws?Ds?Ds.push(l):Ds=[l]:ws=l,i=oc(i,"onChange"),0<i.length&&(r=new gu("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Qo=null,Jo=null;function aM(e){W0(e,0)}function yu(e){var i=lt(e);if(fa(i))return e}function c_(e,i){if(e==="change")return i}var f_=!1;if(da){var Df;if(da){var Uf="oninput"in document;if(!Uf){var h_=document.createElement("div");h_.setAttribute("oninput","return;"),Uf=typeof h_.oninput=="function"}Df=Uf}else Df=!1;f_=Df&&(!document.documentMode||9<document.documentMode)}function d_(){Qo&&(Qo.detachEvent("onpropertychange",p_),Jo=Qo=null)}function p_(e){if(e.propertyName==="value"&&yu(Jo)){var i=[];u_(i,Jo,e,Sf(e)),Qm(aM,i)}}function rM(e,i,r){e==="focusin"?(d_(),Qo=i,Jo=r,Qo.attachEvent("onpropertychange",p_)):e==="focusout"&&d_()}function sM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yu(Jo)}function oM(e,i){if(e==="click")return yu(i)}function lM(e,i){if(e==="input"||e==="change")return yu(i)}function uM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ui=typeof Object.is=="function"?Object.is:uM;function $o(e,i){if(ui(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!Bt.call(i,h)||!ui(e[h],i[h]))return!1}return!0}function m_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function __(e,i){var r=m_(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=m_(r)}}function g_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?g_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function v_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=An(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=An(e.document)}return i}function Lf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var cM=da&&"documentMode"in document&&11>=document.documentMode,Ls=null,Nf=null,tl=null,Of=!1;function y_(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Of||Ls==null||Ls!==An(l)||(l=Ls,"selectionStart"in l&&Lf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),tl&&$o(tl,l)||(tl=l,l=oc(Nf,"onSelect"),0<l.length&&(i=new gu("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ls)))}function Br(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Ns={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionrun:Br("Transition","TransitionRun"),transitionstart:Br("Transition","TransitionStart"),transitioncancel:Br("Transition","TransitionCancel"),transitionend:Br("Transition","TransitionEnd")},Pf={},x_={};da&&(x_=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Fr(e){if(Pf[e])return Pf[e];if(!Ns[e])return e;var i=Ns[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in x_)return Pf[e]=i[r];return e}var S_=Fr("animationend"),M_=Fr("animationiteration"),E_=Fr("animationstart"),fM=Fr("transitionrun"),hM=Fr("transitionstart"),dM=Fr("transitioncancel"),T_=Fr("transitionend"),b_=new Map,zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zf.push("scrollEnd");function Hi(e,i){b_.set(e,i),Ft(i,[e])}var xu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ri=[],Os=0,Bf=0;function Su(){for(var e=Os,i=Bf=Os=0;i<e;){var r=Ri[i];Ri[i++]=null;var l=Ri[i];Ri[i++]=null;var h=Ri[i];Ri[i++]=null;var m=Ri[i];if(Ri[i++]=null,l!==null&&h!==null){var M=l.pending;M===null?h.next=h:(h.next=M.next,M.next=h),l.pending=h}m!==0&&A_(r,h,m)}}function Mu(e,i,r,l){Ri[Os++]=e,Ri[Os++]=i,Ri[Os++]=r,Ri[Os++]=l,Bf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ff(e,i,r,l){return Mu(e,i,r,l),Eu(e)}function Ir(e,i){return Mu(e,null,null,i),Eu(e)}function A_(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-It(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Eu(e){if(50<Ml)throw Ml=0,Yh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ps={};function pM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(e,i,r,l){return new pM(e,i,r,l)}function If(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,i){var r=e.alternate;return r===null?(r=ci(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function R_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Tu(e,i,r,l,h,m){var M=0;if(l=e,typeof e=="function")If(e)&&(M=1);else if(typeof e=="string")M=yE(e,r,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=ci(31,r,i,h),e.elementType=b,e.lanes=m,e;case E:return Hr(r.children,h,m,i);case S:M=8,h|=24;break;case y:return e=ci(12,r,i,h|2),e.elementType=y,e.lanes=m,e;case O:return e=ci(13,r,i,h),e.elementType=O,e.lanes=m,e;case P:return e=ci(19,r,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:M=10;break t;case N:M=9;break t;case R:M=11;break t;case U:M=14;break t;case I:M=16,l=null;break t}M=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ci(M,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function Hr(e,i,r,l){return e=ci(7,e,l,i),e.lanes=r,e}function Hf(e,i,r){return e=ci(6,e,null,i),e.lanes=r,e}function C_(e){var i=ci(18,null,null,0);return i.stateNode=e,i}function Gf(e,i,r){return i=ci(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var w_=new WeakMap;function Ci(e,i){if(typeof e=="object"&&e!==null){var r=w_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Le(i)},w_.set(e,i),i)}return{value:e,source:i,stack:Le(i)}}var zs=[],Bs=0,bu=null,el=0,wi=[],Di=0,Ya=null,Ji=1,$i="";function ma(e,i){zs[Bs++]=el,zs[Bs++]=bu,bu=e,el=i}function D_(e,i,r){wi[Di++]=Ji,wi[Di++]=$i,wi[Di++]=Ya,Ya=e;var l=Ji;e=$i;var h=32-It(l)-1;l&=~(1<<h),r+=1;var m=32-It(i)+h;if(30<m){var M=h-h%5;m=(l&(1<<M)-1).toString(32),l>>=M,h-=M,Ji=1<<32-It(i)+h|r<<h|l,$i=m+e}else Ji=1<<m|r<<h|l,$i=e}function Vf(e){e.return!==null&&(ma(e,1),D_(e,1,0))}function kf(e){for(;e===bu;)bu=zs[--Bs],zs[Bs]=null,el=zs[--Bs],zs[Bs]=null;for(;e===Ya;)Ya=wi[--Di],wi[Di]=null,$i=wi[--Di],wi[Di]=null,Ji=wi[--Di],wi[Di]=null}function U_(e,i){wi[Di++]=Ji,wi[Di++]=$i,wi[Di++]=Ya,Ji=i.id,$i=i.overflow,Ya=e}var Ln=null,Ke=null,Ee=!1,ja=null,Ui=!1,Xf=Error(a(519));function Za(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw nl(Ci(i,e)),Xf}function L_(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[dn]=e,i[Dn]=l,r){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(r=0;r<Tl.length;r++)ye(Tl[r],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),Xn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),Qi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Z0(i.textContent,r)?(l.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),l.onScroll!=null&&ye("scroll",i),l.onScrollEnd!=null&&ye("scrollend",i),l.onClick!=null&&(i.onclick=ha),i=!0):i=!1,i||Za(e,!0)}function N_(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Ln=Ln.return}}function Fs(e){if(e!==Ln)return!1;if(!Ee)return N_(e),Ee=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||ld(e.type,e.memoizedProps)),r=!r),r&&Ke&&Za(e),N_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ke=av(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ke=av(e)}else i===27?(i=Ke,ur(e.type)?(e=dd,dd=null,Ke=e):Ke=i):Ke=Ln?Ni(e.stateNode.nextSibling):null;return!0}function Gr(){Ke=Ln=null,Ee=!1}function Wf(){var e=ja;return e!==null&&(Jn===null?Jn=e:Jn.push.apply(Jn,e),ja=null),e}function nl(e){ja===null?ja=[e]:ja.push(e)}var qf=z(null),Vr=null,_a=null;function Ka(e,i,r){xt(qf,i._currentValue),i._currentValue=r}function ga(e){e._currentValue=qf.current,$(qf)}function Yf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function jf(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var M=h.child;m=m.firstContext;t:for(;m!==null;){var C=m;m=h;for(var V=0;V<i.length;V++)if(C.context===i[V]){m.lanes|=r,C=m.alternate,C!==null&&(C.lanes|=r),Yf(m.return,r,e),l||(M=null);break t}m=C.next}}else if(h.tag===18){if(M=h.return,M===null)throw Error(a(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),Yf(M,r,e),M=null}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===e){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}}function Is(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var M=h.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var C=h.type;ui(h.pendingProps.value,M.value)||(e!==null?e.push(C):e=[C])}}else if(h===K.current){if(M=h.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(wl):e=[wl])}h=h.return}e!==null&&jf(i,e,r,l),i.flags|=262144}function Au(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kr(e){Vr=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return O_(Vr,e)}function Ru(e,i){return Vr===null&&kr(e),O_(e,i)}function O_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},_a===null){if(e===null)throw Error(a(308));_a=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else _a=_a.next=i;return r}var mM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},_M=o.unstable_scheduleCallback,gM=o.unstable_NormalPriority,pn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zf(){return{controller:new mM,data:new Map,refCount:0}}function il(e){e.refCount--,e.refCount===0&&_M(gM,function(){e.controller.abort()})}var al=null,Kf=0,Hs=0,Gs=null;function vM(e,i){if(al===null){var r=al=[];Kf=0,Hs=$h(),Gs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Kf++,i.then(P_,P_),i}function P_(){if(--Kf===0&&al!==null){Gs!==null&&(Gs.status="fulfilled");var e=al;al=null,Hs=0,Gs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function yM(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var z_=B.S;B.S=function(e,i){y0=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&vM(e,i),z_!==null&&z_(e,i)};var Xr=z(null);function Qf(){var e=Xr.current;return e!==null?e:qe.pooledCache}function Cu(e,i){i===null?xt(Xr,Xr.current):xt(Xr,i.pool)}function B_(){var e=Qf();return e===null?null:{parent:pn._currentValue,pool:e}}var Vs=Error(a(460)),Jf=Error(a(474)),wu=Error(a(542)),Du={then:function(){}};function F_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function I_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(ha,ha),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,G_(e),e;default:if(typeof i.status=="string")i.then(ha,ha);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,G_(e),e}throw qr=i,Vs}}function Wr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(qr=r,Vs):r}}var qr=null;function H_(){if(qr===null)throw Error(a(459));var e=qr;return qr=null,e}function G_(e){if(e===Vs||e===wu)throw Error(a(483))}var ks=null,rl=0;function Uu(e){var i=rl;return rl+=1,ks===null&&(ks=[]),I_(ks,e,i)}function sl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Lu(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function V_(e){function i(Z,W){if(e){var tt=Z.deletions;tt===null?(Z.deletions=[W],Z.flags|=16):tt.push(W)}}function r(Z,W){if(!e)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function l(Z){for(var W=new Map;Z!==null;)Z.key!==null?W.set(Z.key,Z):W.set(Z.index,Z),Z=Z.sibling;return W}function h(Z,W){return Z=pa(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,tt){return Z.index=tt,e?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<W?(Z.flags|=67108866,W):tt):(Z.flags|=67108866,W)):(Z.flags|=1048576,W)}function M(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,W,tt,mt){return W===null||W.tag!==6?(W=Hf(tt,Z.mode,mt),W.return=Z,W):(W=h(W,tt),W.return=Z,W)}function V(Z,W,tt,mt){var ee=tt.type;return ee===E?ht(Z,W,tt.props.children,mt,tt.key):W!==null&&(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===I&&Wr(ee)===W.type)?(W=h(W,tt.props),sl(W,tt),W.return=Z,W):(W=Tu(tt.type,tt.key,tt.props,null,Z.mode,mt),sl(W,tt),W.return=Z,W)}function et(Z,W,tt,mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==tt.containerInfo||W.stateNode.implementation!==tt.implementation?(W=Gf(tt,Z.mode,mt),W.return=Z,W):(W=h(W,tt.children||[]),W.return=Z,W)}function ht(Z,W,tt,mt,ee){return W===null||W.tag!==7?(W=Hr(tt,Z.mode,mt,ee),W.return=Z,W):(W=h(W,tt),W.return=Z,W)}function gt(Z,W,tt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Hf(""+W,Z.mode,tt),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return tt=Tu(W.type,W.key,W.props,null,Z.mode,tt),sl(tt,W),tt.return=Z,tt;case T:return W=Gf(W,Z.mode,tt),W.return=Z,W;case I:return W=Wr(W),gt(Z,W,tt)}if(st(W)||k(W))return W=Hr(W,Z.mode,tt,null),W.return=Z,W;if(typeof W.then=="function")return gt(Z,Uu(W),tt);if(W.$$typeof===L)return gt(Z,Ru(Z,W),tt);Lu(Z,W)}return null}function at(Z,W,tt,mt){var ee=W!==null?W.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return ee!==null?null:C(Z,W,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case x:return tt.key===ee?V(Z,W,tt,mt):null;case T:return tt.key===ee?et(Z,W,tt,mt):null;case I:return tt=Wr(tt),at(Z,W,tt,mt)}if(st(tt)||k(tt))return ee!==null?null:ht(Z,W,tt,mt,null);if(typeof tt.then=="function")return at(Z,W,Uu(tt),mt);if(tt.$$typeof===L)return at(Z,W,Ru(Z,tt),mt);Lu(Z,tt)}return null}function ct(Z,W,tt,mt,ee){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(tt)||null,C(W,Z,""+mt,ee);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case x:return Z=Z.get(mt.key===null?tt:mt.key)||null,V(W,Z,mt,ee);case T:return Z=Z.get(mt.key===null?tt:mt.key)||null,et(W,Z,mt,ee);case I:return mt=Wr(mt),ct(Z,W,tt,mt,ee)}if(st(mt)||k(mt))return Z=Z.get(tt)||null,ht(W,Z,mt,ee,null);if(typeof mt.then=="function")return ct(Z,W,tt,Uu(mt),ee);if(mt.$$typeof===L)return ct(Z,W,tt,Ru(W,mt),ee);Lu(W,mt)}return null}function kt(Z,W,tt,mt){for(var ee=null,we=null,qt=W,he=W=0,Me=null;qt!==null&&he<tt.length;he++){qt.index>he?(Me=qt,qt=null):Me=qt.sibling;var De=at(Z,qt,tt[he],mt);if(De===null){qt===null&&(qt=Me);break}e&&qt&&De.alternate===null&&i(Z,qt),W=m(De,W,he),we===null?ee=De:we.sibling=De,we=De,qt=Me}if(he===tt.length)return r(Z,qt),Ee&&ma(Z,he),ee;if(qt===null){for(;he<tt.length;he++)qt=gt(Z,tt[he],mt),qt!==null&&(W=m(qt,W,he),we===null?ee=qt:we.sibling=qt,we=qt);return Ee&&ma(Z,he),ee}for(qt=l(qt);he<tt.length;he++)Me=ct(qt,Z,he,tt[he],mt),Me!==null&&(e&&Me.alternate!==null&&qt.delete(Me.key===null?he:Me.key),W=m(Me,W,he),we===null?ee=Me:we.sibling=Me,we=Me);return e&&qt.forEach(function(pr){return i(Z,pr)}),Ee&&ma(Z,he),ee}function ie(Z,W,tt,mt){if(tt==null)throw Error(a(151));for(var ee=null,we=null,qt=W,he=W=0,Me=null,De=tt.next();qt!==null&&!De.done;he++,De=tt.next()){qt.index>he?(Me=qt,qt=null):Me=qt.sibling;var pr=at(Z,qt,De.value,mt);if(pr===null){qt===null&&(qt=Me);break}e&&qt&&pr.alternate===null&&i(Z,qt),W=m(pr,W,he),we===null?ee=pr:we.sibling=pr,we=pr,qt=Me}if(De.done)return r(Z,qt),Ee&&ma(Z,he),ee;if(qt===null){for(;!De.done;he++,De=tt.next())De=gt(Z,De.value,mt),De!==null&&(W=m(De,W,he),we===null?ee=De:we.sibling=De,we=De);return Ee&&ma(Z,he),ee}for(qt=l(qt);!De.done;he++,De=tt.next())De=ct(qt,Z,he,De.value,mt),De!==null&&(e&&De.alternate!==null&&qt.delete(De.key===null?he:De.key),W=m(De,W,he),we===null?ee=De:we.sibling=De,we=De);return e&&qt.forEach(function(DE){return i(Z,DE)}),Ee&&ma(Z,he),ee}function Ve(Z,W,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case x:t:{for(var ee=tt.key;W!==null;){if(W.key===ee){if(ee=tt.type,ee===E){if(W.tag===7){r(Z,W.sibling),mt=h(W,tt.props.children),mt.return=Z,Z=mt;break t}}else if(W.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===I&&Wr(ee)===W.type){r(Z,W.sibling),mt=h(W,tt.props),sl(mt,tt),mt.return=Z,Z=mt;break t}r(Z,W);break}else i(Z,W);W=W.sibling}tt.type===E?(mt=Hr(tt.props.children,Z.mode,mt,tt.key),mt.return=Z,Z=mt):(mt=Tu(tt.type,tt.key,tt.props,null,Z.mode,mt),sl(mt,tt),mt.return=Z,Z=mt)}return M(Z);case T:t:{for(ee=tt.key;W!==null;){if(W.key===ee)if(W.tag===4&&W.stateNode.containerInfo===tt.containerInfo&&W.stateNode.implementation===tt.implementation){r(Z,W.sibling),mt=h(W,tt.children||[]),mt.return=Z,Z=mt;break t}else{r(Z,W);break}else i(Z,W);W=W.sibling}mt=Gf(tt,Z.mode,mt),mt.return=Z,Z=mt}return M(Z);case I:return tt=Wr(tt),Ve(Z,W,tt,mt)}if(st(tt))return kt(Z,W,tt,mt);if(k(tt)){if(ee=k(tt),typeof ee!="function")throw Error(a(150));return tt=ee.call(tt),ie(Z,W,tt,mt)}if(typeof tt.then=="function")return Ve(Z,W,Uu(tt),mt);if(tt.$$typeof===L)return Ve(Z,W,Ru(Z,tt),mt);Lu(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,W!==null&&W.tag===6?(r(Z,W.sibling),mt=h(W,tt),mt.return=Z,Z=mt):(r(Z,W),mt=Hf(tt,Z.mode,mt),mt.return=Z,Z=mt),M(Z)):r(Z,W)}return function(Z,W,tt,mt){try{rl=0;var ee=Ve(Z,W,tt,mt);return ks=null,ee}catch(qt){if(qt===Vs||qt===wu)throw qt;var we=ci(29,qt,null,Z.mode);return we.lanes=mt,we.return=Z,we}finally{}}}var Yr=V_(!0),k_=V_(!1),Qa=!1;function $f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function th(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Eu(e),A_(e,null,r),i}return Mu(e,l,i,r),Eu(e)}function ol(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Ki(e,r)}}function eh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var nh=!1;function ll(){if(nh){var e=Gs;if(e!==null)throw e}}function ul(e,i,r,l){nh=!1;var h=e.updateQueue;Qa=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,C=h.shared.pending;if(C!==null){h.shared.pending=null;var V=C,et=V.next;V.next=null,M===null?m=et:M.next=et,M=V;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,C=ht.lastBaseUpdate,C!==M&&(C===null?ht.firstBaseUpdate=et:C.next=et,ht.lastBaseUpdate=V))}if(m!==null){var gt=h.baseState;M=0,ht=et=V=null,C=m;do{var at=C.lane&-536870913,ct=at!==C.lane;if(ct?(Se&at)===at:(l&at)===at){at!==0&&at===Hs&&(nh=!0),ht!==null&&(ht=ht.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var kt=e,ie=C;at=i;var Ve=r;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){gt=kt.call(Ve,gt,at);break t}gt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,at=typeof kt=="function"?kt.call(Ve,gt,at):kt,at==null)break t;gt=g({},gt,at);break t;case 2:Qa=!0}}at=C.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ht===null?(et=ht=ct,V=gt):ht=ht.next=ct,M|=at;if(C=C.next,C===null){if(C=h.shared.pending,C===null)break;ct=C,C=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);ht===null&&(V=gt),h.baseState=V,h.firstBaseUpdate=et,h.lastBaseUpdate=ht,m===null&&(h.shared.lanes=0),ar|=M,e.lanes=M,e.memoizedState=gt}}function X_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function W_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)X_(r[e],i)}var Xs=z(null),Nu=z(0);function q_(e,i){e=Aa,xt(Nu,e),xt(Xs,i),Aa=e|i.baseLanes}function ih(){xt(Nu,Aa),xt(Xs,Xs.current)}function ah(){Aa=Nu.current,$(Xs),$(Nu)}var fi=z(null),Li=null;function tr(e){var i=e.alternate;xt(un,un.current&1),xt(fi,e),Li===null&&(i===null||Xs.current!==null||i.memoizedState!==null)&&(Li=e)}function rh(e){xt(un,un.current),xt(fi,e),Li===null&&(Li=e)}function Y_(e){e.tag===22?(xt(un,un.current),xt(fi,e),Li===null&&(Li=e)):er()}function er(){xt(un,un.current),xt(fi,fi.current)}function hi(e){$(fi),Li===e&&(Li=null),$(un)}var un=z(0);function Ou(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||fd(r)||hd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var va=0,fe=null,He=null,mn=null,Pu=!1,Ws=!1,jr=!1,zu=0,cl=0,qs=null,xM=0;function rn(){throw Error(a(321))}function sh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ui(e[r],i[r]))return!1;return!0}function oh(e,i,r,l,h,m){return va=m,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Dg:Mh,jr=!1,m=r(l,h),jr=!1,Ws&&(m=Z_(i,r,l,h)),j_(e),m}function j_(e){B.H=dl;var i=He!==null&&He.next!==null;if(va=0,mn=He=fe=null,Pu=!1,cl=0,qs=null,i)throw Error(a(300));e===null||_n||(e=e.dependencies,e!==null&&Au(e)&&(_n=!0))}function Z_(e,i,r,l){fe=e;var h=0;do{if(Ws&&(qs=null),cl=0,Ws=!1,25<=h)throw Error(a(301));if(h+=1,mn=He=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}B.H=Ug,m=i(r,l)}while(Ws);return m}function SM(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?fl(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(fe.flags|=1024),i}function lh(){var e=zu!==0;return zu=0,e}function uh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function ch(e){if(Pu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Pu=!1}va=0,mn=He=fe=null,Ws=!1,cl=zu=0,qs=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?fe.memoizedState=mn=e:mn=mn.next=e,mn}function cn(){if(He===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=mn===null?fe.memoizedState:mn.next;if(i!==null)mn=i,He=e;else{if(e===null)throw fe.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},mn===null?fe.memoizedState=mn=e:mn=mn.next=e}return mn}function Bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fl(e){var i=cl;return cl+=1,qs===null&&(qs=[]),e=I_(qs,e,i),i=fe,(mn===null?i.memoizedState:mn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Dg:Mh),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fl(e);if(e.$$typeof===L)return Nn(e)}throw Error(a(438,String(e)))}function fh(e){var i=null,r=fe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Bu(),fe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=w;return i.index++,r}function ya(e,i){return typeof i=="function"?i(e):i}function Iu(e){var i=cn();return hh(i,He,e)}function hh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var C=M=null,V=null,et=i,ht=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(Se&gt)===gt:(va&gt)===gt){var at=et.revertLane;if(at===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===Hs&&(ht=!0);else if((va&at)===at){et=et.next,at===Hs&&(ht=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(C=V=gt,M=m):V=V.next=gt,fe.lanes|=at,ar|=at;gt=et.action,jr&&r(m,gt),m=et.hasEagerState?et.eagerState:r(m,gt)}else at={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(C=V=at,M=m):V=V.next=at,fe.lanes|=gt,ar|=gt;et=et.next}while(et!==null&&et!==i);if(V===null?M=m:V.next=C,!ui(m,e.memoizedState)&&(_n=!0,ht&&(r=Gs,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=V,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function dh(e){var i=cn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var M=h=h.next;do m=e(m,M.action),M=M.next;while(M!==h);ui(m,i.memoizedState)||(_n=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function K_(e,i,r){var l=fe,h=cn(),m=Ee;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!ui((He||h).memoizedState,r);if(M&&(h.memoizedState=r,_n=!0),h=h.queue,_h($_.bind(null,l,h,e),[e]),h.getSnapshot!==i||M||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Ys(9,{destroy:void 0},J_.bind(null,l,h,r,i),null),qe===null)throw Error(a(349));m||(va&127)!==0||Q_(l,i,r)}return r}function Q_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=fe.updateQueue,i===null?(i=Bu(),fe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function J_(e,i,r,l){i.value=r,i.getSnapshot=l,tg(i)&&eg(e)}function $_(e,i,r){return r(function(){tg(i)&&eg(e)})}function tg(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ui(e,r)}catch{return!0}}function eg(e){var i=Ir(e,2);i!==null&&$n(i,e,2)}function ph(e){var i=Wn();if(typeof e=="function"){var r=e;if(e=r(),jr){Qt(!0);try{r()}finally{Qt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},i}function ng(e,i,r,l){return e.baseState=r,hh(e,He,typeof l=="function"?l:ya)}function MM(e,i,r,l,h){if(Vu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};B.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,ig(i,m)):(m.next=r.next,i.pending=r.next=m)}}function ig(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=B.T,M={};B.T=M;try{var C=r(h,l),V=B.S;V!==null&&V(M,C),ag(e,i,C)}catch(et){mh(e,i,et)}finally{m!==null&&M.types!==null&&(m.types=M.types),B.T=m}}else try{m=r(h,l),ag(e,i,m)}catch(et){mh(e,i,et)}}function ag(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){rg(e,i,l)},function(l){return mh(e,i,l)}):rg(e,i,r)}function rg(e,i,r){i.status="fulfilled",i.value=r,sg(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,ig(e,r)))}function mh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,sg(i),i=i.next;while(i!==l)}e.action=null}function sg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function og(e,i){return i}function lg(e,i){if(Ee){var r=qe.formState;if(r!==null){t:{var l=fe;if(Ee){if(Ke){e:{for(var h=Ke,m=Ui;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ni(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){Ke=Ni(h.nextSibling),l=h.data==="F!";break t}}Za(l)}l=!1}l&&(i=r[0])}}return r=Wn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:og,lastRenderedState:i},r.queue=l,r=Rg.bind(null,fe,l),l.dispatch=r,l=ph(!1),m=Sh.bind(null,fe,!1,l.queue),l=Wn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=MM.bind(null,fe,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function ug(e){var i=cn();return cg(i,He,e)}function cg(e,i,r){if(i=hh(e,i,og)[0],e=Iu(ya)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=fl(i)}catch(M){throw M===Vs?wu:M}else l=i;i=cn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(fe.flags|=2048,Ys(9,{destroy:void 0},EM.bind(null,h,r),null)),[l,m,e]}function EM(e,i){e.action=i}function fg(e){var i=cn(),r=He;if(r!==null)return cg(i,r,e);cn(),i=i.memoizedState,r=cn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Ys(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=fe.updateQueue,i===null&&(i=Bu(),fe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function hg(){return cn().memoizedState}function Hu(e,i,r,l){var h=Wn();fe.flags|=e,h.memoizedState=Ys(1|i,{destroy:void 0},r,l===void 0?null:l)}function Gu(e,i,r,l){var h=cn();l=l===void 0?null:l;var m=h.memoizedState.inst;He!==null&&l!==null&&sh(l,He.memoizedState.deps)?h.memoizedState=Ys(i,m,r,l):(fe.flags|=e,h.memoizedState=Ys(1|i,m,r,l))}function dg(e,i){Hu(8390656,8,e,i)}function _h(e,i){Gu(2048,8,e,i)}function TM(e){fe.flags|=4;var i=fe.updateQueue;if(i===null)i=Bu(),fe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function pg(e){var i=cn().memoizedState;return TM({ref:i,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function mg(e,i){return Gu(4,2,e,i)}function _g(e,i){return Gu(4,4,e,i)}function gg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function vg(e,i,r){r=r!=null?r.concat([e]):null,Gu(4,4,gg.bind(null,i,e),r)}function gh(){}function yg(e,i){var r=cn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&sh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function xg(e,i){var r=cn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&sh(i,l[1]))return l[0];if(l=e(),jr){Qt(!0);try{e()}finally{Qt(!1)}}return r.memoizedState=[l,i],l}function vh(e,i,r){return r===void 0||(va&1073741824)!==0&&(Se&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=S0(),fe.lanes|=e,ar|=e,r)}function Sg(e,i,r,l){return ui(r,i)?r:Xs.current!==null?(e=vh(e,r,l),ui(e,i)||(_n=!0),e):(va&42)===0||(va&1073741824)!==0&&(Se&261930)===0?(_n=!0,e.memoizedState=r):(e=S0(),fe.lanes|=e,ar|=e,i)}function Mg(e,i,r,l,h){var m=X.p;X.p=m!==0&&8>m?m:8;var M=B.T,C={};B.T=C,Sh(e,!1,i,r);try{var V=h(),et=B.S;if(et!==null&&et(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var ht=yM(V,l);hl(e,i,ht,mi(e))}else hl(e,i,l,mi(e))}catch(gt){hl(e,i,{then:function(){},status:"rejected",reason:gt},mi())}finally{X.p=m,M!==null&&C.types!==null&&(M.types=C.types),B.T=M}}function bM(){}function yh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=Eg(e).queue;Mg(e,h,i,q,r===null?bM:function(){return Tg(e),r(l)})}function Eg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:q},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Tg(e){var i=Eg(e);i.next===null&&(i=e.alternate.memoizedState),hl(e,i.next.queue,{},mi())}function xh(){return Nn(wl)}function bg(){return cn().memoizedState}function Ag(){return cn().memoizedState}function AM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=mi();e=Ja(r);var l=$a(i,e,r);l!==null&&($n(l,i,r),ol(l,i,r)),i={cache:Zf()},e.payload=i;return}i=i.return}}function RM(e,i,r){var l=mi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vu(e)?Cg(i,r):(r=Ff(e,i,r,l),r!==null&&($n(r,e,l),wg(r,i,l)))}function Rg(e,i,r){var l=mi();hl(e,i,r,l)}function hl(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vu(e))Cg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,C=m(M,r);if(h.hasEagerState=!0,h.eagerState=C,ui(C,M))return Mu(e,i,h,0),qe===null&&Su(),!1}catch{}finally{}if(r=Ff(e,i,h,l),r!==null)return $n(r,e,l),wg(r,i,l),!0}return!1}function Sh(e,i,r,l){if(l={lane:2,revertLane:$h(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Vu(e)){if(i)throw Error(a(479))}else i=Ff(e,r,l,2),i!==null&&$n(i,e,2)}function Vu(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function Cg(e,i){Ws=Pu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function wg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Ki(e,r)}}var dl={readContext:Nn,use:Fu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};dl.useEffectEvent=rn;var Dg={readContext:Nn,use:Fu,useCallback:function(e,i){return Wn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:dg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Hu(4194308,4,gg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Hu(4194308,4,e,i)},useInsertionEffect:function(e,i){Hu(4,2,e,i)},useMemo:function(e,i){var r=Wn();i=i===void 0?null:i;var l=e();if(jr){Qt(!0);try{e()}finally{Qt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Wn();if(r!==void 0){var h=r(i);if(jr){Qt(!0);try{r(i)}finally{Qt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=RM.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var i=Wn();return e={current:e},i.memoizedState=e},useState:function(e){e=ph(e);var i=e.queue,r=Rg.bind(null,fe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:gh,useDeferredValue:function(e,i){var r=Wn();return vh(r,e,i)},useTransition:function(){var e=ph(!1);return e=Mg.bind(null,fe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=fe,h=Wn();if(Ee){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),qe===null)throw Error(a(349));(Se&127)!==0||Q_(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,dg($_.bind(null,l,m,e),[e]),l.flags|=2048,Ys(9,{destroy:void 0},J_.bind(null,l,m,r,i),null),r},useId:function(){var e=Wn(),i=qe.identifierPrefix;if(Ee){var r=$i,l=Ji;r=(l&~(1<<32-It(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=zu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=xM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:xh,useFormState:lg,useActionState:lg,useOptimistic:function(e){var i=Wn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Sh.bind(null,fe,!0,r),r.dispatch=i,[e,i]},useMemoCache:fh,useCacheRefresh:function(){return Wn().memoizedState=AM.bind(null,fe)},useEffectEvent:function(e){var i=Wn(),r={impl:e};return i.memoizedState=r,function(){if((Ne&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Mh={readContext:Nn,use:Fu,useCallback:yg,useContext:Nn,useEffect:_h,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:_g,useMemo:xg,useReducer:Iu,useRef:hg,useState:function(){return Iu(ya)},useDebugValue:gh,useDeferredValue:function(e,i){var r=cn();return Sg(r,He.memoizedState,e,i)},useTransition:function(){var e=Iu(ya)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:fl(e),i]},useSyncExternalStore:K_,useId:bg,useHostTransitionStatus:xh,useFormState:ug,useActionState:ug,useOptimistic:function(e,i){var r=cn();return ng(r,He,e,i)},useMemoCache:fh,useCacheRefresh:Ag};Mh.useEffectEvent=pg;var Ug={readContext:Nn,use:Fu,useCallback:yg,useContext:Nn,useEffect:_h,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:_g,useMemo:xg,useReducer:dh,useRef:hg,useState:function(){return dh(ya)},useDebugValue:gh,useDeferredValue:function(e,i){var r=cn();return He===null?vh(r,e,i):Sg(r,He.memoizedState,e,i)},useTransition:function(){var e=dh(ya)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:fl(e),i]},useSyncExternalStore:K_,useId:bg,useHostTransitionStatus:xh,useFormState:fg,useActionState:fg,useOptimistic:function(e,i){var r=cn();return He!==null?ng(r,He,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:fh,useCacheRefresh:Ag};Ug.useEffectEvent=pg;function Eh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Th={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=mi(),h=Ja(l);h.payload=i,r!=null&&(h.callback=r),i=$a(e,h,l),i!==null&&($n(i,e,l),ol(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=mi(),h=Ja(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=$a(e,h,l),i!==null&&($n(i,e,l),ol(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=mi(),l=Ja(r);l.tag=2,i!=null&&(l.callback=i),i=$a(e,l,r),i!==null&&($n(i,e,r),ol(i,e,r))}};function Lg(e,i,r,l,h,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!$o(r,l)||!$o(h,m):!0}function Ng(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Th.enqueueReplaceState(i,i.state,null)}function Zr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Og(e){xu(e)}function Pg(e){console.error(e)}function zg(e){xu(e)}function ku(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Bg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function bh(e,i,r){return r=Ja(r),r.tag=3,r.payload={element:null},r.callback=function(){ku(e,i)},r}function Fg(e){return e=Ja(e),e.tag=3,e}function Ig(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){Bg(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Bg(i,r,l),typeof h!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function CM(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Is(i,r,h,!0),r=fi.current,r!==null){switch(r.tag){case 31:case 13:return Li===null?ec():r.alternate===null&&sn===0&&(sn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Du?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Kh(e,l,h)),!1;case 22:return r.flags|=65536,l===Du?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Kh(e,l,h)),!1}throw Error(a(435,r.tag))}return Kh(e,l,h),ec(),!1}if(Ee)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Xf&&(e=Error(a(422),{cause:l}),nl(Ci(e,r)))):(l!==Xf&&(i=Error(a(423),{cause:l}),nl(Ci(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ci(l,r),h=bh(e.stateNode,l,h),eh(e,h),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:l});if(m=Ci(m,r),Sl===null?Sl=[m]:Sl.push(m),sn!==4&&(sn=2),i===null)return!0;l=Ci(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=bh(r.stateNode,l,e),eh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(rr===null||!rr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Fg(h),Ig(h,e,r,l),eh(r,h),!1}r=r.return}while(r!==null);return!1}var Ah=Error(a(461)),_n=!1;function On(e,i,r,l){i.child=e===null?k_(i,null,r,l):Yr(i,e.child,r,l)}function Hg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return kr(i),l=oh(e,i,r,M,m,h),C=lh(),e!==null&&!_n?(uh(e,i,h),xa(e,i,h)):(Ee&&C&&Vf(i),i.flags|=1,On(e,i,l,h),i.child)}function Gg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!If(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Vg(e,i,m,l,h)):(e=Tu(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Oh(e,h)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:$o,r(M,l)&&e.ref===i.ref)return xa(e,i,h)}return i.flags|=1,e=pa(m,l),e.ref=i.ref,e.return=i,i.child=e}function Vg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if($o(m,l)&&e.ref===i.ref)if(_n=!1,i.pendingProps=l=m,Oh(e,h))(e.flags&131072)!==0&&(_n=!0);else return i.lanes=e.lanes,xa(e,i,h)}return Rh(e,i,r,l,h)}function kg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return Xg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cu(i,m!==null?m.cachePool:null),m!==null?q_(i,m):ih(),Y_(i);else return l=i.lanes=536870912,Xg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Cu(i,m.cachePool),q_(i,m),er(),i.memoizedState=null):(e!==null&&Cu(i,null),ih(),er());return On(e,i,h,r),i.child}function pl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Xg(e,i,r,l,h){var m=Qf();return m=m===null?null:{parent:pn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Cu(i,null),ih(),Y_(i),e!==null&&Is(e,i,l,!0),i.childLanes=h,null}function Xu(e,i){return i=qu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Wg(e,i,r){return Yr(i,e.child,null,r),e=Xu(i,i.pendingProps),e.flags|=2,hi(i),i.memoizedState=null,e}function wM(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(l.mode==="hidden")return e=Xu(i,l),i.lanes=536870912,pl(null,e);if(rh(i),(e=Ke)?(e=iv(e,Ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},r=C_(e),r.return=i,i.child=r,Ln=i,Ke=null)):e=null,e===null)throw Za(i);return i.lanes=536870912,null}return Xu(i,l)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(rh(i),h)if(i.flags&256)i.flags&=-257,i=Wg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(_n||Is(e,i,r,!1),h=(r&e.childLanes)!==0,_n||h){if(l=qe,l!==null&&(M=Ts(l,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,Ir(e,M),$n(l,e,M),Ah;ec(),i=Wg(e,i,r)}else e=m.treeContext,Ke=Ni(M.nextSibling),Ln=i,Ee=!0,ja=null,Ui=!1,e!==null&&U_(i,e),i=Xu(i,l),i.flags|=4096;return i}return e=pa(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Wu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Rh(e,i,r,l,h){return kr(i),r=oh(e,i,r,l,void 0,h),l=lh(),e!==null&&!_n?(uh(e,i,h),xa(e,i,h)):(Ee&&l&&Vf(i),i.flags|=1,On(e,i,r,h),i.child)}function qg(e,i,r,l,h,m){return kr(i),i.updateQueue=null,r=Z_(i,l,r,h),j_(e),l=lh(),e!==null&&!_n?(uh(e,i,m),xa(e,i,m)):(Ee&&l&&Vf(i),i.flags|=1,On(e,i,r,m),i.child)}function Yg(e,i,r,l,h){if(kr(i),i.stateNode===null){var m=Ps,M=r.contextType;typeof M=="object"&&M!==null&&(m=Nn(M)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Th,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},$f(i),M=r.contextType,m.context=typeof M=="object"&&M!==null?Nn(M):Ps,m.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Eh(i,r,M,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Th.enqueueReplaceState(m,m.state,null),ul(i,l,m,h),ll(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var C=i.memoizedProps,V=Zr(r,C);m.props=V;var et=m.context,ht=r.contextType;M=Ps,typeof ht=="object"&&ht!==null&&(M=Nn(ht));var gt=r.getDerivedStateFromProps;ht=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,ht||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||et!==M)&&Ng(i,m,l,M),Qa=!1;var at=i.memoizedState;m.state=at,ul(i,l,m,h),ll(),et=i.memoizedState,C||at!==et||Qa?(typeof gt=="function"&&(Eh(i,r,gt,l),et=i.memoizedState),(V=Qa||Lg(i,r,V,l,at,et,M))?(ht||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),m.props=l,m.state=et,m.context=M,l=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,th(e,i),M=i.memoizedProps,ht=Zr(r,M),m.props=ht,gt=i.pendingProps,at=m.context,et=r.contextType,V=Ps,typeof et=="object"&&et!==null&&(V=Nn(et)),C=r.getDerivedStateFromProps,(et=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==gt||at!==V)&&Ng(i,m,l,V),Qa=!1,at=i.memoizedState,m.state=at,ul(i,l,m,h),ll();var ct=i.memoizedState;M!==gt||at!==ct||Qa||e!==null&&e.dependencies!==null&&Au(e.dependencies)?(typeof C=="function"&&(Eh(i,r,C,l),ct=i.memoizedState),(ht=Qa||Lg(i,r,ht,l,at,ct,V)||e!==null&&e.dependencies!==null&&Au(e.dependencies))?(et||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ct,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ct,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),m.props=l,m.state=ct,m.context=V,l=ht):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Wu(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Yr(i,e.child,null,h),i.child=Yr(i,null,r,h)):On(e,i,r,h),i.memoizedState=m.state,e=i.child):e=xa(e,i,h),e}function jg(e,i,r,l){return Gr(),i.flags|=256,On(e,i,r,l),i.child}var Ch={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wh(e){return{baseLanes:e,cachePool:B_()}}function Dh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=pi),e}function Zg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),M&&(h=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(h?tr(i):er(),(e=Ke)?(e=iv(e,Ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:Ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},r=C_(e),r.return=i,i.child=r,Ln=i,Ke=null)):e=null,e===null)throw Za(i);return hd(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,h?(er(),h=i.mode,C=qu({mode:"hidden",children:C},h),l=Hr(l,h,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=wh(r),l.childLanes=Dh(e,M,r),i.memoizedState=Ch,pl(null,l)):(tr(i),Uh(i,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(m)i.flags&256?(tr(i),i.flags&=-257,i=Lh(e,i,r)):i.memoizedState!==null?(er(),i.child=e.child,i.flags|=128,i=null):(er(),C=l.fallback,h=i.mode,l=qu({mode:"visible",children:l.children},h),C=Hr(C,h,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Yr(i,e.child,null,r),l=i.child,l.memoizedState=wh(r),l.childLanes=Dh(e,M,r),i.memoizedState=Ch,i=pl(null,l));else if(tr(i),hd(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var et=M.dgst;M=et,l=Error(a(419)),l.stack="",l.digest=M,nl({value:l,source:null,stack:null}),i=Lh(e,i,r)}else if(_n||Is(e,i,r,!1),M=(r&e.childLanes)!==0,_n||M){if(M=qe,M!==null&&(l=Ts(M,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,Ir(e,l),$n(M,e,l),Ah;fd(C)||ec(),i=Lh(e,i,r)}else fd(C)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Ke=Ni(C.nextSibling),Ln=i,Ee=!0,ja=null,Ui=!1,e!==null&&U_(i,e),i=Uh(i,l.children),i.flags|=4096);return i}return h?(er(),C=l.fallback,h=i.mode,V=e.child,et=V.sibling,l=pa(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,et!==null?C=pa(et,C):(C=Hr(C,h,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,pl(null,l),l=i.child,C=e.child.memoizedState,C===null?C=wh(r):(h=C.cachePool,h!==null?(V=pn._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=B_(),C={baseLanes:C.baseLanes|r,cachePool:h}),l.memoizedState=C,l.childLanes=Dh(e,M,r),i.memoizedState=Ch,pl(e.child,l)):(tr(i),r=e.child,e=r.sibling,r=pa(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=r,i.memoizedState=null,r)}function Uh(e,i){return i=qu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function qu(e,i){return e=ci(22,e,null,i),e.lanes=0,e}function Lh(e,i,r){return Yr(i,e.child,null,r),e=Uh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Kg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Yf(e.return,i,r)}function Nh(e,i,r,l,h,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=h,M.treeForkCount=m)}function Qg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var M=un.current,C=(M&2)!==0;if(C?(M=M&1|2,i.flags|=128):M&=1,xt(un,M),On(e,i,l,r),l=Ee?el:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kg(e,r,i);else if(e.tag===19)Kg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Ou(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Nh(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ou(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Nh(i,!0,r,null,m,l);break;case"together":Nh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function xa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ar|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Is(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=pa(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=pa(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Oh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Au(e)))}function DM(e,i,r){switch(i.tag){case 3:St(i,i.stateNode.containerInfo),Ka(i,pn,e.memoizedState.cache),Gr();break;case 27:case 5:Nt(i);break;case 4:St(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,rh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(tr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Zg(e,i,r):(tr(i),e=xa(e,i,r),e!==null?e.sibling:null);tr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Is(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return Qg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(un,un.current),l)break;return null;case 22:return i.lanes=0,kg(e,i,r,i.pendingProps);case 24:Ka(i,pn,e.memoizedState.cache)}return xa(e,i,r)}function Jg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)_n=!0;else{if(!Oh(e,r)&&(i.flags&128)===0)return _n=!1,DM(e,i,r);_n=(e.flags&131072)!==0}else _n=!1,Ee&&(i.flags&1048576)!==0&&D_(i,el,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Wr(i.elementType),i.type=e,typeof e=="function")If(e)?(l=Zr(e,l),i.tag=1,i=Yg(null,i,e,l,r)):(i.tag=0,i=Rh(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===R){i.tag=11,i=Hg(null,i,e,l,r);break t}else if(h===U){i.tag=14,i=Gg(null,i,e,l,r);break t}}throw i=rt(e)||e,Error(a(306,i,""))}}return i;case 0:return Rh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=Zr(l,i.pendingProps),Yg(e,i,l,h,r);case 3:t:{if(St(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,th(e,i),ul(i,l,null,r);var M=i.memoizedState;if(l=M.cache,Ka(i,pn,l),l!==m.cache&&jf(i,[pn],r,!0),ll(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=jg(e,i,l,r);break t}else if(l!==h){h=Ci(Error(a(424)),i),nl(h),i=jg(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=Ni(e.firstChild),Ln=i,Ee=!0,ja=null,Ui=!0,r=k_(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Gr(),l===h){i=xa(e,i,r);break t}On(e,i,l,r)}i=i.child}return i;case 26:return Wu(e,i),e===null?(r=uv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ee||(r=i.type,e=i.pendingProps,l=lc(it.current).createElement(r),l[dn]=i,l[Dn]=e,Pn(l,r,e),yt(l),i.stateNode=l):i.memoizedState=uv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Nt(i),e===null&&Ee&&(l=i.stateNode=sv(i.type,i.pendingProps,it.current),Ln=i,Ui=!0,h=Ke,ur(i.type)?(dd=h,Ke=Ni(l.firstChild)):Ke=h),On(e,i,i.pendingProps.children,r),Wu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((h=l=Ke)&&(l=sE(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,Ln=i,Ke=Ni(l.firstChild),Ui=!1,h=!0):h=!1),h||Za(i)),Nt(i),h=i.type,m=i.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,ld(h,m)?l=null:M!==null&&ld(h,M)&&(i.flags|=32),i.memoizedState!==null&&(h=oh(e,i,SM,null,null,r),wl._currentValue=h),Wu(e,i),On(e,i,l,r),i.child;case 6:return e===null&&Ee&&((e=r=Ke)&&(r=oE(r,i.pendingProps,Ui),r!==null?(i.stateNode=r,Ln=i,Ke=null,e=!0):e=!1),e||Za(i)),null;case 13:return Zg(e,i,r);case 4:return St(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Yr(i,null,l,r):On(e,i,l,r),i.child;case 11:return Hg(e,i,i.type,i.pendingProps,r);case 7:return On(e,i,i.pendingProps,r),i.child;case 8:return On(e,i,i.pendingProps.children,r),i.child;case 12:return On(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),On(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,kr(i),h=Nn(h),l=l(h),i.flags|=1,On(e,i,l,r),i.child;case 14:return Gg(e,i,i.type,i.pendingProps,r);case 15:return Vg(e,i,i.type,i.pendingProps,r);case 19:return Qg(e,i,r);case 31:return wM(e,i,r);case 22:return kg(e,i,r,i.pendingProps);case 24:return kr(i),l=Nn(pn),e===null?(h=Qf(),h===null&&(h=qe,m=Zf(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},$f(i),Ka(i,pn,h)):((e.lanes&r)!==0&&(th(e,i),ul(i,null,null,r),ll()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ka(i,pn,l)):(l=m.cache,Ka(i,pn,l),l!==h.cache&&jf(i,[pn],r,!0))),On(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Sa(e){e.flags|=4}function Ph(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(b0())e.flags|=8192;else throw qr=Du,Jf}else e.flags&=-16777217}function $g(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pv(i))if(b0())e.flags|=8192;else throw qr=Du,Jf}function Yu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ze():536870912,e.lanes|=i,Qs|=i)}function ml(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function UM(e,i,r){var l=i.pendingProps;switch(kf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ga(pn),wt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fs(i)?Sa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Wf())),Qe(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Sa(i),m!==null?(Qe(i),$g(i,m)):(Qe(i),Ph(i,h,null,l,r))):m?m!==e.memoizedState?(Sa(i),Qe(i),$g(i,m)):(Qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Sa(i),Qe(i),Ph(i,h,e,l,r)),null;case 27:if(ne(i),r=it.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}e=Et.current,Fs(i)?L_(i):(e=sv(h,l,r),i.stateNode=e,Sa(i))}return Qe(i),null;case 5:if(ne(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}if(m=Et.current,Fs(i))L_(i);else{var M=lc(it.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(h,{is:l.is}):M.createElement(h)}}m[dn]=i,m[Dn]=l;t:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break t;for(;M.sibling===null;){if(M.return===null||M.return===i)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;t:switch(Pn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Sa(i)}}return Qe(i),Ph(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Sa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,Fs(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=Ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[dn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Z0(e.nodeValue,r)),e||Za(i,!0)}else e=lc(e).createTextNode(l),e[dn]=i,i.stateNode=e}return Qe(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Fs(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=i}else Gr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),e=!1}else r=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(hi(i),i):(hi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Qe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Fs(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[dn]=i}else Gr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),h=!1}else h=Wf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(hi(i),i):(hi(i),null)}return hi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Yu(i,i.updateQueue),Qe(i),null);case 4:return wt(),e===null&&id(i.stateNode.containerInfo),Qe(i),null;case 10:return ga(i.type),Qe(i),null;case 19:if($(un),l=i.memoizedState,l===null)return Qe(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)ml(l,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Ou(e),m!==null){for(i.flags|=128,ml(l,!1),e=m.updateQueue,i.updateQueue=e,Yu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)R_(r,e),r=r.sibling;return xt(un,un.current&1|2),Ee&&ma(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>Ju&&(i.flags|=128,h=!0,ml(l,!1),i.lanes=4194304)}else{if(!h)if(e=Ou(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Yu(i,e),ml(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Ee)return Qe(i),null}else 2*A()-l.renderingStartTime>Ju&&r!==536870912&&(i.flags|=128,h=!0,ml(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,r=un.current,xt(un,h?r&1|2:r&1),Ee&&ma(i,l.treeForkCount),e):(Qe(i),null);case 22:case 23:return hi(i),ah(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),r=i.updateQueue,r!==null&&Yu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&$(Xr),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),ga(pn),Qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function LM(e,i){switch(kf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ga(pn),wt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ne(i),null;case 31:if(i.memoizedState!==null){if(hi(i),i.alternate===null)throw Error(a(340));Gr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(hi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Gr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return $(un),null;case 4:return wt(),null;case 10:return ga(i.type),null;case 22:case 23:return hi(i),ah(),e!==null&&$(Xr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ga(pn),null;case 25:return null;default:return null}}function t0(e,i){switch(kf(i),i.tag){case 3:ga(pn),wt();break;case 26:case 27:case 5:ne(i);break;case 4:wt();break;case 31:i.memoizedState!==null&&hi(i);break;case 13:hi(i);break;case 19:$(un);break;case 10:ga(i.type);break;case 22:case 23:hi(i),ah(),e!==null&&$(Xr);break;case 24:ga(pn)}}function _l(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==h)}}catch(C){Fe(i,i.return,C)}}function nr(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,h=i;var V=r,et=C;try{et()}catch(ht){Fe(h,V,ht)}}}l=l.next}while(l!==m)}}catch(ht){Fe(i,i.return,ht)}}function e0(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{W_(i,r)}catch(l){Fe(e,e.return,l)}}}function n0(e,i,r){r.props=Zr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Fe(e,i,l)}}function gl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Fe(e,i,h)}}function ta(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Fe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Fe(e,i,h)}else r.current=null}function i0(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Fe(e,e.return,h)}}function zh(e,i,r){try{var l=e.stateNode;tE(l,e.type,r,i),l[Dn]=i}catch(h){Fe(e,e.return,h)}}function a0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function Bh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||a0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(l===27&&ur(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Fh(e,i,r),e=e.sibling;e!==null;)Fh(e,i,r),e=e.sibling}function ju(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&ur(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(ju(e,i,r),e=e.sibling;e!==null;)ju(e,i,r),e=e.sibling}function r0(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Pn(i,l,r),i[dn]=e,i[Dn]=r}catch(m){Fe(e,e.return,m)}}var Ma=!1,gn=!1,Ih=!1,s0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function NM(e,i){if(e=e.containerInfo,sd=mc,e=v_(e),Lf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,C=-1,V=-1,et=0,ht=0,gt=e,at=null;e:for(;;){for(var ct;gt!==r||h!==0&&gt.nodeType!==3||(C=M+h),gt!==m||l!==0&&gt.nodeType!==3||(V=M+l),gt.nodeType===3&&(M+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)at=gt,gt=ct;for(;;){if(gt===e)break e;if(at===r&&++et===h&&(C=M),at===m&&++ht===l&&(V=M),(ct=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=ct}r=C===-1||V===-1?null:{start:C,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(od={focusedElem:e,selectionRange:r},mc=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var kt=Zr(r.type,h);e=l.getSnapshotBeforeUpdate(kt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Fe(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)cd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function o0(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ta(e,r),l&4&&_l(5,r);break;case 1:if(Ta(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(M){Fe(r,r.return,M)}else{var h=Zr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Fe(r,r.return,M)}}l&64&&e0(r),l&512&&gl(r,r.return);break;case 3:if(Ta(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{W_(e,i)}catch(M){Fe(r,r.return,M)}}break;case 27:i===null&&l&4&&r0(r);case 26:case 5:Ta(e,r),i===null&&l&4&&i0(r),l&512&&gl(r,r.return);break;case 12:Ta(e,r);break;case 31:Ta(e,r),l&4&&c0(e,r);break;case 13:Ta(e,r),l&4&&f0(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=VM.bind(null,r),lE(e,r))));break;case 22:if(l=r.memoizedState!==null||Ma,!l){i=i!==null&&i.memoizedState!==null||gn,h=Ma;var m=gn;Ma=l,(gn=i)&&!m?ba(e,r,(r.subtreeFlags&8772)!==0):Ta(e,r),Ma=h,gn=m}break;case 30:break;default:Ta(e,r)}}function l0(e){var i=e.alternate;i!==null&&(e.alternate=null,l0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&D(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Zn=!1;function Ea(e,i,r){for(r=r.child;r!==null;)u0(e,i,r),r=r.sibling}function u0(e,i,r){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(At,r)}catch{}switch(r.tag){case 26:gn||ta(r,i),Ea(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:gn||ta(r,i);var l=Je,h=Zn;ur(r.type)&&(Je=r.stateNode,Zn=!1),Ea(e,i,r),Al(r.stateNode),Je=l,Zn=h;break;case 5:gn||ta(r,i);case 6:if(l=Je,h=Zn,Je=null,Ea(e,i,r),Je=l,Zn=h,Je!==null)if(Zn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(m){Fe(r,i,m)}else try{Je.removeChild(r.stateNode)}catch(m){Fe(r,i,m)}break;case 18:Je!==null&&(Zn?(e=Je,ev(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ro(e)):ev(Je,r.stateNode));break;case 4:l=Je,h=Zn,Je=r.stateNode.containerInfo,Zn=!0,Ea(e,i,r),Je=l,Zn=h;break;case 0:case 11:case 14:case 15:nr(2,r,i),gn||nr(4,r,i),Ea(e,i,r);break;case 1:gn||(ta(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&n0(r,i,l)),Ea(e,i,r);break;case 21:Ea(e,i,r);break;case 22:gn=(l=gn)||r.memoizedState!==null,Ea(e,i,r),gn=l;break;default:Ea(e,i,r)}}function c0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ro(e)}catch(r){Fe(i,i.return,r)}}}function f0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ro(e)}catch(r){Fe(i,i.return,r)}}function OM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new s0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new s0),i;default:throw Error(a(435,e.tag))}}function Zu(e,i){var r=OM(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=kM.bind(null,e,l);l.then(h,h)}})}function Kn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,M=i,C=M;t:for(;C!==null;){switch(C.tag){case 27:if(ur(C.type)){Je=C.stateNode,Zn=!1;break t}break;case 5:Je=C.stateNode,Zn=!1;break t;case 3:case 4:Je=C.stateNode.containerInfo,Zn=!0;break t}C=C.return}if(Je===null)throw Error(a(160));u0(m,M,h),Je=null,Zn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)h0(i,e),i=i.sibling}var Gi=null;function h0(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(i,e),Qn(e),l&4&&(nr(3,e,e.return),_l(3,e),nr(5,e,e.return));break;case 1:Kn(i,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),l&64&&Ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Gi;if(Kn(i,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Or]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Pn(m,l,r),m[dn]=e,yt(m),l=m;break t;case"link":var M=hv("link","href",h).get(l+(r.href||""));if(M){for(var C=0;C<M.length;C++)if(m=M[C],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(C,1);break e}}m=h.createElement(l),Pn(m,l,r),h.head.appendChild(m);break;case"meta":if(M=hv("meta","content",h).get(l+(r.content||""))){for(C=0;C<M.length;C++)if(m=M[C],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(C,1);break e}}m=h.createElement(l),Pn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[dn]=e,yt(m),l=m}e.stateNode=l}else dv(h,e.type,e.stateNode);else e.stateNode=fv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?dv(h,e.type,e.stateNode):fv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zh(e,e.memoizedProps,r.memoizedProps)}break;case 27:Kn(i,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),r!==null&&l&4&&zh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(Kn(i,e),Qn(e),l&512&&(gn||r===null||ta(r,r.return)),e.flags&32){h=e.stateNode;try{Cs(h,"")}catch(kt){Fe(e,e.return,kt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,zh(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Ih=!0);break;case 6:if(Kn(i,e),Qn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(fc=null,h=Gi,Gi=uc(i.containerInfo),Kn(i,e),Gi=h,Qn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ro(i.containerInfo)}catch(kt){Fe(e,e.return,kt)}Ih&&(Ih=!1,d0(e));break;case 4:l=Gi,Gi=uc(e.stateNode.containerInfo),Kn(i,e),Qn(e),Gi=l;break;case 12:Kn(i,e),Qn(e);break;case 31:Kn(i,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zu(e,l)));break;case 13:Kn(i,e),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Qu=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zu(e,l)));break;case 22:h=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,et=Ma,ht=gn;if(Ma=et||h,gn=ht||V,Kn(i,e),gn=ht,Ma=et,Qn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||V||Ma||gn||Kr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(m=V.stateNode,h)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=V.stateNode;var gt=V.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;C.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(kt){Fe(V,V.return,kt)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(kt){Fe(V,V.return,kt)}}}else if(i.tag===18){if(r===null){V=i;try{var ct=V.stateNode;h?nv(ct,!0):nv(V.stateNode,!1)}catch(kt){Fe(V,V.return,kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Zu(e,r))));break;case 19:Kn(i,e),Qn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zu(e,l)));break;case 30:break;case 21:break;default:Kn(i,e),Qn(e)}}function Qn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(a0(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Bh(e);ju(e,m,h);break;case 5:var M=r.stateNode;r.flags&32&&(Cs(M,""),r.flags&=-33);var C=Bh(e);ju(e,C,M);break;case 3:case 4:var V=r.stateNode.containerInfo,et=Bh(e);Fh(e,et,V);break;default:throw Error(a(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function d0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;d0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ta(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)o0(e,i.alternate,i),i=i.sibling}function Kr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:nr(4,i,i.return),Kr(i);break;case 1:ta(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&n0(i,i.return,r),Kr(i);break;case 27:Al(i.stateNode);case 26:case 5:ta(i,i.return),Kr(i);break;case 22:i.memoizedState===null&&Kr(i);break;case 30:Kr(i);break;default:Kr(i)}e=e.sibling}}function ba(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:ba(h,m,r),_l(4,m);break;case 1:if(ba(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(et){Fe(l,l.return,et)}if(l=m,h=l.updateQueue,h!==null){var C=l.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)X_(V[h],C)}catch(et){Fe(l,l.return,et)}}r&&M&64&&e0(m),gl(m,m.return);break;case 27:r0(m);case 26:case 5:ba(h,m,r),r&&l===null&&M&4&&i0(m),gl(m,m.return);break;case 12:ba(h,m,r);break;case 31:ba(h,m,r),r&&M&4&&c0(h,m);break;case 13:ba(h,m,r),r&&M&4&&f0(h,m);break;case 22:m.memoizedState===null&&ba(h,m,r),gl(m,m.return);break;case 30:break;default:ba(h,m,r)}i=i.sibling}}function Hh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&il(r))}function Gh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&il(e))}function Vi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)p0(e,i,r,l),i=i.sibling}function p0(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(e,i,r,l),h&2048&&_l(9,i);break;case 1:Vi(e,i,r,l);break;case 3:Vi(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&il(e)));break;case 12:if(h&2048){Vi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,M=m.id,C=m.onPostCommit;typeof C=="function"&&C(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Fe(i,i.return,V)}}else Vi(e,i,r,l);break;case 31:Vi(e,i,r,l);break;case 13:Vi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?Vi(e,i,r,l):vl(e,i):m._visibility&2?Vi(e,i,r,l):(m._visibility|=2,js(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Hh(M,i);break;case 24:Vi(e,i,r,l),h&2048&&Gh(i.alternate,i);break;default:Vi(e,i,r,l)}}function js(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,M=i,C=r,V=l,et=M.flags;switch(M.tag){case 0:case 11:case 15:js(m,M,C,V,h),_l(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?js(m,M,C,V,h):vl(m,M):(ht._visibility|=2,js(m,M,C,V,h)),h&&et&2048&&Hh(M.alternate,M);break;case 24:js(m,M,C,V,h),h&&et&2048&&Gh(M.alternate,M);break;default:js(m,M,C,V,h)}i=i.sibling}}function vl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:vl(r,l),h&2048&&Hh(l.alternate,l);break;case 24:vl(r,l),h&2048&&Gh(l.alternate,l);break;default:vl(r,l)}i=i.sibling}}var yl=8192;function Zs(e,i,r){if(e.subtreeFlags&yl)for(e=e.child;e!==null;)m0(e,i,r),e=e.sibling}function m0(e,i,r){switch(e.tag){case 26:Zs(e,i,r),e.flags&yl&&e.memoizedState!==null&&xE(r,Gi,e.memoizedState,e.memoizedProps);break;case 5:Zs(e,i,r);break;case 3:case 4:var l=Gi;Gi=uc(e.stateNode.containerInfo),Zs(e,i,r),Gi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=yl,yl=16777216,Zs(e,i,r),yl=l):Zs(e,i,r));break;default:Zs(e,i,r)}}function _0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function xl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Rn=l,v0(l,e)}_0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g0(e),e=e.sibling}function g0(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&nr(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Ku(e)):xl(e);break;default:xl(e)}}function Ku(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Rn=l,v0(l,e)}_0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:nr(8,i,i.return),Ku(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Ku(i));break;default:Ku(i)}e=e.sibling}}function v0(e,i){for(;Rn!==null;){var r=Rn;switch(r.tag){case 0:case 11:case 15:nr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:il(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Rn=l;else t:for(r=e;Rn!==null;){l=Rn;var h=l.sibling,m=l.return;if(l0(l),l===r){Rn=null;break t}if(h!==null){h.return=m,Rn=h;break t}Rn=m}}}var PM={getCacheForType:function(e){var i=Nn(pn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Nn(pn).controller.signal}},zM=typeof WeakMap=="function"?WeakMap:Map,Ne=0,qe=null,ve=null,Se=0,Be=0,di=null,ir=!1,Ks=!1,Vh=!1,Aa=0,sn=0,ar=0,Qr=0,kh=0,pi=0,Qs=0,Sl=null,Jn=null,Xh=!1,Qu=0,y0=0,Ju=1/0,$u=null,rr=null,Mn=0,sr=null,Js=null,Ra=0,Wh=0,qh=null,x0=null,Ml=0,Yh=null;function mi(){return(Ne&2)!==0&&Se!==0?Se&-Se:B.T!==null?$h():Nr()}function S0(){if(pi===0)if((Se&536870912)===0||Ee){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),pi=e}else pi=536870912;return e=fi.current,e!==null&&(e.flags|=32),pi}function $n(e,i,r){(e===qe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&($s(e,0),or(e,Se,pi,!1)),kn(e,r),((Ne&2)===0||e!==qe)&&(e===qe&&((Ne&2)===0&&(Qr|=r),sn===4&&or(e,Se,pi,!1)),ea(e))}function M0(e,i,r){if((Ne&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Gt(e,i),h=l?IM(e,i):Zh(e,i,!0),m=l;do{if(h===0){Ks&&!l&&or(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!BM(r)){h=Zh(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var C=e;h=Sl;var V=C.current.memoizedState.isDehydrated;if(V&&($s(C,M).flags|=256),M=Zh(C,M,!1),M!==2){if(Vh&&!V){C.errorRecoveryDisabledLanes|=m,Qr|=m,h=4;break t}m=Jn,Jn=h,m!==null&&(Jn===null?Jn=m:Jn.push.apply(Jn,m))}h=M}if(m=!1,h!==2)continue}}if(h===1){$s(e,0),or(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:or(l,i,pi,!ir);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Qu+300-A(),10<h)){if(or(l,i,pi,!ir),vt(l,0,!0)!==0)break t;Ra=i,l.timeoutHandle=$0(E0.bind(null,l,r,Jn,$u,Xh,i,pi,Qr,Qs,ir,m,"Throttled",-0,0),h);break t}E0(l,r,Jn,$u,Xh,i,pi,Qr,Qs,ir,m,null,-0,0)}}break}while(!0);ea(e)}function E0(e,i,r,l,h,m,M,C,V,et,ht,gt,at,ct){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},m0(i,m,gt);var kt=(m&62914560)===m?Qu-A():(m&4194048)===m?y0-A():0;if(kt=SE(gt,kt),kt!==null){Ra=m,e.cancelPendingCommit=kt(U0.bind(null,e,i,m,r,l,h,M,C,V,ht,gt,null,at,ct)),or(e,m,M,!et);return}}U0(e,i,m,r,l,h,M,C,V)}function BM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!ui(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(e,i,r,l){i&=~kh,i&=~Qr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-It(h),M=1<<m;l[m]=-1,h&=~M}r!==0&&ko(e,r,i)}function tc(){return(Ne&6)===0?(El(0),!1):!0}function jh(){if(ve!==null){if(Be===0)var e=ve.return;else e=ve,_a=Vr=null,ch(e),ks=null,rl=0,e=ve;for(;e!==null;)t0(e.alternate,e),e=e.return;ve=null}}function $s(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,iE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ra=0,jh(),qe=e,ve=r=pa(e.current,null),Se=i,Be=0,di=null,ir=!1,Ks=Gt(e,i),Vh=!1,Qs=pi=kh=Qr=ar=sn=0,Jn=Sl=null,Xh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-It(l),m=1<<h;i|=e[h],l&=~m}return Aa=i,Su(),r}function T0(e,i){fe=null,B.H=dl,i===Vs||i===wu?(i=H_(),Be=3):i===Jf?(i=H_(),Be=4):Be=i===Ah?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,di=i,ve===null&&(sn=1,ku(e,Ci(i,e.current)))}function b0(){var e=fi.current;return e===null?!0:(Se&4194048)===Se?Li===null:(Se&62914560)===Se||(Se&536870912)!==0?e===Li:!1}function A0(){var e=B.H;return B.H=dl,e===null?dl:e}function R0(){var e=B.A;return B.A=PM,e}function ec(){sn=4,ir||(Se&4194048)!==Se&&fi.current!==null||(Ks=!0),(ar&134217727)===0&&(Qr&134217727)===0||qe===null||or(qe,Se,pi,!1)}function Zh(e,i,r){var l=Ne;Ne|=2;var h=A0(),m=R0();(qe!==e||Se!==i)&&($u=null,$s(e,i)),i=!1;var M=sn;t:do try{if(Be!==0&&ve!==null){var C=ve,V=di;switch(Be){case 8:jh(),M=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var et=Be;if(Be=0,di=null,to(e,C,V,et),r&&Ks){M=0;break t}break;default:et=Be,Be=0,di=null,to(e,C,V,et)}}FM(),M=sn;break}catch(ht){T0(e,ht)}while(!0);return i&&e.shellSuspendCounter++,_a=Vr=null,Ne=l,B.H=h,B.A=m,ve===null&&(qe=null,Se=0,Su()),M}function FM(){for(;ve!==null;)C0(ve)}function IM(e,i){var r=Ne;Ne|=2;var l=A0(),h=R0();qe!==e||Se!==i?($u=null,Ju=A()+500,$s(e,i)):Ks=Gt(e,i);t:do try{if(Be!==0&&ve!==null){i=ve;var m=di;e:switch(Be){case 1:Be=0,di=null,to(e,i,m,1);break;case 2:case 9:if(F_(m)){Be=0,di=null,w0(i);break}i=function(){Be!==2&&Be!==9||qe!==e||(Be=7),ea(e)},m.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:F_(m)?(Be=0,di=null,w0(i)):(Be=0,di=null,to(e,i,m,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var C=ve;if(M?pv(M):C.stateNode.complete){Be=0,di=null;var V=C.sibling;if(V!==null)ve=V;else{var et=C.return;et!==null?(ve=et,nc(et)):ve=null}break e}}Be=0,di=null,to(e,i,m,5);break;case 6:Be=0,di=null,to(e,i,m,6);break;case 8:jh(),sn=6;break t;default:throw Error(a(462))}}HM();break}catch(ht){T0(e,ht)}while(!0);return _a=Vr=null,B.H=l,B.A=h,Ne=r,ve!==null?0:(qe=null,Se=0,Su(),sn)}function HM(){for(;ve!==null&&!tn();)C0(ve)}function C0(e){var i=Jg(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,i===null?nc(e):ve=i}function w0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=qg(r,i,i.pendingProps,i.type,void 0,Se);break;case 11:i=qg(r,i,i.pendingProps,i.type.render,i.ref,Se);break;case 5:ch(i);default:t0(r,i),i=ve=R_(i,Aa),i=Jg(r,i,Aa)}e.memoizedProps=e.pendingProps,i===null?nc(e):ve=i}function to(e,i,r,l){_a=Vr=null,ch(i),ks=null,rl=0;var h=i.return;try{if(CM(e,h,i,r,Se)){sn=1,ku(e,Ci(r,e.current)),ve=null;return}}catch(m){if(h!==null)throw ve=h,m;sn=1,ku(e,Ci(r,e.current)),ve=null;return}i.flags&32768?(Ee||l===1?e=!0:Ks||(Se&536870912)!==0?e=!1:(ir=e=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),D0(i,e)):nc(i)}function nc(e){var i=e;do{if((i.flags&32768)!==0){D0(i,ir);return}e=i.return;var r=UM(i.alternate,i,Aa);if(r!==null){ve=r;return}if(i=i.sibling,i!==null){ve=i;return}ve=i=e}while(i!==null);sn===0&&(sn=5)}function D0(e,i){do{var r=LM(e.alternate,e);if(r!==null){r.flags&=32767,ve=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ve=e;return}ve=e=r}while(e!==null);sn=6,ve=null}function U0(e,i,r,l,h,m,M,C,V){e.cancelPendingCommit=null;do ic();while(Mn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Bf,Ai(e,r,m,M,C,V),e===qe&&(ve=qe=null,Se=0),Js=i,sr=e,Ra=r,Wh=m,qh=h,x0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,XM(ft,function(){return z0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,h=X.p,X.p=2,M=Ne,Ne|=4;try{NM(e,i,r)}finally{Ne=M,X.p=h,B.T=l}}Mn=1,L0(),N0(),O0()}}function L0(){if(Mn===1){Mn=0;var e=sr,i=Js,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var l=X.p;X.p=2;var h=Ne;Ne|=4;try{h0(i,e);var m=od,M=v_(e.containerInfo),C=m.focusedElem,V=m.selectionRange;if(M!==C&&C&&C.ownerDocument&&g_(C.ownerDocument.documentElement,C)){if(V!==null&&Lf(C)){var et=V.start,ht=V.end;if(ht===void 0&&(ht=et),"selectionStart"in C)C.selectionStart=et,C.selectionEnd=Math.min(ht,C.value.length);else{var gt=C.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var ct=at.getSelection(),kt=C.textContent.length,ie=Math.min(V.start,kt),Ve=V.end===void 0?ie:Math.min(V.end,kt);!ct.extend&&ie>Ve&&(M=Ve,Ve=ie,ie=M);var Z=__(C,ie),W=__(C,Ve);if(Z&&W&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==W.node||ct.focusOffset!==W.offset)){var tt=gt.createRange();tt.setStart(Z.node,Z.offset),ct.removeAllRanges(),ie>Ve?(ct.addRange(tt),ct.extend(W.node,W.offset)):(tt.setEnd(W.node,W.offset),ct.addRange(tt))}}}}for(gt=[],ct=C;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<gt.length;C++){var mt=gt[C];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}mc=!!sd,od=sd=null}finally{Ne=h,X.p=l,B.T=r}}e.current=i,Mn=2}}function N0(){if(Mn===2){Mn=0;var e=sr,i=Js,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var l=X.p;X.p=2;var h=Ne;Ne|=4;try{o0(e,i.alternate,i)}finally{Ne=h,X.p=l,B.T=r}}Mn=3}}function O0(){if(Mn===4||Mn===3){Mn=0,F();var e=sr,i=Js,r=Ra,l=x0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,Js=sr=null,P0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(rr=null),As(r),i=i.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(At,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,h=X.p,X.p=2,B.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var C=l[M];m(C.value,{componentStack:C.stack})}}finally{B.T=i,X.p=h}}(Ra&3)!==0&&ic(),ea(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===Yh?Ml++:(Ml=0,Yh=e):Ml=0,El(0)}}function P0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,il(i)))}function ic(){return L0(),N0(),O0(),z0()}function z0(){if(Mn!==5)return!1;var e=sr,i=Wh;Wh=0;var r=As(Ra),l=B.T,h=X.p;try{X.p=32>r?32:r,B.T=null,r=qh,qh=null;var m=sr,M=Ra;if(Mn=0,Js=sr=null,Ra=0,(Ne&6)!==0)throw Error(a(331));var C=Ne;if(Ne|=4,g0(m.current),p0(m,m.current,M,r),Ne=C,El(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(At,m)}catch{}return!0}finally{X.p=h,B.T=l,P0(e,i)}}function B0(e,i,r){i=Ci(r,i),i=bh(e.stateNode,i,2),e=$a(e,i,2),e!==null&&(kn(e,2),ea(e))}function Fe(e,i,r){if(e.tag===3)B0(e,e,r);else for(;i!==null;){if(i.tag===3){B0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rr===null||!rr.has(l))){e=Ci(r,e),r=Fg(2),l=$a(i,r,2),l!==null&&(Ig(r,l,i,e),kn(l,2),ea(l));break}}i=i.return}}function Kh(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new zM;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(Vh=!0,h.add(r),e=GM.bind(null,e,i,r),i.then(e,e))}function GM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,qe===e&&(Se&r)===r&&(sn===4||sn===3&&(Se&62914560)===Se&&300>A()-Qu?(Ne&2)===0&&$s(e,0):kh|=r,Qs===Se&&(Qs=0)),ea(e)}function F0(e,i){i===0&&(i=ze()),e=Ir(e,i),e!==null&&(kn(e,i),ea(e))}function VM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),F0(e,r)}function kM(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),F0(e,r)}function XM(e,i){return ae(e,i)}var ac=null,eo=null,Qh=!1,rc=!1,Jh=!1,lr=0;function ea(e){e!==eo&&e.next===null&&(eo===null?ac=eo=e:eo=eo.next=e),rc=!0,Qh||(Qh=!0,qM())}function El(e,i){if(!Jh&&rc){Jh=!0;do for(var r=!1,l=ac;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var M=l.suspendedLanes,C=l.pingedLanes;m=(1<<31-It(42|e)+1)-1,m&=h&~(M&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,V0(l,m))}else m=Se,m=vt(l,l===qe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Gt(l,m)||(r=!0,V0(l,m));l=l.next}while(r);Jh=!1}}function WM(){I0()}function I0(){rc=Qh=!1;var e=0;lr!==0&&nE()&&(e=lr);for(var i=A(),r=null,l=ac;l!==null;){var h=l.next,m=H0(l,i);m===0?(l.next=null,r===null?ac=h:r.next=h,h===null&&(eo=r)):(r=l,(e!==0||(m&3)!==0)&&(rc=!0)),l=h}Mn!==0&&Mn!==5||El(e),lr!==0&&(lr=0)}function H0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-It(m),C=1<<M,V=h[M];V===-1?((C&r)===0||(C&l)!==0)&&(h[M]=le(C,i)):V<=i&&(e.expiredLanes|=C),m&=~C}if(i=qe,r=Se,r=vt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&an(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Gt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&an(l),As(r)){case 2:case 8:r=Tt;break;case 32:r=ft;break;case 268435456:r=Dt;break;default:r=ft}return l=G0.bind(null,e),r=ae(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&an(l),e.callbackPriority=2,e.callbackNode=null,2}function G0(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(ic()&&e.callbackNode!==r)return null;var l=Se;return l=vt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(M0(e,l,i),H0(e,A()),e.callbackNode!=null&&e.callbackNode===r?G0.bind(null,e):null)}function V0(e,i){if(ic())return null;M0(e,i,!0)}function qM(){aE(function(){(Ne&6)!==0?ae(pt,WM):I0()})}function $h(){if(lr===0){var e=Hs;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),lr=e}return lr}function k0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:du(""+e)}function X0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function YM(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=k0((h[Dn]||null).action),M=l.submitter;M&&(i=(i=M[Dn]||null)?k0(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var C=new gu("action","action",null,l,h);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(lr!==0){var V=M?X0(h,M):new FormData(h);yh(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(C.preventDefault(),V=M?X0(h,M):new FormData(h),yh(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var td=0;td<zf.length;td++){var ed=zf[td],jM=ed.toLowerCase(),ZM=ed[0].toUpperCase()+ed.slice(1);Hi(jM,"on"+ZM)}Hi(S_,"onAnimationEnd"),Hi(M_,"onAnimationIteration"),Hi(E_,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(fM,"onTransitionRun"),Hi(hM,"onTransitionStart"),Hi(dM,"onTransitionCancel"),Hi(T_,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function W0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var C=l[M],V=C.instance,et=C.currentTarget;if(C=C.listener,V!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=et;try{m(h)}catch(ht){xu(ht)}h.currentTarget=null,m=V}else for(M=0;M<l.length;M++){if(C=l[M],V=C.instance,et=C.currentTarget,C=C.listener,V!==m&&h.isPropagationStopped())break t;m=C,h.currentTarget=et;try{m(h)}catch(ht){xu(ht)}h.currentTarget=null,m=V}}}}function ye(e,i){var r=i[Wo];r===void 0&&(r=i[Wo]=new Set);var l=e+"__bubble";r.has(l)||(q0(i,e,2,!1),r.add(l))}function nd(e,i,r){var l=0;i&&(l|=4),q0(r,e,l,i)}var sc="_reactListening"+Math.random().toString(36).slice(2);function id(e){if(!e[sc]){e[sc]=!0,Pt.forEach(function(r){r!=="selectionchange"&&(KM.has(r)||nd(r,!1,e),nd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[sc]||(i[sc]=!0,nd("selectionchange",!1,i))}}function q0(e,i,r,l){switch(Sv(i)){case 2:var h=TE;break;case 8:h=bE;break;default:h=vd}r=h.bind(null,i,r,e),h=void 0,!Ef||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function ad(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===h)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===h)return;M=M.return}for(;C!==null;){if(M=j(C),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=m=M;continue t}C=C.parentNode}}l=l.return}Qm(function(){var et=m,ht=Sf(r),gt=[];t:{var at=b_.get(e);if(at!==void 0){var ct=gu,kt=e;switch(e){case"keypress":if(mu(r)===0)break t;case"keydown":case"keyup":ct=kS;break;case"focusin":kt="focus",ct=Rf;break;case"focusout":kt="blur",ct=Rf;break;case"beforeblur":case"afterblur":ct=Rf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=t_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=US;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=qS;break;case S_:case M_:case E_:ct=OS;break;case T_:ct=jS;break;case"scroll":case"scrollend":ct=wS;break;case"wheel":ct=KS;break;case"copy":case"cut":case"paste":ct=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=n_;break;case"toggle":case"beforetoggle":ct=JS}var ie=(i&4)!==0,Ve=!ie&&(e==="scroll"||e==="scrollend"),Z=ie?at!==null?at+"Capture":null:at;ie=[];for(var W=et,tt;W!==null;){var mt=W;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||Z===null||(mt=qo(W,Z),mt!=null&&ie.push(bl(W,mt,tt))),Ve)break;W=W.return}0<ie.length&&(at=new ct(at,kt,null,r,ht),gt.push({event:at,listeners:ie}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&r!==xf&&(kt=r.relatedTarget||r.fromElement)&&(j(kt)||kt[Wa]))break t;if((ct||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(kt=r.relatedTarget||r.toElement,ct=et,kt=kt?j(kt):null,kt!==null&&(Ve=u(kt),ie=kt.tag,kt!==Ve||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(ct=null,kt=et),ct!==kt)){if(ie=t_,mt="onMouseLeave",Z="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=n_,mt="onPointerLeave",Z="onPointerEnter",W="pointer"),Ve=ct==null?at:lt(ct),tt=kt==null?at:lt(kt),at=new ie(mt,W+"leave",ct,r,ht),at.target=Ve,at.relatedTarget=tt,mt=null,j(ht)===et&&(ie=new ie(Z,W+"enter",kt,r,ht),ie.target=tt,ie.relatedTarget=Ve,mt=ie),Ve=mt,ct&&kt)e:{for(ie=QM,Z=ct,W=kt,tt=0,mt=Z;mt;mt=ie(mt))tt++;mt=0;for(var ee=W;ee;ee=ie(ee))mt++;for(;0<tt-mt;)Z=ie(Z),tt--;for(;0<mt-tt;)W=ie(W),mt--;for(;tt--;){if(Z===W||W!==null&&Z===W.alternate){ie=Z;break e}Z=ie(Z),W=ie(W)}ie=null}else ie=null;ct!==null&&Y0(gt,at,ct,ie,!1),kt!==null&&Ve!==null&&Y0(gt,Ve,kt,ie,!0)}}t:{if(at=et?lt(et):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var we=c_;else if(l_(at))if(f_)we=lM;else{we=sM;var qt=rM}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&yf(et.elementType)&&(we=c_):we=oM;if(we&&(we=we(e,et))){u_(gt,we,r,ht);break t}qt&&qt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Sn(at,"number",at.value)}switch(qt=et?lt(et):window,e){case"focusin":(l_(qt)||qt.contentEditable==="true")&&(Ls=qt,Nf=et,tl=null);break;case"focusout":tl=Nf=Ls=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,y_(gt,r,ht);break;case"selectionchange":if(cM)break;case"keydown":case"keyup":y_(gt,r,ht)}var he;if(wf)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Us?s_(e,r)&&(Me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Me="onCompositionStart");Me&&(i_&&r.locale!=="ko"&&(Us||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Us&&(he=Jm()):(qa=ht,Tf="value"in qa?qa.value:qa.textContent,Us=!0)),qt=oc(et,Me),0<qt.length&&(Me=new e_(Me,e,null,r,ht),gt.push({event:Me,listeners:qt}),he?Me.data=he:(he=o_(r),he!==null&&(Me.data=he)))),(he=tM?eM(e,r):nM(e,r))&&(Me=oc(et,"onBeforeInput"),0<Me.length&&(qt=new e_("onBeforeInput","beforeinput",null,r,ht),gt.push({event:qt,listeners:Me}),qt.data=he)),YM(gt,e,et,r,ht)}W0(gt,i)})}function bl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function oc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=qo(e,r),h!=null&&l.unshift(bl(e,h,m)),h=qo(e,i),h!=null&&l.push(bl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function QM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Y0(e,i,r,l,h){for(var m=i._reactName,M=[];r!==null&&r!==l;){var C=r,V=C.alternate,et=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||et===null||(V=et,h?(et=qo(r,m),et!=null&&M.unshift(bl(r,et,V))):h||(et=qo(r,m),et!=null&&M.push(bl(r,et,V)))),r=r.return}M.length!==0&&e.push({event:i,listeners:M})}var JM=/\r\n?/g,$M=/\u0000|\uFFFD/g;function j0(e){return(typeof e=="string"?e:""+e).replace(JM,`
`).replace($M,"")}function Z0(e,i){return i=j0(i),j0(e)===i}function Ge(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Cs(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Cs(e,""+l);break;case"className":Pe(e,"class",l);break;case"tabIndex":Pe(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,r,l);break;case"style":Zm(e,l,m);break;case"data":if(i!=="object"){Pe(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=du(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ge(e,i,"name",h.name,h,null),Ge(e,i,"formEncType",h.formEncType,h,null),Ge(e,i,"formMethod",h.formMethod,h,null),Ge(e,i,"formTarget",h.formTarget,h,null)):(Ge(e,i,"encType",h.encType,h,null),Ge(e,i,"method",h.method,h,null),Ge(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=du(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=ha);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=du(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),We(e,"popover",l);break;case"xlinkActuate":ge(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ge(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ge(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ge(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ge(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ge(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ge(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ge(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ge(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":We(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=RS.get(r)||r,We(e,r,l))}}function rd(e,i,r,l,h,m){switch(r){case"style":Zm(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Cs(e,l):(typeof l=="number"||typeof l=="bigint")&&Cs(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Dn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):We(e,r,l)}}}function Pn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,m,M,r,null)}}h&&Ge(e,i,"srcSet",r.srcSet,r,null),l&&Ge(e,i,"src",r.src,r,null);return;case"input":ye("invalid",e);var C=m=M=h=null,V=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var ht=r[l];if(ht!=null)switch(l){case"name":h=ht;break;case"type":M=ht;break;case"checked":V=ht;break;case"defaultChecked":et=ht;break;case"value":m=ht;break;case"defaultValue":C=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(a(137,i));break;default:Ge(e,i,l,ht,r,null)}}Xn(e,m,C,V,et,M,h,!1);return;case"select":ye("invalid",e),l=M=m=null;for(h in r)if(r.hasOwnProperty(h)&&(C=r[h],C!=null))switch(h){case"value":m=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:Ge(e,i,h,C,r,null)}i=m,r=M,e.multiple=!!l,i!=null?ln(e,!!l,i,!1):r!=null&&ln(e,!!l,r,!0);return;case"textarea":ye("invalid",e),m=h=l=null;for(M in r)if(r.hasOwnProperty(M)&&(C=r[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":h=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ge(e,i,M,C,r,null)}Qi(e,l,h,m);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ge(e,i,V,l,r,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<Tl.length;l++)ye(Tl[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,et,l,r,null)}return;default:if(yf(i)){for(ht in r)r.hasOwnProperty(ht)&&(l=r[ht],l!==void 0&&rd(e,i,ht,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&Ge(e,i,C,l,r,null))}function tE(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,M=null,C=null,V=null,et=null,ht=null;for(ct in r){var gt=r[ct];if(r.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":V=gt;default:l.hasOwnProperty(ct)||Ge(e,i,ct,null,l,gt)}}for(var at in l){var ct=l[at];if(gt=r[at],l.hasOwnProperty(at)&&(ct!=null||gt!=null))switch(at){case"type":m=ct;break;case"name":h=ct;break;case"checked":et=ct;break;case"defaultChecked":ht=ct;break;case"value":M=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==gt&&Ge(e,i,at,ct,l,gt)}}Bn(e,M,C,V,et,ht,m,h);return;case"select":ct=M=C=at=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ct=V;default:l.hasOwnProperty(m)||Ge(e,i,m,null,l,V)}for(h in l)if(m=l[h],V=r[h],l.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":at=m;break;case"defaultValue":C=m;break;case"multiple":M=m;default:m!==V&&Ge(e,i,h,m,l,V)}i=C,r=M,l=ct,at!=null?ln(e,!!r,at,!1):!!l!=!!r&&(i!=null?ln(e,!!r,i,!0):ln(e,!!r,r?[]:"",!1));return;case"textarea":ct=at=null;for(C in r)if(h=r[C],r.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ge(e,i,C,null,l,h)}for(M in l)if(h=l[M],m=r[M],l.hasOwnProperty(M)&&(h!=null||m!=null))switch(M){case"value":at=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ge(e,i,M,h,l,m)}Rs(e,at,ct);return;case"option":for(var kt in r)if(at=r[kt],r.hasOwnProperty(kt)&&at!=null&&!l.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ge(e,i,kt,null,l,at)}for(V in l)if(at=l[V],ct=r[V],l.hasOwnProperty(V)&&at!==ct&&(at!=null||ct!=null))switch(V){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ge(e,i,V,at,l,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)at=r[ie],r.hasOwnProperty(ie)&&at!=null&&!l.hasOwnProperty(ie)&&Ge(e,i,ie,null,l,at);for(et in l)if(at=l[et],ct=r[et],l.hasOwnProperty(et)&&at!==ct&&(at!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:Ge(e,i,et,at,l,ct)}return;default:if(yf(i)){for(var Ve in r)at=r[Ve],r.hasOwnProperty(Ve)&&at!==void 0&&!l.hasOwnProperty(Ve)&&rd(e,i,Ve,void 0,l,at);for(ht in l)at=l[ht],ct=r[ht],!l.hasOwnProperty(ht)||at===ct||at===void 0&&ct===void 0||rd(e,i,ht,at,l,ct);return}}for(var Z in r)at=r[Z],r.hasOwnProperty(Z)&&at!=null&&!l.hasOwnProperty(Z)&&Ge(e,i,Z,null,l,at);for(gt in l)at=l[gt],ct=r[gt],!l.hasOwnProperty(gt)||at===ct||at==null&&ct==null||Ge(e,i,gt,at,l,ct)}function K0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,M=h.initiatorType,C=h.duration;if(m&&C&&K0(M)){for(M=0,C=h.responseEnd,l+=1;l<r.length;l++){var V=r[l],et=V.startTime;if(et>C)break;var ht=V.transferSize,gt=V.initiatorType;ht&&K0(gt)&&(V=V.responseEnd,M+=ht*(V<C?1:(C-et)/(V-et)))}if(--l,i+=8*(m+M)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var sd=null,od=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function Q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ld(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ud=null;function nE(){var e=window.event;return e&&e.type==="popstate"?e===ud?!1:(ud=e,!0):(ud=null,!1)}var $0=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,aE=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(e){return tv.resolve(null).then(e).catch(rE)}:$0;function rE(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function ev(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),ro(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Al(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Al(r);for(var m=r.firstChild;m;){var M=m.nextSibling,C=m.nodeName;m[Or]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&Al(e.ownerDocument.body);r=h}while(r);ro(i)}function nv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function cd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":cd(r),D(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function sE(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Or])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function oE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ni(e.nextSibling),e===null))return null;return e}function iv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ni(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function hd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lE(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ni(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var dd=null;function av(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Ni(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function rv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function sv(e,i,r){switch(i=lc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);D(e)}var Oi=new Map,ov=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ca=X.d;X.d={f:uE,r:cE,D:fE,C:hE,L:dE,m:pE,X:_E,S:mE,M:gE};function uE(){var e=Ca.f(),i=tc();return e||i}function cE(e){var i=ot(e);i!==null&&i.tag===5&&i.type==="form"?Tg(i):Ca.r(e)}var no=typeof document>"u"?null:document;function lv(e,i,r){var l=no;if(l&&typeof i=="string"&&i){var h=xe(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),ov.has(h)||(ov.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Pn(i,"link",e),yt(i),l.head.appendChild(i)))}}function fE(e){Ca.D(e),lv("dns-prefetch",e,null)}function hE(e,i){Ca.C(e,i),lv("preconnect",e,i)}function dE(e,i,r){Ca.L(e,i,r);var l=no;if(l&&e&&i){var h='link[rel="preload"][as="'+xe(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+xe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+xe(r.imageSizes)+'"]')):h+='[href="'+xe(e)+'"]';var m=h;switch(i){case"style":m=io(e);break;case"script":m=ao(e)}Oi.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Oi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Rl(m))||i==="script"&&l.querySelector(Cl(m))||(i=l.createElement("link"),Pn(i,"link",e),yt(i),l.head.appendChild(i)))}}function pE(e,i){Ca.m(e,i);var r=no;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+xe(l)+'"][href="'+xe(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ao(e)}if(!Oi.has(m)&&(e=g({rel:"modulepreload",href:e},i),Oi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Cl(m)))return}l=r.createElement("link"),Pn(l,"link",e),yt(l),r.head.appendChild(l)}}}function mE(e,i,r){Ca.S(e,i,r);var l=no;if(l&&e){var h=Q(l).hoistableStyles,m=io(e);i=i||"default";var M=h.get(m);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(Rl(m)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Oi.get(m))&&pd(e,r);var V=M=l.createElement("link");yt(V),Pn(V,"link",e),V._p=new Promise(function(et,ht){V.onload=et,V.onerror=ht}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,cc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:C},h.set(m,M)}}}function _E(e,i){Ca.X(e,i);var r=no;if(r&&e){var l=Q(r).hoistableScripts,h=ao(e),m=l.get(h);m||(m=r.querySelector(Cl(h)),m||(e=g({src:e,async:!0},i),(i=Oi.get(h))&&md(e,i),m=r.createElement("script"),yt(m),Pn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function gE(e,i){Ca.M(e,i);var r=no;if(r&&e){var l=Q(r).hoistableScripts,h=ao(e),m=l.get(h);m||(m=r.querySelector(Cl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Oi.get(h))&&md(e,i),m=r.createElement("script"),yt(m),Pn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function uv(e,i,r,l){var h=(h=it.current)?uc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=io(r.href),r=Q(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=io(r.href);var m=Q(h).hoistableStyles,M=m.get(e);if(M||(h=h.ownerDocument||h,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=h.querySelector(Rl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),Oi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Oi.set(e,r),m||vE(h,e,r,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ao(r),r=Q(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function io(e){return'href="'+xe(e)+'"'}function Rl(e){return'link[rel="stylesheet"]['+e+"]"}function cv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function vE(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Pn(i,"link",r),yt(i),e.head.appendChild(i))}function ao(e){return'[src="'+xe(e)+'"]'}function Cl(e){return"script[async]"+e}function fv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+xe(r.href)+'"]');if(l)return i.instance=l,yt(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),yt(l),Pn(l,"style",h),cc(l,r.precedence,e),i.instance=l;case"stylesheet":h=io(r.href);var m=e.querySelector(Rl(h));if(m)return i.state.loading|=4,i.instance=m,yt(m),m;l=cv(r),(h=Oi.get(h))&&pd(l,h),m=(e.ownerDocument||e).createElement("link"),yt(m);var M=m;return M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Pn(m,"link",l),i.state.loading|=4,cc(m,r.precedence,e),i.instance=m;case"script":return m=ao(r.src),(h=e.querySelector(Cl(m)))?(i.instance=h,yt(h),h):(l=r,(h=Oi.get(m))&&(l=g({},r),md(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),yt(h),Pn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,cc(l,r.precedence,e));return i.instance}function cc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===i)m=C;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function pd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function md(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fc=null;function hv(e,i,r){if(fc===null){var l=new Map,h=fc=new Map;h.set(r,l)}else h=fc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Or]||m[dn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=e+M;var C=l.get(M);C?C.push(m):l.set(M,[m])}}return l}function dv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function yE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function pv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xE(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=io(l.href),m=i.querySelector(Rl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=hc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,yt(m);return}m=i.ownerDocument||i,l=cv(l),(h=Oi.get(h))&&pd(l,h),m=m.createElement("link"),yt(m);var M=m;M._p=new Promise(function(C,V){M.onload=C,M.onerror=V}),Pn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=hc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var _d=0;function SE(e,i){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&_d===0&&(_d=62500*eE());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>_d?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,i.forEach(ME,e),dc=null,hc.call(e))}function ME(e,i){if(!(i.state.loading&4)){var r=dc.get(e);if(r)var l=r.get(null);else{r=new Map,dc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var M=h[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}h=i.instance,M=h.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,h),r.set(M,h),this.count++,l=hc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var wl={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function EE(e,i,r,l,h,m,M,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function mv(e,i,r,l,h,m,M,C,V,et,ht,gt){return e=new EE(e,i,r,M,V,et,ht,gt,C),i=1,m===!0&&(i|=24),m=ci(3,null,null,i),e.current=m,m.stateNode=e,i=Zf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},$f(m),e}function _v(e){return e?(e=Ps,e):Ps}function gv(e,i,r,l,h,m){h=_v(h),l.context===null?l.context=h:l.pendingContext=h,l=Ja(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=$a(e,l,i),r!==null&&($n(r,e,i),ol(r,e,i))}function vv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function gd(e,i){vv(e,i),(e=e.alternate)&&vv(e,i)}function yv(e){if(e.tag===13||e.tag===31){var i=Ir(e,67108864);i!==null&&$n(i,e,67108864),gd(e,67108864)}}function xv(e){if(e.tag===13||e.tag===31){var i=mi();i=bs(i);var r=Ir(e,i);r!==null&&$n(r,e,i),gd(e,i)}}var mc=!0;function TE(e,i,r,l){var h=B.T;B.T=null;var m=X.p;try{X.p=2,vd(e,i,r,l)}finally{X.p=m,B.T=h}}function bE(e,i,r,l){var h=B.T;B.T=null;var m=X.p;try{X.p=8,vd(e,i,r,l)}finally{X.p=m,B.T=h}}function vd(e,i,r,l){if(mc){var h=yd(l);if(h===null)ad(e,i,l,_c,r),Mv(e,l);else if(RE(h,e,i,r,l))l.stopPropagation();else if(Mv(e,l),i&4&&-1<AE.indexOf(e)){for(;h!==null;){var m=ot(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=bt(m.pendingLanes);if(M!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var V=1<<31-It(M);C.entanglements[1]|=V,M&=~V}ea(m),(Ne&6)===0&&(Ju=A()+500,El(0))}}break;case 31:case 13:C=Ir(m,2),C!==null&&$n(C,m,2),tc(),gd(m,2)}if(m=yd(l),m===null&&ad(e,i,l,_c,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else ad(e,i,l,null,r)}}function yd(e){return e=Sf(e),xd(e)}var _c=null;function xd(e){if(_c=null,e=j(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return _c=e,null}function Sv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case pt:return 2;case Tt:return 8;case ft:case Kt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Sd=!1,cr=null,fr=null,hr=null,Dl=new Map,Ul=new Map,dr=[],AE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mv(e,i){switch(e){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Dl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(i.pointerId)}}function Ll(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ot(i),i!==null&&yv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function RE(e,i,r,l,h){switch(i){case"focusin":return cr=Ll(cr,e,i,r,l,h),!0;case"dragenter":return fr=Ll(fr,e,i,r,l,h),!0;case"mouseover":return hr=Ll(hr,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Dl.set(m,Ll(Dl.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Ul.set(m,Ll(Ul.get(m)||null,e,i,r,l,h)),!0}return!1}function Ev(e){var i=j(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Xo(e.priority,function(){xv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Xo(e.priority,function(){xv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=yd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);xf=l,r.target.dispatchEvent(l),xf=null}else return i=ot(r),i!==null&&yv(i),e.blockedOn=r,!1;i.shift()}return!0}function Tv(e,i,r){gc(e)&&r.delete(i)}function CE(){Sd=!1,cr!==null&&gc(cr)&&(cr=null),fr!==null&&gc(fr)&&(fr=null),hr!==null&&gc(hr)&&(hr=null),Dl.forEach(Tv),Ul.forEach(Tv)}function vc(e,i){e.blockedOn===i&&(e.blockedOn=null,Sd||(Sd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,CE)))}var yc=null;function bv(e){yc!==e&&(yc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(xd(l||r)===null)continue;break}var m=ot(r);m!==null&&(e.splice(i,3),i-=3,yh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function ro(e){function i(V){return vc(V,e)}cr!==null&&vc(cr,e),fr!==null&&vc(fr,e),hr!==null&&vc(hr,e),Dl.forEach(i),Ul.forEach(i);for(var r=0;r<dr.length;r++){var l=dr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<dr.length&&(r=dr[0],r.blockedOn===null);)Ev(r),r.blockedOn===null&&dr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],M=h[Dn]||null;if(typeof m=="function")M||bv(r);else if(M){var C=null;if(m&&m.hasAttribute("formAction")){if(h=m,M=m[Dn]||null)C=M.formAction;else if(xd(h)!==null)continue}else C=M.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),bv(r)}}}function Av(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return h=M})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Md(e){this._internalRoot=e}xc.prototype.render=Md.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=mi();gv(r,l,e,i,null,null)},xc.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;gv(e.current,2,null,e,null,null),tc(),i[Wa]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Nr();e={blockedOn:null,target:e,priority:i};for(var r=0;r<dr.length&&i!==0&&i<dr[r].priority;r++);dr.splice(r,0,e),r===0&&Ev(e)}};var Rv=t.version;if(Rv!=="19.2.0")throw Error(a(527,Rv,"19.2.0"));X.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var wE={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{At=Sc.inject(wE),Ut=Sc}catch{}}return Ol.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=Og,m=Pg,M=zg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=mv(e,1,!1,null,null,r,l,null,h,m,M,Av),e[Wa]=i.current,id(e),new Md(i)},Ol.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=Og,M=Pg,C=zg,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=mv(e,1,!0,i,r??null,l,h,V,m,M,C,Av),i.context=_v(null),r=i.current,l=mi(),l=bs(l),h=Ja(l),h.callback=null,$a(r,h,l),r=l,i.current.lanes=r,kn(i,r),ea(i),e[Wa]=i.current,id(e),new xc(i)},Ol.version="19.2.0",Ol}var Bv;function GE(){if(Bv)return bd.exports;Bv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),bd.exports=HE(),bd.exports}var VE=GE();function Pa(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Ky(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Do={duration:.5,overwrite:!1,delay:0},xm,zn,$e,Bi=1e8,je=1/Bi,mp=Math.PI*2,kE=mp/4,XE=0,Qy=Math.sqrt,WE=Math.cos,qE=Math.sin,wn=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},Ha=function(t){return typeof t=="number"},Sm=function(t){return typeof t>"u"},ca=function(t){return typeof t=="object"},ei=function(t){return t!==!1},Mm=function(){return typeof window<"u"},Mc=function(t){return on(t)||wn(t)},Jy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,_p=/(?:-?\.?\d|\.)+/gi,$y=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,tx=/[+-]=-?[.\d]+/,ex=/[^,'"\[\]\s]+/gi,YE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,en,na,gp,Em,Ti={},tf={},nx,ix=function(t){return(tf=Uo(t,Ti))&&oi},Tm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Yl=function(t,n){return!n&&console.warn(t)},ax=function(t,n){return t&&(Ti[t]=n)&&tf&&(tf[t]=n)||Ti},jl=function(){return 0},jE={suppressEvents:!0,isStart:!0,kill:!1},Wc={suppressEvents:!0,kill:!1},ZE={suppressEvents:!0},bm={},br=[],vp={},rx,vi={},Dd={},Fv=30,qc=[],Am="",Rm=function(t){var n=t[0],a,s;if(ca(n)||on(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=qc.length;s--&&!qc[s].targetTest(n););a=qc[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new wx(t[s],a)))||t.splice(s,1);return t},ps=function(t){return t._gsap||Rm(Fi(t))[0]._gsap},sx=function(t,n,a){return(a=t[n])&&on(a)?t[n]():Sm(a)&&t.getAttribute&&t.getAttribute(n)||a},ni=function(t,n){return(t=t.split(",")).forEach(n)||t},fn=function(t){return Math.round(t*1e5)/1e5||0},xn=function(t){return Math.round(t*1e7)/1e7||0},bo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},KE=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},ef=function(){var t=br.length,n=br.slice(0),a,s;for(vp={},br.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Cm=function(t){return!!(t._initted||t._startAt||t.add)},ox=function(t,n,a,s){br.length&&!zn&&ef(),t.render(n,a,!!(zn&&n<0&&Cm(t))),br.length&&!zn&&ef()},lx=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(ex).length<2?n:wn(t)?t.trim():t},ux=function(t){return t},bi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},QE=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Uo=function(t,n){for(var a in n)t[a]=n[a];return t},Iv=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=ca(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},nf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},Xl=function(t){var n=t.parent||en,a=t.keyframes?QE(Vn(t.keyframes)):bi;if(ei(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},JE=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},cx=function(t,n,a,s,u){var c=t[s],f;if(u)for(f=n[u];c&&c[u]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},ff=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,c=n._next;u?u._next=c:t[a]===n&&(t[a]=c),c?c._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},wr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ms=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},$E=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},yp=function(t,n,a,s){return t._startAt&&(zn?t._startAt.revert(Wc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},tT=function o(t){return!t||t._ts&&o(t.parent)},Hv=function(t){return t._repeat?Lo(t._tTime,t=t.duration()+t._rDelay)*t:0},Lo=function(t,n){var a=Math.floor(t=xn(t/n));return t&&a===t?a-1:a},af=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},hf=function(t){return t._end=xn(t._start+(t._tDur/Math.abs(t._ts||t._rts||je)||0))},df=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=xn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),hf(t),a._dirty||ms(a,t)),t},fx=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=af(t.rawTime(),n),(!n._dur||ru(0,n.totalDuration(),a)-n._tTime>je)&&n.render(a,!0)),ms(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-je}},aa=function(t,n,a,s){return n.parent&&wr(n),n._start=xn((Ha(a)?a:a||t!==en?zi(t,a,n):t._time)+n._delay),n._end=xn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),cx(t,n,"_first","_last",t._sort?"_start":0),xp(n)||(t._recent=n),s||fx(t,n),t._ts<0&&df(t,t._tTime),t},hx=function(t,n){return(Ti.ScrollTrigger||Tm("scrollTrigger",n))&&Ti.ScrollTrigger.create(n,t)},dx=function(t,n,a,s,u){if(Dm(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!zn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rx!==xi.frame)return br.push(t),t._lazy=[u,s],1},eT=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},xp=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},nT=function(t,n,a,s){var u=t.ratio,c=n<0||!n&&(!t._start&&eT(t)&&!(!t._initted&&xp(t))||(t._ts<0||t._dp._ts<0)&&!xp(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=ru(0,t._tDur,n),_=Lo(p,f),t._yoyo&&_&1&&(c=1-c),_!==Lo(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||zn||s||t._zTime===je||!n&&t._zTime){if(!t._initted&&dx(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?je:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&yp(t,n,a,!0),t._onUpdate&&!a&&Si(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Si(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&wr(t,1),!a&&!zn&&(Si(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},iT=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},No=function(t,n,a,s){var u=t._repeat,c=xn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:xn(c*(u+1)+t._rDelay*u):c,f>0&&!s&&df(t,t._tTime=t._tDur*f),t.parent&&hf(t),a||ms(t.parent,t),t},Gv=function(t){return t instanceof Yn?ms(t):No(t,t._dur)},aT={_start:0,endTime:jl,totalDuration:jl},zi=function o(t,n,a){var s=t.labels,u=t._recent||aT,c=t.duration()>=Bi?u.endTime(!1):t._dur,f,p,d;return wn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?u:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Vn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},Wl=function(t,n,a){var s=Ha(n[1]),u=(s?2:1)+(t<2?0:1),c=n[u],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ei(p.vars.inherit)&&p.parent;c.immediateRender=ei(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[u-1]}return new yn(n[0],c,n[u+1])},Lr=function(t,n){return t||t===0?n(t):n},ru=function(t,n,a){return a<t?t:a>n?n:a},Gn=function(t,n){return!wn(t)||!(n=YE.exec(t))?"":n[1]},rT=function(t,n,a){return Lr(a,function(s){return ru(t,n,s)})},Sp=[].slice,px=function(t,n){return t&&ca(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ca(t[0]))&&!t.nodeType&&t!==na},sT=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return wn(s)&&!n||px(s,1)?(u=a).push.apply(u,Fi(s)):a.push(s)})||a},Fi=function(t,n,a){return $e&&!n&&$e.selector?$e.selector(t):wn(t)&&!a&&(gp||!Oo())?Sp.call((n||Em).querySelectorAll(t),0):Vn(t)?sT(t,a):px(t)?Sp.call(t,0):t?[t]:[]},Mp=function(t){return t=Fi(t)[0]||Yl("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Fi(n,a.querySelectorAll?a:a===t?Yl("Invalid scope")||Em.createElement("div"):t)}},mx=function(t){return t.sort(function(){return .5-Math.random()})},_x=function(t){if(on(t))return t;var n=ca(t)?t:{each:t},a=_s(n.ease),s=n.from||0,u=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return wn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,x,T){var E=(T||n).length,S=c[E],y,N,L,R,O,P,U,I,b;if(!S){if(b=n.grid==="auto"?0:(n.grid||[1,Bi])[1],!b){for(U=-Bi;U<(U=T[b++].getBoundingClientRect().left)&&b<E;);b<E&&b--}for(S=c[E]=[],y=p?Math.min(b,E)*_-.5:s%b,N=b===Bi?0:p?E*g/b-.5:s/b|0,U=0,I=Bi,P=0;P<E;P++)L=P%b-y,R=N-(P/b|0),S[P]=O=d?Math.abs(d==="y"?R:L):Qy(L*L+R*R),O>U&&(U=O),O<I&&(I=O);s==="random"&&mx(S),S.max=U-I,S.min=I,S.v=E=(parseFloat(n.amount)||parseFloat(n.each)*(b>E?E-1:d?d==="y"?E/b:b:Math.max(b,E/b))||0)*(s==="edges"?-1:1),S.b=E<0?u-E:u,S.u=Gn(n.amount||n.each)||0,a=a&&E<0?Ax(a):a}return E=(S[v]-S.min)/S.max||0,xn(S.b+(a?a(E):E)*S.v)+S.u}},Ep=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=xn(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(Ha(a)?0:Gn(a))}},gx=function(t,n){var a=Vn(t),s,u;return!a&&ca(t)&&(s=a=t.radius||Bi,t.values?(t=Fi(t.values),(u=!Ha(t[0]))&&(s*=s)):t=Ep(t.increment)),Lr(n,a?on(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),p=parseFloat(u?c.y:0),d=Bi,_=0,g=t.length,v,x;g--;)u?(v=t[g].x-f,x=t[g].y-p,v=v*v+x*x):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,u||_===c||Ha(c)?_:_+Gn(c)}:Ep(t))},vx=function(t,n,a,s){return Lr(Vn(t)?!n:a===!0?!!(a=0):!s,function(){return Vn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},oT=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,c){return c(u)},s)}},lT=function(t,n){return function(a){return t(parseFloat(a))+(n||Gn(a))}},uT=function(t,n,a){return xx(t,n,0,1,a)},yx=function(t,n,a){return Lr(a,function(s){return t[~~n(s)]})},cT=function o(t,n,a){var s=n-t;return Vn(t)?yx(t,o(0,t.length),n):Lr(a,function(u){return(s+(u-t)%s)%s+t})},fT=function o(t,n,a){var s=n-t,u=s*2;return Vn(t)?yx(t,o(0,t.length-1),n):Lr(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},Zl=function(t){for(var n=0,a="",s,u,c,f;~(s=t.indexOf("random(",n));)c=t.indexOf(")",s),f=t.charAt(s+7)==="[",u=t.substr(s+7,c-s-7).match(f?ex:_p),a+=t.substr(n,s-n)+vx(f?u:+u[0],f?0:+u[1],+u[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},xx=function(t,n,a,s,u){var c=n-t,f=s-a;return Lr(u,function(p){return a+((p-t)/c*f||0)})},hT=function o(t,n,a,s){var u=isNaN(t+n)?0:function(x){return(1-x)*t+x*n};if(!u){var c=wn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Vn(t)&&!Vn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,u=function(T){T*=g;var E=Math.min(v,~~T);return _[E](T-E)},a=n}else s||(t=Uo(Vn(t)?[]:{},t));if(!_){for(p in n)wm.call(f,t,p,"get",n[p]);u=function(T){return Nm(T,f)||(c?t.p:t)}}}return Lr(a,u)},Vv=function(t,n,a){var s=t.labels,u=Bi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&u>(f=Math.abs(f))&&(p=c,u=f);return p},Si=function(t,n,a){var s=t.vars,u=s[n],c=$e,f=t._ctx,p,d,_;if(u)return p=s[n+"Params"],d=s.callbackScope||t,a&&br.length&&ef(),f&&($e=f),_=p?u.apply(d,p):u.call(d),$e=c,_},Gl=function(t){return wr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!zn),t.progress()<1&&Si(t,"onInterrupt"),t},Eo,Sx=[],Mx=function(t){if(t)if(t=!t.name&&t.default||t,Mm()||t.headless){var n=t.name,a=on(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:jl,render:Nm,add:wm,kill:CT,modifier:RT,rawVars:0},c={targetTest:0,get:0,getSetter:Lm,aliases:{},register:0};if(Oo(),t!==s){if(vi[n])return;bi(s,bi(nf(t,u),c)),Uo(s.prototype,Uo(u,nf(t,c))),vi[s.prop=n]=s,t.targetTest&&(qc.push(s),bm[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}ax(n,s),t.register&&t.register(oi,s,ii)}else Sx.push(t)},Ye=255,Vl={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},Ud=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Ye+.5|0},Ex=function(t,n,a){var s=t?Ha(t)?[t>>16,t>>8&Ye,t&Ye]:0:Vl.black,u,c,f,p,d,_,g,v,x,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vl[t])s=Vl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ye,s&Ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ye,t&Ye]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(_p),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,u=_*2-c,s.length>3&&(s[3]*=1),s[0]=Ud(p+1/3,u,c),s[1]=Ud(p,u,c),s[2]=Ud(p-1/3,u,c);else if(~t.indexOf("="))return s=t.match($y),a&&s.length<4&&(s[3]=1),s}else s=t.match(_p)||Vl.transparent;s=s.map(Number)}return n&&!T&&(u=s[0]/Ye,c=s[1]/Ye,f=s[2]/Ye,g=Math.max(u,c,f),v=Math.min(u,c,f),_=(g+v)/2,g===v?p=d=0:(x=g-v,d=_>.5?x/(2-g-v):x/(g+v),p=g===u?(c-f)/x+(c<f?6:0):g===c?(f-u)/x+2:(u-c)/x+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},Tx=function(t){var n=[],a=[],s=-1;return t.split(Ar).forEach(function(u){var c=u.match(Mo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},kv=function(t,n,a){var s="",u=(t+s).match(Ar),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!u)return t;if(u=u.map(function(v){return(v=Ex(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=Tx(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Ar,"1").split(Mo),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?u.shift()||c+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!d)for(d=t.split(Ar),g=d.length-1;f<g;f++)s+=d[f]+u[f];return s+d[g]},Ar=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vl)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),dT=/hsl[a]?\(/,bx=function(t){var n=t.join(" "),a;if(Ar.lastIndex=0,Ar.test(n))return a=dT.test(n),t[1]=kv(t[1],a),t[0]=kv(t[0],a,Tx(t[1])),!0},Kl,xi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,c=u,f=[],p,d,_,g,v,x,T=function E(S){var y=o()-s,N=S===!0,L,R,O,P;if((y>t||y<0)&&(a+=y-n),s+=y,O=s-a,L=O-c,(L>0||N)&&(P=++g.frame,v=O-g.time*1e3,g.time=O=O/1e3,c+=L+(L>=u?4:u-L),R=1),N||(p=d(E)),R)for(x=0;x<f.length;x++)f[x](O,v,P,S)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(S){return v/(1e3/(S||60))},wake:function(){nx&&(!gp&&Mm()&&(na=gp=window,Em=na.document||{},Ti.gsap=oi,(na.gsapVersions||(na.gsapVersions=[])).push(oi.version),ix(tf||na.GreenSockGlobals||!na.gsap&&na||{}),Sx.forEach(Mx)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(S){return setTimeout(S,c-g.time*1e3+1|0)},Kl=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Kl=0,d=jl},lagSmoothing:function(S,y){t=S||1/0,n=Math.min(y||33,t)},fps:function(S){u=1e3/(S||240),c=g.time*1e3+u},add:function(S,y,N){var L=y?function(R,O,P,U){S(R,O,P,U),g.remove(L)}:S;return g.remove(S),f[N?"unshift":"push"](L),Oo(),L},remove:function(S,y){~(y=f.indexOf(S))&&f.splice(y,1)&&x>=y&&x--},_listeners:f},g})(),Oo=function(){return!Kl&&xi.wake()},be={},pT=/^[\d.\-M][\d.\-,\s]/,mT=/["']/g,_T=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,p,d;u<c;u++)p=a[u],f=u!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(mT,"").trim():+d,s=p.substr(f+1).trim();return n},gT=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},vT=function(t){var n=(t+"").split("("),a=be[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[_T(n[1])]:gT(t).split(",").map(lx)):be._CE&&pT.test(t)?be._CE("",t):a},Ax=function(t){return function(n){return 1-t(1-n)}},Rx=function o(t,n){for(var a=t._first,s;a;)a instanceof Yn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},_s=function(t,n){return t&&(on(t)?t:be[t]||vT(t))||n},Ms=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},c;return ni(t,function(f){be[f]=Ti[f]=u,be[c=f.toLowerCase()]=a;for(var p in u)be[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=be[f+"."+p]=u[p]}),u},Cx=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Ld=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),c=u/mp*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*qE((_-c)*u)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:Cx(f);return u=mp/u,p.config=function(d,_){return o(t,d,_)},p},Nd=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:Cx(a);return s.config=function(u){return o(t,u)},s};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ms(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});be.Linear.easeNone=be.none=be.Linear.easeIn;Ms("Elastic",Ld("in"),Ld("out"),Ld());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ms("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);Ms("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ms("Circ",function(o){return-(Qy(1-o*o)-1)});Ms("Sine",function(o){return o===1?1:-WE(o*kE)+1});Ms("Back",Nd("in"),Nd("out"),Nd());be.SteppedEase=be.steps=Ti.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,c=1-je;return function(f){return((s*ru(0,c,f)|0)+u)*a}}};Do.ease=be["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Am+=o+","+o+"Params,"});var wx=function(t,n){this.id=XE++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:sx,this.set=n?n.getSetter:Lm},Ql=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,No(this,+n.duration,1,1),this.data=n.data,$e&&(this._ctx=$e,$e.data.push(this)),Kl||xi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,No(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Oo(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(df(this,a),!u._dp||u.parent||fx(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&aa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===je||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),ox(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+Hv(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+Hv(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?Lo(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-je?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?af(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-je?0:this._rts,this.totalTime(ru(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),hf(this),$E(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==je&&(this._tTime-=je)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&aa(s,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ei(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?af(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=ZE);var s=zn;return zn=a,Cm(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),zn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,Gv(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,Gv(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(zi(this,a),ei(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ei(s)),this._dur||(this._zTime=-je),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-je:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-je,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-je)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this;return new Promise(function(u){var c=on(a)?a:ux,f=function(){var d=s.then;s.then=null,on(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=d),u(c),s.then=d};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?f():s._prom=f})},t.kill=function(){Gl(this)},o})();bi(Ql.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-je,_prom:0,_ps:!1,_rts:1});var Yn=(function(o){Ky(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=ei(a.sortChildren),en&&aa(a.parent||en,Pa(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&hx(Pa(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,c){return Wl(0,arguments,this),this},n.from=function(s,u,c){return Wl(1,arguments,this),this},n.fromTo=function(s,u,c,f){return Wl(2,arguments,this),this},n.set=function(s,u,c){return u.duration=0,u.parent=this,Xl(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new yn(s,u,zi(this,c),1),this},n.call=function(s,u,c){return aa(this,yn.delayedCall(0,s,u),c)},n.staggerTo=function(s,u,c,f,p,d,_){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new yn(s,c,zi(this,p)),this},n.staggerFrom=function(s,u,c,f,p,d,_){return c.runBackwards=1,Xl(c).immediateRender=ei(c.immediateRender),this.staggerTo(s,u,c,f,p,d,_)},n.staggerFromTo=function(s,u,c,f,p,d,_,g){return f.startAt=c,Xl(f).immediateRender=ei(f.immediateRender),this.staggerTo(s,u,f,p,d,_,g)},n.render=function(s,u,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:xn(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,x,T,E,S,y,N,L,R,O,P,U;if(this!==en&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,R=this._start,L=this._ts,y=!L,g&&(d||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,S=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(S*100+s,u,c);if(v=xn(_%S),_===p?(E=this._repeat,v=d):(O=xn(_/S),E=~~O,E&&E===O&&(v=d,E--),v>d&&(v=d)),O=Lo(this._tTime,S),!f&&this._tTime&&O!==E&&this._tTime-O*S-this._dur<=0&&(O=E),P&&E&1&&(v=d-v,U=1),E!==O&&!this._lock){var I=P&&O&1,b=I===(P&&E&1);if(E<O&&(I=!I),f=I?0:_%d?d:_,this._lock=1,this.render(f||(U?0:xn(E*S)),u,!d)._lock=0,this._tTime=_,!u&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,b&&(this._lock=2,f=I?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;Rx(this,U)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(N=iT(this,xn(f),xn(v)),N&&(_-=v-(v=N._start))),this._tTime=_,this._time=v,this._act=!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&!u&&!O&&(Si(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(x=this._first;x;){if(T=x._next,(x._act||v>=x._start)&&x._ts&&N!==x){if(x.parent!==this)return this.render(s,u,c);if(x.render(x._ts>0?(v-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(v-x._start)*x._ts,u,c),v!==this._time||!this._ts&&!y){N=0,T&&(_+=this._zTime=-je);break}}x=T}else{x=this._last;for(var w=s<0?s:v;x;){if(T=x._prev,(x._act||w<=x._end)&&x._ts&&N!==x){if(x.parent!==this)return this.render(s,u,c);if(x.render(x._ts>0?(w-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(w-x._start)*x._ts,u,c||zn&&Cm(x)),v!==this._time||!this._ts&&!y){N=0,T&&(_+=this._zTime=w?-je:je);break}}x=T}}if(N&&!u&&(this.pause(),N.render(v>=f?0:-je)._zTime=v>=f?1:-1,this._ts))return this._start=R,hf(this),this.render(s,u,c);this._onUpdate&&!u&&Si(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&wr(this,1),!u&&!(s<0&&!f)&&(_||f||!p)&&(Si(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var c=this;if(Ha(u)||(u=zi(this,u,s)),!(s instanceof Ql)){if(Vn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(wn(s))return this.addLabel(s,u);if(on(s))s=yn.delayedCall(0,s);else return this}return this!==s?aa(this,s,u):this},n.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-Bi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof yn?u&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,u,c)))),d=d._next;return p},n.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},n.remove=function(s){return wn(s)?this.removeLabel(s):on(s)?this.killTweensOf(s):(s.parent===this&&ff(this,s),s===this._recent&&(this._recent=this._last),ms(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xn(xi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=zi(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,c){var f=yn.delayedCall(0,u||jl,c);return f.data="isPause",this._hasPause=1,aa(this,f,zi(this,s))},n.removePause=function(s){var u=this._first;for(s=zi(this,s);u;)u._start===s&&u.data==="isPause"&&wr(u),u=u._next},n.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Mr!==f[p]&&f[p].kill(s,u);return this},n.getTweensOf=function(s,u){for(var c=[],f=Fi(s),p=this._first,d=Ha(u),_;p;)p instanceof yn?KE(p._targets,f)&&(d?(!Mr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&c.push(p):(_=p.getTweensOf(f,u)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,u){u=u||{};var c=this,f=zi(c,s),p=u,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,x,T=yn.to(c,bi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||je,onStart:function(){if(c.pause(),!x){var S=u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==S&&No(T,S,0,1).render(T._time,!0,!0),x=1}_&&_.apply(T,g||[])}},u));return v?T.render(0):T},n.tweenFromTo=function(s,u,c){return this.tweenTo(u,bi({startAt:{time:zi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),Vv(this,zi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),Vv(this,zi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+je)},n.shiftChildren=function(s,u,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,d;f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(d in p)p[d]>=c&&(p[d]+=s);return ms(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ms(this)},n.totalDuration=function(s){var u=0,c=this,f=c._last,p=Bi,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,aa(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(u-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>u&&f._ts&&(u=f._end),f=d;No(c,c===en&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(en._ts&&(ox(en,af(s,en)),rx=xi.frame),xi.frame>=Fv){Fv+=Mi.autoSleep||120;var u=en._first;if((!u||!u._ts)&&Mi.autoSleep&&xi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||xi.sleep()}}},t})(Ql);bi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var yT=function(t,n,a,s,u,c,f){var p=new ii(this._pt,t,n,0,1,Px,null,u),d=0,_=0,g,v,x,T,E,S,y,N;for(p.b=a,p.e=s,a+="",s+="",(y=~s.indexOf("random("))&&(s=Zl(s)),c&&(N=[a,s],c(N,t,n),a=N[0],s=N[1]),v=a.match(wd)||[];g=wd.exec(s);)T=g[0],E=s.substring(d,g.index),x?x=(x+1)%5:E.substr(-5)==="rgba("&&(x=1),T!==v[_++]&&(S=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:S,c:T.charAt(1)==="="?bo(S,T)-S:parseFloat(T)-S,m:x&&x<4?Math.round:0},d=wd.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(tx.test(s)||y)&&(p.e=0),this._pt=p,p},wm=function(t,n,a,s,u,c,f,p,d,_){on(s)&&(s=s(u||0,t,c));var g=t[n],v=a!=="get"?a:on(g)?d?t[n.indexOf("set")||!on(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,x=on(g)?d?TT:Nx:Um,T;if(wn(s)&&(~s.indexOf("random(")&&(s=Zl(s)),s.charAt(1)==="="&&(T=bo(v,s)+(Gn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||Tp)return!isNaN(v*s)&&s!==""?(T=new ii(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?AT:Ox,0,x),d&&(T.fp=d),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(n in t)&&Tm(n,s),yT.call(this,t,n,v,s,x,p||Mi.stringFilter,d))},xT=function(t,n,a,s,u){if(on(t)&&(t=ql(t,u,n,a,s)),!ca(t)||t.style&&t.nodeType||Vn(t)||Jy(t))return wn(t)?ql(t,u,n,a,s):t;var c={},f;for(f in t)c[f]=ql(t[f],u,n,a,s);return c},Dx=function(t,n,a,s,u,c){var f,p,d,_;if(vi[t]&&(f=new vi[t]).init(u,f.rawVars?n[t]:xT(n[t],s,u,c,a),a,s,c)!==!1&&(a._pt=p=new ii(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==Eo))for(d=a._ptLookup[a._targets.indexOf(u)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Mr,Tp,Dm=function o(t,n,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,x=s.autoRevert,T=t._dur,E=t._startAt,S=t._targets,y=t.parent,N=y&&y.data==="nested"?y.vars.targets:S,L=t._overwrite==="auto"&&!xm,R=t.timeline,O,P,U,I,b,w,H,k,J,rt,st,B,X;if(R&&(!v||!u)&&(u="none"),t._ease=_s(u,Do.ease),t._yEase=g?Ax(_s(g===!0?u:g,Do.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!R&&!!s.runBackwards,!R||v&&!s.stagger){if(k=S[0]?ps(S[0]).harness:0,B=k&&s[k.prop],O=nf(s,bm),E&&(E._zTime<0&&E.progress(1),n<0&&_&&f&&!x?E.render(-1,!0):E.revert(_&&T?Wc:jE),E._lazy=0),c){if(wr(t._startAt=yn.set(S,bi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&ei(p),startAt:null,delay:0,onUpdate:d&&function(){return Si(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(zn||!f&&!x)&&t._startAt.revert(Wc),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!E){if(n&&(f=!1),U=bi({overwrite:!1,data:"isFromStart",lazy:f&&!E&&ei(p),immediateRender:f,stagger:0,parent:y},O),B&&(U[k.prop]=B),wr(t._startAt=yn.set(S,U)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(zn?t._startAt.revert(Wc):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,je,je);else if(!n)return}for(t._pt=t._ptCache=0,p=T&&ei(p)||p&&!T,P=0;P<S.length;P++){if(b=S[P],H=b._gsap||Rm(S)[P]._gsap,t._ptLookup[P]=rt={},vp[H.id]&&br.length&&ef(),st=N===S?P:N.indexOf(b),k&&(J=new k).init(b,B||O,t,st,N)!==!1&&(t._pt=I=new ii(t._pt,b,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(q){rt[q]=I}),J.priority&&(w=1)),!k||B)for(U in O)vi[U]&&(J=Dx(U,O,t,st,b,N))?J.priority&&(w=1):rt[U]=I=wm.call(t,b,U,"get",O[U],st,N,0,s.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),L&&t._pt&&(Mr=t,en.killTweensOf(b,rt,t.globalTime(n)),X=!t.parent,Mr=0),t._pt&&p&&(vp[H.id]=1)}w&&zx(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!X,v&&n<=0&&R.render(Bi,!0,!0)},ST=function(t,n,a,s,u,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,x;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,x=t._targets.length;x--;){if(_=v[x][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Tp=1,t.vars[n]="+=0",Dm(t,f),Tp=0,p?Yl(n+" not eligible for reset"):1;d.push(_)}for(x=d.length;x--;)g=d[x],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=fn(a)+Gn(g.e)),g.b&&(g.b=_.s+Gn(g.b))},MT=function(t,n){var a=t[0]?ps(t[0]).harness:0,s=a&&a.aliases,u,c,f,p;if(!s)return n;u=Uo({},n);for(c in s)if(c in u)for(p=s[c].split(","),f=p.length;f--;)u[p[f]]=u[c];return u},ET=function(t,n,a,s){var u=n.ease||s||"power1.inOut",c,f;if(Vn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:u})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:u})},ql=function(t,n,a,s,u){return on(t)?t.call(n,a,s,u):wn(t)&&~t.indexOf("random(")?Zl(t):t},Ux=Am+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Lx={};ni(Ux+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Lx[o]=1});var yn=(function(o){Ky(t,o);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=o.call(this,c?s:Xl(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,x=p.overwrite,T=p.keyframes,E=p.defaults,S=p.scrollTrigger,y=p.yoyoEase,N=s.parent||en,L=(Vn(a)||Jy(a)?Ha(a[0]):"length"in s)?[a]:Fi(a),R,O,P,U,I,b,w,H;if(f._targets=L.length?Rm(L):Yl("GSAP target "+a+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,T||v||Mc(d)||Mc(_)){if(s=f.vars,R=f.timeline=new Yn({data:"nested",defaults:E||{},targets:N&&N.data==="nested"?N.vars.targets:L}),R.kill(),R.parent=R._dp=Pa(f),R._start=0,v||Mc(d)||Mc(_)){if(U=L.length,w=v&&_x(v),ca(v))for(I in v)~Ux.indexOf(I)&&(H||(H={}),H[I]=v[I]);for(O=0;O<U;O++)P=nf(s,Lx),P.stagger=0,y&&(P.yoyoEase=y),H&&Uo(P,H),b=L[O],P.duration=+ql(d,Pa(f),O,b,L),P.delay=(+ql(_,Pa(f),O,b,L)||0)-f._delay,!v&&U===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),R.to(b,P,w?w(O,b,L):0),R._ease=be.none;R.duration()?d=_=0:f.timeline=0}else if(T){Xl(bi(R.vars.defaults,{ease:"none"})),R._ease=_s(T.ease||s.ease||"none");var k=0,J,rt,st;if(Vn(T))T.forEach(function(B){return R.to(L,B,">")}),R.duration();else{P={};for(I in T)I==="ease"||I==="easeEach"||ET(I,T[I],P,T.easeEach);for(I in P)for(J=P[I].sort(function(B,X){return B.t-X.t}),k=0,O=0;O<J.length;O++)rt=J[O],st={ease:rt.e,duration:(rt.t-(O?J[O-1].t:0))/100*d},st[I]=rt.v,R.to(L,st,k),k+=st.duration;R.duration()<d&&R.to({},{duration:d-R.duration()})}}d||f.duration(d=R.duration())}else f.timeline=0;return x===!0&&!xm&&(Mr=Pa(f),en.killTweensOf(L),Mr=0),aa(N,Pa(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!T&&f._start===xn(N._time)&&ei(g)&&tT(Pa(f))&&N.data!=="nested")&&(f._tTime=-je,f.render(Math.max(0,-_)||0)),S&&hx(Pa(f),S),f}var n=t.prototype;return n.render=function(s,u,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-je&&!_?p:s<je?0:s,v,x,T,E,S,y,N,L,R;if(!d)nT(this,s,u,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,L=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,u,c);if(v=xn(g%E),g===p?(T=this._repeat,v=d):(S=xn(g/E),T=~~S,T&&T===S?(v=d,T--):v>d&&(v=d)),y=this._yoyo&&T&1,y&&(R=this._yEase,v=d-v),S=Lo(this._tTime,E),v===f&&!c&&this._initted&&T===S)return this._tTime=g,this;T!==S&&(L&&this._yEase&&Rx(L,y),this.vars.repeatRefresh&&!y&&!this._lock&&v!==E&&this._initted&&(this._lock=c=1,this.render(xn(E*T),!0).invalidate()._lock=0))}if(!this._initted){if(dx(this,_?s:v,c,u,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==S))return this;if(d!==this._dur)return this.render(s,u,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=N=(R||this._ease)(v/d),this._from&&(this.ratio=N=1-N),!f&&g&&!u&&!S&&(Si(this,"onStart"),this._tTime!==g))return this;for(x=this._pt;x;)x.r(N,x.d),x=x._next;L&&L.render(s<0?s:L._dur*L._ease(v/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&yp(this,s,u,c),Si(this,"onUpdate")),this._repeat&&T!==S&&this.vars.onRepeat&&!u&&this.parent&&Si(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&yp(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&wr(this,1),!u&&!(_&&!f)&&(g||f||y)&&(Si(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,c,f,p){Kl||xi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||Dm(this,d),_=this._ease(d/this._dur),ST(this,s,u,c,f,_,d,p)?this.resetTo(s,u,c,f,1):(df(this,0),this.parent||cx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?Gl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!zn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Mr&&Mr.vars.overwrite!==!0)._first||Gl(this),this.parent&&c!==this.timeline.totalDuration()&&No(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Fi(s):f,d=this._ptLookup,_=this._pt,g,v,x,T,E,S,y;if((!u||u==="all")&&JE(f,p))return u==="all"&&(this._pt=0),Gl(this);for(g=this._op=this._op||[],u!=="all"&&(wn(u)&&(E={},ni(u,function(N){return E[N]=1}),u=E),u=MT(f,u)),y=f.length;y--;)if(~p.indexOf(f[y])){v=d[y],u==="all"?(g[y]=u,T=v,x={}):(x=g[y]=g[y]||{},T=u);for(E in T)S=v&&v[E],S&&((!("kill"in S.d)||S.d.kill(E)===!0)&&ff(this,S,"_pt"),delete v[E]),x!=="all"&&(x[E]=1)}return this._initted&&!this._pt&&_&&Gl(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return Wl(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return Wl(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return en.killTweensOf(s,u,c)},t})(Ql);bi(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(o){yn[o]=function(){var t=new Yn,n=Sp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var Um=function(t,n,a){return t[n]=a},Nx=function(t,n,a){return t[n](a)},TT=function(t,n,a,s){return t[n](s.fp,a)},bT=function(t,n,a){return t.setAttribute(n,a)},Lm=function(t,n){return on(t[n])?Nx:Sm(t[n])&&t.setAttribute?bT:Um},Ox=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},AT=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},Px=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},Nm=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},RT=function(t,n,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,n,a),u=c},CT=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?ff(this,n,"_pt"):n.dep||(a=1),n=s;return!a},wT=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},zx=function(t){for(var n=t._pt,a,s,u,c;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=u},ii=(function(){function o(n,a,s,u,c,f,p,d,_){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||Ox,this.d=p||this,this.set=d||Um,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=wT,this.m=a,this.mt=u,this.tween=s},o})();ni(Am+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return bm[o]=1});Ti.TweenMax=Ti.TweenLite=yn;Ti.TimelineLite=Ti.TimelineMax=Yn;en=new Yn({sortChildren:!1,defaults:Do,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=bx;var gs=[],Yc={},DT=[],Xv=0,UT=0,Od=function(t){return(Yc[t]||DT).map(function(n){return n()})},bp=function(){var t=Date.now(),n=[];t-Xv>2&&(Od("matchMediaInit"),gs.forEach(function(a){var s=a.queries,u=a.conditions,c,f,p,d;for(f in s)c=na.matchMedia(s[f]).matches,c&&(p=1),c!==u[f]&&(u[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),Od("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),Xv=t,Od("matchMedia"))},Bx=(function(){function o(n,a){this.selector=a&&Mp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=UT++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){on(a)&&(u=s,s=a,a=on);var c=this,f=function(){var d=$e,_=c.selector,g;return d&&d!==c&&d.data.push(c),u&&(c.selector=Mp(u)),$e=c,g=s.apply(c,arguments),on(g)&&c._r.push(g),$e=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===on?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=$e;$e=null,a(this),$e=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof yn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var f=u.getTweens(),p=u.data.length,d;p--;)d=u.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)d=u.data[p],d instanceof Yn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof yn)&&d.revert&&d.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=gs.length;c--;)gs[c].id===this.id&&gs.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),LT=(function(){function o(n){this.contexts=[],this.scope=n,$e&&$e.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){ca(a)||(a={matches:a});var c=new Bx(0,u||this.scope),f=c.conditions={},p,d,_;$e&&!c.selector&&(c.selector=$e.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=na.matchMedia(a[d]),p&&(gs.indexOf(c)<0&&gs.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(bp):p.addEventListener("change",bp)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),rf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return Mx(s)})},timeline:function(t){return new Yn(t)},getTweensOf:function(t,n){return en.getTweensOf(t,n)},getProperty:function(t,n,a,s){wn(t)&&(t=Fi(t)[0]);var u=ps(t||{}).get,c=a?ux:lx;return a==="native"&&(a=""),t&&(n?c((vi[n]&&vi[n].get||u)(t,n,a,s)):function(f,p,d){return c((vi[f]&&vi[f].get||u)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Fi(t),t.length>1){var s=t.map(function(_){return oi.quickSetter(_,n,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var c=vi[n],f=ps(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;Eo._pt=0,g.init(t,a?_+a:_,Eo,0,[t]),g.render(1,g),Eo._pt&&Nm(1,Eo)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,u=oi.to(t,bi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return u.resetTo(n,p,d,_)};return c.tween=u,c},isTweening:function(t){return en.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=_s(t.ease,Do.ease)),Iv(Do,t||{})},config:function(t){return Iv(Mi,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!vi[f]&&!Ti[f]&&Yl(n+" effect requires "+f+" plugin.")}),Dd[n]=function(f,p,d){return a(Fi(f),bi(p||{},u),d)},c&&(Yn.prototype[n]=function(f,p,d){return this.add(Dd[n](f,ca(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){be[t]=_s(n)},parseEase:function(t,n){return arguments.length?_s(t,n):be},getById:function(t){return en.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Yn(t),s,u;for(a.smoothChildTiming=ei(t.smoothChildTiming),en.remove(a),a._dp=0,a._time=a._tTime=en._time,s=en._first;s;)u=s._next,(n||!(!s._dur&&s instanceof yn&&s.vars.onComplete===s._targets[0]))&&aa(a,s,s._start-s._delay),s=u;return aa(en,a,0),a},context:function(t,n){return t?new Bx(t,n):$e},matchMedia:function(t){return new LT(t)},matchMediaRefresh:function(){return gs.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||bp()},addEventListener:function(t,n){var a=Yc[t]||(Yc[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Yc[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:cT,wrapYoyo:fT,distribute:_x,random:vx,snap:gx,normalize:uT,getUnit:Gn,clamp:rT,splitColor:Ex,toArray:Fi,selector:Mp,mapRange:xx,pipe:oT,unitize:lT,interpolate:hT,shuffle:mx},install:ix,effects:Dd,ticker:xi,updateRoot:Yn.updateRoot,plugins:vi,globalTimeline:en,core:{PropTween:ii,globals:ax,Tween:yn,Timeline:Yn,Animation:Ql,getCache:ps,_removeLinkedListItem:ff,reverting:function(){return zn},context:function(t){return t&&$e&&($e.data.push(t),t._ctx=$e),$e},suppressOverwrites:function(t){return xm=t}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return rf[o]=yn[o]});xi.add(Yn.updateRoot);Eo=rf.to({},{duration:0});var NT=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},OT=function(t,n){var a=t._targets,s,u,c;for(s in n)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=NT(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[u],s))},Pd=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var p,d;if(wn(u)&&(p={},ni(u,function(_){return p[_]=1}),u=p),n){p={};for(d in u)p[d]=n(u[d]);u=p}OT(f,u)}}}},oi=rf.registerPlugin({name:"attr",init:function(t,n,a,s,u){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,u,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)zn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Pd("roundProps",Ep),Pd("modifiers"),Pd("snap",gx))||rf;yn.version=Yn.version=oi.version="3.13.0";nx=1;Mm()&&Oo();be.Power0;be.Power1;be.Power2;be.Power3;be.Power4;be.Linear;be.Quad;be.Cubic;be.Quart;be.Quint;be.Strong;be.Elastic;be.Back;be.SteppedEase;be.Bounce;be.Sine;be.Expo;be.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wv,Er,Ao,Om,fs,qv,Pm,PT=function(){return typeof window<"u"},Ga={},ss=180/Math.PI,Ro=Math.PI/180,so=Math.atan2,Yv=1e8,zm=/([A-Z])/g,zT=/(left|right|width|margin|padding|x)/i,BT=/[\s,\(]\S/,ra={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ap=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},FT=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},IT=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},HT=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},Fx=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},Ix=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},GT=function(t,n,a){return t.style[n]=a},VT=function(t,n,a){return t.style.setProperty(n,a)},kT=function(t,n,a){return t._gsap[n]=a},XT=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},WT=function(t,n,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},qT=function(t,n,a,s,u){var c=t._gsap;c[n]=a,c.renderTransform(u,c)},nn="transform",ai=nn+"Origin",YT=function o(t,n){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in Ga&&u){if(this.tfm=this.tfm||{},t!=="transform")t=ra[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=za(s,f)}):this.tfm[t]=c.x?c[t]:za(s,t),t===ai&&(this.tfm.zOrigin=c.zOrigin);else return ra.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(nn)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ai,n,"")),t=nn}(u||n)&&this.props.push(t,n,u[t])},Hx=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},jT=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(zm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=Pm(),(!u||!u.isStart)&&!a[nn]&&(Hx(a),s.zOrigin&&a[ai]&&(a[ai]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Gx=function(t,n){var a={target:t,props:[],revert:jT,save:YT};return t._gsap||oi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},Vx,Rp=function(t,n){var a=Er.createElementNS?Er.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Er.createElement(t);return a&&a.style?a:Er.createElement(t)},Ii=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(zm,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Po(n)||n,1)||""},jv="O,Moz,ms,Ms,Webkit".split(","),Po=function(t,n,a){var s=n||fs,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(jv[c]+t in u););return c<0?null:(c===3?"ms":c>=0?jv[c]:"")+t},Cp=function(){PT()&&window.document&&(Wv=window,Er=Wv.document,Ao=Er.documentElement,fs=Rp("div")||{style:{}},Rp("div"),nn=Po(nn),ai=nn+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Vx=!!Po("perspective"),Pm=oi.core.reverting,Om=1)},Zv=function(t){var n=t.ownerSVGElement,a=Rp("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Ao.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Ao.removeChild(a),u},Kv=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},kx=function(t){var n,a;try{n=t.getBBox()}catch{n=Zv(t),a=1}return n&&(n.width||n.height)||a||(n=Zv(t)),n&&!n.width&&!n.x&&!n.y?{x:+Kv(t,["x","cx","x1"])||0,y:+Kv(t,["y","cy","y1"])||0,width:0,height:0}:n},Xx=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kx(t))},ys=function(t,n){if(n){var a=t.style,s;n in Ga&&n!==ai&&(n=nn),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(zm,"-$1").toLowerCase())):a.removeAttribute(n)}},Tr=function(t,n,a,s,u,c){var f=new ii(t._pt,n,a,0,1,c?Ix:Fx);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},Qv={deg:1,rad:1,turn:1},ZT={grid:1,flex:1},Dr=function o(t,n,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=fs.style,p=zT.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",x=s==="%",T,E,S,y;if(s===c||!u||Qv[s]||Qv[c])return u;if(c!=="px"&&!v&&(u=o(t,n,a,"px")),y=t.getCTM&&Xx(t),(x||c==="%")&&(Ga[n]||~n.indexOf("adius")))return T=y?t.getBBox()[p?"width":"height"]:t[_],fn(x?u/T*g:u/100*T);if(f[p?"width":"height"]=g+(v?c:s),E=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Er||!E.appendChild)&&(E=Er.body),S=E._gsap,S&&x&&S.width&&p&&S.time===xi.time&&!S.uncache)return fn(u/S.width*g);if(x&&(n==="height"||n==="width")){var N=t.style[n];t.style[n]=g+s,T=t[_],N?t.style[n]=N:ys(t,n)}else(x||c==="%")&&!ZT[Ii(E,"display")]&&(f.position=Ii(t,"position")),E===t&&(f.position="static"),E.appendChild(fs),T=fs[_],E.removeChild(fs),f.position="absolute";return p&&x&&(S=ps(E),S.time=xi.time,S.width=E[_]),fn(v?T*u/g:T&&u?g/T*u:0)},za=function(t,n,a,s){var u;return Om||Cp(),n in ra&&n!=="transform"&&(n=ra[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ga[n]&&n!=="transform"?(u=$l(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:of(Ii(t,ai))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=sf[n]&&sf[n](t,n,a)||Ii(t,n)||sx(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Dr(t,n,u,a)+a:u},KT=function(t,n,a,s){if(!a||a==="none"){var u=Po(n,t,1),c=u&&Ii(t,u,1);c&&c!==a?(n=u,a=c):n==="borderColor"&&(a=Ii(t,"borderTopColor"))}var f=new ii(this._pt,t.style,n,0,1,Px),p=0,d=0,_,g,v,x,T,E,S,y,N,L,R,O;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ii(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[n],t.style[n]=s,s=Ii(t,n)||s,E?t.style[n]=E:ys(t,n)),_=[a,s],bx(_),a=_[0],s=_[1],v=a.match(Mo)||[],O=s.match(Mo)||[],O.length){for(;g=Mo.exec(s);)S=g[0],N=s.substring(p,g.index),T?T=(T+1)%5:(N.substr(-5)==="rgba("||N.substr(-5)==="hsla(")&&(T=1),S!==(E=v[d++]||"")&&(x=parseFloat(E)||0,R=E.substr((x+"").length),S.charAt(1)==="="&&(S=bo(x,S)+R),y=parseFloat(S),L=S.substr((y+"").length),p=Mo.lastIndex-L.length,L||(L=L||Mi.units[n]||R,p===s.length&&(s+=L,f.e+=L)),R!==L&&(x=Dr(t,n,E,L)||0),f._pt={_next:f._pt,p:N||d===1?N:",",s:x,c:y-x,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?Ix:Fx;return tx.test(s)&&(f.e=0),this._pt=f,f},Jv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},QT=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=Jv[a]||a,n[1]=Jv[s]||s,n.join(" ")},JT=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,c=a._gsap,f,p,d;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),d=u.length;--d>-1;)f=u[d],Ga[f]&&(p=1,f=f==="transformOrigin"?ai:nn),ys(a,f);p&&(ys(a,nn),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",$l(a,1),c.uncache=1,Hx(s)))}},sf={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new ii(t._pt,n,a,0,0,JT);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},Jl=[1,0,0,1,0,0],Wx={},qx=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},$v=function(t){var n=Ii(t,nn);return qx(n)?Jl:n.substr(7).match($y).map(fn)},Bm=function(t,n){var a=t._gsap||ps(t),s=t.style,u=$v(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?Jl:u):(u===Jl&&!t.offsetParent&&t!==Ao&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Ao.appendChild(t)),u=$v(t),p?s.display=p:ys(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Ao.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},wp=function(t,n,a,s,u,c){var f=t._gsap,p=u||Bm(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,x=p[0],T=p[1],E=p[2],S=p[3],y=p[4],N=p[5],L=n.split(" "),R=parseFloat(L[0])||0,O=parseFloat(L[1])||0,P,U,I,b;a?p!==Jl&&(U=x*S-T*E)&&(I=R*(S/U)+O*(-E/U)+(E*N-S*y)/U,b=R*(-T/U)+O*(x/U)-(x*N-T*y)/U,R=I,O=b):(P=kx(t),R=P.x+(~L[0].indexOf("%")?R/100*P.width:R),O=P.y+(~(L[1]||L[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&f.smooth?(y=R-d,N=O-_,f.xOffset=g+(y*x+N*E)-y,f.yOffset=v+(y*T+N*S)-N):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=O,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ai]="0px 0px",c&&(Tr(c,f,"xOrigin",d,R),Tr(c,f,"yOrigin",_,O),Tr(c,f,"xOffset",g,f.xOffset),Tr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+O)},$l=function(t,n){var a=t._gsap||new wx(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Ii(t,ai)||"0",_,g,v,x,T,E,S,y,N,L,R,O,P,U,I,b,w,H,k,J,rt,st,B,X,q,_t,Mt,z,$,xt,Et,Ct;return _=g=v=E=S=y=N=L=R=0,x=T=1,a.svg=!!(t.getCTM&&Xx(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[nn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[nn]!=="none"?p[nn]:"")),s.scale=s.rotate=s.translate="none"),U=Bm(t,a.svg),a.svg&&(a.uncache?(q=t.getBBox(),d=a.xOrigin-q.x+"px "+(a.yOrigin-q.y)+"px",X=""):X=!n&&t.getAttribute("data-svg-origin"),wp(t,X||d,!!X||a.originIsAbsolute,a.smooth!==!1,U)),O=a.xOrigin||0,P=a.yOrigin||0,U!==Jl&&(H=U[0],k=U[1],J=U[2],rt=U[3],_=st=U[4],g=B=U[5],U.length===6?(x=Math.sqrt(H*H+k*k),T=Math.sqrt(rt*rt+J*J),E=H||k?so(k,H)*ss:0,N=J||rt?so(J,rt)*ss+E:0,N&&(T*=Math.abs(Math.cos(N*Ro))),a.svg&&(_-=O-(O*H+P*J),g-=P-(O*k+P*rt))):(Ct=U[6],xt=U[7],Mt=U[8],z=U[9],$=U[10],Et=U[11],_=U[12],g=U[13],v=U[14],I=so(Ct,$),S=I*ss,I&&(b=Math.cos(-I),w=Math.sin(-I),X=st*b+Mt*w,q=B*b+z*w,_t=Ct*b+$*w,Mt=st*-w+Mt*b,z=B*-w+z*b,$=Ct*-w+$*b,Et=xt*-w+Et*b,st=X,B=q,Ct=_t),I=so(-J,$),y=I*ss,I&&(b=Math.cos(-I),w=Math.sin(-I),X=H*b-Mt*w,q=k*b-z*w,_t=J*b-$*w,Et=rt*w+Et*b,H=X,k=q,J=_t),I=so(k,H),E=I*ss,I&&(b=Math.cos(I),w=Math.sin(I),X=H*b+k*w,q=st*b+B*w,k=k*b-H*w,B=B*b-st*w,H=X,st=q),S&&Math.abs(S)+Math.abs(E)>359.9&&(S=E=0,y=180-y),x=fn(Math.sqrt(H*H+k*k+J*J)),T=fn(Math.sqrt(B*B+Ct*Ct)),I=so(st,B),N=Math.abs(I)>2e-4?I*ss:0,R=Et?1/(Et<0?-Et:Et):0),a.svg&&(X=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!qx(Ii(t,nn)),X&&t.setAttribute("transform",X))),Math.abs(N)>90&&Math.abs(N)<270&&(u?(x*=-1,N+=E<=0?180:-180,E+=E<=0?180:-180):(T*=-1,N+=N<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=fn(x),a.scaleY=fn(T),a.rotation=fn(E)+f,a.rotationX=fn(S)+f,a.rotationY=fn(y)+f,a.skewX=N+f,a.skewY=L+f,a.transformPerspective=R+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ai]=of(d)),a.xOffset=a.yOffset=0,a.force3D=Mi.force3D,a.renderTransform=a.svg?tb:Vx?Yx:$T,a.uncache=0,a},of=function(t){return(t=t.split(" "))[0]+" "+t[1]},zd=function(t,n,a){var s=Gn(n);return fn(parseFloat(n)+parseFloat(Dr(t,"x",a+"px",s)))+s},$T=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Yx(t,n)},Jr="0deg",Pl="0px",$r=") ",Yx=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,x=a.skewY,T=a.scaleX,E=a.scaleY,S=a.transformPerspective,y=a.force3D,N=a.target,L=a.zOrigin,R="",O=y==="auto"&&t&&t!==1||y===!0;if(L&&(g!==Jr||_!==Jr)){var P=parseFloat(_)*Ro,U=Math.sin(P),I=Math.cos(P),b;P=parseFloat(g)*Ro,b=Math.cos(P),c=zd(N,c,U*b*-L),f=zd(N,f,-Math.sin(P)*-L),p=zd(N,p,I*b*-L+L)}S!==Pl&&(R+="perspective("+S+$r),(s||u)&&(R+="translate("+s+"%, "+u+"%) "),(O||c!==Pl||f!==Pl||p!==Pl)&&(R+=p!==Pl||O?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+$r),d!==Jr&&(R+="rotate("+d+$r),_!==Jr&&(R+="rotateY("+_+$r),g!==Jr&&(R+="rotateX("+g+$r),(v!==Jr||x!==Jr)&&(R+="skew("+v+", "+x+$r),(T!==1||E!==1)&&(R+="scale("+T+", "+E+$r),N.style[nn]=R||"translate(0, 0)"},tb=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,x=a.target,T=a.xOrigin,E=a.yOrigin,S=a.xOffset,y=a.yOffset,N=a.forceCSS,L=parseFloat(c),R=parseFloat(f),O,P,U,I,b;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Ro,d*=Ro,O=Math.cos(p)*g,P=Math.sin(p)*g,U=Math.sin(p-d)*-v,I=Math.cos(p-d)*v,d&&(_*=Ro,b=Math.tan(d-_),b=Math.sqrt(1+b*b),U*=b,I*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),O*=b,P*=b)),O=fn(O),P=fn(P),U=fn(U),I=fn(I)):(O=g,I=v,P=U=0),(L&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(L=Dr(x,"x",c,"px"),R=Dr(x,"y",f,"px")),(T||E||S||y)&&(L=fn(L+T-(T*O+E*U)+S),R=fn(R+E-(T*P+E*I)+y)),(s||u)&&(b=x.getBBox(),L=fn(L+s/100*b.width),R=fn(R+u/100*b.height)),b="matrix("+O+","+P+","+U+","+I+","+L+","+R+")",x.setAttribute("transform",b),N&&(x.style[nn]=b)},eb=function(t,n,a,s,u){var c=360,f=wn(u),p=parseFloat(u)*(f&&~u.indexOf("rad")?ss:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=u.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*Yv)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*Yv)%c-~~(d/c)*c)),t._pt=v=new ii(t._pt,n,a,s,d,FT),v.e=_,v.u="deg",t._props.push(a),v},ty=function(t,n){for(var a in n)t[a]=n[a];return t},nb=function(t,n,a){var s=ty({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,x,T;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[nn]=n,f=$l(a,1),ys(a,nn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[nn],c[nn]=n,f=$l(a,1),c[nn]=d);for(p in Ga)d=s[p],_=f[p],d!==_&&u.indexOf(p)<0&&(x=Gn(d),T=Gn(_),g=x!==T?Dr(a,p,d,T):parseFloat(d),v=parseFloat(_),t._pt=new ii(t._pt,f,p,g,v-g,Ap),t._pt.u=T||0,t._props.push(p));ty(f,s)};ni("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",c=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(f){return t<2?o+f:"border"+f+o});sf[t>1?"border"+o:o]=function(f,p,d,_,g){var v,x;if(arguments.length<4)return v=c.map(function(T){return za(f,T,d)}),x=v.join(" "),x.split(v[0]).length===5?v[0]:x;v=(_+"").split(" "),x={},c.forEach(function(T,E){return x[T]=v[E]=v[E]||v[(E-1)/2|0]}),f.init(p,x,g)}});var jx={name:"css",register:Cp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,x,T,E,S,y,N,L,R,O,P,U,I;Om||Cp(),this.styles=this.styles||Gx(t),I=this.styles.props,this.tween=a;for(E in n)if(E!=="autoRound"&&(_=n[E],!(vi[E]&&Dx(E,n,a,s,t,u)))){if(x=typeof _,T=sf[E],x==="function"&&(_=_.call(a,s,t,u),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=Zl(_)),T)T(this,t,E,_,a)&&(U=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Ar.lastIndex=0,Ar.test(d)||(S=Gn(d),y=Gn(_)),y?S!==y&&(d=Dr(t,E,d,y)+y):S&&(_+=S),this.add(f,"setProperty",d,_,s,u,0,0,E),c.push(E),I.push(E,0,f[E]);else if(x!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(a,s,t,u):p[E],wn(d)&&~d.indexOf("random(")&&(d=Zl(d)),Gn(d+"")||d==="auto"||(d+=Mi.units[E]||Gn(za(t,E))||""),(d+"").charAt(1)==="="&&(d=za(t,E))):d=za(t,E),v=parseFloat(d),N=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),N&&(_=_.substr(2)),g=parseFloat(_),E in ra&&(E==="autoAlpha"&&(v===1&&za(t,"visibility")==="hidden"&&g&&(v=0),I.push("visibility",0,f.visibility),Tr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=ra[E],~E.indexOf(",")&&(E=E.split(",")[0]))),L=E in Ga,L){if(this.styles.save(E),x==="string"&&_.substring(0,6)==="var(--"&&(_=Ii(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),R||(O=t._gsap,O.renderTransform&&!n.parseTransform||$l(t,n.parseTransform),P=n.smoothOrigin!==!1&&O.smooth,R=this._pt=new ii(this._pt,f,nn,0,1,O.renderTransform,O,0,-1),R.dep=1),E==="scale")this._pt=new ii(this._pt,O,"scaleY",O.scaleY,(N?bo(O.scaleY,N+g):g)-O.scaleY||0,Ap),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){I.push(ai,0,f[ai]),_=QT(_),O.svg?wp(t,_,0,P,0,this):(y=parseFloat(_.split(" ")[2])||0,y!==O.zOrigin&&Tr(this,O,"zOrigin",O.zOrigin,y),Tr(this,f,E,of(d),of(_)));continue}else if(E==="svgOrigin"){wp(t,_,1,P,0,this);continue}else if(E in Wx){eb(this,O,E,v,N?bo(v,N+_):_);continue}else if(E==="smoothOrigin"){Tr(this,O,"smooth",O.smooth,_);continue}else if(E==="force3D"){O[E]=_;continue}else if(E==="transform"){nb(this,_,t);continue}}else E in f||(E=Po(E)||E);if(L||(g||g===0)&&(v||v===0)&&!BT.test(_)&&E in f)S=(d+"").substr((v+"").length),g||(g=0),y=Gn(_)||(E in Mi.units?Mi.units[E]:S),S!==y&&(v=Dr(t,E,d,y)),this._pt=new ii(this._pt,L?O:f,E,v,(N?bo(v,N+g):g)-v,!L&&(y==="px"||E==="zIndex")&&n.autoRound!==!1?HT:Ap),this._pt.u=y||0,S!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=IT);else if(E in f)KT.call(this,t,E,d,N?N+_:_);else if(E in t)this.add(t,E,d||t[E],N?N+_:_,s,u);else if(E!=="parseTransform"){Tm(E,_);continue}L||(E in f?I.push(E,0,f[E]):typeof t[E]=="function"?I.push(E,2,t[E]()):I.push(E,1,d||t[E])),c.push(E)}}U&&zx(this)},render:function(t,n){if(n.tween._time||!Pm())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:za,aliases:ra,getSetter:function(t,n,a){var s=ra[n];return s&&s.indexOf(",")<0&&(n=s),n in Ga&&n!==ai&&(t._gsap.x||za(t,"x"))?a&&qv===a?n==="scale"?XT:kT:(qv=a||{})&&(n==="scale"?WT:qT):t.style&&!Sm(t.style[n])?GT:~n.indexOf("-")?VT:Lm(t,n)},core:{_removeProperty:ys,_getMatrix:Bm}};oi.utils.checkPrefix=Po;oi.core.getStyleSaver=Gx;(function(o,t,n,a){var s=ni(o+","+t+","+n,function(u){Ga[u]=1});ni(t,function(u){Mi.units[u]="deg",Wx[u]=1}),ra[s[13]]=o+","+t,ni(a,function(u){var c=u.split(":");ra[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Mi.units[o]="px"});oi.registerPlugin(jx);var Ie=oi.registerPlugin(jx)||oi;Ie.core.Tween;const Bd=[{id:"p1",title:"Nowa Jowita",subtitle:"Projekt przebudowy Domu Studenckiego Jowita wraz z funkcjami towarzyszącymi | Poznań  2025",tags:["Projekt koncepcyjny","Studia"],year:2024,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/jowita_hero.png",description:"Projekt rodzinnego domu z dużymi przeszkleniami wychodzącymi na linię brzegową. Koncepcja oparta na prostych bryłach i naturalnych materiałach."},{id:"p2",title:"Przemysł",subtitle:"Projekt koncepcyjny budynku produkcji kamizelek balistycznych | Poznań 2025",tags:["Studia"],year:2023,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/vest_hero.png",description:"Kompleksowa przebudowa i adaptacja XIX-wiecznej kamienicy na funkcje coworkingowe i handlowe z zachowaniem detalu historycznego."},{id:"p3",title:"The Leaf",subtitle:"Koncepcja zagospodarowania terenu Błoni Wildeckich | Poznań 2023",tags:["Studia"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/leaf_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p4",title:"Cooper - Dino",subtitle:"Kampus DINO studium funkcjonalno przestrzenne zagospodarowania działek | Smoszew 2025",tags:["Studia","Urbanistyka"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/dino_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p5",title:"P I T Campus",subtitle:"Koncepcja zagospodarowania Kampusu Sieci Badawczej Łukasiewicz | Poznań 2024",tags:["Studia","Urbanistyka"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/pit_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p6",title:"Hala sportowa",subtitle:"Projekt koncepcyjny budynku rekreacyjnego hali sportowej w Paku Rataje | Poznań 2023",tags:["Studia"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/sala_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p7",title:"Salon samochodowy",subtitle:"Projekt koncepcyjny budynku usługowego salonu samochodowego | Jelonek 2022",tags:["Studia"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/salon_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p8",title:"Suchy Las",subtitle:"Koncepcja urbanistyczna zagospodarowania zabudowy jednorodzinnej | Suchy Las 2022",tags:["Studia","Urbanistyka"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/urba_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p9",title:"Pawilon wystawowy",subtitle:"Projekt koncepcyjny pawilonu wystawowego projektanta ubrań | Poznań 2023",tags:["Studia"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/wystawa_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p10",title:"Eko Pop Box",subtitle:"Model Young Package Konkurs na projekt opakowania | 2024",tags:["Studia"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/box_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p11",title:"Stołówka",subtitle:"Projekt koncepcyjny przebudowy budynku stołówki Politechniki Poznańskiej | Poznań 2025",tags:["Studia","Architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/stol_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p12",title:"Poro Crete",subtitle:"Pekabex Development Forma w betonie | 2025",tags:["Studia","Mała architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/pekabex_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p13",title:"Budynek mieszkalny - jednorodzinny",subtitle:"Budynek mieszkalny - jednorodzinny",tags:["Praktyka","Projekt budowlany","Architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/andy_darek_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p14",title:"Budynek mieszkalny - jednorodzinny",subtitle:"Tymczasowa architektura ekspozycyjna",tags:["Praktyka","Projekt budowlany","Architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/andy_agnes_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p15",title:"Budynek usługowo - mieszkalny",subtitle:"Tymczasowa architektura ekspozycyjna",tags:["Praktyka","Projekt budowlany","Architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/andy_blizniak_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p16",title:"Budynek mieszkalny - jednorodzinny",subtitle:"Tymczasowa architektura ekspozycyjna",tags:["Praktyka","Projekt budowlany","Architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/andy_plaski_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p17",title:"Zabudowa mieszkaniowa wielorodzinna",subtitle:"Tymczasowa architektura ekspozycyjna",tags:["Praktyka","Projekt koncepcyjny","Architektura"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/andy_wielorodzinny_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p18",title:"Koncepcja urbanistyczna",subtitle:"Tymczasowa architektura ekspozycyjna",tags:["Praktyka","Projekt koncepcyjny","Urbanistyka"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/andy_urba_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."},{id:"p19",title:"Praca inżynierska",subtitle:"Projekt budynku mieszkalnego z usługami | Poznań 2024",tags:["Praktyka","Projekt koncepcyjny","Urbanistyka"],year:2022,thumbnail:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/inz_hero.png",description:"Lekka konstrukcja modułowa zaprojektowana z myślą o łatwym montażu/demontażu i ponownym wykorzystaniu elementów."}];function ib(){const[o,t]=se.useState("Wszystkie"),[n,a]=se.useState(null),s=["Wszystkie",...Array.from(new Set(Bd.flatMap(p=>p.tags)))],u=o==="Wszystkie"?Bd:Bd.filter(p=>p.tags.includes(o));function c(p){a(p),document.body.style.overflow="hidden"}function f(){a(null),document.body.style.overflow=""}return dt.jsxs("div",{className:"portfolio-container",children:[dt.jsx("div",{className:"tags-container",children:s.map(p=>dt.jsx("button",{onClick:()=>t(p),className:`tag ${o===p?"active":""}`,children:p},p))}),dt.jsx("div",{className:"grid-container",children:u.map(p=>dt.jsxs("div",{className:"project-card",onClick:()=>c(p),children:[dt.jsx("img",{src:p.thumbnail,alt:p.title,className:"project-image"}),dt.jsxs("div",{className:"project-info",children:[dt.jsx("h3",{children:p.title}),dt.jsx("p",{children:p.subtitle}),dt.jsx("div",{className:"project-tags",children:p.tags.slice(0,3).map(d=>dt.jsx("span",{className:"project-tag",children:d},d))})]})]},p.id))}),n&&dt.jsx("div",{className:"modal-overlay",onClick:f,children:dt.jsxs("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:[dt.jsx("button",{className:"close-btn",onClick:f,children:"×"}),dt.jsx("h2",{children:n.title}),dt.jsx("p",{children:n.subtitle}),dt.jsx("img",{src:n.thumbnail,alt:n.title,className:"modal-image"}),dt.jsx("p",{children:n.description}),dt.jsx("div",{className:"project-tags",children:n.tags.map(p=>dt.jsx("span",{className:"project-tag",children:p},p))})]})})]})}function ab(){const[o,t]=se.useState(!1),[n,a]=se.useState(null);se.useEffect(()=>{const c=setTimeout(()=>t(!0),300);return()=>clearTimeout(c)},[]);const s=c=>a(c),u=()=>a(null);return dt.jsxs("section",{className:`hero ${o?"visible":""}`,children:[dt.jsx("div",{className:"hero-bg",style:{backgroundImage:n?`url(${n})`:"none",opacity:n?1:0}}),dt.jsxs("div",{className:"hero-nav",children:[dt.jsx("a",{href:"#about",onMouseEnter:()=>s("https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/OM.png"),onMouseLeave:u,children:dt.jsx("h1",{children:"O mnie"})}),dt.jsx("a",{href:"#portfolio",onMouseEnter:()=>s("https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/PO.png"),onMouseLeave:u,children:dt.jsx("h1",{children:"Portfolio"})}),dt.jsx("a",{href:"#contact",onMouseEnter:()=>s("https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/hero/KO.png"),onMouseLeave:u,children:dt.jsx("h1",{children:"Kontakt"})})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fm="180",rb=0,ey=1,sb=2,Zx=1,ob=2,Oa=3,Ur=0,ri=1,Ba=2,Rr=0,Co=1,ny=2,iy=3,ay=4,lb=5,us=100,ub=101,cb=102,fb=103,hb=104,db=200,pb=201,mb=202,_b=203,Dp=204,Up=205,gb=206,vb=207,yb=208,xb=209,Sb=210,Mb=211,Eb=212,Tb=213,bb=214,Lp=0,Np=1,Op=2,zo=3,Pp=4,zp=5,Bp=6,Fp=7,Kx=0,Ab=1,Rb=2,Cr=0,Cb=1,wb=2,Db=3,Ub=4,Lb=5,Nb=6,Ob=7,Qx=300,Bo=301,Fo=302,Ip=303,Hp=304,pf=306,Gp=1e3,hs=1001,Vp=1002,Zi=1003,Pb=1004,Ec=1005,sa=1006,Fd=1007,ds=1008,Va=1009,Jx=1010,$x=1011,tu=1012,Im=1013,xs=1014,Fa=1015,su=1016,Hm=1017,Gm=1018,eu=1020,tS=35902,eS=35899,nS=1021,iS=1022,ji=1023,nu=1026,iu=1027,aS=1028,Vm=1029,rS=1030,km=1031,Xm=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,kp=35840,Xp=35841,Wp=35842,qp=35843,Yp=36196,jp=37492,Zp=37496,Kp=37808,Qp=37809,Jp=37810,$p=37811,tm=37812,em=37813,nm=37814,im=37815,am=37816,rm=37817,sm=37818,om=37819,lm=37820,um=37821,cm=36492,fm=36494,hm=36495,dm=36283,pm=36284,mm=36285,_m=36286,zb=3200,Bb=3201,Fb=0,Ib=1,Sr="",yi="srgb",Io="srgb-linear",lf="linear",ke="srgb",oo=7680,ry=519,Hb=512,Gb=513,Vb=514,sS=515,kb=516,Xb=517,Wb=518,qb=519,sy=35044,oy="300 es",oa=2e3,uf=2001;class Go{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,c=s.length;u<c;u++)s[u].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Id=Math.PI/180,gm=180/Math.PI;function ou(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Te(o,t,n){return Math.max(t,Math.min(n,o))}function Yb(o,t){return(o%t+t)%t}function Hd(o,t,n){return(1-n)*o+n*t}function zl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(t=0,n=0){Ce.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*s+t.x,this.y=u*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lu{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3];const v=u[c+0],x=u[c+1],T=u[c+2],E=u[c+3];if(f===0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f===1){t[n+0]=v,t[n+1]=x,t[n+2]=T,t[n+3]=E;return}if(g!==E||p!==v||d!==x||_!==T){let S=1-f;const y=p*v+d*x+_*T+g*E,N=y>=0?1:-1,L=1-y*y;if(L>Number.EPSILON){const O=Math.sqrt(L),P=Math.atan2(O,y*N);S=Math.sin(S*P)/O,f=Math.sin(f*P)/O}const R=f*N;if(p=p*S+v*R,d=d*S+x*R,_=_*S+T*R,g=g*S+E*R,S===1-f){const O=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=O,d*=O,_*=O,g*=O}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,u,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=u[c],v=u[c+1],x=u[c+2],T=u[c+3];return t[n]=f*T+_*g+p*x-d*v,t[n+1]=p*T+_*v+d*g-f*x,t[n+2]=d*T+_*x+f*v-p*g,t[n+3]=_*T-f*g-p*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(u/2),v=p(a/2),x=p(s/2),T=p(u/2);switch(c){case"XYZ":this._x=v*_*g+d*x*T,this._y=d*x*g-v*_*T,this._z=d*_*T+v*x*g,this._w=d*_*g-v*x*T;break;case"YXZ":this._x=v*_*g+d*x*T,this._y=d*x*g-v*_*T,this._z=d*_*T-v*x*g,this._w=d*_*g+v*x*T;break;case"ZXY":this._x=v*_*g-d*x*T,this._y=d*x*g+v*_*T,this._z=d*_*T+v*x*g,this._w=d*_*g-v*x*T;break;case"ZYX":this._x=v*_*g-d*x*T,this._y=d*x*g+v*_*T,this._z=d*_*T-v*x*g,this._w=d*_*g+v*x*T;break;case"YZX":this._x=v*_*g+d*x*T,this._y=d*x*g+v*_*T,this._z=d*_*T-v*x*g,this._w=d*_*g-v*x*T;break;case"XZY":this._x=v*_*g-d*x*T,this._y=d*x*g-v*_*T,this._z=d*_*T+v*x*g,this._w=d*_*g+v*x*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(_-p)*x,this._y=(u-d)*x,this._z=(c-s)*x}else if(a>f&&a>g){const x=2*Math.sqrt(1+a-f-g);this._w=(_-p)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(u+d)/x}else if(f>g){const x=2*Math.sqrt(1+f-a-g);this._w=(u-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+g-a-f);this._w=(c-s)/x,this._x=(u+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-u*p,this._y=s*_+c*p+u*f-a*d,this._z=u*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,s=this._y,u=this._z,c=this._w;let f=c*t._w+a*t._x+s*t._y+u*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=a,this._y=s,this._z=u,this;const p=1-f*f;if(p<=Number.EPSILON){const x=1-n;return this._w=x*c+n*this._w,this._x=x*a+n*this._x,this._y=x*s+n*this._y,this._z=x*u+n*this._z,this.normalize(),this}const d=Math.sqrt(p),_=Math.atan2(d,f),g=Math.sin((1-n)*_)/d,v=Math.sin(n*_)/d;return this._w=c*g+this._w*v,this._x=a*g+this._x*v,this._y=s*g+this._y*v,this._z=u*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(ly.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(ly.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-u*s),g=2*(u*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-u*g,this.z=s+p*g+u*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-u*f,this.y=u*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Gd.copy(this).projectOnVector(t),this.sub(Gd)}reflect(t){return this.sub(Gd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new ut,ly=new lu;class de{constructor(t,n,a,s,u,c,f,p,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d)}set(t,n,a,s,u,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],x=a[5],T=a[8],E=s[0],S=s[3],y=s[6],N=s[1],L=s[4],R=s[7],O=s[2],P=s[5],U=s[8];return u[0]=c*E+f*N+p*O,u[3]=c*S+f*L+p*P,u[6]=c*y+f*R+p*U,u[1]=d*E+_*N+g*O,u[4]=d*S+_*L+g*P,u[7]=d*y+_*R+g*U,u[2]=v*E+x*N+T*O,u[5]=v*S+x*L+T*P,u[8]=v*y+x*R+T*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*u*_+a*f*p+s*u*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*u,x=d*u-c*p,T=n*g+a*v+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=g*E,t[1]=(s*d-_*a)*E,t[2]=(f*a-s*c)*E,t[3]=v*E,t[4]=(_*n-s*p)*E,t[5]=(s*u-f*n)*E,t[6]=x*E,t[7]=(a*p-d*n)*E,t[8]=(c*n-a*u)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,c,f){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Vd.makeScale(t,n)),this}rotate(t){return this.premultiply(Vd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Vd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vd=new de;function oS(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function cf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jb(){const o=cf("canvas");return o.style.display="block",o}const uy={};function au(o){o in uy||(uy[o]=!0,console.warn(o))}function Zb(o,t,n){return new Promise(function(a,s){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const cy=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fy=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kb(){const o={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(s,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===ke&&(s.r=Ia(s.r),s.g=Ia(s.g),s.b=Ia(s.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===ke&&(s.r=wo(s.r),s.g=wo(s.g),s.b=wo(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Sr?lf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,c){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return au("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return au("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Io]:{primaries:t,whitePoint:a,transfer:lf,toXYZ:cy,fromXYZ:fy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:a,transfer:ke,toXYZ:cy,fromXYZ:fy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Ue=Kb();function Ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lo;class Qb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{lo===void 0&&(lo=cf("canvas")),lo.width=t.width,lo.height=t.height;const s=lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=lo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let c=0;c<u.length;c++)u[c]=Ia(u[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ia(n[a]/255)*255):n[a]=Ia(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Jb=0;class Wm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=ou(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?u.push(kd(s[c].image)):u.push(kd(s[c]))}else u=kd(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Qb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $b=0;const Xd=new ut;class si extends Go{constructor(t=si.DEFAULT_IMAGE,n=si.DEFAULT_MAPPING,a=hs,s=hs,u=sa,c=ds,f=ji,p=Va,d=si.DEFAULT_ANISOTROPY,_=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=ou(),this.name="",this.source=new Wm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gp:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case Vp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gp:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case Vp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Qx;si.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,n=0,a=0,s=1){hn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],x=p[5],T=p[9],E=p[2],S=p[6],y=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-E)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+E)<.1&&Math.abs(T+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(d+1)/2,R=(x+1)/2,O=(y+1)/2,P=(_+v)/4,U=(g+E)/4,I=(T+S)/4;return L>R&&L>O?L<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(L),s=P/a,u=U/a):R>O?R<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(R),a=P/s,u=I/s):O<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(O),a=U/u,s=I/u),this.set(a,s,u,n),this}let N=Math.sqrt((S-T)*(S-T)+(g-E)*(g-E)+(v-_)*(v-_));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(g-E)/N,this.z=(v-_)/N,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this.w=Te(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this.w=Te(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t1 extends Go{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new hn(0,0,t,n),this.scissorTest=!1,this.viewport=new hn(0,0,t,n);const s={width:t,height:n,depth:a.depth},u=new si(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:sa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new Wm(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends t1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class lS extends si{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class e1 extends si{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Zi,this.minFilter=Zi,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uu{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,ki):ki.fromBufferAttribute(u,c),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tc.copy(a.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const s=t.children;for(let u=0,c=s.length;u<c;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bl),bc.subVectors(this.max,Bl),uo.subVectors(t.a,Bl),co.subVectors(t.b,Bl),fo.subVectors(t.c,Bl),mr.subVectors(co,uo),_r.subVectors(fo,co),ts.subVectors(uo,fo);let n=[0,-mr.z,mr.y,0,-_r.z,_r.y,0,-ts.z,ts.y,mr.z,0,-mr.x,_r.z,0,-_r.x,ts.z,0,-ts.x,-mr.y,mr.x,0,-_r.y,_r.x,0,-ts.y,ts.x,0];return!Wd(n,uo,co,fo,bc)||(n=[1,0,0,0,1,0,0,0,1],!Wd(n,uo,co,fo,bc))?!1:(Ac.crossVectors(mr,_r),n=[Ac.x,Ac.y,Ac.z],Wd(n,uo,co,fo,bc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],ki=new ut,Tc=new uu,uo=new ut,co=new ut,fo=new ut,mr=new ut,_r=new ut,ts=new ut,Bl=new ut,bc=new ut,Ac=new ut,es=new ut;function Wd(o,t,n,a,s){for(let u=0,c=o.length-3;u<=c;u+=3){es.fromArray(o,u);const f=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),p=t.dot(es),d=n.dot(es),_=a.dot(es);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const n1=new uu,Fl=new ut,qd=new ut;class qm{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):n1.setFromPoints(t).getCenter(a);let s=0;for(let u=0,c=t.length;u<c;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fl.subVectors(t,this.center);const n=Fl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Fl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fl.copy(t.center).add(qd)),this.expandByPoint(Fl.copy(t.center).sub(qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Da=new ut,Yd=new ut,Rc=new ut,gr=new ut,jd=new ut,Cc=new ut,Zd=new ut;class i1{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){Yd.copy(t).add(n).multiplyScalar(.5),Rc.copy(n).sub(t).normalize(),gr.copy(this.origin).sub(Yd);const u=t.distanceTo(n)*.5,c=-this.direction.dot(Rc),f=gr.dot(this.direction),p=-gr.dot(Rc),d=gr.lengthSq(),_=Math.abs(1-c*c);let g,v,x,T;if(_>0)if(g=c*p-f,v=c*f-p,T=u*_,g>=0)if(v>=-T)if(v<=T){const E=1/_;g*=E,v*=E,x=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=u,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+d;else v=-u,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+d;else v<=-T?(g=Math.max(0,-(-c*u+f)),v=g>0?-u:Math.min(Math.max(-u,-p),u),x=-g*g+v*(v+2*p)+d):v<=T?(g=0,v=Math.min(Math.max(-u,-p),u),x=v*(v+2*p)+d):(g=Math.max(0,-(c*u+f)),v=g>0?u:Math.min(Math.max(-u,-p),u),x=-g*g+v*(v+2*p)+d);else v=c>0?-u:u,g=Math.max(0,-(c*v+f)),x=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Yd).addScaledVector(Rc,v),x}intersectSphere(t,n){Da.subVectors(t.center,this.origin);const a=Da.dot(this.direction),s=Da.dot(Da)-a*a,u=t.radius*t.radius;if(s>u)return null;const c=Math.sqrt(u-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(u=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||u>s||((u>a||isNaN(a))&&(a=u),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Da)!==null}intersectTriangle(t,n,a,s,u){jd.subVectors(n,t),Cc.subVectors(a,t),Zd.crossVectors(jd,Cc);let c=this.direction.dot(Zd),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gr.subVectors(this.origin,t);const p=f*this.direction.dot(Cc.crossVectors(gr,Cc));if(p<0)return null;const d=f*this.direction.dot(jd.cross(gr));if(d<0||p+d>c)return null;const _=-f*gr.dot(Zd);return _<0?null:this.at(_/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class En{constructor(t,n,a,s,u,c,f,p,d,_,g,v,x,T,E,S){En.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d,_,g,v,x,T,E,S)}set(t,n,a,s,u,c,f,p,d,_,g,v,x,T,E,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=s,y[1]=u,y[5]=c,y[9]=f,y[13]=p,y[2]=d,y[6]=_,y[10]=g,y[14]=v,y[3]=x,y[7]=T,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new En().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,s=1/ho.setFromMatrixColumn(t,0).length(),u=1/ho.setFromMatrixColumn(t,1).length(),c=1/ho.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=c*_,x=c*g,T=f*_,E=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=x+T*d,n[5]=v-E*d,n[9]=-f*p,n[2]=E-v*d,n[6]=T+x*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,x=p*g,T=d*_,E=d*g;n[0]=v+E*f,n[4]=T*f-x,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=x*f-T,n[6]=E+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,x=p*g,T=d*_,E=d*g;n[0]=v-E*f,n[4]=-c*g,n[8]=T+x*f,n[1]=x+T*f,n[5]=c*_,n[9]=E-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,x=c*g,T=f*_,E=f*g;n[0]=p*_,n[4]=T*d-x,n[8]=v*d+E,n[1]=p*g,n[5]=E*d+v,n[9]=x*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,x=c*d,T=f*p,E=f*d;n[0]=p*_,n[4]=E-v*g,n[8]=T*g+x,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=x*g+T,n[10]=v-E*g}else if(t.order==="XZY"){const v=c*p,x=c*d,T=f*p,E=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+E,n[5]=c*_,n[9]=x*g-T,n[2]=T*g-x,n[6]=f*_,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a1,t,r1)}lookAt(t,n,a){const s=this.elements;return _i.subVectors(t,n),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),vr.crossVectors(a,_i),vr.lengthSq()===0&&(Math.abs(a.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),vr.crossVectors(a,_i)),vr.normalize(),wc.crossVectors(_i,vr),s[0]=vr.x,s[4]=wc.x,s[8]=_i.x,s[1]=vr.y,s[5]=wc.y,s[9]=_i.y,s[2]=vr.z,s[6]=wc.z,s[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],x=a[13],T=a[2],E=a[6],S=a[10],y=a[14],N=a[3],L=a[7],R=a[11],O=a[15],P=s[0],U=s[4],I=s[8],b=s[12],w=s[1],H=s[5],k=s[9],J=s[13],rt=s[2],st=s[6],B=s[10],X=s[14],q=s[3],_t=s[7],Mt=s[11],z=s[15];return u[0]=c*P+f*w+p*rt+d*q,u[4]=c*U+f*H+p*st+d*_t,u[8]=c*I+f*k+p*B+d*Mt,u[12]=c*b+f*J+p*X+d*z,u[1]=_*P+g*w+v*rt+x*q,u[5]=_*U+g*H+v*st+x*_t,u[9]=_*I+g*k+v*B+x*Mt,u[13]=_*b+g*J+v*X+x*z,u[2]=T*P+E*w+S*rt+y*q,u[6]=T*U+E*H+S*st+y*_t,u[10]=T*I+E*k+S*B+y*Mt,u[14]=T*b+E*J+S*X+y*z,u[3]=N*P+L*w+R*rt+O*q,u[7]=N*U+L*H+R*st+O*_t,u[11]=N*I+L*k+R*B+O*Mt,u[15]=N*b+L*J+R*X+O*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],x=t[14],T=t[3],E=t[7],S=t[11],y=t[15];return T*(+u*p*g-s*d*g-u*f*v+a*d*v+s*f*x-a*p*x)+E*(+n*p*x-n*d*v+u*c*v-s*c*x+s*d*_-u*p*_)+S*(+n*d*g-n*f*x-u*c*g+a*c*x+u*f*_-a*d*_)+y*(-s*f*_-n*p*g+n*f*v+s*c*g-a*c*v+a*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],x=t[11],T=t[12],E=t[13],S=t[14],y=t[15],N=g*S*d-E*v*d+E*p*x-f*S*x-g*p*y+f*v*y,L=T*v*d-_*S*d-T*p*x+c*S*x+_*p*y-c*v*y,R=_*E*d-T*g*d+T*f*x-c*E*x-_*f*y+c*g*y,O=T*g*p-_*E*p-T*f*v+c*E*v+_*f*S-c*g*S,P=n*N+a*L+s*R+u*O;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return t[0]=N*U,t[1]=(E*v*u-g*S*u-E*s*x+a*S*x+g*s*y-a*v*y)*U,t[2]=(f*S*u-E*p*u+E*s*d-a*S*d-f*s*y+a*p*y)*U,t[3]=(g*p*u-f*v*u-g*s*d+a*v*d+f*s*x-a*p*x)*U,t[4]=L*U,t[5]=(_*S*u-T*v*u+T*s*x-n*S*x-_*s*y+n*v*y)*U,t[6]=(T*p*u-c*S*u-T*s*d+n*S*d+c*s*y-n*p*y)*U,t[7]=(c*v*u-_*p*u+_*s*d-n*v*d-c*s*x+n*p*x)*U,t[8]=R*U,t[9]=(T*g*u-_*E*u-T*a*x+n*E*x+_*a*y-n*g*y)*U,t[10]=(c*E*u-T*f*u+T*a*d-n*E*d-c*a*y+n*f*y)*U,t[11]=(_*f*u-c*g*u-_*a*d+n*g*d+c*a*x-n*f*x)*U,t[12]=O*U,t[13]=(_*E*s-T*g*s+T*a*v-n*E*v-_*a*S+n*g*S)*U,t[14]=(T*f*s-c*E*s-T*a*p+n*E*p+c*a*S-n*f*S)*U,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*U,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,c=t.x,f=t.y,p=t.z,d=u*c,_=u*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,c){return this.set(1,a,u,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,c=n._y,f=n._z,p=n._w,d=u+u,_=c+c,g=f+f,v=u*d,x=u*_,T=u*g,E=c*_,S=c*g,y=f*g,N=p*d,L=p*_,R=p*g,O=a.x,P=a.y,U=a.z;return s[0]=(1-(E+y))*O,s[1]=(x+R)*O,s[2]=(T-L)*O,s[3]=0,s[4]=(x-R)*P,s[5]=(1-(v+y))*P,s[6]=(S+N)*P,s[7]=0,s[8]=(T+L)*U,s[9]=(S-N)*U,s[10]=(1-(v+E))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;let u=ho.set(s[0],s[1],s[2]).length();const c=ho.set(s[4],s[5],s[6]).length(),f=ho.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),t.x=s[12],t.y=s[13],t.z=s[14],Xi.copy(this);const d=1/u,_=1/c,g=1/f;return Xi.elements[0]*=d,Xi.elements[1]*=d,Xi.elements[2]*=d,Xi.elements[4]*=_,Xi.elements[5]*=_,Xi.elements[6]*=_,Xi.elements[8]*=g,Xi.elements[9]*=g,Xi.elements[10]*=g,n.setFromRotationMatrix(Xi),a.x=u,a.y=c,a.z=f,this}makePerspective(t,n,a,s,u,c,f=oa,p=!1){const d=this.elements,_=2*u/(n-t),g=2*u/(a-s),v=(n+t)/(n-t),x=(a+s)/(a-s);let T,E;if(p)T=u/(c-u),E=c*u/(c-u);else if(f===oa)T=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(f===uf)T=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,c,f=oa,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),x=-(a+s)/(a-s);let T,E;if(p)T=1/(c-u),E=c/(c-u);else if(f===oa)T=-2/(c-u),E=-(c+u)/(c-u);else if(f===uf)T=-1/(c-u),E=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=T,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const ho=new ut,Xi=new En,a1=new ut(0,0,0),r1=new ut(1,1,1),vr=new ut,wc=new ut,_i=new ut,hy=new En,dy=new lu;class ka{constructor(t=0,n=0,a=0,s=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return hy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hy,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return dy.setFromEuler(this),this.setFromQuaternion(dy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class uS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s1=0;const py=new ut,po=new lu,Ua=new En,Dc=new ut,Il=new ut,o1=new ut,l1=new lu,my=new ut(1,0,0),_y=new ut(0,1,0),gy=new ut(0,0,1),vy={type:"added"},u1={type:"removed"},mo={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Ei extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ei.DEFAULT_UP.clone();const t=new ut,n=new ka,a=new lu,s=new ut(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new En},normalMatrix:{value:new de}}),this.matrix=new En,this.matrixWorld=new En,this.matrixAutoUpdate=Ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.multiply(po),this}rotateOnWorldAxis(t,n){return po.setFromAxisAngle(t,n),this.quaternion.premultiply(po),this}rotateX(t){return this.rotateOnAxis(my,t)}rotateY(t){return this.rotateOnAxis(_y,t)}rotateZ(t){return this.rotateOnAxis(gy,t)}translateOnAxis(t,n){return py.copy(t).applyQuaternion(this.quaternion),this.position.add(py.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(my,t)}translateY(t){return this.translateOnAxis(_y,t)}translateZ(t){return this.translateOnAxis(gy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Dc.copy(t):Dc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Il.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(Il,Dc,this.up):Ua.lookAt(Dc,Il,this.up),this.quaternion.setFromRotationMatrix(Ua),s&&(Ua.extractRotation(s.matrixWorld),po.setFromRotationMatrix(Ua),this.quaternion.premultiply(po.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vy),mo.child=t,this.dispatchEvent(mo),mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(u1),Kd.child=t,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vy),mo.child=t,this.dispatchEvent(mo),mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,t,o1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Il,l1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(u(t.materials,this.material[p]));s.material=f}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(u(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),x=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),T.length>0&&(a.nodes=T)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Ei.DEFAULT_UP=new ut(0,1,0);Ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new ut,La=new ut,Qd=new ut,Na=new ut,_o=new ut,go=new ut,yy=new ut,Jd=new ut,$d=new ut,tp=new ut,ep=new hn,np=new hn,ip=new hn;class Yi{constructor(t=new ut,n=new ut,a=new ut){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Wi.subVectors(t,n),s.cross(Wi);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){Wi.subVectors(s,n),La.subVectors(a,n),Qd.subVectors(t,n);const c=Wi.dot(Wi),f=Wi.dot(La),p=Wi.dot(Qd),d=La.dot(La),_=La.dot(Qd),g=c*d-f*f;if(g===0)return u.set(0,0,0),null;const v=1/g,x=(d*p-f*_)*v,T=(c*_-f*p)*v;return u.set(1-x-T,T,x)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,n,a,s,u,c,f,p){return this.getBarycoord(t,n,a,s,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Na.x),p.addScaledVector(c,Na.y),p.addScaledVector(f,Na.z),p)}static getInterpolatedAttribute(t,n,a,s,u,c){return ep.setScalar(0),np.setScalar(0),ip.setScalar(0),ep.fromBufferAttribute(t,n),np.fromBufferAttribute(t,a),ip.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(ep,u.x),c.addScaledVector(np,u.y),c.addScaledVector(ip,u.z),c}static isFrontFacing(t,n,a,s){return Wi.subVectors(a,n),La.subVectors(t,n),Wi.cross(La).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Wi.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Yi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,u){return Yi.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return Yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let c,f;_o.subVectors(s,a),go.subVectors(u,a),Jd.subVectors(t,a);const p=_o.dot(Jd),d=go.dot(Jd);if(p<=0&&d<=0)return n.copy(a);$d.subVectors(t,s);const _=_o.dot($d),g=go.dot($d);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(_o,c);tp.subVectors(t,u);const x=_o.dot(tp),T=go.dot(tp);if(T>=0&&x<=T)return n.copy(u);const E=x*d-p*T;if(E<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(go,f);const S=_*T-x*g;if(S<=0&&g-_>=0&&x-T>=0)return yy.subVectors(u,s),f=(g-_)/(g-_+(x-T)),n.copy(s).addScaledVector(yy,f);const y=1/(S+E+v);return c=E*y,f=v*y,n.copy(a).addScaledVector(_o,c).addScaledVector(go,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Uc={h:0,s:0,l:0};function ap(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Xe{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ue.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=Ue.workingColorSpace){if(t=Yb(t,1),n=Te(n,0,1),a=Te(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=ap(c,u,t+1/3),this.g=ap(c,u,t),this.b=ap(c,u,t-1/3)}return Ue.colorSpaceToWorking(this,s),this}setStyle(t,n=yi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const a=cS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=wo(t.r),this.g=wo(t.g),this.b=wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ue.workingToColorSpace(Hn.copy(this),t),Math.round(Te(Hn.r*255,0,255))*65536+Math.round(Te(Hn.g*255,0,255))*256+Math.round(Te(Hn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,s=Hn.g,u=Hn.b,c=Math.max(a,s,u),f=Math.min(a,s,u);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-u)/g+(s<u?6:0);break;case s:p=(u-a)/g+2;break;case u:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(Hn.copy(this),n),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=yi){Ue.workingToColorSpace(Hn.copy(this),t);const n=Hn.r,a=Hn.g,s=Hn.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+n,yr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(yr),t.getHSL(Uc);const a=Hd(yr.h,Uc.h,n),s=Hd(yr.s,Uc.s,n),u=Hd(yr.l,Uc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Xe;Xe.NAMES=cS;let c1=0;class mf extends Go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ou(),this.name="",this.type="Material",this.blending=Co,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dp,this.blendDst=Up,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ry,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Co&&(a.blending=this.blending),this.side!==Ur&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Dp&&(a.blendSrc=this.blendSrc),this.blendDst!==Up&&(a.blendDst=this.blendDst),this.blendEquation!==us&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ry&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==oo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==oo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const c=[];for(const f in u){const p=u[f];delete p.metadata,c.push(p)}return c}if(n){const u=s(t.textures),c=s(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fS extends mf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=Kx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vn=new ut,Lc=new Ce;let f1=0;class ua{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=sy,this.updateRanges=[],this.gpuType=Fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Lc.fromBufferAttribute(this,n),Lc.applyMatrix3(t),this.setXY(n,Lc.x,Lc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix3(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(t),this.setXYZ(n,vn.x,vn.y,vn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=zl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ti(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=zl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=zl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=zl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=zl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ti(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),s=ti(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=ti(n,this.array),a=ti(a,this.array),s=ti(s,this.array),u=ti(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sy&&(t.usage=this.usage),t}}class hS extends ua{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class dS extends ua{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class vs extends ua{constructor(t,n,a){super(new Float32Array(t),n,a)}}let h1=0;const Pi=new En,rp=new Ei,vo=new ut,gi=new uu,Hl=new uu,Cn=new ut;class Es extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=ou(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oS(t)?dS:hS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new de().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,a){return Pi.makeTranslation(t,n,a),this.applyMatrix4(Pi),this}scale(t,n,a){return Pi.makeScale(t,n,a),this.applyMatrix4(Pi),this}lookAt(t){return rp.lookAt(t),rp.updateMatrix(),this.applyMatrix4(rp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new vs(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const u=t[s];n.setXYZ(s,u.x,u.y,u.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qm);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];Hl.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(gi.min,Hl.min),gi.expandByPoint(Cn),Cn.addVectors(gi.max,Hl.max),gi.expandByPoint(Cn)):(gi.expandByPoint(Hl.min),gi.expandByPoint(Hl.max))}gi.getCenter(a);let s=0;for(let u=0,c=t.count;u<c;u++)Cn.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(Cn));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Cn.fromBufferAttribute(f,d),p&&(vo.fromBufferAttribute(t,d),Cn.add(vo)),s=Math.max(s,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ua(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let I=0;I<a.count;I++)f[I]=new ut,p[I]=new ut;const d=new ut,_=new ut,g=new ut,v=new Ce,x=new Ce,T=new Ce,E=new ut,S=new ut;function y(I,b,w){d.fromBufferAttribute(a,I),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,w),v.fromBufferAttribute(u,I),x.fromBufferAttribute(u,b),T.fromBufferAttribute(u,w),_.sub(d),g.sub(d),x.sub(v),T.sub(v);const H=1/(x.x*T.y-T.x*x.y);isFinite(H)&&(E.copy(_).multiplyScalar(T.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(_,-T.x).multiplyScalar(H),f[I].add(E),f[b].add(E),f[w].add(E),p[I].add(S),p[b].add(S),p[w].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let I=0,b=N.length;I<b;++I){const w=N[I],H=w.start,k=w.count;for(let J=H,rt=H+k;J<rt;J+=3)y(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new ut,R=new ut,O=new ut,P=new ut;function U(I){O.fromBufferAttribute(s,I),P.copy(O);const b=f[I];L.copy(b),L.sub(O.multiplyScalar(O.dot(b))).normalize(),R.crossVectors(P,b);const H=R.dot(p[I])<0?-1:1;c.setXYZW(I,L.x,L.y,L.z,H)}for(let I=0,b=N.length;I<b;++I){const w=N[I],H=w.start,k=w.count;for(let J=H,rt=H+k;J<rt;J+=3)U(t.getX(J+0)),U(t.getX(J+1)),U(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ua(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const s=new ut,u=new ut,c=new ut,f=new ut,p=new ut,d=new ut,_=new ut,g=new ut;if(t)for(let v=0,x=t.count;v<x;v+=3){const T=t.getX(v+0),E=t.getX(v+1),S=t.getX(v+2);s.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,S),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,S),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=n.count;v<x;v+=3)s.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let x=0,T=0;for(let E=0,S=p.length;E<S;E++){f.isInterleavedBufferAttribute?x=p[E]*f.data.stride+f.offset:x=p[E]*_;for(let y=0;y<_;y++)v[T++]=d[x++]}return new ua(v,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Es,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const u=this.morphAttributes;for(const f in u){const p=[],d=u[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],x=t(v,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];_.push(x.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const u=t.morphAttributes;for(const d in u){const _=[],g=u[d];for(let v=0,x=g.length;v<x;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xy=new En,ns=new i1,Nc=new qm,Sy=new ut,Oc=new ut,Pc=new ut,zc=new ut,sp=new ut,Bc=new ut,My=new ut,Fc=new ut;class la extends Ei{constructor(t=new Es,n=new fS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(u&&f){Bc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const _=f[p],g=u[p];_!==0&&(sp.fromBufferAttribute(g,t),c?Bc.addScaledVector(sp,_):Bc.addScaledVector(sp.sub(n),_))}n.add(Bc)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(u),ns.copy(t.ray).recast(t.near),!(Nc.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Nc,Sy)===null||ns.origin.distanceToSquared(Sy)>(t.far-t.near)**2))&&(xy.copy(u).invert(),ns.copy(t.ray).applyMatrix4(xy),!(a.boundingBox!==null&&ns.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ns)))}_computeIntersections(t,n,a){let s;const u=this.geometry,c=this.material,f=u.index,p=u.attributes.position,d=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,x=u.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,E=v.length;T<E;T++){const S=v[T],y=c[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let R=N,O=L;R<O;R+=3){const P=f.getX(R),U=f.getX(R+1),I=f.getX(R+2);s=Ic(this,y,t,a,d,_,g,P,U,I),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const T=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let S=T,y=E;S<y;S+=3){const N=f.getX(S),L=f.getX(S+1),R=f.getX(S+2);s=Ic(this,c,t,a,d,_,g,N,L,R),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,E=v.length;T<E;T++){const S=v[T],y=c[S.materialIndex],N=Math.max(S.start,x.start),L=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let R=N,O=L;R<O;R+=3){const P=R,U=R+1,I=R+2;s=Ic(this,y,t,a,d,_,g,P,U,I),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=S.materialIndex,n.push(s))}}else{const T=Math.max(0,x.start),E=Math.min(p.count,x.start+x.count);for(let S=T,y=E;S<y;S+=3){const N=S,L=S+1,R=S+2;s=Ic(this,c,t,a,d,_,g,N,L,R),s&&(s.faceIndex=Math.floor(S/3),n.push(s))}}}}function d1(o,t,n,a,s,u,c,f){let p;if(t.side===ri?p=a.intersectTriangle(c,u,s,!0,f):p=a.intersectTriangle(s,u,c,t.side===Ur,f),p===null)return null;Fc.copy(f),Fc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Fc);return d<n.near||d>n.far?null:{distance:d,point:Fc.clone(),object:o}}function Ic(o,t,n,a,s,u,c,f,p,d){o.getVertexPosition(f,Oc),o.getVertexPosition(p,Pc),o.getVertexPosition(d,zc);const _=d1(o,t,n,a,Oc,Pc,zc,My);if(_){const g=new ut;Yi.getBarycoord(My,Oc,Pc,zc,g),s&&(_.uv=Yi.getInterpolatedAttribute(s,f,p,d,g,new Ce)),u&&(_.uv1=Yi.getInterpolatedAttribute(u,f,p,d,g,new Ce)),c&&(_.normal=Yi.getInterpolatedAttribute(c,f,p,d,g,new ut),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ut,materialIndex:0};Yi.getNormal(Oc,Pc,zc,v.normal),_.face=v,_.barycoord=g}return _}class cu extends Es{constructor(t=1,n=1,a=1,s=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:c};const f=this;s=Math.floor(s),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,x=0;T("z","y","x",-1,-1,a,n,t,c,u,0),T("z","y","x",1,-1,a,n,-t,c,u,1),T("x","z","y",1,1,t,a,n,s,c,2),T("x","z","y",1,-1,t,a,-n,s,c,3),T("x","y","z",1,-1,t,n,a,s,u,4),T("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new vs(d,3)),this.setAttribute("normal",new vs(_,3)),this.setAttribute("uv",new vs(g,2));function T(E,S,y,N,L,R,O,P,U,I,b){const w=R/U,H=O/I,k=R/2,J=O/2,rt=P/2,st=U+1,B=I+1;let X=0,q=0;const _t=new ut;for(let Mt=0;Mt<B;Mt++){const z=Mt*H-J;for(let $=0;$<st;$++){const xt=$*w-k;_t[E]=xt*N,_t[S]=z*L,_t[y]=rt,d.push(_t.x,_t.y,_t.z),_t[E]=0,_t[S]=0,_t[y]=P>0?1:-1,_.push(_t.x,_t.y,_t.z),g.push($/U),g.push(1-Mt/I),X+=1}}for(let Mt=0;Mt<I;Mt++)for(let z=0;z<U;z++){const $=v+z+st*Mt,xt=v+z+st*(Mt+1),Et=v+(z+1)+st*(Mt+1),Ct=v+(z+1)+st*Mt;p.push($,xt,Ct),p.push(xt,Et,Ct),q+=6}f.addGroup(x,q,b),x+=q,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ho(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function qn(o){const t={};for(let n=0;n<o.length;n++){const a=Ho(o[n]);for(const s in a)t[s]=a[s]}return t}function p1(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function pS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const m1={clone:Ho,merge:qn};var _1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends mf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_1,this.fragmentShader=g1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ho(t.uniforms),this.uniformsGroups=p1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class mS extends Ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new En,this.projectionMatrix=new En,this.projectionMatrixInverse=new En,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new ut,Ey=new Ce,Ty=new Ce;class qi extends mS{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=gm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Id*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gm*2*Math.atan(Math.tan(Id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-t/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(xr.x,xr.y).multiplyScalar(-t/xr.z)}getViewSize(t,n){return this.getViewBounds(t,Ey,Ty),n.subVectors(Ty,Ey)}setViewOffset(t,n,a,s,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Id*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const yo=-90,xo=1;class v1 extends Ei{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qi(yo,xo,t,n);s.layers=this.layers,this.add(s);const u=new qi(yo,xo,t,n);u.layers=this.layers,this.add(u);const c=new qi(yo,xo,t,n);c.layers=this.layers,this.add(c);const f=new qi(yo,xo,t,n);f.layers=this.layers,this.add(f);const p=new qi(yo,xo,t,n);p.layers=this.layers,this.add(p);const d=new qi(yo,xo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,c,f,p]=n;for(const d of n)this.remove(d);if(t===oa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===uf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,u),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,x),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class _S extends si{constructor(t=[],n=Bo,a,s,u,c,f,p,d,_){super(t,n,a,s,u,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y1 extends Ss{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new _S(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cu(5,5,5),u=new Xa({name:"CubemapFromEquirect",uniforms:Ho(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ri,blending:Rr});u.uniforms.tEquirect.value=n;const c=new la(s,u),f=n.minFilter;return n.minFilter===ds&&(n.minFilter=sa),new v1(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(u)}}class Hc extends Ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x1={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const S=n.getJointPose(E,a),y=this._getHandJoint(d,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),x=.02,T=.005;d.inputState.pinching&&v>x+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(x1)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Hc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class S1 extends Ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const lp=new ut,M1=new ut,E1=new de;class os{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=lp.subVectors(a,n).cross(M1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(lp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||E1.getNormalMatrix(t),s=this.coplanarPoint(lp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new qm,T1=new Ce(.5,.5),Gc=new ut;class gS{constructor(t=new os,n=new os,a=new os,s=new os,u=new os,c=new os){this.planes=[t,n,a,s,u,c]}set(t,n,a,s,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(u),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=oa,a=!1){const s=this.planes,u=t.elements,c=u[0],f=u[1],p=u[2],d=u[3],_=u[4],g=u[5],v=u[6],x=u[7],T=u[8],E=u[9],S=u[10],y=u[11],N=u[12],L=u[13],R=u[14],O=u[15];if(s[0].setComponents(d-c,x-_,y-T,O-N).normalize(),s[1].setComponents(d+c,x+_,y+T,O+N).normalize(),s[2].setComponents(d+f,x+g,y+E,O+L).normalize(),s[3].setComponents(d-f,x-g,y-E,O-L).normalize(),a)s[4].setComponents(p,v,S,R).normalize(),s[5].setComponents(d-p,x-v,y-S,O-R).normalize();else if(s[4].setComponents(d-p,x-v,y-S,O-R).normalize(),n===oa)s[5].setComponents(d+p,x+v,y+S,O+R).normalize();else if(n===uf)s[5].setComponents(p,v,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);const n=T1.distanceTo(t.center);return is.radius=.7071067811865476+n,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(Gc.x=s.normal.x>0?t.max.x:t.min.x,Gc.y=s.normal.y>0?t.max.y:t.min.y,Gc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vS extends si{constructor(t,n,a=xs,s,u,c,f=Zi,p=Zi,d,_=nu,g=1){if(_!==nu&&_!==iu)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,u,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yS extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fu extends Es{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,x=[],T=[],E=[],S=[];for(let y=0;y<_;y++){const N=y*v-c;for(let L=0;L<d;L++){const R=L*g-u;T.push(R,-N,0),E.push(0,0,1),S.push(L/f),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let N=0;N<f;N++){const L=N+d*y,R=N+d*(y+1),O=N+1+d*(y+1),P=N+1+d*y;x.push(L,R,P),x.push(R,O,P)}this.setIndex(x),this.setAttribute("position",new vs(T,3)),this.setAttribute("normal",new vs(E,3)),this.setAttribute("uv",new vs(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fu(t.width,t.height,t.widthSegments,t.heightSegments)}}class b1 extends mf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A1 extends mf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xS extends mS{constructor(t=-1,n=1,a=1,s=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class R1 extends qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class C1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function by(o,t,n,a){const s=w1(a);switch(n){case nS:return o*t;case aS:return o*t/s.components*s.byteLength;case Vm:return o*t/s.components*s.byteLength;case rS:return o*t*2/s.components*s.byteLength;case km:return o*t*2/s.components*s.byteLength;case iS:return o*t*3/s.components*s.byteLength;case ji:return o*t*4/s.components*s.byteLength;case Xm:return o*t*4/s.components*s.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xp:case qp:return Math.max(o,16)*Math.max(t,8)/4;case kp:case Wp:return Math.max(o,8)*Math.max(t,8)/2;case Yp:case jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Zp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case $p:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case tm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case em:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case nm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case im:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case am:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case rm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case sm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case om:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case lm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case um:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case cm:case fm:case hm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case dm:case pm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case mm:case _m:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function w1(o){switch(o){case Va:case Jx:return{byteLength:1,components:1};case tu:case $x:case su:return{byteLength:2,components:1};case Hm:case Gm:return{byteLength:2,components:4};case xs:case Im:case Fa:return{byteLength:4,components:1};case tS:case eS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function SS(){let o=null,t=!1,n=null,a=null;function s(u,c){n(u,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function D1(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((x,T)=>x.start-T.start);let v=0;for(let x=1;x<g.length;x++){const T=g[v],E=g[x];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++v,g[v]=E)}g.length=v+1;for(let x=0,T=g.length;x<T;x++){const E=g[x];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:u,update:c}}var U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L1=`#ifdef USE_ALPHAHASH
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
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B1=`#ifdef USE_AOMAP
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
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I1=`#ifdef USE_BATCHING
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
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,W1=`#ifdef USE_BUMPMAP
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tA=`#define PI 3.141592653589793
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
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nA=`vec3 transformedNormal = objectNormal;
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
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oA="gl_FragColor = linearToOutputTexel( gl_FragColor );",lA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uA=`#ifdef USE_ENVMAP
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
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fA=`#ifdef USE_ENVMAP
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
#endif`,hA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
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
#endif`,pA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_A=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
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
}`,yA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
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
#endif`,EA=`#ifdef USE_ENVMAP
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
#endif`,TA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CA=`PhysicalMaterial material;
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
#endif`,wA=`struct PhysicalMaterial {
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
}`,DA=`
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
#endif`,UA=`#if defined( RE_IndirectDiffuse )
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
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HA=`#if defined( USE_POINTS_UV )
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
#endif`,GA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qA=`#ifdef USE_MORPHTARGETS
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
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$A=`#ifdef USE_NORMALMAP
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
#endif`,tR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mR=`float getShadowMask() {
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
}`,_R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gR=`#ifdef USE_SKINNING
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
#endif`,vR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yR=`#ifdef USE_SKINNING
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
#endif`,xR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSION
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
#endif`,bR=`#ifdef USE_TRANSMISSION
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
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UR=`uniform sampler2D t2D;
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
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zR=`#include <common>
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
}`,BR=`#if DEPTH_PACKING == 3200
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
}`,FR=`#define DISTANCE
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
}`,IR=`#define DISTANCE
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
}`,HR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`uniform float scale;
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
}`,kR=`uniform vec3 diffuse;
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
}`,XR=`#include <common>
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
}`,WR=`uniform vec3 diffuse;
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
}`,qR=`#define LAMBERT
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
}`,YR=`#define LAMBERT
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
}`,jR=`#define MATCAP
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
}`,ZR=`#define MATCAP
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
}`,KR=`#define NORMAL
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
}`,QR=`#define NORMAL
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
}`,JR=`#define PHONG
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
}`,$R=`#define PHONG
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
}`,tC=`#define STANDARD
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
}`,eC=`#define STANDARD
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
}`,nC=`#define TOON
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
}`,iC=`#define TOON
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
}`,aC=`uniform float size;
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
}`,rC=`uniform vec3 diffuse;
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
}`,sC=`#include <common>
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
}`,oC=`uniform vec3 color;
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
}`,lC=`uniform float rotation;
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
}`,uC=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:U1,alphahash_pars_fragment:L1,alphamap_fragment:N1,alphamap_pars_fragment:O1,alphatest_fragment:P1,alphatest_pars_fragment:z1,aomap_fragment:B1,aomap_pars_fragment:F1,batching_pars_vertex:I1,batching_vertex:H1,begin_vertex:G1,beginnormal_vertex:V1,bsdfs:k1,iridescence_fragment:X1,bumpmap_pars_fragment:W1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:Z1,color_fragment:K1,color_pars_fragment:Q1,color_pars_vertex:J1,color_vertex:$1,common:tA,cube_uv_reflection_fragment:eA,defaultnormal_vertex:nA,displacementmap_pars_vertex:iA,displacementmap_vertex:aA,emissivemap_fragment:rA,emissivemap_pars_fragment:sA,colorspace_fragment:oA,colorspace_pars_fragment:lA,envmap_fragment:uA,envmap_common_pars_fragment:cA,envmap_pars_fragment:fA,envmap_pars_vertex:hA,envmap_physical_pars_fragment:EA,envmap_vertex:dA,fog_vertex:pA,fog_pars_vertex:mA,fog_fragment:_A,fog_pars_fragment:gA,gradientmap_pars_fragment:vA,lightmap_pars_fragment:yA,lights_lambert_fragment:xA,lights_lambert_pars_fragment:SA,lights_pars_begin:MA,lights_toon_fragment:TA,lights_toon_pars_fragment:bA,lights_phong_fragment:AA,lights_phong_pars_fragment:RA,lights_physical_fragment:CA,lights_physical_pars_fragment:wA,lights_fragment_begin:DA,lights_fragment_maps:UA,lights_fragment_end:LA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:OA,logdepthbuf_pars_vertex:PA,logdepthbuf_vertex:zA,map_fragment:BA,map_pars_fragment:FA,map_particle_fragment:IA,map_particle_pars_fragment:HA,metalnessmap_fragment:GA,metalnessmap_pars_fragment:VA,morphinstance_vertex:kA,morphcolor_vertex:XA,morphnormal_vertex:WA,morphtarget_pars_vertex:qA,morphtarget_vertex:YA,normal_fragment_begin:jA,normal_fragment_maps:ZA,normal_pars_fragment:KA,normal_pars_vertex:QA,normal_vertex:JA,normalmap_pars_fragment:$A,clearcoat_normal_fragment_begin:tR,clearcoat_normal_fragment_maps:eR,clearcoat_pars_fragment:nR,iridescence_pars_fragment:iR,opaque_fragment:aR,packing:rR,premultiplied_alpha_fragment:sR,project_vertex:oR,dithering_fragment:lR,dithering_pars_fragment:uR,roughnessmap_fragment:cR,roughnessmap_pars_fragment:fR,shadowmap_pars_fragment:hR,shadowmap_pars_vertex:dR,shadowmap_vertex:pR,shadowmask_pars_fragment:mR,skinbase_vertex:_R,skinning_pars_vertex:gR,skinning_vertex:vR,skinnormal_vertex:yR,specularmap_fragment:xR,specularmap_pars_fragment:SR,tonemapping_fragment:MR,tonemapping_pars_fragment:ER,transmission_fragment:TR,transmission_pars_fragment:bR,uv_pars_fragment:AR,uv_pars_vertex:RR,uv_vertex:CR,worldpos_vertex:wR,background_vert:DR,background_frag:UR,backgroundCube_vert:LR,backgroundCube_frag:NR,cube_vert:OR,cube_frag:PR,depth_vert:zR,depth_frag:BR,distanceRGBA_vert:FR,distanceRGBA_frag:IR,equirect_vert:HR,equirect_frag:GR,linedashed_vert:VR,linedashed_frag:kR,meshbasic_vert:XR,meshbasic_frag:WR,meshlambert_vert:qR,meshlambert_frag:YR,meshmatcap_vert:jR,meshmatcap_frag:ZR,meshnormal_vert:KR,meshnormal_frag:QR,meshphong_vert:JR,meshphong_frag:$R,meshphysical_vert:tC,meshphysical_frag:eC,meshtoon_vert:nC,meshtoon_frag:iC,points_vert:aC,points_frag:rC,shadow_vert:sC,shadow_frag:oC,sprite_vert:lC,sprite_frag:uC},zt={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ia={basic:{uniforms:qn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:qn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:qn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:qn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:qn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Xe(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:qn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:qn([zt.points,zt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:qn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:qn([zt.common,zt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:qn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:qn([zt.sprite,zt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:qn([zt.common,zt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:qn([zt.lights,zt.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ia.physical={uniforms:qn([ia.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Vc={r:0,b:0,g:0},as=new ka,cC=new En;function fC(o,t,n,a,s,u,c){const f=new Xe(0);let p=u===!0?0:1,d,_,g=null,v=0,x=null;function T(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?n:t).get(R)),R}function E(L){let R=!1;const O=T(L);O===null?y(f,p):O&&O.isColor&&(y(O,1),R=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,R){const O=T(R);O&&(O.isCubeTexture||O.mapping===pf)?(_===void 0&&(_=new la(new cu(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Ho(ia.backgroundCube.uniforms),vertexShader:ia.backgroundCube.vertexShader,fragmentShader:ia.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),as.copy(R.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(cC.makeRotationFromEuler(as)),_.material.toneMapped=Ue.getTransfer(O.colorSpace)!==ke,(g!==O||v!==O.version||x!==o.toneMapping)&&(_.material.needsUpdate=!0,g=O,v=O.version,x=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new la(new fu(2,2),new Xa({name:"BackgroundMaterial",uniforms:Ho(ia.background.uniforms),vertexShader:ia.background.vertexShader,fragmentShader:ia.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Ue.getTransfer(O.colorSpace)!==ke,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||v!==O.version||x!==o.toneMapping)&&(d.material.needsUpdate=!0,g=O,v=O.version,x=o.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function y(L,R){L.getRGB(Vc,pS(o)),a.buffers.color.setClear(Vc.r,Vc.g,Vc.b,R,c)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,R=1){f.set(L),p=R,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,y(f,p)},render:E,addToRenderList:S,dispose:N}}function hC(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let u=s,c=!1;function f(w,H,k,J,rt){let st=!1;const B=g(J,k,H);u!==B&&(u=B,d(u.object)),st=x(w,J,k,rt),st&&T(w,J,k,rt),rt!==null&&t.update(rt,o.ELEMENT_ARRAY_BUFFER),(st||c)&&(c=!1,R(w,H,k,J),rt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function p(){return o.createVertexArray()}function d(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,H,k){const J=k.wireframe===!0;let rt=a[w.id];rt===void 0&&(rt={},a[w.id]=rt);let st=rt[H.id];st===void 0&&(st={},rt[H.id]=st);let B=st[J];return B===void 0&&(B=v(p()),st[J]=B),B}function v(w){const H=[],k=[],J=[];for(let rt=0;rt<n;rt++)H[rt]=0,k[rt]=0,J[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:k,attributeDivisors:J,object:w,attributes:{},index:null}}function x(w,H,k,J){const rt=u.attributes,st=H.attributes;let B=0;const X=k.getAttributes();for(const q in X)if(X[q].location>=0){const Mt=rt[q];let z=st[q];if(z===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),Mt===void 0||Mt.attribute!==z||z&&Mt.data!==z.data)return!0;B++}return u.attributesNum!==B||u.index!==J}function T(w,H,k,J){const rt={},st=H.attributes;let B=0;const X=k.getAttributes();for(const q in X)if(X[q].location>=0){let Mt=st[q];Mt===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Mt=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Mt=w.instanceColor));const z={};z.attribute=Mt,Mt&&Mt.data&&(z.data=Mt.data),rt[q]=z,B++}u.attributes=rt,u.attributesNum=B,u.index=J}function E(){const w=u.newAttributes;for(let H=0,k=w.length;H<k;H++)w[H]=0}function S(w){y(w,0)}function y(w,H){const k=u.newAttributes,J=u.enabledAttributes,rt=u.attributeDivisors;k[w]=1,J[w]===0&&(o.enableVertexAttribArray(w),J[w]=1),rt[w]!==H&&(o.vertexAttribDivisor(w,H),rt[w]=H)}function N(){const w=u.newAttributes,H=u.enabledAttributes;for(let k=0,J=H.length;k<J;k++)H[k]!==w[k]&&(o.disableVertexAttribArray(k),H[k]=0)}function L(w,H,k,J,rt,st,B){B===!0?o.vertexAttribIPointer(w,H,k,rt,st):o.vertexAttribPointer(w,H,k,J,rt,st)}function R(w,H,k,J){E();const rt=J.attributes,st=k.getAttributes(),B=H.defaultAttributeValues;for(const X in st){const q=st[X];if(q.location>=0){let _t=rt[X];if(_t===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const Mt=_t.normalized,z=_t.itemSize,$=t.get(_t);if($===void 0)continue;const xt=$.buffer,Et=$.type,Ct=$.bytesPerElement,it=Et===o.INT||Et===o.UNSIGNED_INT||_t.gpuType===Im;if(_t.isInterleavedBufferAttribute){const K=_t.data,St=K.stride,wt=_t.offset;if(K.isInstancedInterleavedBuffer){for(let Nt=0;Nt<q.locationSize;Nt++)y(q.location+Nt,K.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Nt=0;Nt<q.locationSize;Nt++)S(q.location+Nt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Nt=0;Nt<q.locationSize;Nt++)L(q.location+Nt,z/q.locationSize,Et,Mt,St*Ct,(wt+z/q.locationSize*Nt)*Ct,it)}else{if(_t.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)y(q.location+K,_t.meshPerAttribute);w.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let K=0;K<q.locationSize;K++)S(q.location+K);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let K=0;K<q.locationSize;K++)L(q.location+K,z/q.locationSize,Et,Mt,z*Ct,z/q.locationSize*K*Ct,it)}}else if(B!==void 0){const Mt=B[X];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(q.location,Mt);break;case 3:o.vertexAttrib3fv(q.location,Mt);break;case 4:o.vertexAttrib4fv(q.location,Mt);break;default:o.vertexAttrib1fv(q.location,Mt)}}}}N()}function O(){I();for(const w in a){const H=a[w];for(const k in H){const J=H[k];for(const rt in J)_(J[rt].object),delete J[rt];delete H[k]}delete a[w]}}function P(w){if(a[w.id]===void 0)return;const H=a[w.id];for(const k in H){const J=H[k];for(const rt in J)_(J[rt].object),delete J[rt];delete H[k]}delete a[w.id]}function U(w){for(const H in a){const k=a[H];if(k[w.id]===void 0)continue;const J=k[w.id];for(const rt in J)_(J[rt].object),delete J[rt];delete k[w.id]}}function I(){b(),c=!0,u!==s&&(u=s,d(u.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:I,resetDefaultState:b,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:N}}function dC(o,t,n){let a;function s(d){a=d}function u(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let x=0;for(let T=0;T<g;T++)x+=_[T];n.update(x,a,1)}function p(d,_,g,v){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let T=0;T<d.length;T++)c(d[T],_[T],v[T]);else{x.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let T=0;for(let E=0;E<g;E++)T+=_[E]*v[E];n.update(T,a,1)}}this.setMode=s,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function pC(o,t,n,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==ji&&a.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const I=U===su&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Va&&a.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Fa&&!I)}function p(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:O,maxSamples:P}}function mC(o){const t=this;let n=null,a=0,s=!1,u=!1;const c=new os,f=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||a!==0||s;return s=v,a=g.length,x},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,x){const T=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=o.get(g);if(!s||T===null||T.length===0||u&&!S)u?_(null):d();else{const N=u?0:a,L=N*4;let R=y.clippingState||null;p.value=R,R=_(T,v,L,x);for(let O=0;O!==L;++O)R[O]=n[O];y.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,x,T){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=p.value,T!==!0||S===null){const y=x+E*4,N=v.matrixWorldInverse;f.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,R=x;L!==E;++L,R+=4)c.copy(g[L]).applyMatrix4(N,f),c.normal.toArray(S,R),S[R+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,S}}function _C(o){let t=new WeakMap;function n(c,f){return f===Ip?c.mapping=Bo:f===Hp&&(c.mapping=Fo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Ip||f===Hp)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new y1(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const To=4,Ay=[.125,.215,.35,.446,.526,.582],cs=20,up=new xS,Ry=new Xe;let cp=null,fp=0,hp=0,dp=!1;const ls=(1+Math.sqrt(5))/2,So=1/ls,Cy=[new ut(-ls,So,0),new ut(ls,So,0),new ut(-So,0,ls),new ut(So,0,ls),new ut(0,ls,-So),new ut(0,ls,So),new ut(-1,1,-1),new ut(1,1,-1),new ut(-1,1,1),new ut(1,1,1)],gC=new ut;class wy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,s=100,u={}){const{size:c=256,position:f=gC}=u;cp=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ly(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cp,fp,hp),this._renderer.xr.enabled=dp,t.scissorTest=!1,kc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Bo||t.mapping===Fo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cp=this._renderer.getRenderTarget(),fp=this._renderer.getActiveCubeFace(),hp=this._renderer.getActiveMipmapLevel(),dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:sa,minFilter:sa,generateMipmaps:!1,type:su,format:ji,colorSpace:Io,depthBuffer:!1},s=Dy(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dy(t,n,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vC(u)),this._blurMaterial=yC(u,t,n)}return s}_compileMaterial(t){const n=new la(this._lodPlanes[0],t);this._renderer.compile(n,up)}_sceneToCubeUV(t,n,a,s,u){const p=new qi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(Ry),g.toneMapping=Cr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null));const E=new fS({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),S=new la(new cu,E);let y=!1;const N=t.background;N?N.isColor&&(E.color.copy(N),t.background=null,y=!0):(E.color.copy(Ry),y=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[L],u.y,u.z)):R===1?(p.up.set(0,0,d[L]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[L],u.z)):(p.up.set(0,d[L],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[L]));const O=this._cubeSize;kc(s,R*O,L>2?O:0,O,O),g.setRenderTarget(s),y&&g.render(S,p),g.render(t,p)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,t.background=N}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Bo||t.mapping===Fo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ly()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uy());const u=s?this._cubemapMaterial:this._equirectMaterial,c=new la(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=t;const p=this._cubeSize;kc(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,up)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let u=1;u<s;u++){const c=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=Cy[(s-u-1)%Cy.length];this._blur(t,u-1,u,c,f)}n.autoClear=a}_blur(t,n,a,s,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",u),this._halfBlur(c,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new la(this._lodPlanes[s],d),v=d.uniforms,x=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*cs-1),E=u/T,S=isFinite(u)?1+Math.floor(_*E):cs;S>cs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${cs}`);const y=[];let N=0;for(let U=0;U<cs;++U){const I=U/E,b=Math.exp(-I*I/2);y.push(b),U===0?N+=b:U<S&&(N+=2*b)}for(let U=0;U<y.length;U++)y[U]=y[U]/N;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-a;const R=this._sizeLods[s],O=3*R*(s>L-To?s-L+To:0),P=4*(this._cubeSize-R);kc(n,O,P,3*R,2*R),p.setRenderTarget(n),p.render(g,up)}}function vC(o){const t=[],n=[],a=[];let s=o;const u=o-To+1+Ay.length;for(let c=0;c<u;c++){const f=Math.pow(2,s);n.push(f);let p=1/f;c>o-To?p=Ay[c-o+To-1]:c===0&&(p=0),a.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],x=6,T=6,E=3,S=2,y=1,N=new Float32Array(E*T*x),L=new Float32Array(S*T*x),R=new Float32Array(y*T*x);for(let P=0;P<x;P++){const U=P%3*2/3-1,I=P>2?0:-1,b=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];N.set(b,E*T*P),L.set(v,S*T*P);const w=[P,P,P,P,P,P];R.set(w,y*T*P)}const O=new Es;O.setAttribute("position",new ua(N,E)),O.setAttribute("uv",new ua(L,S)),O.setAttribute("faceIndex",new ua(R,y)),t.push(O),s>To&&s--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function Dy(o,t,n){const a=new Ss(o,t,n);return a.texture.mapping=pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function kc(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function yC(o,t,n){const a=new Float32Array(cs),s=new ut(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ym(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Uy(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ym(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Ly(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Ym(){return`

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
	`}function xC(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===Ip||p===Hp,_=p===Bo||p===Fo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new wy(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return d&&x&&x.height>0||_&&x&&s(x)?(n===null&&(n=new wy(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function u(f){const p=f.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function SC(o){const t={};function n(a){if(t[a]!==void 0)return t[a];let s;switch(a){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(a)}return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&au("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function MC(o,t,n,a){const s={},u=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete s[v.id];const x=u.get(v);x&&(t.remove(x),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const x in v)t.update(v[x],o.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,T=g.attributes.position;let E=0;if(x!==null){const N=x.array;E=x.version;for(let L=0,R=N.length;L<R;L+=3){const O=N[L+0],P=N[L+1],U=N[L+2];v.push(O,P,P,U,U,O)}}else if(T!==void 0){const N=T.array;E=T.version;for(let L=0,R=N.length/3-1;L<R;L+=3){const O=L+0,P=L+1,U=L+2;v.push(O,P,P,U,U,O)}}else return;const S=new(oS(v)?dS:hS)(v,1);S.version=E;const y=u.get(g);y&&t.remove(y),u.set(g,S)}function _(g){const v=u.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return u.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function EC(o,t,n){let a;function s(v){a=v}let u,c;function f(v){u=v.type,c=v.bytesPerElement}function p(v,x){o.drawElements(a,x,u,v*c),n.update(x,a,1)}function d(v,x,T){T!==0&&(o.drawElementsInstanced(a,x,u,v*c,T),n.update(x,a,T))}function _(v,x,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,u,v,0,T);let S=0;for(let y=0;y<T;y++)S+=x[y];n.update(S,a,1)}function g(v,x,T,E){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)d(v[y]/c,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,u,v,0,E,0,T);let y=0;for(let N=0;N<T;N++)y+=x[N]*E[N];n.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function TC(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function bC(o,t,n){const a=new WeakMap,s=new hn;function u(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let w=function(){I.dispose(),a.delete(f),f.removeEventListener("dispose",w)};var x=w;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let O=f.attributes.position.count*R,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const U=new Float32Array(O*P*4*g),I=new lS(U,O,P,g);I.type=Fa,I.needsUpdate=!0;const b=R*4;for(let H=0;H<g;H++){const k=y[H],J=N[H],rt=L[H],st=O*P*4*H;for(let B=0;B<k.count;B++){const X=B*b;T===!0&&(s.fromBufferAttribute(k,B),U[st+X+0]=s.x,U[st+X+1]=s.y,U[st+X+2]=s.z,U[st+X+3]=0),E===!0&&(s.fromBufferAttribute(J,B),U[st+X+4]=s.x,U[st+X+5]=s.y,U[st+X+6]=s.z,U[st+X+7]=0),S===!0&&(s.fromBufferAttribute(rt,B),U[st+X+8]=s.x,U[st+X+9]=s.y,U[st+X+10]=s.z,U[st+X+11]=rt.itemSize===4?s.w:1)}}v={count:g,texture:I,size:new Ce(O,P)},a.set(f,v),f.addEventListener("dispose",w)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let T=0;for(let S=0;S<d.length;S++)T+=d[S];const E=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function AC(o,t,n,a){let s=new WeakMap;function u(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const MS=new si,Ny=new vS(1,1),ES=new lS,TS=new e1,bS=new _S,Oy=[],Py=[],zy=new Float32Array(16),By=new Float32Array(9),Fy=new Float32Array(4);function Vo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=Oy[s];if(u===void 0&&(u=new Float32Array(s),Oy[s]=u),t!==0){a.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(u,f)}return u}function Tn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function bn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function _f(o,t){let n=Py[t];n===void 0&&(n=new Int32Array(t),Py[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function RC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function CC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;o.uniform2fv(this.addr,t),bn(n,t)}}function wC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Tn(n,t))return;o.uniform3fv(this.addr,t),bn(n,t)}}function DC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;o.uniform4fv(this.addr,t),bn(n,t)}}function UC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(Tn(n,a))return;Fy.set(a),o.uniformMatrix2fv(this.addr,!1,Fy),bn(n,a)}}function LC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(Tn(n,a))return;By.set(a),o.uniformMatrix3fv(this.addr,!1,By),bn(n,a)}}function NC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Tn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(Tn(n,a))return;zy.set(a),o.uniformMatrix4fv(this.addr,!1,zy),bn(n,a)}}function OC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function PC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;o.uniform2iv(this.addr,t),bn(n,t)}}function zC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tn(n,t))return;o.uniform3iv(this.addr,t),bn(n,t)}}function BC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;o.uniform4iv(this.addr,t),bn(n,t)}}function FC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function IC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Tn(n,t))return;o.uniform2uiv(this.addr,t),bn(n,t)}}function HC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Tn(n,t))return;o.uniform3uiv(this.addr,t),bn(n,t)}}function GC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Tn(n,t))return;o.uniform4uiv(this.addr,t),bn(n,t)}}function VC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let u;this.type===o.SAMPLER_2D_SHADOW?(Ny.compareFunction=sS,u=Ny):u=MS,n.setTexture2D(t||u,s)}function kC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||TS,s)}function XC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||bS,s)}function WC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||ES,s)}function qC(o){switch(o){case 5126:return RC;case 35664:return CC;case 35665:return wC;case 35666:return DC;case 35674:return UC;case 35675:return LC;case 35676:return NC;case 5124:case 35670:return OC;case 35667:case 35671:return PC;case 35668:case 35672:return zC;case 35669:case 35673:return BC;case 5125:return FC;case 36294:return IC;case 36295:return HC;case 36296:return GC;case 35678:case 36198:case 36298:case 36306:case 35682:return VC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return XC;case 36289:case 36303:case 36311:case 36292:return WC}}function YC(o,t){o.uniform1fv(this.addr,t)}function jC(o,t){const n=Vo(t,this.size,2);o.uniform2fv(this.addr,n)}function ZC(o,t){const n=Vo(t,this.size,3);o.uniform3fv(this.addr,n)}function KC(o,t){const n=Vo(t,this.size,4);o.uniform4fv(this.addr,n)}function QC(o,t){const n=Vo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function JC(o,t){const n=Vo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function $C(o,t){const n=Vo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function tw(o,t){o.uniform1iv(this.addr,t)}function ew(o,t){o.uniform2iv(this.addr,t)}function nw(o,t){o.uniform3iv(this.addr,t)}function iw(o,t){o.uniform4iv(this.addr,t)}function aw(o,t){o.uniform1uiv(this.addr,t)}function rw(o,t){o.uniform2uiv(this.addr,t)}function sw(o,t){o.uniform3uiv(this.addr,t)}function ow(o,t){o.uniform4uiv(this.addr,t)}function lw(o,t,n){const a=this.cache,s=t.length,u=_f(n,s);Tn(a,u)||(o.uniform1iv(this.addr,u),bn(a,u));for(let c=0;c!==s;++c)n.setTexture2D(t[c]||MS,u[c])}function uw(o,t,n){const a=this.cache,s=t.length,u=_f(n,s);Tn(a,u)||(o.uniform1iv(this.addr,u),bn(a,u));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||TS,u[c])}function cw(o,t,n){const a=this.cache,s=t.length,u=_f(n,s);Tn(a,u)||(o.uniform1iv(this.addr,u),bn(a,u));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||bS,u[c])}function fw(o,t,n){const a=this.cache,s=t.length,u=_f(n,s);Tn(a,u)||(o.uniform1iv(this.addr,u),bn(a,u));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||ES,u[c])}function hw(o){switch(o){case 5126:return YC;case 35664:return jC;case 35665:return ZC;case 35666:return KC;case 35674:return QC;case 35675:return JC;case 35676:return $C;case 5124:case 35670:return tw;case 35667:case 35671:return ew;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return aw;case 36294:return rw;case 36295:return sw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return fw}}class dw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=qC(n.type)}}class pw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hw(n.type)}}class mw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,c=s.length;u!==c;++u){const f=s[u];f.setValue(t,n[f.id],a)}}}const pp=/(\w+)(\])?(\[|\.)?/g;function Iy(o,t){o.seq.push(t),o.map[t.id]=t}function _w(o,t,n){const a=o.name,s=a.length;for(pp.lastIndex=0;;){const u=pp.exec(a),c=pp.lastIndex;let f=u[1];const p=u[2]==="]",d=u[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){Iy(n,d===void 0?new dw(f,o,t):new pw(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new mw(f),Iy(n,g)),n=g}}}class Jc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const u=t.getActiveUniform(n,s),c=t.getUniformLocation(n,u.name);_w(u,c,this)}}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,c=n.length;u!==c;++u){const f=n[u],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function Hy(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const gw=37297;let vw=0;function yw(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=s;c<u;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const Gy=new de;function xw(o){Ue._getMatrix(Gy,Ue.workingColorSpace,o);const t=`mat3( ${Gy.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(o)){case lf:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Vy(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+yw(o.getShaderSource(t),f)}else return u}function Sw(o,t){const n=xw(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Mw(o,t){let n;switch(t){case Cb:n="Linear";break;case wb:n="Reinhard";break;case Db:n="Cineon";break;case Ub:n="ACESFilmic";break;case Nb:n="AgX";break;case Ob:n="Neutral";break;case Lb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xc=new ut;function Ew(){Ue.getLuminanceCoefficients(Xc);const o=Xc.x.toFixed(4),t=Xc.y.toFixed(4),n=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kl).join(`
`)}function bw(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Aw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),c=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function kl(o){return o!==""}function ky(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xy(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vm(o){return o.replace(Rw,ww)}const Cw=new Map;function ww(o,t){let n=pe[t];if(n===void 0){const a=Cw.get(t);if(a!==void 0)n=pe[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return vm(n)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wy(o){return o.replace(Dw,Uw)}function Uw(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function qy(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Lw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Zx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ob?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Oa&&(t="SHADOWMAP_TYPE_VSM"),t}function Nw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bo:case Fo:t="ENVMAP_TYPE_CUBE";break;case pf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ow(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Fo:t="ENVMAP_MODE_REFRACTION";break}return t}function Pw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Kx:t="ENVMAP_BLENDING_MULTIPLY";break;case Ab:t="ENVMAP_BLENDING_MIX";break;case Rb:t="ENVMAP_BLENDING_ADD";break}return t}function zw(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Bw(o,t,n,a){const s=o.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=Lw(n),d=Nw(n),_=Ow(n),g=Pw(n),v=zw(n),x=Tw(n),T=bw(u),E=s.createProgram();let S,y,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(kl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(kl).join(`
`),y.length>0&&(y+=`
`)):(S=[qy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kl).join(`
`),y=[qy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?pe.tonemapping_pars_fragment:"",n.toneMapping!==Cr?Mw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Sw("linearToOutputTexel",n.outputColorSpace),Ew(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(kl).join(`
`)),c=vm(c),c=ky(c,n),c=Xy(c,n),f=vm(f),f=ky(f,n),f=Xy(f,n),c=Wy(c),f=Wy(f),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===oy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===oy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=N+S+c,R=N+y+f,O=Hy(s,s.VERTEX_SHADER,L),P=Hy(s,s.FRAGMENT_SHADER,R);s.attachShader(E,O),s.attachShader(E,P),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function U(H){if(o.debug.checkShaderErrors){const k=s.getProgramInfoLog(E)||"",J=s.getShaderInfoLog(O)||"",rt=s.getShaderInfoLog(P)||"",st=k.trim(),B=J.trim(),X=rt.trim();let q=!0,_t=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,O,P);else{const Mt=Vy(s,O,"vertex"),z=Vy(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+Mt+`
`+z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(B===""||X==="")&&(_t=!1);_t&&(H.diagnostics={runnable:q,programLog:st,vertexShader:{log:B,prefix:S},fragmentShader:{log:X,prefix:y}})}s.deleteShader(O),s.deleteShader(P),I=new Jc(s,E),b=Aw(s,E)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(E,gw)),w},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vw++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=P,this}let Fw=0;class Iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new Hw(t),n.set(t,a)),a}}class Hw{constructor(t){this.id=Fw++,this.code=t,this.usedTimes=0}}function Gw(o,t,n,a,s,u,c){const f=new uS,p=new Iw,d=new Set,_=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let x=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,w,H,k,J){const rt=k.fog,st=J.geometry,B=b.isMeshStandardMaterial?k.environment:null,X=(b.isMeshStandardMaterial?n:t).get(b.envMap||B),q=X&&X.mapping===pf?X.image.height:null,_t=T[b.type];b.precision!==null&&(x=s.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const Mt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,z=Mt!==void 0?Mt.length:0;let $=0;st.morphAttributes.position!==void 0&&($=1),st.morphAttributes.normal!==void 0&&($=2),st.morphAttributes.color!==void 0&&($=3);let xt,Et,Ct,it;if(_t){const Ae=ia[_t];xt=Ae.vertexShader,Et=Ae.fragmentShader}else xt=b.vertexShader,Et=b.fragmentShader,p.update(b),Ct=p.getVertexShaderID(b),it=p.getFragmentShaderID(b);const K=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),wt=J.isInstancedMesh===!0,Nt=J.isBatchedMesh===!0,ne=!!b.map,me=!!b.matcap,G=!!X,oe=!!b.aoMap,jt=!!b.lightMap,te=!!b.bumpMap,Vt=!!b.normalMap,Le=!!b.displacementMap,Bt=!!b.emissiveMap,ae=!!b.metalnessMap,an=!!b.roughnessMap,tn=b.anisotropy>0,F=b.clearcoat>0,A=b.dispersion>0,nt=b.iridescence>0,pt=b.sheen>0,Tt=b.transmission>0,ft=tn&&!!b.anisotropyMap,Kt=F&&!!b.clearcoatMap,Dt=F&&!!b.clearcoatNormalMap,Yt=F&&!!b.clearcoatRoughnessMap,Zt=nt&&!!b.iridescenceMap,At=nt&&!!b.iridescenceThicknessMap,Ut=pt&&!!b.sheenColorMap,Qt=pt&&!!b.sheenRoughnessMap,It=!!b.specularMap,Ot=!!b.specularColorMap,ce=!!b.specularIntensityMap,Y=Tt&&!!b.transmissionMap,Rt=Tt&&!!b.thicknessMap,Lt=!!b.gradientMap,Ht=!!b.alphaMap,bt=b.alphaTest>0,vt=!!b.alphaHash,Gt=!!b.extensions;let le=Cr;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(le=o.toneMapping);const ze={shaderID:_t,shaderType:b.type,shaderName:b.name,vertexShader:xt,fragmentShader:Et,defines:b.defines,customVertexShaderID:Ct,customFragmentShaderID:it,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Nt,batchingColor:Nt&&J._colorsTexture!==null,instancing:wt,instancingColor:wt&&J.instanceColor!==null,instancingMorph:wt&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:K===null?o.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Io,alphaToCoverage:!!b.alphaToCoverage,map:ne,matcap:me,envMap:G,envMapMode:G&&X.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:jt,bumpMap:te,normalMap:Vt,displacementMap:v&&Le,emissiveMap:Bt,normalMapObjectSpace:Vt&&b.normalMapType===Ib,normalMapTangentSpace:Vt&&b.normalMapType===Fb,metalnessMap:ae,roughnessMap:an,anisotropy:tn,anisotropyMap:ft,clearcoat:F,clearcoatMap:Kt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Yt,dispersion:A,iridescence:nt,iridescenceMap:Zt,iridescenceThicknessMap:At,sheen:pt,sheenColorMap:Ut,sheenRoughnessMap:Qt,specularMap:It,specularColorMap:Ot,specularIntensityMap:ce,transmission:Tt,transmissionMap:Y,thicknessMap:Rt,gradientMap:Lt,opaque:b.transparent===!1&&b.blending===Co&&b.alphaToCoverage===!1,alphaMap:Ht,alphaTest:bt,alphaHash:vt,combine:b.combine,mapUv:ne&&E(b.map.channel),aoMapUv:oe&&E(b.aoMap.channel),lightMapUv:jt&&E(b.lightMap.channel),bumpMapUv:te&&E(b.bumpMap.channel),normalMapUv:Vt&&E(b.normalMap.channel),displacementMapUv:Le&&E(b.displacementMap.channel),emissiveMapUv:Bt&&E(b.emissiveMap.channel),metalnessMapUv:ae&&E(b.metalnessMap.channel),roughnessMapUv:an&&E(b.roughnessMap.channel),anisotropyMapUv:ft&&E(b.anisotropyMap.channel),clearcoatMapUv:Kt&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:At&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&E(b.sheenRoughnessMap.channel),specularMapUv:It&&E(b.specularMap.channel),specularColorMapUv:Ot&&E(b.specularColorMap.channel),specularIntensityMapUv:ce&&E(b.specularIntensityMap.channel),transmissionMapUv:Y&&E(b.transmissionMap.channel),thicknessMapUv:Rt&&E(b.thicknessMap.channel),alphaMapUv:Ht&&E(b.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Vt||tn),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!st.attributes.uv&&(ne||Ht),fog:!!rt,useFog:b.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:St,skinning:J.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:$,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:ne&&b.map.isVideoTexture===!0&&Ue.getTransfer(b.map.colorSpace)===ke,decodeVideoTextureEmissive:Bt&&b.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(b.emissiveMap.colorSpace)===ke,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ba,flipSided:b.side===ri,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Gt&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&b.extensions.multiDraw===!0||Nt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ze.vertexUv1s=d.has(1),ze.vertexUv2s=d.has(2),ze.vertexUv3s=d.has(3),d.clear(),ze}function y(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)w.push(H),w.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(N(w,b),L(w,b),w.push(o.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function N(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function L(b,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),w.gradientMap&&f.enable(22),b.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),b.push(f.mask)}function R(b){const w=T[b.type];let H;if(w){const k=ia[w];H=m1.clone(k.uniforms)}else H=b.uniforms;return H}function O(b,w){let H;for(let k=0,J=_.length;k<J;k++){const rt=_[k];if(rt.cacheKey===w){H=rt,++H.usedTimes;break}}return H===void 0&&(H=new Bw(o,w,b,u),_.push(H)),H}function P(b){if(--b.usedTimes===0){const w=_.indexOf(b);_[w]=_[_.length-1],_.pop(),b.destroy()}}function U(b){p.remove(b)}function I(){p.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:R,acquireProgram:O,releaseProgram:P,releaseShaderCache:U,programs:_,dispose:I}}function Vw(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function u(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:u}}function kw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Yy(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function jy(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,x,T,E,S){let y=o[t];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:T,renderOrder:g.renderOrder,z:E,group:S},o[t]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=T,y.renderOrder=g.renderOrder,y.z=E,y.group=S),t++,y}function f(g,v,x,T,E,S){const y=c(g,v,x,T,E,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):n.push(y)}function p(g,v,x,T,E,S){const y=c(g,v,x,T,E,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):n.unshift(y)}function d(g,v){n.length>1&&n.sort(g||kw),a.length>1&&a.sort(v||Yy),s.length>1&&s.sort(v||Yy)}function _(){for(let g=t,v=o.length;g<v;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:f,unshift:p,finish:_,sort:d}}function Xw(){let o=new WeakMap;function t(a,s){const u=o.get(a);let c;return u===void 0?(c=new jy,o.set(a,[c])):s>=u.length?(c=new jy,u.push(c)):c=u[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function Ww(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Xe};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=n,n}}}function qw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let Yw=0;function jw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Zw(o){const t=new Ww,n=qw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ut);const s=new ut,u=new En,c=new En;function f(d){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let x=0,T=0,E=0,S=0,y=0,N=0,L=0,R=0,O=0,P=0,U=0;d.sort(jw);for(let b=0,w=d.length;b<w;b++){const H=d[b],k=H.color,J=H.intensity,rt=H.distance,st=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=k.r*J,g+=k.g*J,v+=k.b*J;else if(H.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(H.sh.coefficients[B],J);U++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,q=n.get(H);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,a.directionalShadow[x]=q,a.directionalShadowMap[x]=st,a.directionalShadowMatrix[x]=H.shadow.matrix,N++}a.directional[x]=B,x++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(k).multiplyScalar(J),B.distance=rt,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,a.spot[E]=B;const X=H.shadow;if(H.map&&(a.spotLightMap[O]=H.map,O++,X.updateMatrices(H),H.castShadow&&P++),a.spotLightMatrix[E]=X.matrix,H.castShadow){const q=n.get(H);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,a.spotShadow[E]=q,a.spotShadowMap[E]=st,R++}E++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(k).multiplyScalar(J),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),a.rectArea[S]=B,S++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const X=H.shadow,q=n.get(H);q.shadowIntensity=X.intensity,q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,a.pointShadow[T]=q,a.pointShadowMap[T]=st,a.pointShadowMatrix[T]=H.shadow.matrix,L++}a.point[T]=B,T++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(J),B.groundColor.copy(H.groundColor).multiplyScalar(J),a.hemi[y]=B,y++}}S>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=zt.LTC_FLOAT_1,a.rectAreaLTC2=zt.LTC_FLOAT_2):(a.rectAreaLTC1=zt.LTC_HALF_1,a.rectAreaLTC2=zt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const I=a.hash;(I.directionalLength!==x||I.pointLength!==T||I.spotLength!==E||I.rectAreaLength!==S||I.hemiLength!==y||I.numDirectionalShadows!==N||I.numPointShadows!==L||I.numSpotShadows!==R||I.numSpotMaps!==O||I.numLightProbes!==U)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=S,a.point.length=T,a.hemi.length=y,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=R+O-P,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=U,I.directionalLength=x,I.pointLength=T,I.spotLength=E,I.rectAreaLength=S,I.hemiLength=y,I.numDirectionalShadows=N,I.numPointShadows=L,I.numSpotShadows=R,I.numSpotMaps=O,I.numLightProbes=U,a.version=Yw++)}function p(d,_){let g=0,v=0,x=0,T=0,E=0;const S=_.matrixWorldInverse;for(let y=0,N=d.length;y<N;y++){const L=d[y];if(L.isDirectionalLight){const R=a.directional[g];R.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),g++}else if(L.isSpotLight){const R=a.spot[x];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const R=a.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),c.identity(),u.copy(L.matrixWorld),u.premultiply(S),c.extractRotation(u),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const R=a.hemi[E];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:f,setupView:p,state:a}}function Zy(o){const t=new Zw(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function u(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function Kw(o){let t=new WeakMap;function n(s,u=0){const c=t.get(s);let f;return c===void 0?(f=new Zy(o),t.set(s,[f])):u>=c.length?(f=new Zy(o),c.push(f)):f=c[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const Qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jw=`uniform sampler2D shadow_pass;
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
}`;function $w(o,t,n){let a=new gS;const s=new Ce,u=new Ce,c=new hn,f=new b1({depthPacking:Bb}),p=new A1,d={},_=n.maxTextureSize,g={[Ur]:ri,[ri]:Ur,[Ba]:Ba},v=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Qw,fragmentShader:Jw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const T=new Es;T.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new la(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zx;let y=this.type;this.render=function(P,U,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const b=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),k=o.state;k.setBlending(Rr),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const J=y!==Oa&&this.type===Oa,rt=y===Oa&&this.type!==Oa;for(let st=0,B=P.length;st<B;st++){const X=P[st],q=X.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const _t=q.getFrameExtents();if(s.multiply(_t),u.copy(q.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/_t.x),s.x=u.x*_t.x,q.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/_t.y),s.y=u.y*_t.y,q.mapSize.y=u.y)),q.map===null||J===!0||rt===!0){const z=this.type!==Oa?{minFilter:Zi,magFilter:Zi}:{};q.map!==null&&q.map.dispose(),q.map=new Ss(s.x,s.y,z),q.map.texture.name=X.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Mt=q.getViewportCount();for(let z=0;z<Mt;z++){const $=q.getViewport(z);c.set(u.x*$.x,u.y*$.y,u.x*$.z,u.y*$.w),k.viewport(c),q.updateMatrices(X,z),a=q.getFrustum(),R(U,I,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===Oa&&N(q,I),q.needsUpdate=!1}y=this.type,S.needsUpdate=!1,o.setRenderTarget(b,w,H)};function N(P,U){const I=t.update(E);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ss(s.x,s.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(U,null,I,v,E,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(U,null,I,x,E,null)}function L(P,U,I,b){let w=null;const H=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)w=H;else if(w=I.isPointLight===!0?p:f,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=w.uuid,J=U.uuid;let rt=d[k];rt===void 0&&(rt={},d[k]=rt);let st=rt[J];st===void 0&&(st=w.clone(),rt[J]=st,U.addEventListener("dispose",O)),w=st}if(w.visible=U.visible,w.wireframe=U.wireframe,b===Oa?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:g[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const k=o.properties.get(w);k.light=I}return w}function R(P,U,I,b,w){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&w===Oa)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const J=t.update(P),rt=P.material;if(Array.isArray(rt)){const st=J.groups;for(let B=0,X=st.length;B<X;B++){const q=st[B],_t=rt[q.materialIndex];if(_t&&_t.visible){const Mt=L(P,_t,b,w);P.onBeforeShadow(o,P,U,I,J,Mt,q),o.renderBufferDirect(I,null,J,Mt,P,q),P.onAfterShadow(o,P,U,I,J,Mt,q)}}}else if(rt.visible){const st=L(P,rt,b,w);P.onBeforeShadow(o,P,U,I,J,st,null),o.renderBufferDirect(I,null,J,st,P,null),P.onAfterShadow(o,P,U,I,J,st,null)}}const k=P.children;for(let J=0,rt=k.length;J<rt;J++)R(k[J],U,I,b,w)}function O(P){P.target.removeEventListener("dispose",O);for(const I in d){const b=d[I],w=P.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const t2={[Lp]:Np,[Op]:Bp,[Pp]:Fp,[zo]:zp,[Np]:Lp,[Bp]:Op,[Fp]:Pp,[zp]:zo};function e2(o,t){function n(){let Y=!1;const Rt=new hn;let Lt=null;const Ht=new hn(0,0,0,0);return{setMask:function(bt){Lt!==bt&&!Y&&(o.colorMask(bt,bt,bt,bt),Lt=bt)},setLocked:function(bt){Y=bt},setClear:function(bt,vt,Gt,le,ze){ze===!0&&(bt*=le,vt*=le,Gt*=le),Rt.set(bt,vt,Gt,le),Ht.equals(Rt)===!1&&(o.clearColor(bt,vt,Gt,le),Ht.copy(Rt))},reset:function(){Y=!1,Lt=null,Ht.set(-1,0,0,0)}}}function a(){let Y=!1,Rt=!1,Lt=null,Ht=null,bt=null;return{setReversed:function(vt){if(Rt!==vt){const Gt=t.get("EXT_clip_control");vt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Rt=vt;const le=bt;bt=null,this.setClear(le)}},getReversed:function(){return Rt},setTest:function(vt){vt?K(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(vt){Lt!==vt&&!Y&&(o.depthMask(vt),Lt=vt)},setFunc:function(vt){if(Rt&&(vt=t2[vt]),Ht!==vt){switch(vt){case Lp:o.depthFunc(o.NEVER);break;case Np:o.depthFunc(o.ALWAYS);break;case Op:o.depthFunc(o.LESS);break;case zo:o.depthFunc(o.LEQUAL);break;case Pp:o.depthFunc(o.EQUAL);break;case zp:o.depthFunc(o.GEQUAL);break;case Bp:o.depthFunc(o.GREATER);break;case Fp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=vt}},setLocked:function(vt){Y=vt},setClear:function(vt){bt!==vt&&(Rt&&(vt=1-vt),o.clearDepth(vt),bt=vt)},reset:function(){Y=!1,Lt=null,Ht=null,bt=null,Rt=!1}}}function s(){let Y=!1,Rt=null,Lt=null,Ht=null,bt=null,vt=null,Gt=null,le=null,ze=null;return{setTest:function(Ae){Y||(Ae?K(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(Ae){Rt!==Ae&&!Y&&(o.stencilMask(Ae),Rt=Ae)},setFunc:function(Ae,kn,Ai){(Lt!==Ae||Ht!==kn||bt!==Ai)&&(o.stencilFunc(Ae,kn,Ai),Lt=Ae,Ht=kn,bt=Ai)},setOp:function(Ae,kn,Ai){(vt!==Ae||Gt!==kn||le!==Ai)&&(o.stencilOp(Ae,kn,Ai),vt=Ae,Gt=kn,le=Ai)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){ze!==Ae&&(o.clearStencil(Ae),ze=Ae)},reset:function(){Y=!1,Rt=null,Lt=null,Ht=null,bt=null,vt=null,Gt=null,le=null,ze=null}}}const u=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,x=[],T=null,E=!1,S=null,y=null,N=null,L=null,R=null,O=null,P=null,U=new Xe(0,0,0),I=0,b=!1,w=null,H=null,k=null,J=null,rt=null;const st=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=X>=2);let _t=null,Mt={};const z=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),xt=new hn().fromArray(z),Et=new hn().fromArray($);function Ct(Y,Rt,Lt,Ht){const bt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(Y,vt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Lt;Gt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Rt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return vt}const it={};it[o.TEXTURE_2D]=Ct(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),K(o.DEPTH_TEST),c.setFunc(zo),te(!1),Vt(ey),K(o.CULL_FACE),oe(Rr);function K(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function St(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function wt(Y,Rt){return g[Y]!==Rt?(o.bindFramebuffer(Y,Rt),g[Y]=Rt,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Rt),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Nt(Y,Rt){let Lt=x,Ht=!1;if(Y){Lt=v.get(Rt),Lt===void 0&&(Lt=[],v.set(Rt,Lt));const bt=Y.textures;if(Lt.length!==bt.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Gt=bt.length;vt<Gt;vt++)Lt[vt]=o.COLOR_ATTACHMENT0+vt;Lt.length=bt.length,Ht=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(Lt)}function ne(Y){return T!==Y?(o.useProgram(Y),T=Y,!0):!1}const me={[us]:o.FUNC_ADD,[ub]:o.FUNC_SUBTRACT,[cb]:o.FUNC_REVERSE_SUBTRACT};me[fb]=o.MIN,me[hb]=o.MAX;const G={[db]:o.ZERO,[pb]:o.ONE,[mb]:o.SRC_COLOR,[Dp]:o.SRC_ALPHA,[Sb]:o.SRC_ALPHA_SATURATE,[yb]:o.DST_COLOR,[gb]:o.DST_ALPHA,[_b]:o.ONE_MINUS_SRC_COLOR,[Up]:o.ONE_MINUS_SRC_ALPHA,[xb]:o.ONE_MINUS_DST_COLOR,[vb]:o.ONE_MINUS_DST_ALPHA,[Mb]:o.CONSTANT_COLOR,[Eb]:o.ONE_MINUS_CONSTANT_COLOR,[Tb]:o.CONSTANT_ALPHA,[bb]:o.ONE_MINUS_CONSTANT_ALPHA};function oe(Y,Rt,Lt,Ht,bt,vt,Gt,le,ze,Ae){if(Y===Rr){E===!0&&(St(o.BLEND),E=!1);return}if(E===!1&&(K(o.BLEND),E=!0),Y!==lb){if(Y!==S||Ae!==b){if((y!==us||R!==us)&&(o.blendEquation(o.FUNC_ADD),y=us,R=us),Ae)switch(Y){case Co:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ny:o.blendFunc(o.ONE,o.ONE);break;case iy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ay:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Co:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ny:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case iy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ay:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}N=null,L=null,O=null,P=null,U.set(0,0,0),I=0,S=Y,b=Ae}return}bt=bt||Rt,vt=vt||Lt,Gt=Gt||Ht,(Rt!==y||bt!==R)&&(o.blendEquationSeparate(me[Rt],me[bt]),y=Rt,R=bt),(Lt!==N||Ht!==L||vt!==O||Gt!==P)&&(o.blendFuncSeparate(G[Lt],G[Ht],G[vt],G[Gt]),N=Lt,L=Ht,O=vt,P=Gt),(le.equals(U)===!1||ze!==I)&&(o.blendColor(le.r,le.g,le.b,ze),U.copy(le),I=ze),S=Y,b=!1}function jt(Y,Rt){Y.side===Ba?St(o.CULL_FACE):K(o.CULL_FACE);let Lt=Y.side===ri;Rt&&(Lt=!Lt),te(Lt),Y.blending===Co&&Y.transparent===!1?oe(Rr):oe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Ht=Y.stencilWrite;f.setTest(Ht),Ht&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Bt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?K(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function te(Y){w!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),w=Y)}function Vt(Y){Y!==rb?(K(o.CULL_FACE),Y!==H&&(Y===ey?o.cullFace(o.BACK):Y===sb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),H=Y}function Le(Y){Y!==k&&(B&&o.lineWidth(Y),k=Y)}function Bt(Y,Rt,Lt){Y?(K(o.POLYGON_OFFSET_FILL),(J!==Rt||rt!==Lt)&&(o.polygonOffset(Rt,Lt),J=Rt,rt=Lt)):St(o.POLYGON_OFFSET_FILL)}function ae(Y){Y?K(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function an(Y){Y===void 0&&(Y=o.TEXTURE0+st-1),_t!==Y&&(o.activeTexture(Y),_t=Y)}function tn(Y,Rt,Lt){Lt===void 0&&(_t===null?Lt=o.TEXTURE0+st-1:Lt=_t);let Ht=Mt[Lt];Ht===void 0&&(Ht={type:void 0,texture:void 0},Mt[Lt]=Ht),(Ht.type!==Y||Ht.texture!==Rt)&&(_t!==Lt&&(o.activeTexture(Lt),_t=Lt),o.bindTexture(Y,Rt||it[Y]),Ht.type=Y,Ht.texture=Rt)}function F(){const Y=Mt[_t];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{o.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{o.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{o.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{o.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(){try{o.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{o.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ut(Y){xt.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),xt.copy(Y))}function Qt(Y){Et.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),Et.copy(Y))}function It(Y,Rt){let Lt=d.get(Rt);Lt===void 0&&(Lt=new WeakMap,d.set(Rt,Lt));let Ht=Lt.get(Y);Ht===void 0&&(Ht=o.getUniformBlockIndex(Rt,Y.name),Lt.set(Y,Ht))}function Ot(Y,Rt){const Ht=d.get(Rt).get(Y);p.get(Rt)!==Ht&&(o.uniformBlockBinding(Rt,Ht,Y.__bindingPointIndex),p.set(Rt,Ht))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_t=null,Mt={},g={},v=new WeakMap,x=[],T=null,E=!1,S=null,y=null,N=null,L=null,R=null,O=null,P=null,U=new Xe(0,0,0),I=0,b=!1,w=null,H=null,k=null,J=null,rt=null,xt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:K,disable:St,bindFramebuffer:wt,drawBuffers:Nt,useProgram:ne,setBlending:oe,setMaterial:jt,setFlipSided:te,setCullFace:Vt,setLineWidth:Le,setPolygonOffset:Bt,setScissorTest:ae,activeTexture:an,bindTexture:tn,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:nt,texImage2D:Zt,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Ot,texStorage2D:Dt,texStorage3D:Yt,texSubImage2D:pt,texSubImage3D:Tt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Kt,scissor:Ut,viewport:Qt,reset:ce}}function n2(o,t,n,a,s,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ce,_=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(F,A){return x?new OffscreenCanvas(F,A):cf("canvas")}function E(F,A,nt){let pt=1;const Tt=tn(F);if((Tt.width>nt||Tt.height>nt)&&(pt=nt/Math.max(Tt.width,Tt.height)),pt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ft=Math.floor(pt*Tt.width),Kt=Math.floor(pt*Tt.height);g===void 0&&(g=T(ft,Kt));const Dt=A?T(ft,Kt):g;return Dt.width=ft,Dt.height=Kt,Dt.getContext("2d").drawImage(F,0,0,ft,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ft+"x"+Kt+")."),Dt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),F;return F}function S(F){return F.generateMipmaps}function y(F){o.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(F,A,nt,pt,Tt=!1){if(F!==null){if(o[F]!==void 0)return o[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ft=A;if(A===o.RED&&(nt===o.FLOAT&&(ft=o.R32F),nt===o.HALF_FLOAT&&(ft=o.R16F),nt===o.UNSIGNED_BYTE&&(ft=o.R8)),A===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.R8UI),nt===o.UNSIGNED_SHORT&&(ft=o.R16UI),nt===o.UNSIGNED_INT&&(ft=o.R32UI),nt===o.BYTE&&(ft=o.R8I),nt===o.SHORT&&(ft=o.R16I),nt===o.INT&&(ft=o.R32I)),A===o.RG&&(nt===o.FLOAT&&(ft=o.RG32F),nt===o.HALF_FLOAT&&(ft=o.RG16F),nt===o.UNSIGNED_BYTE&&(ft=o.RG8)),A===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),nt===o.UNSIGNED_INT&&(ft=o.RG32UI),nt===o.BYTE&&(ft=o.RG8I),nt===o.SHORT&&(ft=o.RG16I),nt===o.INT&&(ft=o.RG32I)),A===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),nt===o.UNSIGNED_INT&&(ft=o.RGB32UI),nt===o.BYTE&&(ft=o.RGB8I),nt===o.SHORT&&(ft=o.RGB16I),nt===o.INT&&(ft=o.RGB32I)),A===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),nt===o.BYTE&&(ft=o.RGBA8I),nt===o.SHORT&&(ft=o.RGBA16I),nt===o.INT&&(ft=o.RGBA32I)),A===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),A===o.RGBA){const Kt=Tt?lf:Ue.getTransfer(pt);nt===o.FLOAT&&(ft=o.RGBA32F),nt===o.HALF_FLOAT&&(ft=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ft=Kt===ke?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function R(F,A){let nt;return F?A===null||A===xs||A===eu?nt=o.DEPTH24_STENCIL8:A===Fa?nt=o.DEPTH32F_STENCIL8:A===tu&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xs||A===eu?nt=o.DEPTH_COMPONENT24:A===Fa?nt=o.DEPTH_COMPONENT32F:A===tu&&(nt=o.DEPTH_COMPONENT16),nt}function O(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Zi&&F.minFilter!==sa?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function P(F){const A=F.target;A.removeEventListener("dispose",P),I(A),A.isVideoTexture&&_.delete(A)}function U(F){const A=F.target;A.removeEventListener("dispose",U),w(A)}function I(F){const A=a.get(F);if(A.__webglInit===void 0)return;const nt=F.source,pt=v.get(nt);if(pt){const Tt=pt[A.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&b(F),Object.keys(pt).length===0&&v.delete(nt)}a.remove(F)}function b(F){const A=a.get(F);o.deleteTexture(A.__webglTexture);const nt=F.source,pt=v.get(nt);delete pt[A.__cacheKey],c.memory.textures--}function w(F){const A=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let Tt=0;Tt<A.__webglFramebuffer[pt].length;Tt++)o.deleteFramebuffer(A.__webglFramebuffer[pt][Tt]);else o.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)o.deleteFramebuffer(A.__webglFramebuffer[pt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const nt=F.textures;for(let pt=0,Tt=nt.length;pt<Tt;pt++){const ft=a.get(nt[pt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),c.memory.textures--),a.remove(nt[pt])}a.remove(F)}let H=0;function k(){H=0}function J(){const F=H;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),H+=1,F}function rt(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function st(F,A){const nt=a.get(F);if(F.isVideoTexture&&ae(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&nt.__version!==F.version){const pt=F.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(nt,F,A);return}}else F.isExternalTexture&&(nt.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+A)}function B(F,A){const nt=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&nt.__version!==F.version){it(nt,F,A);return}n.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+A)}function X(F,A){const nt=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&nt.__version!==F.version){it(nt,F,A);return}n.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+A)}function q(F,A){const nt=a.get(F);if(F.version>0&&nt.__version!==F.version){K(nt,F,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+A)}const _t={[Gp]:o.REPEAT,[hs]:o.CLAMP_TO_EDGE,[Vp]:o.MIRRORED_REPEAT},Mt={[Zi]:o.NEAREST,[Pb]:o.NEAREST_MIPMAP_NEAREST,[Ec]:o.NEAREST_MIPMAP_LINEAR,[sa]:o.LINEAR,[Fd]:o.LINEAR_MIPMAP_NEAREST,[ds]:o.LINEAR_MIPMAP_LINEAR},z={[Hb]:o.NEVER,[qb]:o.ALWAYS,[Gb]:o.LESS,[sS]:o.LEQUAL,[Vb]:o.EQUAL,[Wb]:o.GEQUAL,[kb]:o.GREATER,[Xb]:o.NOTEQUAL};function $(F,A){if(A.type===Fa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===sa||A.magFilter===Fd||A.magFilter===Ec||A.magFilter===ds||A.minFilter===sa||A.minFilter===Fd||A.minFilter===Ec||A.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,_t[A.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,_t[A.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,_t[A.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,Mt[A.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,Mt[A.minFilter]),A.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Zi||A.minFilter!==Ec&&A.minFilter!==ds||A.type===Fa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(F,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function xt(F,A){let nt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",P));const pt=A.source;let Tt=v.get(pt);Tt===void 0&&(Tt={},v.set(pt,Tt));const ft=rt(A);if(ft!==F.__cacheKey){Tt[ft]===void 0&&(Tt[ft]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),Tt[ft].usedTimes++;const Kt=Tt[F.__cacheKey];Kt!==void 0&&(Tt[F.__cacheKey].usedTimes--,Kt.usedTimes===0&&b(A)),F.__cacheKey=ft,F.__webglTexture=Tt[ft].texture}return nt}function Et(F,A,nt){return Math.floor(Math.floor(F/nt)/A)}function Ct(F,A,nt,pt){const ft=F.updateRanges;if(ft.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,nt,pt,A.data);else{ft.sort((At,Ut)=>At.start-Ut.start);let Kt=0;for(let At=1;At<ft.length;At++){const Ut=ft[Kt],Qt=ft[At],It=Ut.start+Ut.count,Ot=Et(Qt.start,A.width,4),ce=Et(Ut.start,A.width,4);Qt.start<=It+1&&Ot===ce&&Et(Qt.start+Qt.count-1,A.width,4)===Ot?Ut.count=Math.max(Ut.count,Qt.start+Qt.count-Ut.start):(++Kt,ft[Kt]=Qt)}ft.length=Kt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let At=0,Ut=ft.length;At<Ut;At++){const Qt=ft[At],It=Math.floor(Qt.start/4),Ot=Math.ceil(Qt.count/4),ce=It%A.width,Y=Math.floor(It/A.width),Rt=Ot,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(o.TEXTURE_2D,0,ce,Y,Rt,Lt,nt,pt,A.data)}F.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function it(F,A,nt){let pt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=o.TEXTURE_3D);const Tt=xt(F,A),ft=A.source;n.bindTexture(pt,F.__webglTexture,o.TEXTURE0+nt);const Kt=a.get(ft);if(ft.version!==Kt.__version||Tt===!0){n.activeTexture(o.TEXTURE0+nt);const Dt=Ue.getPrimaries(Ue.workingColorSpace),Yt=A.colorSpace===Sr?null:Ue.getPrimaries(A.colorSpace),Zt=A.colorSpace===Sr||Dt===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let At=E(A.image,!1,s.maxTextureSize);At=an(A,At);const Ut=u.convert(A.format,A.colorSpace),Qt=u.convert(A.type);let It=L(A.internalFormat,Ut,Qt,A.colorSpace,A.isVideoTexture);$(pt,A);let Ot;const ce=A.mipmaps,Y=A.isVideoTexture!==!0,Rt=Kt.__version===void 0||Tt===!0,Lt=ft.dataReady,Ht=O(A,At);if(A.isDepthTexture)It=R(A.format===iu,A.type),Rt&&(Y?n.texStorage2D(o.TEXTURE_2D,1,It,At.width,At.height):n.texImage2D(o.TEXTURE_2D,0,It,At.width,At.height,0,Ut,Qt,null));else if(A.isDataTexture)if(ce.length>0){Y&&Rt&&n.texStorage2D(o.TEXTURE_2D,Ht,It,ce[0].width,ce[0].height);for(let bt=0,vt=ce.length;bt<vt;bt++)Ot=ce[bt],Y?Lt&&n.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Ut,Qt,Ot.data):n.texImage2D(o.TEXTURE_2D,bt,It,Ot.width,Ot.height,0,Ut,Qt,Ot.data);A.generateMipmaps=!1}else Y?(Rt&&n.texStorage2D(o.TEXTURE_2D,Ht,It,At.width,At.height),Lt&&Ct(A,At,Ut,Qt)):n.texImage2D(o.TEXTURE_2D,0,It,At.width,At.height,0,Ut,Qt,At.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Y&&Rt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,It,ce[0].width,ce[0].height,At.depth);for(let bt=0,vt=ce.length;bt<vt;bt++)if(Ot=ce[bt],A.format!==ji)if(Ut!==null)if(Y){if(Lt)if(A.layerUpdates.size>0){const Gt=by(Ot.width,Ot.height,A.format,A.type);for(const le of A.layerUpdates){const ze=Ot.data.subarray(le*Gt/Ot.data.BYTES_PER_ELEMENT,(le+1)*Gt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,le,Ot.width,Ot.height,1,Ut,ze)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,At.depth,Ut,Ot.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,It,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Lt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,At.depth,Ut,Qt,Ot.data):n.texImage3D(o.TEXTURE_2D_ARRAY,bt,It,Ot.width,Ot.height,At.depth,0,Ut,Qt,Ot.data)}else{Y&&Rt&&n.texStorage2D(o.TEXTURE_2D,Ht,It,ce[0].width,ce[0].height);for(let bt=0,vt=ce.length;bt<vt;bt++)Ot=ce[bt],A.format!==ji?Ut!==null?Y?Lt&&n.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Ut,Ot.data):n.compressedTexImage2D(o.TEXTURE_2D,bt,It,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Lt&&n.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Ut,Qt,Ot.data):n.texImage2D(o.TEXTURE_2D,bt,It,Ot.width,Ot.height,0,Ut,Qt,Ot.data)}else if(A.isDataArrayTexture)if(Y){if(Rt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,It,At.width,At.height,At.depth),Lt)if(A.layerUpdates.size>0){const bt=by(At.width,At.height,A.format,A.type);for(const vt of A.layerUpdates){const Gt=At.data.subarray(vt*bt/At.data.BYTES_PER_ELEMENT,(vt+1)*bt/At.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Ut,Qt,Gt)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ut,Qt,At.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,It,At.width,At.height,At.depth,0,Ut,Qt,At.data);else if(A.isData3DTexture)Y?(Rt&&n.texStorage3D(o.TEXTURE_3D,Ht,It,At.width,At.height,At.depth),Lt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ut,Qt,At.data)):n.texImage3D(o.TEXTURE_3D,0,It,At.width,At.height,At.depth,0,Ut,Qt,At.data);else if(A.isFramebufferTexture){if(Rt)if(Y)n.texStorage2D(o.TEXTURE_2D,Ht,It,At.width,At.height);else{let bt=At.width,vt=At.height;for(let Gt=0;Gt<Ht;Gt++)n.texImage2D(o.TEXTURE_2D,Gt,It,bt,vt,0,Ut,Qt,null),bt>>=1,vt>>=1}}else if(ce.length>0){if(Y&&Rt){const bt=tn(ce[0]);n.texStorage2D(o.TEXTURE_2D,Ht,It,bt.width,bt.height)}for(let bt=0,vt=ce.length;bt<vt;bt++)Ot=ce[bt],Y?Lt&&n.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ut,Qt,Ot):n.texImage2D(o.TEXTURE_2D,bt,It,Ut,Qt,Ot);A.generateMipmaps=!1}else if(Y){if(Rt){const bt=tn(At);n.texStorage2D(o.TEXTURE_2D,Ht,It,bt.width,bt.height)}Lt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Qt,At)}else n.texImage2D(o.TEXTURE_2D,0,It,Ut,Qt,At);S(A)&&y(pt),Kt.__version=ft.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function K(F,A,nt){if(A.image.length!==6)return;const pt=xt(F,A),Tt=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+nt);const ft=a.get(Tt);if(Tt.version!==ft.__version||pt===!0){n.activeTexture(o.TEXTURE0+nt);const Kt=Ue.getPrimaries(Ue.workingColorSpace),Dt=A.colorSpace===Sr?null:Ue.getPrimaries(A.colorSpace),Yt=A.colorSpace===Sr||Kt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Zt=A.isCompressedTexture||A.image[0].isCompressedTexture,At=A.image[0]&&A.image[0].isDataTexture,Ut=[];for(let vt=0;vt<6;vt++)!Zt&&!At?Ut[vt]=E(A.image[vt],!0,s.maxCubemapSize):Ut[vt]=At?A.image[vt].image:A.image[vt],Ut[vt]=an(A,Ut[vt]);const Qt=Ut[0],It=u.convert(A.format,A.colorSpace),Ot=u.convert(A.type),ce=L(A.internalFormat,It,Ot,A.colorSpace),Y=A.isVideoTexture!==!0,Rt=ft.__version===void 0||pt===!0,Lt=Tt.dataReady;let Ht=O(A,Qt);$(o.TEXTURE_CUBE_MAP,A);let bt;if(Zt){Y&&Rt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ce,Qt.width,Qt.height);for(let vt=0;vt<6;vt++){bt=Ut[vt].mipmaps;for(let Gt=0;Gt<bt.length;Gt++){const le=bt[Gt];A.format!==ji?It!==null?Y?Lt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,le.width,le.height,It,le.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,ce,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Lt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,0,0,le.width,le.height,It,Ot,le.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt,ce,le.width,le.height,0,It,Ot,le.data)}}}else{if(bt=A.mipmaps,Y&&Rt){bt.length>0&&Ht++;const vt=tn(Ut[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ce,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){Y?Lt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ut[vt].width,Ut[vt].height,It,Ot,Ut[vt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,Ut[vt].width,Ut[vt].height,0,It,Ot,Ut[vt].data);for(let Gt=0;Gt<bt.length;Gt++){const ze=bt[Gt].image[vt].image;Y?Lt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,ze.width,ze.height,It,Ot,ze.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,ce,ze.width,ze.height,0,It,Ot,ze.data)}}else{Y?Lt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It,Ot,Ut[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ce,It,Ot,Ut[vt]);for(let Gt=0;Gt<bt.length;Gt++){const le=bt[Gt];Y?Lt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,0,0,It,Ot,le.image[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Gt+1,ce,It,Ot,le.image[vt])}}}S(A)&&y(o.TEXTURE_CUBE_MAP),ft.__version=Tt.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function St(F,A,nt,pt,Tt,ft){const Kt=u.convert(nt.format,nt.colorSpace),Dt=u.convert(nt.type),Yt=L(nt.internalFormat,Kt,Dt,nt.colorSpace),Zt=a.get(A),At=a.get(nt);if(At.__renderTarget=A,!Zt.__hasExternalTextures){const Ut=Math.max(1,A.width>>ft),Qt=Math.max(1,A.height>>ft);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?n.texImage3D(Tt,ft,Yt,Ut,Qt,A.depth,0,Kt,Dt,null):n.texImage2D(Tt,ft,Yt,Ut,Qt,0,Kt,Dt,null)}n.bindFramebuffer(o.FRAMEBUFFER,F),Bt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Tt,At.__webglTexture,0,Le(A)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Tt,At.__webglTexture,ft),n.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(F,A,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,F),A.depthBuffer){const pt=A.depthTexture,Tt=pt&&pt.isDepthTexture?pt.type:null,ft=R(A.stencilBuffer,Tt),Kt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=Le(A);Bt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ft,A.width,A.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ft,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ft,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,F)}else{const pt=A.textures;for(let Tt=0;Tt<pt.length;Tt++){const ft=pt[Tt],Kt=u.convert(ft.format,ft.colorSpace),Dt=u.convert(ft.type),Yt=L(ft.internalFormat,Kt,Dt,ft.colorSpace),Zt=Le(A);nt&&Bt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Yt,A.width,A.height):Bt(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Yt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=a.get(A.depthTexture);pt.__renderTarget=A,(!pt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),st(A.depthTexture,0);const Tt=pt.__webglTexture,ft=Le(A);if(A.depthTexture.format===nu)Bt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0);else if(A.depthTexture.format===iu)Bt(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function ne(F){const A=a.get(F),nt=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const pt=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const Tt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",Tt)};pt.addEventListener("dispose",Tt),A.__depthDisposeCallback=Tt}A.__boundDepthTexture=pt}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=F.texture.mipmaps;pt&&pt.length>0?Nt(A.__webglFramebuffer[0],F):Nt(A.__webglFramebuffer,F)}else if(nt){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=o.createRenderbuffer(),wt(A.__webglDepthbuffer[pt],F,!1);else{const Tt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ft)}}else{const pt=F.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),wt(A.__webglDepthbuffer,F,!1);else{const Tt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ft)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function me(F,A,nt){const pt=a.get(F);A!==void 0&&St(pt.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&ne(F)}function G(F){const A=F.texture,nt=a.get(F),pt=a.get(A);F.addEventListener("dispose",U);const Tt=F.textures,ft=F.isWebGLCubeRenderTarget===!0,Kt=Tt.length>1;if(Kt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=A.version,c.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Yt=0;Yt<A.mipmaps.length;Yt++)nt.__webglFramebuffer[Dt][Yt]=o.createFramebuffer()}else nt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let Dt=0,Yt=Tt.length;Dt<Yt;Dt++){const Zt=a.get(Tt[Dt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),c.memory.textures++)}if(F.samples>0&&Bt(F)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Tt.length;Dt++){const Yt=Tt[Dt];nt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const Zt=u.convert(Yt.format,Yt.colorSpace),At=u.convert(Yt.type),Ut=L(Yt.internalFormat,Zt,At,Yt.colorSpace,F.isXRRenderTarget===!0),Qt=Le(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Ut,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),wt(nt.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){n.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),$(o.TEXTURE_CUBE_MAP,A);for(let Dt=0;Dt<6;Dt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Yt=0;Yt<A.mipmaps.length;Yt++)St(nt.__webglFramebuffer[Dt][Yt],F,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Yt);else St(nt.__webglFramebuffer[Dt],F,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);S(A)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Dt=0,Yt=Tt.length;Dt<Yt;Dt++){const Zt=Tt[Dt],At=a.get(Zt);let Ut=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ut=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,At.__webglTexture),$(Ut,Zt),St(nt.__webglFramebuffer,F,Zt,o.COLOR_ATTACHMENT0+Dt,Ut,0),S(Zt)&&y(Ut)}n.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Dt=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Dt,pt.__webglTexture),$(Dt,A),A.mipmaps&&A.mipmaps.length>0)for(let Yt=0;Yt<A.mipmaps.length;Yt++)St(nt.__webglFramebuffer[Yt],F,A,o.COLOR_ATTACHMENT0,Dt,Yt);else St(nt.__webglFramebuffer,F,A,o.COLOR_ATTACHMENT0,Dt,0);S(A)&&y(Dt),n.unbindTexture()}F.depthBuffer&&ne(F)}function oe(F){const A=F.textures;for(let nt=0,pt=A.length;nt<pt;nt++){const Tt=A[nt];if(S(Tt)){const ft=N(F),Kt=a.get(Tt).__webglTexture;n.bindTexture(ft,Kt),y(ft),n.unbindTexture()}}}const jt=[],te=[];function Vt(F){if(F.samples>0){if(Bt(F)===!1){const A=F.textures,nt=F.width,pt=F.height;let Tt=o.COLOR_BUFFER_BIT;const ft=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=a.get(F),Dt=A.length>1;if(Dt)for(let Zt=0;Zt<A.length;Zt++)n.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Yt=F.texture.mipmaps;Yt&&Yt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Zt=0;Zt<A.length;Zt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const At=a.get(A[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,nt,pt,0,0,nt,pt,Tt,o.NEAREST),p===!0&&(jt.length=0,te.length=0,jt.push(o.COLOR_ATTACHMENT0+Zt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(jt.push(ft),te.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,te)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Zt=0;Zt<A.length;Zt++){n.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Zt]);const At=a.get(A[Zt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,At,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Le(F){return Math.min(s.maxSamples,F.samples)}function Bt(F){const A=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ae(F){const A=c.render.frame;_.get(F)!==A&&(_.set(F,A),F.update())}function an(F,A){const nt=F.colorSpace,pt=F.format,Tt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||nt!==Io&&nt!==Sr&&(Ue.getTransfer(nt)===ke?(pt!==ji||Tt!==Va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),A}function tn(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=q,this.rebindTextures=me,this.setupRenderTarget=G,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Bt}function i2(o,t){function n(a,s=Sr){let u;const c=Ue.getTransfer(s);if(a===Va)return o.UNSIGNED_BYTE;if(a===Hm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Gm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===tS)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===eS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Jx)return o.BYTE;if(a===$x)return o.SHORT;if(a===tu)return o.UNSIGNED_SHORT;if(a===Im)return o.INT;if(a===xs)return o.UNSIGNED_INT;if(a===Fa)return o.FLOAT;if(a===su)return o.HALF_FLOAT;if(a===nS)return o.ALPHA;if(a===iS)return o.RGB;if(a===ji)return o.RGBA;if(a===nu)return o.DEPTH_COMPONENT;if(a===iu)return o.DEPTH_STENCIL;if(a===aS)return o.RED;if(a===Vm)return o.RED_INTEGER;if(a===rS)return o.RG;if(a===km)return o.RG_INTEGER;if(a===Xm)return o.RGBA_INTEGER;if(a===jc||a===Zc||a===Kc||a===Qc)if(c===ke)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===jc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===jc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Kc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Qc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===kp||a===Xp||a===Wp||a===qp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===kp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Xp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Wp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===qp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yp||a===jp||a===Zp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Yp||a===jp)return c===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Zp)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Kp||a===Qp||a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am||a===rm||a===sm||a===om||a===lm||a===um)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Kp)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Qp)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Jp)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===$p)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===tm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===em)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===nm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===im)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===am)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===rm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===sm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===om)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lm)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===um)return c===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===cm||a===fm||a===hm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===cm)return c===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===fm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===hm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===dm||a===pm||a===mm||a===_m)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===dm)return u.COMPRESSED_RED_RGTC1_EXT;if(a===pm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_m)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===eu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
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

}`;class s2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new yS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Xa({vertexShader:a2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new la(new fu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o2 extends Go{constructor(t,n){super();const a=this;let s=null,u=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,x=null,T=null;const E=typeof XRWebGLBinding<"u",S=new s2,y={},N=n.getContextAttributes();let L=null,R=null;const O=[],P=[],U=new Ce;let I=null;const b=new qi;b.viewport=new hn;const w=new qi;w.viewport=new hn;const H=[b,w],k=new R1;let J=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let K=O[it];return K===void 0&&(K=new op,O[it]=K),K.getTargetRaySpace()},this.getControllerGrip=function(it){let K=O[it];return K===void 0&&(K=new op,O[it]=K),K.getGripSpace()},this.getHand=function(it){let K=O[it];return K===void 0&&(K=new op,O[it]=K),K.getHandSpace()};function st(it){const K=P.indexOf(it.inputSource);if(K===-1)return;const St=O[K];St!==void 0&&(St.update(it.inputSource,it.frame,d||c),St.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){s.removeEventListener("select",st),s.removeEventListener("selectstart",st),s.removeEventListener("selectend",st),s.removeEventListener("squeeze",st),s.removeEventListener("squeezestart",st),s.removeEventListener("squeezeend",st),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let it=0;it<O.length;it++){const K=P[it];K!==null&&(P[it]=null,O[it].disconnect(K))}J=null,rt=null,S.reset();for(const it in y)delete y[it];t.setRenderTarget(L),x=null,v=null,g=null,s=null,R=null,Ct.stop(),a.isPresenting=!1,t.setPixelRatio(I),t.setSize(U.width,U.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(L=t.getRenderTarget(),s.addEventListener("select",st),s.addEventListener("selectstart",st),s.addEventListener("selectend",st),s.addEventListener("squeeze",st),s.addEventListener("squeezestart",st),s.addEventListener("squeezeend",st),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),N.xrCompatible!==!0&&await n.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(U),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,wt=null,Nt=null;N.depth&&(Nt=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,St=N.stencil?iu:nu,wt=N.stencil?eu:xs);const ne={colorFormat:n.RGBA8,depthFormat:Nt,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(ne),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),R=new Ss(v.textureWidth,v.textureHeight,{format:ji,type:Va,depthTexture:new vS(v.textureWidth,v.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(s,n,St),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),R=new Ss(x.framebufferWidth,x.framebufferHeight,{format:ji,type:Va,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Ct.setContext(s),Ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(it){for(let K=0;K<it.removed.length;K++){const St=it.removed[K],wt=P.indexOf(St);wt>=0&&(P[wt]=null,O[wt].disconnect(St))}for(let K=0;K<it.added.length;K++){const St=it.added[K];let wt=P.indexOf(St);if(wt===-1){for(let ne=0;ne<O.length;ne++)if(ne>=P.length){P.push(St),wt=ne;break}else if(P[ne]===null){P[ne]=St,wt=ne;break}if(wt===-1)break}const Nt=O[wt];Nt&&Nt.connect(St)}}const q=new ut,_t=new ut;function Mt(it,K,St){q.setFromMatrixPosition(K.matrixWorld),_t.setFromMatrixPosition(St.matrixWorld);const wt=q.distanceTo(_t),Nt=K.projectionMatrix.elements,ne=St.projectionMatrix.elements,me=Nt[14]/(Nt[10]-1),G=Nt[14]/(Nt[10]+1),oe=(Nt[9]+1)/Nt[5],jt=(Nt[9]-1)/Nt[5],te=(Nt[8]-1)/Nt[0],Vt=(ne[8]+1)/ne[0],Le=me*te,Bt=me*Vt,ae=wt/(-te+Vt),an=ae*-te;if(K.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(an),it.translateZ(ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Nt[10]===-1)it.projectionMatrix.copy(K.projectionMatrix),it.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const tn=me+ae,F=G+ae,A=Le-an,nt=Bt+(wt-an),pt=oe*G/F*tn,Tt=jt*G/F*tn;it.projectionMatrix.makePerspective(A,nt,pt,Tt,tn,F),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function z(it,K){K===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(K.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let K=it.near,St=it.far;S.texture!==null&&(S.depthNear>0&&(K=S.depthNear),S.depthFar>0&&(St=S.depthFar)),k.near=w.near=b.near=K,k.far=w.far=b.far=St,(J!==k.near||rt!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),J=k.near,rt=k.far),k.layers.mask=it.layers.mask|6,b.layers.mask=k.layers.mask&3,w.layers.mask=k.layers.mask&5;const wt=it.parent,Nt=k.cameras;z(k,wt);for(let ne=0;ne<Nt.length;ne++)z(Nt[ne],wt);Nt.length===2?Mt(k,b,w):k.projectionMatrix.copy(b.projectionMatrix),$(it,k,wt)};function $(it,K,St){St===null?it.matrix.copy(K.matrixWorld):(it.matrix.copy(St.matrixWorld),it.matrix.invert(),it.matrix.multiply(K.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(K.projectionMatrix),it.projectionMatrixInverse.copy(K.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=gm*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(it){p=it,v!==null&&(v.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(k)},this.getCameraTexture=function(it){return y[it]};let xt=null;function Et(it,K){if(_=K.getViewerPose(d||c),T=K,_!==null){const St=_.views;x!==null&&(t.setRenderTargetFramebuffer(R,x.framebuffer),t.setRenderTarget(R));let wt=!1;St.length!==k.cameras.length&&(k.cameras.length=0,wt=!0);for(let G=0;G<St.length;G++){const oe=St[G];let jt=null;if(x!==null)jt=x.getViewport(oe);else{const Vt=g.getViewSubImage(v,oe);jt=Vt.viewport,G===0&&(t.setRenderTargetTextures(R,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(R))}let te=H[G];te===void 0&&(te=new qi,te.layers.enable(G),te.viewport=new hn,H[G]=te),te.matrix.fromArray(oe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(oe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(jt.x,jt.y,jt.width,jt.height),G===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),wt===!0&&k.cameras.push(te)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const G=g.getDepthInformation(St[0]);G&&G.isValid&&G.texture&&S.init(G,s.renderState)}if(Nt&&Nt.includes("camera-access")&&E){t.state.unbindTexture(),g=a.getBinding();for(let G=0;G<St.length;G++){const oe=St[G].camera;if(oe){let jt=y[oe];jt||(jt=new yS,y[oe]=jt);const te=g.getCameraImage(oe);jt.sourceTexture=te}}}}for(let St=0;St<O.length;St++){const wt=P[St],Nt=O[St];wt!==null&&Nt!==void 0&&Nt.update(wt,K,d||c)}xt&&xt(it,K),K.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:K}),T=null}const Ct=new SS;Ct.setAnimationLoop(Et),this.setAnimationLoop=function(it){xt=it},this.dispose=function(){}}}const rs=new ka,l2=new En;function u2(o,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,pS(o)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,N,L,R){y.isMeshBasicMaterial||y.isMeshLambertMaterial?u(S,y):y.isMeshToonMaterial?(u(S,y),g(S,y)):y.isMeshPhongMaterial?(u(S,y),_(S,y)):y.isMeshStandardMaterial?(u(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,R)):y.isMeshMatcapMaterial?(u(S,y),T(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),E(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?p(S,y,N,L):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ri&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ri&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=t.get(y),L=N.envMap,R=N.envMapRotation;L&&(S.envMap.value=L,rs.copy(R),rs.x*=-1,rs.y*=-1,rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),S.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(rs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,N,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=L*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function _(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const N=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function c2(o,t,n,a){let s={},u={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,L){const R=L.program;a.uniformBlockBinding(N,R)}function d(N,L){let R=s[N.id];R===void 0&&(T(N),R=_(N),s[N.id]=R,N.addEventListener("dispose",S));const O=L.program;a.updateUBOMapping(N,O);const P=t.render.frame;u[N.id]!==P&&(v(N),u[N.id]=P)}function _(N){const L=g();N.__bindingPointIndex=L;const R=o.createBuffer(),O=N.__size,P=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,R),R}function g(){for(let N=0;N<f;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=s[N.id],R=N.uniforms,O=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let P=0,U=R.length;P<U;P++){const I=Array.isArray(R[P])?R[P]:[R[P]];for(let b=0,w=I.length;b<w;b++){const H=I[b];if(x(H,P,b,O)===!0){const k=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let rt=0;for(let st=0;st<J.length;st++){const B=J[st],X=E(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,k+rt,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,rt),rt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,k,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(N,L,R,O){const P=N.value,U=L+"_"+R;if(O[U]===void 0)return typeof P=="number"||typeof P=="boolean"?O[U]=P:O[U]=P.clone(),!0;{const I=O[U];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return O[U]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function T(N){const L=N.uniforms;let R=0;const O=16;for(let U=0,I=L.length;U<I;U++){const b=Array.isArray(L[U])?L[U]:[L[U]];for(let w=0,H=b.length;w<H;w++){const k=b[w],J=Array.isArray(k.value)?k.value:[k.value];for(let rt=0,st=J.length;rt<st;rt++){const B=J[rt],X=E(B),q=R%O,_t=q%X.boundary,Mt=q+_t;R+=_t,Mt!==0&&O-Mt<X.storage&&(R+=O-Mt),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=R,R+=X.storage}}}const P=R%O;return P>0&&(R+=O-P),N.__size=R,N.__cache={},this}function E(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const R=c.indexOf(L.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete u[L.id]}function y(){for(const N in s)o.deleteBuffer(s[N]);c=[],s={},u={}}return{bind:p,update:d,dispose:y}}class f2{constructor(t={}){const{canvas:n=jb(),context:a=null,depth:s=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=c;const T=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let O=!1;this._outputColorSpace=yi;let P=0,U=0,I=null,b=-1,w=null;const H=new hn,k=new hn;let J=null;const rt=new Xe(0);let st=0,B=n.width,X=n.height,q=1,_t=null,Mt=null;const z=new hn(0,0,B,X),$=new hn(0,0,B,X);let xt=!1;const Et=new gS;let Ct=!1,it=!1;const K=new En,St=new ut,wt=new hn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function me(){return I===null?q:1}let G=a;function oe(D,j){return n.getContext(D,j)}try{const D={alpha:!0,depth:s,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fm}`),n.addEventListener("webglcontextlost",Lt,!1),n.addEventListener("webglcontextrestored",Ht,!1),n.addEventListener("webglcontextcreationerror",bt,!1),G===null){const j="webgl2";if(G=oe(j,D),G===null)throw oe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let jt,te,Vt,Le,Bt,ae,an,tn,F,A,nt,pt,Tt,ft,Kt,Dt,Yt,Zt,At,Ut,Qt,It,Ot,ce;function Y(){jt=new SC(G),jt.init(),It=new i2(G,jt),te=new pC(G,jt,t,It),Vt=new e2(G,jt),te.reversedDepthBuffer&&v&&Vt.buffers.depth.setReversed(!0),Le=new TC(G),Bt=new Vw,ae=new n2(G,jt,Vt,Bt,te,It,Le),an=new _C(R),tn=new xC(R),F=new D1(G),Ot=new hC(G,F),A=new MC(G,F,Le,Ot),nt=new AC(G,A,F,Le),At=new bC(G,te,ae),Dt=new mC(Bt),pt=new Gw(R,an,tn,jt,te,Ot,Dt),Tt=new u2(R,Bt),ft=new Xw,Kt=new Kw(jt),Zt=new fC(R,an,tn,Vt,nt,x,p),Yt=new $w(R,nt,te),ce=new c2(G,Le,te,Vt),Ut=new dC(G,jt,Le),Qt=new EC(G,jt,Le),Le.programs=pt.programs,R.capabilities=te,R.extensions=jt,R.properties=Bt,R.renderLists=ft,R.shadowMap=Yt,R.state=Vt,R.info=Le}Y();const Rt=new o2(R,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const D=jt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=jt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(D){D!==void 0&&(q=D,this.setSize(B,X,!1))},this.getSize=function(D){return D.set(B,X)},this.setSize=function(D,j,ot=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,X=j,n.width=Math.floor(D*q),n.height=Math.floor(j*q),ot===!0&&(n.style.width=D+"px",n.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(B*q,X*q).floor()},this.setDrawingBufferSize=function(D,j,ot){B=D,X=j,q=ot,n.width=Math.floor(D*ot),n.height=Math.floor(j*ot),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(z)},this.setViewport=function(D,j,ot,lt){D.isVector4?z.set(D.x,D.y,D.z,D.w):z.set(D,j,ot,lt),Vt.viewport(H.copy(z).multiplyScalar(q).round())},this.getScissor=function(D){return D.copy($)},this.setScissor=function(D,j,ot,lt){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,j,ot,lt),Vt.scissor(k.copy($).multiplyScalar(q).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(D){Vt.setScissorTest(xt=D)},this.setOpaqueSort=function(D){_t=D},this.setTransparentSort=function(D){Mt=D},this.getClearColor=function(D){return D.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,ot=!0){let lt=0;if(D){let Q=!1;if(I!==null){const yt=I.texture.format;Q=yt===Xm||yt===km||yt===Vm}if(Q){const yt=I.texture.type,Pt=yt===Va||yt===xs||yt===tu||yt===eu||yt===Hm||yt===Gm,Xt=Zt.getClearColor(),Ft=Zt.getClearAlpha(),Jt=Xt.r,re=Xt.g,$t=Xt.b;Pt?(T[0]=Jt,T[1]=re,T[2]=$t,T[3]=Ft,G.clearBufferuiv(G.COLOR,0,T)):(E[0]=Jt,E[1]=re,E[2]=$t,E[3]=Ft,G.clearBufferiv(G.COLOR,0,E))}else lt|=G.COLOR_BUFFER_BIT}j&&(lt|=G.DEPTH_BUFFER_BIT),ot&&(lt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Lt,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",bt,!1),Zt.dispose(),ft.dispose(),Kt.dispose(),Bt.dispose(),an.dispose(),tn.dispose(),nt.dispose(),Ot.dispose(),ce.dispose(),pt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ai),Rt.removeEventListener("sessionend",ko),Ki.stop()};function Lt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const D=Le.autoReset,j=Yt.enabled,ot=Yt.autoUpdate,lt=Yt.needsUpdate,Q=Yt.type;Y(),Le.autoReset=D,Yt.enabled=j,Yt.autoUpdate=ot,Yt.needsUpdate=lt,Yt.type=Q}function bt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function vt(D){const j=D.target;j.removeEventListener("dispose",vt),Gt(j)}function Gt(D){le(D),Bt.remove(D)}function le(D){const j=Bt.get(D).programs;j!==void 0&&(j.forEach(function(ot){pt.releaseProgram(ot)}),D.isShaderMaterial&&pt.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ot,lt,Q,yt){j===null&&(j=Nt);const Pt=Q.isMesh&&Q.matrixWorld.determinant()<0,Xt=Wa(D,j,ot,lt,Q);Vt.setMaterial(lt,Pt);let Ft=ot.index,Jt=1;if(lt.wireframe===!0){if(Ft=A.getWireframeAttribute(ot),Ft===void 0)return;Jt=2}const re=ot.drawRange,$t=ot.attributes.position;let _e=re.start*Jt,Oe=(re.start+re.count)*Jt;yt!==null&&(_e=Math.max(_e,yt.start*Jt),Oe=Math.min(Oe,(yt.start+yt.count)*Jt)),Ft!==null?(_e=Math.max(_e,0),Oe=Math.min(Oe,Ft.count)):$t!=null&&(_e=Math.max(_e,0),Oe=Math.min(Oe,$t.count));const We=Oe-_e;if(We<0||We===1/0)return;Ot.setup(Q,lt,Xt,ot,Ft);let Pe,ge=Ut;if(Ft!==null&&(Pe=F.get(Ft),ge=Qt,ge.setIndex(Pe)),Q.isMesh)lt.wireframe===!0?(Vt.setLineWidth(lt.wireframeLinewidth*me()),ge.setMode(G.LINES)):ge.setMode(G.TRIANGLES);else if(Q.isLine){let Wt=lt.linewidth;Wt===void 0&&(Wt=1),Vt.setLineWidth(Wt*me()),Q.isLineSegments?ge.setMode(G.LINES):Q.isLineLoop?ge.setMode(G.LINE_LOOP):ge.setMode(G.LINE_STRIP)}else Q.isPoints?ge.setMode(G.POINTS):Q.isSprite&&ge.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)au("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))ge.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Wt=Q._multiDrawStarts,Ze=Q._multiDrawCounts,Re=Q._multiDrawCount,Un=Ft?F.get(Ft).bytesPerElement:1,fa=Bt.get(lt).currentProgram.getUniforms();for(let An=0;An<Re;An++)fa.setValue(G,"_gl_DrawID",An),ge.render(Wt[An]/Un,Ze[An])}else if(Q.isInstancedMesh)ge.renderInstances(_e,We,Q.count);else if(ot.isInstancedBufferGeometry){const Wt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ze=Math.min(ot.instanceCount,Wt);ge.renderInstances(_e,We,Ze)}else ge.render(_e,We)};function ze(D,j,ot){D.transparent===!0&&D.side===Ba&&D.forceSinglePass===!1?(D.side=ri,D.needsUpdate=!0,li(D,j,ot),D.side=Ur,D.needsUpdate=!0,li(D,j,ot),D.side=Ba):li(D,j,ot)}this.compile=function(D,j,ot=null){ot===null&&(ot=D),y=Kt.get(ot),y.init(j),L.push(y),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),D!==ot&&D.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const lt=new Set;return D.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const yt=Q.material;if(yt)if(Array.isArray(yt))for(let Pt=0;Pt<yt.length;Pt++){const Xt=yt[Pt];ze(Xt,ot,Q),lt.add(Xt)}else ze(yt,ot,Q),lt.add(yt)}),y=L.pop(),lt},this.compileAsync=function(D,j,ot=null){const lt=this.compile(D,j,ot);return new Promise(Q=>{function yt(){if(lt.forEach(function(Pt){Bt.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){Q(D);return}setTimeout(yt,10)}jt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ae=null;function kn(D){Ae&&Ae(D)}function Ai(){Ki.stop()}function ko(){Ki.start()}const Ki=new SS;Ki.setAnimationLoop(kn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(D){Ae=D,Rt.setAnimationLoop(D),D===null?Ki.stop():Ki.start()},Rt.addEventListener("sessionstart",Ai),Rt.addEventListener("sessionend",ko),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(j),j=Rt.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,j,I),y=Kt.get(D,L.length),y.init(j),L.push(y),K.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Et.setFromProjectionMatrix(K,oa,j.reversedDepth),it=this.localClippingEnabled,Ct=Dt.init(this.clippingPlanes,it),S=ft.get(D,N.length),S.init(),N.push(S),Rt.enabled===!0&&Rt.isPresenting===!0){const yt=R.xr.getDepthSensingMesh();yt!==null&&Ts(yt,j,-1/0,R.sortObjects)}Ts(D,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(_t,Mt),ne=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,ne&&Zt.addToRenderList(S,D),this.info.render.frame++,Ct===!0&&Dt.beginShadows();const ot=y.state.shadowsArray;Yt.render(ot,D,j),Ct===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,Q=S.transmissive;if(y.setupLights(),j.isArrayCamera){const yt=j.cameras;if(Q.length>0)for(let Pt=0,Xt=yt.length;Pt<Xt;Pt++){const Ft=yt[Pt];As(lt,Q,D,Ft)}ne&&Zt.render(D);for(let Pt=0,Xt=yt.length;Pt<Xt;Pt++){const Ft=yt[Pt];bs(S,D,Ft,Ft.viewport)}}else Q.length>0&&As(lt,Q,D,j),ne&&Zt.render(D),bs(S,D,j);I!==null&&U===0&&(ae.updateMultisampleRenderTarget(I),ae.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(R,D,j),Ot.resetDefaultState(),b=-1,w=null,L.pop(),L.length>0?(y=L[L.length-1],Ct===!0&&Dt.setGlobalState(R.clippingPlanes,y.state.camera)):y=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function Ts(D,j,ot,lt){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ot=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Et.intersectsSprite(D)){lt&&wt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(K);const Pt=nt.update(D),Xt=D.material;Xt.visible&&S.push(D,Pt,Xt,ot,wt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Et.intersectsObject(D))){const Pt=nt.update(D),Xt=D.material;if(lt&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),wt.copy(D.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),wt.copy(Pt.boundingSphere.center)),wt.applyMatrix4(D.matrixWorld).applyMatrix4(K)),Array.isArray(Xt)){const Ft=Pt.groups;for(let Jt=0,re=Ft.length;Jt<re;Jt++){const $t=Ft[Jt],_e=Xt[$t.materialIndex];_e&&_e.visible&&S.push(D,Pt,_e,ot,wt.z,$t)}}else Xt.visible&&S.push(D,Pt,Xt,ot,wt.z,null)}}const yt=D.children;for(let Pt=0,Xt=yt.length;Pt<Xt;Pt++)Ts(yt[Pt],j,ot,lt)}function bs(D,j,ot,lt){const Q=D.opaque,yt=D.transmissive,Pt=D.transparent;y.setupLightsView(ot),Ct===!0&&Dt.setGlobalState(R.clippingPlanes,ot),lt&&Vt.viewport(H.copy(lt)),Q.length>0&&Nr(Q,j,ot),yt.length>0&&Nr(yt,j,ot),Pt.length>0&&Nr(Pt,j,ot),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function As(D,j,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[lt.id]===void 0&&(y.state.transmissionRenderTarget[lt.id]=new Ss(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?su:Va,minFilter:ds,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const yt=y.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||H;yt.setSize(Pt.z*R.transmissionResolutionScale,Pt.w*R.transmissionResolutionScale);const Xt=R.getRenderTarget(),Ft=R.getActiveCubeFace(),Jt=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(rt),st=R.getClearAlpha(),st<1&&R.setClearColor(16777215,.5),R.clear(),ne&&Zt.render(ot);const re=R.toneMapping;R.toneMapping=Cr;const $t=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),y.setupLightsView(lt),Ct===!0&&Dt.setGlobalState(R.clippingPlanes,lt),Nr(D,ot,lt),ae.updateMultisampleRenderTarget(yt),ae.updateRenderTargetMipmap(yt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Oe=0,We=j.length;Oe<We;Oe++){const Pe=j[Oe],ge=Pe.object,Wt=Pe.geometry,Ze=Pe.material,Re=Pe.group;if(Ze.side===Ba&&ge.layers.test(lt.layers)){const Un=Ze.side;Ze.side=ri,Ze.needsUpdate=!0,Xo(ge,ot,lt,Wt,Ze,Re),Ze.side=Un,Ze.needsUpdate=!0,_e=!0}}_e===!0&&(ae.updateMultisampleRenderTarget(yt),ae.updateRenderTargetMipmap(yt))}R.setRenderTarget(Xt,Ft,Jt),R.setClearColor(rt,st),$t!==void 0&&(lt.viewport=$t),R.toneMapping=re}function Nr(D,j,ot){const lt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,yt=D.length;Q<yt;Q++){const Pt=D[Q],Xt=Pt.object,Ft=Pt.geometry,Jt=Pt.group;let re=Pt.material;re.allowOverride===!0&&lt!==null&&(re=lt),Xt.layers.test(ot.layers)&&Xo(Xt,j,ot,Ft,re,Jt)}}function Xo(D,j,ot,lt,Q,yt){D.onBeforeRender(R,j,ot,lt,Q,yt),D.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Q.onBeforeRender(R,j,ot,lt,D,yt),Q.transparent===!0&&Q.side===Ba&&Q.forceSinglePass===!1?(Q.side=ri,Q.needsUpdate=!0,R.renderBufferDirect(ot,j,lt,Q,D,yt),Q.side=Ur,Q.needsUpdate=!0,R.renderBufferDirect(ot,j,lt,Q,D,yt),Q.side=Ba):R.renderBufferDirect(ot,j,lt,Q,D,yt),D.onAfterRender(R,j,ot,lt,Q,yt)}function li(D,j,ot){j.isScene!==!0&&(j=Nt);const lt=Bt.get(D),Q=y.state.lights,yt=y.state.shadowsArray,Pt=Q.state.version,Xt=pt.getParameters(D,Q.state,yt,j,ot),Ft=pt.getProgramCacheKey(Xt);let Jt=lt.programs;lt.environment=D.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(D.isMeshStandardMaterial?tn:an).get(D.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,Jt===void 0&&(D.addEventListener("dispose",vt),Jt=new Map,lt.programs=Jt);let re=Jt.get(Ft);if(re!==void 0){if(lt.currentProgram===re&&lt.lightsStateVersion===Pt)return Dn(D,Xt),re}else Xt.uniforms=pt.getUniforms(D),D.onBeforeCompile(Xt,R),re=pt.acquireProgram(Xt,Ft),Jt.set(Ft,re),lt.uniforms=Xt.uniforms;const $t=lt.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&($t.clippingPlanes=Dt.uniform),Dn(D,Xt),lt.needsLights=gf(D),lt.lightsStateVersion=Pt,lt.needsLights&&($t.ambientLightColor.value=Q.state.ambient,$t.lightProbe.value=Q.state.probe,$t.directionalLights.value=Q.state.directional,$t.directionalLightShadows.value=Q.state.directionalShadow,$t.spotLights.value=Q.state.spot,$t.spotLightShadows.value=Q.state.spotShadow,$t.rectAreaLights.value=Q.state.rectArea,$t.ltc_1.value=Q.state.rectAreaLTC1,$t.ltc_2.value=Q.state.rectAreaLTC2,$t.pointLights.value=Q.state.point,$t.pointLightShadows.value=Q.state.pointShadow,$t.hemisphereLights.value=Q.state.hemi,$t.directionalShadowMap.value=Q.state.directionalShadowMap,$t.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$t.spotShadowMap.value=Q.state.spotShadowMap,$t.spotLightMatrix.value=Q.state.spotLightMatrix,$t.spotLightMap.value=Q.state.spotLightMap,$t.pointShadowMap.value=Q.state.pointShadowMap,$t.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=re,lt.uniformsList=null,re}function dn(D){if(D.uniformsList===null){const j=D.currentProgram.getUniforms();D.uniformsList=Jc.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function Dn(D,j){const ot=Bt.get(D);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function Wa(D,j,ot,lt,Q){j.isScene!==!0&&(j=Nt),ae.resetTextureUnits();const yt=j.fog,Pt=lt.isMeshStandardMaterial?j.environment:null,Xt=I===null?R.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Io,Ft=(lt.isMeshStandardMaterial?tn:an).get(lt.envMap||Pt),Jt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),$t=!!ot.morphAttributes.position,_e=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let We=Cr;lt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(We=R.toneMapping);const Pe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ge=Pe!==void 0?Pe.length:0,Wt=Bt.get(lt),Ze=y.state.lights;if(Ct===!0&&(it===!0||D!==w)){const Sn=D===w&&lt.id===b;Dt.setState(lt,D,Sn)}let Re=!1;lt.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ze.state.version||Wt.outputColorSpace!==Xt||Q.isBatchedMesh&&Wt.batching===!1||!Q.isBatchedMesh&&Wt.batching===!0||Q.isBatchedMesh&&Wt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Wt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Wt.instancing===!1||!Q.isInstancedMesh&&Wt.instancing===!0||Q.isSkinnedMesh&&Wt.skinning===!1||!Q.isSkinnedMesh&&Wt.skinning===!0||Q.isInstancedMesh&&Wt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Wt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Wt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Wt.instancingMorph===!1&&Q.morphTexture!==null||Wt.envMap!==Ft||lt.fog===!0&&Wt.fog!==yt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Dt.numPlanes||Wt.numIntersection!==Dt.numIntersection)||Wt.vertexAlphas!==Jt||Wt.vertexTangents!==re||Wt.morphTargets!==$t||Wt.morphNormals!==_e||Wt.morphColors!==Oe||Wt.toneMapping!==We||Wt.morphTargetsCount!==ge)&&(Re=!0):(Re=!0,Wt.__version=lt.version);let Un=Wt.currentProgram;Re===!0&&(Un=li(lt,j,Q));let fa=!1,An=!1,Pr=!1;const xe=Un.getUniforms(),Bn=Wt.uniforms;if(Vt.useProgram(Un.program)&&(fa=!0,An=!0,Pr=!0),lt.id!==b&&(b=lt.id,An=!0),fa||w!==D){Vt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),xe.setValue(G,"projectionMatrix",D.projectionMatrix),xe.setValue(G,"viewMatrix",D.matrixWorldInverse);const ln=xe.map.cameraPosition;ln!==void 0&&ln.setValue(G,St.setFromMatrixPosition(D.matrixWorld)),te.logarithmicDepthBuffer&&xe.setValue(G,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&xe.setValue(G,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,An=!0,Pr=!0)}if(Q.isSkinnedMesh){xe.setOptional(G,Q,"bindMatrix"),xe.setOptional(G,Q,"bindMatrixInverse");const Sn=Q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),xe.setValue(G,"boneTexture",Sn.boneTexture,ae))}Q.isBatchedMesh&&(xe.setOptional(G,Q,"batchingTexture"),xe.setValue(G,"batchingTexture",Q._matricesTexture,ae),xe.setOptional(G,Q,"batchingIdTexture"),xe.setValue(G,"batchingIdTexture",Q._indirectTexture,ae),xe.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&xe.setValue(G,"batchingColorTexture",Q._colorsTexture,ae));const Xn=ot.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&At.update(Q,ot,Un),(An||Wt.receiveShadow!==Q.receiveShadow)&&(Wt.receiveShadow=Q.receiveShadow,xe.setValue(G,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=Ft,Bn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(Bn.envMapIntensity.value=j.environmentIntensity),An&&(xe.setValue(G,"toneMappingExposure",R.toneMappingExposure),Wt.needsLights&&Wo(Bn,Pr),yt&&lt.fog===!0&&Tt.refreshFogUniforms(Bn,yt),Tt.refreshMaterialUniforms(Bn,lt,q,X,y.state.transmissionRenderTarget[D.id]),Jc.upload(G,dn(Wt),Bn,ae)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Jc.upload(G,dn(Wt),Bn,ae),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&xe.setValue(G,"center",Q.center),xe.setValue(G,"modelViewMatrix",Q.modelViewMatrix),xe.setValue(G,"normalMatrix",Q.normalMatrix),xe.setValue(G,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const Sn=lt.uniformsGroups;for(let ln=0,Rs=Sn.length;ln<Rs;ln++){const Qi=Sn[ln];ce.update(Qi,Un),ce.bind(Qi,Un)}}return Un}function Wo(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function gf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,j,ot){const lt=Bt.get(D);lt.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Bt.get(D.texture).__webglTexture=j,Bt.get(D.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){const ot=Bt.get(D);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const vf=G.createFramebuffer();this.setRenderTarget=function(D,j=0,ot=0){I=D,P=j,U=ot;let lt=!0,Q=null,yt=!1,Pt=!1;if(D){const Ft=Bt.get(D);if(Ft.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(G.FRAMEBUFFER,null),lt=!1;else if(Ft.__webglFramebuffer===void 0)ae.setupRenderTarget(D);else if(Ft.__hasExternalTextures)ae.rebindTextures(D,Bt.get(D.texture).__webglTexture,Bt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const $t=D.depthTexture;if(Ft.__boundDepthTexture!==$t){if($t!==null&&Bt.has($t)&&(D.width!==$t.image.width||D.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(D)}}const Jt=D.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const re=Bt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[j])?Q=re[j][ot]:Q=re[j],yt=!0):D.samples>0&&ae.useMultisampledRTT(D)===!1?Q=Bt.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[ot]:Q=re,H.copy(D.viewport),k.copy(D.scissor),J=D.scissorTest}else H.copy(z).multiplyScalar(q).floor(),k.copy($).multiplyScalar(q).floor(),J=xt;if(ot!==0&&(Q=vf),Vt.bindFramebuffer(G.FRAMEBUFFER,Q)&&lt&&Vt.drawBuffers(D,Q),Vt.viewport(H),Vt.scissor(k),Vt.setScissorTest(J),yt){const Ft=Bt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ft.__webglTexture,ot)}else if(Pt){const Ft=j;for(let Jt=0;Jt<D.textures.length;Jt++){const re=Bt.get(D.textures[Jt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Jt,re.__webglTexture,ot,Ft)}}else if(D!==null&&ot!==0){const Ft=Bt.get(D.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,ot)}b=-1},this.readRenderTargetPixels=function(D,j,ot,lt,Q,yt,Pt,Xt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Bt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){Vt.bindFramebuffer(G.FRAMEBUFFER,Ft);try{const Jt=D.textures[Xt],re=Jt.format,$t=Jt.type;if(!te.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-lt&&ot>=0&&ot<=D.height-Q&&(D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Xt),G.readPixels(j,ot,lt,Q,It.convert(re),It.convert($t),yt))}finally{const Jt=I!==null?Bt.get(I).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(D,j,ot,lt,Q,yt,Pt,Xt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Bt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft)if(j>=0&&j<=D.width-lt&&ot>=0&&ot<=D.height-Q){Vt.bindFramebuffer(G.FRAMEBUFFER,Ft);const Jt=D.textures[Xt],re=Jt.format,$t=Jt.type;if(!te.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,_e),G.bufferData(G.PIXEL_PACK_BUFFER,yt.byteLength,G.STREAM_READ),D.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Xt),G.readPixels(j,ot,lt,Q,It.convert(re),It.convert($t),0);const Oe=I!==null?Bt.get(I).__webglFramebuffer:null;Vt.bindFramebuffer(G.FRAMEBUFFER,Oe);const We=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Zb(G,We,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,_e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,yt),G.deleteBuffer(_e),G.deleteSync(We),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(D.image.width*lt),yt=Math.floor(D.image.height*lt),Pt=j!==null?j.x:0,Xt=j!==null?j.y:0;ae.setTexture2D(D,0),G.copyTexSubImage2D(G.TEXTURE_2D,ot,0,0,Pt,Xt,Q,yt),Vt.unbindTexture()};const hu=G.createFramebuffer(),Or=G.createFramebuffer();this.copyTextureToTexture=function(D,j,ot=null,lt=null,Q=0,yt=null){yt===null&&(Q!==0?(au("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Q,Q=0):yt=0);let Pt,Xt,Ft,Jt,re,$t,_e,Oe,We;const Pe=D.isCompressedTexture?D.mipmaps[yt]:D.image;if(ot!==null)Pt=ot.max.x-ot.min.x,Xt=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,Jt=ot.min.x,re=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const Xn=Math.pow(2,-Q);Pt=Math.floor(Pe.width*Xn),Xt=Math.floor(Pe.height*Xn),D.isDataArrayTexture?Ft=Pe.depth:D.isData3DTexture?Ft=Math.floor(Pe.depth*Xn):Ft=1,Jt=0,re=0,$t=0}lt!==null?(_e=lt.x,Oe=lt.y,We=lt.z):(_e=0,Oe=0,We=0);const ge=It.convert(j.format),Wt=It.convert(j.type);let Ze;j.isData3DTexture?(ae.setTexture3D(j,0),Ze=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ae.setTexture2DArray(j,0),Ze=G.TEXTURE_2D_ARRAY):(ae.setTexture2D(j,0),Ze=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Re=G.getParameter(G.UNPACK_ROW_LENGTH),Un=G.getParameter(G.UNPACK_IMAGE_HEIGHT),fa=G.getParameter(G.UNPACK_SKIP_PIXELS),An=G.getParameter(G.UNPACK_SKIP_ROWS),Pr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Pe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Jt),G.pixelStorei(G.UNPACK_SKIP_ROWS,re),G.pixelStorei(G.UNPACK_SKIP_IMAGES,$t);const xe=D.isDataArrayTexture||D.isData3DTexture,Bn=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){const Xn=Bt.get(D),Sn=Bt.get(j),ln=Bt.get(Xn.__renderTarget),Rs=Bt.get(Sn.__renderTarget);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,ln.__webglFramebuffer),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Rs.__webglFramebuffer);for(let Qi=0;Qi<Ft;Qi++)xe&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(D).__webglTexture,Q,$t+Qi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Bt.get(j).__webglTexture,yt,We+Qi)),G.blitFramebuffer(Jt,re,Pt,Xt,_e,Oe,Pt,Xt,G.DEPTH_BUFFER_BIT,G.NEAREST);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||D.isRenderTargetTexture||Bt.has(D)){const Xn=Bt.get(D),Sn=Bt.get(j);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,hu),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Or);for(let ln=0;ln<Ft;ln++)xe?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xn.__webglTexture,Q,$t+ln):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xn.__webglTexture,Q),Bn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Sn.__webglTexture,yt,We+ln):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Sn.__webglTexture,yt),Q!==0?G.blitFramebuffer(Jt,re,Pt,Xt,_e,Oe,Pt,Xt,G.COLOR_BUFFER_BIT,G.NEAREST):Bn?G.copyTexSubImage3D(Ze,yt,_e,Oe,We+ln,Jt,re,Pt,Xt):G.copyTexSubImage2D(Ze,yt,_e,Oe,Jt,re,Pt,Xt);Vt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Bn?D.isDataTexture||D.isData3DTexture?G.texSubImage3D(Ze,yt,_e,Oe,We,Pt,Xt,Ft,ge,Wt,Pe.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(Ze,yt,_e,Oe,We,Pt,Xt,Ft,ge,Pe.data):G.texSubImage3D(Ze,yt,_e,Oe,We,Pt,Xt,Ft,ge,Wt,Pe):D.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,yt,_e,Oe,Pt,Xt,ge,Wt,Pe.data):D.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,yt,_e,Oe,Pe.width,Pe.height,ge,Pe.data):G.texSubImage2D(G.TEXTURE_2D,yt,_e,Oe,Pt,Xt,ge,Wt,Pe);G.pixelStorei(G.UNPACK_ROW_LENGTH,Re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Un),G.pixelStorei(G.UNPACK_SKIP_PIXELS,fa),G.pixelStorei(G.UNPACK_SKIP_ROWS,An),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Pr),yt===0&&j.generateMipmaps&&G.generateMipmap(Ze),Vt.unbindTexture()},this.initRenderTarget=function(D){Bt.get(D).__webglFramebuffer===void 0&&ae.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ae.setTextureCube(D,0):D.isData3DTexture?ae.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ae.setTexture2DArray(D,0):ae.setTexture2D(D,0),Vt.unbindTexture()},this.resetState=function(){P=0,U=0,I=null,Vt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const $c=8,h2=`
#define MAX_COLORS ${$c}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,d2=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function p2({className:o,style:t,rotation:n=45,speed:a=.2,colors:s=[],transparent:u=!0,autoRotate:c=0,scale:f=1,frequency:p=1,warpStrength:d=1,mouseInfluence:_=1,parallax:g=.5,noise:v=.1}){const x=se.useRef(null),T=se.useRef(null),E=se.useRef(null),S=se.useRef(null),y=se.useRef(null),N=se.useRef(n),L=se.useRef(c),R=se.useRef(new Ce(0,0)),O=se.useRef(new Ce(0,0)),P=se.useRef(8);return se.useEffect(()=>{const U=x.current,I=new S1,b=new xS(-1,1,1,-1,0,1),w=new fu(2,2),H=Array.from({length:$c},()=>new ut(0,0,0)),k=new Xa({vertexShader:d2,fragmentShader:h2,uniforms:{uCanvas:{value:new Ce(1,1)},uTime:{value:0},uSpeed:{value:a},uRot:{value:new Ce(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:u?1:0},uScale:{value:f},uFrequency:{value:p},uWarpStrength:{value:d},uPointer:{value:new Ce(0,0)},uMouseInfluence:{value:_},uParallax:{value:g},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});S.current=k;const J=new la(w,k);I.add(J);const rt=new f2({antialias:!1,powerPreference:"high-performance",alpha:!0});T.current=rt,rt.outputColorSpace=yi,rt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),rt.setClearColor(0,u?0:1),rt.domElement.style.width="100%",rt.domElement.style.height="100%",rt.domElement.style.display="block",U.appendChild(rt.domElement);const st=new C1,B=()=>{const q=U.clientWidth||1,_t=U.clientHeight||1;rt.setSize(q,_t,!1),k.uniforms.uCanvas.value.set(q,_t)};if(B(),"ResizeObserver"in window){const q=new ResizeObserver(B);q.observe(U),y.current=q}else window.addEventListener("resize",B);const X=()=>{const q=st.getDelta(),_t=st.elapsedTime;k.uniforms.uTime.value=_t;const z=(N.current%360+L.current*_t)*Math.PI/180,$=Math.cos(z),xt=Math.sin(z);k.uniforms.uRot.value.set($,xt);const Et=O.current,Ct=R.current,it=Math.min(1,q*P.current);Et.lerp(Ct,it),k.uniforms.uPointer.value.copy(Et),rt.render(I,b),E.current=requestAnimationFrame(X)};return E.current=requestAnimationFrame(X),()=>{E.current!==null&&cancelAnimationFrame(E.current),y.current?y.current.disconnect():window.removeEventListener("resize",B),w.dispose(),k.dispose(),rt.dispose(),rt.domElement&&rt.domElement.parentElement===U&&U.removeChild(rt.domElement)}},[p,_,v,g,f,a,u,d]),se.useEffect(()=>{const U=S.current,I=T.current;if(!U)return;N.current=n,L.current=c,U.uniforms.uSpeed.value=a,U.uniforms.uScale.value=f,U.uniforms.uFrequency.value=p,U.uniforms.uWarpStrength.value=d,U.uniforms.uMouseInfluence.value=_,U.uniforms.uParallax.value=g,U.uniforms.uNoise.value=v;const b=H=>{const k=H.replace("#","").trim(),J=k.length===3?[parseInt(k[0]+k[0],16),parseInt(k[1]+k[1],16),parseInt(k[2]+k[2],16)]:[parseInt(k.slice(0,2),16),parseInt(k.slice(2,4),16),parseInt(k.slice(4,6),16)];return new ut(J[0]/255,J[1]/255,J[2]/255)},w=(s||[]).filter(Boolean).slice(0,$c).map(b);for(let H=0;H<$c;H++){const k=U.uniforms.uColors.value[H];H<w.length?k.copy(w[H]):k.set(0,0,0)}U.uniforms.uColorCount.value=w.length,U.uniforms.uTransparent.value=u?1:0,I&&I.setClearColor(0,u?0:1)},[n,c,a,f,p,d,_,g,v,s,u]),se.useEffect(()=>{const U=S.current,I=x.current;if(!U||!I)return;const b=w=>{const H=I.getBoundingClientRect(),k=(w.clientX-H.left)/(H.width||1)*2-1,J=-((w.clientY-H.top)/(H.height||1)*2-1);R.current.set(k,J)};return I.addEventListener("pointermove",b),()=>{I.removeEventListener("pointermove",b)}},[]),dt.jsx("div",{ref:x,className:`color-bends-container ${o}`,style:t})}const m2=({position:o="right",colors:t=["#B19EEF","#5227FF"],items:n=[],socialItems:a=[],displaySocials:s=!0,displayItemNumbering:u=!0,className:c,logoUrl:f="/src/assets/logos/reactbits-gh-white.svg",menuButtonColor:p="#fff",openMenuButtonColor:d="#fff",accentColor:_="#5227FF",changeMenuColorOnOpen:g=!0,isFixed:v=!1,onMenuOpen:x,onMenuClose:T})=>{const[E,S]=se.useState(!1),y=se.useRef(!1),N=se.useRef(null),L=se.useRef(null),R=se.useRef([]),O=se.useRef(null),P=se.useRef(null),U=se.useRef(null),I=se.useRef(null),b=se.useRef(null),[w,H]=se.useState(["Menu","Close"]),k=se.useRef(null),J=se.useRef(null),rt=se.useRef(null),st=se.useRef(null),B=se.useRef(null),X=se.useRef(null),q=se.useRef(!1),_t=se.useRef(null);se.useLayoutEffect(()=>{const K=Ie.context(()=>{const St=N.current,wt=L.current,Nt=O.current,ne=P.current,me=U.current,G=I.current;if(!St||!Nt||!ne||!me||!G)return;let oe=[];wt&&(oe=Array.from(wt.querySelectorAll(".sm-prelayer"))),R.current=oe;const jt=o==="left"?-100:100;Ie.set([St,...oe],{xPercent:jt}),Ie.set(Nt,{transformOrigin:"50% 50%",rotate:0}),Ie.set(ne,{transformOrigin:"50% 50%",rotate:90}),Ie.set(me,{rotate:0,transformOrigin:"50% 50%"}),Ie.set(G,{yPercent:0}),X.current&&Ie.set(X.current,{color:p})});return()=>K.revert()},[p,o]);const Mt=se.useCallback(()=>{const K=N.current,St=R.current;if(!K)return null;k.current?.kill(),J.current&&(J.current.kill(),J.current=null),_t.current?.kill();const wt=Array.from(K.querySelectorAll(".sm-panel-itemLabel")),Nt=Array.from(K.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),ne=K.querySelector(".sm-socials-title"),me=Array.from(K.querySelectorAll(".sm-socials-link")),G=St.map(Bt=>({el:Bt,start:Number(Ie.getProperty(Bt,"xPercent"))})),oe=Number(Ie.getProperty(K,"xPercent"));wt.length&&Ie.set(wt,{yPercent:140,rotate:10}),Nt.length&&Ie.set(Nt,{"--sm-num-opacity":0}),ne&&Ie.set(ne,{opacity:0}),me.length&&Ie.set(me,{y:25,opacity:0});const jt=Ie.timeline({paused:!0});G.forEach((Bt,ae)=>{jt.fromTo(Bt.el,{xPercent:Bt.start},{xPercent:0,duration:.5,ease:"power4.out"},ae*.07)});const Vt=(G.length?(G.length-1)*.07:0)+(G.length?.08:0),Le=.65;if(jt.fromTo(K,{xPercent:oe},{xPercent:0,duration:Le,ease:"power4.out"},Vt),wt.length){const ae=Vt+Le*.15;jt.to(wt,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},ae),Nt.length&&jt.to(Nt,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},ae+.1)}if(ne||me.length){const Bt=Vt+Le*.4;ne&&jt.to(ne,{opacity:1,duration:.5,ease:"power2.out"},Bt),me.length&&jt.to(me,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{Ie.set(me,{clearProps:"opacity"})}},Bt+.04)}return k.current=jt,jt},[]),z=se.useCallback(()=>{if(q.current)return;q.current=!0;const K=Mt();K?(K.eventCallback("onComplete",()=>{q.current=!1}),K.play(0)):q.current=!1},[Mt]),$=se.useCallback(()=>{k.current?.kill(),k.current=null,_t.current?.kill();const K=N.current,St=R.current;if(!K)return;const wt=[...St,K];J.current?.kill();const Nt=o==="left"?-100:100;J.current=Ie.to(wt,{xPercent:Nt,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const ne=Array.from(K.querySelectorAll(".sm-panel-itemLabel"));ne.length&&Ie.set(ne,{yPercent:140,rotate:10});const me=Array.from(K.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));me.length&&Ie.set(me,{"--sm-num-opacity":0});const G=K.querySelector(".sm-socials-title"),oe=Array.from(K.querySelectorAll(".sm-socials-link"));G&&Ie.set(G,{opacity:0}),oe.length&&Ie.set(oe,{y:25,opacity:0}),q.current=!1}})},[o]),xt=se.useCallback(K=>{const St=U.current;St&&(rt.current?.kill(),K?rt.current=Ie.to(St,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):rt.current=Ie.to(St,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),Et=se.useCallback(K=>{const St=X.current;if(St)if(B.current?.kill(),g){const wt=K?d:p;B.current=Ie.to(St,{color:wt,delay:.18,duration:.3,ease:"power2.out"})}else Ie.set(St,{color:p})},[d,p,g]);PE.useEffect(()=>{if(X.current)if(g){const K=y.current?d:p;Ie.set(X.current,{color:K})}else Ie.set(X.current,{color:p})},[g,p,d]);const Ct=se.useCallback(K=>{const St=I.current;if(!St)return;st.current?.kill();const wt=K?"Menu":"Close",Nt=K?"Close":"Menu",ne=3,me=[wt];let G=wt;for(let te=0;te<ne;te++)G=G==="Menu"?"Close":"Menu",me.push(G);G!==Nt&&me.push(Nt),me.push(Nt),H(me),Ie.set(St,{yPercent:0});const oe=me.length,jt=(oe-1)/oe*100;st.current=Ie.to(St,{yPercent:-jt,duration:.5+oe*.07,ease:"power4.out"})},[]),it=se.useCallback(()=>{const K=!y.current;y.current=K,S(K),K?(x?.(),z()):(T?.(),$()),xt(K),Et(K),Ct(K)},[z,$,xt,Et,Ct,x,T]);return dt.jsxs("div",{className:(c?c+" ":"")+"staggered-menu-wrapper"+(v?" fixed-wrapper":""),style:_?{"--sm-accent":_}:void 0,"data-position":o,"data-open":E||void 0,children:[dt.jsx("div",{ref:L,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let St=[...t&&t.length?t.slice(0,4):["#1e1e22","#35353c"]];if(St.length>=3){const wt=Math.floor(St.length/2);St.splice(wt,1)}return St.map((wt,Nt)=>dt.jsx("div",{className:"sm-prelayer",style:{background:wt}},Nt))})()}),dt.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[dt.jsx("div",{className:"sm-logo","aria-label":"Logo",children:dt.jsx("img",{src:f||"/src/assets/logos/reactbits-gh-white.svg",alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24})}),dt.jsxs("button",{ref:X,className:"sm-toggle","aria-label":E?"Close menu":"Open menu","aria-expanded":E,"aria-controls":"staggered-menu-panel",onClick:it,type:"button",children:[dt.jsx("span",{ref:b,className:"sm-toggle-textWrap","aria-hidden":"true",children:dt.jsx("span",{ref:I,className:"sm-toggle-textInner",children:w.map((K,St)=>dt.jsx("span",{className:"sm-toggle-line",children:K},St))})}),dt.jsxs("span",{ref:U,className:"sm-icon","aria-hidden":"true",children:[dt.jsx("span",{ref:O,className:"sm-icon-line"}),dt.jsx("span",{ref:P,className:"sm-icon-line sm-icon-line-v"})]})]})]}),dt.jsx("aside",{id:"staggered-menu-panel",ref:N,className:"staggered-menu-panel","aria-hidden":!E,children:dt.jsxs("div",{className:"sm-panel-inner",children:[dt.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":u||void 0,children:n&&n.length?n.map((K,St)=>dt.jsx("li",{className:"sm-panel-itemWrap",children:dt.jsx("a",{className:"sm-panel-item",href:K.link,"aria-label":K.ariaLabel,"data-index":St+1,children:dt.jsx("span",{className:"sm-panel-itemLabel",children:K.label})})},K.label+St)):dt.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:dt.jsx("span",{className:"sm-panel-item",children:dt.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),s&&a&&a.length>0&&dt.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[dt.jsx("h3",{className:"sm-socials-title",children:"Socials"}),dt.jsx("ul",{className:"sm-socials-list",role:"list",children:a.map((K,St)=>dt.jsx("li",{className:"sm-socials-item",children:dt.jsx("a",{href:K.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:K.label})},K.label+St))})]})]})})]})};function _2(){return dt.jsxs("footer",{className:"footer",children:[dt.jsxs("div",{className:"footer-top",children:[dt.jsxs("div",{className:"footer-brand",children:[dt.jsx("div",{className:"logo",children:dt.jsx("img",{src:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/Logo.png",alt:"Untitled UI logo",className:"logo-icon"})}),dt.jsx("p",{className:"footer-desc",children:"PAWEŁ ROKICKI"})]}),dt.jsxs("div",{className:"footer-columns",children:[dt.jsxs("div",{className:"footer-col",children:[dt.jsx("h4",{children:"CREDITS"}),dt.jsxs("ul",{children:[dt.jsx("li",{children:"Blog"}),dt.jsx("li",{children:"Newsletter"}),dt.jsx("li",{children:"Events"}),dt.jsx("li",{children:"Help centre"}),dt.jsx("li",{children:"Tutorials"}),dt.jsx("li",{children:"Support"})]})]}),dt.jsxs("div",{className:"footer-col",children:[dt.jsx("h4",{children:"SOCIAL"}),dt.jsxs("ul",{children:[dt.jsx("li",{children:"Twitter"}),dt.jsx("li",{children:"LinkedIn"}),dt.jsx("li",{children:"Facebook"}),dt.jsx("li",{children:"GitHub"}),dt.jsx("li",{children:"AngelList"}),dt.jsx("li",{children:"Dribbble"})]})]}),dt.jsxs("div",{className:"footer-col",children:[dt.jsx("h4",{children:"KONTAKT"}),dt.jsxs("ul",{children:[dt.jsx("li",{children:dt.jsx("a",{href:"mailto:pawel.rokicki@student.put.poznan.pl","aria-label":"Email me",className:"footer-link",children:"509 964 289"})}),dt.jsx("li",{children:dt.jsx("a",{href:"mailto:pawel.rokicki@student.put.poznan.pl","aria-label":"Email me",className:"footer-link",children:"534 498 293"})}),dt.jsx("li",{children:dt.jsx("a",{href:"mailto:pawel.rokicki@student.put.poznan.pl","aria-label":"Email me",className:"footer-link",children:"Private email"})}),dt.jsx("li",{children:dt.jsx("a",{href:"mailto:pawel.rokicki@student.put.poznan.pl","aria-label":"Email me",className:"footer-link",children:"Student email"})})]})]})]})]}),dt.jsxs("div",{className:"footer-bottom",children:[dt.jsx("p",{children:"© 2026"}),dt.jsxs("div",{className:"social-icons",children:[dt.jsx("a",{href:"https://instagram.com","aria-label":"Instagram",target:"_blank",rel:"noopener noreferrer",children:dt.jsx("img",{src:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/instagram.svg",alt:"Instagram"})}),dt.jsx("a",{href:"https://linkedin.com","aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:dt.jsx("img",{src:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/facebook.svg",alt:"LinkedIn"})}),dt.jsx("a",{href:"https://facebook.com","aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:dt.jsx("img",{src:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/strava.svg",alt:"Facebook"})}),dt.jsx("a",{href:"https://github.com","aria-label":"GitHub",target:"_blank",rel:"noopener noreferrer",children:dt.jsx("img",{src:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/komoot.svg",alt:"GitHub"})}),dt.jsx("a",{href:"https://dribbble.com","aria-label":"Dribbble",target:"_blank",rel:"noopener noreferrer",children:dt.jsx("img",{src:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/github.svg",alt:"Dribbble"})})]})]})]})}function g2(){const o=[{label:"O MNIE",ariaLabel:"Go to home page",link:"/APR/#about"},{label:"PORTFOLIO",ariaLabel:"Learn about us",link:"/APR/#portfolio"},{label:"KONTAKT",ariaLabel:"View our trips",link:"/APR/#contact"},{label:"__________"},{label:"509 964 289",ariaLabel:"Call me",link:"tel:+48509947289"},{label:"534 498 293",ariaLabel:"Call me",link:"tel:+48534498293"},{label:"Priv. email",ariaLabel:"Email me",link:"mailto:pafko.roki@gmail.com"},{label:"Stud. email",ariaLabel:"Email me",link:"mailto:pawel.rokicki@student.put.poznan.pl"}],t=[{label:"Facebook",link:"https://pl-pl.facebook.com/Pafkoroki"},{label:"Instagram",link:"https://www.instagram.com/pafkoroki"},{label:"Strava",link:"https://www.strava.com/athletes/34214799"},{label:"GitHub",link:"https://github.com/RestDayBlamage"}],[n,a]=se.useState(null);return dt.jsxs(dt.Fragment,{children:[dt.jsxs("div",{className:"App",children:[dt.jsx("header",{className:"header",children:dt.jsx(m2,{position:"right",items:o,socialItems:t,displaySocials:!0,displayItemNumbering:!0,menuButtonColor:"#1F2026",openMenuButtonColor:"#1F2026",changeMenuColorOnOpen:!0,colors:["#E8EBF7","#E8EBF7","#E8EBF7"],logoUrl:"https://raw.githubusercontent.com/RestDayBlamage/APR/main/public/Logo.png",accentColor:"#8AA0FF",onMenuOpen:()=>console.log("Menu opened"),onMenuClose:()=>console.log("Menu closed")})}),dt.jsx("div",{className:"background-title",children:dt.jsx(p2,{colors:["#E8EBF7","#E8EBF7","#E8EBF7"],rotation:30,speed:.5,scale:1.2,frequency:1.4,warpStrength:1.2,mouseInfluence:1.8,parallax:.6,noise:.08,transparent:!0})}),dt.jsx("section",{className:"hero-section",children:dt.jsx(ab,{})}),dt.jsx("section",{className:"section",id:"portfolio",children:dt.jsx("div",{children:dt.jsx(ib,{})})}),dt.jsxs("section",{className:"section",id:"about",children:[dt.jsx("h1",{children:"PAWEŁ ROKICKI"}),dt.jsx("p",{children:"Do czego tego użyć? Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne wstawki itd)."})]})]}),dt.jsx("footer",{className:"footer",id:"contact",children:dt.jsx(_2,{})})]})}VE.createRoot(document.getElementById("root")).render(dt.jsx(se.StrictMode,{children:dt.jsx(g2,{})}));
