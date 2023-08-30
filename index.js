const element = document.querySelector('.wrapTesti');
const blocks = document.querySelector('.testi1');
let pageNumber = 1;

document.getElementById("page").innerHTML = pageNumber;  

function scrollNext(){
  element.scrollLeft += blocks.clientWidth;
} 
function scrollPrev(){
  element.scrollLeft -= blocks.clientWidth;
}
function nextBook(){
  updatePageNext();
}
function prevBook(){
  updatePagePrev();
}
function updatePageNext(){
  let totalBook = bookName.length;
  if(pageNumber*4 >= totalBook){
    return booksEnd();
  }
  pageNumber++;
  document.getElementById("page").innerHTML = pageNumber;
  updateBooks(pageNumber);
}
function booksEnd(){
  document.getElementById("showError").style.display = "flex";
  setTimeout(() => {
    document.getElementById("showError").style.display = "none";
  }, 2000);
}

function updatePagePrev(){
  if(pageNumber == 1){
    return 1;
  }
  pageNumber--;
  document.getElementById("page").innerHTML = pageNumber; 
  updateBooks(pageNumber);
}

const bookSrc = ["images/book1.jpg", "images/book2.jpg", "images/book3.jpg", "images/book4.jpg", "images/book5.jpg", "images/book6.jpg", "images/book7.jpg","images/book8.jpg"]

const bookName = ["Sherlock Holmes","The Almanack of Naval Ravikant","The diary of a young girl","Crime Punishment","Frankenstein","Homer","The Prince", "Odessey"]

function updateBooks(pageNumber){
  let start=0;
  if(pageNumber > 1){
    start = start + pageNumber*4 - 4;
  }
  for(let i=start, j=0; i<start+4, j<4; i++, j++){
    if(bookName[i].length > 15){
      bookName[i] = bookName[i].slice(0, 15) + '...';
    }
    document.getElementsByClassName("bookName")[j].innerHTML = bookName[i];
  }
  for(let i=start, j=0; i<start+4, j<4; i++, j++){
    document.getElementsByClassName("book")[j].setAttribute("src", bookSrc[i])
  }
}

updateBooks(pageNumber);

function uploadBook(){
  // document.getElementsByClassName("showWhenClicked").
}