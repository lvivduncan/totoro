// levus-slider 28-04-2020
{
  // емулюю джейквері
  const $ = document.querySelectorAll.bind(document);

  // усі блоки з картинками
  const items = $('#levus-slider > article');

  // кнопка вліво
  const left = $('#levus-slider-wrapper .left')[0];

  // кнопка вправо
  const right = $('#levus-slider-wrapper .right')[0];

  // тут будемо зберігати усі розміри
  const sizes = [];

  // width
  const width = 1300;

  // заповнюємо масив розмірами
  items.forEach((item, i) => {
    sizes.push(width * (i - 1));
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
      });
    }    
  });

}