//removing tag mai
const element = document.getElementById("main");
element.remove("main");
const newHeader = document.createElement("h1");
//creating h1 id
newHeader.id= "victory"
//creating innerHtml inside h1
newHeader.innerHTML = "YOUR-NAME is the champion" 

/*main.remove();
let newHeader=document.createElement("h1");
newHeader.id="victory"
newHeader.innerHTML="YOUR-NAME is the champion"*/