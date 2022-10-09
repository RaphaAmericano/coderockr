import{_ as A,d as O,n as G,i as U,e as w,t as V,f as z,g as M,h as _,s as H,k as J,l as P,S as X,m as $,o as Y,p as Z,r as m,u as ee,q as te,v as L,w as re,x as se,y as ie}from"./index.47c5d570.js";var B=function(n){A(u,n);function u(s,t){var e;return e=n.call(this)||this,e.client=s,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var r=u.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),N(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return S(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return S(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var a=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),this.updateQuery();var c=this.hasListeners();c&&k(this.currentQuery,i,this.options,a)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==i||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&this.updateStaleTimeout();var o=this.computeRefetchInterval();c&&(this.currentQuery!==i||this.options.enabled!==a.enabled||o!==this.currentRefetchInterval)&&this.updateRefetchInterval(o)},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),a=this.client.getQueryCache().build(this.client,e);return this.createResult(a,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t,e){var a=this,i={},c=function(l){a.trackedProps.includes(l)||a.trackedProps.push(l)};return Object.keys(t).forEach(function(o){Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:function(){return c(o),t[o]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),i},r.getNextResult=function(t){var e=this;return new Promise(function(a,i){var c=e.subscribe(function(o){o.isFetching||(c(),o.isError&&(t==null?void 0:t.throwOnError)?i(o.error):a(o))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(O({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},r.fetchOptimistic=function(t){var e=this,a=this.client.defaultQueryObserverOptions(t),i=this.client.getQueryCache().build(this.client,a);return i.fetch().then(function(){return e.createResult(i,a)})},r.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(G)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(U||this.currentResult.isStale||!w(this.options.staleTime))){var e=V(this.currentResult.dataUpdatedAt,this.options.staleTime),a=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},a)}},r.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},r.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(U||this.options.enabled===!1||!w(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||z.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(t,e){var a=this.currentQuery,i=this.options,c=this.currentResult,o=this.currentResultState,l=this.currentResultOptions,d=t!==a,f=d?t.state:this.currentQueryInitialState,y=d?this.currentResult:this.previousQueryResult,h=t.state,g=h.dataUpdatedAt,I=h.error,C=h.errorUpdatedAt,Q=h.isFetching,v=h.status,T=!1,F=!1,p;if(e.optimisticResults){var x=this.hasListeners(),j=!x&&N(t,e),K=x&&k(t,a,e,i);(j||K)&&(Q=!0,g||(v="loading"))}if(e.keepPreviousData&&!h.dataUpdateCount&&(y==null?void 0:y.isSuccess)&&v!=="error")p=y.data,g=y.dataUpdatedAt,v=y.status,T=!0;else if(e.select&&typeof h.data<"u")if(c&&h.data===(o==null?void 0:o.data)&&e.select===this.selectFn)p=this.selectResult;else try{this.selectFn=e.select,p=e.select(h.data),e.structuralSharing!==!1&&(p=M(c==null?void 0:c.data,p)),this.selectResult=p,this.selectError=null}catch(b){_().error(b),this.selectError=b}else p=h.data;if(typeof e.placeholderData<"u"&&typeof p>"u"&&(v==="loading"||v==="idle")){var R;if((c==null?void 0:c.isPlaceholderData)&&e.placeholderData===(l==null?void 0:l.placeholderData))R=c.data;else if(R=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof R<"u")try{R=e.select(R),e.structuralSharing!==!1&&(R=M(c==null?void 0:c.data,R)),this.selectError=null}catch(b){_().error(b),this.selectError=b}typeof R<"u"&&(v="success",p=R,F=!0)}this.selectError&&(I=this.selectError,p=this.selectResult,C=Date.now(),v="error");var W={status:v,isLoading:v==="loading",isSuccess:v==="success",isError:v==="error",isIdle:v==="idle",data:p,dataUpdatedAt:g,error:I,errorUpdatedAt:C,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>f.dataUpdateCount||h.errorUpdateCount>f.errorUpdateCount,isFetching:Q,isRefetching:Q&&v!=="loading",isLoadingError:v==="error"&&h.dataUpdatedAt===0,isPlaceholderData:F,isPreviousData:T,isRefetchError:v==="error"&&h.dataUpdatedAt!==0,isStale:E(t,e),refetch:this.refetch,remove:this.remove};return W},r.shouldNotifyListeners=function(t,e){if(!e)return!0;var a=this.options,i=a.notifyOnChangeProps,c=a.notifyOnChangePropsExclusions;if(!i&&!c||i==="tracked"&&!this.trackedProps.length)return!0;var o=i==="tracked"?this.trackedProps:i;return Object.keys(t).some(function(l){var d=l,f=t[d]!==e[d],y=o==null?void 0:o.some(function(g){return g===l}),h=c==null?void 0:c.some(function(g){return g===l});return f&&!h&&(!o||y)})},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!H(this.currentResult,e)){var a={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(a.listeners=!0),this.notify(O({},a,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!J(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;P.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(a){a(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},u}(X);function ne(n,u){return u.enabled!==!1&&!n.state.dataUpdatedAt&&!(n.state.status==="error"&&u.retryOnMount===!1)}function N(n,u){return ne(n,u)||n.state.dataUpdatedAt>0&&S(n,u,u.refetchOnMount)}function S(n,u,r){if(u.enabled!==!1){var s=typeof r=="function"?r(n):r;return s==="always"||s!==!1&&E(n,u)}return!1}function k(n,u,r,s){return r.enabled!==!1&&(n!==u||s.enabled===!1)&&(!r.suspense||n.state.status!=="error")&&E(n,r)}function E(n,u){return n.isStaleByTime(u.staleTime)}var ue=function(n){A(u,n);function u(s,t){return n.call(this,s,t)||this}var r=u.prototype;return r.bindMethods=function(){n.prototype.bindMethods.call(this),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)},r.setOptions=function(t,e){n.prototype.setOptions.call(this,O({},t,{behavior:$()}),e)},r.getOptimisticResult=function(t){return t.behavior=$(),n.prototype.getOptimisticResult.call(this,t)},r.fetchNextPage=function(t){var e;return this.fetch({cancelRefetch:(e=t==null?void 0:t.cancelRefetch)!=null?e:!0,throwOnError:t==null?void 0:t.throwOnError,meta:{fetchMore:{direction:"forward",pageParam:t==null?void 0:t.pageParam}}})},r.fetchPreviousPage=function(t){var e;return this.fetch({cancelRefetch:(e=t==null?void 0:t.cancelRefetch)!=null?e:!0,throwOnError:t==null?void 0:t.throwOnError,meta:{fetchMore:{direction:"backward",pageParam:t==null?void 0:t.pageParam}}})},r.createResult=function(t,e){var a,i,c,o,l,d,f=t.state,y=n.prototype.createResult.call(this,t,e);return O({},y,{fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Y(e,(a=f.data)==null?void 0:a.pages),hasPreviousPage:Z(e,(i=f.data)==null?void 0:i.pages),isFetchingNextPage:f.isFetching&&((c=f.fetchMeta)==null||(o=c.fetchMore)==null?void 0:o.direction)==="forward",isFetchingPreviousPage:f.isFetching&&((l=f.fetchMeta)==null||(d=l.fetchMore)==null?void 0:d.direction)==="backward"})},u}(B);function ae(){var n=!1;return{clearReset:function(){n=!1},reset:function(){n=!0},isReset:function(){return n}}}var oe=m.createContext(ae()),ce=function(){return m.useContext(oe)};function D(n,u){var r=m.useRef(!1),s=m.useState(0),t=s[1],e=ee(),a=ce(),i=e.defaultQueryObserverOptions(n);i.optimisticResults=!0,i.onError&&(i.onError=P.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=P.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=P.batchCalls(i.onSettled)),i.suspense&&(typeof i.staleTime!="number"&&(i.staleTime=1e3),i.cacheTime===0&&(i.cacheTime=1)),(i.suspense||i.useErrorBoundary)&&(a.isReset()||(i.retryOnMount=!1));var c=m.useState(function(){return new u(e,i)}),o=c[0],l=o.getOptimisticResult(i);if(m.useEffect(function(){r.current=!0,a.clearReset();var d=o.subscribe(P.batchCalls(function(){r.current&&t(function(f){return f+1})}));return o.updateResult(),function(){r.current=!1,d()}},[a,o]),m.useEffect(function(){o.setOptions(i,{listeners:!1})},[i,o]),i.suspense&&l.isLoading)throw o.fetchOptimistic(i).then(function(d){var f=d.data;i.onSuccess==null||i.onSuccess(f),i.onSettled==null||i.onSettled(f,null)}).catch(function(d){a.clearReset(),i.onError==null||i.onError(d),i.onSettled==null||i.onSettled(void 0,d)});if(l.isError&&!a.isReset()&&!l.isFetching&&te(i.suspense,i.useErrorBoundary,[l.error,o.getCurrentQuery()]))throw l.error;return i.notifyOnChangeProps==="tracked"&&(l=o.trackResult(l,i)),l}function le(n,u,r){var s=L(n,u,r);return D(s,B)}function he(n,u,r){var s=L(n,u,r);return D(s,ue)}async function q(n){const{limit:u,page:r}=n,s=u&&r?`?_page=${r}&_limit=${u}`:!u&&r?`?_page=${r}`:u&&!r?`?_limit=${u}`:"";return re.get(`/articles${s}`)}async function fe(n){return se.post("/post",{...n})}function ve(n){async function u(){return q(n)}return le(["get-posts",n],u,{enabled:Boolean(n),staleTime:4e3,select:s=>s.map(t=>({...t,date:new Date(t.date)}))})}function pe(n){async function u(){return q(n)}return he(["get-posts-infinity",n],u,{getNextPageParam:(s,t)=>s,getPreviousPageParam:(s,t)=>s})}function ye(){return ie(fe)}export{ve as a,ye as b,pe as u};
