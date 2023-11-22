export{MakeCard}

function MakeCard(cardTitle){

    injectHere.innerHTML = "";

    // build inner portion of the card
    let h5 = document.createElement("h5");
    h5.className= "card-title";
    h5.textContent=cardTitle;
    let p =document.createElement("p");
    p.className = "card-text";
    p.textContent="Some quick example text to build on the card title and make up the bulk of the card's content.";
    let a = document.createElement("a");
    a.href = "https://lms.codestack.co/mod/page/view.php?id=1359";
    a.className="btn btn-primary";
    a.textContent= "Go somewhere"

    //build inner div
    let bodyDiv = document.createElement("div");
    bodyDiv.className="card-body";

    //build out the inner portion
    
    bodyDiv.appendChild(h5);
    bodyDiv.appendChild(p);
    bodyDiv.appendChild(a);

    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src="https://picsum.photos/200";
    img.alt="..."

    let outerDiv = document.createElement("div");
    outerDiv.className="card";
    outerDiv.style = "width:18 rem;";

    //build it
    outerDiv.appendChild(img);
    outerDiv.appendChild(bodyDiv);
    injectHere.appendChild(outerDiv);

    
    


};