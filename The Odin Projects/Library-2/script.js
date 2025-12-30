// document.body.addEventListener("DOM")

const cont=document.querySelector("#container")
const addbtn=document.querySelector(".addbtn")
const dialog=document.querySelector("dialog")
const first = document.getElementById("first");
const second = document.getElementById("second");
const addbookform=document.querySelector("form")
const closebtn=document.querySelector("#closebtn")
const done=document.querySelector("#btn-popup")
const ititle=document.querySelector("#title")
const iauthor=document.querySelector("#author")
const ipages=document.querySelector("#pages")
const istatus=document.querySelector("#istatus")
const emptymessage=document.querySelector("#emptymessage")
const togglebtn=document.querySelector(".togglebtn")

const myLibrary=[];
let showFirst = true;

first.classList.add("active");

setInterval(() => {
  showFirst = !showFirst;

  first.classList.toggle("active", showFirst);
  second.classList.toggle("active", !showFirst);
}, 3000);

// dialog.style.display="none"
Book.prototype.toggleread=function(){
this.read=!this.read
console.log("changed")
displaybooks()
}
function Book(title,author,page,rstatus){
    this.id=crypto.randomUUID(),
    this.title=title,
    this.author=author,
    this.pages=page,
    this.read=rstatus
}
 
function addbook(title,author,pages,status){
    const book = new Book(title,author,pages,status)
    myLibrary.push(book)
    displaybooks()
}
addbtn.addEventListener("click",()=>{
dialog.showModal()
document.body.style.background="rgba(0,0,0,0.4)"
})
closebtn.addEventListener("click",()=>{
dialog.close()
document.body.style.background="rgba(0,0,0,0)"
})
addbookform.addEventListener("submit",(e)=>{
e.preventDefault()
const title=ititle.value
const author=iauthor.value
const pages=ipages.value
 let rstatus=false;
if(istatus.checked){
    rstatus=true
}
console.log(rstatus)
addbook(title,author,pages,rstatus)
addbookform.reset()
dialog.close()
document.body.style.background="rgba(0,0,0,0)"
})


function displaybooks(){
      console.log(myLibrary)
    cont.innerHTML=""
   
  if (myLibrary.length === 0) {
    cont.appendChild(emptymessage);
    emptymessage.style.display = "inline-block";
    return;
  }

  emptymessage.style.display = "none";
         myLibrary.forEach(book => {
            let rstatusline;

    const bookcard=document.createElement("div")
    bookcard.dataset.id=book.id
    bookcard.classList.remove("read","notread")
       bookcard.classList.add("card")
       if (book.read){
        bookcard.classList.add("read")
        rstatusline="Have Read it."
       }  
       else{
        bookcard.classList.add("notread")
        rstatusline="Have not Read it."
       }
bookcard.setAttribute("tabindex", "0")
        bookcard.innerHTML=
    `
    <div id="cardtop">
    <p id="title-p">${book.title}</p>
</div>
<div class="carea">
      <p class="Author-p">Written by: ${book.author}</p>
        <p class="pages-p">Number of pages: ${book.pages}</p>
          <p id="status-p">${rstatusline}</p>
</div>

<div class="cardbottom"><i class="fa-regular fa-trash-can removebtn"></i><button class="togglebtn"><i class="fa-regular fa-eye"></i><i class="fa-regular fa-eye-slash"></i></button>
</div>
    
    
    `



 

    cont.append(bookcard)
    const titlep = bookcard.querySelector("#title-p");
console.log({
  text: title.textContent,
  scrollWidth: title.scrollWidth,
  clientWidth: title.clientWidth
});
if (titlep.scrollWidth > titlep.clientWidth) {
  titlep.classList.add("overflowing");
}
})

};
cont.addEventListener("click",(e)=>{
    const bcard=e.target.closest(".card")
if(!bcard){
    return
}
const bookid=bcard.dataset.id
const book=myLibrary.find(b=>b.id===bookid)
if(e.target.classList.contains("fa-trash-can")){
    removebook(bookid)
}
// const lllll=
if (e.target.closest(".togglebtn")){
book.toggleread()
}
})

function removebook(bookid){
    const index=myLibrary.findIndex(book=>book.id===bookid)
    if(index!==-1){
        myLibrary.splice(index,1)
        displaybooks()
       }   
        // displaybooks()
       console.log("good hogya")
}
addbook("The Quran","Allah",565,true)
    addbook("Gone Girl","Gillian Flynn",145,false)
    addbook("Of Mice and Men","John Steinbeck",199,false)
    addbook("The Kite Runner", "Khaled Hossaini",324,false)
    addbook("Bang-e-Dara","Allama Iqbal",120,false)
    addbook("To kill a mockingbird","Harper Lee",281,false)
    
