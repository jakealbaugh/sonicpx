!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=new AudioContext;t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cvs=document.createElement("canvas"),t&&t.appendChild(this.cvs),this.ctx=this.cvs.getContext("2d")}return a(e,[{key:"clear",value:function(){this.ctx.clearRect(0,0,this.w,this.h)}},{key:"setSize",value:function(e,t){this.w=e,this.wh=.5*e,this.h=t,this.hh=.5*t,this.cvs.width=e,this.cvs.height=t}},{key:"createImage",value:function(e,t){return this.ctx.createImageData(e,t)}},{key:"putImage",value:function(e,t,n){this.ctx.putImageData(e,t,n)}},{key:"drawImage",value:function(e,t,n){this.ctx.drawImage(e,0,0)}},{key:"imageData",value:function(e,t,n,a){return n=n||this.w,a=a||this.h,this.ctx.getImageData(e,t,n,a)}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),o=(a=r)&&a.__esModule?a:{default:a};var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),i(t,[{key:"bits",get:function(){return 65536}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"rgbStereo",value:function(e,t){return{rgbL:this.rgbMono(e).rgb,rgbR:this.rgbMono(t).rgb}}},{key:"rgbMono",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null===t?e:Math.max(-1,Math.min(1,e+t)),a=this._valToBytes(n),i=Math.floor(a/256/256);return{rgb:[i,Math.floor((a-256*i*256)/256),a%256]}}},{key:"valueStereo",value:function(e,t){return{valueL:this.valueMono(e).value,valueR:this.valueMono(t).value}}},{key:"valueMono",value:function(e){var t=256*e[0]*256+256*e[1]+e[2];return{value:this._bytesToVal(t)}}},{key:"_valToBytes",value:function(e){return e*this.bitsH+this.bitsH}},{key:"_bytesToVal",value:function(e){return e/this.bits*2-1}},{key:"bitsH",get:function(){return.5*this.bits}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(3),o=(a=r)&&a.__esModule?a:{default:a};var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),i(t,[{key:"bits",get:function(){return 16777216}}]),t}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=function(){function e(t){var n=t.accept,a=t.handleChange,i=t.$parent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.handleChange=a,this.initDOM(n,i)}return a(e,[{key:"initDOM",value:function(e,t){var n=this;this.$container=document.createElement("div"),this.$container.className="file-upload",t.appendChild(this.$container),this.$file=document.createElement("input"),this.$file.setAttribute("type","file"),this.$file.setAttribute("accept",e),this.$container.appendChild(this.$file),this.$container.addEventListener("dragover",function(){return n.$container.classList.add("is-active")}),this.$container.addEventListener("dragleave",function(){return n.$container.classList.remove("is-active")}),this.$file.addEventListener("change",function(){if(n.$container.classList.remove("is-active"),n.$file.files&&n.$file.files[0]){var e=new FileReader;e.onload=function(e){var t=e.target;n.handleChange(t,n.$file.files[0]),n.$file.value=""},e.readAsDataURL(n.$file.files[0])}})}}]),e}();t.default=i},function(e,t,n){"use strict";var a,i=n(7),r=(a=i)&&a.__esModule?a:{default:a};console.info("\n%cSonicPX v0.1\n%c© Jake Albaugh "+(new Date).getFullYear()+"\nhttps://twitter.com/jake_albaugh\nhttps://github.com/jakealbaugh/sonicpx\n\n","font-family: sans-serif; font-weight: bold;","font-family: sans-serif; font-weight: normal;"),new r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(8)),i=r(n(10));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.recorder=new i.default,this.player=new a.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=(o(n(0)),o(n(1)),o(n(9))),r=o(n(5));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.converter=new i.default,this.file=new r.default({accept:"image/*",$parent:document.querySelector(".player .file"),handleChange:this.handleFileChange.bind(this)})}return a(e,[{key:"handleFileChange",value:function(e,t){var n=this;this.converter.remove();var a=new Image,i=e.result;a.onload=function(){return n.converter.initialize(a)},a.setAttribute("src",i)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=u(n(0)),r=u(n(1)),o=u(n(2)),s=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$parent=document.querySelector(".player .input")}return a(e,[{key:"remove",value:function(){this.$parent.innerHTML=""}},{key:"initialize",value:function(e){this.canvas=new r.default(this.$parent),this.canvas.setSize(e.width,e.height),this.canvas.drawImage(e,0,0),this.loadMeta(),this.play()}},{key:"loadMeta",value:function(){var e=this.canvas.imageData(0,0,4,1).data;this.version=256*e[3]+e[7],this.stereo=1===e[11],this.bits=e[15],this.adapter=16===this.bits?new o.default:new s.default}},{key:"play",value:function(){var e=this.canvas,t=e.w,n=e.wh,a=e.h,r=void 0;if(this.stereo){r=i.default.createBuffer(2,n*a,i.default.sampleRate);for(var o=this.canvas.imageData(0,1,n,a-1).data,s=this.canvas.imageData(n,1,n,a-1).data,u=r.getChannelData(0),c=r.getChannelData(1),l=o.length,f=0;f<l;f+=4){var h=Math.floor(f/4),v=o[f+0],d=o[f+1],p=o[f+2],y=o[f+3],b=s[f+0],g=s[f+1],m=s[f+2],w=s[f+3],_=this.adapter.valueStereo([v,d,p],[b,g,m]),k=_.valueL,M=_.valueR;255===y&&(u[h]=k),255===w&&(c[h]=M)}}else{r=i.default.createBuffer(1,t*a,i.default.sampleRate);var O=this.canvas.imageData(0,1,t,a-1).data,j=r.getChannelData(0),C=O.length;for(f=0;f<C;f+=4){var D=Math.floor(f/4),P=O[f+0],$=O[f+1],x=O[f+2],E=O[f+3],I=this.adapter.valueMono([P,$,x]).value;255===E&&(j[D]=I)}}var S=i.default.createBufferSource();S.buffer=r,S.connect(i.default.destination),S.start()}}]),e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),r=(s(n(1)),s(n(11))),o=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.file=new o.default({accept:"audio/*",$parent:document.querySelector(".recorder .file"),handleChange:this.handleFileChange.bind(this)})}return a(e,[{key:"handleFileChange",value:function(e,t){var n=this,a=new Audio;a.setAttribute("crossorigin","anonymous"),a.src=e.result,this.converter&&this.converter.remove(),a.addEventListener("canplay",function(){n.initializeElement(a)})}},{key:"initializeElement",value:function(e){var t=this;this._recordElement(e),e.addEventListener("ended",function(){return t.converter.stop()})}},{key:"_recordElement",value:function(e){var t=this,n=document.querySelector("#stereo").checked;this.converter=new r.default({duration:e.duration,bits:16,stereo:n}),this.element=e,this.input=i.default.createMediaElementSource(this.element);var a=n?2:1;this.processor=i.default.createScriptProcessor(4096,a,a),this.processor.onaudioprocess=function(e){return t.converter.process(e)},this.input.connect(this.processor),this.input.connect(i.default.destination),this.element.onended=function(){t.converter.handleEnd(),t.input.disconnect(t.processor),t.input.disconnect(i.default.destination),t.processor.disconnect(i.default.destination),t.processor.onaudioprocess=null},this.processor.connect(i.default.destination),this.element.play()}}]),e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=u(n(0)),r=u(n(1)),o=u(n(2)),s=u(n(4));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t){var n=t.duration,a=t.bits,i=t.stereo,r=void 0===i||i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bits=a,this.adapter=16===a?new o.default:new s.default,this.$parent=document.querySelector(".recorder .output"),this.stereo=r,this.initialize(n),this.off=!1,this.tick=0,this.imageData=null}return a(e,[{key:"initialize",value:function(e){this.canvasesIdx=0,this.canvases=[];for(var t=Math.ceil(e*i.default.sampleRate),n=Math.floor(Math.sqrt(t)),a=this.stereo?2*n:n,o=this.stereo?.5*a:a,s=Math.ceil(t/o),u=Math.ceil(e/5),c=Math.ceil(s/u),l=1===u?s:s-c*(u-1),f=0;f<u;f++){var h=new r.default(this.$parent),v=f===u-1?l:c;h.setSize(a,v),this.canvases.push(h)}}},{key:"remove",value:function(){this.$parent.innerHTML=""}},{key:"handleEnd",value:function(){this.canvas.putImage(this.imageData,0,0);var e=new r.default,t=this.canvases[0].w,n=this.canvases[0].h,a=this.canvases.map(function(e){return e.h}).reduce(function(e,t){return e+t});e.setSize(t,a+1);var i=(new r.default).createImage(4,1);i.data[3]=Math.floor(1/256),i.data[7]=1,i.data[11]=this.stereo?1:0,i.data[15]=this.bits,e.putImage(i,0,0);for(var o=0;o<this.canvases.length;o++){var s=o*n,u=this.canvases[o].imageData(0,0);e.putImage(u,0,s+1)}this.$parent.innerHTML="",this.$parent.appendChild(e.cvs)}},{key:"stop",value:function(){this.off=!0}},{key:"process",value:function(e){if(!this.off)if(this.imageData||(this.imageData=this.canvas.createImage(this.canvas.w,this.canvas.h)),this.stereo)for(var t=e.inputBuffer.getChannelData(0),n=e.inputBuffer.getChannelData(1),a=n.length,i=0;i<a;i++){if(this.off)return;var r=this.tickPosition(),o=r.x,s=r.y*this.canvas.w*4+4*o,u=s+4*this.canvas.wh,c=this.adapter.rgbStereo(t[i],n[i]),l=c.rgbL,f=c.rgbR;this.setDataAtIndex(s,l),this.setDataAtIndex(u,f),this.tick++}else for(var h=e.inputBuffer.getChannelData(0),v=h.length,d=0;d<v;d++){if(this.off)return;var p=this.tickPosition(),y=(o=p.x,p.y*this.canvas.w*4+4*o),b=this.adapter.rgbMono(h[d]).rgb;this.setDataAtIndex(y,b),this.tick++}}},{key:"setDataAtIndex",value:function(e,t){this.imageData.data[e+0]=t[0],this.imageData.data[e+1]=t[1],this.imageData.data[e+2]=t[2],this.imageData.data[e+3]=255}},{key:"tickPosition",value:function(){var e=this.stereo?this.canvas.wh:this.canvas.w,t=this.tick%e,n=Math.floor(this.tick/e);return n!==this.lastY&&n>this.canvas.h&&(this.canvas.putImage(this.imageData,0,0),this.nextCanvas(),this.imageData=this.canvas.createImage(this.canvas.w,this.canvas.h),this.tick=0),this.lastY=n,{x:t,y:n}}},{key:"nextCanvas",value:function(){this.canvasesIdx++}},{key:"canvas",get:function(){return this.canvases[this.canvasesIdx]}}]),e}();t.default=c}]);