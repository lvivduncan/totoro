{
  // додаємо .scroll до #nav при прокрутці
  document.addEventListener('scroll', () => {
    if(window.scrollY > 200){
      document.querySelector('#nav').classList = 'scroll';
    } else {
      document.querySelector('#nav').classList = '';
    }
  });

  console.log(window.innerHeight)
}