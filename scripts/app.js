import { MakeCard } from './second.js'

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

let injectHere = document.getElementById("injectHere"); 

let userInput = document.getElementById("userInput");

item1.addEventListener('click', function(){
let h1 = document.createElement("h1");
injectHere.appendChild(h1);
h1.textContent="Hello world";  
});

item2.addEventListener('click', function(){
    MakeCard("hello again");
});

item3.addEventListener('click', function(){
    injectHere.innerHTML = "";
});




/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://getbootstrap.com/docs/5.3/components/card/#about" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */


//making a card for item4

item4.addEventListener('click', function(){
    MakeList("marcos");
});


function MakeList(para){
    let liFirst = document.createElement("li");
    liFirst.className="list-group-item";
    liFirst.textContent="An item " +para;
    let liSecond = document.createElement("li");
    liSecond.className="list-group-item";
    liSecond.textContent="A second item " +para;
    let liThird = document.createElement("li");
    liThird.className = "list-group-item";
    liThird.textContent="a third item " +para;
    let lifourth = document.createElement("li");
    lifourth.className="list-group-item";
    lifourth.textContent= "a fourth item "+para;
    let liFifth = document.createElement("li");
    liFifth.className = "list-group-item";
    liFifth.textContent = "and a fifth one " +para;

    let ul = document.createElement("ul");
    ul.className="list-group";


    ul.appendChild(liFirst);
    ul.appendChild(liSecond);
    ul.appendChild(liThird);
    ul.appendChild(lifourth);
    ul.appendChild(liFifth);

    injectHere.appendChild(ul);
 };

{/* <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */}
























//we did a similar thing for making a card. we had to make it from the inside out.
//1. make p tag populate it make a tag populate it make h5 tag populate it
//2. make inner div and appened all that inside
//3.make img populate.
//4. make outter div populate it 
//5. append img and inner div to outter div
//6.appendchild outer div to injecthere








//for the first part of the lecture we created click events that when clicked create a new tag/element. then the element is appended as a child to the div tag. this puts the new h2 tag into the already made div tag. then after it is appened to the div we put text into the h2 tag with .textcontent. so 1.make click function 2. create h2 tag 3. put tag in div with appendchild 4. edit the contects of the h2 tag

userInput.addEventListener('keydown', function(event){
    // event.key senses the key that was pressed when you are in the text box. if the key is === to enter or the same as enter, it will do whats in the if statement
        if(event.key ==='Enter'){
            //userinput.value userinput is the id for the text box. so userinput.value gives us the value or what was inside the text box. 
            let text = userInput.value.toLowerCase();
            
            let h2 = document.createElement("h2");
            injectHere.appendChild(h2);
            h2.textContent = text;
    
    
    
        }
    
    })


// item2.addEventListener('click', function(){
//     let h2 = document.createElement("h2");
//     injectHere.appendChild(h2);
//     h2.textContent= "yoho lmao"
//     h2.className ="frame";
//     h2.style= "color:blue;"
// });

// item2.addEventListener('click', function (){
//     let img = document.createElement("img");
//     injectHere.appendChild(img);
//     img.src = "https://picsum.photos/200"
//     img.style = "width:200; height:200;"
//     img.className ="frame"
// });


// item4.addEventListener('click', function(){
//     let h2 = document.createElement("h2");
//     injectHere.appendChild(h2);
//     h2.textContent = "byebye";
// });

// item3.addEventListener('click', function(){
//     let h3 = document.createElement("h3");
//     injectHere.appendChild(h3);
//     h3.textContent= "what i work now lol"
// });

// item2.addEventListener('click', function(){
// let h4 = document.createElement("h4");
// injectHere.appendChild(h4);
// h4.textContent = "i work 2 haha"
// });