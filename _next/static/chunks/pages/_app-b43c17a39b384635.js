(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1043:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(6030)}])},6030:function(e,n,t){"use strict";t.r(n);var r=t(8961),i=t(1527),u=(t(4388),t(6747)),o={fetcher:function(e){return fetch("https://book-exchange-mock.azurewebsites.net/api/v1"+e).then((function(e){return e.json()}))},revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,revalidateFirstPage:!1};n.default=function(e){var n=e.Component,t=e.pageProps;return(0,i.jsx)(u.J$,{value:o,children:(0,i.jsx)(n,(0,r.Z)({},t))})}},4388:function(){},8961:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){r(e,n,t[n])}))}return e}t.d(n,{Z:function(){return i}})},6747:function(e,n,t){"use strict";t.d(n,{J$:function(){return K},ZP:function(){return Q}});var r=t(959);function i(e,n,t,r){return new(t||(t=Promise))((function(i,u){function o(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}c((r=r.apply(e,n||[])).next())}))}function u(e,n){var t,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(a){u=[6,a],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var o,a=function(){},c=a(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return f.assign({},e,n)},v="undefined",h=function(){return typeof window!=v},p=new WeakMap,g=0,b=function(e){var n,t,r=typeof e,i=e&&e.constructor,u=i==Date;if(f(e)!==e||u||i==RegExp)n=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=p.get(e))return n;if(n=++g+"~",p.set(e,n),i==Array){for(n="@",t=0;t<e.length;t++)n+=b(e[t])+",";p.set(e,n)}if(i==f){n="#";for(var o=f.keys(e).sort();!s(t=o.pop());)s(e[t])||(n+=t+":"+b(e[t])+",");p.set(e,n)}}return n},y=!0,w=h(),m=typeof document!=v,O=w&&window.addEventListener?window.addEventListener.bind(window):a,E=m?document.addEventListener.bind(document):a,k=w&&window.removeEventListener?window.removeEventListener.bind(window):a,R=m?document.removeEventListener.bind(document):a,S={isOnline:function(){return y},isVisible:function(){var e=m&&document.visibilityState;return s(e)||"hidden"!==e}},T={initFocus:function(e){return E("visibilitychange",e),O("focus",e),function(){R("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},t=function(){y=!1};return O("online",n),O("offline",t),function(){k("online",n),k("offline",t)}}},P=!h()||"Deno"in window,C=function(e){return h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},V=P?r.useEffect:r.useLayoutEffect,x="undefined"!==typeof navigator&&navigator.connection,_=!P&&x&&(["slow-2g","2g"].includes(x.effectiveType)||x.saveData),D=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",n,e?"$swr$"+e:""]},I=new WeakMap,j=function(e,n,t,r,i,u,o){void 0===o&&(o=!0);var a=I.get(e),c=a[0],f=a[1],s=a[3],l=c[n],d=f[n];if(o&&d)for(var v=0;v<d.length;++v)d[v](t,r,i);return u&&(delete s[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},L=0,F=function(){return++L},N=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(void 0,void 0,void 0,(function(){var n,t,r,i,o,a,f,v,h,p,g,b,y,w,m,O,E,k,R,S,T;return u(this,(function(u){switch(u.label){case 0:if(n=e[0],t=e[1],r=e[2],i=e[3],a=!!s((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,f=!1!==o.revalidate,v=!1!==o.rollbackOnError,h=o.optimisticData,p=D(t),g=p[0],b=p[2],!g)return[2];if(y=I.get(n),w=y[2],e.length<3)return[2,j(n,g,n.get(g),c,c,f,!0)];if(m=r,E=F(),w[g]=[E,0],k=!s(h),R=n.get(g),k&&(S=l(h)?h(R):h,n.set(g,S),j(n,g,S)),l(m))try{m=m(n.get(g))}catch(P){O=P}return m&&l(m.then)?[4,m.catch((function(e){O=e}))]:[3,2];case 1:if(m=u.sent(),E!==w[g][0]){if(O)throw O;return[2,m]}O&&k&&v&&(a=!0,m=R,n.set(g,R)),u.label=2;case 2:return a&&(O||(l(a)&&(m=a(m,R)),n.set(g,m)),n.set(b,d(n.get(b),{error:O}))),w[g][1]=F(),[4,j(n,g,m,O,c,f,!!a)];case 3:if(T=u.sent(),O)throw O;return[2,a?T:m]}}))}))},A=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},M=function(e,n){if(!I.has(e)){var t=d(T,n),r={},i=N.bind(c,e),u=a;if(I.set(e,[r,{},{},{},i]),!P){var o=t.initFocus(setTimeout.bind(c,A.bind(c,r,0))),f=t.initReconnect(setTimeout.bind(c,A.bind(c,r,1)));u=function(){o&&o(),f&&f(),I.delete(e)}}return[e,i,u]}return[e,I.get(e)[4]]},J=M(new Map),W=J[0],$=J[1],Z=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,i){var u=t.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*t.errorRetryInterval;!s(u)&&o>u||setTimeout(r,a,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:_?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:_?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:W,mutate:$,fallback:{}},S),q=function(e,n){var t=d(e,n);if(n){var r=e.use,i=e.fallback,u=n.use,o=n.fallback;r&&u&&(t.use=r.concat(u)),i&&o&&(t.fallback=d(i,o))}return t},X=(0,r.createContext)({}),z=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},G=function(){return d(Z,(0,r.useContext)(X))},H=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},B={dedupe:!0},K=f.defineProperty((function(e){var n=e.value,t=q((0,r.useContext)(X),n),i=n&&n.provider,u=(0,r.useState)((function(){return i?M(i(t.cache||W),n):c}))[0];return u&&(t.cache=u[0],t.mutate=u[1]),V((function(){return u?u[2]:c}),[]),(0,r.createElement)(X.Provider,d(e,{value:t}))}),"default",{value:Z}),Q=(o=function(e,n,t){var o=t.cache,a=t.compare,f=t.fallbackData,v=t.suspense,h=t.revalidateOnMount,p=t.refreshInterval,g=t.refreshWhenHidden,b=t.refreshWhenOffline,y=I.get(o),w=y[0],m=y[1],O=y[2],E=y[3],k=D(e),R=k[0],S=k[1],T=k[2],x=(0,r.useRef)(!1),_=(0,r.useRef)(!1),L=(0,r.useRef)(R),A=(0,r.useRef)(n),M=(0,r.useRef)(t),J=function(){return M.current},W=function(){return J().isVisible()&&J().isOnline()},$=function(e){return o.set(T,d(o.get(T),e))},Z=o.get(R),q=s(f)?t.fallback[R]:f,X=s(Z)?q:Z,z=o.get(T)||{},G=z.error,K=!x.current,Q=function(){return K&&!s(h)?h:!J().isPaused()&&(v?!s(X)&&t.revalidateIfStale:s(X)||t.revalidateIfStale)},U=!(!R||!n)&&(!!z.isValidating||K&&Q()),Y=function(e,n){var t=(0,r.useState)({})[1],i=(0,r.useRef)(e),u=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,r.useCallback)((function(e){var r=!1,o=i.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return V((function(){i.current=e})),[i,u.current,o]}({data:X,error:G,isValidating:U},_),ee=Y[0],ne=Y[1],te=Y[2],re=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var n,r,i,f,d,v,h,p,g,b,y,w,m;return u(this,(function(u){switch(u.label){case 0:if(n=A.current,!R||!n||_.current||J().isPaused())return[2,!1];f=!0,d=e||{},v=!E[R]||!d.dedupe,h=function(){return!_.current&&R===L.current&&x.current},p=function(){var e=E[R];e&&e[1]===i&&delete E[R]},g={isValidating:!1},b=function(){$({isValidating:!1}),h()&&te(g)},$({isValidating:!0}),te({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),v&&(j(o,R,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!o.get(R)&&setTimeout((function(){f&&h()&&J().onLoadingSlow(R,t)}),t.loadingTimeout),E[R]=[n.apply(void 0,S),F()]),m=E[R],r=m[0],i=m[1],[4,r];case 2:return r=u.sent(),v&&setTimeout(p,t.dedupingInterval),E[R]&&E[R][1]===i?($({error:c}),g.error=c,y=O[R],!s(y)&&(i<=y[0]||i<=y[1]||0===y[1])?(b(),v&&h()&&J().onDiscarded(R),[2,!1]):(a(ee.current.data,r)?g.data=ee.current.data:g.data=r,a(o.get(R),r)||o.set(R,r),v&&h()&&J().onSuccess(r,R,t),[3,4])):(v&&h()&&J().onDiscarded(R),[2,!1]);case 3:return w=u.sent(),p(),J().isPaused()||($({error:w}),g.error=w,v&&h()&&(J().onError(w,R,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||l(t.shouldRetryOnError)&&t.shouldRetryOnError(w))&&W()&&J().onErrorRetry(w,R,t,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,b(),h()&&v&&j(o,R,g.data,g.error,!1),[2,!0]}}))}))}),[R]),ie=(0,r.useCallback)(N.bind(c,o,(function(){return L.current})),[]);if(V((function(){A.current=n,M.current=t})),V((function(){if(R){var e=R!==L.current,n=re.bind(c,B),t=0,r=H(R,m,(function(e,n,t){te(d({error:n,isValidating:t},a(ee.current.data,e)?c:{data:e}))})),i=H(R,w,(function(e){if(0==e){var r=Date.now();J().revalidateOnFocus&&r>t&&W()&&(t=r+J().focusThrottleInterval,n())}else if(1==e)J().revalidateOnReconnect&&W()&&n();else if(2==e)return re()}));return _.current=!1,L.current=R,x.current=!0,e&&te({data:X,error:G,isValidating:U}),Q()&&(s(X)||P?n():C(n)),function(){_.current=!0,r(),i()}}}),[R,re]),V((function(){var e;function n(){var n=l(p)?p(X):p;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!g&&!J().isVisible()||!b&&!J().isOnline()?n():re(B).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[p,g,b,re]),(0,r.useDebugValue)(X),v&&s(X)&&R)throw A.current=n,M.current=t,_.current=!1,s(G)?re(B):G;return{mutate:ie,get data(){return ne.data=!0,X},get error(){return ne.error=!0,G},get isValidating(){return ne.isValidating=!0,U}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=G(),r=z(e),i=r[0],u=r[1],a=r[2],c=q(t,a),f=o,s=c.use;if(s)for(var l=s.length;l-- >0;)f=s[l](f);return f(i,u||c.fetcher,c)})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1043),n(8035)}));var t=e.O();_N_E=t}]);