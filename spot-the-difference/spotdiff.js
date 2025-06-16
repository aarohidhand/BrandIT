let img1diff1=document.querySelector("#img1diff1")
let img1diff2=document.querySelector("#img1diff2")
let img1diff3=document.querySelector("#img1diff3")
let img1diff4=document.querySelector("#img1diff4")
let img1diff5=document.querySelector("#img1diff5")
let img1diff6=document.querySelector("#img1diff6")
let img1diff7=document.querySelector("#img1diff7")
let img1diff8=document.querySelector("#img1diff8")

let img2diff1=document.querySelector("#img2diff1")
let img2diff2=document.querySelector("#img2diff2")
let img2diff3=document.querySelector("#img2diff3")
let img2diff4=document.querySelector("#img2diff4")
let img2diff5=document.querySelector("#img2diff5")
let img2diff6=document.querySelector("#img2diff6")
let img2diff7=document.querySelector("#img2diff7")
let img2diff8=document.querySelector("#img2diff8")

let head = document.querySelector('.heading')
let game = document.querySelector('.game')
let winmsg = document.querySelector('.winmsg')


let diff1=0 , diff2=0 , diff3=0 , diff4=0 , diff5=0 , diff6=0 , diff7=0 , diff8=0

function completed(){
    head.style.display="none"
    game.style.display="none"
    winmsg.style.display="flex"
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });      
}
function iscom(){
    if(diff1==1 && diff2==1 && diff3==1 && diff4==1 && diff5==1 && diff6==1 && diff7==1 && diff8==1 ){
        return true;
    }
}

img1diff1.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff1.style.borderColor="white"
    img2diff1.style.borderColor="white"
    diff1=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img1diff2.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff2.style.borderColor="white"
    img2diff2.style.borderColor="white"
    diff2=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img1diff3.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff3.style.borderColor="white"
    img2diff3.style.borderColor="white"
    diff3=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img1diff4.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff4.style.borderColor="white"
    img2diff4.style.borderColor="white"
    diff4=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img1diff5.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff5.style.borderColor="white"
    img2diff5.style.borderColor="white"
    diff5=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img1diff6.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff6.style.borderColor="white"
    img2diff6.style.borderColor="white"
    diff6=1
    if(iscom() == true){
        console.log("completed")
        completed();

    }
    
})
img1diff7.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff7.style.borderColor="white"
    img2diff7.style.borderColor="white"
    diff7=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img1diff8.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff8.style.borderColor="white"
    img2diff8.style.borderColor="white"
    diff8=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff1.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff1.style.borderColor="white"
    img2diff1.style.borderColor="white"
    diff1=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff2.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff2.style.borderColor="white"
    img2diff2.style.borderColor="white"
    diff2=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff3.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff3.style.borderColor="white"
    img2diff3.style.borderColor="white"
    diff3=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff4.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff4.style.borderColor="white"
    img2diff4.style.borderColor="white"
    diff4=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff5.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff5.style.borderColor="white"
    img2diff5.style.borderColor="white"
    diff5=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff6.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff6.style.borderColor="white"
    img2diff6.style.borderColor="white"
    diff6=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff7.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff7.style.borderColor="white"
    img2diff7.style.borderColor="white"
    diff7=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})
img2diff8.addEventListener("click" , ()=>{
    console.log("clicked")
    img1diff8.style.borderColor="white"
    img2diff8.style.borderColor="white"
    diff8=1
    if(iscom() == true){
        console.log("completed")
        completed();
    }
    
})