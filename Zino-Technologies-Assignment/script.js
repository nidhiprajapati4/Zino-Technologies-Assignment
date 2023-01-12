const cards = document.querySelectorAll(".card")
const all_color = document.querySelectorAll(".color"); 
let draggablecard = null;


cards.forEach((card) => {
    card.addEventListener("dragstart",dragStart);
    card.addEventListener("dragend",dragEnd);
});

function dragStart() {
    draggablecard = this;
    setTimeout(() => {
        this.style.display = 'none';
    }, 0);
    console.log("dragStart");
}

function dragEnd() {
    draggablecard = null; 
    setTimeout(()=> {
     this.style.display = "block";   
    },0); 
    console.log("dragEnd"); 
}

all_color.forEach((color) => {
    color.addEventListener("dragover",dragOver);
    color.addEventListener("dragenter",dragEnter);
    color.addEventListener("dragleave",dragLeave);
    color.addEventListener("drop", dragDrop); 
});

function dragOver(e) {
    e.preventDefault(); 
}

function dragEnter() {
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}

function dragLeave() {
    this.style.border="none"
    console.log("dropped"); 
}

function dragDrop() {
    this.appendChild(draggablecard);  
    console.log("dropped"); 
}

//---modal---
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};


/* create card */
const card_submit = document.getElementById('card_submit');

card_submit.addEventListener("click", createcard);

function createcard(){
    const card_div = document.createElement("div");
    const input_val = document.getElementById('card_input').value; 
    const txt = document.createTextNode(input_val);

    card_div.appendChild(txt);
    card_div.classList.add("card");
    card_div.setAttribute("draggable","true"); 

    //span 
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(span_txt); 

    card_div.appendChild(span); 

    no_status.appendChild(card_div); 
    
    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    }); 
    //console.log(card_div); 

    card_div.addEventListener("dragstart",dragStart);
    card_div.addEventListener("dragend",dragEnd);
    document.getElementById("card_input").value = ""; 
    card_form.classList.remove("active");
    overlay.classList.remove("active");
}


const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.style.display = "none";
    });
});

