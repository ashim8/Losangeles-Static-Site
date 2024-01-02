
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.querySelector(".mountain-1").addEventListener('click',() => {
  if(document.querySelector('.schedule-1').classList.contains('d-none')||
  (!document.querySelector('.mountain-1').classList.contains('active'))){
    document.querySelector('.schedule-1').classList.remove('d-none');
    document.querySelector('.schedule-2').classList.add('d-none');
    document.querySelector('.mountain-1').classList.add('active');
    document.querySelector('.mountain-2').classList.remove('active');
  }
})

document.querySelector('.mountain-2').addEventListener('click',() => {
  if(document.querySelector('.schedule-2').classList.contains('d-none')||
  (!document.querySelector('.mountain-2').classList.contains('active'))){
    document.querySelector('.schedule-2').classList.remove('d-none');
    document.querySelector('.schedule-1').classList.add('d-none');
    document.querySelector('.mountain-2').classList.add('active');
    document.querySelector('.mountain-1').classList.remove('active')
  }
})