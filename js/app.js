// додаємо .scroll до #nav при прокрутці
{document.addEventListener('scroll', _ =>  window.scrollY > 100 ? document.querySelector('#nav').classList = 'scroll' : document.querySelector('#nav').classList = '');}

// mobile-menu
{const e=document.querySelector("#menu-button"),s=document.querySelector("#menu");if(null!==e){const t=document.createElement("span");t.classList.add("close"),s.append(t),e.addEventListener("click",e=>{s.classList.add("show"),document.body.classList.add("hidden")})}s.addEventListener("click",e=>{"close"==e.target.className&&(s.classList.remove("show"),document.body.classList.remove("hidden"))})}

// search
{const e=document.querySelector("#search"),s=document.querySelector("#search-form");if(null!==s){const c=document.createElement("span");c.classList.add("close"),s.append(c),e.addEventListener("click",e=>{document.body.classList.add("hidden"),s.classList.add("show")})}s.addEventListener("click",e=>{"close"==e.target.className&&(s.classList.remove("show"),document.body.classList.remove("hidden"))})}

// levus-slider 21-05-2020
{const e=document.querySelector("#levus-slider");let t=document.querySelectorAll("#levus-slider article");const l=document.querySelectorAll("#levus-slider article div");console.log(l),t.forEach(t=>{const l=t.cloneNode(!0);e.append(l)}),t=document.querySelectorAll("#levus-slider article");const r=document.querySelector("#levus-slider-wrapper .left"),s=document.querySelector("#levus-slider-wrapper .right");let n=window.innerWidth;window.addEventListener("resize",()=>{n=window.innerWidth});let o=1200;o=n>1200?1200:n;const c=[];t.forEach((e,t)=>{c.push(o*(t-2))});let i=0;t.forEach((e,t)=>{e.style.transform=`translateX(${c[t]}px)`,0===c[t]&&(i=2),(c[t]>0||c[t]<0)&&(i=1),(c[t]>=2*o||c[t]<=2*-o)&&(i=0),e.style.zIndex=i,0===c[t]?e.children[0].style.opacity=1:e.children[0].style.opacity=0}),r.addEventListener("click",()=>{const e=c.pop();c.unshift(e),t.forEach((e,t)=>{e.style.transform=`translateX(${c[t]}px)`,0===c[t]&&(i=2),(c[t]>0||c[t]<0)&&(i=1),(c[t]>=2*o||c[t]<=2*-o)&&(i=0),e.style.zIndex=i,0===c[t]?e.children[0].style.opacity=1:e.children[0].style.opacity=0})}),s.addEventListener("click",()=>{const e=c.shift();c.push(e),t.forEach((e,t)=>{e.style.transform=`translateX(${c[t]}px)`,0===c[t]&&(i=2),(c[t]>0||c[t]<0)&&(i=1),(c[t]>=2*o||c[t]<=2*-o)&&(i=0),e.style.zIndex=i,0===c[t]?e.children[0].style.opacity=1:e.children[0].style.opacity=0})}),setInterval(()=>{const e=c.pop();c.unshift(e),t.forEach((e,t)=>{e.style.transform=`translateX(${c[t]}px)`,0===c[t]&&(i=2),(c[t]>0||c[t]<0)&&(i=1),(c[t]>=2*o||c[t]<=2*-o)&&(i=0),e.style.zIndex=i,0===c[t]?e.children[0].style.opacity=1:e.children[0].style.opacity=0})},3500),document.addEventListener("keydown",e=>{if("ArrowLeft"==e.key||"ArrowLeft"==e.code){const e=c.pop();c.unshift(e),t.forEach((e,t)=>{e.style.transform=`translateX(${c[t]}px)`,0===c[t]&&(i=2),(c[t]>0||c[t]<0)&&(i=1),(c[t]>=2*o||c[t]<=2*-o)&&(i=0),e.style.zIndex=i,0===c[t]?e.children[0].style.opacity=1:e.children[0].style.opacity=0})}if("ArrowRight"==e.key||"ArrowRight"==e.code){const e=c.shift();c.push(e),t.forEach((e,t)=>{e.style.transform=`translateX(${c[t]}px)`,0===c[t]&&(i=2),(c[t]>0||c[t]<0)&&(i=1),(c[t]>=2*o||c[t]<=2*-o)&&(i=0),e.style.zIndex=i,0===c[t]?e.children[0].style.opacity=1:e.children[0].style.opacity=0})}})}

// 20-05-2020 levus-scroll
{const e=document.querySelector(".levus-scroll");if(null!=e){let t=e.querySelectorAll(".scroll-item");t.forEach(t=>{const l=t.cloneNode(!0);e.append(l)}),t=e.querySelectorAll(".scroll-item");let l=1;window.addEventListener("resize",move);const o=[];let s=0;t.forEach((e,t)=>o.push(t*l-l)),move();const r=document.querySelector(".levus-scroll-nav .left"),n=document.querySelector(".levus-scroll-nav .right");function move(){e.offsetWidth<400?(l=e.offsetWidth,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=0===o[t]?3:-1===o[t]||1===o[t]?2:0,e.style.zIndex=s})):e.offsetWidth<580?(l=e.offsetWidth/2,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=0===o[t]||1===o[t]||2===o[t]?3:0,e.style.zIndex=s})):e.offsetWidth>579&&(l=e.offsetWidth/3,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=1===o[t]?3:0===o[t]||2===o[t]?2:0,e.style.zIndex=s}))}r.addEventListener("click",()=>{const e=o.pop();o.unshift(e),move()}),n.addEventListener("click",()=>{const e=o.shift();o.push(e),move()})}}
