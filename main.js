const cars = document.querySelectorAll(".header-text");
const img = document.querySelector(".header-img");
const text = document.querySelector(".textcontent");





for(let key of cars){
  
    key.addEventListener("click", () =>{
        if( key.textContent == "Ferrari"){
            img.src = "./download__4_-removebg-preview.png";
            text.textContent = "Ingliz tilidan tarjima qilingan-Ferrari S.p.A. Italiyaning Maranello shahrida joylashgan hashamatli sport avtomobillari ishlab chiqaruvchisi.";
            key.classList.add("active-text");
        };
        if ( key.textContent == "Porsh"){
            key.classList.add("active-text");
            img.src = "./download__3_-removebg-preview.png";
            text.textContent = "Currently, we are still obliged to provide the NEDC values, regardless of the type approval process used. The additional reporting of the WLTP values is voluntary until their obligatory use. As far as new cars (which are type approved in accordance with the WLTP) are concerned, the NEDC values will, therefore";
        }
        if( key.textContent == "Mers"){
            key.classList.add("active-text");
            img.src = "./download__6_-removebg-preview.png";
            text.textContent = "Mercedes-Benz avtobus va yuk avtoulovlari brendidir. Mercedes-Benz shtab-kvartirasi Shtutgartda joylashgan. Mercedes-Benz Audi va BMW qatorida „Olmoniya katta uchligiga“ kirib, dunyo boʻylab eng koʻp luks avtomobil sotadigan ishlab chiqaruvchilardan biridir.";
        };
        if(key.textContent == "BMW"){
            key.classList.add("active-text");
            img.src = "./download__5_-removebg-preview.png";
            text.textContent = text.textContent;
        }
        
         
        
        key.classList.remove("active-text");
    });
}


const submitBtn = document.querySelector(".btn-submit");
const inputElements = document.querySelectorAll("[data-input]");
const closeFolder = document.querySelector(".form-img");
const form = document.querySelector(".form-flex");
console.log(inputElements);

submitBtn.addEventListener("click", () =>{
    inputElements.forEach((item) =>{
        item.value = "";
    })
});

function closeForm (item) {
    item.classList.add("close");

}
closeFolder.addEventListener("click", () =>{
    form.classList.remove("open");
    form.classList.add("close");

});

const feedback = document.querySelector(".feedback-btn");
form.classList.add("close");
feedback.addEventListener("click", () =>{
    form.classList.remove("close");
    form.classList.add("open");
});

 const deadline = "2022-02-10";
function getTime(endtime){
    const time = Date.parse(endtime) - Date.parse(new Date()),
     days = Math.floor( time / ( 1000 *60*60*24)),
     hours = Math.floor((time / ( 1000 * 60 *60 )) % 24),
     minutes = Math.floor((time / (1000 * 60)) % 60 ),
     seconds = Math.floor( (time/1000) % 60);
     return {
         time : time,
         days : days,
         hours : hours,
         minutes : minutes,
         seconds : seconds,
     };
    }
function getZero(num){
    if(num>= 0 && num < 10){
        return "0" + num;
    }
    else{
        return num;
    }
}
function SetClock(selector, endtime){
    const timer = document.querySelector(selector);
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");
    const SetTimer = setInterval(UpdateClock, 1000);
    UpdateClock();

    function UpdateClock() {
        const time = getTime(endtime);
        days.textContent = getZero(time.days);
        hours.textContent = getZero(time.hours);
        minutes.textContent = getZero(time.minutes);
        seconds.textContent = getZero(time.seconds);
        if(time.time <= 0){
            clearInterval(SetTimer);
        }
    }

}
SetClock(".timer", deadline);

     
