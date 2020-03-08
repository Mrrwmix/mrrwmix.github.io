(function(t){function e(e){for(var s,n,c=e[0],l=e[1],o=e[2],u=0,m=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},4420:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid text-darkcyan",attrs:{id:"app"}},[a("Navbar"),a("Intro"),a("Introcards"),a("Blog"),a("Projects"),a("Resume"),a("Contact")],1)},r=[],n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"row navbar navbar-expand-lg navbar-dark bg-gradient-darkcyan text-platinum"},[a("div",{staticClass:"collapse navbar-collapse d-flex justify-content-center"},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#welcome"}},[t._v("Welcome")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#aboutMe"}},[t._v("About Me")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#blog"}},[t._v("Blog")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#resume"}},[t._v("Resume")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[t._v("Contact")])])])])])}],l=(a("9440"),a("2877")),o={},d=Object(l["a"])(o,n,c,!1,null,"80772138",null),u=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"invisible",attrs:{id:"welcome"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"image-box"},[a("h1",{staticClass:"text-platinum font-weight-bold"},[t._v("Welcome to Matthew Winemiller's portfolio!")])])])])])}],p=(a("d018"),{}),v=Object(l["a"])(p,m,f,!1,null,"5bead763",null),g=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 bg-platinum pb-2 p-0"},[a("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"aboutMe"}},[t._v("About Me")]),a("div",{staticClass:"card-columns text-center mx-1"},[a("div",{staticClass:"card text-center"},[a("i",{staticClass:"card-img-top fas fa-laptop-code",attrs:{alt:"fact generator"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Fun Fact Generator")]),a("transition",{attrs:{name:"fade"}},[a("p",{staticClass:"card-text",staticStyle:{height:"3rem"},attrs:{id:"funFacts"}},[t._v(t._s(t.facts[t.currentFact]))])]),a("button",{staticClass:"btn btn-block btn-secondary",attrs:{id:"facts"},on:{click:t.generateFact}},[t._v("Generate a New Fact")])],1)]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card p-3"},[a("blockquote",{staticClass:"blockquote mb-0 card-body"},[a("p",[t._v(" I am a Full Stack Developer, mostly experienced in JavaScript, SQL, and Java. My preferred JS framework is Vue, but I've used React and Angular as well. Most of my SQL experience is with SQL Server. I love being a support dev and fixing things! ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Hobbies")]),a("ul",{staticClass:"card-text list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[t._v("Reading")]),a("li",{staticClass:"list-group-item"},[t._v("Gaming")]),a("li",{staticClass:"list-group-item"},[t._v("Watching sports/esports")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-darkteal text-white text-center p-1 mx-auto",staticStyle:{width:"10rem"}},[s("img",{staticClass:"img-fluid shadow",attrs:{src:a("57cc"),alt:"Portfolio image"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("i",{staticClass:"card-img-top fas fa-school",attrs:{alt:"school"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Education")]),a("ul",{staticClass:"card-text text-left"},[a("li",[t._v("2019 - The University of Arizona Coding Boot Camp")]),a("li",[t._v("2016 - Pima Community College (Elementary Certification)")]),a("li",[t._v(" 2010 - The University of Arizona (BA in Sociology with a minor in Portuguese) ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("i",{staticClass:"card-img-top fas fa-laptop text-center",attrs:{alt:"self study"}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-center"},[t._v("Find Me On These Sites!")]),a("div",{staticClass:"list-group"},[a("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://github.com/Mrrwmix",target:"_blank"}},[a("i",{staticClass:"fab fa-github"}),t._v(" Github ")]),a("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.khanacademy.org/profile/Mirthew/projects",target:"_blank"}},[a("i",{staticClass:"fas fa-leaf"}),t._v(" Khan Academy ")]),a("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://codepen.io/mrrwmix/",target:"_blank"}},[a("i",{staticClass:"fab fa-codepen"}),t._v(" Codepen ")]),a("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.linkedin.com/in/matthew-winemiller-27497b37/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"}),t._v(" LinkedIn ")]),a("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.codewars.com/users/Mrrwmix",target:"_blank"}},[a("i",{staticClass:"far fa-file-code"}),t._v(" Code Wars ")]),a("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"http://mattman88.blogspot.com/",target:"_blank"}},[a("i",{staticClass:"fas fa-chalkboard-teacher"}),t._v(" Teaching Portfolio ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card p-3 text-right"},[a("div",{staticClass:"table-responsive table-bordered m-0"},[a("table",{staticClass:"table m-0"},[a("tr",{staticClass:"text-center"},[a("th",{attrs:{colspan:"4"}},[t._v("Coding Toolbox")])]),a("tr",{staticClass:"text-center"},[a("td",[a("i",{staticClass:"fab fa-html5"}),a("small",[t._v("HTML")])]),a("td",[a("i",{staticClass:"fab fa-css3-alt"}),a("small",[t._v("CSS")])]),a("td",[a("i",{staticClass:"fab fa-js-square"}),a("small",[t._v("JavaScript")])]),a("td",[a("i",{staticClass:"fab fa-bootstrap"}),a("small",[t._v("Bootstrap")])])]),a("tr",{staticClass:"text-center"},[a("td",[a("i",{staticClass:"fab fa-react"}),a("small",[t._v("React")])]),a("td",[a("i",{staticClass:"fab fa-node"}),a("small",[t._v("Node")])]),a("td",[a("i",{staticClass:"fas fa-database"}),a("small",[t._v("SQL")])]),a("td",[a("i",{staticClass:"fab fa-github"}),a("small",[t._v("Git")])])]),a("tr",{staticClass:"text-center"},[a("td",[a("i",{staticClass:"fab fa-java"}),a("small",[t._v("Java")])]),a("td",[a("i",{staticClass:"fab fa-vuejs"}),a("small",[t._v("Vue")])]),a("td",[a("i",{staticClass:"fab fa-angular"}),a("small",[t._v("Angular")])]),a("td")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Matthew's Favorite Quotes")]),a("p",{staticClass:"card-text",attrs:{id:"gr_quote_body"}}),a("p",{staticClass:"card-text"},[a("a",{attrs:{href:"https://www.goodreads.com/user/show/21696553-matthew-winemiller",target:"_blank",rel:"noopener noreferrer"}},[a("small",{staticClass:"text-muted"},[t._v(" Goodreads Quotes "),a("i",{staticClass:"fab fa-goodreads"})])])])])])}],C={data:function(){return{facts:["I have traveled to over 15 countries!","I have dual citizenship. Brazil and USA.","My daughter is a citizen of three countries. Brazil, South Korea, and USA.","My daughter's name is Lina!","In addition to English, I can speak Portuguese, as well as a bit of Spanish and Korean","I try to read at least 25 books per year.","My favorite authors are Robert Jordan, Brandon Sanderson, Kurt Vonnegut, and Terry Pratchett.","My favorite Marvel show is Jessica Jones.","My dad and I watch every Browns game, every season. Even when they were 0-16.","I have been married for over 5 years!","My favorite dish is bibim guksu (spicy Korean noodles).","I read to my daughter every day.","I'm still a fan of pro-wrestling. It's entertaining!","My favorite movie is The Matrix.","My favorite book is Catch-22 by Joseph Heller.","I drink too much coffee.","My favorite game series is the Super Smash Bros series.","My favorite book series is The Wheel of Time.","I watch Sesame Street almost every day thanks to Lina and PBS Kids.","I lived in South Korea for 3 years working as an English teacher."],currentFact:Math.floor(20*Math.random())}},methods:{generateFact:function(){var t=Math.floor(Math.random()*this.facts.length);while(t===this.currentFact)t=Math.floor(Math.random()*this.facts.length);this.currentFact=t}}},_=C,y=(a("ea9b"),Object(l["a"])(_,h,b,!1,null,"6c489d75",null)),w=y.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-md-12 pb-2 bg-platinum d-flex justify-content-center"},[a("div",{staticClass:"w-50 d-flex justify-content-between"},[a("label",{staticClass:"checkbox-inline",attrs:{for:"javascript"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selections,expression:"selections"}],attrs:{type:"checkbox",value:"javascript",id:"javascript"},domProps:{checked:Array.isArray(t.selections)?t._i(t.selections,"javascript")>-1:t.selections},on:{change:function(e){var a=t.selections,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="javascript",n=t._i(a,r);s.checked?n<0&&(t.selections=a.concat([r])):n>-1&&(t.selections=a.slice(0,n).concat(a.slice(n+1)))}else t.selections=i}}}),t._v(" JavaScript ")]),a("label",{staticClass:"checkbox-inline",attrs:{for:"vue"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selections,expression:"selections"}],attrs:{type:"checkbox",value:"vue",id:"vue"},domProps:{checked:Array.isArray(t.selections)?t._i(t.selections,"vue")>-1:t.selections},on:{change:function(e){var a=t.selections,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="vue",n=t._i(a,r);s.checked?n<0&&(t.selections=a.concat([r])):n>-1&&(t.selections=a.slice(0,n).concat(a.slice(n+1)))}else t.selections=i}}}),t._v(" Vue ")]),a("label",{staticClass:"checkbox-inline",attrs:{for:"react"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selections,expression:"selections"}],attrs:{type:"checkbox",value:"react",id:"react"},domProps:{checked:Array.isArray(t.selections)?t._i(t.selections,"react")>-1:t.selections},on:{change:function(e){var a=t.selections,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="react",n=t._i(a,r);s.checked?n<0&&(t.selections=a.concat([r])):n>-1&&(t.selections=a.slice(0,n).concat(a.slice(n+1)))}else t.selections=i}}}),t._v(" React ")]),a("label",{staticClass:"checkbox-inline",attrs:{for:"java"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selections,expression:"selections"}],attrs:{type:"checkbox",value:"java",id:"java"},domProps:{checked:Array.isArray(t.selections)?t._i(t.selections,"java")>-1:t.selections},on:{change:function(e){var a=t.selections,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="java",n=t._i(a,r);s.checked?n<0&&(t.selections=a.concat([r])):n>-1&&(t.selections=a.slice(0,n).concat(a.slice(n+1)))}else t.selections=i}}}),t._v(" Java ")]),a("label",{staticClass:"checkbox-inline",attrs:{for:"HTML"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selections,expression:"selections"}],attrs:{type:"checkbox",value:"html",id:"HTML"},domProps:{checked:Array.isArray(t.selections)?t._i(t.selections,"html")>-1:t.selections},on:{change:function(e){var a=t.selections,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="html",n=t._i(a,r);s.checked?n<0&&(t.selections=a.concat([r])):n>-1&&(t.selections=a.slice(0,n).concat(a.slice(n+1)))}else t.selections=i}}}),t._v(" HTML ")]),a("label",{staticClass:"checkbox-inline",attrs:{for:"CSS"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selections,expression:"selections"}],attrs:{type:"checkbox",value:"css",id:"CSS"},domProps:{checked:Array.isArray(t.selections)?t._i(t.selections,"css")>-1:t.selections},on:{change:function(e){var a=t.selections,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="css",n=t._i(a,r);s.checked?n<0&&(t.selections=a.concat([r])):n>-1&&(t.selections=a.slice(0,n).concat(a.slice(n+1)))}else t.selections=i}}}),t._v(" CSS ")])])]),a("div",{staticClass:"col-md-12 d-flex justify-content-center flex-wrap bg-platinum"},t._l(t.githubArray,(function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.isSelected(e),expression:"isSelected(item)"}],key:s,staticClass:"card float-left border border-darkcyan m-2 shadow",staticStyle:{width:"18rem"}},[e.image?a("img",{staticClass:"card-img-top",attrs:{alt:"card image cap",src:e.image}}):t._e(),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-darkteal"},[t._v(t._s(e.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(e.description))])]),a("ul",{staticClass:"list-group list-group-flush"},[a("li",{staticClass:"list-group-item"},[e.description.toLowerCase().includes("react")||e.description.toLowerCase().includes("vue")?t._e():a("span",{staticClass:"lang"},[t._v(t._s(e.language)+" ")]),e.description.toLowerCase().includes("vue")?a("span",{staticClass:"lang"},[t._v("Vue ")]):t._e(),e.description.toLowerCase().includes("react")?a("span",{staticClass:"lang"},[t._v("React ")]):t._e(),null==e.language||e.description.toLowerCase().includes("react")?a("i",{staticClass:"fab fa-react text-info"}):"vue"===e.language.toLowerCase()||e.description.toLowerCase().includes("vue")?a("i",{staticClass:"fab fa-vuejs text-darkcyan"}):e.description.toLowerCase().includes("node")?a("i",{staticClass:"fab fa-node text-success"}):"javascript"===e.language.toLowerCase()?a("i",{staticClass:"fab fa-js-square text-warning"}):"java"===e.language.toLowerCase()?a("i",{staticClass:"fab fa-java"}):"css"===e.language.toLowerCase()?a("i",{staticClass:"fab fa-css3-alt text-primary"}):a("i",{staticClass:"fab fa-html5 text-danger"})])]),a("div",{staticClass:"card-body"},[null!=e.homepage&&""!=e.homepage?a("a",{staticClass:"card-link text-info",attrs:{href:e.homepage,target:"_blank"}},[t._v("Deployed URL")]):t._e(),a("a",{staticClass:"card-link text-info",attrs:{href:e.html_url,target:"_blank"}},[t._v("Source Code")])])])})),0)])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 pb-2 p-0 bg-platinum"},[a("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"portfolio"}},[t._v("Portfolio")])])}],j=(a("a4d3"),a("e01a"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("2532"),a("159b"),a("2fa7")),S=a("bc3a"),M=a.n(S);function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(a,!0).forEach((function(e){Object(j["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var A={data:function(){return{githubArray:[],selections:["javascript","java","html","css","vue","react"]}},methods:{mouseOver:function(t){console.log(t.target)},isSelected:function(t){if(!this.selections)return!0;for(var e in this.selections){if(t.description.toLowerCase().includes(this.selections[e]))return!0;if(t.language)return this.selections.includes(t.language.toLowerCase())}return!1}},mounted:function(){var t=this;M.a.get("https://api.github.com/users/Mrrwmix/repos?sort=created&per_page=100").then((function(e){t.githubArray=e.data.filter((function(t){return"mrrwmix.github.io"!=t.name&&"vue_and_node"!=t.name&&"VueBasics"!=t.name&&"react_tetris"!=t.name&&"HW-Wireframe"!=t.name&&"it-logger"!=t.name&&"markdown_previewer"!=t.name&&"madlibs"!=t.name&&"burger"!=t.name&&"unit-4-RPG-game"!=t.name&&"unit-4-game"!=t.name&&"Psychic-Game"!=t.name})).map((function(t){switch(t.name){case"CodeTimebank":return P({},t,{image:"./images/codetimebank.png"});case"who_pays_the_bill":return P({},t,{image:"./images/whopays.png"});case"book_search":return P({},t,{image:"./images/booksearch.png"});case"clickygame":return P({},t,{image:"./images/clicky.png"});case"WebProwler":return P({},t,{image:"./images/webprowler.png"});case"trip_planner":return P({},t,{image:"./images/trip.png"});case"Opinionated":return P({},t,{image:"./images/opinionated.png"});case"FriendFinder":return P({},t,{image:"./images/friendfinder.png"});case"BuddyGuyBot":return P({},t,{image:"./images/buddyguybot.png"});case"Github-finder":return P({},t,{image:"./images/githubfinder.png"});case"Bamazon":return P({},t,{image:"./images/bamazon.png"});case"Constructor-Word-Guess":return P({},t,{image:"./images/wordguess.png"});case"liri-node-app":return P({},t,{image:"./images/liri.png"});case"what_happened_on":return P({},t,{image:"./images/whathappened.png"});case"TipCalculator":return P({},t,{image:"./images/tip.png"});case"TrainScheduler":return P({},t,{image:"./images/train.png"});case"Giftastic":return P({},t,{image:"./images/giftastic.png"});case"TriviaGame":return P({},t,{image:"./images/trivia.png"});case"Word-Guess-Game":return P({},t,{image:"./images/guess.png"});case"Domnoo":return P({},t,{image:"./images/domnoo.png"});case"v-gamespot":return P({},t,{image:"./images/vgamespot.png"});case"secretMessages":return P({},t,{image:"./images/secretMessages.png"});case"BubbleDrawGUI":return P({},t,{image:"./images/bubbleDraw.png"});default:return t}}))}))}},E=A,L=Object(l["a"])(E,x,k,!1,null,null,null),T=L.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 bg-platinum p-0"},[a("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"resume"}},[t._v("Resume")]),a("h2",{staticClass:"text-center py-3 resume"},[a("a",{staticClass:"text-darkteal",attrs:{href:"https://drive.google.com/file/d/1Kvb7Lr0Y1l1rCcXnM9oDhO9PnrxwK2cO/view?usp=sharing",target:"_blank"}},[t._v(" Download Resume: "),a("i",{staticClass:"fas fa-download"})])])])])}],B={},G=Object(l["a"])(B,I,$,!1,null,null,null),F=G.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 bg-platinum p-0"},[a("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"contact"}},[t._v("Contact")]),a("h2",{staticClass:"text-center py-3"},[t._v(" Email me: "),a("a",{staticClass:"text-darkteal",attrs:{href:"mailto:mrrwmix@gmail.com",rel:"noopener noreferrer"}},[a("i",{staticClass:"fas fa-mail-bulk"}),t._v(" Mrrwmix@gmail.com ")])]),a("h2",{staticClass:"text-center py-3"},[t._v(" Call me: "),a("i",{staticClass:"fas fa-mobile-alt"}),t._v(" (520) 977-9253 ")])])])}],D={},N=Object(l["a"])(D,R,J,!1,null,null,null),W=N.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row bg-platinum"},[t._m(0),t._l(t.posts,(function(e,s){return a("div",{key:s,staticClass:"col-md-12 text-center bg-platinum my-2"},[a("div",{staticClass:"col-md-12 p-3 p-md-5 text-platinum rounded bg-platinum d-flex justify-content-center blogPost",style:{background:"url("+e.cover_image+")"}},[a("div",{staticClass:"p-3 rounded",staticStyle:{background:"black",opacity:"0.9"}},[a("h1",{staticClass:"display-4 font-italic",staticStyle:{opacity:"1.0"}},[t._v(t._s(e.title))]),a("p",{staticClass:"lead my-1 small"},[t._v(t._s(e.readable_publish_date))]),a("p",{staticClass:"lead my-2"},[t._v(t._s(e.tag_list.map((function(t){return"#"+t})).join(", ")))]),a("p",{staticClass:"lead mb-0",on:{click:function(a){return t.modalToggle(e.canonical_url)}}},[a("i",{staticClass:"fas fa-book-open"}),t._v(" Read ")])])])])})),t.showModal?a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask bg-darkcyan"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container bg-platinum"},[a("div",{staticClass:"modal-body"},[a("iframe",{attrs:{src:t.modal}})]),a("div",{staticClass:"d-flex justify-content-center"},[a("button",{staticClass:"btn btn-darkcyan",on:{click:function(e){return t.modalToggle()}}},[t._v("OK")])])])])])]):t._e()],2)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12 bg-platinum p-0"},[a("h1",{staticClass:"text-center bg-darkcyan text-platinum py-3 border-bottom",attrs:{id:"blog"}},[t._v("Blog")])])}],H=(a("d3b7"),{data:function(){return{posts:[],modal:"",showModal:!1}},methods:{fetchPosts:function(){var t=this;fetch("https://dev.to/api/articles?username=mrrwmix").then((function(t){return t.json()})).then((function(e){return t.posts=e})).catch((function(t){return console.error(t)}))},modalToggle:function(t){t?(this.modal=t,this.showModal=!0):(this.modal="",this.showModal=!1)}},mounted:function(){this.fetchPosts()}}),Q=H,U=(a("5f21"),Object(l["a"])(Q,K,z,!1,null,"0247bfbe",null)),V=U.exports,q={name:"app",components:{Navbar:u,Intro:g,Introcards:w,Projects:T,Resume:F,Contact:W,Blog:V}},X=q,Y=(a("034f"),Object(l["a"])(X,i,r,!1,null,null,null)),Z=Y.exports,tt=a("4c95"),et=a.n(tt);s["a"].config.productionTip=!1,s["a"].use(et.a,{duration:800,scale:1,distance:"2rem"}),new s["a"]({render:function(t){return t(Z)}}).$mount("#app")},"57cc":function(t,e,a){t.exports=a.p+"img/go.416bd053.png"},"5f21":function(t,e,a){"use strict";var s=a("b157"),i=a.n(s);i.a},"85ec":function(t,e,a){},9346:function(t,e,a){},9440:function(t,e,a){"use strict";var s=a("9346"),i=a.n(s);i.a},b157:function(t,e,a){},c67c:function(t,e,a){},d018:function(t,e,a){"use strict";var s=a("c67c"),i=a.n(s);i.a},ea9b:function(t,e,a){"use strict";var s=a("4420"),i=a.n(s);i.a}});
//# sourceMappingURL=app.84a15e30.js.map