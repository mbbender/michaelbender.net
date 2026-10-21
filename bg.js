(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var c=document.createElement('canvas');c.id='bg';c.setAttribute('aria-hidden','true');document.body.prepend(c);var x=c.getContext('2d'),W,H,cols,drops,fs=16,run=true,t=0,
L=['$ php -v','PHP 8.4.27 (fpm-fcgi)','$ apt upgrade php8.3','session.upload_progress.enabled=0','$ systemctl restart php-fpm','<?php // patched','CVE-2026-109618','CVE-2026-109619'];
function sz(){W=c.width=innerWidth;H=c.height=innerHeight;cols=Math.ceil(W/fs);drops=[];for(var i=0;i<cols;i++)drops.push(Math.random()*-H/fs)}
sz();addEventListener('resize',sz);document.addEventListener('visibilitychange',function(){run=!document.hidden;if(run)requestAnimationFrame(f)});
var last=0;function f(n){if(!run)return;requestAnimationFrame(f);if(n-last<70)return;last=n;t++;x.fillStyle='rgba(10,14,20,0.18)';x.fillRect(0,0,W,H);x.font=fs+'px monospace';
for(var i=0;i<cols;i++){if(i%3)continue;x.fillStyle=i%2?'#3ddc97':'#4fd1e8';x.fillText(Math.random()<.5?'0':'1',i*fs,drops[i]*fs);if(drops[i]*fs>H&&Math.random()>.97)drops[i]=0;drops[i]+=.5}
if(t%40==0){x.fillStyle='#4fd1e8';x.fillText(L[(Math.random()*L.length)|0],Math.random()*(W-300),Math.random()*H)}}
requestAnimationFrame(f)})();
