// додаємо .scroll до #nav при прокрутці
{document.addEventListener('scroll', _ =>  window.scrollY > 100 ? document.querySelector('#nav').classList = 'scroll' : document.querySelector('#nav').classList = '');}

// mobile-menu
{const e=document.querySelector("#menu-button"),s=document.querySelector("#menu");if(null!==e){const t=document.createElement("span");t.classList.add("close"),s.append(t),e.addEventListener("click",e=>{s.classList.add("show"),document.body.classList.add("hidden")})}s.addEventListener("click",e=>{"close"==e.target.className&&(s.classList.remove("show"),document.body.classList.remove("hidden"))})}

// search
{const e=document.querySelector("#search"),s=document.querySelector("#search-form");if(null!==s){const c=document.createElement("span");c.classList.add("close"),s.append(c),e.addEventListener("click",e=>{document.body.classList.add("hidden"),s.classList.add("show")})}s.addEventListener("click",e=>{"close"==e.target.className&&(s.classList.remove("show"),document.body.classList.remove("hidden"))})}


// levus-slider 21-05-2020
{
  // основна обгортка
  const slider = document.querySelector('#levus-slider');

  // усі блоки з картинками
  let items = document.querySelectorAll('#levus-slider article');

  // текст на слайді
  const divs = document.querySelectorAll('#levus-slider article div');

  console.log(divs)

  // робимо клони
  items.forEach(item => {
    const clone = item.cloneNode(true);
    slider.append(clone);
  });

  // і знову отримуємо усі слайди (з клонованими)
  items = document.querySelectorAll('#levus-slider article');

  // кнопка вліво
  const left = document.querySelector('#levus-slider-wrapper .left');

  // кнопка вправо
  const right = document.querySelector('#levus-slider-wrapper .right');

  // ширина вікна
  let viewport = window.innerWidth;
  
  window.addEventListener('resize', () => {
    viewport = window.innerWidth;
  });

  // ширина слайда
  let width = 1200;

  if(viewport > 1200) width = 1200;
  else width = viewport;

  // тут будемо зберігати усі розміри
  const sizes = [];

  // заповнюємо масив розмірами
  items.forEach((item, i) => {
    sizes.push(width * (i - 2));
  });

  // z-index
  let num = 0;

  // присвоюємо всім елементам конкретне значення зсуву
  items.forEach((item, i) => {
    item.style.transform = `translateX(${sizes[i]}px)`;

    if(sizes[i] === 0) num = 2;
    if(sizes[i] > 0 || sizes[i] < 0) num = 1;
    if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
    item.style.zIndex = num;

    if(sizes[i] === 0) item.children[0].style.opacity = 1;
    else item.children[0].style.opacity = 0;
  });

  // гортаємо вліво
  left.addEventListener('click', () => {
    const element = sizes.pop();
    sizes.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if(sizes[i] === 0) num = 2;
      if(sizes[i] > 0 || sizes[i] < 0) num = 1;
      if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
      item.style.zIndex = num;

      if(sizes[i] === 0) item.children[0].style.opacity = 1;
      else item.children[0].style.opacity = 0;
    });

  });

  // гортаємо вправо
  right.addEventListener('click', () => {
    const element = sizes.shift();
    sizes.push(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if(sizes[i] === 0) num = 2;
      if(sizes[i] > 0 || sizes[i] < 0) num = 1;
      if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
      item.style.zIndex = num;

      if(sizes[i] === 0) item.children[0].style.opacity = 1;
      else item.children[0].style.opacity = 0;
    });
  });
  
  // autoscroll
  setInterval( () => {
    const element = sizes.pop();
    sizes.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if(sizes[i] === 0) num = 2;
      if(sizes[i] > 0 || sizes[i] < 0) num = 1;
      if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
      item.style.zIndex = num;

      if(sizes[i] === 0) item.children[0].style.opacity = 1;
      else item.children[0].style.opacity = 0;
    });
  }, 3500);

  // keyboard 
  document.addEventListener('keydown', e => {
    if(e.key == "ArrowLeft" || e.code == "ArrowLeft"){
      const element = sizes.pop();
      sizes.unshift(element);
  
      items.forEach((item, i) => {
        item.style.transform = `translateX(${sizes[i]}px)`;
  
        if(sizes[i] === 0) num = 2;
        if(sizes[i] > 0 || sizes[i] < 0) num = 1;
        if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
        item.style.zIndex = num;

        if(sizes[i] === 0) item.children[0].style.opacity = 1;
        else item.children[0].style.opacity = 0;
      });
    }
    if(e.key == "ArrowRight" || e.code == "ArrowRight"){
      const element = sizes.shift();
      sizes.push(element);
  
      items.forEach((item, i) => {
        item.style.transform = `translateX(${sizes[i]}px)`;
  
        if(sizes[i] === 0) num = 2;
        if(sizes[i] > 0 || sizes[i] < 0) num = 1;
        if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
        item.style.zIndex = num;

        if(sizes[i] === 0) item.children[0].style.opacity = 1;
        else item.children[0].style.opacity = 0;
      });
    }    
  });
}

// 20-05-2020 levus-scroll
{const e=document.querySelector(".levus-scroll");if(null!=e){let t=e.querySelectorAll(".scroll-item");t.forEach(t=>{const l=t.cloneNode(!0);e.append(l)}),t=e.querySelectorAll(".scroll-item");let l=1;window.addEventListener("resize",move);const o=[];let s=0;t.forEach((e,t)=>o.push(t*l-l)),move();const r=document.querySelector(".levus-scroll-nav .left"),n=document.querySelector(".levus-scroll-nav .right");function move(){e.offsetWidth<400?(l=e.offsetWidth,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=0===o[t]?3:-1===o[t]||1===o[t]?2:0,e.style.zIndex=s})):e.offsetWidth<580?(l=e.offsetWidth/2,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=0===o[t]||1===o[t]||2===o[t]?3:0,e.style.zIndex=s})):e.offsetWidth>579&&(l=e.offsetWidth/3,t.forEach((e,t)=>{e.style.width=`${l}px`,e.style.transform=`translateX(${o[t]*l}px)`,s=1===o[t]?3:0===o[t]||2===o[t]?2:0,e.style.zIndex=s}))}r.addEventListener("click",()=>{const e=o.pop();o.unshift(e),move()}),n.addEventListener("click",()=>{const e=o.shift();o.push(e),move()})}}
