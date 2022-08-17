const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      time_btn = document.querySelectorAll("input"),
      button = document.querySelectorAll('input[type="button"]'),
      previous=document.querySelector(".pre-link"),
      next_round=document.querySelector(".nex-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })


    // const timeElapsed = Date.now();
    // const today = new Date(timeElapsed);
    // console.log(today);
    // document.getElementById("date").innerHTML = today;



const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();
console.log(d);



const d1 = new Date();
document.getElementById("date1").innerHTML = d.toDateString();
console.log(d1);



    // js code to appear signup and login form
signUp.addEventListener("click", ( )=>{
    container.classList.add("active");
    
});

login.addEventListener("click", ( )=>{
    container.classList.remove("active");
});




// js code to appear signup and login form
next_round.addEventListener("click", ( )=>{
    container.classList.add("active");
});
previous.addEventListener("click", ( )=>{
    container.classList.remove("active");
});

// function myFunction() {
//   var x = document.getElementById("demo");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
let time;
time_btn.forEach(input => {
    input.addEventListener("click",()=>{
        let clicked_btn = document.getElementsByClassName('css-btn');
        for (let index = 0; index < clicked_btn.length; index++) {
            const element = clicked_btn[index];
            if(element){
            element.classList.remove('css-btn');}
        }
        let book_link = document.getElementById('book');
        book_link.classList.remove('hide-book');
        book_link.classList.add('show-book');
        input.classList.add('css-btn');
        time = input.value;
    })
})

let book_link = document.getElementById('book');
book_link.addEventListener("click",()=>{
    console.log(time);
    document.getElementById("time").innerHTML = time;
})

//Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("input-field button1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

// const DivAllButtons = document.getElementById('All-buttons')

// DivAllButtons.onclick = ({target : clicked_Element }) =>
//   {
//   if (!clicked_Element.matches('button.btn')) return

//   clicked_Element.parentNode
//   .querySelectorAll('button.btn')
//   .forEach( bt =>
//     {
//     bt.classList.toggle( 'active', bt===clicked_Element ) 
//     }); 
//   }