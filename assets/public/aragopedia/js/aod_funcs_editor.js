(function(c){function a(){}function b(d){if(typeof d!=="object"){return{}}else{if(Object.create){return Object.create(d)}}a.prototype=d;return new a()}c.inherit=function(h,e,f){e=e||{};function d(){h.apply(this,arguments)}var g=e.hasOwnProperty("constructor")?e.constructor:d;g.prototype=b(h.prototype);g.prototype.constructor=g;c.extend(g.prototype,e);return c.extend(g,h,f,{__super__:h.prototype})}})(this.jQuery);
(function(a){a.proxyAll=function(f){var b=[].slice.call(arguments,1);var c=0;var d=b.length;var e;var g;for(;c<d;c+=1){g=b[c];for(e in f){if(typeof f[e]==="function"){if((g instanceof RegExp&&g.test(e))||e===g){if(f[e].proxied!==true){f[e]=a.proxy(f[e],f);f[e].proxied=true}}}}}return f}})(this.jQuery);
(function(f,e){f.url={escape:function(h){return e.encodeURIComponent(h||"").replace(/%20/g,"+")},slugify:function(j,h){var m="";var i=0;var k=j.length;var l=this.map;for(;i<k;i+=1){m+=l[j.charCodeAt(i).toString(16)]||"-"}m=m.toLowerCase();return h===false?m:m.replace(/\-+/g,"-").replace(/^-|-$/g,"")}};var a=("20 30 31 32 33 34 35 36 37 38 39 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208 209 210 211 212 213 214 215 216 217 218 219 220 221 222 223 224 225 226 227 228 229 230 231 232 233 234 235 236 237 238 239 240 241 242 243 244 245 246 247 248 249 250 251 252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275 276 277 278 279 280 281 282 283 284 285 286 287 288 289 290 291 292 293 294 295 296 297 298 299 363 364 365 366 367 368 369 386 388 389 390 391 392 393 394 395 396 397 398 399 400 401 402 403 404 405 406 407 408 409 410 411 412 413 414 415 416 417 418 419 420 421 422 423 424 425 426 427 428 429 430 431 432 433 434 435 436 437 438 439 440 441 442 443 444 445 446 447 448 449 450 451 452 453 454 455 456 457 458 459 460 461 462 463 464 465 466 467 468 469 470 471 472 473 474 475 476 477 478 479 480 481 490 491 492 493 494 495 496 497 498 499 500 501 502 503 504 505 506 507 508 509 510 511 512 513 514 515 531 532 533 534 535 536 537 538 539 540 541 542 543 544 545 546 547 548 549 550 551 552 553 554 555 556 561 562 563 564 565 566 567 568 569 570 571 572 573 574 575 576 577 578 579 580 581 582 583 584 585 586 587 4a 4b 4c 4d 4e 4f 5a 6a 6b 6c 6d 6e 6f 7a a2 a3 a5 a7 a9 aa ae b2 b3 b5 b6 b9 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 ca cb cc cd ce cf d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 da db dc dd de df e0 e1 e2 e3 e4 e5 e6 e7 e8 e9 ea eb ec ed ee ef f0 f1 f2 f3 f4 f5 f6 f8 f9 fa fb fc fd ff 10a 10b 10c 10d 10e 10f 11a 11b 11c 11d 11e 11f 12a 12b 12c 12d 12e 12f 13a 13b 13c 13d 13e 13f 14a 14b 14c 14d 14e 14f 15a 15b 15c 15d 15e 15f 16a 16b 16c 16d 16e 16f 17a 17b 17c 17d 17e 17f 18a 18b 18c 18d 18e 18f 19a 19b 19c 19d 19e 19f 1a0 1a1 1a2 1a3 1a4 1a5 1a6 1a7 1a8 1a9 1aa 1ab 1ac 1ad 1ae 1af 1b0 1b1 1b2 1b3 1b4 1b5 1b6 1b7 1b8 1b9 1ba 1bb 1bc 1bd 1be 1bf 1c4 1c5 1c6 1c7 1c8 1c9 1ca 1cb 1cc 1cd 1ce 1cf 1d0 1d1 1d2 1d3 1d4 1d5 1d6 1d7 1d8 1d9 1da 1db 1dc 1dd 1de 1df 1e0 1e1 1e2 1e3 1e4 1e5 1e6 1e7 1e8 1e9 1ea 1eb 1ec 1ed 1ee 1ef 1f0 1f1 1f2 1f3 1f4 1f5 1f6 1f7 1f8 1f9 1fa 1fb 1fc 1fd 1fe 1ff 20a 20b 20c 20d 20e 20f 21a 21b 21c 21d 21e 21f 22a 22b 22c 22d 22e 22f 23a 23b 23c 23d 23e 23f 24a 24b 24c 24d 24e 24f 25a 25b 25c 25d 25e 25f 26a 26b 26c 26d 26e 26f 27a 27b 27c 27d 27e 27f 28a 28b 28c 28d 28e 28f 29a 29b 29c 29d 29e 29f 2a0 2a1 2a2 2a3 2a4 2a5 2a6 2a7 2a8 2a9 2aa 2ab 2ac 2ae 2af 2b0 2b1 2b2 2b3 2b4 2b5 2b6 2b7 2b8 2df 2e0 2e1 2e2 2e3 2e4 36a 36b 36c 36d 36e 36f 37b 37c 37d 38a 38c 38e 38f 39a 39b 39c 39d 39e 39f 3a0 3a1 3a3 3a4 3a5 3a6 3a7 3a8 3a9 3aa 3ab 3ac 3ad 3ae 3af 3b0 3b1 3b2 3b3 3b4 3b5 3b6 3b7 3b8 3b9 3ba 3bb 3bc 3bd 3be 3bf 3c0 3c1 3c2 3c3 3c4 3c5 3c6 3c7 3c8 3c9 3ca 3cb 3cc 3cd 3ce 3d0 3d1 3d2 3d3 3d4 3d5 3d6 3d7 3d8 3d9 3da 3db 3dc 3dd 3de 3df 3e2 3e3 3e4 3e5 3e6 3e7 3e8 3e9 3ea 3eb 3ec 3ed 3ee 3ef 3f0 3f1 3f2 3f3 3f4 3f5 3f6 3f7 3f8 3f9 3fa 3fb 3fc 3fd 3fe 3ff 40a 40b 40c 40d 40e 40f 41a 41b 41c 41d 41e 41f 42a 42b 42c 42d 42e 42f 43a 43b 43c 43d 43e 43f 44a 44b 44c 44d 44e 44f 45a 45b 45c 45d 45e 45f 46a 46b 46c 46d 46e 46f 47a 47b 47c 47d 47e 47f 48a 48b 48c 48d 48e 48f 49a 49b 49c 49d 49e 49f 4a0 4a1 4a2 4a3 4a4 4a5 4a6 4a7 4a8 4a9 4aa 4ab 4ac 4ad 4ae 4af 4b0 4b1 4b2 4b3 4b4 4b5 4b6 4b7 4b8 4b9 4ba 4bb 4bc 4bd 4be 4bf 4c0 4c1 4c2 4c3 4c4 4c5 4c6 4c7 4c8 4c9 4ca 4cb 4cc 4cd 4ce 4cf 4d0 4d1 4d2 4d3 4d4 4d5 4d6 4d7 4d8 4d9 4da 4db 4dc 4dd 4de 4df 4e0 4e1 4e2 4e3 4e4 4e5 4e6 4e7 4e8 4e9 4ea 4eb 4ec 4ed 4ee 4ef 4f0 4f1 4f2 4f3 4f4 4f5 4f6 4f7 4f8 4f9 4fa 4fb 4fc 4fd 4fe 4ff 50a 50b 50c 50d 50e 50f 51a 51b 51c 51d 53a 53b 53c 53d 53e 53f 54a 54b 54c 54d 54e 54f 56a 56b 56c 56d 56e 56f 57a 57b 57c 57d 57e 57f").split(" ");var c=("- 0 1 2 3 4 5 6 7 8 9 A B C D E F G H I P Q R S T U V W X Y a b c d e f g h i p q r s t u v w x y A a A a A a C c C c D d E e E e E e E e G g G g H h H h I i I i IJ ij J j K k k L l L l N n N n N n n O o OE oe R r R r R r S s T t T t T t U u U u U u W w Y y Y Z b B b b b b C C c D E F f G Y h i I K k A a A a E e E e I i R r R r U u U u S s n d 8 8 Z z A a E e O o Y y l n t j db qp < ? ? B U A E e J j a a a b c e d d e e g g g Y x u h h i i w m n n N o oe m o r R R S f f f f t t u Z Z 3 3 ? ? 5 C O B a e i o u c d A E H i A B r A E Z H O I E E T r E S I I J jb A B B r D E X 3 N N P C T y O X U h W W a 6 B r d e x 3 N N P C T Y qp x U h W W e e h r e s i i j jb W w Tb tb IC ic A a IA ia Y y O o V v V v Oy oy C c R r F f H h X x 3 3 d d d d R R R R JT JT E e JT jt JX JX U D Q N T 2 F r p z 2 n x U B j t n C R 8 R O P O S w f q n t q t n p h a n a u j u 2 n 2 n g l uh p o S u J K L M N O Z j k l m n o z c f Y s c a r 2 3 u p 1 A A A A A A AE C E E E E I I I I D N O O O O O X O U U U U Y p b a a a a a a ae c e e e e i i i i o n o o o o o o u u u u y y C c C c D d E e G g G g I i I i I i l L l L l L n n O o O o S s S s S s U u U u U u z Z z Z z f D d d q E e l h w N n O O o P P P p R S s E l t T t T U u U U Y y Z z 3 3 3 3 2 5 5 5 p DZ Dz dz Lj Lj lj NJ Nj nj A a I i O o U u U u U u U u U u e A a A a AE ae G g G g K k Q q Q q 3 3 J dz dZ DZ g G h p N n A a AE ae O o I i O o O o T t 3 3 H h O o O o O o A C c L T s Q q R r Y y e 3 3 3 3 j i I I I h w R r R R r r u v A M Y Y B G H j K L q ? c dz d3 dz ts tf tc fn ls lz ww u u h h j r r r R W Y x Y 1 s x c h m r t v x c c c I O Y O K A M N E O TT P E T Y O X Y O I Y a e n i v a b y d e c n 0 1 k j u v c o tt p s o t u q X Y w i u o u w b e Y Y Y O w x Q q C c F f N N W w q q h e S s X x 6 6 t t x e c j O E E p p C M M p C C C Hb Th K N Y U K jI M H O TT b bI b E IO R K JI M H O N b bI b e io r Hb h k n y u mY my Im Im 3 3 O o W w W W H H B b P p K k K k K k K k H h H h Ih ih O o C c T t Y y Y y X x TI ti H h H h H h E e E e I X x K k jt jt H h H h H h M m l A a A a AE ae E e e e E e X X 3 3 3 3 N n N n O o O o O o E e Y y Y y Y y H h R r bI bi F f X x X x H h G g T t Q q W w d r L Iu O y m o N U Y S d h l lu d y w 2 n u y un").split(" ");var g={};for(var b=0,d=a.length;b<d;b+=1){g[a[b]]=c[b]}f.url.map=g})(this.jQuery,this);
this.jQuery.date={METHODS:{yyyy:"getUTCFullYear",MM:"getUTCMonth",dd:"getUTCDate",HH:"getUTCHours",mm:"getUTCMinutes",ss:"getUTCSeconds",fff:"getUTCMilliseconds"},ISO8601:"yyyy-MM-ddTHH:mm:ss.fffZ",CKAN8601:"yyyy-MM-ddTHH:mm:ss",format:function(d,a){var c=this.METHODS;a=a||new Date();function b(f,e){f=""+f;e=e.replace(/[a-z]/ig,"0");return f.length!==e.length?e.slice(f.length)+f:f}return d.replace(/([a-zA-Z])\1+/g,function(f,e){if(c[f]){var g=a[c[f]]();if(f==="MM"){g+=1}return b(g,f)}return f})},toCKANString:function(a){return this.format(this.CKAN8601,a)},toISOString:function(a){a=a||new Date();if(a.toISOString){return a.toISOString()}else{return this.format(this.ISO8601,a)}}};
!function(e){function t(t){var n=this.value,s=e.url.slugify(n,!0);n!==s&&(this.value=s,e(this).trigger("slugify",[this.value,n]))}function n(t){if(t.charCode){t.preventDefault();var n,s,i=this.value,u=this.selectionStart,l=this.selectionEnd,r=String.fromCharCode(t.charCode);this.setSelectionRange?(n=i.substring(0,u)+r+i.substring(l,i.length),this.value=e.url.slugify(n,!1),this.setSelectionRange(u+1,u+1)):document.selection&&document.selection.createRange&&(s=document.selection.createRange(),s.text=r+s.text),e(this).trigger("slugify",[this.value,i])}}e.fn.slug=function(){return this.each(function(){e(this).on({"blur.slug":t,"change.slug":t,"keypress.slug":n})})},e.extend(e.fn.slug,{onChange:t,onKeypress:n})}(this.jQuery);

(function(d,c){var b=d.url.escape;function a(f){f=d.extend(true,a.defaults,f||{});var e=this.map(function(){var g=d(this);var j=g.find("input");var i=d(f.template);var h=i.find(".slug-preview-value");function k(){var l=b(j.val())||f.placeholder;h.text(l)}i.find("label").text(f.i18n.URL);i.find(".slug-preview-prefix").text(f.prefix);i.find("button").text(f.i18n.Edit).click(function(l){l.preventDefault();g.show();i.hide()});k();j.on("change",k);g.after(i).hide();return i[0]});return this.pushStack(e)}a.defaults={prefix:"",placeholder:"",i18n:{URL:"URL",Edit:"Edit"},template:['<div class="slug-preview">','  <div style="height:22px"></div>','<label class="control-label fieldName" for="field-title"></label><div style="height:44px"></div>','<span class="slug-preview-prefix"></span><span class="slug-preview-value"></span>','<button class="recuadroRedondeado"></button>',"</div>"].join("\n")};d.fn.slugPreview=a})(this.jQuery,this);
(function(g){var h=true;g.fn.truncate=function(j){var k=g.extend({},g.fn.truncate.defaults,j);var i=this.map(function(){var n=g.trim(a(g(this).text())).length;if(n<=k.max_length){return}var o=k.max_length-k.more.length-k.link_prefix.length-k.link_suffix.length;var m=e(this,o);var l=g(this).hide();m.insertAfter(l);c(m).append(k.ellipses+k.link_prefix+'<a href="#more" class="'+k.css_more_class+'">'+k.more+"</a>"+k.link_suffix);b(l).append(k.link_prefix+'<a href="#less" class="'+k.css_less_class+'">'+k.less+"</a>"+k.link_suffix);m.find("a:last").click(function(p){p.preventDefault();m.hide();l.show();m.trigger({type:"expand.truncate",relatedTarget:l[0]})});l.find("a:last").click(function(p){p.preventDefault();m.show();l.hide();m.trigger({type:"collapse.truncate",relatedTarget:l[0]})});return m[0]});return this.pushStack(i)};g.fn.truncate.defaults={max_length:100,more:"more",less:"less",ellipses:"…",css_more_class:"truncator-link truncator-more",css_less_class:"truncator-link truncator-less",link_prefix:" (",link_suffix:")"};function e(i,j){return(i.nodeType==3)?f(i,j):d(i,j)}function d(i,l){var i=g(i);var k=i.clone().empty();var j;i.contents().each(function(){var m=l-k.text().length;if(m==0){return}j=e(this,m);if(j){k.append(j)}});return k}function f(i,k){var j=a(i.data);if(h){j=j.replace(/^ /,"")}h=!!j.match(/ $/);var j=j.slice(0,k);j=g("<div/>").text(j).html();return j}function a(i){return i.replace(/\s+/g," ")}function c(k){var i=g(k);var j=i.children(":last");if(!j){return k}var l=j.css("display");if(!l||l=="inline"){return i}return c(j)}function b(k){var i=g(k);var j=i.children(":last");if(j&&j.is("p")){return j}return k}})(jQuery);
!function(t,i,s){"use strict";var e,n=i.event;n.special.smartresize={setup:function(){i(this).bind("resize",n.special.smartresize.handler)},teardown:function(){i(this).unbind("resize",n.special.smartresize.handler)},handler:function(t,i){var s=this,o=arguments;t.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){n.dispatch.apply(s,o)},"execAsap"===i?0:100)}},i.fn.smartresize=function(t){return t?this.bind("smartresize",t):this.trigger("smartresize",["execAsap"])},i.Mason=function(t,s){this.element=i(s),this._create(t),this._init()},i.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},i.Mason.prototype={_filterFindBricks:function(t){var i=this.options.itemSelector;return i?t.filter(i).add(t.find(i)):t},_getBricks:function(t){var i=this._filterFindBricks(t).css({position:"absolute"}).addClass("masonry-brick");return i},_create:function(s){this.options=i.extend(!0,{},i.Mason.settings,s),this.styleQueue=[];var e=this.element[0].style;this.originalStyle={height:e.height||""};var n=this.options.containerStyle;for(var o in n)this.originalStyle[o]=e[o]||"";this.element.css(n),this.horizontalDirection=this.options.isRTL?"right":"left";var h=this.element.css("padding-"+this.horizontalDirection),a=this.element.css("padding-top");this.offset={x:h?parseInt(h,10):0,y:a?parseInt(a,10):0},this.isFluid=this.options.columnWidth&&"function"==typeof this.options.columnWidth;var r=this;setTimeout(function(){r.element.addClass("masonry")},0),this.options.isResizable&&i(t).bind("smartresize.masonry",function(){r.resize()}),this.reloadItems()},_init:function(t){this._getColumns(),this._reLayout(t)},option:function(t,s){i.isPlainObject(t)&&(this.options=i.extend(!0,this.options,t))},layout:function(t,i){for(var s=0,e=t.length;e>s;s++)this._placeBrick(t[s]);var n={};if(n.height=Math.max.apply(Math,this.colYs),this.options.isFitWidth){var o=0;for(s=this.cols;--s&&0===this.colYs[s];)o++;n.width=(this.cols-o)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:n});var h,a=this.isLaidOut&&this.options.isAnimated?"animate":"css",r=this.options.animationOptions;for(s=0,e=this.styleQueue.length;e>s;s++)h=this.styleQueue[s],h.$el[a](h.style,r);this.styleQueue=[],i&&i.call(t),this.isLaidOut=!0},_getColumns:function(){var t=this.options.isFitWidth?this.element.parent():this.element,i=t.width();this.columnWidth=this.isFluid?this.options.columnWidth(i):this.options.columnWidth||this.$bricks.outerWidth(!0)||i,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((i+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(t){var s,e,n,o,h,a=i(t);if(s=Math.ceil(a.outerWidth(!0)/this.columnWidth),s=Math.min(s,this.cols),1===s)n=this.colYs;else for(e=this.cols+1-s,n=[],h=0;e>h;h++)o=this.colYs.slice(h,h+s),n[h]=Math.max.apply(Math,o);for(var r=Math.min.apply(Math,n),l=0,c=0,u=n.length;u>c;c++)if(n[c]===r){l=c;break}var d={top:r+this.offset.y};d[this.horizontalDirection]=this.columnWidth*l+this.offset.x,this.styleQueue.push({$el:a,style:d});var m=r+a.outerHeight(!0),p=this.cols+1-u;for(c=0;p>c;c++)this.colYs[l+c]=m},resize:function(){var t=this.cols;this._getColumns(),(this.isFluid||this.cols!==t)&&this._reLayout()},_reLayout:function(t){var i=this.cols;for(this.colYs=[];i--;)this.colYs.push(0);this.layout(this.$bricks,t)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(t){this.reloadItems(),this._init(t)},appended:function(t,i,s){if(i){this._filterFindBricks(t).css({top:this.element.height()});var e=this;setTimeout(function(){e._appended(t,s)},1)}else this._appended(t,s)},_appended:function(t,i){var s=this._getBricks(t);this.$bricks=this.$bricks.add(s),this.layout(s,i)},remove:function(t){this.$bricks=this.$bricks.not(t),t.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var s=this.element[0].style;for(var e in this.originalStyle)s[e]=this.originalStyle[e];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),i(t).unbind(".masonry")}},i.fn.imagesLoaded=function(t){function s(){t.call(n,o)}function e(t){var n=t.target;n.src!==a&&-1===i.inArray(n,r)&&(r.push(n),--h<=0&&(setTimeout(s),o.unbind(".imagesLoaded",e)))}var n=this,o=n.find("img").add(n.filter("img")),h=o.length,a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",r=[];return h||s(),o.bind("load.imagesLoaded error.imagesLoaded",e).each(function(){var t=this.src;this.src=a,this.src=t}),n};var o=function(i){t.console&&t.console.error(i)};i.fn.masonry=function(t){if("string"==typeof t){var s=Array.prototype.slice.call(arguments,1);this.each(function(){var e=i.data(this,"masonry");return e?i.isFunction(e[t])&&"_"!==t.charAt(0)?void e[t].apply(e,s):void o("no such method '"+t+"' for masonry instance"):void o("cannot call methods on masonry prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){var s=i.data(this,"masonry");s?(s.option(t||{}),s._init()):i.data(this,"masonry",new i.Mason(t,this))});return this}}(window,jQuery);

(function(a){a.fn.incompleteFormWarning=function(b){return this.each(function(){var c=a(this);var e=c.serialize();function d(f){if(f.originalEvent.returnValue){f.originalEvent.returnValue=b}return b}c.on({change:function(){var f=c.serialize()===e?"off":"on";a(window)[f]("beforeunload",d)},submit:function(){a(window).off("beforeunload",d)}})})}})(this.jQuery);
this.ckan=this.ckan||{};(function(e,d){var c=[];function f(i){var g=0;var h=i?i.length:0;for(;g<h;g+=1){i[g](this)}}d.extend(f.prototype,{jQuery:d,ajax:d.ajax,body:d(document.body),location:window.location,window:window});function b(h,g){return new b.Sandbox(e.sandbox.callbacks)}b.extend=function(g){d.extend(f.prototype,g||{});return e};b.setup=function a(g){var h=e.sandbox.callbacks=e.sandbox.callbacks||[];if(typeof g==="function"){h.push(g)}else{throw new Error("ckan.sandbox.setup() must be passed a function")}return e};e.sandbox=b;e.sandbox.Sandbox=f})(this.ckan,this.jQuery);
this.ckan=this.ckan||{};(function(f,g,d){var b="data-module";var e="data-module-";function a(j,i,h){this.el=j instanceof g?j:g(j);this.options=g.extend(true,{},this.options,i);this.sandbox=h}g.extend(a.prototype,{el:null,options:null,$:function(h){return this.el.find(h)},i18n:function(j){var h=[].slice.call(arguments,1);var k=this.options.i18n;var i=(k&&k[j])||j;if(typeof i==="function"){i=i.apply(null,h)}return typeof i.fetch==="function"?i.fetch.apply(i,h):i},initialize:function(){},teardown:function(){},remove:function(){this.teardown();this.el.remove()}});function c(i,j){if(c.registry[i]){throw new Error('There is already a module registered as "'+i+'"')}if(typeof j==="function"){j=j(g,f.i18n.translate,f.i18n)}j=g.extend({constructor:function h(){a.apply(this,arguments)}},j);c.registry[i]=g.inherit(a,j,{namespace:i});return f}c.registry={};c.instances={};c.initialize=function(){f.pubsub.enqueue();g("[data-module]",document.body).each(function(h,i){c.initializeElement(this)});f.pubsub.dequeue();return c};c.initializeElement=function(i){var h=c.registry;var j=g.trim(i.getAttribute(b)).split(" ");g.each(j,function(m,l){var k=h[l];if(k&&typeof k==="function"){c.createInstance(k,i)}})};c.createInstance=function(k,l){var j=c.extractOptions(l);var i=f.sandbox(l,j);var h=new k(l,j,i);if(typeof h.initialize==="function"){h.initialize()}var m=c.instances[k.namespace]||[];m.push(h);c.instances[k.namespace]=m};c.extractOptions=function(j){var o=j.attributes;var k=0;var i=o.length;var p={};var h;var l;var n;for(;k<i;k+=1){l=o[k];if(l.name.indexOf(e)===0){h=l.name.slice(e.length);try{n=l.value===""?true:g.parseJSON(l.value)}catch(m){n=l.value}p[g.camelCase(h)]=n}}return p};f.module=c;f.module.BaseModule=a})(this.ckan,this.jQuery,this);
this.ckan=this.ckan||{};(function(c,b){var a={events:b({}),queue:null,publish:function(d){if(a.queue){a.queue.push([].slice.call(arguments))}else{a.events.triggerHandler(d,[].slice.call(arguments,1))}return this},subscribe:function(d,f){if(b.isPlainObject(d)){b.each(d,b.proxy(a.subscribe,this));return this}function e(){return f.apply(this,[].slice.call(arguments,1))}e.guid=f.guid=f.guid||(b.guid+=1);a.events.on(d,e);return this},unsubscribe:function(d,e){a.events.off(d,arguments);return this},enqueue:function(){if(!a.queue){a.queue=[]}return this},dequeue:function(){if(a.queue){var d=a.queue;var e=0;var f=d.length;a.queue=null;for(;e<f;e+=1){a.publish.apply(a,d[e])}}return this}};c.pubsub=a;c.sandbox.extend({publish:a.publish,subscribe:a.subscribe,unsubscribe:a.unsubscribe})})(this.ckan,this.jQuery);
(function(a,b){function c(d){this.endpoint=d&&d.endpoint||"";b.proxyAll(this,/parse/)}b.extend(c.prototype,{url:function(d){if(!(/^https?:\/\//i).test(d)){d=this.endpoint+"/"+encodeURI(d).replace(/^\//,"")}return d},call:function(h,j,i,g,f){var e=this.url("/api/action/"+j);var f=(f=="undefined")?function(){}:f;var d={contentType:"application/json",url:e,dataType:"json",processData:false,success:g,error:f};if(h=="POST"){d.type="POST";d.data=JSON.stringify(i)}else{d.type="GET";d.url+=i}b.ajax(d)},getTemplate:function(d,h,g,f){var e=this.url("/api/1/util/snippet/"+encodeURIComponent(d));if(typeof h==="function"){f=g;g=h;h={}}return b.get(e,h||{}).then(g,f)},getLocaleData:function(d,g,f){var e=this.url("/api/i18n/"+(d||""));return b.getJSON(e).then(g,f)},getCompletions:function(f,e,i,d){if(typeof e==="function"){d=i;i=e;e={}}var g=e&&e.format||this.parseCompletions;var h=b.ajax({url:this.url(f)});return h.pipe(g).promise(h).then(i,d)},parseCompletions:function(g,f){if(typeof g==="string"){return this.parsePackageCompletions(g,f)}var h={};var e=b.isArray(g)?g:g.ResultSet&&g.ResultSet.Result||{};var d=b.map(e,function(l){var k=typeof f.key!="undefined"?l[f.key]:false;var j=typeof f.label!="undefined"?l[f.label]:false;l=typeof l==="string"?l:l.name||l.Name||l.Format||"";l=b.trim(l);k=k?k:l;j=j?j:l;var m=l.toLowerCase();var i=f&&f.objects===true;if(m&&!h[m]){h[m]=1;return i?{id:k,text:j}:l}return null});d=b.grep(d,function(i){return i!==null});return d},parseCompletionsForPlugin:function(d){return{results:this.parseCompletions(d,{objects:true})}},parsePackageCompletions:function(f,e){var g=b.trim(f).split("\n");var d=[];return b.map(g,function(h){var i=h.split("|");var k=b.trim(i.pop()||"");var j=b.trim(i.join("|")||"");return e&&e.objects===true?{id:k,text:j}:k})},getStorageAuth:function(e,f,d){if(!e){throw new Error("Client#getStorageAuth() must be called with a key")}return b.ajax({url:this.url("/api/storage/auth/form/"+e),success:f,error:d})},getStorageMetadata:function(e,f,d){if(!e){throw new Error("Client#getStorageMetadata() must be called with a key")}return b.ajax({url:this.url("/api/storage/metadata/"+e),success:f,error:d})},convertStorageMetadataToResource:function(j){var f=new Date(this.normalizeTimestamp(j._last_modified));var k=new Date(this.normalizeTimestamp(j._creation_date));var h=b.date.toCKANString(k);var g=b.date.toCKANString(f);var d=j["filename-original"]||j.key;var i=j._format||d.split(".").pop();var e=j._location;if(e.indexOf("://")===-1){e=a.url(e)}return{url:e,key:j.key,name:d,size:j._content_length,created:h,last_modified:g,format:i,mimetype:j._format||null,resource_type:"file.upload",owner:j["uploaded-by"],hash:j._checksum,cache_url:j._location,cache_url_updated:g}},normalizeTimestamp:function(d){var e=/[+\-]\d{4}|Z/;if(!e.test(d)){d+="Z"}return d}});a.sandbox.setup(function(d){d.client=new c({endpoint:a.SITE_ROOT})});a.Client=c})(this.ckan,this.jQuery);
(function(b,c){function a(g,e,d){var f=a.initialize(a.create(g,e,d));a.el.append(f)}a.el=c(".flash-messages",document.body);a.create=function(g,e,d){var f=c('<div class="alert fade in"><strong></strong> <span></span></div>');f.addClass("alert-"+(d||"error"));f.find("strong").text(g);f.find("span").text(e);return f};a.initialize=function(d){d=d instanceof c?d:c(d);return d.append(c('<a class="close" href="#">&times;</a>')).alert()};a.el.find(".alert").each(function(){a.initialize(this)});a.el.on("click",".close",function(){c(this).parent().alert("close")});b.notify=a;b.sandbox.extend({notify:a})})(this.ckan,this.jQuery);
this.ckan=this.ckan||{};(function(c,d,a){var b={"":{domain:"ckan",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}};c.i18n=new a({domain:"ckan",locale_data:{ckan:b}});c.i18n.translate=d.proxy(c.i18n.translate,c.i18n);c.i18n.load=function(e){if(e&&e[""]){d.extend(b,e)}};c.sandbox.extend({i18n:c.i18n,translate:c.i18n.translate})})(this.ckan,this.jQuery,this.Jed);
this.ckan=this.ckan||{};(function(a,b){a.PRODUCTION="production";a.DEVELOPMENT="development";a.TESTING="testing";a.initialize=function(){var d=b("body");var c=b("html").attr("lang");var g=window.location;var f=g.protocol+"//"+g.host;function e(h){return(d.data(h)||f).replace(/\/$/,"")}a.SITE_ROOT=e("siteRoot");a.LOCALE_ROOT=e("localeRoot");a.API_ROOT=d.data("apiRoot")||a.SITE_ROOT;a.sandbox().client.getLocaleData(c).done(function(h){a.i18n.load(h);a.module.initialize()})};a.url=function(e,d){if(typeof e==="boolean"){d=e;e=null}e=(e||"").replace(/^\//,"");var c=d?a.LOCALE_ROOT:a.SITE_ROOT;return e?c+"/"+e:c};a.sandbox.extend({url:a.url});if(a.ENV!==a.TESTING){b(function(){a.initialize()})}})(this.ckan,this.jQuery);this.jQuery.fn.ie7redraw=function(){if(jQuery.browser.msie&&jQuery.browser.version=="7.0"){jQuery(this).css("zoom",1)}};
this.ckan.module("select-switch",{options:{target:"select"},initialize:function(){var a=this;this.el.on("change",this.options.target,function(){a.el.submit()})}});
this.ckan.module("slug-preview-target",{initialize:function(){var a=this.sandbox;var b=this.options;var c=this.el;a.subscribe("slug-preview-created",function(d){c.after(d)});a.subscribe("slug-preview-modified",function(){c.off(".slug-preview")});c.on("keyup.slug-preview",function(d){a.publish("slug-target-changed",this.value)})}});this.ckan.module("slug-preview-slug",function(b,a){return{options:{prefix:"",placeholder:"<slug>",i18n:{url:a("URL"),edit:a("Edit")}},initialize:function(){var c=this.sandbox;var f=this.options;var h=this.el;var e=c.translate;var d=h.slug();var g=d.parents(".control-group");var i;if(!(g.length)){return}if(!g.hasClass("error")){i=g.slugPreview({prefix:f.prefix,placeholder:f.placeholder,i18n:{URL:this.i18n("url"),Edit:this.i18n("edit")}});d.keypress(function(){if(event.charCode){c.publish("slug-preview-modified",i[0])}});c.publish("slug-preview-created",i[0]);if(b.browser.msie&&b.browser.version=="7.0"){b(".btn").on("click",i,function(){b(".controls").ie7redraw()});i.hide();setTimeout(function(){i.show();b(".controls").ie7redraw()},10)}}c.subscribe("slug-target-changed",function(j){d.val(j).trigger("change")})}}});
this.ckan.module("basic-form",function(b,a){return{initialize:function(){var c=a("There are unsaved modifications to this form").fetch();this.el.incompleteFormWarning(c);if($("html").hasClass("ie7")){this.el.on("submit",function(){var d=$(this);$("button",d).each(function(){var e=$(this);$('<input type="hidden">').prop("name",e.prop("name")).prop("value",e.val()).appendTo(d)})})}}}});
this.ckan.module("confirm-action",function(b,a){return{options:{i18n:{heading:a("Please Confirm Action"),content:a("Are you sure you want to perform this action?"),confirm:a("Confirm"),cancel:a("Cancel")},template:['<div class="modal">','<div class="modal-header">','<button type="button" class="close" data-dismiss="modal">×</button>',"<h3></h3>","</div>",'<div class="modal-body"></div>','<div class="modal-footer">','<button class="btn btn-cancel"></button>','<button class="btn btn-primary"></button>',"</div>","</div>"].join("\n")},initialize:function(){b.proxyAll(this,/_on/);this.el.on("click",this._onClick)},confirm:function(){this.sandbox.body.append(this.createModal());this.modal.modal("show");this.modal.css({"margin-top":this.modal.height()*-0.5,top:"50%"})},performAction:function(){var c=b("<form/>",{action:this.el.attr("href"),method:"POST"});c.appendTo("body").submit()},createModal:function(){if(!this.modal){var c=this.modal=b(this.options.template);c.on("click",".btn-primary",this._onConfirmSuccess);c.on("click",".btn-cancel",this._onConfirmCancel);c.modal({show:false});c.find("h3").text(this.i18n("heading"));c.find(".modal-body").text(this.i18n("content"));c.find(".btn-primary").text(this.i18n("confirm"));c.find(".btn-cancel").text(this.i18n("cancel"))}return this.modal},_onClick:function(c){c.preventDefault();this.confirm()},_onConfirmSuccess:function(c){this.performAction()},_onConfirmCancel:function(c){this.modal.modal("hide")}}});
this.ckan.module("api-info",function(b,a){return{modal:null,options:{template:null,i18n:{noTemplate:a("There is no API data to load for this resource"),loadError:a("Failed to load data API information")}},initialize:function(){b.proxyAll(this,/_on/);this.el.on("click",this._onClick);this.el.button()},loading:function(c){this.el.button(c!==false?"loading":"reset")},show:function(){var c=this.sandbox,d=this;if(this.modal){return this.modal.modal("show")}this.loadTemplate().done(function(e){d.modal=b(e);d.modal.find(".modal-header :header").append('<button class="close" data-dismiss="modal">×</button>');d.modal.modal().appendTo(c.body)})},hide:function(){if(this.modal){this.modal.modal("hide")}},loadTemplate:function(){if(!this.options.template){this.sandbox.notify(this.i18n("noTemplate"));return b.Deferred().reject().promise()}if(!this.promise){this.loading();this.promise=b.get(this.options.template);this.promise.then(this._onTemplateSuccess,this._onTemplateError)}return this.promise},_onClick:function(c){c.preventDefault();this.show()},_onTemplateSuccess:function(){this.loading(false)},_onTemplateError:function(){this.loading(false);this.sandbox.notify(this.i18n("loadError"))}}});
this.ckan.module("autocomplete",function(b,a){return{options:{tags:false,key:false,label:false,items:10,source:null,interval:1000,dropdownClass:"",containerClass:"",i18n:{noMatches:a("No matches found"),emptySearch:a("Start typing…"),inputTooShort:function(c){return a("Input is too short, must be at least one character").ifPlural(c.min,"Input is too short, must be at least %(min)d characters")}}},initialize:function(){b.proxyAll(this,/_on/,/format/);this.setupAutoComplete()},setupAutoComplete:function(){var d={width:"resolve",formatResult:this.formatResult,formatNoMatches:this.formatNoMatches,formatInputTooShort:this.formatInputTooShort,dropdownCssClass:this.options.dropdownClass,containerCssClass:this.options.containerClass};if(!this.el.is("select")){if(this.options.tags){d.tags=this._onQuery}else{d.query=this._onQuery;d.createSearchChoice=this.formatTerm}d.initSelection=this.formatInitialValue}var c=this.el.select2(d).data("select2");if(this.options.tags&&c&&c.search){c.search.on("keydown",this._onKeydown)}$(".select2-choice",c.container).on("click",function(){return false})},getCompletions:function(f,g){var i=this.options.source.split("?");var d=i.pop();var h=i.join("?")+encodeURIComponent(f)+d;var c=this.sandbox.client;var e={format:function(k){var j=b.extend(e,{objects:true});return{results:c.parseCompletions(k,j)}},key:this.options.key,label:this.options.label};return c.getCompletions(h,e,g)},lookup:function(c,e){var d=this;this._lastTerm=c;if(c){if(!this._debounced){this._debounced=setTimeout(function(){var f=d._lastTerm;delete d._debounced;if(d._last){d._last.abort()}d._last=d.getCompletions(f,function(g){e(d._lastResults=g)})},this.options.interval)}else{e(this._lastResults||{results:[]})}}else{e({results:[]})}},formatResult:function(f,c,e){var d=this._lastTerm||null;if(c){c.attr("data-value",f.id)}return f.text.split(d).join(d&&d.bold())},formatNoMatches:function(c){return !c?this.i18n("emptySearch"):this.i18n("noMatches")},formatInputTooShort:function(d,c){return this.i18n("inputTooShort",{min:c})},formatTerm:function(c){c=b.trim(c||"");return{id:c.replace(/,/g,"\u002C"),text:c}},formatInitialValue:function(c,f){var e=b.trim(c.val()||"");var d;if(this.options.tags){d=b.map(e.split(","),this.formatTerm)}else{d=this.formatTerm(e)}if(typeof f==="function"){f(d)}return d},_onQuery:function(c){if(c){this.lookup(c.term,c.callback)}},_onKeydown:function(c){if(c.which===188){c.preventDefault();setTimeout(function(){var d=b.Event("keydown",{which:13});b(c.target).trigger(d)},10)}}}});
this.ckan.module("custom-fields",function(e,t){return{options:{fieldSelector:".control-custom"},initialize:function(){if(!e.browser.msie||"7.0"==!e.browser.version){e.proxyAll(this,/_on/);var t=this.options.fieldSelector+":last input:first";this.el.on("change",t,this._onChange),this.el.on("change",":checkbox",this._onRemove),this.$(".checkbox").addClass("btn btn-danger icon-remove")}},newField:function(e){this.el.append(this.cloneField(e))},cloneField:function(t){return this.resetField(e(t).clone())},resetField:function(e){function t(e,t){return(t||"").replace(/\d+/,function(e){return 1+parseInt(e,10)})}var n=e.find(":input");n.val("").attr("id",t).attr("name",t);var i=e.find("label");return i.text(t).attr("for",t),e},disableField:function(e,t){e.toggleClass("disabled",t!==!1),e.find(":input:not(:checkbox)").prop("disabled",t!==!1)},_onChange:function(t){if(""!==t.target.value){var n=e(t.target).parents(".control-custom");this.newField(n)}},_onRemove:function(t){var n=e(t.target).parents(".control-custom");this.disableField(n,t.target.checked)}}});

this.ckan.module("related-item",function(b,a){return{options:{truncate:55,truncateMore:null,truncateLess:null,truncatePrefix:"",truncateSuffix:"",truncateSelector:".prose",expandedClass:"expanded",hasExpanderClass:"is-expander",i18n:{more:a("show more"),less:a("show less")}},initialize:function(){b.proxyAll(this,/_on/);var c=this.options;this.description=this.$(c.truncateSelector);this.truncated=this.description.truncate({max_length:c.truncate,more:c.truncateMore||this.i18n("more"),less:c.truncateLess||this.i18n("less"),link_prefix:c.truncatePrefix,link_suffix:c.truncateSuffix});this.collapsedHeight=this.el.height();this.truncated.on("expand.truncate",this._onExpand);this.truncated.on("collapse.truncate",this._onCollapse);if($(".truncator-link",this.description).length>0){this.el.addClass(c.hasExpanderClass)}},_onExpand:function(){var c=this.el.height()-this.collapsedHeight;this.el.addClass(this.options.expandedClass);this.el.css("margin-bottom",c*-1)},_onCollapse:function(){this.el.removeClass(this.options.expandedClass);this.el.css("margin-bottom","")}}});
this.ckan.module("data-viewer",function(a){return{options:{timeout:200,minHeight:400,padding:30},initialize:function(){a.proxyAll(this,/_on/);this.el.on("load",this._onLoad);this._FirefoxFix();this.sandbox.subscribe("data-viewer-error",this._onDataViewerError)},_onDataViewerError:function(c){var b=this.el.parent();$(".data-viewer-error .collapse",b).html(c);$(".data-viewer-error",b).removeClass("js-hide");this.el.hide()},_onLoad:function(){var b=this;var c=$("body").data("site-root");if(this.el.attr("src").substring(0,c.length)===c){this._recalibrate();setInterval(function(){b._recalibrate()},this.options.timeout)}else{this.el.css("height",600)}},_recalibrate:function(){var b=this.el.contents().find("body").outerHeight(true);b=Math.max(b,this.options.minHeight);this.el.css("height",b+this.options.padding)},_FirefoxFix:function(){if(/#$/.test(this.el.src)){this.el.src=this.el.src.substr(0,this.src.length-1)}else{this.el.src=this.el.src+"#"}}}});
this.ckan.module("table-selectable-rows",function(b,a){return{select_all:null,total_checkboxes:0,buttons:null,initialize:function(){b.proxyAll(this,/_on/);this.total_checkboxes=b('input[type="checkbox"]',this.el).length;this.select_all=b('<input type="checkbox">').data("select-all",true).appendTo(b("thead th:first-child",this.el));this.el.on("change",'input[type="checkbox"]',this._onHandleCheckboxToggle);this.buttons=b("th.actions .btn",this.el).addClass("disabled").prop("disabled",true)},_onHandleCheckboxToggle:function(c){var d=b(c.target);if(d.data("select-all")){this.handleSelectAll(d,d.is(":checked"))}else{this.handleSelectOne(d,d.is(":checked"))}},handleSelectAll:function(c,d){b('input[type="checkbox"]',this.el).prop("checked",d);if(d){b("tbody tr",this.el).addClass("table-selected");this.buttons.removeClass("disabled").prop("disabled",false)}else{b("tbody tr",this.el).removeClass("table-selected");this.buttons.addClass("disabled").prop("disabled",true)}},handleSelectOne:function(c,d){if(d){c.parents("tr").addClass("table-selected")}else{c.parents("tr").removeClass("table-selected")}var e=b('tbody input[type="checkbox"]:checked',this.el).length;if(e>=this.total_checkboxes){this.select_all.prop("checked",true)}else{this.select_all.prop("checked",false)}if(e>0){this.buttons.removeClass("disabled").prop("disabled",false)}else{this.buttons.addClass("disabled").prop("disabled",true)}}}});
this.ckan.module("resource-form",function(b,a){return{initialize:function(){b.proxyAll(this,/_on/);this.sandbox.subscribe("resource:uploaded",this._onResourceUploaded)},teardown:function(){this.sandbox.unsubscribe("resource:uploaded",this._onResourceUploaded)},_onResourceUploaded:function(d){var c;var e;for(c in d){if(d.hasOwnProperty(c)){e=this.$('[name="'+c+'"]');if(e.is(":checkbox, :radio")){this.$('[value="'+d[c]+'"]').prop("checked",true)}else{if(e.is("select")){e.prop("selected",d[c])}else{e.val(d[c])}}}}}}});
this.ckan.module("resource-upload-field",function(c,a,b){return{options:{form:{method:"POST",file:"file",params:[]},i18n:{label:a("Upload a file"),errorTitle:a("An Error Occurred"),uploadSuccess:a("Resource uploaded"),uploadError:a("Unable to upload file"),authError:a("Unable to authenticate upload"),metadataError:a("Unable to get data for uploaded file"),uploadingWarning:a("You are uploading a file. Are you sure you want to navigate away and stop this upload?")},template:['<span class="resource-upload-field">','<i class="ckan-icon ckan-icon-link-plugin"></i>','<input  onclick="ocultarDatos(false);" type="file" />','<input id="field-resource-type-upload" type="radio" name="resource_type" value="file.upload" />','<label class="radio inline" for="field-resource-type-upload"></label>',"</span>"].join("\n")},initialize:function(){c.proxyAll(this,/_on/);this.upload=c(this.options.template);this.setupFileUpload();this.el.append(this.upload);c(window).on("beforeunload",this._onWindowUpload)},setupFileUpload:function(){var d=this.options;this.upload.find("label").text(this.i18n("label"));this.upload.find("input[type=file]").fileupload({type:d.form.method,paramName:d.form.file,forceIframeTransport:true,replaceFileInput:true,autoUpload:false,add:this._onUploadAdd,send:this._onUploadSend,done:this._onUploadDone,fail:this._onUploadFail,always:this._onUploadComplete})},loading:function(d){this.upload.toggleClass("loading",d)},authenticate:function(d,f){f.key=d;var e=this.sandbox.client.getStorageAuth(d);var g=c.proxy(this._onAuthSuccess,this,f);return e.then(g,this._onAuthError)},lookupMetadata:function(d,f){var e=this.sandbox.client.getStorageMetadata(d);var g=c.proxy(this._onMetadataSuccess,this,f);return e.then(g,this._onMetadataError)},notify:function(e,d){var f=this.i18n("errorTitle");this.sandbox.notify(f,e,d)},generateKey:function(d){var e=d.split(".");var h=c.url.slugify(e.pop());d=c.url.slugify(e.join("."))+"."+h;var g=document.getElementById("organizacionDataset");var f=g.value;if(f){d=f+"/"+d}else{d="general/"+d}return d},uploading:function(d){var e=d?"on":"off";c(window)[e]("beforeunload",this._onWindowBeforeUnload)},_onUploadAdd:function(e,f){this.uploading(true);if(f.files&&f.files.length){var d=this.generateKey(f.files[0].name);this.authenticate(d,f)}},_onUploadFail:function(){this.sandbox.notify(this.i18n("uploadError"))},_onUploadSend:function(){this.loading()},_onUploadDone:function(e,f){var d=f.result;if(d&&!(c.isPlainObject(d)&&d.error)){this.lookupMetadata(f.key,f)}else{this._onUploadFail(e,f)}},_onUploadComplete:function(){this.loading(false);this.uploading(false)},_onAuthSuccess:function(e,d){e.url=d.action;e.formData=this.options.form.params.concat(d.fields);e.submit()},_onAuthError:function(d,e){this.sandbox.notify(this.i18n("authError"));this._onUploadComplete()},_onMetadataSuccess:function(f,d){var e=this.sandbox.client.convertStorageMetadataToResource(d);this.sandbox.notify(this.i18n("uploadSuccess"),"","success");this.sandbox.publish("resource:uploaded",e)},_onMetadataError:function(){this.sandbox.notify(this.i18n("metadataError"));this._onUploadComplete()},_onWindowBeforeUnload:function(e){var d=this.i18n("uploadingWarning");if(e.originalEvent.returnValue){e.originalEvent.returnValue=d}return d}}});
this.ckan.module("follow",function(b,a){return{options:{action:null,type:null,id:null,loading:false,i18n:{follow:a("Follow"),unfollow:a("Unfollow")}},initialize:function(){b.proxyAll(this,/_on/);this.el.on("click",this._onClick)},_onClick:function(e){var d=this.options;if(d.action&&d.type&&d.id&&!d.loading){e.preventDefault();var c=this.sandbox.client;var f=d.action+"_"+d.type;d.loading=true;this.el.addClass("disabled");c.call("POST",f,{id:d.id},this._onClickLoaded)}},_onClickLoaded:function(e){var d=this.options;var c=this.sandbox;d.loading=false;this.el.removeClass("disabled");if(d.action=="follow"){d.action="unfollow";this.el.html('<i class="icon-remove-sign"></i> '+this.i18n("unfollow")).removeClass("btn-success").addClass("btn-danger")}else{d.action="follow";this.el.html('<i class="icon-plus-sign"></i> '+this.i18n("follow")).removeClass("btn-danger").addClass("btn-success")}c.publish("follow-"+d.action+"-"+d.id)}}});
this.ckan.module("activity-stream",function(b,a){return{options:{more:null,id:null,context:null,offset:null,loading:false,i18n:{loading:a("Loading...")}},initialize:function(){b.proxyAll(this,/_on/);var c=this.options;c.more=(c.more=="True");this._onBuildLoadMore();b(window).on("scroll",this._onScrollIntoView);this._onScrollIntoView()},elementInViewport:function(e){var g=e.offsetTop;var f=e.offsetLeft;var d=e.offsetWidth;var c=e.offsetHeight;while(e.offsetParent){e=e.offsetParent;g+=e.offsetTop;f+=e.offsetLeft}return(g<(window.pageYOffset+window.innerHeight)&&f<(window.pageXOffset+window.innerWidth)&&(g+c)>window.pageYOffset&&(f+d)>window.pageXOffset)},_onScrollIntoView:function(){var d=b(".load-more a",this.el);if(d.length==1){var c=this.elementInViewport(d[0]);if(c&&!this.options.loading){d.trigger("click")}}},_onBuildLoadMore:function(){var c=this.options;if(c.more){b(".load-more",this.el).on("click","a",this._onLoadMoreClick);c.offset=b(".item",this.el).length}},_onLoadMoreClick:function(d){d.preventDefault();var c=this.options;if(!c.loading){c.loading=true;b(".load-more a",this.el).html(this.i18n("loading")).addClass("disabled");this.sandbox.client.call("GET",c.context+"_activity_list_html","?id="+c.id+"&offset="+c.offset,this._onActivitiesLoaded)}},_onActivitiesLoaded:function(e){var d=this.options;var c=b(e.result);d.more=(c.data("module-more")=="True");d.offset+=30;b(".load-less",c).remove();b(".load-more",this.el).remove();b("li",c).appendTo(this.el);this._onBuildLoadMore();d.loading=false}}});
this.ckan.module("dashboard",function(b,a){return{button:null,popover:null,searchTimeout:null,initialize:function(){b.proxyAll(this,/_on/);this.button=b("#followee-filter .btn").on("click",this._onShowFolloweeDropdown);var c=this.button.prop("title");this.button.popover({placement:"bottom",title:"Filter",html:true,content:b("#followee-popover").html()});this.button.prop("title",c);this.popover=this.button.data("popover").tip().addClass("popover-followee")},_onShowFolloweeDropdown:function(){this.button.toggleClass("active");if(this.button.hasClass("active")){setTimeout(this._onInitSearch,100)}return false},_onInitSearch:function(){var c=b("input",this.popover);if(!c.hasClass("inited")){c.on("keyup",this._onSearchKeyUp).addClass("inited")}c.focus()},_onSearchKeyUp:function(){clearTimeout(this.searchTimeout);this.searchTimeout=setTimeout(this._onSearchKeyUpTimeout,300)},_onSearchKeyUpTimeout:function(){var c=b("input",this.popover);var d=c.val().toLowerCase();if(d){b("li",this.popover).hide();b('li.everything, [data-search^="'+d+'"]',this.popover).show()}else{b("li",this.popover).show()}}}});
this.ckan.module("table-toggle-more",function(b,a){return{options:{i18n:{show_more:a("Show more"),show_less:a("Hide")}},initialize:function(){b.proxyAll(this,/_on/);this.el.addClass("table-toggle-more");var e=b(".toggle-more",this.el).length;if(e){var f=b("thead tr th",this.el).length;var g=['<tr class="toggle-show toggle-show-more">','<td colspan="'+f+'">',"<small>",'<a href="#" class="show-more">'+this.i18n("show_more")+"</a>",'<a href="#" class="show-less">'+this.i18n("show_less")+"</a>","</small>","</td>","</tr>"].join("\n");var c=['<tr class="toggle-seperator">','<td colspan="'+f+'">',"</td>","</tr>"].join("\n");var d=b(c).insertAfter(b(".toggle-more:last-child",this.el));b(g).insertAfter(d);b(".show-more",this.el).on("click",this._onShowMore);b(".show-less",this.el).on("click",this._onShowLess)}},_onShowMore:function(c){c.preventDefault();this.el.removeClass("table-toggle-more").addClass("table-toggle-less")},_onShowLess:function(c){c.preventDefault();this.el.removeClass("table-toggle-less").addClass("table-toggle-more")}}});
this.ckan.module("dataset-visibility",function(b,a){return{currentValue:false,options:{organizations:b("#field-organizations"),visibility:b("#field-private"),currentValue:null},initialize:function(){b.proxyAll(this,/_on/);this.options.currentValue=this.options.visibility.val();this.options.organizations.on("change",this._onOrganizationChange);this._onOrganizationChange()},_onOrganizationChange:function(){var c=this.options.organizations.val();if(c){this.options.visibility.prop("disabled",false).val(this.options.currentValue)}else{this.options.visibility.prop("disabled",true).val("False")}}}});
this.ckan.module("media-grid",function(b,a){return{initialize:function(){var c=this.el;c.imagesLoaded(function(){c.masonry({itemSelector:".media-item"})})}}});
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;b.ui=b.ui||{};b.extend(b.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});b.fn.extend({focus:(function(g){return function(h,i){return typeof h==="number"?this.each(function(){var j=this;setTimeout(function(){b(j).focus();if(i){i.call(j)}},h)}):g.apply(this,arguments)}})(b.fn.focus),scrollParent:function(){var g;if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))}).eq(0)}return(/fixed/).test(this.css("position"))||!g.length?b(document):g},zIndex:function(j){if(j!==f){return this.css("zIndex",j)}if(this.length){var h=b(this[0]),g,i;while(h.length&&h[0]!==document){g=h.css("position");if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);if(!isNaN(i)&&i!==0){return i}}h=h.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)}})},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")}})}});function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();if("area"===l){k=i.parentNode;j=k.name;if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false}h=b("img[usemap=#"+j+"]")[0];return !!h&&c(h)}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().addBack().filter(function(){return b.css(this,"visibility")==="hidden"}).length}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)}}):function(j,h,g){return !!b.data(j,g[3])},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);return(h||g>=0)&&d(i,!h)}});if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0}if(p){n-=parseFloat(b.css(o,"margin"+this))||0}});return n}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)}return this.each(function(){b(this).css(k,l(this,i)+"px")})};b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")})}})}if(!b.fn.addBack){b.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))}}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))}else{return g.call(this)}}})(b.fn.removeData)}b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());b.support.selectstart="onselectstart" in document.createElement("div");b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;for(g in l){k.plugins[g]=k.plugins[g]||[];k.plugins[g].push([j,l[g]])}},call:function(g,j,h){var k,l=g.plugins[j];if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return}for(k=0;k<l.length;k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)}}}},hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;if(j[g]>0){return true}j[g]=1;i=(j[g]>0);j[g]=0;return i}})})(jQuery);(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;b.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{b(h).triggerHandler("remove")}catch(j){}}c(f)};b.widget=function(f,g,n){var k,l,i,m,h={},j=f.split(".")[0];f=f.split(".")[1];k=j+"-"+f;if(!n){n=g;g=b.Widget}b.expr[":"][k.toLowerCase()]=function(o){return !!b.data(o,k)};b[j]=b[j]||{};l=b[j][f];i=b[j][f]=function(o,p){if(!this._createWidget){return new i(o,p)}if(arguments.length){this._createWidget(o,p)}};b.extend(i,l,{version:n.version,_proto:b.extend({},n),_childConstructors:[]});m=new g();m.options=b.widget.extend({},m.options);b.each(n,function(p,o){if(!b.isFunction(o)){h[p]=o;return}h[p]=(function(){var q=function(){return g.prototype[p].apply(this,arguments)},r=function(s){return g.prototype[p].apply(this,s)};return function(){var u=this._super,s=this._superApply,t;this._super=q;this._superApply=r;t=o.apply(this,arguments);this._super=u;this._superApply=s;return t}})()});i.prototype=b.widget.extend(m,{widgetEventPrefix:l?m.widgetEventPrefix:f},h,{constructor:i,namespace:j,widgetName:f,widgetFullName:k});if(l){b.each(l._childConstructors,function(p,q){var o=q.prototype;b.widget(o.namespace+"."+o.widgetName,i,q._proto)});delete l._childConstructors}else{g._childConstructors.push(i)}b.widget.bridge(f,i)};b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;for(;j<f;j++){for(h in g[j]){i=g[j][h];if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)}else{k[h]=i}}}}return k};b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;if(i){this.each(function(){var n,m=b.data(this,h);if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")}n=m[k].apply(m,j);if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;return false}})}else{this.each(function(){var m=b.data(this,h);if(m){m.option(k||{})._init()}else{b.data(this,h,new f(k,this))}})}return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];this.element=b(g);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);this.bindings=b();this.hoverable=b();this.focusable=b();if(g!==this){b.data(g,this.widgetFullName,this);this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()}}});this.document=b(g.style?g.ownerDocument:g.document||g);this.window=b(this.document[0].defaultView||this.document[0].parentWindow)}this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element},option:function(j,k){var f=j,l,h,g;if(arguments.length===0){return b.widget.extend({},this.options)}if(typeof j==="string"){f={};l=j.split(".");j=l.shift();if(l.length){h=f[j]=b.widget.extend({},this.options[j]);for(g=0;g<l.length-1;g++){h[l[g]]=h[l[g]]||{};h=h[l[g]]}j=l.pop();if(k===e){return h[j]===e?null:h[j]}h[j]=k}else{if(k===e){return this.options[j]===e?null:this.options[j]}f[j]=k}}this._setOptions(f);return this},_setOptions:function(f){var g;for(g in f){this._setOption(g,f[g])}return this},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_on:function(i,h,g){var j,f=this;if(typeof i!=="boolean"){g=h;h=i;i=false}if(!g){g=h;h=this.element;j=this.widget()}else{h=j=b(h);this.bindings=this.bindings.add(h)}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return}return(typeof o==="string"?f[o]:o).apply(f,arguments)}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];if(k){j.delegate(k,l,m)}else{h.bind(l,m)}})},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;g.unbind(f).undelegate(f)},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)}var f=this;return setTimeout(g,h||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(f,g,h){var k,j,i=this.options[f];h=h||{};g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();g.target=this.element[0];j=g.originalEvent;if(j){for(k in j){if(!(k in g)){g[k]=j[k]}}}this.element.trigger(g,h);return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())}};b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;i=i||{};if(typeof i==="number"){i={duration:i}}k=!b.isEmptyObject(i);i.complete=l;if(i.delay){j.delay(i.delay)}if(k&&b.effects&&b.effects.effect[h]){j[g](i)}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)}else{j.queue(function(m){b(this)[g]();if(l){l.call(j[0])}m()})}}}})})(jQuery);(function(b,c){var a=false;b(document).mouseup(function(){a=false});b.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(f){if(a){return}(this._mouseStarted&&this._mouseUp(f));this._mouseDownEvent=f;var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);if(!g||d||!this._mouseCapture(f)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);if(!this._mouseStarted){f.preventDefault();return true}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(h){return e._mouseMove(h)};this._mouseUpDelegate=function(h){return e._mouseUp(h)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);f.preventDefault();a=true;return true},_mouseMove:function(d){if(b.ui.ie&&(!document.documentMode||document.documentMode<9)&&!d.button){return this._mouseUp(d)}if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))}return !this._mouseStarted},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy()},_mouseCapture:function(c){var d=this.options;if(this.helper||d.disabled||a(c.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(c);if(!this.handle){return false}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")});return true},_mouseStart:function(c){var d=this.options;this.helper=this._createHelper(c);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offsetParent=this.helper.offsetParent();this.offsetParentCssPosition=this.offsetParent.css("position");this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};this.offset.scroll=false;a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;this.originalPageY=c.pageY;(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));this._setContainment();if(this._trigger("start",c)===false){this._clear();return false}this._cacheHelperProportions();if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)}this._mouseDrag(c,true);if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)}return true},_mouseDrag:function(c,e){if(this.offsetParentCssPosition==="fixed"){this.offset.parent=this._getParentOffset()}this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");if(!e){var d=this._uiHash();if(this._trigger("drag",c,d)===false){this._mouseUp({});return false}this.position=d.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)}return false},_mouseStop:function(d){var c=this,e=false;if(a.ui.ddmanager&&!this.options.dropBehaviour){e=a.ui.ddmanager.drop(this,d)}if(this.dropped){e=this.dropped;this.dropped=false}if(this.options.helper==="original"&&!a.contains(this.element[0].ownerDocument,this.element[0])){return false}if((this.options.revert==="invalid"&&!e)||(this.options.revert==="valid"&&e)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,e))){a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(c._trigger("stop",d)!==false){c._clear()}})}else{if(this._trigger("stop",d)!==false){this._clear()}}return false},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)}return a.ui.mouse.prototype._mouseUp.call(this,c)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(c){return this.options.handle?!!a(c.target).closest(this.element.find(this.options.handle)).length:true},_createHelper:function(d){var e=this.options,c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!c.parents("body").length){c.appendTo((e.appendTo==="parent"?this.element[0].parentNode:e.appendTo))}if(c[0]!==this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")}return c},_adjustOffsetFromHelper:function(c){if(typeof c==="string"){c=c.split(" ")}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){var c=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&a.ui.ie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var c=this.element.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,g,d,f=this.options;if(!f.containment){this.containment=null;return}if(f.containment==="window"){this.containment=[a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,a(window).scrollLeft()+a(window).width()-this.helperProportions.width-this.margins.left,a(window).scrollTop()+(a(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(f.containment==="document"){this.containment=[0,0,a(document).width()-this.helperProportions.width-this.margins.left,(a(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(f.containment.constructor===Array){this.containment=f.containment;return}if(f.containment==="parent"){f.containment=this.helper[0].parentNode}g=a(f.containment);d=g[0];if(!d){return}e=g.css("overflow")!=="hidden";this.containment=[(parseInt(g.css("borderLeftWidth"),10)||0)+(parseInt(g.css("paddingLeft"),10)||0),(parseInt(g.css("borderTopWidth"),10)||0)+(parseInt(g.css("paddingTop"),10)||0),(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(g.css("borderRightWidth"),10)||0)-(parseInt(g.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(g.css("borderBottomWidth"),10)||0)-(parseInt(g.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=g},_convertPositionTo:function(f,g){if(!g){g=this.position}var e=f==="absolute"?1:-1,c=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent;if(!this.offset.scroll){this.offset.scroll={top:c.scrollTop(),left:c.scrollLeft()}}return{top:(g.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)*e)),left:(g.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left)*e))}},_generatePosition:function(d){var c,i,j,f,e=this.options,k=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=d.pageX,g=d.pageY;if(!this.offset.scroll){this.offset.scroll={top:k.scrollTop(),left:k.scrollLeft()}}if(this.originalPosition){if(this.containment){if(this.relative_container){i=this.relative_container.offset();c=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else{c=this.containment}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top}}if(e.grid){j=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;g=c?((j-this.offset.click.top>=c[1]||j-this.offset.click.top>c[3])?j:((j-this.offset.click.top>=c[1])?j-e.grid[1]:j+e.grid[1])):j;f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;h=c?((f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2])?f:((f-this.offset.click.left>=c[0])?f-e.grid[0]:f+e.grid[0])):f}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():this.offset.scroll.top)),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():this.offset.scroll.left))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(c,d,e){e=e||this._uiHash();a.ui.plugin.call(this,c,[d,e]);if(c==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return a.Widget.prototype._trigger.call(this,c,d,e)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("ui-draggable"),g=e.options,c=a.extend({},f,{item:e.element});e.sortables=[];a(g.connectToSortable).each(function(){var h=a.data(this,"ui-sortable");if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});h.refreshPositions();h._trigger("activate",d,c)}})},stop:function(d,f){var e=a(this).data("ui-draggable"),c=a.extend({},f,{item:e.element});a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;e.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=this.shouldRevert}this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;if(e.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,c)}})},drag:function(d,f){var e=a(this).data("ui-draggable"),c=this;a.each(e.sortables,function(){var g=false,h=this;this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){g=true;a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;this.instance.offset.click=e.offset.click;if(this!==h&&this.instance._intersectsWith(this.instance.containerCache)&&a.contains(h.instance.element[0],this.instance.element[0])){g=false}return g})}if(g){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;e._trigger("toSortable",d);e.dropped=this.instance.element;e.currentItem=e.element;this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(d)}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()}e._trigger("fromSortable",d);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var c=a("body"),d=a(this).data("ui-draggable").options;if(c.css("cursor")){d._cursor=c.css("cursor")}c.css("cursor",d.cursor)},stop:function(){var c=a(this).data("ui-draggable").options;if(c._cursor){a("body").css("cursor",c._cursor)}}});a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;if(c.css("opacity")){f._opacity=c.css("opacity")}c.css("opacity",f.opacity)},stop:function(c,d){var e=a(this).data("ui-draggable").options;if(e._opacity){a(d.helper).css("opacity",e._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(){var c=a(this).data("ui-draggable");if(c.scrollParent[0]!==document&&c.scrollParent[0].tagName!=="HTML"){c.overflowOffset=c.scrollParent.offset()}},drag:function(e){var d=a(this).data("ui-draggable"),f=d.options,c=false;if(d.scrollParent[0]!==document&&d.scrollParent[0].tagName!=="HTML"){if(!f.axis||f.axis!=="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+f.scrollSpeed}else{if(e.pageY-d.overflowOffset.top<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-f.scrollSpeed}}}if(!f.axis||f.axis!=="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+f.scrollSpeed}else{if(e.pageX-d.overflowOffset.left<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-f.scrollSpeed}}}}else{if(!f.axis||f.axis!=="x"){if(e.pageY-a(document).scrollTop()<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)}}}if(!f.axis||f.axis!=="y"){if(e.pageX-a(document).scrollLeft()<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)}}}}if(c!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)}}});a.ui.plugin.add("draggable","snap",{start:function(){var c=a(this).data("ui-draggable"),d=c.options;c.snapElements=[];a(d.snap.constructor!==String?(d.snap.items||":data(ui-draggable)"):d.snap).each(function(){var f=a(this),e=f.offset();if(this!==c.element[0]){c.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:e.top,left:e.left})}})},drag:function(u,p){var c,z,j,k,s,n,m,A,v,h,g=a(this).data("ui-draggable"),q=g.options,y=q.snapTolerance,x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;for(v=g.snapElements.length-1;v>=0;v--){s=g.snapElements[v].left;n=s+g.snapElements[v].width;m=g.snapElements[v].top;A=m+g.snapElements[v].height;if(w<s-y||x>n+y||e<m-y||f>A+y||!a.contains(g.snapElements[v].item.ownerDocument,g.snapElements[v].item)){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=false;continue}if(q.snapMode!=="inner"){c=Math.abs(m-e)<=y;z=Math.abs(A-f)<=y;j=Math.abs(s-w)<=y;k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left}}h=(c||z||j||k);if(q.snapMode!=="outer"){c=Math.abs(m-f)<=y;z=Math.abs(A-e)<=y;j=Math.abs(s-x)<=y;k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(){var c,e=this.data("ui-draggable").options,d=a.makeArray(a(e.stack)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||0)-(parseInt(a(f).css("zIndex"),10)||0)});if(!d.length){return}c=parseInt(a(d[0]).css("zIndex"),10)||0;a(d).each(function(f){a(this).css("zIndex",c+f)});this.css("zIndex",(c+d.length))}});a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;if(c.css("zIndex")){f._zIndex=c.css("zIndex")}c.css("zIndex",f.zIndex)},stop:function(c,d){var e=a(this).data("ui-draggable").options;if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)}}})})(jQuery);(function(b,c){function a(e,d,f){return(e>d)&&(e<(d+f))}b.widget("ui.droppable",{version:"1.10.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e=this.options,d=e.accept;this.isover=false;this.isout=true;this.accept=b.isFunction(d)?d:function(f){return f.is(d)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};b.ui.ddmanager.droppables[e.scope]=b.ui.ddmanager.droppables[e.scope]||[];b.ui.ddmanager.droppables[e.scope].push(this);(e.addClasses&&this.element.addClass("ui-droppable"))},_destroy:function(){var e=0,d=b.ui.ddmanager.droppables[this.options.scope];for(;e<d.length;e++){if(d[e]===this){d.splice(e,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(d,e){if(d==="accept"){this.accept=b.isFunction(e)?e:function(f){return f.is(e)}}b.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var d=b.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}if(d){this._trigger("activate",e,this.ui(d))}},_deactivate:function(e){var d=b.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(d){this._trigger("deactivate",e,this.ui(d))}},_over:function(e){var d=b.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",e,this.ui(d))}},_out:function(e){var d=b.ui.ddmanager.current;if(!d||(d.currentItem||d.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",e,this.ui(d))}},_drop:function(e,f){var d=f||b.ui.ddmanager.current,g=false;if(!d||(d.currentItem||d.element)[0]===this.element[0]){return false}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var h=b.data(this,"ui-droppable");if(h.options.greedy&&!h.options.disabled&&h.options.scope===d.options.scope&&h.accept.call(h.element[0],(d.currentItem||d.element))&&b.ui.intersect(d,b.extend(h,{offset:h.element.offset()}),h.options.tolerance)){g=true;return false}});if(g){return false}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",e,this.ui(d));return this.element}return false},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}}});b.ui.intersect=function(q,j,o){if(!j.offset){return false}var h,i,f=(q.positionAbs||q.position.absolute).left,e=f+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height,g=j.offset.left,d=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;switch(o){case"fit":return(g<=f&&e<=d&&p<=n&&m<=k);case"intersect":return(g<f+(q.helperProportions.width/2)&&e-(q.helperProportions.width/2)<d&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);case"pointer":h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left);i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top);return a(i,p,j.proportions.height)&&a(h,g,j.proportions.width);case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((f>=g&&f<=d)||(e>=g&&e<=d)||(f<g&&e>d));default:return false}};b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(g,k){var f,e,d=b.ui.ddmanager.droppables[g.options.scope]||[],h=k?k.type:null,l=(g.currentItem||g.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(f=0;f<d.length;f++){if(d[f].options.disabled||(g&&!d[f].accept.call(d[f].element[0],(g.currentItem||g.element)))){continue}for(e=0;e<l.length;e++){if(l[e]===d[f].element[0]){d[f].proportions.height=0;continue droppablesLoop}}d[f].visible=d[f].element.css("display")!=="none";if(!d[f].visible){continue}if(h==="mousedown"){d[f]._activate.call(d[f],k)}d[f].offset=d[f].element.offset();d[f].proportions={width:d[f].element[0].offsetWidth,height:d[f].element[0].offsetHeight}}},drop:function(d,e){var f=false;b.each((b.ui.ddmanager.droppables[d.options.scope]||[]).slice(),function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance)){f=this._drop.call(this,e)||f}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(d.currentItem||d.element))){this.isout=true;this.isover=false;this._deactivate.call(this,e)}});return f},dragStart:function(d,e){d.element.parentsUntil("body").bind("scroll.droppable",function(){if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)}})},drag:function(d,e){if(d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)}b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var i,g,f,h=b.ui.intersect(d,this,this.options.tolerance),j=!h&&this.isover?"isout":(h&&!this.isover?"isover":null);if(!j){return}if(this.options.greedy){g=this.options.scope;f=this.element.parents(":data(ui-droppable)").filter(function(){return b.data(this,"ui-droppable").options.scope===g});if(f.length){i=b.data(f[0],"ui-droppable");i.greedyChild=(j==="isover")}}if(i&&j==="isover"){i.isover=false;i.isout=true;i._out.call(i,e)}this[j]=true;this[j==="isout"?"isover":"isout"]=false;this[j==="isover"?"_over":"_out"].call(this,e);if(i&&j==="isout"){i.isout=false;i.isover=true;i._over.call(i,e)}})},dragStop:function(d,e){d.element.parentsUntil("body").unbind("scroll.droppable");if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)}}}})(jQuery);(function(c,d){function b(e){return parseInt(e,10)||0}function a(e){return !isNaN(parseInt(e,10))}c.widget("ui.resizable",c.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var l,f,j,g,e,h=this,k=this.options;this.element.addClass("ui-resizable");c.extend(this,{_aspectRatio:!!(k.aspectRatio),aspectRatio:k.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:k.helper||k.ghost||k.animate?k.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=k.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}l=this.handles.split(",");this.handles={};for(f=0;f<l.length;f++){j=c.trim(l[f]);e="ui-resizable-"+j;g=c("<div class='ui-resizable-handle "+e+"'></div>");g.css({zIndex:k.zIndex});if("se"===j){g.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[j]=".ui-resizable-"+j;this.element.append(g)}}this._renderAxis=function(q){var n,o,m,p;q=q||this.element;for(n in this.handles){if(this.handles[n].constructor===String){this.handles[n]=c(this.handles[n],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){o=c(this.handles[n],this.element);p=/sw|ne|nw|se|n|s/.test(n)?o.outerHeight():o.outerWidth();m=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join("");q.css(m,p);this._proportionallyResize()}if(!c(this.handles[n]).length){continue}}};this._renderAxis(this.element);this._handles=c(".ui-resizable-handle",this.element).disableSelection();this._handles.mouseover(function(){if(!h.resizing){if(this.className){g=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}h.axis=g&&g[1]?g[1]:"se"}});if(k.autoHide){this._handles.hide();c(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(k.disabled){return}c(this).removeClass("ui-resizable-autohide");h._handles.show()}).mouseleave(function(){if(k.disabled){return}if(!h.resizing){c(this).addClass("ui-resizable-autohide");h._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var f,e=function(g){c(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){e(this.element);f=this.element;this.originalElement.css({position:f.css("position"),width:f.outerWidth(),height:f.outerHeight(),top:f.css("top"),left:f.css("left")}).insertAfter(f);f.remove()}this.originalElement.css("resize",this.originalResizeStyle);e(this.originalElement);return this},_mouseCapture:function(g){var f,h,e=false;for(f in this.handles){h=c(this.handles[f])[0];if(h===g.target||c.contains(h,g.target)){e=true}}return !this.options.disabled&&e},_mouseStart:function(g){var k,h,j,i=this.options,f=this.element.position(),e=this.element;this.resizing=true;if((/absolute/).test(e.css("position"))){e.css({position:"absolute",top:e.css("top"),left:e.css("left")})}else{if(e.is(".ui-draggable")){e.css({position:"absolute",top:f.top,left:f.left})}}this._renderProxy();k=b(this.helper.css("left"));h=b(this.helper.css("top"));if(i.containment){k+=c(i.containment).scrollLeft()||0;h+=c(i.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:k,top:h};this.size=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};this.originalSize=this._helper?{width:e.outerWidth(),height:e.outerHeight()}:{width:e.width(),height:e.height()};this.originalPosition={left:k,top:h};this.sizeDiff={width:e.outerWidth()-e.width(),height:e.outerHeight()-e.height()};this.originalMousePosition={left:g.pageX,top:g.pageY};this.aspectRatio=(typeof i.aspectRatio==="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);j=c(".ui-resizable-"+this.axis).css("cursor");c("body").css("cursor",j==="auto"?this.axis+"-resize":j);e.addClass("ui-resizable-resizing");this._propagate("start",g);return true},_mouseDrag:function(e){var k,g=this.helper,l={},i=this.originalMousePosition,m=this.axis,o=this.position.top,f=this.position.left,n=this.size.width,j=this.size.height,q=(e.pageX-i.left)||0,p=(e.pageY-i.top)||0,h=this._change[m];if(!h){return false}k=h.apply(this,[e,q,p]);this._updateVirtualBoundaries(e.shiftKey);if(this._aspectRatio||e.shiftKey){k=this._updateRatio(k,e)}k=this._respectSize(k,e);this._updateCache(k);this._propagate("resize",e);if(this.position.top!==o){l.top=this.position.top+"px"}if(this.position.left!==f){l.left=this.position.left+"px"}if(this.size.width!==n){l.width=this.size.width+"px"}if(this.size.height!==j){l.height=this.size.height+"px"}g.css(l);if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!c.isEmptyObject(l)){this._trigger("resize",e,this.ui())}return false},_mouseStop:function(h){this.resizing=false;var g,e,f,k,n,j,m,i=this.options,l=this;if(this._helper){g=this._proportionallyResizeElements;e=g.length&&(/textarea/i).test(g[0].nodeName);f=e&&c.ui.hasScroll(g[0],"left")?0:l.sizeDiff.height;k=e?0:l.sizeDiff.width;n={width:(l.helper.width()-k),height:(l.helper.height()-f)};j=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null;m=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;if(!i.animate){this.element.css(c.extend(n,{top:m,left:j}))}l.helper.height(l.size.height);l.helper.width(l.size.width);if(this._helper&&!i.animate){this._proportionallyResize()}}c("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",h);if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(g){var i,h,f,k,e,j=this.options;e={minWidth:a(j.minWidth)?j.minWidth:0,maxWidth:a(j.maxWidth)?j.maxWidth:Infinity,minHeight:a(j.minHeight)?j.minHeight:0,maxHeight:a(j.maxHeight)?j.maxHeight:Infinity};if(this._aspectRatio||g){i=e.minHeight*this.aspectRatio;f=e.minWidth/this.aspectRatio;h=e.maxHeight*this.aspectRatio;k=e.maxWidth/this.aspectRatio;if(i>e.minWidth){e.minWidth=i}if(f>e.minHeight){e.minHeight=f}if(h<e.maxWidth){e.maxWidth=h}if(k<e.maxHeight){e.maxHeight=k}}this._vBoundaries=e},_updateCache:function(e){this.offset=this.helper.offset();if(a(e.left)){this.position.left=e.left}if(a(e.top)){this.position.top=e.top}if(a(e.height)){this.size.height=e.height}if(a(e.width)){this.size.width=e.width}},_updateRatio:function(g){var h=this.position,f=this.size,e=this.axis;if(a(g.height)){g.width=(g.height*this.aspectRatio)}else{if(a(g.width)){g.height=(g.width/this.aspectRatio)}}if(e==="sw"){g.left=h.left+(f.width-g.width);g.top=null}if(e==="nw"){g.top=h.top+(f.height-g.height);g.left=h.left+(f.width-g.width)}return g},_respectSize:function(j){var g=this._vBoundaries,m=this.axis,p=a(j.width)&&g.maxWidth&&(g.maxWidth<j.width),k=a(j.height)&&g.maxHeight&&(g.maxHeight<j.height),h=a(j.width)&&g.minWidth&&(g.minWidth>j.width),n=a(j.height)&&g.minHeight&&(g.minHeight>j.height),f=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,i=/sw|nw|w/.test(m),e=/nw|ne|n/.test(m);if(h){j.width=g.minWidth}if(n){j.height=g.minHeight}if(p){j.width=g.maxWidth}if(k){j.height=g.maxHeight}if(h&&i){j.left=f-g.minWidth}if(p&&i){j.left=f-g.maxWidth}if(n&&e){j.top=l-g.minHeight}if(k&&e){j.top=l-g.maxHeight}if(!j.width&&!j.height&&!j.left&&j.top){j.top=null}else{if(!j.width&&!j.height&&!j.top&&j.left){j.left=null}}return j},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var h,f,l,e,k,g=this.helper||this.element;for(h=0;h<this._proportionallyResizeElements.length;h++){k=this._proportionallyResizeElements[h];if(!this.borderDif){this.borderDif=[];l=[k.css("borderTopWidth"),k.css("borderRightWidth"),k.css("borderBottomWidth"),k.css("borderLeftWidth")];e=[k.css("paddingTop"),k.css("paddingRight"),k.css("paddingBottom"),k.css("paddingLeft")];for(f=0;f<l.length;f++){this.borderDif[f]=(parseInt(l[f],10)||0)+(parseInt(e[f],10)||0)}}k.css({height:(g.height()-this.borderDif[0]-this.borderDif[2])||0,width:(g.width()-this.borderDif[1]-this.borderDif[3])||0})}},_renderProxy:function(){var e=this.element,f=this.options;this.elementOffset=e.offset();if(this._helper){this.helper=this.helper||c("<div style='overflow:hidden;'></div>");this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++f.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(f,e){return{width:this.originalSize.width+e}},w:function(g,e){var f=this.originalSize,h=this.originalPosition;return{left:h.left+e,width:f.width-e}},n:function(h,f,e){var g=this.originalSize,i=this.originalPosition;return{top:i.top+e,height:g.height-e}},s:function(g,f,e){return{height:this.originalSize.height+e}},se:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[g,f,e]))},sw:function(g,f,e){return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[g,f,e]))},ne:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[g,f,e]))},nw:function(g,f,e){return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[g,f,e]))}},_propagate:function(f,e){c.ui.plugin.call(this,f,[e,this.ui()]);(f!=="resize"&&this._trigger(f,e,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});c.ui.plugin.add("resizable","animate",{stop:function(h){var m=c(this).data("ui-resizable"),j=m.options,g=m._proportionallyResizeElements,e=g.length&&(/textarea/i).test(g[0].nodeName),f=e&&c.ui.hasScroll(g[0],"left")?0:m.sizeDiff.height,l=e?0:m.sizeDiff.width,i={width:(m.size.width-l),height:(m.size.height-f)},k=(parseInt(m.element.css("left"),10)+(m.position.left-m.originalPosition.left))||null,n=(parseInt(m.element.css("top"),10)+(m.position.top-m.originalPosition.top))||null;m.element.animate(c.extend(i,n&&k?{top:n,left:k}:{}),{duration:j.animateDuration,easing:j.animateEasing,step:function(){var o={width:parseInt(m.element.css("width"),10),height:parseInt(m.element.css("height"),10),top:parseInt(m.element.css("top"),10),left:parseInt(m.element.css("left"),10)};if(g&&g.length){c(g[0]).css({width:o.width,height:o.height})}m._updateCache(o);m._propagate("resize",h)}})}});c.ui.plugin.add("resizable","containment",{start:function(){var m,g,q,e,l,h,r,n=c(this).data("ui-resizable"),k=n.options,j=n.element,f=k.containment,i=(f instanceof c)?f.get(0):(/parent/.test(f))?j.parent().get(0):f;if(!i){return}n.containerElement=c(i);if(/document/.test(f)||f===document){n.containerOffset={left:0,top:0};n.containerPosition={left:0,top:0};n.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight}}else{m=c(i);g=[];c(["Top","Right","Left","Bottom"]).each(function(p,o){g[p]=b(m.css("padding"+o))});n.containerOffset=m.offset();n.containerPosition=m.position();n.containerSize={height:(m.innerHeight()-g[3]),width:(m.innerWidth()-g[1])};q=n.containerOffset;e=n.containerSize.height;l=n.containerSize.width;h=(c.ui.hasScroll(i,"left")?i.scrollWidth:l);r=(c.ui.hasScroll(i)?i.scrollHeight:e);n.parentData={element:i,left:q.left,top:q.top,width:h,height:r}}},resize:function(f){var k,q,j,i,l=c(this).data("ui-resizable"),h=l.options,n=l.containerOffset,m=l.position,p=l._aspectRatio||f.shiftKey,e={top:0,left:0},g=l.containerElement;if(g[0]!==document&&(/static/).test(g.css("position"))){e=n}if(m.left<(l._helper?n.left:0)){l.size.width=l.size.width+(l._helper?(l.position.left-n.left):(l.position.left-e.left));if(p){l.size.height=l.size.width/l.aspectRatio}l.position.left=h.helper?n.left:0}if(m.top<(l._helper?n.top:0)){l.size.height=l.size.height+(l._helper?(l.position.top-n.top):l.position.top);if(p){l.size.width=l.size.height*l.aspectRatio}l.position.top=l._helper?n.top:0}l.offset.left=l.parentData.left+l.position.left;l.offset.top=l.parentData.top+l.position.top;k=Math.abs((l._helper?l.offset.left-e.left:(l.offset.left-e.left))+l.sizeDiff.width);q=Math.abs((l._helper?l.offset.top-e.top:(l.offset.top-n.top))+l.sizeDiff.height);j=l.containerElement.get(0)===l.element.parent().get(0);i=/relative|absolute/.test(l.containerElement.css("position"));if(j&&i){k-=l.parentData.left}if(k+l.size.width>=l.parentData.width){l.size.width=l.parentData.width-k;if(p){l.size.height=l.size.width/l.aspectRatio}}if(q+l.size.height>=l.parentData.height){l.size.height=l.parentData.height-q;if(p){l.size.width=l.size.height*l.aspectRatio}}},stop:function(){var k=c(this).data("ui-resizable"),f=k.options,l=k.containerOffset,e=k.containerPosition,g=k.containerElement,i=c(k.helper),n=i.offset(),m=i.outerWidth()-k.sizeDiff.width,j=i.outerHeight()-k.sizeDiff.height;if(k._helper&&!f.animate&&(/relative/).test(g.css("position"))){c(this).css({left:n.left-e.left-l.left,width:m,height:j})}if(k._helper&&!f.animate&&(/static/).test(g.css("position"))){c(this).css({left:n.left-e.left-l.left,width:m,height:j})}}});c.ui.plugin.add("resizable","alsoResize",{start:function(){var e=c(this).data("ui-resizable"),g=e.options,f=function(h){c(h).each(function(){var i=c(this);i.data("ui-resizable-alsoresize",{width:parseInt(i.width(),10),height:parseInt(i.height(),10),left:parseInt(i.css("left"),10),top:parseInt(i.css("top"),10)})})};if(typeof(g.alsoResize)==="object"&&!g.alsoResize.parentNode){if(g.alsoResize.length){g.alsoResize=g.alsoResize[0];f(g.alsoResize)}else{c.each(g.alsoResize,function(h){f(h)})}}else{f(g.alsoResize)}},resize:function(g,i){var f=c(this).data("ui-resizable"),j=f.options,h=f.originalSize,l=f.originalPosition,k={height:(f.size.height-h.height)||0,width:(f.size.width-h.width)||0,top:(f.position.top-l.top)||0,left:(f.position.left-l.left)||0},e=function(m,n){c(m).each(function(){var q=c(this),r=c(this).data("ui-resizable-alsoresize"),p={},o=n&&n.length?n:q.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];c.each(o,function(s,u){var t=(r[u]||0)+(k[u]||0);if(t&&t>=0){p[u]=t||null}});q.css(p)})};if(typeof(j.alsoResize)==="object"&&!j.alsoResize.nodeType){c.each(j.alsoResize,function(m,n){e(m,n)})}else{e(j.alsoResize)}},stop:function(){c(this).removeData("resizable-alsoresize")}});c.ui.plugin.add("resizable","ghost",{start:function(){var f=c(this).data("ui-resizable"),g=f.options,e=f.size;f.ghost=f.originalElement.clone();f.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof g.ghost==="string"?g.ghost:"");f.ghost.appendTo(f.helper)},resize:function(){var e=c(this).data("ui-resizable");if(e.ghost){e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})}},stop:function(){var e=c(this).data("ui-resizable");if(e.ghost&&e.helper){e.helper.get(0).removeChild(e.ghost.get(0))}}});c.ui.plugin.add("resizable","grid",{resize:function(){var r=c(this).data("ui-resizable"),i=r.options,s=r.size,k=r.originalSize,n=r.originalPosition,t=r.axis,f=typeof i.grid==="number"?[i.grid,i.grid]:i.grid,p=(f[0]||1),m=(f[1]||1),h=Math.round((s.width-k.width)/p)*p,g=Math.round((s.height-k.height)/m)*m,l=k.width+h,e=k.height+g,j=i.maxWidth&&(i.maxWidth<l),u=i.maxHeight&&(i.maxHeight<e),q=i.minWidth&&(i.minWidth>l),v=i.minHeight&&(i.minHeight>e);i.grid=f;if(q){l=l+p}if(v){e=e+m}if(j){l=l-p}if(u){e=e-m}if(/^(se|s|e)$/.test(t)){r.size.width=l;r.size.height=e}else{if(/^(ne)$/.test(t)){r.size.width=l;r.size.height=e;r.position.top=n.top-g}else{if(/^(sw)$/.test(t)){r.size.width=l;r.size.height=e;r.position.left=n.left-h}else{r.size.width=l;r.size.height=e;r.position.top=n.top-g;r.position.left=n.left-h}}}}})})(jQuery);(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.3",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var d,c=this;this.element.addClass("ui-selectable");this.dragged=false;this.refresh=function(){d=a(c.options.filter,c.element[0]);d.addClass("ui-selectee");d.each(function(){var e=a(this),f=e.offset();a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})};this.refresh();this.selectees=d.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(e){var d=this,c=this.options;this.opos=[e.pageX,e.pageY];if(this.options.disabled){return}this.selectees=a(c.filter,this.element[0]);this._trigger("start",e);a(c.appendTo).append(this.helper);this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0});if(c.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");f.startselected=true;if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;d._trigger("unselecting",e,{unselecting:f.element})}});a(e.target).parents().addBack().each(function(){var f,g=a.data(this,"selectable-item");if(g){f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");g.unselecting=!f;g.selecting=f;g.selected=f;if(f){d._trigger("selecting",e,{selecting:g.element})}else{d._trigger("unselecting",e,{unselecting:g.element})}return false}})},_mouseDrag:function(j){this.dragged=true;if(this.options.disabled){return}var g,i=this,e=this.options,d=this.opos[0],h=this.opos[1],c=j.pageX,f=j.pageY;if(d>c){g=c;c=d;d=g}if(h>f){g=f;f=h;h=g}this.helper.css({left:d,top:h,width:c-d,height:f-h});this.selectees.each(function(){var k=a.data(this,"selectable-item"),l=false;if(!k||k.element===i.element[0]){return}if(e.tolerance==="touch"){l=(!(k.left>c||k.right<d||k.top>f||k.bottom<h))}else{if(e.tolerance==="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<f)}}if(l){if(k.selected){k.$element.removeClass("ui-selected");k.selected=false}if(k.unselecting){k.$element.removeClass("ui-unselecting");k.unselecting=false}if(!k.selecting){k.$element.addClass("ui-selecting");k.selecting=true;i._trigger("selecting",j,{selecting:k.element})}}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");k.selecting=false;k.$element.addClass("ui-selected");k.selected=true}else{k.$element.removeClass("ui-selecting");k.selecting=false;if(k.startselected){k.$element.addClass("ui-unselecting");k.unselecting=true}i._trigger("unselecting",j,{unselecting:k.element})}}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");k.selected=false;k.$element.addClass("ui-unselecting");k.unselecting=true;i._trigger("unselecting",j,{unselecting:k.element})}}}});return false},_mouseStop:function(d){var c=this;this.dragged=false;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;c._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;e.selected=true;e.startselected=true;c._trigger("selected",d,{selected:e.element})});this._trigger("stop",d);this.helper.remove();return false}})})(jQuery);(function(b,d){function a(f,e,g){return(f>e)&&(f<(e+g))}function c(e){return(/left|right/).test(e.css("float"))||(/inline|table-cell/).test(e.css("display"))}b.widget("ui.sortable",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?e.axis==="x"||c(this.items[0].item):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--){this.items[e].item.removeData(this.widgetName+"-item")}return this},_setOption:function(e,f){if(e==="disabled"){this.options[e]=f;this.widget().toggleClass("ui-sortable-disabled",!!f)}else{b.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(g,h){var e=null,i=false,f=this;if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false}this._refreshItems(g);b(g.target).parents().each(function(){if(b.data(this,f.widgetName+"-item")===f){e=b(this);return false}});if(b.data(g.target,f.widgetName+"-item")===f){e=b(g.target)}if(!e){return false}if(this.options.handle&&!h){b(this.options.handle,e).find("*").addBack().each(function(){if(this===g.target){i=true}});if(!i){return false}}this.currentItem=e;this._removeCurrentsFromItems();return true},_mouseStart:function(h,j,f){var g,e,k=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(h);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};b.extend(this.offset,{click:{left:h.pageX-this.offset.left,top:h.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(h);this.originalPageX=h.pageX;this.originalPageY=h.pageY;(k.cursorAt&&this._adjustOffsetFromHelper(k.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(k.containment){this._setContainment()}if(k.cursor&&k.cursor!=="auto"){e=this.document.find("body");this.storedCursor=e.css("cursor");e.css("cursor",k.cursor);this.storedStylesheet=b("<style>*{ cursor: "+k.cursor+" !important; }</style>").appendTo(e)}if(k.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",k.opacity)}if(k.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",k.zIndex)}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",h,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!f){for(g=this.containers.length-1;g>=0;g--){this.containers[g]._trigger("activate",h,this._uiHash(this))}}if(b.ui.ddmanager){b.ui.ddmanager.current=this}if(b.ui.ddmanager&&!k.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,h)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(h);return true},_mouseDrag:function(j){var g,h,f,l,k=this.options,e=false;this.position=this._generatePosition(j);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-j.pageY<k.scrollSensitivity){this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop+k.scrollSpeed}else{if(j.pageY-this.overflowOffset.top<k.scrollSensitivity){this.scrollParent[0].scrollTop=e=this.scrollParent[0].scrollTop-k.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-j.pageX<k.scrollSensitivity){this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft+k.scrollSpeed}else{if(j.pageX-this.overflowOffset.left<k.scrollSensitivity){this.scrollParent[0].scrollLeft=e=this.scrollParent[0].scrollLeft-k.scrollSpeed}}}else{if(j.pageY-b(document).scrollTop()<k.scrollSensitivity){e=b(document).scrollTop(b(document).scrollTop()-k.scrollSpeed)}else{if(b(window).height()-(j.pageY-b(document).scrollTop())<k.scrollSensitivity){e=b(document).scrollTop(b(document).scrollTop()+k.scrollSpeed)}}if(j.pageX-b(document).scrollLeft()<k.scrollSensitivity){e=b(document).scrollLeft(b(document).scrollLeft()-k.scrollSpeed)}else{if(b(window).width()-(j.pageX-b(document).scrollLeft())<k.scrollSensitivity){e=b(document).scrollLeft(b(document).scrollLeft()+k.scrollSpeed)}}}if(e!==false&&b.ui.ddmanager&&!k.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,j)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}for(g=this.items.length-1;g>=0;g--){h=this.items[g];f=h.item[0];l=this._intersectsWithPointer(h);if(!l){continue}if(h.instance!==this.currentContainer){continue}if(f!==this.currentItem[0]&&this.placeholder[l===1?"next":"prev"]()[0]!==f&&!b.contains(this.placeholder[0],f)&&(this.options.type==="semi-dynamic"?!b.contains(this.element[0],f):true)){this.direction=l===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(h)){this._rearrange(j,h)}else{break}this._trigger("change",j,this._uiHash());break}}this._contactContainers(j);if(b.ui.ddmanager){b.ui.ddmanager.drag(this,j)}this._trigger("sort",j,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(g,i){if(!g){return}if(b.ui.ddmanager&&!this.options.dropBehaviour){b.ui.ddmanager.drop(this,g)}if(this.options.revert){var f=this,j=this.placeholder.offset(),e=this.options.axis,h={};if(!e||e==="x"){h.left=j.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)}if(!e||e==="y"){h.top=j.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)}this.reverting=true;b(this.helper).animate(h,parseInt(this.options.revert,10)||500,function(){f._clear(g)})}else{this._clear(g,i)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("deactivate",null,this._uiHash(this));if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,this._uiHash(this));this.containers[e].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}b.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){b(this.domPosition.prev).after(this.currentItem)}else{b(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(g){var e=this._getItemsAsjQuery(g&&g.connected),f=[];g=g||{};b(e).each(function(){var h=(b(g.item||this).attr(g.attribute||"id")||"").match(g.expression||(/(.+)[\-=_](.+)/));if(h){f.push((g.key||h[1]+"[]")+"="+(g.key&&g.expression?h[1]:h[2]))}});if(!f.length&&g.key){f.push(g.key+"=")}return f.join("&")},toArray:function(g){var e=this._getItemsAsjQuery(g&&g.connected),f=[];g=g||{};e.each(function(){f.push(b(g.item||this).attr(g.attribute||"id")||"")});return f},_intersectsWith:function(q){var g=this.positionAbs.left,f=g+this.helperProportions.width,o=this.positionAbs.top,n=o+this.helperProportions.height,h=q.left,e=h+q.width,s=q.top,m=s+q.height,u=this.offset.click.top,k=this.offset.click.left,j=(this.options.axis==="x")||((o+u)>s&&(o+u)<m),p=(this.options.axis==="y")||((g+k)>h&&(g+k)<e),i=j&&p;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>q[this.floating?"width":"height"])){return i}else{return(h<g+(this.helperProportions.width/2)&&f-(this.helperProportions.width/2)<e&&s<o+(this.helperProportions.height/2)&&n-(this.helperProportions.height/2)<m)}},_intersectsWithPointer:function(g){var h=(this.options.axis==="x")||a(this.positionAbs.top+this.offset.click.top,g.top,g.height),f=(this.options.axis==="y")||a(this.positionAbs.left+this.offset.click.left,g.left,g.width),j=h&&f,e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();if(!j){return false}return this.floating?(((i&&i==="right")||e==="down")?2:1):(e&&(e==="down"?2:1))},_intersectsWithSides:function(h){var f=a(this.positionAbs.top+this.offset.click.top,h.top+(h.height/2),h.height),g=a(this.positionAbs.left+this.offset.click.left,h.left+(h.width/2),h.width),e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection();if(this.floating&&i){return((i==="right"&&g)||(i==="left"&&!g))}else{return e&&((e==="down"&&f)||(e==="up"&&!f))}},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){this._refreshItems(e);this.refreshPositions();return this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(l){var h,g,n,m,e=[],f=[],k=this._connectWith();if(k&&l){for(h=k.length-1;h>=0;h--){n=b(k[h]);for(g=n.length-1;g>=0;g--){m=b.data(n[g],this.widgetFullName);if(m&&m!==this&&!m.options.disabled){f.push([b.isFunction(m.options.items)?m.options.items.call(m.element):b(m.options.items,m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),m])}}}}f.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(h=f.length-1;h>=0;h--){f[h][0].each(function(){e.push(this)})}return b(e)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=b.grep(this.items,function(g){for(var f=0;f<e.length;f++){if(e[f]===g.item[0]){return false}}return true})},_refreshItems:function(e){this.items=[];this.containers=[this];var k,g,p,l,o,f,r,q,m=this.items,h=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):b(this.options.items,this.element),this]],n=this._connectWith();if(n&&this.ready){for(k=n.length-1;k>=0;k--){p=b(n[k]);for(g=p.length-1;g>=0;g--){l=b.data(p[g],this.widgetFullName);if(l&&l!==this&&!l.options.disabled){h.push([b.isFunction(l.options.items)?l.options.items.call(l.element[0],e,{item:this.currentItem}):b(l.options.items,l.element),l]);this.containers.push(l)}}}}for(k=h.length-1;k>=0;k--){o=h[k][1];f=h[k][0];for(g=0,q=f.length;g<q;g++){r=b(f[g]);r.data(this.widgetName+"-item",o);m.push({item:r,instance:o,width:0,height:0,left:0,top:0})}}},refreshPositions:function(e){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}var g,h,f,j;for(g=this.items.length-1;g>=0;g--){h=this.items[g];if(h.instance!==this.currentContainer&&this.currentContainer&&h.item[0]!==this.currentItem[0]){continue}f=this.options.toleranceElement?b(this.options.toleranceElement,h.item):h.item;if(!e){h.width=f.outerWidth();h.height=f.outerHeight()}j=f.offset();h.left=j.left;h.top=j.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(g=this.containers.length-1;g>=0;g--){j=this.containers[g].element.offset();this.containers[g].containerCache.left=j.left;this.containers[g].containerCache.top=j.top;this.containers[g].containerCache.width=this.containers[g].element.outerWidth();this.containers[g].containerCache.height=this.containers[g].element.outerHeight()}}return this},_createPlaceholder:function(f){f=f||this;var e,g=f.options;if(!g.placeholder||g.placeholder.constructor===String){e=g.placeholder;g.placeholder={element:function(){var i=f.currentItem[0].nodeName.toLowerCase(),h=b("<"+i+">",f.document[0]).addClass(e||f.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(i==="tr"){f.currentItem.children().each(function(){b("<td>&#160;</td>",f.document[0]).attr("colspan",b(this).attr("colspan")||1).appendTo(h)})}else{if(i==="img"){h.attr("src",f.currentItem.attr("src"))}}if(!e){h.css("visibility","hidden")}return h},update:function(h,i){if(e&&!g.forcePlaceholderSize){return}if(!i.height()){i.height(f.currentItem.innerHeight()-parseInt(f.currentItem.css("paddingTop")||0,10)-parseInt(f.currentItem.css("paddingBottom")||0,10))}if(!i.width()){i.width(f.currentItem.innerWidth()-parseInt(f.currentItem.css("paddingLeft")||0,10)-parseInt(f.currentItem.css("paddingRight")||0,10))}}}}f.placeholder=b(g.placeholder.element.call(f.element,f.currentItem));f.currentItem.after(f.placeholder);g.placeholder.update(f,f.placeholder)},_contactContainers:function(e){var l,h,p,m,n,r,f,s,k,o,g=null,q=null;for(l=this.containers.length-1;l>=0;l--){if(b.contains(this.currentItem[0],this.containers[l].element[0])){continue}if(this._intersectsWith(this.containers[l].containerCache)){if(g&&b.contains(this.containers[l].element[0],g.element[0])){continue}g=this.containers[l];q=l}else{if(this.containers[l].containerCache.over){this.containers[l]._trigger("out",e,this._uiHash(this));this.containers[l].containerCache.over=0}}}if(!g){return}if(this.containers.length===1){if(!this.containers[q].containerCache.over){this.containers[q]._trigger("over",e,this._uiHash(this));this.containers[q].containerCache.over=1}}else{p=10000;m=null;o=g.floating||c(this.currentItem);n=o?"left":"top";r=o?"width":"height";f=this.positionAbs[n]+this.offset.click[n];for(h=this.items.length-1;h>=0;h--){if(!b.contains(this.containers[q].element[0],this.items[h].item[0])){continue}if(this.items[h].item[0]===this.currentItem[0]){continue}if(o&&!a(this.positionAbs.top+this.offset.click.top,this.items[h].top,this.items[h].height)){continue}s=this.items[h].item.offset()[n];k=false;if(Math.abs(s-f)>Math.abs(s+this.items[h][r]-f)){k=true;s+=this.items[h][r]}if(Math.abs(s-f)<p){p=Math.abs(s-f);m=this.items[h];this.direction=k?"up":"down"}}if(!m&&!this.options.dropOnEmpty){return}if(this.currentContainer===this.containers[q]){return}m?this._rearrange(e,m,null,true):this._rearrange(e,null,this.containers[q].element,true);this._trigger("change",e,this._uiHash());this.containers[q]._trigger("change",e,this._uiHash(this));this.currentContainer=this.containers[q];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[q]._trigger("over",e,this._uiHash(this));this.containers[q].containerCache.over=1}},_createHelper:function(f){var g=this.options,e=b.isFunction(g.helper)?b(g.helper.apply(this.element[0],[f,this.currentItem])):(g.helper==="clone"?this.currentItem.clone():this.currentItem);if(!e.parents("body").length){b(g.appendTo!=="parent"?g.appendTo:this.currentItem[0].parentNode)[0].appendChild(e[0])}if(e[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(!e[0].style.width||g.forceHelperSize){e.width(this.currentItem.width())}if(!e[0].style.height||g.forceHelperSize){e.height(this.currentItem.height())}return e},_adjustOffsetFromHelper:function(e){if(typeof e==="string"){e=e.split(" ")}if(b.isArray(e)){e={left:+e[0],top:+e[1]||0}}if("left" in e){this.offset.click.left=e.left+this.margins.left}if("right" in e){this.offset.click.left=this.helperProportions.width-e.right+this.margins.left}if("top" in e){this.offset.click.top=e.top+this.margins.top}if("bottom" in e){this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft();e.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&b.ui.ie)){e={top:0,left:0}}return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var f,h,e,g=this.options;if(g.containment==="parent"){g.containment=this.helper[0].parentNode}if(g.containment==="document"||g.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(g.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(g.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(g.containment)){f=b(g.containment)[0];h=b(g.containment).offset();e=(b(f).css("overflow")!=="hidden");this.containment=[h.left+(parseInt(b(f).css("borderLeftWidth"),10)||0)+(parseInt(b(f).css("paddingLeft"),10)||0)-this.margins.left,h.top+(parseInt(b(f).css("borderTopWidth"),10)||0)+(parseInt(b(f).css("paddingTop"),10)||0)-this.margins.top,h.left+(e?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(b(f).css("borderLeftWidth"),10)||0)-(parseInt(b(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,h.top+(e?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(b(f).css("borderTopWidth"),10)||0)-(parseInt(b(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(g,i){if(!i){i=this.position}var f=g==="absolute"?1:-1,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(e[0].tagName);return{top:(i.top+this.offset.relative.top*f+this.offset.parent.top*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(h?0:e.scrollTop()))*f)),left:(i.left+this.offset.relative.left*f+this.offset.parent.left*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*f))}},_generatePosition:function(h){var j,i,k=this.options,g=h.pageX,f=h.pageY,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=(/(html|body)/i).test(e[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}if(this.originalPosition){if(this.containment){if(h.pageX-this.offset.click.left<this.containment[0]){g=this.containment[0]+this.offset.click.left}if(h.pageY-this.offset.click.top<this.containment[1]){f=this.containment[1]+this.offset.click.top}if(h.pageX-this.offset.click.left>this.containment[2]){g=this.containment[2]+this.offset.click.left}if(h.pageY-this.offset.click.top>this.containment[3]){f=this.containment[3]+this.offset.click.top}}if(k.grid){j=this.originalPageY+Math.round((f-this.originalPageY)/k.grid[1])*k.grid[1];f=this.containment?((j-this.offset.click.top>=this.containment[1]&&j-this.offset.click.top<=this.containment[3])?j:((j-this.offset.click.top>=this.containment[1])?j-k.grid[1]:j+k.grid[1])):j;i=this.originalPageX+Math.round((g-this.originalPageX)/k.grid[0])*k.grid[0];g=this.containment?((i-this.offset.click.left>=this.containment[0]&&i-this.offset.click.left<=this.containment[2])?i:((i-this.offset.click.left>=this.containment[0])?i-k.grid[0]:i+k.grid[0])):i}}return{top:(f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(l?0:e.scrollTop())))),left:(g-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():l?0:e.scrollLeft())))}},_rearrange:function(j,h,f,g){f?f[0].appendChild(this.placeholder[0]):h.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?h.item[0]:h.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var e=this.counter;this._delay(function(){if(e===this.counter){this.refreshPositions(!g)}})},_clear:function(f,g){this.reverting=false;var e,h=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(e in this._storedCSS){if(this._storedCSS[e]==="auto"||this._storedCSS[e]==="static"){this._storedCSS[e]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!g){h.push(function(i){this._trigger("receive",i,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!g){h.push(function(i){this._trigger("update",i,this._uiHash())})}if(this!==this.currentContainer){if(!g){h.push(function(i){this._trigger("remove",i,this._uiHash())});h.push((function(i){return function(j){i._trigger("receive",j,this._uiHash(this))}}).call(this,this.currentContainer));h.push((function(i){return function(j){i._trigger("update",j,this._uiHash(this))}}).call(this,this.currentContainer))}}for(e=this.containers.length-1;e>=0;e--){if(!g){h.push((function(i){return function(j){i._trigger("deactivate",j,this._uiHash(this))}}).call(this,this.containers[e]))}if(this.containers[e].containerCache.over){h.push((function(i){return function(j){i._trigger("out",j,this._uiHash(this))}}).call(this,this.containers[e]));this.containers[e].containerCache.over=0}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove()}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!g){this._trigger("beforeStop",f,this._uiHash());for(e=0;e<h.length;e++){h[e].call(this,f)}this._trigger("stop",f,this._uiHash())}this.fromOutside=false;return false}if(!g){this._trigger("beforeStop",f,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null;if(!g){for(e=0;e<h.length;e++){h[e].call(this,f)}this._trigger("stop",f,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(b.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(e){var f=e||this;return{helper:f.helper,placeholder:f.placeholder||b([]),position:f.position,originalPosition:f.originalPosition,offset:f.positionAbs,item:f.currentItem,sender:e?e.element:null}}})})(jQuery);(function(a,c){var b="ui-effects-";a.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(r,g){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",k=/^([\-+])=\s*(\d+\.?\d*)/,j=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1],s[2],s[3],s[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1]*2.55,s[2]*2.55,s[3]*2.55,s[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(s){return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(s){return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(s){return[s[1],s[2]/100,s[3]/100,s[4]]}}],h=r.Color=function(t,u,s,v){return new r.Color.fn.parse(t,u,s,v)},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},q={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},p=h.support={},e=r("<p>")[0],d,o=r.each;e.style.cssText="background-color:rgba(1,1,1,.5)";p.rgba=e.style.backgroundColor.indexOf("rgba")>-1;o(m,function(s,t){t.cache="_"+s;t.props.alpha={idx:3,type:"percent",def:1}});function l(t,v,u){var s=q[v.type]||{};if(t==null){return(u||!v.def)?null:v.def}t=s.floor?~~t:parseFloat(t);if(isNaN(t)){return v.def}if(s.mod){return(t+s.mod)%s.mod}return 0>t?0:s.max<t?s.max:t}function i(s){var u=h(),t=u._rgba=[];s=s.toLowerCase();o(j,function(z,A){var x,y=A.re.exec(s),w=y&&A.parse(y),v=A.space||"rgba";if(w){x=u[v](w);u[m[v].cache]=x[m[v].cache];t=u._rgba=x._rgba;return false}});if(t.length){if(t.join()==="0,0,0,0"){r.extend(t,d.transparent)}return u}return d[s]}h.fn=r.extend(h.prototype,{parse:function(y,w,s,x){if(y===g){this._rgba=[null,null,null,null];return this}if(y.jquery||y.nodeType){y=r(y).css(w);w=g}var v=this,u=r.type(y),t=this._rgba=[];if(w!==g){y=[y,w,s,x];u="array"}if(u==="string"){return this.parse(i(y)||d._default)}if(u==="array"){o(m.rgba.props,function(z,A){t[A.idx]=l(y[A.idx],A)});return this}if(u==="object"){if(y instanceof h){o(m,function(z,A){if(y[A.cache]){v[A.cache]=y[A.cache].slice()}})}else{o(m,function(A,B){var z=B.cache;o(B.props,function(C,D){if(!v[z]&&B.to){if(C==="alpha"||y[C]==null){return}v[z]=B.to(v._rgba)}v[z][D.idx]=l(y[C],D,true)});if(v[z]&&r.inArray(null,v[z].slice(0,3))<0){v[z][3]=1;if(B.from){v._rgba=B.from(v[z])}}})}return this}},is:function(u){var s=h(u),v=true,t=this;o(m,function(w,y){var z,x=s[y.cache];if(x){z=t[y.cache]||y.to&&y.to(t._rgba)||[];o(y.props,function(A,B){if(x[B.idx]!=null){v=(x[B.idx]===z[B.idx]);return v}})}return v});return v},_space:function(){var s=[],t=this;o(m,function(u,v){if(t[v.cache]){s.push(u)}});return s.pop()},transition:function(t,z){var u=h(t),v=u._space(),w=m[v],x=this.alpha()===0?h("transparent"):this,y=x[w.cache]||w.to(x._rgba),s=y.slice();u=u[w.cache];o(w.props,function(D,F){var C=F.idx,B=y[C],A=u[C],E=q[F.type]||{};if(A===null){return}if(B===null){s[C]=A}else{if(E.mod){if(A-B>E.mod/2){B+=E.mod}else{if(B-A>E.mod/2){B-=E.mod}}}s[C]=l((A-B)*z+B,F)}});return this[v](s)},blend:function(v){if(this._rgba[3]===1){return this}var u=this._rgba.slice(),t=u.pop(),s=h(v)._rgba;return h(r.map(u,function(w,x){return(1-t)*s[x]+t*w}))},toRgbaString:function(){var t="rgba(",s=r.map(this._rgba,function(u,w){return u==null?(w>2?1:0):u});if(s[3]===1){s.pop();t="rgb("}return t+s.join()+")"},toHslaString:function(){var t="hsla(",s=r.map(this.hsla(),function(u,w){if(u==null){u=w>2?1:0}if(w&&w<3){u=Math.round(u*100)+"%"}return u});if(s[3]===1){s.pop();t="hsl("}return t+s.join()+")"},toHexString:function(s){var t=this._rgba.slice(),u=t.pop();if(s){t.push(~~(u*255))}return"#"+r.map(t,function(w){w=(w||0).toString(16);return w.length===1?"0"+w:w}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});h.fn.parse.prototype=h.fn;function f(u,t,s){s=(s+1)%1;if(s*6<1){return u+(t-u)*s*6}if(s*2<1){return t}if(s*3<2){return u+(t-u)*((2/3)-s)*6}return u}m.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]}var t=v[0]/255,y=v[1]/255,z=v[2]/255,B=v[3],A=Math.max(t,y,z),w=Math.min(t,y,z),C=A-w,D=A+w,u=D*0.5,x,E;if(w===A){x=0}else{if(t===A){x=(60*(y-z)/C)+360}else{if(y===A){x=(60*(z-t)/C)+120}else{x=(60*(t-y)/C)+240}}}if(C===0){E=0}else{if(u<=0.5){E=C/D}else{E=C/(2-D)}}return[Math.round(x)%360,E,u,B==null?1:B]};m.hsla.from=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]}var w=x[0]/360,v=x[1],u=x[2],t=x[3],y=u<=0.5?u*(1+v):u+v-u*v,z=2*u-y;return[Math.round(f(z,y,w+(1/3))*255),Math.round(f(z,y,w)*255),Math.round(f(z,y,w-(1/3))*255),t]};o(m,function(t,v){var u=v.props,s=v.cache,x=v.to,w=v.from;h.fn[t]=function(C){if(x&&!this[s]){this[s]=x(this._rgba)}if(C===g){return this[s].slice()}var z,B=r.type(C),y=(B==="array"||B==="object")?C:arguments,A=this[s].slice();o(u,function(D,F){var E=y[B==="object"?D:F.idx];if(E==null){E=A[F.idx]}A[F.idx]=l(E,F)});if(w){z=h(w(A));z[s]=A;return z}else{return h(A)}};o(u,function(y,z){if(h.fn[y]){return}h.fn[y]=function(D){var F=r.type(D),C=(y==="alpha"?(this._hsla?"hsla":"rgba"):t),B=this[C](),E=B[z.idx],A;if(F==="undefined"){return E}if(F==="function"){D=D.call(this,E);F=r.type(D)}if(D==null&&z.empty){return this}if(F==="string"){A=k.exec(D);if(A){D=E+parseFloat(A[2])*(A[1]==="+"?1:-1)}}B[z.idx]=D;return this[C](B)}})});h.hook=function(t){var s=t.split(" ");o(s,function(u,v){r.cssHooks[v]={set:function(z,A){var x,y,w="";if(A!=="transparent"&&(r.type(A)!=="string"||(x=i(A)))){A=h(x||A);if(!p.rgba&&A._rgba[3]!==1){y=v==="backgroundColor"?z.parentNode:z;while((w===""||w==="transparent")&&y&&y.style){try{w=r.css(y,"backgroundColor");y=y.parentNode}catch(B){}}A=A.blend(w&&w!=="transparent"?w:"_default")}A=A.toRgbaString()}try{z.style[v]=A}catch(B){}}};r.fx.step[v]=function(w){if(!w.colorInit){w.start=h(w.elem,v);w.end=h(w.end);w.colorInit=true}r.cssHooks[v].set(w.elem,w.start.transition(w.end,w.pos))}})};h.hook(n);r.cssHooks.borderColor={expand:function(t){var s={};o(["Top","Right","Bottom","Left"],function(v,u){s["border"+u+"Color"]=t});return s}};d=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);(function(){var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,i){a.fx.step[i]=function(j){if(j.end!=="none"&&!j.setAttr||j.pos===1&&!j.setAttr){jQuery.style(j.elem,i,j.end);j.setAttr=true}}});function g(l){var i,h,j=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,k={};if(j&&j.length&&j[0]&&j[j[0]]){h=j.length;while(h--){i=j[h];if(typeof j[i]==="string"){k[a.camelCase(i)]=j[i]}}}else{for(i in j){if(typeof j[i]==="string"){k[i]=j[i]}}}return k}function d(h,j){var l={},i,k;for(i in j){k=j[i];if(h[i]!==k){if(!f[i]){if(a.fx.step[i]||!isNaN(parseFloat(k))){l[i]=k}}}}return l}if(!a.fn.addBack){a.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))}}a.effects.animateClass=function(h,i,l,k){var j=a.speed(i,l,k);return this.queue(function(){var o=a(this),m=o.attr("class")||"",n,p=j.children?o.find("*").addBack():o;p=p.map(function(){var q=a(this);return{el:q,start:g(this)}});n=function(){a.each(e,function(q,r){if(h[r]){o[r+"Class"](h[r])}})};n();p=p.map(function(){this.end=g(this.el[0]);this.diff=d(this.start,this.end);return this});o.attr("class",m);p=p.map(function(){var s=this,q=a.Deferred(),r=a.extend({},j,{queue:false,complete:function(){q.resolve(s)}});this.el.animate(this.diff,r);return q.promise()});a.when.apply(a,p.get()).done(function(){n();a.each(arguments,function(){var q=this.el;a.each(this.diff,function(r){q.css(r,"")})});j.complete.call(o[0])})})};a.fn.extend({addClass:(function(h){return function(j,i,l,k){return i?a.effects.animateClass.call(this,{add:j},i,l,k):h.apply(this,arguments)}})(a.fn.addClass),removeClass:(function(h){return function(j,i,l,k){return arguments.length>1?a.effects.animateClass.call(this,{remove:j},i,l,k):h.apply(this,arguments)}})(a.fn.removeClass),toggleClass:(function(h){return function(k,j,i,m,l){if(typeof j==="boolean"||j===c){if(!i){return h.apply(this,arguments)}else{return a.effects.animateClass.call(this,(j?{add:k}:{remove:k}),i,m,l)}}else{return a.effects.animateClass.call(this,{toggle:k},j,i,m)}}})(a.fn.toggleClass),switchClass:function(h,j,i,l,k){return a.effects.animateClass.call(this,{add:j,remove:h},i,l,k)}})})();(function(){a.extend(a.effects,{version:"1.10.3",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data(b+h[f],g[0].style[h[f]])}}},restore:function(g,j){var h,f;for(f=0;f<j.length;f++){if(j[f]!==null){h=g.data(b+j[f]);if(h===c){h=""}g.css(j[f],h)}}},setMode:function(f,g){if(g==="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(g){if(g.parent().is(".ui-effects-wrapper")){return g.parent()}var h={width:g.outerWidth(true),height:g.outerHeight(true),"float":g.css("float")},k=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:g.width(),height:g.height()},j=document.activeElement;try{j.id}catch(i){j=document.body}g.wrap(k);if(g[0]===j||a.contains(g[0],j)){a(j).focus()}k=g.parent();if(g.css("position")==="static"){k.css({position:"relative"});g.css({position:"relative"})}else{a.extend(h,{position:g.css("position"),zIndex:g.css("z-index")});a.each(["top","left","bottom","right"],function(l,m){h[m]=g.css(m);if(isNaN(parseInt(h[m],10))){h[m]="auto"}});g.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}g.css(f);return k.css(h).show()},removeWrapper:function(f){var g=document.activeElement;if(f.parent().is(".ui-effects-wrapper")){f.parent().replaceWith(f);if(f[0]===g||a.contains(f[0],g)){a(g).focus()}}return f},setTransition:function(g,i,f,h){h=h||{};a.each(i,function(k,j){var l=g.cssUnit(j);if(l[0]>0){h[j]=l[0]*f+l[1]}});return h}});function d(g,f,h,i){if(a.isPlainObject(g)){f=g;g=g.effect}g={effect:g};if(f==null){f={}}if(a.isFunction(f)){i=f;h=null;f={}}if(typeof f==="number"||a.fx.speeds[f]){i=h;h=f;f={}}if(a.isFunction(h)){i=h;h=null}if(f){a.extend(g,f)}h=h||f.duration;g.duration=a.fx.off?0:typeof h==="number"?h:h in a.fx.speeds?a.fx.speeds[h]:a.fx.speeds._default;g.complete=i||f.complete;return g}function e(f){if(!f||typeof f==="number"||a.fx.speeds[f]){return true}if(typeof f==="string"&&!a.effects.effect[f]){return true}if(a.isFunction(f)){return true}if(typeof f==="object"&&!f.effect){return true}return false}a.fn.extend({effect:function(){var h=d.apply(this,arguments),j=h.mode,f=h.queue,g=a.effects.effect[h.effect];if(a.fx.off||!g){if(j){return this[j](h.duration,h.complete)}else{return this.each(function(){if(h.complete){h.complete.call(this)}})}}function i(m){var n=a(this),l=h.complete,o=h.mode;function k(){if(a.isFunction(l)){l.call(n[0])}if(a.isFunction(m)){m()}}if(n.is(":hidden")?o==="hide":o==="show"){n[o]();k()}else{g.call(n[0],h,k)}}return f===false?this.each(i):this.queue(f||"fx",i)},show:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)}else{var g=d.apply(this,arguments);g.mode="show";return this.effect.call(this,g)}}})(a.fn.show),hide:(function(f){return function(h){if(e(h)){return f.apply(this,arguments)}else{var g=d.apply(this,arguments);g.mode="hide";return this.effect.call(this,g)}}})(a.fn.hide),toggle:(function(f){return function(h){if(e(h)||typeof h==="boolean"){return f.apply(this,arguments)}else{var g=d.apply(this,arguments);g.mode="toggle";return this.effect.call(this,g)}}})(a.fn.toggle),cssUnit:function(f){var g=this.css(f),h=[];a.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}})})();(function(){var d={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,e){d[e]=function(g){return Math.pow(g,f+2)}});a.extend(d,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(g){var e,f=4;while(g<((e=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((e*3-2)/22-g,2)}});a.each(d,function(f,e){a.easing["easeIn"+f]=e;a.easing["easeOut"+f]=function(g){return 1-e(1-g)};a.easing["easeInOut"+f]=function(g){return g<0.5?e(g*2)/2:1-e(g*-2+2)/2}})})()})(jQuery);(function(d,e){var b=0,c={},a={};c.height=c.paddingTop=c.paddingBottom=c.borderTopWidth=c.borderBottomWidth="hide";a.height=a.paddingTop=a.paddingBottom=a.borderTopWidth=a.borderBottomWidth="show";d.widget("ui.accordion",{version:"1.10.3",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var f=this.options;this.prevShow=this.prevHide=d();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");if(!f.collapsible&&(f.active===false||f.active==null)){f.active=0}this._processPanels();if(f.active<0){f.active+=this.headers.length}this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?d():this.active.next(),content:!this.active.length?d():this.active.next()}},_createIcons:function(){var f=this.options.icons;if(f){d("<span>").addClass("ui-accordion-header-icon ui-icon "+f.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(f.header).addClass(f.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var f;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});this._destroyIcons();f=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){if(/^ui-accordion/.test(this.id)){this.removeAttribute("id")}});if(this.options.heightStyle!=="content"){f.css("height","")}},_setOption:function(f,g){if(f==="active"){this._activate(g);return}if(f==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(g)}this._super(f,g);if(f==="collapsible"&&!g&&this.options.active===false){this._activate(0)}if(f==="icons"){this._destroyIcons();if(g){this._createIcons()}}if(f==="disabled"){this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!g)}},_keydown:function(i){if(i.altKey||i.ctrlKey){return}var j=d.ui.keyCode,h=this.headers.length,f=this.headers.index(i.target),g=false;switch(i.keyCode){case j.RIGHT:case j.DOWN:g=this.headers[(f+1)%h];break;case j.LEFT:case j.UP:g=this.headers[(f-1+h)%h];break;case j.SPACE:case j.ENTER:this._eventHandler(i);break;case j.HOME:g=this.headers[0];break;case j.END:g=this.headers[h-1];break}if(g){d(i.target).attr("tabIndex",-1);d(g).attr("tabIndex",0);g.focus();i.preventDefault()}},_panelKeyDown:function(f){if(f.keyCode===d.ui.keyCode.UP&&f.ctrlKey){d(f.currentTarget).prev().focus()}},refresh:function(){var f=this.options;this._processPanels();if((f.active===false&&f.collapsible===true)||!this.headers.length){f.active=false;this.active=d()}else{if(f.active===false){this._activate(0)}else{if(this.active.length&&!d.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){f.active=false;this.active=d()}else{this._activate(Math.max(0,f.active-1))}}else{f.active=this.headers.index(this.active)}}}this._destroyIcons();this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all");this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var j,h=this.options,g=h.heightStyle,i=this.element.parent(),f=this.accordionId="ui-accordion-"+(this.element.attr("id")||++b);this.active=this._findActive(h.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(n){var o=d(this),m=o.attr("id"),k=o.next(),l=k.attr("id");if(!m){m=f+"-header-"+n;o.attr("id",m)}if(!l){l=f+"-panel-"+n;k.attr("id",l)}o.attr("aria-controls",l);k.attr("aria-labelledby",m)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"})}this._createIcons();this._setupEvents(h.event);if(g==="fill"){j=i.height();this.element.siblings(":visible").each(function(){var l=d(this),k=l.css("position");if(k==="absolute"||k==="fixed"){return}j-=l.outerHeight(true)});this.headers.each(function(){j-=d(this).outerHeight(true)});this.headers.next().each(function(){d(this).height(Math.max(0,j-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")}else{if(g==="auto"){j=0;this.headers.next().each(function(){j=Math.max(j,d(this).css("height","").height())}).height(j)}}},_activate:function(f){var g=this._findActive(f)[0];if(g===this.active[0]){return}g=g||this.active[0];this._eventHandler({target:g,currentTarget:g,preventDefault:d.noop})},_findActive:function(f){return typeof f==="number"?this.headers.eq(f):d()},_setupEvents:function(g){var f={keydown:"_keydown"};if(g){d.each(g.split(" "),function(i,h){f[h]="_eventHandler"})}this._off(this.headers.add(this.headers.next()));this._on(this.headers,f);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(f){var n=this.options,i=this.active,j=d(f.currentTarget),l=j[0]===i[0],g=l&&n.collapsible,h=g?d():j.next(),k=i.next(),m={oldHeader:i,oldPanel:k,newHeader:g?d():j,newPanel:h};f.preventDefault();if((l&&!n.collapsible)||(this._trigger("beforeActivate",f,m)===false)){return}n.active=g?false:this.headers.index(j);this.active=l?d():j;this._toggle(m);i.removeClass("ui-accordion-header-active ui-state-active");if(n.icons){i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header)}if(!l){j.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(n.icons){j.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader)}j.next().addClass("ui-accordion-content-active")}},_toggle:function(h){var f=h.newPanel,g=this.prevShow.length?this.prevShow:h.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=f;this.prevHide=g;if(this.options.animate){this._animate(f,g,h)}else{g.hide();f.show();this._toggleComplete(h)}g.attr({"aria-expanded":"false","aria-hidden":"true"});g.prev().attr("aria-selected","false");if(f.length&&g.length){g.prev().attr("tabIndex",-1)}else{if(f.length){this.headers.filter(function(){return d(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}f.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(f,n,j){var m,l,i,k=this,o=0,p=f.length&&(!n.length||(f.index()<n.index())),h=this.options.animate||{},q=p&&h.down||h,g=function(){k._toggleComplete(j)};if(typeof q==="number"){i=q}if(typeof q==="string"){l=q}l=l||q.easing||h.easing;i=i||q.duration||h.duration;if(!n.length){return f.animate(a,i,l,g)}if(!f.length){return n.animate(c,i,l,g)}m=f.show().outerHeight();n.animate(c,{duration:i,easing:l,step:function(r,s){s.now=Math.round(r)}});f.hide().animate(a,{duration:i,easing:l,complete:g,step:function(r,s){s.now=Math.round(r);if(s.prop!=="height"){o+=s.now}else{if(k.options.heightStyle!=="content"){s.now=Math.round(m-n.outerHeight()-o);o=0}}}})},_toggleComplete:function(g){var f=g.oldPanel;f.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(f.length){f.parent()[0].className=f.parent()[0].className}this._trigger("activate",null,g)}})})(jQuery);(function(a,b){var c=0;a.widget("ui.autocomplete",{version:"1.10.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var f,d,g,i=this.element[0].nodeName.toLowerCase(),h=i==="textarea",e=i==="input";this.isMultiLine=h?true:e?false:this.element.prop("isContentEditable");this.valueMethod=this.element[h||e?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(j){if(this.element.prop("readOnly")){f=true;g=true;d=true;return}f=false;g=false;d=false;var k=a.ui.keyCode;switch(j.keyCode){case k.PAGE_UP:f=true;this._move("previousPage",j);break;case k.PAGE_DOWN:f=true;this._move("nextPage",j);break;case k.UP:f=true;this._keyEvent("previous",j);break;case k.DOWN:f=true;this._keyEvent("next",j);break;case k.ENTER:case k.NUMPAD_ENTER:if(this.menu.active){f=true;j.preventDefault();this.menu.select(j)}break;case k.TAB:if(this.menu.active){this.menu.select(j)}break;case k.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(j);j.preventDefault()}break;default:d=true;this._searchTimeout(j);break}},keypress:function(j){if(f){f=false;if(!this.isMultiLine||this.menu.element.is(":visible")){j.preventDefault()}return}if(d){return}var k=a.ui.keyCode;switch(j.keyCode){case k.PAGE_UP:this._move("previousPage",j);break;case k.PAGE_DOWN:this._move("nextPage",j);break;case k.UP:this._keyEvent("previous",j);break;case k.DOWN:this._keyEvent("next",j);break}},input:function(j){if(g){g=false;j.preventDefault();return}this._searchTimeout(j)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(j){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(j);this._change(j)}});this._initSource();this.menu=a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu");this._on(this.menu.element,{mousedown:function(j){j.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur});var k=this.menu.element[0];if(!a(j.target).closest(".ui-menu-item").length){this._delay(function(){var l=this;this.document.one("mousedown",function(m){if(m.target!==l.element[0]&&m.target!==k&&!a.contains(k,m.target)){l.close()}})})}},menufocus:function(k,l){if(this.isNewMenu){this.isNewMenu=false;if(k.originalEvent&&/^mouse/.test(k.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){a(k.target).trigger(k.originalEvent)});return}}var j=l.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",k,{item:j})){if(k.originalEvent&&/^key/.test(k.originalEvent.type)){this._value(j.value)}}else{this.liveRegion.text(j.value)}},menuselect:function(l,m){var k=m.item.data("ui-autocomplete-item"),j=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=j;this._delay(function(){this.previous=j;this.selectedItem=k})}if(false!==this._trigger("select",l,{item:k})){this._value(k.value)}this.term=this._value();this.close(l);this.selectedItem=k}});this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(d,e){this._super(d,e);if(d==="source"){this._initSource()}if(d==="appendTo"){this.menu.element.appendTo(this._appendTo())}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()}},_appendTo:function(){var d=this.options.appendTo;if(d){d=d.jquery||d.nodeType?a(d):this.document.find(d).eq(0)}if(!d){d=this.element.closest(".ui-front")}if(!d.length){d=this.document[0].body}return d},_initSource:function(){var f,d,e=this;if(a.isArray(this.options.source)){f=this.options.source;this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))}}else{if(typeof this.options.source==="string"){d=this.options.source;this.source=function(h,g){if(e.xhr){e.xhr.abort()}e.xhr=a.ajax({url:d,data:h,dataType:"json",success:function(i){g(i)},error:function(){g([])}})}}else{this.source=this.options.source}}},_searchTimeout:function(d){clearTimeout(this.searching);this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;this.search(null,d)}},this.options.delay)},search:function(e,d){e=e!=null?e:this._value();this.term=this._value();if(e.length<this.options.minLength){return this.close(d)}if(this._trigger("search",d)===false){return}return this._search(e)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:d},this._response())},_response:function(){var e=this,d=++c;return function(f){if(d===c){e.__response(f)}e.pending--;if(!e.pending){e.element.removeClass("ui-autocomplete-loading")}}},__response:function(d){if(d){d=this._normalize(d)}this._trigger("response",null,{content:d});if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);this._trigger("open")}else{this._close()}},close:function(d){this.cancelSearch=true;this._close(d)},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",d)}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}}return a.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(d){var e=this.menu.element.empty();this._renderMenu(e,d);this.isNewMenu=true;this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var d=this.menu.element;d.outerWidth(Math.max(d.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,d){var f=this;a.each(d,function(g,h){f._renderItemData(e,h)})},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);this.menu.blur();return}this.menu[e](d)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);d.preventDefault()}}});a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");return a.grep(f,function(g){return e.test(g.label||g.value||g)})}});a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var d;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}if(e&&e.length){d=this.options.messages.results(e.length)}else{d=this.options.messages.noResults}this.liveRegion.text(d)}})}(jQuery));(function(f,b){var k,e,a,h,i="ui-button ui-widget ui-state-default ui-corner-all",c="ui-state-hover ui-state-active ",g="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",j=function(){var l=f(this);setTimeout(function(){l.find(":ui-button").button("refresh")},1)},d=function(m){var l=m.name,n=m.form,o=f([]);if(l){l=l.replace(/'/g,"\\'");if(n){o=f(n).find("[name='"+l+"']")}else{o=f("[name='"+l+"']",m.ownerDocument).filter(function(){return !this.form})}}return o};f.widget("ui.button",{version:"1.10.3",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,j);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var o=this,m=this.options,p=this.type==="checkbox"||this.type==="radio",n=!p?"ui-state-active":"",l="ui-state-focus";if(m.label===null){m.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())}this._hoverable(this.buttonElement);this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(m.disabled){return}if(this===k){f(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(m.disabled){return}f(this).removeClass(n)}).bind("click"+this.eventNamespace,function(q){if(m.disabled){q.preventDefault();q.stopImmediatePropagation()}});this.element.bind("focus"+this.eventNamespace,function(){o.buttonElement.addClass(l)}).bind("blur"+this.eventNamespace,function(){o.buttonElement.removeClass(l)});if(p){this.element.bind("change"+this.eventNamespace,function(){if(h){return}o.refresh()});this.buttonElement.bind("mousedown"+this.eventNamespace,function(q){if(m.disabled){return}h=false;e=q.pageX;a=q.pageY}).bind("mouseup"+this.eventNamespace,function(q){if(m.disabled){return}if(e!==q.pageX||a!==q.pageY){h=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false}})}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(m.disabled||h){return false}f(this).addClass("ui-state-active");o.buttonElement.attr("aria-pressed","true");var q=o.element[0];d(q).not(q).map(function(){return f(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(m.disabled){return false}f(this).addClass("ui-state-active");k=this;o.document.one("mouseup",function(){k=null})}).bind("mouseup"+this.eventNamespace,function(){if(m.disabled){return false}f(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(q){if(m.disabled){return false}if(q.keyCode===f.ui.keyCode.SPACE||q.keyCode===f.ui.keyCode.ENTER){f(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(q){if(q.keyCode===f.ui.keyCode.SPACE){f(this).click()}})}}}this._setOption("disabled",m.disabled);this._resetButton()},_determineButtonType:function(){var l,n,m;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else{if(this.element.is("[type=radio]")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){l=this.element.parents().last();n="label[for='"+this.element.attr("id")+"']";this.buttonElement=l.find(n);if(!this.buttonElement.length){l=l.length?l.siblings():this.element.siblings();this.buttonElement=l.filter(n);if(!this.buttonElement.length){this.buttonElement=l.find(n)}}this.element.addClass("ui-helper-hidden-accessible");m=this.element.is(":checked");if(m){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",m)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(i+" "+c+" "+g).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(l,m){this._super(l,m);if(l==="disabled"){if(m){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var l=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(l!==this.options.disabled){this._setOption("disabled",l)}if(this.type==="radio"){d(this.element[0]).each(function(){if(f(this).is(":checked")){f(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{f(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var p=this.buttonElement.removeClass(g),n=f("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(p.empty()).text(),m=this.options.icons,l=m.primary&&m.secondary,o=[];if(m.primary||m.secondary){if(this.options.text){o.push("ui-button-text-icon"+(l?"s":(m.primary?"-primary":"-secondary")))}if(m.primary){p.prepend("<span class='ui-button-icon-primary ui-icon "+m.primary+"'></span>")}if(m.secondary){p.append("<span class='ui-button-icon-secondary ui-icon "+m.secondary+"'></span>")}if(!this.options.text){o.push(l?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){p.attr("title",f.trim(n))}}}else{o.push("ui-button-text-only")}p.addClass(o.join(" "))}});f.widget("ui.buttonset",{version:"1.10.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(l,m){if(l==="disabled"){this.buttons.button("option",l,m)}this._super(l,m)},refresh:function(){var l=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return f(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(l?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(l?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return f(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery));(function(e,g){e.extend(e.ui,{datepicker:{version:"1.10.3"}});var f="datepicker",c;function b(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};e.extend(this._defaults,this.regional[""]);this.dpDiv=d(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}e.extend(b.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(h){a(this._defaults,h||{});return this},_attachDatepicker:function(k,h){var l,j,i;l=k.nodeName.toLowerCase();j=(l==="div"||l==="span");if(!k.id){this.uuid+=1;k.id="dp"+this.uuid}i=this._newInst(e(k),j);i.settings=e.extend({},h||{});if(l==="input"){this._connectDatepicker(k,i)}else{if(j){this._inlineDatepicker(k,i)}}},_newInst:function(i,h){var j=i[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:j,input:i,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:h,dpDiv:(!h?this.dpDiv:d(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}},_connectDatepicker:function(j,i){var h=e(j);i.append=e([]);i.trigger=e([]);if(h.hasClass(this.markerClassName)){return}this._attachments(h,i);h.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(i);e.data(j,f,i);if(i.settings.disabled){this._disableDatepicker(j)}},_attachments:function(j,m){var i,l,h,n=this._get(m,"appendText"),k=this._get(m,"isRTL");if(m.append){m.append.remove()}if(n){m.append=e("<span class='"+this._appendClass+"'>"+n+"</span>");j[k?"before":"after"](m.append)}j.unbind("focus",this._showDatepicker);if(m.trigger){m.trigger.remove()}i=this._get(m,"showOn");if(i==="focus"||i==="both"){j.focus(this._showDatepicker)}if(i==="button"||i==="both"){l=this._get(m,"buttonText");h=this._get(m,"buttonImage");m.trigger=e(this._get(m,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:h,alt:l,title:l}):e("<button type='button'></button>").addClass(this._triggerClass).html(!h?l:e("<img/>").attr({src:h,alt:l,title:l})));j[k?"before":"after"](m.trigger);m.trigger.click(function(){if(e.datepicker._datepickerShowing&&e.datepicker._lastInput===j[0]){e.datepicker._hideDatepicker()}else{if(e.datepicker._datepickerShowing&&e.datepicker._lastInput!==j[0]){e.datepicker._hideDatepicker();e.datepicker._showDatepicker(j[0])}else{e.datepicker._showDatepicker(j[0])}}return false})}},_autoSize:function(o){if(this._get(o,"autoSize")&&!o.inline){var l,j,k,n,m=new Date(2009,12-1,20),h=this._get(o,"dateFormat");if(h.match(/[DM]/)){l=function(i){j=0;k=0;for(n=0;n<i.length;n++){if(i[n].length>j){j=i[n].length;k=n}}return k};m.setMonth(l(this._get(o,(h.match(/MM/)?"monthNames":"monthNamesShort"))));m.setDate(l(this._get(o,(h.match(/DD/)?"dayNames":"dayNamesShort")))+20-m.getDay())}o.input.attr("size",this._formatDate(o,m).length)}},_inlineDatepicker:function(i,h){var j=e(i);if(j.hasClass(this.markerClassName)){return}j.addClass(this.markerClassName).append(h.dpDiv);e.data(i,f,h);this._setDate(h,this._getDefaultDate(h),true);this._updateDatepicker(h);this._updateAlternate(h);if(h.settings.disabled){this._disableDatepicker(i)}h.dpDiv.css("display","block")},_dialogDatepicker:function(o,i,m,j,n){var h,r,l,q,p,k=this._dialogInst;if(!k){this.uuid+=1;h="dp"+this.uuid;this._dialogInput=e("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);e("body").append(this._dialogInput);k=this._dialogInst=this._newInst(this._dialogInput,false);k.settings={};e.data(this._dialogInput[0],f,k)}a(k.settings,j||{});i=(i&&i.constructor===Date?this._formatDate(k,i):i);this._dialogInput.val(i);this._pos=(n?(n.length?n:[n.pageX,n.pageY]):null);if(!this._pos){r=document.documentElement.clientWidth;l=document.documentElement.clientHeight;q=document.documentElement.scrollLeft||document.body.scrollLeft;p=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(r/2)-100+q,(l/2)-150+p]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");k.settings.onSelect=m;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if(e.blockUI){e.blockUI(this.dpDiv)}e.data(this._dialogInput[0],f,k);return this},_destroyDatepicker:function(j){var k,h=e(j),i=e.data(j,f);if(!h.hasClass(this.markerClassName)){return}k=j.nodeName.toLowerCase();e.removeData(j,f);if(k==="input"){i.append.remove();i.trigger.remove();h.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(k==="div"||k==="span"){h.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(k){var l,j,h=e(k),i=e.data(k,f);if(!h.hasClass(this.markerClassName)){return}l=k.nodeName.toLowerCase();if(l==="input"){k.disabled=false;i.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(l==="div"||l==="span"){j=h.children("."+this._inlineClass);j.children().removeClass("ui-state-disabled");j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}}this._disabledInputs=e.map(this._disabledInputs,function(m){return(m===k?null:m)})},_disableDatepicker:function(k){var l,j,h=e(k),i=e.data(k,f);if(!h.hasClass(this.markerClassName)){return}l=k.nodeName.toLowerCase();if(l==="input"){k.disabled=true;i.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(l==="div"||l==="span"){j=h.children("."+this._inlineClass);j.children().addClass("ui-state-disabled");j.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}}this._disabledInputs=e.map(this._disabledInputs,function(m){return(m===k?null:m)});this._disabledInputs[this._disabledInputs.length]=k},_isDisabledDatepicker:function(j){if(!j){return false}for(var h=0;h<this._disabledInputs.length;h++){if(this._disabledInputs[h]===j){return true}}return false},_getInst:function(i){try{return e.data(i,f)}catch(h){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(n,i,m){var j,h,l,o,k=this._getInst(n);if(arguments.length===2&&typeof i==="string"){return(i==="defaults"?e.extend({},e.datepicker._defaults):(k?(i==="all"?e.extend({},k.settings):this._get(k,i)):null))}j=i||{};if(typeof i==="string"){j={};j[i]=m}if(k){if(this._curInst===k){this._hideDatepicker()}h=this._getDateDatepicker(n,true);l=this._getMinMaxDate(k,"min");o=this._getMinMaxDate(k,"max");a(k.settings,j);if(l!==null&&j.dateFormat!==g&&j.minDate===g){k.settings.minDate=this._formatDate(k,l)}if(o!==null&&j.dateFormat!==g&&j.maxDate===g){k.settings.maxDate=this._formatDate(k,o)}if("disabled" in j){if(j.disabled){this._disableDatepicker(n)}else{this._enableDatepicker(n)}}this._attachments(e(n),k);this._autoSize(k);this._setDate(k,h);this._updateAlternate(k);this._updateDatepicker(k)}},_changeDatepicker:function(j,h,i){this._optionDatepicker(j,h,i)},_refreshDatepicker:function(i){var h=this._getInst(i);if(h){this._updateDatepicker(h)}},_setDateDatepicker:function(j,h){var i=this._getInst(j);if(i){this._setDate(i,h);this._updateDatepicker(i);this._updateAlternate(i)}},_getDateDatepicker:function(j,h){var i=this._getInst(j);if(i&&!i.inline){this._setDateFromField(i,h)}return(i?this._getDate(i):null)},_doKeyDown:function(k){var i,h,m,l=e.datepicker._getInst(k.target),n=true,j=l.dpDiv.is(".ui-datepicker-rtl");l._keyEvent=true;if(e.datepicker._datepickerShowing){switch(k.keyCode){case 9:e.datepicker._hideDatepicker();n=false;break;case 13:m=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",l.dpDiv);if(m[0]){e.datepicker._selectDay(k.target,l.selectedMonth,l.selectedYear,m[0])}i=e.datepicker._get(l,"onSelect");if(i){h=e.datepicker._formatDate(l);i.apply((l.input?l.input[0]:null),[h,l])}else{e.datepicker._hideDatepicker()}return false;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(k.target,(k.ctrlKey?-e.datepicker._get(l,"stepBigMonths"):-e.datepicker._get(l,"stepMonths")),"M");break;case 34:e.datepicker._adjustDate(k.target,(k.ctrlKey?+e.datepicker._get(l,"stepBigMonths"):+e.datepicker._get(l,"stepMonths")),"M");break;case 35:if(k.ctrlKey||k.metaKey){e.datepicker._clearDate(k.target)}n=k.ctrlKey||k.metaKey;break;case 36:if(k.ctrlKey||k.metaKey){e.datepicker._gotoToday(k.target)}n=k.ctrlKey||k.metaKey;break;case 37:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,(j?+1:-1),"D")}n=k.ctrlKey||k.metaKey;if(k.originalEvent.altKey){e.datepicker._adjustDate(k.target,(k.ctrlKey?-e.datepicker._get(l,"stepBigMonths"):-e.datepicker._get(l,"stepMonths")),"M")}break;case 38:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,-7,"D")}n=k.ctrlKey||k.metaKey;break;case 39:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,(j?-1:+1),"D")}n=k.ctrlKey||k.metaKey;if(k.originalEvent.altKey){e.datepicker._adjustDate(k.target,(k.ctrlKey?+e.datepicker._get(l,"stepBigMonths"):+e.datepicker._get(l,"stepMonths")),"M")}break;case 40:if(k.ctrlKey||k.metaKey){e.datepicker._adjustDate(k.target,+7,"D")}n=k.ctrlKey||k.metaKey;break;default:n=false}}else{if(k.keyCode===36&&k.ctrlKey){e.datepicker._showDatepicker(this)}else{n=false}}if(n){k.preventDefault();k.stopPropagation()}},_doKeyPress:function(j){var i,h,k=e.datepicker._getInst(j.target);if(e.datepicker._get(k,"constrainInput")){i=e.datepicker._possibleChars(e.datepicker._get(k,"dateFormat"));h=String.fromCharCode(j.charCode==null?j.keyCode:j.charCode);return j.ctrlKey||j.metaKey||(h<" "||!i||i.indexOf(h)>-1)}},_doKeyUp:function(j){var h,k=e.datepicker._getInst(j.target);if(k.input.val()!==k.lastVal){try{h=e.datepicker.parseDate(e.datepicker._get(k,"dateFormat"),(k.input?k.input.val():null),e.datepicker._getFormatConfig(k));if(h){e.datepicker._setDateFromField(k);e.datepicker._updateAlternate(k);e.datepicker._updateDatepicker(k)}}catch(i){}}return true},_showDatepicker:function(i){i=i.target||i;if(i.nodeName.toLowerCase()!=="input"){i=e("input",i.parentNode)[0]}if(e.datepicker._isDisabledDatepicker(i)||e.datepicker._lastInput===i){return}var k,o,j,m,n,h,l;k=e.datepicker._getInst(i);if(e.datepicker._curInst&&e.datepicker._curInst!==k){e.datepicker._curInst.dpDiv.stop(true,true);if(k&&e.datepicker._datepickerShowing){e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])}}o=e.datepicker._get(k,"beforeShow");j=o?o.apply(i,[i,k]):{};if(j===false){return}a(k.settings,j);k.lastVal=null;e.datepicker._lastInput=i;e.datepicker._setDateFromField(k);if(e.datepicker._inDialog){i.value=""}if(!e.datepicker._pos){e.datepicker._pos=e.datepicker._findPos(i);e.datepicker._pos[1]+=i.offsetHeight}m=false;e(i).parents().each(function(){m|=e(this).css("position")==="fixed";return !m});n={left:e.datepicker._pos[0],top:e.datepicker._pos[1]};e.datepicker._pos=null;k.dpDiv.empty();k.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});e.datepicker._updateDatepicker(k);n=e.datepicker._checkOffset(k,n,m);k.dpDiv.css({position:(e.datepicker._inDialog&&e.blockUI?"static":(m?"fixed":"absolute")),display:"none",left:n.left+"px",top:n.top+"px"});if(!k.inline){h=e.datepicker._get(k,"showAnim");l=e.datepicker._get(k,"duration");k.dpDiv.zIndex(e(i).zIndex()+1);e.datepicker._datepickerShowing=true;if(e.effects&&e.effects.effect[h]){k.dpDiv.show(h,e.datepicker._get(k,"showOptions"),l)}else{k.dpDiv[h||"show"](h?l:null)}if(e.datepicker._shouldFocusInput(k)){k.input.focus()}e.datepicker._curInst=k}},_updateDatepicker:function(j){this.maxRows=4;c=j;j.dpDiv.empty().append(this._generateHTML(j));this._attachHandlers(j);j.dpDiv.find("."+this._dayOverClass+" a").mouseover();var l,h=this._getNumberOfMonths(j),k=h[1],i=17;j.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(k>1){j.dpDiv.addClass("ui-datepicker-multi-"+k).css("width",(i*k)+"em")}j.dpDiv[(h[0]!==1||h[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");j.dpDiv[(this._get(j,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(j===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(j)){j.input.focus()}if(j.yearshtml){l=j.yearshtml;setTimeout(function(){if(l===j.yearshtml&&j.yearshtml){j.dpDiv.find("select.ui-datepicker-year:first").replaceWith(j.yearshtml)}l=j.yearshtml=null},0)}},_shouldFocusInput:function(h){return h.input&&h.input.is(":visible")&&!h.input.is(":disabled")&&!h.input.is(":focus")},_checkOffset:function(m,k,j){var l=m.dpDiv.outerWidth(),p=m.dpDiv.outerHeight(),o=m.input?m.input.outerWidth():0,h=m.input?m.input.outerHeight():0,n=document.documentElement.clientWidth+(j?0:e(document).scrollLeft()),i=document.documentElement.clientHeight+(j?0:e(document).scrollTop());k.left-=(this._get(m,"isRTL")?(l-o):0);k.left-=(j&&k.left===m.input.offset().left)?e(document).scrollLeft():0;k.top-=(j&&k.top===(m.input.offset().top+h))?e(document).scrollTop():0;k.left-=Math.min(k.left,(k.left+l>n&&n>l)?Math.abs(k.left+l-n):0);k.top-=Math.min(k.top,(k.top+p>i&&i>p)?Math.abs(p+h):0);return k},_findPos:function(k){var h,j=this._getInst(k),i=this._get(j,"isRTL");while(k&&(k.type==="hidden"||k.nodeType!==1||e.expr.filters.hidden(k))){k=k[i?"previousSibling":"nextSibling"]}h=e(k).offset();return[h.left,h.top]},_hideDatepicker:function(j){var i,m,l,h,k=this._curInst;if(!k||(j&&k!==e.data(j,f))){return}if(this._datepickerShowing){i=this._get(k,"showAnim");m=this._get(k,"duration");l=function(){e.datepicker._tidyDialog(k)};if(e.effects&&(e.effects.effect[i]||e.effects[i])){k.dpDiv.hide(i,e.datepicker._get(k,"showOptions"),m,l)}else{k.dpDiv[(i==="slideDown"?"slideUp":(i==="fadeIn"?"fadeOut":"hide"))]((i?m:null),l)}if(!i){l()}this._datepickerShowing=false;h=this._get(k,"onClose");if(h){h.apply((k.input?k.input[0]:null),[(k.input?k.input.val():""),k])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(e.blockUI){e.unblockUI();e("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(h){h.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(i){if(!e.datepicker._curInst){return}var h=e(i.target),j=e.datepicker._getInst(h[0]);if(((h[0].id!==e.datepicker._mainDivId&&h.parents("#"+e.datepicker._mainDivId).length===0&&!h.hasClass(e.datepicker.markerClassName)&&!h.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&!(e.datepicker._inDialog&&e.blockUI)))||(h.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==j)){e.datepicker._hideDatepicker()}},_adjustDate:function(l,k,j){var i=e(l),h=this._getInst(i[0]);if(this._isDisabledDatepicker(i[0])){return}this._adjustInstDate(h,k+(j==="M"?this._get(h,"showCurrentAtPos"):0),j);this._updateDatepicker(h)},_gotoToday:function(k){var h,j=e(k),i=this._getInst(j[0]);if(this._get(i,"gotoCurrent")&&i.currentDay){i.selectedDay=i.currentDay;i.drawMonth=i.selectedMonth=i.currentMonth;i.drawYear=i.selectedYear=i.currentYear}else{h=new Date();i.selectedDay=h.getDate();i.drawMonth=i.selectedMonth=h.getMonth();i.drawYear=i.selectedYear=h.getFullYear()}this._notifyChange(i);this._adjustDate(j)},_selectMonthYear:function(l,h,k){var j=e(l),i=this._getInst(j[0]);i["selected"+(k==="M"?"Month":"Year")]=i["draw"+(k==="M"?"Month":"Year")]=parseInt(h.options[h.selectedIndex].value,10);this._notifyChange(i);this._adjustDate(j)},_selectDay:function(m,k,h,l){var i,j=e(m);if(e(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(j[0])){return}i=this._getInst(j[0]);i.selectedDay=i.currentDay=e("a",l).html();i.selectedMonth=i.currentMonth=k;i.selectedYear=i.currentYear=h;this._selectDate(m,this._formatDate(i,i.currentDay,i.currentMonth,i.currentYear))},_clearDate:function(i){var h=e(i);this._selectDate(h,"")},_selectDate:function(l,h){var i,k=e(l),j=this._getInst(k[0]);h=(h!=null?h:this._formatDate(j));if(j.input){j.input.val(h)}this._updateAlternate(j);i=this._get(j,"onSelect");if(i){i.apply((j.input?j.input[0]:null),[h,j])}else{if(j.input){j.input.trigger("change")}}if(j.inline){this._updateDatepicker(j)}else{this._hideDatepicker();this._lastInput=j.input[0];if(typeof(j.input[0])!=="object"){j.input.focus()}this._lastInput=null}},_updateAlternate:function(l){var k,j,h,i=this._get(l,"altField");if(i){k=this._get(l,"altFormat")||this._get(l,"dateFormat");j=this._getDate(l);h=this.formatDate(k,j,this._getFormatConfig(l));e(i).each(function(){e(this).val(h)})}},noWeekends:function(i){var h=i.getDay();return[(h>0&&h<6),""]},iso8601Week:function(h){var i,j=new Date(h.getTime());j.setDate(j.getDate()+4-(j.getDay()||7));i=j.getTime();j.setMonth(0);j.setDate(1);return Math.floor(Math.round((i-j)/86400000)/7)+1},parseDate:function(x,s,z){if(x==null||s==null){throw"Invalid arguments"}s=(typeof s==="object"?s.toString():s+"");if(s===""){return null}var k,u,i,y=0,n=(z?z.shortYearCutoff:null)||this._defaults.shortYearCutoff,j=(typeof n!=="string"?n:new Date().getFullYear()%100+parseInt(n,10)),q=(z?z.dayNamesShort:null)||this._defaults.dayNamesShort,B=(z?z.dayNames:null)||this._defaults.dayNames,h=(z?z.monthNamesShort:null)||this._defaults.monthNamesShort,l=(z?z.monthNames:null)||this._defaults.monthNames,m=-1,C=-1,w=-1,p=-1,v=false,A,r=function(E){var F=(k+1<x.length&&x.charAt(k+1)===E);if(F){k++}return F},D=function(G){var E=r(G),H=(G==="@"?14:(G==="!"?20:(G==="y"&&E?4:(G==="o"?3:2)))),I=new RegExp("^\\d{1,"+H+"}"),F=s.substring(y).match(I);if(!F){throw"Missing number at position "+y}y+=F[0].length;return parseInt(F[0],10)},o=function(F,G,I){var E=-1,H=e.map(r(F)?I:G,function(K,J){return[[J,K]]}).sort(function(K,J){return -(K[1].length-J[1].length)});e.each(H,function(K,L){var J=L[1];if(s.substr(y,J.length).toLowerCase()===J.toLowerCase()){E=L[0];y+=J.length;return false}});if(E!==-1){return E+1}else{throw"Unknown name at position "+y}},t=function(){if(s.charAt(y)!==x.charAt(k)){throw"Unexpected literal at position "+y}y++};for(k=0;k<x.length;k++){if(v){if(x.charAt(k)==="'"&&!r("'")){v=false}else{t()}}else{switch(x.charAt(k)){case"d":w=D("d");break;case"D":o("D",q,B);break;case"o":p=D("o");break;case"m":C=D("m");break;case"M":C=o("M",h,l);break;case"y":m=D("y");break;case"@":A=new Date(D("@"));m=A.getFullYear();C=A.getMonth()+1;w=A.getDate();break;case"!":A=new Date((D("!")-this._ticksTo1970)/10000);m=A.getFullYear();C=A.getMonth()+1;w=A.getDate();break;case"'":if(r("'")){t()}else{v=true}break;default:t()}}}if(y<s.length){i=s.substr(y);if(!/^\s+/.test(i)){throw"Extra/unparsed characters found in date: "+i}}if(m===-1){m=new Date().getFullYear()}else{if(m<100){m+=new Date().getFullYear()-new Date().getFullYear()%100+(m<=j?0:-100)}}if(p>-1){C=1;w=p;do{u=this._getDaysInMonth(m,C-1);if(w<=u){break}C++;w-=u}while(true)}A=this._daylightSavingAdjust(new Date(m,C-1,w));if(A.getFullYear()!==m||A.getMonth()+1!==C||A.getDate()!==w){throw"Invalid date"}return A},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(q,k,l){if(!k){return""}var s,t=(l?l.dayNamesShort:null)||this._defaults.dayNamesShort,i=(l?l.dayNames:null)||this._defaults.dayNames,o=(l?l.monthNamesShort:null)||this._defaults.monthNamesShort,m=(l?l.monthNames:null)||this._defaults.monthNames,r=function(u){var v=(s+1<q.length&&q.charAt(s+1)===u);if(v){s++}return v},h=function(w,x,u){var v=""+x;if(r(w)){while(v.length<u){v="0"+v}}return v},n=function(u,w,v,x){return(r(u)?x[w]:v[w])},j="",p=false;if(k){for(s=0;s<q.length;s++){if(p){if(q.charAt(s)==="'"&&!r("'")){p=false}else{j+=q.charAt(s)}}else{switch(q.charAt(s)){case"d":j+=h("d",k.getDate(),2);break;case"D":j+=n("D",k.getDay(),t,i);break;case"o":j+=h("o",Math.round((new Date(k.getFullYear(),k.getMonth(),k.getDate()).getTime()-new Date(k.getFullYear(),0,0).getTime())/86400000),3);break;case"m":j+=h("m",k.getMonth()+1,2);break;case"M":j+=n("M",k.getMonth(),o,m);break;case"y":j+=(r("y")?k.getFullYear():(k.getYear()%100<10?"0":"")+k.getYear()%100);break;case"@":j+=k.getTime();break;case"!":j+=k.getTime()*10000+this._ticksTo1970;break;case"'":if(r("'")){j+="'"}else{p=true}break;default:j+=q.charAt(s)}}}}return j},_possibleChars:function(l){var k,j="",i=false,h=function(m){var n=(k+1<l.length&&l.charAt(k+1)===m);if(n){k++}return n};for(k=0;k<l.length;k++){if(i){if(l.charAt(k)==="'"&&!h("'")){i=false}else{j+=l.charAt(k)}}else{switch(l.charAt(k)){case"d":case"m":case"y":case"@":j+="0123456789";break;case"D":case"M":return null;case"'":if(h("'")){j+="'"}else{i=true}break;default:j+=l.charAt(k)}}}return j},_get:function(i,h){return i.settings[h]!==g?i.settings[h]:this._defaults[h]},_setDateFromField:function(m,j){if(m.input.val()===m.lastVal){return}var h=this._get(m,"dateFormat"),o=m.lastVal=m.input?m.input.val():null,n=this._getDefaultDate(m),i=n,k=this._getFormatConfig(m);try{i=this.parseDate(h,o,k)||n}catch(l){o=(j?"":o)}m.selectedDay=i.getDate();m.drawMonth=m.selectedMonth=i.getMonth();m.drawYear=m.selectedYear=i.getFullYear();m.currentDay=(o?i.getDate():0);m.currentMonth=(o?i.getMonth():0);m.currentYear=(o?i.getFullYear():0);this._adjustInstDate(m)},_getDefaultDate:function(h){return this._restrictMinMax(h,this._determineDate(h,this._get(h,"defaultDate"),new Date()))},_determineDate:function(l,i,m){var k=function(o){var n=new Date();n.setDate(n.getDate()+o);return n},j=function(u){try{return e.datepicker.parseDate(e.datepicker._get(l,"dateFormat"),u,e.datepicker._getFormatConfig(l))}catch(t){}var o=(u.toLowerCase().match(/^c/)?e.datepicker._getDate(l):null)||new Date(),p=o.getFullYear(),s=o.getMonth(),n=o.getDate(),r=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,q=r.exec(u);while(q){switch(q[2]||"d"){case"d":case"D":n+=parseInt(q[1],10);break;case"w":case"W":n+=parseInt(q[1],10)*7;break;case"m":case"M":s+=parseInt(q[1],10);n=Math.min(n,e.datepicker._getDaysInMonth(p,s));break;case"y":case"Y":p+=parseInt(q[1],10);n=Math.min(n,e.datepicker._getDaysInMonth(p,s));break}q=r.exec(u)}return new Date(p,s,n)},h=(i==null||i===""?m:(typeof i==="string"?j(i):(typeof i==="number"?(isNaN(i)?m:k(i)):new Date(i.getTime()))));h=(h&&h.toString()==="Invalid Date"?m:h);if(h){h.setHours(0);h.setMinutes(0);h.setSeconds(0);h.setMilliseconds(0)}return this._daylightSavingAdjust(h)},_daylightSavingAdjust:function(h){if(!h){return null}h.setHours(h.getHours()>12?h.getHours()+2:0);return h},_setDate:function(n,k,m){var h=!k,j=n.selectedMonth,l=n.selectedYear,i=this._restrictMinMax(n,this._determineDate(n,k,new Date()));n.selectedDay=n.currentDay=i.getDate();n.drawMonth=n.selectedMonth=n.currentMonth=i.getMonth();n.drawYear=n.selectedYear=n.currentYear=i.getFullYear();if((j!==n.selectedMonth||l!==n.selectedYear)&&!m){this._notifyChange(n)}this._adjustInstDate(n);if(n.input){n.input.val(h?"":this._formatDate(n))}},_getDate:function(i){var h=(!i.currentYear||(i.input&&i.input.val()==="")?null:this._daylightSavingAdjust(new Date(i.currentYear,i.currentMonth,i.currentDay)));return h},_attachHandlers:function(i){var h=this._get(i,"stepMonths"),j="#"+i.id.replace(/\\\\/g,"\\");i.dpDiv.find("[data-handler]").map(function(){var k={prev:function(){e.datepicker._adjustDate(j,-h,"M")},next:function(){e.datepicker._adjustDate(j,+h,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(j)},selectDay:function(){e.datepicker._selectDay(j,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){e.datepicker._selectMonthYear(j,this,"M");return false},selectYear:function(){e.datepicker._selectMonthYear(j,this,"Y");return false}};e(this).bind(this.getAttribute("data-event"),k[this.getAttribute("data-handler")])})},_generateHTML:function(X){var A,z,S,K,l,ab,V,O,ae,I,ai,s,u,t,i,aa,q,D,ad,Q,aj,C,H,r,m,T,M,P,N,p,F,v,W,Z,k,ac,ag,L,w,Y=new Date(),B=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth(),Y.getDate())),af=this._get(X,"isRTL"),ah=this._get(X,"showButtonPanel"),R=this._get(X,"hideIfNoPrevNext"),G=this._get(X,"navigationAsDateFormat"),x=this._getNumberOfMonths(X),o=this._get(X,"showCurrentAtPos"),J=this._get(X,"stepMonths"),E=(x[0]!==1||x[1]!==1),j=this._daylightSavingAdjust((!X.currentDay?new Date(9999,9,9):new Date(X.currentYear,X.currentMonth,X.currentDay))),n=this._getMinMaxDate(X,"min"),y=this._getMinMaxDate(X,"max"),h=X.drawMonth-o,U=X.drawYear;if(h<0){h+=12;U--}if(y){A=this._daylightSavingAdjust(new Date(y.getFullYear(),y.getMonth()-(x[0]*x[1])+1,y.getDate()));A=(n&&A<n?n:A);while(this._daylightSavingAdjust(new Date(U,h,1))>A){h--;if(h<0){h=11;U--}}}X.drawMonth=h;X.drawYear=U;z=this._get(X,"prevText");z=(!G?z:this.formatDate(z,this._daylightSavingAdjust(new Date(U,h-J,1)),this._getFormatConfig(X)));S=(this._canAdjustMonth(X,-1,U,h)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+z+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"e":"w")+"'>"+z+"</span></a>":(R?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+z+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"e":"w")+"'>"+z+"</span></a>"));K=this._get(X,"nextText");K=(!G?K:this.formatDate(K,this._daylightSavingAdjust(new Date(U,h+J,1)),this._getFormatConfig(X)));l=(this._canAdjustMonth(X,+1,U,h)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+K+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"w":"e")+"'>"+K+"</span></a>":(R?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+K+"'><span class='ui-icon ui-icon-circle-triangle-"+(af?"w":"e")+"'>"+K+"</span></a>"));ab=this._get(X,"currentText");V=(this._get(X,"gotoCurrent")&&X.currentDay?j:B);ab=(!G?ab:this.formatDate(ab,V,this._getFormatConfig(X)));O=(!X.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(X,"closeText")+"</button>":"");ae=(ah)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(af?O:"")+(this._isInRange(X,V)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+ab+"</button>":"")+(af?"":O)+"</div>":"";I=parseInt(this._get(X,"firstDay"),10);I=(isNaN(I)?0:I);ai=this._get(X,"showWeek");s=this._get(X,"dayNames");u=this._get(X,"dayNamesMin");t=this._get(X,"monthNames");i=this._get(X,"monthNamesShort");aa=this._get(X,"beforeShowDay");q=this._get(X,"showOtherMonths");D=this._get(X,"selectOtherMonths");ad=this._getDefaultDate(X);Q="";aj;for(C=0;C<x[0];C++){H="";this.maxRows=4;for(r=0;r<x[1];r++){m=this._daylightSavingAdjust(new Date(U,h,X.selectedDay));T=" ui-corner-all";M="";if(E){M+="<div class='ui-datepicker-group";if(x[1]>1){switch(r){case 0:M+=" ui-datepicker-group-first";T=" ui-corner-"+(af?"right":"left");break;case x[1]-1:M+=" ui-datepicker-group-last";T=" ui-corner-"+(af?"left":"right");break;default:M+=" ui-datepicker-group-middle";T="";break}}M+="'>"}M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+T+"'>"+(/all|left/.test(T)&&C===0?(af?l:S):"")+(/all|right/.test(T)&&C===0?(af?S:l):"")+this._generateMonthYearHeader(X,h,U,n,y,C>0||r>0,t,i)+"</div><table class='ui-datepicker-calendar'><thead><tr>";P=(ai?"<th class='ui-datepicker-week-col'>"+this._get(X,"weekHeader")+"</th>":"");for(aj=0;aj<7;aj++){N=(aj+I)%7;P+="<th"+((aj+I+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+s[N]+"'>"+u[N]+"</span></th>"}M+=P+"</tr></thead><tbody>";p=this._getDaysInMonth(U,h);if(U===X.selectedYear&&h===X.selectedMonth){X.selectedDay=Math.min(X.selectedDay,p)}F=(this._getFirstDayOfMonth(U,h)-I+7)%7;v=Math.ceil((F+p)/7);W=(E?this.maxRows>v?this.maxRows:v:v);this.maxRows=W;Z=this._daylightSavingAdjust(new Date(U,h,1-F));for(k=0;k<W;k++){M+="<tr>";ac=(!ai?"":"<td class='ui-datepicker-week-col'>"+this._get(X,"calculateWeek")(Z)+"</td>");for(aj=0;aj<7;aj++){ag=(aa?aa.apply((X.input?X.input[0]:null),[Z]):[true,""]);L=(Z.getMonth()!==h);w=(L&&!D)||!ag[0]||(n&&Z<n)||(y&&Z>y);ac+="<td class='"+((aj+I+6)%7>=5?" ui-datepicker-week-end":"")+(L?" ui-datepicker-other-month":"")+((Z.getTime()===m.getTime()&&h===X.selectedMonth&&X._keyEvent)||(ad.getTime()===Z.getTime()&&ad.getTime()===m.getTime())?" "+this._dayOverClass:"")+(w?" "+this._unselectableClass+" ui-state-disabled":"")+(L&&!q?"":" "+ag[1]+(Z.getTime()===j.getTime()?" "+this._currentClass:"")+(Z.getTime()===B.getTime()?" ui-datepicker-today":""))+"'"+((!L||q)&&ag[2]?" title='"+ag[2].replace(/'/g,"&#39;")+"'":"")+(w?"":" data-handler='selectDay' data-event='click' data-month='"+Z.getMonth()+"' data-year='"+Z.getFullYear()+"'")+">"+(L&&!q?"&#xa0;":(w?"<span class='ui-state-default'>"+Z.getDate()+"</span>":"<a class='ui-state-default"+(Z.getTime()===B.getTime()?" ui-state-highlight":"")+(Z.getTime()===j.getTime()?" ui-state-active":"")+(L?" ui-priority-secondary":"")+"' href='#'>"+Z.getDate()+"</a>"))+"</td>";Z.setDate(Z.getDate()+1);Z=this._daylightSavingAdjust(Z)}M+=ac+"</tr>"}h++;if(h>11){h=0;U++}M+="</tbody></table>"+(E?"</div>"+((x[0]>0&&r===x[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");H+=M}Q+=H}Q+=ae;X._keyEvent=false;return Q},_generateMonthYearHeader:function(l,j,t,n,r,u,p,h){var y,i,z,w,m,v,s,o,k=this._get(l,"changeMonth"),A=this._get(l,"changeYear"),B=this._get(l,"showMonthAfterYear"),q="<div class='ui-datepicker-title'>",x="";if(u||!k){x+="<span class='ui-datepicker-month'>"+p[j]+"</span>"}else{y=(n&&n.getFullYear()===t);i=(r&&r.getFullYear()===t);x+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(z=0;z<12;z++){if((!y||z>=n.getMonth())&&(!i||z<=r.getMonth())){x+="<option value='"+z+"'"+(z===j?" selected='selected'":"")+">"+h[z]+"</option>"}}x+="</select>"}if(!B){q+=x+(u||!(k&&A)?"&#xa0;":"")}if(!l.yearshtml){l.yearshtml="";if(u||!A){q+="<span class='ui-datepicker-year'>"+t+"</span>"}else{w=this._get(l,"yearRange").split(":");m=new Date().getFullYear();v=function(D){var C=(D.match(/c[+\-].*/)?t+parseInt(D.substring(1),10):(D.match(/[+\-].*/)?m+parseInt(D,10):parseInt(D,10)));return(isNaN(C)?m:C)};s=v(w[0]);o=Math.max(s,v(w[1]||""));s=(n?Math.max(s,n.getFullYear()):s);o=(r?Math.min(o,r.getFullYear()):o);l.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;s<=o;s++){l.yearshtml+="<option value='"+s+"'"+(s===t?" selected='selected'":"")+">"+s+"</option>"}l.yearshtml+="</select>";q+=l.yearshtml;l.yearshtml=null}}q+=this._get(l,"yearSuffix");if(B){q+=(u||!(k&&A)?"&#xa0;":"")+x}q+="</div>";return q},_adjustInstDate:function(k,n,m){var j=k.drawYear+(m==="Y"?n:0),l=k.drawMonth+(m==="M"?n:0),h=Math.min(k.selectedDay,this._getDaysInMonth(j,l))+(m==="D"?n:0),i=this._restrictMinMax(k,this._daylightSavingAdjust(new Date(j,l,h)));k.selectedDay=i.getDate();k.drawMonth=k.selectedMonth=i.getMonth();k.drawYear=k.selectedYear=i.getFullYear();if(m==="M"||m==="Y"){this._notifyChange(k)}},_restrictMinMax:function(k,i){var j=this._getMinMaxDate(k,"min"),l=this._getMinMaxDate(k,"max"),h=(j&&i<j?j:i);return(l&&h>l?l:h)},_notifyChange:function(i){var h=this._get(i,"onChangeMonthYear");if(h){h.apply((i.input?i.input[0]:null),[i.selectedYear,i.selectedMonth+1,i])}},_getNumberOfMonths:function(i){var h=this._get(i,"numberOfMonths");return(h==null?[1,1]:(typeof h==="number"?[1,h]:h))},_getMinMaxDate:function(i,h){return this._determineDate(i,this._get(i,h+"Date"),null)},_getDaysInMonth:function(h,i){return 32-this._daylightSavingAdjust(new Date(h,i,32)).getDate()},_getFirstDayOfMonth:function(h,i){return new Date(h,i,1).getDay()},_canAdjustMonth:function(k,m,j,l){var h=this._getNumberOfMonths(k),i=this._daylightSavingAdjust(new Date(j,l+(m<0?m:h[0]*h[1]),1));if(m<0){i.setDate(this._getDaysInMonth(i.getFullYear(),i.getMonth()))}return this._isInRange(k,i)},_isInRange:function(l,j){var i,o,k=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),p=null,m=null,n=this._get(l,"yearRange");if(n){i=n.split(":");o=new Date().getFullYear();p=parseInt(i[0],10);m=parseInt(i[1],10);if(i[0].match(/[+\-].*/)){p+=o}if(i[1].match(/[+\-].*/)){m+=o}}return((!k||j.getTime()>=k.getTime())&&(!h||j.getTime()<=h.getTime())&&(!p||j.getFullYear()>=p)&&(!m||j.getFullYear()<=m))},_getFormatConfig:function(h){var i=this._get(h,"shortYearCutoff");i=(typeof i!=="string"?i:new Date().getFullYear()%100+parseInt(i,10));return{shortYearCutoff:i,dayNamesShort:this._get(h,"dayNamesShort"),dayNames:this._get(h,"dayNames"),monthNamesShort:this._get(h,"monthNamesShort"),monthNames:this._get(h,"monthNames")}},_formatDate:function(k,h,l,j){if(!h){k.currentDay=k.selectedDay;k.currentMonth=k.selectedMonth;k.currentYear=k.selectedYear}var i=(h?(typeof h==="object"?h:this._daylightSavingAdjust(new Date(j,l,h))):this._daylightSavingAdjust(new Date(k.currentYear,k.currentMonth,k.currentDay)));return this.formatDate(this._get(k,"dateFormat"),i,this._getFormatConfig(k))}});function d(i){var h="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return i.delegate(h,"mouseout",function(){e(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).removeClass("ui-datepicker-next-hover")}}).delegate(h,"mouseover",function(){if(!e.datepicker._isDisabledDatepicker(c.inline?i.parent()[0]:c.input[0])){e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");e(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){e(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){e(this).addClass("ui-datepicker-next-hover")}}})}function a(j,i){e.extend(j,i);for(var h in i){if(i[h]==null){j[h]=i[h]}}return j}e.fn.datepicker=function(i){if(!this.length){return this}if(!e.datepicker.initialized){e(document).mousedown(e.datepicker._checkExternalClick);e.datepicker.initialized=true}if(e("#"+e.datepicker._mainDivId).length===0){e("body").append(e.datepicker.dpDiv)}var h=Array.prototype.slice.call(arguments,1);if(typeof i==="string"&&(i==="isDisabled"||i==="getDate"||i==="widget")){return e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this[0]].concat(h))}if(i==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this[0]].concat(h))}return this.each(function(){typeof i==="string"?e.datepicker["_"+i+"Datepicker"].apply(e.datepicker,[this].concat(h)):e.datepicker._attachDatepicker(this,i)})};e.datepicker=new b();e.datepicker.initialized=false;e.datepicker.uuid=new Date().getTime();e.datepicker.version="1.10.3"})(jQuery);(function(c,d){var a={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},b={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};c.widget("ui.dialog",{version:"1.10.3",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(f){var e=c(this).css(f).offset().top;if(e<0){c(this).css("top",f.top-e)}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&c.fn.draggable){this._makeDraggable()}if(this.options.resizable&&c.fn.resizable){this._makeResizable()}this._isOpen=false},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var e=this.options.appendTo;if(e&&(e.jquery||e.nodeType)){return c(e)}return this.document.find(e||"body").eq(0)},_destroy:function(){var f,e=this.originalPosition;this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(true,true).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}f=e.parent.children().eq(e.index);if(f.length&&f[0]!==this.element[0]){f.before(this.element)}else{e.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:c.noop,enable:c.noop,close:function(f){var e=this;if(!this._isOpen||this._trigger("beforeClose",f)===false){return}this._isOpen=false;this._destroyOverlay();if(!this.opener.filter(":focusable").focus().length){c(this.document[0].activeElement).blur()}this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",f)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(g,e){var f=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;if(f&&!e){this._trigger("focus",g)}return f},open:function(){var e=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}return}this._isOpen=true;this.opener=c(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,true);this._show(this.uiDialog,this.options.show,function(){e._focusTabbable();e._trigger("focus")});this._trigger("open")},_focusTabbable:function(){var e=this.element.find("[autofocus]");if(!e.length){e=this.element.find(":tabbable")}if(!e.length){e=this.uiDialogButtonPane.find(":tabbable")}if(!e.length){e=this.uiDialogTitlebarClose.filter(":tabbable")}if(!e.length){e=this.uiDialog}e.eq(0).focus()},_keepFocus:function(e){function f(){var h=this.document[0].activeElement,g=this.uiDialog[0]===h||c.contains(this.uiDialog[0],h);if(!g){this._focusTabbable()}}e.preventDefault();f.call(this);this._delay(f)},_createWrapper:function(){this.uiDialog=c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(g){if(this.options.closeOnEscape&&!g.isDefaultPrevented()&&g.keyCode&&g.keyCode===c.ui.keyCode.ESCAPE){g.preventDefault();this.close(g);return}if(g.keyCode!==c.ui.keyCode.TAB){return}var f=this.uiDialog.find(":tabbable"),h=f.filter(":first"),e=f.filter(":last");if((g.target===e[0]||g.target===this.uiDialog[0])&&!g.shiftKey){h.focus(1);g.preventDefault()}else{if((g.target===h[0]||g.target===this.uiDialog[0])&&g.shiftKey){e.focus(1);g.preventDefault()}}},mousedown:function(e){if(this._moveToTop(e)){this._focusTabbable()}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var e;this.uiDialogTitlebar=c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(f){if(!c(f.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()}}});this.uiDialogTitlebarClose=c("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(f){f.preventDefault();this.close(f)}});e=c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(e);this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(e){if(!this.options.title){e.html("&#160;")}e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons()},_createButtons:function(){var f=this,e=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if(c.isEmptyObject(e)||(c.isArray(e)&&!e.length)){this.uiDialog.removeClass("ui-dialog-buttons");return}c.each(e,function(g,h){var i,j;h=c.isFunction(h)?{click:h,text:g}:h;h=c.extend({type:"button"},h);i=h.click;h.click=function(){i.apply(f.element[0],arguments)};j={icons:h.icons,text:h.showText};delete h.icons;delete h.showText;c("<button></button>",h).button(j).appendTo(f.uiButtonSet)});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var g=this,f=this.options;function e(h){return{position:h.position,offset:h.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(h,i){c(this).addClass("ui-dialog-dragging");g._blockFrames();g._trigger("dragStart",h,e(i))},drag:function(h,i){g._trigger("drag",h,e(i))},stop:function(h,i){f.position=[i.position.left-g.document.scrollLeft(),i.position.top-g.document.scrollTop()];c(this).removeClass("ui-dialog-dragging");g._unblockFrames();g._trigger("dragStop",h,e(i))}})},_makeResizable:function(){var j=this,h=this.options,i=h.resizable,e=this.uiDialog.css("position"),g=typeof i==="string"?i:"n,e,s,w,se,sw,ne,nw";function f(k){return{originalPosition:k.originalPosition,originalSize:k.originalSize,position:k.position,size:k.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:h.maxWidth,maxHeight:h.maxHeight,minWidth:h.minWidth,minHeight:this._minHeight(),handles:g,start:function(k,l){c(this).addClass("ui-dialog-resizing");j._blockFrames();j._trigger("resizeStart",k,f(l))},resize:function(k,l){j._trigger("resize",k,f(l))},stop:function(k,l){h.height=c(this).height();h.width=c(this).width();c(this).removeClass("ui-dialog-resizing");j._unblockFrames();j._trigger("resizeStop",k,f(l))}}).css("position",e)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");if(!e){this.uiDialog.show()}this.uiDialog.position(this.options.position);if(!e){this.uiDialog.hide()}},_setOptions:function(g){var h=this,f=false,e={};c.each(g,function(i,j){h._setOption(i,j);if(i in a){f=true}if(i in b){e[i]=j}});if(f){this._size();this._position()}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",e)}},_setOption:function(g,h){var f,i,e=this.uiDialog;if(g==="dialogClass"){e.removeClass(this.options.dialogClass).addClass(h)}if(g==="disabled"){return}this._super(g,h);if(g==="appendTo"){this.uiDialog.appendTo(this._appendTo())}if(g==="buttons"){this._createButtons()}if(g==="closeText"){this.uiDialogTitlebarClose.button({label:""+h})}if(g==="draggable"){f=e.is(":data(ui-draggable)");if(f&&!h){e.draggable("destroy")}if(!f&&h){this._makeDraggable()}}if(g==="position"){this._position()}if(g==="resizable"){i=e.is(":data(ui-resizable)");if(i&&!h){e.resizable("destroy")}if(i&&typeof h==="string"){e.resizable("option","handles",h)}if(!i&&h!==false){this._makeResizable()}}if(g==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var e,g,h,f=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(f.minWidth>f.width){f.width=f.minWidth}e=this.uiDialog.css({height:"auto",width:f.width}).outerHeight();g=Math.max(0,f.minHeight-e);h=typeof f.maxHeight==="number"?Math.max(0,f.maxHeight-e):"none";if(f.height==="auto"){this.element.css({minHeight:g,maxHeight:h,height:"auto"})}else{this.element.height(Math.max(0,f.height-e))}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=c(this);return c("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_allowInteraction:function(e){if(c(e.target).closest(".ui-dialog").length){return true}return !!c(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal){return}var f=this,e=this.widgetFullName;if(!c.ui.dialog.overlayInstances){this._delay(function(){if(c.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(g){if(!f._allowInteraction(g)){g.preventDefault();c(".ui-dialog:visible:last .ui-dialog-content").data(e)._focusTabbable()}})}})}this.overlay=c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});c.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal){return}if(this.overlay){c.ui.dialog.overlayInstances--;if(!c.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")}this.overlay.remove();this.overlay=null}}});c.ui.dialog.overlayInstances=0;if(c.uiBackCompat!==false){c.widget("ui.dialog",c.ui.dialog,{_position:function(){var f=this.options.position,g=[],h=[0,0],e;if(f){if(typeof f==="string"||(typeof f==="object"&&"0" in f)){g=f.split?f.split(" "):[f[0],f[1]];if(g.length===1){g[1]=g[0]}c.each(["left","top"],function(k,j){if(+g[k]===g[k]){h[k]=g[k];g[k]=j}});f={my:g[0]+(h[0]<0?h[0]:"+"+h[0])+" "+g[1]+(h[1]<0?h[1]:"+"+h[1]),at:g.join(" ")}}f=c.extend({},c.ui.dialog.prototype.options.position,f)}else{f=c.ui.dialog.prototype.options.position}e=this.uiDialog.is(":visible");if(!e){this.uiDialog.show()}this.uiDialog.position(f);if(!e){this.uiDialog.hide()}}})}}(jQuery));(function(b,d){var a=/up|down|vertical/,c=/up|left|vertical|horizontal/;b.effects.effect.blind=function(g,m){var h=b(this),q=["position","top","bottom","left","right","height","width"],n=b.effects.setMode(h,g.mode||"hide"),r=g.direction||"up",j=a.test(r),i=j?"height":"width",p=j?"top":"left",t=c.test(r),l={},s=n==="show",f,e,k;if(h.parent().is(".ui-effects-wrapper")){b.effects.save(h.parent(),q)}else{b.effects.save(h,q)}h.show();f=b.effects.createWrapper(h).css({overflow:"hidden"});e=f[i]();k=parseFloat(f.css(p))||0;l[i]=s?e:0;if(!t){h.css(j?"bottom":"right",0).css(j?"top":"left","auto").css({position:"absolute"});l[p]=s?k:e+k}if(s){f.css(i,0);if(!t){f.css(p,k+e)}}f.animate(l,{duration:g.duration,easing:g.easing,queue:false,complete:function(){if(n==="hide"){h.hide()}b.effects.restore(h,q);b.effects.removeWrapper(h);m()}})}})(jQuery);(function(a,b){a.effects.effect.bounce=function(m,l){var c=a(this),d=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(c,m.mode||"effect"),j=k==="hide",v=k==="show",w=m.direction||"up",e=m.distance,h=m.times||5,x=h*2+(v||j?1:0),u=m.duration/x,p=m.easing,f=(w==="up"||w==="down")?"top":"left",n=(w==="up"||w==="left"),t,g,s,q=c.queue(),r=q.length;if(v||j){d.push("opacity")}a.effects.save(c,d);c.show();a.effects.createWrapper(c);if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3}if(v){s={opacity:1};s[f]=0;c.css("opacity",0).css(f,n?-e*2:e*2).animate(s,u,p)}if(j){e=e/Math.pow(2,h-1)}s={};s[f]=0;for(t=0;t<h;t++){g={};g[f]=(n?"-=":"+=")+e;c.animate(g,u,p).animate(s,u,p);e=j?e*2:e/2}if(j){g={opacity:0};g[f]=(n?"-=":"+=")+e;c.animate(g,u,p)}c.queue(function(){if(j){c.hide()}a.effects.restore(c,d);a.effects.removeWrapper(c);l()});if(r>1){q.splice.apply(q,[1,0].concat(q.splice(r,x+1)))}c.dequeue()}})(jQuery);(function(a,b){a.effects.effect.clip=function(f,i){var g=a(this),m=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(g,f.mode||"hide"),p=l==="show",n=f.direction||"vertical",k=n==="vertical",q=k?"height":"width",j=k?"top":"left",h={},d,e,c;a.effects.save(g,m);g.show();d=a.effects.createWrapper(g).css({overflow:"hidden"});e=(g[0].tagName==="IMG")?d:g;c=e[q]();if(p){e.css(q,0);e.css(j,c/2)}h[q]=p?c:0;h[j]=p?0:c/2;e.animate(h,{queue:false,duration:f.duration,easing:f.easing,complete:function(){if(!p){g.hide()}a.effects.restore(g,m);a.effects.removeWrapper(g);i()}})}})(jQuery);(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),j=["position","top","bottom","left","right","opacity","height","width"],i=a.effects.setMode(e,d.mode||"hide"),l=i==="show",k=d.direction||"left",f=(k==="up"||k==="down")?"top":"left",m=(k==="up"||k==="left")?"pos":"neg",g={opacity:l?1:0},c;a.effects.save(e,j);e.show();a.effects.createWrapper(e);c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;if(l){e.css("opacity",0).css(f,m==="pos"?-c:c)}g[f]=(l?(m==="pos"?"+=":"-="):(m==="pos"?"-=":"+="))+c;e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(i==="hide"){e.hide()}a.effects.restore(e,j);a.effects.removeWrapper(e);h()}})}})(jQuery);(function(a,b){a.effects.effect.explode=function(s,r){var k=s.pieces?Math.round(Math.sqrt(s.pieces)):3,d=k,c=a(this),m=a.effects.setMode(c,s.mode||"hide"),w=m==="show",g=c.show().css("visibility","hidden").offset(),t=Math.ceil(c.outerWidth()/d),q=Math.ceil(c.outerHeight()/k),h=[],v,u,e,p,n,l;function x(){h.push(this);if(h.length===k*d){f()}}for(v=0;v<k;v++){p=g.top+v*q;l=v-(k-1)/2;for(u=0;u<d;u++){e=g.left+u*t;n=u-(d-1)/2;c.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-u*t,top:-v*q}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:t,height:q,left:e+(w?n*t:0),top:p+(w?l*q:0),opacity:w?0:1}).animate({left:e+(w?0:n*t),top:p+(w?0:l*q),opacity:w?1:0},s.duration||500,s.easing,x)}}function f(){c.css({visibility:"visible"});a(h).remove();if(!w){c.hide()}r()}}})(jQuery);(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})}})(jQuery);(function(a,b){a.effects.effect.fold=function(e,i){var f=a(this),n=["position","top","bottom","left","right","height","width"],k=a.effects.setMode(f,e.mode||"hide"),r=k==="show",l=k==="hide",t=e.size||15,m=/([0-9]+)%/.exec(t),s=!!e.horizFirst,j=r!==s,g=j?["width","height"]:["height","width"],h=e.duration/2,d,c,q={},p={};a.effects.save(f,n);f.show();d=a.effects.createWrapper(f).css({overflow:"hidden"});c=j?[d.width(),d.height()]:[d.height(),d.width()];if(m){t=parseInt(m[1],10)/100*c[l?0:1]}if(r){d.css(s?{height:0,width:t}:{height:t,width:0})}q[g[0]]=r?c[0]:t;p[g[1]]=r?c[1]:0;d.animate(q,h,e.easing).animate(p,h,e.easing,function(){if(l){f.hide()}a.effects.restore(f,n);a.effects.removeWrapper(f);i()})}})(jQuery);(function(a,b){a.effects.effect.highlight=function(h,c){var e=a(this),d=["backgroundImage","backgroundColor","opacity"],g=a.effects.setMode(e,h.mode||"show"),f={backgroundColor:e.css("backgroundColor")};if(g==="hide"){f.opacity=0}a.effects.save(e,d);e.show().css({backgroundImage:"none",backgroundColor:h.color||"#ffff99"}).animate(f,{queue:false,duration:h.duration,easing:h.easing,complete:function(){if(g==="hide"){e.hide()}a.effects.restore(e,d);c()}})}})(jQuery);(function(a,b){a.effects.effect.pulsate=function(c,g){var e=a(this),k=a.effects.setMode(e,c.mode||"show"),p=k==="show",l=k==="hide",q=(p||k==="hide"),m=((c.times||5)*2)+(q?1:0),f=c.duration/m,n=0,j=e.queue(),d=j.length,h;if(p||!e.is(":visible")){e.css("opacity",0).show();n=1}for(h=1;h<m;h++){e.animate({opacity:n},f,c.easing);n=1-n}e.animate({opacity:n},f,c.easing);e.queue(function(){if(l){e.hide()}g()});if(d>1){j.splice.apply(j,[1,0].concat(j.splice(d,m+1)))}e.dequeue()}})(jQuery);(function(a,b){a.effects.effect.puff=function(j,c){var h=a(this),i=a.effects.setMode(h,j.mode||"hide"),f=i==="hide",g=parseInt(j.percent,10)||150,e=g/100,d={height:h.height(),width:h.width(),outerHeight:h.outerHeight(),outerWidth:h.outerWidth()};a.extend(j,{effect:"scale",queue:false,fade:true,mode:i,complete:c,percent:f?g:100,from:f?d:{height:d.height*e,width:d.width*e,outerHeight:d.outerHeight*e,outerWidth:d.outerWidth*e}});h.effect(j)};a.effects.effect.scale=function(c,f){var d=a(this),l=a.extend(true,{},c),g=a.effects.setMode(d,c.mode||"effect"),h=parseInt(c.percent,10)||(parseInt(c.percent,10)===0?0:(g==="hide"?0:100)),j=c.direction||"both",k=c.origin,e={height:d.height(),width:d.width(),outerHeight:d.outerHeight(),outerWidth:d.outerWidth()},i={y:j!=="horizontal"?(h/100):1,x:j!=="vertical"?(h/100):1};l.effect="size";l.queue=false;l.complete=f;if(g!=="effect"){l.origin=k||["middle","center"];l.restore=true}l.from=c.from||(g==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:e);l.to={height:e.height*i.y,width:e.width*i.x,outerHeight:e.outerHeight*i.y,outerWidth:e.outerWidth*i.x};if(l.fade){if(g==="show"){l.from.opacity=0;l.to.opacity=1}if(g==="hide"){l.from.opacity=1;l.to.opacity=0}}d.effect(l)};a.effects.effect.size=function(l,k){var q,i,j,c=a(this),p=["position","top","bottom","left","right","width","height","overflow","opacity"],n=["position","top","bottom","left","right","overflow","opacity"],m=["width","height","overflow"],g=["fontSize"],s=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],h=a.effects.setMode(c,l.mode||"effect"),r=l.restore||h!=="effect",v=l.scale||"both",t=l.origin||["middle","center"],u=c.css("position"),e=r?p:n,f={height:0,width:0,outerHeight:0,outerWidth:0};if(h==="show"){c.show()}q={height:c.height(),width:c.width(),outerHeight:c.outerHeight(),outerWidth:c.outerWidth()};if(l.mode==="toggle"&&h==="show"){c.from=l.to||f;c.to=l.from||q}else{c.from=l.from||(h==="show"?f:q);c.to=l.to||(h==="hide"?f:q)}j={from:{y:c.from.height/q.height,x:c.from.width/q.width},to:{y:c.to.height/q.height,x:c.to.width/q.width}};if(v==="box"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(s);c.from=a.effects.setTransition(c,s,j.from.y,c.from);c.to=a.effects.setTransition(c,s,j.to.y,c.to)}if(j.from.x!==j.to.x){e=e.concat(d);c.from=a.effects.setTransition(c,d,j.from.x,c.from);c.to=a.effects.setTransition(c,d,j.to.x,c.to)}}if(v==="content"||v==="both"){if(j.from.y!==j.to.y){e=e.concat(g).concat(m);c.from=a.effects.setTransition(c,g,j.from.y,c.from);c.to=a.effects.setTransition(c,g,j.to.y,c.to)}}a.effects.save(c,e);c.show();a.effects.createWrapper(c);c.css("overflow","hidden").css(c.from);if(t){i=a.effects.getBaseline(t,q);c.from.top=(q.outerHeight-c.outerHeight())*i.y;c.from.left=(q.outerWidth-c.outerWidth())*i.x;c.to.top=(q.outerHeight-c.to.outerHeight)*i.y;c.to.left=(q.outerWidth-c.to.outerWidth)*i.x}c.css(c.from);if(v==="content"||v==="both"){s=s.concat(["marginTop","marginBottom"]).concat(g);d=d.concat(["marginLeft","marginRight"]);m=p.concat(s).concat(d);c.find("*[width]").each(function(){var w=a(this),o={height:w.height(),width:w.width(),outerHeight:w.outerHeight(),outerWidth:w.outerWidth()};if(r){a.effects.save(w,m)}w.from={height:o.height*j.from.y,width:o.width*j.from.x,outerHeight:o.outerHeight*j.from.y,outerWidth:o.outerWidth*j.from.x};w.to={height:o.height*j.to.y,width:o.width*j.to.x,outerHeight:o.height*j.to.y,outerWidth:o.width*j.to.x};if(j.from.y!==j.to.y){w.from=a.effects.setTransition(w,s,j.from.y,w.from);w.to=a.effects.setTransition(w,s,j.to.y,w.to)}if(j.from.x!==j.to.x){w.from=a.effects.setTransition(w,d,j.from.x,w.from);w.to=a.effects.setTransition(w,d,j.to.x,w.to)}w.css(w.from);w.animate(w.to,l.duration,l.easing,function(){if(r){a.effects.restore(w,m)}})})}c.animate(c.to,{queue:false,duration:l.duration,easing:l.easing,complete:function(){if(c.to.opacity===0){c.css("opacity",c.from.opacity)}if(h==="hide"){c.hide()}a.effects.restore(c,e);if(!r){if(u==="static"){c.css({position:"relative",top:c.to.top,left:c.to.left})}else{a.each(["top","left"],function(o,w){c.css(w,function(y,A){var z=parseInt(A,10),x=o?c.to.left:c.to.top;if(A==="auto"){return x+"px"}return z+x+"px"})})}}a.effects.removeWrapper(c);k()}})}})(jQuery);(function(a,b){a.effects.effect.shake=function(l,k){var c=a(this),d=["position","top","bottom","left","right","height","width"],j=a.effects.setMode(c,l.mode||"effect"),u=l.direction||"left",e=l.distance||20,h=l.times||3,v=h*2+1,q=Math.round(l.duration/v),g=(u==="up"||u==="down")?"top":"left",f=(u==="up"||u==="left"),t={},s={},r={},p,m=c.queue(),n=m.length;a.effects.save(c,d);c.show();a.effects.createWrapper(c);t[g]=(f?"-=":"+=")+e;s[g]=(f?"+=":"-=")+e*2;r[g]=(f?"-=":"+=")+e*2;c.animate(t,q,l.easing);for(p=1;p<h;p++){c.animate(s,q,l.easing).animate(r,q,l.easing)}c.animate(s,q,l.easing).animate(t,q/2,l.easing).queue(function(){if(j==="hide"){c.hide()}a.effects.restore(c,d);a.effects.removeWrapper(c);k()});if(n>1){m.splice.apply(m,[1,0].concat(m.splice(n,v+1)))}c.dequeue()}})(jQuery);(function(a,b){a.effects.effect.slide=function(e,i){var f=a(this),k=["position","top","bottom","left","right","width","height"],j=a.effects.setMode(f,e.mode||"show"),m=j==="show",l=e.direction||"left",g=(l==="up"||l==="down")?"top":"left",d=(l==="up"||l==="left"),c,h={};a.effects.save(f,k);f.show();c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);a.effects.createWrapper(f).css({overflow:"hidden"});if(m){f.css(g,d?(isNaN(c)?"-"+c:-c):c)}h[g]=(m?(d?"+=":"-="):(d?"-=":"+="))+c;f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(j==="hide"){f.hide()}a.effects.restore(f,k);a.effects.removeWrapper(f);i()}})}})(jQuery);(function(a,b){a.effects.effect.transfer=function(d,h){var f=a(this),k=a(d.to),n=k.css("position")==="fixed",j=a("body"),l=n?j.scrollTop():0,m=n?j.scrollLeft():0,c=k.offset(),g={top:c.top-l,left:c.left-m,height:k.innerHeight(),width:k.innerWidth()},i=f.offset(),e=a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(d.className).css({top:i.top-l,left:i.left-m,height:f.innerHeight(),width:f.innerWidth(),position:n?"fixed":"absolute"}).animate(g,d.duration,d.easing,function(){e.remove();h()})}})(jQuery);(function(a,b){a.widget("ui.menu",{version:"1.10.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(c){if(this.options.disabled){c.preventDefault()}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item > a":function(c){c.preventDefault()},"click .ui-state-disabled > a":function(c){c.preventDefault()},"click .ui-menu-item:has(a)":function(c){var d=a(c.target).closest(".ui-menu-item");if(!this.mouseHandled&&d.not(".ui-state-disabled").length){this.mouseHandled=true;this.select(c);if(d.has(".ui-menu").length){this.expand(c)}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}}},"mouseenter .ui-menu-item":function(c){var d=a(c.currentTarget);d.siblings().children(".ui-state-active").removeClass("ui-state-active");this.focus(c,d)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,c){var d=this.active||this.element.children(".ui-menu-item").eq(0);if(!c){this.focus(e,d)}},blur:function(c){this._delay(function(){if(!a.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(c)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(c){if(!a(c.target).closest(".ui-menu").length){this.collapseAll(c)}this.mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var c=a(this);if(c.data("ui-menu-submenu-carat")){c.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(i){var d,h,j,g,f,c=true;function e(k){return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(i.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(i);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(i);break;case a.ui.keyCode.HOME:this._move("first","first",i);break;case a.ui.keyCode.END:this._move("last","last",i);break;case a.ui.keyCode.UP:this.previous(i);break;case a.ui.keyCode.DOWN:this.next(i);break;case a.ui.keyCode.LEFT:this.collapse(i);break;case a.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(i)}break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(i);break;case a.ui.keyCode.ESCAPE:this.collapse(i);break;default:c=false;h=this.previousFilter||"";j=String.fromCharCode(i.keyCode);g=false;clearTimeout(this.filterTimer);if(j===h){g=true}else{j=h+j}f=new RegExp("^"+e(j),"i");d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())});d=g&&d.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):d;if(!d.length){j=String.fromCharCode(i.keyCode);f=new RegExp("^"+e(j),"i");d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())})}if(d.length){this.focus(i,d);if(d.length>1){this.previousFilter=j;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(c){i.preventDefault()}},_activate:function(c){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(c)}else{this.select(c)}}},refresh:function(){var e,d=this.options.icons.submenu,c=this.element.find(this.options.menus);c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var h=a(this),g=h.prev("a"),f=a("<span>").addClass("ui-menu-icon ui-icon "+d).data("ui-menu-submenu-carat",true);g.attr("aria-haspopup","true").prepend(f);h.attr("aria-labelledby",g.attr("id"))});e=c.add(this.element);e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});e.children(":not(.ui-menu-item)").each(function(){var f=a(this);if(!/[^\-\u2014\u2013\s]/.test(f.text())){f.addClass("ui-widget-content ui-menu-divider")}});e.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!a.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(c,d){if(c==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)}this._super(c,d)},focus:function(d,c){var f,e;this.blur(d,d&&d.type==="focus");this._scrollIntoView(c);this.active=c.first();e=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",e.attr("id"))}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");if(d&&d.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}f=c.children(".ui-menu");if(f.length&&(/^mouse/.test(d.type))){this._startOpening(f)}this.activeMenu=c.parent();this._trigger("focus",d,{item:c})},_scrollIntoView:function(f){var i,e,g,c,d,h;if(this._hasScroll()){i=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0;e=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0;g=f.offset().top-this.activeMenu.offset().top-i-e;c=this.activeMenu.scrollTop();d=this.activeMenu.height();h=f.height();if(g<0){this.activeMenu.scrollTop(c+g)}else{if(g+h>d){this.activeMenu.scrollTop(c+g-d+h)}}}},blur:function(d,c){if(!c){clearTimeout(this.timer)}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus");this.active=null;this._trigger("blur",d,{item:this.active})},_startOpening:function(c){clearTimeout(this.timer);if(c.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(c)},this.delay)},_open:function(d){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden","true");d.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(d,c){clearTimeout(this.timer);this.timer=this._delay(function(){var e=c?this.element:a(d&&d.target).closest(this.element.find(".ui-menu"));if(!e.length){e=this.element}this._close(e);this.blur(d);this.activeMenu=e},this.delay)},_close:function(c){if(!c){c=this.active?this.active.parent():this.element}c.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(d){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(c&&c.length){this._close();this.focus(d,c)}},expand:function(d){var c=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();if(c&&c.length){this._open(c.parent());this._delay(function(){this.focus(d,c)})}},next:function(c){this._move("next","first",c)},previous:function(c){this._move("prev","last",c)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(f,d,e){var c;if(this.active){if(f==="first"||f==="last"){c=this.active[f==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{c=this.active[f+"All"](".ui-menu-item").eq(0)}}if(!c||!c.length||!this.active){c=this.activeMenu.children(".ui-menu-item")[d]()}this.focus(e,c)},nextPage:function(e){var d,f,c;if(!this.active){this.next(e);return}if(this.isLastItem()){return}if(this._hasScroll()){f=this.active.offset().top;c=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){d=a(this);return d.offset().top-f-c<0});this.focus(e,d)}else{this.focus(e,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())}},previousPage:function(e){var d,f,c;if(!this.active){this.next(e);return}if(this.isFirstItem()){return}if(this._hasScroll()){f=this.active.offset().top;c=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){d=a(this);return d.offset().top-f+c>0});this.focus(e,d)}else{this.focus(e,this.activeMenu.children(".ui-menu-item").first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(c){this.active=this.active||a(c.target).closest(".ui-menu-item");var d={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(c,true)}this._trigger("select",c,d)}})}(jQuery));(function(e,c){e.ui=e.ui||{};var j,k=Math.max,o=Math.abs,m=Math.round,d=/left|center|right/,h=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,b=/%$/,g=e.fn.position;function n(r,q,p){return[parseFloat(r[0])*(b.test(r[0])?q/100:1),parseFloat(r[1])*(b.test(r[1])?p/100:1)]}function i(p,q){return parseInt(e.css(p,q),10)||0}function f(q){var p=q[0];if(p.nodeType===9){return{width:q.width(),height:q.height(),offset:{top:0,left:0}}}if(e.isWindow(p)){return{width:q.width(),height:q.height(),offset:{top:q.scrollTop(),left:q.scrollLeft()}}}if(p.preventDefault){return{width:0,height:0,offset:{top:p.pageY,left:p.pageX}}}return{width:q.outerWidth(),height:q.outerHeight(),offset:q.offset()}}e.position={scrollbarWidth:function(){if(j!==c){return j}var q,p,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];e("body").append(s);q=r.offsetWidth;s.css("overflow","scroll");p=r.offsetWidth;if(q===p){p=s[0].clientWidth}s.remove();return(j=q-p)},getScrollInfo:function(t){var s=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),q=s==="scroll"||(s==="auto"&&t.width<t.element[0].scrollWidth),p=r==="scroll"||(r==="auto"&&t.height<t.element[0].scrollHeight);return{width:p?e.position.scrollbarWidth():0,height:q?e.position.scrollbarWidth():0}},getWithinInfo:function(q){var r=e(q||window),p=e.isWindow(r[0]);return{element:r,isWindow:p,offset:r.offset()||{left:0,top:0},scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop(),width:p?r.width():r.outerWidth(),height:p?r.height():r.outerHeight()}}};e.fn.position=function(z){if(!z||!z.of){return g.apply(this,arguments)}z=e.extend({},z);var A,w,u,y,t,p,v=e(z.of),s=e.position.getWithinInfo(z.within),q=e.position.getScrollInfo(s),x=(z.collision||"flip").split(" "),r={};p=f(v);if(v[0].preventDefault){z.at="left top"}w=p.width;u=p.height;y=p.offset;t=e.extend({},y);e.each(["my","at"],function(){var D=(z[this]||"").split(" "),C,B;if(D.length===1){D=d.test(D[0])?D.concat(["center"]):h.test(D[0])?["center"].concat(D):["center","center"]}D[0]=d.test(D[0])?D[0]:"center";D[1]=h.test(D[1])?D[1]:"center";C=a.exec(D[0]);B=a.exec(D[1]);r[this]=[C?C[0]:0,B?B[0]:0];z[this]=[l.exec(D[0])[0],l.exec(D[1])[0]]});if(x.length===1){x[1]=x[0]}if(z.at[0]==="right"){t.left+=w}else{if(z.at[0]==="center"){t.left+=w/2}}if(z.at[1]==="bottom"){t.top+=u}else{if(z.at[1]==="center"){t.top+=u/2}}A=n(r.at,w,u);t.left+=A[0];t.top+=A[1];return this.each(function(){var C,L,E=e(this),G=E.outerWidth(),D=E.outerHeight(),F=i(this,"marginLeft"),B=i(this,"marginTop"),K=G+F+i(this,"marginRight")+q.width,J=D+B+i(this,"marginBottom")+q.height,H=e.extend({},t),I=n(r.my,E.outerWidth(),E.outerHeight());if(z.my[0]==="right"){H.left-=G}else{if(z.my[0]==="center"){H.left-=G/2}}if(z.my[1]==="bottom"){H.top-=D}else{if(z.my[1]==="center"){H.top-=D/2}}H.left+=I[0];H.top+=I[1];if(!e.support.offsetFractions){H.left=m(H.left);H.top=m(H.top)}C={marginLeft:F,marginTop:B};e.each(["left","top"],function(N,M){if(e.ui.position[x[N]]){e.ui.position[x[N]][M](H,{targetWidth:w,targetHeight:u,elemWidth:G,elemHeight:D,collisionPosition:C,collisionWidth:K,collisionHeight:J,offset:[A[0]+I[0],A[1]+I[1]],my:z.my,at:z.at,within:s,elem:E})}});if(z.using){L=function(P){var R=y.left-H.left,O=R+w-G,Q=y.top-H.top,N=Q+u-D,M={target:{element:v,left:y.left,top:y.top,width:w,height:u},element:{element:E,left:H.left,top:H.top,width:G,height:D},horizontal:O<0?"left":R>0?"right":"center",vertical:N<0?"top":Q>0?"bottom":"middle"};if(w<G&&o(R+O)<w){M.horizontal="center"}if(u<D&&o(Q+N)<u){M.vertical="middle"}if(k(o(R),o(O))>k(o(Q),o(N))){M.important="horizontal"}else{M.important="vertical"}z.using.call(this,P,M)}}E.offset(e.extend(H,{using:L}))})};e.ui.position={fit:{left:function(t,s){var r=s.within,v=r.isWindow?r.scrollLeft:r.offset.left,x=r.width,u=t.left-s.collisionPosition.marginLeft,w=v-u,q=u+s.collisionWidth-x-v,p;if(s.collisionWidth>x){if(w>0&&q<=0){p=t.left+w+s.collisionWidth-x-v;t.left+=w-p}else{if(q>0&&w<=0){t.left=v}else{if(w>q){t.left=v+x-s.collisionWidth}else{t.left=v}}}}else{if(w>0){t.left+=w}else{if(q>0){t.left-=q}else{t.left=k(t.left-u,t.left)}}}},top:function(s,r){var q=r.within,w=q.isWindow?q.scrollTop:q.offset.top,x=r.within.height,u=s.top-r.collisionPosition.marginTop,v=w-u,t=u+r.collisionHeight-x-w,p;if(r.collisionHeight>x){if(v>0&&t<=0){p=s.top+v+r.collisionHeight-x-w;s.top+=v-p}else{if(t>0&&v<=0){s.top=w}else{if(v>t){s.top=w+x-r.collisionHeight}else{s.top=w}}}}else{if(v>0){s.top+=v}else{if(t>0){s.top-=t}else{s.top=k(s.top-u,s.top)}}}}},flip:{left:function(v,u){var t=u.within,z=t.offset.left+t.scrollLeft,C=t.width,r=t.isWindow?t.scrollLeft:t.offset.left,w=v.left-u.collisionPosition.marginLeft,A=w-r,q=w+u.collisionWidth-C-r,y=u.my[0]==="left"?-u.elemWidth:u.my[0]==="right"?u.elemWidth:0,B=u.at[0]==="left"?u.targetWidth:u.at[0]==="right"?-u.targetWidth:0,s=-2*u.offset[0],p,x;if(A<0){p=v.left+y+B+s+u.collisionWidth-C-z;if(p<0||p<o(A)){v.left+=y+B+s}}else{if(q>0){x=v.left-u.collisionPosition.marginLeft+y+B+s-r;if(x>0||o(x)<q){v.left+=y+B+s}}}},top:function(u,t){var s=t.within,B=s.offset.top+s.scrollTop,C=s.height,p=s.isWindow?s.scrollTop:s.offset.top,w=u.top-t.collisionPosition.marginTop,y=w-p,v=w+t.collisionHeight-C-p,z=t.my[1]==="top",x=z?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,D=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,r=-2*t.offset[1],A,q;if(y<0){q=u.top+x+D+r+t.collisionHeight-C-B;if((u.top+x+D+r)>y&&(q<0||q<o(y))){u.top+=x+D+r}}else{if(v>0){A=u.top-t.collisionPosition.marginTop+x+D+r-p;if((u.top+x+D+r)>v&&(A>0||o(A)<v)){u.top+=x+D+r}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments);e.ui.position.fit.top.apply(this,arguments)}}};(function(){var t,v,q,s,r,p=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(p?"div":"body");q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(p){e.extend(q,{position:"absolute",left:"-1000px",top:"-1000px"})}for(r in q){t.style[r]=q[r]}t.appendChild(u);v=p||document.documentElement;v.insertBefore(t,v.firstChild);u.style.cssText="position: absolute; left: 10.7432222px;";s=e(u).offset().left;e.support.offsetFractions=s>10&&s<11;t.innerHTML="";v.removeChild(t)})()}(jQuery));(function(a,b){a.widget("ui.progressbar",{version:"1.10.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(c){if(c===b){return this.options.value}this.options.value=this._constrainedValue(c);this._refreshValue()},_constrainedValue:function(c){if(c===b){c=this.options.value}this.indeterminate=c===false;if(typeof c!=="number"){c=0}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,c))},_setOptions:function(c){var d=c.value;delete c.value;this._super(c);this.options.value=this._constrainedValue(d);this._refreshValue()},_setOption:function(c,d){if(c==="max"){d=Math.max(this.min,d)}this._super(c,d)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var d=this.options.value,c=this._percentage();this.valueDiv.toggle(this.indeterminate||d>this.min).toggleClass("ui-corner-right",d===this.options.max).width(c.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":d});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null}}if(this.oldValue!==d){this.oldValue=d;this._trigger("change")}if(d===this.options.max){this._trigger("complete")}}})})(jQuery);(function(b,c){var a=5;b.widget("ui.slider",b.ui.mouse,{version:"1.10.3",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var g,d,e=this.options,j=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),h="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",f=[];d=(e.values&&e.values.length)||1;if(j.length>d){j.slice(d).remove();j=j.slice(0,d)}for(g=j.length;g<d;g++){f.push(h)}this.handles=j.add(b(f.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)})},_createRange:function(){var d=this.options,e="";if(d.range){if(d.range===true){if(!d.values){d.values=[this._valueMin(),this._valueMin()]}else{if(d.values.length&&d.values.length!==2){d.values=[d.values[0],d.values[0]]}else{if(b.isArray(d.values)){d.values=d.values.slice(0)}}}}if(!this.range||!this.range.length){this.range=b("<div></div>").appendTo(this.element);e="ui-slider-range ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})}this.range.addClass(e+((d.range==="min"||d.range==="max")?" ui-slider-range-"+d.range:""))}else{this.range=b([])}},_setupEvents:function(){var d=this.handles.add(this.range).filter("a");this._off(d);this._on(d,this._handleEvents);this._hoverable(d);this._focusable(d)},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");this._mouseDestroy()},_mouseCapture:function(f){var j,m,e,h,l,n,i,d,k=this,g=this.options;if(g.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();j={x:f.pageX,y:f.pageY};m=this._normValueFromMouse(j);e=this._valueMax()-this._valueMin()+1;this.handles.each(function(o){var p=Math.abs(m-k.values(o));if((e>p)||(e===p&&(o===k._lastChangedValue||k.values(o)===g.min))){e=p;h=b(this);l=o}});n=this._start(f,l);if(n===false){return false}this._mouseSliding=true;this._handleIndex=l;h.addClass("ui-state-active").focus();i=h.offset();d=!b(f.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=d?{left:0,top:0}:{left:f.pageX-i.left-(h.width()/2),top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(f,l,m)}this._animateOff=true;return true},_mouseStart:function(){return true},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);this._slide(f,this._handleIndex,e);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(e){var d,h,g,f,i;if(this.orientation==="horizontal"){d=this.elementSize.width;h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}g=(h/d);if(g>1){g=1}if(g<0){g=0}if(this.orientation==="vertical"){g=1-g}f=this._valueMax()-this._valueMin();i=this._valueMin()+g*f;return this._trimAlignValue(i)},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()}return this._trigger("start",f,d)},_slide:function(h,g,f){var d,e,i;if(this.options.values&&this.options.values.length){d=this.values(g?0:1);if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d}if(f!==this.values(g)){e=this.values();e[g]=f;i=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});d=this.values(g?0:1);if(i!==false){this.values(g,f,true)}}}else{if(f!==this.value()){i=this._trigger("slide",h,{handle:this.handles[g],value:f});if(i!==false){this.value(f)}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()}this._trigger("stop",f,d)},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()}this._lastChangedValue=e;this._trigger("change",f,d)}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);this._refreshValue();this._change(null,0);return}return this._value()},values:function(e,h){var g,d,f;if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);this._refreshValue();this._change(null,e);return}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;d=arguments[0];for(f=0;f<g.length;f+=1){g[f]=this._trimAlignValue(d[f]);this._change(null,f)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)}else{return this.value()}}}else{return this._values()}},_setOption:function(e,f){var d,g=0;if(e==="range"&&this.options.range===true){if(f==="min"){this.options.value=this._values(0);this.options.values=null}else{if(f==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null}}}if(b.isArray(this.options.values)){g=this.options.values.length}b.Widget.prototype._setOption.apply(this,arguments);switch(e){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(d=0;d<g;d+=1){this._change(null,d)}this._animateOff=false;break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break}},_value:function(){var d=this.options.value;d=this._trimAlignValue(d);return d},_values:function(d){var g,f,e;if(arguments.length){g=this.options.values[d];g=this._trimAlignValue(g);return g}else{if(this.options.values&&this.options.values.length){f=this.options.values.slice();for(e=0;e<f.length;e+=1){f[e]=this._trimAlignValue(f[e])}return f}else{return[]}}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()}if(g>=this._valueMax()){return this._valueMax()}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)}return parseFloat(e.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var i,h,l,j,m,g=this.options.range,f=this.options,k=this,e=(!this._animateOff)?f.animate:false,d={};if(this.options.values&&this.options.values.length){this.handles.each(function(n){h=(k.values(n)-k._valueMin())/(k._valueMax()-k._valueMin())*100;d[k.orientation==="horizontal"?"left":"bottom"]=h+"%";b(this).stop(1,1)[e?"animate":"css"](d,f.animate);if(k.options.range===true){if(k.orientation==="horizontal"){if(n===0){k.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)}if(n===1){k.range[e?"animate":"css"]({width:(h-i)+"%"},{queue:false,duration:f.animate})}}else{if(n===0){k.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)}if(n===1){k.range[e?"animate":"css"]({height:(h-i)+"%"},{queue:false,duration:f.animate})}}}i=h})}else{l=this.value();j=this._valueMin();m=this._valueMax();h=(m!==j)?(l-j)/(m-j)*100:0;d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})}}},_handleEvents:{keydown:function(h){var i,f,e,g,d=b(h.target).data("ui-slider-handle-index");switch(h.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:h.preventDefault();if(!this._keySliding){this._keySliding=true;b(h.target).addClass("ui-state-active");i=this._start(h,d);if(i===false){return}}break}g=this.options.step;if(this.options.values&&this.options.values.length){f=e=this.values(d)}else{f=e=this.value()}switch(h.keyCode){case b.ui.keyCode.HOME:e=this._valueMin();break;case b.ui.keyCode.END:e=this._valueMax();break;case b.ui.keyCode.PAGE_UP:e=this._trimAlignValue(f+((this._valueMax()-this._valueMin())/a));break;case b.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(f-((this._valueMax()-this._valueMin())/a));break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(f===this._valueMax()){return}e=this._trimAlignValue(f+g);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(f===this._valueMin()){return}e=this._trimAlignValue(f-g);break}this._slide(h,d,e)},click:function(d){d.preventDefault()},keyup:function(e){var d=b(e.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(e,d);this._change(e,d);b(e.target).removeClass("ui-state-active")}}}})}(jQuery));(function(b){function a(c){return function(){var d=this.element.val();c.apply(this,arguments);this._refresh();if(d!==this.element.val()){this._trigger("change")}}}b.widget("ui.spinner",{version:"1.10.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);this._value(this.element.val(),true);this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var c={},d=this.element;b.each(["min","max","step"],function(e,f){var g=d.attr(f);if(g!==undefined&&g.length){c[f]=g}});return c},_events:{keydown:function(c){if(this._start(c)&&this._keydown(c)){c.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(c){if(this.cancelBlur){delete this.cancelBlur;return}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",c)}},mousewheel:function(c,d){if(!d){return}if(!this.spinning&&!this._start(c)){return false}this._spin((d>0?1:-1)*this.options.step,c);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(c)}},100);c.preventDefault()},"mousedown .ui-spinner-button":function(d){var c;c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function e(){var f=this.element[0]===this.document[0].activeElement;if(!f){this.element.focus();this.previous=c;this._delay(function(){this.previous=c})}}d.preventDefault();e.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;e.call(this)});if(this._start(d)===false){return}this._repeat(null,b(d.currentTarget).hasClass("ui-spinner-up")?1:-1,d)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){if(!b(c.currentTarget).hasClass("ui-state-active")){return}if(this._start(c)===false){return false}this._repeat(null,b(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var c=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=c.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(c.height()*0.5)&&c.height()>0){c.height(c.height())}if(this.options.disabled){this.disable()}},_keydown:function(d){var c=this.options,e=b.ui.keyCode;switch(d.keyCode){case e.UP:this._repeat(null,1,d);return true;case e.DOWN:this._repeat(null,-1,d);return true;case e.PAGE_UP:this._repeat(null,c.page,d);return true;case e.PAGE_DOWN:this._repeat(null,-c.page,d);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(c){if(!this.spinning&&this._trigger("start",c)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(d,c,e){d=d||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,c,e)},d);this._spin(c*this.options.step,e)},_spin:function(d,c){var e=this.value()||0;if(!this.counter){this.counter=1}e=this._adjustValue(e+d*this._increment(this.counter));if(!this.spinning||this._trigger("spin",c,{value:e})!==false){this._value(e);this.counter++}},_increment:function(c){var d=this.options.incremental;if(d){return b.isFunction(d)?d(c):Math.floor(c*c*c/50000-c*c/500+17*c/200+1)}return 1},_precision:function(){var c=this._precisionOf(this.options.step);if(this.options.min!==null){c=Math.max(c,this._precisionOf(this.options.min))}return c},_precisionOf:function(d){var e=d.toString(),c=e.indexOf(".");return c===-1?0:e.length-c-1},_adjustValue:function(e){var d,f,c=this.options;d=c.min!==null?c.min:0;f=e-d;f=Math.round(f/c.step)*c.step;e=d+f;e=parseFloat(e.toFixed(this._precision()));if(c.max!==null&&e>c.max){return c.max}if(c.min!==null&&e<c.min){return c.min}return e},_stop:function(c){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",c)},_setOption:function(c,d){if(c==="culture"||c==="numberFormat"){var e=this._parse(this.element.val());this.options[c]=d;this.element.val(this._format(e));return}if(c==="max"||c==="min"||c==="step"){if(typeof d==="string"){d=this._parse(d)}}if(c==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(d.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(d.down)}this._super(c,d);if(c==="disabled"){if(d){this.element.prop("disabled",true);this.buttons.button("disable")}else{this.element.prop("disabled",false);this.buttons.button("enable")}}},_setOptions:a(function(c){this._super(c);this._value(this.element.val())}),_parse:function(c){if(typeof c==="string"&&c!==""){c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c}return c===""||isNaN(c)?null:c},_format:function(c){if(c===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,c){var d;if(e!==""){d=this._parse(e);if(d!==null){if(!c){d=this._adjustValue(d)}e=this._format(d)}}this.element.val(e);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:a(function(c){this._stepUp(c)}),_stepUp:function(c){if(this._start()){this._spin((c||1)*this.options.step);this._stop()}},stepDown:a(function(c){this._stepDown(c)}),_stepDown:function(c){if(this._start()){this._spin((c||1)*-this.options.step);this._stop()}},pageUp:a(function(c){this._stepUp((c||1)*this.options.page)}),pageDown:a(function(c){this._stepDown((c||1)*this.options.page)}),value:function(c){if(!arguments.length){return this._parse(this.element.val())}a(this._value).call(this,c)},widget:function(){return this.uiSpinner}})}(jQuery));(function(c,e){var a=0,f=/#.*$/;function d(){return ++a}function b(g){return g.hash.length>1&&decodeURIComponent(g.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))}c.widget("ui.tabs",{version:"1.10.3",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options;this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){if(c(this).is(".ui-state-disabled")){i.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()}});this._processTabs();g.active=this._initialActive();if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(i){return h.tabs.index(i)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(g.active)}else{this.active=c()}this._refresh();if(this.active.length){this.load(g.active)}},_initialActive:function(){var h=this.options.active,g=this.options.collapsible,i=location.hash.substring(1);if(h===null){if(i){this.tabs.each(function(j,k){if(c(k).attr("aria-controls")===i){h=j;return false}})}if(h===null){h=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(h===null||h===-1){h=this.tabs.length?0:false}}if(h!==false){h=this.tabs.index(this.tabs.eq(h));if(h===-1){h=g?false:0}}if(!g&&h===false&&this.anchors.length){h=0}return h},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}},_tabKeydown:function(i){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),j=true;if(this._handlePageNav(i)){return}switch(i.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;break;case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:j=false;g--;break;case c.ui.keyCode.END:g=this.anchors.length-1;break;case c.ui.keyCode.HOME:g=0;break;case c.ui.keyCode.SPACE:i.preventDefault();clearTimeout(this.activating);this._activate(g);return;case c.ui.keyCode.ENTER:i.preventDefault();clearTimeout(this.activating);this._activate(g===this.options.active?false:g);return;default:return}i.preventDefault();clearTimeout(this.activating);g=this._focusNextTab(g,j);if(!i.ctrlKey){h.attr("aria-selected","false");this.tabs.eq(g).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",g)},this.delay)}},_panelKeydown:function(g){if(this._handlePageNav(g)){return}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();this.active.focus()}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(h,i){var g=this.tabs.length-1;function j(){if(h>g){h=0}if(h<0){h=g}return h}while(c.inArray(j(),this.options.disabled)!==-1){h=i?h+1:h-1}return h},_focusNextTab:function(g,h){g=this._findNextTab(g,h);this.tabs.eq(g).focus();return g},_setOption:function(g,h){if(g==="active"){this._activate(h);return}if(g==="disabled"){this._setupDisabled(h);return}this._super(g,h);if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);if(!h&&this.options.active===false){this._activate(0)}}if(g==="event"){this._setupEvents(h)}if(g==="heightStyle"){this._setupHeightStyle(h)}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");h.disabled=c.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)});this._processTabs();if(h.active===false||!this.anchors.length){h.active=false;this.active=c()}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;this.active=c()}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))}}else{h.active=this.tabs.index(this.active)}}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var g=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return c("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=c();this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");if(b(l)){h=l.hash;j=g.element.find(g._sanitizeSelector(h))}else{m=g._tabId(o);h="#"+m;j=g.element.find(h);if(!j.length){j=g._createPanel(m);j.insertAfter(g.panels[n-1]||g.tablist)}j.attr("aria-live","polite")}if(j.length){g.panels=g.panels.add(j)}if(p){o.data("ui-tabs-aria-controls",p)}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});j.attr("aria-labelledby",k)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false}else{if(j.length===this.anchors.length){j=true}}}for(var h=0,g;(g=this.tabs[h]);h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=j},_setupEvents:function(h){var g={click:function(i){i.preventDefault()}};if(h){c.each(h.split(" "),function(j,i){g[i]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,g);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(g){var i,h=this.element.parent();if(g==="fill"){i=h.height();i-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var k=c(this),j=k.css("position");if(j==="absolute"||j==="fixed"){return}i-=k.outerHeight(true)});this.element.children().not(this.panels).each(function(){i-=c(this).outerHeight(true)});this.panels.each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))}).css("overflow","auto")}else{if(g==="auto"){i=0;this.panels.each(function(){i=Math.max(i,c(this).height("").height())}).height(i)}}},_eventHandler:function(g){var p=this.options,k=this.active,l=c(g.currentTarget),j=l.closest("li"),n=j[0]===k[0],h=n&&p.collapsible,i=h?c():this._getPanelForTab(j),m=!k.length?c():this._getPanelForTab(k),o={oldTab:k,oldPanel:m,newTab:h?c():j,newPanel:i};g.preventDefault();if(j.hasClass("ui-state-disabled")||j.hasClass("ui-tabs-loading")||this.running||(n&&!p.collapsible)||(this._trigger("beforeActivate",g,o)===false)){return}p.active=h?false:this.tabs.index(j);this.active=n?c():j;if(this.xhr){this.xhr.abort()}if(!m.length&&!i.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(i.length){this.load(this.tabs.index(j),g)}this._toggle(g,o)},_toggle:function(m,l){var k=this,g=l.newPanel,j=l.oldPanel;this.running=true;function i(){k.running=false;k._trigger("activate",m,l)}function h(){l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(g.length&&k.options.show){k._show(g,k.options.show,i)}else{g.show();i()}}if(j.length&&this.options.hide){this._hide(j,this.options.hide,function(){l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");h()})}else{l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");j.hide();h()}j.attr({"aria-expanded":"false","aria-hidden":"true"});l.oldTab.attr("aria-selected","false");if(g.length&&j.length){l.oldTab.attr("tabIndex",-1)}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}g.attr({"aria-expanded":"true","aria-hidden":"false"});l.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(h){var g,i=this._findActive(h);if(i[0]===this.active[0]){return}if(!i.length){i=this.active}g=i.find(".ui-tabs-anchor")[0];this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})},_findActive:function(g){return g===false?c():this.tabs.eq(g)},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))}return g},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");if(h){g.attr("aria-controls",h).removeData("ui-tabs-aria-controls")}else{g.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(g){var h=this.options.disabled;if(h===false){return}if(g===e){h=false}else{g=this._getIndex(g);if(c.isArray(h)){h=c.map(h,function(i){return i!==g?i:null})}else{h=c.map(this.tabs,function(i,j){return j!==g?j:null})}}this._setupDisabled(h)},disable:function(g){var h=this.options.disabled;if(h===true){return}if(g===e){h=true}else{g=this._getIndex(g);if(c.inArray(g,h)!==-1){return}if(c.isArray(h)){h=c.merge([g],h).sort()}else{h=[g]}}this._setupDisabled(h)},load:function(i,m){i=this._getIndex(i);var l=this,j=this.tabs.eq(i),h=j.find(".ui-tabs-anchor"),g=this._getPanelForTab(j),k={tab:j,panel:g};if(b(h[0])){return}this.xhr=c.ajax(this._ajaxSettings(h,m,k));if(this.xhr&&this.xhr.statusText!=="canceled"){j.addClass("ui-tabs-loading");g.attr("aria-busy","true");this.xhr.success(function(n){setTimeout(function(){g.html(n);l._trigger("load",m,k)},1)}).complete(function(o,n){setTimeout(function(){if(n==="abort"){l.panels.stop(false,true)}j.removeClass("ui-tabs-loading");g.removeAttr("aria-busy");if(o===l.xhr){delete l.xhr}},1)})}},_ajaxSettings:function(g,j,i){var h=this;return{url:g.attr("href"),beforeSend:function(l,k){return h._trigger("beforeLoad",j,c.extend({jqXHR:l,ajaxSettings:k},i))}}},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+h))}})})(jQuery);(function(d){var b=0;function c(f,g){var e=(f.attr("aria-describedby")||"").split(/\s+/);e.push(g);f.data("ui-tooltip-id",g).attr("aria-describedby",d.trim(e.join(" ")))}function a(g){var h=g.data("ui-tooltip-id"),f=(g.attr("aria-describedby")||"").split(/\s+/),e=d.inArray(h,f);if(e!==-1){f.splice(e,1)}g.removeData("ui-tooltip-id");f=d.trim(f.join(" "));if(f){g.attr("aria-describedby",f)}else{g.removeAttr("aria-describedby")}}d.widget("ui.tooltip",{version:"1.10.3",options:{content:function(){var e=d(this).attr("title")||"";return d("<a>").text(e).html()},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable()}},_setOption:function(e,g){var f=this;if(e==="disabled"){this[g?"_disable":"_enable"]();this.options[e]=g;return}this._super(e,g);if(e==="content"){d.each(this.tooltips,function(i,h){f._updateContent(h)})}},_disable:function(){var e=this;d.each(this.tooltips,function(h,f){var g=d.Event("blur");g.target=g.currentTarget=f[0];e.close(g,true)});this.element.find(this.options.items).addBack().each(function(){var f=d(this);if(f.is("[title]")){f.data("ui-tooltip-title",f.attr("title")).attr("title","")}})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=d(this);if(e.data("ui-tooltip-title")){e.attr("title",e.data("ui-tooltip-title"))}})},open:function(f){var e=this,g=d(f?f.target:this.element).closest(this.options.items);if(!g.length||g.data("ui-tooltip-id")){return}if(g.attr("title")){g.data("ui-tooltip-title",g.attr("title"))}g.data("ui-tooltip-open",true);if(f&&f.type==="mouseover"){g.parents().each(function(){var i=d(this),h;if(i.data("ui-tooltip-open")){h=d.Event("blur");h.target=h.currentTarget=this;e.close(h,true)}if(i.attr("title")){i.uniqueId();e.parents[this.id]={element:this,title:i.attr("title")};i.attr("title","")}})}this._updateContent(g,f)},_updateContent:function(j,i){var h,e=this.options.content,g=this,f=i?i.type:null;if(typeof e==="string"){return this._open(i,j,e)}h=e.call(j[0],function(k){if(!j.data("ui-tooltip-open")){return}g._delay(function(){if(i){i.type=f}this._open(i,j,k)})});if(h){this._open(i,j,h)}},_open:function(i,k,h){var j,g,f,l=d.extend({},this.options.position);if(!h){return}j=this._find(k);if(j.length){j.find(".ui-tooltip-content").html(h);return}if(k.is("[title]")){if(i&&i.type==="mouseover"){k.attr("title","")}else{k.removeAttr("title")}}j=this._tooltip(k);c(k,j.attr("id"));j.find(".ui-tooltip-content").html(h);function e(m){l.of=m;if(j.is(":hidden")){return}j.position(l)}if(this.options.track&&i&&/^mouse/.test(i.type)){this._on(this.document,{mousemove:e});e(i)}else{j.position(d.extend({of:k},this.options.position))}j.hide();this._show(j,this.options.show);if(this.options.show&&this.options.show.delay){f=this.delayedShow=setInterval(function(){if(j.is(":visible")){e(l.of);clearInterval(f)}},d.fx.interval)}this._trigger("open",i,{tooltip:j});g={keyup:function(m){if(m.keyCode===d.ui.keyCode.ESCAPE){var n=d.Event(m);n.currentTarget=k[0];this.close(n,true)}},remove:function(){this._removeTooltip(j)}};if(!i||i.type==="mouseover"){g.mouseleave="close"}if(!i||i.type==="focusin"){g.focusout="close"}this._on(true,k,g)},close:function(f){var e=this,h=d(f?f.currentTarget:this.element),g=this._find(h);if(this.closing){return}clearInterval(this.delayedShow);if(h.data("ui-tooltip-title")){h.attr("title",h.data("ui-tooltip-title"))}a(h);g.stop(true);this._hide(g,this.options.hide,function(){e._removeTooltip(d(this))});h.removeData("ui-tooltip-open");this._off(h,"mouseleave focusout keyup");if(h[0]!==this.element[0]){this._off(h,"remove")}this._off(this.document,"mousemove");if(f&&f.type==="mouseleave"){d.each(this.parents,function(j,i){d(i.element).attr("title",i.title);delete e.parents[j]})}this.closing=true;this._trigger("close",f,{tooltip:g});this.closing=false},_tooltip:function(e){var g="ui-tooltip-"+b++,f=d("<div>").attr({id:g,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));d("<div>").addClass("ui-tooltip-content").appendTo(f);f.appendTo(this.document[0].body);this.tooltips[g]=e;return f},_find:function(e){var f=e.data("ui-tooltip-id");return f?d("#"+f):d()},_removeTooltip:function(e){e.remove();delete this.tooltips[e.attr("id")]},_destroy:function(){var e=this;d.each(this.tooltips,function(h,f){var g=d.Event("blur");g.target=g.currentTarget=f[0];e.close(g,true);d("#"+h).remove();if(f.data("ui-tooltip-title")){f.attr("title",f.data("ui-tooltip-title"));f.removeData("ui-tooltip-title")}})}})}(jQuery));
(function(){var f,a,g,d,e,b={}.hasOwnProperty,c=function(k,i){for(var h in i){if(b.call(i,h)){k[h]=i[h]}}function j(){this.constructor=k}j.prototype=i.prototype;k.prototype=new j();k.__super__=i.prototype;return k};d=(function(){function h(){this.options_index=0;this.parsed=[]}h.prototype.add_node=function(i){if(i.nodeName.toUpperCase()==="OPTGROUP"){return this.add_group(i)}else{return this.add_option(i)}};h.prototype.add_group=function(o){var n,k,m,j,l,i;n=this.parsed.length;this.parsed.push({array_index:n,group:true,label:this.escapeExpression(o.label),children:0,disabled:o.disabled});l=o.childNodes;i=[];for(m=0,j=l.length;m<j;m++){k=l[m];i.push(this.add_option(k,n,o.disabled))}return i};h.prototype.add_option=function(m,n,j){if(m.nodeName.toUpperCase()==="OPTION"){if(m.text!==""){if(n!=null){this.parsed[n].children+=1}var k="";for(var l=0;l<m.attributes.length;l++){if(m.attributes[l].name=="data_img_src"){k=m.attributes[l].value}}this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:m.value,data_img_src:k,text:m.text,html:m.innerHTML,selected:m.selected,disabled:j===true?j:m.disabled,group_array_index:n,classes:m.className,style:m.style.cssText})}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true})}return this.options_index+=1}};h.prototype.escapeExpression=function(k){var j,i;if((k==null)||k===false){return""}if(!/[\&\<\>\"\'\`]/.test(k)){return k}j={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};i=/&(?!\w+;)|[\<\>\"\'\`]/g;return k.replace(i,function(l){return j[l]||"&amp;"})};return h})();d.select_to_array=function(h){var m,l,k,i,j;l=new d();j=h.childNodes;for(k=0,i=j.length;k<i;k++){m=j[k];l.add_node(m)}return l.parsed};a=(function(){function h(i,j){this.form_field=i;this.options=j!=null?j:{};if(!h.browser_is_supported()){return}this.is_multiple=this.form_field.multiple;this.set_default_text();this.set_default_values();this.setup();this.set_up_html();this.register_observers()}h.prototype.set_default_values=function(){var i=this;this.click_test_action=function(j){return i.test_active_click(j)};this.activate_action=function(j){return i.activate_field(j)};this.active_field=false;this.mouse_on_container=false;this.results_showing=false;this.result_highlighted=null;this.result_single_selected=null;this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;this.disable_search_threshold=this.options.disable_search_threshold||0;this.disable_search=this.options.disable_search||false;this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:true;this.group_search=this.options.group_search!=null?this.options.group_search:true;this.search_contains=this.options.search_contains||false;this.single_backstroke_delete=this.options.single_backstroke_delete!=null?this.options.single_backstroke_delete:true;this.max_selected_options=this.options.max_selected_options||Infinity;this.inherit_select_classes=this.options.inherit_select_classes||false;this.display_selected_options=this.options.display_selected_options!=null?this.options.display_selected_options:true;return this.display_disabled_options=this.options.display_disabled_options!=null?this.options.display_disabled_options:true};h.prototype.set_default_text=function(){if(this.form_field.getAttribute("data-placeholder")){this.default_text=this.form_field.getAttribute("data-placeholder")}else{if(this.is_multiple){this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||h.default_multiple_text}else{this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||h.default_single_text}}return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||h.default_no_result_text};h.prototype.mouse_enter=function(){return this.mouse_on_container=true};h.prototype.mouse_leave=function(){return this.mouse_on_container=false};h.prototype.input_focus=function(i){var j=this;if(this.is_multiple){if(!this.active_field){return setTimeout((function(){return j.container_mousedown()}),50)}}else{if(!this.active_field){return this.activate_field()}}};h.prototype.input_blur=function(i){var j=this;if(!this.mouse_on_container){this.active_field=false;return setTimeout((function(){return j.blur_test()}),100)}};h.prototype.results_option_build=function(j){var k,n,m,i,l;k="";l=this.results_data;for(m=0,i=l.length;m<i;m++){n=l[m];if(n.group){k+=this.result_add_group(n)}else{k+=this.result_add_option(n)}if(j!=null?j.first:void 0){if(n.selected&&this.is_multiple){this.choice_build(n)}else{if(n.selected&&!this.is_multiple){this.single_set_selected_text(n.text)}}}}return k};h.prototype.result_add_option=function(k){var i,j;if(!k.search_match){return""}if(!this.include_option_in_results(k)){return""}i=[];if(!k.disabled&&!(k.selected&&this.is_multiple)){i.push("active-result")}if(k.disabled&&!(k.selected&&this.is_multiple)){i.push("disabled-result")}if(k.selected){i.push("result-selected")}if(k.group_array_index!=null){i.push("group-option")}if(k.classes!==""){i.push(k.classes)}j=k.style.cssText!==""?' style="'+k.style+'"':"";if(k.data_img_src!=""){return'<li class="'+(i.join(" "))+'"'+j+' data-option-array-index="'+k.array_index+'"><img src="'+k.data_img_src+'"></li>'}else{return'<li class="'+(i.join(" "))+'"'+j+' data-option-array-index="'+k.array_index+'">'+k.data_img_src+k.search_text+"</li>"}};h.prototype.result_add_group=function(i){if(!(i.search_match||i.group_match)){return""}if(!(i.active_options>0)){return""}return'<li class="group-result">'+i.search_text+"</li>"};h.prototype.results_update_field=function(){this.set_default_text();if(!this.is_multiple){this.results_reset_cleanup()}this.result_clear_highlight();this.result_single_selected=null;this.results_build();if(this.results_showing){return this.winnow_results()}};h.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide()}else{return this.results_show()}};h.prototype.results_search=function(i){if(this.results_showing){return this.winnow_results()}else{return this.results_show()}};h.prototype.winnow_results=function(){var u,n,q,r,m,i,t,o,s,j,k,p,l;this.no_results_clear();m=0;t=this.get_search_text();u=t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");r=this.search_contains?"":"^";q=new RegExp(r+u,"i");j=new RegExp(u,"i");l=this.results_data;for(k=0,p=l.length;k<p;k++){n=l[k];n.search_match=false;i=null;if(this.include_option_in_results(n)){if(n.group){n.group_match=false;n.active_options=0}if((n.group_array_index!=null)&&this.results_data[n.group_array_index]){i=this.results_data[n.group_array_index];if(i.active_options===0&&i.search_match){m+=1}i.active_options+=1}if(!(n.group&&!this.group_search)){n.search_text=n.group?n.label:n.html;n.search_match=this.search_string_match(n.search_text,q);if(n.search_match&&!n.group){m+=1}if(n.search_match){if(t.length){o=n.search_text.search(j);s=n.search_text.substr(0,o+t.length)+"</em>"+n.search_text.substr(o+t.length);n.search_text=s.substr(0,o)+"<em>"+s.substr(o)}if(i!=null){i.group_match=true}}else{if((n.group_array_index!=null)&&this.results_data[n.group_array_index].search_match){n.search_match=true}}}}}this.result_clear_highlight();if(m<1&&t.length){this.update_results_content("");return this.no_results(t)}else{this.update_results_content(this.results_option_build());return this.winnow_results_set_highlight()}};h.prototype.search_string_match=function(n,k){var j,m,l,i;if(k.test(n)){return true}else{if(this.enable_split_word_search&&(n.indexOf(" ")>=0||n.indexOf("[")===0)){m=n.replace(/\[|\]/g,"").split(" ");if(m.length){for(l=0,i=m.length;l<i;l++){j=m[l];if(k.test(j)){return true}}}}}};h.prototype.choices_count=function(){var j,l,i,k;if(this.selected_option_count!=null){return this.selected_option_count}this.selected_option_count=0;k=this.form_field.options;for(l=0,i=k.length;l<i;l++){j=k[l];if(j.selected){this.selected_option_count+=1}}return this.selected_option_count};h.prototype.choices_click=function(i){i.preventDefault();if(!(this.results_showing||this.is_disabled)){return this.results_show()}};h.prototype.keyup_checker=function(i){var k,j;k=(j=i.which)!=null?j:i.keyCode;this.search_field_scale();switch(k){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0){return this.keydown_backstroke()}else{if(!this.pending_backstroke){this.result_clear_highlight();return this.results_search()}}break;case 13:i.preventDefault();if(this.results_showing){return this.result_select(i)}break;case 27:if(this.results_showing){this.results_hide()}return true;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}};h.prototype.container_width=function(){if(this.options.width!=null){return this.options.width}else{return""+this.form_field.offsetWidth+"px"}};h.prototype.include_option_in_results=function(i){if(this.is_multiple&&(!this.display_selected_options&&i.selected)){return false}if(!this.display_disabled_options&&i.disabled){return false}if(i.empty){return false}return true};h.browser_is_supported=function(){if(window.navigator.appName==="Microsoft Internet Explorer"){return document.documentMode>=8}if(/iP(od|hone)/i.test(window.navigator.userAgent)){return false}if(/Android/i.test(window.navigator.userAgent)){if(/Mobile/i.test(window.navigator.userAgent)){return false}}return true};h.default_multiple_text="Select Some Options";h.default_single_text="Select an Option";h.default_no_result_text="No results match";return h})();f=jQuery;f.fn.extend({chosen:function(h){if(!a.browser_is_supported()){return this}return this.each(function(j){var k,i;k=f(this);i=k.data("chosen");if(h==="destroy"&&i){i.destroy()}else{if(!i){k.data("chosen",new g(this,h))}}})}});g=(function(h){c(i,h);function i(){e=i.__super__.constructor.apply(this,arguments);return e}i.prototype.setup=function(){this.form_field_jq=f(this.form_field);this.current_selectedIndex=this.form_field.selectedIndex;return this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")};i.prototype.set_up_html=function(){var j,k;j=["chosen-container"];j.push("chosen-container-"+(this.is_multiple?"multi":"single"));if(this.inherit_select_classes&&this.form_field.className){j.push(this.form_field.className)}if(this.is_rtl){j.push("chosen-rtl")}k={"class":j.join(" "),style:"width: "+(this.container_width())+";",title:this.form_field.title};if(this.form_field.id.length){k.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"}this.container=f("<div />",k);if(this.is_multiple){this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>')}else{this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>')}this.form_field_jq.hide().after(this.container);this.dropdown=this.container.find("div.chosen-drop").first();this.search_field=this.container.find("input").first();this.search_results=this.container.find("ul.chosen-results").first();this.search_field_scale();this.search_no_results=this.container.find("li.no-results").first();if(this.is_multiple){this.search_choices=this.container.find("ul.chosen-choices").first();this.search_container=this.container.find("li.search-field").first()}else{this.search_container=this.container.find("div.chosen-search").first();this.selected_item=this.container.find(".chosen-single").first()}this.results_build();this.set_tab_index();this.set_label_behavior();return this.form_field_jq.trigger("chosen:ready",{chosen:this})};i.prototype.register_observers=function(){var j=this;this.container.bind("mousedown.chosen",function(k){j.container_mousedown(k)});this.container.bind("mouseup.chosen",function(k){j.container_mouseup(k)});this.container.bind("mouseenter.chosen",function(k){j.mouse_enter(k)});this.container.bind("mouseleave.chosen",function(k){j.mouse_leave(k)});this.search_results.bind("mouseup.chosen",function(k){j.search_results_mouseup(k)});this.search_results.bind("mouseover.chosen",function(k){j.search_results_mouseover(k)});this.search_results.bind("mouseout.chosen",function(k){j.search_results_mouseout(k)});this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(k){j.search_results_mousewheel(k)});this.form_field_jq.bind("chosen:updated.chosen",function(k){j.results_update_field(k)});this.form_field_jq.bind("chosen:activate.chosen",function(k){j.activate_field(k)});this.form_field_jq.bind("chosen:open.chosen",function(k){j.container_mousedown(k)});this.search_field.bind("blur.chosen",function(k){j.input_blur(k)});this.search_field.bind("keyup.chosen",function(k){j.keyup_checker(k)});this.search_field.bind("keydown.chosen",function(k){j.keydown_checker(k)});this.search_field.bind("focus.chosen",function(k){j.input_focus(k)});if(this.is_multiple){return this.search_choices.bind("click.chosen",function(k){j.choices_click(k)})}else{return this.container.bind("click.chosen",function(k){k.preventDefault()})}};i.prototype.destroy=function(){f(document).unbind("click.chosen",this.click_test_action);if(this.search_field[0].tabIndex){this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex}this.container.remove();this.form_field_jq.removeData("chosen");return this.form_field_jq.show()};i.prototype.search_field_disabled=function(){this.is_disabled=this.form_field_jq[0].disabled;if(this.is_disabled){this.container.addClass("chosen-disabled");this.search_field[0].disabled=true;if(!this.is_multiple){this.selected_item.unbind("focus.chosen",this.activate_action)}return this.close_field()}else{this.container.removeClass("chosen-disabled");this.search_field[0].disabled=false;if(!this.is_multiple){return this.selected_item.bind("focus.chosen",this.activate_action)}}};i.prototype.container_mousedown=function(j){if(!this.is_disabled){if(j&&j.type==="mousedown"&&!this.results_showing){j.preventDefault()}if(!((j!=null)&&(f(j.target)).hasClass("search-choice-close"))){if(!this.active_field){if(this.is_multiple){this.search_field.val("")}f(document).bind("click.chosen",this.click_test_action);this.results_show()}else{if(!this.is_multiple&&j&&((f(j.target)[0]===this.selected_item[0])||f(j.target).parents("a.chosen-single").length)){j.preventDefault();this.results_toggle()}}return this.activate_field()}}};i.prototype.container_mouseup=function(j){if(j.target.nodeName==="ABBR"&&!this.is_disabled){return this.results_reset(j)}};i.prototype.search_results_mousewheel=function(k){var m,j,l;m=-((j=k.originalEvent)!=null?j.wheelDelta:void 0)||((l=k.originialEvent)!=null?l.detail:void 0);if(m!=null){k.preventDefault();if(k.type==="DOMMouseScroll"){m=m*40}return this.search_results.scrollTop(m+this.search_results.scrollTop())}};i.prototype.blur_test=function(j){if(!this.active_field&&this.container.hasClass("chosen-container-active")){return this.close_field()}};i.prototype.close_field=function(){f(document).unbind("click.chosen",this.click_test_action);this.active_field=false;this.results_hide();this.container.removeClass("chosen-container-active");this.clear_backstroke();this.show_search_field_default();return this.search_field_scale()};i.prototype.activate_field=function(){this.container.addClass("chosen-container-active");this.active_field=true;this.search_field.val(this.search_field.val());return this.search_field.focus()};i.prototype.test_active_click=function(j){if(this.container.is(f(j.target).closest(".chosen-container"))){return this.active_field=true}else{return this.close_field()}};i.prototype.results_build=function(){this.parsing=true;this.selected_option_count=null;this.results_data=d.select_to_array(this.form_field);if(this.is_multiple){this.search_choices.find("li.search-choice").remove()}else{if(!this.is_multiple){this.single_set_selected_text();if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.search_field[0].readOnly=true;this.container.addClass("chosen-container-single-nosearch")}else{this.search_field[0].readOnly=false;this.container.removeClass("chosen-container-single-nosearch")}}}this.update_results_content(this.results_option_build({first:true}));this.search_field_disabled();this.show_search_field_default();this.search_field_scale();return this.parsing=false};i.prototype.result_do_highlight=function(k){var o,n,l,m,j;if(k.length){this.result_clear_highlight();this.result_highlight=k;this.result_highlight.addClass("highlighted");l=parseInt(this.search_results.css("maxHeight"),10);j=this.search_results.scrollTop();m=l+j;n=this.result_highlight.position().top+this.search_results.scrollTop();o=n+this.result_highlight.outerHeight();if(o>=m){return this.search_results.scrollTop((o-l)>0?o-l:0)}else{if(n<j){return this.search_results.scrollTop(n)}}}};i.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted")}return this.result_highlight=null};i.prototype.results_show=function(){if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return false}this.container.addClass("chosen-with-drop");this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this});this.results_showing=true;this.search_field.focus();this.search_field.val(this.search_field.val());return this.winnow_results()};i.prototype.update_results_content=function(j){return this.search_results.html(j)};i.prototype.results_hide=function(){if(this.results_showing){this.result_clear_highlight();this.container.removeClass("chosen-with-drop");this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this})}return this.results_showing=false};i.prototype.set_tab_index=function(k){var j;if(this.form_field.tabIndex){j=this.form_field.tabIndex;this.form_field.tabIndex=-1;return this.search_field[0].tabIndex=j}};i.prototype.set_label_behavior=function(){var j=this;this.form_field_label=this.form_field_jq.parents("label");if(!this.form_field_label.length&&this.form_field.id.length){this.form_field_label=f("label[for='"+this.form_field.id+"']")}if(this.form_field_label.length>0){return this.form_field_label.bind("click.chosen",function(k){if(j.is_multiple){return j.container_mousedown(k)}else{return j.activate_field()}})}};i.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);return this.search_field.addClass("default")}else{this.search_field.val("");return this.search_field.removeClass("default")}};i.prototype.search_results_mouseup=function(j){var k;k=f(j.target).hasClass("active-result")?f(j.target):f(j.target).parents(".active-result").first();if(k.length){this.result_highlight=k;this.result_select(j);return this.search_field.focus()}};i.prototype.search_results_mouseover=function(j){var k;k=f(j.target).hasClass("active-result")?f(j.target):f(j.target).parents(".active-result").first();if(k){return this.result_do_highlight(k)}};i.prototype.search_results_mouseout=function(j){if(f(j.target).hasClass("active-result"||f(j.target).parents(".active-result").first())){return this.result_clear_highlight()}};i.prototype.choice_build=function(k){var j,l,m=this;j=f("<li />",{"class":"search-choice"}).html("<span>"+k.html+"</span>");if(k.disabled){j.addClass("search-choice-disabled")}else{l=f("<a />",{"class":"search-choice-close","data-option-array-index":k.array_index});l.bind("click.chosen",function(n){return m.choice_destroy_link_click(n)});j.append(l)}return this.search_container.before(j)};i.prototype.choice_destroy_link_click=function(j){j.preventDefault();j.stopPropagation();if(!this.is_disabled){return this.choice_destroy(f(j.target))}};i.prototype.choice_destroy=function(j){if(this.result_deselect(j[0].getAttribute("data-option-array-index"))){this.show_search_field_default();if(this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1){this.results_hide()}j.parents("li").first().remove();return this.search_field_scale()}};i.prototype.results_reset=function(){this.form_field.options[0].selected=true;this.selected_option_count=null;this.single_set_selected_text();this.show_search_field_default();this.results_reset_cleanup();this.form_field_jq.trigger("change");if(this.active_field){return this.results_hide()}};i.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;return this.selected_item.find("abbr").remove()};i.prototype.result_select=function(k){var m,l,j;if(this.result_highlight){m=this.result_highlight;this.result_clear_highlight();if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return false}if(this.is_multiple){m.removeClass("active-result")}else{if(this.result_single_selected){this.result_single_selected.removeClass("result-selected");j=this.result_single_selected[0].getAttribute("data-option-array-index");this.results_data[j].selected=false}this.result_single_selected=m}m.addClass("result-selected");l=this.results_data[m[0].getAttribute("data-option-array-index")];l.selected=true;this.form_field.options[l.options_index].selected=true;this.selected_option_count=null;if(this.is_multiple){this.choice_build(l)}else{this.single_set_selected_text(l.text)}if(!((k.metaKey||k.ctrlKey)&&this.is_multiple)){this.results_hide()}this.search_field.val("");if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){this.form_field_jq.trigger("change",{selected:this.form_field.options[l.options_index].value})}this.current_selectedIndex=this.form_field.selectedIndex;return this.search_field_scale()}};i.prototype.single_set_selected_text=function(j){if(j==null){j=this.default_text}if(j===this.default_text){this.selected_item.addClass("chosen-default")}else{this.single_deselect_control_build();this.selected_item.removeClass("chosen-default")}return this.selected_item.find("span").text(j)};i.prototype.result_deselect=function(k){var j;j=this.results_data[k];if(!this.form_field.options[j.options_index].disabled){j.selected=false;this.form_field.options[j.options_index].selected=false;this.selected_option_count=null;this.result_clear_highlight();if(this.results_showing){this.winnow_results()}this.form_field_jq.trigger("change",{deselected:this.form_field.options[j.options_index].value});this.search_field_scale();return true}else{return false}};i.prototype.single_deselect_control_build=function(){if(!this.allow_single_deselect){return}if(!this.selected_item.find("abbr").length){this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>')}return this.selected_item.addClass("chosen-single-with-deselect")};i.prototype.get_search_text=function(){if(this.search_field.val()===this.default_text){return""}else{return f("<div/>").text(f.trim(this.search_field.val())).html()}};i.prototype.winnow_results_set_highlight=function(){var j,k;k=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];j=k.length?k.first():this.search_results.find(".active-result").first();if(j!=null){return this.result_do_highlight(j)}};i.prototype.no_results=function(j){var k;k=f('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>');k.find("span").first().html(j);return this.search_results.append(k)};i.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()};i.prototype.keydown_arrow=function(){var j;if(this.results_showing&&this.result_highlight){j=this.result_highlight.nextAll("li.active-result").first();if(j){return this.result_do_highlight(j)}}else{return this.results_show()}};i.prototype.keyup_arrow=function(){var j;if(!this.results_showing&&!this.is_multiple){return this.results_show()}else{if(this.result_highlight){j=this.result_highlight.prevAll("li.active-result");if(j.length){return this.result_do_highlight(j.first())}else{if(this.choices_count()>0){this.results_hide()}return this.result_clear_highlight()}}}};i.prototype.keydown_backstroke=function(){var j;if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());return this.clear_backstroke()}else{j=this.search_container.siblings("li.search-choice").last();if(j.length&&!j.hasClass("search-choice-disabled")){this.pending_backstroke=j;if(this.single_backstroke_delete){return this.keydown_backstroke()}else{return this.pending_backstroke.addClass("search-choice-focus")}}}};i.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus")}return this.pending_backstroke=null};i.prototype.keydown_checker=function(k){var l,j;l=(j=k.which)!=null?j:k.keyCode;this.search_field_scale();if(l!==8&&this.pending_backstroke){this.clear_backstroke()}switch(l){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:if(this.results_showing&&!this.is_multiple){this.result_select(k)}this.mouse_on_container=false;break;case 13:k.preventDefault();break;case 38:k.preventDefault();this.keyup_arrow();break;case 40:k.preventDefault();this.keydown_arrow();break}};i.prototype.search_field_scale=function(){var j,n,m,k,q,r,p,l,o;if(this.is_multiple){m=0;p=0;q="position:absolute; left: -1000px; top: -1000px; display:none;";r=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"];for(l=0,o=r.length;l<o;l++){k=r[l];q+=k+":"+this.search_field.css(k)+";"}j=f("<div />",{style:q});j.text(this.search_field.val());f("body").append(j);p=j.width()+25;j.remove();n=this.container.outerWidth();if(p>n-10){p=n-10}return this.search_field.css({width:p+"px"})}};return i})(a)}).call(this);
(function(a){a.fn.chosenImage=function(b){return this.each(function(){var e=a(this),f={};e.find("option").filter(function(){return a(this).text()}).each(function(j){var k=a(this).attr("data-img-src");f[j]=k});e.chosen(b);var c=e.attr("id").length?e.attr("id").replace(/[^\w]/g,"_"):this.generate_field_id();c+="_chosen";var d="#"+c,h=a(d).addClass("chosenImage-container");h.find(".chosen-results li").each(function(j){a(this).css(g(f[j]))});e.change(function(){var i=(e.find("option:selected").attr("data_img_src"))?e.find("option:selected").attr("search_text"):"";h.find(".chosen-single span").css(g(i))});e.trigger("change");function g(i){if(i){return{"background-image":"url("+i+")","background-repeat":"no-repeat"}}else{return{"background-image":"none"}}}})}})(jQuery);
	// mover la cabecera superior al hacer scroll
//$(function(){

//Esta funcion hace los correspondientes cambios para cuando se haga 
function responsiveScroll() {
	$(window).scroll(function() {
		if ($(window).width()>=1012){
			$html = $("html");
			$('.mini .botones').css('top','35px');
			//Esto se debe de modificar ya que todos los navegadores lo pueden hacer de modo diferente
			/*if($html.hasClass('webkit')){
				var scrollTop = $("body")[0].scrollTop;
			}else if($html.hasClass('firefox')){
				var scrollTop = $("html")[0].scrollTop;
			}else{
				var scrollTop = $(document).scrollTop();
			
				//var scrollTop = $("body")[0].scrollTop;
				//var scrollTop = $("html")[0].scrollTop;
			}*/

		
			//Con window creo que pilla La barra de scroll ya que el lÃ­mite esta en 754 con lo que esta barra tiene 14 pixeles
			//if (($( window ).width()>754) && ($(document).scrollTop() >= 160)){
			if ($(document).scrollTop() >= 150){
				$('body').addClass('mini');
				//$('#anchoBanner').css('top', $(document).scrollTop()+'px');
				$('#anchoBanner').css({
					'position':'fixed',
					'top': '-10px',
					'height':$('.banner').height(),
					'width':'100%',
					'z-index':1110
				});
				$('.banner').css('left', (($(window).width()-$('.banner').width())/2)+'px');
			}
			else{
				$('body').removeClass('mini');
				$('.banner').removeAttr('style');
				$('#anchoBanner').removeAttr('style');
				$('#anchoBanner').css('background-color', '#76a1b8');
				if ($(document).scrollTop() >= 150){
					//alert('borrar el style del banner');
					$('.banner').removeAttr('style');
				}
			}
			/*if( scrollTop < 160 ){
				$('body').removeClass('mini');
			}else{
				$('body').addClass('mini');
			}*/
		}
		else{
			$('.mini .botones').removeAttr('style');
			$('.banner').removeAttr('style');
		}
	});
	$("body").trigger('scroll');
}
//});

function refinaAutocomplete() {
	//$.ui.autocomplete.prototype._renderItem = function( ul, item) {
	if ($('.cajaDeBusqInput')){
		function autocompletar( ul, item) {
			return $( "<li></li>" )
				.data( "item.autocomplete", item )
				.append( "<a href='/catalogo/" + item.valor + "'>" + item.label + "</a>" )
				.appendTo( ul );
		};	
	}
}

function changeOrder(newOrder, destinationUrl) {
	var txtToFind = '';
	var aux = window.location.search;
	var paramStr = aux.split('?');
	for (var itemStr=0; itemStr < paramStr.length; itemStr++) {
		if (paramStr[itemStr] != "") {
			var paramList = paramStr[itemStr].split("&");
			for (var item=0; item < paramList.length; item++) {
				var currentItem = paramList[item].split("=");
				if ((currentItem[0].toLowerCase() == "q")  && (currentItem.length > 1)) {
					txtToFind = "q=" + currentItem[1];
				}
			}
		}
	}
   
	if (destinationUrl) {
		window.location = destinationUrl + "?" + txtToFind + "&" + newOrder ;		
	} else {
		if (currentUrl) {
			 // mirar si tiene ?
			if (currentUrl.indexOf('?') != -1) {
				window.location = currentUrl + "&" + txtToFind + "&" + newOrder ;
			} else {
				window.location = currentUrl + "?" + txtToFind + "&" + newOrder;
			}
		}
	}
}


function tryToSelectOrder(orderType) {
	//alert(orderType);
}

function tryToSelectItem(obj, txt) {
	if (obj != null) {
		for (k =0 ; k < obj.length; k++) {
			if (obj[k].value == txt) {
				obj[k].selected = true;
			}
		}
	}
}

function changeHomerLabels(valorLang) {
	$("#labelBuscarHomer_es").addClass("oculto");
	$("#labelIdiomaHomer_es").addClass("oculto");
	$("#labelBuscarHomer_en").addClass("oculto");
	$("#labelIdiomaHomer_en").addClass("oculto");
	$("#labelBuscarHomer_fr").addClass("oculto");
	$("#labelIdiomaHomer_fr").addClass("oculto");
	$("#labelBuscarHomer_it").addClass("oculto");
	$("#labelIdiomaHomer_it").addClass("oculto");
	$("#labelBuscarHomer_el").addClass("oculto");
	$("#labelIdiomaHomer_el").addClass("oculto");
	$("#labelBuscarHomer_sl").addClass("oculto");
	$("#labelIdiomaHomer_sl").addClass("oculto");
	$("#labelBuscarHomer_sr").addClass("oculto");
	$("#labelIdiomaHomer_sr").addClass("oculto");

	$("#labelBuscarHomer_" + valorLang).toggleClass("oculto");
	$("#labelIdiomaHomer_" + valorLang).toggleClass("oculto");
}

$(document).ready(function() {
	pintaMenuBuscador();
	
	var pathname = window.location.pathname;
	if (pathname.indexOf("/portal/")<0){
		refinaAutocomplete();
	}

      //al inicio, quitarlo si tiene valor porque lo autorrellene el navegador de otras visitas	
  if (($("#cajaDeBusqInput").val() != "")) {
    $("#cajaDeBusqInput").css("background", "#FFFFFF");
  }
  
  $("#cajaDeBusqInput").on('blur', function() {
    if (($("#cajaDeBusqInput").val() != "")) {
      $("#cajaDeBusqInput").css("background", "#FFFFFF");
    }
  });
//  var ancho = $(window).width();
//  var alto = $(window).height();
//	alert('Ancho '+ancho+' y de alto '+alto);
	modificaComboBusqueda();
	
	resposiveResultadosDatasets();
	responsiveVisorDataset();
	responsiveScroll();
	responsiveOrganizacionPagina();
	marginTag();
	$(window).resize(function() {
		pintaMenuBuscador();
		modificaComboBusqueda();
		resposiveResultadosDatasets();
		responsiveVisorDataset();
		responsiveScroll();
		responsiveOrganizacionPagina();
		marginTag();
	});
	
	
	
	var config  = {
		disable_search: true
	};

	var fOnChgChosen_changeLangHomer = function onChgChosen_changeLangHomer() {
		var idx = $("#langHOMERFilter")[0].selectedIndex;
		var valorLang = $("#langHOMERFilter")[0][idx].value;

		changeHomerLabels(valorLang);
		return false;
	}
	
	var fOnChgChosen = function onChgChosen() {
		var urlToGo = "/catalogo";
		var idxBBDD = $("#bbddFilter")[0].selectedIndex;
		if (idxBBDD != 0) {
			urlToGo += "/base-datos/" + $("#bbddFilter")[0][idxBBDD].value;
		}
		var idxOrganizacion = $("#organizacionFilter")[0].selectedIndex;
		var idxOrganizacionTipo = $("#organizacionTipoFilter")[0].selectedIndex;
		if (idxOrganizacion != 0) {
			if (idxOrganizacionTipo != 0) {
				urlToGo += "/busqueda-organizacion/" + $("#organizacionFilter")[0][idxOrganizacion].value+"/"+$("#organizacionTipoFilter")[0][idxOrganizacionTipo].value;
			}
			else{
				urlToGo += "/busqueda-organizacion/" + $("#organizacionFilter")[0][idxOrganizacion].value;
			}
			
		}
		
		
		
		
		var idxTema = $("#temaFilter")[0].selectedIndex;
		if (idxTema != 0) {
			urlToGo += "/" + $("#temaFilter")[0][idxTema].value;
		}
		var idxTipo = $("#tipoFilter")[0].selectedIndex;
		if (idxTipo != 0) {
			urlToGo += "/" + $("#tipoFilter")[0][idxTipo].value;
		}
		window.location = urlToGo;
		return false;
	}

	var fOnChgChosen_toggle = function onChgChosen_toggle() {
		var idxTipo = $("#tipoBusquedaFilter")[0].selectedIndex;
		//alert('El tipo de busqueda es '+$("#tipoBusquedaFilter")[0][idxTipo].value);
		if ($("#tipoBusquedaFilter")[0][idxTipo].value == "zonaSPARQL") {
			window.location = "/portal/cliente-sparql";
		} else if ($("#tipoBusquedaFilter")[0][idxTipo].value == "zonaAPI") {
			window.location = "/portal/desarrolladores/api-ckan";
		}
		else if ($("#tipoBusquedaFilter")[0][idxTipo].value == "zonaEtiquetas") {
			tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaEtiquetas");
			window.location = "/catalogo/etiqueta";
		}
		else if($("#tipoBusquedaFilter")[0][idxTipo].value == "zonaBBDD"){
			//modicamos para que las options se queden seleccionadas
			/*$('#tipoBusquedaFilter').find('option:selected').removeAttr('selected');
			$('#tipoBusquedaFilter option[value=zonaBBDD]').attr('selected',true);
			$('#tipoBusquedaFilter_chosen .chosen-single span').text('Base de datos');*/
			tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaBBDD");
			//Vamos a la url correspondiente
			window.location = "/catalogo/base-datos";
		}
		else if ($("#tipoBusquedaFilter")[0][idxTipo].value == "zonaOrganizacionYTipo"){
			tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaOrganizacionYTipo");
			//Vamos a la url correspondiente
			window.location = "/catalogo/busqueda-organizacion";
			
		}
		else {
			var newZone = $("#tipoBusquedaFilter")[0][idxTipo].value;
			if (newZone == "zonaInfoEstadistica") {
				window.location = "/catalogo/informacion-estadistica";
			}
			else if (newZone == "zonaTemaYTipo") {
				window.location = "/catalogo/catalogo.html";
			}
			else if (newZone == "zonaLibre") {
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaLibre");
				window.location = "/catalogo/busqueda-libre";
			}
			else {
				toggleZona($("#tipoBusquedaFilter")[0][idxTipo].value);
			}
		}
		return false;
	}

	var currentComboEstad = null;

	var fOnChgChosen_estadistica_nivel1 = function onChgChosen_estadistica_nivel1() {
		var urlToGo = "/catalogo";

		var idxGrupo = $("#estadisNivel1_Filter")[0].selectedIndex;
		if (idxGrupo != 0) {
			urlToGo += "/tema-estadistico/" + $("#estadisNivel1_Filter")[0][idxGrupo].value;
		}
		window.location = urlToGo;
		return false;
	}

	var fOnChgChosen_estadistica_nivel2 = function onChgChosen_estadistica_nivel2() {
		var urlToGo = "/catalogo";

		if (currentComboEstad) {
			var idxGrupo = $(currentComboEstad)[0].selectedIndex;
			if (idxGrupo != 0) {
				urlToGo += "/tema-estadistico/" + $(currentComboEstad)[0][idxGrupo].value;
			} else {
				var idxGrupoNivel1 = $("#estadisNivel1_Filter")[0].selectedIndex;
				urlToGo += "/tema-estadistico/" + $("#estadisNivel1_Filter")[0][idxGrupoNivel1].value;
			}
		}
		window.location = urlToGo;
		return false;
	}

	var urlListParam  = new Array();
	if (currentUrl) {
		urlListParam = currentUrl.split("/");
		//alert('El urlparam es '+urlListParam.length+ ' y la url actual es '+currentUrl);
		if (urlListParam.length == 3) {
			if (urlListParam[2] == "informacion-estadistica") {
					// o es info estadistica
				toggleZona("zonaInfoEstadistica");
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaInfoEstadistica");
			}
			else if (urlListParam[2] == "base-datos") {
					// o es bbdd
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaBBDD");
			}
			else if (urlListParam[2] == "etiqueta") {
					// o es busqueda de etiquetas
				$('#zonaTemaYTipo').addClass('oculto');
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaEtiquetas");
				//toggleAllZones();
			}
			else if (urlListParam[2] == "busqueda-libre") {
					// o es búsqueda libre
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaLibre");
			}   
			else {
				//alert('entramos por este sitio');
				//alert('urlListParam es '+urlListParam+' y tiene de longitud '+urlListParam.length);
				var parametrosURL  = new Array();
				var urlActual = window.location.toString();
				//alert('La url actual es '+urlActual);
				if (urlActual.indexOf('tags=')>=0) {
					$('div#tipoBusquedaFilter_chosen.chosen-container.chosen-container-single.chosen-container-single-nosearch.chosenImage-container').css('margin-bottom','15px');
					tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaEtiquetas");
					$('#zonaTemaYTipo').addClass('oculto');
					$('.search-form').prepend('<div id="tituloEtiqueta">Datos con la etiqueta "'+gup('tags')+'"</div>')
					//toggleAllZones();
					
				}
				else{
					// O es tema o es tipo
					tryToSelectItem($("#temaFilter")[0], urlListParam[2]);
					tryToSelectItem($("#tipoFilter")[0], urlListParam[2]);
				}

			}
		} else if (urlListParam.length == 4) {
			// O es tema+tipo o es tipo-estadistico/num o es base-datos/tipobbdd
			//Miro aqui
			tryToSelectItem($("#temaFilter")[0], urlListParam[2]);
			var idxTema = $("#temaFilter")[0].selectedIndex;
			if (idxTema != 0) {
					// es tema+tipo
				tryToSelectItem($("#tipoFilter")[0], urlListParam[3]);
			}
			//alert('cargado '+urlListParam[2]+'/'+urlListParam[3]);
			if (urlListParam[2] == "busqueda-libre"){
				var txtBusqueda = utf8_decode(unescape(urlListParam[3]));
				$("#cajaDeBusqInputLibre").val(txtBusqueda);
			}
			
			if (urlListParam[2] == "busqueda-organizacion") {
				// o es búsqueda organizacion
				$('#organizacionTipo').removeClass("oculto");
				tryToSelectItem($("#organizacionFilter")[0],urlListParam[3]);
				
			}

			if (urlListParam[2] == "tema-estadistico") {
				var auxTipoEstad = urlListParam[3].substr(0,2);
				var auxSubTipoEstad = urlListParam[3].substr(0,4);
				tryToSelectItem($("#estadisNivel1_Filter")[0], auxTipoEstad);
				if (auxTipoEstad.length == 2) {

					currentComboEstad = "#estadisNivel2_grp" + auxTipoEstad + "_Filter";
					var subnivelItem = $(currentComboEstad);
					if (subnivelItem) {
						tryToSelectItem(subnivelItem[0], auxSubTipoEstad);
						$(currentComboEstad + "Div").removeClass("oculto");
						subnivelItem.chosen(config).change(fOnChgChosen_estadistica_nivel2);
					}
				}
			}
			else if (urlListParam[2] == "base-datos") {
				tryToSelectItem($("#bbddFilter")[0], urlListParam[3]);
			}
			
		}else if ((urlListParam.length == 5) && (urlListParam[2] == "busqueda-organizacion")) {
			//Entramos en la busqueda por organizacion t por tipo de recursos
			$('#organizacionTipo').removeClass("oculto");
			tryToSelectItem($("#organizacionFilter")[0],urlListParam[3]);
			//alert ('aki es donde tiene que estar lo del tipo '+ urlListParam[4]);
			tryToSelectItem($("#organizacionTipoFilter")[0],urlListParam[4]);
		}
		

		if (urlListParam.length >= 3) {
			if (urlListParam[2] != "informacion-estadistica") {
				activateZoneTipoBusqueda(urlListParam[2]);
			}
			else if (urlListParam[2] != "base-datos") {
				activateZoneTipoBusqueda(urlListParam[2]);
			}
			else if (urlListParam[2] != "busqueda-libre") {
				activateZoneTipoBusqueda(urlListParam[2]);
			}
			if (urlListParam[2] == "etiqueta") {
					// o es busqueda de etiquetas
				//$('#zonaTemaYTipo').addClass('oculto');
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaEtiquetas");
				toggleAllZones();
			}
			
			if ((urlListParam.length == 5) && (urlListParam[2] == "busqueda-organizacion")) {
				//Entramos en la busqueda por organizacion t por tipo de recursos
				
				$('#organizacionTipo').removeClass("oculto");
				tryToSelectItem($("#organizacionFilter")[0],urlListParam[3]);
				//alert ('aki es donde tiene que estar lo del tipo '+ urlListParam[4]);
				tryToSelectItem($("#organizacionTipoFilter")[0],urlListParam[4]);
			}
			
			
			
			var parametrosURL  = new Array();
			var urlActual = window.location.toString();
			if (urlActual.indexOf('tags=')>=0) {
				
				$('div#tipoBusquedaFilter_chosen.chosen-container.chosen-container-single.chosen-container-single-nosearch.chosenImage-container').css('margin-bottom','15px');
				tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaEtiquetas");
				$('#zonaTemaYTipo').addClass('oculto');
				//toggleAllZones();
			}
			
			
		}
		else {
			tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaTemaYTipo");
			toggleZona("zonaTemaYTipo");
		}
	} else {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaTemaYTipo");
		toggleZona("zonaTemaYTipo");
	}

	disEnableAllItemsForm(false);

	if ($("#temaFilter").length > 0){
		$("#temaFilter").chosen(config).change(fOnChgChosen);
	}
	if ($("#tipoFilter").length > 0){
		$("#tipoFilter").chosen(config).change(fOnChgChosen);
	}
	if ($("#bbddFilter").length > 0){
		$("#bbddFilter").chosen(config).change(fOnChgChosen);
	}
	

//	$("#tipoBusquedaFilter").chosenImage(config).change(fOnChgChosen_toggle);
	if ($("#tipoBusquedaFilter").length > 0){
		$("#tipoBusquedaFilter").chosen(config).chosenImage().change(fOnChgChosen_toggle);
	}

	if ($("#langHOMERFilter").length > 0){
		$("#langHOMERFilter").chosen(config).change(fOnChgChosen_changeLangHomer);
	}

	if ($("#estadisNivel1_Filter").length > 0){
		$("#estadisNivel1_Filter").chosen(config).change(fOnChgChosen_estadistica_nivel1);
	}

	if ($("#organizacionTipoFilter").length > 0){
		$("#organizacionTipoFilter").chosen(config).change(fOnChgChosen);
	}
	
	if ($("#organizacionFilter").length > 0){
		
		
		$("#organizacionFilter").chosen(config).change(fOnChgChosen);
		//Si se cambia "reseteamos" el filtro para que no salga
		if ($('#organizacionFilter option:selected').val() != ""){
			tryToSelectItem($("#organizacionTipoFilter")[0],"");
		}
	}
	
	

   $('#txtHOMER').keypress(function(event) {
        if (event.keyCode == 13) {
            submitHomer();
        }
    });

   $('#cajaDeBusqInputLibre').keypress(function(event) {
        if (event.keyCode == 13) {
            submitTxtQuery();
        }
    });

//		if (window.location.href.indexOf("catalogo")>=0){
			$( "#cajaDeBusqInput" ).autocomplete({
				source:function(request, response) {
					$.ajax({
							url: "/catalogo/api/2/util/dataset/autocomplete?incomplete=%" + $("#cajaDeBusqInput").val() + "%",
						dataType: "jsonp",
						success: function (data) {
						response($.map(data.ResultSet.Result, 
							function(item)	{
								return {
									label: item.title,
									valor: item.name,
									value: item.title
								};
							}
						));
						}			
						    })
					 },
				minLength: 1,
				open: function(event, ui) {
							$(this).autocomplete("widget").css({
								"width": 425
							});
						},
				select: function( event, item) {
					$("#cajaBusqBanner").attr("action",  "/catalogo/" + item.item.valor);
					$("#cajaDeBusqInput").val("");
					$("#cajaBusqBanner").submit();
				}
			});
			initializeDashboard();
			initializeEditor();
			loadComboboxesVistas();
			
			
			
//		}
    




    if (document.getElementById("zonaVentanaDatosDescargados1")) {
	$.ajax({
			url: "/catalogo/api/mostDownloadedDataset",
			dataType: "jsonp",
			success: function (data) {
				var htmlCode = '';
				for (var ii = 0; ii < 3; ii++) {
					htmlCode += '<div><a href="/catalogo/' + (data[ii].name) + '" title="' + (data[ii].title) + '">' + (data[ii].title) + '</a></div>';
					if (ii != 2) {
						htmlCode += '<div class="separadorVentana"></div>';
					}
				}
				$('#zonaVentanaDatosDescargados1').html(htmlCode);
			}
		     });
    }

    if (document.getElementById("zonaVentanaDatosRecientes1")) {
	$.ajax({
			url: "/catalogo/api/mostRecentDataset",
			dataType: "jsonp",
			success: function (data) {
				var htmlCode = '';
				for (var ii = 0; ii < 3; ii++) {
					htmlCode += '<div><a href="/catalogo/' + (data[ii].name) + '" title="' + (data[ii].title) + '">' + (data[ii].title) + '</a></div>';
					if (ii != 2) {
						htmlCode += '<div class="separadorVentana"></div>';
					}
				}
				$('#zonaVentanaDatosRecientes1').html(htmlCode);
			}
		     });
    }

    if (document.getElementById("numDatasets")) {
//	$.ajax({
//			url: "/catalogo/api/getDataCount",
//			dataType: "jsonp",
//			success: function (data) {
//				var htmlCodeDatasets = getContadorHTML(data[0].datasetCount);
//				var htmlCodeRecursos = getContadorHTML(data[0].resourceCount);
//				$('#numDatasets').html(htmlCodeDatasets);
//				$('#numRecursos').html(htmlCodeRecursos);
//			},
//			error: function (data) {
//				var htmlCodeDatasets = getContadorHTML(1709);
//				var htmlCodeRecursos = getContadorHTML(2724);
//				$('#numDatasets').html(htmlCodeDatasets);
//				$('#numRecursos').html(htmlCodeRecursos);
//			}
//	   });
			var htmlCodeDatasets =getContadorHTML(datasetCount);
			var htmlCodeRecursos = getContadorHTML(resourceCount);
			$('#numDatasets').html(htmlCodeDatasets);
			$('#numRecursos').html(htmlCodeRecursos);
    }

	if ($("#homerResults").html() != null) {
		doQueryHomer();
	}
	
	marginTag();
	
});

function activateZoneTipoBusqueda(txtParam) {
	var currentUrl = window.location.toString();
	var queriedTxt = "";

	urlListParamPrev = currentUrl.split("?");
	
	if (urlListParamPrev.length > 1) {
		urlListParam = urlListParamPrev[1].split("&");

		for (var i = 0; i < urlListParam.length; i++) {
			var keyValue = urlListParam[i].split("=");
			switch (keyValue[0]) {
				case 'q': (keyValue[1] ? queriedTxt = decodeURI(decodeURI(keyValue[1])).replace(/\+/g, " ") : j=0); break;
			}
		}
	}

	if (txtParam == "searchHOMER") {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaHOMER");
		toggleZona("zonaHOMER");
	} else if (txtParam == "tema-estadistico") {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaInfoEstadistica");
		toggleZona("zonaInfoEstadistica");
	}
	else if (txtParam == "informacion-estadistica") {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaInfoEstadistica");
		toggleZona("zonaInfoEstadistica");
	}
	else if (txtParam == "busqueda-organizacion") {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaOrganizacionYTipo");
		toggleZona("zonaOrganizacionYTipo");
//		urlListParam = currentUrl.split("/");
//		
//		if (urlListParam.length==7){
//			tryToSelectItem($("#organizacionTipoFilter")[0], urlListParam[6]);
//		}
	}
	else if (txtParam == "base-datos") {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaBBDD");
		toggleZona("zonaBBDD");
		
		
		urlListParam = currentUrl.split("/");
		if (urlListParam.length==6){
			tryToSelectItem($("#bbddFilter")[0], urlListParam[5]);
		}
	}
	else if (txtParam == "busqueda-libre") {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaLibre");
		toggleZona("zonaLibre");
	}
	else if (queriedTxt != '') {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaLibre");
		toggleZona("zonaLibre");
		$("#cajaDeBusqInputLibre").val(queriedTxt);
	} else {
		tryToSelectItem($("#tipoBusquedaFilter")[0], "zonaTemaYTipo");
		toggleZona("zonaTemaYTipo");
	}
}

function toggleAllZones() {
	$("#zonaTemaYTipo").addClass("oculto");
	$("#zonaInfoEstadistica").addClass("oculto");
	$("#zonaLibre").addClass("oculto");
	$("#zonaHOMER").addClass("oculto");
	$("#zonaBBDD").addClass("oculto");
	$("#zonaOrganizacionYTipo").addClass("oculto");
}

function toggleZona(id) {
	toggleAllZones();
	$("#" + id).toggleClass("oculto");
/*
	if (id == "zonaHOMER") {
		$("#logoHomerCabecera").removeClass("oculto");
	} else {
		$("#logoHomerCabecera").addClass("oculto");
	}*/
}

function getContadorDigit(number) {
	var htmlCode = '';
	if ((number >=0) && (number <=9)) {
		htmlCode = '<img src="/public/i/contador/' + number + '.png" alt="' + number + '">';
	}
	return htmlCode;
}

function getContadorHTML(number) {
	var htmlCode = '';
	var numDigitos = 0;
	var aux = number;
	while (aux > 9) {
		htmlCode = getContadorDigit(aux % 10) + htmlCode;
		aux = Math.floor(aux /10);
		numDigitos++;
	}
	htmlCode = getContadorDigit(aux) + htmlCode;
	numDigitos++;
	
	for (var j = numDigitos; j < 8; j++) {
		htmlCode = '<img src="/public/i/contador/0_off.png" alt="0">' + htmlCode;
	}
	
	return htmlCode;
}

function submitHomer() {
	$('form').attr('action', '/catalogo/searchHOMER');
	submitQuery();
}

function submitTxtQuery() {
	submitQuery();
}

function disEnableAllItemsForm(disEnab) {
  $('div.oculto > input').attr("disabled",disEnab);
  $('div.oculto > select').attr("disabled",disEnab);
  $('div.oculto > div > input').attr("disabled",disEnab);
  $('div.oculto > div > select').attr("disabled",disEnab);
  $('div.oculto > div > ul > li > input').attr("disabled",disEnab);
  $('div.oculto > div > ul > li > select').attr("disabled",disEnab);
  $('#tipoBusquedaFilter').attr("disabled",disEnab);
  $('form > select:hidden').attr("disabled",disEnab);
  
  if ($("#autocomplete_eurovoc")){
    $('#autocomplete_eurovoc').attr("disabled",disEnab);
  }
}

function submitQuery() {
	disEnableAllItemsForm(true);
	if (document.getElementById("tipoBusquedaFilter").value == "zonaHOMER"){
		$("#searchFormId").submit();
	}
	else{
		if (document.getElementsByName("q").length==1){
			window.location = '/catalogo/busqueda-libre/'+document.getElementsByName("q")[0].value;
		}
		else{
			window.location = '/catalogo/busqueda-libre/'+document.getElementsByName("q")[1].value;
		}
	}
	return false;
}


function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}

function utf8_decode(str_data) {
  //  discuss at: http://phpjs.org/functions/utf8_decode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  //    input by: Aman Gupta
  //    input by: Brett Zamir (http://brett-zamir.me)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Norman "zEh" Fuchs
  // bugfixed by: hitwork
  // bugfixed by: Onno Marsman
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: kirilloid
  //   example 1: utf8_decode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  var tmp_arr = [],
    i = 0,
    ac = 0,
    c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0;

  str_data += '';

  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);
    if (c1 <= 191) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 <= 223) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else if (c1 <= 239) {
      // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      c4 = str_data.charCodeAt(i + 3);
      c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
      c1 -= 0x10000;
      tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
      tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
      i += 4;
    }
  }

  return tmp_arr.join('');
}


//Funcion que añade al combo box tipoBusquedaFilter marginbotton 15px cuando la url sea de la busqueda de tag.
function marginTag(){
	var urlListParam  = new Array();
	var currentUrl = window.location.toString();
	if (currentUrl) {
		urlListParam = currentUrl.split("?");
		if ((urlListParam.length == 2) && (urlListParam[1].indexOf('tags')>=0)){
			$('div#tipoBusquedaFilter_chosen.chosen-container.chosen-container-single.chosen-container-single-nosearch.chosenImage-container').css('margin-bottom','15px');
		}
	}
}

//http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
//http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}


//Funcion que devuelve un parametro de la url
//http://www.anieto2k.com/2006/08/17/coge-los-parametros-de-tu-url-con-javascript/
function gup( name ){
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp ( regexS );
	var tmpURL = window.location.href;
	var results = regex.exec( tmpURL );
	if( results == null )
		return "";
	else{
		//var devolver = utf8_decode(unescape(results[1]));
		//devolver = replaceAll(devolver, '+', ' ');
		//[M] start
		var devolver = decodeURIComponent(decodeURIComponent(replaceAll(results[1], '+', ' ')));
		//[M] ends
		return devolver;
	}
}


// cookies function from http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}


function isEmpty(value){
  return (value == null || value === '');
}
//Esta funcion pinta el menu de buscador según si esta usuario logueado o no
function pintaMenuBuscador(){
	var login=getCookie('auth_tkt');
	//Borramos el menu para pintarlo según el resultado de la cookien que contiene si estamos logueados
	$(".bannerBuscador").empty();
	if (isEmpty(login)){
		//Pintamos el menu para loguearse
		$(".bannerBuscador").append('<form id="cajaBusqBanner" action="/catalogo" method="get"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input id="cajaDeBusqInput" name="q" value="" class="search anchoSearchBanner cajaDeBusqInput ui-autocomplete-input" type="text" autocomplete="off"><button class="btn-search" type="submit">Buscar</button><a href="/catalogo/user/login" title="Iniciar Sesión"><div class="btn-login"></div></form>');
	}
	else{
		//Pintamos el menu cuando estamos logueados
		$(".bannerBuscador").append('<form id="cajaBusqBanner" action="/catalogo" method="get"><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span><input id="cajaDeBusqInput" name="q" value="" class="search anchoSearchBanner cajaDeBusqInput ui-autocomplete-input" type="text" autocomplete="off"><a href="/catalogo/pizarra" title="Pizarra de administración"><div class="btn-dashboard"></div></a><a href="/catalogo/user/_logout" title="Salir"><div class="btn-logout"></div></a></form>');
	}
	if ($(window).width()>1024){
		//Este div se usa para que quede centrado
		$('<div id="anchoBanner" style="background-color: #76a1b8;"></div>').insertBefore('.banner');
		$('.banner').appendTo('#anchoBanner');
		//Borramos los #anchoBanner internos que nos guarrean el codigo si andamos agrandando o empequeñeciendo la ventana
		$('#anchoBanner #anchoBanner').remove();
	}
}


//Función que sirve para redimensionar el segundo combobox en la búsqueda de estadística
function redimensionaComboEstadistica(){
	if ($('select#estadisNivel1_Filter').val()!=null){
		$('select#estadisNivel1_Filter').on('change',function(){
			var filtro = $(this).val();;
			var selector = "#estadisNivel2_grp"+filtro+"_Filter_chosen";
			if ($(window).width()<840) {
				var ancho = $('.tablaResultadosDataset').width();
				$(selector).css('width', ancho+'px');
			}
			else{
				$(selector).css('width', '180px');
			}
		});
	}
}


//Esta función mueve el combobox de búsqueda si es inferior a 840 px
function modificaComboBusqueda(){
	if ($('.chosen-single span:contains("Base de datos")').length){
		//alert('Hacemos grandre el filtro de base de datos');
		//$('.filtro').attr("style","width: 525px !important;");
		//$('.filtro').width(525);
	}
	
	if (($(window).width()<=840) && ($(".searchTypesOptions .d_d ").length)){
		//$(".buscaDatos .module").prepend('<div class="busquedaTipo"><img src="/public/i/buscaDatos/filtradoPor.png" alt="FILTRADO POR" title="Filtrado por" style="height:11px;"></div>');
		$(".buscaDatos .module").prepend('<div class="busquedaTipo"></div>');
		$(".busquedaTipo").css('padding-bottom', '15px');
		$(".busquedaTipo").append($(".searchTypesOptions .d_d "));
		$(".busquedaTipo").append($('.busquedaTipo li select'));
		$(".busquedaTipo").append($('.busquedaTipo li #tipoBusquedaFilter_chosen'));
		$(".busquedaTipo li").remove();
	}
	//else if (($(window).width()>840) && ($(".searchTypesOptions .d_d ").length==0)) {
	else if (($(window).width()>840) && ($(".busquedaTipo").length>0)) {
		location.reload();
	}
	
	//Esto lo uso para cuando tenga que recargar la web
	if (($(window).width()<684) && ($('.filtro img').is(":visible"))){
		$(".busquedaTipo").prepend('<div class="recargando"></div>');
	}
	
	//if ($(window).width()<684) {
	if ($(window).width()<840) {
		$('.filtro img').hide();
		$('.busquedaTipo img').hide();
		//El mismo ancho que la tabla
		var ancho = $('.tablaResultadosDataset').width();
		if (ancho == null){
			ancho = $(window).width()-20;
		}
		$('.busquedaTipo').removeAttr('style');
		$('.busquedaTipo').css('width', ancho+'px');
		$('.chosen-container').css('width', ancho+'px');
		$('.chosen-drop').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('.busquedaTipo');
		$('#tipoBusquedaFilter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#tipoBusquedaFilter');
		$('.filtro').removeAttr('style');
		$('.filtro').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('.filtro');
		$('#temaFilter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#temaFilter');
		$('#tipoFilter').css('width', ancho+'px'); 
		aniadePropertiesParaAlinearInputYSelect('#tipoFilter');
		$('#bbddFilter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#bbddFilter');
		$('#estadisNivel1_Filter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel1_Filter');
		$('#cajaDeBusqInputLibre').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#cajaDeBusqInputLibre');
		$('#cajaDeBusqInputLibre').attr("placeholder", "Término de búsqueda  ");
		$('#txtHOMER').css('width', ancho+'px');
		$('#txtHOMER').css('margin-bottom', '15px');
		$('#txtHOMER').attr("placeholder", "Término de búsqueda en HOMER  ");
		$('#txtHOMER').css('height','20px');
		aniadePropertiesParaAlinearInputYSelect('#txtHOMER');
		$('#langHOMERFilter').css('width', (ancho*85)/100+'px');
		
		$('#organizacionFilter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#organizacionFilter');
		$('#organizacionTipoFilter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#organizacionTipoFilter');
		
		$('#estadisNivel2_grp01_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp02_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp03_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp04_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp05_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp06_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp07_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp08_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp09_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp10_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp11_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp12_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp13_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp14_Filter').css('width', ancho+'px');
		$('#estadisNivel2_grp15_Filter').css('width', ancho+'px');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp01_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp02_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp03_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp04_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp05_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp06_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp07_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp08_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp09_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp10_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp11_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp12_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp13_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp14_Filter');
		aniadePropertiesParaAlinearInputYSelect('#estadisNivel2_grp15_Filter');
		$('img[alt="BUSCAR EN HOMER"]').removeClass('i_i');
		$('img[alt="BUSCAR EN HOMER"]').css('float', 'right');
		$('img[alt="BUSCAR EN HOMER"]').css('margin-top', '-36px');
	}
	if(($(window).width()>=840) && ($('.recargando').length>0 ))  {
		location.reload();
	}
}

//Esta función añade a las properties necesarias para que los input y los combos se vean alineados, selector sera el el selector por ejemplo .filtro
function aniadePropertiesParaAlinearInputYSelect(selector){
	//$(selector).css('padding', '0');
	//$(selector).css('margin', '0');
	$(selector).css('-moz-box-sizing', 'border-box');
	$(selector).css('-webkit-box-sizing', 'border-box');
	$(selector).css('box-sizing', 'border-box');
	//$(selector).css('float', 'right');
}

//Esta función borra la columna según cual sea su ancho
function resposiveResultadosDatasets(){
	
	$(".tablaResultadosDataset th:nth-child(2)").show();
	$(".tablaResultadosDataset td:nth-child(2)").show();
	$(".tablaResultadosDataset th:nth-child(3)").show();
	$(".tablaResultadosDataset td:nth-child(3)").show();
	
	//Borramos la columna de nº de accesos
	if ($(window).width()<800) {
		$(".tablaResultadosDataset th:nth-child(2)").hide();
		$(".tablaResultadosDataset td:nth-child(2)").hide();
		
		//Borramos la fecha
		if ($(window).width()<741) {
			$(".tablaResultadosDataset th:nth-child(3)").hide();
			$(".tablaResultadosDataset td:nth-child(3)").hide();
		}
	}
}


//Esta funcion sirve para hacer responsive o no 
function responsiveVisorDataset(){
	if ($(".previewZone").length>0 ){
		if ($(window).width()<1024) {
			$(".previewZone").hide();
			$('.metadataZone').css('margin','auto');
			$('.resourceZone').css({
				'width': $('.metadataZone').width()+'px',
				'margin-right':'auto',
				'margin-left':'auto',
				'margin-bottom':'10px',
				'margin-top':'10px'
			});
		}
		else{
			$(".previewZone").show();
			$('.metadataZone').removeAttr('style');
			$('.resourceZone').removeAttr('style');
		}
	}
}

//Esta función sirve para hacer responsive el apartado la hoja de una organización
function responsiveOrganizacionPagina(){
	//Comprobamos si estamos en una organizacion para poder hacer responsive
	if (window.location.href.indexOf('opendata.aragon.es/catalogo/organizacion/')>=0){
		if ($(window).width()>1024){
			//Comprobamos si se ha creado el div con id organizacionResponsive (lo usamos para meter el contenido responsive)
			if ($('#organizacionResponsive').length>0){
				$('#organizacionResponsive').hide();
				$('.contenidoDashboard table').show();
			}
			else{ //Aunque se vera
				$('.contenidoDashboard table').show();
			}
		}
		else{
			//Comprobamos si se ha creado el div con id organizacionResponsive (lo usamos para meter el contenido responsive)
			if ($('#organizacionResponsive').length>0){
				$('#organizacionResponsive').show();
				$('.contenidoDashboard table').hide();
			}
			else{ //Si no esta creado el id con el contenido de los datos de la tabla lo creamos
				var table = $('.contenidoDashboard table')[0];
				var key = new Array();
				var value = new Array();
				for (var i = 0, row; row = table.rows[i]; i++) {
					//iterate through rows
					//rows would be accessed using the "row" variable assigned in the for loop
					key.push(row.cells[0].innerHTML);
					value.push(row.cells[1].innerHTML);
				}
				$('<div id="organizacionResponsive"> </div>').insertAfter('.contenidoDashboard table');
				$('.contenidoDashboard table').hide();
				var contenidoOrganizacion="";
				for (var i=0; i <key.length; i++) {
					contenidoOrganizacion += key[i] + '<div style="margin-bottom: 10px;">&nbsp;</div>';
					contenidoOrganizacion += value[i] + "<br>";
				}
				$('#organizacionResponsive').append(contenidoOrganizacion);
			}
		}
	}
}

var alreadyCreatedResource = new Array();
var errorCreating = "";

function initializeDashboard() {
  var numZonesDashboard = 3;
  for (var i = 0; i < numZonesDashboard; i++) {
    $("#dashboardZone" + i).attr('onclick', 'activateDashboardZone("' + i + '");');
  }

  var numZonesEditor = 8;
  for (var i = 0; i < numZonesEditor; i++) {
    $("#editorZone" + i).attr('onclick', 'activateEditorZone("' + i + '");');
  }
  var config = {disable_search: true};
  if ($("#extras__1100__value")) {
    $("#extras__1100__value").chosen(config);
  }
  if ($("#groups__0__id")) {
    $("#groups__0__id").chosen(config);
  }

  var fOnChgChosen_changeResType = function onChgChosen_changeResType() {
    var _value = this[this.selectedIndex].value;
    var idx = this.id.substr("resType".length);
    if (_value == "vista") {
      toggleZoneResource(this.attributes.id.value, "vista");     
    } else if (_value == "file.upload") {
      toggleZoneResource(this.attributes.id.value, "file.upload");
      $("#jfilestyle-" + idx).trigger("click");
    } else {
      toggleZoneResource(this.attributes.id.value, "file");
    }
    return false;
  }

  if (typeof resourceCount != 'undefined') { 
    for (var idx = 0; idx < resourceCount; idx++) {
      if ($( "#resType" + idx )) {
        $( "#resType" + idx ).chosen(config).change(fOnChgChosen_changeResType);
      }
    }
    for (var idx = resourceCount; idx < (resourceCount+10); idx++) {
      if ($( "#resType" + idx )) {
        $( "#resType" + idx ).chosen(config).change(fOnChgChosen_changeResType);
      }
    }
    for (var idx = resourceCount; idx <= (resourceCount + MAX_URL_LIST); idx++) {
      alreadyCreatedResource[idx] = false;
    }

//          $(":file").jfilestyle();
  }

  if (typeof availableOrganizations != 'undefined') { 
    var fOnChgChosen_organizat = function onChgChosen_organizat() {
      for (var i=0; i < availableOrganizations; i++) {
        $("#organization" + i + "_org").addClass("oculto");
      }
      $("#organization" + (this.selectedIndex+1) + "_org").removeClass("oculto");
      return false;
    }
    $( "#owner_org" ).chosen(config).change(fOnChgChosen_organizat);
  }

  $('#textQueryOrgDataset').keypress(function(event) {
        if (event.keyCode == 13) {
            submitTxtQueryOrg();
        }
  });

    // toggle zone
  var currentUrl = window.location.toString();
  var queriedTxt = "";

  urlListParamPrev = currentUrl.split("?");

  if (urlListParamPrev[0].indexOf("/catalogo/pizarra/info-organizacion") != -1) {
    activateDashboardZone(0);
  }
  if (urlListParamPrev[0].indexOf("/catalogo/pizarra/datos") != -1) {
    activateDashboardZone(1);
  }
  if (urlListParamPrev[0].indexOf("/catalogo/pizarra/actividad") != -1) {
    activateDashboardZone(2);
  }
}


var currentOptionDashboardZone = 2;
function activateDashboardZone(newOption) {
  if (newOption != currentOptionDashboardZone) {
    $("#dashboardZone" + currentOptionDashboardZone).removeClass('blockDashboardSelected');
    $("#dashboardZone" + currentOptionDashboardZone).addClass('blockDashboard');
    $("#dashboardZonePage" + currentOptionDashboardZone).fadeOut();

    currentOptionDashboardZone = newOption;
    $("#dashboardZone" + currentOptionDashboardZone).removeClass('blockDashboard');
    $("#dashboardZone" + currentOptionDashboardZone).addClass('blockDashboardSelected');
    $("#dashboardZonePage" + currentOptionDashboardZone).fadeIn();
  }
}

function toggleZoneResource(id, type) {
  $("#vistaDiv_"+id).addClass('oculto');
  if (type=="vista") {
    $("#datos_"+id).addClass('oculto');
    $("#uploadFile_"+id).addClass('oculto');
    $("#vista_"+id).removeClass('oculto');
    resetSelect(id);
  } else if (type=="file.upload") {
    $("#datos_"+id).addClass('oculto');
    $("#uploadFile_"+id).removeClass('oculto');
    $("#vista_"+id).addClass('oculto');
    resetSelect(id);
  } else {
    $("#datos_"+id).removeClass('oculto');
    $("#uploadFile_"+id).addClass('oculto');
    $("#vista_"+id).addClass('oculto');
    resetSelect(id);
  }
}

var currentOptionEditorZone = 0;
function activateEditorZone(newOption) {
  if (newOption != currentOptionEditorZone) {
    $("#editorZone" + currentOptionEditorZone).removeClass('blockEditorSelected');
    $("#editorZone" + currentOptionEditorZone).addClass('blockEditor');
    $("#editorZonePage" + currentOptionEditorZone).fadeOut();

    currentOptionEditorZone = newOption;
    $("#editorZone" + currentOptionEditorZone).removeClass('blockEditor');
    $("#editorZone" + currentOptionEditorZone).addClass('blockEditorSelected');
    $("#editorZonePage" + currentOptionEditorZone).fadeIn();
  }
}

function initializeEditor() {
    // strange way of determining is editing, but it works
  if (document.getElementById("autocomplete_eurovoc")) {

    var f_tab = function () {
        if (window.confirm("Está a punto de salir del editor. Si no ha guardado los cambios realizados, se perderán. Confirme que realmente desea salir.")) {
          return true;
        } else {
          return false;
        }
      }

    $("#tab_organizacion").click(f_tab);
    $("#tab_datos").click(f_tab);
    $("#tab_actividad").click(f_tab);

     /*   $( document ).tooltip({
           track: true,
           content: function(callback) { 
                // original: http://stackoverflow.com/questions/13066909/how-to-break-line-in-jqueryui-tooltip
             callback($(this).prop('title').replace(/\|/g, '<br /><br />')); 
           }
        });*/
    $('.tips').powerTip({
      'followMouse': true
    });

    initializeAutocompletes();

      //maybe does not work on IE <9
    $("#extras__3099__value").on('input',function(e){
      if ($("#extras__3099__value").val() != "") {
        $("#extras__3098__value").prop('checked', true);
      }
    });
  }
}

function activateFileUploadForm() {
    // Activate file form input using jfilestyle
  $('.jfilestyle').each(function () { 
     var $this = $(this),
          options = {
              'buttonText': $this.attr('data-buttonText'),
              'input': $this.attr('data-input') === 'false' ? false : true,
              'icon': $this.attr('data-icon') === 'false' ? false : true,
              'size': $this.attr('data-size'),
              'iconName': $this.attr('data-iconName'),
              'theme': $this.attr('data-theme')
          };

      $this.jfilestyle(options);
  });
}

function initializeAutocompletes() {
  var accentMap = {
    "á": "a",
    "é": "e",
    "í": "i",
    "ó": "o",
    "ú": "u",
    "Á": "A",
    "É": "E",
    "Í": "I",
    "Ó": "O",
    "Ú": "U",
    "ü": "u"
  };
  var normalize = function( term ) {
    var ret = "";
    for ( var i = 0; i < term.length; i++ ) {
      ret += accentMap[ term.charAt(i) ] || term.charAt(i);
    }
    return ret;
  };

  $("#autocomplete_eurovoc" ).keypress(function(event) {
    if (event.keyCode == 13) {
      addTag();
    }      
  });

  $("#autocomplete_eurovoc" ).autocomplete({
      source: function( request, response ) {
        var suggestUrl = "/eurovoc_autocomplete?start=0&rows=1000&wt=json&q=search_text_es:" + $("#autocomplete_eurovoc").val() + "*";
        $.ajax({ dataType: "json",url: suggestUrl}).done(function( data ) {
          var suggests = new Array();
          $.each(data.response.docs, function(index, doc) {
             suggests.push({id: doc.term, label: doc.term, value: doc.term});
          });
          return response(suggests);
        });
      }
  }).data('ui-autocomplete')._renderItem = function( ul, item ) {
        return $( "<li>" ).append("<a>" + item.label + "</a>").appendTo( ul );
  };

  /*if (typeof resourceCount !== 'undefined') { 
    for (var idx = 0; idx < resourceCount; idx++) {
      $( "#mimeTypeRes" + idx ).autocomplete({
        source: formatList,
      }).data('ui-autocomplete')._renderItem = function( ul, item ) {
          return $( "<li>" ).append("<a>" + item.label + "</a>").appendTo( ul );
      };
      $( "#mimeTypeInnerRes" + idx ).autocomplete({
        source: formatList,
      }).data('ui-autocomplete')._renderItem = function( ul, item ) {
          return $( "<li>" ).append("<a>" + item.label + "</a>").appendTo( ul );
      };
    }
  }*/

  $('input:radio[name=typeSpatial]').change(function(event) {
    $( "#spatial_provincia" ).val("");
    $( "#spatial_comarca" ).val("");
    $( "#spatial_municipio" ).val("");
    $( "#spatial_otro" ).val("");
  })

  $( "#spatial_provincia" ).keypress(function(event) {
    $('input:radio[name=typeSpatial]')[1].checked = true;
  });

  $( "#spatial_provincia" ).autocomplete({
      source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( prov, function( value ) {
          value = value.label || value.value || value;
          return matcher.test( value ) || matcher.test( normalize( value ) );
        }) );
      },
      change: function( event, ui ) {
        var valid = false;
        if ( !ui.item ) {
          var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" );
          for (value in prov) {
            if (matcher.test( prov[value] )) {
              valid = true;
              $(this).val(prov[value]);
              break;
            }
          }
          if (!valid) {
            // remove invalid value, as it didn't match anything
            $(this).val("");
            //input.data("autocomplete").term = "";
            return false;
          }
        }
      }
  }).data('ui-autocomplete')._renderItem = function( ul, item ) {
       return $( "<li>" ).append("<a>" + item.label + "</a>").appendTo( ul );
  };

  $( "#spatial_comarca" ).keypress(function(event) {
    $('input:radio[name=typeSpatial]')[2].checked = true;
  });
  $( "#spatial_comarca" ).autocomplete({
      source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( comarca, function( value ) {
          value = value.label || value.value || value;
          return matcher.test( value ) || matcher.test( normalize( value ) );
        }).slice(0, 10) );
      },
      change: function( event, ui ) {
        var valid = false;
        if ( !ui.item ) {
          var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" );
          for (value in comarca) {
            if (matcher.test( comarca[value] )) {
              valid = true;
              $(this).val(comarca[value]);
              break;
            }
          }
          if (!valid) {
            // remove invalid value, as it didn't match anything
            $(this).val("");
            //input.data("autocomplete").term = "";
            return false;
          }
        }
      }
  }).data('ui-autocomplete')._renderItem = function( ul, item ) {
        return $( "<li>" ).append("<a>" + item.label + "</a>").appendTo( ul );
  };

  $( "#spatial_municipio" ).keypress(function(event) {
    $('input:radio[name=typeSpatial]')[3].checked = true;
  });
  $( "#spatial_municipio" ).autocomplete({
      source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( munis, function( value ) {
          value = value.label || value.value || value;
          return matcher.test( value ) || matcher.test( normalize( value ) );
        }).slice(0, 10) );
      },
      change: function( event, ui ) {
        var valid = false;
        if ( !ui.item ) {
          var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex($(this).val()) + "$", "i" );
          for (value in munis) {
            if (matcher.test( munis[value] )) {
              valid = true;
              $(this).val(munis[value]);
              break;
            }
          }
          if (!valid) {
            // remove invalid value, as it didn't match anything
            $(this).val("");
            //input.data("autocomplete").term = "";
            return false;
          }
        }
      }
  }).data('ui-autocomplete')._renderItem = function( ul, item ) {
        return $( "<li>" ).append("<a>" + item.label + "</a>").appendTo( ul );
  };

  $( "#spatial_otro" ).keypress(function(event) {
    $('input:radio[name=typeSpatial]')[4].checked = true;
   /* $("#spatial_provincia").val("");
    $("#spatial_comarca").val("");
    $("#spatial_municipio").val("");*/
  });

  var listUrl = ['extras__4010', 'extras__4020'];
  for (var id in listUrl) {
    for (var idx = 0; idx < MAX_URL_LIST; idx++) {
      $("#" + listUrl[id] + idx + "__value").keypress(function(event) {
        if (event.keyCode == 13) {
          addURL_keypress(this.id);
        }
      });
    }
  }
  var config  = {
    disable_search: false,
    default_single_text: 'Hola'
  };

  for (var idx = 0; idx < (resourceCount+10); idx++) {
    if ($("#mimetypeSelect" + idx )) {
      $("#mimetypeSelect" + idx ).chosen(config).default_single_text= 'Hola';
    }
    if ($("#mimetype_innerSelect" + idx )) {
      $("#mimetype_innerSelect" + idx ).chosen(config).default_single_text= 'Hola';
    }
  }
}

function checkMetadataEditor() {
    // return true => send, return false => cancel form action

  var previousProblem = false;
  errorCreating = "Problemas creando el conjunto de datos. ";

    // check mandatory fields
  if (! checkMandatoryFields()) {
    previousProblem = true;
  }

    // check spatial
  if (! checkSpatial()) {
    previousProblem = true;
  }

    // complete values depending on radio button selected

    // check temporal
  if (! checkTemporal('TemporalFrom', 'extras__1101__value', 'inicial')) {
    previousProblem = true;
  }
  if (! checkTemporal('TemporalUntil', 'extras__1102__value', 'final')) {
    previousProblem = true;
  }

  if (! previousProblem) {
      //everything is ok
    disEnableTemporalItems(true);
    return true;
  } else {
    alert(errorCreating);
  }
  return false;
}

function hideBlankElements() {
  var list = ['extras__4000', 'extras__4001', 'extras__4002'];
  for (var id in listUrl) {
    if ($("#" + listUrl[id] + "__value").val() == "") {
      $("#" + listUrl[id] + "__block").addClass("oculto");
    }
  }
  var listUrl = ['extras__4010', 'extras__4020'];
  for (var id in listUrl) {
    for (var idx = 0; idx < MAX_URL_LIST; idx++) {
      if ($("#" + listUrl[id] + idx + "__value").val() == "") {
        $("#" + listUrl[id] + idx + "__block").addClass("oculto");
      }
    }
  }
}

function addTag() {
  if ($("#autocomplete_eurovoc").val() != '') {
    var _previousValue = '';
    if ($("#field-tags").val() != "") {
      _previousValue = $("#field-tags").val() + ',';
    }

    $("#field-tags").val(_previousValue + $("#autocomplete_eurovoc").val());
    $("#field-tags").trigger("change");
    $("#autocomplete_eurovoc").val('');
  }
}

function checkTemporal(id, idHidden, title) {
  var isoDate = '';
  var _year = $('#' + id + '_year').val();
  var _month = $('#' + id + '_month').val();
  var _day = $('#' + id + '_day').val();
  var _hour = $('#' + id + '_hour').val();
  var _min = $('#' + id + '_min').val();
  var _sec = $('#' + id + '_sec').val();

  if (_month.length == 1) { 
    _month = '0' + _month;
  }
  if (_day.length == 1) { 
    _day = '0' + _day;
  }
  if (_hour.length == 1) { 
    _hour = '0' + _hour;
  }
  if (_min.length == 1) { 
    _min = '0' + _min;
  }
  if (_sec.length == 1) { 
    _sec = '0' + _sec;
  }

  if (_year != '') {
    isoDate = _year;
    if (_month != '') {
      isoDate += '-' + _month;
      if (_day != '') {
        isoDate += '-' + _day;
        if (_hour != '') {
          isoDate += 'T' + _hour;
          if (_min != '') {
            isoDate += ':' + _min;
            if (_sec != '') {
              isoDate += ':' + _sec;
            }
          }
        }
      }
    }
  }
  if (isoDate != '') {
      // añadir timezone offset
    if (moment(isoDate).isValid()) {
      if (isoDate.indexOf("T") != -1) {
        var tzOffset = new Date(isoDate).getTimezoneOffset();
          // tested for Spain (+1/+2), improve for other locations
        if (tzOffset == 0) {
          isoDate = isoDate + 'Z';
        } else if (tzOffset < 0) {
          isoDate = isoDate + '+0' + Math.abs(tzOffset/60) + ':00';
        } else {
            // here for Spain => -1/-2 depending on date
          isoDate = isoDate + '-0' + Math.abs(tzOffset/60) + ':00';
        }
      }
      $('#' + idHidden).val(isoDate);
      return true;
    } else {
      errorCreating += "La fecha " + title + " no es válida. ";
      return false;
    }
  } else {
    $('#' + idHidden).val(isoDate);
    return true;
  }
}

function disEnableTemporalItems(value) {
  $("input:radio[name=typeSpatial]").attr("disabled", value);
  disEnableTemporal('TemporalFrom', 'extras__1101__value', value);
  disEnableTemporal('TemporalUntil', 'extras__1102__value', value);
}

function disEnableTemporal(id, idHidden, value) {
  $('#' + id + '_day').attr("disabled", value);
  $('#' + id + '_month').attr("disabled", value);
  $('#' + id + '_year').attr("disabled", value);
  $('#' + id + '_hour').attr("disabled", value);
  $('#' + id + '_min').attr("disabled", value);
  $('#' + id + '_sec').attr("disabled", value);
  $('#' + idHidden).attr("disabled", ! value);
}

  // return true => ok, return false => Problems
function checkSpatial() {
  var value = $("input:radio[name=typeSpatial]:checked").val();

  if (value == "Aragón") {
    $( "#extras__2000__value" ).val(value);
    $( "#extras__2001__value" ).val("Aragón");
    $( "#extras__2002__value" ).val( "http://opendata.aragon.es/recurso/territorio/ComunidadAutonoma/Aragón" );
    $( "#extras__2003__value" ).val( "Aragón" );
  } else if (value == "Provincia") {
    var item = $("#spatial_provincia").val();
    if (item != '') {
      $( "#extras__2000__value" ).val(value);
      $( "#extras__2001__value" ).val( item );
      $( "#extras__2002__value" ).val( "http://opendata.aragon.es/recurso/territorio/Provincia/" + item );
      $( "#extras__2003__value" ).val( item );
    } else {
      errorCreating += 'Incluya un valor válido de provincia en "Cobertura geográfica". ';
      return false;
    }
  } else if (value == "Comarca") {
    var item = $("#spatial_comarca").val();
    if (item != '') {
      if (aragopCom[item]) {
        $( "#extras__2000__value" ).val(value);
        $( "#extras__2001__value" ).val( item );
        $( "#extras__2002__value" ).val( "http://opendata.aragon.es/recurso/territorio/Comarca/" + aragopCom[item] );
        $( "#extras__2003__value" ).val( aragopCom[item] );
      } else {
        errorCreating += 'Incluya un valor válido de comarca en "Cobertura geográfica". ';
        return false;
      }
    } else {
      errorCreating += 'Incluya un valor válido de comarca en "Cobertura geográfica". ';
      return false;
    }
  } else if (value == "Municipio") {
    var item = $("#spatial_municipio").val();
    if (item != '') {
      if (aragopMun[item]) {
        $( "#extras__2000__value" ).val(value);
        $( "#extras__2001__value" ).val( item );
        $( "#extras__2002__value" ).val( "http://opendata.aragon.es/recurso/territorio/Municipio/" + aragopMun[item] );
        $( "#extras__2003__value" ).val( aragopMun[item] );
      } else {
        errorCreating += 'Incluya un valor válido de municipio en "Cobertura geográfica". ';
        return false;
      }
    } else {
      errorCreating += 'Incluya un valor válido de municipio en "Cobertura geográfica". ';
      return false;
    }
  } else if (value == "Otro") {
    var item = $("#spatial_otro").val();
    if (item != '') {
      $( "#extras__2000__value" ).val(value);
      $( "#extras__2001__value" ).val( item );
      $( "#extras__2002__value" ).val( "" );
      $( "#extras__2003__value" ).val( item );
    } else {
      errorCreating += 'Incluya un valor para otro en "Cobertura geográfica". ';
      return false;
    }
  }
  return true;
}

var MAX_URL_LIST = 99;

function removeURL(id, idx) {
  var idxToHidden = parseInt(idx);
    // si borran uno intermedio => desplazar todos un lugar antes

  var mustContinue = false;

  if (idxToHidden < MAX_URL_LIST) {
    if ($("#" + id + (idxToHidden+1) + "__value").val() != "") {
      mustContinue = true;
    }
  }

  while ( mustContinue ) {
    $("#" + id + idxToHidden + "__value").val($("#" + id + (idxToHidden+1) + "__value").val());
    idxToHidden++;
    mustContinue = false;

    if (idxToHidden < MAX_URL_LIST) {
      if ($("#" + id + (idxToHidden+1) + "__value").val() != "") {
        mustContinue = true;
      }
    }
  }

  $("#" + id + idxToHidden + "__value").val('');
  if (idxToHidden != 0) {
    $("#" + id + idxToHidden + "__block").addClass("oculto");
  }
}

function addURL_keypress(currentId) {
    // currentId == 'extras__40X0X__value
    // extract id
  var id = parseInt(currentId.substr(8).substr(0,5));

  if ((id % (MAX_URL_LIST+1)) < MAX_URL_LIST) {
    if ($("#" + currentId.substr(0,8) + (id + 1) + "__value").val() == "") {
      $("#" + currentId.substr(0,8) + (id + 1) + "__block").removeClass("oculto");
      $("#" + currentId.substr(0,8) + (id + 1) + "__value").focus();
    }
  }
}

function addURL(id) {
  var limit = true;

  for (var idx = 0; idx <= MAX_URL_LIST; idx++) {
    if ($("#" + id + idx + "__value").val() == "") {
      $("#" + id + idx + "__block").removeClass("oculto");
      $("#" + id + idx + "__value").focus();
      limit = false;
      break;
    }
  }
  if (limit) {
    alert("No es posible incluir más valores para este campo");
  }
}

function disEnableCheckboxes(value) {
  $(':checkbox:not(:checked)').each(function() {
    var auxId = this.id.replace(/__value/g, "__key");
    if ("#" + auxId) {
      $('#' + auxId).attr("disabled", value);
    }
  });
}

function removeExistingResource(url, idx) {
  var answer = window.confirm("¿Está seguro que desea borrar el recurso?");
  if (answer) {
    showPleaseWait();
    $.ajax({
      async: false,
      type: 'POST',
      url: url,
      success: function (data) {
                 alert("Recurso borrado correctamente");
                 $("#existing_resource" + idx).addClass("oculto");
                 changedResource[idx] = false;
                 alreadyCreatedResource[idx] = false;
                 hideModalDialog();
               },
      error: function (data) {
               alert("Problemas borrado el recurso. Envíe un email a opendata@aragon.es");
               hideModalDialog();
             }
    });
  }
}


function isBlankResource(idx) {
  if ($("#nameRes" + idx).val() == "") {
//    if ($("#mimeTypeRes" + idx).val() == "") {
  //    if ($("#mimeTypeInnerRes" + idx).val() == "") {
        if ($("#resType"+idx)[0].selectedIndex == 0) {
          if ($("#urlText_resType" + idx).val() == "") {
            return true;
          }
        } else {
          return true;
        }
    //  }
   // }
  }
  return false;
}

function removeNewResource(idx) {
  var idxToHidden = parseInt(idx);
    // si borran uno intermedio => desplazar todos un lugar antes

  var mustContinue = false;

  if (idxToHidden < MAX_URL_LIST) {
    if (! isBlankResource(idxToHidden+1)) {
      mustContinue = true;
    }
  }

  while ( mustContinue ) {
    shiftResource(idxToHidden);
    idxToHidden++;
    mustContinue = false;

    if (idxToHidden < MAX_URL_LIST) {
      if (! isBlankResource(idxToHidden+1)) {
        mustContinue = true;
      }
    }
  }

  clearResource(idxToHidden);
}

function shiftResource(idx) {
  $("#nameRes" + idx).val($("#nameRes" + (idx+1)).val());
//  $("#mimeTypeRes" + idx).val($("#mimeTypeRes" + (idx+1)).val());
  //$("#mimeTypeInnerRes" + idx).val($("#mimeTypeInnerRes" + (idx+1)).val());
  $("#resType"+idx)[0].selectedIndex = $("#resType"+(idx+1))[0].selectedIndex;
  $("#urlText_resType" + idx).val($("#urlText_resType" + (idx+1)).val());
  // TODO: ver lo que hay que borrar de la parte de vistas o file upload
  // TODO: Actualizar combos chosen
}

function clearResource(idx) {
  $("#new_resource" + idx).addClass("oculto");

  $("#nameRes" + idx).val("");
 // $("#mimeTypeRes" + idx).val("");
  //$("#mimeTypeInnerRes" + idx).val("");
  $("#resType"+idx)[0].selectedIndex = 0;
  $("#urlText_resType" + idx).val("");
  // TODO: ver lo que hay que borrar de la parte de vistas o file upload
  // TODO: Actualizar combos chosen
}

function addResource() {
  activateFileUploadForm();

  var limit = true;
  for (var idx = resourceCount; idx <= (resourceCount + MAX_URL_LIST); idx++) {
    if (isBlankResource(idx)) {
      $("#new_resource" + idx).removeClass("oculto");
      limit = false;
      break;
    }
  }
  if (limit) {
    alert("No es posible incluir más valores para este campo");
  }
}
function changesOnResource(idx) {
  changedResource[idx] = true;
}

function correctUrl(idx) {
  var item = document.getElementById("resType" + idx)
  var _value = item[item.selectedIndex].value;
  if (_value == "vista") {
    var vista = document.getElementById("vistas_value_resType"+idx).value;
    $("#vista_id_resType" + idx).val(vista);
      // don't care next URL because will be modified at controller
      // and it isn't ok
    $("#url_resType" + idx).val("http://" + document.location.host + "/catalogo/dataset/showVista?id=" + vista);
  } else if (_value == "file.upload") {
    $("#url_resType" + idx).val($("#uploadUrl_resType" + idx).val());
    $("#vista_id_resType" + idx).attr("disabled",true);
    $("#uploadUrl_resType" + idx).attr("disabled",true);
  } else {
    if ($("#urlText_resType" + idx).val() != "") {
      $("#url_resType" + idx).val($("#urlText_resType" + idx).val());
      $("#vista_id_resType" + idx).attr("disabled",true);
      $("#urlText_resType" + idx).attr("disabled",true);
    } else {
      return false;
    }
  }
  return true;
}

function updateFormat(idx) {
  var item = document.getElementById("mimetypeSelect" + idx)
  var _value = item[item.selectedIndex].value;
  var item_inner = document.getElementById("mimetype_innerSelect" + idx)
  var _value_inner = item_inner[item_inner.selectedIndex].value;
  if (_value_inner != '') {
    $("#format" + idx).val(item_inner[item_inner.selectedIndex].label);
  } else {
    $("#format" + idx).val(item[item.selectedIndex].label);
  }
}

function updateResources() {
  for (var idx = 0; idx < resourceCount; idx++) {
    if (changedResource[idx]) {

    var item = document.getElementById("resType" + idx)
    var _value = item[item.selectedIndex].value;
    if (_value == "vista") {
       if (correctUrl(idx)) {
        updateFormat(idx);
            var action = '/catalogo/new_resource/' + $("#field-name").val();
            $.ajax({
              async: false,
              url: action,
              type: 'POST',
              data: $("#resourceForm" + idx).serialize(),
              success: function (data) {
                $("#uploadUrl_resType" + idx).attr("disabled", false);
                $("#urlText_resType" + idx).attr("disabled", false);

                $("#resourceForm" + idx)[0].action = '/catalogo/' + $("#field-name").val() + '/resource_edit/' + data;
                $("#removeResourceButton" + idx).attr("href", "javascript:removeExistingResource('/catalogo/" + $("#field-name").val() + "/resource_delete/" + data + "', '" + idx + "');");

                alreadyCreatedResource[idx] = true;
              },
              error: function (data) {
                $("#uploadUrl_resType" + idx).attr("disabled", false);
                $("#urlText_resType" + idx).attr("disabled", false);
                alert("Problemas creando el nuevo recurso"); 
              }
            });
    }}
    else{
      if (correctUrl(idx)) {
        updateFormat(idx);

//      $("#resourceForm" + idx).submit();
        $.ajax({
          async: false,
          url: $("#resourceForm" + idx)[0].action,
          type: 'POST',
          data: $("#resourceForm" + idx).serialize(),
          success: function (data) {
                     $("#uploadUrl_resType" + idx).attr("disabled", false);
                     $("#urlText_resType" + idx).attr("disabled", false);
                   },
          error: function (data) {
                   $("#uploadUrl_resType" + idx).attr("disabled", false);
                   $("#urlText_resType" + idx).attr("disabled", false);
                   alert("Problemas actualizando recurso");
                 }
        });
      } else {
        alert("La URL del recurso no puede dejarse vacía");
      }
    }
      changedResource[idx] = false;
    }
  }
}

function createNewResources() {
  for (var idx = resourceCount; idx <= (resourceCount + MAX_URL_LIST); idx++) {
    if (changedResource[idx]) {
      if (! isBlankResource(idx)) {
        if (! alreadyCreatedResource[idx]) {
          if (correctUrl(idx)) {
            updateFormat(idx);

            var action = '/catalogo/new_resource/' + $("#field-name").val();
            $.ajax({
              async: false,
              url: action,
              type: 'POST',
              data: $("#resourceForm" + idx).serialize(),
              success: function (data) {
                $("#uploadUrl_resType" + idx).attr("disabled", false);
                $("#urlText_resType" + idx).attr("disabled", false);

                $("#resourceForm" + idx)[0].action = '/catalogo/' + $("#field-name").val() + '/resource_edit/' + data;
                $("#removeResourceButton" + idx).attr("href", "javascript:removeExistingResource('/catalogo/" + $("#field-name").val() + "/resource_delete/" + data + "', '" + idx + "');");

                alreadyCreatedResource[idx] = true;
              },
              error: function (data) {
                $("#uploadUrl_resType" + idx).attr("disabled", false);
                $("#urlText_resType" + idx).attr("disabled", false);
                alert("Problemas creando el nuevo recurso"); 
              }
            });
          } else {
            alert("La URL del recurso no puede dejarse vacía");
          }
        } else {
          if ($("#urlText_resType" + idx).val() != "") {
            $.ajax({
              async: false,
              url: $("#resourceForm" + idx)[0].action,
              type: 'POST',
              data: $("#resourceForm" + idx).serialize(),
              success: function (data) {
                         $("#uploadUrl_resType" + idx).attr("disabled", false);
                         $("#urlText_resType" + idx).attr("disabled", false);
                       },
              error: function (data) {
debugger;
                       $("#uploadUrl_resType" + idx).attr("disabled", false);
                       $("#urlText_resType" + idx).attr("disabled", false);
                       alert("Problemas creando el nuevo recurso");
                     }
            });
          } else {
            alert("La URL del recurso no puede dejarse vacía");
          }
        }
      }
      changedResource[idx] = false;
    }
  }
}

function checkMandatoryFields() {
  var result = true;
  if ($("#field-title").val() == "") {
    errorCreating += "Es obligatorio incluir título. ";
    result = false;
  }
  if ($("#field-notes").val() == "") {
    errorCreating += "Es obligatorio incluir descripción. ";
    result = false;
  }

  return result;
}

function confirmRemove(url) {
  showModalDialog('<p class="letraGrande">¿Está seguro que desea borrar el conjunto de datos?</p><ul style="padding:10px;"><li><button onclick="javascript:removeConfirmed(\'' + url + '\');">Aceptar</button><button onclick="javascript:removeCancelled();">Cancelar</button> </li></ul><p>ATENCIÓN, si presiona &quot;Aceptar&quot; el conjunto de datos se borrará y dejará de ser accesible para los usuarios.</p><p>Recuerde que el acceso a los datos públicos es un derecho que tenemos todos los ciudadanos</p>');
}

function removeConfirmed(url) {
  hideModalDialog();
  showPleaseWait();
  $("#metadataEditorForm").attr("action", url);
  $("#metadataEditorForm").submit();
}

function removeCancelled() {
  hideModalDialog();
}

function sendContent(mustContinue) {
  var msg = "¿Está seguro que desea actualizar el conjunto de datos y finalizar la edición?";
  if (mustContinue) {
    msg = "¿Está seguro que desea actualizar el conjunto de datos y seguir editando?";
  }
  var answer = window.confirm(msg);
  if (answer) {
      // TODO: improve these part
      // it is possible to create resources and delete later
    if ((resourceCount == 0) && (isBlankResource(0))) {
      if (! window.confirm("Parece que no ha definido ficheros de datos y debería haber al menos uno. ¿Desea continuar?")) {
        return; 
      }
    }

    if (checkMetadataEditor()) {
      disEnableCheckboxes(true);
      hideBlankElements();
      disEnableAllItemsForm(true);
/*
          updateResources();
          createNewResources();

          showPleaseWait();
          if (mustContinue) {
            $("#metadataEditorForm").attr('target', 'hiddenIframe')
            $.ajax({
              type: 'POST',
              data: $("#metadataEditorForm").serialize(),
              success: function (data) { alert("Conjunto de datos actualizado correctamente. Puede continuar la edición. "); hideModalDialog();},
              error: function (data) { alert("Problemas actualizando el conjunto de datos. Envíe un email a opendata@aragon.es"); hideModalDialog();}
            });
          } else {
            $("#metadataEditorForm").attr('target', '_self');
            $('#metadataEditorForm').submit();
          }
*/

      if (isEditing) {
          // previous dataset => always maintain previous name for same url access
          // unless you are sysadmin
        if (isSysAdmin) {
          var question = "Al modificar el título, cambiará la url de acceso. ¿Desea que se modifique? Si pulsa aceptar, se modificará. Si pulsa cancelar, se mantendrá la anterior";
          if (! window.confirm(question)) {
            alert("Ok, mantenemos la anterior");
            $("#field-name").val($("#field-previous-name").val());
          }
        } else {
          $("#field-name").val($("#field-previous-name").val());
        }
      }

      showPleaseWait();

      $("#metadataEditorForm").attr('target', 'hiddenIframe')
      $.ajax({
        async: false,
        type: 'POST',
        data: $("#metadataEditorForm").serialize(),
        success: function (data) {
                   if (mustContinue) {
                     disEnableAllItemsForm(false);
                     disEnableCheckboxes(false);
                     disEnableTemporalItems(false);
                   }
                 },
        error: function (data) {
                 alert("Problemas actualizando el conjunto de datos. Envíe un email a opendata@aragon.es");
               }
      });
          
      updateResources();
      createNewResources();
      //alert("Conjunto de datos actualizado correctamente. Puede continuar la edición. "); 
      if (! mustContinue) {
        $("#metadataEditorForm").attr('action', '/catalogo/' + $("#field-name").val());
        $("#metadataEditorForm").attr('target', '_top');
        $("#metadataEditorForm").submit();
      } else {
          // we need to update _maxPositon's extras from package after creating/updating resources
        $.ajax({
          url: '/catalogo/api/action/package_show?id=' + $("#field-name").val(),
          async: false,
          type: 'POST',
          dataType: 'json',
          success: function(data) {
                     document.getElementById("extrasMaxPositionZone").innerHTML = "";
                     var count = 1;
                     var strHTML = "";
                     $.each(data['result']['extras'], function(index, element) {
                       var currentKey = element['key'];
                       if (currentKey.indexOf("_maxPosition") != -1) {
                         strHTML += '<input id="extras__4040' + count + '__key" type="hidden" value="' + currentKey + '" name="extras__4040' + count + '__key" autocomplete="off">';
                         strHTML += '<input id="extras__4040' + count + '__value" type="text" placeholder="" value="' + element['value'] + '" name="extras__4040' + count + '__value" autocomplete="off">';
                         count++;
                       }
                     });
                     document.getElementById("extrasMaxPositionZone").innerHTML = strHTML;
                   },
          error: function (data) {
                   alert("Problemas actualizando el conjunto de datos. Envíe un email a opendata@aragon.es");
                 }
        });
      }
      hideModalDialog();
    }
  }
}

function showPleaseWait() {
  showModalDialog('<p class="letraGrande">Cargando...</p> <p class="letraGrande">Espere por favor</p><img src="/public/i/loadingAODiconWhite.gif" width="100">');
}

function showModalDialog(content) {
  var htmlCode ='<div style="z-index: 22222; background-color: #888888; width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; opacity: 0.4;" id="modalDialogDiv"></div>'
    + '<div style="float:right;width:100%;top: 40%;position:fixed;z-index:22222;" id="modalDialogText">'
    + '  <div style="float:left;left:50%;position:relative;width:200px">'
    + '<div style="z-index: 22222; right: 50%; float: right; width: 400px; padding: 20px; opacity: 1 ! important; background-color: #73A5BD; color: rgb(255, 255, 255);">'
    + content
    + '</div>'
    + '  </div></div>';
    
  $(htmlCode).appendTo("body");
}

function hideModalDialog() {
  $("#modalDialogDiv").remove();
  $("#modalDialogText").remove();
}

function loadComboboxesVistas() {
    // strange way of determining is editing, but it works
  if (document.getElementById("autocomplete_eurovoc")) {
    $.ajax({
      url: '/catalogo/cargarVistasUsuario/',
      async: false,
      data:"user=" + currentUser,
      dataType: 'json',
      success: 
        function(data) {
          $.each(data, function(index, element) {
            for (var idx = 0; idx < (resourceCount+10); idx++) {
              if ($("#vistas_value_resType" + idx )) {
                if (element[0] == currentViewResource[idx]) {
                  $("#vistas_value_resType" + idx ).append('<option value="' + element[0] + '" selected>' + element[1] + '</option>');
                } else {
                  $("#vistas_value_resType" + idx ).append('<option value="' + element[0] + '">' + element[1] + '</option>');
                }
              }
            }
          });
          var config  = {
            disable_search: true
          };
          var fOnChgChosen_resource = function onChgChosen_resource() {
            /*limpiarPantalla(this.id.substr("vistas_value_".length));
            cargarVista(false, this.id.substr("vistas_value_".length));*/
          }

          for (var idx = 0; idx < resourceCount; idx++) {
            if ($("#vistas_value_resType" + idx )) {
              $("#vistas_value_resType" + idx ).chosen(config).change(fOnChgChosen_resource);
            }
          }

          for (var idx = resourceCount; idx < (resourceCount+10); idx++) {
            if ($("#vistas_value_resType" + idx )) {
              $("#vistas_value_resType" + idx ).chosen(config).change(fOnChgChosen_resource);
            }
          }
       },
       error: function(jqXHR, textStatus, errorThrown) {
         alert("No se ha podido obtener la lista de vistas a bases de datos");
       }
    });
  }
}

function resetSelect(id){
  try{
    var elem = document.getElementById("vistas_value_"+id);
    elem.selectedIndex=-1;
    elem.value=-1;
    limpiarPantalla(id);
  }catch(err){}
}

function limpiarPantalla(id){
  try{
    document.getElementById("filtro_"+id).value = "";
    document.getElementById("botonesDiv_"+id).innerHTML = "";
    document.getElementById("vistaDiv_"+id).innerHTML = "";
  }catch(err){}
}

function cargarVista(completa,id) {
  var vistaDiv = document.getElementById("vistaDiv_"+id);
  var botonesDiv = document.getElementById("botonesDiv_"+id);

  var self = this;
  var vista = document.getElementById("vistas_value_"+id).value;
  if (vista == -1){
    alert("Debe seleccionar una vista de las disponibles");
  }else{
    try{
      var filtro = document.getElementById("filtro_"+id).value;
    }catch(err){
      var filtro = "";
    }

    $.ajax({
          async: false,
          url:'/catalogo/vista/' + vista,
          data:"filtro=" + filtro + ";completa=" + completa,
          dataType: 'json',
          success: function(data) {

      if (data.length != 0){
        var table = '<table style="width:100%;border: 1px solid black;margin-top:20px;margin-bottom:20px;border-collapse:collapse;">';

        $.each(data, function(index, element){
          table= table + '<tr style="border= 1px solid black;">';
          $.each(element, function(i, item){
            if (index== 0){
              table= table + '<td style="border: 1px solid black; font-weight: bold;">' + item + '</td>';
            }else{
              if (index%2!=0){
                table= table + '<td style="border: 1px solid black; background-color:#76a1b8;">' + item + '</td>';
              }else{
                table= table + '<td style="border:1px solid black;">' + item + '</td>';
              }
            }
          });
          table= table + '</tr>';
        });

        table = table +  '</table>';

        if (completa){
          var win = window.open();
          win.document.open();
          win.document.write(table);
          //win.document.close();
        }else{
          $("#vistaDiv_"+id).removeClass('oculto');
          botonesDiv.innerHTML = '<label style="float:left; margin-top: 4px;" class="field_opt" for="filtro">Filtro:&nbsp;&nbsp;</label>' +
             '<input style="float:left;width:300px;height: 25px;" id="filtro_'+id +'" name="filtro_'+id +'" type="text" class="input-small" value="' + filtro + '"/>' +
             '<input style="float:left;" type="button" onClick="cargarVista(false,\'' + id + '\')" class="recuadroRecto" value="Filtrar" />';
          vistaDiv.innerHTML = table + '<input name="execute" onClick="cargarVista(true,\'' + id + '\')" class="recuadroRecto" value="Ver todos los resultados" />';

        }
      }else{
        vistaDiv.innerHTML = '<div style="clear:both"> </div><span>No se han encontrado resultados</span>';
      }

          },
          error: function(jqXHR, textStatus, errorThrown) {
      //alert("No se ha podido llevar a cabo la consulta");
          }

    });
  }
}

function checkUserInfoRequired() {
  if ($("#field-password-confirm").val() == "") {
    return false;
  }
  if ($("#field-password").val() == "") {
    return false;
  }
  if ($("#field-current-password").val() == "") {
    return false;
  }
  if ($("#field-username-email").val() == "") {
    return false;
  }
  return true;
}
function checkOrganizationInfoRequired() {
  return true;
}

function updateOrganizationInfo() {

  if (checkOrganizationInfoRequired()) {
    showPleaseWait();

    if ($("#field-previous-email").val() != $("#field-username-email").val()) {
      $.ajax({
        async: false,
        url: $("#updateEmailForm")[0].action,
        type: 'POST',
        data: $("#updateEmailForm").serialize(),
        success: function (data) {
                   if (data != 'OK') {
                     alert("Problemas actualizando la información del email de contacto: " + data);
                   }
                 },
        error: function (data) {
                 alert("Problemas actualizando el email de contacto de la organización");
               }
      });
    }


    $.ajax({
       async: false,
       url: $("#updateOrganizationForm")[0].action,
       type: 'POST',
       data: $("#updateOrganizationForm").serialize(),
       success: function (data) {
                  if (data == 'OK') {
                    alert("Actualización completada con éxito");
//                  } else {
  //                  alert("Problemas actualizando la información de la organización: " + data);
                  }

                  hideModalDialog();
                },
       error: function (data) {
                alert("Problemas actualizando la información de la organización");
                hideModalDialog();
              }
    });
  }
}

function updateUserInfo() {
  if (checkUserInfoRequired()) {
    showPleaseWait();
    $("#field-email-for-password").val($("#field-username-email").val());
    $.ajax({
       async: false,
       url: $("#updatePasswordForm")[0].action,
       type: 'POST',
       data: $("#updatePasswordForm").serialize(),
       success: function (data) {
                  if (data == 'OK') {
                    alert("Actualización completada con éxito");
                  } else {
                    alert("Problemas actualizando la información de usuario: " + data);
                  }
                  $("#field-password-confirm").val("");
                  $("#field-password").val("");
                  $("#field-current-password").val("");

                  hideModalDialog();
                },
       error: function (data) {
                alert("Problemas actualizando la información de usuario");
                hideModalDialog();
              }
    });
  } else {
    alert("Debe rellenar todos los campos");
  }
}

function submitTxtQueryOrg() {
  $("#textQueryOrgDataset").val(encodeURI($("#textQueryOrgDataset").val()));
  $("#orgDatasetQueryForm").submit();
}


