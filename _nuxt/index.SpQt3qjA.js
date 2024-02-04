import{_ as q}from"./headBar.lNHTeoHl.js";import{n as O,r as B,q as $,s as T,c as _,o as y,a as t,d as k,b,w as g,t as C,u as w,F as I,v as M,x as R,_ as S,y as E,p as U,e as P}from"./entry.5geZ8rQB.js";import{_ as N}from"./nuxt-link.nqTaRQ3J.js";const W=Symbol.for("nuxt:client-only"),z=O({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(d,{slots:l,attrs:f}){const n=B(!1);return $(()=>{n.value=!0}),T(W,!0),s=>{var h;if(n.value)return(h=l.default)==null?void 0:h.call(l);const r=l.fallback||l.placeholder;if(r)return r();const m=s.fallback||s.placeholder||"",i=s.fallbackTag||s.placeholderTag||"span";return _(i,f,m)}}}),F=()=>Math.floor(Math.random()*100)+"%",G=(d,l)=>Math.floor(Math.random()*(l-d+1))+d;var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var A={exports:{}},L={exports:{}},j;function J(){return j||(j=1,function(d){(function(l,f){d.exports?d.exports=f():l.EvEmitter=f()})(typeof window<"u"?window:V,function(){function l(){}let f=l.prototype;return f.on=function(n,s){if(!n||!s)return this;let r=this._events=this._events||{},m=r[n]=r[n]||[];return m.includes(s)||m.push(s),this},f.once=function(n,s){if(!n||!s)return this;this.on(n,s);let r=this._onceEvents=this._onceEvents||{},m=r[n]=r[n]||{};return m[s]=!0,this},f.off=function(n,s){let r=this._events&&this._events[n];if(!r||!r.length)return this;let m=r.indexOf(s);return m!=-1&&r.splice(m,1),this},f.emitEvent=function(n,s){let r=this._events&&this._events[n];if(!r||!r.length)return this;r=r.slice(0),s=s||[];let m=this._onceEvents&&this._onceEvents[n];for(let i of r)m&&m[i]&&(this.off(n,i),delete m[i]),i.apply(this,s);return this},f.allOff=function(){return delete this._events,delete this._onceEvents,this},l})}(L)),L.exports}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(d){(function(l,f){d.exports?d.exports=f(l,J()):l.imagesLoaded=f(l,l.EvEmitter)})(typeof window<"u"?window:V,function(f,n){let s=f.jQuery,r=f.console;function m(e){return Array.isArray(e)?e:typeof e=="object"&&typeof e.length=="number"?[...e]:[e]}function i(e,a,c){if(!(this instanceof i))return new i(e,a,c);let p=e;if(typeof e=="string"&&(p=document.querySelectorAll(e)),!p){r.error(`Bad element for imagesLoaded ${p||e}`);return}this.elements=m(p),this.options={},typeof a=="function"?c=a:Object.assign(this.options,a),c&&this.on("always",c),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))}i.prototype=Object.create(n.prototype),i.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const h=[1,9,11];i.prototype.addElementImages=function(e){e.nodeName==="IMG"&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);let{nodeType:a}=e;if(!a||!h.includes(a))return;let c=e.querySelectorAll("img");for(let p of c)this.addImage(p);if(typeof this.options.background=="string"){let p=e.querySelectorAll(this.options.background);for(let D of p)this.addElementBackgroundImages(D)}};const v=/url\((['"])?(.*?)\1\)/gi;i.prototype.addElementBackgroundImages=function(e){let a=getComputedStyle(e);if(!a)return;let c=v.exec(a.backgroundImage);for(;c!==null;){let p=c&&c[2];p&&this.addBackground(p,e),c=v.exec(a.backgroundImage)}},i.prototype.addImage=function(e){let a=new o(e);this.images.push(a)},i.prototype.addBackground=function(e,a){let c=new u(e,a);this.images.push(c)},i.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let e=(a,c,p)=>{setTimeout(()=>{this.progress(a,c,p)})};this.images.forEach(function(a){a.once("progress",e),a.check()})},i.prototype.progress=function(e,a,c){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,a]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&r&&r.log(`progress: ${c}`,e,a)},i.prototype.complete=function(){let e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){let a=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[a](this)}};function o(e){this.img=e}o.prototype=Object.create(n.prototype),o.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},o.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},o.prototype.confirm=function(e,a){this.isLoaded=e;let{parentNode:c}=this.img,p=c.nodeName==="PICTURE"?c:this.img;this.emitEvent("progress",[this,p,a])},o.prototype.handleEvent=function(e){let a="on"+e.type;this[a]&&this[a](e)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function u(e,a){this.url=e,this.element=a,this.img=new Image}return u.prototype=Object.create(o.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(e,a){this.isLoaded=e,this.emitEvent("progress",[this,this.element,a])},i.makeJQueryPlugin=function(e){e=e||f.jQuery,e&&(s=e,s.fn.imagesLoaded=function(a,c){return new i(this,a,c).jqDeferred.promise(s(this))})},i.makeJQueryPlugin(),i})})(A);var K=A.exports;const Q=H(K),X={class:"z-50 px-4 py-16 mx-auto sm:max-w-fit md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"},Y={class:"flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8"},Z=t("h2",{class:"max-w-lg text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:mb-6 group"},[t("span",{class:"inline-block sm:mb-4 tracking-wider text-xl md:text-base dark:text-slate-400"}," 最近发布的图片 "),t("div",{class:"h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"})],-1),tt={class:"stats justify-center shadow-lg border lg:w-auto dark:bg-slate-700 lg:h-24"},et={class:"stat"},at={class:"stat-title w-20"},st={ref:"fake_score",class:"animate__animated animate__fadeInUp"},it={class:"flex gap-x-1 w-28 mt-3"},nt={class:"lg:stat-figure stat-desc lg:mt-10 mt-5 w-20"},rt={ref:"fake_ration",class:"animate__animated animate__fadeInUp"},ot={class:"grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2"},lt={class:"ImgContainer relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl"},ct=["data-idx","src"],dt=t("span",{class:"loading bg-white bg-opacity-100 loading-infinity loading-lg"},null,-1),ft=[dt],mt=t("div",{class:"text-center"},null,-1),ht=O({__name:"landing",setup(d){let l=G(1,5),f=F(),n=B(),s=B();const r=(i,h)=>{i.classList.remove("animate__fadeOutUp"),h.classList.remove("animate__fadeInDown"),h.classList.add("animate__fadeInDown"),i.classList.add("animate__fadeOutUp")},m=[{imgUrl:"https://source.unsplash.com/1240x874/?thailand,beach,sig=168&auto=compress&fm=webp",name:"thailandBeach",idx:1},{imgUrl:"https://source.unsplash.com/1240x874/?japan,nature,sig=82&auto=compress&fm=webp",name:"JapanNature",idx:2},{imgUrl:"https://source.unsplash.com/1240x874/?china,city,sig=124&auto=compress&fm=webp",name:"chinaCity",idx:3},{imgUrl:"https://source.unsplash.com/1240x874/?france,nature,sig=139&auto=compress&fm=webp",name:"france",idx:4}];return $(()=>{let i=document.getElementsByClassName("ImgContainer"),h=document.getElementsByClassName("mask"),v=Q(i),o=[];v.on("progress",function(u,e){var a;e.isLoaded&&h[e.img.attributes[0].nodeValue-1].classList.add("animate__fadeOut"),e.isLoaded&&((a=e.img.parentElement)==null||a.parentElement.classList.remove("pointer-events-none")),e.isLoaded===!1&&o.push(e)&&(e.img.src="https://i.imgtg.com/2023/07/28/OiKjiG.webp")}).on("fail",()=>{o.forEach(u=>{h[u.img.attributes[0].nodeValue-1].classList.add("animate__fadeOut")})}).on("done",()=>{for(let u=0;u<h.length;u++)h[u].classList.add("animate__fadeOut")})}),(i,h)=>{const v=z;return y(),_("div",X,[t("div",Y,[Z,t("div",tt,[t("div",et,[t("div",at,[k(" 综合得分： "),b(v,null,{fallback:g(()=>[t("span",st,"加载中...",512)]),default:g(()=>[t("span",{ref:"real_score",class:"stat-value text-xl animate__animated animate__fadeInDown"},C(w(l)),513)]),_:1})]),t("div",it,[b(v,null,{fallback:g(()=>[(y(),_(I,null,M(5,o=>t("span",{key:o,ref_for:!0,ref_key:"fake_star",ref:s,"aria-hidden":"true",class:"i-heroicons-solid-star h-5 w-5 mt-1 text-gray-300 flex-none animate__animated animate__fadeInUp"})),64))]),default:g(()=>[(y(!0),_(I,null,M(w(l),o=>(y(),_("span",{key:o,ref_for:!0,ref_key:"real_star",ref:n,class:"h-5 w-5 i-heroicons-solid-star flex-none text-secondary animate__animated animate__fadeInDown","aria-hidden":"true",onVnodeMounted:h[0]||(h[0]=u=>r(w(s),w(n)))}))),128))]),_:1})]),t("div",nt,[k(" 当前排名: "),b(v,null,{fallback:g(()=>[t("strong",rt,".......",512)]),default:g(()=>[t("strong",{ref:"real_ratio",class:"animate__animated animate__fadeInDown"},"前"+C(w(f)),513)]),_:1})])])])]),t("div",ot,[(y(),_(I,null,M(m,o=>t("a",{href:"/","aria-label":"View Item",key:o.name,class:"pointer-events-none"},[t("div",lt,[t("img",{ref_for:!0,ref:o.name,"data-idx":o.idx,fetchpriority:"high",class:"object-cover w-full h-56 md:h-64 xl:h-80",src:o.imgUrl},null,8,ct),t("div",{class:R([o.name,"mask absolute flex place-content-center place-items-center inset-0 px-6 py-4 transition-opacity duration-300 bg-black bg-opacity-75 animate__animated"])},ft,2)])])),64))]),mt])}}}),pt=""+new URL("car.7HRBKRDo.webp",import.meta.url).href,ut={},x=d=>(U("data-v-f4e419ce"),d=d(),P(),d),gt={class:"overflow-x-hidden"},xt={class:"pb-[10vh]"},vt=E('<div class="slogan z-50 mt-28 lg:mt-36 mx-auto dark:text-slate-400 text-primary font-bold font-primary text-center mb-2" data-v-f4e419ce><h1 class="text-3xl md:text-xl mi:text-base mb-5" data-v-f4e419ce>瞬间永存，珍藏终身</h1><p class="text-xl md:text-sm mi:text-xs w-2/3 mx-auto" data-v-f4e419ce>令人难忘畅想的旅途近在咫尺，和我们一起开始你的旅程，使你的梦想成真</p></div><div class="relative dark:opacity-50 bg-[url(&#39;https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/light-mode-hero.webp&#39;)] bg-no-repeat bg-contain box-border aspect-[1/0.5] transform-cpu w-screen overflow-x-hidden" data-v-f4e419ce><img src="'+pt+'" class="select-none animate-[carmove_8s_alternate-reverse_infinite_linear] w-[45vw] absolute my-[calc(1vw+1vh+15%)] mx-[calc(1vw+1vh+15%)] transform-cpu" alt="首页背景" data-v-f4e419ce></div>',2),bt={class:"relative"},_t={id:"ad1",class:"lg:flex lg:my-36 max-w-5xl drop-shadow-2xl mx-auto font-semibold"},yt=x(()=>t("div",{class:"bg-[url('https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/texting.webp')] w-full bg-no-repeat bg-top bg-contain md:bg-none"},null,-1)),kt=x(()=>t("img",{src:"https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/texting.webp",alt:"",class:"lg:hidden w-[35vw] my-0 mx-auto"},null,-1)),wt={class:"basis-full"},Et=E('<div class="md:hidden mt-5" data-v-f4e419ce><h1 class="md:text-center text-[2vmax]" data-v-f4e419ce>开始一场旅途，记录一些心情</h1><p class="container lg:line-clamp-3 leading-[40px] md:px-5 w-full text-left mt-5" data-v-f4e419ce> 分享这段旅程，让每张照片成为生命中璀璨的闪光点，传递对自然之美的独特感悟。准备好了吗？一同探索，让镜头定格风景，让世界见证我们的分享与热爱。 </p></div><div class="lg:hidden hero-content text-center" data-v-f4e419ce><div class="max-w-xl dark:text-slate-400" data-v-f4e419ce><h1 class="mb-5 text-xl font-bold tracking-widest" data-v-f4e419ce>准备一场 说走就走的旅途</h1><p class="!leading-[50px] mi:line-clamp-5 underline decoration-dashed underline-offset-4" data-v-f4e419ce> 无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。一同分享这段旅程，让每一张照片都成为生命中闪耀的一刻。 </p></div></div>',2),It={class:"text-center md:text-center pb-5 pt-2"},Mt=x(()=>t("span",{class:"i-fa6-solid-reply-all text-xl ml-1 text-secondary mt-1"},null,-1)),Lt={id:"ad2",class:"lg:flex flex-row-reverse max-w-6xl drop-shadow-2xl mx-auto font-semibold lg:my-28"},Bt=x(()=>t("div",{class:"bg-[url('https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/phoneRing.webp')] w-full bg-no-repeat bg-top bg-contain"},null,-1)),Ct=x(()=>t("img",{src:"https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/phoneRing.webp",alt:"",class:"lg:hidden w-[35vw] my-0 mx-auto"},null,-1)),jt={class:"basis-full max-w-3xl h-60"},Ot=E('<div class="md:hidden mt-6" data-v-f4e419ce><h1 class="md:text-center text-right text-[2vmax]" data-v-f4e419ce>准备好了吗？出发吧</h1><p class="container text-right lg:line-clamp-3 leading-[35px] md:px-5 w-full mt-6" data-v-f4e419ce> 踏上新的旅途，追随内心，记录心动的瞬间。无论是穿越大陆还是漫游异国，与您一同启程，用相机捕捉每处风景。从辽阔的海洋到雄伟的山脉，每个景致都是独一无二的艺术。 </p></div><div class="lg:hidden hero-content text-center" data-v-f4e419ce><div class="max-w-xl text-slate-600 dark:text-slate-400" data-v-f4e419ce><h1 class="mb-5 text-xl font-bold tracking-widest" data-v-f4e419ce>准备好了吗？出发吧</h1><p class="mb-5 leading-[40px] lg:text-right mi:line-clamp-5 underline decoration-dashed underline-offset-4" data-v-f4e419ce> 踏上新的旅途，追随内心，记录心动的瞬间。无论是穿越大陆还是漫游异国，与您一同启程，用相机捕捉每处风景。从辽阔的海洋到雄伟的山脉，每个景致都是独一无二的艺术。 </p></div></div>',2),$t={class:"text-center md:text-center pb-5 pt-2"},Vt=x(()=>t("span",{class:"i-fa6-solid-reply-all text-xl pl-1 rotate-180 text-secondary pt-1"},null,-1)),At=E('<div id="ad3" class="lg:flex lg:my-40 max-w-5xl drop-shadow-2xl mx-auto font-semibold mt-20" data-v-f4e419ce><div class="bg-[url(&#39;https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/yeahPosture.webp&#39;)] bg-no-repeat bg-top bg-contain md:bg-none w-full" data-v-f4e419ce></div><img src="https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/yeahPosture.webp" alt="" class="lg:hidden w-[35vw] my-0 mx-auto" data-v-f4e419ce><section class="basis-full h-56" data-v-f4e419ce><div class="md:hidden mt-5" data-v-f4e419ce><h1 class="md:text-center text-[2vmax]" data-v-f4e419ce>为了更好的明天!</h1><p class="container lg:line-clamp-3 leading-[40px] w-full mt-5" data-v-f4e419ce> 无论是穿越大陆还是漫游异国风情，让我们与您一同启程。从一望无际的海洋到壮阔的山脉，每一个景致都值得细细品味。一同分享这段旅程，让每一张照片都成为生命中闪耀的一刻。 </p></div><div class="lg:hidden hero-content text-center" data-v-f4e419ce><div class="max-w-xl text-slate-600 dark:text-slate-400" data-v-f4e419ce><h1 class="mb-5 text-xl font-bold tracking-widest" data-v-f4e419ce>为了更好的明天!</h1><p class="mb-5 !leading-[40px] mi:line-clamp-5 underline decoration-dashed underline-offset-4" data-v-f4e419ce> 每一张图片，都是你在世界各地留下的一笔独特的生活印记，让每一帧都成为你生命中不可或缺的一部分，让您尽情享受旅途的每一个时刻,用照片记录笑声和感动。 </p></div></div></section></div>',1),Dt={class:"relative pb-14 pt-10 sm:py-24"},qt=x(()=>t("div",{class:"relative lg:static xl:pl-10"},[t("div",{class:"absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"},[t("svg",{"aria-hidden":"true",viewBox:"0 0 668 1069",width:"668",height:"1069",fill:"none",class:"absolute hidden dark:block left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]"},[t("defs",null,[t("clipPath",{id:":Rqla:-clip-path"},[t("path",{fill:"#fff",transform:"rotate(-180 334 534.4)",d:"M0 0h668v1068.8H0z"})])]),t("g",{opacity:".4","clip-path":"url(#:Rqla:-clip-path)","stroke-width":"4"},[t("path",{opacity:".3",d:"M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474",stroke:"#334155"}),t("path",{d:"M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588",stroke:"#334155"}),t("path",{d:"M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175",stroke:"#334155"}),t("circle",{cx:"83.5",cy:"384.1",r:"10.438",transform:"rotate(-180 83.5 384.1)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"83.5",cy:"200.399",r:"10.438",transform:"rotate(-180 83.5 200.399)",stroke:"#334155"}),t("circle",{cx:"83.5",cy:"81.412",r:"10.438",transform:"rotate(-180 83.5 81.412)",stroke:"#334155"}),t("circle",{cx:"183.699",cy:"375.75",r:"10.438",transform:"rotate(-180 183.699 375.75)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"183.699",cy:"563.625",r:"10.438",transform:"rotate(-180 183.699 563.625)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"384.1",cy:"651.3",r:"10.438",transform:"rotate(-180 384.1 651.3)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"484.301",cy:"574.062",r:"10.438",transform:"rotate(-180 484.301 574.062)",fill:"#0EA5E9","fill-opacity":".42",stroke:"#0EA5E9"}),t("circle",{cx:"384.1",cy:"749.412",r:"10.438",transform:"rotate(-180 384.1 749.412)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"384.1",cy:"1027.05",r:"10.438",transform:"rotate(-180 384.1 1027.05)",stroke:"#334155"}),t("circle",{cx:"283.9",cy:"924.763",r:"10.438",transform:"rotate(-180 283.9 924.763)",stroke:"#334155"}),t("circle",{cx:"183.699",cy:"870.487",r:"10.438",transform:"rotate(-180 183.699 870.487)",stroke:"#334155"}),t("circle",{cx:"283.9",cy:"738.975",r:"10.438",transform:"rotate(-180 283.9 738.975)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"83.5",cy:"695.138",r:"10.438",transform:"rotate(-180 83.5 695.138)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"83.5",cy:"484.3",r:"10.438",transform:"rotate(-180 83.5 484.3)",fill:"#0EA5E9","fill-opacity":".42",stroke:"#0EA5E9"}),t("circle",{cx:"484.301",cy:"432.112",r:"10.438",transform:"rotate(-180 484.301 432.112)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"584.5",cy:"432.112",r:"10.438",transform:"rotate(-180 584.5 432.112)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"584.5",cy:"642.95",r:"10.438",transform:"rotate(-180 584.5 642.95)",fill:"#1E293B",stroke:"#334155"}),t("circle",{cx:"484.301",cy:"851.699",r:"10.438",transform:"rotate(-180 484.301 851.699)",stroke:"#334155"}),t("circle",{cx:"384.1",cy:"256.763",r:"10.438",transform:"rotate(-180 384.1 256.763)",stroke:"#334155"})])])]),t("div",{class:"relative"},[t("img",{alt:"",fetchpriority:"high",width:"530",height:"530",decoding:"async","data-nimg":"1",class:"absolute -right-24 top-30",style:{color:"transparent"},src:"https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/blur-indigo.webp"}),t("img",{alt:"",fetchpriority:"high",width:"567",height:"567",decoding:"async","data-nimg":"1",class:"absolute haha -bottom-[350px] right-[200px]",style:{color:"transparent"},src:"https://pub-b1b159b2eaaf4b8f891a2aecd338f83c.r2.dev/blur-cyan.webp"}),t("div",{class:"absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg"}),t("div",{class:"absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10"})])],-1)),Tt={class:"relative pb-20 pt-10 sm:pb-16"},Rt={class:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"},St={class:"mx-auto max-w-2xl lg:max-w-4xl lg:px-12"},Ut=x(()=>t("h1",{class:"text-3xl font-bold justify-self-center text-blue-600 dark:text-slate-300 sm:text-6xl sm:justify-center"},[t("span",{class:"sr-only"},"Tralive - "),k("探索世界，分享心动瞬间 ")],-1)),Pt=x(()=>t("div",{class:"mt-6 space-y-6 text-base tracking-tight text-blue-900 dark:text-slate-400"},[t("p",null,"无论是穿越大陆还是漫游异国风情，让我们一同记录这段充满激情的旅途。每一张照片都是生命中的璀璨瞬间，是对大自然之美的独特感悟。"),t("p",null," 在这里，您将发现分享是一种美好的交流方式。与您一同分享最新的旅行心得，一同感受每个旅行者的独特视角，让这个平台成为我们共同记录与交流的精彩空间。 ")],-1)),Nt=E('<dl class="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left text-center" data-v-f4e419ce><div data-v-f4e419ce><dt class="font-primary text-base text-blue-600 dark:text-slate-400" data-v-f4e419ce>照片分享</dt><dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400" data-v-f4e419ce>689</dd></div><div data-v-f4e419ce><dt class="font-primary text-base text-blue-600 dark:text-slate-400" data-v-f4e419ce>互动参与者</dt><dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400" data-v-f4e419ce>1,245</dd></div><div data-v-f4e419ce><dt class="font-primary text-base text-blue-600 dark:text-slate-400" data-v-f4e419ce>平台</dt><dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400" data-v-f4e419ce>Tralive</dd></div><div data-v-f4e419ce><dt class="font-primary text-base text-blue-600 dark:text-slate-400" data-v-f4e419ce>在线时长</dt><dd class="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 dark:text-slate-400" data-v-f4e419ce>300天</dd></div></dl>',1);function Wt(d,l){const f=q,n=ht,s=N;return y(),_("div",gt,[b(f),t("main",xt,[vt,b(n),t("div",bt,[t("div",_t,[yt,kt,t("section",wt,[Et,t("div",It,[t("strong",null,[b(s,{to:"/","aria-label":"",class:"inline-flex md:justify-center md:w-fit font-semibold transition-colors text-primary hover:text-primary/50 dark:text-slate-300 dark:hover:text-slate-50 link underline-offset-8 decoration-double"},{default:g(()=>[k(" 分享您的旅途风景 "),Mt]),_:1})])])])]),t("div",Lt,[Bt,Ct,t("section",jt,[Ot,t("div",$t,[t("strong",null,[Vt,b(s,{to:"/","aria-label":"",class:"inline-flex md:justify-center md:w-fit font-semibold transition-colors text-primary hover:text-primary/50 dark:text-slate-300 dark:hover:text-slate-50 link decoration-double underline-offset-8"},{default:g(()=>[k(" 看看热门风景？ ")]),_:1})])])])]),At]),t("div",Dt,[qt,t("div",Tt,[t("div",Rt,[t("div",St,[Ut,Pt,b(s,{class:"inline-flex justify-center rounded-2xl bg-blue-600 dark:text-slate-400 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full sm:hidden",to:"#"},{default:g(()=>[k(" 获取更多旅行灵感 ")]),_:1}),Nt])])])])])])}const Ht=S(ut,[["render",Wt],["__scopeId","data-v-f4e419ce"]]);export{Ht as default};
