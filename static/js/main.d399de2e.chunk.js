(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),i=(a(35),a(6)),o=a(7),s=a(9),m=a(8),u=a(10),d=(a(36),a(37),a(13));function p(){return r.a.createElement("div",{className:"col-md-3 d-md-block",id:"sidebar"},r.a.createElement("div",{id:"me",className:"row"},r.a.createElement("img",{src:"/imgs/me.jpeg",alt:"Kunjal Panchal"}),r.a.createElement("h1",null,"Kunjal Panchal"),r.a.createElement("p",null,"Computer Science Major")),r.a.createElement("div",{id:"navi",className:"row"},r.a.createElement("ul",{className:"navi"},r.a.createElement("li",null,r.a.createElement(d.b,{id:"aboutme",className:"navi-item",exact:!0,to:"/"},"About me")),r.a.createElement("li",null,r.a.createElement(d.b,{id:"projects",className:"navi-item",to:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(d.b,{id:"cv",className:"navi-item",to:"/cv"},"CV")))),r.a.createElement("div",{id:"contact",className:"row"},r.a.createElement("ul",{className:"contact-info"},r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:kunjalspanchal@gmail.com",className:"fa fa-envelope-square"})),r.a.createElement("li",null,r.a.createElement("a",{href:"https://in.NavLinkedin.com/in/kunjal-panchal-07a0b514b",className:"fa fa-NavLinkedin"})),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/astuary",className:"fa fa-github"})))))}var g=a(11),f=a(12),E=a.n(f),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){E.a.get("pages/aboutMe.json").then(function(e){a.setState({aboutme:e.data})}).catch(function(e){a.setState({errorMsg:"Error retriving data"})})},a.state={aboutme:[],errorMsg:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.aboutme,a=e.errorMsg;return r.a.createElement("div",{className:"page"},r.a.createElement("h2",{id:"page-title"},"About Me"),r.a.createElement("div",{id:"page-content"},t.length?t.map(function(e,t){return r.a.createElement("p",{key:t},e)}):r.a.createElement("div",{className:"loading"})),r.a.createElement("br",null),r.a.createElement("p",null,"E-mail:  ",r.a.createElement("a",{id:"email",href:"mailto:kunjalspanchal@gmail.com"},"kunjalspanchal@gmail.com")),r.a.createElement("br",null),a?r.a.createElement("p",null,a):null)}}]),t}(n.Component);function v(e){var t=e.project,a=e.closePopUp;return r.a.createElement("div",{id:"project"},r.a.createElement("div",{id:"project-content"},r.a.createElement("span",{id:"close",onClick:a},"\xd7"),r.a.createElement("h2",{id:"p-title"},t["p-title"]),r.a.createElement("iframe",{id:"p-demo",title:t["p-title"],src:t["p-demo"],frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("dl",null,r.a.createElement("dt",null,r.a.createElement("h4",null,"Description:")),r.a.createElement("dd",{id:"p-desc"},t["p-desc"].map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("dt",null,r.a.createElement("h4",null,"Highlights: ")),r.a.createElement("dd",null,r.a.createElement("ul",{id:"p-high"},t["p-high"].map(function(e,t){return r.a.createElement("li",{key:t},e)})))),r.a.createElement("a",{id:"p-repo",href:t["p-repo"]},"See Repository")))}var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){E.a.get("/projects/project_list.json").then(function(e){a.setState({project_list:e.data})}).catch(function(e){a.setState({errorMsg:"Error retriving data"})}),window.onclick=function(e){e.target===document.getElementById("project")&&a.closePopUp()}},a.btnClick=function(e){E.a.get("/projects/"+e.target.alt+".json").then(function(e){a.setState({project:e.data}),document.getElementById("project").style.display="block"}).catch(function(e){a.setState({errorMsg:"Error retriving data"})})},a.closePopUp=function(e){a.setState({project:{}})},a.state={project_list:[],project:{},errorMsg:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"isEmpty",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"getBtns",value:function(e,t){var a="/imgs/"+e+".jpg";return r.a.createElement("div",{key:t,className:"col-lg-3 col-md-4 col-sm-6 col-12"},r.a.createElement("img",{className:"project-button mx-auto my-auto",onClick:this.btnClick,src:a,alt:e}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.project_list,n=t.project,l=t.errorMsg;return r.a.createElement("div",{className:"page"},r.a.createElement("h2",{id:"page-title"},"Project Section"),r.a.createElement("div",{id:"page-content"},a.length?r.a.createElement("div",{id:"proj-wrapper",className:"row no-gutters"},a.map(function(t,a){return e.getBtns(t,a)})):r.a.createElement("div",{className:"loading"}),this.isEmpty(n)?null:r.a.createElement(v,{project:n,closePopUp:this.closePopUp})),l?r.a.createElement("p",null,l):null)}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){E.a.get("pages/cv.json").then(function(e){a.setState({cv:e.data})}).catch(function(e){a.setState({errorMsg:"Error retriving data"})})},a.state={cv:{},errorMsg:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getStr",value:function(e,t){var a="<dl>";for(var n in e)t||(a+="<li>"),Array.isArray(e[n])?a+="Softwares Games made for personal learning purposes"===n?"<dt><i class='fa fa-gamepad'></i> "+n+"</dt><dd><ul>"+this.getUlStr(e[n])+"<ul></dd>":"<dt>"+n+"</dt><dd><ul>"+this.getUlStr(e[n])+"<ul></dd>":"string"===typeof e[n]?a+="<dt>"+n+"</dt><dd><ul>"+e[n]+"<ul></dd>":a+="Education"===n?"<dt><i class='fa fa-graduation-cap'></i> "+n+"</dt><dd><ul>"+this.getStr(e[n])+"<ul></dd>":"Certificates"===n?"<dt><i class='fa fa-drivers-license-o\t'></i> "+n+"</dt><dd><ul>"+this.getStr(e[n])+"<ul></dd>":"Interests"===n?"<dt><i class='fa fa-street-view'></i> "+n+"</dt><dd><ul>"+this.getStr(e[n])+"<ul></dd>":"<dt>"+n+"</dt><dd><ul>"+this.getStr(e[n])+"<ul></dd>",t||(a+="</li>");return a+"</dl>"}},{key:"getUlStr",value:function(e){var t="<ul>",a=!0,n=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){t+="<li>"+l.value+"</li>"}}catch(i){n=!0,r=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}return t+"</ul>"}},{key:"isEmpty",value:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement("h2",{id:"page-title"},"CV"),this.isEmpty(this.state.cv)?r.a.createElement("div",{className:"loading"}):r.a.createElement("div",{id:"page-content",dangerouslySetInnerHTML:{__html:"<div id='cv'> ".concat(this.getStr(this.state.cv,!0)," <br><br><br><br><br><br><div style='position: relative;'><a href='files/Resume.pdf' class='btn btn-primary' target='_blank'><i class='fa fa-download'></i> Download CV</a></div></div>")}}),r.a.createElement("br",null),r.a.createElement("br",null),this.state.errorMsg?r.a.createElement("p",null,this.state.errorMsg):null)}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).toggleSidebar=function(e){setTimeout(function(){document.getElementById("wrapper").classList.toggle("menuDisplayed")},250)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p,null),r.a.createElement("div",{className:"col-md-9",id:"main-content"},r.a.createElement(g.a,{exact:!0,path:"/",component:h}),r.a.createElement(g.a,{path:"/projects",component:b}),r.a.createElement(g.a,{path:"/cv",component:j}))),r.a.createElement("button",{className:"d-md-none",onClick:this.toggleSidebar,id:"toggle-menu"},r.a.createElement("i",{className:"fa fa-bars"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("wrapper")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.d399de2e.chunk.js.map