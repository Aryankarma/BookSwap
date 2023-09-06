const element = document.querySelector('.wrapTesti');
const blocks = document.querySelector('.testi1');
let pageNumber = 1;

function takeInput(){
  document.getElementById("imageInput").click();
}

function editBtm(){
  var element1 = document.querySelector(".selectEdit");
  var element2 = document.querySelector(".selectClose");
  var section1 = document.querySelector("#about1");
  var section2 = document.querySelector("#about2");

  // showing details
  if(section2.classList.contains("hide")){
    section1.classList.add("hide");
    section2.classList.remove("hide");
    element1.classList.add("hide");
    element2.classList.remove("hide");
  }else{
    section1.classList.remove("hide");
    section2.classList.add("hide");  
    element1.classList.remove("hide");
    element2.classList.add("hide");
  }

}
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
function uploadSuccess(){
  document.getElementById("showSuccess").style.display = "flex";
  setTimeout(() => {
    document.getElementById("showSuccess").style.display = "none";
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

function uploadBook(num){
  // document.getElementsByClassName("showWhenClicked").classList.remove("hide");
  // document.getElementsByClassName("hideWhenClicked").classList.add("hide");
  const element1 = document.getElementsByClassName("hideWhenClicked")[0];
  const element2 = document.getElementsByClassName("showWhenClicked")[0];
  // element1.classList.add("hide");
  // element2.classList.remove("hide");

  const currentClass1 = element1.classList.contains("hide");

  // If element1 has the "hide" class, remove it
  if (currentClass1) {
    element1.classList.remove("hide");
  } else {
  // Otherwise, add the "hide" class to element1
    element1.classList.add("hide");
  }
  // Check the current class of element2
  const currentClass2 = element2.classList.contains("hide");
  // If element2 has the "hide" class, remove it
  if (currentClass2) {
    element2.classList.remove("hide");
  } else {
  // Otherwise, add the "hide" class to element2
    element2.classList.add("hide");
  }
}

function uploadBook2(){
  const element1 = document.getElementsByClassName("hideWhenClicked")[0];
  const element2 = document.getElementsByClassName("showWhenClicked")[0];
  const currentClass1 = element1.classList.contains("hide");

  if (currentClass1) {
    element1.classList.remove("hide");
    document.querySelector(".bookAdd").innerHTML = "Add new book";
  } else {
    element1.classList.add("hide");
  }
  
  const currentClass2 = element2.classList.contains("hide");
  if (currentClass2) {
    element2.classList.remove("hide");
    document.querySelector(".bookAdd").innerHTML = "SAVE";
  } else {
    element2.classList.add("hide");
  }
}