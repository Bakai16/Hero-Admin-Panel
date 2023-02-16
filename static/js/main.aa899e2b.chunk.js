(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),s=n.n(a),o=n(3),i=n(2),l=n(22),u=n(18),d=n.n(u),b=n(19),j=function(){return{request:Object(r.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){var n,r,c,a,s,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:c});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),[])}},h=n(39),O=n(41),f=n(5),m=n(10),p=Object(m.b)("HEROES_FETCHING"),g=Object(m.b)("HEROES_FETCHED"),x=function(){return{type:"HEROES_FETCHING_ERROR"}},E=function(){return{type:"FILTERS_FETCHING"}},v=function(e){return{type:"FILTERS_FETCHED",payload:e}},N=function(){return{type:"FILTERS_FETCHING_ERROR"}},y=n(1),R=function(e){var t,n=e.name,r=e.description,c=e.element,a=e.onDelete;switch(c){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(y.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(y.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsx)("h3",{className:"card-title",children:n}),Object(y.jsx)("p",{className:"card-text",children:r})]}),Object(y.jsx)("span",{onClick:a,className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",children:Object(y.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},T=function(){return Object(y.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(y.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},S=(n(33),function(){var e=Object(f.a)((function(e){return e.filters.activeFilter}),(function(e){return e.heroes.heroes}),(function(e,t){return"all"===e?(console.log("render"),t):t.filter((function(t){return t.element===e}))})),t=Object(o.c)(e),n=Object(o.c)((function(e){return e.heroes.heroesLoadingStatus})),c=Object(o.b)(),a=j().request;Object(r.useEffect)((function(){c(function(e){return function(t){t(p()),e("http://localhost:3001/heroes").then((function(e){return t(g(e))})).catch((function(){return t(x())}))}}(a))}),[]);var s=Object(r.useCallback)((function(e){a("http://localhost:3001/heroes/".concat(e),"DELETE").then((function(e){return console.log(e,"Deleted")})).then(c(function(e){return{type:"HERO_DELETED",payload:e}}(e))).catch((function(e){return console.log(e)}))}),[a]);if("loading"===n)return Object(y.jsx)(T,{});if("error"===n)return Object(y.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var u,d=0===(u=t).length?Object(y.jsx)(h.a,{timeout:0,classNames:"hero",children:Object(y.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"})}):u.map((function(e){var t=e.id,n=Object(l.a)(e,["id"]);return Object(y.jsx)(h.a,{timeout:500,classNames:"hero",children:Object(y.jsx)(R,Object(i.a)(Object(i.a)({},n),{},{onDelete:function(){return s(t)}}))},t)}));return Object(y.jsx)(O.a,{component:"ul",children:d})}),_=n(14),C=n(40),F=function(){var e=Object(r.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(_.a)(a,2),i=s[0],l=s[1],u=Object(r.useState)(""),d=Object(_.a)(u,2),b=d[0],h=d[1],O=Object(o.c)((function(e){return e.filters})),f=O.filters,m=O.filtersLoadingStatus,p=Object(o.b)(),g=j().request;return Object(y.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t,r={id:Object(C.a)(),name:n,description:i,element:b};g("http://localhost:3001/heroes","POST",JSON.stringify(r)).then((function(e){return console.log(e,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430")})).then(p((t=r,{type:"HERO_CREATED",payload:t}))).catch((function(e){return console.log(e)})),c(""),l(""),h("")},children:[Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(y.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(y.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:i,onChange:function(e){return l(e.target.value)}})]}),Object(y.jsxs)("div",{className:"mb-3",children:[Object(y.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(y.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:b,onChange:function(e){return h(e.target.value)},children:[Object(y.jsx)("option",{value:"",children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e,t){return"loading"===t?Object(y.jsx)("option",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}):"error"===t?Object(y.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(y.jsx)("option",{value:t,children:n},t)})):void 0}(f,m)]})]}),Object(y.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},w=n(20),H=n.n(w),L=function(){var e=Object(o.c)((function(e){return e.filters})),t=e.filters,n=e.filtersLoadingStatus,c=e.activeFilter,a=Object(o.b)(),s=j().request;if(Object(r.useEffect)((function(){a(function(e){return function(t){t(E()),e("http://localhost:3001/filters").then((function(e){return t(v(e))})).catch((function(){return t(N())}))}}(s))}),[]),"loading"===n)return Object(y.jsx)(T,{});if("error"===n)return Object(y.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var i,l=0===(i=t).length?Object(y.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):i.map((function(e){var t=e.name,n=e.className,r=e.label,s=H()("btn",n,{active:t===c});return Object(y.jsx)("button",{id:t,className:s,onClick:function(){return a({type:"ACTIVE_FILTER_CHANGED",payload:t})},children:r},t)}));return Object(y.jsx)("div",{className:"card shadow-lg mt-4",children:Object(y.jsxs)("div",{className:"card-body",children:[Object(y.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(y.jsx)("div",{className:"btn-group",children:l})]})})},I=(n(34),function(){return Object(y.jsx)("main",{className:"app",children:Object(y.jsxs)("div",{className:"content",children:[Object(y.jsx)(S,{}),Object(y.jsxs)("div",{className:"content__interactive",children:[Object(y.jsx)(F,{}),Object(y.jsx)(L,{})]})]})})}),D=n(21),k={heroes:[],heroesLoadingStatus:"idle"},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HEROES_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{heroesLoadingStatus:"loading"});case"HEROES_FETCHED":return Object(i.a)(Object(i.a)({},e),{},{heroes:t.payload,heroesLoadingStatus:"idle"});case"HEROES_FETCHING_ERROR":return Object(i.a)(Object(i.a)({},e),{},{heroesLoadingStatus:"error"});case"HERO_CREATED":return Object(i.a)(Object(i.a)({},e),{},{heroes:[].concat(Object(D.a)(e.heroes),[t.payload])});case"HERO_DELETED":return Object(i.a)(Object(i.a)({},e),{},{heroes:e.heroes.filter((function(e){return e.id!==t.payload}))});default:return e}},q={filters:[],filtersLoadingStatus:"idle",activeFilter:"all"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTERS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{filtersLoadingStatus:"loading"});case"FILTERS_FETCHED":return Object(i.a)(Object(i.a)({},e),{},{filters:t.payload,filtersLoadingStatus:"idle"});case"FILTERS_FETCHING_ERROR":return Object(i.a)(Object(i.a)({},e),{},{filtersLoadingStatus:"error"});case"ACTIVE_FILTER_CHANGED":return Object(i.a)(Object(i.a)({},e),{},{activeFilter:t.payload});default:return e}},J=function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},V=Object(m.a)({reducer:{heroes:G,filters:A},middleware:function(e){return e().concat(J)},devTools:!1});n(35);s.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(o.a,{store:V,children:Object(y.jsx)(I,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.aa899e2b.chunk.js.map