var FreshUrl;FreshUrl=function(){function a(b){var c,d,e,f;if(null==b&&(b=[]),window.history.replaceState){for(this.key=0,this._isReady={},e=0,f=b.length;f>e;e++)d=b[e],"string"==typeof d&&a.libraries[d]?this.wait(a.libraries[d].ready,d):"function"==typeof d?this.wait(d):"undefined"!=typeof console&&null!==console&&console.log("FreshURL: Don't know how to wait for "+d);0===b.length&&this.allReady()&&this.allReadyCallback(),a.updateWistiaIframes(),c=function(b){return"new-wistia-iframe"===b.data?a.updateWistiaIframes():void 0},"undefined"!=typeof window&&null!==window&&window.addEventListener("message",c,!1)}}return a.libraries={googleAnalytics:{present:function(){return window._gaq||window[window.GoogleAnalyticsObject]},ready:function(b){return a.waitsFor(a.libraries.googleAnalytics.present).then(function(){var a;return(a=window._gaq)?a.push(function(){return b()}):(a=window[window.GoogleAnalyticsObject])?a(function(){return b()}):void 0})}},hubspot:{present:function(){return a.scriptFrom(/\/\/js\.hubspot\.com/)},ready:function(b){return a.waitsFor(function(){return window._hsq}).then(function(){return _hsq.push(function(){return b()})})}},clicky:{present:function(){return window.clicky||window.clicky_site_ids||a.scriptFrom(/\/\/static\.getclicky\.com/)},ready:function(b){return a.waitsFor(function(){return window.clicky_obj}).then(b)}},pardot:{present:function(){return window.piAId||window.piCId||a.scriptContains(/\.pardot\.com\/pd\.js/)},ready:function(b){return a.waitsFor(function(){var a,b;return null!=(a=window.pi)?null!=(b=a.tracker)?b.url:void 0:void 0}).then(b)}},simplex:{present:function(){return window.simplex||a.scriptFrom(/\/simplex\.js/)},ready:function(b){return a.waitsFor(function(){return window.simplex}).then(b)}},analyticsJs:{present:function(){var a;return null!=(a=window.analytics)?a.ready:void 0},ready:function(b){return a.waitsFor(function(){var a;return null!=(a=window.analytics)?a.ready:void 0}).then(function(){return analytics.ready(b)})}}},a.originalUrl=window.location.href,a.prototype.wait=function(a,b){return null==b&&(b=this.nextKey()),this._isReady[b]=!1,a(function(a){return function(){return a.ready(b)}}(this))},a.prototype.ready=function(a){return this._isReady[a]=!0,this.allReady()?this.allReadyCallback():void 0},a.prototype.allReady=function(){var a,b,c,d;b=[],d=this._isReady;for(a in d)c=d[a],c||b.push(a);return 0===b.length},a.prototype.allReadyCallback=function(){return window.history.replaceState({},"",a.cleanUrl())},a.cleanUrl=function(){var a;return a=window.location.search.replace(/utm_[^&]+&?/g,"").replace(/(wkey|wemail)[^&]+&?/g,"").replace(/pi_list_email[^&]+&?/g,"").replace(/&$/,"").replace(/^\?$/,""),window.location.pathname+a+window.location.hash},a.poll=function(a,b,c,d){var e,f,g;return null==c&&(c=50),null==d&&(d=5e3),f=null,g=(new Date).getTime(),e=function(){return(new Date).getTime()-g>d?void 0:a()?b():(clearTimeout(f),f=setTimeout(e,c))},f=setTimeout(e,1)},a.waitsFor=function(b){return{then:function(c){return a.poll(b,c)}}},a.prototype.nextKey=function(){return this.key+=1},a.scriptFrom=function(a){var b,c,d,e,f;for(e=document.getElementsByTagName("script"),c=0,d=e.length;d>c;c++)if(b=e[c],null!=(f=b.getAttribute("src"))?f.match(a):void 0)return!0;return!1},a.scriptContains=function(a){var b,c,d,e,f;for(e=document.getElementsByTagName("script"),c=0,d=e.length;d>c;c++)if(b=e[c],null!=(f=b.innerHTML)?f.match(a):void 0)return!0;return!1},a.librariesPresent=function(){var b,c,d,e;d=a.libraries,e=[];for(c in d)b=d[c],b.present()&&e.push(c);return e},a.wistiaIframes=function(){var a,b,c,d,e;for(d=document.getElementsByTagName("iframe"),e=[],b=0,c=d.length;c>b;b++)a=d[b],a.src.match(/\/\/.*\.wistia\..*\//)&&e.push(a);return e},a.updateWistiaIframes=function(){var a,b,c,d,e,f,g;for(c={method:"updateProperties",args:[{params:{pageUrl:this.originalUrl},options:{pageUrl:this.originalUrl}}]},f=this.wistiaIframes(),g=[],d=0,e=f.length;e>d;d++){b=f[d];try{g.push(b.contentWindow.postMessage(c,"*"))}catch(h){a=h}}return g},a}(),"undefined"!=typeof _freshenUrlAfter&&null!==_freshenUrlAfter?window.freshUrl=new FreshUrl(_freshenUrlAfter):window.dataLayer?dataLayer.push(function(){return window.freshUrl=new FreshUrl(FreshUrl.librariesPresent())}):window.freshUrl=new FreshUrl(FreshUrl.librariesPresent());