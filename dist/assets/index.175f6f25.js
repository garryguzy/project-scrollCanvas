(function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))C(y);new MutationObserver(y=>{for(const O of y)if(O.type==="childList")for(const n of O.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&C(n)}).observe(document,{childList:!0,subtree:!0});function u(y){const O={};return y.integrity&&(O.integrity=y.integrity),y.referrerpolicy&&(O.referrerPolicy=y.referrerpolicy),y.crossorigin==="use-credentials"?O.credentials="include":y.crossorigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function C(y){if(y.ep)return;y.ep=!0;const O=u(y);fetch(y.href,O)}})();function oe(z){return new Promise((I,u)=>{function C(){y.complete?I(y):u(y)}var y=new Image;y.onload=()=>C(),y.onerror=()=>u(y),y.src=z})}const se="/assets/00000.dfff03f4.png",le="/assets/00001.941ac7b4.png",ae="/assets/00002.67caeb59.png",ce="/assets/00003.3b70102f.png",ue="/assets/00004.ee7570c4.png",fe="/assets/00005.1b8aa8f0.png",de="/assets/00006.501ea519.png",ge="/assets/00007.ebc56811.png",pe="/assets/00008.863d01ef.png",he="/assets/00009.87f006b1.png",ve="/assets/00010.a517e089.png",me="/assets/00011.64fcdc2c.png",ye="/assets/00012.aaedea4d.png",Se="/assets/00013.20019f69.png",Ee="/assets/00014.023b969d.png",we="/assets/00015.7ffa15a1.png",be="/assets/00016.78e84a08.png",Re="/assets/00017.97623ca4.png",_e="/assets/00018.587773a9.png",Ce="/assets/00019.6ebdb0c2.png";var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie={exports:{}};/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */(function(z,I){(function(u,C){z.exports=C()})(Oe,function(){var u=function(){n.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};u.version="2.0.8",typeof window<"u"&&window.addEventListener("mousewheel",void 0);var C="data-scrollmagic-pin-spacer";u.Controller=function(a){var g="ScrollMagic.Controller",S="FORWARD",R="REVERSE",F="PAUSED",U=y.defaults,r=this,o=n.extend({},U,a),d=[],E=!1,x=0,M=F,A=!0,k=0,c=!0,B,t,l=function(){for(var i in o)U.hasOwnProperty(i)||(f(2,'WARNING: Unknown option "'+i+'"'),delete o[i]);if(o.container=n.get.elements(o.container)[0],!o.container)throw f(1,"ERROR creating object "+g+": No valid scroll container supplied"),g+" init failed.";A=o.container===window||o.container===document.body||!document.body.contains(o.container),A&&(o.container=window),k=L(),o.container.addEventListener("resize",G),o.container.addEventListener("scroll",G);var m=parseInt(o.refreshInterval,10);o.refreshInterval=n.type.Number(m)?m:U.refreshInterval,w(),f(3,"added new "+g+" controller (v"+u.version+")")},w=function(){o.refreshInterval>0&&(t=window.setTimeout(Z,o.refreshInterval))},N=function(){return o.vertical?n.get.scrollTop(o.container):n.get.scrollLeft(o.container)},L=function(){return o.vertical?n.get.height(o.container):n.get.width(o.container)},D=this._setScrollPos=function(i){o.vertical?A?window.scrollTo(n.get.scrollLeft(),i):o.container.scrollTop=i:A?window.scrollTo(i,n.get.scrollTop()):o.container.scrollLeft=i},$=function(){if(c&&E){var i=n.type.Array(E)?E:d.slice(0);E=!1;var m=x;x=r.scrollPos();var P=x-m;P!==0&&(M=P>0?S:R),M===R&&i.reverse(),i.forEach(function(H,q){f(3,"updating Scene "+(q+1)+"/"+i.length+" ("+d.length+" total)"),H.update(!0)}),i.length===0&&o.loglevel>=3&&f(3,"updating 0 Scenes (nothing added to controller)")}},Y=function(){B=n.rAF($)},G=function(i){f(3,"event fired causing an update:",i.type),i.type=="resize"&&(k=L(),M=F),E!==!0&&(E=!0,Y())},Z=function(){if(!A&&k!=L()){var i;try{i=new Event("resize",{bubbles:!1,cancelable:!1})}catch{i=document.createEvent("Event"),i.initEvent("resize",!1,!1)}o.container.dispatchEvent(i)}d.forEach(function(m,P){m.refresh()}),w()},f=this._log=function(i,m){o.loglevel>=i&&(Array.prototype.splice.call(arguments,1,0,"("+g+") ->"),n.log.apply(window,arguments))};this._options=o;var v=function(i){if(i.length<=1)return i;var m=i.slice(0);return m.sort(function(P,H){return P.scrollOffset()>H.scrollOffset()?1:-1}),m};return this.addScene=function(i){if(n.type.Array(i))i.forEach(function(P,H){r.addScene(P)});else if(i instanceof u.Scene){if(i.controller()!==r)i.addTo(r);else if(d.indexOf(i)<0){d.push(i),d=v(d),i.on("shift.controller_sort",function(){d=v(d)});for(var m in o.globalSceneOptions)i[m]&&i[m].call(i,o.globalSceneOptions[m]);f(3,"adding Scene (now "+d.length+" total)")}}else f(1,"ERROR: invalid argument supplied for '.addScene()'");return r},this.removeScene=function(i){if(n.type.Array(i))i.forEach(function(P,H){r.removeScene(P)});else{var m=d.indexOf(i);m>-1&&(i.off("shift.controller_sort"),d.splice(m,1),f(3,"removing Scene (now "+d.length+" left)"),i.remove())}return r},this.updateScene=function(i,m){return n.type.Array(i)?i.forEach(function(P,H){r.updateScene(P,m)}):m?i.update(!0):E!==!0&&i instanceof u.Scene&&(E=E||[],E.indexOf(i)==-1&&E.push(i),E=v(E),Y()),r},this.update=function(i){return G({type:"resize"}),i&&$(),r},this.scrollTo=function(i,m){if(n.type.Number(i))D.call(o.container,i,m);else if(i instanceof u.Scene)i.controller()===r?r.scrollTo(i.scrollOffset(),m):f(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",i);else if(n.type.Function(i))D=i;else{var P=n.get.elements(i)[0];if(P){for(;P.parentNode.hasAttribute(C);)P=P.parentNode;var H=o.vertical?"top":"left",q=n.get.offset(o.container),X=n.get.offset(P);A||(q[H]-=r.scrollPos()),r.scrollTo(X[H]-q[H],m)}else f(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",i)}return r},this.scrollPos=function(i){if(arguments.length)n.type.Function(i)?N=i:f(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");else return N.call(r);return r},this.info=function(i){var m={size:k,vertical:o.vertical,scrollPos:x,scrollDirection:M,container:o.container,isDocument:A};if(arguments.length){if(m[i]!==void 0)return m[i];f(1,'ERROR: option "'+i+'" is not available');return}else return m},this.loglevel=function(i){if(arguments.length)o.loglevel!=i&&(o.loglevel=i);else return o.loglevel;return r},this.enabled=function(i){if(arguments.length)c!=i&&(c=!!i,r.updateScene(d,!0));else return c;return r},this.destroy=function(i){window.clearTimeout(t);for(var m=d.length;m--;)d[m].destroy(i);return o.container.removeEventListener("resize",G),o.container.removeEventListener("scroll",G),n.cAF(B),f(3,"destroyed "+g+" (reset: "+(i?"true":"false")+")"),null},l(),r};var y={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};u.Controller.addOption=function(a,g){y.defaults[a]=g},u.Controller.extend=function(a){var g=this;u.Controller=function(){return g.apply(this,arguments),this.$super=n.extend({},this),a.apply(this,arguments)||this},n.extend(u.Controller,g),u.Controller.prototype=g.prototype,u.Controller.prototype.constructor=u.Controller},u.Scene=function(a){var g="ScrollMagic.Scene",S="BEFORE",R="DURING",F="AFTER",U=O.defaults,r=this,o=n.extend({},U,a),d=S,E=0,x={start:0,end:0},M=0,A=!0,k,c,B=function(){for(var e in o)U.hasOwnProperty(e)||(l(2,'WARNING: Unknown option "'+e+'"'),delete o[e]);for(var s in U)Z(s);Y()},t={};this.on=function(e,s){return n.type.Function(s)?(e=e.trim().split(" "),e.forEach(function(p){var b=p.split("."),h=b[0],_=b[1];h!="*"&&(t[h]||(t[h]=[]),t[h].push({namespace:_||"",callback:s}))})):l(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),r},this.off=function(e,s){return e?(e=e.trim().split(" "),e.forEach(function(p,b){var h=p.split("."),_=h[0],T=h[1]||"",W=_==="*"?Object.keys(t):[_];W.forEach(function(V){for(var j=t[V]||[],K=j.length;K--;){var Q=j[K];Q&&(T===Q.namespace||T==="*")&&(!s||s==Q.callback)&&j.splice(K,1)}j.length||delete t[V]})}),r):(l(1,"ERROR: Invalid event name supplied."),r)},this.trigger=function(e,s){if(e){var p=e.trim().split("."),b=p[0],h=p[1],_=t[b];l(3,"event fired:",b,s?"->":"",s||""),_&&_.forEach(function(T,W){(!h||h===T.namespace)&&T.callback.call(r,new u.Event(b,T.namespace,r,s))})}else l(1,"ERROR: Invalid event name supplied.");return r},r.on("change.internal",function(e){e.what!=="loglevel"&&e.what!=="tweenChanges"&&(e.what==="triggerElement"?L():e.what==="reverse"&&r.update())}).on("shift.internal",function(e){w(),r.update()});var l=this._log=function(e,s){o.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+g+") ->"),n.log.apply(window,arguments))};this.addTo=function(e){return e instanceof u.Controller?c!=e&&(c&&c.removeScene(r),c=e,Y(),N(!0),L(!0),w(),c.info("container").addEventListener("resize",D),e.addScene(r),r.trigger("add",{controller:c}),l(3,"added "+g+" to controller"),r.update()):l(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),r},this.enabled=function(e){if(arguments.length)A!=e&&(A=!!e,r.update(!0));else return A;return r},this.remove=function(){if(c){c.info("container").removeEventListener("resize",D);var e=c;c=void 0,e.removeScene(r),r.trigger("remove"),l(3,"removed "+g+" from controller")}return r},this.destroy=function(e){return r.trigger("destroy",{reset:e}),r.remove(),r.off("*.*"),l(3,"destroyed "+g+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(c)if(e)if(c.enabled()&&A){var s=c.info("scrollPos"),p;o.duration>0?p=(s-x.start)/(x.end-x.start):p=s>=x.start?1:0,r.trigger("update",{startPos:x.start,endPos:x.end,scrollPos:s}),r.progress(p)}else f&&d===R&&i(!0);else c.updateScene(r,!1);return r},this.refresh=function(){return N(),L(),r},this.progress=function(e){if(arguments.length){var s=!1,p=d,b=c?c.info("scrollDirection"):"PAUSED",h=o.reverse||e>=E;if(o.duration===0?(s=E!=e,E=e<1&&h?0:1,d=E===0?S:R):e<0&&d!==S&&h?(E=0,d=S,s=!0):e>=0&&e<1&&h?(E=e,d=R,s=!0):e>=1&&d!==F?(E=1,d=F,s=!0):d===R&&!h&&i(),s){var _={progress:E,state:d,scrollDirection:b},T=d!=p,W=function(V){r.trigger(V,_)};T&&p!==R&&(W("enter"),W(p===S?"start":"end")),W("progress"),T&&d!==R&&(W(d===S?"start":"end"),W("leave"))}return r}else return E};var w=function(){x={start:M+o.offset},c&&o.triggerElement&&(x.start-=c.info("size")*o.triggerHook),x.end=x.start+o.duration},N=function(e){if(k){var s="duration";G(s,k.call(r))&&!e&&(r.trigger("change",{what:s,newval:o[s]}),r.trigger("shift",{reason:s}))}},L=function(e){var s=0,p=o.triggerElement;if(c&&(p||M>0)){if(p)if(p.parentNode){for(var b=c.info(),h=n.get.offset(b.container),_=b.vertical?"top":"left";p.parentNode.hasAttribute(C);)p=p.parentNode;var T=n.get.offset(p);b.isDocument||(h[_]-=c.scrollPos()),s=T[_]-h[_]}else l(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),r.triggerElement(void 0);var W=s!=M;M=s,W&&!e&&r.trigger("shift",{reason:"triggerElementPosition"})}},D=function(e){o.triggerHook>0&&r.trigger("shift",{reason:"containerResize"})},$=n.extend(O.validate,{duration:function(e){if(n.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var s=parseFloat(e)/100;e=function(){return c?c.info("size")*s:0}}if(n.type.Function(e)){k=e;try{e=parseFloat(k.call(r))}catch{e=-1}}if(e=parseFloat(e),!n.type.Number(e)||e<0)throw k?(k=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),Y=function(e){e=arguments.length?[e]:Object.keys($),e.forEach(function(s,p){var b;if($[s])try{b=$[s](o[s])}catch(_){b=U[s];var h=n.type.String(_)?[_]:_;n.type.Array(h)?(h[0]="ERROR: "+h[0],h.unshift(1),l.apply(this,h)):l(1,"ERROR: Problem executing validation callback for option '"+s+"':",_.message)}finally{o[s]=b}})},G=function(e,s){var p=!1,b=o[e];return o[e]!=s&&(o[e]=s,Y(e),p=b!=o[e]),p},Z=function(e){r[e]||(r[e]=function(s){if(arguments.length)e==="duration"&&(k=void 0),G(e,s)&&(r.trigger("change",{what:e,newval:o[e]}),O.shifts.indexOf(e)>-1&&r.trigger("shift",{reason:e}));else return o[e];return r})};this.controller=function(){return c},this.state=function(){return d},this.scrollOffset=function(){return x.start},this.triggerPosition=function(){var e=o.offset;return c&&(o.triggerElement?e+=M:e+=c.info("size")*r.triggerHook()),e};var f,v;r.on("shift.internal",function(e){var s=e.reason==="duration";(d===F&&s||d===R&&o.duration===0)&&i(),s&&m()}).on("progress.internal",function(e){i()}).on("add.internal",function(e){m()}).on("destroy.internal",function(e){r.removePin(e.reset)});var i=function(e){if(f&&c){var s=c.info(),p=v.spacer.firstChild;if(!e&&d===R){n.css(p,"position")!="fixed"&&(n.css(p,{position:"fixed"}),m());var b=n.get.offset(v.spacer,!0),h=o.reverse||o.duration===0?s.scrollPos-x.start:Math.round(E*o.duration*10)/10;b[s.vertical?"top":"left"]+=h,n.css(v.spacer.firstChild,{top:b.top,left:b.left})}else{var _={position:v.inFlow?"relative":"absolute",top:0,left:0},T=n.css(p,"position")!=_.position;v.pushFollowers?o.duration>0&&(d===F&&parseFloat(n.css(v.spacer,"padding-top"))===0||d===S&&parseFloat(n.css(v.spacer,"padding-bottom"))===0)&&(T=!0):_[s.vertical?"top":"left"]=o.duration*E,n.css(p,_),T&&m()}}},m=function(){if(f&&c&&v.inFlow){var e=d===R,s=c.info("vertical"),p=v.spacer.firstChild,b=n.isMarginCollapseType(n.css(v.spacer,"display")),h={};v.relSize.width||v.relSize.autoFullWidth?e?n.css(f,{width:n.get.width(v.spacer)}):n.css(f,{width:"100%"}):(h["min-width"]=n.get.width(s?f:p,!0,!0),h.width=e?h["min-width"]:"auto"),v.relSize.height?e?n.css(f,{height:n.get.height(v.spacer)-(v.pushFollowers?o.duration:0)}):n.css(f,{height:"100%"}):(h["min-height"]=n.get.height(s?p:f,!0,!b),h.height=e?h["min-height"]:"auto"),v.pushFollowers&&(h["padding"+(s?"Top":"Left")]=o.duration*E,h["padding"+(s?"Bottom":"Right")]=o.duration*(1-E)),n.css(v.spacer,h)}},P=function(){c&&f&&d===R&&!c.info("isDocument")&&i()},H=function(){c&&f&&d===R&&((v.relSize.width||v.relSize.autoFullWidth)&&n.get.width(window)!=n.get.width(v.spacer.parentNode)||v.relSize.height&&n.get.height(window)!=n.get.height(v.spacer.parentNode))&&m()},q=function(e){c&&f&&d===R&&!c.info("isDocument")&&(e.preventDefault(),c._setScrollPos(c.info("scrollPos")-((e.wheelDelta||e[c.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||-e.detail*30)))};this.setPin=function(e,s){var p={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},b=s&&s.hasOwnProperty("pushFollowers");if(s=n.extend({},p,s),e=n.get.elements(e)[0],e){if(n.css(e,"position")==="fixed")return l(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),r}else return l(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),r;if(f){if(f===e)return r;r.removePin()}f=e;var h=f.parentNode.style.display,_=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];f.parentNode.style.display="none";var T=n.css(f,"position")!="absolute",W=n.css(f,_.concat(["display"])),V=n.css(f,["width","height"]);f.parentNode.style.display=h,!T&&s.pushFollowers&&(l(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),s.pushFollowers=!1),window.setTimeout(function(){f&&o.duration===0&&b&&s.pushFollowers&&l(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var j=f.parentNode.insertBefore(document.createElement("div"),f),K=n.extend(W,{position:T?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(T||n.extend(K,n.css(f,["width","height"])),n.css(j,K),j.setAttribute(C,""),n.addClass(j,s.spacerClass),v={spacer:j,relSize:{width:V.width.slice(-1)==="%",height:V.height.slice(-1)==="%",autoFullWidth:V.width==="auto"&&T&&n.isMarginCollapseType(W.display)},pushFollowers:s.pushFollowers,inFlow:T},!f.___origStyle){f.___origStyle={};var Q=f.style,re=_.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);re.forEach(function(ee){f.___origStyle[ee]=Q[ee]||""})}return v.relSize.width&&n.css(j,{width:V.width}),v.relSize.height&&n.css(j,{height:V.height}),j.appendChild(f),n.css(f,{position:T?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(v.relSize.width||v.relSize.autoFullWidth)&&n.css(f,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",P),window.addEventListener("resize",P),window.addEventListener("resize",H),f.addEventListener("mousewheel",q),f.addEventListener("DOMMouseScroll",q),l(3,"added pin"),i(),r},this.removePin=function(e){if(f){if(d===R&&i(!0),e||!c){var s=v.spacer.firstChild;if(s.hasAttribute(C)){var p=v.spacer.style,b=["margin","marginLeft","marginRight","marginTop","marginBottom"],h={};b.forEach(function(_){h[_]=p[_]||""}),n.css(s,h)}v.spacer.parentNode.insertBefore(s,v.spacer),v.spacer.parentNode.removeChild(v.spacer),f.parentNode.hasAttribute(C)||(n.css(f,f.___origStyle),delete f.___origStyle)}window.removeEventListener("scroll",P),window.removeEventListener("resize",P),window.removeEventListener("resize",H),f.removeEventListener("mousewheel",q),f.removeEventListener("DOMMouseScroll",q),f=void 0,l(3,"removed pin (reset: "+(e?"true":"false")+")")}return r};var X,J=[];return r.on("destroy.internal",function(e){r.removeClassToggle(e.reset)}),this.setClassToggle=function(e,s){var p=n.get.elements(e);return p.length===0||!n.type.String(s)?(l(1,"ERROR calling method 'setClassToggle()': Invalid "+(p.length===0?"element":"classes")+" supplied."),r):(J.length>0&&r.removeClassToggle(),X=s,J=p,r.on("enter.internal_class leave.internal_class",function(b){var h=b.type==="enter"?n.addClass:n.removeClass;J.forEach(function(_,T){h(_,X)})}),r)},this.removeClassToggle=function(e){return e&&J.forEach(function(s,p){n.removeClass(s,X)}),r.off("start.internal_class end.internal_class"),X=void 0,J=[],r},B(),r};var O={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(a){if(a=parseFloat(a),!n.type.Number(a))throw['Invalid value for option "offset":',a];return a},triggerElement:function(a){if(a=a||void 0,a){var g=n.get.elements(a)[0];if(g&&g.parentNode)a=g;else throw['Element defined in option "triggerElement" was not found:',a]}return a},triggerHook:function(a){var g={onCenter:.5,onEnter:1,onLeave:0};if(n.type.Number(a))a=Math.max(0,Math.min(parseFloat(a),1));else if(a in g)a=g[a];else throw['Invalid value for option "triggerHook": ',a];return a},reverse:function(a){return!!a},loglevel:function(a){if(a=parseInt(a),!n.type.Number(a)||a<0||a>3)throw['Invalid value for option "loglevel":',a];return a}},shifts:["duration","offset","triggerHook"]};u.Scene.addOption=function(a,g,S,R){a in O.defaults?u._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+a+"', because it already exists."):(O.defaults[a]=g,O.validate[a]=S,R&&O.shifts.push(a))},u.Scene.extend=function(a){var g=this;u.Scene=function(){return g.apply(this,arguments),this.$super=n.extend({},this),a.apply(this,arguments)||this},n.extend(u.Scene,g),u.Scene.prototype=g.prototype,u.Scene.prototype.constructor=u.Scene},u.Event=function(a,g,S,R){R=R||{};for(var F in R)this[F]=R[F];return this.type=a,this.target=this.currentTarget=S,this.namespace=g||"",this.timeStamp=this.timestamp=Date.now(),this};var n=u._util=function(a){var g={},S,R=function(t){return parseFloat(t)||0},F=function(t){return t.currentStyle?t.currentStyle:a.getComputedStyle(t)},U=function(t,l,w,N){if(l=l===document?a:l,l===a)N=!1;else if(!c.DomElement(l))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var L=(w?l["offset"+t]||l["outer"+t]:l["client"+t]||l["inner"+t])||0;if(w&&N){var D=F(l);L+=t==="Height"?R(D.marginTop)+R(D.marginBottom):R(D.marginLeft)+R(D.marginRight)}return L},r=function(t){return t.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(l){return l[1].toUpperCase()})};g.extend=function(t){for(t=t||{},S=1;S<arguments.length;S++)if(!!arguments[S])for(var l in arguments[S])arguments[S].hasOwnProperty(l)&&(t[l]=arguments[S][l]);return t},g.isMarginCollapseType=function(t){return["block","flex","list-item","table","-webkit-box"].indexOf(t)>-1};var o=0,d=["ms","moz","webkit","o"],E=a.requestAnimationFrame,x=a.cancelAnimationFrame;for(S=0;!E&&S<d.length;++S)E=a[d[S]+"RequestAnimationFrame"],x=a[d[S]+"CancelAnimationFrame"]||a[d[S]+"CancelRequestAnimationFrame"];E||(E=function(t){var l=new Date().getTime(),w=Math.max(0,16-(l-o)),N=a.setTimeout(function(){t(l+w)},w);return o=l+w,N}),x||(x=function(t){a.clearTimeout(t)}),g.rAF=E.bind(a),g.cAF=x.bind(a);var M=["error","warn","log"],A=a.console||{};for(A.log=A.log||function(){},S=0;S<M.length;S++){var k=M[S];A[k]||(A[k]=A.log)}g.log=function(t){(t>M.length||t<=0)&&(t=M.length);var l=new Date,w=("0"+l.getHours()).slice(-2)+":"+("0"+l.getMinutes()).slice(-2)+":"+("0"+l.getSeconds()).slice(-2)+":"+("00"+l.getMilliseconds()).slice(-3),N=M[t-1],L=Array.prototype.splice.call(arguments,1),D=Function.prototype.bind.call(A[N],A);L.unshift(w),D.apply(A,L)};var c=g.type=function(t){return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};c.String=function(t){return c(t)==="string"},c.Function=function(t){return c(t)==="function"},c.Array=function(t){return Array.isArray(t)},c.Number=function(t){return!c.Array(t)&&t-parseFloat(t)+1>=0},c.DomElement=function(t){return typeof HTMLElement=="object"||typeof HTMLElement=="function"?t instanceof HTMLElement||t instanceof SVGElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"};var B=g.get={};return B.elements=function(t){var l=[];if(c.String(t))try{t=document.querySelectorAll(t)}catch{return l}if(c(t)==="nodelist"||c.Array(t)||t instanceof NodeList)for(var w=0,N=l.length=t.length;w<N;w++){var L=t[w];l[w]=c.DomElement(L)?L:B.elements(L)}else(c.DomElement(t)||t===document||t===a)&&(l=[t]);return l},B.scrollTop=function(t){return t&&typeof t.scrollTop=="number"?t.scrollTop:a.pageYOffset||0},B.scrollLeft=function(t){return t&&typeof t.scrollLeft=="number"?t.scrollLeft:a.pageXOffset||0},B.width=function(t,l,w){return U("width",t,l,w)},B.height=function(t,l,w){return U("height",t,l,w)},B.offset=function(t,l){var w={top:0,left:0};if(t&&t.getBoundingClientRect){var N=t.getBoundingClientRect();w.top=N.top,w.left=N.left,l||(w.top+=B.scrollTop(),w.left+=B.scrollLeft())}return w},g.addClass=function(t,l){l&&(t.classList?t.classList.add(l):t.className+=" "+l)},g.removeClass=function(t,l){l&&(t.classList?t.classList.remove(l):t.className=t.className.replace(new RegExp("(^|\\b)"+l.split(" ").join("|")+"(\\b|$)","gi")," "))},g.css=function(t,l){if(c.String(l))return F(t)[r(l)];if(c.Array(l)){var w={},N=F(t);return l.forEach(function($,Y){w[$]=N[r($)]}),w}else for(var L in l){var D=l[L];D==parseFloat(D)&&(D+="px"),t.style[r(L)]=D}},g}(window||{});return u.Scene.prototype.addIndicators=function(){return u._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},u.Scene.prototype.removeIndicators=function(){return u._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},u.Scene.prototype.setTween=function(){return u._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},u.Scene.prototype.removeTween=function(){return u._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},u.Scene.prototype.setVelocity=function(){return u._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},u.Scene.prototype.removeVelocity=function(){return u._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},u})})(ie);const te=ie.exports,Te=async z=>{const I=[];for(let u of z){const C=await oe(u);I.push(C)}return I},ne=async({canvas:z,img:I})=>{const u=z.getContext("2d");if(u){const C=z.scrollWidth,y=z.scrollHeight;u.clearRect(0,0,C*2,y*2),u.drawImage(I,0,0,C*2,y*2)}},xe=({container:z,width:I=z.scrollWidth,height:u=z.scrollHeight})=>{const C="scrollCanvas";return z.innerHTML='<canvas id="'+C+'" width="'+I*2+'" height="'+u*2+'" style="pointer-events:none;width:'+I+"px;height:"+u+'px;"></canvas>',document.getElementById(C)},Pe=async({container:z,startPos:I=0,endPos:u=500})=>{const C=new te.Controller,y=xe({container:z}),O=[se,le,ae,ce,ue,fe,de,ge,pe,he,ve,me,ye,Se,Ee,we,be,Re,_e,Ce];let n=0;const a=await Te(O);ne({canvas:y,img:a[n]});var g=new te.Scene({duration:5e3}).addTo(C);g.on("update",function(S){console.log("Scene updated.",S);const R=S.scrollPos,F=Ae({total:O.length,startPos:I,endPos:u,pos:R,current:n});F!==n&&(ne({canvas:y,img:a[F]}),n=F,console.log("index",F))})},Ae=({total:z,startPos:I,endPos:u,pos:C,current:y})=>C<=u&&C>=I?Math.round((z-1)/(u-I)*C):y;window.initScrollMagic=Pe;