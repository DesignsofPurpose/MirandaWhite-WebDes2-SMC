(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[26],{"/X16":function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r={USER_FOLLOW:"USER_FOLLOW"},i={USER_BLOCK:"USER_BLOCK"}},"078/":function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a}));const r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],i=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","STLProductsFeed","RelatedProductsFeed","ShoppingSquareGridRelatedProducts","UserProfilePinGrid"],o=[...i,"ShoppingSquareGridRelatedProductsBoth","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ShoppingSquareGridRelatedProductsMetadata","ProductPinsFeed","ShoppingSquareGridCrop","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],a=["BaseBoardPinGrid"]},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},BcL7:function(e,t,n){var r=n("La7j"),i=n("xBNU"),o=n.n(i);const a={getInstance(){const e=o.a.experiments;return new r.a(e.active,e.triggerable)}};t.a=a},EDqd:function(e,t,n){n.d(t,"a",(function(){return a}));const r=["236x","474x","564x","736x"];function i(e){function t(e,{imageKey:t,height:n,width:r}){return e.images&&e.images[t]&&(e={...e,images:{...e.images,[t]:{...e.images[t],height:n,width:r}}}),e}const n=r.map((function(t){const n=Math.min(...e.map(e=>e.images&&e.images[t]&&e.images[t].height||1/0)),r=Math.min(...e.map(e=>e.images&&e.images[t]&&e.images[t].width||1/0));return{imageKey:t,height:n,width:r}}));return e.map(e=>n.reduce(t,e))}function o(e,t){return e.concat([{images:t&&t.canonical_images,image_signature:t&&t.image_signature}])}function a(e,t,n){const r=[{images:e}];return{carousel_slots:i((t&&t.additional_images).reduce(o,r)),index:n||0,id:t.id}}},FDmi:function(e,t,n){n.d(t,"a",(function(){return a}));var r=n("n6mq"),i=n("nKUr");const o=(e,t)=>{const n=null==e?void 0:e.includes("images/user/default");return Boolean(n&&t)};function a({accessibilityLabel:e,name:t,outline:n,size:a,src:s,verified:c}){return Object(i.jsx)(r.b,{accessibilityLabel:e,name:t,outline:n,size:a,src:o(s,t)?void 0:s,verified:c})}},La7j:function(e,t,n){t.a=n("kugi").default},SLVX:function(e,t,n){function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},"T+9/":function(e,t,n){var r=n("q1tI"),i=n("i8i4"),o=n("/MKj"),a=n("ZbwW"),s=n("D2p8"),c=n("U4JR");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127}};class p extends r.Component{constructor(e){super(e),u(this,"trackImpression",()=>{try{this.node=Object(i.findDOMNode)(this),this.node instanceof HTMLElement&&this.impressionsFramework.start(this.node).onExitViewport(this.logImpression).setDebugId(this.props.loggingId||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),u(this,"logImpression",e=>{const{carousel_data:t,closeupImpressionType:n,closeupNavigationType:r,componentType:i,contextLogData:o,elementType:a,impressionAuxFields:s,impressionType:u,loggingId:p,objectIdStr:l,slotIndex:m,trackCarousel:f,viewData:h,viewParameter:b,viewType:v}=this.props,y=d[u],g=y.idType,_=e.forcedExit&&"removed"===e.forcedExit?0:void 0,w={endTime:e.endTime,[g]:p,slotIndex:m,time:e.startTime,renderDuration:e.endTime-e.startTime,type:n,...s,forcedExit:_};if(f||Object(c.b)(y.eventType,{closeup_navigation_type:r,component:i,element:a,eventData:{[y.impressionType]:[w]},objectIdStr:l,view:v,viewData:h||{},viewParameter:b,...o}),t&&f){const{carousel_slots:e,index:n,id:r}=t;Object(c.b)(7352,{component:i,eventData:{pinCarouselSlotImpressions:[{...w,carouselDataId:Number(r),carouselSlotId:e[n]&&Number(e[n].id),slotIndex:n}]},objectIdStr:l,view:v,viewData:h||{},viewParameter:b,...o})}}),this.impressionsFramework=e.impressionsFramework||s.c}componentDidMount(){this.props.inImpressionExp&&!this.impressionsFramework.inExperiment&&this.impressionsFramework.setExperimentStatus(!0),this.props.isPaused||this.trackImpression()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.trackImpression()}componentWillUnmount(){this.node instanceof HTMLElement&&this.impressionsFramework.stop(this.node)}render(){return r.Children.only(this.props.children)}}t.a=Object(o.connect)((function({pins:e},{loggingId:t}){const n=e[t||""]||{};return{carousel_data:Object(a.a)(n)}}),()=>({}))(p)},TSYQ:function(e,t,n){var r;!function(){var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},U4JR:function(e,t,n){n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n("m2Wt"),i=n("h4v/"),o=n("ajUs"),a=n("zpPL");const s=()=>a.a.instance.getState(),c=()=>{const{advertiser:e,adminUser:t,viewer:n}=s(),r={};return e&&e.id&&(r.advertiser_id=e.id),t&&n&&n.username&&(r.sterling_on_steroids_ldap=t,r.viewed_user=n.username),r},u=(e,{element:t,eventData:n,component:i,objectId:a,view:u,viewParameter:d,viewData:p,durationNs:l,pairId:m,clientTrackingParams:f,...h})=>{const b=r.a.fromEventType(e);return b.setElement(t),b.updateEventData(n),b.setComponent(i),a&&b.setObjectIdStr(a),b.setDurationNs(l),b.updateAuxData({...h,...c()}),b.setViewType(u),b.setViewParameter(d),b.setViewData(p),b.setPairId(m),b.setClientTrackingParams(f||(e=>{const{pins:t,location:n}=s(),r=t&&e&&t[e];return r?Object(o.a)(r,n)||r.tracking_params+"~0":void 0})(a)),b};function d(e,t={}){i.a.getInstance().addEvent(u(e,t))}const p={flushContextEvents:()=>i.a.getInstance().flushEvents(!0),logContextEvent:({aux_data:e,clientTrackingParams:t,component:n,duration_ns:r,element:i,event_data:o,event_type:a,object_id_str:s,pair_id:c,view_data:u,view_parameter:p,view_type:l})=>{d(a,{...e,element:i,eventData:o,component:n,objectId:s,view:l,viewParameter:null!=p?p:void 0,viewData:u,durationNs:r,pairId:c,clientTrackingParams:t})}}},VH7y:function(e,t,n){e.exports=n("bY5B")()},Wer7:function(e,t,n){function r(e,t={}){return{type:"RESOURCE_INVALIDATE",payload:{name:e,options:t}}}function i(e,t={},n={}){return{type:"RESOURCE_FETCH",payload:{name:e,options:t,headers:n}}}function o(e,t={},n={},r={}){return{type:"RESOURCE_PREFETCH",payload:{name:e,options:t,headers:r}}}function a(e,t={}){return{type:"RESOURCE_PREFETCH_READ",payload:{name:e,options:t}}}function s(e,t={},n={}){return{type:"RESOURCE_FETCH_MORE",payload:{name:e,options:t,headers:n}}}function c(e,t={}){return{type:"RESOURCE_FETCH_CREATE",payload:{name:e,options:t}}}function u(e,t={},n,r,i,o,a=!1){return{type:"RESOURCE_FETCH_COMPLETE",payload:{auxData:r,data:n,isPrefetch:a,name:e,nextBookmark:o,options:t},error:i}}function d(e,t={},n,r,i,o){return{type:"RESOURCE_FETCH_MORE_COMPLETE",payload:{auxData:r,data:n,name:e,nextBookmark:o,options:t},error:i}}n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return d}))},WgLT:function(e,t,n){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},Y8Sn:function(e,t,n){n.d(t,"j",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return l})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n("BcL7");const i=e=>!!e&&!!e.video_list,o=({story_pin_data_id:e})=>!!e,a=e=>{var t;return e.rich_summary&&e.rich_summary.products&&e.rich_summary.products.length>0||(null===(t=e.rich_metadata)||void 0===t?void 0:t.products)&&e.rich_metadata.products.length>0||!1},s=e=>!!e.promoter&&!e.is_downstream_promotion,c=e=>!!e.video_status&&5!==e.video_status,u=e=>!!e.creator_class,d=()=>["employees","enabled"].includes(r.a.getInstance().v2ActivateExperiment("unification_web_pin_click")),p=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:r}=t,i={...n,...r};return!!i[e]&&!i[e].paused},l=e=>["email","messages","deep_linking"].includes(e),m=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:r}=t,i={...n,...r};for(const o in i){const{paused:t}=i[o];if(o!==e&&!t)return!1}return!0},f=(e,t)=>{const{organicVideosAutoplaying:n,promotedVideosAutoplaying:r}=t,i={...n,...r};return i[e]&&i[e].currentTime},h=()=>{let e=800,t=400;return"undefined"!=typeof window&&(e=window.innerHeight,t=window.innerWidth),{windowHeight:e,windowWidth:t}}},"Ye/N":function(e,t,n){Error;const r={_:e=>(process&&process.env,e),set(e){Object.assign(this,e)}};t.a=r},ZbwW:function(e,t,n){n.d(t,"a",(function(){return i}));var r=n("EDqd");function i(e){const t=(((e||{}).rich_metadata||{}).products||[])[0]||{};return t&&t.additional_images&&t.additional_images.length>0?Object(r.a)(e.images,t,e.carousel_data&&e.carousel_data.index):e&&e.carousel_data}},a9a9:function(e,t,n){n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n("zpPL");const i=e=>r.a.instance.dispatch(function(e){return{type:"SPAMMY_CLICKTHROUGH_WARNING_SHOW",payload:e}}(e)),o=()=>r.a.instance.dispatch({type:"SPAMMY_CLICKTHROUGH_WARNING_DISMISS"})},"aK+E":function(e,t,n){n.d(t,"a",(function(){return o}));const r=new Set(["bookmarks","client_tracking_params","in_nux","invite_code","no_fetch_context_on_resource","original_referrer","source","top_level_source","top_level_source_depth"]),i=e=>!r.has(e)&&!e.startsWith("__track__"),o=e=>e?Object.keys("object"==typeof e&&e||{}).filter(e=>"string"==typeof e).filter(i).sort().map(t=>`${t}=${JSON.stringify(null==e[t]?null:e[t])}`).join(","):""},bCCX:function(e,t,n){(function(e,r){var i,o=n("SLVX");i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(o.a)(i);t.a=a}).call(this,n("yLpj"),n("3UD+")(e))},bY5B:function(e,t,n){var r=n("WgLT");function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},hZxF:function(e,t,n){var r=n("q1tI");t.a=e=>{Object(r.useEffect)(e,[])}},kugi:function(e,t,n){n.r(t),n.d(t,"default",(function(){return a}));var r=n("zir5"),i=n("4xvr"),o=n("eOdZ");class a extends r.a{v2ActivateExperiment(e){return this._getGroupForExperiment(e,!0)}flush(){this._queuedResource&&this._queuedResource.flush()}v2LogExperimentGroupOverride(e,t){this._reportExperimentActivated(e,!1,t,t)}_getGroupForExperiment(e,t,n){void 0===t&&(t=!0);let r=this.active[e];return void 0===r&&t&&(r=this.triggerable[e],void 0!==r&&(this.active[e]=r,this._reportExperimentActivated(e,n,r))),r||null}_reportExperimentActivated(e,t,n,r){const a={add_to_experiment:!!t,experiment_name:e};if(r&&(a.override_group=r),n&&(a.experiment_group=n),this.useBatching)this._queuedResource||(this._queuedResource=new i.b("ActivateExperimentResource",e=>({experiments:e}))),this._queuedResource.enqueue(a);else{o.a.create("ActivateExperimentResource",a).callCreate({showError:!1})}}}},nRAE:function(e,t,n){n.d(t,"a",(function(){return d}));var r=n("q1tI"),i=n("Ye/N"),o=n("EC51"),a=n("kmwA"),s=n("n6mq"),c=n("nKUr");const u={xs:12,sm:16,md:20,lg:24};function d({hasVerifiedIdentity:e,iconOnly:t,isVerifiedMerchant:n,showText:d,size:p}){const l=Object(c.jsxs)(s.e,{alignItems:"center",display:"flex",children:[Object(c.jsx)(s.u,{accessibilityLabel:i.a._("Merchant verification badge icon","merchantVerification.badge.icon","Badge indicating that a merchant or user is verified"),color:"blue",icon:"workflow-status-ok",inline:!0,size:u[p]}),d&&Object(c.jsx)(s.e,{marginStart:2,children:Object(c.jsx)(s.Y,{color:"blue",inline:!0,weight:"bold",children:i.a._("Verified merchant","creator.header.verifiedMerchant","this merchant is a verified merchant")})})]});return Object(c.jsxs)(r.Fragment,{children:[n&&!t&&Object(c.jsx)(s.cb,{link:Object(c.jsx)(o.a,{href:a.a.settings.HELP_SHOPPING_WITH_PINTEREST,target:"blank",children:Object(c.jsx)(s.Y,{color:"white",size:"sm",weight:"bold",children:i.a._("Learn more","verifiedBadge.tooltip.link","Learn more about Pinterest's Merchant Guidelines")})}),text:i.a._("This retailer meets Pinterest's Merchant Guidelines","merchantVerification.badge.tooltip","Badge indicating that a merchant or user is verified"),children:l}),n&&t&&l,e&&!n&&Object(c.jsx)(s.u,{accessibilityLabel:i.a._("Domain verification icon","domainVerification.badge.icon","Badge indicating that a merchant or user is verified"),color:"red",icon:"check-circle",size:u[p]})]})}},pLLR:function(e,t,n){n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return d}));var r=n("q1tI"),i=n("nKUr");const o=Object(r.createContext)(),a=o.Provider;function s(e){function t(t){const n=Object(r.useContext)(o);if(!n)throw new Error("withRequestContext must be used within a RequestContextProvider");return Object(i.jsx)(e,{...t,requestContext:n})}return t.displayName=`withRequestContext(${String(e.displayName||e.name)})`,t}const c=({children:e})=>{const t=Object(r.useContext)(o);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t)},u=({children:e})=>{const t=Object(r.useContext)(o);if(!t)throw new Error("RequestContextConsumer must be used within a RequestContextProvider");return e(t)};function d(){const e=Object(r.useContext)(o);if(!e)throw new Error("useRequestContext must be used within a RequestContextProvider");return e}},qD10:function(e,t,n){var r=n("q1tI"),i=n("/MKj"),o=n("zwad"),a=n("ANjH"),s=n("Y8Sn"),c=n("z19Z"),u=n("EC67"),d=n("nKUr");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class l extends r.Component{constructor(...e){super(...e),p(this,"state",{spamCheck:null}),p(this,"spamCheckExperimentGroup",null),p(this,"mounted",!1),p(this,"handleSpammyDomainCheck",()=>{const{external:e,location:t,pinId:n,pin:r,surface:i,to:a}=this.props;(e||o.a.isOffsiteUrl(a))&&r&&!Object(s.g)(r)&&Object(c.f)({location:t,pinId:n,surface:i})&&a&&Object(c.a)({isMounted:this.mounted,pin:r,location:t,spamCheckCallback:e=>this.setState({spamCheck:e}),href:a})}),p(this,"handleClick",e=>{const{auxData:t,external:n,focusOnBody:r,forceOnClick:i,history:a,internalNewTab:s,location:u,onClick:d,pin:p,pinId:l,shouldShowAltLinks:m,stopPropagation:f,to:h}=this.props;f&&e.stopPropagation();const b=n||o.a.isOffsiteUrl(h);Object(c.b)({isExternalLink:b,event:e,forceOnClick:i})||(e.nativeEvent.preventDefault(),d&&d(e),h&&!m&&(b?Object(c.c)({href:h,pinId:l,pin:p,location:u,auxData:t,spamCheck:this.state.spamCheck}):Object(c.d)({event:e,onHistoryChange:()=>{r&&Object(c.e)()},href:h,history:a,target:s?"blank":null})))})}componentDidMount(){this.mounted=!0,this.handleSpammyDomainCheck()}componentWillUnmount(){this.mounted=!1}componentDidUpdate(){null===this.state.spamCheck&&this.handleSpammyDomainCheck()}render(){const{accessibilityLabel:e,children:t,className:n,"data-test-id":r,external:i,noFollow:o,setAnchorRef:a,style:s,tabIndex:c,target:u,to:p}=this.props;return Object(d.jsx)("a",{"aria-label":e,className:n,"data-test-id":r,href:p,onClick:this.handleClick,ref:a,rel:i||o?"nofollow":"",style:s,tabIndex:c,target:u?"_blank":null,children:t})}}t.a=Object(a.compose)(Object(i.connect)((function({pins:e},{pinId:t}){return{pin:t&&e&&e[t]}}),()=>({})),u.l)(l)},"v/Q4":function(e,t,n){n.d(t,"a",(function(){return i}));var r=n("/MKj");function i(){return Object(r.useSelector)(({viewer:e})=>e)}},w70y:function(e,t,n){n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var r=n("q1tI"),i=n("/MKj"),o=n("lSCD"),a=n.n(o),s=n("hZxF"),c=n("aK+E"),u=n("EC67"),d=n("Wer7"),p=n("nKUr");const l={};function m({acceptPrefetch:e,allowStale:t,enabledRouteRefresh:n,dangerouslyDisableFetch:o,options:a,name:p,headers:m}){const f=Object(i.useDispatch)(),h=Object(c.a)(a),b=Object(r.useRef)(),v=e=>(e[p]||l)[h]||l,{isPrefetch:y,nextBookmark:g,prefetchHasBeenRead:_}=Object(i.useSelector)(({resources:e})=>v(e.data)),w=Object(i.useSelector)(({resources:e})=>v(e.data).data),O=Object(i.useSelector)(({resources:e})=>v(e.data).auxData),x=Object(i.useSelector)(({resources:e})=>v(e.data).error),E=Object(i.useSelector)(({resources:e})=>Boolean((e.fetching[p]||l)[h])),j=Object(i.useSelector)(({resources:e})=>Boolean((e.data[p]||l)[h])),C=Object(u.h)(),T=C&&"POP"!==C.action,S=Boolean(j&&n&&T&&!o),[k,I]=Object(r.useState)(S);void 0===b.current&&j&&T&&e&&y&&!_&&!o&&f(Object(d.h)(p,a));const R=Object(r.useCallback)(()=>{o||f(Object(d.a)(p,a,m))},[o,f,m,p,h]),P=Object(r.useCallback)(()=>{o||f(Object(d.d)(p,a,m))},[o,m,p,h]),D=Object(r.useCallback)(()=>{o||(R(),I(!0))},[o,R,I]),L=Object(r.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:P,isAtEnd:!1,isFetching:!1,isLoaded:!1,isPrefetch:void 0,isRefreshing:!1,nextBookmark:void 0,prefetchHasBeenRead:void 0,refreshData:D});Object(s.a)(()=>{!1!==t&&j&&!S||R()}),Object(r.useEffect)(()=>{void 0!==b.current&&h!==b.current&&R(),b.current=h},[R,h]);const A={auxData:O,data:w,error:x,fetchMore:P,isAtEnd:j&&!E&&"-end-"===g,isFetching:E,isLoaded:j,isPrefetch:y,isRefreshing:k,nextBookmark:g,prefetchHasBeenRead:_,refreshData:D};return Object(i.shallowEqual)(A,L.current)||(!k||!L.current.data&&S||Object(i.shallowEqual)(A.data,L.current.data)||(A.isRefreshing=!1,I(!1)),L.current=A),L.current}function f(e){const t=e.key;return function(n){function r(r){const{dangerouslyDisableFetch:i,options:o,key:s,...c}=e,u=m({...c,options:(a()(o)?o(r):o)||{},dangerouslyDisableFetch:!!i&&i(r)}),d={[t]:u};return Object(p.jsx)(n,{...r,...d})}return r.displayName=`withResource[${e.name}](${n.displayName||n.name||""})`,r.WrappedComponent=n,r}}},z19Z:function(e,t,n){n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return v}));var r=n("TPPM"),i=n("ajUs"),o=n("eOdZ"),a=n("gxu6"),s=n("T0g9");var c={open(e,t,n,i,o){const c=Math.round(1e3*Math.random())+"",u=Math.round(1e3*Math.random())+"";a.b("offsite_"+c,u);const d={token:c+"-"+u,url:e,csr:void 0,pin:void 0,client_tracking_params:i,aux_data:o?JSON.stringify(o):void 0};t?d.pin=t:n&&(d.csr=n),Object(r.a)("/offsite/?"+Object(s.a)(d),!0)}};var u=n("zwad"),d=n("a9a9"),p=n("078/");const l=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},m=({isExternalLink:e,event:t,forceOnClick:n})=>!e&&(t.metaKey||t.ctrlKey)&&!n,f=({location:e,pinId:t="",surface:n})=>{const r=Boolean(n),i=p.a.includes(n),o=e.pathname.includes(t||"");return!!(r&&!i||o)},h=async({isMounted:e,pin:t,location:n,spamCheckCallback:r,href:a})=>{const s=o.a.create("OffsiteLinkResource",{check_only:!0,client_tracking_params:Object(i.a)(t,n),pin_id:null==t?void 0:t.id,url:a}),c=await s.callGet({showError:!1});if((null==c||!c.resource_response.error)&&e){const e=c.resource_response.data||{},{message:t,redirect_status:n,url:i}=e;r({blocked:["blocked","suspicious","porn"].includes(n),message:t,redirectStatus:n,sanitized_url:i})}},b=({event:e,onHistoryChange:t,href:n,history:i,target:o})=>{const a=u.a.getUrlClass(n);a===u.a.UrlClass.TRUSTED_DIFFERENT_ORIGIN||"blank"===o?Object(r.a)(n,"blank"===o):i&&a===u.a.UrlClass.SAME_ORIGIN&&(i.push(u.a.normalizeUrl(n)),t&&t({event:e}))},v=({href:e,pinId:t,pin:n,location:r,auxData:a,spamCheck:s})=>{"undefined"!=typeof window&&window.Windows?function({url:e,pinId:t,pin:n,location:r,auxData:a}){const s={check_only:!0,client_tracking_params:n?Object(i.a)(n,r):void 0,pin_id:n?n.id:t,url:e,aux_data:JSON.stringify(a)};o.a.create("OffsiteLinkResource",s).callGet().then(o=>{if(o&&o.resource_response&&!o.resource_response.error){const{resource_response:e}=o,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(n){const o=Object(i.a)(n,r);c.open(e,t,null,o,a)}else c.open(e,t)})}({url:e,pinId:t,pin:n,location:r,auxData:a}):n?(({spamCheck:e,auxData:t,location:n,pin:r,pinId:o,href:a})=>{null!=e&&e.blocked?Object(d.b)(e):c.open(a,o,null,Object(i.a)(r,n),t)})({spamCheck:s,auxData:a,location:r,pin:n,pinId:t,href:e}):c.open(e,t)}},zir5:function(e,t,n){n.d(t,"a",(function(){return i}));const r=e=>e.startsWith("enabled")||e.startsWith("employee");class i{constructor(e={},t={},n=!1){var r,i,o;o=!1,(i="useBatching")in(r=this)?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,this.active=e,this.triggerable=t,this.useBatching=n}flush(){}v2GetGroup(e){let t=this.active[e];return void 0===t&&(t=this.triggerable[e]),t||null}v2InGroup(e,t){const n=this.v2GetGroup(e);return"string"==typeof t&&(t=[t]),!!n&&-1!==t.indexOf(n)}v2ActivateExperiment(e){throw new Error("Method must be implemented by subclass.")}v2LogExperimentGroupOverride(e,t){throw new Error("Method must be implemented by subclass.")}getWithActivation(e){const t=this.v2ActivateExperiment(e)||"";return{anyEnabled:r(t),group:t}}getWithoutActivation(e){const t=this.v2GetGroup(e)||"";return{anyEnabled:r(t),group:t}}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/26-fde39430afa3fa88ca12.mjs.map