if (self.CavalryLogger) { CavalryLogger.start_js(["\/rMJs"]); }

__d("PixelRatioConst",[],(function a(b,c,d,e,f,g){f.exports={cookieName:"dpr"}}),null);
__d('WebPixelRatio',['Cookie','DOMEventListener','PixelRatioConst','Run'],(function a(b,c,d,e,f,g){var h=c('PixelRatioConst').cookieName,i=false,j=false;function k(){return window.devicePixelRatio||1}function l(){c('Cookie').set(h,String(k()))}function m(){c('Cookie').clear(h)}function n(){if(j)return;j=true;if(k()!==1){l()}else m();}var o={startDetecting:function p(){if(i)return;i=true;if('onpagehide' in window)c('DOMEventListener').add(window,'pagehide',n);c('Run').onBeforeUnload(n,false)},get:function p(){return k()}};f.exports=o}),null);