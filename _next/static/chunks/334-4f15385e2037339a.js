"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{5669:function(e,n,r){r.d(n,{CQ:function(){return i},dd:function(){return c}});var a=r(8961),s=r(9461),t=r(9670),l=r(2424);function i(e,n){return(0,t.Z)(e?"/books/".concat(e):null,{},n)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.page,i=void 0===r?1:r,c=(0,s.Z)(e,["page"]);return(0,t.H)((function(e,n){return n&&!n.length?null:(0,l.Z)("/books",(0,a.Z)({page:e+i},c))}),n)}n.ZP=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return(0,t.Z)("/books",e,n)}},9670:function(e,n,r){r.d(n,{H:function(){return c}});var a=r(8961),s=r(9461),t=r(2424),l=r(6747),i=r(3953);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,i.ZP)(e,n),t=r.data,l=r.error,c=(0,s.Z)(r,["data","error"]);return(0,a.Z)({data:t,isLoading:!l&&!t,isError:l},c)}n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=e?(0,t.Z)(e,n):null,c=(0,l.ZP)(i,r),d=c.data,o=c.error,u=(0,s.Z)(c,["data","error"]);return(0,a.Z)({data:d,isLoading:!o&&!d,isError:o},u)}},2424:function(e,n,r){var a=r(8057);n.Z=function(e,n){return 0===Object.keys(n).length?e:[e,Object.entries(n).filter((function(e){var n=(0,a.Z)(e,2);n[0];return n[1]})).map((function(e){var n=(0,a.Z)(e,2),r=n[0],s=n[1];return"".concat(r,"=").concat(s)})).join("&")].join("?")}},8207:function(e,n,r){var a=r(8961),s=r(1527),t=r(343),l=function(e){var n=e.message,r=e.type,a=e.Icon;return(0,s.jsx)("div",{className:"alert alert-".concat(r," shadow-lg"),children:(0,s.jsxs)("div",{children:[(0,s.jsx)(a,{className:"w-6 h-6"}),(0,s.jsx)("span",{children:n})]})})},i={Error:function(e){return(0,s.jsx)(l,(0,a.Z)({type:"error",Icon:t.$Vt},e))},Warning:function(e){return(0,s.jsx)(l,(0,a.Z)({type:"warning",Icon:t.G5O},e))},Info:function(e){return(0,s.jsx)(l,(0,a.Z)({type:"info",Icon:t.h5X},e))},Success:function(e){return(0,s.jsx)(l,(0,a.Z)({type:"success",Icon:t.Mk_},e))}};n.Z=i},6260:function(e,n,r){var a=r(1527),s={Pulse:function(e){var n=e.children,r=e.className;return(0,a.jsx)("div",{className:t(r,"animate-pulse"),children:n})},Line:function(e){var n=e.className;return(0,a.jsx)("div",{className:t(n,"h-2 bg-slate-700 rounded")})},Square:function(e){var n=e.className;return(0,a.jsx)("div",{className:t(n,"bg-slate-700 rounded")})},Circle:function(e){var n=e.className;return(0,a.jsx)("div",{className:t(n,"bg-slate-700 rounded-full")})}};function t(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter(Boolean).join(" ")}n.Z=s},2003:function(e,n,r){var a=r(1527),s=function(e){var n=e.children;return(0,a.jsx)("h1",{className:"text-2xl w-full py-2",children:n})},t=Object.assign((function(e){var n=e.title,r=e.children;return(0,a.jsxs)("div",{className:"flex flex-col",children:[n&&(0,a.jsx)(s,{children:n}),r]})}),{SubBox:function(e){var n=e.title,r=e.children;return(0,a.jsxs)("div",{className:"flex flex-col items-start my-2",children:[n&&(0,a.jsx)("h2",{className:"text-lg capitalize w-full my-2",children:n}),r]})},Header:s});n.Z=t},7263:function(e,n,r){r.d(n,{H:function(){return C}});var a=r(1527),s=r(5967),t=r(9493),l=r.n(t),i={root:[{name:"My library",href:"#"},{name:"Ranking",href:"#"},{name:"Quote",href:"#"},{name:"I'm Feeling Lucky",href:"/random"}],user:[{name:"Profile",href:"#"},{name:"Settings",href:"#"},{name:"Logout",href:"#"}]},c=function(e){var n=e.toggleId;return(0,a.jsxs)("div",{className:"drawer-side",children:[(0,a.jsx)("label",{htmlFor:n,className:"drawer-overlay"}),(0,a.jsx)("ul",{className:"menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content",children:i.root.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:e.href,children:(0,a.jsx)("a",{children:e.name})})},n)}))})]})},d=function(e){var n=e.toggleId;return(0,a.jsx)("label",{htmlFor:n,className:"btn btn-ghost btn-circle",children:(0,a.jsx)(s.r0I,{className:"h-6 w-6","aria-hidden":"true"})})},o=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"hidden md:block relative",children:[(0,a.jsx)(s.G4C,{className:"h-6 w-6 absolute top-3 left-3 text-gray-400"}),(0,a.jsx)("div",{className:"form-control",children:(0,a.jsx)("input",{type:"text",placeholder:"Search...",className:"input bg-base-300 text-xl w-96 pl-10"})})]}),(0,a.jsx)(l(),{href:"#",children:(0,a.jsx)("a",{className:"btn btn-ghost btn-circle md:hidden",children:(0,a.jsx)(s.G4C,{className:"h-6 w-6","aria-hidden":"true"})})})]})},u=r(2379),h=r.n(u),x=function(e){var n=e.href,r=e.src,s=e.children;return(0,a.jsx)("div",{className:"flex justify-start",children:(0,a.jsx)(l(),{href:null!==n&&void 0!==n?n:"/",children:(0,a.jsxs)("a",{className:"btn gap-1 btn-ghost normal-case",children:[(0,a.jsx)("span",{className:"sr-only",children:null!==s&&void 0!==s?s:"Logo"}),r?(0,a.jsx)(h(),{src:r,alt:"logo"}):null,(0,a.jsx)("h1",{className:"text-xl font-bold text-base-content",children:s})]})})})},m=r(9670);function f(e,n){return(0,m.Z)(e?"/users/".concat(e):null,{},n)}var j,v=r(343),g=r(6260),b=function(){var e=f("1"),n=e.data,r=e.isError,s=e.isLoading;return r?(0,a.jsx)("div",{className:"text-error",children:"Login Error"}):s?(0,a.jsx)(g.Z.Line,{className:"animate-pulse w-20 mr-4"}):n?(0,a.jsxs)("div",{className:"btn btn-link btn-xs text-base-content",children:["Hi!\xa0",(0,a.jsx)("b",{children:n.username})]}):(0,a.jsx)(l(),{href:"#",children:(0,a.jsx)("a",{className:"btn btn-link btn-xs",children:"Sign in / Sign up"})})},N=function(){var e=f("1"),n=e.data,r=e.isError,t=e.isLoading;return r?(0,a.jsx)(v.$Vt,{className:"w-6 h-6 text-error"}):t?(0,a.jsx)(v.H_P,{className:"animate-spin w-6 h-6"}):n?(0,a.jsx)(h(),{src:n.avatar,width:24,height:24,alt:"User avatar"}):(0,a.jsx)(s._K$,{className:"h-6 w-6","aria-hidden":"true"})},p=function(){return f("1").data?(0,a.jsx)("ul",{tabIndex:0,className:"menu menu-compact dropdown-content shadow bg-base-300 rounded-box w-52 mt-3 p-2 sm:mt-4 sm:p-0",children:i.user.map((function(e,n){return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:e.href,children:(0,a.jsx)("a",{children:e.name})})},n)}))}):(0,a.jsx)(a.Fragment,{})},w=function(){return(0,a.jsxs)("div",{className:"dropdown dropdown-end",children:[(0,a.jsx)("label",{tabIndex:0,className:"hidden sm:block normal-case",children:(0,a.jsx)(b,{})}),(0,a.jsx)("label",{tabIndex:0,className:"btn btn-ghost btn-circle avatar sm:hidden",children:(0,a.jsx)("div",{className:"w-6 rounded-full",children:(0,a.jsx)(N,{})})}),(0,a.jsx)(p,{})]})},y={src:"/_next/static/media/logo.251b33aa.svg",height:24,width:24},Z=function(){return(0,a.jsxs)("div",{className:"hidden h-7 bg-black justify-between sm:flex","data-theme":"dracula",children:[(0,a.jsx)("nav",{className:"navbar min-h-0 flex-1",children:i.root.map((function(e,n){return(0,a.jsx)(l(),{href:e.href,children:(0,a.jsx)("a",{className:"btn btn-link btn-xs text-gray-400 hover:text-primary focus:text-primary-focus",children:e.name})},n)}))}),(0,a.jsx)("div",{className:"justify-end",children:(0,a.jsx)(w,{})})]})},k=function(){return(0,a.jsxs)("div",{className:"min-w-full",children:[(0,a.jsx)(Z,{}),(0,a.jsx)("div",{className:"bg-inherit p-2 md:p-0 md:bg-base-300",children:(0,a.jsxs)("header",{className:"navbar p-0 m-auto rounded-md max-w-screen-lg bg-base-300 md:rounded-none",children:[(0,a.jsx)("div",{className:"navbar-start sm:hidden",children:(0,a.jsx)(d,{toggleId:"mobile-menu"})}),(0,a.jsx)("div",{className:"navbar-center sm:navbar-start",children:(0,a.jsx)(x,{src:y,children:"Bookworm"})}),(0,a.jsxs)("div",{className:"navbar-end",children:[(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"sm:hidden",children:(0,a.jsx)(w,{})})]})]})})]})},I=function(e){var n=e.time,r=e.author,s=(new Date).getFullYear();return(0,a.jsx)("footer",{className:"footer footer-center p-4 bg-base-300 text-base-content",children:(0,a.jsx)("div",{children:(0,a.jsxs)("p",{children:["Copyright \xa9 ",n===s?s:"".concat(n," - ").concat(s),", All right reserved",r?" by ".concat(r):null,"."]})})})},L=function(e){var n=e.children;return(0,a.jsx)("div",{className:"flex flex-col min-h-screen min-w-full w-full",children:n})},E=function(e){var n=e.children;return(0,a.jsx)("main",{className:"flex-1 max-w-screen-lg w-full mx-auto p-6 md:p-4",children:n})},_=(Object.assign(L,{Main:E,Header:k,Footer:I}),j=L,function(e){return(0,a.jsxs)("div",{className:"drawer",children:[(0,a.jsx)("input",{id:e.toggleId,type:"checkbox",className:"drawer-toggle"}),(0,a.jsx)("div",{className:"drawer-content",children:(0,a.jsx)(j,{children:e.children})}),(0,a.jsx)(c,{toggleId:e.toggleId})]})}),C=function(e){var n=e.children;return(0,a.jsxs)(_,{toggleId:"mobile-menu",children:[(0,a.jsx)(k,{}),(0,a.jsx)(E,{children:n}),(0,a.jsx)(I,{time:2022,author:"Zheng Junyi"})]})}}}]);