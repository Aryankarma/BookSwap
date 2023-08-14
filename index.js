const element = document.querySelector('.wrapTesti');
const blocks = document.querySelector('.testi1');

function scrollNext(){
  element.scrollLeft += blocks.clientWidth;
} 
function scrollPrev(){
  element.scrollLeft -= blocks.clientWidth;
}

