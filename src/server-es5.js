module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[{id:1,name:"JWT Handbook",author:"Sebastian Peirot",version:"1.2.0",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",newFeatures:["feature 1","feature 2","feature 3"],aboutAuthor:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",authorTwitterAccount:"@author",authorPicture:"/img/author-1.png",ebookPicture:"/img/ebook-1.png"},{id:2,name:"Introduction to Ethereum",author:"Sebastian Peirot",version:"1.2.0",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",newFeatures:["feature 1","feature 2","feature 3"],aboutAuthor:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",authorTwitterAccount:"@author",authorPicture:"/img/author.png",ebookPicture:"/img/ebook-2.png"}];t.default=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(1),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"not-found"},l.default.createElement("h1",null,"404"),l.default.createElement("h2",null,"Page not found!"),l.default.createElement("p",null,l.default.createElement(c.Link,{to:"/"},"Go back to the main page")))}}]),t}(l.default.Component);t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(2),a=r(o),u=n(6),i=n(7),l=r(i),c=n(0),f=r(c),s=n(8),p=n(1),d=n(9),m=r(d),b=n(4),h=r(b),y=n(21),_=r(y),v=new l.default,w=new u.Server(v);v.set("view engine","ejs"),v.set("views",a.default.join(__dirname,"views")),v.use(l.default.static(a.default.join(__dirname,"static"))),v.get("/download/:sid",function(e,t){var n=e.params.sid;_.default.getDownloadFilePath(n,function(e,r){if(e)return t.end("Error");_.default.deleteDownload(n,function(e){console.log("Link deleted")})})}),v.get("/generateDownload/:id",function(e,t){_.default.createDownload(__dirname+"/pdf/"+e.params.id+".pdf",function(e){console.log(e),t.setHeader("Content-Type","application/json"),t.send(JSON.stringify({link:"http://localhost:3000/download/1"}))})}),v.get("*",function(e,t){(0,p.match)({routes:m.default,location:e.url},function(e,n,r){if(e)return t.status(500).send(e.message);if(n)return t.redirect(302,n.pathname+n.search);var o=void 0;return r?o=(0,s.renderToString)(f.default.createElement(p.RouterContext,r)):(o=(0,s.renderToString)(f.default.createElement(h.default,null)),t.status(404)),t.render("index",{markup:o})})});var E=process.env.PORT||3e3;w.listen(E,function(e){if(e)return console.error(e);console.info("Server running on http://localhost:"+E+" [production]")})},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),u=n(1),i=n(10),l=r(i),c=n(11),f=r(c),s=n(13),p=r(s),d=n(4),m=r(d),b=a.default.createElement(u.Route,{path:"/",component:l.default},a.default.createElement(u.IndexRoute,{component:f.default}),a.default.createElement(u.Route,{path:"ebook/:id",component:p.default}),a.default.createElement(u.Route,{path:"*",component:m.default}));t.default=b},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=(n(1),function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"app-container"},l.default.createElement("header",{className:"app-container-header"},l.default.createElement("a",{href:"/"},l.default.createElement("img",{src:"/img/auth0-logo.png"}),l.default.createElement("h1",null,"Ebook pay with tweet application"))),l.default.createElement("div",{className:"app-content"},this.props.children))}}]),t}(l.default.Component));t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(12),s=r(f),p=n(3),d=r(p),m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ebook-list"},c.default.createElement("h2",null," Available Ebooks "),c.default.createElement("table",{className:"ebook-table"},c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",{className:"id-header"},"#"),c.default.createElement("th",{className:"name-header"},"Name"),c.default.createElement("th",{className:"author-header"},"Author"))),c.default.createElement("tbody",null,d.default.map(function(e){return c.default.createElement(s.default,{key:e.id,id:e.id,name:e.name,author:e.author})}))))}}]),t}(c.default.Component);t.default=m},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(1),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("tr",{className:"ebook-row"},l.default.createElement("td",{className:"ebook-id"},this.props.id),l.default.createElement("td",{className:"ebook-name"},l.default.createElement(c.Link,{to:"/ebook/"+this.props.id},this.props.name)),l.default.createElement("td",{className:"ebook-author"},this.props.author))}}]),t}(l.default.Component);t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=(n(1),n(3)),s=r(f),p=n(14),d=r(p),m=n(15),b=r(m),h=n(16),y=r(h),_=n(17),v=r(_),w=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props.params.id,t=s.default.find(function(t){return t.id==e});return c.default.createElement("div",{className:"ebook-page-main"},c.default.createElement(y.default,{title:t.name,version:t.version,author:t.author}),c.default.createElement(b.default,{picture:t.ebookPicture}),c.default.createElement(v.default,{content:t.description,id:t.id,title:t.name,version:t.version}),c.default.createElement(d.default,{about:t.aboutAuthor,picture:t.authorPicture,twitterAccount:t.authorTwitterAccount}))}}]),t}(c.default.Component);t.default=w},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"author"},l.default.createElement("h2",{className:"author-title"},"About the author"),l.default.createElement("img",{className:"author-picture",src:this.props.picture}),l.default.createElement("p",{className:"author-about"},this.props.about),l.default.createElement("div",{className:"author-followtwitter"},l.default.createElement("span",null,"Follow him on ",l.default.createElement("img",{src:"/img/twitter-round.png"}))))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"ebook-thumb-wrapper"},l.default.createElement("img",{src:this.props.picture}))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"ebook-summary"},l.default.createElement("h2",{className:"ebook-summary-title"},this.props.title),l.default.createElement("span",{className:"ebook-summary-author"},"Written by ",this.props.author),l.default.createElement("span",{className:"ebook-summary-version"},l.default.createElement("img",{src:"/img/ebook-icon.png"})," Ebook version ",this.props.version))}}]),t}(l.default.Component);t.default=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),c=r(l),f=n(18),s=r(f),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"ebook-contents"},c.default.createElement("p",{className:"ebook-contents-description"},this.props.content),c.default.createElement("a",{href:"#",className:"ebook-contens-link-toc"},"Contents"),c.default.createElement(s.default,{id:this.props.id,title:this.props.title,version:this.props.version}),c.default.createElement("div",{className:"ebook-contents-instructions"}))}}]),t}(c.default.Component);t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(19),c=r(l),f=n(0),s=r(f),p=n(20),d=p.ShareButtons.TwitterShareButton,m=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={shared:!1},n}return u(t,e),i(t,[{key:"afterSharedTweet",value:function(){this.setState({shared:!0})}},{key:"render",value:function(){var e="I just downloaded "+this.props.title+" 📖 by @auth0. "+this.props.version+". Check it out!",t="http://localhost:3000/ebook/"+this.props.id;return s.default.createElement("div",{className:"payment"},s.default.createElement(d,{url:t,title:e,onShareWindowClose:this.afterSharedTweet.bind(this)},s.default.createElement("span",null," Pay with tweet")),s.default.createElement("button",null,"Download via email"),this.state.shared&&s.default.createElement(c.default,null))}}]),t}(s.default.Component);t.default=m},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"payment-download-wrapper"},l.default.createElement("a",{href:"http://downloadlink.com/"},"http://downloadlink.com/"))}}]),t}(l.default.Component);t.default=c},function(e,t){e.exports=require("react-share")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){var n=l.default.createReadStream(e);n.once("error",function(e){console.log(e)}),n.once("end",function(){console.log("done copying")}),n.pipe(l.default.createWriteStream(t))}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(22),l=r(i),c=n(23),f=r(c),s=n(2),p=r(s),d=__dirname+"/download",m=function(){function e(){o(this,e)}return u(e,null,[{key:"createDownload",value:function(e,t){if(console.log("Path: "+e),console.log(),!l.default.existsSync(d))return t(new Error("Session directory does not exist"));if(console.log("Folder exists"),!l.default.existsSync(e))return t(new Error("File doest not exist"));console.log("File exists");var n=f.default.createHash("md5").update(Math.random().toString()).digest("hex");a(e,p.default.join(d,n+".pdf")),t(null,n)}},{key:"getDownloadFilePath",value:function(e,t){var n=p.default.join(d,e+".download");if(!l.default.existsSync(n))return t(new Error("Download does not exist"));l.default.readFile(n,function(e,n){if(e)return t(e);t(null,n)})}},{key:"deleteDownload",value:function(e,t){var n=p.default.join(d,e+".download");if(!l.default.existsSync(n))return t(new Error("Download does not exist"));l.default.unlink(n,function(e){if(e)return t(e);t()})}}]),e}();t.default=m},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("crypto")}]);