(function(t){function a(a){for(var s,n,o=a[0],l=a[1],c=a[2],d=0,f=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(a);while(f.length)f.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(s=!1)}s&&(i.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},i=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),r=e.n(s);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid text-darkcyan",attrs:{id:"app"}},[e("Navbar"),e("Intro"),e("Introcards"),e("Projects"),e("Resume"),e("Contact")],1)},i=[],n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"row navbar navbar-expand-lg navbar-dark bg-gradient-darkcyan text-platinum"},[e("div",{staticClass:"collapse navbar-collapse d-flex justify-content-center"},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#welcome"}},[t._v("Welcome")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#aboutMe"}},[t._v("About Me")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#resume"}},[t._v("Resume")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[t._v("Contact")])])])])])}],l=(e("f7ba"),e("2877")),c={},u=Object(l["a"])(c,n,o,!1,null,"567c6f46",null),d=u.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"invisible",attrs:{id:"welcome"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"image-box"},[e("h1",{staticClass:"text-platinum font-weight-bold"},[t._v("Welcome to Matthew Winemiller's portfolio!")])])])])])}],h=(e("d018"),{}),p=Object(l["a"])(h,f,m,!1,null,"5bead763",null),v=p.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 bg-platinum pb-2 p-0"},[e("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"aboutMe"}},[t._v("About Me")]),e("div",{staticClass:"card-columns text-center mx-1"},[e("div",{staticClass:"card text-center"},[e("i",{staticClass:"card-img-top fas fa-laptop-code",attrs:{alt:"fact generator"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Fun Fact Generator")]),e("p",{staticClass:"card-text",staticStyle:{height:"3rem"},attrs:{id:"funFacts"}},[t._v(t._s(t.facts[t.currentFact]))]),e("button",{staticClass:"btn btn-block btn-secondary",attrs:{id:"facts"},on:{click:t.generateFact}},[t._v("Generate a New Fact")])])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card p-3"},[e("blockquote",{staticClass:"blockquote mb-0 card-body"},[e("p",[t._v(" Full stack developer focused on teamwork and problem solving. Driven to meet and exceed client needs and to accommodate team members with my background in education. Collaborating with all parties and keeping fellow employees tuned into the task on hand comes from my background as a teacher for 5 years. While leading the implementation of a 1:1 Chromebook program for 4th graders, I’ve studied Javascript, HTML, and CSS extensively both alone and as part of The University of Arizona’s coding boot camp. The same amount of effort required of a Teacher of the Year Nominee from an A+ school will be applied to both my lifelong learning and my future employer. ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Hobbies")]),e("ul",{staticClass:"card-text list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[t._v("Reading")]),e("li",{staticClass:"list-group-item"},[t._v("Gaming")]),e("li",{staticClass:"list-group-item"},[t._v("Watching sports/esports")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card bg-darkteal text-white text-center p-1 mx-auto",staticStyle:{width:"10rem"}},[s("img",{staticClass:"img-fluid shadow",attrs:{src:e("57cc"),alt:"Portfolio image"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card text-center"},[e("i",{staticClass:"card-img-top fas fa-school",attrs:{alt:"school"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Education")]),e("ul",{staticClass:"card-text text-left"},[e("li",[t._v("2019 - The University of Arizona Coding Boot Camp")]),e("li",[t._v("2016 - Pima Community College (Elementary Certification)")]),e("li",[t._v(" 2010 - The University of Arizona (BA in Sociology with a minor in Portuguese) ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("i",{staticClass:"card-img-top fas fa-laptop text-center",attrs:{alt:"self study"}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title text-center"},[t._v("Find Me On These Sites!")]),e("div",{staticClass:"list-group"},[e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://github.com/Mrrwmix",target:"_blank"}},[e("i",{staticClass:"fab fa-github"}),t._v(" Github ")]),e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.khanacademy.org/profile/Mirthew/projects",target:"_blank"}},[e("i",{staticClass:"fas fa-leaf"}),t._v(" Khan Academy ")]),e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://codepen.io/mrrwmix/",target:"_blank"}},[e("i",{staticClass:"fab fa-codepen"}),t._v(" Codepen ")]),e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.linkedin.com/in/matthew-winemiller-27497b37/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin"}),t._v(" LinkedIn ")]),e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.codewars.com/users/Mrrwmix",target:"_blank"}},[e("i",{staticClass:"far fa-file-code"}),t._v(" Code Wars ")]),e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"http://mattman88.blogspot.com/",target:"_blank"}},[e("i",{staticClass:"fas fa-chalkboard-teacher"}),t._v(" Teaching Portfolio ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card p-3 text-right"},[e("blockquote",{staticClass:"blockquote mb-0 d-flex justify-content-between"},[e("i",{staticClass:"fab fa-html5"}),e("i",{staticClass:"fab fa-css3-alt"}),e("i",{staticClass:"fab fa-js-square"}),e("i",{staticClass:"fab fa-bootstrap"}),e("i",{staticClass:"fab fa-react"}),e("i",{staticClass:"fab fa-node"}),e("i",{staticClass:"fas fa-database"}),e("i",{staticClass:"fab fa-github"}),e("i",{staticClass:"fab fa-java"}),e("i",{staticClass:"fab fa-vuejs"}),e("footer",{staticClass:"blockquote-footer"},[e("small",{staticClass:"text-muted"},[t._v("Coding toolbox")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Matthew's Favorite Quotes")]),e("p",{staticClass:"card-text",attrs:{id:"gr_quote_body"}}),e("p",{staticClass:"card-text"},[e("a",{attrs:{href:"https://www.goodreads.com/user/show/21696553-matthew-winemiller",target:"_blank",rel:"noopener noreferrer"}},[e("small",{staticClass:"text-muted"},[t._v(" Goodreads Quotes "),e("i",{staticClass:"fab fa-goodreads"})])])])])])}],C={data:function(){return{facts:["I have traveled to over 15 countries!","I have dual citizenship. Brazil and USA.","My daughter is a citizen of three countries. Brazil, South Korea, and USA.","My daughter's name is Lina!","In addition to English, I can speak Portuguese, as well as a bit of Spanish and Korean","I try to read at least 25 books per year.","My favorite authors are Robert Jordan, Brandon Sanderson, Kurt Vonnegut, and Terry Pratchett.","My favorite Marvel show is Jessica Jones.","My dad and I watch every Browns game, every season. Even when they were 0-16.","I have been married for over 5 years!","My favorite dish is bibim guksu (spicy Korean noodles).","I read to my daughter every day.","I'm still a fan of pro-wrestling. It's entertaining!","My favorite movie is The Matrix.","My favorite book is Catch-22 by Joseph Heller.","I drink too much coffee.","My favorite game series is the Super Smash Bros series.","My favorite book series is The Wheel of Time.","I watch Sesame Street almost every day thanks to Lina and PBS Kids.","I lived in South Korea for 3 years working as an English teacher."],currentFact:Math.floor(20*Math.random())}},methods:{generateFact:function(){var t=Math.floor(Math.random()*this.facts.length);while(t===this.currentFact)t=Math.floor(Math.random()*this.facts.length);this.currentFact=t}}},_=C,y=Object(l["a"])(_,b,g,!1,null,null,null),w=y.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"col-md-12 d-flex justify-content-center flex-wrap bg-platinum"},t._l(t.githubArray,(function(a,s){return e("div",{key:s,staticClass:"card float-left border border-darkcyan m-2 shadow",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title text-darkteal"},[t._v(t._s(a.name))]),e("p",{staticClass:"card-text"},[t._v(t._s(a.description))])]),e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[t._v(" "+t._s(a.language)+" "),null==a.language?e("span",[t._v("JavaScript ")]):t._e(),null==a.language||a.description.toLowerCase().includes("react")?e("i",{staticClass:"fab fa-react text-info"}):"vue"===a.language.toLowerCase()||a.description.toLowerCase().includes("vue")?e("i",{staticClass:"fab fa-vuejs text-darkcyan"}):a.description.toLowerCase().includes("node")?e("i",{staticClass:"fab fa-node text-success"}):"javascript"===a.language.toLowerCase()?e("i",{staticClass:"fab fa-js-square text-warning"}):"java"===a.language.toLowerCase()?e("i",{staticClass:"fab fa-java"}):"css"===a.language.toLowerCase()?e("i",{staticClass:"fab fa-css3-alt text-primary"}):e("i",{staticClass:"fab fa-html5 text-danger"})])]),e("div",{staticClass:"card-body"},[null!=a.homepage&&""!=a.homepage?e("a",{staticClass:"card-link text-info",attrs:{href:a.homepage,target:"_blank"}},[t._v("Deployed URL")]):t._e(),e("a",{staticClass:"card-link text-info",attrs:{href:a.html_url,target:"_blank"}},[t._v("Source Code")])])])})),0)])},k=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-12 pb-2 p-0 bg-platinum"},[e("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"portfolio"}},[t._v("Portfolio")])])}],M=(e("4de4"),e("b0c0"),e("bc3a")),j=e.n(M),E={data:function(){return{githubArray:[]}},mounted:function(){var t=this;j.a.get("https://api.github.com/users/Mrrwmix/repos?sort=created&per_page=100").then((function(a){t.githubArray=a.data.filter((function(t){return"mrrwmix.github.io"!=t.name}))}))}},S=E,O=Object(l["a"])(S,x,k,!1,null,null,null),$=O.exports,I=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 bg-platinum p-0"},[e("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"resume"}},[t._v("Resume")]),e("h2",{staticClass:"text-center py-3 resume"},[e("a",{staticClass:"text-darkteal",attrs:{href:"https://drive.google.com/file/d/1Kvb7Lr0Y1l1rCcXnM9oDhO9PnrxwK2cO/view?usp=sharing",target:"_blank"}},[t._v(" Download Resume: "),e("i",{staticClass:"fas fa-download"})])])])])}],T={},A=Object(l["a"])(T,I,P,!1,null,null,null),F=A.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 bg-platinum p-0"},[e("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"contact"}},[t._v("Contact")]),e("h2",{staticClass:"text-center py-3"},[t._v(" Email me: "),e("a",{staticClass:"text-darkteal",attrs:{href:"mailto:mrrwmix@gmail.com",rel:"noopener noreferrer"}},[e("i",{staticClass:"fas fa-mail-bulk"}),t._v(" Mrrwmix@gmail.com ")])]),e("h2",{staticClass:"text-center py-3"},[t._v(" Call me: "),e("i",{staticClass:"fas fa-mobile-alt"}),t._v(" (520) 977-9253 ")])])])}],K={},B=Object(l["a"])(K,L,q,!1,null,null,null),J=B.exports,R={name:"app",components:{Navbar:d,Intro:v,Introcards:w,Projects:$,Resume:F,Contact:J}},z=R,W=(e("034f"),Object(l["a"])(z,r,i,!1,null,null,null)),U=W.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(U)}}).$mount("#app")},"57cc":function(t,a,e){t.exports=e.p+"img/go.9caebd11.png"},8466:function(t,a,e){},"85ec":function(t,a,e){},c67c:function(t,a,e){},d018:function(t,a,e){"use strict";var s=e("c67c"),r=e.n(s);r.a},f7ba:function(t,a,e){"use strict";var s=e("8466"),r=e.n(s);r.a}});
//# sourceMappingURL=app.b9624be7.js.map