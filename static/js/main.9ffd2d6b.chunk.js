(this["webpackJsonpgithub-profile"]=this["webpackJsonpgithub-profile"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/loader.236d70a3.svg"},33:function(e,t,a){e.exports=a(76)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(13),c=a.n(l),s=a(8),o=function(e){return r.a.createElement("main",{className:"Main"},e.children)},i=a(11),u=(a(43),function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("a",{href:"https://github.com",title:"Github Logo"},r.a.createElement(i.a,{className:"logo",size:"2em"})),r.a.createElement("a",{href:"https://github.com",title:"Github Logo"},r.a.createElement("h1",{className:"title"},"Github")))}),m=(a(44),function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("span",null))}),p=(a(45),a(3)),E=a(12),f=a(10),d=a(4),h=a.n(d),g=a(5),b=a(28),_=a.n(b),v=(a(47),function(e){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:_.a,alt:"Loading",style:e.style}))}),N=a(29),w=a.n(N);function y(e){return"{}"===JSON.stringify(e)}function F(e){return 0===e.length}function O(e){return w()(e).format("MMMM, Do YYYY")}function S(e){return{type:"SET_FETCH_STATUS",payload:{flag:e}}}var L=a(31),T=a(32),j="https://api.github.com/users/Bishalsarang",R={"C++":"#F34B7D",HTML:"#E34c26",Python:"#3572A5",JavaScript:"#F1E05A","Jupyter Notebook":"#DA5B0B"},k=a(30),x=a.n(k),A=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),I=(a(66),Object(s.b)((function(e){return console.log(e),{isFetching:e.fetch.isFetching,profile:e?e.profile.profile:{}}}),(function(e){return{setProfile:function(t){return e(function(e){return{type:"SET_PROFILE",payload:{profile:e}}}(t))},setFetchStatus:function(t){return e(S(t))}}}))((function(e){var t=e.profile,a=e.isFetching,l=e.setProfile,c=e.setFetchStatus,s=t.bio,o=t.name,i=t.blog,u=t.login,m=t.email,p=t.company,d=t.location,b=t.followers,_=t.following,N=t.updated_at,w=t.avatar_url,F=t.created_at,S=t.public_repos;t.twitter_username;Object(n.useEffect)((function(){y(t)?(console.log("Fetching",t),R().then((function(e){e&&(l(e.data),c(!1))}))):console.log("Already fetched")}),[l]);var R=function(){var e=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,A(j).then((function(e){return e}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"Profile"},a||y(t)?r.a.createElement(v,null):r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"avatar-image-wrapper"},r.a.createElement("img",{className:"avatar-img",src:w,alt:"".concat(u," Avatar")})),r.a.createElement("h3",{className:"name"},o),r.a.createElement("span",{className:"username"},"@",u),p&&r.a.createElement("span",{className:"company"},r.a.createElement(f.a,null)," ",p),s&&r.a.createElement("span",{className:"bio"},"Bio: ",s),i&&r.a.createElement("span",{className:"blog"},r.a.createElement("a",{href:i,title:"Website"},r.a.createElement(L.a,null)," ",i)),m&&r.a.createElement("span",{className:"email"},"Email: ",m),d&&r.a.createElement("span",{className:"location"},r.a.createElement(T.a,null),d),b&&r.a.createElement("span",{className:"followers"},"Followers: ",b),_&&r.a.createElement("span",{className:"following"},"Following: ",_),S&&r.a.createElement("span",{className:"public_repos"},r.a.createElement(E.a,null),"Repositories ",S),N&&r.a.createElement("span",{className:"updated_at"},"Updated: ",O(N)),F&&r.a.createElement("span",{className:"created_at"},"Created: ",O(F))))}))),P=a(17),B=(a(67),function(e){var t=e.repo,a=t.name,n=t.html_url,l=t.language,c=t.created_at,s=t.updated_at,o=t.description,u=t.forks_count,m=t.stargazers_count;return r.a.createElement("div",{className:"RepoItem"},r.a.createElement("a",{href:n,title:a,target:"_blank"},r.a.createElement("h3",{className:"title"},a)),r.a.createElement("p",{className:"desc"},o),r.a.createElement("div",{className:"meta"},r.a.createElement("div",{className:"language"},r.a.createElement("span",{className:"indicator",style:{background:R[l]}}),r.a.createElement("span",null,l)),r.a.createElement("span",{className:"forks-count"},r.a.createElement(i.b,null),u),r.a.createElement("span",{className:"stargazers_count"},r.a.createElement(i.c,null),m)),r.a.createElement("div",{className:"dates"},r.a.createElement("span",{className:"created-at"},"Created at: ",O(c)),r.a.createElement("span",{className:"updated-at"},"Updated at: ",O(s))))}),C=(a(68),a(69),Object(s.b)((function(e){return{repoList:e?e.repo.repoList:[],isFetching:e.fetch.isFetching}}),(function(e){return{setRepoList:function(t){return e(function(e){return{type:"SET_REPO_LIST",payload:{repoList:e}}}(t))},setFetchStatus:function(t){return e(S(t))}}}))((function(e){var t=e.repoList,a=e.isFetching,l=e.setRepoList,c=e.setFetchStatus,s=Object(n.useState)(""),o=Object(P.a)(s,2),i=o[0],u=o[1],m=Object(n.useState)([]),p=Object(P.a)(m,2),E=p[0],f=p[1];Object(n.useEffect)((function(){F(t)?d().then((function(e){e&&(l(e.data),c(!1))})):console.log("Repository List already fetched")}),[t,l]),Object(n.useEffect)((function(){f(t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})))}),[t,i]);var d=function(){var e=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,A("https://api.github.com/users/Bishalsarang/repos").then((function(e){return e}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"RepoList"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Find a repository",onChange:function(e){return u(e.target.value)}}),a?r.a.createElement(v,null):!F(t)&&r.a.createElement("ul",{className:"RepoItemList"},E.map((function(e){return r.a.createElement(B,{key:e.id,repo:e})}))))}))),D=(a(70),a(71),function(e){var t=e.className;return r.a.createElement("div",{className:t},r.a.createElement(p.d,null,r.a.createElement(p.b,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"tab__logo"},r.a.createElement(f.c,null)),r.a.createElement("span",{className:"tab__name"},"Profile")),r.a.createElement(p.a,null,r.a.createElement("div",{className:"tab__logo"},r.a.createElement(E.a,null)),r.a.createElement("span",{className:"tab__name"},"Repositories")),r.a.createElement(p.a,null,r.a.createElement("div",{className:"tab__logo"},r.a.createElement(f.b,null)),r.a.createElement("span",{className:"tab__name"},"Followers")),r.a.createElement(p.a,null,r.a.createElement("div",{className:"tab__logo"},r.a.createElement(E.a,null)),r.a.createElement("span",{className:"tab__name"},"Following")),r.a.createElement(p.a,null,r.a.createElement("div",{className:"tab__logo"},r.a.createElement(f.d,null)),r.a.createElement("span",{className:"tab__name"},"Stars"))),r.a.createElement(p.c,null,r.a.createElement(I,null)),r.a.createElement(p.c,null,r.a.createElement(C,null)),r.a.createElement(p.c,null,r.a.createElement("h2",null,"Followers")),r.a.createElement(p.c,null,r.a.createElement("h2",null,"Followings")),r.a.createElement(p.c,null,r.a.createElement("h2",null,"Stars"))))}),M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(o,null,r.a.createElement(D,{className:"container"})),r.a.createElement(m,null))},U=a(7),J=a(9),H={repoList:[]},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_REPO_LIST":return Object(J.a)({},e,{repoList:t.payload.repoList,isFetching:!1});default:return e}},Y={isFetching:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FETCH_STATUS":return Object(J.a)({},e,{isFetching:t.payload.flag});default:return e}},G={profile:{}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE":return Object(J.a)({},e,{profile:t.payload.profile});default:return e}},V=Object(U.b)({repo:X,profile:W,fetch:z}),$=Object(U.c)(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72),a(73),a(74),a(75);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:$},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9ffd2d6b.chunk.js.map