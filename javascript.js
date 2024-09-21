

//  ======================navbar===================================

const navbar =document.querySelector(".navbar");

window.addEventListener("scroll",fixNav);

function fixNav(){
    if(window.scrollY>navbar.offsetHeight + 150){
        navbar.classList.add("active");
    }
    else{
        navbar.classList.remove("active");
    }
}

//  ======================timer===================================

const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");


function uppdateTime(){
const currentyear=new Date().getFullYear();
const newyear=new Date(`January 1 ${currentyear+1} 00:00:00`);
const currentDate=new Date();
const diff=newyear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}
// console.log(d+" "+h+" "+m+" "+s);



setInterval(uppdateTime,1000);




function day1tab(){

  content1.style.transform ="translatex(0)";    
    content2.style.transform ="translatex(100%)";
    content3.style.transform ="translatex(100%)";
// alert('Button was clicked!');
}



  function day2tab(){

    content1.style.transform ="translatex(100%)";    
    content2.style.transform ="translatex(0)";
    content3.style.transform ="translatex(100%)";
    // alert('Button was clicked!');
  }


  function day3tab(){

    content1.style.transform ="translatex(100%)";    
    content2.style.transform ="translatex(100%)";
    content3.style.transform ="translatex(0)";
// alert('Button was clicked!');
}








// ============================tab========================================


const triggerTabList=document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)
    
    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })



    const triggerEl = document.querySelector('#myTab button[data-bs-target="#day1"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab





