(function(e){function t(t){for(var a,n,l=t[0],i=t[1],s=t[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(u.length)u.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,n=1;n<r.length;n++){var l=r[n];0!==o[l]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o={app:0},c=[];function l(e){return i.p+"js/"+({about:"about",projects:"projects",simple:"simple"}[e]||e)+"."+{about:"cd3a2391",projects:"8b95e8e5",simple:"19ee5dd7"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={projects:1,simple:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({about:"about",projects:"projects",simple:"simple"}[e]||e)+"."+{about:"31d6cfe0",projects:"42abcbd9",simple:"b507b9c7"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var s=c[l],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){s=u[l],d=s.getAttribute("data-href");if(d===a||d===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete n[e],b.parentNode.removeChild(b),r(c)},b.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(b)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=l(e);var u=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(b);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,r[1](u)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=d;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"070b":function(e,t,r){"use strict";r("1094")},"0dba":function(e,t,r){},"0ea0":function(e,t,r){e.exports=r.p+"img/developer.1e987b35.svg"},1094:function(e,t,r){},"2a70":function(e,t,r){"use strict";var a=r("7a23"),n={class:"pt-10 sm:pt-14"},o={class:"text-center"},c={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},l={class:"mt-10 sm:mt-10"},i=Object(a["h"])("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Buscar proyectos por título o filtrar por categoría ",-1),s={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},d={class:"flex justify-between gap-2"},u=Object(a["h"])("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[Object(a["h"])("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),b={key:0,class:"grid-flow-col lg:grid-cols-1 mt-2"},m=Object(a["h"])("h1",{class:"flex justify-center text-indigo-500"}," Cargando portafolio... ",-1),h=[m],p={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function g(e,t,r,m,g,f){var j=Object(a["F"])("ProjectsFilter"),O=Object(a["F"])("ProjectSingle");return Object(a["w"])(),Object(a["g"])("section",n,[Object(a["h"])("div",o,[Object(a["h"])("p",c,Object(a["H"])(e.projectsHeading),1)]),Object(a["h"])("div",l,[i,Object(a["h"])("div",s,[Object(a["h"])("div",d,[u,Object(a["P"])(Object(a["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.buscador=e}),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Buscar proyectos","aria-label":"Name"},null,512),[[a["L"],m.buscador]])]),Object(a["k"])(j,{onFilter:t[1]||(t[1]=function(e){return m.categoria=e})})])]),m.loading?(Object(a["w"])(),Object(a["g"])("div",b,h)):Object(a["f"])("",!0),Object(a["h"])("div",p,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(m.verPortafolio,(function(e){return Object(a["w"])(),Object(a["e"])(O,{key:e.id,project:e},null,8,["project"])})),128))])])}r("ac1f"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("4de4"),r("d3b7"),r("466d"),r("fb6a"),r("caad"),r("2532");var f=r("77c6"),j=r.n(f),O=["name","id"],x=Object(a["h"])("option",{value:"",class:"text-sm sm:text-md"},"Todos proyectos",-1),v=["value"];function y(e,t,r,n,o,c){return Object(a["w"])(),Object(a["g"])("select",{onChange:t[0]||(t[0]=function(t){return e.$emit("filter",t.target.value)}),name:r.select,id:r.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[x,(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(r.selectOptions,(function(e){return Object(a["w"])(),Object(a["g"])("option",{key:e,value:e,class:"sm:text-md"},Object(a["H"])(e),9,v)})),128))],40,O)}var k={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:function(){return["Web Application","Software Application"]}}}},w=r("6b0d"),M=r.n(w);const C=M()(k,[["render",y]]);var P=C,T=["src","alt"],S={class:"text-center px-4 py-6"},_={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},A={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function F(e,t,r,n,o,c){var l=Object(a["F"])("router-link");return Object(a["w"])(),Object(a["e"])(l,{to:{name:"simple",params:{id:r.project.id}},class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:Object(a["O"])((function(){return[Object(a["h"])("div",null,[Object(a["h"])("img",{src:r.project.attributes.img_small.data.attributes.url,alt:r.project.attributes.titulo,class:"rounded-t-xl border-none"},null,8,T)]),Object(a["h"])("div",S,[Object(a["h"])("p",_,Object(a["H"])(r.project.attributes.titulo),1),Object(a["h"])("span",A,Object(a["H"])(r.project.attributes.categoria.data.attributes.categoria),1)])]})),_:1},8,["to"])}var H={props:["project"]};const E=M()(H,[["render",F]]);var B=E,D=r("3cf7"),L={components:{ProjectSingle:B,ProjectsFilter:P},data:function(){return{projectsHeading:"Proyectos Portafolio"}},mounted:function(){j.a.replace()},setup:function(){var e=Object(a["B"])(),t=Object(a["B"])(),r=Object(D["a"])(),n=r.portafolio,o=r.loading,c=function(){var t=new RegExp(e.value,"i");return n.value.filter((function(e){return e.attributes.titulo.match(t)}))},l=function(){return n.value.filter((function(e){var r=e.attributes.categoria.data.attributes.categoria.charAt(0).toUpperCase()+e.attributes.categoria.data.attributes.categoria.slice(1);return console.log(r),r.includes(t.value)}))},i=Object(a["c"])((function(){return t.value?l():e.value?c():n.value}));return{portafolio:n,verPortafolio:i,buscador:e,categoria:t,loading:o}}};const q=M()(L,[["render",g]]);t["a"]=q},"3cf7":function(e,t,r){"use strict";var a=r("1da1"),n=(r("96cf"),r("7a23")),o=r("bc3a"),c=r.n(o),l=r("c9d9"),i=function(){var e=Object(n["B"])(),t=Object(n["B"])(!1),r=function(){var r=Object(a["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.value=null,t.value=!0,r.next=5,c.a.get("".concat(l["a"],"/api/portafolios?populate=img_big,img_small,categoria"));case 5:a=r.sent,n=a.data,e.value=n.data,r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0);case 13:t.value=!1;case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(){return r.apply(this,arguments)}}();return r(),{portafolio:e,loading:t}};t["a"]=i},"557b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("ac1f"),r("5319");var a=r("7a23"),n=Object(a["h"])("i",{"data-feather":"chevron-up"},null,-1);function o(e,t,r,o,c,l){var i=Object(a["F"])("AppHeader"),s=Object(a["F"])("router-view"),d=Object(a["F"])("back-to-top"),u=Object(a["F"])("AppFooter");return Object(a["w"])(),Object(a["g"])("div",{class:Object(a["q"])([e.appTheme,"pt-0.5"])},[Object(a["k"])(i),Object(a["k"])(a["b"],{name:"fade",mode:"out-in"},{default:Object(a["O"])((function(){return[Object(a["k"])(s,{theme:e.appTheme},null,8,["theme"])]})),_:1}),Object(a["k"])(d,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:Object(a["O"])((function(){return[n]})),_:1}),Object(a["k"])(u)],2)}var c=r("77c6"),l=r.n(c),i={id:"nav",class:"sm:container sm:mx-auto"},s={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},d={class:"flex justify-between items-center px-4 sm:px-0"},u={key:0,src:"https://res.cloudinary.com/rg-infinity/image/upload/v1648511049/DevsArg_1_ntukyc.png",class:"w-36",alt:"Dark Logo"},b={key:1,src:"https://res.cloudinary.com/rg-infinity/image/upload/v1648511049/DevsArg_1_ntukyc.png",class:"w-36",alt:"Light Logo"},m={class:"sm:hidden"},h={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},p={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},g={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},f={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},j={class:"hidden md:block"};function O(e,t,r,n,o,c){var l=Object(a["F"])("router-link"),O=Object(a["F"])("theme-switcher"),x=Object(a["F"])("AppHeaderLinks"),v=Object(a["F"])("Button"),y=Object(a["F"])("HireMeModal");return Object(a["w"])(),Object(a["g"])("nav",i,[Object(a["h"])("div",s,[Object(a["h"])("div",d,[Object(a["h"])("div",null,[Object(a["k"])(l,{to:"/"},{default:Object(a["O"])((function(){return["light"===o.theme?(Object(a["w"])(),Object(a["g"])("img",u)):(Object(a["w"])(),Object(a["g"])("img",b))]})),_:1})]),Object(a["k"])(O,{theme:o.theme,onThemeChanged:c.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),Object(a["h"])("div",m,[Object(a["h"])("button",{onClick:t[0]||(t[0]=function(e){return o.isOpen=!o.isOpen}),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[(Object(a["w"])(),Object(a["g"])("svg",h,[o.isOpen?(Object(a["w"])(),Object(a["g"])("path",p)):Object(a["f"])("",!0),o.isOpen?Object(a["f"])("",!0):(Object(a["w"])(),Object(a["g"])("path",g))]))])])]),Object(a["k"])(x,{showModal:c.showModal,isOpen:o.isOpen},null,8,["showModal","isOpen"]),Object(a["h"])("div",f,[Object(a["h"])("div",j,[Object(a["k"])(v,{title:"Contratar",class:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=function(e){return c.showModal()}),"aria-label":"Hire Me Button"})]),Object(a["k"])(O,{theme:o.theme,onThemeChanged:c.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),Object(a["k"])(y,{showModal:c.showModal,modal:o.modal,categories:o.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}var x={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},v={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function y(e,t,r,n,o,c){return Object(a["w"])(),Object(a["g"])("a",{href:"#",onClick:t[0]||(t[0]=Object(a["Q"])((function(){return c.toggleTheme&&c.toggleTheme.apply(c,arguments)}),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?(Object(a["w"])(),Object(a["g"])("i",x)):(Object(a["w"])(),Object(a["g"])("i",v))])}var k={props:{theme:{type:String,required:!0}},methods:{toggleTheme:function(){var e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("themeChanged",e),this.$router.go()}}},w=r("6b0d"),M=r.n(w);const C=M()(k,[["render",y]]);var P=C,T=(r("b0c0"),function(e){return Object(a["z"])("data-v-e918c94c"),e=e(),Object(a["x"])(),e}),S={class:"font-general-regular fixed inset-0 z-30"},_={class:"flex flex-col items-center justify-center h-full w-full"},A={class:"modal-wrapper flex items-center z-30"},F={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},H={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},E=T((function(){return Object(a["h"])("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," ¿Qué proyecto estás buscando? ",-1)})),B=T((function(){return Object(a["h"])("i",{"data-feather":"x"},null,-1)})),D=[B],L={class:"modal-body p-5 w-full h-full"},q={class:"mt-0"},z={class:"mt-6"},N={class:"mt-6"},I=["value"],V={class:"mt-6"},R={class:"mt-6 pb-4 sm:pb-1"};function U(e,t,r,n,o,c){var l=Object(a["F"])("Button");return Object(a["w"])(),Object(a["e"])(a["b"],{name:"fade"},{default:Object(a["O"])((function(){return[Object(a["P"])(Object(a["h"])("div",S,[Object(a["P"])(Object(a["h"])("div",{onClick:t[0]||(t[0]=function(e){return r.showModal()}),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a["M"],r.modal]]),Object(a["h"])("main",_,[Object(a["k"])(a["b"],{name:"fade-up-down"},{default:Object(a["O"])((function(){return[Object(a["P"])(Object(a["h"])("div",A,[Object(a["h"])("div",F,[Object(a["h"])("div",H,[E,Object(a["h"])("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=function(e){return r.showModal()})},D)]),Object(a["h"])("div",L,[Object(a["h"])("form",{class:"max-w-xl m-4 text-left",onSubmit:t[6]||(t[6]=Object(a["Q"])((function(){return n.contactar&&n.contactar.apply(n,arguments)}),["prevent"]))},[Object(a["h"])("div",q,[Object(a["P"])(Object(a["h"])("input",{class:Object(a["q"])(["w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",{error:n.formError.name}]),id:"name",type:"text",placeholder:"Nombre completo (*)","aria-label":"Name","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.formContacto.name=e})},null,2),[[a["L"],n.formContacto.name]])]),Object(a["h"])("div",z,[Object(a["P"])(Object(a["h"])("input",{class:Object(a["q"])(["w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",{error:n.formError.email}]),id:"email",type:"text",placeholder:"Correo electrónico (*)","aria-label":"Email","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.formContacto.email=e})},null,2),[[a["L"],n.formContacto.email]])]),Object(a["h"])("div",N,[Object(a["P"])(Object(a["h"])("select",{class:Object(a["q"])(["w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",{error:n.formError.subject}]),id:"subject",type:"text","aria-label":"Project Category","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.formContacto.subject=e})},[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(r.categories,(function(e){return Object(a["w"])(),Object(a["g"])("option",{key:e.id,value:e.value},Object(a["H"])(e.name),9,I)})),128))],2),[[a["K"],n.formContacto.subject]])]),Object(a["h"])("div",V,[Object(a["P"])(Object(a["h"])("textarea",{class:Object(a["q"])(["w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",{error:n.formError.message}]),id:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Descripción del proyecto (*)","onUpdate:modelValue":t[5]||(t[5]=function(e){return n.formContacto.message=e})},null,2),[[a["L"],n.formContacto.message]])]),Object(a["h"])("div",R,[Object(a["k"])(l,{title:"Enviar solicitud",class:"px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",type:"submit","aria-label":"Submit Request"})])],32)])])],512),[[a["M"],r.modal]])]})),_:1})])],512),[[a["M"],r.modal]])]})),_:1})}var Q=r("1da1"),G=(r("96cf"),r("d3b7"),r("159b"),r("506a")),J=r("c9d9"),K=r("bc3a"),W=r.n(K);function $(e){return Y.apply(this,arguments)}function Y(){return Y=Object(Q["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.post("".concat(J["a"],"/api/contratoes"),t);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e["catch"](0),console.log(e.t0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,5]])}))),Y.apply(this,arguments)}var X=r("6f84"),Z={props:["showModal","modal","categories"],components:{Button:X["a"]},data:function(){return{}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()},methods:{},setup:function(){var e=Object(a["B"])({}),t=Object(a["B"])({}),r=Object(a["o"])("WKToast"),n=G["a"]().shape({name:G["b"]().required(!0),email:G["b"]().email(!0).required(!0),subject:G["b"]().required(!0),message:G["b"]().required(!0)}),o=function(){var a=Object(Q["a"])(regeneratorRuntime.mark((function a(){var o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.value={},o={data:e.value},a.prev=2,a.next=5,n.validate(e.value,{abortEarly:!1});case 5:return a.prev=5,a.next=8,$(o);case 8:c=a.sent,console.log(c),r("¡Solicitud enviada!",{className:["my-toast"],horizontalPosition:"left",verticalPosition:"bottom",duration:3e3,transition:"transition"}),e.value={},a.next=17;break;case 14:a.prev=14,a.t0=a["catch"](5),console.log(a.t0);case 17:a.next=22;break;case 19:a.prev=19,a.t1=a["catch"](2),a.t1.inner.forEach((function(e){t.value[e.path]=e.message}));case 22:case"end":return a.stop()}}),a,null,[[2,19],[5,14]])})));return function(){return a.apply(this,arguments)}}();return{formContacto:e,formError:t,contactar:o}}};r("7da4");const ee=M()(Z,[["render",U],["__scopeId","data-v-e918c94c"]]);var te=ee,re=Object(a["j"])("Proyectos"),ae=Object(a["j"])("Sobre mí"),ne=Object(a["j"])("Contacto"),oe={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function ce(e,t,r,n,o,c){var l=Object(a["F"])("router-link");return Object(a["w"])(),Object(a["g"])("div",{class:Object(a["q"])([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[Object(a["k"])(l,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:Object(a["O"])((function(){return[re]})),_:1}),Object(a["k"])(l,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:Object(a["O"])((function(){return[ae]})),_:1}),Object(a["k"])(l,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:Object(a["O"])((function(){return[ne]})),_:1}),Object(a["h"])("div",oe,[Object(a["h"])("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=function(e){return r.showModal()}),"aria-label":"Hire Me Button"}," Contratar ")])],2)}var le={props:["showModal","isOpen"]};const ie=M()(le,[["render",ce]]);var se=ie,de={components:{ThemeSwitcher:P,HireMeModal:te,AppHeaderLinks:se,Button:X["a"]},data:function(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"software",name:"Software Application"},{id:3,value:"ecommerce",name:"Tienda online (Promo)"}]}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){l.a.replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme:function(e){this.theme=e},showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated:function(){l.a.replace()}};r("6858");const ue=M()(de,[["render",O],["__scopeId","data-v-7f10d32c"]]);var be=ue,me={class:"container mx-auto"},he={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},pe={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},ge=Object(a["h"])("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Sígueme ",-1),fe={class:"flex gap-4 sm:gap-8"},je=["href"],Oe=["data-feather"];function xe(e,t,r,n,o,c){var l=Object(a["F"])("FooterCopyright");return Object(a["w"])(),Object(a["g"])("div",me,[Object(a["h"])("div",he,[Object(a["h"])("div",pe,[ge,Object(a["h"])("ul",fe,[(Object(a["w"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])(o.socials,(function(e){return Object(a["w"])(),Object(a["g"])("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[Object(a["h"])("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,Oe)],8,je)})),128))])]),Object(a["k"])(l)])])}var ve={class:"flex justify-center items-center text-center"},ye={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},ke={href:"#",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function we(e,t,r,n,o,c){return Object(a["w"])(),Object(a["g"])("div",ve,[Object(a["h"])("div",ye,[Object(a["j"])(" © "+Object(a["H"])(e.copyrightDate)+". ",1),Object(a["h"])("a",ke,Object(a["H"])(e.projectName),1)])])}var Me={data:function(){return{copyrightDate:(new Date).getFullYear(),projectName:"DevsArg",author:"DevsArg"}}};const Ce=M()(Me,[["render",we]]);var Pe=Ce,Te={components:{FooterCopyright:Pe},data:function(){return{socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/gonza213"},{id:2,name:"Facebook",icon:"facebook",url:"https://facebook.com/devsarg"},{id:3,name:"Instagram",icon:"instagram",url:"https://instagram.com/"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}};const Se=M()(Te,[["render",xe]]);var _e=Se,Ae={components:{AppHeader:be,AppFooter:_e},data:function(){return{appTheme:localStorage.getItem("theme")}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}};r("070b");const Fe=M()(Ae,[["render",o]]);var He=Fe,Ee=(r("3ca3"),r("ddb0"),r("7db0"),r("fb6a"),r("d81d"),r("a630"),r("b64b"),r("6c02")),Be={class:"container mx-auto"},De={class:"mt-10 sm:mt-20 flex justify-center"};function Le(e,t,r,n,o,c){var l=Object(a["F"])("AppBanner"),i=Object(a["F"])("ProjectsGrid"),s=Object(a["F"])("Button"),d=Object(a["F"])("router-link"),u=Object(a["F"])("Tienda");return Object(a["w"])(),Object(a["g"])("div",Be,[Object(a["k"])(l,{class:"mb-5 sm:mb-8"}),Object(a["k"])(i),Object(a["h"])("div",De,[Object(a["k"])(d,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:Object(a["O"])((function(){return[Object(a["k"])(s,{title:"Más proyectos"})]})),_:1})]),Object(a["k"])(u)])}var qe=r("0ea0"),ze=r.n(qe),Ne=r("71d7"),Ie=r.n(Ne),Ve={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Re=Object(a["i"])('<div class="w-full md:w-1/3 text-left"><h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"> Hola, Soy DevsArg </h1><p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"> Freelancer </p><div class="flex justify-center sm:block"><a download="Gonzalo-Vidal.pdf" href="/files/CV-GonzaloV-2022.pdf" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume"><i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i><span class="text-sm sm:text-lg font-general-medium duration-100">Descargar CV</span></a></div></div>',1),Ue={class:"w-full md:w-2/3 text-right float-right"},Qe={key:0,src:ze.a,alt:"Developer"},Ge={key:1,src:Ie.a,alt:"Developer"};function Je(e,t,r,n,o,c){return Object(a["w"])(),Object(a["g"])("section",Ve,[Re,Object(a["h"])("div",Ue,["light"===e.theme?(Object(a["w"])(),Object(a["g"])("img",Qe)):(Object(a["w"])(),Object(a["g"])("img",Ge))])])}var Ke={name:"Home",data:function(){return{theme:""}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){l.a.replace(),this.theme=localStorage.getItem("theme")||"light"},updated:function(){l.a.replace()},methods:{}};const We=M()(Ke,[["render",Je]]);var $e=We,Ye=r("2a70"),Xe={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mt-10 sm:gap10"},Ze=Object(a["h"])("img",{src:"https://res.cloudinary.com/rg-infinity/image/upload/v1649193402/tienda_09199975e6.png",class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"},null,-1),et=[Ze],tt=Object(a["h"])("div",{class:"grid-flow-col mt-2"},[Object(a["h"])("div",{class:"flex justify-center"},[Object(a["h"])("a",{href:"http://ecommerce.gonzalo-web.x10.mx/",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300",target:"__blank"},"Ver demo")])],-1);function rt(e,t,r,n,o,c){var l=Object(a["F"])("ModalTienda");return Object(a["w"])(),Object(a["g"])(a["a"],null,[Object(a["h"])("div",Xe,[Object(a["h"])("a",{onClick:t[0]||(t[0]=function(e){return c.showModal()}),class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-indigo-200 dark:bg-ternary-dark p-5","aria-label":"Single Project"},et),tt]),Object(a["k"])(l,{showModal:c.showModal,modal:o.modal},null,8,["showModal","modal"])],64)}var at={class:"font-general-regular fixed inset-0 z-30"},nt={class:"flex flex-auto w-64 items-center justify-center h-full w-full"},ot={class:"modal-wrapper flex items-center z-30"},ct={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},lt={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},it=Object(a["h"])("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," ¿Querés tener tu propia Tienda Online? ",-1),st=Object(a["h"])("i",{"data-feather":"x"},null,-1),dt=[st],ut=Object(a["h"])("div",{class:"modal-body p-5 w-full h-full bg-indigo-400"},[Object(a["h"])("div",{class:"grid grid-cols-1 gap-1"},[Object(a["h"])("div",{class:"w-100"},[Object(a["h"])("p",{class:"text-white"}," La tienda online funciona como un ecommerce, en la cual puedes vender tus productos de tu negocio o emprendimiento a nivel nacional. Con tu panel de control para gestionar tus productos, tus ventas, tus clientes, links o códigos QR para compartir tus productos en las redes sociales y mucho más. "),Object(a["h"])("table",{class:"border-collapse border mt-3 text-white",style:{width:"100%"}},[Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{class:"border border-slate-600 ..."}),Object(a["h"])("th",{class:"border border-slate-600 ..."},"Detalles")])]),Object(a["h"])("tbody",null,[Object(a["h"])("tr",null,[Object(a["h"])("td",{class:"border border-slate-700 ..."},"Ecommerce"),Object(a["h"])("td",{class:"border border-slate-700 ..."},[Object(a["j"])(" Ventas de productos, "),Object(a["h"])("br"),Object(a["j"])(" suscripciones, etc. ")])]),Object(a["h"])("tr",null,[Object(a["h"])("td",{class:"border border-slate-700 ..."},[Object(a["j"])(" Panel de "),Object(a["h"])("br"),Object(a["j"])(" administración ")]),Object(a["h"])("td",{class:"border border-slate-700 ..."},[Object(a["j"])(" Control total sobre el sitio, "),Object(a["h"])("br"),Object(a["j"])(" gestión de productos y demás. ")])]),Object(a["h"])("tr",null,[Object(a["h"])("td",{class:"border border-slate-700 ..."},[Object(a["j"])(" Metódos de "),Object(a["h"])("br"),Object(a["j"])(" pagos ")]),Object(a["h"])("td",{class:"border border-slate-700 ..."},[Object(a["j"])(" Mercado pago, "),Object(a["h"])("br"),Object(a["j"])(" Transferencias ")])]),Object(a["h"])("tr",null,[Object(a["h"])("td",{class:"border border-slate-700 ..."},"Envios"),Object(a["h"])("td",{class:"border border-slate-700 ..."},"Si")]),Object(a["h"])("tr",null,[Object(a["h"])("td",{class:"border border-slate-700 ..."},"Extra"),Object(a["h"])("td",{class:"border border-slate-700 ..."},[Object(a["j"])("Ver cantidad de visitas, "),Object(a["h"])("br"),Object(a["j"])(" link y QR para compartir en redes, etc.")])])])]),Object(a["h"])("p",{class:"mt-2 text-white"},[Object(a["h"])("span",{class:"text-indigo-600"},"Tecnologías: "),Object(a["j"])(" HTML, CSS3, Javascript y PHP.")])])])],-1);function bt(e,t,r,n,o,c){return Object(a["w"])(),Object(a["e"])(a["b"],{name:"fade"},{default:Object(a["O"])((function(){return[Object(a["P"])(Object(a["h"])("div",at,[Object(a["P"])(Object(a["h"])("div",{onClick:t[0]||(t[0]=function(e){return r.showModal()}),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a["M"],r.modal]]),Object(a["h"])("main",nt,[Object(a["k"])(a["b"],{name:"fade-up-down"},{default:Object(a["O"])((function(){return[Object(a["P"])(Object(a["h"])("div",ot,[Object(a["h"])("div",ct,[Object(a["h"])("div",lt,[it,Object(a["h"])("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=function(e){return r.showModal()})},dt)]),ut])],512),[[a["M"],r.modal]])]})),_:1})])],512),[[a["M"],r.modal]])]})),_:1})}var mt={props:["showModal","modal"],mounted:function(){l.a.replace()},updated:function(){l.a.replace()}};const ht=M()(mt,[["render",bt]]);var pt=ht,gt={components:{ModalTienda:pt},data:function(){return{modal:!1}},methods:{showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}}};const ft=M()(gt,[["render",rt]]);var jt=ft,Ot={name:"Home",components:{AppBanner:$e,ProjectsGrid:Ye["a"],Button:X["a"],Tienda:jt}};const xt=M()(Ot,[["render",Le]]);var vt=xt,yt={class:"pt-10 sm:pt-14"},kt=Object(a["h"])("div",{class:"text-center"},[Object(a["h"])("p",{class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},[Object(a["h"])("span",{class:"text-red-500"},"¡Error 404!"),Object(a["j"])(),Object(a["h"])("br"),Object(a["j"])(" Página no encontrada. ")])],-1),wt={class:"mt-10 sm:mt-20 flex justify-center"};function Mt(e,t,r,n,o,c){var l=Object(a["F"])("Button"),i=Object(a["F"])("router-link");return Object(a["w"])(),Object(a["g"])("section",yt,[kt,Object(a["h"])("div",wt,[Object(a["k"])(i,{to:"/",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"Home"},{default:Object(a["O"])((function(){return[Object(a["k"])(l,{title:"Home"})]})),_:1})])])}var Ct={components:{Button:X["a"]}};const Pt=M()(Ct,[["render",Mt]]);var Tt=Pt,St=[{path:"/",name:"Home",component:vt,meta:{title:"DevsArg - Home"}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{title:"DevsArg - About"}},{path:"/projects",name:"Projects",component:function(){return r.e("projects").then(r.bind(null,"acca"))},meta:{title:"DevsArg - Projects"}},{path:"/projects/single-project/:id",name:"simple",component:function(){return r.e("simple").then(r.bind(null,"76fc"))},meta:{title:"DevsArg - Single Project"}},{path:"/contact",name:"Contact",component:function(){return r.e("projects").then(r.bind(null,"b8fa"))},meta:{title:"DevsArg - Contact"}},{path:"/:pathMatch(.*)*",name:"404",component:Tt,meta:{title:"DevsArg - 404"}}],_t=Object(Ee["a"])({history:Object(Ee["b"])("/"),routes:St,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),At=_t;_t.beforeEach((function(e,t,r){var a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),n=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),o=t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(a?document.title=a.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!n)return r();n.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(r){t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),r()}));r("557b");var Ft=r("6afc"),Ht=r("d8dd"),Et=(r("20d4"),r("77c6"));Et.replace(),Object(a["d"])(He).use(At).use(Ft["a"]).use(Ht["a"]).mount("#app");var Bt=localStorage.getItem("theme");"dark"===Bt&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},6858:function(e,t,r){"use strict";r("e59a")},"6f84":function(e,t,r){"use strict";var a=r("7a23");function n(e,t,r,n,o,c){return Object(a["w"])(),Object(a["g"])("button",null,Object(a["H"])(r.title),1)}var o={props:["title"],data:function(){return{}}},c=r("6b0d"),l=r.n(c);const i=l()(o,[["render",n]]);t["a"]=i},"71d7":function(e,t,r){e.exports=r.p+"img/developer-dark.708a2b5d.svg"},"7da4":function(e,t,r){"use strict";r("0dba")},c9d9:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var a="https://cp-gonza.herokuapp.com"},e59a:function(e,t,r){}});
//# sourceMappingURL=app.d4e0289b.js.map