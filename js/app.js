{
  // додаємо .scroll до #nav при прокрутці
  document.addEventListener('scroll', () => {
    if(window.scrollY > 100){
      document.querySelector('#nav').classList = 'scroll';
    } else {
      document.querySelector('#nav').classList = '';
    }
  });
}

// levus-slider 17-05-2020
{const t=document.querySelectorAll.bind(document),e=t("#levus-slider > div"),s=t("#levus-slider-wrapper .left")[0],r=t("#levus-slider-wrapper .right")[0],n=[];e.forEach((t,e)=>{n.push(1200*(e-1))});let o=0;e.forEach((t,e)=>{t.style.transform=`translateX(${n[e]}px)`,0===n[e]&&(o=2),(n[e]>0||n[e]<0)&&(o=1),(n[e]>=2400||n[e]<=-2400)&&(o=0),t.style.zIndex=o}),s.addEventListener("click",()=>{const t=n.pop();n.unshift(t),e.forEach((t,e)=>{t.style.transform=`translateX(${n[e]}px)`,0===n[e]&&(o=2),(n[e]>0||n[e]<0)&&(o=1),(n[e]>=2400||n[e]<=-2400)&&(o=0),t.style.zIndex=o})}),r.addEventListener("click",()=>{const t=n.shift();n.push(t),e.forEach((t,e)=>{t.style.transform=`translateX(${n[e]}px)`,0===n[e]&&(o=2),(n[e]>0||n[e]<0)&&(o=1),(n[e]>=2400||n[e]<=-2400)&&(o=0),t.style.zIndex=o})}),setInterval(()=>{const t=n.pop();n.unshift(t),e.forEach((t,e)=>{t.style.transform=`translateX(${n[e]}px)`,0===n[e]&&(o=2),(n[e]>0||n[e]<0)&&(o=1),(n[e]>=2400||n[e]<=-2400)&&(o=0),t.style.zIndex=o})},3500),document.addEventListener("keydown",t=>{if("ArrowLeft"==t.key||"ArrowLeft"==t.code){const t=n.pop();n.unshift(t),e.forEach((t,e)=>{t.style.transform=`translateX(${n[e]}px)`,0===n[e]&&(o=2),(n[e]>0||n[e]<0)&&(o=1),(n[e]>=2400||n[e]<=-2400)&&(o=0),t.style.zIndex=o})}if("ArrowRight"==t.key||"ArrowRight"==t.code){const t=n.shift();n.push(t),e.forEach((t,e)=>{t.style.transform=`translateX(${n[e]}px)`,0===n[e]&&(o=2),(n[e]>0||n[e]<0)&&(o=1),(n[e]>=2400||n[e]<=-2400)&&(o=0),t.style.zIndex=o})}})}{const e=document.querySelector("#levus-slider");let t=document.querySelectorAll("#levus-slider article");t.forEach(t=>{const r=t.cloneNode(!0);e.append(r)}),t=document.querySelectorAll("#levus-slider article");const r=document.querySelector("#levus-slider-wrapper .left"),s=document.querySelector("#levus-slider-wrapper .right"),l=1200,n=[];t.forEach((e,t)=>{n.push(l*(t-2))});let o=0;t.forEach((e,t)=>{e.style.transform=`translateX(${n[t]}px)`,0===n[t]&&(o=2),(n[t]>0||n[t]<0)&&(o=1),(n[t]>=2*l||n[t]<=2*-l)&&(o=0),e.style.zIndex=o}),r.addEventListener("click",()=>{const e=n.pop();n.unshift(e),t.forEach((e,t)=>{e.style.transform=`translateX(${n[t]}px)`,0===n[t]&&(o=2),(n[t]>0||n[t]<0)&&(o=1),(n[t]>=2*l||n[t]<=2*-l)&&(o=0),e.style.zIndex=o})}),s.addEventListener("click",()=>{const e=n.shift();n.push(e),t.forEach((e,t)=>{e.style.transform=`translateX(${n[t]}px)`,0===n[t]&&(o=2),(n[t]>0||n[t]<0)&&(o=1),(n[t]>=2*l||n[t]<=2*-l)&&(o=0),e.style.zIndex=o})}),setInterval(()=>{const e=n.pop();n.unshift(e),t.forEach((e,t)=>{e.style.transform=`translateX(${n[t]}px)`,0===n[t]&&(o=2),(n[t]>0||n[t]<0)&&(o=1),(n[t]>=2*l||n[t]<=2*-l)&&(o=0),e.style.zIndex=o})},3500),document.addEventListener("keydown",e=>{if("ArrowLeft"==e.key||"ArrowLeft"==e.code){const e=n.pop();n.unshift(e),t.forEach((e,t)=>{e.style.transform=`translateX(${n[t]}px)`,0===n[t]&&(o=2),(n[t]>0||n[t]<0)&&(o=1),(n[t]>=2*l||n[t]<=2*-l)&&(o=0),e.style.zIndex=o})}if("ArrowRight"==e.key||"ArrowRight"==e.code){const e=n.shift();n.push(e),t.forEach((e,t)=>{e.style.transform=`translateX(${n[t]}px)`,0===n[t]&&(o=2),(n[t]>0||n[t]<0)&&(o=1),(n[t]>=2*l||n[t]<=2*-l)&&(o=0),e.style.zIndex=o})}})}


// 20-05-2020 levus-scroll
{const e=document.querySelector(".levus-scroll");if(null!=e){let t=e.querySelectorAll(".scroll-item");t.forEach(t=>{const l=t.cloneNode(!0);e.append(l)}),t=e.querySelectorAll(".scroll-item");let l=1;window.addEventListener("resize",move);const o=[];let s=0;t.forEach((e,t)=>o.push(t*l-l)),move();const r=document.querySelector(".levus-scroll-nav .left"),n=document.querySelector(".levus-scroll-nav .right");function move(){e.offsetWidth<400?(l=e.offsetWidth,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=1===o[t]?3:0,e.style.zIndex=s})):e.offsetWidth<580?(l=e.offsetWidth/2,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=0===o[t]||1===o[t]||2===o[t]?3:0,e.style.zIndex=s})):e.offsetWidth>579&&(l=e.offsetWidth/3,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=1===o[t]?3:0===o[t]||2===o[t]?2:0,e.style.zIndex=s}))}r.addEventListener("click",()=>{const e=o.pop();o.unshift(e),move()}),n.addEventListener("click",()=>{const e=o.shift();o.push(e),move()})}}